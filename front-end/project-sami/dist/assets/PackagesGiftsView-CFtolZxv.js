import{i as M,o as a,c as l,m as K,b as n,u as r,F as k,a as d,t as o,e as E,x as V,n as C,q as N,d as c,N as v,p as Y,r as G,v as dn,G as Mn,z as pn,B as q,I as O,y as H,_ as Cn,U as Fn,h as Bn,s as En,M as Sn}from"./index-C4NLY1yc.js";import{u as An,a as In}from"./useInternalLinks-BdzaQwE1.js";import{u as L,B as Ln,a as Dn,A as Hn,b as Pn,f as U,c as W,r as j,d as gn,G as jn,e as Yn,_ as cn,D as xn,S as J,P as Nn}from"./GiftCard-ByS-45lQ.js";import{f as Vn,a as Tn,i as on,d as Gn}from"./bookingApi-BjIvrqdA.js";import{c as Rn}from"./giftsApi-C-VCxMar.js";import{_ as an}from"./SkeletonLoader-CijR9QtY.js";import{f as qn}from"./accountApi-BDysirPv.js";import"./i18nField-CJ_3XKph.js";const On=`\r
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
.branch-gate-list button{text-align:right;border:1.5px solid var(--line);border-radius:13px;padding:13px 16px;background:#fff}\r
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
.pkg .inc{margin:14px 0;padding-top:14px;border-top:1px dashed var(--line);text-align:right;flex:1}\r
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
  .nav{min-height:76px;padding:10px 12px;gap:8px;overflow:visible!important;justify-content:space-between;direction:rtl}\r
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
.gsuc-grid{display:grid;grid-template-columns:1.15fr 1fr;gap:18px;margin-top:26px;text-align:right}\r
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
`,Kn="/images/generated/packages/complete-care-hq.png",Un={class:"branch-gate"},Wn={class:"ph"},Xn=["src","alt"],Qn={class:"body"},Jn={class:"dur"},Zn={class:"desc"},nr={class:"inc"},rr={class:"price"},tr={class:"acts"},er=["data-book","onClick"],or=["data-gift","onClick"],ar={class:"gift-banner"},ir={class:"txt"},sr={class:"mini-feats"},lr={class:"mi"},dr={class:"cta"},pr={class:"perks"},gr={class:"pi"},cr={__name:"PackagesCatalog",emits:["book","gift","gift-now","pick-branch"],setup(D,{emit:i}){const{state:_,filteredPkgs:m}=L(),p=i,t=e=>e.toLocaleString("ar-EG-u-nu-latn"),g=M(()=>{const e=Ln.find(u=>u.id===_.siteBranch);return e?e.name:""}),h=M(()=>`grid-template-columns:repeat(${Math.min(m.value.length,5)},1fr)`),x={clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',gift:'<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7s-2-5-5-5-3 5 0 5h5zM12 7s2-5 5-5 3 5 0 5h-5z"/>'},f=[["بطاقة إهداء رقمية",'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>'],["رسالة مخصصة من قلبك",'<path d="M21 11.5a8.4 8.4 0 01-9 8.4 8.5 8.5 0 01-3.8-.9L3 21l2-5.2a8.4 8.4 0 011.5-9.8 8.5 8.5 0 0114.5 5.5z"/>'],["إرسال فوري عبر واتساب أو بريد",'<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>'],["جدولة الإهداء في الوقت المناسب",'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>']],s=[["غرفة VIP خاصة","لباقات مختارة",'<path d="M2 8l4 4 6-8 6 8 4-4v10a2 2 0 01-2 2H4a2 2 0 01-2-2z"/>'],["منتجات فاخرة","ضمن باقاتك",'<path d="M20 12v9H4v-9M2 7h20v5H2z"/>'],["أولوية في الحجز","مواعيد مرنة",'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4"/>'],["ضيافة فاخرة","مشروبات مختارة",'<path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4z"/>'],["نقاط ولاء مضاعفة","مع كل باقة",'<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7"/>'],["ضمان الجودة","أفضل تجربة",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>']];return(e,u)=>(a(),l(k,null,[u[15]||(u[15]=K('<section class="pk-hero"><div class="bg"><img src="'+Kn+'" alt=""></div><svg class="ghost-logo" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width=".8"><path d="M12 2l9 5v10l-9 5-9-5V7z"></path><path d="M12 2v20M3 7l9 5 9-5M3 17l9-5 9 5"></path></svg><div class="in"><div class="eyebrow">تجارب متكاملة</div><h1>لراحتـك وأناقتـك</h1><p>اختر الباقة التي تناسب احتياجاتك واستمتع بتجربة عناية متكاملة توفر عليك الوقت والجهد</p></div></section>',1)),n("div",Un,[r(_).siteBranch?(a(),l(k,{key:0},[n("span",null,[u[3]||(u[3]=d("📍 الفرع المختار: ",-1)),n("b",null,o(g.value),1)]),n("button",{id:"branchGateChange",onClick:u[0]||(u[0]=y=>p("pick-branch"))},"تغيير الفرع")],64)):(a(),l(k,{key:1},[u[4]||(u[4]=n("span",null,"حدد فرعك أولًا لعرض الأسعار والمواعيد المتاحة بدقة",-1)),n("button",{id:"branchGateChange",class:"primary",onClick:u[1]||(u[1]=y=>p("pick-branch"))},"اختر الفرع")],64))]),n("div",{class:"pkgs",style:V(h.value)},[(a(!0),l(k,null,E(r(m),(y,P)=>(a(),l("article",{key:y.id,class:C(["pkg",{hot:y.hot}]),style:V(`--pc:${y.color};animation-delay:${P*.07}s`)},[n("div",Wn,[n("img",{src:y.img,alt:y.name},null,8,Xn),y.hot?(a(),l(k,{key:0},[u[5]||(u[5]=n("span",{class:"hotflag"},"الأكثر طلبًا",-1)),u[6]||(u[6]=n("span",{class:"starflag"},"★",-1))],64)):N("",!0)]),n("span",{class:"badge",style:V(`border-color:${y.hex}`)},[c(v,{inner:y.ico,size:22},null,8,["inner"])],4),n("div",Qn,[n("h3",null,o(y.name),1),n("div",Jn,[c(v,{inner:x.clock,size:13},null,8,["inner"]),d(" "+o(y.dur)+" دقيقة",1)]),n("div",Zn,o(y.desc),1),n("div",nr,[u[8]||(u[8]=n("b",null,"تشمل الباقة",-1)),n("ul",null,[(a(!0),l(k,null,E(y.inc,(w,$)=>(a(),l("li",{key:$},[u[7]||(u[7]=n("i",null,"✓",-1)),d(o(w),1)]))),128))])]),n("div",rr,[d(o(t(y.price))+" ",1),u[9]||(u[9]=n("small",null,"ر.س",-1))]),n("div",tr,[n("button",{class:"book","data-book":y.id,onClick:w=>p("book",y.id)},"احجز الباقة",8,er),n("button",{class:"gift-mini","data-gift":y.id,onClick:w=>p("gift",y.id)},[c(v,{inner:x.gift,size:14},null,8,["inner"]),u[10]||(u[10]=d(" أهدِ هذه الباقة",-1))],8,or)])])],6))),128))],4),n("section",ar,[u[14]||(u[14]=n("div",{class:"gb-box"},[n("div",{class:"face"}),n("span",{class:"tag"},"هدية لكم من القلب 💛")],-1)),n("div",ir,[u[11]||(u[11]=n("h2",null,"أهدِ تجربة فاخرة لمن تحب",-1)),u[12]||(u[12]=n("p",null,"اختر الباقة، أضف رسالة مخصصة، وسيصلك المهدى إليه بشكل أنيق في الوقت المناسب",-1)),n("div",sr,[(a(),l(k,null,E(f,(y,P)=>n("div",{key:P,class:"mf"},[n("span",lr,[c(v,{inner:y[1],size:16},null,8,["inner"])]),d(o(y[0]),1)])),64))])]),n("div",dr,[n("button",{class:"btn btn-gold",id:"giftNow",onClick:u[2]||(u[2]=y=>p("gift-now"))},[c(v,{inner:x.gift,size:16},null,8,["inner"]),u[13]||(u[13]=d(" أهدِ باقة الآن",-1))])])]),n("div",pr,[(a(),l(k,null,E(s,(y,P)=>n("div",{key:P,class:"perk"},[n("span",gr,[c(v,{inner:y[2],size:17},null,8,["inner"])]),n("b",null,o(y[0]),1),n("small",null,o(y[1]),1)])),64))])],64))}},xr={class:"g-stepper"},fr={class:"g-steps"},br=["data-bi"],ur={class:"bubble"},vr='<path d="M20 6L9 17l-5-5"/>',mr={__name:"BookStepper",setup(D){const{state:i}=L();return(_,m)=>(a(),l("div",xr,[n("div",fr,[(a(!0),l(k,null,E(r(Dn),(p,t)=>(a(),l("div",{key:t,class:C(["g-step",{active:t===r(i).bk.step&&!r(i).bk.done,done:t<r(i).bk.step||r(i).bk.done}]),"data-bi":t},[m[0]||(m[0]=n("div",{class:"bar"},[n("i")],-1)),n("span",ur,[t<r(i).bk.step||r(i).bk.done?(a(),Y(v,{key:0,inner:vr,size:17})):(a(),l(k,{key:1},[d(o(t+1),1)],64))]),n("b",null,o(p.t),1),n("small",null,o(p.s),1)],10,br))),128))])]))}},hr={class:"g-head"},kr={class:"card",style:{padding:"20px","margin-bottom":"16px"}},yr={class:"daystrip"},wr=["data-bd","onClick"],_r={key:0,class:"card",style:{padding:"20px"}},zr={key:1,class:"card",style:{padding:"20px"}},$r={class:"periods"},Mr=["data-bp","onClick"],Cr={key:1,class:"slots"},Fr=["data-bt","onClick"],Br={key:0,class:"tag"},Er={key:2,class:"card",style:{padding:"40px","text-align":"center",color:"var(--mute)","font-size":"13.5px"}},sn="grid-column:1/-1;text-align:center;color:var(--mute);padding:30px;border:1.5px dashed var(--line);border-radius:14px;font-size:13px",Sr="font-family:var(--font-d);font-size:15px;color:var(--ink);margin-bottom:12px",Ar="font-family:var(--font-d);font-size:15px;color:var(--ink);margin-bottom:4px",Ir={__name:"BookTimeStep",setup(D){const{state:i,pkgOf:_,bkDays:m}=L(),p=i.bk,t=m(),g=M(()=>_(p.pkg)),h=G(!0),x=G([]),f=G(!1);function s(w){return`${w.getFullYear()}-${String(w.getMonth()+1).padStart(2,"0")}-${String(w.getDate()).padStart(2,"0")}`}dn(async()=>{if(p.employee){h.value=!1;return}try{const w=await Vn({branchId:p.branch,serviceId:0}),$=(Array.isArray(w)?w:[])[0];$&&(p.employee={id:$.id,name:[$.first_name,$.last_name].filter(Boolean).join(" ")||"موظف"})}catch{p.employee=null}finally{h.value=!1}});async function e(){var w;if(p.dayIdx==null||!p.employee){x.value=[];return}f.value=!0;try{const $=await Tn({date:s(t[p.dayIdx]),staffId:p.employee.id,durationMin:(w=g.value)==null?void 0:w.dur});x.value=Array.isArray($)?$:[]}catch{x.value=[]}finally{f.value=!1}}Mn(()=>{var w;return[p.dayIdx,(w=p.employee)==null?void 0:w.id]},e);const u=M(()=>x.value.filter(w=>{const $=Number(w.split(":")[0]);return p.period==="all"||p.period==="am"&&$<12||p.period==="pm"&&$>=12&&$<17||p.period==="eve"&&$>=17})),y=w=>w===2?"الأكثر طلبًا":w===u.value.length-1?"آخر موعد":"",P=[["all","كل اليوم","🗓️"],["am","صباحًا","☀️"],["pm","مساءً","🌇"]];return(w,$)=>(a(),l(k,null,[n("div",hr,[$[0]||($[0]=n("h1",null,"اختر الوقت والتاريخ",-1)),n("p",null,"اختر الوقت المناسب لك — مدة الباقة "+o(g.value.dur)+" دقيقة",1)]),n("div",kr,[n("h4",{style:Sr},"📅 اختر اليوم"),n("div",yr,[(a(!0),l(k,null,E(r(t),(z,A)=>(a(),l("div",{key:A,class:C(["day",{sel:r(p).dayIdx===A}]),"data-bd":A,onClick:X=>{r(p).dayIdx=A,r(p).time=null}},[n("small",null,o(r(Hn)[z.getDay()]),1),n("b",null,o(z.getDate()),1),n("small",null,o(r(Pn)[z.getMonth()]),1)],10,wr))),128))])]),h.value?(a(),l("div",_r,[c(an,{height:"72px","border-radius":"12px"})])):r(p).dayIdx!=null?(a(),l("div",zr,[n("h4",{style:Ar},"🕐 "+o(r(U)(r(t)[r(p).dayIdx])),1),n("div",$r,[(a(),l(k,null,E(P,z=>n("button",{key:z[0],class:C(["period",{sel:r(p).period===z[0]}]),"data-bp":z[0],onClick:A=>r(p).period=z[0]},o(z[2])+" "+o(z[1]),11,Mr)),64))]),f.value?(a(),l("div",{key:0,style:sn},[c(an,{height:"44px","border-radius":"10px"})])):(a(),l("div",Cr,[u.value.length?(a(!0),l(k,{key:0},E(u.value,(z,A)=>(a(),l("button",{key:z,class:C(["slot",{sel:r(p).time===z}]),"data-bt":z,style:V(`animation-delay:${Math.min(A*.03,.4)}s`),onClick:X=>r(p).time=z},[y(A)?(a(),l("span",Br,o(y(A)),1)):(a(),l(k,{key:1},[],64)),d(o(r(W)(z)),1)],14,Fr))),128)):(a(),l("div",{key:1,style:sn},"لا توجد أوقات متاحة في هذه الفترة"))]))])):(a(),l("div",Er,[...$[1]||($[1]=[n("b",{style:{display:"block","font-family":"var(--font-d)","font-size":"16px",color:"var(--ink)","margin-bottom":"6px"}},"ابدأ باختيار اليوم",-1),d("اختر يومًا من الشريط أعلاه لعرض الأوقات المتاحة",-1)])]))],64))}},Lr={class:"ok-banner"},Dr={class:"ic"},Hr=["src","alt"],Pr={class:"t"},jr={class:"incs"},Yr={class:"pr"},Nr={class:"card bk-rows",style:{"margin-bottom":"16px"}},Vr={class:"gs-row"},Tr={class:"k"},Gr={class:"v"},Rr={class:"gs-row"},qr={class:"k"},Or={class:"v"},Kr={class:"gs-row"},Ur={class:"k"},Wr={class:"v",dir:"ltr"},Xr={class:"gs-row"},Qr={class:"k"},Jr={class:"v"},Zr={class:"card",style:{padding:"20px"}},nt={class:"fld",style:{margin:"0"}},rt="font-size:12px;color:var(--mute);font-family:var(--font-b)",tt="display:flex;gap:9px;align-items:center;font-size:12px;color:var(--mute);background:rgba(198,161,91,.08);border-radius:11px;padding:11px 15px;margin-top:14px",et="color:var(--gold-deep);font-weight:600;text-decoration:underline",ot={__name:"BookConfirmStep",setup(D){const{state:i,pkgOf:_,bkDays:m}=L(),p=i.bk,t=M(()=>_(p.pkg)),g=M(()=>m()[p.dayIdx]),h={check:'<path d="M20 6L9 17l-5-5"/>',pin:'<path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>',cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>'};return(x,f)=>{const s=pn("RouterLink");return a(),l(k,null,[f[9]||(f[9]=n("div",{class:"g-head"},[n("h1",null,"تأكيد الحجز"),n("p",null,"راجع تفاصيل الحجز قبل المتابعة للدفع")],-1)),n("div",Lr,[n("span",Dr,[c(v,{inner:h.check,size:16},null,8,["inner"])]),f[1]||(f[1]=n("div",null,[n("b",null,"تم حفظ موعدك بنجاح"),n("small",null,"يمكنك تعديل أو إلغاء الحجز قبل 6 ساعات من وقت الموعد")],-1))]),n("div",{class:"card bk-pkg-hero",style:V(`--pc:${t.value.color}`)},[n("img",{src:t.value.img,alt:t.value.name},null,8,Hr),n("div",Pr,[n("h4",null,o(t.value.name),1),n("small",null,"🕐 "+o(t.value.dur)+" دقيقة — "+o(t.value.desc),1),n("div",jr,[(a(!0),l(k,null,E(t.value.inc,(e,u)=>(a(),l("span",{key:u},"✓ "+o(e),1))),128))])]),n("div",Yr,[d(o(r(j)(t.value.price))+" ",1),n("small",{style:rt},"ر.س")])],4),n("div",Nr,[n("div",Vr,[n("span",Tr,[c(v,{inner:h.pin,size:15},null,8,["inner"]),f[2]||(f[2]=d(" الفرع",-1))]),n("span",Gr,o(t.value.branchName),1)]),n("div",Rr,[n("span",qr,[c(v,{inner:h.cal,size:15},null,8,["inner"]),f[3]||(f[3]=d(" التاريخ",-1))]),n("span",Or,o(r(U)(g.value)),1)]),n("div",Kr,[n("span",Ur,[c(v,{inner:h.clock,size:15},null,8,["inner"]),f[4]||(f[4]=d(" الوقت",-1))]),n("span",Wr,o(r(W)(r(p).time)),1)]),n("div",Xr,[n("span",Qr,[c(v,{inner:h.info,size:15},null,8,["inner"]),f[5]||(f[5]=d(" مدة الجلسة",-1))]),n("span",Jr,o(t.value.dur)+" دقيقة",1)])]),n("div",Zr,[n("div",nt,[f[6]||(f[6]=n("label",null,"📝 ملاحظات (اختياري)",-1)),q(n("textarea",{id:"bkNotes",placeholder:"أضف أي ملاحظة...","onUpdate:modelValue":f[0]||(f[0]=e=>r(p).notes=e)},null,512),[[O,r(p).notes]])]),n("div",{style:tt},[f[8]||(f[8]=d(" 🛡️ بالتأكيد على الحجز، فإنك توافق على ",-1)),c(s,{to:"/terms",style:et},{default:H(()=>[...f[7]||(f[7]=[d("الشروط والأحكام",-1)])]),_:1})])])],64)}}},at={class:"card pay-summary-strip"},it={class:"amt"},st={class:"card",style:{padding:"20px"}},lt={class:"bk-pays"},dt=["data-bkpay","onClick"],pt={class:"lg"},gt={key:0,style:{color:"#b42318","font-size":"12px","margin-top":"4px"}},ct=["disabled"],xt='<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>',ft="display:flex;gap:8px;align-items:center;justify-content:center;margin-top:14px;font-size:12px;color:var(--mute)",bt={__name:"BookPayStep",emits:["pay"],setup(D,{emit:i}){const{state:_,pkgOf:m,bkDays:p}=L(),t=i,g=_.bk,h=M(()=>m(g.pkg)),x=M(()=>p()[g.dayIdx]),f=["cash","wallet"],s=G(null);dn(async()=>{var w,$;try{const z=await qn();s.value=(($=(w=z==null?void 0:z.data)==null?void 0:w.balances)==null?void 0:$.wallet)??0}catch{}});function e(w){return w.id==="wallet"&&s.value!==null?`${w.n} (${j(s.value)} ر.س)`:w.n}function u(w){f.includes(w.id)&&(g.pay=w.id)}const y=M(()=>g.pay==="wallet"&&s.value!==null&&s.value<h.value.price),P=M(()=>!!g.pay&&!y.value);return(w,$)=>(a(),l(k,null,[$[2]||($[2]=n("div",{class:"g-head"},[n("h1",null,"اختر طريقة الدفع"),n("p",null,"ادفع بأمان وسهولة")],-1)),n("div",at,[n("b",null,o(h.value.name),1),n("small",null,o(h.value.branchName)+" — "+o(r(U)(x.value))+" • "+o(r(W)(r(g).time)),1),n("span",it,o(r(j)(h.value.price))+" ر.س",1)]),n("div",st,[n("div",lt,[(a(!0),l(k,null,E(r(gn),z=>(a(),l("div",{key:z.id,class:C(["bkpm",{sel:r(g).pay===z.id,disabled:!f.includes(z.id)}]),"data-bkpay":z.id,onClick:A=>u(z)},[n("span",pt,o(z.logo),1),n("b",null,o(e(z)),1),$[1]||($[1]=n("span",{class:"rad"},[n("i")],-1))],10,dt))),128)),y.value?(a(),l("p",gt,"رصيد محفظتك لا يكفي لدفع القيمة كاملة، اختر وسيلة دفع أخرى.")):N("",!0)]),n("button",{class:"btn-paynow",id:"bkPayNow",disabled:!P.value,onClick:$[0]||($[0]=z=>t("pay"))},[c(v,{inner:xt,size:16}),d(" ادفع الآن — "+o(r(j)(h.value.price))+" ر.س",1)],8,ct),n("div",{style:ft},"🌐 جميع المعاملات مؤمّنة وآمنة")])],64))}},ut=Cn(bt,[["__scopeId","data-v-f464f4de"]]),vt={class:"gsuccess"},mt={class:"gsuc-grid"},ht={class:"card gsuc-details"},kt={class:"gs-row"},yt={class:"k"},wt={class:"v"},_t={class:"gs-row"},zt={class:"k"},$t={class:"v"},Mt={class:"gs-row"},Ct={class:"k"},Ft={class:"v"},Bt={class:"gs-row"},Et={class:"k"},St={class:"v",dir:"ltr"},At={class:"gs-row"},It={class:"k"},Lt={class:"v"},Dt={class:"gs-row"},Ht={class:"k"},Pt={class:"gs-row"},jt={class:"k"},Yt={class:"v",dir:"ltr"},Nt={class:"gsuc-actions"},Vt="color:var(--gold-deep);font-family:var(--font-d);font-size:16px",Tt="display:block;margin-top:12px;font-size:11.5px;color:var(--mute)",Gt="display:flex;gap:8px;margin-top:14px",ln="flex:1;padding:11px;font-size:12px",Rt={__name:"BookSuccess",emits:["home","calendar","share"],setup(D,{emit:i}){const{state:_,pkgOf:m,bkDays:p}=L(),t=i,g=_.bk,h=M(()=>m(g.pkg)),x=M(()=>p()[g.dayIdx]),f={box:'<path d="M20 12v10H4V12M2 7h20v5H2z"/>',pin:'<path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>',cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>',card:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',qr:'<path d="M4 4h16v16H4z"/><path d="M9 9h2v2H9zM13 9h2M9 13h2M13 13h2v2h-2z"/>',home:'<path d="M3 9l9-6 9 6v11a1 1 0 01-1 1H4a1 1 0 01-1-1z"/>',calAdd:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M12 14v4M10 16h4"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>'};return(s,e)=>(a(),l("div",vt,[e[16]||(e[16]=K('<div class="gsuc-head"><h1>تم تأكيد حجزك بنجاح!</h1><span class="ic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6L9 17l-5-5"></path></svg></span></div><p class="sub">نتطلع لخدمتك وتقديم تجربة استثنائية تليق بك</p>',2)),n("div",mt,[n("div",ht,[e[10]||(e[10]=n("h4",null,"تفاصيل الحجز",-1)),n("div",kt,[n("span",yt,[c(v,{inner:f.box,size:14},null,8,["inner"]),e[3]||(e[3]=d(" الباقة",-1))]),n("span",wt,o(h.value.name),1)]),n("div",_t,[n("span",zt,[c(v,{inner:f.pin,size:14},null,8,["inner"]),e[4]||(e[4]=d(" الفرع",-1))]),n("span",$t,o(h.value.branchName),1)]),n("div",Mt,[n("span",Ct,[c(v,{inner:f.cal,size:14},null,8,["inner"]),e[5]||(e[5]=d(" التاريخ",-1))]),n("span",Ft,o(r(U)(x.value)),1)]),n("div",Bt,[n("span",Et,[c(v,{inner:f.clock,size:14},null,8,["inner"]),e[6]||(e[6]=d(" الوقت",-1))]),n("span",St,o(r(W)(r(g).time)),1)]),n("div",At,[n("span",It,[c(v,{inner:f.info,size:14},null,8,["inner"]),e[7]||(e[7]=d(" مدة الجلسة",-1))]),n("span",Lt,o(h.value.dur)+" دقيقة",1)]),n("div",Dt,[n("span",Ht,[c(v,{inner:f.card,size:14},null,8,["inner"]),e[8]||(e[8]=d(" المبلغ المدفوع",-1))]),n("span",{class:"v",style:Vt},o(r(j)(h.value.price))+" ر.س",1)]),n("div",Pt,[n("span",jt,[c(v,{inner:f.qr,size:14},null,8,["inner"]),e[9]||(e[9]=d(" رمز الحجز",-1))]),n("span",Yt,o(r(g).ref),1)])]),n("div",{class:"card gsuc-details",style:{"text-align":"center"}},[e[11]||(e[11]=n("h4",{style:{"text-align":"right"}},"رمز الوصول السريع",-1)),e[12]||(e[12]=n("div",{class:"qr-box"},[n("canvas",{id:"bkQr"})],-1)),n("small",{style:Tt},"📱 امسح الرمز عند الوصول لتسجيل الحضور"),n("div",{style:Gt},[n("button",{class:"btn btn-dark",style:ln},"🍎 Apple Wallet"),n("button",{class:"btn btn-dark",style:ln},"📲 Google Wallet")])])]),n("div",Nt,[n("button",{class:"btn btn-gold",id:"bkHome",onClick:e[0]||(e[0]=u=>t("home"))},[c(v,{inner:f.home,size:15},null,8,["inner"]),e[13]||(e[13]=d(" العودة إلى الرئيسية",-1))]),n("button",{class:"btn btn-line",id:"bkCal",onClick:e[1]||(e[1]=u=>t("calendar"))},[c(v,{inner:f.calAdd,size:15},null,8,["inner"]),e[14]||(e[14]=d(" إضافة إلى التقويم",-1))]),n("button",{class:"btn btn-line",id:"bkShare",onClick:e[2]||(e[2]=u=>t("share"))},[c(v,{inner:f.share,size:15},null,8,["inner"]),e[15]||(e[15]=d(" مشاركة الحجز",-1))])]),e[17]||(e[17]=n("div",{class:"thanks"},[n("i",null,"❦"),d(" جودة تستحقها.. تجربة لا تنساها "),n("i",null,"❦")],-1))]))}},qt={class:"gsum"},Ot={class:"card"},Kt={class:"pkline"},Ut=["src"],Wt={class:"pr"},Xt={key:0,class:"gs-row"},Qt={class:"v"},Jt={key:1,class:"gs-row"},Zt={class:"v"},ne={key:2,class:"gs-row"},re={class:"v"},te={key:3,class:"gs-row"},ee={class:"v"},oe={class:"gs-total"},ae={class:"v"},ie={class:"gs-note"},se={class:"card help-card"},le={class:"hi"},de={__name:"BookSummary",setup(D){const{state:i,pkgOf:_,bkDays:m}=L(),p=i.bk,t=M(()=>_(p.pkg)),g=M(()=>p.dayIdx!=null?m()[p.dayIdx]:null),h=M(()=>{const f=gn.find(s=>s.id===p.pay);return f?f.n:""}),x={shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',head:'<path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>'};return(f,s)=>(a(),l("div",qt,[n("div",Ot,[s[7]||(s[7]=n("h3",null,"ملخص الحجز",-1)),n("div",Kt,[n("img",{src:t.value.img,alt:""},null,8,Ut),n("span",null,[n("b",null,o(t.value.name),1),n("small",null,"🕐 "+o(t.value.dur)+" دقيقة",1),n("small",null,o(t.value.desc),1),n("span",Wt,o(r(j)(t.value.price))+" ر.س",1)])]),t.value.branchName?(a(),l("div",Xt,[s[0]||(s[0]=n("span",{class:"k"},"📍 الفرع",-1)),n("span",Qt,o(t.value.branchName),1)])):N("",!0),g.value?(a(),l("div",Jt,[s[1]||(s[1]=n("span",{class:"k"},"📅 التاريخ",-1)),n("span",Zt,o(r(U)(g.value)),1)])):N("",!0),r(p).time!=null?(a(),l("div",ne,[s[2]||(s[2]=n("span",{class:"k"},"🕐 الوقت",-1)),n("span",re,o(r(W)(r(p).time)),1)])):N("",!0),r(p).pay?(a(),l("div",te,[s[3]||(s[3]=n("span",{class:"k"},"💳 طريقة الدفع",-1)),n("span",ee,o(h.value),1)])):N("",!0),n("div",oe,[s[5]||(s[5]=n("span",{class:"k"},"الإجمالي",-1)),n("span",ae,[d(o(r(j)(t.value.price))+" ",1),s[4]||(s[4]=n("small",{style:{"font-size":"13px"}},"ر.س",-1))])]),n("div",ie,[c(v,{inner:x.shield,size:14},null,8,["inner"]),s[6]||(s[6]=d(" حجز آمن — تعديل أو إلغاء مجاني قبل 6 ساعات",-1))])]),n("div",se,[n("span",le,[c(v,{inner:x.head,size:18},null,8,["inner"])]),s[8]||(s[8]=n("b",null,"دعم على مدار الساعة",-1)),s[9]||(s[9]=n("small",null,"نحن هنا لخدمتك",-1)),s[10]||(s[10]=n("a",{href:"https://wa.me/963959415545"},"تواصل معنا",-1))])]))}},pe={class:"g-stepper"},ge={class:"g-steps"},ce=["data-i"],xe={class:"bubble"},fe='<path d="M20 6L9 17l-5-5"/>',be={__name:"GiftStepper",setup(D){const{state:i}=L();return(_,m)=>(a(),l("div",pe,[n("div",ge,[(a(!0),l(k,null,E(r(jn),(p,t)=>(a(),l("div",{key:t,class:C(["g-step",{active:t===r(i).gstep,done:t<r(i).gstep||r(i).done}]),"data-i":t},[m[0]||(m[0]=n("div",{class:"bar"},[n("i")],-1)),n("span",xe,[t<r(i).gstep||r(i).done?(a(),Y(v,{key:0,inner:fe,size:17})):(a(),l(k,{key:1},[d(o(t+1),1)],64))]),n("b",null,o(p.t),1),n("small",null,o(p.s),1)],10,ce))),128))])]))}},ue={class:"gtype-grid"},ve=["data-gt","onClick"],me={class:"im"},he=["src"],ke={class:"ic"},ye={class:"bd"},we={class:"go"},_e='<path d="M19 12H5M11 18l-6-6 6-6"/>',ze={__name:"GiftTypeStep",setup(D){const{state:i}=L();return(_,m)=>(a(),l(k,null,[m[0]||(m[0]=n("div",{class:"g-head"},[n("h1",null,"ماذا ترغب بإهدائه؟"),n("p",null,"اختر ما يناسبك لإهداء تجربة مميزة لمن تحب")],-1)),n("div",ue,[(a(!0),l(k,null,E(r(Yn),p=>(a(),l("div",{key:p.id,class:C(["gtype",{sel:r(i).gtype===p.id}]),"data-gt":p.id,onClick:t=>r(i).gtype=p.id},[n("div",me,[n("img",{src:p.img,alt:""},null,8,he),n("span",ke,[c(v,{inner:p.ic,size:22},null,8,["inner"])])]),n("div",ye,[n("h3",null,o(p.n),1),n("p",null,o(p.d),1),n("span",we,[d(o(p.btn)+" ",1),c(v,{inner:_e,size:14})])])],10,ve))),128))])],64))}},$e={class:"gp-sort"},Me={class:"gpkgs"},Ce=["data-gp","onClick"],Fe={class:"ph"},Be=["src","alt"],Ee={class:"chk"},Se={class:"bd"},Ae={class:"dur"},Ie={class:"desc"},Le={class:"prc"},De={class:"pick"},He={__name:"GiftPickStep",setup(D){const{state:i,packages:_}=L(),m={check:'<path d="M20 6L9 17l-5-5"/>',gift:'<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7s-2-5-5-5-3 5 0 5h5zM12 7s2-5 5-5 3 5 0 5h-5z"/>'},p=M(()=>_.value.slice().sort((t,g)=>i.sort==="low"?t.price-g.price:i.sort==="high"?g.price-t.price:(g.hot?1:0)-(t.hot?1:0)));return(t,g)=>(a(),l(k,null,[g[3]||(g[3]=n("div",{class:"g-head"},[n("h1",null,"اختر الباقة التي ترغب بإهدائها"),n("p",null,"باقات مميزة تمنح تجربة متكاملة من الاسترخاء والعناية")],-1)),n("div",$e,[q(n("select",{id:"gpSort","onUpdate:modelValue":g[0]||(g[0]=h=>r(i).sort=h)},[...g[1]||(g[1]=[n("option",{value:"pop"},"الأكثر مبيعًا",-1),n("option",{value:"low"},"السعر: الأقل أولًا",-1),n("option",{value:"high"},"السعر: الأعلى أولًا",-1)])],512),[[Fn,r(i).sort]]),n("small",null,o(r(_).length)+" باقات متاحة",1)]),n("div",Me,[(a(!0),l(k,null,E(p.value,(h,x)=>(a(),l("div",{key:h.id,class:C(["gpkg",{sel:r(i).gpkg===h.id}]),"data-gp":h.id,style:V(`--pc:${h.color};animation-delay:${x*.06}s`),onClick:f=>r(i).gpkg=h.id},[n("div",Fe,[n("img",{src:h.img,alt:h.name},null,8,Be),n("span",Ee,[c(v,{inner:m.check,size:13},null,8,["inner"])])]),n("div",Se,[n("h4",null,o(h.name),1),n("div",Ae,"🕐 "+o(h.dur)+" دقيقة",1),n("div",Ie,o(h.desc),1),n("div",Le,[d(o(r(j)(h.price))+" ",1),g[2]||(g[2]=n("small",null,"ر.س",-1))]),n("button",De,[c(v,{inner:m.gift,size:14},null,8,["inner"]),d(" "+o(r(i).gpkg===h.id?"تم الاختيار ✓":"أهدِ هذه الباقة"),1)])])],14,Ce))),128))])],64))}},Pe={class:"custom-grid"},je={class:"preview-col"},Ye={id:"cardPrev"},Ne={class:"gcard-msg"},Ve={id:"pvName"},Te={id:"pvMsg"},Ge={class:"form-col"},Re={class:"card",style:{"margin-bottom":"16px"}},qe={class:"two"},Oe={class:"fld"},Ke={class:"fld"},Ue={class:"fld",style:{"margin-bottom":"4px"}},We={class:"card",style:{"margin-bottom":"16px"}},Xe={class:"designs"},Qe=["data-d","onClick"],Je={class:"dchk"},Ze={class:"card"},no={class:"send-opts"},ro={class:"fld",style:{margin:"0"}},to={class:"methods",style:{"margin-top":"14px"}},eo=["data-m","onClick"],oo={class:"mi"},ao={__name:"GiftCustomizeStep",setup(D){const{state:i}=L(),_=M(()=>200-i.msg.length),m={eye:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',user:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',brush:'<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.6 7.6"/><circle cx="11" cy="11" r="2"/>',send:'<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>',check:'<path d="M20 6L9 17l-5-5"/>'};return(p,t)=>(a(),l(k,null,[t[20]||(t[20]=n("div",{class:"g-head"},[n("h1",null,"خصص هديتك لتكون أجمل"),n("p",null,"أضف لمستك الخاصة مع رسالة وتصميم بطاقة الإهداء")],-1)),n("div",Pe,[n("div",je,[n("h4",null,[c(v,{inner:m.eye,size:16},null,8,["inner"]),t[6]||(t[6]=d(" معاينة بطاقة الإهداء",-1))]),n("div",Ye,[c(cn,{design:r(i).design},null,8,["design"])]),n("div",Ne,[t[8]||(t[8]=n("span",{class:"q q1"},'"',-1)),t[9]||(t[9]=n("span",{class:"q q2"},'"',-1)),n("b",null,[t[7]||(t[7]=d("إلى: ",-1)),n("span",Ve,o(r(i).name||"—"),1)]),n("p",Te,o(r(i).msg||"اكتب رسالتك الشخصية لتظهر هنا"),1)])]),n("div",Ge,[n("div",Re,[n("h4",null,[c(v,{inner:m.user,size:16},null,8,["inner"]),t[10]||(t[10]=d(" بيانات المهدى إليه",-1))]),n("div",qe,[n("div",Oe,[t[11]||(t[11]=n("label",null,"الاسم الكامل",-1)),q(n("input",{id:"gName",placeholder:"أحمد محمد","onUpdate:modelValue":t[0]||(t[0]=g=>r(i).name=g)},null,512),[[O,r(i).name]])]),n("div",Ke,[t[12]||(t[12]=n("label",null,"رقم الجوال",-1)),q(n("input",{id:"gPhone",dir:"ltr",placeholder:"05xxxxxxxx","onUpdate:modelValue":t[1]||(t[1]=g=>r(i).phone=g)},null,512),[[O,r(i).phone]])])]),n("div",Ue,[t[13]||(t[13]=n("label",null,"الرسالة الشخصية",-1)),q(n("textarea",{id:"gMsg",maxlength:"200",placeholder:"اكتب رسالتك من القلب...","onUpdate:modelValue":t[2]||(t[2]=g=>r(i).msg=g)},null,512),[[O,r(i).msg]]),n("span",{class:C(["cnt",{max:_.value<20}]),id:"gCnt"},o(r(i).msg.length)+"/200",3)])]),n("div",We,[n("h4",null,[c(v,{inner:m.brush,size:16},null,8,["inner"]),t[14]||(t[14]=d(" تصميم بطاقة الإهداء",-1))]),n("div",Xe,[(a(!0),l(k,null,E(r(xn),g=>(a(),l("div",{key:g.id,class:C(["design",{sel:r(i).design===g.id}]),"data-d":g.id,onClick:h=>r(i).design=g.id},[n("div",{class:"sw",style:V(`background:${g.bg};color:${g.fg}`)},[n("span",Je,[c(v,{inner:m.check,size:10},null,8,["inner"])]),t[15]||(t[15]=d("SAMI",-1))],4),n("small",null,o(g.n),1)],10,Qe))),128))])]),n("div",Ze,[n("h4",null,[c(v,{inner:m.send,size:16},null,8,["inner"]),t[16]||(t[16]=d(" طريقة الإرسال",-1))]),n("div",no,[n("span",{class:C(["ro",{on:r(i).when==="now"}]),"data-w":"now",onClick:t[3]||(t[3]=g=>r(i).when="now")},[...t[17]||(t[17]=[n("i",null,null,-1),d(" إرسال الآن",-1)])],2),n("span",{class:C(["ro",{on:r(i).when==="later"}]),"data-w":"later",onClick:t[4]||(t[4]=g=>r(i).when="later")},[...t[18]||(t[18]=[n("i",null,null,-1),d(" 📅 جدولة لاحقًا",-1)])],2)]),n("div",{class:C(["sched-box",{open:r(i).when==="later"}])},[n("div",ro,[t[19]||(t[19]=n("label",null,"موعد الإرسال",-1)),q(n("input",{type:"datetime-local",id:"gSched","onUpdate:modelValue":t[5]||(t[5]=g=>r(i).schedDate=g)},null,512),[[O,r(i).schedDate]])])],2),n("div",to,[(a(!0),l(k,null,E(r(J),g=>(a(),l("div",{key:g.id,class:C(["mth",{sel:r(i).method===g.id}]),"data-m":g.id,onClick:h=>r(i).method=g.id},[n("span",oo,[c(v,{inner:g.ic,size:17},null,8,["inner"])]),d(o(g.n),1)],10,eo))),128))])])])])],64))}},io={class:"card",style:{padding:"22px","margin-bottom":"16px"}},so={class:"pay-methods"},lo=["data-pay","onClick"],po={class:"pmi"},go={class:"cf-box"},co={class:"secure-strip"},xo="font-family:var(--font-d);font-size:16px;color:var(--ink);margin-bottom:16px",fo={__name:"GiftPayStep",setup(D){const{state:i}=L(),_=M(()=>i.pay==="card"||i.pay==="mada"),m={check:'<path d="M20 6L9 17l-5-5"/>',shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'};return(p,t)=>(a(),l(k,null,[t[8]||(t[8]=n("div",{class:"g-head"},[n("h1",null,[d("أكمل الدفع لإرسال هديتك "),n("span",{class:"lock"},"🔒")]),n("p",null,"بيانات دفع آمنة ومشفرة بالكامل")],-1)),n("div",io,[n("h4",{style:xo},"اختر طريقة الدفع"),n("div",so,[(a(!0),l(k,null,E(r(Nn),g=>(a(),l("div",{key:g.id,class:C(["pm",{sel:r(i).pay===g.id}]),"data-pay":g.id,onClick:h=>r(i).pay=g.id},[t[1]||(t[1]=n("span",{class:"rad"},[n("i")],-1)),n("span",po,o(g.logo),1),n("b",null,o(g.n),1),n("small",null,o(g.d),1)],10,lo))),128))]),n("div",{class:C(["card-form",{open:_.value}])},[n("div",go,[t[3]||(t[3]=n("h5",null,"بيانات البطاقة",-1)),t[4]||(t[4]=n("div",{class:"two"},[n("div",{class:"fld"},[n("label",null,"رقم البطاقة"),n("input",{dir:"ltr",inputmode:"numeric",placeholder:"•••• •••• •••• ••••"})]),n("div",{class:"fld"},[n("label",null,"الاسم على البطاقة"),n("input",{placeholder:"الاسم كما هو على البطاقة"})])],-1)),t[5]||(t[5]=n("div",{class:"two"},[n("div",{class:"fld",style:{margin:"0"}},[n("label",null,"تاريخ الانتهاء"),n("input",{dir:"ltr",placeholder:"MM / YY"})]),n("div",{class:"fld",style:{margin:"0"}},[n("label",null,"رمز الأمان (CVV)"),n("input",{dir:"ltr",inputmode:"numeric",placeholder:"•••"})])],-1)),n("span",{class:C(["save-card",{on:r(i).saveCard}]),id:"saveCard",onClick:t[0]||(t[0]=g=>r(i).saveCard=!r(i).saveCard)},[n("i",null,[c(v,{inner:m.check,size:11},null,8,["inner"])]),t[2]||(t[2]=d(" حفظ البطاقة لاستخدامها لاحقًا",-1))],2)])],2),n("div",co,[c(v,{inner:m.shield,size:15},null,8,["inner"]),t[6]||(t[6]=d(" جميع بيانات الدفع محمية بتقنية تشفير آمنة ومعتمدة",-1))]),t[7]||(t[7]=n("div",{class:"after-pay"},"سيتم إرسال الهدية مباشرة بعد إتمام الدفع",-1))])],64))}},bo={class:"gsuccess"},uo={class:"gsuc-grid"},vo={class:"gsuc-card-col"},mo={class:"gcard-msg"},ho={class:"card gsuc-details"},ko={class:"gs-row"},yo={class:"k"},wo={class:"v"},_o={class:"gs-row"},zo={class:"k"},$o={class:"v"},Mo={class:"gs-row"},Co={class:"k"},Fo={class:"v",dir:"ltr"},Bo={class:"gs-row"},Eo={class:"k"},So={class:"v"},Ao={class:"chip"},Io={class:"gs-row"},Lo={class:"k"},Do={class:"gs-row"},Ho={class:"k"},Po={class:"v",dir:"ltr"},jo={class:"gsuc-actions"},Yo="display:flex;gap:10px;align-items:center;background:var(--green-bg);border-radius:12px;padding:13px 15px;margin-top:14px;font-size:12.5px;color:#1E6B41",No="flex:none;width:26px;height:26px;border-radius:50%;background:var(--green);color:#fff;display:grid;place-items:center",Vo={__name:"GiftSuccess",emits:["recipient","new-gift","copy-self","share","home"],setup(D,{emit:i}){const{state:_}=L(),m=i,p=["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],t=new Date,g=`${t.getDate()} ${p[t.getMonth()]} ${t.getFullYear()}`,h="✦✧✦✧".split("").map((s,e)=>({c:s,style:`top:${10+e*16}%;${e%2?"right":"left"}:${4+e*3}%;animation-delay:-${e}s`})),x=M(()=>{const s=J.find(e=>e.id===_.method);return s?s.n:""}),f={user:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',send:'<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>',phone:'<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',card:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',check:'<path d="M20 6L9 17l-5-5"/>',box:'<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7"/>',gift:'<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7s-2-5-5-5-3 5 0 5h5zM12 7s2-5 5-5 3 5 0 5h-5z"/>',mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 6L2 7"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>',home:'<path d="M3 9l9-6 9 6v11a1 1 0 01-1 1H4a1 1 0 01-1-1z"/>'};return(s,e)=>(a(),l("div",bo,[(a(!0),l(k,null,E(r(h),(u,y)=>(a(),l("span",{key:y,class:"confetti",style:V(u.style)},o(u.c),5))),128)),e[20]||(e[20]=K('<div class="gsuc-head"><h1>تم إرسال هديتك بنجاح</h1><span class="ic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6L9 17l-5-5"></path></svg></span></div><p class="sub">لقد أسعدت قلبًا اليوم 🤍 شكرًا لاختيارك عناية سامي</p>',2)),n("div",uo,[n("div",vo,[c(cn,{design:r(_).design},null,8,["design"]),n("div",mo,[e[5]||(e[5]=n("span",{class:"q q1"},'"',-1)),e[6]||(e[6]=n("span",{class:"q q2"},'"',-1)),n("p",null,o(r(_).msg),1)])]),n("div",ho,[e[14]||(e[14]=n("h4",null,"تفاصيل الإرسال",-1)),n("div",ko,[n("span",yo,[c(v,{inner:f.user,size:14},null,8,["inner"]),e[7]||(e[7]=d(" المهدى إليه",-1))]),n("span",wo,o(r(_).name),1)]),n("div",_o,[n("span",zo,[c(v,{inner:f.send,size:14},null,8,["inner"]),e[8]||(e[8]=d(" طريقة الإرسال",-1))]),n("span",$o,o(x.value),1)]),n("div",Mo,[n("span",Co,[c(v,{inner:f.phone,size:14},null,8,["inner"]),e[9]||(e[9]=d(" رقم الجوال",-1))]),n("span",Fo,o(r(_).phone),1)]),n("div",Bo,[n("span",Eo,[c(v,{inner:f.clock,size:14},null,8,["inner"]),e[10]||(e[10]=d(" وقت الإرسال",-1))]),n("span",So,[n("span",Ao,"✓ "+o(r(_).when==="now"?"تم الإرسال الآن":"مجدولة"),1)])]),n("div",Io,[n("span",Lo,[c(v,{inner:f.cal,size:14},null,8,["inner"]),e[11]||(e[11]=d(" تاريخ الإرسال",-1))]),n("span",{class:"v"},o(g))]),n("div",Do,[n("span",Ho,[c(v,{inner:f.card,size:14},null,8,["inner"]),e[12]||(e[12]=d(" رقم العملية",-1))]),n("span",Po,o(r(_).ref),1)]),n("div",{style:Yo},[n("span",{style:No},[c(v,{inner:f.check,size:13},null,8,["inner"])]),e[13]||(e[13]=d(" تم إرسال الهدية بنجاح إلى المستلم — ستظهر الهدية في رسالة خاصة من عناية سامي ",-1))])])]),n("div",jo,[n("button",{class:"btn btn-gold",id:"openRecipient",onClick:e[0]||(e[0]=u=>m("recipient"))},[c(v,{inner:f.box,size:15},null,8,["inner"]),e[15]||(e[15]=d(" فتح صفحة المستلم",-1))]),n("button",{class:"btn btn-dark",id:"newGift",onClick:e[1]||(e[1]=u=>m("new-gift"))},[c(v,{inner:f.gift,size:15},null,8,["inner"]),e[16]||(e[16]=d(" إهداء جديد",-1))]),n("button",{class:"btn btn-line",id:"copySelf",onClick:e[2]||(e[2]=u=>m("copy-self"))},[c(v,{inner:f.mail,size:15},null,8,["inner"]),e[17]||(e[17]=d(" إرسال نسخة لنفسي",-1))]),n("button",{class:"btn btn-line",id:"shareGift",onClick:e[3]||(e[3]=u=>m("share"))},[c(v,{inner:f.share,size:15},null,8,["inner"]),e[18]||(e[18]=d(" مشاركة الهدية",-1))]),n("button",{class:"btn btn-line",id:"backHome",onClick:e[4]||(e[4]=u=>m("home"))},[c(v,{inner:f.home,size:15},null,8,["inner"]),e[19]||(e[19]=d(" العودة للرئيسية",-1))])]),e[21]||(e[21]=n("div",{class:"thanks"},[n("i",null,"❦"),d(" شكرًا لاختيارك عناية سامي لتقديم تجربة مميزة لمن تحب "),n("i",null,"❦")],-1))]))}},To={key:0,class:"gsum"},Go={class:"card"},Ro={class:"why-gift"},qo={class:"wi"},Oo={class:"card help-card"},Ko={class:"hi"},Uo={key:1,class:"gsum"},Wo={class:"card"},Xo={key:0,class:"pkline"},Qo=["src"],Jo={class:"pr"},Zo={class:"gs-row"},na={class:"v"},ra={class:"gs-row"},ta={class:"v",dir:"ltr"},ea={class:"gs-row"},oa={class:"v"},aa={class:"gs-row"},ia={class:"v"},sa={class:"gs-row"},la={class:"v"},da={class:"gs-row"},pa={class:"v"},ga={class:"chip"},ca={key:3,class:"gs-total"},xa={class:"v"},fa={class:"gs-note"},ba={key:0,class:"card help-card"},ua={class:"hi"},va="text-align:center;padding:20px;border:1.5px dashed var(--line);border-radius:13px;color:var(--mute);font-size:12.5px;margin-bottom:12px",ma="display:block;font-family:var(--font-d);color:var(--ink);margin-bottom:4px",ha={__name:"GiftSummary",setup(D){const{state:i,pkgOf:_}=L(),m=M(()=>i.gpkg?_(i.gpkg):null),p=M(()=>xn.find(f=>f.id===i.design)),t=M(()=>i.gstep===0||!m.value&&i.gstep<2),g=M(()=>{const f=J.find(s=>s.id===i.method);return f?f.n:""}),h={head:'<path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>',lock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>'},x=[["هدية رقمية فورية","تصلك أو تصل للمستلم فور إتمام الدفع",'<path d="M13 2L3 14h9l-1 8 10-12h-9z"/>'],["صالحة لمدة 6 أشهر","من تاريخ الشراء",'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>'],["المستلم يختار موعده","يختار الوقت والفرع المناسب له",'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>'],["آمنة وموثوقة","نضمن لك تجربة إهداء مميزة",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>']];return(f,s)=>t.value?(a(),l("div",To,[n("div",Go,[s[0]||(s[0]=n("h3",null,"لماذا الإهداء من سامي؟",-1)),n("div",Ro,[(a(),l(k,null,E(x,(e,u)=>n("div",{key:u,class:"wg"},[n("span",qo,[c(v,{inner:e[2],size:17},null,8,["inner"])]),n("span",null,[n("b",null,o(e[0]),1),n("small",null,o(e[1]),1)])])),64))])]),n("div",Oo,[n("span",Ko,[c(v,{inner:h.head,size:18},null,8,["inner"])]),s[1]||(s[1]=n("b",null,"تحتاج مساعدة؟",-1)),s[2]||(s[2]=n("small",null,"فريقنا جاهز لمساعدتك",-1)),s[3]||(s[3]=n("a",{href:"https://wa.me/963959415545"},"تواصل معنا",-1))])])):(a(),l("div",Uo,[n("div",Wo,[s[14]||(s[14]=n("h3",null,"ملخص الإهداء",-1)),m.value?(a(),l("div",Xo,[n("img",{src:m.value.img,alt:""},null,8,Qo),n("span",null,[n("b",null,o(m.value.name),1),n("small",null,"🕐 "+o(m.value.dur)+" دقيقة",1),n("small",null,o(m.value.desc),1),n("span",Jo,o(r(j)(m.value.price))+" ر.س",1)])])):(a(),l("div",{key:1,style:va},[n("b",{style:ma},"لم يتم اختيار باقة بعد"),s[4]||(s[4]=d("اختر الباقة المناسبة لإهدائها لمن تحب",-1))])),r(i).gstep>=2?(a(),l(k,{key:2},[n("div",Zo,[s[5]||(s[5]=n("span",{class:"k"},"👤 المهدى إليه",-1)),n("span",na,o(r(i).name||"—"),1)]),n("div",ra,[s[6]||(s[6]=n("span",{class:"k"},"📱 رقم الجوال",-1)),n("span",ta,o(r(i).phone||"—"),1)]),n("div",ea,[s[7]||(s[7]=n("span",{class:"k"},"🎨 تصميم البطاقة",-1)),n("span",oa,o(p.value.n),1)]),n("div",aa,[s[8]||(s[8]=n("span",{class:"k"},"💬 الرسالة",-1)),n("span",ia,o(r(i).msg?"تمت إضافة رسالة مخصصة":"—"),1)]),n("div",sa,[s[9]||(s[9]=n("span",{class:"k"},"📤 طريقة الإرسال",-1)),n("span",la,o(g.value),1)]),n("div",da,[s[10]||(s[10]=n("span",{class:"k"},"🕐 وقت الإرسال",-1)),n("span",pa,[n("span",ga,o(r(i).when==="now"?"فوري":"مجدول"),1)])])],64)):N("",!0),m.value?(a(),l("div",ca,[s[12]||(s[12]=n("span",{class:"k"},"الإجمالي",-1)),n("span",xa,[d(o(r(j)(m.value.price))+" ",1),s[11]||(s[11]=n("small",{style:{"font-size":"13px"}},"ر.س",-1))])])):N("",!0),n("div",fa,[c(v,{inner:h.lock,size:14},null,8,["inner"]),s[13]||(s[13]=d(" بإتمامك معلومات الهدية مشفرة وآمنة 100%",-1))])]),r(i).gstep===1?(a(),l("div",ba,[n("span",ua,[c(v,{inner:h.head,size:18},null,8,["inner"])]),s[15]||(s[15]=n("b",null,"تحتاج مساعدة؟",-1)),s[16]||(s[16]=n("small",null,"فريقنا جاهز لمساعدتك في اختيار الهدية المثالية",-1)),s[17]||(s[17]=n("a",{href:"https://wa.me/963959415545"},"تواصل معنا",-1))])):N("",!0)]))}},ka={class:"shell"},ya={class:"wrap",id:"pkgApp"},wa={key:0,class:"view on"},_a={key:1,class:"g-stage"},za={class:"view on"},$a={id:"gsumWrap"},Ma={key:0,class:"view on"},Ca={key:1,class:"g-stage"},Fa={class:"view on"},Ba={id:"gsumWrap"},Ea={class:"wrap"},Sa={class:"f-grid"},Aa={class:"f-brand"},Ia={class:"f-links"},La={class:"f-links"},Da=["href"],Ha={class:"wrap in"},Pa={class:"fb-mid",id:"fbMid"},ja=["disabled"],Ya='<path d="M19 12H5M11 18l-6-6 6-6"/>',Ua={__name:"PackagesGiftsView",setup(D){const i=G(null),{current:_,openPicker:m,requireLocation:p,locations:t,loadServiceLocations:g}=Bn();g();const{requireAuth:h}=En(),{state:x,pkgOf:f,bkDays:s,gCanNext:e,gNextLabel:u,bkCanNext:y,bkNextLabel:P,startGift:w,startBook:$,backToPackages:z}=L();An(On,"packages-gifts"),In(i);const A=G(!1),X=G(""),Q=G(!1);function T(F){X.value=F,Q.value=!0,clearTimeout(T._h),T._h=setTimeout(()=>{Q.value=!1},2600)}const R=M(()=>x.page==="book"),fn=M(()=>R.value?!(x.bk.done||x.bk.step>=2):x.page==="gift"&&!x.done&&x.gstep!==4),bn=M(()=>R.value?!0:x.gstep!==0),Z=M(()=>{const F=R.value?x.bk.pkg:x.gpkg;return F?f(F):null}),nn=M(()=>R.value?y.value:e.value),un=M(()=>R.value?P.value:u.value);function vn(){if(R.value){if(x.bk.step===0){z();return}x.bk.step--}else{if(x.gstep===0){z();return}x.gstep--}scrollTo({top:0,behavior:"smooth"})}function mn(){if(nn.value){if(R.value)x.bk.step++;else{if(x.gstep===3){hn();return}x.gstep++}scrollTo({top:0,behavior:"smooth"})}}function hn(){h(async()=>{var F,b,I,S;A.value=!0;try{const B=await Rn({packages:[{id:x.gpkg}],location:{recipient_name:x.name.trim(),recipient_mobile:x.phone.trim(),message:x.msg.trim()||void 0},branch:x.siteBranch||null,send_channel:x.method||"link"}),en=x.pay==="wallet";await on(en?"card":"cod",{wallet:en}),x.ref=(F=B==null?void 0:B.data)!=null&&F.gift_card_id?`#GIFT-${B.data.gift_card_id}`:"#GIFT",x.claimUrl=((b=B==null?void 0:B.data)==null?void 0:b.share_url)||((I=B==null?void 0:B.data)==null?void 0:I.claim_url)||null,x.claimToken=((S=B==null?void 0:B.data)==null?void 0:S.claim_token)||null,x.done=!0,x.gstep=4,scrollTo({top:0,behavior:"smooth"})}catch(B){console.error("Package gift error:",B),T((B==null?void 0:B.message)||"تعذر إنشاء الهدية، حاول مرة أخرى")}finally{A.value=!1}})}function kn(F){return`${F.getFullYear()}-${String(F.getMonth()+1).padStart(2,"0")}-${String(F.getDate()).padStart(2,"0")}`}function yn(){h(async()=>{var F;A.value=!0;try{const b=x.bk,I=s()[b.dayIdx];await Gn({package_id:b.pkg,branch_id:b.branch,date:kn(I),time:b.time,employee_id:(F=b.employee)==null?void 0:F.id,notes:b.notes||void 0});const S=b.pay==="wallet",B=await on(S?"card":"cod",{wallet:S});x.bk.ref=B.invoice_id||null,x.bk.done=!0,scrollTo({top:0,behavior:"smooth"})}catch(b){T(b.message||"تعذّر إتمام الحجز، حاول مرة أخرى")}finally{A.value=!1}})}function rn(){_.value&&(x.siteBranch=_.value.id)}function wn(F){$(F)}function _n(F){p(()=>{rn(),w("pkg",F)})}function zn(){p(()=>{rn(),w(null,null)})}function $n(){x.done=!1,x.gstep=0,x.gtype=null,x.gpkg=null,x.pay=null,x.ref=null,scrollTo({top:0,behavior:"smooth"})}function tn(){location.href="/"}return(F,b)=>{const I=pn("RouterLink");return a(),l("div",{ref_key:"root",ref:i},[n("div",ka,[n("div",ya,[r(x).page==="packages"?(a(),Y(cr,{key:0,onBook:wn,onGift:_n,onGiftNow:zn,onPickBranch:r(m)},null,8,["onPickBranch"])):r(x).page==="book"?(a(),l(k,{key:1},[c(mr),r(x).bk.done?(a(),l("div",wa,[c(Rt,{onHome:tn,onCalendar:b[0]||(b[0]=S=>T("تمت إضافة الموعد إلى التقويم")),onShare:b[1]||(b[1]=S=>T("تم نسخ رابط الحجز للمشاركة"))})])):(a(),l("div",_a,[n("main",za,[r(x).bk.step===0?(a(),Y(Ir,{key:0})):r(x).bk.step===1?(a(),Y(ot,{key:1})):(a(),Y(ut,{key:2,onPay:yn}))]),n("aside",$a,[c(de)])]))],64)):(a(),l(k,{key:2},[c(be),r(x).done?(a(),l("div",Ma,[c(Vo,{onRecipient:b[2]||(b[2]=S=>r(x).claimUrl&&(F.location.href=r(x).claimUrl)),onNewGift:$n,onCopySelf:b[3]||(b[3]=S=>T("تم إرسال نسخة من الهدية إلى بريدك")),onShare:b[4]||(b[4]=S=>T("تم نسخ رابط الهدية للمشاركة")),onHome:tn})])):(a(),l("div",Ca,[n("main",Fa,[r(x).gstep===0?(a(),Y(ze,{key:0})):r(x).gstep===1?(a(),Y(He,{key:1})):r(x).gstep===2?(a(),Y(ao,{key:2})):(a(),Y(fo,{key:3}))]),n("aside",Ba,[c(ha)])]))],64))])]),n("footer",null,[n("div",Ea,[n("div",Sa,[n("div",Aa,[c(I,{class:"logo",to:"/"},{default:H(()=>[...b[5]||(b[5]=[n("span",{class:"mark"},[n("img",{src:Sn,alt:"عناية سامي",style:{width:"29px",height:"29px","object-fit":"contain"}})],-1),n("span",{class:"name"},[n("b",null,"عناية سامي"),n("span",null,"SAMI CARE")],-1)])]),_:1}),b[6]||(b[6]=K('<p>مركز متخصص في العناية الرجالية المتكاملة بجدة، حيث تلتقي الفخامة بالاحترافية في كل تفصيلة.</p><div class="socials"><a href="https://x.com/samicare_sa" aria-label="X"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-6.8 7.8L23.3 22h-6.3l-4.9-6.4L6.5 22H3.4l7.3-8.3L1 2h6.5l4.4 5.8L18.9 2zm-1.1 18h1.7L7.1 3.9H5.3L17.8 20z"></path></svg></a><a href="https://www.instagram.com/samicare.sa/" aria-label="انستقرام"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1" fill="currentColor"></circle></svg></a><a href="https://www.facebook.com/samicare.sa" aria-label="فيسبوك"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg></a></div>',2))]),n("div",null,[b[12]||(b[12]=n("h4",null,"روابط مهمة",-1)),n("ul",Ia,[n("li",null,[c(I,{to:"/"},{default:H(()=>[...b[7]||(b[7]=[d("الرئيسية",-1)])]),_:1})]),n("li",null,[c(I,{to:"/booking"},{default:H(()=>[...b[8]||(b[8]=[d("حجز موعد",-1)])]),_:1})]),n("li",null,[c(I,{to:"/#services"},{default:H(()=>[...b[9]||(b[9]=[d("خدماتنا",-1)])]),_:1})]),n("li",null,[c(I,{to:"/packages-gifts"},{default:H(()=>[...b[10]||(b[10]=[d("الباقات",-1)])]),_:1})]),n("li",null,[c(I,{to:"/gifts"},{default:H(()=>[...b[11]||(b[11]=[d("الهدايا",-1)])]),_:1})])])]),n("div",null,[b[18]||(b[18]=n("h4",null,"استكشف",-1)),n("ul",La,[n("li",null,[c(I,{to:"/store"},{default:H(()=>[...b[13]||(b[13]=[d("المتجر",-1)])]),_:1})]),n("li",null,[c(I,{to:"/branches"},{default:H(()=>[...b[14]||(b[14]=[d("فروعنا",-1)])]),_:1})]),n("li",null,[c(I,{to:"/contact"},{default:H(()=>[...b[15]||(b[15]=[d("تواصل معنا",-1)])]),_:1})]),n("li",null,[c(I,{to:"/terms"},{default:H(()=>[...b[16]||(b[16]=[d("الشروط والأحكام",-1)])]),_:1})]),n("li",null,[c(I,{to:"/privacy-policy"},{default:H(()=>[...b[17]||(b[17]=[d("سياسة الخصوصية",-1)])]),_:1})])])]),n("div",null,[b[19]||(b[19]=n("h4",null,"عناوين الفروع",-1)),(a(!0),l(k,null,E(r(t),S=>(a(),l("div",{key:S.id,class:"f-branch"},[n("b",null,o(S.name),1),n("small",null,o(S.address),1),S.contact_number?(a(),l("a",{key:0,href:`tel:${S.contact_number}`},o(S.contact_number),9,Da)):N("",!0)]))),128)),b[20]||(b[20]=n("div",{class:"f-branch"},[n("b",null,"خدمات منزلية"),n("small",null,"حلاقة شعر ولحية وماسكات طبيعية")],-1))])]),b[21]||(b[21]=K('<div class="f-bottom"><small>© 2026 عناية سامي — جميع الحقوق محفوظة</small><div class="pay" aria-label="بوابات الدفع"><span title="Visa">VISA</span><span title="Mastercard">Mastercard</span><span title="مدى">mada</span><span title="Tabby">tabby</span><span title="Apple Pay">Pay</span></div></div>',1))])]),n("div",{class:C(["footbar",{on:fn.value}]),id:"footbar"},[n("div",Ha,[n("button",{class:"btn btn-back",id:"btnBack",style:V({visibility:bn.value?"visible":"hidden"}),onClick:vn},[...b[22]||(b[22]=[n("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[n("path",{d:"M5 12h14M13 6l6 6-6 6"})],-1),d(" السابق ",-1)])],4),n("div",Pa,[Z.value?(a(),l(k,{key:0},[b[23]||(b[23]=d("الإجمالي ",-1)),n("b",null,o(r(j)(Z.value.price))+" ر.س",1),b[24]||(b[24]=d(" — 🔒 بياناتك محمية وآمنة",-1))],64)):(a(),l(k,{key:1},[d("🔒 بياناتك محمية وآمنة")],64))]),n("button",{class:"btn btn-gold",id:"btnNext",disabled:!nn.value,onClick:mn},[d(o(un.value)+" ",1),c(v,{inner:Ya,size:15})],8,ja)])],2),n("div",{class:C(["pay-loading",{on:A.value}]),id:"payLoading"},[...b[25]||(b[25]=[n("div",{class:"pl-box"},[n("div",{class:"pl-ring"}),n("b",null,"جارٍ إتمام الإهداء بأمان…"),n("small",null,"سيتم إرسال الهدية مباشرة بعد إتمام الدفع")],-1)])],2),n("div",{class:C(["toast",{on:Q.value}]),id:"toast"},o(X.value),3)],512)}}};export{Ua as default};
