import{d as z,o as t,c as s,H as tn,b as n,e as r,F as w,a as x,t as o,r as N,z as U,n as L,s as H,f as p,$ as v,q as G,g as O,x as Ln,E as Nn,u as Hn,C as hn,K as Q,V as en,k as Y,X as J,a3 as vn,U as jn,_ as Tn,i as Yn,v as Vn,a5 as Gn}from"./index-BHOMaz1u.js";import{u as Rn}from"./usePageStyles-DnIXd0gr.js";import{u as On}from"./useInternalLinks-DAanAWlH.js";import{u as j,B as Un,a as qn,A as Wn,b as Kn,f as K,c as X,r as q,C as kn,d as Xn,G as Qn,e as Jn,D as yn,S as dn}from"./CheckoutPaymentOptions-D_LJgqQh.js";import{b as Zn,B as nr,s as rr}from"./BookingQr-YB-TgOJu.js";import{f as er,b as tr,i as un,d as or}from"./PaymentMethodList-CfQ2OU98.js";import{c as ar}from"./giftsApi-CJ0c23Se.js";import{_ as ir}from"./complete-care-hq-DbNf4QGN.js";import{P as wn}from"./PackagePrice-CyK2fAWg.js";import{F as sr}from"./FavoriteButton-BJtNjZNJ.js";import{_ as fn}from"./SkeletonLoader-Veg7_xPU.js";import{u as lr}from"./useQuietHours-_ntvc7hC.js";import{G as _n}from"./GiftCard-B7z6g5gC.js";import"./accountApi-Bp8K4p7X.js";const dr=`\r
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
`,pr={class:"branch-gate"},gr={class:"ph"},cr=["src","alt"],xr={class:"body"},ur={class:"dur"},fr={class:"desc"},br={class:"inc"},mr={class:"acts"},hr=["data-book","onClick"],vr=["data-gift","onClick"],kr={class:"gift-banner"},yr={class:"txt"},wr={class:"mini-feats"},_r={class:"mi"},zr={class:"cta"},$r={class:"perks"},Mr={class:"pi"},Cr={__name:"PackagesCatalog",emits:["book","gift","gift-now","pick-branch"],setup(T,{emit:g}){const{state:m,filteredPkgs:y}=j(),f=g,e=z(()=>{const u=Un.find(l=>l.id===m.siteBranch);return u?u.name:""}),c=z(()=>`grid-template-columns:repeat(${Math.min(y.value.length,5)},1fr)`),a={clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',gift:'<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7s-2-5-5-5-3 5 0 5h5zM12 7s2-5 5-5 3 5 0 5h-5z"/>'},d=[["بطاقة إهداء رقمية",'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>'],["رسالة مخصصة من قلبك",'<path d="M21 11.5a8.4 8.4 0 01-9 8.4 8.5 8.5 0 01-3.8-.9L3 21l2-5.2a8.4 8.4 0 011.5-9.8 8.5 8.5 0 0114.5 5.5z"/>'],["إرسال فوري عبر واتساب أو بريد",'<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>'],["جدولة الإهداء في الوقت المناسب",'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>']],h=[["غرفة VIP خاصة","لباقات مختارة",'<path d="M2 8l4 4 6-8 6 8 4-4v10a2 2 0 01-2 2H4a2 2 0 01-2-2z"/>'],["منتجات فاخرة","ضمن باقاتك",'<path d="M20 12v9H4v-9M2 7h20v5H2z"/>'],["أولوية في الحجز","مواعيد مرنة",'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4"/>'],["ضيافة فاخرة","مشروبات مختارة",'<path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4z"/>'],["نقاط ولاء مضاعفة","مع كل باقة",'<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7"/>'],["ضمان الجودة","أفضل تجربة",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>']];return(u,l)=>(t(),s(w,null,[l[14]||(l[14]=tn('<section class="pk-hero"><div class="bg"><img src="'+ir+'" alt=""></div><svg class="ghost-logo" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width=".8"><path d="M12 2l9 5v10l-9 5-9-5V7z"></path><path d="M12 2v20M3 7l9 5 9-5M3 17l9-5 9 5"></path></svg><div class="in"><div class="eyebrow">تجارب متكاملة</div><h1>لراحتـك وأناقتـك</h1><p>اختر الباقة التي تناسب احتياجاتك واستمتع بتجربة عناية متكاملة توفر عليك الوقت والجهد</p></div></section>',1)),n("div",pr,[r(m).siteBranch?(t(),s(w,{key:0},[n("span",null,[l[3]||(l[3]=x("📍 الفرع المختار: ",-1)),n("b",null,o(e.value),1)]),n("button",{id:"branchGateChange",onClick:l[0]||(l[0]=i=>f("pick-branch"))},"تغيير الفرع")],64)):(t(),s(w,{key:1},[l[4]||(l[4]=n("span",null,"حدد فرعك أولًا لعرض الأسعار والمواعيد المتاحة بدقة",-1)),n("button",{id:"branchGateChange",class:"primary",onClick:l[1]||(l[1]=i=>f("pick-branch"))},"اختر الفرع")],64))]),n("div",{class:"pkgs",style:U(c.value)},[(t(!0),s(w,null,N(r(y),(i,$)=>(t(),s("article",{key:i.id,class:L(["pkg",{hot:i.hot}]),style:U(`--pc:${i.color};animation-delay:${$*.07}s`)},[n("div",gr,[n("img",{src:i.img,alt:i.name},null,8,cr),i.hot?(t(),s(w,{key:0},[l[5]||(l[5]=n("span",{class:"hotflag"},"الأكثر طلبًا",-1)),l[6]||(l[6]=n("span",{class:"starflag"},"★",-1))],64)):H("",!0)]),n("span",{class:"badge",style:U(`border-color:${i.hex}`)},[p(v,{inner:i.ico,size:22},null,8,["inner"])],4),n("div",xr,[p(sr,{type:"package",id:i.id},null,8,["id"]),n("h3",null,o(i.name),1),n("div",ur,[p(v,{inner:a.clock,size:13},null,8,["inner"]),x(" "+o(i.dur)+" دقيقة",1)]),n("div",fr,o(i.desc),1),n("div",br,[l[8]||(l[8]=n("b",null,"تشمل الباقة",-1)),n("ul",null,[(t(!0),s(w,null,N(i.inc,(V,E)=>(t(),s("li",{key:E},[l[7]||(l[7]=n("i",null,"✓",-1)),x(o(V),1)]))),128))])]),p(wn,{price:i.price,savings:i.savings,original:i.originalPrice},null,8,["price","savings","original"]),n("div",mr,[n("button",{class:"book","data-book":i.id,onClick:V=>f("book",i.id)},"احجز الباقة",8,hr),n("button",{class:"gift-mini","data-gift":i.id,onClick:V=>f("gift",i.id)},[p(v,{inner:a.gift,size:14},null,8,["inner"]),l[9]||(l[9]=x(" أهدِ هذه الباقة",-1))],8,vr)])])],6))),128))],4),n("section",kr,[l[13]||(l[13]=n("div",{class:"gb-box"},[n("div",{class:"face"}),n("span",{class:"tag"},"هدية لكم من القلب 💛")],-1)),n("div",yr,[l[10]||(l[10]=n("h2",null,"أهدِ تجربة فاخرة لمن تحب",-1)),l[11]||(l[11]=n("p",null,"اختر الباقة، أضف رسالة مخصصة، وسيصلك المهدى إليه بشكل أنيق في الوقت المناسب",-1)),n("div",wr,[(t(),s(w,null,N(d,(i,$)=>n("div",{key:$,class:"mf"},[n("span",_r,[p(v,{inner:i[1],size:16},null,8,["inner"])]),x(o(i[0]),1)])),64))])]),n("div",zr,[n("button",{class:"btn btn-gold",id:"giftNow",onClick:l[2]||(l[2]=i=>f("gift-now"))},[p(v,{inner:a.gift,size:16},null,8,["inner"]),l[12]||(l[12]=x(" أهدِ باقة الآن",-1))])])]),n("div",$r,[(t(),s(w,null,N(h,(i,$)=>n("div",{key:$,class:"perk"},[n("span",Mr,[p(v,{inner:i[2],size:17},null,8,["inner"])]),n("b",null,o(i[0]),1),n("small",null,o(i[1]),1)])),64))])],64))}},Fr={class:"g-stepper"},Br={class:"g-steps"},Er=["data-bi"],Sr={class:"bubble"},Ar='<path d="M20 6L9 17l-5-5"/>',Ir={__name:"BookStepper",setup(T){const{state:g}=j();return(m,y)=>(t(),s("div",Fr,[n("div",Br,[(t(!0),s(w,null,N(r(qn),(f,e)=>(t(),s("div",{key:e,class:L(["g-step",{active:e===r(g).bk.step&&!r(g).bk.done,done:e<r(g).bk.step||r(g).bk.done}]),"data-bi":e},[y[0]||(y[0]=n("div",{class:"bar"},[n("i")],-1)),n("span",Sr,[e<r(g).bk.step||r(g).bk.done?(t(),G(v,{key:0,inner:Ar,size:17})):(t(),s(w,{key:1},[x(o(e+1),1)],64))]),n("b",null,o(f.t),1),n("small",null,o(f.s),1)],10,Er))),128))])]))}},Pr={class:"g-head"},Dr={class:"card",style:{padding:"20px","margin-bottom":"16px"}},Lr={class:"daystrip"},Nr=["data-bd","onClick"],Hr={key:0,class:"card",style:{padding:"20px"}},jr={key:1,class:"card",style:{padding:"20px"}},Tr={class:"periods"},Yr=["data-bp","onClick"],Vr={key:1,class:"slots"},Gr=["data-bt","onClick"],Rr={key:0,class:"tag"},Or={key:2,"data-no-i18n":"",style:{display:"block",color:"#26714d","font-size":"11px","white-space":"normal"}},Ur={key:2,class:"card",style:{padding:"40px","text-align":"center",color:"var(--mute)","font-size":"13.5px"}},bn="grid-column:1/-1;text-align:center;color:var(--mute);padding:30px;border:1.5px dashed var(--line);border-radius:14px;font-size:13px",qr="font-family:var(--font-d);font-size:15px;color:var(--ink);margin-bottom:12px",Wr="font-family:var(--font-d);font-size:15px;color:var(--ink);margin-bottom:4px",Kr={__name:"BookTimeStep",setup(T){const{bonus:g}=lr(),{state:m}=Hn(),y=_=>g(a.branch,a.dayIdx==null?"":$(d[a.dayIdx]),_),{state:f,pkgOf:e,bkDays:c}=j(),a=f.bk,d=c(),h=z(()=>e(a.pkg)),u=O(!0),l=O([]),i=O(!1);function $(_){return`${_.getFullYear()}-${String(_.getMonth()+1).padStart(2,"0")}-${String(_.getDate()).padStart(2,"0")}`}Ln(async()=>{if(a.employee){u.value=!1;return}try{const _=await er({branchId:a.branch,serviceId:0}),C=(Array.isArray(_)?_:[])[0];C&&(a.employee={id:C.id,name:[C.first_name,C.last_name].filter(Boolean).join(" ")||"موظف"})}catch{a.employee=null}finally{u.value=!1}});async function V(){var _;if(a.dayIdx==null||!a.employee){l.value=[];return}i.value=!0;try{const C=await tr({date:$(d[a.dayIdx]),staffId:a.employee.id,durationMin:(_=h.value)==null?void 0:_.dur});l.value=Array.isArray(C)?C:[]}catch{l.value=[]}finally{i.value=!1}}Nn(()=>{var _;return[a.dayIdx,(_=a.employee)==null?void 0:_.id]},V);const E=z(()=>l.value.filter(_=>{const C=Number(_.split(":")[0]);return a.period==="all"||a.period==="am"&&C<12||a.period==="pm"&&C>=12&&C<17||a.period==="eve"&&C>=17})),A=_=>_===2?"الأكثر طلبًا":_===E.value.length-1?"آخر موعد":"",k=[["all","كل اليوم","🗓️"],["am","صباحًا","☀️"],["pm","مساءً","🌇"]];return(_,C)=>(t(),s(w,null,[n("div",Pr,[C[0]||(C[0]=n("h1",null,"اختر الوقت والتاريخ",-1)),n("p",null,"اختر الوقت المناسب لك — مدة الباقة "+o(h.value.dur)+" دقيقة",1)]),n("div",Dr,[n("h4",{style:qr},"📅 اختر اليوم"),n("div",Lr,[(t(!0),s(w,null,N(r(d),(M,S)=>(t(),s("div",{key:S,class:L(["day",{sel:r(a).dayIdx===S}]),"data-bd":S,onClick:R=>{r(a).dayIdx=S,r(a).time=null}},[n("small",null,o(r(Wn)[M.getDay()]),1),n("b",null,o(M.getDate()),1),n("small",null,o(r(Kn)[M.getMonth()]),1)],10,Nr))),128))])]),u.value?(t(),s("div",Hr,[p(fn,{height:"72px","border-radius":"12px"})])):r(a).dayIdx!=null?(t(),s("div",jr,[n("h4",{style:Wr},"🕐 "+o(r(K)(r(d)[r(a).dayIdx])),1),n("div",Tr,[(t(),s(w,null,N(k,M=>n("button",{key:M[0],class:L(["period",{sel:r(a).period===M[0]}]),"data-bp":M[0],onClick:S=>r(a).period=M[0]},o(M[2])+" "+o(M[1]),11,Yr)),64))]),i.value?(t(),s("div",{key:0,style:bn},[p(fn,{height:"44px","border-radius":"10px"})])):(t(),s("div",Vr,[E.value.length?(t(!0),s(w,{key:0},N(E.value,(M,S)=>(t(),s("button",{key:M,class:L(["slot",{sel:r(a).time===M}]),"data-bt":M,style:U(`animation-delay:${Math.min(S*.03,.4)}s`),onClick:R=>r(a).time=M},[A(S)?(t(),s("span",Rr,o(A(S)),1)):(t(),s(w,{key:1},[],64)),x(o(r(X)(M)),1),y(M)?(t(),s("small",Or,o(r(m).lang==="en"?`Quiet hours: +${y(M)} points on completion`:`وقت هدوء: +${y(M)} نقطة عند إكمال الحجز`),1)):H("",!0)],14,Gr))),128)):(t(),s("div",{key:1,style:bn},"لا توجد أوقات متاحة في هذه الفترة"))]))])):(t(),s("div",Ur,[...C[1]||(C[1]=[n("b",{style:{display:"block","font-family":"var(--font-d)","font-size":"16px",color:"var(--ink)","margin-bottom":"6px"}},"ابدأ باختيار اليوم",-1),x("اختر يومًا من الشريط أعلاه لعرض الأوقات المتاحة",-1)])]))],64))}},Xr={class:"ok-banner"},Qr={class:"ic"},Jr=["src","alt"],Zr={class:"t"},ne={class:"incs"},re={class:"pr"},ee={class:"card bk-rows",style:{"margin-bottom":"16px"}},te={class:"gs-row"},oe={class:"k"},ae={class:"v"},ie={class:"gs-row"},se={class:"k"},le={class:"v"},de={class:"gs-row"},pe={class:"k"},ge={class:"v",dir:"ltr"},ce={class:"gs-row"},xe={class:"k"},ue={class:"v"},fe={class:"card",style:{padding:"20px"}},be={class:"fld",style:{margin:"0"}},me="font-size:12px;color:var(--mute);font-family:var(--font-b)",he="display:flex;gap:9px;align-items:center;font-size:12px;color:var(--mute);background:rgba(198,161,91,.08);border-radius:11px;padding:11px 15px;margin-top:14px",ve="color:var(--gold-deep);font-weight:600;text-decoration:underline",ke={__name:"BookConfirmStep",setup(T){const{state:g,pkgOf:m,bkDays:y}=j(),f=g.bk,e=z(()=>m(f.pkg)),c=z(()=>y()[f.dayIdx]),a={check:'<path d="M20 6L9 17l-5-5"/>',pin:'<path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>',cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>'};return(d,h)=>{const u=hn("RouterLink");return t(),s(w,null,[h[9]||(h[9]=n("div",{class:"g-head"},[n("h1",null,"تأكيد الحجز"),n("p",null,"راجع تفاصيل الحجز قبل المتابعة للدفع")],-1)),n("div",Xr,[n("span",Qr,[p(v,{inner:a.check,size:16},null,8,["inner"])]),h[1]||(h[1]=n("div",null,[n("b",null,"تم حفظ موعدك بنجاح"),n("small",null,"يمكنك تعديل أو إلغاء الحجز قبل 6 ساعات من وقت الموعد")],-1))]),n("div",{class:"card bk-pkg-hero",style:U(`--pc:${e.value.color}`)},[n("img",{src:e.value.img,alt:e.value.name},null,8,Jr),n("div",Zr,[n("h4",null,o(e.value.name),1),n("small",null,"🕐 "+o(e.value.dur)+" دقيقة — "+o(e.value.desc),1),n("div",ne,[(t(!0),s(w,null,N(e.value.inc,(l,i)=>(t(),s("span",{key:i},"✓ "+o(l),1))),128))])]),n("div",re,[x(o(r(q)(e.value.price))+" ",1),n("small",{style:me},"ر.س")])],4),n("div",ee,[n("div",te,[n("span",oe,[p(v,{inner:a.pin,size:15},null,8,["inner"]),h[2]||(h[2]=x(" الفرع",-1))]),n("span",ae,o(e.value.branchName),1)]),n("div",ie,[n("span",se,[p(v,{inner:a.cal,size:15},null,8,["inner"]),h[3]||(h[3]=x(" التاريخ",-1))]),n("span",le,o(r(K)(c.value)),1)]),n("div",de,[n("span",pe,[p(v,{inner:a.clock,size:15},null,8,["inner"]),h[4]||(h[4]=x(" الوقت",-1))]),n("span",ge,o(r(X)(r(f).time)),1)]),n("div",ce,[n("span",xe,[p(v,{inner:a.info,size:15},null,8,["inner"]),h[5]||(h[5]=x(" مدة الجلسة",-1))]),n("span",ue,o(e.value.dur)+" دقيقة",1)])]),n("div",fe,[n("div",be,[h[6]||(h[6]=n("label",null,"📝 ملاحظات (اختياري)",-1)),Q(n("textarea",{id:"bkNotes",placeholder:"أضف أي ملاحظة...","onUpdate:modelValue":h[0]||(h[0]=l=>r(f).notes=l)},null,512),[[en,r(f).notes]])]),n("div",{style:he},[h[8]||(h[8]=x(" 🛡️ بالتأكيد على الحجز، فإنك توافق على ",-1)),p(u,{to:"/terms",style:ve},{default:Y(()=>[...h[7]||(h[7]=[x("الشروط والأحكام",-1)])]),_:1})])])],64)}}},ye={class:"card pay-summary-strip"},we={class:"amt"},_e={class:"card",style:{padding:"20px"}},ze=["disabled"],$e={__name:"BookPayStep",emits:["pay"],setup(T,{emit:g}){const{state:m,pkgOf:y,bkDays:f}=j(),e=g,c=m.bk,a=z(()=>y(c.pkg)),d=z(()=>f()[c.dayIdx]),h=z(()=>{var $;const i=Math.max(Number(($=a.value)==null?void 0:$.price)||0,0);return i+Math.round(i*.15)}),u=z(()=>J.rewards(c,h.value).payable),l=z(()=>J.canPay(c,h.value));return(i,$)=>(t(),s(w,null,[$[1]||($[1]=n("div",{class:"g-head"},[n("h1",null,"اختر طريقة الدفع"),n("p",null,"ادفع بأمان وسهولة")],-1)),n("div",ye,[n("b",null,o(a.value.name),1),n("small",null,o(a.value.branchName)+" — "+o(r(K)(d.value))+" • "+o(r(X)(r(c).time)),1),n("span",we,o(r(q)(h.value))+" ر.س",1)]),n("div",_e,[p(kn,{state:r(c),total:h.value},null,8,["state","total"]),n("button",{class:"btn-paynow",disabled:!l.value,onClick:$[0]||($[0]=V=>e("pay"))},"ادفع الآن — "+o(r(q)(u.value))+" ر.س",9,ze)])],64))}},Me={class:"gsuccess"},Ce={class:"gsuc-grid"},Fe={class:"card gsuc-details"},Be={class:"gs-row"},Ee={class:"k"},Se={class:"v"},Ae={class:"gs-row"},Ie={class:"k"},Pe={class:"v"},De={class:"gs-row"},Le={class:"k"},Ne={class:"v"},He={class:"gs-row"},je={class:"k"},Te={class:"v",dir:"ltr"},Ye={class:"gs-row"},Ve={class:"k"},Ge={class:"v"},Re={class:"gs-row"},Oe={class:"k"},Ue={class:"gs-row"},qe={class:"k"},We={class:"v",dir:"ltr"},Ke={class:"card gsuc-details",style:{"text-align":"center"}},Xe={class:"gsuc-actions"},Qe="color:var(--gold-deep);font-family:var(--font-d);font-size:16px",Je="display:flex;gap:8px;margin-top:14px",mn="flex:1;padding:11px;font-size:12px",Ze={__name:"BookSuccess",emits:["home","calendar","share"],setup(T,{emit:g}){const{state:m,pkgOf:y,bkDays:f}=j(),e=g,c=m.bk,a=z(()=>y(c.pkg)),d=z(()=>f()[c.dayIdx]),h=z(()=>{var l,i;return Zn({r:c.ref||"",b:a.value.branchName,d:K(d.value),u:`${a.value.dur} دقيقة`,e:((l=c.employee)==null?void 0:l.name)||"",p:Number(a.value.price)+Math.round(Number(a.value.price)*.15),s:[[a.value.name,X(c.time),((i=c.employee)==null?void 0:i.name)||"",a.value.price]]})}),u={box:'<path d="M20 12v10H4V12M2 7h20v5H2z"/>',pin:'<path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>',cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>',card:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',qr:'<path d="M4 4h16v16H4z"/><path d="M9 9h2v2H9zM13 9h2M9 13h2M13 13h2v2h-2z"/>',home:'<path d="M3 9l9-6 9 6v11a1 1 0 01-1 1H4a1 1 0 01-1-1z"/>',calAdd:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M12 14v4M10 16h4"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>'};return(l,i)=>(t(),s("div",Me,[i[15]||(i[15]=tn('<div class="gsuc-head"><h1>تم تأكيد حجزك بنجاح!</h1><span class="ic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6L9 17l-5-5"></path></svg></span></div><p class="sub">نتطلع لخدمتك وتقديم تجربة استثنائية تليق بك</p>',2)),n("div",Ce,[n("div",Fe,[i[10]||(i[10]=n("h4",null,"تفاصيل الحجز",-1)),n("div",Be,[n("span",Ee,[p(v,{inner:u.box,size:14},null,8,["inner"]),i[3]||(i[3]=x(" الباقة",-1))]),n("span",Se,o(a.value.name),1)]),n("div",Ae,[n("span",Ie,[p(v,{inner:u.pin,size:14},null,8,["inner"]),i[4]||(i[4]=x(" الفرع",-1))]),n("span",Pe,o(a.value.branchName),1)]),n("div",De,[n("span",Le,[p(v,{inner:u.cal,size:14},null,8,["inner"]),i[5]||(i[5]=x(" التاريخ",-1))]),n("span",Ne,o(r(K)(d.value)),1)]),n("div",He,[n("span",je,[p(v,{inner:u.clock,size:14},null,8,["inner"]),i[6]||(i[6]=x(" الوقت",-1))]),n("span",Te,o(r(X)(r(c).time)),1)]),n("div",Ye,[n("span",Ve,[p(v,{inner:u.info,size:14},null,8,["inner"]),i[7]||(i[7]=x(" مدة الجلسة",-1))]),n("span",Ge,o(a.value.dur)+" دقيقة",1)]),n("div",Re,[n("span",Oe,[p(v,{inner:u.card,size:14},null,8,["inner"]),i[8]||(i[8]=x(" المبلغ المدفوع",-1))]),n("span",{class:"v",style:Qe},o(r(q)(a.value.price))+" ر.س",1)]),n("div",Ue,[n("span",qe,[p(v,{inner:u.qr,size:14},null,8,["inner"]),i[9]||(i[9]=x(" رمز الحجز",-1))]),n("span",We,o(r(c).ref),1)])]),n("div",Ke,[i[11]||(i[11]=n("h4",{style:{"text-align":"right"}},"رمز الوصول السريع",-1)),p(nr,{url:h.value},null,8,["url"]),n("div",{style:Je},[n("button",{class:"btn btn-dark",style:mn},"🍎 Apple Wallet"),n("button",{class:"btn btn-dark",style:mn},"📲 Google Wallet")])])]),n("div",Xe,[n("button",{class:"btn btn-gold",id:"bkHome",onClick:i[0]||(i[0]=$=>e("home"))},[p(v,{inner:u.home,size:15},null,8,["inner"]),i[12]||(i[12]=x(" العودة إلى الرئيسية",-1))]),n("button",{class:"btn btn-line",id:"bkCal",onClick:i[1]||(i[1]=$=>e("calendar"))},[p(v,{inner:u.calAdd,size:15},null,8,["inner"]),i[13]||(i[13]=x(" إضافة إلى التقويم",-1))]),n("button",{class:"btn btn-line",id:"bkShare",onClick:i[2]||(i[2]=$=>e("share"))},[p(v,{inner:u.share,size:15},null,8,["inner"]),i[14]||(i[14]=x(" مشاركة الحجز",-1))])]),i[16]||(i[16]=n("div",{class:"thanks"},[n("i",null,"❦"),x(" جودة تستحقها.. تجربة لا تنساها "),n("i",null,"❦")],-1))]))}},nt={class:"gsum"},rt={class:"card"},et={class:"pkline"},tt=["src"],ot={class:"pr"},at={key:0,class:"gs-row"},it={class:"v"},st={key:1,class:"gs-row"},lt={class:"v"},dt={key:2,class:"gs-row"},pt={class:"v"},gt={key:3,class:"gs-row"},ct={class:"v"},xt={class:"gs-total"},ut={class:"v"},ft={class:"gs-note"},bt={class:"card help-card"},mt={class:"hi"},ht=["href"],vt={__name:"BookSummary",setup(T){const{whatsappUrl:g}=vn(),{state:m,pkgOf:y,bkDays:f}=j(),e=m.bk,c=z(()=>y(e.pkg)),a=z(()=>e.dayIdx!=null?f()[e.dayIdx]:null),d=z(()=>{const u=Xn.find(l=>l.id===e.pay);return u?u.n:""}),h={shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',head:'<path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>'};return(u,l)=>(t(),s("div",nt,[n("div",rt,[l[7]||(l[7]=n("h3",null,"ملخص الحجز",-1)),n("div",et,[n("img",{src:c.value.img,alt:""},null,8,tt),n("span",null,[n("b",null,o(c.value.name),1),n("small",null,"🕐 "+o(c.value.dur)+" دقيقة",1),n("small",null,o(c.value.desc),1),n("span",ot,o(r(q)(c.value.price))+" ر.س",1)])]),c.value.branchName?(t(),s("div",at,[l[0]||(l[0]=n("span",{class:"k"},"📍 الفرع",-1)),n("span",it,o(c.value.branchName),1)])):H("",!0),a.value?(t(),s("div",st,[l[1]||(l[1]=n("span",{class:"k"},"📅 التاريخ",-1)),n("span",lt,o(r(K)(a.value)),1)])):H("",!0),r(e).time!=null?(t(),s("div",dt,[l[2]||(l[2]=n("span",{class:"k"},"🕐 الوقت",-1)),n("span",pt,o(r(X)(r(e).time)),1)])):H("",!0),r(e).pay?(t(),s("div",gt,[l[3]||(l[3]=n("span",{class:"k"},"💳 طريقة الدفع",-1)),n("span",ct,o(d.value),1)])):H("",!0),n("div",xt,[l[5]||(l[5]=n("span",{class:"k"},"الإجمالي",-1)),n("span",ut,[x(o(r(q)(c.value.price))+" ",1),l[4]||(l[4]=n("small",{style:{"font-size":"13px"}},"ر.س",-1))])]),n("div",ft,[p(v,{inner:h.shield,size:14},null,8,["inner"]),l[6]||(l[6]=x(" حجز آمن — تعديل أو إلغاء مجاني قبل 6 ساعات",-1))])]),n("div",bt,[n("span",mt,[p(v,{inner:h.head,size:18},null,8,["inner"])]),l[8]||(l[8]=n("b",null,"دعم على مدار الساعة",-1)),l[9]||(l[9]=n("small",null,"نحن هنا لخدمتك",-1)),r(g)?(t(),s("a",{key:0,href:r(g)},"تواصل معنا",8,ht)):H("",!0)])]))}},kt={class:"g-stepper"},yt={class:"g-steps"},wt=["data-i"],_t={class:"bubble"},zt='<path d="M20 6L9 17l-5-5"/>',$t={__name:"GiftStepper",setup(T){const{state:g}=j();return(m,y)=>(t(),s("div",kt,[n("div",yt,[(t(!0),s(w,null,N(r(Qn),(f,e)=>(t(),s("div",{key:e,class:L(["g-step",{active:e===r(g).gstep,done:e<r(g).gstep||r(g).done}]),"data-i":e},[y[0]||(y[0]=n("div",{class:"bar"},[n("i")],-1)),n("span",_t,[e<r(g).gstep||r(g).done?(t(),G(v,{key:0,inner:zt,size:17})):(t(),s(w,{key:1},[x(o(e+1),1)],64))]),n("b",null,o(f.t),1),n("small",null,o(f.s),1)],10,wt))),128))])]))}},Mt={class:"gtype-grid"},Ct=["data-gt","onClick"],Ft={class:"im"},Bt=["src"],Et={class:"ic"},St={class:"bd"},At={class:"go"},It='<path d="M19 12H5M11 18l-6-6 6-6"/>',Pt={__name:"GiftTypeStep",setup(T){const{state:g}=j();return(m,y)=>(t(),s(w,null,[y[0]||(y[0]=n("div",{class:"g-head"},[n("h1",null,"ماذا ترغب بإهدائه؟"),n("p",null,"اختر ما يناسبك لإهداء تجربة مميزة لمن تحب")],-1)),n("div",Mt,[(t(!0),s(w,null,N(r(Jn),f=>(t(),s("div",{key:f.id,class:L(["gtype",{sel:r(g).gtype===f.id}]),"data-gt":f.id,onClick:e=>r(g).gtype=f.id},[n("div",Ft,[n("img",{src:f.img,alt:""},null,8,Bt),n("span",Et,[p(v,{inner:f.ic,size:22},null,8,["inner"])])]),n("div",St,[n("h3",null,o(f.n),1),n("p",null,o(f.d),1),n("span",At,[x(o(f.btn)+" ",1),p(v,{inner:It,size:14})])])],10,Ct))),128))])],64))}},Dt={class:"gp-sort"},Lt={class:"gpkgs"},Nt=["data-gp","onClick"],Ht={class:"ph"},jt=["src","alt"],Tt={class:"chk"},Yt={class:"bd"},Vt={class:"dur"},Gt={class:"desc"},Rt={class:"pick"},Ot={__name:"GiftPickStep",setup(T){const{state:g,packages:m}=j(),y={check:'<path d="M20 6L9 17l-5-5"/>',gift:'<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7s-2-5-5-5-3 5 0 5h5zM12 7s2-5 5-5 3 5 0 5h-5z"/>'},f=z(()=>m.value.slice().sort((e,c)=>g.sort==="low"?e.price-c.price:g.sort==="high"?c.price-e.price:(c.hot?1:0)-(e.hot?1:0)));return(e,c)=>(t(),s(w,null,[c[2]||(c[2]=n("div",{class:"g-head"},[n("h1",null,"اختر الباقة التي ترغب بإهدائها"),n("p",null,"باقات مميزة تمنح تجربة متكاملة من الاسترخاء والعناية")],-1)),n("div",Dt,[Q(n("select",{id:"gpSort","onUpdate:modelValue":c[0]||(c[0]=a=>r(g).sort=a)},[...c[1]||(c[1]=[n("option",{value:"pop"},"الأكثر مبيعًا",-1),n("option",{value:"low"},"السعر: الأقل أولًا",-1),n("option",{value:"high"},"السعر: الأعلى أولًا",-1)])],512),[[jn,r(g).sort]]),n("small",null,o(r(m).length)+" باقات متاحة",1)]),n("div",Lt,[(t(!0),s(w,null,N(f.value,(a,d)=>(t(),s("div",{key:a.id,class:L(["gpkg",{sel:r(g).gpkg===a.id}]),"data-gp":a.id,style:U(`--pc:${a.color};animation-delay:${d*.06}s`),onClick:h=>r(g).gpkg=a.id},[n("div",Ht,[n("img",{src:a.img,alt:a.name},null,8,jt),n("span",Tt,[p(v,{inner:y.check,size:13},null,8,["inner"])])]),n("div",Yt,[n("h4",null,o(a.name),1),n("div",Vt,"🕐 "+o(a.dur)+" دقيقة",1),n("div",Gt,o(a.desc),1),p(wn,{price:a.price,savings:a.savings,original:a.originalPrice},null,8,["price","savings","original"]),n("button",Rt,[p(v,{inner:y.gift,size:14},null,8,["inner"]),x(" "+o(r(g).gpkg===a.id?"تم الاختيار ✓":"أهدِ هذه الباقة"),1)])])],14,Nt))),128))])],64))}},Ut={class:"custom-grid"},qt={class:"preview-col"},Wt={id:"cardPrev"},Kt={class:"form-col"},Xt={class:"card",style:{"margin-bottom":"16px"}},Qt={class:"two"},Jt={class:"fld"},Zt={class:"fld"},no={class:"fld",style:{"margin-bottom":"4px"}},ro={class:"card",style:{"margin-bottom":"16px"}},eo={class:"designs"},to=["data-d","onClick"],oo={class:"dchk"},ao={style:{visibility:"hidden"},"aria-hidden":"true"},io={class:"card"},so={class:"send-opts"},lo={class:"fld",style:{margin:"0"}},po={class:"methods",style:{"margin-top":"14px"}},go=["data-m","onClick"],co={class:"mi"},xo={__name:"GiftCustomizeStep",setup(T){const{state:g}=j(),m=z(()=>200-g.msg.length),y={eye:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',user:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',brush:'<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.6 7.6"/><circle cx="11" cy="11" r="2"/>',send:'<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>',check:'<path d="M20 6L9 17l-5-5"/>'};return(f,e)=>(t(),s(w,null,[e[17]||(e[17]=n("div",{class:"g-head"},[n("h1",null,"خصص هديتك لتكون أجمل"),n("p",null,"أضف لمستك الخاصة مع رسالة وتصميم بطاقة الإهداء")],-1)),n("div",Ut,[n("div",qt,[n("h4",null,[p(v,{inner:y.eye,size:16},null,8,["inner"]),e[6]||(e[6]=x(" معاينة بطاقة الإهداء",-1))]),n("div",Wt,[p(_n,{design:r(g).design,recipient:r(g).name,message:r(g).msg},null,8,["design","recipient","message"])])]),n("div",Kt,[n("div",Xt,[n("h4",null,[p(v,{inner:y.user,size:16},null,8,["inner"]),e[7]||(e[7]=x(" بيانات المهدى إليه",-1))]),n("div",Qt,[n("div",Jt,[e[8]||(e[8]=n("label",null,"الاسم الكامل",-1)),Q(n("input",{id:"gName",placeholder:"أحمد محمد","onUpdate:modelValue":e[0]||(e[0]=c=>r(g).name=c)},null,512),[[en,r(g).name]])]),n("div",Zt,[e[9]||(e[9]=n("label",null,"رقم الجوال",-1)),Q(n("input",{id:"gPhone",dir:"ltr",placeholder:"05xxxxxxxx","onUpdate:modelValue":e[1]||(e[1]=c=>r(g).phone=c)},null,512),[[en,r(g).phone]])])]),n("div",no,[e[10]||(e[10]=n("label",null,"الرسالة الشخصية",-1)),Q(n("textarea",{id:"gMsg",maxlength:"200",placeholder:"اكتب رسالتك من القلب...","onUpdate:modelValue":e[2]||(e[2]=c=>r(g).msg=c)},null,512),[[en,r(g).msg]]),n("span",{class:L(["cnt",{max:m.value<20}]),id:"gCnt"},o(r(g).msg.length)+"/200",3)])]),n("div",ro,[n("h4",null,[p(v,{inner:y.brush,size:16},null,8,["inner"]),e[11]||(e[11]=x(" تصميم بطاقة الإهداء",-1))]),n("div",eo,[(t(!0),s(w,null,N(r(yn),c=>(t(),s("div",{key:c.id,class:L(["design",{sel:r(g).design===c.id}]),"data-d":c.id,onClick:a=>r(g).design=c.id},[n("div",{class:"sw",style:U(`background:${c.bg};color:${c.fg}`)},[n("span",oo,[p(v,{inner:y.check,size:10},null,8,["inner"])]),e[12]||(e[12]=x("SAMI",-1))],4),n("small",ao,o(c.n),1)],10,to))),128))])]),n("div",io,[n("h4",null,[p(v,{inner:y.send,size:16},null,8,["inner"]),e[13]||(e[13]=x(" طريقة الإرسال",-1))]),n("div",so,[n("span",{class:L(["ro",{on:r(g).when==="now"}]),"data-w":"now",onClick:e[3]||(e[3]=c=>r(g).when="now")},[...e[14]||(e[14]=[n("i",null,null,-1),x(" إرسال الآن",-1)])],2),n("span",{class:L(["ro",{on:r(g).when==="later"}]),"data-w":"later",onClick:e[4]||(e[4]=c=>r(g).when="later")},[...e[15]||(e[15]=[n("i",null,null,-1),x(" 📅 جدولة لاحقًا",-1)])],2)]),n("div",{class:L(["sched-box",{open:r(g).when==="later"}])},[n("div",lo,[e[16]||(e[16]=n("label",null,"موعد الإرسال",-1)),Q(n("input",{type:"datetime-local",id:"gSched","onUpdate:modelValue":e[5]||(e[5]=c=>r(g).schedDate=c)},null,512),[[en,r(g).schedDate]])])],2),n("div",po,[(t(!0),s(w,null,N(r(dn),c=>(t(),s("div",{key:c.id,class:L(["mth",{sel:r(g).method===c.id}]),"data-m":c.id,onClick:a=>r(g).method=c.id},[n("span",co,[p(v,{inner:c.ic,size:17},null,8,["inner"])]),x(o(c.n),1)],10,go))),128))])])])])],64))}},uo={class:"card",style:{padding:"22px","margin-bottom":"16px"}},fo={__name:"GiftPayStep",setup(T){const{state:g,pkgOf:m}=j(),y=z(()=>{var e;const f=Math.max(Number((e=m(g.gpkg))==null?void 0:e.price)||0,0);return f+Math.round(f*.15)});return(f,e)=>(t(),s(w,null,[e[0]||(e[0]=n("div",{class:"g-head"},[n("h1",null,"أكمل الدفع لإرسال هديتك"),n("p",null,"اختر طريقة الدفع المناسبة")],-1)),n("div",uo,[p(kn,{state:r(g),total:y.value},null,8,["state","total"])])],64))}},bo={class:"gsuccess"},mo={class:"gsuc-grid"},ho={class:"gsuc-card-col"},vo={class:"card gsuc-details"},ko={class:"gs-row"},yo={class:"k"},wo={class:"v"},_o={class:"gs-row"},zo={class:"k"},$o={class:"v"},Mo={class:"gs-row"},Co={class:"k"},Fo={class:"v",dir:"ltr"},Bo={class:"gs-row"},Eo={class:"k"},So={class:"v"},Ao={class:"chip"},Io={class:"gs-row"},Po={class:"k"},Do={class:"gs-row"},Lo={class:"k"},No={class:"v",dir:"ltr"},Ho={class:"gsuc-actions"},jo={key:0,class:"gift-share-panel"},To={class:"gift-share-row"},Yo=["value"],Vo={key:0},Go="display:flex;gap:10px;align-items:center;background:var(--green-bg);border-radius:12px;padding:13px 15px;margin-top:14px;font-size:12.5px;color:#1E6B41",Ro="flex:none;width:26px;height:26px;border-radius:50%;background:var(--green);color:#fff;display:grid;place-items:center",Oo={__name:"GiftSuccess",emits:["recipient","new-gift","copy-self","share","home"],setup(T,{emit:g}){const{state:m}=j(),y=g,f=O(!1),e=O(!1),c=["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],a=new Date,d=`${a.getDate()} ${c[a.getMonth()]} ${a.getFullYear()}`,h="✦✧✦✧".split("").map((A,k)=>({c:A,style:`top:${10+k*16}%;${k%2?"right":"left"}:${4+k*3}%;animation-delay:-${k}s`})),u=z(()=>{const A=dn.find(k=>k.id===m.method);return A?A.n:""}),l=z(()=>m.claimToken?new URL(`/gift-recipient?token=${encodeURIComponent(m.claimToken)}`,window.location.origin).href:m.claimUrl||"");function i(){if(!l.value)return;const A=String(m.phone||"").replace(/\D/g,""),k=encodeURIComponent(`لديك هدية من عناية سامي ✨
${l.value}`);window.open(`https://wa.me/${A}?text=${k}`,"_blank","noopener")}function $(){f.value=!0,e.value=!1,l.value&&window.open(l.value,"_blank","noopener,noreferrer")}async function V(){try{if(navigator&&navigator.clipboard)await navigator.clipboard.writeText(l.value);else{const A=document.getElementById("gift-share-link");A&&(A.focus(),A.select(),document.execCommand("copy"))}e.value=!0,setTimeout(()=>{e.value=!1},2200)}catch{alert("تعذّر نسخ الرابط، يمكنك نسخه يدويًا من الحقل أدناه.")}}const E={user:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',send:'<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>',phone:'<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',card:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',check:'<path d="M20 6L9 17l-5-5"/>',gift:'<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7s-2-5-5-5-3 5 0 5h5zM12 7s2-5 5-5 3 5 0 5h-5z"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>',home:'<path d="M3 9l9-6 9 6v11a1 1 0 01-1 1H4a1 1 0 01-1-1z"/>'};return(A,k)=>(t(),s("div",bo,[(t(!0),s(w,null,N(r(h),(_,C)=>(t(),s("span",{key:C,class:"confetti",style:U(_.style)},o(_.c),5))),128)),k[15]||(k[15]=tn('<div class="gsuc-head" data-v-2ee9f435><h1 data-v-2ee9f435>تم إرسال هديتك بنجاح</h1><span class="ic" data-v-2ee9f435><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" data-v-2ee9f435><path d="M20 6L9 17l-5-5" data-v-2ee9f435></path></svg></span></div><p class="sub" data-v-2ee9f435>لقد أسعدت قلبًا اليوم 🤍 شكرًا لاختيارك عناية سامي</p>',2)),n("div",mo,[n("div",ho,[p(_n,{design:r(m).design,recipient:r(m).name,message:r(m).msg},null,8,["design","recipient","message"])]),n("div",vo,[k[10]||(k[10]=n("h4",null,"تفاصيل الإرسال",-1)),n("div",ko,[n("span",yo,[p(v,{inner:E.user,size:14},null,8,["inner"]),k[3]||(k[3]=x(" المهدى إليه",-1))]),n("span",wo,o(r(m).name),1)]),n("div",_o,[n("span",zo,[p(v,{inner:E.send,size:14},null,8,["inner"]),k[4]||(k[4]=x(" طريقة الإرسال",-1))]),n("span",$o,o(u.value),1)]),n("div",Mo,[n("span",Co,[p(v,{inner:E.phone,size:14},null,8,["inner"]),k[5]||(k[5]=x(" رقم الجوال",-1))]),n("span",Fo,o(r(m).phone),1)]),n("div",Bo,[n("span",Eo,[p(v,{inner:E.clock,size:14},null,8,["inner"]),k[6]||(k[6]=x(" وقت الإرسال",-1))]),n("span",So,[n("span",Ao,"✓ "+o(r(m).when==="now"?"تم الإرسال الآن":"مجدولة"),1)])]),n("div",Io,[n("span",Po,[p(v,{inner:E.cal,size:14},null,8,["inner"]),k[7]||(k[7]=x(" تاريخ الإرسال",-1))]),n("span",{class:"v"},o(d))]),n("div",Do,[n("span",Lo,[p(v,{inner:E.card,size:14},null,8,["inner"]),k[8]||(k[8]=x(" رقم العملية",-1))]),n("span",No,o(r(m).ref),1)]),n("div",{style:Go},[n("span",{style:Ro},[p(v,{inner:E.check,size:13},null,8,["inner"])]),k[9]||(k[9]=x(" تم إرسال الهدية بنجاح إلى المستلم — ستظهر الهدية في رسالة خاصة من عناية سامي ",-1))])])]),n("div",Ho,[n("button",{class:"btn btn-dark",id:"newGift",onClick:k[0]||(k[0]=_=>y("new-gift"))},[p(v,{inner:E.gift,size:15},null,8,["inner"]),k[11]||(k[11]=x(" إهداء جديد ",-1))]),n("button",{class:"btn btn-line",id:"shareGift",onClick:k[1]||(k[1]=_=>{$(),y("share")})},[p(v,{inner:E.share,size:15},null,8,["inner"]),k[12]||(k[12]=x(" مشاركة الهدية ",-1))]),n("button",{class:"btn btn-line",id:"backHome",onClick:k[2]||(k[2]=_=>y("home"))},[p(v,{inner:E.home,size:15},null,8,["inner"]),k[13]||(k[13]=x(" العودة للرئيسية ",-1))])]),f.value?(t(),s("div",jo,[k[14]||(k[14]=n("label",null,"رابط الهدية",-1)),n("div",To,[n("input",{id:"gift-share-link",type:"text",value:l.value,readonly:""},null,8,Yo),r(m).method==="wa"?(t(),s("button",{key:0,class:"btn btn-gold",onClick:i},"إرسال عبر واتساب")):H("",!0),n("button",{class:"btn btn-gold",onClick:V},"نسخ الرابط")]),e.value?(t(),s("small",Vo,"تم نسخ الرابط بنجاح")):H("",!0)])):H("",!0),k[16]||(k[16]=n("div",{class:"thanks"},[n("i",null,"❦"),x(" شكرًا لاختيارك عناية سامي لتقديم تجربة مميزة لمن تحب "),n("i",null,"❦")],-1))]))}},Uo=Tn(Oo,[["__scopeId","data-v-2ee9f435"]]),qo={key:0,class:"gsum"},Wo={class:"card"},Ko={class:"why-gift"},Xo={class:"wi"},Qo={class:"card help-card"},Jo={class:"hi"},Zo=["href"],na={key:1,class:"gsum"},ra={class:"card"},ea={key:0,class:"pkline"},ta=["src"],oa={class:"pr"},aa={class:"gs-row"},ia={class:"v"},sa={class:"gs-row"},la={class:"v",dir:"ltr"},da={class:"gs-row"},pa={class:"v"},ga={class:"gs-row"},ca={class:"v"},xa={class:"gs-row"},ua={class:"v"},fa={class:"chip"},ba={key:3,class:"gs-total"},ma={class:"v"},ha={class:"gs-note"},va={key:0,class:"card help-card"},ka={class:"hi"},ya=["href"],wa="text-align:center;padding:20px;border:1.5px dashed var(--line);border-radius:13px;color:var(--mute);font-size:12.5px;margin-bottom:12px",_a="display:block;font-family:var(--font-d);color:var(--ink);margin-bottom:4px",za={__name:"GiftSummary",setup(T){const{whatsappUrl:g}=vn(),{state:m,pkgOf:y}=j(),f=z(()=>m.gpkg?y(m.gpkg):null);z(()=>yn.find(h=>h.id===m.design));const e=z(()=>m.gstep===0||!f.value&&m.gstep<2),c=z(()=>{const h=dn.find(u=>u.id===m.method);return h?h.n:""}),a={head:'<path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>',lock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>'},d=[["هدية رقمية فورية","تصلك أو تصل للمستلم فور إتمام الدفع",'<path d="M13 2L3 14h9l-1 8 10-12h-9z"/>'],["صالحة لمدة 6 أشهر","من تاريخ الشراء",'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>'],["المستلم يختار موعده","يختار الوقت والفرع المناسب له",'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>'],["آمنة وموثوقة","نضمن لك تجربة إهداء مميزة",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>']];return(h,u)=>e.value?(t(),s("div",qo,[n("div",Wo,[u[0]||(u[0]=n("h3",null,"لماذا الإهداء من سامي؟",-1)),n("div",Ko,[(t(),s(w,null,N(d,(l,i)=>n("div",{key:i,class:"wg"},[n("span",Xo,[p(v,{inner:l[2],size:17},null,8,["inner"])]),n("span",null,[n("b",null,o(l[0]),1),n("small",null,o(l[1]),1)])])),64))])]),n("div",Qo,[n("span",Jo,[p(v,{inner:a.head,size:18},null,8,["inner"])]),u[1]||(u[1]=n("b",null,"تحتاج مساعدة؟",-1)),u[2]||(u[2]=n("small",null,"فريقنا جاهز لمساعدتك",-1)),r(g)?(t(),s("a",{key:0,href:r(g)},"تواصل معنا",8,Zo)):H("",!0)])])):(t(),s("div",na,[n("div",ra,[u[12]||(u[12]=n("h3",null,"ملخص الإهداء",-1)),f.value?(t(),s("div",ea,[n("img",{src:f.value.img,alt:""},null,8,ta),n("span",null,[n("b",null,o(f.value.name),1),n("small",null,"🕐 "+o(f.value.dur)+" دقيقة",1),n("small",null,o(f.value.desc),1),n("span",oa,o(r(q)(f.value.price))+" ر.س",1)])])):(t(),s("div",{key:1,style:wa},[n("b",{style:_a},"لم يتم اختيار باقة بعد"),u[3]||(u[3]=x("اختر الباقة المناسبة لإهدائها لمن تحب",-1))])),r(m).gstep>=2?(t(),s(w,{key:2},[n("div",aa,[u[4]||(u[4]=n("span",{class:"k"},"👤 المهدى إليه",-1)),n("span",ia,o(r(m).name||"—"),1)]),n("div",sa,[u[5]||(u[5]=n("span",{class:"k"},"📱 رقم الجوال",-1)),n("span",la,o(r(m).phone||"—"),1)]),n("div",da,[u[6]||(u[6]=n("span",{class:"k"},"💬 الرسالة",-1)),n("span",pa,o(r(m).msg?"تمت إضافة رسالة مخصصة":"—"),1)]),n("div",ga,[u[7]||(u[7]=n("span",{class:"k"},"📤 طريقة الإرسال",-1)),n("span",ca,o(c.value),1)]),n("div",xa,[u[8]||(u[8]=n("span",{class:"k"},"🕐 وقت الإرسال",-1)),n("span",ua,[n("span",fa,o(r(m).when==="now"?"فوري":"مجدول"),1)])])],64)):H("",!0),f.value?(t(),s("div",ba,[u[10]||(u[10]=n("span",{class:"k"},"الإجمالي",-1)),n("span",ma,[x(o(r(q)(f.value.price))+" ",1),u[9]||(u[9]=n("small",{style:{"font-size":"13px"}},"ر.س",-1))])])):H("",!0),n("div",ha,[p(v,{inner:a.lock,size:14},null,8,["inner"]),u[11]||(u[11]=x(" بإتمامك معلومات الهدية مشفرة وآمنة 100%",-1))])]),r(m).gstep===1?(t(),s("div",va,[n("span",ka,[p(v,{inner:a.head,size:18},null,8,["inner"])]),u[13]||(u[13]=n("b",null,"تحتاج مساعدة؟",-1)),u[14]||(u[14]=n("small",null,"فريقنا جاهز لمساعدتك في اختيار الهدية المثالية",-1)),r(g)?(t(),s("a",{key:0,href:r(g)},"تواصل معنا",8,ya)):H("",!0)])):H("",!0)]))}},$a={class:"shell"},Ma={class:"wrap",id:"pkgApp"},Ca={key:0,class:"view on"},Fa={key:1,class:"g-stage"},Ba={class:"view on"},Ea={id:"gsumWrap"},Sa={key:0,class:"view on"},Aa={key:1,class:"g-stage"},Ia={class:"view on"},Pa={id:"gsumWrap"},Da={class:"wrap"},La={class:"f-grid"},Na={class:"f-brand"},Ha={class:"f-links"},ja={class:"f-links"},Ta=["href"],Ya={class:"wrap in"},Va={class:"fb-mid",id:"fbMid"},Ga=["disabled"],Ra='<path d="M19 12H5M11 18l-6-6 6-6"/>',ai={__name:"PackagesGiftsView",setup(T){const g=O(null),{current:m,openPicker:y,requireLocation:f,locations:e,loadServiceLocations:c}=Yn();c();const{requireAuth:a}=Vn(),{state:d,pkgOf:h,bkDays:u,gCanNext:l,gNextLabel:i,bkCanNext:$,bkNextLabel:V,startGift:E,startBook:A,backToPackages:k}=j();Rn(dr,"packages-gifts"),On(g);const _=O(!1),C=O(""),M=O(!1);function S(B){C.value=B,M.value=!0,clearTimeout(S._h),S._h=setTimeout(()=>{M.value=!1},2600)}const R=z(()=>d.page==="book"),zn=z(()=>R.value?!(d.bk.done||d.bk.step>=2):d.page==="gift"&&!d.done&&d.gstep!==4),$n=z(()=>R.value?!0:d.gstep!==0),pn=z(()=>{const B=R.value?d.bk.pkg:d.gpkg;return B?h(B):null}),gn=z(()=>R.value?$.value:l.value),Mn=z(()=>R.value?V.value:i.value);function Cn(){if(R.value){if(d.bk.step===0){k();return}d.bk.step--}else{if(d.gstep===0){k();return}d.gstep--}scrollTo({top:0,behavior:"smooth"})}function Fn(){if(gn.value){if(R.value)d.bk.step++;else{if(d.gstep===3){Bn();return}d.gstep++}scrollTo({top:0,behavior:"smooth"})}}function Bn(){var b;const B=Math.max(Number((b=h(d.gpkg))==null?void 0:b.price)||0,0);_.value||!J.canPay(d,B+Math.round(B*.15))||a(async()=>{var I,P,Z,nn,D;_.value=!0;try{const F=await ar({packages:[{id:d.gpkg}],location:{recipient_name:d.name.trim(),recipient_mobile:d.phone.trim(),message:d.msg.trim()||void 0},design:d.design,branch:d.siteBranch||null,send_channel:d.method||"link"}),rn=Math.max(Number((I=h(d.gpkg))==null?void 0:I.price)||0,0),on=rn+Math.round(rn*.15),{gateway:sn,...ln}=J.payment(d,on),W=await un(sn,ln);if(W.payment_url){window.location.href=W.payment_url;return}d.ref=(P=F==null?void 0:F.data)!=null&&P.gift_card_id?`#GIFT-${F.data.gift_card_id}`:"#GIFT",d.claimUrl=((Z=F==null?void 0:F.data)==null?void 0:Z.share_url)||((nn=F==null?void 0:F.data)==null?void 0:nn.claim_url)||null,d.claimToken=((D=F==null?void 0:F.data)==null?void 0:D.claim_token)||null,d.done=!0,d.gstep=4,scrollTo({top:0,behavior:"smooth"})}catch(F){console.error("Package gift error:",F),S((F==null?void 0:F.message)||"تعذر إنشاء الهدية، حاول مرة أخرى")}finally{_.value=!1}})}function En(B){return`${B.getFullYear()}-${String(B.getMonth()+1).padStart(2,"0")}-${String(B.getDate()).padStart(2,"0")}`}function Sn(){var b;const B=Math.max(Number((b=h(d.bk.pkg))==null?void 0:b.price)||0,0);_.value||!J.canPay(d.bk,B+Math.round(B*.15))||a(async()=>{var I,P,Z,nn;_.value=!0;try{const D=d.bk,F=u()[D.dayIdx];await or({package_id:D.pkg,branch_id:D.branch,date:En(F),time:D.time,employee_id:(I=D.employee)==null?void 0:I.id,notes:D.notes||void 0});const rn=Math.max(Number((P=h(D.pkg))==null?void 0:P.price)||0,0),on=rn+Math.round(rn*.15),{gateway:sn,...ln}=J.payment(D,on),W=await un(sn,ln);if(W.payment_url){const an=h(D.pkg);rr({b:an.branchName,d:K(F),u:`${an.dur} دقيقة`,e:((Z=D.employee)==null?void 0:Z.name)||"",p:on,s:[[an.name,X(D.time),((nn=D.employee)==null?void 0:nn.name)||"",an.price]]},W.attempt_id),window.location.href=W.payment_url;return}d.bk.ref=W.invoice_id||null,d.bk.done=!0,scrollTo({top:0,behavior:"smooth"})}catch(D){S(D.message||"تعذّر إتمام الحجز، حاول مرة أخرى")}finally{_.value=!1}})}function cn(){m.value&&(d.siteBranch=m.value.id)}function An(B){A(B)}function In(B){f(()=>{cn(),E("pkg",B)})}function Pn(){f(()=>{cn(),E(null,null)})}function Dn(){d.done=!1,d.gstep=0,d.gtype=null,d.gpkg=null,d.pay=null,d.ref=null,scrollTo({top:0,behavior:"smooth"})}function xn(){location.href="/"}return(B,b)=>{const I=hn("RouterLink");return t(),s("div",{ref_key:"root",ref:g},[n("div",$a,[n("div",Ma,[r(d).page==="packages"?(t(),G(Cr,{key:0,onBook:An,onGift:In,onGiftNow:Pn,onPickBranch:r(y)},null,8,["onPickBranch"])):r(d).page==="book"?(t(),s(w,{key:1},[p(Ir),r(d).bk.done?(t(),s("div",Ca,[p(Ze,{onHome:xn,onCalendar:b[0]||(b[0]=P=>S("تمت إضافة الموعد إلى التقويم")),onShare:b[1]||(b[1]=P=>S("تم نسخ رابط الحجز للمشاركة"))})])):(t(),s("div",Fa,[n("main",Ba,[r(d).bk.step===0?(t(),G(Kr,{key:0})):r(d).bk.step===1?(t(),G(ke,{key:1})):(t(),G($e,{key:2,onPay:Sn}))]),n("aside",Ea,[p(vt)])]))],64)):(t(),s(w,{key:2},[p($t),r(d).done?(t(),s("div",Sa,[p(Uo,{onRecipient:b[2]||(b[2]=P=>r(d).claimUrl&&(B.location.href=r(d).claimUrl)),onNewGift:Dn,onCopySelf:b[3]||(b[3]=P=>S("تم إرسال نسخة من الهدية إلى بريدك")),onShare:b[4]||(b[4]=P=>S("تم نسخ رابط الهدية للمشاركة")),onHome:xn})])):(t(),s("div",Aa,[n("main",Ia,[r(d).gstep===0?(t(),G(Pt,{key:0})):r(d).gstep===1?(t(),G(Ot,{key:1})):r(d).gstep===2?(t(),G(xo,{key:2})):(t(),G(fo,{key:3}))]),n("aside",Pa,[p(za)])]))],64))])]),n("footer",null,[n("div",Da,[n("div",La,[n("div",Na,[p(I,{class:"logo",to:"/"},{default:Y(()=>[...b[5]||(b[5]=[n("span",{class:"mark"},[n("img",{src:Gn,alt:"عناية سامي",style:{width:"29px",height:"29px","object-fit":"contain"}})],-1),n("span",{class:"name"},[n("b",null,"عناية سامي"),n("span",null,"SAMI CARE")],-1)])]),_:1}),b[6]||(b[6]=tn('<p>مركز متخصص في العناية الرجالية المتكاملة بجدة، حيث تلتقي الفخامة بالاحترافية في كل تفصيلة.</p><div class="socials"><a href="https://x.com/samicare_sa" aria-label="X"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-6.8 7.8L23.3 22h-6.3l-4.9-6.4L6.5 22H3.4l7.3-8.3L1 2h6.5l4.4 5.8L18.9 2zm-1.1 18h1.7L7.1 3.9H5.3L17.8 20z"></path></svg></a><a href="https://www.instagram.com/samicare.sa/" aria-label="انستقرام"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1" fill="currentColor"></circle></svg></a><a href="https://www.facebook.com/samicare.sa" aria-label="فيسبوك"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg></a></div>',2))]),n("div",null,[b[12]||(b[12]=n("h4",null,"روابط مهمة",-1)),n("ul",Ha,[n("li",null,[p(I,{to:"/"},{default:Y(()=>[...b[7]||(b[7]=[x("الرئيسية",-1)])]),_:1})]),n("li",null,[p(I,{to:"/booking"},{default:Y(()=>[...b[8]||(b[8]=[x("حجز موعد",-1)])]),_:1})]),n("li",null,[p(I,{to:"/#services"},{default:Y(()=>[...b[9]||(b[9]=[x("خدماتنا",-1)])]),_:1})]),n("li",null,[p(I,{to:"/packages-gifts"},{default:Y(()=>[...b[10]||(b[10]=[x("الباقات",-1)])]),_:1})]),n("li",null,[p(I,{to:"/gifts"},{default:Y(()=>[...b[11]||(b[11]=[x("الهدايا",-1)])]),_:1})])])]),n("div",null,[b[18]||(b[18]=n("h4",null,"استكشف",-1)),n("ul",ja,[n("li",null,[p(I,{to:"/store"},{default:Y(()=>[...b[13]||(b[13]=[x("المتجر",-1)])]),_:1})]),n("li",null,[p(I,{to:"/branches"},{default:Y(()=>[...b[14]||(b[14]=[x("فروعنا",-1)])]),_:1})]),n("li",null,[p(I,{to:"/contact"},{default:Y(()=>[...b[15]||(b[15]=[x("تواصل معنا",-1)])]),_:1})]),n("li",null,[p(I,{to:"/terms"},{default:Y(()=>[...b[16]||(b[16]=[x("الشروط والأحكام",-1)])]),_:1})]),n("li",null,[p(I,{to:"/privacy-policy"},{default:Y(()=>[...b[17]||(b[17]=[x("سياسة الخصوصية",-1)])]),_:1})])])]),n("div",null,[b[19]||(b[19]=n("h4",null,"عناوين الفروع",-1)),(t(!0),s(w,null,N(r(e),P=>(t(),s("div",{key:P.id,class:"f-branch"},[n("b",null,o(P.name),1),n("small",null,o(P.address),1),P.contact_number?(t(),s("a",{key:0,href:`tel:${P.contact_number}`},o(P.contact_number),9,Ta)):H("",!0)]))),128)),b[20]||(b[20]=n("div",{class:"f-branch"},[n("b",null,"خدمات منزلية"),n("small",null,"حلاقة شعر ولحية وماسكات طبيعية")],-1))])]),b[21]||(b[21]=tn('<div class="f-bottom"><small>© 2026 عناية سامي — جميع الحقوق محفوظة</small><div class="pay" aria-label="بوابات الدفع"><span title="Visa">VISA</span><span title="Mastercard">Mastercard</span><span title="مدى">mada</span><span title="Tabby">tabby</span><span title="Apple Pay">Pay</span></div></div>',1))])]),n("div",{class:L(["footbar",{on:zn.value}]),id:"footbar"},[n("div",Ya,[n("button",{class:"btn btn-back",id:"btnBack",style:U({visibility:$n.value?"visible":"hidden"}),onClick:Cn},[...b[22]||(b[22]=[n("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[n("path",{d:"M5 12h14M13 6l6 6-6 6"})],-1),x(" السابق ",-1)])],4),n("div",Va,[pn.value?(t(),s(w,{key:0},[b[23]||(b[23]=x("الإجمالي ",-1)),n("b",null,o(r(q)(pn.value.price))+" ر.س",1),b[24]||(b[24]=x(" — 🔒 بياناتك محمية وآمنة",-1))],64)):(t(),s(w,{key:1},[x("🔒 بياناتك محمية وآمنة")],64))]),n("button",{class:"btn btn-gold",id:"btnNext",disabled:!gn.value,onClick:Fn},[x(o(Mn.value)+" ",1),p(v,{inner:Ra,size:15})],8,Ga)])],2),n("div",{class:L(["pay-loading",{on:_.value}]),id:"payLoading"},[...b[25]||(b[25]=[n("div",{class:"pl-box"},[n("div",{class:"pl-ring"}),n("b",null,"جارٍ إتمام الإهداء بأمان…"),n("small",null,"سيتم إرسال الهدية مباشرة بعد إتمام الدفع")],-1)])],2),n("div",{class:L(["toast",{on:M.value}]),id:"toast"},o(C.value),3)],512)}}};export{ai as default};
