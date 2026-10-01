import{d as $,o,c as l,D as tn,b as n,e as r,F as _,a as x,t as e,r as D,v as G,n as I,p as j,f as g,U as h,m as T,g as V,q as Dn,B as Ln,z as hn,H as X,P as rn,k as H,Z as Pn,_ as Nn,i as Hn,O as jn,a0 as Tn}from"./index-Bs4B5fFm.js";import{p as Q}from"./paymentPolicy-Dun9PtFA.js";import{u as Yn}from"./usePageStyles-BsKXAz8A.js";import{u as Vn}from"./useInternalLinks-DFu5X4c8.js";import{u as L,B as Gn,a as Rn,A as On,b as Un,f as W,c as q,r as Y,C as vn,d as Wn,G as qn,e as Kn,D as kn,S as dn}from"./CheckoutPaymentOptions-Dkn_porA.js";import{b as Xn,B as Qn,s as Zn}from"./BookingQr-CpA-e_6r.js";import{f as Jn,b as nr,i as fn,d as rr}from"./PaymentMethodList-Hnqqr2gc.js";import{G as yn,c as tr}from"./GiftCard-CiDFpnYg.js";import{_ as er}from"./complete-care-hq-DbNf4QGN.js";import{F as or}from"./FavoriteButton-DWHEVbcX.js";import{_ as un}from"./SkeletonLoader-CNkcL428.js";import"./accountApi-DjzvT3R8.js";const ar=`\r
:root{\r
  --ink:#0A0906; --coal:#14110C;\r
  --gold:#CE9234; --gold-bright:#E8BE6C; --gold-deep:#9C6B1F;\r
  --champagne:#F0E6CF; --ivory:#F8F4EB; --paper:#FBFAF6; --card:#FFFFFF;\r
  --smoke:#9A9080; --mute:#7d745f; --text:#2A2519;\r
  --line:rgba(143,113,52,.22); --line-dark:rgba(198,161,91,.22);\r
  --green:#2E8B57; --green-bg:#EAF5EC;\r
  --p-relax:#4E9E6F; --p-fast:#D98A3B; --p-full:#B8912F; --p-groom:#8B6FC0; --p-home:#3E8E9E; --p-vip:#B0642A;\r
  --ease:cubic-bezier(.33,.9,.35,1); --dur:.26s;\r
  --font-d:'Lama Sans',serif; --font-b:'Lama Sans',sans-serif;\r
}\r
*{margin:0;padding:0;box-sizing:border-box}\r
body{font-family:var(--font-b);background:var(--ink);color:var(--text);-webkit-font-smoothing:antialiased;overflow-x:hidden}\r
::selection{background:var(--gold);color:var(--ink)}\r
img{max-width:100%;display:block}\r
a{color:inherit;text-decoration:none}\r
button{font-family:inherit;cursor:pointer;border:none;background:none;color:inherit}\r
input,textarea,select{font-family:inherit}\r
.wrap{width:min(1280px,94%);margin-inline:auto}\r
\r
/* ===== الهيدر ===== */\r
.nav{display:flex;align-items:center;gap:26px;padding:14px 0}\r
.logo{display:flex;align-items:center;gap:11px}\r
.logo .mark{width:56px;height:56px;display:grid;place-items:center;border:1.5px solid var(--gold);\r
  border-radius:14px;font-family:var(--font-d);font-weight:700;font-size:18px;color:var(--gold-bright);\r
  background:radial-gradient(circle at 30% 20%,rgba(233,207,142,.18),transparent 70%);\r
  overflow:hidden}\r
.logo .mark img{width:100%;height:100%;object-fit:contain;transform:scale(1.6);border-radius:11px}\r
.logo .name b{font-family:var(--font-d);font-size:17px;color:var(--champagne);display:block;line-height:1.15}\r
.logo .name span{font-size:10px;color:var(--smoke);letter-spacing:.08em}\r
nav.links{display:flex;gap:22px;margin-inline-start:auto}\r
nav.links a{font-size:13.5px;color:var(--champagne);opacity:.82;transition:var(--dur);position:relative;padding-bottom:4px}\r
nav.links a:hover,nav.links a.on{opacity:1;color:var(--gold-bright)}\r
nav.links a.on::after{content:"";position:absolute;bottom:0;right:0;left:0;height:2px;background:var(--gold-bright);border-radius:2px}\r
.nav-actions{display:flex;align-items:center;gap:12px}\r
.icon-btn{position:relative;width:40px;height:40px;border-radius:50%;display:grid;place-items:center;\r
  border:1px solid var(--line-dark);color:var(--champagne);transition:var(--dur) var(--ease)}\r
.icon-btn:hover{border-color:var(--gold);color:var(--gold-bright)}\r
.icon-btn .count{position:absolute;top:-5px;left:-5px;min-width:18px;height:18px;border-radius:9px;\r
  background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);\r
  font-size:10.5px;font-weight:700;display:grid;place-items:center;padding-inline:4px}\r
.loyal{display:inline-flex;align-items:center;gap:8px;border:1px solid var(--gold);color:var(--gold-bright);\r
  padding:9px 18px;border-radius:999px;font-size:13px}\r
\r
.shell{background:var(--paper);border-radius:26px 26px 0 0;min-height:calc(100vh - 71px);padding-bottom:80px;position:relative}\r
\r
/* ===== أزرار عامة ===== */\r
.btn{display:inline-flex;align-items:center;gap:10px;justify-content:center;padding:14px 30px;border-radius:14px;\r
  font-size:14.5px;font-weight:700;position:relative;overflow:hidden;isolation:isolate;\r
  transition:transform var(--dur) var(--ease),box-shadow var(--dur) var(--ease),opacity var(--dur)}\r
.btn-gold{color:var(--ink);background:linear-gradient(135deg,var(--gold-bright) 0%,var(--gold) 50%,var(--gold-deep) 120%);\r
  box-shadow:0 12px 26px -10px rgba(143,113,52,.65),inset 0 1px 0 rgba(255,255,255,.5)}\r
.btn-gold::before{content:"";position:absolute;inset:0;z-index:-1;\r
  background:linear-gradient(115deg,transparent 30%,rgba(255,255,255,.5) 50%,transparent 70%);\r
  transform:translateX(160%);transition:transform .7s var(--ease)}\r
.btn-gold:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 18px 34px -10px rgba(143,113,52,.7)}\r
.btn-gold:hover::before{transform:translateX(-160%)}\r
.btn-gold:disabled{opacity:.45;cursor:not-allowed;box-shadow:none}\r
.btn-line{border:1.5px solid var(--gold);color:var(--gold-deep);background:#fff}\r
.btn-line:hover{background:rgba(198,161,91,.08);transform:translateY(-2px)}\r
.btn-dark{background:var(--ink);color:var(--gold-bright)}\r
.btn-dark:hover{background:#241E12;transform:translateY(-2px)}\r
.card{background:var(--card);border:1px solid var(--line);border-radius:18px;\r
  box-shadow:0 14px 30px -22px rgba(80,60,20,.25)}\r
\r
/* ===== هيرو الباقات ===== */\r
.pk-hero{position:relative;border-radius:22px;overflow:hidden;margin-top:24px;min-height:300px;\r
  display:flex;align-items:center;background:#0d0b07}\r
.pk-hero .bg{position:absolute;inset:0}\r
.pk-hero .bg img{width:100%;height:100%;object-fit:cover;object-position:75% center;filter:brightness(.85)}\r
.pk-hero .bg::after{content:"";position:absolute;inset:0;\r
  background:linear-gradient(90deg,rgba(10,9,6,.92) 0%,rgba(10,9,6,.72) 42%,rgba(10,9,6,.1) 100%)}\r
.pk-hero .in{position:relative;z-index:2;padding:52px;max-width:560px}\r
.pk-hero .eyebrow{font-family:var(--font-d);font-size:clamp(20px,2.4vw,28px);color:var(--gold-bright)}\r
.pk-hero h1{font-family:var(--font-d);font-size:clamp(30px,4.2vw,50px);color:var(--ivory);line-height:1.25;margin:4px 0 14px}\r
.pk-hero p{color:var(--champagne);font-size:15px;line-height:1.9;font-weight:300;opacity:.85;max-width:44ch}\r
.pk-hero .ghost-logo{position:absolute;left:5%;top:50%;transform:translateY(-50%);width:220px;opacity:.14;z-index:1;color:var(--gold-bright)}\r
\r
/* ===== فلاتر الباقات ===== */\r
/* ملاحظة صغيرة على سطر واحد — مش سكشن كامل */\r
.branch-gate{display:flex;align-items:center;justify-content:flex-start;gap:8px;flex-wrap:wrap;\r
  margin:20px 0 20px 0;padding:0;border:0;background:none;border-radius:0;font-size:12px;color:#6f675e}\r
.branch-gate b{color:var(--gold-deep);font-weight:700}\r
.branch-gate button{border:0;background:none;padding:0;margin-inline-start:2px;color:var(--gold-deep);\r
  font-family:inherit;font-size:11.5px;font-weight:700;text-decoration:underline;text-underline-offset:3px;cursor:pointer}\r
.branch-gate button:hover{color:#855911}\r
.branch-gate button.primary{background:none;color:#a5603f}\r
.branch-gate-ov{position:fixed;inset:0;z-index:400;background:rgba(20,14,6,.55);backdrop-filter:blur(3px);\r
  display:flex;align-items:center;justify-content:center;opacity:0;pointer-events:none;transition:opacity .25s}\r
.branch-gate-ov.on{opacity:1;pointer-events:auto}\r
.branch-gate-modal{width:min(420px,92%);background:#fff;border-radius:20px;padding:26px;text-align:center;box-shadow:0 30px 60px -20px rgba(0,0,0,.4)}\r
.branch-gate-modal h3{font-family:var(--font-d);font-size:20px;margin:0 0 6px}\r
.branch-gate-modal p{font-size:12.5px;color:var(--mute);margin:0 0 18px}\r
.branch-gate-list{display:grid;gap:10px}\r
.branch-gate-list button{text-align:start;border:1.5px solid var(--line);border-radius:13px;padding:13px 16px;background:#fff}\r
.branch-gate-list button:hover{border-color:var(--gold)}\r
.branch-gate-list button b{display:block;font-size:14px;margin-bottom:3px}\r
.branch-gate-list button small{color:var(--mute);font-size:11.5px}\r
.branch-gate-close{margin-top:14px;background:none;border:0;color:var(--mute);font-size:12.5px;text-decoration:underline}\r
.filters{display:flex;gap:12px;margin:26px 0;flex-wrap:wrap}\r
.flt{display:inline-flex;align-items:center;gap:9px;padding:12px 24px;border-radius:14px;font-size:13.5px;font-weight:600;\r
  background:#fff;border:1.5px solid var(--line);color:var(--mute);transition:all var(--dur) var(--ease)}\r
.flt:hover{transform:translateY(-2px);border-color:rgba(143,113,52,.5);color:var(--gold-deep)}\r
.flt.on{background:var(--ink);color:var(--gold-bright);border-color:var(--ink);\r
  box-shadow:0 12px 24px -12px rgba(10,9,6,.6)}\r
.flt svg{width:16px;height:16px}\r
\r
/* ===== شبكة الباقات ===== */\r
.pkgs{display:grid;grid-template-columns:repeat(5,1fr);gap:16px;align-items:stretch}\r
.pkg{\r
  position:relative;background:#fff;border:1.5px solid var(--line);border-radius:20px;overflow:visible;\r
  display:flex;flex-direction:column;transition:transform .3s var(--ease),box-shadow .3s,border-color .3s,opacity .3s;\r
  animation:pkgIn .45s var(--ease) both;\r
}\r
@keyframes pkgIn{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}\r
.pkg:hover{transform:translateY(-8px);box-shadow:0 30px 54px -26px rgba(80,60,20,.5)}\r
.pkg.hot{border-color:var(--gold)}\r
.pkg .ph{position:relative;border-radius:19px 19px 0 0;overflow:hidden;aspect-ratio:16/10.5;background:#161209}\r
.pkg .ph img{width:100%;height:100%;object-fit:cover;transition:transform .7s var(--ease)}\r
.pkg:hover .ph img{transform:scale(1.06)}\r
.pkg .hotflag{position:absolute;top:12px;right:12px;background:linear-gradient(135deg,var(--gold-bright),var(--gold));\r
  color:var(--ink);font-size:10.5px;font-weight:700;padding:6px 13px;border-radius:999px;z-index:2;\r
  box-shadow:0 8px 16px -6px rgba(143,113,52,.6)}\r
.pkg .starflag{position:absolute;top:12px;left:12px;width:30px;height:30px;border-radius:50%;background:rgba(10,9,6,.7);\r
  border:1px solid var(--gold);display:grid;place-items:center;color:var(--gold-bright);z-index:2}\r
.pkg .badge{\r
  position:relative;width:48px;height:48px;border-radius:50%;flex:0 0 48px;align-self:center;margin:-24px auto -24px;\r
  background:#fff;display:grid;place-items:center;color:var(--pc);border:2px solid;z-index:3;\r
  box-shadow:0 10px 20px -8px rgba(80,60,20,.4);transition:transform .35s var(--ease);\r
}\r
.pkg .badge svg{display:block;width:22px;height:22px;stroke-width:2.2}\r
.pkg:hover .badge{transform:translateY(-2px) scale(1.06)}\r
.pkg .ph{margin-bottom:0}\r
.pkg .body{padding:34px 18px 18px;display:flex;flex-direction:column;flex:1;text-align:center;position:relative}\r
.pkg h3{font-family:var(--font-d);font-size:19px;color:var(--ink)}\r
.pkg .dur{font-size:12px;color:var(--mute);margin:6px 0 8px;display:flex;justify-content:center;gap:6px;align-items:center}\r
.pkg .desc{font-size:12.5px;color:var(--mute);line-height:1.8;min-height:44px}\r
.pkg .inc{margin:14px 0;padding-top:14px;border-top:1px dashed var(--line);text-align:start;flex:1}\r
.pkg .inc b{font-size:12px;color:var(--ink);display:block;margin-bottom:10px}\r
.pkg .inc ul{list-style:none;display:grid;gap:8px}\r
.pkg .inc li{display:flex;gap:8px;align-items:center;font-size:12px;color:#5c5442}\r
.pkg .inc li i{width:15px;height:15px;border-radius:50%;background:var(--pc);color:#fff;display:grid;place-items:center;flex:none;font-size:9px;font-style:normal}\r
.pkg .price{font-family:var(--font-d);font-size:30px;color:var(--pc);margin:4px 0 12px}\r
.pkg .price small{font-size:13px;color:var(--mute);font-family:var(--font-b)}\r
.pkg .acts{display:grid;gap:8px}\r
.pkg .book{width:100%;padding:12px;border-radius:12px;font-size:13.5px;font-weight:700;border:1.5px solid var(--pc);\r
  color:var(--pc);transition:all var(--dur) var(--ease)}\r
.pkg .book:hover,.pkg.hot .book{background:var(--pc);color:#fff}\r
.pkg.hot .book{border-color:transparent;background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink)}\r
.pkg.hot .book:hover{filter:brightness(1.05)}\r
.pkg .gift-mini{font-size:12px;color:var(--mute);display:inline-flex;gap:6px;align-items:center;justify-content:center;\r
  padding:8px;transition:color var(--dur)}\r
.pkg .gift-mini:hover{color:var(--gold-deep)}\r
\r
/* ===== بانر الإهداء ===== */\r
.gift-banner{margin:34px 0 26px;border-radius:22px;overflow:hidden;position:relative;\r
  background:linear-gradient(120deg,#F7EFD9,#FDF9EE 55%,#F5ECD4);border:1px solid var(--line);\r
  display:grid;grid-template-columns:200px 1fr auto;align-items:center;gap:26px;padding:28px 34px}\r
.gift-banner::before{content:"";position:absolute;inset:-40%;pointer-events:none;\r
  background:conic-gradient(from 0deg,transparent 72%,rgba(198,161,91,.18) 80%,transparent 88%);\r
  animation:sweep 10s linear infinite}\r
@keyframes sweep{to{transform:rotate(360deg)}}\r
.gb-box{width:150px;height:150px;position:relative;transform-style:preserve-3d;perspective:600px;\r
  animation:giftFloat 7s ease-in-out infinite;justify-self:center}\r
@keyframes giftFloat{0%,100%{transform:rotateY(-14deg) rotateX(6deg) translateY(0)}50%{transform:rotateY(14deg) rotateX(-3deg) translateY(-8px)}}\r
.gb-box .face{position:absolute;inset:0;border-radius:18px;border:1px solid rgba(143,113,52,.5);\r
  background:linear-gradient(150deg,#241d10,#0f0c06);display:grid;place-items:center;\r
  box-shadow:inset 0 0 34px rgba(198,161,91,.2),0 24px 44px -16px rgba(80,60,20,.5)}\r
.gb-box .face::before{content:"";position:absolute;inset-block:0;right:calc(50% - 8px);width:16px;\r
  background:linear-gradient(180deg,var(--gold-bright),var(--gold-deep))}\r
.gb-box .face::after{content:"";position:absolute;inset-inline:0;top:calc(50% - 8px);height:16px;\r
  background:linear-gradient(90deg,var(--gold-deep),var(--gold-bright),var(--gold-deep))}\r
.gb-box .tag{position:absolute;bottom:-14px;left:-22px;background:#FFFDF6;border:1px solid var(--line);\r
  padding:8px 14px;border-radius:10px;font-size:10.5px;color:var(--gold-deep);transform:rotate(-8deg);\r
  box-shadow:0 10px 18px -8px rgba(80,60,20,.35)}\r
.gift-banner .txt{position:relative;z-index:1}\r
.gift-banner h2{font-family:var(--font-d);font-size:clamp(21px,2.6vw,28px);color:var(--ink)}\r
.gift-banner p{color:var(--mute);font-size:13.5px;margin-top:8px;line-height:1.9;max-width:52ch}\r
.gift-banner .mini-feats{display:flex;gap:26px;margin-top:16px;flex-wrap:wrap}\r
.gift-banner .mf{text-align:center;font-size:11px;color:var(--mute)}\r
.gift-banner .mf .mi{width:38px;height:38px;margin:0 auto 7px;border-radius:11px;border:1px solid var(--line);\r
  display:grid;place-items:center;color:var(--gold-deep);background:#fff}\r
.gift-banner .cta{position:relative;z-index:1}\r
\r
/* ===== شريط المزايا ===== */\r
.perks{display:grid;grid-template-columns:repeat(6,1fr);gap:0;background:#fff;border:1px solid var(--line);\r
  border-radius:18px;padding:20px 10px;margin-top:26px}\r
.perk{text-align:center;padding:6px 12px;border-inline-start:1px solid var(--line)}\r
.perk:first-child{border:none}\r
.perk .pi{width:40px;height:40px;margin:0 auto 9px;border-radius:12px;display:grid;place-items:center;\r
  background:rgba(198,161,91,.1);color:var(--gold-deep)}\r
.perk b{font-size:12.5px;color:var(--ink);display:block}\r
.perk small{font-size:10.5px;color:var(--mute)}\r
\r
/* ===== تحسين الهيدر الموحد ===== */\r
body{background:#FBFAF6!important}\r
.shell,#app,#giftApp{background:#FBFAF6!important}\r
.nav{gap:22px;min-height:82px}\r
nav.links{gap:18px;align-items:center;white-space:nowrap}\r
nav.links a{font-weight:500}\r
.logo{flex-shrink:0}.nav-actions{flex-shrink:0}\r
@media(max-width:1180px){nav.links{gap:12px}.loyal{padding-inline:13px}.nav{gap:14px}}\r
\r
/* ===== تحسين الفوتر وبوابات الدفع ===== */\r
footer{background:radial-gradient(circle at 18% 0,rgba(232,190,108,.16),transparent 30%),linear-gradient(180deg,#0B0906,#050403);color:#f5efe4;padding:58px 24px 20px;border-top:1px solid rgba(198,161,91,.28)}\r
.f-grid{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1.25fr .85fr 1fr 1.1fr;gap:28px;align-items:start}\r
.f-brand{min-width:0}.f-brand img{width:64px;height:64px;object-fit:cover;border-radius:18px;border:1px solid rgba(198,161,91,.5);margin-bottom:14px}\r
.f-brand h3,.f-links h4,.f-branch h4,footer h4{font-family:var(--font-d,var(--fd));color:#f7d995;margin:0 0 12px;font-size:22px}\r
.f-brand p,.f-branch p,.f-links a{color:#cfc5b3;line-height:1.9;font-size:14px}\r
.f-brand p{max-width:330px}.socials{display:flex;gap:10px;margin-top:18px}.socials a{width:38px;height:38px;border-radius:50%;display:grid;place-items:center;border:1px solid rgba(198,161,91,.34);color:#f0c978;background:rgba(255,255,255,.03)}\r
.f-links{display:grid;gap:8px;list-style:none;padding:0;margin:0}.f-links a:hover{color:#f0c978}.f-branch{display:grid;gap:3px;margin-bottom:12px}.f-branch b,.f-branch strong{color:#fff}.f-branch small{color:#b8ad9d;line-height:1.8}.f-branch a{color:#f0c978;font-size:13px}\r
.f-bottom{max-width:1200px;margin:34px auto 0;padding-top:18px;border-top:1px solid rgba(255,255,255,.1);display:grid;grid-template-columns:auto minmax(320px,1fr);align-items:center;gap:18px;color:#b8ad9d;font-size:13px}\r
.pay{justify-self:end;display:grid;grid-template-columns:repeat(5,minmax(72px,1fr));gap:10px;width:min(100%,520px)}\r
.pay span{min-height:46px;border-radius:14px;display:grid;place-items:center;border:1px solid rgba(232,190,108,.3);background:linear-gradient(160deg,rgba(255,255,255,.1),rgba(255,255,255,.03));box-shadow:inset 0 1px 0 rgba(255,255,255,.08),0 16px 32px -24px rgba(0,0,0,.9);color:#f7d995;font-size:0;font-weight:900;letter-spacing:0;position:relative;overflow:hidden}\r
.pay span::before{font-size:13px;line-height:1;color:inherit}.pay span::after{content:"";position:absolute;inset:8px;border:1px solid rgba(255,255,255,.08);border-radius:10px;pointer-events:none}\r
.pay span:nth-child(1)::before{content:"VISA";font-style:italic;font-size:15px;color:#fff}.pay span:nth-child(2)::before{content:"MC";font-size:14px;color:#111;background:linear-gradient(90deg,#EB001B 0 50%,#F79E1B 50%);width:38px;height:24px;border-radius:999px;display:grid;place-items:center}.pay span:nth-child(3)::before{content:"مدى";font-size:16px;color:#9FE7C1}.pay span:nth-child(4)::before{content:"tabby";font-size:14px;color:#B8F7D0}.pay span:nth-child(5)::before{content:" Pay";font-size:15px;color:#fff}\r
@media(max-width:900px){.f-grid{grid-template-columns:1fr 1fr}.nav{overflow-x:auto;justify-content:flex-start}.nav::-webkit-scrollbar{height:0}.f-brand{grid-column:1/-1}.f-bottom{grid-template-columns:1fr}.pay{justify-self:stretch;width:100%}}\r
@media(max-width:640px){footer{padding:42px 16px calc(22px + env(safe-area-inset-bottom))}.f-grid{grid-template-columns:1fr 1fr;gap:22px 14px}.f-brand,.f-grid>div:last-child{grid-column:1/-1}.f-brand{text-align:center}.f-brand .logo{justify-content:center}.f-brand p{max-width:none;margin-inline:auto;font-size:13px}.socials{justify-content:center}.f-grid h4,footer h4{font-size:15px;margin-bottom:10px}.f-links a{font-size:12.5px}.f-branch{background:rgba(255,255,255,.035);border:1px solid rgba(198,161,91,.18);border-radius:14px;padding:12px}.f-bottom{margin-top:24px;text-align:center}.pay{grid-template-columns:repeat(3,1fr);gap:8px}.pay span{min-height:44px;border-radius:12px}.pay span:nth-child(5){grid-column:2/3}}\r
\r
\r
\r
/* ===== إصلاح هيدر الموقع على الجوال ===== */\r
@media(max-width:640px){\r
  body{padding-top:76px}\r
  header{overflow:hidden}\r
  .nav{min-height:76px;padding:10px 12px;gap:8px;overflow:visible!important;justify-content:space-between;direction:inherit}\r
  nav.links{display:none!important}\r
  .logo{min-width:0;gap:8px;flex:0 1 auto}\r
  .logo .mark{width:50px;height:50px;border-radius:15px;flex:none}\r
  .logo .mark img{width:28px!important;height:28px!important;margin:0!important}\r
  .logo .name b{font-size:18px;white-space:nowrap}\r
  .logo .name span{font-size:10px;letter-spacing:.18em}\r
  .nav-actions{margin-inline-start:auto;gap:8px;display:flex;align-items:center;flex:0 0 auto;min-width:0}\r
  .nav-actions .btn-ghost{width:48px;min-width:48px;height:48px;padding:0!important;border-radius:50%;font-size:0!important;gap:0}\r
  .nav-actions .btn-ghost svg{width:18px;height:18px;margin:0}\r
  .nav-actions .btn-gold{min-width:112px;height:48px;padding:0 14px!important;border-radius:999px;font-size:13px!important;white-space:nowrap;gap:6px;flex:none}\r
  .nav-actions .btn-gold svg{width:14px;height:14px;flex:none}\r
  .nav-actions .burger{display:none}\r
}\r
@media(max-width:380px){\r
  .logo .name b{font-size:16px}\r
  .logo .name span{font-size:9px;letter-spacing:.14em}\r
  .logo .mark{width:46px;height:46px}\r
  .nav-actions{gap:6px}\r
  .nav-actions .btn-ghost{width:44px;min-width:44px;height:44px}\r
  .nav-actions .btn-gold{min-width:100px;height:44px;padding-inline:11px!important;font-size:12px!important}\r
}\r
\r
\r
/* ===== مدخل الهدايا المستلمة في الهيدر ===== */\r
.account-entry{position:relative;display:inline-grid;place-items:center}\r
.account-trigger{width:42px;height:42px;border-radius:50%;display:grid;place-items:center;border:1px solid var(--line,rgba(198,161,91,.28));color:var(--champagne,#F0E6CF);background:radial-gradient(circle at 30% 20%,rgba(232,190,108,.14),rgba(255,255,255,.02));transition:all .26s cubic-bezier(.33,.9,.35,1)}\r
.account-trigger:hover,.account-entry:focus-within .account-trigger{border-color:var(--gold,#CE9234);color:var(--gold-bright,#E8BE6C);box-shadow:0 0 24px rgba(206,146,52,.22);transform:translateY(-1px)}\r
.account-panel{position:absolute;top:calc(100% + 12px);left:0;z-index:1500;width:280px;padding:12px;border:1px solid rgba(206,146,52,.34);border-radius:18px;background:linear-gradient(155deg,#17120A,#090705);box-shadow:0 24px 50px -22px rgba(0,0,0,.78),inset 0 1px 0 rgba(255,255,255,.08);opacity:0;pointer-events:none;transform:translateY(8px);transition:all .24s cubic-bezier(.33,.9,.35,1)}\r
.account-entry:hover .account-panel,.account-entry:focus-within .account-panel{opacity:1;pointer-events:auto;transform:translateY(0)}\r
.account-panel::before{content:"";position:absolute;top:-6px;left:18px;width:12px;height:12px;background:#17120A;border-top:1px solid rgba(206,146,52,.34);border-right:1px solid rgba(206,146,52,.34);transform:rotate(-45deg)}\r
.received-gift-link{display:grid;grid-template-columns:46px 1fr auto;gap:12px;align-items:center;padding:12px;border-radius:15px;background:linear-gradient(135deg,rgba(232,190,108,.16),rgba(255,255,255,.04));border:1px solid rgba(232,190,108,.22);color:#F7E8C6;text-decoration:none}\r
.received-gift-link .gift-ico{width:46px;height:46px;border-radius:14px;display:grid;place-items:center;background:linear-gradient(135deg,var(--gold-bright,#E8BE6C),var(--gold,#CE9234));color:#111;box-shadow:0 12px 22px -12px rgba(232,190,108,.75)}\r
.received-gift-link b{font-family:var(--font-d,var(--fd));font-size:14px;color:#fff;display:block;margin-bottom:2px}\r
.received-gift-link small{font-size:11px;color:#CDBF9D;line-height:1.5}\r
.received-gift-link .arr{color:var(--gold-bright,#E8BE6C)}\r
.received-gift-link:hover{border-color:var(--gold,#CE9234);transform:translateY(-1px)}\r
@media(max-width:640px){.account-trigger{width:44px;height:44px}.account-panel{left:0;width:min(280px,calc(100vw - 22px))}}\r
\r
\r
/* ===== أدوات الهيدر الموحّدة ===== */\r
.nav-actions{display:flex;align-items:center;gap:12px;margin-inline-start:auto}\r
.site-loc{display:inline-flex;align-items:center;gap:8px;border:1px solid rgba(255,255,255,.16);color:#EDE3D2;\r
  padding:9px 14px;border-radius:999px;font-size:13px;background:rgba(255,255,255,.03);transition:.25s;cursor:pointer;\r
  font-family:inherit;max-width:180px;white-space:nowrap}\r
.site-loc:hover{border-color:#C6A15B;color:#F0D9A5}\r
.site-loc span{overflow:hidden;text-overflow:ellipsis}\r
.icon-btn{position:relative;width:40px;height:40px;border-radius:50%;display:grid;place-items:center;\r
  border:1px solid rgba(255,255,255,.16);color:#EDE3D2;transition:.25s;background:transparent;cursor:pointer}\r
.icon-btn:hover{border-color:#C6A15B;color:#F0D9A5}\r
.icon-btn .count{position:absolute;top:-5px;left:-5px;min-width:18px;height:18px;border-radius:9px;\r
  background:linear-gradient(135deg,#F0D9A5,#C6A15B);color:#241f1b;\r
  font-size:10.5px;font-weight:700;display:grid;place-items:center;padding-inline:4px}\r
.nav-book{display:inline-flex;align-items:center;gap:7px;border:1px solid #C6A15B;color:#F0D9A5;\r
  border-radius:999px;padding:9px 18px;font-size:13px;white-space:nowrap;transition:.25s}\r
.nav-book:hover{background:rgba(198,161,91,.15)}\r
@media(max-width:1100px){.site-loc span{display:none}.site-loc{padding:9px 11px}}\r
\r
\r
/* ===== ستيبر الإهداء ===== */\r
.g-stepper{padding:32px 0 6px}\r
.g-steps{display:flex;justify-content:space-between;max-width:860px;margin-inline:auto;position:relative}\r
.g-step{flex:1;display:flex;flex-direction:column;align-items:center;gap:9px;position:relative;z-index:2}\r
.g-step .bubble{width:46px;height:46px;border-radius:50%;background:#fff;border:1.5px solid var(--line);\r
  display:grid;place-items:center;color:#A79c86;font-weight:700;font-size:14px;transition:all .35s var(--ease)}\r
.g-step b{font-size:13px;color:#A79c86;font-family:var(--font-d);transition:color .3s}\r
.g-step small{font-size:10.5px;color:#B4a98f}\r
.g-step .bar{position:absolute;top:23px;right:calc(50% + 30px);width:calc(100% - 60px);height:2px;background:var(--line);z-index:-1}\r
.g-step .bar i{display:block;height:100%;width:0;background:linear-gradient(90deg,var(--gold-deep),var(--gold-bright));transition:width .6s var(--ease)}\r
.g-step:first-child .bar{display:none}\r
.g-step.active .bubble{background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);border-color:transparent;\r
  box-shadow:0 10px 24px -8px rgba(143,113,52,.6),0 0 0 6px rgba(198,161,91,.14);transform:scale(1.06)}\r
.g-step.active b{color:var(--gold-deep)}\r
.g-step.done .bubble{border-color:var(--gold);color:var(--gold-deep);cursor:pointer}\r
.g-step.done .bar i,.g-step.active .bar i{width:100%}\r
.g-stage{display:grid;grid-template-columns:1fr 320px;gap:24px;padding:24px 0;align-items:start}\r
.g-stage>main,.g-stage>aside{min-width:0}\r
.g-head{text-align:center;margin:8px 0 26px}\r
.g-head h1{font-family:var(--font-d);font-size:clamp(24px,3vw,34px);color:var(--ink)}\r
.g-head h1 .lock{color:var(--gold-deep)}\r
.g-head p{color:var(--mute);font-size:14px;margin-top:7px}\r
\r
/* خطوة 1: نوع الهدية */\r
.gtype-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}\r
.gtype{position:relative;border-radius:20px;overflow:hidden;border:1.5px solid var(--line);cursor:pointer;\r
  background:#fff;transition:all .3s var(--ease)}\r
.gtype:hover{transform:translateY(-5px);box-shadow:0 26px 46px -24px rgba(80,60,20,.5)}\r
.gtype.sel{border-color:var(--gold);box-shadow:0 0 0 4px rgba(198,161,91,.16)}\r
.gtype .im{aspect-ratio:16/9.5;overflow:hidden;background:linear-gradient(150deg,#F3EBD8,#EFE5CC);position:relative}\r
.gtype .im img{width:100%;height:100%;object-fit:cover;transition:transform .7s var(--ease)}\r
.gtype:hover .im img{transform:scale(1.05)}\r
.gtype .ic{position:absolute;top:16px;left:16px;width:56px;height:56px;border-radius:50%;background:rgba(255,253,246,.9);\r
  border:1px solid var(--gold);display:grid;place-items:center;color:var(--gold-deep)}\r
.gtype .bd{padding:20px;text-align:center}\r
.gtype h3{font-family:var(--font-d);font-size:21px;color:var(--ink)}\r
.gtype p{font-size:13px;color:var(--mute);margin:7px 0 16px;line-height:1.8}\r
.gtype .go{display:inline-flex;width:100%;justify-content:center;gap:8px;padding:13px;border-radius:13px;\r
  background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);font-size:13.5px;font-weight:700}\r
\r
/* خطوة 2: اختيار الباقة للإهداء */\r
.gp-sort{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px}\r
.gp-sort small{font-size:12.5px;color:var(--mute)}\r
.gp-sort select{border:1.5px solid var(--line);border-radius:11px;padding:10px 16px;font-size:13px;background:#fff;color:var(--ink);outline:none}\r
.gpkgs{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}\r
.gpkg{background:#fff;border:1.5px solid var(--line);border-radius:18px;overflow:hidden;cursor:pointer;\r
  transition:all .3s var(--ease);display:flex;flex-direction:column;animation:pkgIn .4s var(--ease) both}\r
.gpkg:hover{transform:translateY(-5px);box-shadow:0 24px 44px -24px rgba(80,60,20,.5)}\r
.gpkg.sel{border-color:var(--gold);box-shadow:0 0 0 4px rgba(198,161,91,.18)}\r
.gpkg .ph{aspect-ratio:16/9;overflow:hidden;position:relative;background:#161209}\r
.gpkg .ph img{width:100%;height:100%;object-fit:cover}\r
.gpkg .ph .chk{position:absolute;top:10px;left:10px;width:26px;height:26px;border-radius:50%;\r
  background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);display:grid;place-items:center;\r
  opacity:0;transform:scale(.4);transition:all .3s var(--ease)}\r
.gpkg.sel .ph .chk{opacity:1;transform:scale(1)}\r
.gpkg .bd{padding:16px;text-align:center;display:flex;flex-direction:column;flex:1}\r
.gpkg h4{font-family:var(--font-d);font-size:16.5px;color:var(--ink)}\r
.gpkg .dur{font-size:11.5px;color:var(--mute);margin:5px 0}\r
.gpkg .desc{font-size:11.5px;color:var(--mute);line-height:1.7;flex:1}\r
.gpkg .prc{font-family:var(--font-d);font-size:22px;color:var(--pc,var(--gold-deep));margin:10px 0}\r
.gpkg .prc small{font-size:12px;color:var(--mute);font-family:var(--font-b)}\r
.gpkg .pick{border:1.5px solid var(--gold);color:var(--gold-deep);border-radius:11px;padding:10px;font-size:12.5px;font-weight:700;\r
  display:flex;justify-content:center;gap:7px;transition:var(--dur)}\r
.gpkg.sel .pick,.gpkg .pick:hover{background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);border-color:transparent}\r
\r
/* خطوة 3: التخصيص */\r
.custom-grid{display:grid;grid-template-columns:1fr 1.35fr;gap:18px;align-items:start}\r
.preview-col{position:sticky;top:90px}\r
.preview-col h4,.form-col h4{font-family:var(--font-d);font-size:16px;color:var(--ink);margin-bottom:14px;display:flex;gap:8px;align-items:center}\r
.gcard{\r
  aspect-ratio:16/10;border-radius:18px;position:relative;overflow:hidden;padding:26px;\r
  display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;\r
  box-shadow:0 30px 54px -24px rgba(20,15,5,.55);transition:background .45s var(--ease),color .45s;\r
}\r
.gcard .bow{position:absolute;top:-6px;right:18px;width:64px;color:currentColor;opacity:.9}\r
.gcard .leaves{position:absolute;inset:0;pointer-events:none;opacity:.35}\r
.gcard .leaves svg{position:absolute}\r
.gcard .lg{font-family:var(--font-d);font-size:15px;letter-spacing:.14em;margin-bottom:4px;display:flex;align-items:center;gap:8px}\r
.gcard .lg small{font-size:9px;letter-spacing:.06em;opacity:.8}\r
.gcard h3{font-family:var(--font-d);font-size:clamp(20px,2.4vw,27px);margin:10px 0 6px}\r
.gcard .tg{font-size:12px;opacity:.85;letter-spacing:.02em}\r
.gcard .hr{width:120px;height:1px;background:currentColor;opacity:.4;margin:16px auto 0;position:relative}\r
.gcard .hr::after{content:"♡";position:absolute;top:-9px;right:calc(50% - 8px);font-size:13px;background:inherit;padding-inline:6px}\r
.gcard-msg{margin-top:14px;background:#FDF9EE;border:1px solid var(--line);border-radius:14px;padding:16px 18px;position:relative}\r
.gcard-msg .q{position:absolute;top:8px;font-size:26px;color:var(--gold);font-family:serif;line-height:1}\r
.gcard-msg .q1{right:12px}.gcard-msg .q2{left:12px;bottom:4px;top:auto}\r
.gcard-msg b{display:block;font-family:var(--font-d);color:var(--gold-deep);font-size:14.5px;margin-bottom:6px}\r
.gcard-msg p{font-size:12.5px;color:#5c5442;line-height:1.9;white-space:pre-wrap}\r
.form-col .card{padding:20px}\r
.fld{margin-bottom:16px}\r
.fld label{font-size:12.5px;color:var(--mute);display:block;margin-bottom:8px;font-weight:600}\r
.fld input,.fld textarea{width:100%;border:1.5px solid var(--line);border-radius:12px;padding:12px 14px;font-size:13.5px;\r
  background:#FDFBF5;color:var(--ink);outline:none;transition:border-color var(--dur),box-shadow var(--dur)}\r
.fld input:focus,.fld textarea:focus{border-color:var(--gold);box-shadow:0 0 0 3px rgba(198,161,91,.14)}\r
.fld textarea{resize:vertical;min-height:88px}\r
.fld .cnt{font-size:11px;color:var(--mute);margin-top:6px;display:block}\r
.fld .cnt.max{color:#B3452F}\r
.two{display:grid;grid-template-columns:1fr 1fr;gap:12px}\r
.designs{display:grid;grid-template-columns:repeat(5,1fr);gap:10px}\r
.design{cursor:pointer;text-align:center}\r
.design .sw{aspect-ratio:16/11;border-radius:12px;border:2px solid transparent;position:relative;overflow:hidden;\r
  transition:all .25s var(--ease);display:grid;place-items:center;font-family:var(--font-d);font-size:9px}\r
.design:hover .sw{transform:translateY(-3px)}\r
.design.sel .sw{border-color:var(--gold);box-shadow:0 0 0 3px rgba(198,161,91,.2)}\r
.design .sw .dchk{position:absolute;top:5px;left:5px;width:18px;height:18px;border-radius:50%;\r
  background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);display:grid;place-items:center;\r
  opacity:0;transform:scale(.4);transition:all .25s var(--ease)}\r
.design.sel .sw .dchk{opacity:1;transform:scale(1)}\r
.design small{font-size:10.5px;color:var(--mute);display:block;margin-top:6px}\r
.design.sel small{color:var(--gold-deep);font-weight:700}\r
.send-opts{display:flex;gap:16px;margin-bottom:14px}\r
.send-opts .ro{display:flex;gap:8px;align-items:center;font-size:13px;color:var(--ink);cursor:pointer}\r
.send-opts .ro i{width:18px;height:18px;border-radius:50%;border:1.5px solid var(--line);display:grid;place-items:center;transition:all .25s}\r
.send-opts .ro i::after{content:"";width:9px;height:9px;border-radius:50%;background:linear-gradient(135deg,var(--gold-bright),var(--gold));transform:scale(0);transition:transform .25s var(--ease)}\r
.send-opts .ro.on i{border-color:var(--gold)}\r
.send-opts .ro.on i::after{transform:scale(1)}\r
.methods{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}\r
.mth{border:1.5px solid var(--line);border-radius:13px;padding:15px 8px;text-align:center;cursor:pointer;\r
  background:#fff;transition:all var(--dur) var(--ease);color:var(--mute);font-size:12px}\r
.mth:hover{transform:translateY(-3px)}\r
.mth.sel{border-color:var(--gold);color:var(--gold-deep);background:linear-gradient(160deg,#FFFBF0,#fff);font-weight:700;\r
  box-shadow:0 0 0 3px rgba(198,161,91,.14)}\r
.mth .mi{width:36px;height:36px;margin:0 auto 8px;border-radius:11px;display:grid;place-items:center;\r
  background:rgba(198,161,91,.1);color:var(--gold-deep)}\r
.sched-box{overflow:hidden;max-height:0;opacity:0;transition:max-height .4s var(--ease),opacity .3s,margin .3s}\r
.sched-box.open{max-height:120px;opacity:1;margin-top:12px}\r
\r
/* خطوة 4: الدفع */\r
.pay-methods{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}\r
.pm{position:relative;display:flex;flex-direction:column;gap:10px;padding:16px;border-radius:15px;align-items:center;text-align:center;\r
  border:1.5px solid var(--line);background:#fff;cursor:pointer;transition:all var(--dur) var(--ease)}\r
.pm:hover{border-color:rgba(143,113,52,.5)}\r
.pm.sel{border-color:var(--gold);background:linear-gradient(160deg,#FFFBF0,#fff);box-shadow:0 0 0 3px rgba(198,161,91,.15)}\r
.pm .pmi{height:34px;border-radius:9px;display:grid;place-items:center;padding-inline:14px;background:#F5F0E4;\r
  font-weight:800;font-size:12px;color:var(--ink)}\r
.pm b{font-size:13px;color:var(--ink)}\r
.pm small{font-size:10.5px;color:var(--mute)}\r
.pm .rad{position:absolute;top:12px;left:12px;width:20px;height:20px;border-radius:50%;border:1.5px solid var(--line);\r
  display:grid;place-items:center;transition:all .25s var(--ease)}\r
.pm .rad i{width:9px;height:9px;border-radius:50%;background:linear-gradient(135deg,var(--gold-bright),var(--gold));\r
  transform:scale(0);transition:transform .25s var(--ease)}\r
.pm.sel .rad{border-color:var(--gold)}\r
.pm.sel .rad i{transform:scale(1)}\r
.card-form{overflow:hidden;max-height:0;opacity:0;transition:max-height .45s var(--ease),opacity .35s,margin .35s}\r
.card-form.open{max-height:320px;opacity:1;margin-top:16px}\r
.cf-box{padding:18px;border-radius:14px;background:#FCFAF4;border:1px solid var(--line)}\r
.cf-box h5{font-size:13px;color:var(--ink);margin-bottom:14px}\r
.save-card{display:flex;gap:9px;align-items:center;font-size:12.5px;color:var(--mute);margin-top:12px;cursor:pointer}\r
.save-card i{width:19px;height:19px;border-radius:6px;border:1.5px solid var(--line);display:grid;place-items:center;color:#fff;transition:all .25s}\r
.save-card.on i{background:linear-gradient(135deg,var(--gold-bright),var(--gold));border-color:transparent;color:var(--ink)}\r
.secure-strip{display:flex;gap:9px;align-items:center;justify-content:center;background:rgba(198,161,91,.08);\r
  border-radius:12px;padding:12px;font-size:12px;color:var(--gold-deep);margin-top:16px}\r
.after-pay{font-size:11.5px;color:var(--mute);text-align:center;margin-top:12px}\r
\r
/* الشريط الجانبي - ملخص الهدية */\r
.gsum{position:sticky;top:86px;min-width:0}\r
.gsum .card{padding:20px}\r
.gsum h3{font-family:var(--font-d);font-size:17px;color:var(--ink);margin-bottom:16px;display:flex;align-items:center;gap:10px}\r
.gsum h3::after{content:"";flex:1;height:1px;background:linear-gradient(-90deg,var(--gold),transparent)}\r
.gsum .pkline{display:flex;gap:12px;margin-bottom:14px;padding-bottom:14px;border-bottom:1px solid rgba(143,113,52,.14)}\r
.gsum .pkline img{width:74px;height:74px;object-fit:cover;border-radius:12px;flex:none}\r
.gsum .pkline>span{min-width:0}\r
.gsum .pkline b{font-family:var(--font-d);font-size:15px;color:var(--ink);display:block;overflow-wrap:break-word;word-break:break-word}\r
.gsum .pkline small{font-size:11px;color:var(--mute);display:block;margin-top:3px;line-height:1.6;overflow-wrap:break-word;word-break:break-word}\r
.gsum .pkline .pr{font-family:var(--font-d);color:var(--gold-deep);font-size:15px;margin-top:5px;display:block}\r
.gs-row{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:9px 0;\r
  border-bottom:1px solid rgba(143,113,52,.1);font-size:12.5px}\r
.gs-row:last-of-type{border:none}\r
.gs-row .k{color:var(--mute);display:flex;gap:7px;align-items:center;flex:none}\r
.gs-row .v{color:var(--ink);font-weight:600;text-align:left;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\r
.gs-row .v .chip{font-size:10.5px;background:var(--green-bg);color:var(--green);padding:3px 10px;border-radius:999px;font-weight:700}\r
.gs-total{display:flex;justify-content:space-between;align-items:baseline;margin-top:12px;padding-top:14px;border-top:1px dashed var(--line)}\r
.gs-total .k{font-size:13.5px;font-weight:700;color:var(--ink)}\r
.gs-total .v{font-family:var(--font-d);font-size:26px;color:var(--gold-deep)}\r
.gs-note{margin-top:14px;display:flex;gap:9px;align-items:center;background:rgba(198,161,91,.1);border-radius:11px;\r
  padding:11px 13px;font-size:11.5px;color:var(--gold-deep)}\r
.why-gift{margin-top:16px}\r
.why-gift .wg{display:flex;gap:12px;align-items:flex-start;padding:11px 0;border-bottom:1px solid rgba(143,113,52,.1)}\r
.why-gift .wg:last-child{border:none}\r
.why-gift .wi{flex:none;width:40px;height:40px;border-radius:50%;border:1px solid var(--line);display:grid;place-items:center;color:var(--gold-deep);background:#FDFBF5}\r
.why-gift b{font-size:13px;color:var(--ink);display:block}\r
.why-gift small{font-size:11.5px;color:var(--mute)}\r
.help-card{margin-top:16px;text-align:center;padding:20px}\r
.help-card .hi{width:46px;height:46px;margin:0 auto 10px;border-radius:50%;border:1px solid var(--line);display:grid;place-items:center;color:var(--gold-deep)}\r
.help-card b{font-family:var(--font-d);color:var(--ink);display:block}\r
.help-card small{color:var(--mute);font-size:12px;display:block;margin:4px 0 12px}\r
.help-card a{display:inline-block;border:1.5px solid var(--gold);color:var(--gold-deep);border-radius:11px;padding:9px 26px;font-size:12.5px;font-weight:600}\r
\r
/* خطوة 5: النجاح */\r
.gsuccess{max-width:1000px;margin-inline:auto;text-align:center;padding-top:16px}\r
.gsuc-head{display:flex;gap:14px;align-items:center;justify-content:center;margin-bottom:8px}\r
.gsuc-head .ic{width:56px;height:56px;border-radius:50%;border:2px solid var(--gold);color:var(--gold-deep);\r
  display:grid;place-items:center;animation:sucPop .6s var(--ease) both .1s}\r
@keyframes sucPop{from{transform:scale(.4);opacity:0}60%{transform:scale(1.1)}to{transform:scale(1);opacity:1}}\r
.gsuc-head .ic svg{stroke-dasharray:60;stroke-dashoffset:60;animation:dash .7s var(--ease) forwards .45s}\r
@keyframes dash{to{stroke-dashoffset:0}}\r
.gsuccess h1{font-family:var(--font-d);font-size:clamp(26px,3.4vw,38px);color:var(--ink)}\r
.gsuccess .sub{color:var(--mute);font-size:14px;margin-top:6px}\r
.gsuc-grid{display:grid;grid-template-columns:1.15fr 1fr;gap:18px;margin-top:26px;text-align:start}\r
.gsuc-card-col .gcard{box-shadow:0 26px 48px -22px rgba(20,15,5,.5)}\r
.gsuc-details{padding:22px}\r
.gsuc-details h4{font-family:var(--font-d);font-size:17px;color:var(--ink);margin-bottom:10px}\r
.gsuc-actions{display:flex;gap:12px;justify-content:center;margin-top:26px;flex-wrap:wrap}\r
.confetti{position:absolute;pointer-events:none;font-size:13px;color:var(--gold);animation:conf 3.4s ease-in-out infinite;opacity:.6}\r
@keyframes conf{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(-12px) rotate(24deg)}}\r
.thanks{margin-top:26px;color:var(--mute);font-size:13px;display:flex;gap:12px;align-items:center;justify-content:center}\r
.thanks i{color:var(--gold);font-style:normal}\r
\r
/* الشريط السفلي */\r
.footbar{position:fixed;bottom:0;inset-inline:0;z-index:390;background:rgba(255,253,247,.92);\r
  backdrop-filter:blur(14px);border-top:1px solid var(--line);\r
  box-shadow:0 -14px 40px -20px rgba(80,60,20,.35);display:none}\r
.footbar.on{display:block}\r
.footbar .in{display:flex;align-items:center;gap:20px;padding:13px 0}\r
.btn-back{border:1.5px solid var(--line);color:var(--mute);background:#fff;padding:13px 24px}\r
.btn-back:hover{border-color:var(--gold);color:var(--gold-deep)}\r
.fb-mid{flex:1;text-align:center;font-size:12.5px;color:var(--mute)}\r
.fb-mid b{color:var(--gold-deep);font-family:var(--font-d);font-size:17px}\r
.view{display:none}\r
.view.on{display:block;animation:viewIn .45s var(--ease) both}\r
@keyframes viewIn{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}\r
.pay-loading{position:fixed;inset:0;z-index:999;display:none;place-items:center;background:rgba(10,9,6,.7);backdrop-filter:blur(6px)}\r
.pay-loading.on{display:grid}\r
.pl-box{background:#fff;border-radius:22px;padding:42px 58px;text-align:center;animation:viewIn .35s var(--ease)}\r
.pl-ring{width:60px;height:60px;margin:0 auto 18px;border-radius:50%;border:3px solid rgba(198,161,91,.2);\r
  border-top-color:var(--gold);animation:spin 1s linear infinite}\r
@keyframes spin{to{transform:rotate(360deg)}}\r
.pl-box b{font-family:var(--font-d);font-size:17px;color:var(--ink)}\r
.pl-box small{display:block;color:var(--mute);margin-top:7px;font-size:12px}\r
.toast{position:fixed;bottom:90px;right:50%;transform:translate(50%,20px);z-index:998;opacity:0;pointer-events:none;\r
  background:var(--ink);color:var(--champagne);padding:13px 24px;border-radius:13px;font-size:13px;\r
  border:1px solid var(--line-dark);transition:all .35s var(--ease);display:flex;gap:9px;align-items:center}\r
.toast.on{opacity:1;transform:translate(50%,0)}\r
.toast svg{color:var(--gold-bright)}\r
\r
@media(max-width:1100px){\r
  .pkgs{grid-template-columns:repeat(3,1fr)}\r
  .gpkgs{grid-template-columns:1fr 1fr}\r
  .g-stage{grid-template-columns:1fr}\r
  .gsum{position:static;order:-1}\r
  .perks{grid-template-columns:repeat(3,1fr)}\r
  .perk:nth-child(4){border:none}\r
  .custom-grid{grid-template-columns:1fr}\r
  .preview-col{position:static}\r
  .gift-banner{grid-template-columns:1fr;text-align:center}\r
  .gift-banner .mini-feats{justify-content:center}\r
  .gb-box{margin-inline:auto}\r
}\r
@media(max-width:700px){\r
  nav.links{display:none}\r
  .pkgs,.gpkgs,.gtype-grid,.pay-methods{grid-template-columns:1fr}\r
  .pkgs{max-width:420px;margin-inline:auto}\r
  .g-step b,.g-step small{display:none}\r
  .g-step .bubble{width:40px;height:40px}\r
  .g-step .bar{top:20px;right:calc(50% + 26px);width:calc(100% - 52px)}\r
  .designs,.methods{grid-template-columns:repeat(3,1fr)}\r
  .perks{grid-template-columns:1fr 1fr}\r
  .perk{border:none}\r
  .pk-hero .in{padding:32px 24px}\r
  .gsuc-grid{grid-template-columns:1fr}\r
  .two{grid-template-columns:1fr}\r
  .fb-mid{display:none}\r
  .filters{overflow-x:auto;flex-wrap:nowrap;padding-bottom:6px}\r
  .flt{flex:none}\r
}\r
/* ===== حجز الباقة: اختيار الفرع ===== */\r
.bk-branches{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}\r
.bkbr{position:relative;background:#fff;border:1.5px solid var(--line);border-radius:18px;overflow:hidden;cursor:pointer;\r
  transition:all .3s var(--ease);animation:pkgIn .4s var(--ease) both}\r
.bkbr:hover{transform:translateY(-5px);box-shadow:0 24px 44px -24px rgba(80,60,20,.5)}\r
.bkbr.sel{border-color:var(--gold);box-shadow:0 0 0 4px rgba(198,161,91,.16)}\r
.bkbr .ph{aspect-ratio:16/9.5;overflow:hidden;position:relative;background:#161209}\r
.bkbr .ph img{width:100%;height:100%;object-fit:cover;transition:transform .7s var(--ease)}\r
.bkbr:hover .ph img{transform:scale(1.05)}\r
.bkbr .chk{position:absolute;top:10px;left:10px;width:26px;height:26px;border-radius:50%;z-index:2;\r
  background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);display:grid;place-items:center;\r
  opacity:0;transform:scale(.4);transition:all .3s var(--ease)}\r
.bkbr.sel .chk{opacity:1;transform:scale(1)}\r
.bkbr .homeflag{position:absolute;top:10px;right:10px;background:rgba(255,251,240,.94);color:var(--gold-deep);\r
  font-size:10.5px;font-weight:700;padding:6px 12px;border-radius:999px;z-index:2}\r
.bkbr .bd{padding:16px;text-align:center}\r
.bkbr h4{font-family:var(--font-d);font-size:17px;color:var(--gold-deep)}\r
.bkbr .addr{font-size:12px;color:var(--mute);margin:5px 0 11px}\r
.bkbr .meta{display:flex;justify-content:center;gap:13px;font-size:11.5px;color:#5c5442;\r
  border-top:1px dashed var(--line);padding-top:11px;flex-wrap:wrap}\r
.bkbr .meta .live{color:var(--green);display:flex;gap:5px;align-items:center}\r
.bkbr .meta .live i{width:6px;height:6px;border-radius:50%;background:var(--green);animation:pulseDot 2s infinite}\r
@keyframes pulseDot{0%,100%{opacity:1}50%{opacity:.3}}\r
/* ===== شريط الأيام والأوقات ===== */\r
.daystrip{display:flex;gap:10px;overflow-x:auto;padding:4px 2px 10px;scrollbar-width:thin}\r
.day{flex:0 0 84px;text-align:center;padding:13px 8px;border-radius:14px;border:1.5px solid var(--line);\r
  background:#fff;cursor:pointer;transition:all .25s var(--ease)}\r
.day:hover{transform:translateY(-3px);border-color:rgba(143,113,52,.5)}\r
.day.sel{border-color:var(--gold);background:linear-gradient(160deg,#FFF9EC,#fff);box-shadow:0 0 0 3px rgba(198,161,91,.16)}\r
.day small{font-size:11px;color:var(--mute);display:block}\r
.day b{font-family:var(--font-d);font-size:21px;color:var(--ink);display:block;margin:3px 0}\r
.day.sel b,.day.sel small{color:var(--gold-deep)}\r
.periods{display:flex;gap:10px;margin:16px 0 14px}\r
.period{flex:1;display:flex;align-items:center;justify-content:center;gap:8px;padding:11px;border-radius:12px;\r
  border:1.5px solid var(--line);font-size:13px;color:var(--mute);transition:all var(--dur) var(--ease);background:#fff}\r
.period.sel{border-color:var(--gold);color:var(--gold-deep);background:rgba(198,161,91,.08);font-weight:600}\r
.slots{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}\r
.slot{position:relative;padding:12px;border-radius:12px;border:1.5px solid var(--line);font-size:13.5px;color:var(--ink);\r
  transition:all .22s var(--ease);background:#fff;animation:pkgIn .3s var(--ease) both}\r
.slot:hover:not(:disabled){transform:scale(1.04);border-color:rgba(143,113,52,.5);box-shadow:0 10px 20px -10px rgba(80,60,20,.35)}\r
.slot:disabled{color:#C9C1AC;background:#FAF7EF;cursor:default;text-decoration:line-through}\r
.slot.sel{border-color:var(--gold);background:linear-gradient(160deg,#FFF9EC,#fff);font-weight:700;color:var(--gold-deep);\r
  box-shadow:0 0 0 3px rgba(198,161,91,.16)}\r
.slot.sel::after{content:"✓";position:absolute;top:-8px;left:-8px;width:22px;height:22px;border-radius:50%;\r
  background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);font-size:11px;display:grid;place-items:center}\r
.slot .tag{position:absolute;top:-9px;right:10px;font-size:9.5px;font-weight:700;padding:3px 9px;border-radius:999px;\r
  background:#FFEFE0;color:#B0622A}\r
.end-line{display:flex;gap:10px;align-items:center;justify-content:space-between;background:rgba(198,161,91,.08);\r
  border:1px solid var(--line);border-radius:13px;padding:13px 18px;margin-top:16px;font-size:12.5px;color:var(--gold-deep)}\r
.end-line b{color:var(--ink)}\r
/* ===== تأكيد حجز الباقة ===== */\r
.bk-pkg-hero{display:flex;gap:16px;align-items:center;padding:18px;margin-bottom:16px}\r
.bk-pkg-hero img{width:110px;height:88px;object-fit:cover;border-radius:14px}\r
.bk-pkg-hero .t{flex:1}\r
.bk-pkg-hero h4{font-family:var(--font-d);font-size:19px;color:var(--ink)}\r
.bk-pkg-hero small{color:var(--mute);font-size:12px;display:block;margin-top:4px;line-height:1.7}\r
.bk-pkg-hero .incs{display:flex;gap:7px;flex-wrap:wrap;margin-top:9px}\r
.bk-pkg-hero .incs span{font-size:10.5px;background:rgba(198,161,91,.12);color:var(--gold-deep);\r
  padding:4px 11px;border-radius:999px}\r
.bk-pkg-hero .pr{font-family:var(--font-d);font-size:26px;color:var(--pc,var(--gold-deep));white-space:nowrap}\r
.bk-rows{padding:6px 20px}\r
.ok-banner{display:flex;gap:14px;align-items:center;background:var(--green-bg);border:1px solid rgba(46,139,87,.25);\r
  border-radius:15px;padding:15px 20px;margin-bottom:16px}\r
.ok-banner .ic{width:38px;height:38px;border-radius:50%;background:var(--green);color:#fff;display:grid;place-items:center;flex:none}\r
.ok-banner b{color:#1E6B41;font-size:14px;display:block}\r
.ok-banner small{color:#4a7d5f;font-size:12px}\r
/* ===== دفع الباقة (قائمة عمودية كالتصميم) ===== */\r
.bk-pays{display:grid;gap:10px}\r
.bkpm{display:flex;align-items:center;gap:14px;padding:15px 18px;border-radius:14px;border:1.5px solid var(--line);\r
  background:#fff;cursor:pointer;transition:all var(--dur) var(--ease)}\r
.bkpm:hover{border-color:rgba(143,113,52,.5)}\r
.bkpm.sel{border-color:var(--gold);background:linear-gradient(160deg,#FFFBF0,#fff);box-shadow:0 0 0 3px rgba(198,161,91,.15)}\r
.bkpm .lg{width:64px;height:34px;border-radius:9px;display:grid;place-items:center;background:#F5F0E4;\r
  font-weight:800;font-size:11.5px;color:var(--ink);flex:none}\r
.bkpm b{font-size:13.5px;color:var(--ink)}\r
.bkpm .rad{margin-inline-start:auto;width:22px;height:22px;border-radius:50%;border:1.5px solid var(--line);\r
  display:grid;place-items:center;transition:all .25s var(--ease);flex:none}\r
.bkpm .rad i{width:10px;height:10px;border-radius:50%;background:linear-gradient(135deg,var(--gold-bright),var(--gold));\r
  transform:scale(0);transition:transform .25s var(--ease)}\r
.bkpm.sel .rad{border-color:var(--gold)}\r
.bkpm.sel .rad i{transform:scale(1)}\r
.pay-summary-strip{padding:16px 20px;margin-bottom:14px;background:linear-gradient(160deg,#FFF9EC,#fff)}\r
.pay-summary-strip b{font-family:var(--font-d);font-size:16px;color:var(--ink);display:block}\r
.pay-summary-strip small{color:var(--mute);font-size:12px;display:block;margin-top:5px}\r
.pay-summary-strip .amt{font-family:var(--font-d);font-size:26px;color:var(--gold-deep);margin-top:8px;display:block}\r
.btn-paynow{width:100%;background:var(--ink);color:#fff;padding:16px;border-radius:14px;font-size:15px;font-weight:700;\r
  display:flex;justify-content:center;gap:10px;transition:all var(--dur) var(--ease);margin-top:16px}\r
.btn-paynow:hover:not(:disabled){background:#241E12;transform:translateY(-2px);box-shadow:0 16px 30px -14px rgba(10,9,6,.6)}\r
.btn-paynow:disabled{opacity:.45;cursor:not-allowed}\r
.qr-box{width:150px;height:150px;margin:14px auto 0;border:1.5px solid var(--gold);border-radius:16px;padding:9px;background:#fff}\r
.qr-box canvas{width:100%;height:100%;image-rendering:pixelated}\r
@media(max-width:1100px){.bk-branches{grid-template-columns:1fr 1fr}}\r
@media(max-width:700px){\r
  .bk-branches{grid-template-columns:1fr}\r
  .slots{grid-template-columns:repeat(2,1fr)}\r
  .bk-pkg-hero{flex-wrap:wrap}\r
}\r
@media(prefers-reduced-motion:reduce){\r
  *,*::before,*::after{animation-duration:.01ms!important;transition-duration:.01ms!important}\r
}\r
`,ir={class:"branch-gate"},sr={class:"ph"},lr=["src","alt"],dr={class:"body"},pr={class:"dur"},gr={class:"desc"},cr={class:"inc"},xr={class:"price"},fr={class:"acts"},ur=["data-book","onClick"],br=["data-gift","onClick"],mr={class:"gift-banner"},hr={class:"txt"},vr={class:"mini-feats"},kr={class:"mi"},yr={class:"cta"},wr={class:"perks"},_r={class:"pi"},zr={__name:"PackagesCatalog",emits:["book","gift","gift-now","pick-branch"],setup(P,{emit:d}){const{state:y,filteredPkgs:v}=L(),p=d,t=M=>M.toLocaleString("ar-EG-u-nu-latn"),c=$(()=>{const M=Gn.find(a=>a.id===y.siteBranch);return M?M.name:""}),b=$(()=>`grid-template-columns:repeat(${Math.min(v.value.length,5)},1fr)`),s={clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',gift:'<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7s-2-5-5-5-3 5 0 5h5zM12 7s2-5 5-5 3 5 0 5h-5z"/>'},i=[["بطاقة إهداء رقمية",'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>'],["رسالة مخصصة من قلبك",'<path d="M21 11.5a8.4 8.4 0 01-9 8.4 8.5 8.5 0 01-3.8-.9L3 21l2-5.2a8.4 8.4 0 011.5-9.8 8.5 8.5 0 0114.5 5.5z"/>'],["إرسال فوري عبر واتساب أو بريد",'<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>'],["جدولة الإهداء في الوقت المناسب",'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>']],m=[["غرفة VIP خاصة","لباقات مختارة",'<path d="M2 8l4 4 6-8 6 8 4-4v10a2 2 0 01-2 2H4a2 2 0 01-2-2z"/>'],["منتجات فاخرة","ضمن باقاتك",'<path d="M20 12v9H4v-9M2 7h20v5H2z"/>'],["أولوية في الحجز","مواعيد مرنة",'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4"/>'],["ضيافة فاخرة","مشروبات مختارة",'<path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4z"/>'],["نقاط ولاء مضاعفة","مع كل باقة",'<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7"/>'],["ضمان الجودة","أفضل تجربة",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>']];return(M,a)=>(o(),l(_,null,[a[15]||(a[15]=tn('<section class="pk-hero"><div class="bg"><img src="'+er+'" alt=""></div><svg class="ghost-logo" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width=".8"><path d="M12 2l9 5v10l-9 5-9-5V7z"></path><path d="M12 2v20M3 7l9 5 9-5M3 17l9-5 9 5"></path></svg><div class="in"><div class="eyebrow">تجارب متكاملة</div><h1>لراحتـك وأناقتـك</h1><p>اختر الباقة التي تناسب احتياجاتك واستمتع بتجربة عناية متكاملة توفر عليك الوقت والجهد</p></div></section>',1)),n("div",ir,[r(y).siteBranch?(o(),l(_,{key:0},[n("span",null,[a[3]||(a[3]=x("📍 الفرع المختار: ",-1)),n("b",null,e(c.value),1)]),n("button",{id:"branchGateChange",onClick:a[0]||(a[0]=k=>p("pick-branch"))},"تغيير الفرع")],64)):(o(),l(_,{key:1},[a[4]||(a[4]=n("span",null,"حدد فرعك أولًا لعرض الأسعار والمواعيد المتاحة بدقة",-1)),n("button",{id:"branchGateChange",class:"primary",onClick:a[1]||(a[1]=k=>p("pick-branch"))},"اختر الفرع")],64))]),n("div",{class:"pkgs",style:G(b.value)},[(o(!0),l(_,null,D(r(v),(k,N)=>(o(),l("article",{key:k.id,class:I(["pkg",{hot:k.hot}]),style:G(`--pc:${k.color};animation-delay:${N*.07}s`)},[n("div",sr,[n("img",{src:k.img,alt:k.name},null,8,lr),k.hot?(o(),l(_,{key:0},[a[5]||(a[5]=n("span",{class:"hotflag"},"الأكثر طلبًا",-1)),a[6]||(a[6]=n("span",{class:"starflag"},"★",-1))],64)):j("",!0)]),n("span",{class:"badge",style:G(`border-color:${k.hex}`)},[g(h,{inner:k.ico,size:22},null,8,["inner"])],4),n("div",dr,[g(or,{type:"package",id:k.id},null,8,["id"]),n("h3",null,e(k.name),1),n("div",pr,[g(h,{inner:s.clock,size:13},null,8,["inner"]),x(" "+e(k.dur)+" دقيقة",1)]),n("div",gr,e(k.desc),1),n("div",cr,[a[8]||(a[8]=n("b",null,"تشمل الباقة",-1)),n("ul",null,[(o(!0),l(_,null,D(k.inc,(w,z)=>(o(),l("li",{key:z},[a[7]||(a[7]=n("i",null,"✓",-1)),x(e(w),1)]))),128))])]),n("div",xr,[x(e(t(k.price))+" ",1),a[9]||(a[9]=n("small",null,"ر.س",-1))]),n("div",fr,[n("button",{class:"book","data-book":k.id,onClick:w=>p("book",k.id)},"احجز الباقة",8,ur),n("button",{class:"gift-mini","data-gift":k.id,onClick:w=>p("gift",k.id)},[g(h,{inner:s.gift,size:14},null,8,["inner"]),a[10]||(a[10]=x(" أهدِ هذه الباقة",-1))],8,br)])])],6))),128))],4),n("section",mr,[a[14]||(a[14]=n("div",{class:"gb-box"},[n("div",{class:"face"}),n("span",{class:"tag"},"هدية لكم من القلب 💛")],-1)),n("div",hr,[a[11]||(a[11]=n("h2",null,"أهدِ تجربة فاخرة لمن تحب",-1)),a[12]||(a[12]=n("p",null,"اختر الباقة، أضف رسالة مخصصة، وسيصلك المهدى إليه بشكل أنيق في الوقت المناسب",-1)),n("div",vr,[(o(),l(_,null,D(i,(k,N)=>n("div",{key:N,class:"mf"},[n("span",kr,[g(h,{inner:k[1],size:16},null,8,["inner"])]),x(e(k[0]),1)])),64))])]),n("div",yr,[n("button",{class:"btn btn-gold",id:"giftNow",onClick:a[2]||(a[2]=k=>p("gift-now"))},[g(h,{inner:s.gift,size:16},null,8,["inner"]),a[13]||(a[13]=x(" أهدِ باقة الآن",-1))])])]),n("div",wr,[(o(),l(_,null,D(m,(k,N)=>n("div",{key:N,class:"perk"},[n("span",_r,[g(h,{inner:k[2],size:17},null,8,["inner"])]),n("b",null,e(k[0]),1),n("small",null,e(k[1]),1)])),64))])],64))}},$r={class:"g-stepper"},Mr={class:"g-steps"},Cr=["data-bi"],Fr={class:"bubble"},Br='<path d="M20 6L9 17l-5-5"/>',Er={__name:"BookStepper",setup(P){const{state:d}=L();return(y,v)=>(o(),l("div",$r,[n("div",Mr,[(o(!0),l(_,null,D(r(Rn),(p,t)=>(o(),l("div",{key:t,class:I(["g-step",{active:t===r(d).bk.step&&!r(d).bk.done,done:t<r(d).bk.step||r(d).bk.done}]),"data-bi":t},[v[0]||(v[0]=n("div",{class:"bar"},[n("i")],-1)),n("span",Fr,[t<r(d).bk.step||r(d).bk.done?(o(),T(h,{key:0,inner:Br,size:17})):(o(),l(_,{key:1},[x(e(t+1),1)],64))]),n("b",null,e(p.t),1),n("small",null,e(p.s),1)],10,Cr))),128))])]))}},Sr={class:"g-head"},Ar={class:"card",style:{padding:"20px","margin-bottom":"16px"}},Ir={class:"daystrip"},Dr=["data-bd","onClick"],Lr={key:0,class:"card",style:{padding:"20px"}},Pr={key:1,class:"card",style:{padding:"20px"}},Nr={class:"periods"},Hr=["data-bp","onClick"],jr={key:1,class:"slots"},Tr=["data-bt","onClick"],Yr={key:0,class:"tag"},Vr={key:2,class:"card",style:{padding:"40px","text-align":"center",color:"var(--mute)","font-size":"13.5px"}},bn="grid-column:1/-1;text-align:center;color:var(--mute);padding:30px;border:1.5px dashed var(--line);border-radius:14px;font-size:13px",Gr="font-family:var(--font-d);font-size:15px;color:var(--ink);margin-bottom:12px",Rr="font-family:var(--font-d);font-size:15px;color:var(--ink);margin-bottom:4px",Or={__name:"BookTimeStep",setup(P){const{state:d,pkgOf:y,bkDays:v}=L(),p=d.bk,t=v(),c=$(()=>y(p.pkg)),b=V(!0),s=V([]),i=V(!1);function m(w){return`${w.getFullYear()}-${String(w.getMonth()+1).padStart(2,"0")}-${String(w.getDate()).padStart(2,"0")}`}Dn(async()=>{if(p.employee){b.value=!1;return}try{const w=await Jn({branchId:p.branch,serviceId:0}),z=(Array.isArray(w)?w:[])[0];z&&(p.employee={id:z.id,name:[z.first_name,z.last_name].filter(Boolean).join(" ")||"موظف"})}catch{p.employee=null}finally{b.value=!1}});async function M(){var w;if(p.dayIdx==null||!p.employee){s.value=[];return}i.value=!0;try{const z=await nr({date:m(t[p.dayIdx]),staffId:p.employee.id,durationMin:(w=c.value)==null?void 0:w.dur});s.value=Array.isArray(z)?z:[]}catch{s.value=[]}finally{i.value=!1}}Ln(()=>{var w;return[p.dayIdx,(w=p.employee)==null?void 0:w.id]},M);const a=$(()=>s.value.filter(w=>{const z=Number(w.split(":")[0]);return p.period==="all"||p.period==="am"&&z<12||p.period==="pm"&&z>=12&&z<17||p.period==="eve"&&z>=17})),k=w=>w===2?"الأكثر طلبًا":w===a.value.length-1?"آخر موعد":"",N=[["all","كل اليوم","🗓️"],["am","صباحًا","☀️"],["pm","مساءً","🌇"]];return(w,z)=>(o(),l(_,null,[n("div",Sr,[z[0]||(z[0]=n("h1",null,"اختر الوقت والتاريخ",-1)),n("p",null,"اختر الوقت المناسب لك — مدة الباقة "+e(c.value.dur)+" دقيقة",1)]),n("div",Ar,[n("h4",{style:Gr},"📅 اختر اليوم"),n("div",Ir,[(o(!0),l(_,null,D(r(t),(f,C)=>(o(),l("div",{key:C,class:I(["day",{sel:r(p).dayIdx===C}]),"data-bd":C,onClick:K=>{r(p).dayIdx=C,r(p).time=null}},[n("small",null,e(r(On)[f.getDay()]),1),n("b",null,e(f.getDate()),1),n("small",null,e(r(Un)[f.getMonth()]),1)],10,Dr))),128))])]),b.value?(o(),l("div",Lr,[g(un,{height:"72px","border-radius":"12px"})])):r(p).dayIdx!=null?(o(),l("div",Pr,[n("h4",{style:Rr},"🕐 "+e(r(W)(r(t)[r(p).dayIdx])),1),n("div",Nr,[(o(),l(_,null,D(N,f=>n("button",{key:f[0],class:I(["period",{sel:r(p).period===f[0]}]),"data-bp":f[0],onClick:C=>r(p).period=f[0]},e(f[2])+" "+e(f[1]),11,Hr)),64))]),i.value?(o(),l("div",{key:0,style:bn},[g(un,{height:"44px","border-radius":"10px"})])):(o(),l("div",jr,[a.value.length?(o(!0),l(_,{key:0},D(a.value,(f,C)=>(o(),l("button",{key:f,class:I(["slot",{sel:r(p).time===f}]),"data-bt":f,style:G(`animation-delay:${Math.min(C*.03,.4)}s`),onClick:K=>r(p).time=f},[k(C)?(o(),l("span",Yr,e(k(C)),1)):(o(),l(_,{key:1},[],64)),x(e(r(q)(f)),1)],14,Tr))),128)):(o(),l("div",{key:1,style:bn},"لا توجد أوقات متاحة في هذه الفترة"))]))])):(o(),l("div",Vr,[...z[1]||(z[1]=[n("b",{style:{display:"block","font-family":"var(--font-d)","font-size":"16px",color:"var(--ink)","margin-bottom":"6px"}},"ابدأ باختيار اليوم",-1),x("اختر يومًا من الشريط أعلاه لعرض الأوقات المتاحة",-1)])]))],64))}},Ur={class:"ok-banner"},Wr={class:"ic"},qr=["src","alt"],Kr={class:"t"},Xr={class:"incs"},Qr={class:"pr"},Zr={class:"card bk-rows",style:{"margin-bottom":"16px"}},Jr={class:"gs-row"},nt={class:"k"},rt={class:"v"},tt={class:"gs-row"},et={class:"k"},ot={class:"v"},at={class:"gs-row"},it={class:"k"},st={class:"v",dir:"ltr"},lt={class:"gs-row"},dt={class:"k"},pt={class:"v"},gt={class:"card",style:{padding:"20px"}},ct={class:"fld",style:{margin:"0"}},xt="font-size:12px;color:var(--mute);font-family:var(--font-b)",ft="display:flex;gap:9px;align-items:center;font-size:12px;color:var(--mute);background:rgba(198,161,91,.08);border-radius:11px;padding:11px 15px;margin-top:14px",ut="color:var(--gold-deep);font-weight:600;text-decoration:underline",bt={__name:"BookConfirmStep",setup(P){const{state:d,pkgOf:y,bkDays:v}=L(),p=d.bk,t=$(()=>y(p.pkg)),c=$(()=>v()[p.dayIdx]),b={check:'<path d="M20 6L9 17l-5-5"/>',pin:'<path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>',cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>'};return(s,i)=>{const m=hn("RouterLink");return o(),l(_,null,[i[9]||(i[9]=n("div",{class:"g-head"},[n("h1",null,"تأكيد الحجز"),n("p",null,"راجع تفاصيل الحجز قبل المتابعة للدفع")],-1)),n("div",Ur,[n("span",Wr,[g(h,{inner:b.check,size:16},null,8,["inner"])]),i[1]||(i[1]=n("div",null,[n("b",null,"تم حفظ موعدك بنجاح"),n("small",null,"يمكنك تعديل أو إلغاء الحجز قبل 6 ساعات من وقت الموعد")],-1))]),n("div",{class:"card bk-pkg-hero",style:G(`--pc:${t.value.color}`)},[n("img",{src:t.value.img,alt:t.value.name},null,8,qr),n("div",Kr,[n("h4",null,e(t.value.name),1),n("small",null,"🕐 "+e(t.value.dur)+" دقيقة — "+e(t.value.desc),1),n("div",Xr,[(o(!0),l(_,null,D(t.value.inc,(M,a)=>(o(),l("span",{key:a},"✓ "+e(M),1))),128))])]),n("div",Qr,[x(e(r(Y)(t.value.price))+" ",1),n("small",{style:xt},"ر.س")])],4),n("div",Zr,[n("div",Jr,[n("span",nt,[g(h,{inner:b.pin,size:15},null,8,["inner"]),i[2]||(i[2]=x(" الفرع",-1))]),n("span",rt,e(t.value.branchName),1)]),n("div",tt,[n("span",et,[g(h,{inner:b.cal,size:15},null,8,["inner"]),i[3]||(i[3]=x(" التاريخ",-1))]),n("span",ot,e(r(W)(c.value)),1)]),n("div",at,[n("span",it,[g(h,{inner:b.clock,size:15},null,8,["inner"]),i[4]||(i[4]=x(" الوقت",-1))]),n("span",st,e(r(q)(r(p).time)),1)]),n("div",lt,[n("span",dt,[g(h,{inner:b.info,size:15},null,8,["inner"]),i[5]||(i[5]=x(" مدة الجلسة",-1))]),n("span",pt,e(t.value.dur)+" دقيقة",1)])]),n("div",gt,[n("div",ct,[i[6]||(i[6]=n("label",null,"📝 ملاحظات (اختياري)",-1)),X(n("textarea",{id:"bkNotes",placeholder:"أضف أي ملاحظة...","onUpdate:modelValue":i[0]||(i[0]=M=>r(p).notes=M)},null,512),[[rn,r(p).notes]])]),n("div",{style:ft},[i[8]||(i[8]=x(" 🛡️ بالتأكيد على الحجز، فإنك توافق على ",-1)),g(m,{to:"/terms",style:ut},{default:H(()=>[...i[7]||(i[7]=[x("الشروط والأحكام",-1)])]),_:1})])])],64)}}},mt={class:"card pay-summary-strip"},ht={class:"amt"},vt={class:"card",style:{padding:"20px"}},kt=["disabled"],yt={__name:"BookPayStep",emits:["pay"],setup(P,{emit:d}){const{state:y,pkgOf:v,bkDays:p}=L(),t=d,c=y.bk,b=$(()=>v(c.pkg)),s=$(()=>p()[c.dayIdx]),i=$(()=>{var k;const a=Math.max(Number((k=b.value)==null?void 0:k.price)||0,0);return a+Math.round(a*.15)}),m=$(()=>Q.rewards(c,i.value).payable),M=$(()=>Q.canPay(c,i.value));return(a,k)=>(o(),l(_,null,[k[1]||(k[1]=n("div",{class:"g-head"},[n("h1",null,"اختر طريقة الدفع"),n("p",null,"ادفع بأمان وسهولة")],-1)),n("div",mt,[n("b",null,e(b.value.name),1),n("small",null,e(b.value.branchName)+" — "+e(r(W)(s.value))+" • "+e(r(q)(r(c).time)),1),n("span",ht,e(r(Y)(i.value))+" ر.س",1)]),n("div",vt,[g(vn,{state:r(c),total:i.value},null,8,["state","total"]),n("button",{class:"btn-paynow",disabled:!M.value,onClick:k[0]||(k[0]=N=>t("pay"))},"ادفع الآن — "+e(r(Y)(m.value))+" ر.س",9,kt)])],64))}},wt={class:"gsuccess"},_t={class:"gsuc-grid"},zt={class:"card gsuc-details"},$t={class:"gs-row"},Mt={class:"k"},Ct={class:"v"},Ft={class:"gs-row"},Bt={class:"k"},Et={class:"v"},St={class:"gs-row"},At={class:"k"},It={class:"v"},Dt={class:"gs-row"},Lt={class:"k"},Pt={class:"v",dir:"ltr"},Nt={class:"gs-row"},Ht={class:"k"},jt={class:"v"},Tt={class:"gs-row"},Yt={class:"k"},Vt={class:"gs-row"},Gt={class:"k"},Rt={class:"v",dir:"ltr"},Ot={class:"card gsuc-details",style:{"text-align":"center"}},Ut={class:"gsuc-actions"},Wt="color:var(--gold-deep);font-family:var(--font-d);font-size:16px",qt="display:flex;gap:8px;margin-top:14px",mn="flex:1;padding:11px;font-size:12px",Kt={__name:"BookSuccess",emits:["home","calendar","share"],setup(P,{emit:d}){const{state:y,pkgOf:v,bkDays:p}=L(),t=d,c=y.bk,b=$(()=>v(c.pkg)),s=$(()=>p()[c.dayIdx]),i=$(()=>{var M,a;return Xn({r:c.ref||"",b:b.value.branchName,d:W(s.value),u:`${b.value.dur} دقيقة`,e:((M=c.employee)==null?void 0:M.name)||"",p:Number(b.value.price)+Math.round(Number(b.value.price)*.15),s:[[b.value.name,q(c.time),((a=c.employee)==null?void 0:a.name)||"",b.value.price]]})}),m={box:'<path d="M20 12v10H4V12M2 7h20v5H2z"/>',pin:'<path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>',cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>',card:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',qr:'<path d="M4 4h16v16H4z"/><path d="M9 9h2v2H9zM13 9h2M9 13h2M13 13h2v2h-2z"/>',home:'<path d="M3 9l9-6 9 6v11a1 1 0 01-1 1H4a1 1 0 01-1-1z"/>',calAdd:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M12 14v4M10 16h4"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>'};return(M,a)=>(o(),l("div",wt,[a[15]||(a[15]=tn('<div class="gsuc-head"><h1>تم تأكيد حجزك بنجاح!</h1><span class="ic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6L9 17l-5-5"></path></svg></span></div><p class="sub">نتطلع لخدمتك وتقديم تجربة استثنائية تليق بك</p>',2)),n("div",_t,[n("div",zt,[a[10]||(a[10]=n("h4",null,"تفاصيل الحجز",-1)),n("div",$t,[n("span",Mt,[g(h,{inner:m.box,size:14},null,8,["inner"]),a[3]||(a[3]=x(" الباقة",-1))]),n("span",Ct,e(b.value.name),1)]),n("div",Ft,[n("span",Bt,[g(h,{inner:m.pin,size:14},null,8,["inner"]),a[4]||(a[4]=x(" الفرع",-1))]),n("span",Et,e(b.value.branchName),1)]),n("div",St,[n("span",At,[g(h,{inner:m.cal,size:14},null,8,["inner"]),a[5]||(a[5]=x(" التاريخ",-1))]),n("span",It,e(r(W)(s.value)),1)]),n("div",Dt,[n("span",Lt,[g(h,{inner:m.clock,size:14},null,8,["inner"]),a[6]||(a[6]=x(" الوقت",-1))]),n("span",Pt,e(r(q)(r(c).time)),1)]),n("div",Nt,[n("span",Ht,[g(h,{inner:m.info,size:14},null,8,["inner"]),a[7]||(a[7]=x(" مدة الجلسة",-1))]),n("span",jt,e(b.value.dur)+" دقيقة",1)]),n("div",Tt,[n("span",Yt,[g(h,{inner:m.card,size:14},null,8,["inner"]),a[8]||(a[8]=x(" المبلغ المدفوع",-1))]),n("span",{class:"v",style:Wt},e(r(Y)(b.value.price))+" ر.س",1)]),n("div",Vt,[n("span",Gt,[g(h,{inner:m.qr,size:14},null,8,["inner"]),a[9]||(a[9]=x(" رمز الحجز",-1))]),n("span",Rt,e(r(c).ref),1)])]),n("div",Ot,[a[11]||(a[11]=n("h4",{style:{"text-align":"right"}},"رمز الوصول السريع",-1)),g(Qn,{url:i.value},null,8,["url"]),n("div",{style:qt},[n("button",{class:"btn btn-dark",style:mn},"🍎 Apple Wallet"),n("button",{class:"btn btn-dark",style:mn},"📲 Google Wallet")])])]),n("div",Ut,[n("button",{class:"btn btn-gold",id:"bkHome",onClick:a[0]||(a[0]=k=>t("home"))},[g(h,{inner:m.home,size:15},null,8,["inner"]),a[12]||(a[12]=x(" العودة إلى الرئيسية",-1))]),n("button",{class:"btn btn-line",id:"bkCal",onClick:a[1]||(a[1]=k=>t("calendar"))},[g(h,{inner:m.calAdd,size:15},null,8,["inner"]),a[13]||(a[13]=x(" إضافة إلى التقويم",-1))]),n("button",{class:"btn btn-line",id:"bkShare",onClick:a[2]||(a[2]=k=>t("share"))},[g(h,{inner:m.share,size:15},null,8,["inner"]),a[14]||(a[14]=x(" مشاركة الحجز",-1))])]),a[16]||(a[16]=n("div",{class:"thanks"},[n("i",null,"❦"),x(" جودة تستحقها.. تجربة لا تنساها "),n("i",null,"❦")],-1))]))}},Xt={class:"gsum"},Qt={class:"card"},Zt={class:"pkline"},Jt=["src"],ne={class:"pr"},re={key:0,class:"gs-row"},te={class:"v"},ee={key:1,class:"gs-row"},oe={class:"v"},ae={key:2,class:"gs-row"},ie={class:"v"},se={key:3,class:"gs-row"},le={class:"v"},de={class:"gs-total"},pe={class:"v"},ge={class:"gs-note"},ce={class:"card help-card"},xe={class:"hi"},fe={__name:"BookSummary",setup(P){const{state:d,pkgOf:y,bkDays:v}=L(),p=d.bk,t=$(()=>y(p.pkg)),c=$(()=>p.dayIdx!=null?v()[p.dayIdx]:null),b=$(()=>{const i=Wn.find(m=>m.id===p.pay);return i?i.n:""}),s={shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',head:'<path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>'};return(i,m)=>(o(),l("div",Xt,[n("div",Qt,[m[7]||(m[7]=n("h3",null,"ملخص الحجز",-1)),n("div",Zt,[n("img",{src:t.value.img,alt:""},null,8,Jt),n("span",null,[n("b",null,e(t.value.name),1),n("small",null,"🕐 "+e(t.value.dur)+" دقيقة",1),n("small",null,e(t.value.desc),1),n("span",ne,e(r(Y)(t.value.price))+" ر.س",1)])]),t.value.branchName?(o(),l("div",re,[m[0]||(m[0]=n("span",{class:"k"},"📍 الفرع",-1)),n("span",te,e(t.value.branchName),1)])):j("",!0),c.value?(o(),l("div",ee,[m[1]||(m[1]=n("span",{class:"k"},"📅 التاريخ",-1)),n("span",oe,e(r(W)(c.value)),1)])):j("",!0),r(p).time!=null?(o(),l("div",ae,[m[2]||(m[2]=n("span",{class:"k"},"🕐 الوقت",-1)),n("span",ie,e(r(q)(r(p).time)),1)])):j("",!0),r(p).pay?(o(),l("div",se,[m[3]||(m[3]=n("span",{class:"k"},"💳 طريقة الدفع",-1)),n("span",le,e(b.value),1)])):j("",!0),n("div",de,[m[5]||(m[5]=n("span",{class:"k"},"الإجمالي",-1)),n("span",pe,[x(e(r(Y)(t.value.price))+" ",1),m[4]||(m[4]=n("small",{style:{"font-size":"13px"}},"ر.س",-1))])]),n("div",ge,[g(h,{inner:s.shield,size:14},null,8,["inner"]),m[6]||(m[6]=x(" حجز آمن — تعديل أو إلغاء مجاني قبل 6 ساعات",-1))])]),n("div",ce,[n("span",xe,[g(h,{inner:s.head,size:18},null,8,["inner"])]),m[8]||(m[8]=n("b",null,"دعم على مدار الساعة",-1)),m[9]||(m[9]=n("small",null,"نحن هنا لخدمتك",-1)),m[10]||(m[10]=n("a",{href:"https://wa.me/963959415545"},"تواصل معنا",-1))])]))}},ue={class:"g-stepper"},be={class:"g-steps"},me=["data-i"],he={class:"bubble"},ve='<path d="M20 6L9 17l-5-5"/>',ke={__name:"GiftStepper",setup(P){const{state:d}=L();return(y,v)=>(o(),l("div",ue,[n("div",be,[(o(!0),l(_,null,D(r(qn),(p,t)=>(o(),l("div",{key:t,class:I(["g-step",{active:t===r(d).gstep,done:t<r(d).gstep||r(d).done}]),"data-i":t},[v[0]||(v[0]=n("div",{class:"bar"},[n("i")],-1)),n("span",he,[t<r(d).gstep||r(d).done?(o(),T(h,{key:0,inner:ve,size:17})):(o(),l(_,{key:1},[x(e(t+1),1)],64))]),n("b",null,e(p.t),1),n("small",null,e(p.s),1)],10,me))),128))])]))}},ye={class:"gtype-grid"},we=["data-gt","onClick"],_e={class:"im"},ze=["src"],$e={class:"ic"},Me={class:"bd"},Ce={class:"go"},Fe='<path d="M19 12H5M11 18l-6-6 6-6"/>',Be={__name:"GiftTypeStep",setup(P){const{state:d}=L();return(y,v)=>(o(),l(_,null,[v[0]||(v[0]=n("div",{class:"g-head"},[n("h1",null,"ماذا ترغب بإهدائه؟"),n("p",null,"اختر ما يناسبك لإهداء تجربة مميزة لمن تحب")],-1)),n("div",ye,[(o(!0),l(_,null,D(r(Kn),p=>(o(),l("div",{key:p.id,class:I(["gtype",{sel:r(d).gtype===p.id}]),"data-gt":p.id,onClick:t=>r(d).gtype=p.id},[n("div",_e,[n("img",{src:p.img,alt:""},null,8,ze),n("span",$e,[g(h,{inner:p.ic,size:22},null,8,["inner"])])]),n("div",Me,[n("h3",null,e(p.n),1),n("p",null,e(p.d),1),n("span",Ce,[x(e(p.btn)+" ",1),g(h,{inner:Fe,size:14})])])],10,we))),128))])],64))}},Ee={class:"gp-sort"},Se={class:"gpkgs"},Ae=["data-gp","onClick"],Ie={class:"ph"},De=["src","alt"],Le={class:"chk"},Pe={class:"bd"},Ne={class:"dur"},He={class:"desc"},je={class:"prc"},Te={class:"pick"},Ye={__name:"GiftPickStep",setup(P){const{state:d,packages:y}=L(),v={check:'<path d="M20 6L9 17l-5-5"/>',gift:'<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7s-2-5-5-5-3 5 0 5h5zM12 7s2-5 5-5 3 5 0 5h-5z"/>'},p=$(()=>y.value.slice().sort((t,c)=>d.sort==="low"?t.price-c.price:d.sort==="high"?c.price-t.price:(c.hot?1:0)-(t.hot?1:0)));return(t,c)=>(o(),l(_,null,[c[3]||(c[3]=n("div",{class:"g-head"},[n("h1",null,"اختر الباقة التي ترغب بإهدائها"),n("p",null,"باقات مميزة تمنح تجربة متكاملة من الاسترخاء والعناية")],-1)),n("div",Ee,[X(n("select",{id:"gpSort","onUpdate:modelValue":c[0]||(c[0]=b=>r(d).sort=b)},[...c[1]||(c[1]=[n("option",{value:"pop"},"الأكثر مبيعًا",-1),n("option",{value:"low"},"السعر: الأقل أولًا",-1),n("option",{value:"high"},"السعر: الأعلى أولًا",-1)])],512),[[Pn,r(d).sort]]),n("small",null,e(r(y).length)+" باقات متاحة",1)]),n("div",Se,[(o(!0),l(_,null,D(p.value,(b,s)=>(o(),l("div",{key:b.id,class:I(["gpkg",{sel:r(d).gpkg===b.id}]),"data-gp":b.id,style:G(`--pc:${b.color};animation-delay:${s*.06}s`),onClick:i=>r(d).gpkg=b.id},[n("div",Ie,[n("img",{src:b.img,alt:b.name},null,8,De),n("span",Le,[g(h,{inner:v.check,size:13},null,8,["inner"])])]),n("div",Pe,[n("h4",null,e(b.name),1),n("div",Ne,"🕐 "+e(b.dur)+" دقيقة",1),n("div",He,e(b.desc),1),n("div",je,[x(e(r(Y)(b.price))+" ",1),c[2]||(c[2]=n("small",null,"ر.س",-1))]),n("button",Te,[g(h,{inner:v.gift,size:14},null,8,["inner"]),x(" "+e(r(d).gpkg===b.id?"تم الاختيار ✓":"أهدِ هذه الباقة"),1)])])],14,Ae))),128))])],64))}},Ve={class:"custom-grid"},Ge={class:"preview-col"},Re={id:"cardPrev"},Oe={class:"form-col"},Ue={class:"card",style:{"margin-bottom":"16px"}},We={class:"two"},qe={class:"fld"},Ke={class:"fld"},Xe={class:"fld",style:{"margin-bottom":"4px"}},Qe={class:"card",style:{"margin-bottom":"16px"}},Ze={class:"designs"},Je=["data-d","onClick"],no={class:"dchk"},ro={style:{visibility:"hidden"},"aria-hidden":"true"},to={class:"card"},eo={class:"send-opts"},oo={class:"fld",style:{margin:"0"}},ao={class:"methods",style:{"margin-top":"14px"}},io=["data-m","onClick"],so={class:"mi"},lo={__name:"GiftCustomizeStep",setup(P){const{state:d}=L(),y=$(()=>200-d.msg.length),v={eye:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',user:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',brush:'<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.6 7.6"/><circle cx="11" cy="11" r="2"/>',send:'<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>',check:'<path d="M20 6L9 17l-5-5"/>'};return(p,t)=>(o(),l(_,null,[t[17]||(t[17]=n("div",{class:"g-head"},[n("h1",null,"خصص هديتك لتكون أجمل"),n("p",null,"أضف لمستك الخاصة مع رسالة وتصميم بطاقة الإهداء")],-1)),n("div",Ve,[n("div",Ge,[n("h4",null,[g(h,{inner:v.eye,size:16},null,8,["inner"]),t[6]||(t[6]=x(" معاينة بطاقة الإهداء",-1))]),n("div",Re,[g(yn,{design:r(d).design,recipient:r(d).name,message:r(d).msg},null,8,["design","recipient","message"])])]),n("div",Oe,[n("div",Ue,[n("h4",null,[g(h,{inner:v.user,size:16},null,8,["inner"]),t[7]||(t[7]=x(" بيانات المهدى إليه",-1))]),n("div",We,[n("div",qe,[t[8]||(t[8]=n("label",null,"الاسم الكامل",-1)),X(n("input",{id:"gName",placeholder:"أحمد محمد","onUpdate:modelValue":t[0]||(t[0]=c=>r(d).name=c)},null,512),[[rn,r(d).name]])]),n("div",Ke,[t[9]||(t[9]=n("label",null,"رقم الجوال",-1)),X(n("input",{id:"gPhone",dir:"ltr",placeholder:"05xxxxxxxx","onUpdate:modelValue":t[1]||(t[1]=c=>r(d).phone=c)},null,512),[[rn,r(d).phone]])])]),n("div",Xe,[t[10]||(t[10]=n("label",null,"الرسالة الشخصية",-1)),X(n("textarea",{id:"gMsg",maxlength:"200",placeholder:"اكتب رسالتك من القلب...","onUpdate:modelValue":t[2]||(t[2]=c=>r(d).msg=c)},null,512),[[rn,r(d).msg]]),n("span",{class:I(["cnt",{max:y.value<20}]),id:"gCnt"},e(r(d).msg.length)+"/200",3)])]),n("div",Qe,[n("h4",null,[g(h,{inner:v.brush,size:16},null,8,["inner"]),t[11]||(t[11]=x(" تصميم بطاقة الإهداء",-1))]),n("div",Ze,[(o(!0),l(_,null,D(r(kn),c=>(o(),l("div",{key:c.id,class:I(["design",{sel:r(d).design===c.id}]),"data-d":c.id,onClick:b=>r(d).design=c.id},[n("div",{class:"sw",style:G(`background:${c.bg};color:${c.fg}`)},[n("span",no,[g(h,{inner:v.check,size:10},null,8,["inner"])]),t[12]||(t[12]=x("SAMI",-1))],4),n("small",ro,e(c.n),1)],10,Je))),128))])]),n("div",to,[n("h4",null,[g(h,{inner:v.send,size:16},null,8,["inner"]),t[13]||(t[13]=x(" طريقة الإرسال",-1))]),n("div",eo,[n("span",{class:I(["ro",{on:r(d).when==="now"}]),"data-w":"now",onClick:t[3]||(t[3]=c=>r(d).when="now")},[...t[14]||(t[14]=[n("i",null,null,-1),x(" إرسال الآن",-1)])],2),n("span",{class:I(["ro",{on:r(d).when==="later"}]),"data-w":"later",onClick:t[4]||(t[4]=c=>r(d).when="later")},[...t[15]||(t[15]=[n("i",null,null,-1),x(" 📅 جدولة لاحقًا",-1)])],2)]),n("div",{class:I(["sched-box",{open:r(d).when==="later"}])},[n("div",oo,[t[16]||(t[16]=n("label",null,"موعد الإرسال",-1)),X(n("input",{type:"datetime-local",id:"gSched","onUpdate:modelValue":t[5]||(t[5]=c=>r(d).schedDate=c)},null,512),[[rn,r(d).schedDate]])])],2),n("div",ao,[(o(!0),l(_,null,D(r(dn),c=>(o(),l("div",{key:c.id,class:I(["mth",{sel:r(d).method===c.id}]),"data-m":c.id,onClick:b=>r(d).method=c.id},[n("span",so,[g(h,{inner:c.ic,size:17},null,8,["inner"])]),x(e(c.n),1)],10,io))),128))])])])])],64))}},po={class:"card",style:{padding:"22px","margin-bottom":"16px"}},go={__name:"GiftPayStep",setup(P){const{state:d,pkgOf:y}=L(),v=$(()=>{var t;const p=Math.max(Number((t=y(d.gpkg))==null?void 0:t.price)||0,0);return p+Math.round(p*.15)});return(p,t)=>(o(),l(_,null,[t[0]||(t[0]=n("div",{class:"g-head"},[n("h1",null,"أكمل الدفع لإرسال هديتك"),n("p",null,"اختر طريقة الدفع المناسبة")],-1)),n("div",po,[g(vn,{state:r(d),total:v.value},null,8,["state","total"])])],64))}},co={class:"gsuccess"},xo={class:"gsuc-grid"},fo={class:"gsuc-card-col"},uo={class:"card gsuc-details"},bo={class:"gs-row"},mo={class:"k"},ho={class:"v"},vo={class:"gs-row"},ko={class:"k"},yo={class:"v"},wo={class:"gs-row"},_o={class:"k"},zo={class:"v",dir:"ltr"},$o={class:"gs-row"},Mo={class:"k"},Co={class:"v"},Fo={class:"chip"},Bo={class:"gs-row"},Eo={class:"k"},So={class:"gs-row"},Ao={class:"k"},Io={class:"v",dir:"ltr"},Do={class:"gsuc-actions"},Lo={key:0,class:"gift-share-panel"},Po={class:"gift-share-row"},No=["value"],Ho={key:0},jo="display:flex;gap:10px;align-items:center;background:var(--green-bg);border-radius:12px;padding:13px 15px;margin-top:14px;font-size:12.5px;color:#1E6B41",To="flex:none;width:26px;height:26px;border-radius:50%;background:var(--green);color:#fff;display:grid;place-items:center",Yo={__name:"GiftSuccess",emits:["recipient","new-gift","copy-self","share","home"],setup(P,{emit:d}){const{state:y}=L(),v=d,p=V(!1),t=V(!1),c=["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],b=new Date,s=`${b.getDate()} ${c[b.getMonth()]} ${b.getFullYear()}`,i="✦✧✦✧".split("").map((z,f)=>({c:z,style:`top:${10+f*16}%;${f%2?"right":"left"}:${4+f*3}%;animation-delay:-${f}s`})),m=$(()=>{const z=dn.find(f=>f.id===y.method);return z?z.n:""}),M=$(()=>y.claimToken?new URL(`/gift-recipient?token=${encodeURIComponent(y.claimToken)}`,window.location.origin).href:y.claimUrl||"");function a(){if(!M.value)return;const z=String(y.phone||"").replace(/\D/g,""),f=encodeURIComponent(`لديك هدية من عناية سامي ✨
${M.value}`);window.open(`https://wa.me/${z}?text=${f}`,"_blank","noopener")}function k(){p.value=!0,t.value=!1,M.value&&window.open(M.value,"_blank","noopener,noreferrer")}async function N(){try{if(navigator&&navigator.clipboard)await navigator.clipboard.writeText(M.value);else{const z=document.getElementById("gift-share-link");z&&(z.focus(),z.select(),document.execCommand("copy"))}t.value=!0,setTimeout(()=>{t.value=!1},2200)}catch{alert("تعذّر نسخ الرابط، يمكنك نسخه يدويًا من الحقل أدناه.")}}const w={user:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',send:'<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>',phone:'<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',card:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',check:'<path d="M20 6L9 17l-5-5"/>',gift:'<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7s-2-5-5-5-3 5 0 5h5zM12 7s2-5 5-5 3 5 0 5h-5z"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>',home:'<path d="M3 9l9-6 9 6v11a1 1 0 01-1 1H4a1 1 0 01-1-1z"/>'};return(z,f)=>(o(),l("div",co,[(o(!0),l(_,null,D(r(i),(C,K)=>(o(),l("span",{key:K,class:"confetti",style:G(C.style)},e(C.c),5))),128)),f[15]||(f[15]=tn('<div class="gsuc-head" data-v-2ee9f435><h1 data-v-2ee9f435>تم إرسال هديتك بنجاح</h1><span class="ic" data-v-2ee9f435><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" data-v-2ee9f435><path d="M20 6L9 17l-5-5" data-v-2ee9f435></path></svg></span></div><p class="sub" data-v-2ee9f435>لقد أسعدت قلبًا اليوم 🤍 شكرًا لاختيارك عناية سامي</p>',2)),n("div",xo,[n("div",fo,[g(yn,{design:r(y).design,recipient:r(y).name,message:r(y).msg},null,8,["design","recipient","message"])]),n("div",uo,[f[10]||(f[10]=n("h4",null,"تفاصيل الإرسال",-1)),n("div",bo,[n("span",mo,[g(h,{inner:w.user,size:14},null,8,["inner"]),f[3]||(f[3]=x(" المهدى إليه",-1))]),n("span",ho,e(r(y).name),1)]),n("div",vo,[n("span",ko,[g(h,{inner:w.send,size:14},null,8,["inner"]),f[4]||(f[4]=x(" طريقة الإرسال",-1))]),n("span",yo,e(m.value),1)]),n("div",wo,[n("span",_o,[g(h,{inner:w.phone,size:14},null,8,["inner"]),f[5]||(f[5]=x(" رقم الجوال",-1))]),n("span",zo,e(r(y).phone),1)]),n("div",$o,[n("span",Mo,[g(h,{inner:w.clock,size:14},null,8,["inner"]),f[6]||(f[6]=x(" وقت الإرسال",-1))]),n("span",Co,[n("span",Fo,"✓ "+e(r(y).when==="now"?"تم الإرسال الآن":"مجدولة"),1)])]),n("div",Bo,[n("span",Eo,[g(h,{inner:w.cal,size:14},null,8,["inner"]),f[7]||(f[7]=x(" تاريخ الإرسال",-1))]),n("span",{class:"v"},e(s))]),n("div",So,[n("span",Ao,[g(h,{inner:w.card,size:14},null,8,["inner"]),f[8]||(f[8]=x(" رقم العملية",-1))]),n("span",Io,e(r(y).ref),1)]),n("div",{style:jo},[n("span",{style:To},[g(h,{inner:w.check,size:13},null,8,["inner"])]),f[9]||(f[9]=x(" تم إرسال الهدية بنجاح إلى المستلم — ستظهر الهدية في رسالة خاصة من عناية سامي ",-1))])])]),n("div",Do,[n("button",{class:"btn btn-dark",id:"newGift",onClick:f[0]||(f[0]=C=>v("new-gift"))},[g(h,{inner:w.gift,size:15},null,8,["inner"]),f[11]||(f[11]=x(" إهداء جديد ",-1))]),n("button",{class:"btn btn-line",id:"shareGift",onClick:f[1]||(f[1]=C=>{k(),v("share")})},[g(h,{inner:w.share,size:15},null,8,["inner"]),f[12]||(f[12]=x(" مشاركة الهدية ",-1))]),n("button",{class:"btn btn-line",id:"backHome",onClick:f[2]||(f[2]=C=>v("home"))},[g(h,{inner:w.home,size:15},null,8,["inner"]),f[13]||(f[13]=x(" العودة للرئيسية ",-1))])]),p.value?(o(),l("div",Lo,[f[14]||(f[14]=n("label",null,"رابط الهدية",-1)),n("div",Po,[n("input",{id:"gift-share-link",type:"text",value:M.value,readonly:""},null,8,No),r(y).method==="wa"?(o(),l("button",{key:0,class:"btn btn-gold",onClick:a},"إرسال عبر واتساب")):j("",!0),n("button",{class:"btn btn-gold",onClick:N},"نسخ الرابط")]),t.value?(o(),l("small",Ho,"تم نسخ الرابط بنجاح")):j("",!0)])):j("",!0),f[16]||(f[16]=n("div",{class:"thanks"},[n("i",null,"❦"),x(" شكرًا لاختيارك عناية سامي لتقديم تجربة مميزة لمن تحب "),n("i",null,"❦")],-1))]))}},Vo=Nn(Yo,[["__scopeId","data-v-2ee9f435"]]),Go={key:0,class:"gsum"},Ro={class:"card"},Oo={class:"why-gift"},Uo={class:"wi"},Wo={class:"card help-card"},qo={class:"hi"},Ko={key:1,class:"gsum"},Xo={class:"card"},Qo={key:0,class:"pkline"},Zo=["src"],Jo={class:"pr"},na={class:"gs-row"},ra={class:"v"},ta={class:"gs-row"},ea={class:"v",dir:"ltr"},oa={class:"gs-row"},aa={class:"v"},ia={class:"gs-row"},sa={class:"v"},la={class:"gs-row"},da={class:"v"},pa={class:"chip"},ga={key:3,class:"gs-total"},ca={class:"v"},xa={class:"gs-note"},fa={key:0,class:"card help-card"},ua={class:"hi"},ba="text-align:center;padding:20px;border:1.5px dashed var(--line);border-radius:13px;color:var(--mute);font-size:12.5px;margin-bottom:12px",ma="display:block;font-family:var(--font-d);color:var(--ink);margin-bottom:4px",ha={__name:"GiftSummary",setup(P){const{state:d,pkgOf:y}=L(),v=$(()=>d.gpkg?y(d.gpkg):null);$(()=>kn.find(s=>s.id===d.design));const p=$(()=>d.gstep===0||!v.value&&d.gstep<2),t=$(()=>{const s=dn.find(i=>i.id===d.method);return s?s.n:""}),c={head:'<path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>',lock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>'},b=[["هدية رقمية فورية","تصلك أو تصل للمستلم فور إتمام الدفع",'<path d="M13 2L3 14h9l-1 8 10-12h-9z"/>'],["صالحة لمدة 6 أشهر","من تاريخ الشراء",'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>'],["المستلم يختار موعده","يختار الوقت والفرع المناسب له",'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>'],["آمنة وموثوقة","نضمن لك تجربة إهداء مميزة",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>']];return(s,i)=>p.value?(o(),l("div",Go,[n("div",Ro,[i[0]||(i[0]=n("h3",null,"لماذا الإهداء من سامي؟",-1)),n("div",Oo,[(o(),l(_,null,D(b,(m,M)=>n("div",{key:M,class:"wg"},[n("span",Uo,[g(h,{inner:m[2],size:17},null,8,["inner"])]),n("span",null,[n("b",null,e(m[0]),1),n("small",null,e(m[1]),1)])])),64))])]),n("div",Wo,[n("span",qo,[g(h,{inner:c.head,size:18},null,8,["inner"])]),i[1]||(i[1]=n("b",null,"تحتاج مساعدة؟",-1)),i[2]||(i[2]=n("small",null,"فريقنا جاهز لمساعدتك",-1)),i[3]||(i[3]=n("a",{href:"https://wa.me/963959415545"},"تواصل معنا",-1))])])):(o(),l("div",Ko,[n("div",Xo,[i[13]||(i[13]=n("h3",null,"ملخص الإهداء",-1)),v.value?(o(),l("div",Qo,[n("img",{src:v.value.img,alt:""},null,8,Zo),n("span",null,[n("b",null,e(v.value.name),1),n("small",null,"🕐 "+e(v.value.dur)+" دقيقة",1),n("small",null,e(v.value.desc),1),n("span",Jo,e(r(Y)(v.value.price))+" ر.س",1)])])):(o(),l("div",{key:1,style:ba},[n("b",{style:ma},"لم يتم اختيار باقة بعد"),i[4]||(i[4]=x("اختر الباقة المناسبة لإهدائها لمن تحب",-1))])),r(d).gstep>=2?(o(),l(_,{key:2},[n("div",na,[i[5]||(i[5]=n("span",{class:"k"},"👤 المهدى إليه",-1)),n("span",ra,e(r(d).name||"—"),1)]),n("div",ta,[i[6]||(i[6]=n("span",{class:"k"},"📱 رقم الجوال",-1)),n("span",ea,e(r(d).phone||"—"),1)]),n("div",oa,[i[7]||(i[7]=n("span",{class:"k"},"💬 الرسالة",-1)),n("span",aa,e(r(d).msg?"تمت إضافة رسالة مخصصة":"—"),1)]),n("div",ia,[i[8]||(i[8]=n("span",{class:"k"},"📤 طريقة الإرسال",-1)),n("span",sa,e(t.value),1)]),n("div",la,[i[9]||(i[9]=n("span",{class:"k"},"🕐 وقت الإرسال",-1)),n("span",da,[n("span",pa,e(r(d).when==="now"?"فوري":"مجدول"),1)])])],64)):j("",!0),v.value?(o(),l("div",ga,[i[11]||(i[11]=n("span",{class:"k"},"الإجمالي",-1)),n("span",ca,[x(e(r(Y)(v.value.price))+" ",1),i[10]||(i[10]=n("small",{style:{"font-size":"13px"}},"ر.س",-1))])])):j("",!0),n("div",xa,[g(h,{inner:c.lock,size:14},null,8,["inner"]),i[12]||(i[12]=x(" بإتمامك معلومات الهدية مشفرة وآمنة 100%",-1))])]),r(d).gstep===1?(o(),l("div",fa,[n("span",ua,[g(h,{inner:c.head,size:18},null,8,["inner"])]),i[14]||(i[14]=n("b",null,"تحتاج مساعدة؟",-1)),i[15]||(i[15]=n("small",null,"فريقنا جاهز لمساعدتك في اختيار الهدية المثالية",-1)),i[16]||(i[16]=n("a",{href:"https://wa.me/963959415545"},"تواصل معنا",-1))])):j("",!0)]))}},va={class:"shell"},ka={class:"wrap",id:"pkgApp"},ya={key:0,class:"view on"},wa={key:1,class:"g-stage"},_a={class:"view on"},za={id:"gsumWrap"},$a={key:0,class:"view on"},Ma={key:1,class:"g-stage"},Ca={class:"view on"},Fa={id:"gsumWrap"},Ba={class:"wrap"},Ea={class:"f-grid"},Sa={class:"f-brand"},Aa={class:"f-links"},Ia={class:"f-links"},Da=["href"],La={class:"wrap in"},Pa={class:"fb-mid",id:"fbMid"},Na=["disabled"],Ha='<path d="M19 12H5M11 18l-6-6 6-6"/>',Qa={__name:"PackagesGiftsView",setup(P){const d=V(null),{current:y,openPicker:v,requireLocation:p,locations:t,loadServiceLocations:c}=Hn();c();const{requireAuth:b}=jn(),{state:s,pkgOf:i,bkDays:m,gCanNext:M,gNextLabel:a,bkCanNext:k,bkNextLabel:N,startGift:w,startBook:z,backToPackages:f}=L();Yn(ar,"packages-gifts"),Vn(d);const C=V(!1),K=V(""),an=V(!1);function R(B){K.value=B,an.value=!0,clearTimeout(R._h),R._h=setTimeout(()=>{an.value=!1},2600)}const O=$(()=>s.page==="book"),wn=$(()=>O.value?!(s.bk.done||s.bk.step>=2):s.page==="gift"&&!s.done&&s.gstep!==4),_n=$(()=>O.value?!0:s.gstep!==0),pn=$(()=>{const B=O.value?s.bk.pkg:s.gpkg;return B?i(B):null}),gn=$(()=>O.value?k.value:M.value),zn=$(()=>O.value?N.value:a.value);function $n(){if(O.value){if(s.bk.step===0){f();return}s.bk.step--}else{if(s.gstep===0){f();return}s.gstep--}scrollTo({top:0,behavior:"smooth"})}function Mn(){if(gn.value){if(O.value)s.bk.step++;else{if(s.gstep===3){Cn();return}s.gstep++}scrollTo({top:0,behavior:"smooth"})}}function Cn(){var u;const B=Math.max(Number((u=i(s.gpkg))==null?void 0:u.price)||0,0);C.value||!Q.canPay(s,B+Math.round(B*.15))||b(async()=>{var E,S,Z,J,A;C.value=!0;try{const F=await tr({packages:[{id:s.gpkg}],location:{recipient_name:s.name.trim(),recipient_mobile:s.phone.trim(),message:s.msg.trim()||void 0},design:s.design,branch:s.siteBranch||null,send_channel:s.method||"link"}),nn=Math.max(Number((E=i(s.gpkg))==null?void 0:E.price)||0,0),en=nn+Math.round(nn*.15),{gateway:sn,...ln}=Q.payment(s,en),U=await fn(sn,ln);if(U.payment_url){window.location.href=U.payment_url;return}s.ref=(S=F==null?void 0:F.data)!=null&&S.gift_card_id?`#GIFT-${F.data.gift_card_id}`:"#GIFT",s.claimUrl=((Z=F==null?void 0:F.data)==null?void 0:Z.share_url)||((J=F==null?void 0:F.data)==null?void 0:J.claim_url)||null,s.claimToken=((A=F==null?void 0:F.data)==null?void 0:A.claim_token)||null,s.done=!0,s.gstep=4,scrollTo({top:0,behavior:"smooth"})}catch(F){console.error("Package gift error:",F),R((F==null?void 0:F.message)||"تعذر إنشاء الهدية، حاول مرة أخرى")}finally{C.value=!1}})}function Fn(B){return`${B.getFullYear()}-${String(B.getMonth()+1).padStart(2,"0")}-${String(B.getDate()).padStart(2,"0")}`}function Bn(){var u;const B=Math.max(Number((u=i(s.bk.pkg))==null?void 0:u.price)||0,0);C.value||!Q.canPay(s.bk,B+Math.round(B*.15))||b(async()=>{var E,S,Z,J;C.value=!0;try{const A=s.bk,F=m()[A.dayIdx];await rr({package_id:A.pkg,branch_id:A.branch,date:Fn(F),time:A.time,employee_id:(E=A.employee)==null?void 0:E.id,notes:A.notes||void 0});const nn=Math.max(Number((S=i(A.pkg))==null?void 0:S.price)||0,0),en=nn+Math.round(nn*.15),{gateway:sn,...ln}=Q.payment(A,en),U=await fn(sn,ln);if(U.payment_url){const on=i(A.pkg);Zn({b:on.branchName,d:W(F),u:`${on.dur} دقيقة`,e:((Z=A.employee)==null?void 0:Z.name)||"",p:en,s:[[on.name,q(A.time),((J=A.employee)==null?void 0:J.name)||"",on.price]]},U.attempt_id),window.location.href=U.payment_url;return}s.bk.ref=U.invoice_id||null,s.bk.done=!0,scrollTo({top:0,behavior:"smooth"})}catch(A){R(A.message||"تعذّر إتمام الحجز، حاول مرة أخرى")}finally{C.value=!1}})}function cn(){y.value&&(s.siteBranch=y.value.id)}function En(B){z(B)}function Sn(B){p(()=>{cn(),w("pkg",B)})}function An(){p(()=>{cn(),w(null,null)})}function In(){s.done=!1,s.gstep=0,s.gtype=null,s.gpkg=null,s.pay=null,s.ref=null,scrollTo({top:0,behavior:"smooth"})}function xn(){location.href="/"}return(B,u)=>{const E=hn("RouterLink");return o(),l("div",{ref_key:"root",ref:d},[n("div",va,[n("div",ka,[r(s).page==="packages"?(o(),T(zr,{key:0,onBook:En,onGift:Sn,onGiftNow:An,onPickBranch:r(v)},null,8,["onPickBranch"])):r(s).page==="book"?(o(),l(_,{key:1},[g(Er),r(s).bk.done?(o(),l("div",ya,[g(Kt,{onHome:xn,onCalendar:u[0]||(u[0]=S=>R("تمت إضافة الموعد إلى التقويم")),onShare:u[1]||(u[1]=S=>R("تم نسخ رابط الحجز للمشاركة"))})])):(o(),l("div",wa,[n("main",_a,[r(s).bk.step===0?(o(),T(Or,{key:0})):r(s).bk.step===1?(o(),T(bt,{key:1})):(o(),T(yt,{key:2,onPay:Bn}))]),n("aside",za,[g(fe)])]))],64)):(o(),l(_,{key:2},[g(ke),r(s).done?(o(),l("div",$a,[g(Vo,{onRecipient:u[2]||(u[2]=S=>r(s).claimUrl&&(B.location.href=r(s).claimUrl)),onNewGift:In,onCopySelf:u[3]||(u[3]=S=>R("تم إرسال نسخة من الهدية إلى بريدك")),onShare:u[4]||(u[4]=S=>R("تم نسخ رابط الهدية للمشاركة")),onHome:xn})])):(o(),l("div",Ma,[n("main",Ca,[r(s).gstep===0?(o(),T(Be,{key:0})):r(s).gstep===1?(o(),T(Ye,{key:1})):r(s).gstep===2?(o(),T(lo,{key:2})):(o(),T(go,{key:3}))]),n("aside",Fa,[g(ha)])]))],64))])]),n("footer",null,[n("div",Ba,[n("div",Ea,[n("div",Sa,[g(E,{class:"logo",to:"/"},{default:H(()=>[...u[5]||(u[5]=[n("span",{class:"mark"},[n("img",{src:Tn,alt:"عناية سامي",style:{width:"29px",height:"29px","object-fit":"contain"}})],-1),n("span",{class:"name"},[n("b",null,"عناية سامي"),n("span",null,"SAMI CARE")],-1)])]),_:1}),u[6]||(u[6]=tn('<p>مركز متخصص في العناية الرجالية المتكاملة بجدة، حيث تلتقي الفخامة بالاحترافية في كل تفصيلة.</p><div class="socials"><a href="https://x.com/samicare_sa" aria-label="X"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-6.8 7.8L23.3 22h-6.3l-4.9-6.4L6.5 22H3.4l7.3-8.3L1 2h6.5l4.4 5.8L18.9 2zm-1.1 18h1.7L7.1 3.9H5.3L17.8 20z"></path></svg></a><a href="https://www.instagram.com/samicare.sa/" aria-label="انستقرام"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1" fill="currentColor"></circle></svg></a><a href="https://www.facebook.com/samicare.sa" aria-label="فيسبوك"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg></a></div>',2))]),n("div",null,[u[12]||(u[12]=n("h4",null,"روابط مهمة",-1)),n("ul",Aa,[n("li",null,[g(E,{to:"/"},{default:H(()=>[...u[7]||(u[7]=[x("الرئيسية",-1)])]),_:1})]),n("li",null,[g(E,{to:"/booking"},{default:H(()=>[...u[8]||(u[8]=[x("حجز موعد",-1)])]),_:1})]),n("li",null,[g(E,{to:"/#services"},{default:H(()=>[...u[9]||(u[9]=[x("خدماتنا",-1)])]),_:1})]),n("li",null,[g(E,{to:"/packages-gifts"},{default:H(()=>[...u[10]||(u[10]=[x("الباقات",-1)])]),_:1})]),n("li",null,[g(E,{to:"/gifts"},{default:H(()=>[...u[11]||(u[11]=[x("الهدايا",-1)])]),_:1})])])]),n("div",null,[u[18]||(u[18]=n("h4",null,"استكشف",-1)),n("ul",Ia,[n("li",null,[g(E,{to:"/store"},{default:H(()=>[...u[13]||(u[13]=[x("المتجر",-1)])]),_:1})]),n("li",null,[g(E,{to:"/branches"},{default:H(()=>[...u[14]||(u[14]=[x("فروعنا",-1)])]),_:1})]),n("li",null,[g(E,{to:"/contact"},{default:H(()=>[...u[15]||(u[15]=[x("تواصل معنا",-1)])]),_:1})]),n("li",null,[g(E,{to:"/terms"},{default:H(()=>[...u[16]||(u[16]=[x("الشروط والأحكام",-1)])]),_:1})]),n("li",null,[g(E,{to:"/privacy-policy"},{default:H(()=>[...u[17]||(u[17]=[x("سياسة الخصوصية",-1)])]),_:1})])])]),n("div",null,[u[19]||(u[19]=n("h4",null,"عناوين الفروع",-1)),(o(!0),l(_,null,D(r(t),S=>(o(),l("div",{key:S.id,class:"f-branch"},[n("b",null,e(S.name),1),n("small",null,e(S.address),1),S.contact_number?(o(),l("a",{key:0,href:`tel:${S.contact_number}`},e(S.contact_number),9,Da)):j("",!0)]))),128)),u[20]||(u[20]=n("div",{class:"f-branch"},[n("b",null,"خدمات منزلية"),n("small",null,"حلاقة شعر ولحية وماسكات طبيعية")],-1))])]),u[21]||(u[21]=tn('<div class="f-bottom"><small>© 2026 عناية سامي — جميع الحقوق محفوظة</small><div class="pay" aria-label="بوابات الدفع"><span title="Visa">VISA</span><span title="Mastercard">Mastercard</span><span title="مدى">mada</span><span title="Tabby">tabby</span><span title="Apple Pay">Pay</span></div></div>',1))])]),n("div",{class:I(["footbar",{on:wn.value}]),id:"footbar"},[n("div",La,[n("button",{class:"btn btn-back",id:"btnBack",style:G({visibility:_n.value?"visible":"hidden"}),onClick:$n},[...u[22]||(u[22]=[n("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[n("path",{d:"M5 12h14M13 6l6 6-6 6"})],-1),x(" السابق ",-1)])],4),n("div",Pa,[pn.value?(o(),l(_,{key:0},[u[23]||(u[23]=x("الإجمالي ",-1)),n("b",null,e(r(Y)(pn.value.price))+" ر.س",1),u[24]||(u[24]=x(" — 🔒 بياناتك محمية وآمنة",-1))],64)):(o(),l(_,{key:1},[x("🔒 بياناتك محمية وآمنة")],64))]),n("button",{class:"btn btn-gold",id:"btnNext",disabled:!gn.value,onClick:Mn},[x(e(zn.value)+" ",1),g(h,{inner:Ha,size:15})],8,Na)])],2),n("div",{class:I(["pay-loading",{on:C.value}]),id:"payLoading"},[...u[25]||(u[25]=[n("div",{class:"pl-box"},[n("div",{class:"pl-ring"}),n("b",null,"جارٍ إتمام الإهداء بأمان…"),n("small",null,"سيتم إرسال الهدية مباشرة بعد إتمام الدفع")],-1)])],2),n("div",{class:I(["toast",{on:an.value}]),id:"toast"},e(K.value),3)],512)}}};export{Qa as default};
