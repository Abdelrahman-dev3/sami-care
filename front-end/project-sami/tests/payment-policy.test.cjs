const { test } = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const vm = require('node:vm')
const path = require('node:path')
const context = vm.createContext({})
vm.runInContext(fs.readFileSync(path.join(__dirname, '../public/payment-policy.js'), 'utf8'), context)
const policy = context.SamiPaymentPolicy

test('arrival payment stays disabled even with sufficient deposit', () => {
  assert.equal(policy.canPay({ pay: 'cod', walletBalance: 29 }, 100), false)
  assert.equal(policy.canPay({ pay: 'cod', walletBalance: 30 }, 100), false)
  assert.equal(policy.canPay({ pay: 'cod', walletBalance: 100, useWallet: true, walletAmount: 10 }, 100), false)
})

test('partial rewards do not enable online payment', () => {
  const state = { pay: 'urpay', walletBalance: 50, useWallet: true, walletAmount: 40, loyaltyPoints: 20, useLoyalty: true, loyaltyPointsUsed: 10, pointValue: 0.5 }
  assert.throws(() => policy.payment(state, 100))
  assert.equal(policy.rewards(state, 100).payable, 55)
  assert.equal(policy.canPay({ ...state, pay: 'card' }, 100), false)
})

test('full reward coverage cannot bypass disabled payments', () => {
  assert.throws(() => policy.payment({ pay: null, walletBalance: 100, useWallet: true, walletAmount: 999 }, 100))
  const parts = policy.rewards({ useLoyalty: true, loyaltyPoints: 100, loyaltyPointsUsed: 999, pointValue: 0.5 }, 10)
  assert.equal(parts.points, 20)
  assert.equal(parts.payable, 0)
})

test('unavailable or stale methods cannot be submitted', () => {
  for (const pay of ['mada', 'tabby', 'apple', 'wallet', 'visa', 'cash', 'card', null]) {
    assert.equal(policy.canPay({ pay }, 100), false)
    assert.throws(() => policy.payment({ pay }, 100))
  }
  assert.equal(policy.canPay({ pay: 'urpay' }, 100), false)
})

test('mobile gift controls use list selectors and apply wallet and points', () => {
  const html = fs.readFileSync(path.join(__dirname, '../public/mobile/index.html'), 'utf8')
  const handlers = new Map()
  const state = { giftPay: 'cod', giftRewards: {} }
  const controls = {
    'data-g-pay': [{ dataset: { gPay: 'urpay' } }],
    'data-g-reward-toggle': [{ dataset: { gRewardToggle: 'useWallet' }, checked: true }],
    'data-g-reward-amount': [{ dataset: { gRewardAmount: 'walletAmount' }, value: '25' }],
  }
  for (const [key, elements] of Object.entries(controls)) {
    elements.forEach(el => { el.addEventListener = (event, handler) => handlers.set(key, handler) })
  }
  const giftState = () => ({ ...state.giftRewards, pay: state.giftPay, walletBalance: 50 })
  const ctx = vm.createContext({ S: state, SamiPaymentPolicy: policy, $$: selector => controls[selector.slice(1, -1)], giftPaymentState: giftState, gParts: () => ({ total: 100 }), giftPaymentParts: () => policy.rewards(giftState(), 100), bookWalletBalance: () => 50, render() {} })
  const start = html.indexOf("$$('[data-g-pay]').forEach")
  const end = html.indexOf('   const sender', start)
  assert(start >= 0 && end > start)
  vm.runInContext(html.slice(start, end), ctx)
  handlers.get('data-g-reward-toggle')()
  assert.equal(state.giftRewards.walletAmount, 50)
  assert.equal(state.giftPay, null)
  handlers.get('data-g-pay')()
  assert.equal(state.giftPay, null)
  handlers.get('data-g-reward-amount')()
  assert.equal(policy.rewards(giftState(), 100).wallet, 25)
  assert.throws(() => policy.payment(giftState(), 100))
})

test('all payment methods remain disabled regardless of balances or rewards', () => {
  for (const total of [0, 100]) {
    for (const state of [{ walletBalance: 1000 }, { walletBalance: 1000, useWallet: true, walletAmount: 1000 }, { useLoyalty: true, loyaltyPoints: 1000, loyaltyPointsUsed: 1000 }]) {
      assert.equal(policy.options(state, total).every(method => method.enabled === false), true)
      for (const pay of ['cod', 'card', 'urpay', 'mada', 'tabby', null]) {
        assert.equal(policy.canPay({ ...state, pay }, total), false)
        assert.throws(() => policy.payment({ ...state, pay }, total))
      }
    }
  }
})
