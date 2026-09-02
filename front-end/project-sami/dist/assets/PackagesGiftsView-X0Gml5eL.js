import{i as M,o,c as a,m as K,b as n,u as r,F as z,a as g,t as e,e as S,x as V,n as F,q as H,d as x,N as m,p as N,r as T,v as dn,G as Cn,z as pn,B as U,I as q,y as j,_ as gn,U as Fn,h as Bn,s as En,M as Sn}from"./index-Vk1P3ydW.js";import{u as An,a as In}from"./useInternalLinks-2Kkcr9fM.js";import{u as L,B as Ln,a as Dn,A as Pn,b as Hn,f as W,c as X,r as Y,d as cn,G as jn,e as Yn,D as xn,S as J,P as Nn}from"./usePackages-C45WwErx.js";import{f as Tn,a as Vn,i as on,d as Gn}from"./bookingApi-Cq6kQ7bP.js";import{G as fn,c as Rn}from"./GiftCard-CoVl8PH_.js";import{_ as an}from"./SkeletonLoader-BqmQIqPp.js";import{f as On}from"./accountApi-C0csBSaT.js";import"./i18nField-CJ_3XKph.js";const Un=`\r
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
`,qn="/images/generated/packages/complete-care-hq.png",Kn={class:"branch-gate"},Wn={class:"ph"},Xn=["src","alt"],Qn={class:"body"},Jn={class:"dur"},Zn={class:"desc"},nr={class:"inc"},rr={class:"price"},tr={class:"acts"},er=["data-book","onClick"],or=["data-gift","onClick"],ar={class:"gift-banner"},ir={class:"txt"},sr={class:"mini-feats"},lr={class:"mi"},dr={class:"cta"},pr={class:"perks"},gr={class:"pi"},cr={__name:"PackagesCatalog",emits:["book","gift","gift-now","pick-branch"],setup(D,{emit:i}){const{state:_,filteredPkgs:k}=L(),l=i,t=u=>u.toLocaleString("ar-EG-u-nu-latn"),p=M(()=>{const u=Ln.find(h=>h.id===_.siteBranch);return u?u.name:""}),v=M(()=>`grid-template-columns:repeat(${Math.min(k.value.length,5)},1fr)`),c={clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',gift:'<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7s-2-5-5-5-3 5 0 5h5zM12 7s2-5 5-5 3 5 0 5h-5z"/>'},b=[["بطاقة إهداء رقمية",'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>'],["رسالة مخصصة من قلبك",'<path d="M21 11.5a8.4 8.4 0 01-9 8.4 8.5 8.5 0 01-3.8-.9L3 21l2-5.2a8.4 8.4 0 011.5-9.8 8.5 8.5 0 0114.5 5.5z"/>'],["إرسال فوري عبر واتساب أو بريد",'<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>'],["جدولة الإهداء في الوقت المناسب",'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>']],s=[["غرفة VIP خاصة","لباقات مختارة",'<path d="M2 8l4 4 6-8 6 8 4-4v10a2 2 0 01-2 2H4a2 2 0 01-2-2z"/>'],["منتجات فاخرة","ضمن باقاتك",'<path d="M20 12v9H4v-9M2 7h20v5H2z"/>'],["أولوية في الحجز","مواعيد مرنة",'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4"/>'],["ضيافة فاخرة","مشروبات مختارة",'<path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4z"/>'],["نقاط ولاء مضاعفة","مع كل باقة",'<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7"/>'],["ضمان الجودة","أفضل تجربة",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>']];return(u,h)=>(o(),a(z,null,[h[15]||(h[15]=K('<section class="pk-hero"><div class="bg"><img src="'+qn+'" alt=""></div><svg class="ghost-logo" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width=".8"><path d="M12 2l9 5v10l-9 5-9-5V7z"></path><path d="M12 2v20M3 7l9 5 9-5M3 17l9-5 9 5"></path></svg><div class="in"><div class="eyebrow">تجارب متكاملة</div><h1>لراحتـك وأناقتـك</h1><p>اختر الباقة التي تناسب احتياجاتك واستمتع بتجربة عناية متكاملة توفر عليك الوقت والجهد</p></div></section>',1)),n("div",Kn,[r(_).siteBranch?(o(),a(z,{key:0},[n("span",null,[h[3]||(h[3]=g("📍 الفرع المختار: ",-1)),n("b",null,e(p.value),1)]),n("button",{id:"branchGateChange",onClick:h[0]||(h[0]=$=>l("pick-branch"))},"تغيير الفرع")],64)):(o(),a(z,{key:1},[h[4]||(h[4]=n("span",null,"حدد فرعك أولًا لعرض الأسعار والمواعيد المتاحة بدقة",-1)),n("button",{id:"branchGateChange",class:"primary",onClick:h[1]||(h[1]=$=>l("pick-branch"))},"اختر الفرع")],64))]),n("div",{class:"pkgs",style:V(v.value)},[(o(!0),a(z,null,S(r(k),($,P)=>(o(),a("article",{key:$.id,class:F(["pkg",{hot:$.hot}]),style:V(`--pc:${$.color};animation-delay:${P*.07}s`)},[n("div",Wn,[n("img",{src:$.img,alt:$.name},null,8,Xn),$.hot?(o(),a(z,{key:0},[h[5]||(h[5]=n("span",{class:"hotflag"},"الأكثر طلبًا",-1)),h[6]||(h[6]=n("span",{class:"starflag"},"★",-1))],64)):H("",!0)]),n("span",{class:"badge",style:V(`border-color:${$.hex}`)},[x(m,{inner:$.ico,size:22},null,8,["inner"])],4),n("div",Qn,[n("h3",null,e($.name),1),n("div",Jn,[x(m,{inner:c.clock,size:13},null,8,["inner"]),g(" "+e($.dur)+" دقيقة",1)]),n("div",Zn,e($.desc),1),n("div",nr,[h[8]||(h[8]=n("b",null,"تشمل الباقة",-1)),n("ul",null,[(o(!0),a(z,null,S($.inc,(y,w)=>(o(),a("li",{key:w},[h[7]||(h[7]=n("i",null,"✓",-1)),g(e(y),1)]))),128))])]),n("div",rr,[g(e(t($.price))+" ",1),h[9]||(h[9]=n("small",null,"ر.س",-1))]),n("div",tr,[n("button",{class:"book","data-book":$.id,onClick:y=>l("book",$.id)},"احجز الباقة",8,er),n("button",{class:"gift-mini","data-gift":$.id,onClick:y=>l("gift",$.id)},[x(m,{inner:c.gift,size:14},null,8,["inner"]),h[10]||(h[10]=g(" أهدِ هذه الباقة",-1))],8,or)])])],6))),128))],4),n("section",ar,[h[14]||(h[14]=n("div",{class:"gb-box"},[n("div",{class:"face"}),n("span",{class:"tag"},"هدية لكم من القلب 💛")],-1)),n("div",ir,[h[11]||(h[11]=n("h2",null,"أهدِ تجربة فاخرة لمن تحب",-1)),h[12]||(h[12]=n("p",null,"اختر الباقة، أضف رسالة مخصصة، وسيصلك المهدى إليه بشكل أنيق في الوقت المناسب",-1)),n("div",sr,[(o(),a(z,null,S(b,($,P)=>n("div",{key:P,class:"mf"},[n("span",lr,[x(m,{inner:$[1],size:16},null,8,["inner"])]),g(e($[0]),1)])),64))])]),n("div",dr,[n("button",{class:"btn btn-gold",id:"giftNow",onClick:h[2]||(h[2]=$=>l("gift-now"))},[x(m,{inner:c.gift,size:16},null,8,["inner"]),h[13]||(h[13]=g(" أهدِ باقة الآن",-1))])])]),n("div",pr,[(o(),a(z,null,S(s,($,P)=>n("div",{key:P,class:"perk"},[n("span",gr,[x(m,{inner:$[2],size:17},null,8,["inner"])]),n("b",null,e($[0]),1),n("small",null,e($[1]),1)])),64))])],64))}},xr={class:"g-stepper"},fr={class:"g-steps"},ur=["data-bi"],br={class:"bubble"},vr='<path d="M20 6L9 17l-5-5"/>',mr={__name:"BookStepper",setup(D){const{state:i}=L();return(_,k)=>(o(),a("div",xr,[n("div",fr,[(o(!0),a(z,null,S(r(Dn),(l,t)=>(o(),a("div",{key:t,class:F(["g-step",{active:t===r(i).bk.step&&!r(i).bk.done,done:t<r(i).bk.step||r(i).bk.done}]),"data-bi":t},[k[0]||(k[0]=n("div",{class:"bar"},[n("i")],-1)),n("span",br,[t<r(i).bk.step||r(i).bk.done?(o(),N(m,{key:0,inner:vr,size:17})):(o(),a(z,{key:1},[g(e(t+1),1)],64))]),n("b",null,e(l.t),1),n("small",null,e(l.s),1)],10,ur))),128))])]))}},hr={class:"g-head"},kr={class:"card",style:{padding:"20px","margin-bottom":"16px"}},yr={class:"daystrip"},wr=["data-bd","onClick"],_r={key:0,class:"card",style:{padding:"20px"}},zr={key:1,class:"card",style:{padding:"20px"}},$r={class:"periods"},Mr=["data-bp","onClick"],Cr={key:1,class:"slots"},Fr=["data-bt","onClick"],Br={key:0,class:"tag"},Er={key:2,class:"card",style:{padding:"40px","text-align":"center",color:"var(--mute)","font-size":"13.5px"}},sn="grid-column:1/-1;text-align:center;color:var(--mute);padding:30px;border:1.5px dashed var(--line);border-radius:14px;font-size:13px",Sr="font-family:var(--font-d);font-size:15px;color:var(--ink);margin-bottom:12px",Ar="font-family:var(--font-d);font-size:15px;color:var(--ink);margin-bottom:4px",Ir={__name:"BookTimeStep",setup(D){const{state:i,pkgOf:_,bkDays:k}=L(),l=i.bk,t=k(),p=M(()=>_(l.pkg)),v=T(!0),c=T([]),b=T(!1);function s(y){return`${y.getFullYear()}-${String(y.getMonth()+1).padStart(2,"0")}-${String(y.getDate()).padStart(2,"0")}`}dn(async()=>{if(l.employee){v.value=!1;return}try{const y=await Tn({branchId:l.branch,serviceId:0}),w=(Array.isArray(y)?y:[])[0];w&&(l.employee={id:w.id,name:[w.first_name,w.last_name].filter(Boolean).join(" ")||"موظف"})}catch{l.employee=null}finally{v.value=!1}});async function u(){var y;if(l.dayIdx==null||!l.employee){c.value=[];return}b.value=!0;try{const w=await Vn({date:s(t[l.dayIdx]),staffId:l.employee.id,durationMin:(y=p.value)==null?void 0:y.dur});c.value=Array.isArray(w)?w:[]}catch{c.value=[]}finally{b.value=!1}}Cn(()=>{var y;return[l.dayIdx,(y=l.employee)==null?void 0:y.id]},u);const h=M(()=>c.value.filter(y=>{const w=Number(y.split(":")[0]);return l.period==="all"||l.period==="am"&&w<12||l.period==="pm"&&w>=12&&w<17||l.period==="eve"&&w>=17})),$=y=>y===2?"الأكثر طلبًا":y===h.value.length-1?"آخر موعد":"",P=[["all","كل اليوم","🗓️"],["am","صباحًا","☀️"],["pm","مساءً","🌇"]];return(y,w)=>(o(),a(z,null,[n("div",hr,[w[0]||(w[0]=n("h1",null,"اختر الوقت والتاريخ",-1)),n("p",null,"اختر الوقت المناسب لك — مدة الباقة "+e(p.value.dur)+" دقيقة",1)]),n("div",kr,[n("h4",{style:Sr},"📅 اختر اليوم"),n("div",yr,[(o(!0),a(z,null,S(r(t),(d,C)=>(o(),a("div",{key:C,class:F(["day",{sel:r(l).dayIdx===C}]),"data-bd":C,onClick:O=>{r(l).dayIdx=C,r(l).time=null}},[n("small",null,e(r(Pn)[d.getDay()]),1),n("b",null,e(d.getDate()),1),n("small",null,e(r(Hn)[d.getMonth()]),1)],10,wr))),128))])]),v.value?(o(),a("div",_r,[x(an,{height:"72px","border-radius":"12px"})])):r(l).dayIdx!=null?(o(),a("div",zr,[n("h4",{style:Ar},"🕐 "+e(r(W)(r(t)[r(l).dayIdx])),1),n("div",$r,[(o(),a(z,null,S(P,d=>n("button",{key:d[0],class:F(["period",{sel:r(l).period===d[0]}]),"data-bp":d[0],onClick:C=>r(l).period=d[0]},e(d[2])+" "+e(d[1]),11,Mr)),64))]),b.value?(o(),a("div",{key:0,style:sn},[x(an,{height:"44px","border-radius":"10px"})])):(o(),a("div",Cr,[h.value.length?(o(!0),a(z,{key:0},S(h.value,(d,C)=>(o(),a("button",{key:d,class:F(["slot",{sel:r(l).time===d}]),"data-bt":d,style:V(`animation-delay:${Math.min(C*.03,.4)}s`),onClick:O=>r(l).time=d},[$(C)?(o(),a("span",Br,e($(C)),1)):(o(),a(z,{key:1},[],64)),g(e(r(X)(d)),1)],14,Fr))),128)):(o(),a("div",{key:1,style:sn},"لا توجد أوقات متاحة في هذه الفترة"))]))])):(o(),a("div",Er,[...w[1]||(w[1]=[n("b",{style:{display:"block","font-family":"var(--font-d)","font-size":"16px",color:"var(--ink)","margin-bottom":"6px"}},"ابدأ باختيار اليوم",-1),g("اختر يومًا من الشريط أعلاه لعرض الأوقات المتاحة",-1)])]))],64))}},Lr={class:"ok-banner"},Dr={class:"ic"},Pr=["src","alt"],Hr={class:"t"},jr={class:"incs"},Yr={class:"pr"},Nr={class:"card bk-rows",style:{"margin-bottom":"16px"}},Tr={class:"gs-row"},Vr={class:"k"},Gr={class:"v"},Rr={class:"gs-row"},Or={class:"k"},Ur={class:"v"},qr={class:"gs-row"},Kr={class:"k"},Wr={class:"v",dir:"ltr"},Xr={class:"gs-row"},Qr={class:"k"},Jr={class:"v"},Zr={class:"card",style:{padding:"20px"}},nt={class:"fld",style:{margin:"0"}},rt="font-size:12px;color:var(--mute);font-family:var(--font-b)",tt="display:flex;gap:9px;align-items:center;font-size:12px;color:var(--mute);background:rgba(198,161,91,.08);border-radius:11px;padding:11px 15px;margin-top:14px",et="color:var(--gold-deep);font-weight:600;text-decoration:underline",ot={__name:"BookConfirmStep",setup(D){const{state:i,pkgOf:_,bkDays:k}=L(),l=i.bk,t=M(()=>_(l.pkg)),p=M(()=>k()[l.dayIdx]),v={check:'<path d="M20 6L9 17l-5-5"/>',pin:'<path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>',cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>'};return(c,b)=>{const s=pn("RouterLink");return o(),a(z,null,[b[9]||(b[9]=n("div",{class:"g-head"},[n("h1",null,"تأكيد الحجز"),n("p",null,"راجع تفاصيل الحجز قبل المتابعة للدفع")],-1)),n("div",Lr,[n("span",Dr,[x(m,{inner:v.check,size:16},null,8,["inner"])]),b[1]||(b[1]=n("div",null,[n("b",null,"تم حفظ موعدك بنجاح"),n("small",null,"يمكنك تعديل أو إلغاء الحجز قبل 6 ساعات من وقت الموعد")],-1))]),n("div",{class:"card bk-pkg-hero",style:V(`--pc:${t.value.color}`)},[n("img",{src:t.value.img,alt:t.value.name},null,8,Pr),n("div",Hr,[n("h4",null,e(t.value.name),1),n("small",null,"🕐 "+e(t.value.dur)+" دقيقة — "+e(t.value.desc),1),n("div",jr,[(o(!0),a(z,null,S(t.value.inc,(u,h)=>(o(),a("span",{key:h},"✓ "+e(u),1))),128))])]),n("div",Yr,[g(e(r(Y)(t.value.price))+" ",1),n("small",{style:rt},"ر.س")])],4),n("div",Nr,[n("div",Tr,[n("span",Vr,[x(m,{inner:v.pin,size:15},null,8,["inner"]),b[2]||(b[2]=g(" الفرع",-1))]),n("span",Gr,e(t.value.branchName),1)]),n("div",Rr,[n("span",Or,[x(m,{inner:v.cal,size:15},null,8,["inner"]),b[3]||(b[3]=g(" التاريخ",-1))]),n("span",Ur,e(r(W)(p.value)),1)]),n("div",qr,[n("span",Kr,[x(m,{inner:v.clock,size:15},null,8,["inner"]),b[4]||(b[4]=g(" الوقت",-1))]),n("span",Wr,e(r(X)(r(l).time)),1)]),n("div",Xr,[n("span",Qr,[x(m,{inner:v.info,size:15},null,8,["inner"]),b[5]||(b[5]=g(" مدة الجلسة",-1))]),n("span",Jr,e(t.value.dur)+" دقيقة",1)])]),n("div",Zr,[n("div",nt,[b[6]||(b[6]=n("label",null,"📝 ملاحظات (اختياري)",-1)),U(n("textarea",{id:"bkNotes",placeholder:"أضف أي ملاحظة...","onUpdate:modelValue":b[0]||(b[0]=u=>r(l).notes=u)},null,512),[[q,r(l).notes]])]),n("div",{style:tt},[b[8]||(b[8]=g(" 🛡️ بالتأكيد على الحجز، فإنك توافق على ",-1)),x(s,{to:"/terms",style:et},{default:j(()=>[...b[7]||(b[7]=[g("الشروط والأحكام",-1)])]),_:1})])])],64)}}},at={class:"card pay-summary-strip"},it={class:"amt"},st={class:"card",style:{padding:"20px"}},lt={class:"bk-pays"},dt=["data-bkpay","onClick"],pt={class:"lg"},gt={key:0,style:{color:"#b42318","font-size":"12px","margin-top":"4px"}},ct=["disabled"],xt='<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>',ft="display:flex;gap:8px;align-items:center;justify-content:center;margin-top:14px;font-size:12px;color:var(--mute)",ut={__name:"BookPayStep",emits:["pay"],setup(D,{emit:i}){const{state:_,pkgOf:k,bkDays:l}=L(),t=i,p=_.bk,v=M(()=>k(p.pkg)),c=M(()=>l()[p.dayIdx]),b=["cash","wallet"],s=T(null);dn(async()=>{var y,w;try{const d=await On();s.value=((w=(y=d==null?void 0:d.data)==null?void 0:y.balances)==null?void 0:w.wallet)??0}catch{}});function u(y){return y.id==="wallet"&&s.value!==null?`${y.n} (${Y(s.value)} ر.س)`:y.n}function h(y){b.includes(y.id)&&(p.pay=y.id)}const $=M(()=>p.pay==="wallet"&&s.value!==null&&s.value<v.value.price),P=M(()=>!!p.pay&&!$.value);return(y,w)=>(o(),a(z,null,[w[2]||(w[2]=n("div",{class:"g-head"},[n("h1",null,"اختر طريقة الدفع"),n("p",null,"ادفع بأمان وسهولة")],-1)),n("div",at,[n("b",null,e(v.value.name),1),n("small",null,e(v.value.branchName)+" — "+e(r(W)(c.value))+" • "+e(r(X)(r(p).time)),1),n("span",it,e(r(Y)(v.value.price))+" ر.س",1)]),n("div",st,[n("div",lt,[(o(!0),a(z,null,S(r(cn),d=>(o(),a("div",{key:d.id,class:F(["bkpm",{sel:r(p).pay===d.id,disabled:!b.includes(d.id)}]),"data-bkpay":d.id,onClick:C=>h(d)},[n("span",pt,e(d.logo),1),n("b",null,e(u(d)),1),w[1]||(w[1]=n("span",{class:"rad"},[n("i")],-1))],10,dt))),128)),$.value?(o(),a("p",gt,"رصيد محفظتك لا يكفي لدفع القيمة كاملة، اختر وسيلة دفع أخرى.")):H("",!0)]),n("button",{class:"btn-paynow",id:"bkPayNow",disabled:!P.value,onClick:w[0]||(w[0]=d=>t("pay"))},[x(m,{inner:xt,size:16}),g(" ادفع الآن — "+e(r(Y)(v.value.price))+" ر.س",1)],8,ct),n("div",{style:ft},"🌐 جميع المعاملات مؤمّنة وآمنة")])],64))}},bt=gn(ut,[["__scopeId","data-v-f464f4de"]]),vt={class:"gsuccess"},mt={class:"gsuc-grid"},ht={class:"card gsuc-details"},kt={class:"gs-row"},yt={class:"k"},wt={class:"v"},_t={class:"gs-row"},zt={class:"k"},$t={class:"v"},Mt={class:"gs-row"},Ct={class:"k"},Ft={class:"v"},Bt={class:"gs-row"},Et={class:"k"},St={class:"v",dir:"ltr"},At={class:"gs-row"},It={class:"k"},Lt={class:"v"},Dt={class:"gs-row"},Pt={class:"k"},Ht={class:"gs-row"},jt={class:"k"},Yt={class:"v",dir:"ltr"},Nt={class:"gsuc-actions"},Tt="color:var(--gold-deep);font-family:var(--font-d);font-size:16px",Vt="display:block;margin-top:12px;font-size:11.5px;color:var(--mute)",Gt="display:flex;gap:8px;margin-top:14px",ln="flex:1;padding:11px;font-size:12px",Rt={__name:"BookSuccess",emits:["home","calendar","share"],setup(D,{emit:i}){const{state:_,pkgOf:k,bkDays:l}=L(),t=i,p=_.bk,v=M(()=>k(p.pkg)),c=M(()=>l()[p.dayIdx]),b={box:'<path d="M20 12v10H4V12M2 7h20v5H2z"/>',pin:'<path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>',cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>',card:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',qr:'<path d="M4 4h16v16H4z"/><path d="M9 9h2v2H9zM13 9h2M9 13h2M13 13h2v2h-2z"/>',home:'<path d="M3 9l9-6 9 6v11a1 1 0 01-1 1H4a1 1 0 01-1-1z"/>',calAdd:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M12 14v4M10 16h4"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>'};return(s,u)=>(o(),a("div",vt,[u[16]||(u[16]=K('<div class="gsuc-head"><h1>تم تأكيد حجزك بنجاح!</h1><span class="ic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6L9 17l-5-5"></path></svg></span></div><p class="sub">نتطلع لخدمتك وتقديم تجربة استثنائية تليق بك</p>',2)),n("div",mt,[n("div",ht,[u[10]||(u[10]=n("h4",null,"تفاصيل الحجز",-1)),n("div",kt,[n("span",yt,[x(m,{inner:b.box,size:14},null,8,["inner"]),u[3]||(u[3]=g(" الباقة",-1))]),n("span",wt,e(v.value.name),1)]),n("div",_t,[n("span",zt,[x(m,{inner:b.pin,size:14},null,8,["inner"]),u[4]||(u[4]=g(" الفرع",-1))]),n("span",$t,e(v.value.branchName),1)]),n("div",Mt,[n("span",Ct,[x(m,{inner:b.cal,size:14},null,8,["inner"]),u[5]||(u[5]=g(" التاريخ",-1))]),n("span",Ft,e(r(W)(c.value)),1)]),n("div",Bt,[n("span",Et,[x(m,{inner:b.clock,size:14},null,8,["inner"]),u[6]||(u[6]=g(" الوقت",-1))]),n("span",St,e(r(X)(r(p).time)),1)]),n("div",At,[n("span",It,[x(m,{inner:b.info,size:14},null,8,["inner"]),u[7]||(u[7]=g(" مدة الجلسة",-1))]),n("span",Lt,e(v.value.dur)+" دقيقة",1)]),n("div",Dt,[n("span",Pt,[x(m,{inner:b.card,size:14},null,8,["inner"]),u[8]||(u[8]=g(" المبلغ المدفوع",-1))]),n("span",{class:"v",style:Tt},e(r(Y)(v.value.price))+" ر.س",1)]),n("div",Ht,[n("span",jt,[x(m,{inner:b.qr,size:14},null,8,["inner"]),u[9]||(u[9]=g(" رمز الحجز",-1))]),n("span",Yt,e(r(p).ref),1)])]),n("div",{class:"card gsuc-details",style:{"text-align":"center"}},[u[11]||(u[11]=n("h4",{style:{"text-align":"right"}},"رمز الوصول السريع",-1)),u[12]||(u[12]=n("div",{class:"qr-box"},[n("canvas",{id:"bkQr"})],-1)),n("small",{style:Vt},"📱 امسح الرمز عند الوصول لتسجيل الحضور"),n("div",{style:Gt},[n("button",{class:"btn btn-dark",style:ln},"🍎 Apple Wallet"),n("button",{class:"btn btn-dark",style:ln},"📲 Google Wallet")])])]),n("div",Nt,[n("button",{class:"btn btn-gold",id:"bkHome",onClick:u[0]||(u[0]=h=>t("home"))},[x(m,{inner:b.home,size:15},null,8,["inner"]),u[13]||(u[13]=g(" العودة إلى الرئيسية",-1))]),n("button",{class:"btn btn-line",id:"bkCal",onClick:u[1]||(u[1]=h=>t("calendar"))},[x(m,{inner:b.calAdd,size:15},null,8,["inner"]),u[14]||(u[14]=g(" إضافة إلى التقويم",-1))]),n("button",{class:"btn btn-line",id:"bkShare",onClick:u[2]||(u[2]=h=>t("share"))},[x(m,{inner:b.share,size:15},null,8,["inner"]),u[15]||(u[15]=g(" مشاركة الحجز",-1))])]),u[17]||(u[17]=n("div",{class:"thanks"},[n("i",null,"❦"),g(" جودة تستحقها.. تجربة لا تنساها "),n("i",null,"❦")],-1))]))}},Ot={class:"gsum"},Ut={class:"card"},qt={class:"pkline"},Kt=["src"],Wt={class:"pr"},Xt={key:0,class:"gs-row"},Qt={class:"v"},Jt={key:1,class:"gs-row"},Zt={class:"v"},ne={key:2,class:"gs-row"},re={class:"v"},te={key:3,class:"gs-row"},ee={class:"v"},oe={class:"gs-total"},ae={class:"v"},ie={class:"gs-note"},se={class:"card help-card"},le={class:"hi"},de={__name:"BookSummary",setup(D){const{state:i,pkgOf:_,bkDays:k}=L(),l=i.bk,t=M(()=>_(l.pkg)),p=M(()=>l.dayIdx!=null?k()[l.dayIdx]:null),v=M(()=>{const b=cn.find(s=>s.id===l.pay);return b?b.n:""}),c={shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',head:'<path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>'};return(b,s)=>(o(),a("div",Ot,[n("div",Ut,[s[7]||(s[7]=n("h3",null,"ملخص الحجز",-1)),n("div",qt,[n("img",{src:t.value.img,alt:""},null,8,Kt),n("span",null,[n("b",null,e(t.value.name),1),n("small",null,"🕐 "+e(t.value.dur)+" دقيقة",1),n("small",null,e(t.value.desc),1),n("span",Wt,e(r(Y)(t.value.price))+" ر.س",1)])]),t.value.branchName?(o(),a("div",Xt,[s[0]||(s[0]=n("span",{class:"k"},"📍 الفرع",-1)),n("span",Qt,e(t.value.branchName),1)])):H("",!0),p.value?(o(),a("div",Jt,[s[1]||(s[1]=n("span",{class:"k"},"📅 التاريخ",-1)),n("span",Zt,e(r(W)(p.value)),1)])):H("",!0),r(l).time!=null?(o(),a("div",ne,[s[2]||(s[2]=n("span",{class:"k"},"🕐 الوقت",-1)),n("span",re,e(r(X)(r(l).time)),1)])):H("",!0),r(l).pay?(o(),a("div",te,[s[3]||(s[3]=n("span",{class:"k"},"💳 طريقة الدفع",-1)),n("span",ee,e(v.value),1)])):H("",!0),n("div",oe,[s[5]||(s[5]=n("span",{class:"k"},"الإجمالي",-1)),n("span",ae,[g(e(r(Y)(t.value.price))+" ",1),s[4]||(s[4]=n("small",{style:{"font-size":"13px"}},"ر.س",-1))])]),n("div",ie,[x(m,{inner:c.shield,size:14},null,8,["inner"]),s[6]||(s[6]=g(" حجز آمن — تعديل أو إلغاء مجاني قبل 6 ساعات",-1))])]),n("div",se,[n("span",le,[x(m,{inner:c.head,size:18},null,8,["inner"])]),s[8]||(s[8]=n("b",null,"دعم على مدار الساعة",-1)),s[9]||(s[9]=n("small",null,"نحن هنا لخدمتك",-1)),s[10]||(s[10]=n("a",{href:"https://wa.me/963959415545"},"تواصل معنا",-1))])]))}},pe={class:"g-stepper"},ge={class:"g-steps"},ce=["data-i"],xe={class:"bubble"},fe='<path d="M20 6L9 17l-5-5"/>',ue={__name:"GiftStepper",setup(D){const{state:i}=L();return(_,k)=>(o(),a("div",pe,[n("div",ge,[(o(!0),a(z,null,S(r(jn),(l,t)=>(o(),a("div",{key:t,class:F(["g-step",{active:t===r(i).gstep,done:t<r(i).gstep||r(i).done}]),"data-i":t},[k[0]||(k[0]=n("div",{class:"bar"},[n("i")],-1)),n("span",xe,[t<r(i).gstep||r(i).done?(o(),N(m,{key:0,inner:fe,size:17})):(o(),a(z,{key:1},[g(e(t+1),1)],64))]),n("b",null,e(l.t),1),n("small",null,e(l.s),1)],10,ce))),128))])]))}},be={class:"gtype-grid"},ve=["data-gt","onClick"],me={class:"im"},he=["src"],ke={class:"ic"},ye={class:"bd"},we={class:"go"},_e='<path d="M19 12H5M11 18l-6-6 6-6"/>',ze={__name:"GiftTypeStep",setup(D){const{state:i}=L();return(_,k)=>(o(),a(z,null,[k[0]||(k[0]=n("div",{class:"g-head"},[n("h1",null,"ماذا ترغب بإهدائه؟"),n("p",null,"اختر ما يناسبك لإهداء تجربة مميزة لمن تحب")],-1)),n("div",be,[(o(!0),a(z,null,S(r(Yn),l=>(o(),a("div",{key:l.id,class:F(["gtype",{sel:r(i).gtype===l.id}]),"data-gt":l.id,onClick:t=>r(i).gtype=l.id},[n("div",me,[n("img",{src:l.img,alt:""},null,8,he),n("span",ke,[x(m,{inner:l.ic,size:22},null,8,["inner"])])]),n("div",ye,[n("h3",null,e(l.n),1),n("p",null,e(l.d),1),n("span",we,[g(e(l.btn)+" ",1),x(m,{inner:_e,size:14})])])],10,ve))),128))])],64))}},$e={class:"gp-sort"},Me={class:"gpkgs"},Ce=["data-gp","onClick"],Fe={class:"ph"},Be=["src","alt"],Ee={class:"chk"},Se={class:"bd"},Ae={class:"dur"},Ie={class:"desc"},Le={class:"prc"},De={class:"pick"},Pe={__name:"GiftPickStep",setup(D){const{state:i,packages:_}=L(),k={check:'<path d="M20 6L9 17l-5-5"/>',gift:'<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7s-2-5-5-5-3 5 0 5h5zM12 7s2-5 5-5 3 5 0 5h-5z"/>'},l=M(()=>_.value.slice().sort((t,p)=>i.sort==="low"?t.price-p.price:i.sort==="high"?p.price-t.price:(p.hot?1:0)-(t.hot?1:0)));return(t,p)=>(o(),a(z,null,[p[3]||(p[3]=n("div",{class:"g-head"},[n("h1",null,"اختر الباقة التي ترغب بإهدائها"),n("p",null,"باقات مميزة تمنح تجربة متكاملة من الاسترخاء والعناية")],-1)),n("div",$e,[U(n("select",{id:"gpSort","onUpdate:modelValue":p[0]||(p[0]=v=>r(i).sort=v)},[...p[1]||(p[1]=[n("option",{value:"pop"},"الأكثر مبيعًا",-1),n("option",{value:"low"},"السعر: الأقل أولًا",-1),n("option",{value:"high"},"السعر: الأعلى أولًا",-1)])],512),[[Fn,r(i).sort]]),n("small",null,e(r(_).length)+" باقات متاحة",1)]),n("div",Me,[(o(!0),a(z,null,S(l.value,(v,c)=>(o(),a("div",{key:v.id,class:F(["gpkg",{sel:r(i).gpkg===v.id}]),"data-gp":v.id,style:V(`--pc:${v.color};animation-delay:${c*.06}s`),onClick:b=>r(i).gpkg=v.id},[n("div",Fe,[n("img",{src:v.img,alt:v.name},null,8,Be),n("span",Ee,[x(m,{inner:k.check,size:13},null,8,["inner"])])]),n("div",Se,[n("h4",null,e(v.name),1),n("div",Ae,"🕐 "+e(v.dur)+" دقيقة",1),n("div",Ie,e(v.desc),1),n("div",Le,[g(e(r(Y)(v.price))+" ",1),p[2]||(p[2]=n("small",null,"ر.س",-1))]),n("button",De,[x(m,{inner:k.gift,size:14},null,8,["inner"]),g(" "+e(r(i).gpkg===v.id?"تم الاختيار ✓":"أهدِ هذه الباقة"),1)])])],14,Ce))),128))])],64))}},He={class:"custom-grid"},je={class:"preview-col"},Ye={id:"cardPrev"},Ne={class:"form-col"},Te={class:"card",style:{"margin-bottom":"16px"}},Ve={class:"two"},Ge={class:"fld"},Re={class:"fld"},Oe={class:"fld",style:{"margin-bottom":"4px"}},Ue={class:"card",style:{"margin-bottom":"16px"}},qe={class:"designs"},Ke=["data-d","onClick"],We={class:"dchk"},Xe={class:"card"},Qe={class:"send-opts"},Je={class:"fld",style:{margin:"0"}},Ze={class:"methods",style:{"margin-top":"14px"}},no=["data-m","onClick"],ro={class:"mi"},to={__name:"GiftCustomizeStep",setup(D){const{state:i}=L(),_=M(()=>200-i.msg.length),k={eye:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',user:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',brush:'<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.6 7.6"/><circle cx="11" cy="11" r="2"/>',send:'<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>',check:'<path d="M20 6L9 17l-5-5"/>'};return(l,t)=>(o(),a(z,null,[t[17]||(t[17]=n("div",{class:"g-head"},[n("h1",null,"خصص هديتك لتكون أجمل"),n("p",null,"أضف لمستك الخاصة مع رسالة وتصميم بطاقة الإهداء")],-1)),n("div",He,[n("div",je,[n("h4",null,[x(m,{inner:k.eye,size:16},null,8,["inner"]),t[6]||(t[6]=g(" معاينة بطاقة الإهداء",-1))]),n("div",Ye,[x(fn,{design:r(i).design,recipient:r(i).name,message:r(i).msg},null,8,["design","recipient","message"])])]),n("div",Ne,[n("div",Te,[n("h4",null,[x(m,{inner:k.user,size:16},null,8,["inner"]),t[7]||(t[7]=g(" بيانات المهدى إليه",-1))]),n("div",Ve,[n("div",Ge,[t[8]||(t[8]=n("label",null,"الاسم الكامل",-1)),U(n("input",{id:"gName",placeholder:"أحمد محمد","onUpdate:modelValue":t[0]||(t[0]=p=>r(i).name=p)},null,512),[[q,r(i).name]])]),n("div",Re,[t[9]||(t[9]=n("label",null,"رقم الجوال",-1)),U(n("input",{id:"gPhone",dir:"ltr",placeholder:"05xxxxxxxx","onUpdate:modelValue":t[1]||(t[1]=p=>r(i).phone=p)},null,512),[[q,r(i).phone]])])]),n("div",Oe,[t[10]||(t[10]=n("label",null,"الرسالة الشخصية",-1)),U(n("textarea",{id:"gMsg",maxlength:"200",placeholder:"اكتب رسالتك من القلب...","onUpdate:modelValue":t[2]||(t[2]=p=>r(i).msg=p)},null,512),[[q,r(i).msg]]),n("span",{class:F(["cnt",{max:_.value<20}]),id:"gCnt"},e(r(i).msg.length)+"/200",3)])]),n("div",Ue,[n("h4",null,[x(m,{inner:k.brush,size:16},null,8,["inner"]),t[11]||(t[11]=g(" تصميم بطاقة الإهداء",-1))]),n("div",qe,[(o(!0),a(z,null,S(r(xn),p=>(o(),a("div",{key:p.id,class:F(["design",{sel:r(i).design===p.id}]),"data-d":p.id,onClick:v=>r(i).design=p.id},[n("div",{class:"sw",style:V(`background:${p.bg};color:${p.fg}`)},[n("span",We,[x(m,{inner:k.check,size:10},null,8,["inner"])]),t[12]||(t[12]=g("SAMI",-1))],4),n("small",null,e(p.n),1)],10,Ke))),128))])]),n("div",Xe,[n("h4",null,[x(m,{inner:k.send,size:16},null,8,["inner"]),t[13]||(t[13]=g(" طريقة الإرسال",-1))]),n("div",Qe,[n("span",{class:F(["ro",{on:r(i).when==="now"}]),"data-w":"now",onClick:t[3]||(t[3]=p=>r(i).when="now")},[...t[14]||(t[14]=[n("i",null,null,-1),g(" إرسال الآن",-1)])],2),n("span",{class:F(["ro",{on:r(i).when==="later"}]),"data-w":"later",onClick:t[4]||(t[4]=p=>r(i).when="later")},[...t[15]||(t[15]=[n("i",null,null,-1),g(" 📅 جدولة لاحقًا",-1)])],2)]),n("div",{class:F(["sched-box",{open:r(i).when==="later"}])},[n("div",Je,[t[16]||(t[16]=n("label",null,"موعد الإرسال",-1)),U(n("input",{type:"datetime-local",id:"gSched","onUpdate:modelValue":t[5]||(t[5]=p=>r(i).schedDate=p)},null,512),[[q,r(i).schedDate]])])],2),n("div",Ze,[(o(!0),a(z,null,S(r(J),p=>(o(),a("div",{key:p.id,class:F(["mth",{sel:r(i).method===p.id}]),"data-m":p.id,onClick:v=>r(i).method=p.id},[n("span",ro,[x(m,{inner:p.ic,size:17},null,8,["inner"])]),g(e(p.n),1)],10,no))),128))])])])])],64))}},eo={class:"card",style:{padding:"22px","margin-bottom":"16px"}},oo={class:"pay-methods"},ao=["data-pay","onClick"],io={class:"pmi"},so={class:"cf-box"},lo={class:"secure-strip"},po="font-family:var(--font-d);font-size:16px;color:var(--ink);margin-bottom:16px",go={__name:"GiftPayStep",setup(D){const{state:i}=L(),_=M(()=>i.pay==="card"||i.pay==="mada"),k={check:'<path d="M20 6L9 17l-5-5"/>',shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'};return(l,t)=>(o(),a(z,null,[t[8]||(t[8]=n("div",{class:"g-head"},[n("h1",null,[g("أكمل الدفع لإرسال هديتك "),n("span",{class:"lock"},"🔒")]),n("p",null,"بيانات دفع آمنة ومشفرة بالكامل")],-1)),n("div",eo,[n("h4",{style:po},"اختر طريقة الدفع"),n("div",oo,[(o(!0),a(z,null,S(r(Nn),p=>(o(),a("div",{key:p.id,class:F(["pm",{sel:r(i).pay===p.id}]),"data-pay":p.id,onClick:v=>r(i).pay=p.id},[t[1]||(t[1]=n("span",{class:"rad"},[n("i")],-1)),n("span",io,e(p.logo),1),n("b",null,e(p.n),1),n("small",null,e(p.d),1)],10,ao))),128))]),n("div",{class:F(["card-form",{open:_.value}])},[n("div",so,[t[3]||(t[3]=n("h5",null,"بيانات البطاقة",-1)),t[4]||(t[4]=n("div",{class:"two"},[n("div",{class:"fld"},[n("label",null,"رقم البطاقة"),n("input",{dir:"ltr",inputmode:"numeric",placeholder:"•••• •••• •••• ••••"})]),n("div",{class:"fld"},[n("label",null,"الاسم على البطاقة"),n("input",{placeholder:"الاسم كما هو على البطاقة"})])],-1)),t[5]||(t[5]=n("div",{class:"two"},[n("div",{class:"fld",style:{margin:"0"}},[n("label",null,"تاريخ الانتهاء"),n("input",{dir:"ltr",placeholder:"MM / YY"})]),n("div",{class:"fld",style:{margin:"0"}},[n("label",null,"رمز الأمان (CVV)"),n("input",{dir:"ltr",inputmode:"numeric",placeholder:"•••"})])],-1)),n("span",{class:F(["save-card",{on:r(i).saveCard}]),id:"saveCard",onClick:t[0]||(t[0]=p=>r(i).saveCard=!r(i).saveCard)},[n("i",null,[x(m,{inner:k.check,size:11},null,8,["inner"])]),t[2]||(t[2]=g(" حفظ البطاقة لاستخدامها لاحقًا",-1))],2)])],2),n("div",lo,[x(m,{inner:k.shield,size:15},null,8,["inner"]),t[6]||(t[6]=g(" جميع بيانات الدفع محمية بتقنية تشفير آمنة ومعتمدة",-1))]),t[7]||(t[7]=n("div",{class:"after-pay"},"سيتم إرسال الهدية مباشرة بعد إتمام الدفع",-1))])],64))}},co={class:"gsuccess"},xo={class:"gsuc-grid"},fo={class:"gsuc-card-col"},uo={class:"card gsuc-details"},bo={class:"gs-row"},vo={class:"k"},mo={class:"v"},ho={class:"gs-row"},ko={class:"k"},yo={class:"v"},wo={class:"gs-row"},_o={class:"k"},zo={class:"v",dir:"ltr"},$o={class:"gs-row"},Mo={class:"k"},Co={class:"v"},Fo={class:"chip"},Bo={class:"gs-row"},Eo={class:"k"},So={class:"gs-row"},Ao={class:"k"},Io={class:"v",dir:"ltr"},Lo={class:"gsuc-actions"},Do={key:0,class:"gift-share-panel"},Po={class:"gift-share-row"},Ho=["value"],jo={key:0},Yo="display:flex;gap:10px;align-items:center;background:var(--green-bg);border-radius:12px;padding:13px 15px;margin-top:14px;font-size:12.5px;color:#1E6B41",No="flex:none;width:26px;height:26px;border-radius:50%;background:var(--green);color:#fff;display:grid;place-items:center",To={__name:"GiftSuccess",emits:["recipient","new-gift","copy-self","share","home"],setup(D,{emit:i}){const{state:_}=L(),k=i,l=T(!1),t=T(!1),p=["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],v=new Date,c=`${v.getDate()} ${p[v.getMonth()]} ${v.getFullYear()}`,b="✦✧✦✧".split("").map((w,d)=>({c:w,style:`top:${10+d*16}%;${d%2?"right":"left"}:${4+d*3}%;animation-delay:-${d}s`})),s=M(()=>{const w=J.find(d=>d.id===_.method);return w?w.n:""}),u=M(()=>_.claimToken?new URL(`/gift-recipient?token=${encodeURIComponent(_.claimToken)}`,window.location.origin).href:_.claimUrl||"");function h(){if(!u.value)return;const w=String(_.phone||"").replace(/\D/g,""),d=encodeURIComponent(`لديك هدية من عناية سامي ✨
${u.value}`);window.open(`https://wa.me/${w}?text=${d}`,"_blank","noopener")}function $(){l.value=!0,t.value=!1,u.value&&window.open(u.value,"_blank","noopener,noreferrer")}async function P(){try{if(navigator&&navigator.clipboard)await navigator.clipboard.writeText(u.value);else{const w=document.getElementById("gift-share-link");w&&(w.focus(),w.select(),document.execCommand("copy"))}t.value=!0,setTimeout(()=>{t.value=!1},2200)}catch{alert("تعذّر نسخ الرابط، يمكنك نسخه يدويًا من الحقل أدناه.")}}const y={user:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',send:'<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>',phone:'<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',card:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',check:'<path d="M20 6L9 17l-5-5"/>',gift:'<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7s-2-5-5-5-3 5 0 5h5zM12 7s2-5 5-5 3 5 0 5h-5z"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>',home:'<path d="M3 9l9-6 9 6v11a1 1 0 01-1 1H4a1 1 0 01-1-1z"/>'};return(w,d)=>(o(),a("div",co,[(o(!0),a(z,null,S(r(b),(C,O)=>(o(),a("span",{key:O,class:"confetti",style:V(C.style)},e(C.c),5))),128)),d[15]||(d[15]=K('<div class="gsuc-head" data-v-4a1de5a0><h1 data-v-4a1de5a0>تم إرسال هديتك بنجاح</h1><span class="ic" data-v-4a1de5a0><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" data-v-4a1de5a0><path d="M20 6L9 17l-5-5" data-v-4a1de5a0></path></svg></span></div><p class="sub" data-v-4a1de5a0>لقد أسعدت قلبًا اليوم 🤍 شكرًا لاختيارك عناية سامي</p>',2)),n("div",xo,[n("div",fo,[x(fn,{design:r(_).design,recipient:r(_).name,message:r(_).msg},null,8,["design","recipient","message"])]),n("div",uo,[d[10]||(d[10]=n("h4",null,"تفاصيل الإرسال",-1)),n("div",bo,[n("span",vo,[x(m,{inner:y.user,size:14},null,8,["inner"]),d[3]||(d[3]=g(" المهدى إليه",-1))]),n("span",mo,e(r(_).name),1)]),n("div",ho,[n("span",ko,[x(m,{inner:y.send,size:14},null,8,["inner"]),d[4]||(d[4]=g(" طريقة الإرسال",-1))]),n("span",yo,e(s.value),1)]),n("div",wo,[n("span",_o,[x(m,{inner:y.phone,size:14},null,8,["inner"]),d[5]||(d[5]=g(" رقم الجوال",-1))]),n("span",zo,e(r(_).phone),1)]),n("div",$o,[n("span",Mo,[x(m,{inner:y.clock,size:14},null,8,["inner"]),d[6]||(d[6]=g(" وقت الإرسال",-1))]),n("span",Co,[n("span",Fo,"✓ "+e(r(_).when==="now"?"تم الإرسال الآن":"مجدولة"),1)])]),n("div",Bo,[n("span",Eo,[x(m,{inner:y.cal,size:14},null,8,["inner"]),d[7]||(d[7]=g(" تاريخ الإرسال",-1))]),n("span",{class:"v"},e(c))]),n("div",So,[n("span",Ao,[x(m,{inner:y.card,size:14},null,8,["inner"]),d[8]||(d[8]=g(" رقم العملية",-1))]),n("span",Io,e(r(_).ref),1)]),n("div",{style:Yo},[n("span",{style:No},[x(m,{inner:y.check,size:13},null,8,["inner"])]),d[9]||(d[9]=g(" تم إرسال الهدية بنجاح إلى المستلم — ستظهر الهدية في رسالة خاصة من عناية سامي ",-1))])])]),n("div",Lo,[n("button",{class:"btn btn-dark",id:"newGift",onClick:d[0]||(d[0]=C=>k("new-gift"))},[x(m,{inner:y.gift,size:15},null,8,["inner"]),d[11]||(d[11]=g(" إهداء جديد ",-1))]),n("button",{class:"btn btn-line",id:"shareGift",onClick:d[1]||(d[1]=C=>{$(),k("share")})},[x(m,{inner:y.share,size:15},null,8,["inner"]),d[12]||(d[12]=g(" مشاركة الهدية ",-1))]),n("button",{class:"btn btn-line",id:"backHome",onClick:d[2]||(d[2]=C=>k("home"))},[x(m,{inner:y.home,size:15},null,8,["inner"]),d[13]||(d[13]=g(" العودة للرئيسية ",-1))])]),l.value?(o(),a("div",Do,[d[14]||(d[14]=n("label",null,"رابط الهدية",-1)),n("div",Po,[n("input",{id:"gift-share-link",type:"text",value:u.value,readonly:""},null,8,Ho),r(_).method==="wa"?(o(),a("button",{key:0,class:"btn btn-gold",onClick:h},"إرسال عبر واتساب")):H("",!0),n("button",{class:"btn btn-gold",onClick:P},"نسخ الرابط")]),t.value?(o(),a("small",jo,"تم نسخ الرابط بنجاح")):H("",!0)])):H("",!0),d[16]||(d[16]=n("div",{class:"thanks"},[n("i",null,"❦"),g(" شكرًا لاختيارك عناية سامي لتقديم تجربة مميزة لمن تحب "),n("i",null,"❦")],-1))]))}},Vo=gn(To,[["__scopeId","data-v-4a1de5a0"]]),Go={key:0,class:"gsum"},Ro={class:"card"},Oo={class:"why-gift"},Uo={class:"wi"},qo={class:"card help-card"},Ko={class:"hi"},Wo={key:1,class:"gsum"},Xo={class:"card"},Qo={key:0,class:"pkline"},Jo=["src"],Zo={class:"pr"},na={class:"gs-row"},ra={class:"v"},ta={class:"gs-row"},ea={class:"v",dir:"ltr"},oa={class:"gs-row"},aa={class:"v"},ia={class:"gs-row"},sa={class:"v"},la={class:"gs-row"},da={class:"v"},pa={class:"gs-row"},ga={class:"v"},ca={class:"chip"},xa={key:3,class:"gs-total"},fa={class:"v"},ua={class:"gs-note"},ba={key:0,class:"card help-card"},va={class:"hi"},ma="text-align:center;padding:20px;border:1.5px dashed var(--line);border-radius:13px;color:var(--mute);font-size:12.5px;margin-bottom:12px",ha="display:block;font-family:var(--font-d);color:var(--ink);margin-bottom:4px",ka={__name:"GiftSummary",setup(D){const{state:i,pkgOf:_}=L(),k=M(()=>i.gpkg?_(i.gpkg):null),l=M(()=>xn.find(b=>b.id===i.design)),t=M(()=>i.gstep===0||!k.value&&i.gstep<2),p=M(()=>{const b=J.find(s=>s.id===i.method);return b?b.n:""}),v={head:'<path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>',lock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>'},c=[["هدية رقمية فورية","تصلك أو تصل للمستلم فور إتمام الدفع",'<path d="M13 2L3 14h9l-1 8 10-12h-9z"/>'],["صالحة لمدة 6 أشهر","من تاريخ الشراء",'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>'],["المستلم يختار موعده","يختار الوقت والفرع المناسب له",'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>'],["آمنة وموثوقة","نضمن لك تجربة إهداء مميزة",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>']];return(b,s)=>t.value?(o(),a("div",Go,[n("div",Ro,[s[0]||(s[0]=n("h3",null,"لماذا الإهداء من سامي؟",-1)),n("div",Oo,[(o(),a(z,null,S(c,(u,h)=>n("div",{key:h,class:"wg"},[n("span",Uo,[x(m,{inner:u[2],size:17},null,8,["inner"])]),n("span",null,[n("b",null,e(u[0]),1),n("small",null,e(u[1]),1)])])),64))])]),n("div",qo,[n("span",Ko,[x(m,{inner:v.head,size:18},null,8,["inner"])]),s[1]||(s[1]=n("b",null,"تحتاج مساعدة؟",-1)),s[2]||(s[2]=n("small",null,"فريقنا جاهز لمساعدتك",-1)),s[3]||(s[3]=n("a",{href:"https://wa.me/963959415545"},"تواصل معنا",-1))])])):(o(),a("div",Wo,[n("div",Xo,[s[14]||(s[14]=n("h3",null,"ملخص الإهداء",-1)),k.value?(o(),a("div",Qo,[n("img",{src:k.value.img,alt:""},null,8,Jo),n("span",null,[n("b",null,e(k.value.name),1),n("small",null,"🕐 "+e(k.value.dur)+" دقيقة",1),n("small",null,e(k.value.desc),1),n("span",Zo,e(r(Y)(k.value.price))+" ر.س",1)])])):(o(),a("div",{key:1,style:ma},[n("b",{style:ha},"لم يتم اختيار باقة بعد"),s[4]||(s[4]=g("اختر الباقة المناسبة لإهدائها لمن تحب",-1))])),r(i).gstep>=2?(o(),a(z,{key:2},[n("div",na,[s[5]||(s[5]=n("span",{class:"k"},"👤 المهدى إليه",-1)),n("span",ra,e(r(i).name||"—"),1)]),n("div",ta,[s[6]||(s[6]=n("span",{class:"k"},"📱 رقم الجوال",-1)),n("span",ea,e(r(i).phone||"—"),1)]),n("div",oa,[s[7]||(s[7]=n("span",{class:"k"},"🎨 تصميم البطاقة",-1)),n("span",aa,e(l.value.n),1)]),n("div",ia,[s[8]||(s[8]=n("span",{class:"k"},"💬 الرسالة",-1)),n("span",sa,e(r(i).msg?"تمت إضافة رسالة مخصصة":"—"),1)]),n("div",la,[s[9]||(s[9]=n("span",{class:"k"},"📤 طريقة الإرسال",-1)),n("span",da,e(p.value),1)]),n("div",pa,[s[10]||(s[10]=n("span",{class:"k"},"🕐 وقت الإرسال",-1)),n("span",ga,[n("span",ca,e(r(i).when==="now"?"فوري":"مجدول"),1)])])],64)):H("",!0),k.value?(o(),a("div",xa,[s[12]||(s[12]=n("span",{class:"k"},"الإجمالي",-1)),n("span",fa,[g(e(r(Y)(k.value.price))+" ",1),s[11]||(s[11]=n("small",{style:{"font-size":"13px"}},"ر.س",-1))])])):H("",!0),n("div",ua,[x(m,{inner:v.lock,size:14},null,8,["inner"]),s[13]||(s[13]=g(" بإتمامك معلومات الهدية مشفرة وآمنة 100%",-1))])]),r(i).gstep===1?(o(),a("div",ba,[n("span",va,[x(m,{inner:v.head,size:18},null,8,["inner"])]),s[15]||(s[15]=n("b",null,"تحتاج مساعدة؟",-1)),s[16]||(s[16]=n("small",null,"فريقنا جاهز لمساعدتك في اختيار الهدية المثالية",-1)),s[17]||(s[17]=n("a",{href:"https://wa.me/963959415545"},"تواصل معنا",-1))])):H("",!0)]))}},ya={class:"shell"},wa={class:"wrap",id:"pkgApp"},_a={key:0,class:"view on"},za={key:1,class:"g-stage"},$a={class:"view on"},Ma={id:"gsumWrap"},Ca={key:0,class:"view on"},Fa={key:1,class:"g-stage"},Ba={class:"view on"},Ea={id:"gsumWrap"},Sa={class:"wrap"},Aa={class:"f-grid"},Ia={class:"f-brand"},La={class:"f-links"},Da={class:"f-links"},Pa=["href"],Ha={class:"wrap in"},ja={class:"fb-mid",id:"fbMid"},Ya=["disabled"],Na='<path d="M19 12H5M11 18l-6-6 6-6"/>',Wa={__name:"PackagesGiftsView",setup(D){const i=T(null),{current:_,openPicker:k,requireLocation:l,locations:t,loadServiceLocations:p}=Bn();p();const{requireAuth:v}=En(),{state:c,pkgOf:b,bkDays:s,gCanNext:u,gNextLabel:h,bkCanNext:$,bkNextLabel:P,startGift:y,startBook:w,backToPackages:d}=L();An(Un,"packages-gifts"),In(i);const C=T(!1),O=T(""),Q=T(!1);function G(B){O.value=B,Q.value=!0,clearTimeout(G._h),G._h=setTimeout(()=>{Q.value=!1},2600)}const R=M(()=>c.page==="book"),un=M(()=>R.value?!(c.bk.done||c.bk.step>=2):c.page==="gift"&&!c.done&&c.gstep!==4),bn=M(()=>R.value?!0:c.gstep!==0),Z=M(()=>{const B=R.value?c.bk.pkg:c.gpkg;return B?b(B):null}),nn=M(()=>R.value?$.value:u.value),vn=M(()=>R.value?P.value:h.value);function mn(){if(R.value){if(c.bk.step===0){d();return}c.bk.step--}else{if(c.gstep===0){d();return}c.gstep--}scrollTo({top:0,behavior:"smooth"})}function hn(){if(nn.value){if(R.value)c.bk.step++;else{if(c.gstep===3){kn();return}c.gstep++}scrollTo({top:0,behavior:"smooth"})}}function kn(){v(async()=>{var B,f,I,A;C.value=!0;try{const E=await Rn({packages:[{id:c.gpkg}],location:{recipient_name:c.name.trim(),recipient_mobile:c.phone.trim(),message:c.msg.trim()||void 0},design:c.design,branch:c.siteBranch||null,send_channel:c.method||"link"}),en=c.pay==="wallet";await on(en?"card":"cod",{wallet:en}),c.ref=(B=E==null?void 0:E.data)!=null&&B.gift_card_id?`#GIFT-${E.data.gift_card_id}`:"#GIFT",c.claimUrl=((f=E==null?void 0:E.data)==null?void 0:f.share_url)||((I=E==null?void 0:E.data)==null?void 0:I.claim_url)||null,c.claimToken=((A=E==null?void 0:E.data)==null?void 0:A.claim_token)||null,c.done=!0,c.gstep=4,scrollTo({top:0,behavior:"smooth"})}catch(E){console.error("Package gift error:",E),G((E==null?void 0:E.message)||"تعذر إنشاء الهدية، حاول مرة أخرى")}finally{C.value=!1}})}function yn(B){return`${B.getFullYear()}-${String(B.getMonth()+1).padStart(2,"0")}-${String(B.getDate()).padStart(2,"0")}`}function wn(){v(async()=>{var B;C.value=!0;try{const f=c.bk,I=s()[f.dayIdx];await Gn({package_id:f.pkg,branch_id:f.branch,date:yn(I),time:f.time,employee_id:(B=f.employee)==null?void 0:B.id,notes:f.notes||void 0});const A=f.pay==="wallet",E=await on(A?"card":"cod",{wallet:A});c.bk.ref=E.invoice_id||null,c.bk.done=!0,scrollTo({top:0,behavior:"smooth"})}catch(f){G(f.message||"تعذّر إتمام الحجز، حاول مرة أخرى")}finally{C.value=!1}})}function rn(){_.value&&(c.siteBranch=_.value.id)}function _n(B){w(B)}function zn(B){l(()=>{rn(),y("pkg",B)})}function $n(){l(()=>{rn(),y(null,null)})}function Mn(){c.done=!1,c.gstep=0,c.gtype=null,c.gpkg=null,c.pay=null,c.ref=null,scrollTo({top:0,behavior:"smooth"})}function tn(){location.href="/"}return(B,f)=>{const I=pn("RouterLink");return o(),a("div",{ref_key:"root",ref:i},[n("div",ya,[n("div",wa,[r(c).page==="packages"?(o(),N(cr,{key:0,onBook:_n,onGift:zn,onGiftNow:$n,onPickBranch:r(k)},null,8,["onPickBranch"])):r(c).page==="book"?(o(),a(z,{key:1},[x(mr),r(c).bk.done?(o(),a("div",_a,[x(Rt,{onHome:tn,onCalendar:f[0]||(f[0]=A=>G("تمت إضافة الموعد إلى التقويم")),onShare:f[1]||(f[1]=A=>G("تم نسخ رابط الحجز للمشاركة"))})])):(o(),a("div",za,[n("main",$a,[r(c).bk.step===0?(o(),N(Ir,{key:0})):r(c).bk.step===1?(o(),N(ot,{key:1})):(o(),N(bt,{key:2,onPay:wn}))]),n("aside",Ma,[x(de)])]))],64)):(o(),a(z,{key:2},[x(ue),r(c).done?(o(),a("div",Ca,[x(Vo,{onRecipient:f[2]||(f[2]=A=>r(c).claimUrl&&(B.location.href=r(c).claimUrl)),onNewGift:Mn,onCopySelf:f[3]||(f[3]=A=>G("تم إرسال نسخة من الهدية إلى بريدك")),onShare:f[4]||(f[4]=A=>G("تم نسخ رابط الهدية للمشاركة")),onHome:tn})])):(o(),a("div",Fa,[n("main",Ba,[r(c).gstep===0?(o(),N(ze,{key:0})):r(c).gstep===1?(o(),N(Pe,{key:1})):r(c).gstep===2?(o(),N(to,{key:2})):(o(),N(go,{key:3}))]),n("aside",Ea,[x(ka)])]))],64))])]),n("footer",null,[n("div",Sa,[n("div",Aa,[n("div",Ia,[x(I,{class:"logo",to:"/"},{default:j(()=>[...f[5]||(f[5]=[n("span",{class:"mark"},[n("img",{src:Sn,alt:"عناية سامي",style:{width:"29px",height:"29px","object-fit":"contain"}})],-1),n("span",{class:"name"},[n("b",null,"عناية سامي"),n("span",null,"SAMI CARE")],-1)])]),_:1}),f[6]||(f[6]=K('<p>مركز متخصص في العناية الرجالية المتكاملة بجدة، حيث تلتقي الفخامة بالاحترافية في كل تفصيلة.</p><div class="socials"><a href="https://x.com/samicare_sa" aria-label="X"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-6.8 7.8L23.3 22h-6.3l-4.9-6.4L6.5 22H3.4l7.3-8.3L1 2h6.5l4.4 5.8L18.9 2zm-1.1 18h1.7L7.1 3.9H5.3L17.8 20z"></path></svg></a><a href="https://www.instagram.com/samicare.sa/" aria-label="انستقرام"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1" fill="currentColor"></circle></svg></a><a href="https://www.facebook.com/samicare.sa" aria-label="فيسبوك"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg></a></div>',2))]),n("div",null,[f[12]||(f[12]=n("h4",null,"روابط مهمة",-1)),n("ul",La,[n("li",null,[x(I,{to:"/"},{default:j(()=>[...f[7]||(f[7]=[g("الرئيسية",-1)])]),_:1})]),n("li",null,[x(I,{to:"/booking"},{default:j(()=>[...f[8]||(f[8]=[g("حجز موعد",-1)])]),_:1})]),n("li",null,[x(I,{to:"/#services"},{default:j(()=>[...f[9]||(f[9]=[g("خدماتنا",-1)])]),_:1})]),n("li",null,[x(I,{to:"/packages-gifts"},{default:j(()=>[...f[10]||(f[10]=[g("الباقات",-1)])]),_:1})]),n("li",null,[x(I,{to:"/gifts"},{default:j(()=>[...f[11]||(f[11]=[g("الهدايا",-1)])]),_:1})])])]),n("div",null,[f[18]||(f[18]=n("h4",null,"استكشف",-1)),n("ul",Da,[n("li",null,[x(I,{to:"/store"},{default:j(()=>[...f[13]||(f[13]=[g("المتجر",-1)])]),_:1})]),n("li",null,[x(I,{to:"/branches"},{default:j(()=>[...f[14]||(f[14]=[g("فروعنا",-1)])]),_:1})]),n("li",null,[x(I,{to:"/contact"},{default:j(()=>[...f[15]||(f[15]=[g("تواصل معنا",-1)])]),_:1})]),n("li",null,[x(I,{to:"/terms"},{default:j(()=>[...f[16]||(f[16]=[g("الشروط والأحكام",-1)])]),_:1})]),n("li",null,[x(I,{to:"/privacy-policy"},{default:j(()=>[...f[17]||(f[17]=[g("سياسة الخصوصية",-1)])]),_:1})])])]),n("div",null,[f[19]||(f[19]=n("h4",null,"عناوين الفروع",-1)),(o(!0),a(z,null,S(r(t),A=>(o(),a("div",{key:A.id,class:"f-branch"},[n("b",null,e(A.name),1),n("small",null,e(A.address),1),A.contact_number?(o(),a("a",{key:0,href:`tel:${A.contact_number}`},e(A.contact_number),9,Pa)):H("",!0)]))),128)),f[20]||(f[20]=n("div",{class:"f-branch"},[n("b",null,"خدمات منزلية"),n("small",null,"حلاقة شعر ولحية وماسكات طبيعية")],-1))])]),f[21]||(f[21]=K('<div class="f-bottom"><small>© 2026 عناية سامي — جميع الحقوق محفوظة</small><div class="pay" aria-label="بوابات الدفع"><span title="Visa">VISA</span><span title="Mastercard">Mastercard</span><span title="مدى">mada</span><span title="Tabby">tabby</span><span title="Apple Pay">Pay</span></div></div>',1))])]),n("div",{class:F(["footbar",{on:un.value}]),id:"footbar"},[n("div",Ha,[n("button",{class:"btn btn-back",id:"btnBack",style:V({visibility:bn.value?"visible":"hidden"}),onClick:mn},[...f[22]||(f[22]=[n("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[n("path",{d:"M5 12h14M13 6l6 6-6 6"})],-1),g(" السابق ",-1)])],4),n("div",ja,[Z.value?(o(),a(z,{key:0},[f[23]||(f[23]=g("الإجمالي ",-1)),n("b",null,e(r(Y)(Z.value.price))+" ر.س",1),f[24]||(f[24]=g(" — 🔒 بياناتك محمية وآمنة",-1))],64)):(o(),a(z,{key:1},[g("🔒 بياناتك محمية وآمنة")],64))]),n("button",{class:"btn btn-gold",id:"btnNext",disabled:!nn.value,onClick:hn},[g(e(vn.value)+" ",1),x(m,{inner:Na,size:15})],8,Ya)])],2),n("div",{class:F(["pay-loading",{on:C.value}]),id:"payLoading"},[...f[25]||(f[25]=[n("div",{class:"pl-box"},[n("div",{class:"pl-ring"}),n("b",null,"جارٍ إتمام الإهداء بأمان…"),n("small",null,"سيتم إرسال الهدية مباشرة بعد إتمام الدفع")],-1)])],2),n("div",{class:F(["toast",{on:Q.value}]),id:"toast"},e(O.value),3)],512)}}};export{Wa as default};
