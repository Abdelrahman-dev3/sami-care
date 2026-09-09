import{i as w,o,c as s,m as tn,b as n,u as r,F as z,a as p,t as a,e as L,z as q,n as S,q as G,d as c,O as m,p as O,r as U,A as mn,H as An,v as hn,C as Q,J as rn,x as j,_ as kn,T as In,h as Ln,I as Pn,V as Dn}from"./index-DjBFswIz.js";import{u as Nn,a as Tn}from"./useInternalLinks-MQR4LjXR.js";import{u as H,B as Hn,a as Vn,A as Yn,b as jn,f as en,c as an,r as T,d as yn,G as Gn,e as Rn,D as wn,S as pn,P as On}from"./usePackages-hGc8Gcif.js";import{f as Wn,b as Un,a as qn,i as un,d as Kn}from"./bookingApi-B1Rw9TbB.js";import{G as _n,c as Xn}from"./GiftCard-B6Etx609.js";import{_ as Jn}from"./complete-care-hq-DbNf4QGN.js";import{_ as bn}from"./SkeletonLoader-Dc0yP4P5.js";import{f as Qn}from"./accountApi-Ck-x2b33.js";import"./i18nField-CJ_3XKph.js";const Zn=`\r
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
`,nr={class:"branch-gate"},rr={class:"ph"},tr=["src","alt"],er={class:"body"},ar={class:"dur"},or={class:"desc"},ir={class:"inc"},sr={class:"price"},lr={class:"acts"},dr=["data-book","onClick"],pr=["data-gift","onClick"],gr={class:"gift-banner"},cr={class:"txt"},xr={class:"mini-feats"},ur={class:"mi"},br={class:"cta"},fr={class:"perks"},vr={class:"pi"},mr={__name:"PackagesCatalog",emits:["book","gift","gift-now","pick-branch"],setup(V,{emit:i}){const{state:y,filteredPkgs:k}=H(),l=i,t=b=>b.toLocaleString("ar-EG-u-nu-latn"),e=w(()=>{const b=Hn.find(v=>v.id===y.siteBranch);return b?b.name:""}),h=w(()=>`grid-template-columns:repeat(${Math.min(k.value.length,5)},1fr)`),g={clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',gift:'<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7s-2-5-5-5-3 5 0 5h5zM12 7s2-5 5-5 3 5 0 5h-5z"/>'},u=[["بطاقة إهداء رقمية",'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>'],["رسالة مخصصة من قلبك",'<path d="M21 11.5a8.4 8.4 0 01-9 8.4 8.5 8.5 0 01-3.8-.9L3 21l2-5.2a8.4 8.4 0 011.5-9.8 8.5 8.5 0 0114.5 5.5z"/>'],["إرسال فوري عبر واتساب أو بريد",'<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>'],["جدولة الإهداء في الوقت المناسب",'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>']],d=[["غرفة VIP خاصة","لباقات مختارة",'<path d="M2 8l4 4 6-8 6 8 4-4v10a2 2 0 01-2 2H4a2 2 0 01-2-2z"/>'],["منتجات فاخرة","ضمن باقاتك",'<path d="M20 12v9H4v-9M2 7h20v5H2z"/>'],["أولوية في الحجز","مواعيد مرنة",'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4"/>'],["ضيافة فاخرة","مشروبات مختارة",'<path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4z"/>'],["نقاط ولاء مضاعفة","مع كل باقة",'<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7"/>'],["ضمان الجودة","أفضل تجربة",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>']];return(b,v)=>(o(),s(z,null,[v[15]||(v[15]=tn('<section class="pk-hero"><div class="bg"><img src="'+Jn+'" alt=""></div><svg class="ghost-logo" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width=".8"><path d="M12 2l9 5v10l-9 5-9-5V7z"></path><path d="M12 2v20M3 7l9 5 9-5M3 17l9-5 9 5"></path></svg><div class="in"><div class="eyebrow">تجارب متكاملة</div><h1>لراحتـك وأناقتـك</h1><p>اختر الباقة التي تناسب احتياجاتك واستمتع بتجربة عناية متكاملة توفر عليك الوقت والجهد</p></div></section>',1)),n("div",nr,[r(y).siteBranch?(o(),s(z,{key:0},[n("span",null,[v[3]||(v[3]=p("📍 الفرع المختار: ",-1)),n("b",null,a(e.value),1)]),n("button",{id:"branchGateChange",onClick:v[0]||(v[0]=M=>l("pick-branch"))},"تغيير الفرع")],64)):(o(),s(z,{key:1},[v[4]||(v[4]=n("span",null,"حدد فرعك أولًا لعرض الأسعار والمواعيد المتاحة بدقة",-1)),n("button",{id:"branchGateChange",class:"primary",onClick:v[1]||(v[1]=M=>l("pick-branch"))},"اختر الفرع")],64))]),n("div",{class:"pkgs",style:q(h.value)},[(o(!0),s(z,null,L(r(k),(M,N)=>(o(),s("article",{key:M.id,class:S(["pkg",{hot:M.hot}]),style:q(`--pc:${M.color};animation-delay:${N*.07}s`)},[n("div",rr,[n("img",{src:M.img,alt:M.name},null,8,tr),M.hot?(o(),s(z,{key:0},[v[5]||(v[5]=n("span",{class:"hotflag"},"الأكثر طلبًا",-1)),v[6]||(v[6]=n("span",{class:"starflag"},"★",-1))],64)):G("",!0)]),n("span",{class:"badge",style:q(`border-color:${M.hex}`)},[c(m,{inner:M.ico,size:22},null,8,["inner"])],4),n("div",er,[n("h3",null,a(M.name),1),n("div",ar,[c(m,{inner:g.clock,size:13},null,8,["inner"]),p(" "+a(M.dur)+" دقيقة",1)]),n("div",or,a(M.desc),1),n("div",ir,[v[8]||(v[8]=n("b",null,"تشمل الباقة",-1)),n("ul",null,[(o(!0),s(z,null,L(M.inc,(_,$)=>(o(),s("li",{key:$},[v[7]||(v[7]=n("i",null,"✓",-1)),p(a(_),1)]))),128))])]),n("div",sr,[p(a(t(M.price))+" ",1),v[9]||(v[9]=n("small",null,"ر.س",-1))]),n("div",lr,[n("button",{class:"book","data-book":M.id,onClick:_=>l("book",M.id)},"احجز الباقة",8,dr),n("button",{class:"gift-mini","data-gift":M.id,onClick:_=>l("gift",M.id)},[c(m,{inner:g.gift,size:14},null,8,["inner"]),v[10]||(v[10]=p(" أهدِ هذه الباقة",-1))],8,pr)])])],6))),128))],4),n("section",gr,[v[14]||(v[14]=n("div",{class:"gb-box"},[n("div",{class:"face"}),n("span",{class:"tag"},"هدية لكم من القلب 💛")],-1)),n("div",cr,[v[11]||(v[11]=n("h2",null,"أهدِ تجربة فاخرة لمن تحب",-1)),v[12]||(v[12]=n("p",null,"اختر الباقة، أضف رسالة مخصصة، وسيصلك المهدى إليه بشكل أنيق في الوقت المناسب",-1)),n("div",xr,[(o(),s(z,null,L(u,(M,N)=>n("div",{key:N,class:"mf"},[n("span",ur,[c(m,{inner:M[1],size:16},null,8,["inner"])]),p(a(M[0]),1)])),64))])]),n("div",br,[n("button",{class:"btn btn-gold",id:"giftNow",onClick:v[2]||(v[2]=M=>l("gift-now"))},[c(m,{inner:g.gift,size:16},null,8,["inner"]),v[13]||(v[13]=p(" أهدِ باقة الآن",-1))])])]),n("div",fr,[(o(),s(z,null,L(d,(M,N)=>n("div",{key:N,class:"perk"},[n("span",vr,[c(m,{inner:M[2],size:17},null,8,["inner"])]),n("b",null,a(M[0]),1),n("small",null,a(M[1]),1)])),64))])],64))}},hr={class:"g-stepper"},kr={class:"g-steps"},yr=["data-bi"],wr={class:"bubble"},_r='<path d="M20 6L9 17l-5-5"/>',$r={__name:"BookStepper",setup(V){const{state:i}=H();return(y,k)=>(o(),s("div",hr,[n("div",kr,[(o(!0),s(z,null,L(r(Vn),(l,t)=>(o(),s("div",{key:t,class:S(["g-step",{active:t===r(i).bk.step&&!r(i).bk.done,done:t<r(i).bk.step||r(i).bk.done}]),"data-bi":t},[k[0]||(k[0]=n("div",{class:"bar"},[n("i")],-1)),n("span",wr,[t<r(i).bk.step||r(i).bk.done?(o(),O(m,{key:0,inner:_r,size:17})):(o(),s(z,{key:1},[p(a(t+1),1)],64))]),n("b",null,a(l.t),1),n("small",null,a(l.s),1)],10,yr))),128))])]))}},zr={class:"g-head"},Mr={class:"card",style:{padding:"20px","margin-bottom":"16px"}},Cr={class:"daystrip"},Fr=["data-bd","onClick"],Br={key:0,class:"card",style:{padding:"20px"}},Er={key:1,class:"card",style:{padding:"20px"}},Sr={class:"periods"},Ar=["data-bp","onClick"],Ir={key:1,class:"slots"},Lr=["data-bt","onClick"],Pr={key:0,class:"tag"},Dr={key:2,class:"card",style:{padding:"40px","text-align":"center",color:"var(--mute)","font-size":"13.5px"}},fn="grid-column:1/-1;text-align:center;color:var(--mute);padding:30px;border:1.5px dashed var(--line);border-radius:14px;font-size:13px",Nr="font-family:var(--font-d);font-size:15px;color:var(--ink);margin-bottom:12px",Tr="font-family:var(--font-d);font-size:15px;color:var(--ink);margin-bottom:4px",Hr={__name:"BookTimeStep",setup(V){const{state:i,pkgOf:y,bkDays:k}=H(),l=i.bk,t=k(),e=w(()=>y(l.pkg)),h=U(!0),g=U([]),u=U(!1);function d(_){return`${_.getFullYear()}-${String(_.getMonth()+1).padStart(2,"0")}-${String(_.getDate()).padStart(2,"0")}`}mn(async()=>{if(l.employee){h.value=!1;return}try{const _=await Wn({branchId:l.branch,serviceId:0}),$=(Array.isArray(_)?_:[])[0];$&&(l.employee={id:$.id,name:[$.first_name,$.last_name].filter(Boolean).join(" ")||"موظف"})}catch{l.employee=null}finally{h.value=!1}});async function b(){var _;if(l.dayIdx==null||!l.employee){g.value=[];return}u.value=!0;try{const $=await Un({date:d(t[l.dayIdx]),staffId:l.employee.id,durationMin:(_=e.value)==null?void 0:_.dur});g.value=Array.isArray($)?$:[]}catch{g.value=[]}finally{u.value=!1}}An(()=>{var _;return[l.dayIdx,(_=l.employee)==null?void 0:_.id]},b);const v=w(()=>g.value.filter(_=>{const $=Number(_.split(":")[0]);return l.period==="all"||l.period==="am"&&$<12||l.period==="pm"&&$>=12&&$<17||l.period==="eve"&&$>=17})),M=_=>_===2?"الأكثر طلبًا":_===v.value.length-1?"آخر موعد":"",N=[["all","كل اليوم","🗓️"],["am","صباحًا","☀️"],["pm","مساءً","🌇"]];return(_,$)=>(o(),s(z,null,[n("div",zr,[$[0]||($[0]=n("h1",null,"اختر الوقت والتاريخ",-1)),n("p",null,"اختر الوقت المناسب لك — مدة الباقة "+a(e.value.dur)+" دقيقة",1)]),n("div",Mr,[n("h4",{style:Nr},"📅 اختر اليوم"),n("div",Cr,[(o(!0),s(z,null,L(r(t),(x,E)=>(o(),s("div",{key:E,class:S(["day",{sel:r(l).dayIdx===E}]),"data-bd":E,onClick:Y=>{r(l).dayIdx=E,r(l).time=null}},[n("small",null,a(r(Yn)[x.getDay()]),1),n("b",null,a(x.getDate()),1),n("small",null,a(r(jn)[x.getMonth()]),1)],10,Fr))),128))])]),h.value?(o(),s("div",Br,[c(bn,{height:"72px","border-radius":"12px"})])):r(l).dayIdx!=null?(o(),s("div",Er,[n("h4",{style:Tr},"🕐 "+a(r(en)(r(t)[r(l).dayIdx])),1),n("div",Sr,[(o(),s(z,null,L(N,x=>n("button",{key:x[0],class:S(["period",{sel:r(l).period===x[0]}]),"data-bp":x[0],onClick:E=>r(l).period=x[0]},a(x[2])+" "+a(x[1]),11,Ar)),64))]),u.value?(o(),s("div",{key:0,style:fn},[c(bn,{height:"44px","border-radius":"10px"})])):(o(),s("div",Ir,[v.value.length?(o(!0),s(z,{key:0},L(v.value,(x,E)=>(o(),s("button",{key:x,class:S(["slot",{sel:r(l).time===x}]),"data-bt":x,style:q(`animation-delay:${Math.min(E*.03,.4)}s`),onClick:Y=>r(l).time=x},[M(E)?(o(),s("span",Pr,a(M(E)),1)):(o(),s(z,{key:1},[],64)),p(a(r(an)(x)),1)],14,Lr))),128)):(o(),s("div",{key:1,style:fn},"لا توجد أوقات متاحة في هذه الفترة"))]))])):(o(),s("div",Dr,[...$[1]||($[1]=[n("b",{style:{display:"block","font-family":"var(--font-d)","font-size":"16px",color:"var(--ink)","margin-bottom":"6px"}},"ابدأ باختيار اليوم",-1),p("اختر يومًا من الشريط أعلاه لعرض الأوقات المتاحة",-1)])]))],64))}},Vr={class:"ok-banner"},Yr={class:"ic"},jr=["src","alt"],Gr={class:"t"},Rr={class:"incs"},Or={class:"pr"},Wr={class:"card bk-rows",style:{"margin-bottom":"16px"}},Ur={class:"gs-row"},qr={class:"k"},Kr={class:"v"},Xr={class:"gs-row"},Jr={class:"k"},Qr={class:"v"},Zr={class:"gs-row"},nt={class:"k"},rt={class:"v",dir:"ltr"},tt={class:"gs-row"},et={class:"k"},at={class:"v"},ot={class:"card",style:{padding:"20px"}},it={class:"fld",style:{margin:"0"}},st="font-size:12px;color:var(--mute);font-family:var(--font-b)",lt="display:flex;gap:9px;align-items:center;font-size:12px;color:var(--mute);background:rgba(198,161,91,.08);border-radius:11px;padding:11px 15px;margin-top:14px",dt="color:var(--gold-deep);font-weight:600;text-decoration:underline",pt={__name:"BookConfirmStep",setup(V){const{state:i,pkgOf:y,bkDays:k}=H(),l=i.bk,t=w(()=>y(l.pkg)),e=w(()=>k()[l.dayIdx]),h={check:'<path d="M20 6L9 17l-5-5"/>',pin:'<path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>',cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>'};return(g,u)=>{const d=hn("RouterLink");return o(),s(z,null,[u[9]||(u[9]=n("div",{class:"g-head"},[n("h1",null,"تأكيد الحجز"),n("p",null,"راجع تفاصيل الحجز قبل المتابعة للدفع")],-1)),n("div",Vr,[n("span",Yr,[c(m,{inner:h.check,size:16},null,8,["inner"])]),u[1]||(u[1]=n("div",null,[n("b",null,"تم حفظ موعدك بنجاح"),n("small",null,"يمكنك تعديل أو إلغاء الحجز قبل 6 ساعات من وقت الموعد")],-1))]),n("div",{class:"card bk-pkg-hero",style:q(`--pc:${t.value.color}`)},[n("img",{src:t.value.img,alt:t.value.name},null,8,jr),n("div",Gr,[n("h4",null,a(t.value.name),1),n("small",null,"🕐 "+a(t.value.dur)+" دقيقة — "+a(t.value.desc),1),n("div",Rr,[(o(!0),s(z,null,L(t.value.inc,(b,v)=>(o(),s("span",{key:v},"✓ "+a(b),1))),128))])]),n("div",Or,[p(a(r(T)(t.value.price))+" ",1),n("small",{style:st},"ر.س")])],4),n("div",Wr,[n("div",Ur,[n("span",qr,[c(m,{inner:h.pin,size:15},null,8,["inner"]),u[2]||(u[2]=p(" الفرع",-1))]),n("span",Kr,a(t.value.branchName),1)]),n("div",Xr,[n("span",Jr,[c(m,{inner:h.cal,size:15},null,8,["inner"]),u[3]||(u[3]=p(" التاريخ",-1))]),n("span",Qr,a(r(en)(e.value)),1)]),n("div",Zr,[n("span",nt,[c(m,{inner:h.clock,size:15},null,8,["inner"]),u[4]||(u[4]=p(" الوقت",-1))]),n("span",rt,a(r(an)(r(l).time)),1)]),n("div",tt,[n("span",et,[c(m,{inner:h.info,size:15},null,8,["inner"]),u[5]||(u[5]=p(" مدة الجلسة",-1))]),n("span",at,a(t.value.dur)+" دقيقة",1)])]),n("div",ot,[n("div",it,[u[6]||(u[6]=n("label",null,"📝 ملاحظات (اختياري)",-1)),Q(n("textarea",{id:"bkNotes",placeholder:"أضف أي ملاحظة...","onUpdate:modelValue":u[0]||(u[0]=b=>r(l).notes=b)},null,512),[[rn,r(l).notes]])]),n("div",{style:lt},[u[8]||(u[8]=p(" 🛡️ بالتأكيد على الحجز، فإنك توافق على ",-1)),c(d,{to:"/terms",style:dt},{default:j(()=>[...u[7]||(u[7]=[p("الشروط والأحكام",-1)])]),_:1})])])],64)}}},gt={class:"card pay-summary-strip"},ct={class:"amt"},xt={class:"card",style:{padding:"20px"}},ut={class:"bk-pays"},bt=["data-bkpay","onClick"],ft={class:"lg"},vt={class:"package-rewards"},mt={class:"package-reward"},ht=["checked"],kt=["max","value","disabled"],yt={class:"package-reward"},wt=["checked"],_t=["max","value","disabled"],$t={class:"package-totals"},zt={class:"package-payable"},Mt=["disabled"],Ct=.15,Ft='<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>',Bt="display:flex;gap:8px;align-items:center;justify-content:center;margin-top:14px;font-size:12px;color:var(--mute)",Et={__name:"BookPayStep",emits:["pay"],setup(V,{emit:i}){const{state:y,pkgOf:k,bkDays:l}=H(),t=i,e=y.bk,h=w(()=>k(e.pkg)),g=w(()=>l()[e.dayIdx]),u=w(()=>{var B;const P=Math.max(Number((B=h.value)==null?void 0:B.price)||0,0),C=Math.round(P*Ct);return{subtotal:P,vat:C,total:P+C}}),d=w(()=>yn.filter(P=>P.id!=="wallet")),b=["cash","visa"];mn(async()=>{var P,C;try{const B=await Qn(),Z=((P=B==null?void 0:B.data)==null?void 0:P.balances)||{};e.walletBalance=Number(Z.wallet??0),e.loyaltyPoints=Number(Z.loyalty_points??0)}catch{}try{const B=await qn();e.pointValue=Number(((C=B==null?void 0:B.data)==null?void 0:C.point_value)??.5)||.5}catch{}});const v=w(()=>Math.max(Number(e.walletBalance)||0,0)),M=w(()=>Math.max(parseInt(e.loyaltyPoints,10)||0,0)),N=w(()=>e.useWallet?Math.min(Math.max(Number(e.walletAmount)||0,0),v.value,u.value.total):0),_=w(()=>Math.max(u.value.total-N.value,0)),$=w(()=>Math.min(M.value,Math.ceil(_.value/e.pointValue))),x=w(()=>e.useLoyalty?Math.min(Math.max(parseInt(e.loyaltyPointsUsed,10)||0,0),$.value):0),E=w(()=>Math.min(x.value*e.pointValue,_.value)),Y=w(()=>Math.max(u.value.total-N.value-E.value,0)),X=w(()=>N.value>0||x.value>0);function R(P){b.includes(P.id)&&(e.pay=P.id)}function W(){e.useWallet=!e.useWallet,e.walletAmount=e.useWallet?Math.min(v.value,u.value.total):0,e.useWallet&&e.pay==="cash"&&(e.pay=Y.value>0?"visa":null)}function ln(P){e.walletAmount=Math.min(Math.max(Number(P)||0,0),v.value,u.value.total),e.useWallet=e.walletAmount>0}function dn(){e.useLoyalty=!e.useLoyalty,e.loyaltyPointsUsed=e.useLoyalty?$.value:0,e.useLoyalty&&e.pay==="cash"&&(e.pay=Y.value>0?"visa":null)}function on(P){e.loyaltyPointsUsed=Math.min(Math.max(parseInt(P,10)||0,0),$.value),e.useLoyalty=e.loyaltyPointsUsed>0}const sn=w(()=>Y.value<=0||!!e.pay);return(P,C)=>(o(),s(z,null,[C[10]||(C[10]=n("div",{class:"g-head"},[n("h1",null,"اختر طريقة الدفع"),n("p",null,"ادفع بأمان وسهولة")],-1)),n("div",gt,[n("b",null,a(h.value.name),1),n("small",null,a(h.value.branchName)+" — "+a(r(en)(g.value))+" • "+a(r(an)(r(e).time)),1),n("span",ct,a(r(T)(u.value.total))+" ر.س",1)]),n("div",xt,[n("div",ut,[(o(!0),s(z,null,L(d.value,B=>(o(),s("div",{key:B.id,class:S(["bkpm",{sel:r(e).pay===B.id,disabled:!b.includes(B.id)||B.id==="cash"&&X.value}]),"data-bkpay":B.id,onClick:Z=>B.id==="cash"&&X.value?null:R(B)},[n("span",ft,a(B.logo),1),n("b",null,a(B.n),1),C[3]||(C[3]=n("span",{class:"rad"},[n("i")],-1))],10,bt))),128))]),n("section",vt,[C[9]||(C[9]=n("h4",null,"استخدام المكافآت ونقاط الولاء",-1)),n("label",mt,[n("span",null,[C[4]||(C[4]=n("b",null,"استخدام من المحفظة",-1)),n("small",null,"الرصيد الحالي: "+a(r(T)(v.value))+" ر.س",1)]),n("input",{type:"checkbox",checked:r(e).useWallet,onChange:W},null,40,ht),n("input",{type:"number",min:"0",max:Math.min(v.value,u.value.total),value:r(e).walletAmount,disabled:!r(e).useWallet,onInput:C[0]||(C[0]=B=>ln(B.target.value))},null,40,kt)]),n("label",yt,[n("span",null,[C[5]||(C[5]=n("b",null,"استخدام نقاط الولاء",-1)),n("small",null,"لديك "+a(r(T)(M.value))+" نقطة",1)]),n("input",{type:"checkbox",checked:r(e).useLoyalty,onChange:dn},null,40,wt),n("input",{type:"number",min:"0",max:$.value,value:r(e).loyaltyPointsUsed,disabled:!r(e).useLoyalty,onInput:C[1]||(C[1]=B=>on(B.target.value))},null,40,_t)]),n("div",$t,[C[6]||(C[6]=n("span",null,"قيمة الباقة",-1)),n("b",null,a(r(T)(u.value.subtotal))+" ر.س",1),C[7]||(C[7]=n("span",null,"الضريبة",-1)),n("b",null,a(r(T)(u.value.vat))+" ر.س",1)]),n("div",zt,[C[8]||(C[8]=n("span",null,"المتبقي للدفع شامل الضريبة",-1)),n("b",null,a(r(T)(Math.round(Y.value)))+" ر.س",1)])]),n("button",{class:"btn-paynow",id:"bkPayNow",disabled:!sn.value,onClick:C[2]||(C[2]=B=>t("pay"))},[c(m,{inner:Ft,size:16}),p(" ادفع الآن — "+a(r(T)(Math.round(Y.value)))+" ر.س",1)],8,Mt),n("div",{style:Bt},"🌐 جميع المعاملات مؤمّنة وآمنة")])],64))}},St=kn(Et,[["__scopeId","data-v-6d1cfa04"]]),At={class:"gsuccess"},It={class:"gsuc-grid"},Lt={class:"card gsuc-details"},Pt={class:"gs-row"},Dt={class:"k"},Nt={class:"v"},Tt={class:"gs-row"},Ht={class:"k"},Vt={class:"v"},Yt={class:"gs-row"},jt={class:"k"},Gt={class:"v"},Rt={class:"gs-row"},Ot={class:"k"},Wt={class:"v",dir:"ltr"},Ut={class:"gs-row"},qt={class:"k"},Kt={class:"v"},Xt={class:"gs-row"},Jt={class:"k"},Qt={class:"gs-row"},Zt={class:"k"},ne={class:"v",dir:"ltr"},re={class:"gsuc-actions"},te="color:var(--gold-deep);font-family:var(--font-d);font-size:16px",ee="display:block;margin-top:12px;font-size:11.5px;color:var(--mute)",ae="display:flex;gap:8px;margin-top:14px",vn="flex:1;padding:11px;font-size:12px",oe={__name:"BookSuccess",emits:["home","calendar","share"],setup(V,{emit:i}){const{state:y,pkgOf:k,bkDays:l}=H(),t=i,e=y.bk,h=w(()=>k(e.pkg)),g=w(()=>l()[e.dayIdx]),u={box:'<path d="M20 12v10H4V12M2 7h20v5H2z"/>',pin:'<path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>',cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>',card:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',qr:'<path d="M4 4h16v16H4z"/><path d="M9 9h2v2H9zM13 9h2M9 13h2M13 13h2v2h-2z"/>',home:'<path d="M3 9l9-6 9 6v11a1 1 0 01-1 1H4a1 1 0 01-1-1z"/>',calAdd:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M12 14v4M10 16h4"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>'};return(d,b)=>(o(),s("div",At,[b[16]||(b[16]=tn('<div class="gsuc-head"><h1>تم تأكيد حجزك بنجاح!</h1><span class="ic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6L9 17l-5-5"></path></svg></span></div><p class="sub">نتطلع لخدمتك وتقديم تجربة استثنائية تليق بك</p>',2)),n("div",It,[n("div",Lt,[b[10]||(b[10]=n("h4",null,"تفاصيل الحجز",-1)),n("div",Pt,[n("span",Dt,[c(m,{inner:u.box,size:14},null,8,["inner"]),b[3]||(b[3]=p(" الباقة",-1))]),n("span",Nt,a(h.value.name),1)]),n("div",Tt,[n("span",Ht,[c(m,{inner:u.pin,size:14},null,8,["inner"]),b[4]||(b[4]=p(" الفرع",-1))]),n("span",Vt,a(h.value.branchName),1)]),n("div",Yt,[n("span",jt,[c(m,{inner:u.cal,size:14},null,8,["inner"]),b[5]||(b[5]=p(" التاريخ",-1))]),n("span",Gt,a(r(en)(g.value)),1)]),n("div",Rt,[n("span",Ot,[c(m,{inner:u.clock,size:14},null,8,["inner"]),b[6]||(b[6]=p(" الوقت",-1))]),n("span",Wt,a(r(an)(r(e).time)),1)]),n("div",Ut,[n("span",qt,[c(m,{inner:u.info,size:14},null,8,["inner"]),b[7]||(b[7]=p(" مدة الجلسة",-1))]),n("span",Kt,a(h.value.dur)+" دقيقة",1)]),n("div",Xt,[n("span",Jt,[c(m,{inner:u.card,size:14},null,8,["inner"]),b[8]||(b[8]=p(" المبلغ المدفوع",-1))]),n("span",{class:"v",style:te},a(r(T)(h.value.price))+" ر.س",1)]),n("div",Qt,[n("span",Zt,[c(m,{inner:u.qr,size:14},null,8,["inner"]),b[9]||(b[9]=p(" رمز الحجز",-1))]),n("span",ne,a(r(e).ref),1)])]),n("div",{class:"card gsuc-details",style:{"text-align":"center"}},[b[11]||(b[11]=n("h4",{style:{"text-align":"right"}},"رمز الوصول السريع",-1)),b[12]||(b[12]=n("div",{class:"qr-box"},[n("canvas",{id:"bkQr"})],-1)),n("small",{style:ee},"📱 امسح الرمز عند الوصول لتسجيل الحضور"),n("div",{style:ae},[n("button",{class:"btn btn-dark",style:vn},"🍎 Apple Wallet"),n("button",{class:"btn btn-dark",style:vn},"📲 Google Wallet")])])]),n("div",re,[n("button",{class:"btn btn-gold",id:"bkHome",onClick:b[0]||(b[0]=v=>t("home"))},[c(m,{inner:u.home,size:15},null,8,["inner"]),b[13]||(b[13]=p(" العودة إلى الرئيسية",-1))]),n("button",{class:"btn btn-line",id:"bkCal",onClick:b[1]||(b[1]=v=>t("calendar"))},[c(m,{inner:u.calAdd,size:15},null,8,["inner"]),b[14]||(b[14]=p(" إضافة إلى التقويم",-1))]),n("button",{class:"btn btn-line",id:"bkShare",onClick:b[2]||(b[2]=v=>t("share"))},[c(m,{inner:u.share,size:15},null,8,["inner"]),b[15]||(b[15]=p(" مشاركة الحجز",-1))])]),b[17]||(b[17]=n("div",{class:"thanks"},[n("i",null,"❦"),p(" جودة تستحقها.. تجربة لا تنساها "),n("i",null,"❦")],-1))]))}},ie={class:"gsum"},se={class:"card"},le={class:"pkline"},de=["src"],pe={class:"pr"},ge={key:0,class:"gs-row"},ce={class:"v"},xe={key:1,class:"gs-row"},ue={class:"v"},be={key:2,class:"gs-row"},fe={class:"v"},ve={key:3,class:"gs-row"},me={class:"v"},he={class:"gs-total"},ke={class:"v"},ye={class:"gs-note"},we={class:"card help-card"},_e={class:"hi"},$e={__name:"BookSummary",setup(V){const{state:i,pkgOf:y,bkDays:k}=H(),l=i.bk,t=w(()=>y(l.pkg)),e=w(()=>l.dayIdx!=null?k()[l.dayIdx]:null),h=w(()=>{const u=yn.find(d=>d.id===l.pay);return u?u.n:""}),g={shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',head:'<path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>'};return(u,d)=>(o(),s("div",ie,[n("div",se,[d[7]||(d[7]=n("h3",null,"ملخص الحجز",-1)),n("div",le,[n("img",{src:t.value.img,alt:""},null,8,de),n("span",null,[n("b",null,a(t.value.name),1),n("small",null,"🕐 "+a(t.value.dur)+" دقيقة",1),n("small",null,a(t.value.desc),1),n("span",pe,a(r(T)(t.value.price))+" ر.س",1)])]),t.value.branchName?(o(),s("div",ge,[d[0]||(d[0]=n("span",{class:"k"},"📍 الفرع",-1)),n("span",ce,a(t.value.branchName),1)])):G("",!0),e.value?(o(),s("div",xe,[d[1]||(d[1]=n("span",{class:"k"},"📅 التاريخ",-1)),n("span",ue,a(r(en)(e.value)),1)])):G("",!0),r(l).time!=null?(o(),s("div",be,[d[2]||(d[2]=n("span",{class:"k"},"🕐 الوقت",-1)),n("span",fe,a(r(an)(r(l).time)),1)])):G("",!0),r(l).pay?(o(),s("div",ve,[d[3]||(d[3]=n("span",{class:"k"},"💳 طريقة الدفع",-1)),n("span",me,a(h.value),1)])):G("",!0),n("div",he,[d[5]||(d[5]=n("span",{class:"k"},"الإجمالي",-1)),n("span",ke,[p(a(r(T)(t.value.price))+" ",1),d[4]||(d[4]=n("small",{style:{"font-size":"13px"}},"ر.س",-1))])]),n("div",ye,[c(m,{inner:g.shield,size:14},null,8,["inner"]),d[6]||(d[6]=p(" حجز آمن — تعديل أو إلغاء مجاني قبل 6 ساعات",-1))])]),n("div",we,[n("span",_e,[c(m,{inner:g.head,size:18},null,8,["inner"])]),d[8]||(d[8]=n("b",null,"دعم على مدار الساعة",-1)),d[9]||(d[9]=n("small",null,"نحن هنا لخدمتك",-1)),d[10]||(d[10]=n("a",{href:"https://wa.me/963959415545"},"تواصل معنا",-1))])]))}},ze={class:"g-stepper"},Me={class:"g-steps"},Ce=["data-i"],Fe={class:"bubble"},Be='<path d="M20 6L9 17l-5-5"/>',Ee={__name:"GiftStepper",setup(V){const{state:i}=H();return(y,k)=>(o(),s("div",ze,[n("div",Me,[(o(!0),s(z,null,L(r(Gn),(l,t)=>(o(),s("div",{key:t,class:S(["g-step",{active:t===r(i).gstep,done:t<r(i).gstep||r(i).done}]),"data-i":t},[k[0]||(k[0]=n("div",{class:"bar"},[n("i")],-1)),n("span",Fe,[t<r(i).gstep||r(i).done?(o(),O(m,{key:0,inner:Be,size:17})):(o(),s(z,{key:1},[p(a(t+1),1)],64))]),n("b",null,a(l.t),1),n("small",null,a(l.s),1)],10,Ce))),128))])]))}},Se={class:"gtype-grid"},Ae=["data-gt","onClick"],Ie={class:"im"},Le=["src"],Pe={class:"ic"},De={class:"bd"},Ne={class:"go"},Te='<path d="M19 12H5M11 18l-6-6 6-6"/>',He={__name:"GiftTypeStep",setup(V){const{state:i}=H();return(y,k)=>(o(),s(z,null,[k[0]||(k[0]=n("div",{class:"g-head"},[n("h1",null,"ماذا ترغب بإهدائه؟"),n("p",null,"اختر ما يناسبك لإهداء تجربة مميزة لمن تحب")],-1)),n("div",Se,[(o(!0),s(z,null,L(r(Rn),l=>(o(),s("div",{key:l.id,class:S(["gtype",{sel:r(i).gtype===l.id}]),"data-gt":l.id,onClick:t=>r(i).gtype=l.id},[n("div",Ie,[n("img",{src:l.img,alt:""},null,8,Le),n("span",Pe,[c(m,{inner:l.ic,size:22},null,8,["inner"])])]),n("div",De,[n("h3",null,a(l.n),1),n("p",null,a(l.d),1),n("span",Ne,[p(a(l.btn)+" ",1),c(m,{inner:Te,size:14})])])],10,Ae))),128))])],64))}},Ve={class:"gp-sort"},Ye={class:"gpkgs"},je=["data-gp","onClick"],Ge={class:"ph"},Re=["src","alt"],Oe={class:"chk"},We={class:"bd"},Ue={class:"dur"},qe={class:"desc"},Ke={class:"prc"},Xe={class:"pick"},Je={__name:"GiftPickStep",setup(V){const{state:i,packages:y}=H(),k={check:'<path d="M20 6L9 17l-5-5"/>',gift:'<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7s-2-5-5-5-3 5 0 5h5zM12 7s2-5 5-5 3 5 0 5h-5z"/>'},l=w(()=>y.value.slice().sort((t,e)=>i.sort==="low"?t.price-e.price:i.sort==="high"?e.price-t.price:(e.hot?1:0)-(t.hot?1:0)));return(t,e)=>(o(),s(z,null,[e[3]||(e[3]=n("div",{class:"g-head"},[n("h1",null,"اختر الباقة التي ترغب بإهدائها"),n("p",null,"باقات مميزة تمنح تجربة متكاملة من الاسترخاء والعناية")],-1)),n("div",Ve,[Q(n("select",{id:"gpSort","onUpdate:modelValue":e[0]||(e[0]=h=>r(i).sort=h)},[...e[1]||(e[1]=[n("option",{value:"pop"},"الأكثر مبيعًا",-1),n("option",{value:"low"},"السعر: الأقل أولًا",-1),n("option",{value:"high"},"السعر: الأعلى أولًا",-1)])],512),[[In,r(i).sort]]),n("small",null,a(r(y).length)+" باقات متاحة",1)]),n("div",Ye,[(o(!0),s(z,null,L(l.value,(h,g)=>(o(),s("div",{key:h.id,class:S(["gpkg",{sel:r(i).gpkg===h.id}]),"data-gp":h.id,style:q(`--pc:${h.color};animation-delay:${g*.06}s`),onClick:u=>r(i).gpkg=h.id},[n("div",Ge,[n("img",{src:h.img,alt:h.name},null,8,Re),n("span",Oe,[c(m,{inner:k.check,size:13},null,8,["inner"])])]),n("div",We,[n("h4",null,a(h.name),1),n("div",Ue,"🕐 "+a(h.dur)+" دقيقة",1),n("div",qe,a(h.desc),1),n("div",Ke,[p(a(r(T)(h.price))+" ",1),e[2]||(e[2]=n("small",null,"ر.س",-1))]),n("button",Xe,[c(m,{inner:k.gift,size:14},null,8,["inner"]),p(" "+a(r(i).gpkg===h.id?"تم الاختيار ✓":"أهدِ هذه الباقة"),1)])])],14,je))),128))])],64))}},Qe={class:"custom-grid"},Ze={class:"preview-col"},na={id:"cardPrev"},ra={class:"form-col"},ta={class:"card",style:{"margin-bottom":"16px"}},ea={class:"two"},aa={class:"fld"},oa={class:"fld"},ia={class:"fld",style:{"margin-bottom":"4px"}},sa={class:"card",style:{"margin-bottom":"16px"}},la={class:"designs"},da=["data-d","onClick"],pa={class:"dchk"},ga={class:"card"},ca={class:"send-opts"},xa={class:"fld",style:{margin:"0"}},ua={class:"methods",style:{"margin-top":"14px"}},ba=["data-m","onClick"],fa={class:"mi"},va={__name:"GiftCustomizeStep",setup(V){const{state:i}=H(),y=w(()=>200-i.msg.length),k={eye:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',user:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',brush:'<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.6 7.6"/><circle cx="11" cy="11" r="2"/>',send:'<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>',check:'<path d="M20 6L9 17l-5-5"/>'};return(l,t)=>(o(),s(z,null,[t[17]||(t[17]=n("div",{class:"g-head"},[n("h1",null,"خصص هديتك لتكون أجمل"),n("p",null,"أضف لمستك الخاصة مع رسالة وتصميم بطاقة الإهداء")],-1)),n("div",Qe,[n("div",Ze,[n("h4",null,[c(m,{inner:k.eye,size:16},null,8,["inner"]),t[6]||(t[6]=p(" معاينة بطاقة الإهداء",-1))]),n("div",na,[c(_n,{design:r(i).design,recipient:r(i).name,message:r(i).msg},null,8,["design","recipient","message"])])]),n("div",ra,[n("div",ta,[n("h4",null,[c(m,{inner:k.user,size:16},null,8,["inner"]),t[7]||(t[7]=p(" بيانات المهدى إليه",-1))]),n("div",ea,[n("div",aa,[t[8]||(t[8]=n("label",null,"الاسم الكامل",-1)),Q(n("input",{id:"gName",placeholder:"أحمد محمد","onUpdate:modelValue":t[0]||(t[0]=e=>r(i).name=e)},null,512),[[rn,r(i).name]])]),n("div",oa,[t[9]||(t[9]=n("label",null,"رقم الجوال",-1)),Q(n("input",{id:"gPhone",dir:"ltr",placeholder:"05xxxxxxxx","onUpdate:modelValue":t[1]||(t[1]=e=>r(i).phone=e)},null,512),[[rn,r(i).phone]])])]),n("div",ia,[t[10]||(t[10]=n("label",null,"الرسالة الشخصية",-1)),Q(n("textarea",{id:"gMsg",maxlength:"200",placeholder:"اكتب رسالتك من القلب...","onUpdate:modelValue":t[2]||(t[2]=e=>r(i).msg=e)},null,512),[[rn,r(i).msg]]),n("span",{class:S(["cnt",{max:y.value<20}]),id:"gCnt"},a(r(i).msg.length)+"/200",3)])]),n("div",sa,[n("h4",null,[c(m,{inner:k.brush,size:16},null,8,["inner"]),t[11]||(t[11]=p(" تصميم بطاقة الإهداء",-1))]),n("div",la,[(o(!0),s(z,null,L(r(wn),e=>(o(),s("div",{key:e.id,class:S(["design",{sel:r(i).design===e.id}]),"data-d":e.id,onClick:h=>r(i).design=e.id},[n("div",{class:"sw",style:q(`background:${e.bg};color:${e.fg}`)},[n("span",pa,[c(m,{inner:k.check,size:10},null,8,["inner"])]),t[12]||(t[12]=p("SAMI",-1))],4),n("small",null,a(e.n),1)],10,da))),128))])]),n("div",ga,[n("h4",null,[c(m,{inner:k.send,size:16},null,8,["inner"]),t[13]||(t[13]=p(" طريقة الإرسال",-1))]),n("div",ca,[n("span",{class:S(["ro",{on:r(i).when==="now"}]),"data-w":"now",onClick:t[3]||(t[3]=e=>r(i).when="now")},[...t[14]||(t[14]=[n("i",null,null,-1),p(" إرسال الآن",-1)])],2),n("span",{class:S(["ro",{on:r(i).when==="later"}]),"data-w":"later",onClick:t[4]||(t[4]=e=>r(i).when="later")},[...t[15]||(t[15]=[n("i",null,null,-1),p(" 📅 جدولة لاحقًا",-1)])],2)]),n("div",{class:S(["sched-box",{open:r(i).when==="later"}])},[n("div",xa,[t[16]||(t[16]=n("label",null,"موعد الإرسال",-1)),Q(n("input",{type:"datetime-local",id:"gSched","onUpdate:modelValue":t[5]||(t[5]=e=>r(i).schedDate=e)},null,512),[[rn,r(i).schedDate]])])],2),n("div",ua,[(o(!0),s(z,null,L(r(pn),e=>(o(),s("div",{key:e.id,class:S(["mth",{sel:r(i).method===e.id}]),"data-m":e.id,onClick:h=>r(i).method=e.id},[n("span",fa,[c(m,{inner:e.ic,size:17},null,8,["inner"])]),p(a(e.n),1)],10,ba))),128))])])])])],64))}},ma={class:"card",style:{padding:"22px","margin-bottom":"16px"}},ha={class:"pay-methods"},ka=["data-pay","onClick"],ya={class:"pmi"},wa={class:"cf-box"},_a={class:"secure-strip"},$a="font-family:var(--font-d);font-size:16px;color:var(--ink);margin-bottom:16px",za={__name:"GiftPayStep",setup(V){const{state:i}=H(),y=w(()=>i.pay==="card"||i.pay==="mada"),k={check:'<path d="M20 6L9 17l-5-5"/>',shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'};return(l,t)=>(o(),s(z,null,[t[8]||(t[8]=n("div",{class:"g-head"},[n("h1",null,[p("أكمل الدفع لإرسال هديتك "),n("span",{class:"lock"},"🔒")]),n("p",null,"بيانات دفع آمنة ومشفرة بالكامل")],-1)),n("div",ma,[n("h4",{style:$a},"اختر طريقة الدفع"),n("div",ha,[(o(!0),s(z,null,L(r(On),e=>(o(),s("div",{key:e.id,class:S(["pm",{sel:r(i).pay===e.id}]),"data-pay":e.id,onClick:h=>r(i).pay=e.id},[t[1]||(t[1]=n("span",{class:"rad"},[n("i")],-1)),n("span",ya,a(e.logo),1),n("b",null,a(e.n),1),n("small",null,a(e.d),1)],10,ka))),128))]),n("div",{class:S(["card-form",{open:y.value}])},[n("div",wa,[t[3]||(t[3]=n("h5",null,"بيانات البطاقة",-1)),t[4]||(t[4]=n("div",{class:"two"},[n("div",{class:"fld"},[n("label",null,"رقم البطاقة"),n("input",{dir:"ltr",inputmode:"numeric",placeholder:"•••• •••• •••• ••••"})]),n("div",{class:"fld"},[n("label",null,"الاسم على البطاقة"),n("input",{placeholder:"الاسم كما هو على البطاقة"})])],-1)),t[5]||(t[5]=n("div",{class:"two"},[n("div",{class:"fld",style:{margin:"0"}},[n("label",null,"تاريخ الانتهاء"),n("input",{dir:"ltr",placeholder:"MM / YY"})]),n("div",{class:"fld",style:{margin:"0"}},[n("label",null,"رمز الأمان (CVV)"),n("input",{dir:"ltr",inputmode:"numeric",placeholder:"•••"})])],-1)),n("span",{class:S(["save-card",{on:r(i).saveCard}]),id:"saveCard",onClick:t[0]||(t[0]=e=>r(i).saveCard=!r(i).saveCard)},[n("i",null,[c(m,{inner:k.check,size:11},null,8,["inner"])]),t[2]||(t[2]=p(" حفظ البطاقة لاستخدامها لاحقًا",-1))],2)])],2),n("div",_a,[c(m,{inner:k.shield,size:15},null,8,["inner"]),t[6]||(t[6]=p(" جميع بيانات الدفع محمية بتقنية تشفير آمنة ومعتمدة",-1))]),t[7]||(t[7]=n("div",{class:"after-pay"},"سيتم إرسال الهدية مباشرة بعد إتمام الدفع",-1))])],64))}},Ma={class:"gsuccess"},Ca={class:"gsuc-grid"},Fa={class:"gsuc-card-col"},Ba={class:"card gsuc-details"},Ea={class:"gs-row"},Sa={class:"k"},Aa={class:"v"},Ia={class:"gs-row"},La={class:"k"},Pa={class:"v"},Da={class:"gs-row"},Na={class:"k"},Ta={class:"v",dir:"ltr"},Ha={class:"gs-row"},Va={class:"k"},Ya={class:"v"},ja={class:"chip"},Ga={class:"gs-row"},Ra={class:"k"},Oa={class:"gs-row"},Wa={class:"k"},Ua={class:"v",dir:"ltr"},qa={class:"gsuc-actions"},Ka={key:0,class:"gift-share-panel"},Xa={class:"gift-share-row"},Ja=["value"],Qa={key:0},Za="display:flex;gap:10px;align-items:center;background:var(--green-bg);border-radius:12px;padding:13px 15px;margin-top:14px;font-size:12.5px;color:#1E6B41",no="flex:none;width:26px;height:26px;border-radius:50%;background:var(--green);color:#fff;display:grid;place-items:center",ro={__name:"GiftSuccess",emits:["recipient","new-gift","copy-self","share","home"],setup(V,{emit:i}){const{state:y}=H(),k=i,l=U(!1),t=U(!1),e=["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],h=new Date,g=`${h.getDate()} ${e[h.getMonth()]} ${h.getFullYear()}`,u="✦✧✦✧".split("").map(($,x)=>({c:$,style:`top:${10+x*16}%;${x%2?"right":"left"}:${4+x*3}%;animation-delay:-${x}s`})),d=w(()=>{const $=pn.find(x=>x.id===y.method);return $?$.n:""}),b=w(()=>y.claimToken?new URL(`/gift-recipient?token=${encodeURIComponent(y.claimToken)}`,window.location.origin).href:y.claimUrl||"");function v(){if(!b.value)return;const $=String(y.phone||"").replace(/\D/g,""),x=encodeURIComponent(`لديك هدية من عناية سامي ✨
${b.value}`);window.open(`https://wa.me/${$}?text=${x}`,"_blank","noopener")}function M(){l.value=!0,t.value=!1,b.value&&window.open(b.value,"_blank","noopener,noreferrer")}async function N(){try{if(navigator&&navigator.clipboard)await navigator.clipboard.writeText(b.value);else{const $=document.getElementById("gift-share-link");$&&($.focus(),$.select(),document.execCommand("copy"))}t.value=!0,setTimeout(()=>{t.value=!1},2200)}catch{alert("تعذّر نسخ الرابط، يمكنك نسخه يدويًا من الحقل أدناه.")}}const _={user:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',send:'<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>',phone:'<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',card:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',check:'<path d="M20 6L9 17l-5-5"/>',gift:'<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7s-2-5-5-5-3 5 0 5h5zM12 7s2-5 5-5 3 5 0 5h-5z"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>',home:'<path d="M3 9l9-6 9 6v11a1 1 0 01-1 1H4a1 1 0 01-1-1z"/>'};return($,x)=>(o(),s("div",Ma,[(o(!0),s(z,null,L(r(u),(E,Y)=>(o(),s("span",{key:Y,class:"confetti",style:q(E.style)},a(E.c),5))),128)),x[15]||(x[15]=tn('<div class="gsuc-head" data-v-4a1de5a0><h1 data-v-4a1de5a0>تم إرسال هديتك بنجاح</h1><span class="ic" data-v-4a1de5a0><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" data-v-4a1de5a0><path d="M20 6L9 17l-5-5" data-v-4a1de5a0></path></svg></span></div><p class="sub" data-v-4a1de5a0>لقد أسعدت قلبًا اليوم 🤍 شكرًا لاختيارك عناية سامي</p>',2)),n("div",Ca,[n("div",Fa,[c(_n,{design:r(y).design,recipient:r(y).name,message:r(y).msg},null,8,["design","recipient","message"])]),n("div",Ba,[x[10]||(x[10]=n("h4",null,"تفاصيل الإرسال",-1)),n("div",Ea,[n("span",Sa,[c(m,{inner:_.user,size:14},null,8,["inner"]),x[3]||(x[3]=p(" المهدى إليه",-1))]),n("span",Aa,a(r(y).name),1)]),n("div",Ia,[n("span",La,[c(m,{inner:_.send,size:14},null,8,["inner"]),x[4]||(x[4]=p(" طريقة الإرسال",-1))]),n("span",Pa,a(d.value),1)]),n("div",Da,[n("span",Na,[c(m,{inner:_.phone,size:14},null,8,["inner"]),x[5]||(x[5]=p(" رقم الجوال",-1))]),n("span",Ta,a(r(y).phone),1)]),n("div",Ha,[n("span",Va,[c(m,{inner:_.clock,size:14},null,8,["inner"]),x[6]||(x[6]=p(" وقت الإرسال",-1))]),n("span",Ya,[n("span",ja,"✓ "+a(r(y).when==="now"?"تم الإرسال الآن":"مجدولة"),1)])]),n("div",Ga,[n("span",Ra,[c(m,{inner:_.cal,size:14},null,8,["inner"]),x[7]||(x[7]=p(" تاريخ الإرسال",-1))]),n("span",{class:"v"},a(g))]),n("div",Oa,[n("span",Wa,[c(m,{inner:_.card,size:14},null,8,["inner"]),x[8]||(x[8]=p(" رقم العملية",-1))]),n("span",Ua,a(r(y).ref),1)]),n("div",{style:Za},[n("span",{style:no},[c(m,{inner:_.check,size:13},null,8,["inner"])]),x[9]||(x[9]=p(" تم إرسال الهدية بنجاح إلى المستلم — ستظهر الهدية في رسالة خاصة من عناية سامي ",-1))])])]),n("div",qa,[n("button",{class:"btn btn-dark",id:"newGift",onClick:x[0]||(x[0]=E=>k("new-gift"))},[c(m,{inner:_.gift,size:15},null,8,["inner"]),x[11]||(x[11]=p(" إهداء جديد ",-1))]),n("button",{class:"btn btn-line",id:"shareGift",onClick:x[1]||(x[1]=E=>{M(),k("share")})},[c(m,{inner:_.share,size:15},null,8,["inner"]),x[12]||(x[12]=p(" مشاركة الهدية ",-1))]),n("button",{class:"btn btn-line",id:"backHome",onClick:x[2]||(x[2]=E=>k("home"))},[c(m,{inner:_.home,size:15},null,8,["inner"]),x[13]||(x[13]=p(" العودة للرئيسية ",-1))])]),l.value?(o(),s("div",Ka,[x[14]||(x[14]=n("label",null,"رابط الهدية",-1)),n("div",Xa,[n("input",{id:"gift-share-link",type:"text",value:b.value,readonly:""},null,8,Ja),r(y).method==="wa"?(o(),s("button",{key:0,class:"btn btn-gold",onClick:v},"إرسال عبر واتساب")):G("",!0),n("button",{class:"btn btn-gold",onClick:N},"نسخ الرابط")]),t.value?(o(),s("small",Qa,"تم نسخ الرابط بنجاح")):G("",!0)])):G("",!0),x[16]||(x[16]=n("div",{class:"thanks"},[n("i",null,"❦"),p(" شكرًا لاختيارك عناية سامي لتقديم تجربة مميزة لمن تحب "),n("i",null,"❦")],-1))]))}},to=kn(ro,[["__scopeId","data-v-4a1de5a0"]]),eo={key:0,class:"gsum"},ao={class:"card"},oo={class:"why-gift"},io={class:"wi"},so={class:"card help-card"},lo={class:"hi"},po={key:1,class:"gsum"},go={class:"card"},co={key:0,class:"pkline"},xo=["src"],uo={class:"pr"},bo={class:"gs-row"},fo={class:"v"},vo={class:"gs-row"},mo={class:"v",dir:"ltr"},ho={class:"gs-row"},ko={class:"v"},yo={class:"gs-row"},wo={class:"v"},_o={class:"gs-row"},$o={class:"v"},zo={class:"gs-row"},Mo={class:"v"},Co={class:"chip"},Fo={key:3,class:"gs-total"},Bo={class:"v"},Eo={class:"gs-note"},So={key:0,class:"card help-card"},Ao={class:"hi"},Io="text-align:center;padding:20px;border:1.5px dashed var(--line);border-radius:13px;color:var(--mute);font-size:12.5px;margin-bottom:12px",Lo="display:block;font-family:var(--font-d);color:var(--ink);margin-bottom:4px",Po={__name:"GiftSummary",setup(V){const{state:i,pkgOf:y}=H(),k=w(()=>i.gpkg?y(i.gpkg):null),l=w(()=>wn.find(u=>u.id===i.design)),t=w(()=>i.gstep===0||!k.value&&i.gstep<2),e=w(()=>{const u=pn.find(d=>d.id===i.method);return u?u.n:""}),h={head:'<path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>',lock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>'},g=[["هدية رقمية فورية","تصلك أو تصل للمستلم فور إتمام الدفع",'<path d="M13 2L3 14h9l-1 8 10-12h-9z"/>'],["صالحة لمدة 6 أشهر","من تاريخ الشراء",'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>'],["المستلم يختار موعده","يختار الوقت والفرع المناسب له",'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>'],["آمنة وموثوقة","نضمن لك تجربة إهداء مميزة",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>']];return(u,d)=>t.value?(o(),s("div",eo,[n("div",ao,[d[0]||(d[0]=n("h3",null,"لماذا الإهداء من سامي؟",-1)),n("div",oo,[(o(),s(z,null,L(g,(b,v)=>n("div",{key:v,class:"wg"},[n("span",io,[c(m,{inner:b[2],size:17},null,8,["inner"])]),n("span",null,[n("b",null,a(b[0]),1),n("small",null,a(b[1]),1)])])),64))])]),n("div",so,[n("span",lo,[c(m,{inner:h.head,size:18},null,8,["inner"])]),d[1]||(d[1]=n("b",null,"تحتاج مساعدة؟",-1)),d[2]||(d[2]=n("small",null,"فريقنا جاهز لمساعدتك",-1)),d[3]||(d[3]=n("a",{href:"https://wa.me/963959415545"},"تواصل معنا",-1))])])):(o(),s("div",po,[n("div",go,[d[14]||(d[14]=n("h3",null,"ملخص الإهداء",-1)),k.value?(o(),s("div",co,[n("img",{src:k.value.img,alt:""},null,8,xo),n("span",null,[n("b",null,a(k.value.name),1),n("small",null,"🕐 "+a(k.value.dur)+" دقيقة",1),n("small",null,a(k.value.desc),1),n("span",uo,a(r(T)(k.value.price))+" ر.س",1)])])):(o(),s("div",{key:1,style:Io},[n("b",{style:Lo},"لم يتم اختيار باقة بعد"),d[4]||(d[4]=p("اختر الباقة المناسبة لإهدائها لمن تحب",-1))])),r(i).gstep>=2?(o(),s(z,{key:2},[n("div",bo,[d[5]||(d[5]=n("span",{class:"k"},"👤 المهدى إليه",-1)),n("span",fo,a(r(i).name||"—"),1)]),n("div",vo,[d[6]||(d[6]=n("span",{class:"k"},"📱 رقم الجوال",-1)),n("span",mo,a(r(i).phone||"—"),1)]),n("div",ho,[d[7]||(d[7]=n("span",{class:"k"},"🎨 تصميم البطاقة",-1)),n("span",ko,a(l.value.n),1)]),n("div",yo,[d[8]||(d[8]=n("span",{class:"k"},"💬 الرسالة",-1)),n("span",wo,a(r(i).msg?"تمت إضافة رسالة مخصصة":"—"),1)]),n("div",_o,[d[9]||(d[9]=n("span",{class:"k"},"📤 طريقة الإرسال",-1)),n("span",$o,a(e.value),1)]),n("div",zo,[d[10]||(d[10]=n("span",{class:"k"},"🕐 وقت الإرسال",-1)),n("span",Mo,[n("span",Co,a(r(i).when==="now"?"فوري":"مجدول"),1)])])],64)):G("",!0),k.value?(o(),s("div",Fo,[d[12]||(d[12]=n("span",{class:"k"},"الإجمالي",-1)),n("span",Bo,[p(a(r(T)(k.value.price))+" ",1),d[11]||(d[11]=n("small",{style:{"font-size":"13px"}},"ر.س",-1))])])):G("",!0),n("div",Eo,[c(m,{inner:h.lock,size:14},null,8,["inner"]),d[13]||(d[13]=p(" بإتمامك معلومات الهدية مشفرة وآمنة 100%",-1))])]),r(i).gstep===1?(o(),s("div",So,[n("span",Ao,[c(m,{inner:h.head,size:18},null,8,["inner"])]),d[15]||(d[15]=n("b",null,"تحتاج مساعدة؟",-1)),d[16]||(d[16]=n("small",null,"فريقنا جاهز لمساعدتك في اختيار الهدية المثالية",-1)),d[17]||(d[17]=n("a",{href:"https://wa.me/963959415545"},"تواصل معنا",-1))])):G("",!0)]))}},Do={class:"shell"},No={class:"wrap",id:"pkgApp"},To={key:0,class:"view on"},Ho={key:1,class:"g-stage"},Vo={class:"view on"},Yo={id:"gsumWrap"},jo={key:0,class:"view on"},Go={key:1,class:"g-stage"},Ro={class:"view on"},Oo={id:"gsumWrap"},Wo={class:"wrap"},Uo={class:"f-grid"},qo={class:"f-brand"},Ko={class:"f-links"},Xo={class:"f-links"},Jo=["href"],Qo={class:"wrap in"},Zo={class:"fb-mid",id:"fbMid"},ni=["disabled"],ri='<path d="M19 12H5M11 18l-6-6 6-6"/>',gi={__name:"PackagesGiftsView",setup(V){const i=U(null),{current:y,openPicker:k,requireLocation:l,locations:t,loadServiceLocations:e}=Ln();e();const{requireAuth:h}=Pn(),{state:g,pkgOf:u,bkDays:d,gCanNext:b,gNextLabel:v,bkCanNext:M,bkNextLabel:N,startGift:_,startBook:$,backToPackages:x}=H();Nn(Zn,"packages-gifts"),Tn(i);const E=U(!1),Y=U(""),X=U(!1);function R(A){Y.value=A,X.value=!0,clearTimeout(R._h),R._h=setTimeout(()=>{X.value=!1},2600)}const W=w(()=>g.page==="book"),ln=w(()=>W.value?!(g.bk.done||g.bk.step>=2):g.page==="gift"&&!g.done&&g.gstep!==4),dn=w(()=>W.value?!0:g.gstep!==0),on=w(()=>{const A=W.value?g.bk.pkg:g.gpkg;return A?u(A):null}),sn=w(()=>W.value?M.value:b.value),P=w(()=>W.value?N.value:v.value);function C(){if(W.value){if(g.bk.step===0){x();return}g.bk.step--}else{if(g.gstep===0){x();return}g.gstep--}scrollTo({top:0,behavior:"smooth"})}function B(){if(sn.value){if(W.value)g.bk.step++;else{if(g.gstep===3){Z();return}g.gstep++}scrollTo({top:0,behavior:"smooth"})}}function Z(){h(async()=>{var A,f,F,D,nn;E.value=!0;try{const I=await Xn({packages:[{id:g.gpkg}],location:{recipient_name:g.name.trim(),recipient_mobile:g.phone.trim(),message:g.msg.trim()||void 0},design:g.design,branch:g.siteBranch||null,send_channel:g.method||"link"}),K=g.pay==="wallet",J=Math.max(Number((A=u(g.gpkg))==null?void 0:A.price)||0,0),xn=J+Math.round(J*.15);await un(K?"card":"cod",{wallet:K,walletAmount:K?xn:void 0}),g.ref=(f=I==null?void 0:I.data)!=null&&f.gift_card_id?`#GIFT-${I.data.gift_card_id}`:"#GIFT",g.claimUrl=((F=I==null?void 0:I.data)==null?void 0:F.share_url)||((D=I==null?void 0:I.data)==null?void 0:D.claim_url)||null,g.claimToken=((nn=I==null?void 0:I.data)==null?void 0:nn.claim_token)||null,g.done=!0,g.gstep=4,scrollTo({top:0,behavior:"smooth"})}catch(I){console.error("Package gift error:",I),R((I==null?void 0:I.message)||"تعذر إنشاء الهدية، حاول مرة أخرى")}finally{E.value=!1}})}function $n(A){return`${A.getFullYear()}-${String(A.getMonth()+1).padStart(2,"0")}-${String(A.getDate()).padStart(2,"0")}`}function zn(){h(async()=>{var A,f;E.value=!0;try{const F=g.bk,D=d()[F.dayIdx];await Kn({package_id:F.pkg,branch_id:F.branch,date:$n(D),time:F.time,employee_id:(A=F.employee)==null?void 0:A.id,notes:F.notes||void 0});const nn=Math.max(Number((f=u(F.pkg))==null?void 0:f.price)||0,0),I=nn+Math.round(nn*.15),K=F.useWallet?Math.min(Math.max(Number(F.walletAmount)||0,0),Number(F.walletBalance)||0,I):0,J=F.useLoyalty&&parseInt(F.loyaltyPointsUsed,10)||0,En=K>0||J>0?"card":F.pay==="cash"?"cod":"card",Sn=await un(En,{wallet:K>0,walletAmount:K,loyalty:J>0,loyaltyPoints:J});g.bk.ref=Sn.invoice_id||null,g.bk.done=!0,scrollTo({top:0,behavior:"smooth"})}catch(F){R(F.message||"تعذّر إتمام الحجز، حاول مرة أخرى")}finally{E.value=!1}})}function gn(){y.value&&(g.siteBranch=y.value.id)}function Mn(A){$(A)}function Cn(A){l(()=>{gn(),_("pkg",A)})}function Fn(){l(()=>{gn(),_(null,null)})}function Bn(){g.done=!1,g.gstep=0,g.gtype=null,g.gpkg=null,g.pay=null,g.ref=null,scrollTo({top:0,behavior:"smooth"})}function cn(){location.href="/"}return(A,f)=>{const F=hn("RouterLink");return o(),s("div",{ref_key:"root",ref:i},[n("div",Do,[n("div",No,[r(g).page==="packages"?(o(),O(mr,{key:0,onBook:Mn,onGift:Cn,onGiftNow:Fn,onPickBranch:r(k)},null,8,["onPickBranch"])):r(g).page==="book"?(o(),s(z,{key:1},[c($r),r(g).bk.done?(o(),s("div",To,[c(oe,{onHome:cn,onCalendar:f[0]||(f[0]=D=>R("تمت إضافة الموعد إلى التقويم")),onShare:f[1]||(f[1]=D=>R("تم نسخ رابط الحجز للمشاركة"))})])):(o(),s("div",Ho,[n("main",Vo,[r(g).bk.step===0?(o(),O(Hr,{key:0})):r(g).bk.step===1?(o(),O(pt,{key:1})):(o(),O(St,{key:2,onPay:zn}))]),n("aside",Yo,[c($e)])]))],64)):(o(),s(z,{key:2},[c(Ee),r(g).done?(o(),s("div",jo,[c(to,{onRecipient:f[2]||(f[2]=D=>r(g).claimUrl&&(A.location.href=r(g).claimUrl)),onNewGift:Bn,onCopySelf:f[3]||(f[3]=D=>R("تم إرسال نسخة من الهدية إلى بريدك")),onShare:f[4]||(f[4]=D=>R("تم نسخ رابط الهدية للمشاركة")),onHome:cn})])):(o(),s("div",Go,[n("main",Ro,[r(g).gstep===0?(o(),O(He,{key:0})):r(g).gstep===1?(o(),O(Je,{key:1})):r(g).gstep===2?(o(),O(va,{key:2})):(o(),O(za,{key:3}))]),n("aside",Oo,[c(Po)])]))],64))])]),n("footer",null,[n("div",Wo,[n("div",Uo,[n("div",qo,[c(F,{class:"logo",to:"/"},{default:j(()=>[...f[5]||(f[5]=[n("span",{class:"mark"},[n("img",{src:Dn,alt:"عناية سامي",style:{width:"29px",height:"29px","object-fit":"contain"}})],-1),n("span",{class:"name"},[n("b",null,"عناية سامي"),n("span",null,"SAMI CARE")],-1)])]),_:1}),f[6]||(f[6]=tn('<p>مركز متخصص في العناية الرجالية المتكاملة بجدة، حيث تلتقي الفخامة بالاحترافية في كل تفصيلة.</p><div class="socials"><a href="https://x.com/samicare_sa" aria-label="X"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-6.8 7.8L23.3 22h-6.3l-4.9-6.4L6.5 22H3.4l7.3-8.3L1 2h6.5l4.4 5.8L18.9 2zm-1.1 18h1.7L7.1 3.9H5.3L17.8 20z"></path></svg></a><a href="https://www.instagram.com/samicare.sa/" aria-label="انستقرام"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1" fill="currentColor"></circle></svg></a><a href="https://www.facebook.com/samicare.sa" aria-label="فيسبوك"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg></a></div>',2))]),n("div",null,[f[12]||(f[12]=n("h4",null,"روابط مهمة",-1)),n("ul",Ko,[n("li",null,[c(F,{to:"/"},{default:j(()=>[...f[7]||(f[7]=[p("الرئيسية",-1)])]),_:1})]),n("li",null,[c(F,{to:"/booking"},{default:j(()=>[...f[8]||(f[8]=[p("حجز موعد",-1)])]),_:1})]),n("li",null,[c(F,{to:"/#services"},{default:j(()=>[...f[9]||(f[9]=[p("خدماتنا",-1)])]),_:1})]),n("li",null,[c(F,{to:"/packages-gifts"},{default:j(()=>[...f[10]||(f[10]=[p("الباقات",-1)])]),_:1})]),n("li",null,[c(F,{to:"/gifts"},{default:j(()=>[...f[11]||(f[11]=[p("الهدايا",-1)])]),_:1})])])]),n("div",null,[f[18]||(f[18]=n("h4",null,"استكشف",-1)),n("ul",Xo,[n("li",null,[c(F,{to:"/store"},{default:j(()=>[...f[13]||(f[13]=[p("المتجر",-1)])]),_:1})]),n("li",null,[c(F,{to:"/branches"},{default:j(()=>[...f[14]||(f[14]=[p("فروعنا",-1)])]),_:1})]),n("li",null,[c(F,{to:"/contact"},{default:j(()=>[...f[15]||(f[15]=[p("تواصل معنا",-1)])]),_:1})]),n("li",null,[c(F,{to:"/terms"},{default:j(()=>[...f[16]||(f[16]=[p("الشروط والأحكام",-1)])]),_:1})]),n("li",null,[c(F,{to:"/privacy-policy"},{default:j(()=>[...f[17]||(f[17]=[p("سياسة الخصوصية",-1)])]),_:1})])])]),n("div",null,[f[19]||(f[19]=n("h4",null,"عناوين الفروع",-1)),(o(!0),s(z,null,L(r(t),D=>(o(),s("div",{key:D.id,class:"f-branch"},[n("b",null,a(D.name),1),n("small",null,a(D.address),1),D.contact_number?(o(),s("a",{key:0,href:`tel:${D.contact_number}`},a(D.contact_number),9,Jo)):G("",!0)]))),128)),f[20]||(f[20]=n("div",{class:"f-branch"},[n("b",null,"خدمات منزلية"),n("small",null,"حلاقة شعر ولحية وماسكات طبيعية")],-1))])]),f[21]||(f[21]=tn('<div class="f-bottom"><small>© 2026 عناية سامي — جميع الحقوق محفوظة</small><div class="pay" aria-label="بوابات الدفع"><span title="Visa">VISA</span><span title="Mastercard">Mastercard</span><span title="مدى">mada</span><span title="Tabby">tabby</span><span title="Apple Pay">Pay</span></div></div>',1))])]),n("div",{class:S(["footbar",{on:ln.value}]),id:"footbar"},[n("div",Qo,[n("button",{class:"btn btn-back",id:"btnBack",style:q({visibility:dn.value?"visible":"hidden"}),onClick:C},[...f[22]||(f[22]=[n("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[n("path",{d:"M5 12h14M13 6l6 6-6 6"})],-1),p(" السابق ",-1)])],4),n("div",Zo,[on.value?(o(),s(z,{key:0},[f[23]||(f[23]=p("الإجمالي ",-1)),n("b",null,a(r(T)(on.value.price))+" ر.س",1),f[24]||(f[24]=p(" — 🔒 بياناتك محمية وآمنة",-1))],64)):(o(),s(z,{key:1},[p("🔒 بياناتك محمية وآمنة")],64))]),n("button",{class:"btn btn-gold",id:"btnNext",disabled:!sn.value,onClick:B},[p(a(P.value)+" ",1),c(m,{inner:ri,size:15})],8,ni)])],2),n("div",{class:S(["pay-loading",{on:E.value}]),id:"payLoading"},[...f[25]||(f[25]=[n("div",{class:"pl-box"},[n("div",{class:"pl-ring"}),n("b",null,"جارٍ إتمام الإهداء بأمان…"),n("small",null,"سيتم إرسال الهدية مباشرة بعد إتمام الدفع")],-1)])],2),n("div",{class:S(["toast",{on:X.value}]),id:"toast"},a(Y.value),3)],512)}}};export{gi as default};
