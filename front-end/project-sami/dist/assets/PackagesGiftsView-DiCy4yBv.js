import{i as w,o as a,c as s,m as tn,b as n,u as r,F as z,a as p,t as o,e as I,x as K,n as S,q as G,d as c,P as m,p as W,r as U,s as mn,J as Sn,B as hn,E as J,L as rn,y as j,_ as kn,V as An,h as Ln,K as In,X as Pn}from"./index-C_v4GyG2.js";import{u as Dn,a as Nn}from"./useInternalLinks-DqBxxCgd.js";import{u as H,B as Tn,a as Hn,A as Vn,b as Yn,f as en,c as on,r as T,d as yn,G as jn,e as Gn,D as wn,S as gn,P as Rn}from"./usePackages-BKQakfJ_.js";import{f as Wn,b as On,a as Un,i as un,d as Kn}from"./bookingApi-lwQlTaqF.js";import{G as _n,c as qn}from"./GiftCard-Dj9mOpzr.js";import{_ as Xn}from"./complete-care-hq-DbNf4QGN.js";import{_ as fn}from"./SkeletonLoader-BsDQpnjP.js";import{f as Jn}from"./accountApi-6O3-gKeM.js";import"./i18nField-CJ_3XKph.js";const Qn=`\r
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
`,Zn={class:"branch-gate"},nr={class:"ph"},rr=["src","alt"],tr={class:"body"},er={class:"dur"},or={class:"desc"},ar={class:"inc"},ir={class:"price"},sr={class:"acts"},lr=["data-book","onClick"],dr=["data-gift","onClick"],pr={class:"gift-banner"},gr={class:"txt"},cr={class:"mini-feats"},xr={class:"mi"},ur={class:"cta"},fr={class:"perks"},br={class:"pi"},vr={__name:"PackagesCatalog",emits:["book","gift","gift-now","pick-branch"],setup(V,{emit:i}){const{state:y,filteredPkgs:k}=H(),l=i,t=f=>f.toLocaleString("ar-EG-u-nu-latn"),e=w(()=>{const f=Tn.find(v=>v.id===y.siteBranch);return f?f.name:""}),h=w(()=>`grid-template-columns:repeat(${Math.min(k.value.length,5)},1fr)`),g={clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',gift:'<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7s-2-5-5-5-3 5 0 5h5zM12 7s2-5 5-5 3 5 0 5h-5z"/>'},u=[["بطاقة إهداء رقمية",'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>'],["رسالة مخصصة من قلبك",'<path d="M21 11.5a8.4 8.4 0 01-9 8.4 8.5 8.5 0 01-3.8-.9L3 21l2-5.2a8.4 8.4 0 011.5-9.8 8.5 8.5 0 0114.5 5.5z"/>'],["إرسال فوري عبر واتساب أو بريد",'<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>'],["جدولة الإهداء في الوقت المناسب",'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>']],d=[["غرفة VIP خاصة","لباقات مختارة",'<path d="M2 8l4 4 6-8 6 8 4-4v10a2 2 0 01-2 2H4a2 2 0 01-2-2z"/>'],["منتجات فاخرة","ضمن باقاتك",'<path d="M20 12v9H4v-9M2 7h20v5H2z"/>'],["أولوية في الحجز","مواعيد مرنة",'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4"/>'],["ضيافة فاخرة","مشروبات مختارة",'<path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4z"/>'],["نقاط ولاء مضاعفة","مع كل باقة",'<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7"/>'],["ضمان الجودة","أفضل تجربة",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>']];return(f,v)=>(a(),s(z,null,[v[15]||(v[15]=tn('<section class="pk-hero"><div class="bg"><img src="'+Xn+'" alt=""></div><svg class="ghost-logo" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width=".8"><path d="M12 2l9 5v10l-9 5-9-5V7z"></path><path d="M12 2v20M3 7l9 5 9-5M3 17l9-5 9 5"></path></svg><div class="in"><div class="eyebrow">تجارب متكاملة</div><h1>لراحتـك وأناقتـك</h1><p>اختر الباقة التي تناسب احتياجاتك واستمتع بتجربة عناية متكاملة توفر عليك الوقت والجهد</p></div></section>',1)),n("div",Zn,[r(y).siteBranch?(a(),s(z,{key:0},[n("span",null,[v[3]||(v[3]=p("📍 الفرع المختار: ",-1)),n("b",null,o(e.value),1)]),n("button",{id:"branchGateChange",onClick:v[0]||(v[0]=M=>l("pick-branch"))},"تغيير الفرع")],64)):(a(),s(z,{key:1},[v[4]||(v[4]=n("span",null,"حدد فرعك أولًا لعرض الأسعار والمواعيد المتاحة بدقة",-1)),n("button",{id:"branchGateChange",class:"primary",onClick:v[1]||(v[1]=M=>l("pick-branch"))},"اختر الفرع")],64))]),n("div",{class:"pkgs",style:K(h.value)},[(a(!0),s(z,null,I(r(k),(M,N)=>(a(),s("article",{key:M.id,class:S(["pkg",{hot:M.hot}]),style:K(`--pc:${M.color};animation-delay:${N*.07}s`)},[n("div",nr,[n("img",{src:M.img,alt:M.name},null,8,rr),M.hot?(a(),s(z,{key:0},[v[5]||(v[5]=n("span",{class:"hotflag"},"الأكثر طلبًا",-1)),v[6]||(v[6]=n("span",{class:"starflag"},"★",-1))],64)):G("",!0)]),n("span",{class:"badge",style:K(`border-color:${M.hex}`)},[c(m,{inner:M.ico,size:22},null,8,["inner"])],4),n("div",tr,[n("h3",null,o(M.name),1),n("div",er,[c(m,{inner:g.clock,size:13},null,8,["inner"]),p(" "+o(M.dur)+" دقيقة",1)]),n("div",or,o(M.desc),1),n("div",ar,[v[8]||(v[8]=n("b",null,"تشمل الباقة",-1)),n("ul",null,[(a(!0),s(z,null,I(M.inc,(_,$)=>(a(),s("li",{key:$},[v[7]||(v[7]=n("i",null,"✓",-1)),p(o(_),1)]))),128))])]),n("div",ir,[p(o(t(M.price))+" ",1),v[9]||(v[9]=n("small",null,"ر.س",-1))]),n("div",sr,[n("button",{class:"book","data-book":M.id,onClick:_=>l("book",M.id)},"احجز الباقة",8,lr),n("button",{class:"gift-mini","data-gift":M.id,onClick:_=>l("gift",M.id)},[c(m,{inner:g.gift,size:14},null,8,["inner"]),v[10]||(v[10]=p(" أهدِ هذه الباقة",-1))],8,dr)])])],6))),128))],4),n("section",pr,[v[14]||(v[14]=n("div",{class:"gb-box"},[n("div",{class:"face"}),n("span",{class:"tag"},"هدية لكم من القلب 💛")],-1)),n("div",gr,[v[11]||(v[11]=n("h2",null,"أهدِ تجربة فاخرة لمن تحب",-1)),v[12]||(v[12]=n("p",null,"اختر الباقة، أضف رسالة مخصصة، وسيصلك المهدى إليه بشكل أنيق في الوقت المناسب",-1)),n("div",cr,[(a(),s(z,null,I(u,(M,N)=>n("div",{key:N,class:"mf"},[n("span",xr,[c(m,{inner:M[1],size:16},null,8,["inner"])]),p(o(M[0]),1)])),64))])]),n("div",ur,[n("button",{class:"btn btn-gold",id:"giftNow",onClick:v[2]||(v[2]=M=>l("gift-now"))},[c(m,{inner:g.gift,size:16},null,8,["inner"]),v[13]||(v[13]=p(" أهدِ باقة الآن",-1))])])]),n("div",fr,[(a(),s(z,null,I(d,(M,N)=>n("div",{key:N,class:"perk"},[n("span",br,[c(m,{inner:M[2],size:17},null,8,["inner"])]),n("b",null,o(M[0]),1),n("small",null,o(M[1]),1)])),64))])],64))}},mr={class:"g-stepper"},hr={class:"g-steps"},kr=["data-bi"],yr={class:"bubble"},wr='<path d="M20 6L9 17l-5-5"/>',_r={__name:"BookStepper",setup(V){const{state:i}=H();return(y,k)=>(a(),s("div",mr,[n("div",hr,[(a(!0),s(z,null,I(r(Hn),(l,t)=>(a(),s("div",{key:t,class:S(["g-step",{active:t===r(i).bk.step&&!r(i).bk.done,done:t<r(i).bk.step||r(i).bk.done}]),"data-bi":t},[k[0]||(k[0]=n("div",{class:"bar"},[n("i")],-1)),n("span",yr,[t<r(i).bk.step||r(i).bk.done?(a(),W(m,{key:0,inner:wr,size:17})):(a(),s(z,{key:1},[p(o(t+1),1)],64))]),n("b",null,o(l.t),1),n("small",null,o(l.s),1)],10,kr))),128))])]))}},$r={class:"g-head"},zr={class:"card",style:{padding:"20px","margin-bottom":"16px"}},Mr={class:"daystrip"},Cr=["data-bd","onClick"],Fr={key:0,class:"card",style:{padding:"20px"}},Br={key:1,class:"card",style:{padding:"20px"}},Er={class:"periods"},Sr=["data-bp","onClick"],Ar={key:1,class:"slots"},Lr=["data-bt","onClick"],Ir={key:0,class:"tag"},Pr={key:2,class:"card",style:{padding:"40px","text-align":"center",color:"var(--mute)","font-size":"13.5px"}},bn="grid-column:1/-1;text-align:center;color:var(--mute);padding:30px;border:1.5px dashed var(--line);border-radius:14px;font-size:13px",Dr="font-family:var(--font-d);font-size:15px;color:var(--ink);margin-bottom:12px",Nr="font-family:var(--font-d);font-size:15px;color:var(--ink);margin-bottom:4px",Tr={__name:"BookTimeStep",setup(V){const{state:i,pkgOf:y,bkDays:k}=H(),l=i.bk,t=k(),e=w(()=>y(l.pkg)),h=U(!0),g=U([]),u=U(!1);function d(_){return`${_.getFullYear()}-${String(_.getMonth()+1).padStart(2,"0")}-${String(_.getDate()).padStart(2,"0")}`}mn(async()=>{if(l.employee){h.value=!1;return}try{const _=await Wn({branchId:l.branch,serviceId:0}),$=(Array.isArray(_)?_:[])[0];$&&(l.employee={id:$.id,name:[$.first_name,$.last_name].filter(Boolean).join(" ")||"موظف"})}catch{l.employee=null}finally{h.value=!1}});async function f(){var _;if(l.dayIdx==null||!l.employee){g.value=[];return}u.value=!0;try{const $=await On({date:d(t[l.dayIdx]),staffId:l.employee.id,durationMin:(_=e.value)==null?void 0:_.dur});g.value=Array.isArray($)?$:[]}catch{g.value=[]}finally{u.value=!1}}Sn(()=>{var _;return[l.dayIdx,(_=l.employee)==null?void 0:_.id]},f);const v=w(()=>g.value.filter(_=>{const $=Number(_.split(":")[0]);return l.period==="all"||l.period==="am"&&$<12||l.period==="pm"&&$>=12&&$<17||l.period==="eve"&&$>=17})),M=_=>_===2?"الأكثر طلبًا":_===v.value.length-1?"آخر موعد":"",N=[["all","كل اليوم","🗓️"],["am","صباحًا","☀️"],["pm","مساءً","🌇"]];return(_,$)=>(a(),s(z,null,[n("div",$r,[$[0]||($[0]=n("h1",null,"اختر الوقت والتاريخ",-1)),n("p",null,"اختر الوقت المناسب لك — مدة الباقة "+o(e.value.dur)+" دقيقة",1)]),n("div",zr,[n("h4",{style:Dr},"📅 اختر اليوم"),n("div",Mr,[(a(!0),s(z,null,I(r(t),(x,E)=>(a(),s("div",{key:E,class:S(["day",{sel:r(l).dayIdx===E}]),"data-bd":E,onClick:Y=>{r(l).dayIdx=E,r(l).time=null}},[n("small",null,o(r(Vn)[x.getDay()]),1),n("b",null,o(x.getDate()),1),n("small",null,o(r(Yn)[x.getMonth()]),1)],10,Cr))),128))])]),h.value?(a(),s("div",Fr,[c(fn,{height:"72px","border-radius":"12px"})])):r(l).dayIdx!=null?(a(),s("div",Br,[n("h4",{style:Nr},"🕐 "+o(r(en)(r(t)[r(l).dayIdx])),1),n("div",Er,[(a(),s(z,null,I(N,x=>n("button",{key:x[0],class:S(["period",{sel:r(l).period===x[0]}]),"data-bp":x[0],onClick:E=>r(l).period=x[0]},o(x[2])+" "+o(x[1]),11,Sr)),64))]),u.value?(a(),s("div",{key:0,style:bn},[c(fn,{height:"44px","border-radius":"10px"})])):(a(),s("div",Ar,[v.value.length?(a(!0),s(z,{key:0},I(v.value,(x,E)=>(a(),s("button",{key:x,class:S(["slot",{sel:r(l).time===x}]),"data-bt":x,style:K(`animation-delay:${Math.min(E*.03,.4)}s`),onClick:Y=>r(l).time=x},[M(E)?(a(),s("span",Ir,o(M(E)),1)):(a(),s(z,{key:1},[],64)),p(o(r(on)(x)),1)],14,Lr))),128)):(a(),s("div",{key:1,style:bn},"لا توجد أوقات متاحة في هذه الفترة"))]))])):(a(),s("div",Pr,[...$[1]||($[1]=[n("b",{style:{display:"block","font-family":"var(--font-d)","font-size":"16px",color:"var(--ink)","margin-bottom":"6px"}},"ابدأ باختيار اليوم",-1),p("اختر يومًا من الشريط أعلاه لعرض الأوقات المتاحة",-1)])]))],64))}},Hr={class:"ok-banner"},Vr={class:"ic"},Yr=["src","alt"],jr={class:"t"},Gr={class:"incs"},Rr={class:"pr"},Wr={class:"card bk-rows",style:{"margin-bottom":"16px"}},Or={class:"gs-row"},Ur={class:"k"},Kr={class:"v"},qr={class:"gs-row"},Xr={class:"k"},Jr={class:"v"},Qr={class:"gs-row"},Zr={class:"k"},nt={class:"v",dir:"ltr"},rt={class:"gs-row"},tt={class:"k"},et={class:"v"},ot={class:"card",style:{padding:"20px"}},at={class:"fld",style:{margin:"0"}},it="font-size:12px;color:var(--mute);font-family:var(--font-b)",st="display:flex;gap:9px;align-items:center;font-size:12px;color:var(--mute);background:rgba(198,161,91,.08);border-radius:11px;padding:11px 15px;margin-top:14px",lt="color:var(--gold-deep);font-weight:600;text-decoration:underline",dt={__name:"BookConfirmStep",setup(V){const{state:i,pkgOf:y,bkDays:k}=H(),l=i.bk,t=w(()=>y(l.pkg)),e=w(()=>k()[l.dayIdx]),h={check:'<path d="M20 6L9 17l-5-5"/>',pin:'<path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>',cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>'};return(g,u)=>{const d=hn("RouterLink");return a(),s(z,null,[u[9]||(u[9]=n("div",{class:"g-head"},[n("h1",null,"تأكيد الحجز"),n("p",null,"راجع تفاصيل الحجز قبل المتابعة للدفع")],-1)),n("div",Hr,[n("span",Vr,[c(m,{inner:h.check,size:16},null,8,["inner"])]),u[1]||(u[1]=n("div",null,[n("b",null,"تم حفظ موعدك بنجاح"),n("small",null,"يمكنك تعديل أو إلغاء الحجز قبل 6 ساعات من وقت الموعد")],-1))]),n("div",{class:"card bk-pkg-hero",style:K(`--pc:${t.value.color}`)},[n("img",{src:t.value.img,alt:t.value.name},null,8,Yr),n("div",jr,[n("h4",null,o(t.value.name),1),n("small",null,"🕐 "+o(t.value.dur)+" دقيقة — "+o(t.value.desc),1),n("div",Gr,[(a(!0),s(z,null,I(t.value.inc,(f,v)=>(a(),s("span",{key:v},"✓ "+o(f),1))),128))])]),n("div",Rr,[p(o(r(T)(t.value.price))+" ",1),n("small",{style:it},"ر.س")])],4),n("div",Wr,[n("div",Or,[n("span",Ur,[c(m,{inner:h.pin,size:15},null,8,["inner"]),u[2]||(u[2]=p(" الفرع",-1))]),n("span",Kr,o(t.value.branchName),1)]),n("div",qr,[n("span",Xr,[c(m,{inner:h.cal,size:15},null,8,["inner"]),u[3]||(u[3]=p(" التاريخ",-1))]),n("span",Jr,o(r(en)(e.value)),1)]),n("div",Qr,[n("span",Zr,[c(m,{inner:h.clock,size:15},null,8,["inner"]),u[4]||(u[4]=p(" الوقت",-1))]),n("span",nt,o(r(on)(r(l).time)),1)]),n("div",rt,[n("span",tt,[c(m,{inner:h.info,size:15},null,8,["inner"]),u[5]||(u[5]=p(" مدة الجلسة",-1))]),n("span",et,o(t.value.dur)+" دقيقة",1)])]),n("div",ot,[n("div",at,[u[6]||(u[6]=n("label",null,"📝 ملاحظات (اختياري)",-1)),J(n("textarea",{id:"bkNotes",placeholder:"أضف أي ملاحظة...","onUpdate:modelValue":u[0]||(u[0]=f=>r(l).notes=f)},null,512),[[rn,r(l).notes]])]),n("div",{style:st},[u[8]||(u[8]=p(" 🛡️ بالتأكيد على الحجز، فإنك توافق على ",-1)),c(d,{to:"/terms",style:lt},{default:j(()=>[...u[7]||(u[7]=[p("الشروط والأحكام",-1)])]),_:1})])])],64)}}},pt={class:"card pay-summary-strip"},gt={class:"amt"},ct={class:"card",style:{padding:"20px"}},xt={class:"bk-pays"},ut=["data-bkpay","onClick"],ft={class:"lg"},bt={class:"package-rewards"},vt={class:"package-reward"},mt=["checked"],ht=["max","value","disabled"],kt={class:"package-reward"},yt=["checked"],wt=["max","value","disabled"],_t={class:"package-totals"},$t={class:"package-payable"},zt=["disabled"],Mt=.15,Ct='<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>',Ft="display:flex;gap:8px;align-items:center;justify-content:center;margin-top:14px;font-size:12px;color:var(--mute)",Bt={__name:"BookPayStep",emits:["pay"],setup(V,{emit:i}){const{state:y,pkgOf:k,bkDays:l}=H(),t=i,e=y.bk,h=w(()=>k(e.pkg)),g=w(()=>l()[e.dayIdx]),u=w(()=>{var B;const P=Math.max(Number((B=h.value)==null?void 0:B.price)||0,0),F=Math.round(P*Mt);return{subtotal:P,vat:F,total:P+F}}),d=w(()=>yn.filter(P=>P.id!=="wallet")),f=["cash","visa","urpay"];mn(async()=>{var P,F;try{const B=await Jn(),Q=((P=B==null?void 0:B.data)==null?void 0:P.balances)||{};e.walletBalance=Number(Q.wallet??0),e.loyaltyPoints=Number(Q.loyalty_points??0)}catch{}try{const B=await Un();e.pointValue=Number(((F=B==null?void 0:B.data)==null?void 0:F.point_value)??.5)||.5}catch{}});const v=w(()=>Math.max(Number(e.walletBalance)||0,0)),M=w(()=>Math.max(parseInt(e.loyaltyPoints,10)||0,0)),N=w(()=>e.useWallet?Math.min(Math.max(Number(e.walletAmount)||0,0),v.value,u.value.total):0),_=w(()=>Math.max(u.value.total-N.value,0)),$=w(()=>Math.min(M.value,Math.ceil(_.value/e.pointValue))),x=w(()=>e.useLoyalty?Math.min(Math.max(parseInt(e.loyaltyPointsUsed,10)||0,0),$.value):0),E=w(()=>Math.min(x.value*e.pointValue,_.value)),Y=w(()=>Math.max(u.value.total-N.value-E.value,0)),q=w(()=>N.value>0||x.value>0);function R(P){f.includes(P.id)&&(e.pay=P.id)}function O(){e.useWallet=!e.useWallet,e.walletAmount=e.useWallet?Math.min(v.value,u.value.total):0,e.useWallet&&e.pay==="cash"&&(e.pay=Y.value>0?"visa":null)}function ln(P){e.walletAmount=Math.min(Math.max(Number(P)||0,0),v.value,u.value.total),e.useWallet=e.walletAmount>0}function dn(){e.useLoyalty=!e.useLoyalty,e.loyaltyPointsUsed=e.useLoyalty?$.value:0,e.useLoyalty&&e.pay==="cash"&&(e.pay=Y.value>0?"visa":null)}function an(P){e.loyaltyPointsUsed=Math.min(Math.max(parseInt(P,10)||0,0),$.value),e.useLoyalty=e.loyaltyPointsUsed>0}const sn=w(()=>Y.value<=0||!!e.pay);return(P,F)=>(a(),s(z,null,[F[10]||(F[10]=n("div",{class:"g-head"},[n("h1",null,"اختر طريقة الدفع"),n("p",null,"ادفع بأمان وسهولة")],-1)),n("div",pt,[n("b",null,o(h.value.name),1),n("small",null,o(h.value.branchName)+" — "+o(r(en)(g.value))+" • "+o(r(on)(r(e).time)),1),n("span",gt,o(r(T)(u.value.total))+" ر.س",1)]),n("div",ct,[n("div",xt,[(a(!0),s(z,null,I(d.value,B=>(a(),s("div",{key:B.id,class:S(["bkpm",{sel:r(e).pay===B.id,disabled:!f.includes(B.id)||B.id==="cash"&&q.value}]),"data-bkpay":B.id,onClick:Q=>B.id==="cash"&&q.value?null:R(B)},[n("span",ft,o(B.logo),1),n("b",null,o(B.n),1),F[3]||(F[3]=n("span",{class:"rad"},[n("i")],-1))],10,ut))),128))]),n("section",bt,[F[9]||(F[9]=n("h4",null,"استخدام المكافآت ونقاط الولاء",-1)),n("label",vt,[n("span",null,[F[4]||(F[4]=n("b",null,"استخدام من المحفظة",-1)),n("small",null,"الرصيد الحالي: "+o(r(T)(v.value))+" ر.س",1)]),n("input",{type:"checkbox",checked:r(e).useWallet,onChange:O},null,40,mt),n("input",{type:"number",min:"0",max:Math.min(v.value,u.value.total),value:r(e).walletAmount,disabled:!r(e).useWallet,onInput:F[0]||(F[0]=B=>ln(B.target.value))},null,40,ht)]),n("label",kt,[n("span",null,[F[5]||(F[5]=n("b",null,"استخدام نقاط الولاء",-1)),n("small",null,"لديك "+o(r(T)(M.value))+" نقطة",1)]),n("input",{type:"checkbox",checked:r(e).useLoyalty,onChange:dn},null,40,yt),n("input",{type:"number",min:"0",max:$.value,value:r(e).loyaltyPointsUsed,disabled:!r(e).useLoyalty,onInput:F[1]||(F[1]=B=>an(B.target.value))},null,40,wt)]),n("div",_t,[F[6]||(F[6]=n("span",null,"قيمة الباقة",-1)),n("b",null,o(r(T)(u.value.subtotal))+" ر.س",1),F[7]||(F[7]=n("span",null,"الضريبة",-1)),n("b",null,o(r(T)(u.value.vat))+" ر.س",1)]),n("div",$t,[F[8]||(F[8]=n("span",null,"المتبقي للدفع شامل الضريبة",-1)),n("b",null,o(r(T)(Math.round(Y.value)))+" ر.س",1)])]),n("button",{class:"btn-paynow",id:"bkPayNow",disabled:!sn.value,onClick:F[2]||(F[2]=B=>t("pay"))},[c(m,{inner:Ct,size:16}),p(" ادفع الآن — "+o(r(T)(Math.round(Y.value)))+" ر.س",1)],8,zt),n("div",{style:Ft},"🌐 جميع المعاملات مؤمّنة وآمنة")])],64))}},Et=kn(Bt,[["__scopeId","data-v-d9545618"]]),St={class:"gsuccess"},At={class:"gsuc-grid"},Lt={class:"card gsuc-details"},It={class:"gs-row"},Pt={class:"k"},Dt={class:"v"},Nt={class:"gs-row"},Tt={class:"k"},Ht={class:"v"},Vt={class:"gs-row"},Yt={class:"k"},jt={class:"v"},Gt={class:"gs-row"},Rt={class:"k"},Wt={class:"v",dir:"ltr"},Ot={class:"gs-row"},Ut={class:"k"},Kt={class:"v"},qt={class:"gs-row"},Xt={class:"k"},Jt={class:"gs-row"},Qt={class:"k"},Zt={class:"v",dir:"ltr"},ne={class:"gsuc-actions"},re="color:var(--gold-deep);font-family:var(--font-d);font-size:16px",te="display:block;margin-top:12px;font-size:11.5px;color:var(--mute)",ee="display:flex;gap:8px;margin-top:14px",vn="flex:1;padding:11px;font-size:12px",oe={__name:"BookSuccess",emits:["home","calendar","share"],setup(V,{emit:i}){const{state:y,pkgOf:k,bkDays:l}=H(),t=i,e=y.bk,h=w(()=>k(e.pkg)),g=w(()=>l()[e.dayIdx]),u={box:'<path d="M20 12v10H4V12M2 7h20v5H2z"/>',pin:'<path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>',cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>',card:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',qr:'<path d="M4 4h16v16H4z"/><path d="M9 9h2v2H9zM13 9h2M9 13h2M13 13h2v2h-2z"/>',home:'<path d="M3 9l9-6 9 6v11a1 1 0 01-1 1H4a1 1 0 01-1-1z"/>',calAdd:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M12 14v4M10 16h4"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>'};return(d,f)=>(a(),s("div",St,[f[16]||(f[16]=tn('<div class="gsuc-head"><h1>تم تأكيد حجزك بنجاح!</h1><span class="ic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6L9 17l-5-5"></path></svg></span></div><p class="sub">نتطلع لخدمتك وتقديم تجربة استثنائية تليق بك</p>',2)),n("div",At,[n("div",Lt,[f[10]||(f[10]=n("h4",null,"تفاصيل الحجز",-1)),n("div",It,[n("span",Pt,[c(m,{inner:u.box,size:14},null,8,["inner"]),f[3]||(f[3]=p(" الباقة",-1))]),n("span",Dt,o(h.value.name),1)]),n("div",Nt,[n("span",Tt,[c(m,{inner:u.pin,size:14},null,8,["inner"]),f[4]||(f[4]=p(" الفرع",-1))]),n("span",Ht,o(h.value.branchName),1)]),n("div",Vt,[n("span",Yt,[c(m,{inner:u.cal,size:14},null,8,["inner"]),f[5]||(f[5]=p(" التاريخ",-1))]),n("span",jt,o(r(en)(g.value)),1)]),n("div",Gt,[n("span",Rt,[c(m,{inner:u.clock,size:14},null,8,["inner"]),f[6]||(f[6]=p(" الوقت",-1))]),n("span",Wt,o(r(on)(r(e).time)),1)]),n("div",Ot,[n("span",Ut,[c(m,{inner:u.info,size:14},null,8,["inner"]),f[7]||(f[7]=p(" مدة الجلسة",-1))]),n("span",Kt,o(h.value.dur)+" دقيقة",1)]),n("div",qt,[n("span",Xt,[c(m,{inner:u.card,size:14},null,8,["inner"]),f[8]||(f[8]=p(" المبلغ المدفوع",-1))]),n("span",{class:"v",style:re},o(r(T)(h.value.price))+" ر.س",1)]),n("div",Jt,[n("span",Qt,[c(m,{inner:u.qr,size:14},null,8,["inner"]),f[9]||(f[9]=p(" رمز الحجز",-1))]),n("span",Zt,o(r(e).ref),1)])]),n("div",{class:"card gsuc-details",style:{"text-align":"center"}},[f[11]||(f[11]=n("h4",{style:{"text-align":"right"}},"رمز الوصول السريع",-1)),f[12]||(f[12]=n("div",{class:"qr-box"},[n("canvas",{id:"bkQr"})],-1)),n("small",{style:te},"📱 امسح الرمز عند الوصول لتسجيل الحضور"),n("div",{style:ee},[n("button",{class:"btn btn-dark",style:vn},"🍎 Apple Wallet"),n("button",{class:"btn btn-dark",style:vn},"📲 Google Wallet")])])]),n("div",ne,[n("button",{class:"btn btn-gold",id:"bkHome",onClick:f[0]||(f[0]=v=>t("home"))},[c(m,{inner:u.home,size:15},null,8,["inner"]),f[13]||(f[13]=p(" العودة إلى الرئيسية",-1))]),n("button",{class:"btn btn-line",id:"bkCal",onClick:f[1]||(f[1]=v=>t("calendar"))},[c(m,{inner:u.calAdd,size:15},null,8,["inner"]),f[14]||(f[14]=p(" إضافة إلى التقويم",-1))]),n("button",{class:"btn btn-line",id:"bkShare",onClick:f[2]||(f[2]=v=>t("share"))},[c(m,{inner:u.share,size:15},null,8,["inner"]),f[15]||(f[15]=p(" مشاركة الحجز",-1))])]),f[17]||(f[17]=n("div",{class:"thanks"},[n("i",null,"❦"),p(" جودة تستحقها.. تجربة لا تنساها "),n("i",null,"❦")],-1))]))}},ae={class:"gsum"},ie={class:"card"},se={class:"pkline"},le=["src"],de={class:"pr"},pe={key:0,class:"gs-row"},ge={class:"v"},ce={key:1,class:"gs-row"},xe={class:"v"},ue={key:2,class:"gs-row"},fe={class:"v"},be={key:3,class:"gs-row"},ve={class:"v"},me={class:"gs-total"},he={class:"v"},ke={class:"gs-note"},ye={class:"card help-card"},we={class:"hi"},_e={__name:"BookSummary",setup(V){const{state:i,pkgOf:y,bkDays:k}=H(),l=i.bk,t=w(()=>y(l.pkg)),e=w(()=>l.dayIdx!=null?k()[l.dayIdx]:null),h=w(()=>{const u=yn.find(d=>d.id===l.pay);return u?u.n:""}),g={shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',head:'<path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>'};return(u,d)=>(a(),s("div",ae,[n("div",ie,[d[7]||(d[7]=n("h3",null,"ملخص الحجز",-1)),n("div",se,[n("img",{src:t.value.img,alt:""},null,8,le),n("span",null,[n("b",null,o(t.value.name),1),n("small",null,"🕐 "+o(t.value.dur)+" دقيقة",1),n("small",null,o(t.value.desc),1),n("span",de,o(r(T)(t.value.price))+" ر.س",1)])]),t.value.branchName?(a(),s("div",pe,[d[0]||(d[0]=n("span",{class:"k"},"📍 الفرع",-1)),n("span",ge,o(t.value.branchName),1)])):G("",!0),e.value?(a(),s("div",ce,[d[1]||(d[1]=n("span",{class:"k"},"📅 التاريخ",-1)),n("span",xe,o(r(en)(e.value)),1)])):G("",!0),r(l).time!=null?(a(),s("div",ue,[d[2]||(d[2]=n("span",{class:"k"},"🕐 الوقت",-1)),n("span",fe,o(r(on)(r(l).time)),1)])):G("",!0),r(l).pay?(a(),s("div",be,[d[3]||(d[3]=n("span",{class:"k"},"💳 طريقة الدفع",-1)),n("span",ve,o(h.value),1)])):G("",!0),n("div",me,[d[5]||(d[5]=n("span",{class:"k"},"الإجمالي",-1)),n("span",he,[p(o(r(T)(t.value.price))+" ",1),d[4]||(d[4]=n("small",{style:{"font-size":"13px"}},"ر.س",-1))])]),n("div",ke,[c(m,{inner:g.shield,size:14},null,8,["inner"]),d[6]||(d[6]=p(" حجز آمن — تعديل أو إلغاء مجاني قبل 6 ساعات",-1))])]),n("div",ye,[n("span",we,[c(m,{inner:g.head,size:18},null,8,["inner"])]),d[8]||(d[8]=n("b",null,"دعم على مدار الساعة",-1)),d[9]||(d[9]=n("small",null,"نحن هنا لخدمتك",-1)),d[10]||(d[10]=n("a",{href:"https://wa.me/963959415545"},"تواصل معنا",-1))])]))}},$e={class:"g-stepper"},ze={class:"g-steps"},Me=["data-i"],Ce={class:"bubble"},Fe='<path d="M20 6L9 17l-5-5"/>',Be={__name:"GiftStepper",setup(V){const{state:i}=H();return(y,k)=>(a(),s("div",$e,[n("div",ze,[(a(!0),s(z,null,I(r(jn),(l,t)=>(a(),s("div",{key:t,class:S(["g-step",{active:t===r(i).gstep,done:t<r(i).gstep||r(i).done}]),"data-i":t},[k[0]||(k[0]=n("div",{class:"bar"},[n("i")],-1)),n("span",Ce,[t<r(i).gstep||r(i).done?(a(),W(m,{key:0,inner:Fe,size:17})):(a(),s(z,{key:1},[p(o(t+1),1)],64))]),n("b",null,o(l.t),1),n("small",null,o(l.s),1)],10,Me))),128))])]))}},Ee={class:"gtype-grid"},Se=["data-gt","onClick"],Ae={class:"im"},Le=["src"],Ie={class:"ic"},Pe={class:"bd"},De={class:"go"},Ne='<path d="M19 12H5M11 18l-6-6 6-6"/>',Te={__name:"GiftTypeStep",setup(V){const{state:i}=H();return(y,k)=>(a(),s(z,null,[k[0]||(k[0]=n("div",{class:"g-head"},[n("h1",null,"ماذا ترغب بإهدائه؟"),n("p",null,"اختر ما يناسبك لإهداء تجربة مميزة لمن تحب")],-1)),n("div",Ee,[(a(!0),s(z,null,I(r(Gn),l=>(a(),s("div",{key:l.id,class:S(["gtype",{sel:r(i).gtype===l.id}]),"data-gt":l.id,onClick:t=>r(i).gtype=l.id},[n("div",Ae,[n("img",{src:l.img,alt:""},null,8,Le),n("span",Ie,[c(m,{inner:l.ic,size:22},null,8,["inner"])])]),n("div",Pe,[n("h3",null,o(l.n),1),n("p",null,o(l.d),1),n("span",De,[p(o(l.btn)+" ",1),c(m,{inner:Ne,size:14})])])],10,Se))),128))])],64))}},He={class:"gp-sort"},Ve={class:"gpkgs"},Ye=["data-gp","onClick"],je={class:"ph"},Ge=["src","alt"],Re={class:"chk"},We={class:"bd"},Oe={class:"dur"},Ue={class:"desc"},Ke={class:"prc"},qe={class:"pick"},Xe={__name:"GiftPickStep",setup(V){const{state:i,packages:y}=H(),k={check:'<path d="M20 6L9 17l-5-5"/>',gift:'<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7s-2-5-5-5-3 5 0 5h5zM12 7s2-5 5-5 3 5 0 5h-5z"/>'},l=w(()=>y.value.slice().sort((t,e)=>i.sort==="low"?t.price-e.price:i.sort==="high"?e.price-t.price:(e.hot?1:0)-(t.hot?1:0)));return(t,e)=>(a(),s(z,null,[e[3]||(e[3]=n("div",{class:"g-head"},[n("h1",null,"اختر الباقة التي ترغب بإهدائها"),n("p",null,"باقات مميزة تمنح تجربة متكاملة من الاسترخاء والعناية")],-1)),n("div",He,[J(n("select",{id:"gpSort","onUpdate:modelValue":e[0]||(e[0]=h=>r(i).sort=h)},[...e[1]||(e[1]=[n("option",{value:"pop"},"الأكثر مبيعًا",-1),n("option",{value:"low"},"السعر: الأقل أولًا",-1),n("option",{value:"high"},"السعر: الأعلى أولًا",-1)])],512),[[An,r(i).sort]]),n("small",null,o(r(y).length)+" باقات متاحة",1)]),n("div",Ve,[(a(!0),s(z,null,I(l.value,(h,g)=>(a(),s("div",{key:h.id,class:S(["gpkg",{sel:r(i).gpkg===h.id}]),"data-gp":h.id,style:K(`--pc:${h.color};animation-delay:${g*.06}s`),onClick:u=>r(i).gpkg=h.id},[n("div",je,[n("img",{src:h.img,alt:h.name},null,8,Ge),n("span",Re,[c(m,{inner:k.check,size:13},null,8,["inner"])])]),n("div",We,[n("h4",null,o(h.name),1),n("div",Oe,"🕐 "+o(h.dur)+" دقيقة",1),n("div",Ue,o(h.desc),1),n("div",Ke,[p(o(r(T)(h.price))+" ",1),e[2]||(e[2]=n("small",null,"ر.س",-1))]),n("button",qe,[c(m,{inner:k.gift,size:14},null,8,["inner"]),p(" "+o(r(i).gpkg===h.id?"تم الاختيار ✓":"أهدِ هذه الباقة"),1)])])],14,Ye))),128))])],64))}},Je={class:"custom-grid"},Qe={class:"preview-col"},Ze={id:"cardPrev"},no={class:"form-col"},ro={class:"card",style:{"margin-bottom":"16px"}},to={class:"two"},eo={class:"fld"},oo={class:"fld"},ao={class:"fld",style:{"margin-bottom":"4px"}},io={class:"card",style:{"margin-bottom":"16px"}},so={class:"designs"},lo=["data-d","onClick"],po={class:"dchk"},go={class:"card"},co={class:"send-opts"},xo={class:"fld",style:{margin:"0"}},uo={class:"methods",style:{"margin-top":"14px"}},fo=["data-m","onClick"],bo={class:"mi"},vo={__name:"GiftCustomizeStep",setup(V){const{state:i}=H(),y=w(()=>200-i.msg.length),k={eye:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',user:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',brush:'<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.6 7.6"/><circle cx="11" cy="11" r="2"/>',send:'<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>',check:'<path d="M20 6L9 17l-5-5"/>'};return(l,t)=>(a(),s(z,null,[t[17]||(t[17]=n("div",{class:"g-head"},[n("h1",null,"خصص هديتك لتكون أجمل"),n("p",null,"أضف لمستك الخاصة مع رسالة وتصميم بطاقة الإهداء")],-1)),n("div",Je,[n("div",Qe,[n("h4",null,[c(m,{inner:k.eye,size:16},null,8,["inner"]),t[6]||(t[6]=p(" معاينة بطاقة الإهداء",-1))]),n("div",Ze,[c(_n,{design:r(i).design,recipient:r(i).name,message:r(i).msg},null,8,["design","recipient","message"])])]),n("div",no,[n("div",ro,[n("h4",null,[c(m,{inner:k.user,size:16},null,8,["inner"]),t[7]||(t[7]=p(" بيانات المهدى إليه",-1))]),n("div",to,[n("div",eo,[t[8]||(t[8]=n("label",null,"الاسم الكامل",-1)),J(n("input",{id:"gName",placeholder:"أحمد محمد","onUpdate:modelValue":t[0]||(t[0]=e=>r(i).name=e)},null,512),[[rn,r(i).name]])]),n("div",oo,[t[9]||(t[9]=n("label",null,"رقم الجوال",-1)),J(n("input",{id:"gPhone",dir:"ltr",placeholder:"05xxxxxxxx","onUpdate:modelValue":t[1]||(t[1]=e=>r(i).phone=e)},null,512),[[rn,r(i).phone]])])]),n("div",ao,[t[10]||(t[10]=n("label",null,"الرسالة الشخصية",-1)),J(n("textarea",{id:"gMsg",maxlength:"200",placeholder:"اكتب رسالتك من القلب...","onUpdate:modelValue":t[2]||(t[2]=e=>r(i).msg=e)},null,512),[[rn,r(i).msg]]),n("span",{class:S(["cnt",{max:y.value<20}]),id:"gCnt"},o(r(i).msg.length)+"/200",3)])]),n("div",io,[n("h4",null,[c(m,{inner:k.brush,size:16},null,8,["inner"]),t[11]||(t[11]=p(" تصميم بطاقة الإهداء",-1))]),n("div",so,[(a(!0),s(z,null,I(r(wn),e=>(a(),s("div",{key:e.id,class:S(["design",{sel:r(i).design===e.id}]),"data-d":e.id,onClick:h=>r(i).design=e.id},[n("div",{class:"sw",style:K(`background:${e.bg};color:${e.fg}`)},[n("span",po,[c(m,{inner:k.check,size:10},null,8,["inner"])]),t[12]||(t[12]=p("SAMI",-1))],4),n("small",null,o(e.n),1)],10,lo))),128))])]),n("div",go,[n("h4",null,[c(m,{inner:k.send,size:16},null,8,["inner"]),t[13]||(t[13]=p(" طريقة الإرسال",-1))]),n("div",co,[n("span",{class:S(["ro",{on:r(i).when==="now"}]),"data-w":"now",onClick:t[3]||(t[3]=e=>r(i).when="now")},[...t[14]||(t[14]=[n("i",null,null,-1),p(" إرسال الآن",-1)])],2),n("span",{class:S(["ro",{on:r(i).when==="later"}]),"data-w":"later",onClick:t[4]||(t[4]=e=>r(i).when="later")},[...t[15]||(t[15]=[n("i",null,null,-1),p(" 📅 جدولة لاحقًا",-1)])],2)]),n("div",{class:S(["sched-box",{open:r(i).when==="later"}])},[n("div",xo,[t[16]||(t[16]=n("label",null,"موعد الإرسال",-1)),J(n("input",{type:"datetime-local",id:"gSched","onUpdate:modelValue":t[5]||(t[5]=e=>r(i).schedDate=e)},null,512),[[rn,r(i).schedDate]])])],2),n("div",uo,[(a(!0),s(z,null,I(r(gn),e=>(a(),s("div",{key:e.id,class:S(["mth",{sel:r(i).method===e.id}]),"data-m":e.id,onClick:h=>r(i).method=e.id},[n("span",bo,[c(m,{inner:e.ic,size:17},null,8,["inner"])]),p(o(e.n),1)],10,fo))),128))])])])])],64))}},mo={class:"card",style:{padding:"22px","margin-bottom":"16px"}},ho={class:"pay-methods"},ko=["data-pay","onClick"],yo={class:"pmi"},wo={class:"cf-box"},_o={class:"secure-strip"},$o="font-family:var(--font-d);font-size:16px;color:var(--ink);margin-bottom:16px",zo={__name:"GiftPayStep",setup(V){const{state:i}=H(),y=w(()=>i.pay==="card"||i.pay==="mada"),k={check:'<path d="M20 6L9 17l-5-5"/>',shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'};return(l,t)=>(a(),s(z,null,[t[8]||(t[8]=n("div",{class:"g-head"},[n("h1",null,[p("أكمل الدفع لإرسال هديتك "),n("span",{class:"lock"},"🔒")]),n("p",null,"بيانات دفع آمنة ومشفرة بالكامل")],-1)),n("div",mo,[n("h4",{style:$o},"اختر طريقة الدفع"),n("div",ho,[(a(!0),s(z,null,I(r(Rn),e=>(a(),s("div",{key:e.id,class:S(["pm",{sel:r(i).pay===e.id}]),"data-pay":e.id,onClick:h=>r(i).pay=e.id},[t[1]||(t[1]=n("span",{class:"rad"},[n("i")],-1)),n("span",yo,o(e.logo),1),n("b",null,o(e.n),1),n("small",null,o(e.d),1)],10,ko))),128))]),n("div",{class:S(["card-form",{open:y.value}])},[n("div",wo,[t[3]||(t[3]=n("h5",null,"بيانات البطاقة",-1)),t[4]||(t[4]=n("div",{class:"two"},[n("div",{class:"fld"},[n("label",null,"رقم البطاقة"),n("input",{dir:"ltr",inputmode:"numeric",placeholder:"•••• •••• •••• ••••"})]),n("div",{class:"fld"},[n("label",null,"الاسم على البطاقة"),n("input",{placeholder:"الاسم كما هو على البطاقة"})])],-1)),t[5]||(t[5]=n("div",{class:"two"},[n("div",{class:"fld",style:{margin:"0"}},[n("label",null,"تاريخ الانتهاء"),n("input",{dir:"ltr",placeholder:"MM / YY"})]),n("div",{class:"fld",style:{margin:"0"}},[n("label",null,"رمز الأمان (CVV)"),n("input",{dir:"ltr",inputmode:"numeric",placeholder:"•••"})])],-1)),n("span",{class:S(["save-card",{on:r(i).saveCard}]),id:"saveCard",onClick:t[0]||(t[0]=e=>r(i).saveCard=!r(i).saveCard)},[n("i",null,[c(m,{inner:k.check,size:11},null,8,["inner"])]),t[2]||(t[2]=p(" حفظ البطاقة لاستخدامها لاحقًا",-1))],2)])],2),n("div",_o,[c(m,{inner:k.shield,size:15},null,8,["inner"]),t[6]||(t[6]=p(" جميع بيانات الدفع محمية بتقنية تشفير آمنة ومعتمدة",-1))]),t[7]||(t[7]=n("div",{class:"after-pay"},"سيتم إرسال الهدية مباشرة بعد إتمام الدفع",-1))])],64))}},Mo={class:"gsuccess"},Co={class:"gsuc-grid"},Fo={class:"gsuc-card-col"},Bo={class:"card gsuc-details"},Eo={class:"gs-row"},So={class:"k"},Ao={class:"v"},Lo={class:"gs-row"},Io={class:"k"},Po={class:"v"},Do={class:"gs-row"},No={class:"k"},To={class:"v",dir:"ltr"},Ho={class:"gs-row"},Vo={class:"k"},Yo={class:"v"},jo={class:"chip"},Go={class:"gs-row"},Ro={class:"k"},Wo={class:"gs-row"},Oo={class:"k"},Uo={class:"v",dir:"ltr"},Ko={class:"gsuc-actions"},qo={key:0,class:"gift-share-panel"},Xo={class:"gift-share-row"},Jo=["value"],Qo={key:0},Zo="display:flex;gap:10px;align-items:center;background:var(--green-bg);border-radius:12px;padding:13px 15px;margin-top:14px;font-size:12.5px;color:#1E6B41",na="flex:none;width:26px;height:26px;border-radius:50%;background:var(--green);color:#fff;display:grid;place-items:center",ra={__name:"GiftSuccess",emits:["recipient","new-gift","copy-self","share","home"],setup(V,{emit:i}){const{state:y}=H(),k=i,l=U(!1),t=U(!1),e=["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],h=new Date,g=`${h.getDate()} ${e[h.getMonth()]} ${h.getFullYear()}`,u="✦✧✦✧".split("").map(($,x)=>({c:$,style:`top:${10+x*16}%;${x%2?"right":"left"}:${4+x*3}%;animation-delay:-${x}s`})),d=w(()=>{const $=gn.find(x=>x.id===y.method);return $?$.n:""}),f=w(()=>y.claimToken?new URL(`/gift-recipient?token=${encodeURIComponent(y.claimToken)}`,window.location.origin).href:y.claimUrl||"");function v(){if(!f.value)return;const $=String(y.phone||"").replace(/\D/g,""),x=encodeURIComponent(`لديك هدية من عناية سامي ✨
${f.value}`);window.open(`https://wa.me/${$}?text=${x}`,"_blank","noopener")}function M(){l.value=!0,t.value=!1,f.value&&window.open(f.value,"_blank","noopener,noreferrer")}async function N(){try{if(navigator&&navigator.clipboard)await navigator.clipboard.writeText(f.value);else{const $=document.getElementById("gift-share-link");$&&($.focus(),$.select(),document.execCommand("copy"))}t.value=!0,setTimeout(()=>{t.value=!1},2200)}catch{alert("تعذّر نسخ الرابط، يمكنك نسخه يدويًا من الحقل أدناه.")}}const _={user:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',send:'<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>',phone:'<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',card:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',check:'<path d="M20 6L9 17l-5-5"/>',gift:'<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7s-2-5-5-5-3 5 0 5h5zM12 7s2-5 5-5 3 5 0 5h-5z"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>',home:'<path d="M3 9l9-6 9 6v11a1 1 0 01-1 1H4a1 1 0 01-1-1z"/>'};return($,x)=>(a(),s("div",Mo,[(a(!0),s(z,null,I(r(u),(E,Y)=>(a(),s("span",{key:Y,class:"confetti",style:K(E.style)},o(E.c),5))),128)),x[15]||(x[15]=tn('<div class="gsuc-head" data-v-2ee9f435><h1 data-v-2ee9f435>تم إرسال هديتك بنجاح</h1><span class="ic" data-v-2ee9f435><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" data-v-2ee9f435><path d="M20 6L9 17l-5-5" data-v-2ee9f435></path></svg></span></div><p class="sub" data-v-2ee9f435>لقد أسعدت قلبًا اليوم 🤍 شكرًا لاختيارك عناية سامي</p>',2)),n("div",Co,[n("div",Fo,[c(_n,{design:r(y).design,recipient:r(y).name,message:r(y).msg},null,8,["design","recipient","message"])]),n("div",Bo,[x[10]||(x[10]=n("h4",null,"تفاصيل الإرسال",-1)),n("div",Eo,[n("span",So,[c(m,{inner:_.user,size:14},null,8,["inner"]),x[3]||(x[3]=p(" المهدى إليه",-1))]),n("span",Ao,o(r(y).name),1)]),n("div",Lo,[n("span",Io,[c(m,{inner:_.send,size:14},null,8,["inner"]),x[4]||(x[4]=p(" طريقة الإرسال",-1))]),n("span",Po,o(d.value),1)]),n("div",Do,[n("span",No,[c(m,{inner:_.phone,size:14},null,8,["inner"]),x[5]||(x[5]=p(" رقم الجوال",-1))]),n("span",To,o(r(y).phone),1)]),n("div",Ho,[n("span",Vo,[c(m,{inner:_.clock,size:14},null,8,["inner"]),x[6]||(x[6]=p(" وقت الإرسال",-1))]),n("span",Yo,[n("span",jo,"✓ "+o(r(y).when==="now"?"تم الإرسال الآن":"مجدولة"),1)])]),n("div",Go,[n("span",Ro,[c(m,{inner:_.cal,size:14},null,8,["inner"]),x[7]||(x[7]=p(" تاريخ الإرسال",-1))]),n("span",{class:"v"},o(g))]),n("div",Wo,[n("span",Oo,[c(m,{inner:_.card,size:14},null,8,["inner"]),x[8]||(x[8]=p(" رقم العملية",-1))]),n("span",Uo,o(r(y).ref),1)]),n("div",{style:Zo},[n("span",{style:na},[c(m,{inner:_.check,size:13},null,8,["inner"])]),x[9]||(x[9]=p(" تم إرسال الهدية بنجاح إلى المستلم — ستظهر الهدية في رسالة خاصة من عناية سامي ",-1))])])]),n("div",Ko,[n("button",{class:"btn btn-dark",id:"newGift",onClick:x[0]||(x[0]=E=>k("new-gift"))},[c(m,{inner:_.gift,size:15},null,8,["inner"]),x[11]||(x[11]=p(" إهداء جديد ",-1))]),n("button",{class:"btn btn-line",id:"shareGift",onClick:x[1]||(x[1]=E=>{M(),k("share")})},[c(m,{inner:_.share,size:15},null,8,["inner"]),x[12]||(x[12]=p(" مشاركة الهدية ",-1))]),n("button",{class:"btn btn-line",id:"backHome",onClick:x[2]||(x[2]=E=>k("home"))},[c(m,{inner:_.home,size:15},null,8,["inner"]),x[13]||(x[13]=p(" العودة للرئيسية ",-1))])]),l.value?(a(),s("div",qo,[x[14]||(x[14]=n("label",null,"رابط الهدية",-1)),n("div",Xo,[n("input",{id:"gift-share-link",type:"text",value:f.value,readonly:""},null,8,Jo),r(y).method==="wa"?(a(),s("button",{key:0,class:"btn btn-gold",onClick:v},"إرسال عبر واتساب")):G("",!0),n("button",{class:"btn btn-gold",onClick:N},"نسخ الرابط")]),t.value?(a(),s("small",Qo,"تم نسخ الرابط بنجاح")):G("",!0)])):G("",!0),x[16]||(x[16]=n("div",{class:"thanks"},[n("i",null,"❦"),p(" شكرًا لاختيارك عناية سامي لتقديم تجربة مميزة لمن تحب "),n("i",null,"❦")],-1))]))}},ta=kn(ra,[["__scopeId","data-v-2ee9f435"]]),ea={key:0,class:"gsum"},oa={class:"card"},aa={class:"why-gift"},ia={class:"wi"},sa={class:"card help-card"},la={class:"hi"},da={key:1,class:"gsum"},pa={class:"card"},ga={key:0,class:"pkline"},ca=["src"],xa={class:"pr"},ua={class:"gs-row"},fa={class:"v"},ba={class:"gs-row"},va={class:"v",dir:"ltr"},ma={class:"gs-row"},ha={class:"v"},ka={class:"gs-row"},ya={class:"v"},wa={class:"gs-row"},_a={class:"v"},$a={class:"gs-row"},za={class:"v"},Ma={class:"chip"},Ca={key:3,class:"gs-total"},Fa={class:"v"},Ba={class:"gs-note"},Ea={key:0,class:"card help-card"},Sa={class:"hi"},Aa="text-align:center;padding:20px;border:1.5px dashed var(--line);border-radius:13px;color:var(--mute);font-size:12.5px;margin-bottom:12px",La="display:block;font-family:var(--font-d);color:var(--ink);margin-bottom:4px",Ia={__name:"GiftSummary",setup(V){const{state:i,pkgOf:y}=H(),k=w(()=>i.gpkg?y(i.gpkg):null),l=w(()=>wn.find(u=>u.id===i.design)),t=w(()=>i.gstep===0||!k.value&&i.gstep<2),e=w(()=>{const u=gn.find(d=>d.id===i.method);return u?u.n:""}),h={head:'<path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>',lock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>'},g=[["هدية رقمية فورية","تصلك أو تصل للمستلم فور إتمام الدفع",'<path d="M13 2L3 14h9l-1 8 10-12h-9z"/>'],["صالحة لمدة 6 أشهر","من تاريخ الشراء",'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>'],["المستلم يختار موعده","يختار الوقت والفرع المناسب له",'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>'],["آمنة وموثوقة","نضمن لك تجربة إهداء مميزة",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>']];return(u,d)=>t.value?(a(),s("div",ea,[n("div",oa,[d[0]||(d[0]=n("h3",null,"لماذا الإهداء من سامي؟",-1)),n("div",aa,[(a(),s(z,null,I(g,(f,v)=>n("div",{key:v,class:"wg"},[n("span",ia,[c(m,{inner:f[2],size:17},null,8,["inner"])]),n("span",null,[n("b",null,o(f[0]),1),n("small",null,o(f[1]),1)])])),64))])]),n("div",sa,[n("span",la,[c(m,{inner:h.head,size:18},null,8,["inner"])]),d[1]||(d[1]=n("b",null,"تحتاج مساعدة؟",-1)),d[2]||(d[2]=n("small",null,"فريقنا جاهز لمساعدتك",-1)),d[3]||(d[3]=n("a",{href:"https://wa.me/963959415545"},"تواصل معنا",-1))])])):(a(),s("div",da,[n("div",pa,[d[14]||(d[14]=n("h3",null,"ملخص الإهداء",-1)),k.value?(a(),s("div",ga,[n("img",{src:k.value.img,alt:""},null,8,ca),n("span",null,[n("b",null,o(k.value.name),1),n("small",null,"🕐 "+o(k.value.dur)+" دقيقة",1),n("small",null,o(k.value.desc),1),n("span",xa,o(r(T)(k.value.price))+" ر.س",1)])])):(a(),s("div",{key:1,style:Aa},[n("b",{style:La},"لم يتم اختيار باقة بعد"),d[4]||(d[4]=p("اختر الباقة المناسبة لإهدائها لمن تحب",-1))])),r(i).gstep>=2?(a(),s(z,{key:2},[n("div",ua,[d[5]||(d[5]=n("span",{class:"k"},"👤 المهدى إليه",-1)),n("span",fa,o(r(i).name||"—"),1)]),n("div",ba,[d[6]||(d[6]=n("span",{class:"k"},"📱 رقم الجوال",-1)),n("span",va,o(r(i).phone||"—"),1)]),n("div",ma,[d[7]||(d[7]=n("span",{class:"k"},"🎨 تصميم البطاقة",-1)),n("span",ha,o(l.value.n),1)]),n("div",ka,[d[8]||(d[8]=n("span",{class:"k"},"💬 الرسالة",-1)),n("span",ya,o(r(i).msg?"تمت إضافة رسالة مخصصة":"—"),1)]),n("div",wa,[d[9]||(d[9]=n("span",{class:"k"},"📤 طريقة الإرسال",-1)),n("span",_a,o(e.value),1)]),n("div",$a,[d[10]||(d[10]=n("span",{class:"k"},"🕐 وقت الإرسال",-1)),n("span",za,[n("span",Ma,o(r(i).when==="now"?"فوري":"مجدول"),1)])])],64)):G("",!0),k.value?(a(),s("div",Ca,[d[12]||(d[12]=n("span",{class:"k"},"الإجمالي",-1)),n("span",Fa,[p(o(r(T)(k.value.price))+" ",1),d[11]||(d[11]=n("small",{style:{"font-size":"13px"}},"ر.س",-1))])])):G("",!0),n("div",Ba,[c(m,{inner:h.lock,size:14},null,8,["inner"]),d[13]||(d[13]=p(" بإتمامك معلومات الهدية مشفرة وآمنة 100%",-1))])]),r(i).gstep===1?(a(),s("div",Ea,[n("span",Sa,[c(m,{inner:h.head,size:18},null,8,["inner"])]),d[15]||(d[15]=n("b",null,"تحتاج مساعدة؟",-1)),d[16]||(d[16]=n("small",null,"فريقنا جاهز لمساعدتك في اختيار الهدية المثالية",-1)),d[17]||(d[17]=n("a",{href:"https://wa.me/963959415545"},"تواصل معنا",-1))])):G("",!0)]))}},Pa={class:"shell"},Da={class:"wrap",id:"pkgApp"},Na={key:0,class:"view on"},Ta={key:1,class:"g-stage"},Ha={class:"view on"},Va={id:"gsumWrap"},Ya={key:0,class:"view on"},ja={key:1,class:"g-stage"},Ga={class:"view on"},Ra={id:"gsumWrap"},Wa={class:"wrap"},Oa={class:"f-grid"},Ua={class:"f-brand"},Ka={class:"f-links"},qa={class:"f-links"},Xa=["href"],Ja={class:"wrap in"},Qa={class:"fb-mid",id:"fbMid"},Za=["disabled"],ni='<path d="M19 12H5M11 18l-6-6 6-6"/>',pi={__name:"PackagesGiftsView",setup(V){const i=U(null),{current:y,openPicker:k,requireLocation:l,locations:t,loadServiceLocations:e}=Ln();e();const{requireAuth:h}=In(),{state:g,pkgOf:u,bkDays:d,gCanNext:f,gNextLabel:v,bkCanNext:M,bkNextLabel:N,startGift:_,startBook:$,backToPackages:x}=H();Dn(Qn,"packages-gifts"),Nn(i);const E=U(!1),Y=U(""),q=U(!1);function R(A){Y.value=A,q.value=!0,clearTimeout(R._h),R._h=setTimeout(()=>{q.value=!1},2600)}const O=w(()=>g.page==="book"),ln=w(()=>O.value?!(g.bk.done||g.bk.step>=2):g.page==="gift"&&!g.done&&g.gstep!==4),dn=w(()=>O.value?!0:g.gstep!==0),an=w(()=>{const A=O.value?g.bk.pkg:g.gpkg;return A?u(A):null}),sn=w(()=>O.value?M.value:f.value),P=w(()=>O.value?N.value:v.value);function F(){if(O.value){if(g.bk.step===0){x();return}g.bk.step--}else{if(g.gstep===0){x();return}g.gstep--}scrollTo({top:0,behavior:"smooth"})}function B(){if(sn.value){if(O.value)g.bk.step++;else{if(g.gstep===3){Q();return}g.gstep++}scrollTo({top:0,behavior:"smooth"})}}function Q(){h(async()=>{var A,b,C,D,Z;E.value=!0;try{const L=await qn({packages:[{id:g.gpkg}],location:{recipient_name:g.name.trim(),recipient_mobile:g.phone.trim(),message:g.msg.trim()||void 0},design:g.design,branch:g.siteBranch||null,send_channel:g.method||"link"}),X=g.pay==="wallet",nn=Math.max(Number((A=u(g.gpkg))==null?void 0:A.price)||0,0),pn=nn+Math.round(nn*.15);await un(X?"card":"cod",{wallet:X,walletAmount:X?pn:void 0}),g.ref=(b=L==null?void 0:L.data)!=null&&b.gift_card_id?`#GIFT-${L.data.gift_card_id}`:"#GIFT",g.claimUrl=((C=L==null?void 0:L.data)==null?void 0:C.share_url)||((D=L==null?void 0:L.data)==null?void 0:D.claim_url)||null,g.claimToken=((Z=L==null?void 0:L.data)==null?void 0:Z.claim_token)||null,g.done=!0,g.gstep=4,scrollTo({top:0,behavior:"smooth"})}catch(L){console.error("Package gift error:",L),R((L==null?void 0:L.message)||"تعذر إنشاء الهدية، حاول مرة أخرى")}finally{E.value=!1}})}function $n(A){return`${A.getFullYear()}-${String(A.getMonth()+1).padStart(2,"0")}-${String(A.getDate()).padStart(2,"0")}`}function zn(){h(async()=>{var A,b;E.value=!0;try{const C=g.bk,D=d()[C.dayIdx];await Kn({package_id:C.pkg,branch_id:C.branch,date:$n(D),time:C.time,employee_id:(A=C.employee)==null?void 0:A.id,notes:C.notes||void 0});const Z=Math.max(Number((b=u(C.pkg))==null?void 0:b.price)||0,0),L=Z+Math.round(Z*.15),X=C.useWallet?Math.min(Math.max(Number(C.walletAmount)||0,0),Number(C.walletBalance)||0,L):0,nn=C.useLoyalty&&parseInt(C.loyaltyPointsUsed,10)||0,pn=C.pay==="cash"?"cod":C.pay==="urpay"?"urpay":"card",En=await un(pn,{wallet:X>0,walletAmount:X,loyalty:nn>0,loyaltyPoints:nn});g.bk.ref=En.invoice_id||null,g.bk.done=!0,scrollTo({top:0,behavior:"smooth"})}catch(C){R(C.message||"تعذّر إتمام الحجز، حاول مرة أخرى")}finally{E.value=!1}})}function cn(){y.value&&(g.siteBranch=y.value.id)}function Mn(A){$(A)}function Cn(A){l(()=>{cn(),_("pkg",A)})}function Fn(){l(()=>{cn(),_(null,null)})}function Bn(){g.done=!1,g.gstep=0,g.gtype=null,g.gpkg=null,g.pay=null,g.ref=null,scrollTo({top:0,behavior:"smooth"})}function xn(){location.href="/"}return(A,b)=>{const C=hn("RouterLink");return a(),s("div",{ref_key:"root",ref:i},[n("div",Pa,[n("div",Da,[r(g).page==="packages"?(a(),W(vr,{key:0,onBook:Mn,onGift:Cn,onGiftNow:Fn,onPickBranch:r(k)},null,8,["onPickBranch"])):r(g).page==="book"?(a(),s(z,{key:1},[c(_r),r(g).bk.done?(a(),s("div",Na,[c(oe,{onHome:xn,onCalendar:b[0]||(b[0]=D=>R("تمت إضافة الموعد إلى التقويم")),onShare:b[1]||(b[1]=D=>R("تم نسخ رابط الحجز للمشاركة"))})])):(a(),s("div",Ta,[n("main",Ha,[r(g).bk.step===0?(a(),W(Tr,{key:0})):r(g).bk.step===1?(a(),W(dt,{key:1})):(a(),W(Et,{key:2,onPay:zn}))]),n("aside",Va,[c(_e)])]))],64)):(a(),s(z,{key:2},[c(Be),r(g).done?(a(),s("div",Ya,[c(ta,{onRecipient:b[2]||(b[2]=D=>r(g).claimUrl&&(A.location.href=r(g).claimUrl)),onNewGift:Bn,onCopySelf:b[3]||(b[3]=D=>R("تم إرسال نسخة من الهدية إلى بريدك")),onShare:b[4]||(b[4]=D=>R("تم نسخ رابط الهدية للمشاركة")),onHome:xn})])):(a(),s("div",ja,[n("main",Ga,[r(g).gstep===0?(a(),W(Te,{key:0})):r(g).gstep===1?(a(),W(Xe,{key:1})):r(g).gstep===2?(a(),W(vo,{key:2})):(a(),W(zo,{key:3}))]),n("aside",Ra,[c(Ia)])]))],64))])]),n("footer",null,[n("div",Wa,[n("div",Oa,[n("div",Ua,[c(C,{class:"logo",to:"/"},{default:j(()=>[...b[5]||(b[5]=[n("span",{class:"mark"},[n("img",{src:Pn,alt:"عناية سامي",style:{width:"29px",height:"29px","object-fit":"contain"}})],-1),n("span",{class:"name"},[n("b",null,"عناية سامي"),n("span",null,"SAMI CARE")],-1)])]),_:1}),b[6]||(b[6]=tn('<p>مركز متخصص في العناية الرجالية المتكاملة بجدة، حيث تلتقي الفخامة بالاحترافية في كل تفصيلة.</p><div class="socials"><a href="https://x.com/samicare_sa" aria-label="X"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-6.8 7.8L23.3 22h-6.3l-4.9-6.4L6.5 22H3.4l7.3-8.3L1 2h6.5l4.4 5.8L18.9 2zm-1.1 18h1.7L7.1 3.9H5.3L17.8 20z"></path></svg></a><a href="https://www.instagram.com/samicare.sa/" aria-label="انستقرام"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1" fill="currentColor"></circle></svg></a><a href="https://www.facebook.com/samicare.sa" aria-label="فيسبوك"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg></a></div>',2))]),n("div",null,[b[12]||(b[12]=n("h4",null,"روابط مهمة",-1)),n("ul",Ka,[n("li",null,[c(C,{to:"/"},{default:j(()=>[...b[7]||(b[7]=[p("الرئيسية",-1)])]),_:1})]),n("li",null,[c(C,{to:"/booking"},{default:j(()=>[...b[8]||(b[8]=[p("حجز موعد",-1)])]),_:1})]),n("li",null,[c(C,{to:"/#services"},{default:j(()=>[...b[9]||(b[9]=[p("خدماتنا",-1)])]),_:1})]),n("li",null,[c(C,{to:"/packages-gifts"},{default:j(()=>[...b[10]||(b[10]=[p("الباقات",-1)])]),_:1})]),n("li",null,[c(C,{to:"/gifts"},{default:j(()=>[...b[11]||(b[11]=[p("الهدايا",-1)])]),_:1})])])]),n("div",null,[b[18]||(b[18]=n("h4",null,"استكشف",-1)),n("ul",qa,[n("li",null,[c(C,{to:"/store"},{default:j(()=>[...b[13]||(b[13]=[p("المتجر",-1)])]),_:1})]),n("li",null,[c(C,{to:"/branches"},{default:j(()=>[...b[14]||(b[14]=[p("فروعنا",-1)])]),_:1})]),n("li",null,[c(C,{to:"/contact"},{default:j(()=>[...b[15]||(b[15]=[p("تواصل معنا",-1)])]),_:1})]),n("li",null,[c(C,{to:"/terms"},{default:j(()=>[...b[16]||(b[16]=[p("الشروط والأحكام",-1)])]),_:1})]),n("li",null,[c(C,{to:"/privacy-policy"},{default:j(()=>[...b[17]||(b[17]=[p("سياسة الخصوصية",-1)])]),_:1})])])]),n("div",null,[b[19]||(b[19]=n("h4",null,"عناوين الفروع",-1)),(a(!0),s(z,null,I(r(t),D=>(a(),s("div",{key:D.id,class:"f-branch"},[n("b",null,o(D.name),1),n("small",null,o(D.address),1),D.contact_number?(a(),s("a",{key:0,href:`tel:${D.contact_number}`},o(D.contact_number),9,Xa)):G("",!0)]))),128)),b[20]||(b[20]=n("div",{class:"f-branch"},[n("b",null,"خدمات منزلية"),n("small",null,"حلاقة شعر ولحية وماسكات طبيعية")],-1))])]),b[21]||(b[21]=tn('<div class="f-bottom"><small>© 2026 عناية سامي — جميع الحقوق محفوظة</small><div class="pay" aria-label="بوابات الدفع"><span title="Visa">VISA</span><span title="Mastercard">Mastercard</span><span title="مدى">mada</span><span title="Tabby">tabby</span><span title="Apple Pay">Pay</span></div></div>',1))])]),n("div",{class:S(["footbar",{on:ln.value}]),id:"footbar"},[n("div",Ja,[n("button",{class:"btn btn-back",id:"btnBack",style:K({visibility:dn.value?"visible":"hidden"}),onClick:F},[...b[22]||(b[22]=[n("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[n("path",{d:"M5 12h14M13 6l6 6-6 6"})],-1),p(" السابق ",-1)])],4),n("div",Qa,[an.value?(a(),s(z,{key:0},[b[23]||(b[23]=p("الإجمالي ",-1)),n("b",null,o(r(T)(an.value.price))+" ر.س",1),b[24]||(b[24]=p(" — 🔒 بياناتك محمية وآمنة",-1))],64)):(a(),s(z,{key:1},[p("🔒 بياناتك محمية وآمنة")],64))]),n("button",{class:"btn btn-gold",id:"btnNext",disabled:!sn.value,onClick:B},[p(o(P.value)+" ",1),c(m,{inner:ni,size:15})],8,Za)])],2),n("div",{class:S(["pay-loading",{on:E.value}]),id:"payLoading"},[...b[25]||(b[25]=[n("div",{class:"pl-box"},[n("div",{class:"pl-ring"}),n("b",null,"جارٍ إتمام الإهداء بأمان…"),n("small",null,"سيتم إرسال الهدية مباشرة بعد إتمام الدفع")],-1)])],2),n("div",{class:S(["toast",{on:q.value}]),id:"toast"},o(Y.value),3)],512)}}};export{pi as default};
