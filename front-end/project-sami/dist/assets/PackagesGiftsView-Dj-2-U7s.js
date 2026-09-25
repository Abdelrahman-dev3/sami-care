import{i as $,o as a,c as l,E as en,b as n,u as t,F as _,a as x,t as o,e as D,x as G,n as I,q as j,d as g,V as h,p as T,r as V,s as Dn,C as Ln,A as hn,I as X,Q as tn,m as H,$ as Pn,_ as Nn,h as Hn,P as jn,a1 as Tn}from"./index-BWc_r5XW.js";import{p as Q}from"./paymentPolicy-Dun9PtFA.js";import{u as Yn}from"./usePageStyles-CFfKXM_a.js";import{u as Vn}from"./useInternalLinks-B6-MGd4J.js";import{u as L,B as Gn,a as Rn,A as On,b as Un,f as W,c as q,r as Y,C as vn,d as Wn,G as qn,e as Kn,D as kn,S as dn}from"./CheckoutPaymentOptions-DYllilEe.js";import{b as Xn,B as Qn,s as Jn}from"./BookingQr-BuBfdGTZ.js";import{f as Zn,b as nt,i as un,d as tt}from"./PaymentMethodList-rNLOaUD5.js";import{G as yn,c as et}from"./GiftCard-De1PZkAe.js";import{_ as ot}from"./complete-care-hq-DbNf4QGN.js";import{_ as fn}from"./SkeletonLoader-CelJxdQQ.js";import"./accountApi-Co9U6okJ.js";const at=`
:root{
  --ink:#0A0906; --coal:#14110C;
  --gold:#CE9234; --gold-bright:#E8BE6C; --gold-deep:#9C6B1F;
  --champagne:#F0E6CF; --ivory:#F8F4EB; --paper:#FBFAF6; --card:#FFFFFF;
  --smoke:#9A9080; --mute:#7d745f; --text:#2A2519;
  --line:rgba(143,113,52,.22); --line-dark:rgba(198,161,91,.22);
  --green:#2E8B57; --green-bg:#EAF5EC;
  --p-relax:#4E9E6F; --p-fast:#D98A3B; --p-full:#B8912F; --p-groom:#8B6FC0; --p-home:#3E8E9E; --p-vip:#B0642A;
  --ease:cubic-bezier(.33,.9,.35,1); --dur:.26s;
  --font-d:'Lama Sans',serif; --font-b:'Lama Sans',sans-serif;
}
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:var(--font-b);background:var(--ink);color:var(--text);-webkit-font-smoothing:antialiased;overflow-x:hidden}
::selection{background:var(--gold);color:var(--ink)}
img{max-width:100%;display:block}
a{color:inherit;text-decoration:none}
button{font-family:inherit;cursor:pointer;border:none;background:none;color:inherit}
input,textarea,select{font-family:inherit}
.wrap{width:min(1280px,94%);margin-inline:auto}

/* ===== الهيدر ===== */
.nav{display:flex;align-items:center;gap:26px;padding:14px 0}
.logo{display:flex;align-items:center;gap:11px}
.logo .mark{width:56px;height:56px;display:grid;place-items:center;border:1.5px solid var(--gold);
  border-radius:14px;font-family:var(--font-d);font-weight:700;font-size:18px;color:var(--gold-bright);
  background:radial-gradient(circle at 30% 20%,rgba(233,207,142,.18),transparent 70%);
  overflow:hidden}
.logo .mark img{width:100%;height:100%;object-fit:contain;transform:scale(1.6);border-radius:11px}
.logo .name b{font-family:var(--font-d);font-size:17px;color:var(--champagne);display:block;line-height:1.15}
.logo .name span{font-size:10px;color:var(--smoke);letter-spacing:.08em}
nav.links{display:flex;gap:22px;margin-inline-start:auto}
nav.links a{font-size:13.5px;color:var(--champagne);opacity:.82;transition:var(--dur);position:relative;padding-bottom:4px}
nav.links a:hover,nav.links a.on{opacity:1;color:var(--gold-bright)}
nav.links a.on::after{content:"";position:absolute;bottom:0;right:0;left:0;height:2px;background:var(--gold-bright);border-radius:2px}
.nav-actions{display:flex;align-items:center;gap:12px}
.icon-btn{position:relative;width:40px;height:40px;border-radius:50%;display:grid;place-items:center;
  border:1px solid var(--line-dark);color:var(--champagne);transition:var(--dur) var(--ease)}
.icon-btn:hover{border-color:var(--gold);color:var(--gold-bright)}
.icon-btn .count{position:absolute;top:-5px;left:-5px;min-width:18px;height:18px;border-radius:9px;
  background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);
  font-size:10.5px;font-weight:700;display:grid;place-items:center;padding-inline:4px}
.loyal{display:inline-flex;align-items:center;gap:8px;border:1px solid var(--gold);color:var(--gold-bright);
  padding:9px 18px;border-radius:999px;font-size:13px}

.shell{background:var(--paper);border-radius:26px 26px 0 0;min-height:calc(100vh - 71px);padding-bottom:80px;position:relative}

/* ===== أزرار عامة ===== */
.btn{display:inline-flex;align-items:center;gap:10px;justify-content:center;padding:14px 30px;border-radius:14px;
  font-size:14.5px;font-weight:700;position:relative;overflow:hidden;isolation:isolate;
  transition:transform var(--dur) var(--ease),box-shadow var(--dur) var(--ease),opacity var(--dur)}
.btn-gold{color:var(--ink);background:linear-gradient(135deg,var(--gold-bright) 0%,var(--gold) 50%,var(--gold-deep) 120%);
  box-shadow:0 12px 26px -10px rgba(143,113,52,.65),inset 0 1px 0 rgba(255,255,255,.5)}
.btn-gold::before{content:"";position:absolute;inset:0;z-index:-1;
  background:linear-gradient(115deg,transparent 30%,rgba(255,255,255,.5) 50%,transparent 70%);
  transform:translateX(160%);transition:transform .7s var(--ease)}
.btn-gold:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 18px 34px -10px rgba(143,113,52,.7)}
.btn-gold:hover::before{transform:translateX(-160%)}
.btn-gold:disabled{opacity:.45;cursor:not-allowed;box-shadow:none}
.btn-line{border:1.5px solid var(--gold);color:var(--gold-deep);background:#fff}
.btn-line:hover{background:rgba(198,161,91,.08);transform:translateY(-2px)}
.btn-dark{background:var(--ink);color:var(--gold-bright)}
.btn-dark:hover{background:#241E12;transform:translateY(-2px)}
.card{background:var(--card);border:1px solid var(--line);border-radius:18px;
  box-shadow:0 14px 30px -22px rgba(80,60,20,.25)}

/* ===== هيرو الباقات ===== */
.pk-hero{position:relative;border-radius:22px;overflow:hidden;margin-top:24px;min-height:300px;
  display:flex;align-items:center;background:#0d0b07}
.pk-hero .bg{position:absolute;inset:0}
.pk-hero .bg img{width:100%;height:100%;object-fit:cover;object-position:75% center;filter:brightness(.85)}
.pk-hero .bg::after{content:"";position:absolute;inset:0;
  background:linear-gradient(90deg,rgba(10,9,6,.92) 0%,rgba(10,9,6,.72) 42%,rgba(10,9,6,.1) 100%)}
.pk-hero .in{position:relative;z-index:2;padding:52px;max-width:560px}
.pk-hero .eyebrow{font-family:var(--font-d);font-size:clamp(20px,2.4vw,28px);color:var(--gold-bright)}
.pk-hero h1{font-family:var(--font-d);font-size:clamp(30px,4.2vw,50px);color:var(--ivory);line-height:1.25;margin:4px 0 14px}
.pk-hero p{color:var(--champagne);font-size:15px;line-height:1.9;font-weight:300;opacity:.85;max-width:44ch}
.pk-hero .ghost-logo{position:absolute;left:5%;top:50%;transform:translateY(-50%);width:220px;opacity:.14;z-index:1;color:var(--gold-bright)}

/* ===== فلاتر الباقات ===== */
/* ملاحظة صغيرة على سطر واحد — مش سكشن كامل */
.branch-gate{display:flex;align-items:center;justify-content:flex-start;gap:8px;flex-wrap:wrap;
  margin:20px 0 20px 0;padding:0;border:0;background:none;border-radius:0;font-size:12px;color:#6f675e}
.branch-gate b{color:var(--gold-deep);font-weight:700}
.branch-gate button{border:0;background:none;padding:0;margin-inline-start:2px;color:var(--gold-deep);
  font-family:inherit;font-size:11.5px;font-weight:700;text-decoration:underline;text-underline-offset:3px;cursor:pointer}
.branch-gate button:hover{color:#855911}
.branch-gate button.primary{background:none;color:#a5603f}
.branch-gate-ov{position:fixed;inset:0;z-index:400;background:rgba(20,14,6,.55);backdrop-filter:blur(3px);
  display:flex;align-items:center;justify-content:center;opacity:0;pointer-events:none;transition:opacity .25s}
.branch-gate-ov.on{opacity:1;pointer-events:auto}
.branch-gate-modal{width:min(420px,92%);background:#fff;border-radius:20px;padding:26px;text-align:center;box-shadow:0 30px 60px -20px rgba(0,0,0,.4)}
.branch-gate-modal h3{font-family:var(--font-d);font-size:20px;margin:0 0 6px}
.branch-gate-modal p{font-size:12.5px;color:var(--mute);margin:0 0 18px}
.branch-gate-list{display:grid;gap:10px}
.branch-gate-list button{text-align:start;border:1.5px solid var(--line);border-radius:13px;padding:13px 16px;background:#fff}
.branch-gate-list button:hover{border-color:var(--gold)}
.branch-gate-list button b{display:block;font-size:14px;margin-bottom:3px}
.branch-gate-list button small{color:var(--mute);font-size:11.5px}
.branch-gate-close{margin-top:14px;background:none;border:0;color:var(--mute);font-size:12.5px;text-decoration:underline}
.filters{display:flex;gap:12px;margin:26px 0;flex-wrap:wrap}
.flt{display:inline-flex;align-items:center;gap:9px;padding:12px 24px;border-radius:14px;font-size:13.5px;font-weight:600;
  background:#fff;border:1.5px solid var(--line);color:var(--mute);transition:all var(--dur) var(--ease)}
.flt:hover{transform:translateY(-2px);border-color:rgba(143,113,52,.5);color:var(--gold-deep)}
.flt.on{background:var(--ink);color:var(--gold-bright);border-color:var(--ink);
  box-shadow:0 12px 24px -12px rgba(10,9,6,.6)}
.flt svg{width:16px;height:16px}

/* ===== شبكة الباقات ===== */
.pkgs{display:grid;grid-template-columns:repeat(5,1fr);gap:16px;align-items:stretch}
.pkg{
  position:relative;background:#fff;border:1.5px solid var(--line);border-radius:20px;overflow:visible;
  display:flex;flex-direction:column;transition:transform .3s var(--ease),box-shadow .3s,border-color .3s,opacity .3s;
  animation:pkgIn .45s var(--ease) both;
}
@keyframes pkgIn{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
.pkg:hover{transform:translateY(-8px);box-shadow:0 30px 54px -26px rgba(80,60,20,.5)}
.pkg.hot{border-color:var(--gold)}
.pkg .ph{position:relative;border-radius:19px 19px 0 0;overflow:hidden;aspect-ratio:16/10.5;background:#161209}
.pkg .ph img{width:100%;height:100%;object-fit:cover;transition:transform .7s var(--ease)}
.pkg:hover .ph img{transform:scale(1.06)}
.pkg .hotflag{position:absolute;top:12px;right:12px;background:linear-gradient(135deg,var(--gold-bright),var(--gold));
  color:var(--ink);font-size:10.5px;font-weight:700;padding:6px 13px;border-radius:999px;z-index:2;
  box-shadow:0 8px 16px -6px rgba(143,113,52,.6)}
.pkg .starflag{position:absolute;top:12px;left:12px;width:30px;height:30px;border-radius:50%;background:rgba(10,9,6,.7);
  border:1px solid var(--gold);display:grid;place-items:center;color:var(--gold-bright);z-index:2}
.pkg .badge{
  position:relative;width:48px;height:48px;border-radius:50%;flex:0 0 48px;align-self:center;margin:-24px auto -24px;
  background:#fff;display:grid;place-items:center;color:var(--pc);border:2px solid;z-index:3;
  box-shadow:0 10px 20px -8px rgba(80,60,20,.4);transition:transform .35s var(--ease);
}
.pkg .badge svg{display:block;width:22px;height:22px;stroke-width:2.2}
.pkg:hover .badge{transform:translateY(-2px) scale(1.06)}
.pkg .ph{margin-bottom:0}
.pkg .body{padding:34px 18px 18px;display:flex;flex-direction:column;flex:1;text-align:center;position:relative}
.pkg h3{font-family:var(--font-d);font-size:19px;color:var(--ink)}
.pkg .dur{font-size:12px;color:var(--mute);margin:6px 0 8px;display:flex;justify-content:center;gap:6px;align-items:center}
.pkg .desc{font-size:12.5px;color:var(--mute);line-height:1.8;min-height:44px}
.pkg .inc{margin:14px 0;padding-top:14px;border-top:1px dashed var(--line);text-align:start;flex:1}
.pkg .inc b{font-size:12px;color:var(--ink);display:block;margin-bottom:10px}
.pkg .inc ul{list-style:none;display:grid;gap:8px}
.pkg .inc li{display:flex;gap:8px;align-items:center;font-size:12px;color:#5c5442}
.pkg .inc li i{width:15px;height:15px;border-radius:50%;background:var(--pc);color:#fff;display:grid;place-items:center;flex:none;font-size:9px;font-style:normal}
.pkg .price{font-family:var(--font-d);font-size:30px;color:var(--pc);margin:4px 0 12px}
.pkg .price small{font-size:13px;color:var(--mute);font-family:var(--font-b)}
.pkg .acts{display:grid;gap:8px}
.pkg .book{width:100%;padding:12px;border-radius:12px;font-size:13.5px;font-weight:700;border:1.5px solid var(--pc);
  color:var(--pc);transition:all var(--dur) var(--ease)}
.pkg .book:hover,.pkg.hot .book{background:var(--pc);color:#fff}
.pkg.hot .book{border-color:transparent;background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink)}
.pkg.hot .book:hover{filter:brightness(1.05)}
.pkg .gift-mini{font-size:12px;color:var(--mute);display:inline-flex;gap:6px;align-items:center;justify-content:center;
  padding:8px;transition:color var(--dur)}
.pkg .gift-mini:hover{color:var(--gold-deep)}

/* ===== بانر الإهداء ===== */
.gift-banner{margin:34px 0 26px;border-radius:22px;overflow:hidden;position:relative;
  background:linear-gradient(120deg,#F7EFD9,#FDF9EE 55%,#F5ECD4);border:1px solid var(--line);
  display:grid;grid-template-columns:200px 1fr auto;align-items:center;gap:26px;padding:28px 34px}
.gift-banner::before{content:"";position:absolute;inset:-40%;pointer-events:none;
  background:conic-gradient(from 0deg,transparent 72%,rgba(198,161,91,.18) 80%,transparent 88%);
  animation:sweep 10s linear infinite}
@keyframes sweep{to{transform:rotate(360deg)}}
.gb-box{width:150px;height:150px;position:relative;transform-style:preserve-3d;perspective:600px;
  animation:giftFloat 7s ease-in-out infinite;justify-self:center}
@keyframes giftFloat{0%,100%{transform:rotateY(-14deg) rotateX(6deg) translateY(0)}50%{transform:rotateY(14deg) rotateX(-3deg) translateY(-8px)}}
.gb-box .face{position:absolute;inset:0;border-radius:18px;border:1px solid rgba(143,113,52,.5);
  background:linear-gradient(150deg,#241d10,#0f0c06);display:grid;place-items:center;
  box-shadow:inset 0 0 34px rgba(198,161,91,.2),0 24px 44px -16px rgba(80,60,20,.5)}
.gb-box .face::before{content:"";position:absolute;inset-block:0;right:calc(50% - 8px);width:16px;
  background:linear-gradient(180deg,var(--gold-bright),var(--gold-deep))}
.gb-box .face::after{content:"";position:absolute;inset-inline:0;top:calc(50% - 8px);height:16px;
  background:linear-gradient(90deg,var(--gold-deep),var(--gold-bright),var(--gold-deep))}
.gb-box .tag{position:absolute;bottom:-14px;left:-22px;background:#FFFDF6;border:1px solid var(--line);
  padding:8px 14px;border-radius:10px;font-size:10.5px;color:var(--gold-deep);transform:rotate(-8deg);
  box-shadow:0 10px 18px -8px rgba(80,60,20,.35)}
.gift-banner .txt{position:relative;z-index:1}
.gift-banner h2{font-family:var(--font-d);font-size:clamp(21px,2.6vw,28px);color:var(--ink)}
.gift-banner p{color:var(--mute);font-size:13.5px;margin-top:8px;line-height:1.9;max-width:52ch}
.gift-banner .mini-feats{display:flex;gap:26px;margin-top:16px;flex-wrap:wrap}
.gift-banner .mf{text-align:center;font-size:11px;color:var(--mute)}
.gift-banner .mf .mi{width:38px;height:38px;margin:0 auto 7px;border-radius:11px;border:1px solid var(--line);
  display:grid;place-items:center;color:var(--gold-deep);background:#fff}
.gift-banner .cta{position:relative;z-index:1}

/* ===== شريط المزايا ===== */
.perks{display:grid;grid-template-columns:repeat(6,1fr);gap:0;background:#fff;border:1px solid var(--line);
  border-radius:18px;padding:20px 10px;margin-top:26px}
.perk{text-align:center;padding:6px 12px;border-inline-start:1px solid var(--line)}
.perk:first-child{border:none}
.perk .pi{width:40px;height:40px;margin:0 auto 9px;border-radius:12px;display:grid;place-items:center;
  background:rgba(198,161,91,.1);color:var(--gold-deep)}
.perk b{font-size:12.5px;color:var(--ink);display:block}
.perk small{font-size:10.5px;color:var(--mute)}

/* ===== تحسين الهيدر الموحد ===== */
body{background:#FBFAF6!important}
.shell,#app,#giftApp{background:#FBFAF6!important}
.nav{gap:22px;min-height:82px}
nav.links{gap:18px;align-items:center;white-space:nowrap}
nav.links a{font-weight:500}
.logo{flex-shrink:0}.nav-actions{flex-shrink:0}
@media(max-width:1180px){nav.links{gap:12px}.loyal{padding-inline:13px}.nav{gap:14px}}

/* ===== تحسين الفوتر وبوابات الدفع ===== */
footer{background:radial-gradient(circle at 18% 0,rgba(232,190,108,.16),transparent 30%),linear-gradient(180deg,#0B0906,#050403);color:#f5efe4;padding:58px 24px 20px;border-top:1px solid rgba(198,161,91,.28)}
.f-grid{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1.25fr .85fr 1fr 1.1fr;gap:28px;align-items:start}
.f-brand{min-width:0}.f-brand img{width:64px;height:64px;object-fit:cover;border-radius:18px;border:1px solid rgba(198,161,91,.5);margin-bottom:14px}
.f-brand h3,.f-links h4,.f-branch h4,footer h4{font-family:var(--font-d,var(--fd));color:#f7d995;margin:0 0 12px;font-size:22px}
.f-brand p,.f-branch p,.f-links a{color:#cfc5b3;line-height:1.9;font-size:14px}
.f-brand p{max-width:330px}.socials{display:flex;gap:10px;margin-top:18px}.socials a{width:38px;height:38px;border-radius:50%;display:grid;place-items:center;border:1px solid rgba(198,161,91,.34);color:#f0c978;background:rgba(255,255,255,.03)}
.f-links{display:grid;gap:8px;list-style:none;padding:0;margin:0}.f-links a:hover{color:#f0c978}.f-branch{display:grid;gap:3px;margin-bottom:12px}.f-branch b,.f-branch strong{color:#fff}.f-branch small{color:#b8ad9d;line-height:1.8}.f-branch a{color:#f0c978;font-size:13px}
.f-bottom{max-width:1200px;margin:34px auto 0;padding-top:18px;border-top:1px solid rgba(255,255,255,.1);display:grid;grid-template-columns:auto minmax(320px,1fr);align-items:center;gap:18px;color:#b8ad9d;font-size:13px}
.pay{justify-self:end;display:grid;grid-template-columns:repeat(5,minmax(72px,1fr));gap:10px;width:min(100%,520px)}
.pay span{min-height:46px;border-radius:14px;display:grid;place-items:center;border:1px solid rgba(232,190,108,.3);background:linear-gradient(160deg,rgba(255,255,255,.1),rgba(255,255,255,.03));box-shadow:inset 0 1px 0 rgba(255,255,255,.08),0 16px 32px -24px rgba(0,0,0,.9);color:#f7d995;font-size:0;font-weight:900;letter-spacing:0;position:relative;overflow:hidden}
.pay span::before{font-size:13px;line-height:1;color:inherit}.pay span::after{content:"";position:absolute;inset:8px;border:1px solid rgba(255,255,255,.08);border-radius:10px;pointer-events:none}
.pay span:nth-child(1)::before{content:"VISA";font-style:italic;font-size:15px;color:#fff}.pay span:nth-child(2)::before{content:"MC";font-size:14px;color:#111;background:linear-gradient(90deg,#EB001B 0 50%,#F79E1B 50%);width:38px;height:24px;border-radius:999px;display:grid;place-items:center}.pay span:nth-child(3)::before{content:"مدى";font-size:16px;color:#9FE7C1}.pay span:nth-child(4)::before{content:"tabby";font-size:14px;color:#B8F7D0}.pay span:nth-child(5)::before{content:" Pay";font-size:15px;color:#fff}
@media(max-width:900px){.f-grid{grid-template-columns:1fr 1fr}.nav{overflow-x:auto;justify-content:flex-start}.nav::-webkit-scrollbar{height:0}.f-brand{grid-column:1/-1}.f-bottom{grid-template-columns:1fr}.pay{justify-self:stretch;width:100%}}
@media(max-width:640px){footer{padding:42px 16px calc(22px + env(safe-area-inset-bottom))}.f-grid{grid-template-columns:1fr 1fr;gap:22px 14px}.f-brand,.f-grid>div:last-child{grid-column:1/-1}.f-brand{text-align:center}.f-brand .logo{justify-content:center}.f-brand p{max-width:none;margin-inline:auto;font-size:13px}.socials{justify-content:center}.f-grid h4,footer h4{font-size:15px;margin-bottom:10px}.f-links a{font-size:12.5px}.f-branch{background:rgba(255,255,255,.035);border:1px solid rgba(198,161,91,.18);border-radius:14px;padding:12px}.f-bottom{margin-top:24px;text-align:center}.pay{grid-template-columns:repeat(3,1fr);gap:8px}.pay span{min-height:44px;border-radius:12px}.pay span:nth-child(5){grid-column:2/3}}



/* ===== إصلاح هيدر الموقع على الجوال ===== */
@media(max-width:640px){
  body{padding-top:76px}
  header{overflow:hidden}
  .nav{min-height:76px;padding:10px 12px;gap:8px;overflow:visible!important;justify-content:space-between;direction:inherit}
  nav.links{display:none!important}
  .logo{min-width:0;gap:8px;flex:0 1 auto}
  .logo .mark{width:50px;height:50px;border-radius:15px;flex:none}
  .logo .mark img{width:28px!important;height:28px!important;margin:0!important}
  .logo .name b{font-size:18px;white-space:nowrap}
  .logo .name span{font-size:10px;letter-spacing:.18em}
  .nav-actions{margin-inline-start:auto;gap:8px;display:flex;align-items:center;flex:0 0 auto;min-width:0}
  .nav-actions .btn-ghost{width:48px;min-width:48px;height:48px;padding:0!important;border-radius:50%;font-size:0!important;gap:0}
  .nav-actions .btn-ghost svg{width:18px;height:18px;margin:0}
  .nav-actions .btn-gold{min-width:112px;height:48px;padding:0 14px!important;border-radius:999px;font-size:13px!important;white-space:nowrap;gap:6px;flex:none}
  .nav-actions .btn-gold svg{width:14px;height:14px;flex:none}
  .nav-actions .burger{display:none}
}
@media(max-width:380px){
  .logo .name b{font-size:16px}
  .logo .name span{font-size:9px;letter-spacing:.14em}
  .logo .mark{width:46px;height:46px}
  .nav-actions{gap:6px}
  .nav-actions .btn-ghost{width:44px;min-width:44px;height:44px}
  .nav-actions .btn-gold{min-width:100px;height:44px;padding-inline:11px!important;font-size:12px!important}
}


/* ===== مدخل الهدايا المستلمة في الهيدر ===== */
.account-entry{position:relative;display:inline-grid;place-items:center}
.account-trigger{width:42px;height:42px;border-radius:50%;display:grid;place-items:center;border:1px solid var(--line,rgba(198,161,91,.28));color:var(--champagne,#F0E6CF);background:radial-gradient(circle at 30% 20%,rgba(232,190,108,.14),rgba(255,255,255,.02));transition:all .26s cubic-bezier(.33,.9,.35,1)}
.account-trigger:hover,.account-entry:focus-within .account-trigger{border-color:var(--gold,#CE9234);color:var(--gold-bright,#E8BE6C);box-shadow:0 0 24px rgba(206,146,52,.22);transform:translateY(-1px)}
.account-panel{position:absolute;top:calc(100% + 12px);left:0;z-index:1500;width:280px;padding:12px;border:1px solid rgba(206,146,52,.34);border-radius:18px;background:linear-gradient(155deg,#17120A,#090705);box-shadow:0 24px 50px -22px rgba(0,0,0,.78),inset 0 1px 0 rgba(255,255,255,.08);opacity:0;pointer-events:none;transform:translateY(8px);transition:all .24s cubic-bezier(.33,.9,.35,1)}
.account-entry:hover .account-panel,.account-entry:focus-within .account-panel{opacity:1;pointer-events:auto;transform:translateY(0)}
.account-panel::before{content:"";position:absolute;top:-6px;left:18px;width:12px;height:12px;background:#17120A;border-top:1px solid rgba(206,146,52,.34);border-right:1px solid rgba(206,146,52,.34);transform:rotate(-45deg)}
.received-gift-link{display:grid;grid-template-columns:46px 1fr auto;gap:12px;align-items:center;padding:12px;border-radius:15px;background:linear-gradient(135deg,rgba(232,190,108,.16),rgba(255,255,255,.04));border:1px solid rgba(232,190,108,.22);color:#F7E8C6;text-decoration:none}
.received-gift-link .gift-ico{width:46px;height:46px;border-radius:14px;display:grid;place-items:center;background:linear-gradient(135deg,var(--gold-bright,#E8BE6C),var(--gold,#CE9234));color:#111;box-shadow:0 12px 22px -12px rgba(232,190,108,.75)}
.received-gift-link b{font-family:var(--font-d,var(--fd));font-size:14px;color:#fff;display:block;margin-bottom:2px}
.received-gift-link small{font-size:11px;color:#CDBF9D;line-height:1.5}
.received-gift-link .arr{color:var(--gold-bright,#E8BE6C)}
.received-gift-link:hover{border-color:var(--gold,#CE9234);transform:translateY(-1px)}
@media(max-width:640px){.account-trigger{width:44px;height:44px}.account-panel{left:0;width:min(280px,calc(100vw - 22px))}}


/* ===== أدوات الهيدر الموحّدة ===== */
.nav-actions{display:flex;align-items:center;gap:12px;margin-inline-start:auto}
.site-loc{display:inline-flex;align-items:center;gap:8px;border:1px solid rgba(255,255,255,.16);color:#EDE3D2;
  padding:9px 14px;border-radius:999px;font-size:13px;background:rgba(255,255,255,.03);transition:.25s;cursor:pointer;
  font-family:inherit;max-width:180px;white-space:nowrap}
.site-loc:hover{border-color:#C6A15B;color:#F0D9A5}
.site-loc span{overflow:hidden;text-overflow:ellipsis}
.icon-btn{position:relative;width:40px;height:40px;border-radius:50%;display:grid;place-items:center;
  border:1px solid rgba(255,255,255,.16);color:#EDE3D2;transition:.25s;background:transparent;cursor:pointer}
.icon-btn:hover{border-color:#C6A15B;color:#F0D9A5}
.icon-btn .count{position:absolute;top:-5px;left:-5px;min-width:18px;height:18px;border-radius:9px;
  background:linear-gradient(135deg,#F0D9A5,#C6A15B);color:#241f1b;
  font-size:10.5px;font-weight:700;display:grid;place-items:center;padding-inline:4px}
.nav-book{display:inline-flex;align-items:center;gap:7px;border:1px solid #C6A15B;color:#F0D9A5;
  border-radius:999px;padding:9px 18px;font-size:13px;white-space:nowrap;transition:.25s}
.nav-book:hover{background:rgba(198,161,91,.15)}
@media(max-width:1100px){.site-loc span{display:none}.site-loc{padding:9px 11px}}


/* ===== ستيبر الإهداء ===== */
.g-stepper{padding:32px 0 6px}
.g-steps{display:flex;justify-content:space-between;max-width:860px;margin-inline:auto;position:relative}
.g-step{flex:1;display:flex;flex-direction:column;align-items:center;gap:9px;position:relative;z-index:2}
.g-step .bubble{width:46px;height:46px;border-radius:50%;background:#fff;border:1.5px solid var(--line);
  display:grid;place-items:center;color:#A79c86;font-weight:700;font-size:14px;transition:all .35s var(--ease)}
.g-step b{font-size:13px;color:#A79c86;font-family:var(--font-d);transition:color .3s}
.g-step small{font-size:10.5px;color:#B4a98f}
.g-step .bar{position:absolute;top:23px;right:calc(50% + 30px);width:calc(100% - 60px);height:2px;background:var(--line);z-index:-1}
.g-step .bar i{display:block;height:100%;width:0;background:linear-gradient(90deg,var(--gold-deep),var(--gold-bright));transition:width .6s var(--ease)}
.g-step:first-child .bar{display:none}
.g-step.active .bubble{background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);border-color:transparent;
  box-shadow:0 10px 24px -8px rgba(143,113,52,.6),0 0 0 6px rgba(198,161,91,.14);transform:scale(1.06)}
.g-step.active b{color:var(--gold-deep)}
.g-step.done .bubble{border-color:var(--gold);color:var(--gold-deep);cursor:pointer}
.g-step.done .bar i,.g-step.active .bar i{width:100%}
.g-stage{display:grid;grid-template-columns:1fr 320px;gap:24px;padding:24px 0;align-items:start}
.g-stage>main,.g-stage>aside{min-width:0}
.g-head{text-align:center;margin:8px 0 26px}
.g-head h1{font-family:var(--font-d);font-size:clamp(24px,3vw,34px);color:var(--ink)}
.g-head h1 .lock{color:var(--gold-deep)}
.g-head p{color:var(--mute);font-size:14px;margin-top:7px}

/* خطوة 1: نوع الهدية */
.gtype-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}
.gtype{position:relative;border-radius:20px;overflow:hidden;border:1.5px solid var(--line);cursor:pointer;
  background:#fff;transition:all .3s var(--ease)}
.gtype:hover{transform:translateY(-5px);box-shadow:0 26px 46px -24px rgba(80,60,20,.5)}
.gtype.sel{border-color:var(--gold);box-shadow:0 0 0 4px rgba(198,161,91,.16)}
.gtype .im{aspect-ratio:16/9.5;overflow:hidden;background:linear-gradient(150deg,#F3EBD8,#EFE5CC);position:relative}
.gtype .im img{width:100%;height:100%;object-fit:cover;transition:transform .7s var(--ease)}
.gtype:hover .im img{transform:scale(1.05)}
.gtype .ic{position:absolute;top:16px;left:16px;width:56px;height:56px;border-radius:50%;background:rgba(255,253,246,.9);
  border:1px solid var(--gold);display:grid;place-items:center;color:var(--gold-deep)}
.gtype .bd{padding:20px;text-align:center}
.gtype h3{font-family:var(--font-d);font-size:21px;color:var(--ink)}
.gtype p{font-size:13px;color:var(--mute);margin:7px 0 16px;line-height:1.8}
.gtype .go{display:inline-flex;width:100%;justify-content:center;gap:8px;padding:13px;border-radius:13px;
  background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);font-size:13.5px;font-weight:700}

/* خطوة 2: اختيار الباقة للإهداء */
.gp-sort{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px}
.gp-sort small{font-size:12.5px;color:var(--mute)}
.gp-sort select{border:1.5px solid var(--line);border-radius:11px;padding:10px 16px;font-size:13px;background:#fff;color:var(--ink);outline:none}
.gpkgs{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.gpkg{background:#fff;border:1.5px solid var(--line);border-radius:18px;overflow:hidden;cursor:pointer;
  transition:all .3s var(--ease);display:flex;flex-direction:column;animation:pkgIn .4s var(--ease) both}
.gpkg:hover{transform:translateY(-5px);box-shadow:0 24px 44px -24px rgba(80,60,20,.5)}
.gpkg.sel{border-color:var(--gold);box-shadow:0 0 0 4px rgba(198,161,91,.18)}
.gpkg .ph{aspect-ratio:16/9;overflow:hidden;position:relative;background:#161209}
.gpkg .ph img{width:100%;height:100%;object-fit:cover}
.gpkg .ph .chk{position:absolute;top:10px;left:10px;width:26px;height:26px;border-radius:50%;
  background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);display:grid;place-items:center;
  opacity:0;transform:scale(.4);transition:all .3s var(--ease)}
.gpkg.sel .ph .chk{opacity:1;transform:scale(1)}
.gpkg .bd{padding:16px;text-align:center;display:flex;flex-direction:column;flex:1}
.gpkg h4{font-family:var(--font-d);font-size:16.5px;color:var(--ink)}
.gpkg .dur{font-size:11.5px;color:var(--mute);margin:5px 0}
.gpkg .desc{font-size:11.5px;color:var(--mute);line-height:1.7;flex:1}
.gpkg .prc{font-family:var(--font-d);font-size:22px;color:var(--pc,var(--gold-deep));margin:10px 0}
.gpkg .prc small{font-size:12px;color:var(--mute);font-family:var(--font-b)}
.gpkg .pick{border:1.5px solid var(--gold);color:var(--gold-deep);border-radius:11px;padding:10px;font-size:12.5px;font-weight:700;
  display:flex;justify-content:center;gap:7px;transition:var(--dur)}
.gpkg.sel .pick,.gpkg .pick:hover{background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);border-color:transparent}

/* خطوة 3: التخصيص */
.custom-grid{display:grid;grid-template-columns:1fr 1.35fr;gap:18px;align-items:start}
.preview-col{position:sticky;top:90px}
.preview-col h4,.form-col h4{font-family:var(--font-d);font-size:16px;color:var(--ink);margin-bottom:14px;display:flex;gap:8px;align-items:center}
.gcard{
  aspect-ratio:16/10;border-radius:18px;position:relative;overflow:hidden;padding:26px;
  display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;
  box-shadow:0 30px 54px -24px rgba(20,15,5,.55);transition:background .45s var(--ease),color .45s;
}
.gcard .bow{position:absolute;top:-6px;right:18px;width:64px;color:currentColor;opacity:.9}
.gcard .leaves{position:absolute;inset:0;pointer-events:none;opacity:.35}
.gcard .leaves svg{position:absolute}
.gcard .lg{font-family:var(--font-d);font-size:15px;letter-spacing:.14em;margin-bottom:4px;display:flex;align-items:center;gap:8px}
.gcard .lg small{font-size:9px;letter-spacing:.06em;opacity:.8}
.gcard h3{font-family:var(--font-d);font-size:clamp(20px,2.4vw,27px);margin:10px 0 6px}
.gcard .tg{font-size:12px;opacity:.85;letter-spacing:.02em}
.gcard .hr{width:120px;height:1px;background:currentColor;opacity:.4;margin:16px auto 0;position:relative}
.gcard .hr::after{content:"♡";position:absolute;top:-9px;right:calc(50% - 8px);font-size:13px;background:inherit;padding-inline:6px}
.gcard-msg{margin-top:14px;background:#FDF9EE;border:1px solid var(--line);border-radius:14px;padding:16px 18px;position:relative}
.gcard-msg .q{position:absolute;top:8px;font-size:26px;color:var(--gold);font-family:serif;line-height:1}
.gcard-msg .q1{right:12px}.gcard-msg .q2{left:12px;bottom:4px;top:auto}
.gcard-msg b{display:block;font-family:var(--font-d);color:var(--gold-deep);font-size:14.5px;margin-bottom:6px}
.gcard-msg p{font-size:12.5px;color:#5c5442;line-height:1.9;white-space:pre-wrap}
.form-col .card{padding:20px}
.fld{margin-bottom:16px}
.fld label{font-size:12.5px;color:var(--mute);display:block;margin-bottom:8px;font-weight:600}
.fld input,.fld textarea{width:100%;border:1.5px solid var(--line);border-radius:12px;padding:12px 14px;font-size:13.5px;
  background:#FDFBF5;color:var(--ink);outline:none;transition:border-color var(--dur),box-shadow var(--dur)}
.fld input:focus,.fld textarea:focus{border-color:var(--gold);box-shadow:0 0 0 3px rgba(198,161,91,.14)}
.fld textarea{resize:vertical;min-height:88px}
.fld .cnt{font-size:11px;color:var(--mute);margin-top:6px;display:block}
.fld .cnt.max{color:#B3452F}
.two{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.designs{display:grid;grid-template-columns:repeat(5,1fr);gap:10px}
.design{cursor:pointer;text-align:center}
.design .sw{aspect-ratio:16/11;border-radius:12px;border:2px solid transparent;position:relative;overflow:hidden;
  transition:all .25s var(--ease);display:grid;place-items:center;font-family:var(--font-d);font-size:9px}
.design:hover .sw{transform:translateY(-3px)}
.design.sel .sw{border-color:var(--gold);box-shadow:0 0 0 3px rgba(198,161,91,.2)}
.design .sw .dchk{position:absolute;top:5px;left:5px;width:18px;height:18px;border-radius:50%;
  background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);display:grid;place-items:center;
  opacity:0;transform:scale(.4);transition:all .25s var(--ease)}
.design.sel .sw .dchk{opacity:1;transform:scale(1)}
.design small{font-size:10.5px;color:var(--mute);display:block;margin-top:6px}
.design.sel small{color:var(--gold-deep);font-weight:700}
.send-opts{display:flex;gap:16px;margin-bottom:14px}
.send-opts .ro{display:flex;gap:8px;align-items:center;font-size:13px;color:var(--ink);cursor:pointer}
.send-opts .ro i{width:18px;height:18px;border-radius:50%;border:1.5px solid var(--line);display:grid;place-items:center;transition:all .25s}
.send-opts .ro i::after{content:"";width:9px;height:9px;border-radius:50%;background:linear-gradient(135deg,var(--gold-bright),var(--gold));transform:scale(0);transition:transform .25s var(--ease)}
.send-opts .ro.on i{border-color:var(--gold)}
.send-opts .ro.on i::after{transform:scale(1)}
.methods{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}
.mth{border:1.5px solid var(--line);border-radius:13px;padding:15px 8px;text-align:center;cursor:pointer;
  background:#fff;transition:all var(--dur) var(--ease);color:var(--mute);font-size:12px}
.mth:hover{transform:translateY(-3px)}
.mth.sel{border-color:var(--gold);color:var(--gold-deep);background:linear-gradient(160deg,#FFFBF0,#fff);font-weight:700;
  box-shadow:0 0 0 3px rgba(198,161,91,.14)}
.mth .mi{width:36px;height:36px;margin:0 auto 8px;border-radius:11px;display:grid;place-items:center;
  background:rgba(198,161,91,.1);color:var(--gold-deep)}
.sched-box{overflow:hidden;max-height:0;opacity:0;transition:max-height .4s var(--ease),opacity .3s,margin .3s}
.sched-box.open{max-height:120px;opacity:1;margin-top:12px}

/* خطوة 4: الدفع */
.pay-methods{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.pm{position:relative;display:flex;flex-direction:column;gap:10px;padding:16px;border-radius:15px;align-items:center;text-align:center;
  border:1.5px solid var(--line);background:#fff;cursor:pointer;transition:all var(--dur) var(--ease)}
.pm:hover{border-color:rgba(143,113,52,.5)}
.pm.sel{border-color:var(--gold);background:linear-gradient(160deg,#FFFBF0,#fff);box-shadow:0 0 0 3px rgba(198,161,91,.15)}
.pm .pmi{height:34px;border-radius:9px;display:grid;place-items:center;padding-inline:14px;background:#F5F0E4;
  font-weight:800;font-size:12px;color:var(--ink)}
.pm b{font-size:13px;color:var(--ink)}
.pm small{font-size:10.5px;color:var(--mute)}
.pm .rad{position:absolute;top:12px;left:12px;width:20px;height:20px;border-radius:50%;border:1.5px solid var(--line);
  display:grid;place-items:center;transition:all .25s var(--ease)}
.pm .rad i{width:9px;height:9px;border-radius:50%;background:linear-gradient(135deg,var(--gold-bright),var(--gold));
  transform:scale(0);transition:transform .25s var(--ease)}
.pm.sel .rad{border-color:var(--gold)}
.pm.sel .rad i{transform:scale(1)}
.card-form{overflow:hidden;max-height:0;opacity:0;transition:max-height .45s var(--ease),opacity .35s,margin .35s}
.card-form.open{max-height:320px;opacity:1;margin-top:16px}
.cf-box{padding:18px;border-radius:14px;background:#FCFAF4;border:1px solid var(--line)}
.cf-box h5{font-size:13px;color:var(--ink);margin-bottom:14px}
.save-card{display:flex;gap:9px;align-items:center;font-size:12.5px;color:var(--mute);margin-top:12px;cursor:pointer}
.save-card i{width:19px;height:19px;border-radius:6px;border:1.5px solid var(--line);display:grid;place-items:center;color:#fff;transition:all .25s}
.save-card.on i{background:linear-gradient(135deg,var(--gold-bright),var(--gold));border-color:transparent;color:var(--ink)}
.secure-strip{display:flex;gap:9px;align-items:center;justify-content:center;background:rgba(198,161,91,.08);
  border-radius:12px;padding:12px;font-size:12px;color:var(--gold-deep);margin-top:16px}
.after-pay{font-size:11.5px;color:var(--mute);text-align:center;margin-top:12px}

/* الشريط الجانبي - ملخص الهدية */
.gsum{position:sticky;top:86px;min-width:0}
.gsum .card{padding:20px}
.gsum h3{font-family:var(--font-d);font-size:17px;color:var(--ink);margin-bottom:16px;display:flex;align-items:center;gap:10px}
.gsum h3::after{content:"";flex:1;height:1px;background:linear-gradient(-90deg,var(--gold),transparent)}
.gsum .pkline{display:flex;gap:12px;margin-bottom:14px;padding-bottom:14px;border-bottom:1px solid rgba(143,113,52,.14)}
.gsum .pkline img{width:74px;height:74px;object-fit:cover;border-radius:12px;flex:none}
.gsum .pkline>span{min-width:0}
.gsum .pkline b{font-family:var(--font-d);font-size:15px;color:var(--ink);display:block;overflow-wrap:break-word;word-break:break-word}
.gsum .pkline small{font-size:11px;color:var(--mute);display:block;margin-top:3px;line-height:1.6;overflow-wrap:break-word;word-break:break-word}
.gsum .pkline .pr{font-family:var(--font-d);color:var(--gold-deep);font-size:15px;margin-top:5px;display:block}
.gs-row{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:9px 0;
  border-bottom:1px solid rgba(143,113,52,.1);font-size:12.5px}
.gs-row:last-of-type{border:none}
.gs-row .k{color:var(--mute);display:flex;gap:7px;align-items:center;flex:none}
.gs-row .v{color:var(--ink);font-weight:600;text-align:left;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.gs-row .v .chip{font-size:10.5px;background:var(--green-bg);color:var(--green);padding:3px 10px;border-radius:999px;font-weight:700}
.gs-total{display:flex;justify-content:space-between;align-items:baseline;margin-top:12px;padding-top:14px;border-top:1px dashed var(--line)}
.gs-total .k{font-size:13.5px;font-weight:700;color:var(--ink)}
.gs-total .v{font-family:var(--font-d);font-size:26px;color:var(--gold-deep)}
.gs-note{margin-top:14px;display:flex;gap:9px;align-items:center;background:rgba(198,161,91,.1);border-radius:11px;
  padding:11px 13px;font-size:11.5px;color:var(--gold-deep)}
.why-gift{margin-top:16px}
.why-gift .wg{display:flex;gap:12px;align-items:flex-start;padding:11px 0;border-bottom:1px solid rgba(143,113,52,.1)}
.why-gift .wg:last-child{border:none}
.why-gift .wi{flex:none;width:40px;height:40px;border-radius:50%;border:1px solid var(--line);display:grid;place-items:center;color:var(--gold-deep);background:#FDFBF5}
.why-gift b{font-size:13px;color:var(--ink);display:block}
.why-gift small{font-size:11.5px;color:var(--mute)}
.help-card{margin-top:16px;text-align:center;padding:20px}
.help-card .hi{width:46px;height:46px;margin:0 auto 10px;border-radius:50%;border:1px solid var(--line);display:grid;place-items:center;color:var(--gold-deep)}
.help-card b{font-family:var(--font-d);color:var(--ink);display:block}
.help-card small{color:var(--mute);font-size:12px;display:block;margin:4px 0 12px}
.help-card a{display:inline-block;border:1.5px solid var(--gold);color:var(--gold-deep);border-radius:11px;padding:9px 26px;font-size:12.5px;font-weight:600}

/* خطوة 5: النجاح */
.gsuccess{max-width:1000px;margin-inline:auto;text-align:center;padding-top:16px}
.gsuc-head{display:flex;gap:14px;align-items:center;justify-content:center;margin-bottom:8px}
.gsuc-head .ic{width:56px;height:56px;border-radius:50%;border:2px solid var(--gold);color:var(--gold-deep);
  display:grid;place-items:center;animation:sucPop .6s var(--ease) both .1s}
@keyframes sucPop{from{transform:scale(.4);opacity:0}60%{transform:scale(1.1)}to{transform:scale(1);opacity:1}}
.gsuc-head .ic svg{stroke-dasharray:60;stroke-dashoffset:60;animation:dash .7s var(--ease) forwards .45s}
@keyframes dash{to{stroke-dashoffset:0}}
.gsuccess h1{font-family:var(--font-d);font-size:clamp(26px,3.4vw,38px);color:var(--ink)}
.gsuccess .sub{color:var(--mute);font-size:14px;margin-top:6px}
.gsuc-grid{display:grid;grid-template-columns:1.15fr 1fr;gap:18px;margin-top:26px;text-align:start}
.gsuc-card-col .gcard{box-shadow:0 26px 48px -22px rgba(20,15,5,.5)}
.gsuc-details{padding:22px}
.gsuc-details h4{font-family:var(--font-d);font-size:17px;color:var(--ink);margin-bottom:10px}
.gsuc-actions{display:flex;gap:12px;justify-content:center;margin-top:26px;flex-wrap:wrap}
.confetti{position:absolute;pointer-events:none;font-size:13px;color:var(--gold);animation:conf 3.4s ease-in-out infinite;opacity:.6}
@keyframes conf{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(-12px) rotate(24deg)}}
.thanks{margin-top:26px;color:var(--mute);font-size:13px;display:flex;gap:12px;align-items:center;justify-content:center}
.thanks i{color:var(--gold);font-style:normal}

/* الشريط السفلي */
.footbar{position:fixed;bottom:0;inset-inline:0;z-index:390;background:rgba(255,253,247,.92);
  backdrop-filter:blur(14px);border-top:1px solid var(--line);
  box-shadow:0 -14px 40px -20px rgba(80,60,20,.35);display:none}
.footbar.on{display:block}
.footbar .in{display:flex;align-items:center;gap:20px;padding:13px 0}
.btn-back{border:1.5px solid var(--line);color:var(--mute);background:#fff;padding:13px 24px}
.btn-back:hover{border-color:var(--gold);color:var(--gold-deep)}
.fb-mid{flex:1;text-align:center;font-size:12.5px;color:var(--mute)}
.fb-mid b{color:var(--gold-deep);font-family:var(--font-d);font-size:17px}
.view{display:none}
.view.on{display:block;animation:viewIn .45s var(--ease) both}
@keyframes viewIn{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
.pay-loading{position:fixed;inset:0;z-index:999;display:none;place-items:center;background:rgba(10,9,6,.7);backdrop-filter:blur(6px)}
.pay-loading.on{display:grid}
.pl-box{background:#fff;border-radius:22px;padding:42px 58px;text-align:center;animation:viewIn .35s var(--ease)}
.pl-ring{width:60px;height:60px;margin:0 auto 18px;border-radius:50%;border:3px solid rgba(198,161,91,.2);
  border-top-color:var(--gold);animation:spin 1s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
.pl-box b{font-family:var(--font-d);font-size:17px;color:var(--ink)}
.pl-box small{display:block;color:var(--mute);margin-top:7px;font-size:12px}
.toast{position:fixed;bottom:90px;right:50%;transform:translate(50%,20px);z-index:998;opacity:0;pointer-events:none;
  background:var(--ink);color:var(--champagne);padding:13px 24px;border-radius:13px;font-size:13px;
  border:1px solid var(--line-dark);transition:all .35s var(--ease);display:flex;gap:9px;align-items:center}
.toast.on{opacity:1;transform:translate(50%,0)}
.toast svg{color:var(--gold-bright)}

@media(max-width:1100px){
  .pkgs{grid-template-columns:repeat(3,1fr)}
  .gpkgs{grid-template-columns:1fr 1fr}
  .g-stage{grid-template-columns:1fr}
  .gsum{position:static;order:-1}
  .perks{grid-template-columns:repeat(3,1fr)}
  .perk:nth-child(4){border:none}
  .custom-grid{grid-template-columns:1fr}
  .preview-col{position:static}
  .gift-banner{grid-template-columns:1fr;text-align:center}
  .gift-banner .mini-feats{justify-content:center}
  .gb-box{margin-inline:auto}
}
@media(max-width:700px){
  nav.links{display:none}
  .pkgs,.gpkgs,.gtype-grid,.pay-methods{grid-template-columns:1fr}
  .pkgs{max-width:420px;margin-inline:auto}
  .g-step b,.g-step small{display:none}
  .g-step .bubble{width:40px;height:40px}
  .g-step .bar{top:20px;right:calc(50% + 26px);width:calc(100% - 52px)}
  .designs,.methods{grid-template-columns:repeat(3,1fr)}
  .perks{grid-template-columns:1fr 1fr}
  .perk{border:none}
  .pk-hero .in{padding:32px 24px}
  .gsuc-grid{grid-template-columns:1fr}
  .two{grid-template-columns:1fr}
  .fb-mid{display:none}
  .filters{overflow-x:auto;flex-wrap:nowrap;padding-bottom:6px}
  .flt{flex:none}
}
/* ===== حجز الباقة: اختيار الفرع ===== */
.bk-branches{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.bkbr{position:relative;background:#fff;border:1.5px solid var(--line);border-radius:18px;overflow:hidden;cursor:pointer;
  transition:all .3s var(--ease);animation:pkgIn .4s var(--ease) both}
.bkbr:hover{transform:translateY(-5px);box-shadow:0 24px 44px -24px rgba(80,60,20,.5)}
.bkbr.sel{border-color:var(--gold);box-shadow:0 0 0 4px rgba(198,161,91,.16)}
.bkbr .ph{aspect-ratio:16/9.5;overflow:hidden;position:relative;background:#161209}
.bkbr .ph img{width:100%;height:100%;object-fit:cover;transition:transform .7s var(--ease)}
.bkbr:hover .ph img{transform:scale(1.05)}
.bkbr .chk{position:absolute;top:10px;left:10px;width:26px;height:26px;border-radius:50%;z-index:2;
  background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);display:grid;place-items:center;
  opacity:0;transform:scale(.4);transition:all .3s var(--ease)}
.bkbr.sel .chk{opacity:1;transform:scale(1)}
.bkbr .homeflag{position:absolute;top:10px;right:10px;background:rgba(255,251,240,.94);color:var(--gold-deep);
  font-size:10.5px;font-weight:700;padding:6px 12px;border-radius:999px;z-index:2}
.bkbr .bd{padding:16px;text-align:center}
.bkbr h4{font-family:var(--font-d);font-size:17px;color:var(--gold-deep)}
.bkbr .addr{font-size:12px;color:var(--mute);margin:5px 0 11px}
.bkbr .meta{display:flex;justify-content:center;gap:13px;font-size:11.5px;color:#5c5442;
  border-top:1px dashed var(--line);padding-top:11px;flex-wrap:wrap}
.bkbr .meta .live{color:var(--green);display:flex;gap:5px;align-items:center}
.bkbr .meta .live i{width:6px;height:6px;border-radius:50%;background:var(--green);animation:pulseDot 2s infinite}
@keyframes pulseDot{0%,100%{opacity:1}50%{opacity:.3}}
/* ===== شريط الأيام والأوقات ===== */
.daystrip{display:flex;gap:10px;overflow-x:auto;padding:4px 2px 10px;scrollbar-width:thin}
.day{flex:0 0 84px;text-align:center;padding:13px 8px;border-radius:14px;border:1.5px solid var(--line);
  background:#fff;cursor:pointer;transition:all .25s var(--ease)}
.day:hover{transform:translateY(-3px);border-color:rgba(143,113,52,.5)}
.day.sel{border-color:var(--gold);background:linear-gradient(160deg,#FFF9EC,#fff);box-shadow:0 0 0 3px rgba(198,161,91,.16)}
.day small{font-size:11px;color:var(--mute);display:block}
.day b{font-family:var(--font-d);font-size:21px;color:var(--ink);display:block;margin:3px 0}
.day.sel b,.day.sel small{color:var(--gold-deep)}
.periods{display:flex;gap:10px;margin:16px 0 14px}
.period{flex:1;display:flex;align-items:center;justify-content:center;gap:8px;padding:11px;border-radius:12px;
  border:1.5px solid var(--line);font-size:13px;color:var(--mute);transition:all var(--dur) var(--ease);background:#fff}
.period.sel{border-color:var(--gold);color:var(--gold-deep);background:rgba(198,161,91,.08);font-weight:600}
.slots{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}
.slot{position:relative;padding:12px;border-radius:12px;border:1.5px solid var(--line);font-size:13.5px;color:var(--ink);
  transition:all .22s var(--ease);background:#fff;animation:pkgIn .3s var(--ease) both}
.slot:hover:not(:disabled){transform:scale(1.04);border-color:rgba(143,113,52,.5);box-shadow:0 10px 20px -10px rgba(80,60,20,.35)}
.slot:disabled{color:#C9C1AC;background:#FAF7EF;cursor:default;text-decoration:line-through}
.slot.sel{border-color:var(--gold);background:linear-gradient(160deg,#FFF9EC,#fff);font-weight:700;color:var(--gold-deep);
  box-shadow:0 0 0 3px rgba(198,161,91,.16)}
.slot.sel::after{content:"✓";position:absolute;top:-8px;left:-8px;width:22px;height:22px;border-radius:50%;
  background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);font-size:11px;display:grid;place-items:center}
.slot .tag{position:absolute;top:-9px;right:10px;font-size:9.5px;font-weight:700;padding:3px 9px;border-radius:999px;
  background:#FFEFE0;color:#B0622A}
.end-line{display:flex;gap:10px;align-items:center;justify-content:space-between;background:rgba(198,161,91,.08);
  border:1px solid var(--line);border-radius:13px;padding:13px 18px;margin-top:16px;font-size:12.5px;color:var(--gold-deep)}
.end-line b{color:var(--ink)}
/* ===== تأكيد حجز الباقة ===== */
.bk-pkg-hero{display:flex;gap:16px;align-items:center;padding:18px;margin-bottom:16px}
.bk-pkg-hero img{width:110px;height:88px;object-fit:cover;border-radius:14px}
.bk-pkg-hero .t{flex:1}
.bk-pkg-hero h4{font-family:var(--font-d);font-size:19px;color:var(--ink)}
.bk-pkg-hero small{color:var(--mute);font-size:12px;display:block;margin-top:4px;line-height:1.7}
.bk-pkg-hero .incs{display:flex;gap:7px;flex-wrap:wrap;margin-top:9px}
.bk-pkg-hero .incs span{font-size:10.5px;background:rgba(198,161,91,.12);color:var(--gold-deep);
  padding:4px 11px;border-radius:999px}
.bk-pkg-hero .pr{font-family:var(--font-d);font-size:26px;color:var(--pc,var(--gold-deep));white-space:nowrap}
.bk-rows{padding:6px 20px}
.ok-banner{display:flex;gap:14px;align-items:center;background:var(--green-bg);border:1px solid rgba(46,139,87,.25);
  border-radius:15px;padding:15px 20px;margin-bottom:16px}
.ok-banner .ic{width:38px;height:38px;border-radius:50%;background:var(--green);color:#fff;display:grid;place-items:center;flex:none}
.ok-banner b{color:#1E6B41;font-size:14px;display:block}
.ok-banner small{color:#4a7d5f;font-size:12px}
/* ===== دفع الباقة (قائمة عمودية كالتصميم) ===== */
.bk-pays{display:grid;gap:10px}
.bkpm{display:flex;align-items:center;gap:14px;padding:15px 18px;border-radius:14px;border:1.5px solid var(--line);
  background:#fff;cursor:pointer;transition:all var(--dur) var(--ease)}
.bkpm:hover{border-color:rgba(143,113,52,.5)}
.bkpm.sel{border-color:var(--gold);background:linear-gradient(160deg,#FFFBF0,#fff);box-shadow:0 0 0 3px rgba(198,161,91,.15)}
.bkpm .lg{width:64px;height:34px;border-radius:9px;display:grid;place-items:center;background:#F5F0E4;
  font-weight:800;font-size:11.5px;color:var(--ink);flex:none}
.bkpm b{font-size:13.5px;color:var(--ink)}
.bkpm .rad{margin-inline-start:auto;width:22px;height:22px;border-radius:50%;border:1.5px solid var(--line);
  display:grid;place-items:center;transition:all .25s var(--ease);flex:none}
.bkpm .rad i{width:10px;height:10px;border-radius:50%;background:linear-gradient(135deg,var(--gold-bright),var(--gold));
  transform:scale(0);transition:transform .25s var(--ease)}
.bkpm.sel .rad{border-color:var(--gold)}
.bkpm.sel .rad i{transform:scale(1)}
.pay-summary-strip{padding:16px 20px;margin-bottom:14px;background:linear-gradient(160deg,#FFF9EC,#fff)}
.pay-summary-strip b{font-family:var(--font-d);font-size:16px;color:var(--ink);display:block}
.pay-summary-strip small{color:var(--mute);font-size:12px;display:block;margin-top:5px}
.pay-summary-strip .amt{font-family:var(--font-d);font-size:26px;color:var(--gold-deep);margin-top:8px;display:block}
.btn-paynow{width:100%;background:var(--ink);color:#fff;padding:16px;border-radius:14px;font-size:15px;font-weight:700;
  display:flex;justify-content:center;gap:10px;transition:all var(--dur) var(--ease);margin-top:16px}
.btn-paynow:hover:not(:disabled){background:#241E12;transform:translateY(-2px);box-shadow:0 16px 30px -14px rgba(10,9,6,.6)}
.btn-paynow:disabled{opacity:.45;cursor:not-allowed}
.qr-box{width:150px;height:150px;margin:14px auto 0;border:1.5px solid var(--gold);border-radius:16px;padding:9px;background:#fff}
.qr-box canvas{width:100%;height:100%;image-rendering:pixelated}
@media(max-width:1100px){.bk-branches{grid-template-columns:1fr 1fr}}
@media(max-width:700px){
  .bk-branches{grid-template-columns:1fr}
  .slots{grid-template-columns:repeat(2,1fr)}
  .bk-pkg-hero{flex-wrap:wrap}
}
@media(prefers-reduced-motion:reduce){
  *,*::before,*::after{animation-duration:.01ms!important;transition-duration:.01ms!important}
}
`,it={class:"branch-gate"},rt={class:"ph"},st=["src","alt"],lt={class:"body"},dt={class:"dur"},pt={class:"desc"},gt={class:"inc"},ct={class:"price"},xt={class:"acts"},ut=["data-book","onClick"],ft=["data-gift","onClick"],bt={class:"gift-banner"},mt={class:"txt"},ht={class:"mini-feats"},vt={class:"mi"},kt={class:"cta"},yt={class:"perks"},wt={class:"pi"},_t={__name:"PackagesCatalog",emits:["book","gift","gift-now","pick-branch"],setup(P,{emit:d}){const{state:y,filteredPkgs:v}=L(),p=d,e=M=>M.toLocaleString("ar-EG-u-nu-latn"),c=$(()=>{const M=Gn.find(i=>i.id===y.siteBranch);return M?M.name:""}),b=$(()=>`grid-template-columns:repeat(${Math.min(v.value.length,5)},1fr)`),s={clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',gift:'<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7s-2-5-5-5-3 5 0 5h5zM12 7s2-5 5-5 3 5 0 5h-5z"/>'},r=[["بطاقة إهداء رقمية",'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>'],["رسالة مخصصة من قلبك",'<path d="M21 11.5a8.4 8.4 0 01-9 8.4 8.5 8.5 0 01-3.8-.9L3 21l2-5.2a8.4 8.4 0 011.5-9.8 8.5 8.5 0 0114.5 5.5z"/>'],["إرسال فوري عبر واتساب أو بريد",'<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>'],["جدولة الإهداء في الوقت المناسب",'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>']],m=[["غرفة VIP خاصة","لباقات مختارة",'<path d="M2 8l4 4 6-8 6 8 4-4v10a2 2 0 01-2 2H4a2 2 0 01-2-2z"/>'],["منتجات فاخرة","ضمن باقاتك",'<path d="M20 12v9H4v-9M2 7h20v5H2z"/>'],["أولوية في الحجز","مواعيد مرنة",'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4"/>'],["ضيافة فاخرة","مشروبات مختارة",'<path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4z"/>'],["نقاط ولاء مضاعفة","مع كل باقة",'<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7"/>'],["ضمان الجودة","أفضل تجربة",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>']];return(M,i)=>(a(),l(_,null,[i[15]||(i[15]=en('<section class="pk-hero"><div class="bg"><img src="'+ot+'" alt=""></div><svg class="ghost-logo" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width=".8"><path d="M12 2l9 5v10l-9 5-9-5V7z"></path><path d="M12 2v20M3 7l9 5 9-5M3 17l9-5 9 5"></path></svg><div class="in"><div class="eyebrow">تجارب متكاملة</div><h1>لراحتـك وأناقتـك</h1><p>اختر الباقة التي تناسب احتياجاتك واستمتع بتجربة عناية متكاملة توفر عليك الوقت والجهد</p></div></section>',1)),n("div",it,[t(y).siteBranch?(a(),l(_,{key:0},[n("span",null,[i[3]||(i[3]=x("📍 الفرع المختار: ",-1)),n("b",null,o(c.value),1)]),n("button",{id:"branchGateChange",onClick:i[0]||(i[0]=k=>p("pick-branch"))},"تغيير الفرع")],64)):(a(),l(_,{key:1},[i[4]||(i[4]=n("span",null,"حدد فرعك أولًا لعرض الأسعار والمواعيد المتاحة بدقة",-1)),n("button",{id:"branchGateChange",class:"primary",onClick:i[1]||(i[1]=k=>p("pick-branch"))},"اختر الفرع")],64))]),n("div",{class:"pkgs",style:G(b.value)},[(a(!0),l(_,null,D(t(v),(k,N)=>(a(),l("article",{key:k.id,class:I(["pkg",{hot:k.hot}]),style:G(`--pc:${k.color};animation-delay:${N*.07}s`)},[n("div",rt,[n("img",{src:k.img,alt:k.name},null,8,st),k.hot?(a(),l(_,{key:0},[i[5]||(i[5]=n("span",{class:"hotflag"},"الأكثر طلبًا",-1)),i[6]||(i[6]=n("span",{class:"starflag"},"★",-1))],64)):j("",!0)]),n("span",{class:"badge",style:G(`border-color:${k.hex}`)},[g(h,{inner:k.ico,size:22},null,8,["inner"])],4),n("div",lt,[n("h3",null,o(k.name),1),n("div",dt,[g(h,{inner:s.clock,size:13},null,8,["inner"]),x(" "+o(k.dur)+" دقيقة",1)]),n("div",pt,o(k.desc),1),n("div",gt,[i[8]||(i[8]=n("b",null,"تشمل الباقة",-1)),n("ul",null,[(a(!0),l(_,null,D(k.inc,(w,z)=>(a(),l("li",{key:z},[i[7]||(i[7]=n("i",null,"✓",-1)),x(o(w),1)]))),128))])]),n("div",ct,[x(o(e(k.price))+" ",1),i[9]||(i[9]=n("small",null,"ر.س",-1))]),n("div",xt,[n("button",{class:"book","data-book":k.id,onClick:w=>p("book",k.id)},"احجز الباقة",8,ut),n("button",{class:"gift-mini","data-gift":k.id,onClick:w=>p("gift",k.id)},[g(h,{inner:s.gift,size:14},null,8,["inner"]),i[10]||(i[10]=x(" أهدِ هذه الباقة",-1))],8,ft)])])],6))),128))],4),n("section",bt,[i[14]||(i[14]=n("div",{class:"gb-box"},[n("div",{class:"face"}),n("span",{class:"tag"},"هدية لكم من القلب 💛")],-1)),n("div",mt,[i[11]||(i[11]=n("h2",null,"أهدِ تجربة فاخرة لمن تحب",-1)),i[12]||(i[12]=n("p",null,"اختر الباقة، أضف رسالة مخصصة، وسيصلك المهدى إليه بشكل أنيق في الوقت المناسب",-1)),n("div",ht,[(a(),l(_,null,D(r,(k,N)=>n("div",{key:N,class:"mf"},[n("span",vt,[g(h,{inner:k[1],size:16},null,8,["inner"])]),x(o(k[0]),1)])),64))])]),n("div",kt,[n("button",{class:"btn btn-gold",id:"giftNow",onClick:i[2]||(i[2]=k=>p("gift-now"))},[g(h,{inner:s.gift,size:16},null,8,["inner"]),i[13]||(i[13]=x(" أهدِ باقة الآن",-1))])])]),n("div",yt,[(a(),l(_,null,D(m,(k,N)=>n("div",{key:N,class:"perk"},[n("span",wt,[g(h,{inner:k[2],size:17},null,8,["inner"])]),n("b",null,o(k[0]),1),n("small",null,o(k[1]),1)])),64))])],64))}},zt={class:"g-stepper"},$t={class:"g-steps"},Mt=["data-bi"],Ct={class:"bubble"},Ft='<path d="M20 6L9 17l-5-5"/>',Bt={__name:"BookStepper",setup(P){const{state:d}=L();return(y,v)=>(a(),l("div",zt,[n("div",$t,[(a(!0),l(_,null,D(t(Rn),(p,e)=>(a(),l("div",{key:e,class:I(["g-step",{active:e===t(d).bk.step&&!t(d).bk.done,done:e<t(d).bk.step||t(d).bk.done}]),"data-bi":e},[v[0]||(v[0]=n("div",{class:"bar"},[n("i")],-1)),n("span",Ct,[e<t(d).bk.step||t(d).bk.done?(a(),T(h,{key:0,inner:Ft,size:17})):(a(),l(_,{key:1},[x(o(e+1),1)],64))]),n("b",null,o(p.t),1),n("small",null,o(p.s),1)],10,Mt))),128))])]))}},Et={class:"g-head"},St={class:"card",style:{padding:"20px","margin-bottom":"16px"}},At={class:"daystrip"},It=["data-bd","onClick"],Dt={key:0,class:"card",style:{padding:"20px"}},Lt={key:1,class:"card",style:{padding:"20px"}},Pt={class:"periods"},Nt=["data-bp","onClick"],Ht={key:1,class:"slots"},jt=["data-bt","onClick"],Tt={key:0,class:"tag"},Yt={key:2,class:"card",style:{padding:"40px","text-align":"center",color:"var(--mute)","font-size":"13.5px"}},bn="grid-column:1/-1;text-align:center;color:var(--mute);padding:30px;border:1.5px dashed var(--line);border-radius:14px;font-size:13px",Vt="font-family:var(--font-d);font-size:15px;color:var(--ink);margin-bottom:12px",Gt="font-family:var(--font-d);font-size:15px;color:var(--ink);margin-bottom:4px",Rt={__name:"BookTimeStep",setup(P){const{state:d,pkgOf:y,bkDays:v}=L(),p=d.bk,e=v(),c=$(()=>y(p.pkg)),b=V(!0),s=V([]),r=V(!1);function m(w){return`${w.getFullYear()}-${String(w.getMonth()+1).padStart(2,"0")}-${String(w.getDate()).padStart(2,"0")}`}Dn(async()=>{if(p.employee){b.value=!1;return}try{const w=await Zn({branchId:p.branch,serviceId:0}),z=(Array.isArray(w)?w:[])[0];z&&(p.employee={id:z.id,name:[z.first_name,z.last_name].filter(Boolean).join(" ")||"موظف"})}catch{p.employee=null}finally{b.value=!1}});async function M(){var w;if(p.dayIdx==null||!p.employee){s.value=[];return}r.value=!0;try{const z=await nt({date:m(e[p.dayIdx]),staffId:p.employee.id,durationMin:(w=c.value)==null?void 0:w.dur});s.value=Array.isArray(z)?z:[]}catch{s.value=[]}finally{r.value=!1}}Ln(()=>{var w;return[p.dayIdx,(w=p.employee)==null?void 0:w.id]},M);const i=$(()=>s.value.filter(w=>{const z=Number(w.split(":")[0]);return p.period==="all"||p.period==="am"&&z<12||p.period==="pm"&&z>=12&&z<17||p.period==="eve"&&z>=17})),k=w=>w===2?"الأكثر طلبًا":w===i.value.length-1?"آخر موعد":"",N=[["all","كل اليوم","🗓️"],["am","صباحًا","☀️"],["pm","مساءً","🌇"]];return(w,z)=>(a(),l(_,null,[n("div",Et,[z[0]||(z[0]=n("h1",null,"اختر الوقت والتاريخ",-1)),n("p",null,"اختر الوقت المناسب لك — مدة الباقة "+o(c.value.dur)+" دقيقة",1)]),n("div",St,[n("h4",{style:Vt},"📅 اختر اليوم"),n("div",At,[(a(!0),l(_,null,D(t(e),(u,C)=>(a(),l("div",{key:C,class:I(["day",{sel:t(p).dayIdx===C}]),"data-bd":C,onClick:K=>{t(p).dayIdx=C,t(p).time=null}},[n("small",null,o(t(On)[u.getDay()]),1),n("b",null,o(u.getDate()),1),n("small",null,o(t(Un)[u.getMonth()]),1)],10,It))),128))])]),b.value?(a(),l("div",Dt,[g(fn,{height:"72px","border-radius":"12px"})])):t(p).dayIdx!=null?(a(),l("div",Lt,[n("h4",{style:Gt},"🕐 "+o(t(W)(t(e)[t(p).dayIdx])),1),n("div",Pt,[(a(),l(_,null,D(N,u=>n("button",{key:u[0],class:I(["period",{sel:t(p).period===u[0]}]),"data-bp":u[0],onClick:C=>t(p).period=u[0]},o(u[2])+" "+o(u[1]),11,Nt)),64))]),r.value?(a(),l("div",{key:0,style:bn},[g(fn,{height:"44px","border-radius":"10px"})])):(a(),l("div",Ht,[i.value.length?(a(!0),l(_,{key:0},D(i.value,(u,C)=>(a(),l("button",{key:u,class:I(["slot",{sel:t(p).time===u}]),"data-bt":u,style:G(`animation-delay:${Math.min(C*.03,.4)}s`),onClick:K=>t(p).time=u},[k(C)?(a(),l("span",Tt,o(k(C)),1)):(a(),l(_,{key:1},[],64)),x(o(t(q)(u)),1)],14,jt))),128)):(a(),l("div",{key:1,style:bn},"لا توجد أوقات متاحة في هذه الفترة"))]))])):(a(),l("div",Yt,[...z[1]||(z[1]=[n("b",{style:{display:"block","font-family":"var(--font-d)","font-size":"16px",color:"var(--ink)","margin-bottom":"6px"}},"ابدأ باختيار اليوم",-1),x("اختر يومًا من الشريط أعلاه لعرض الأوقات المتاحة",-1)])]))],64))}},Ot={class:"ok-banner"},Ut={class:"ic"},Wt=["src","alt"],qt={class:"t"},Kt={class:"incs"},Xt={class:"pr"},Qt={class:"card bk-rows",style:{"margin-bottom":"16px"}},Jt={class:"gs-row"},Zt={class:"k"},ne={class:"v"},te={class:"gs-row"},ee={class:"k"},oe={class:"v"},ae={class:"gs-row"},ie={class:"k"},re={class:"v",dir:"ltr"},se={class:"gs-row"},le={class:"k"},de={class:"v"},pe={class:"card",style:{padding:"20px"}},ge={class:"fld",style:{margin:"0"}},ce="font-size:12px;color:var(--mute);font-family:var(--font-b)",xe="display:flex;gap:9px;align-items:center;font-size:12px;color:var(--mute);background:rgba(198,161,91,.08);border-radius:11px;padding:11px 15px;margin-top:14px",ue="color:var(--gold-deep);font-weight:600;text-decoration:underline",fe={__name:"BookConfirmStep",setup(P){const{state:d,pkgOf:y,bkDays:v}=L(),p=d.bk,e=$(()=>y(p.pkg)),c=$(()=>v()[p.dayIdx]),b={check:'<path d="M20 6L9 17l-5-5"/>',pin:'<path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>',cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>'};return(s,r)=>{const m=hn("RouterLink");return a(),l(_,null,[r[9]||(r[9]=n("div",{class:"g-head"},[n("h1",null,"تأكيد الحجز"),n("p",null,"راجع تفاصيل الحجز قبل المتابعة للدفع")],-1)),n("div",Ot,[n("span",Ut,[g(h,{inner:b.check,size:16},null,8,["inner"])]),r[1]||(r[1]=n("div",null,[n("b",null,"تم حفظ موعدك بنجاح"),n("small",null,"يمكنك تعديل أو إلغاء الحجز قبل 6 ساعات من وقت الموعد")],-1))]),n("div",{class:"card bk-pkg-hero",style:G(`--pc:${e.value.color}`)},[n("img",{src:e.value.img,alt:e.value.name},null,8,Wt),n("div",qt,[n("h4",null,o(e.value.name),1),n("small",null,"🕐 "+o(e.value.dur)+" دقيقة — "+o(e.value.desc),1),n("div",Kt,[(a(!0),l(_,null,D(e.value.inc,(M,i)=>(a(),l("span",{key:i},"✓ "+o(M),1))),128))])]),n("div",Xt,[x(o(t(Y)(e.value.price))+" ",1),n("small",{style:ce},"ر.س")])],4),n("div",Qt,[n("div",Jt,[n("span",Zt,[g(h,{inner:b.pin,size:15},null,8,["inner"]),r[2]||(r[2]=x(" الفرع",-1))]),n("span",ne,o(e.value.branchName),1)]),n("div",te,[n("span",ee,[g(h,{inner:b.cal,size:15},null,8,["inner"]),r[3]||(r[3]=x(" التاريخ",-1))]),n("span",oe,o(t(W)(c.value)),1)]),n("div",ae,[n("span",ie,[g(h,{inner:b.clock,size:15},null,8,["inner"]),r[4]||(r[4]=x(" الوقت",-1))]),n("span",re,o(t(q)(t(p).time)),1)]),n("div",se,[n("span",le,[g(h,{inner:b.info,size:15},null,8,["inner"]),r[5]||(r[5]=x(" مدة الجلسة",-1))]),n("span",de,o(e.value.dur)+" دقيقة",1)])]),n("div",pe,[n("div",ge,[r[6]||(r[6]=n("label",null,"📝 ملاحظات (اختياري)",-1)),X(n("textarea",{id:"bkNotes",placeholder:"أضف أي ملاحظة...","onUpdate:modelValue":r[0]||(r[0]=M=>t(p).notes=M)},null,512),[[tn,t(p).notes]])]),n("div",{style:xe},[r[8]||(r[8]=x(" 🛡️ بالتأكيد على الحجز، فإنك توافق على ",-1)),g(m,{to:"/terms",style:ue},{default:H(()=>[...r[7]||(r[7]=[x("الشروط والأحكام",-1)])]),_:1})])])],64)}}},be={class:"card pay-summary-strip"},me={class:"amt"},he={class:"card",style:{padding:"20px"}},ve=["disabled"],ke={__name:"BookPayStep",emits:["pay"],setup(P,{emit:d}){const{state:y,pkgOf:v,bkDays:p}=L(),e=d,c=y.bk,b=$(()=>v(c.pkg)),s=$(()=>p()[c.dayIdx]),r=$(()=>{var k;const i=Math.max(Number((k=b.value)==null?void 0:k.price)||0,0);return i+Math.round(i*.15)}),m=$(()=>Q.rewards(c,r.value).payable),M=$(()=>Q.canPay(c,r.value));return(i,k)=>(a(),l(_,null,[k[1]||(k[1]=n("div",{class:"g-head"},[n("h1",null,"اختر طريقة الدفع"),n("p",null,"ادفع بأمان وسهولة")],-1)),n("div",be,[n("b",null,o(b.value.name),1),n("small",null,o(b.value.branchName)+" — "+o(t(W)(s.value))+" • "+o(t(q)(t(c).time)),1),n("span",me,o(t(Y)(r.value))+" ر.س",1)]),n("div",he,[g(vn,{state:t(c),total:r.value},null,8,["state","total"]),n("button",{class:"btn-paynow",disabled:!M.value,onClick:k[0]||(k[0]=N=>e("pay"))},"ادفع الآن — "+o(t(Y)(m.value))+" ر.س",9,ve)])],64))}},ye={class:"gsuccess"},we={class:"gsuc-grid"},_e={class:"card gsuc-details"},ze={class:"gs-row"},$e={class:"k"},Me={class:"v"},Ce={class:"gs-row"},Fe={class:"k"},Be={class:"v"},Ee={class:"gs-row"},Se={class:"k"},Ae={class:"v"},Ie={class:"gs-row"},De={class:"k"},Le={class:"v",dir:"ltr"},Pe={class:"gs-row"},Ne={class:"k"},He={class:"v"},je={class:"gs-row"},Te={class:"k"},Ye={class:"gs-row"},Ve={class:"k"},Ge={class:"v",dir:"ltr"},Re={class:"card gsuc-details",style:{"text-align":"center"}},Oe={class:"gsuc-actions"},Ue="color:var(--gold-deep);font-family:var(--font-d);font-size:16px",We="display:flex;gap:8px;margin-top:14px",mn="flex:1;padding:11px;font-size:12px",qe={__name:"BookSuccess",emits:["home","calendar","share"],setup(P,{emit:d}){const{state:y,pkgOf:v,bkDays:p}=L(),e=d,c=y.bk,b=$(()=>v(c.pkg)),s=$(()=>p()[c.dayIdx]),r=$(()=>{var M,i;return Xn({r:c.ref||"",b:b.value.branchName,d:W(s.value),u:`${b.value.dur} دقيقة`,e:((M=c.employee)==null?void 0:M.name)||"",p:Number(b.value.price)+Math.round(Number(b.value.price)*.15),s:[[b.value.name,q(c.time),((i=c.employee)==null?void 0:i.name)||"",b.value.price]]})}),m={box:'<path d="M20 12v10H4V12M2 7h20v5H2z"/>',pin:'<path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>',cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>',card:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',qr:'<path d="M4 4h16v16H4z"/><path d="M9 9h2v2H9zM13 9h2M9 13h2M13 13h2v2h-2z"/>',home:'<path d="M3 9l9-6 9 6v11a1 1 0 01-1 1H4a1 1 0 01-1-1z"/>',calAdd:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M12 14v4M10 16h4"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>'};return(M,i)=>(a(),l("div",ye,[i[15]||(i[15]=en('<div class="gsuc-head"><h1>تم تأكيد حجزك بنجاح!</h1><span class="ic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6L9 17l-5-5"></path></svg></span></div><p class="sub">نتطلع لخدمتك وتقديم تجربة استثنائية تليق بك</p>',2)),n("div",we,[n("div",_e,[i[10]||(i[10]=n("h4",null,"تفاصيل الحجز",-1)),n("div",ze,[n("span",$e,[g(h,{inner:m.box,size:14},null,8,["inner"]),i[3]||(i[3]=x(" الباقة",-1))]),n("span",Me,o(b.value.name),1)]),n("div",Ce,[n("span",Fe,[g(h,{inner:m.pin,size:14},null,8,["inner"]),i[4]||(i[4]=x(" الفرع",-1))]),n("span",Be,o(b.value.branchName),1)]),n("div",Ee,[n("span",Se,[g(h,{inner:m.cal,size:14},null,8,["inner"]),i[5]||(i[5]=x(" التاريخ",-1))]),n("span",Ae,o(t(W)(s.value)),1)]),n("div",Ie,[n("span",De,[g(h,{inner:m.clock,size:14},null,8,["inner"]),i[6]||(i[6]=x(" الوقت",-1))]),n("span",Le,o(t(q)(t(c).time)),1)]),n("div",Pe,[n("span",Ne,[g(h,{inner:m.info,size:14},null,8,["inner"]),i[7]||(i[7]=x(" مدة الجلسة",-1))]),n("span",He,o(b.value.dur)+" دقيقة",1)]),n("div",je,[n("span",Te,[g(h,{inner:m.card,size:14},null,8,["inner"]),i[8]||(i[8]=x(" المبلغ المدفوع",-1))]),n("span",{class:"v",style:Ue},o(t(Y)(b.value.price))+" ر.س",1)]),n("div",Ye,[n("span",Ve,[g(h,{inner:m.qr,size:14},null,8,["inner"]),i[9]||(i[9]=x(" رمز الحجز",-1))]),n("span",Ge,o(t(c).ref),1)])]),n("div",Re,[i[11]||(i[11]=n("h4",{style:{"text-align":"right"}},"رمز الوصول السريع",-1)),g(Qn,{url:r.value},null,8,["url"]),n("div",{style:We},[n("button",{class:"btn btn-dark",style:mn},"🍎 Apple Wallet"),n("button",{class:"btn btn-dark",style:mn},"📲 Google Wallet")])])]),n("div",Oe,[n("button",{class:"btn btn-gold",id:"bkHome",onClick:i[0]||(i[0]=k=>e("home"))},[g(h,{inner:m.home,size:15},null,8,["inner"]),i[12]||(i[12]=x(" العودة إلى الرئيسية",-1))]),n("button",{class:"btn btn-line",id:"bkCal",onClick:i[1]||(i[1]=k=>e("calendar"))},[g(h,{inner:m.calAdd,size:15},null,8,["inner"]),i[13]||(i[13]=x(" إضافة إلى التقويم",-1))]),n("button",{class:"btn btn-line",id:"bkShare",onClick:i[2]||(i[2]=k=>e("share"))},[g(h,{inner:m.share,size:15},null,8,["inner"]),i[14]||(i[14]=x(" مشاركة الحجز",-1))])]),i[16]||(i[16]=n("div",{class:"thanks"},[n("i",null,"❦"),x(" جودة تستحقها.. تجربة لا تنساها "),n("i",null,"❦")],-1))]))}},Ke={class:"gsum"},Xe={class:"card"},Qe={class:"pkline"},Je=["src"],Ze={class:"pr"},no={key:0,class:"gs-row"},to={class:"v"},eo={key:1,class:"gs-row"},oo={class:"v"},ao={key:2,class:"gs-row"},io={class:"v"},ro={key:3,class:"gs-row"},so={class:"v"},lo={class:"gs-total"},po={class:"v"},go={class:"gs-note"},co={class:"card help-card"},xo={class:"hi"},uo={__name:"BookSummary",setup(P){const{state:d,pkgOf:y,bkDays:v}=L(),p=d.bk,e=$(()=>y(p.pkg)),c=$(()=>p.dayIdx!=null?v()[p.dayIdx]:null),b=$(()=>{const r=Wn.find(m=>m.id===p.pay);return r?r.n:""}),s={shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',head:'<path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>'};return(r,m)=>(a(),l("div",Ke,[n("div",Xe,[m[7]||(m[7]=n("h3",null,"ملخص الحجز",-1)),n("div",Qe,[n("img",{src:e.value.img,alt:""},null,8,Je),n("span",null,[n("b",null,o(e.value.name),1),n("small",null,"🕐 "+o(e.value.dur)+" دقيقة",1),n("small",null,o(e.value.desc),1),n("span",Ze,o(t(Y)(e.value.price))+" ر.س",1)])]),e.value.branchName?(a(),l("div",no,[m[0]||(m[0]=n("span",{class:"k"},"📍 الفرع",-1)),n("span",to,o(e.value.branchName),1)])):j("",!0),c.value?(a(),l("div",eo,[m[1]||(m[1]=n("span",{class:"k"},"📅 التاريخ",-1)),n("span",oo,o(t(W)(c.value)),1)])):j("",!0),t(p).time!=null?(a(),l("div",ao,[m[2]||(m[2]=n("span",{class:"k"},"🕐 الوقت",-1)),n("span",io,o(t(q)(t(p).time)),1)])):j("",!0),t(p).pay?(a(),l("div",ro,[m[3]||(m[3]=n("span",{class:"k"},"💳 طريقة الدفع",-1)),n("span",so,o(b.value),1)])):j("",!0),n("div",lo,[m[5]||(m[5]=n("span",{class:"k"},"الإجمالي",-1)),n("span",po,[x(o(t(Y)(e.value.price))+" ",1),m[4]||(m[4]=n("small",{style:{"font-size":"13px"}},"ر.س",-1))])]),n("div",go,[g(h,{inner:s.shield,size:14},null,8,["inner"]),m[6]||(m[6]=x(" حجز آمن — تعديل أو إلغاء مجاني قبل 6 ساعات",-1))])]),n("div",co,[n("span",xo,[g(h,{inner:s.head,size:18},null,8,["inner"])]),m[8]||(m[8]=n("b",null,"دعم على مدار الساعة",-1)),m[9]||(m[9]=n("small",null,"نحن هنا لخدمتك",-1)),m[10]||(m[10]=n("a",{href:"https://wa.me/963959415545"},"تواصل معنا",-1))])]))}},fo={class:"g-stepper"},bo={class:"g-steps"},mo=["data-i"],ho={class:"bubble"},vo='<path d="M20 6L9 17l-5-5"/>',ko={__name:"GiftStepper",setup(P){const{state:d}=L();return(y,v)=>(a(),l("div",fo,[n("div",bo,[(a(!0),l(_,null,D(t(qn),(p,e)=>(a(),l("div",{key:e,class:I(["g-step",{active:e===t(d).gstep,done:e<t(d).gstep||t(d).done}]),"data-i":e},[v[0]||(v[0]=n("div",{class:"bar"},[n("i")],-1)),n("span",ho,[e<t(d).gstep||t(d).done?(a(),T(h,{key:0,inner:vo,size:17})):(a(),l(_,{key:1},[x(o(e+1),1)],64))]),n("b",null,o(p.t),1),n("small",null,o(p.s),1)],10,mo))),128))])]))}},yo={class:"gtype-grid"},wo=["data-gt","onClick"],_o={class:"im"},zo=["src"],$o={class:"ic"},Mo={class:"bd"},Co={class:"go"},Fo='<path d="M19 12H5M11 18l-6-6 6-6"/>',Bo={__name:"GiftTypeStep",setup(P){const{state:d}=L();return(y,v)=>(a(),l(_,null,[v[0]||(v[0]=n("div",{class:"g-head"},[n("h1",null,"ماذا ترغب بإهدائه؟"),n("p",null,"اختر ما يناسبك لإهداء تجربة مميزة لمن تحب")],-1)),n("div",yo,[(a(!0),l(_,null,D(t(Kn),p=>(a(),l("div",{key:p.id,class:I(["gtype",{sel:t(d).gtype===p.id}]),"data-gt":p.id,onClick:e=>t(d).gtype=p.id},[n("div",_o,[n("img",{src:p.img,alt:""},null,8,zo),n("span",$o,[g(h,{inner:p.ic,size:22},null,8,["inner"])])]),n("div",Mo,[n("h3",null,o(p.n),1),n("p",null,o(p.d),1),n("span",Co,[x(o(p.btn)+" ",1),g(h,{inner:Fo,size:14})])])],10,wo))),128))])],64))}},Eo={class:"gp-sort"},So={class:"gpkgs"},Ao=["data-gp","onClick"],Io={class:"ph"},Do=["src","alt"],Lo={class:"chk"},Po={class:"bd"},No={class:"dur"},Ho={class:"desc"},jo={class:"prc"},To={class:"pick"},Yo={__name:"GiftPickStep",setup(P){const{state:d,packages:y}=L(),v={check:'<path d="M20 6L9 17l-5-5"/>',gift:'<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7s-2-5-5-5-3 5 0 5h5zM12 7s2-5 5-5 3 5 0 5h-5z"/>'},p=$(()=>y.value.slice().sort((e,c)=>d.sort==="low"?e.price-c.price:d.sort==="high"?c.price-e.price:(c.hot?1:0)-(e.hot?1:0)));return(e,c)=>(a(),l(_,null,[c[3]||(c[3]=n("div",{class:"g-head"},[n("h1",null,"اختر الباقة التي ترغب بإهدائها"),n("p",null,"باقات مميزة تمنح تجربة متكاملة من الاسترخاء والعناية")],-1)),n("div",Eo,[X(n("select",{id:"gpSort","onUpdate:modelValue":c[0]||(c[0]=b=>t(d).sort=b)},[...c[1]||(c[1]=[n("option",{value:"pop"},"الأكثر مبيعًا",-1),n("option",{value:"low"},"السعر: الأقل أولًا",-1),n("option",{value:"high"},"السعر: الأعلى أولًا",-1)])],512),[[Pn,t(d).sort]]),n("small",null,o(t(y).length)+" باقات متاحة",1)]),n("div",So,[(a(!0),l(_,null,D(p.value,(b,s)=>(a(),l("div",{key:b.id,class:I(["gpkg",{sel:t(d).gpkg===b.id}]),"data-gp":b.id,style:G(`--pc:${b.color};animation-delay:${s*.06}s`),onClick:r=>t(d).gpkg=b.id},[n("div",Io,[n("img",{src:b.img,alt:b.name},null,8,Do),n("span",Lo,[g(h,{inner:v.check,size:13},null,8,["inner"])])]),n("div",Po,[n("h4",null,o(b.name),1),n("div",No,"🕐 "+o(b.dur)+" دقيقة",1),n("div",Ho,o(b.desc),1),n("div",jo,[x(o(t(Y)(b.price))+" ",1),c[2]||(c[2]=n("small",null,"ر.س",-1))]),n("button",To,[g(h,{inner:v.gift,size:14},null,8,["inner"]),x(" "+o(t(d).gpkg===b.id?"تم الاختيار ✓":"أهدِ هذه الباقة"),1)])])],14,Ao))),128))])],64))}},Vo={class:"custom-grid"},Go={class:"preview-col"},Ro={id:"cardPrev"},Oo={class:"form-col"},Uo={class:"card",style:{"margin-bottom":"16px"}},Wo={class:"two"},qo={class:"fld"},Ko={class:"fld"},Xo={class:"fld",style:{"margin-bottom":"4px"}},Qo={class:"card",style:{"margin-bottom":"16px"}},Jo={class:"designs"},Zo=["data-d","onClick"],na={class:"dchk"},ta={style:{visibility:"hidden"},"aria-hidden":"true"},ea={class:"card"},oa={class:"send-opts"},aa={class:"fld",style:{margin:"0"}},ia={class:"methods",style:{"margin-top":"14px"}},ra=["data-m","onClick"],sa={class:"mi"},la={__name:"GiftCustomizeStep",setup(P){const{state:d}=L(),y=$(()=>200-d.msg.length),v={eye:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',user:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',brush:'<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.6 7.6"/><circle cx="11" cy="11" r="2"/>',send:'<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>',check:'<path d="M20 6L9 17l-5-5"/>'};return(p,e)=>(a(),l(_,null,[e[17]||(e[17]=n("div",{class:"g-head"},[n("h1",null,"خصص هديتك لتكون أجمل"),n("p",null,"أضف لمستك الخاصة مع رسالة وتصميم بطاقة الإهداء")],-1)),n("div",Vo,[n("div",Go,[n("h4",null,[g(h,{inner:v.eye,size:16},null,8,["inner"]),e[6]||(e[6]=x(" معاينة بطاقة الإهداء",-1))]),n("div",Ro,[g(yn,{design:t(d).design,recipient:t(d).name,message:t(d).msg},null,8,["design","recipient","message"])])]),n("div",Oo,[n("div",Uo,[n("h4",null,[g(h,{inner:v.user,size:16},null,8,["inner"]),e[7]||(e[7]=x(" بيانات المهدى إليه",-1))]),n("div",Wo,[n("div",qo,[e[8]||(e[8]=n("label",null,"الاسم الكامل",-1)),X(n("input",{id:"gName",placeholder:"أحمد محمد","onUpdate:modelValue":e[0]||(e[0]=c=>t(d).name=c)},null,512),[[tn,t(d).name]])]),n("div",Ko,[e[9]||(e[9]=n("label",null,"رقم الجوال",-1)),X(n("input",{id:"gPhone",dir:"ltr",placeholder:"05xxxxxxxx","onUpdate:modelValue":e[1]||(e[1]=c=>t(d).phone=c)},null,512),[[tn,t(d).phone]])])]),n("div",Xo,[e[10]||(e[10]=n("label",null,"الرسالة الشخصية",-1)),X(n("textarea",{id:"gMsg",maxlength:"200",placeholder:"اكتب رسالتك من القلب...","onUpdate:modelValue":e[2]||(e[2]=c=>t(d).msg=c)},null,512),[[tn,t(d).msg]]),n("span",{class:I(["cnt",{max:y.value<20}]),id:"gCnt"},o(t(d).msg.length)+"/200",3)])]),n("div",Qo,[n("h4",null,[g(h,{inner:v.brush,size:16},null,8,["inner"]),e[11]||(e[11]=x(" تصميم بطاقة الإهداء",-1))]),n("div",Jo,[(a(!0),l(_,null,D(t(kn),c=>(a(),l("div",{key:c.id,class:I(["design",{sel:t(d).design===c.id}]),"data-d":c.id,onClick:b=>t(d).design=c.id},[n("div",{class:"sw",style:G(`background:${c.bg};color:${c.fg}`)},[n("span",na,[g(h,{inner:v.check,size:10},null,8,["inner"])]),e[12]||(e[12]=x("SAMI",-1))],4),n("small",ta,o(c.n),1)],10,Zo))),128))])]),n("div",ea,[n("h4",null,[g(h,{inner:v.send,size:16},null,8,["inner"]),e[13]||(e[13]=x(" طريقة الإرسال",-1))]),n("div",oa,[n("span",{class:I(["ro",{on:t(d).when==="now"}]),"data-w":"now",onClick:e[3]||(e[3]=c=>t(d).when="now")},[...e[14]||(e[14]=[n("i",null,null,-1),x(" إرسال الآن",-1)])],2),n("span",{class:I(["ro",{on:t(d).when==="later"}]),"data-w":"later",onClick:e[4]||(e[4]=c=>t(d).when="later")},[...e[15]||(e[15]=[n("i",null,null,-1),x(" 📅 جدولة لاحقًا",-1)])],2)]),n("div",{class:I(["sched-box",{open:t(d).when==="later"}])},[n("div",aa,[e[16]||(e[16]=n("label",null,"موعد الإرسال",-1)),X(n("input",{type:"datetime-local",id:"gSched","onUpdate:modelValue":e[5]||(e[5]=c=>t(d).schedDate=c)},null,512),[[tn,t(d).schedDate]])])],2),n("div",ia,[(a(!0),l(_,null,D(t(dn),c=>(a(),l("div",{key:c.id,class:I(["mth",{sel:t(d).method===c.id}]),"data-m":c.id,onClick:b=>t(d).method=c.id},[n("span",sa,[g(h,{inner:c.ic,size:17},null,8,["inner"])]),x(o(c.n),1)],10,ra))),128))])])])])],64))}},da={class:"card",style:{padding:"22px","margin-bottom":"16px"}},pa={__name:"GiftPayStep",setup(P){const{state:d,pkgOf:y}=L(),v=$(()=>{var e;const p=Math.max(Number((e=y(d.gpkg))==null?void 0:e.price)||0,0);return p+Math.round(p*.15)});return(p,e)=>(a(),l(_,null,[e[0]||(e[0]=n("div",{class:"g-head"},[n("h1",null,"أكمل الدفع لإرسال هديتك"),n("p",null,"اختر طريقة الدفع المناسبة")],-1)),n("div",da,[g(vn,{state:t(d),total:v.value},null,8,["state","total"])])],64))}},ga={class:"gsuccess"},ca={class:"gsuc-grid"},xa={class:"gsuc-card-col"},ua={class:"card gsuc-details"},fa={class:"gs-row"},ba={class:"k"},ma={class:"v"},ha={class:"gs-row"},va={class:"k"},ka={class:"v"},ya={class:"gs-row"},wa={class:"k"},_a={class:"v",dir:"ltr"},za={class:"gs-row"},$a={class:"k"},Ma={class:"v"},Ca={class:"chip"},Fa={class:"gs-row"},Ba={class:"k"},Ea={class:"gs-row"},Sa={class:"k"},Aa={class:"v",dir:"ltr"},Ia={class:"gsuc-actions"},Da={key:0,class:"gift-share-panel"},La={class:"gift-share-row"},Pa=["value"],Na={key:0},Ha="display:flex;gap:10px;align-items:center;background:var(--green-bg);border-radius:12px;padding:13px 15px;margin-top:14px;font-size:12.5px;color:#1E6B41",ja="flex:none;width:26px;height:26px;border-radius:50%;background:var(--green);color:#fff;display:grid;place-items:center",Ta={__name:"GiftSuccess",emits:["recipient","new-gift","copy-self","share","home"],setup(P,{emit:d}){const{state:y}=L(),v=d,p=V(!1),e=V(!1),c=["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],b=new Date,s=`${b.getDate()} ${c[b.getMonth()]} ${b.getFullYear()}`,r="✦✧✦✧".split("").map((z,u)=>({c:z,style:`top:${10+u*16}%;${u%2?"right":"left"}:${4+u*3}%;animation-delay:-${u}s`})),m=$(()=>{const z=dn.find(u=>u.id===y.method);return z?z.n:""}),M=$(()=>y.claimToken?new URL(`/gift-recipient?token=${encodeURIComponent(y.claimToken)}`,window.location.origin).href:y.claimUrl||"");function i(){if(!M.value)return;const z=String(y.phone||"").replace(/\D/g,""),u=encodeURIComponent(`لديك هدية من عناية سامي ✨
${M.value}`);window.open(`https://wa.me/${z}?text=${u}`,"_blank","noopener")}function k(){p.value=!0,e.value=!1,M.value&&window.open(M.value,"_blank","noopener,noreferrer")}async function N(){try{if(navigator&&navigator.clipboard)await navigator.clipboard.writeText(M.value);else{const z=document.getElementById("gift-share-link");z&&(z.focus(),z.select(),document.execCommand("copy"))}e.value=!0,setTimeout(()=>{e.value=!1},2200)}catch{alert("تعذّر نسخ الرابط، يمكنك نسخه يدويًا من الحقل أدناه.")}}const w={user:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',send:'<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>',phone:'<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',card:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',check:'<path d="M20 6L9 17l-5-5"/>',gift:'<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7s-2-5-5-5-3 5 0 5h5zM12 7s2-5 5-5 3 5 0 5h-5z"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>',home:'<path d="M3 9l9-6 9 6v11a1 1 0 01-1 1H4a1 1 0 01-1-1z"/>'};return(z,u)=>(a(),l("div",ga,[(a(!0),l(_,null,D(t(r),(C,K)=>(a(),l("span",{key:K,class:"confetti",style:G(C.style)},o(C.c),5))),128)),u[15]||(u[15]=en('<div class="gsuc-head" data-v-4a1de5a0><h1 data-v-4a1de5a0>تم إرسال هديتك بنجاح</h1><span class="ic" data-v-4a1de5a0><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" data-v-4a1de5a0><path d="M20 6L9 17l-5-5" data-v-4a1de5a0></path></svg></span></div><p class="sub" data-v-4a1de5a0>لقد أسعدت قلبًا اليوم 🤍 شكرًا لاختيارك عناية سامي</p>',2)),n("div",ca,[n("div",xa,[g(yn,{design:t(y).design,recipient:t(y).name,message:t(y).msg},null,8,["design","recipient","message"])]),n("div",ua,[u[10]||(u[10]=n("h4",null,"تفاصيل الإرسال",-1)),n("div",fa,[n("span",ba,[g(h,{inner:w.user,size:14},null,8,["inner"]),u[3]||(u[3]=x(" المهدى إليه",-1))]),n("span",ma,o(t(y).name),1)]),n("div",ha,[n("span",va,[g(h,{inner:w.send,size:14},null,8,["inner"]),u[4]||(u[4]=x(" طريقة الإرسال",-1))]),n("span",ka,o(m.value),1)]),n("div",ya,[n("span",wa,[g(h,{inner:w.phone,size:14},null,8,["inner"]),u[5]||(u[5]=x(" رقم الجوال",-1))]),n("span",_a,o(t(y).phone),1)]),n("div",za,[n("span",$a,[g(h,{inner:w.clock,size:14},null,8,["inner"]),u[6]||(u[6]=x(" وقت الإرسال",-1))]),n("span",Ma,[n("span",Ca,"✓ "+o(t(y).when==="now"?"تم الإرسال الآن":"مجدولة"),1)])]),n("div",Fa,[n("span",Ba,[g(h,{inner:w.cal,size:14},null,8,["inner"]),u[7]||(u[7]=x(" تاريخ الإرسال",-1))]),n("span",{class:"v"},o(s))]),n("div",Ea,[n("span",Sa,[g(h,{inner:w.card,size:14},null,8,["inner"]),u[8]||(u[8]=x(" رقم العملية",-1))]),n("span",Aa,o(t(y).ref),1)]),n("div",{style:Ha},[n("span",{style:ja},[g(h,{inner:w.check,size:13},null,8,["inner"])]),u[9]||(u[9]=x(" تم إرسال الهدية بنجاح إلى المستلم — ستظهر الهدية في رسالة خاصة من عناية سامي ",-1))])])]),n("div",Ia,[n("button",{class:"btn btn-dark",id:"newGift",onClick:u[0]||(u[0]=C=>v("new-gift"))},[g(h,{inner:w.gift,size:15},null,8,["inner"]),u[11]||(u[11]=x(" إهداء جديد ",-1))]),n("button",{class:"btn btn-line",id:"shareGift",onClick:u[1]||(u[1]=C=>{k(),v("share")})},[g(h,{inner:w.share,size:15},null,8,["inner"]),u[12]||(u[12]=x(" مشاركة الهدية ",-1))]),n("button",{class:"btn btn-line",id:"backHome",onClick:u[2]||(u[2]=C=>v("home"))},[g(h,{inner:w.home,size:15},null,8,["inner"]),u[13]||(u[13]=x(" العودة للرئيسية ",-1))])]),p.value?(a(),l("div",Da,[u[14]||(u[14]=n("label",null,"رابط الهدية",-1)),n("div",La,[n("input",{id:"gift-share-link",type:"text",value:M.value,readonly:""},null,8,Pa),t(y).method==="wa"?(a(),l("button",{key:0,class:"btn btn-gold",onClick:i},"إرسال عبر واتساب")):j("",!0),n("button",{class:"btn btn-gold",onClick:N},"نسخ الرابط")]),e.value?(a(),l("small",Na,"تم نسخ الرابط بنجاح")):j("",!0)])):j("",!0),u[16]||(u[16]=n("div",{class:"thanks"},[n("i",null,"❦"),x(" شكرًا لاختيارك عناية سامي لتقديم تجربة مميزة لمن تحب "),n("i",null,"❦")],-1))]))}},Ya=Nn(Ta,[["__scopeId","data-v-4a1de5a0"]]),Va={key:0,class:"gsum"},Ga={class:"card"},Ra={class:"why-gift"},Oa={class:"wi"},Ua={class:"card help-card"},Wa={class:"hi"},qa={key:1,class:"gsum"},Ka={class:"card"},Xa={key:0,class:"pkline"},Qa=["src"],Ja={class:"pr"},Za={class:"gs-row"},ni={class:"v"},ti={class:"gs-row"},ei={class:"v",dir:"ltr"},oi={class:"gs-row"},ai={class:"v"},ii={class:"gs-row"},ri={class:"v"},si={class:"gs-row"},li={class:"v"},di={class:"chip"},pi={key:3,class:"gs-total"},gi={class:"v"},ci={class:"gs-note"},xi={key:0,class:"card help-card"},ui={class:"hi"},fi="text-align:center;padding:20px;border:1.5px dashed var(--line);border-radius:13px;color:var(--mute);font-size:12.5px;margin-bottom:12px",bi="display:block;font-family:var(--font-d);color:var(--ink);margin-bottom:4px",mi={__name:"GiftSummary",setup(P){const{state:d,pkgOf:y}=L(),v=$(()=>d.gpkg?y(d.gpkg):null);$(()=>kn.find(s=>s.id===d.design));const p=$(()=>d.gstep===0||!v.value&&d.gstep<2),e=$(()=>{const s=dn.find(r=>r.id===d.method);return s?s.n:""}),c={head:'<path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>',lock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>'},b=[["هدية رقمية فورية","تصلك أو تصل للمستلم فور إتمام الدفع",'<path d="M13 2L3 14h9l-1 8 10-12h-9z"/>'],["صالحة لمدة 6 أشهر","من تاريخ الشراء",'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>'],["المستلم يختار موعده","يختار الوقت والفرع المناسب له",'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>'],["آمنة وموثوقة","نضمن لك تجربة إهداء مميزة",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>']];return(s,r)=>p.value?(a(),l("div",Va,[n("div",Ga,[r[0]||(r[0]=n("h3",null,"لماذا الإهداء من سامي؟",-1)),n("div",Ra,[(a(),l(_,null,D(b,(m,M)=>n("div",{key:M,class:"wg"},[n("span",Oa,[g(h,{inner:m[2],size:17},null,8,["inner"])]),n("span",null,[n("b",null,o(m[0]),1),n("small",null,o(m[1]),1)])])),64))])]),n("div",Ua,[n("span",Wa,[g(h,{inner:c.head,size:18},null,8,["inner"])]),r[1]||(r[1]=n("b",null,"تحتاج مساعدة؟",-1)),r[2]||(r[2]=n("small",null,"فريقنا جاهز لمساعدتك",-1)),r[3]||(r[3]=n("a",{href:"https://wa.me/963959415545"},"تواصل معنا",-1))])])):(a(),l("div",qa,[n("div",Ka,[r[13]||(r[13]=n("h3",null,"ملخص الإهداء",-1)),v.value?(a(),l("div",Xa,[n("img",{src:v.value.img,alt:""},null,8,Qa),n("span",null,[n("b",null,o(v.value.name),1),n("small",null,"🕐 "+o(v.value.dur)+" دقيقة",1),n("small",null,o(v.value.desc),1),n("span",Ja,o(t(Y)(v.value.price))+" ر.س",1)])])):(a(),l("div",{key:1,style:fi},[n("b",{style:bi},"لم يتم اختيار باقة بعد"),r[4]||(r[4]=x("اختر الباقة المناسبة لإهدائها لمن تحب",-1))])),t(d).gstep>=2?(a(),l(_,{key:2},[n("div",Za,[r[5]||(r[5]=n("span",{class:"k"},"👤 المهدى إليه",-1)),n("span",ni,o(t(d).name||"—"),1)]),n("div",ti,[r[6]||(r[6]=n("span",{class:"k"},"📱 رقم الجوال",-1)),n("span",ei,o(t(d).phone||"—"),1)]),n("div",oi,[r[7]||(r[7]=n("span",{class:"k"},"💬 الرسالة",-1)),n("span",ai,o(t(d).msg?"تمت إضافة رسالة مخصصة":"—"),1)]),n("div",ii,[r[8]||(r[8]=n("span",{class:"k"},"📤 طريقة الإرسال",-1)),n("span",ri,o(e.value),1)]),n("div",si,[r[9]||(r[9]=n("span",{class:"k"},"🕐 وقت الإرسال",-1)),n("span",li,[n("span",di,o(t(d).when==="now"?"فوري":"مجدول"),1)])])],64)):j("",!0),v.value?(a(),l("div",pi,[r[11]||(r[11]=n("span",{class:"k"},"الإجمالي",-1)),n("span",gi,[x(o(t(Y)(v.value.price))+" ",1),r[10]||(r[10]=n("small",{style:{"font-size":"13px"}},"ر.س",-1))])])):j("",!0),n("div",ci,[g(h,{inner:c.lock,size:14},null,8,["inner"]),r[12]||(r[12]=x(" بإتمامك معلومات الهدية مشفرة وآمنة 100%",-1))])]),t(d).gstep===1?(a(),l("div",xi,[n("span",ui,[g(h,{inner:c.head,size:18},null,8,["inner"])]),r[14]||(r[14]=n("b",null,"تحتاج مساعدة؟",-1)),r[15]||(r[15]=n("small",null,"فريقنا جاهز لمساعدتك في اختيار الهدية المثالية",-1)),r[16]||(r[16]=n("a",{href:"https://wa.me/963959415545"},"تواصل معنا",-1))])):j("",!0)]))}},hi={class:"shell"},vi={class:"wrap",id:"pkgApp"},ki={key:0,class:"view on"},yi={key:1,class:"g-stage"},wi={class:"view on"},_i={id:"gsumWrap"},zi={key:0,class:"view on"},$i={key:1,class:"g-stage"},Mi={class:"view on"},Ci={id:"gsumWrap"},Fi={class:"wrap"},Bi={class:"f-grid"},Ei={class:"f-brand"},Si={class:"f-links"},Ai={class:"f-links"},Ii=["href"],Di={class:"wrap in"},Li={class:"fb-mid",id:"fbMid"},Pi=["disabled"],Ni='<path d="M19 12H5M11 18l-6-6 6-6"/>',Ki={__name:"PackagesGiftsView",setup(P){const d=V(null),{current:y,openPicker:v,requireLocation:p,locations:e,loadServiceLocations:c}=Hn();c();const{requireAuth:b}=jn(),{state:s,pkgOf:r,bkDays:m,gCanNext:M,gNextLabel:i,bkCanNext:k,bkNextLabel:N,startGift:w,startBook:z,backToPackages:u}=L();Yn(at,"packages-gifts"),Vn(d);const C=V(!1),K=V(""),rn=V(!1);function R(B){K.value=B,rn.value=!0,clearTimeout(R._h),R._h=setTimeout(()=>{rn.value=!1},2600)}const O=$(()=>s.page==="book"),wn=$(()=>O.value?!(s.bk.done||s.bk.step>=2):s.page==="gift"&&!s.done&&s.gstep!==4),_n=$(()=>O.value?!0:s.gstep!==0),pn=$(()=>{const B=O.value?s.bk.pkg:s.gpkg;return B?r(B):null}),gn=$(()=>O.value?k.value:M.value),zn=$(()=>O.value?N.value:i.value);function $n(){if(O.value){if(s.bk.step===0){u();return}s.bk.step--}else{if(s.gstep===0){u();return}s.gstep--}scrollTo({top:0,behavior:"smooth"})}function Mn(){if(gn.value){if(O.value)s.bk.step++;else{if(s.gstep===3){Cn();return}s.gstep++}scrollTo({top:0,behavior:"smooth"})}}function Cn(){var f;const B=Math.max(Number((f=r(s.gpkg))==null?void 0:f.price)||0,0);C.value||!Q.canPay(s,B+Math.round(B*.15))||b(async()=>{var E,S,J,Z,A;C.value=!0;try{const F=await et({packages:[{id:s.gpkg}],location:{recipient_name:s.name.trim(),recipient_mobile:s.phone.trim(),message:s.msg.trim()||void 0},design:s.design,branch:s.siteBranch||null,send_channel:s.method||"link"}),nn=Math.max(Number((E=r(s.gpkg))==null?void 0:E.price)||0,0),on=nn+Math.round(nn*.15),{gateway:sn,...ln}=Q.payment(s,on),U=await un(sn,ln);if(U.payment_url){window.location.href=U.payment_url;return}s.ref=(S=F==null?void 0:F.data)!=null&&S.gift_card_id?`#GIFT-${F.data.gift_card_id}`:"#GIFT",s.claimUrl=((J=F==null?void 0:F.data)==null?void 0:J.share_url)||((Z=F==null?void 0:F.data)==null?void 0:Z.claim_url)||null,s.claimToken=((A=F==null?void 0:F.data)==null?void 0:A.claim_token)||null,s.done=!0,s.gstep=4,scrollTo({top:0,behavior:"smooth"})}catch(F){console.error("Package gift error:",F),R((F==null?void 0:F.message)||"تعذر إنشاء الهدية، حاول مرة أخرى")}finally{C.value=!1}})}function Fn(B){return`${B.getFullYear()}-${String(B.getMonth()+1).padStart(2,"0")}-${String(B.getDate()).padStart(2,"0")}`}function Bn(){var f;const B=Math.max(Number((f=r(s.bk.pkg))==null?void 0:f.price)||0,0);C.value||!Q.canPay(s.bk,B+Math.round(B*.15))||b(async()=>{var E,S,J,Z;C.value=!0;try{const A=s.bk,F=m()[A.dayIdx];await tt({package_id:A.pkg,branch_id:A.branch,date:Fn(F),time:A.time,employee_id:(E=A.employee)==null?void 0:E.id,notes:A.notes||void 0});const nn=Math.max(Number((S=r(A.pkg))==null?void 0:S.price)||0,0),on=nn+Math.round(nn*.15),{gateway:sn,...ln}=Q.payment(A,on),U=await un(sn,ln);if(U.payment_url){const an=r(A.pkg);Jn({b:an.branchName,d:W(F),u:`${an.dur} دقيقة`,e:((J=A.employee)==null?void 0:J.name)||"",p:on,s:[[an.name,q(A.time),((Z=A.employee)==null?void 0:Z.name)||"",an.price]]},U.attempt_id),window.location.href=U.payment_url;return}s.bk.ref=U.invoice_id||null,s.bk.done=!0,scrollTo({top:0,behavior:"smooth"})}catch(A){R(A.message||"تعذّر إتمام الحجز، حاول مرة أخرى")}finally{C.value=!1}})}function cn(){y.value&&(s.siteBranch=y.value.id)}function En(B){z(B)}function Sn(B){p(()=>{cn(),w("pkg",B)})}function An(){p(()=>{cn(),w(null,null)})}function In(){s.done=!1,s.gstep=0,s.gtype=null,s.gpkg=null,s.pay=null,s.ref=null,scrollTo({top:0,behavior:"smooth"})}function xn(){location.href="/"}return(B,f)=>{const E=hn("RouterLink");return a(),l("div",{ref_key:"root",ref:d},[n("div",hi,[n("div",vi,[t(s).page==="packages"?(a(),T(_t,{key:0,onBook:En,onGift:Sn,onGiftNow:An,onPickBranch:t(v)},null,8,["onPickBranch"])):t(s).page==="book"?(a(),l(_,{key:1},[g(Bt),t(s).bk.done?(a(),l("div",ki,[g(qe,{onHome:xn,onCalendar:f[0]||(f[0]=S=>R("تمت إضافة الموعد إلى التقويم")),onShare:f[1]||(f[1]=S=>R("تم نسخ رابط الحجز للمشاركة"))})])):(a(),l("div",yi,[n("main",wi,[t(s).bk.step===0?(a(),T(Rt,{key:0})):t(s).bk.step===1?(a(),T(fe,{key:1})):(a(),T(ke,{key:2,onPay:Bn}))]),n("aside",_i,[g(uo)])]))],64)):(a(),l(_,{key:2},[g(ko),t(s).done?(a(),l("div",zi,[g(Ya,{onRecipient:f[2]||(f[2]=S=>t(s).claimUrl&&(B.location.href=t(s).claimUrl)),onNewGift:In,onCopySelf:f[3]||(f[3]=S=>R("تم إرسال نسخة من الهدية إلى بريدك")),onShare:f[4]||(f[4]=S=>R("تم نسخ رابط الهدية للمشاركة")),onHome:xn})])):(a(),l("div",$i,[n("main",Mi,[t(s).gstep===0?(a(),T(Bo,{key:0})):t(s).gstep===1?(a(),T(Yo,{key:1})):t(s).gstep===2?(a(),T(la,{key:2})):(a(),T(pa,{key:3}))]),n("aside",Ci,[g(mi)])]))],64))])]),n("footer",null,[n("div",Fi,[n("div",Bi,[n("div",Ei,[g(E,{class:"logo",to:"/"},{default:H(()=>[...f[5]||(f[5]=[n("span",{class:"mark"},[n("img",{src:Tn,alt:"عناية سامي",style:{width:"29px",height:"29px","object-fit":"contain"}})],-1),n("span",{class:"name"},[n("b",null,"عناية سامي"),n("span",null,"SAMI CARE")],-1)])]),_:1}),f[6]||(f[6]=en('<p>مركز متخصص في العناية الرجالية المتكاملة بجدة، حيث تلتقي الفخامة بالاحترافية في كل تفصيلة.</p><div class="socials"><a href="https://x.com/samicare_sa" aria-label="X"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-6.8 7.8L23.3 22h-6.3l-4.9-6.4L6.5 22H3.4l7.3-8.3L1 2h6.5l4.4 5.8L18.9 2zm-1.1 18h1.7L7.1 3.9H5.3L17.8 20z"></path></svg></a><a href="https://www.instagram.com/samicare.sa/" aria-label="انستقرام"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1" fill="currentColor"></circle></svg></a><a href="https://www.facebook.com/samicare.sa" aria-label="فيسبوك"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg></a></div>',2))]),n("div",null,[f[12]||(f[12]=n("h4",null,"روابط مهمة",-1)),n("ul",Si,[n("li",null,[g(E,{to:"/"},{default:H(()=>[...f[7]||(f[7]=[x("الرئيسية",-1)])]),_:1})]),n("li",null,[g(E,{to:"/booking"},{default:H(()=>[...f[8]||(f[8]=[x("حجز موعد",-1)])]),_:1})]),n("li",null,[g(E,{to:"/#services"},{default:H(()=>[...f[9]||(f[9]=[x("خدماتنا",-1)])]),_:1})]),n("li",null,[g(E,{to:"/packages-gifts"},{default:H(()=>[...f[10]||(f[10]=[x("الباقات",-1)])]),_:1})]),n("li",null,[g(E,{to:"/gifts"},{default:H(()=>[...f[11]||(f[11]=[x("الهدايا",-1)])]),_:1})])])]),n("div",null,[f[18]||(f[18]=n("h4",null,"استكشف",-1)),n("ul",Ai,[n("li",null,[g(E,{to:"/store"},{default:H(()=>[...f[13]||(f[13]=[x("المتجر",-1)])]),_:1})]),n("li",null,[g(E,{to:"/branches"},{default:H(()=>[...f[14]||(f[14]=[x("فروعنا",-1)])]),_:1})]),n("li",null,[g(E,{to:"/contact"},{default:H(()=>[...f[15]||(f[15]=[x("تواصل معنا",-1)])]),_:1})]),n("li",null,[g(E,{to:"/terms"},{default:H(()=>[...f[16]||(f[16]=[x("الشروط والأحكام",-1)])]),_:1})]),n("li",null,[g(E,{to:"/privacy-policy"},{default:H(()=>[...f[17]||(f[17]=[x("سياسة الخصوصية",-1)])]),_:1})])])]),n("div",null,[f[19]||(f[19]=n("h4",null,"عناوين الفروع",-1)),(a(!0),l(_,null,D(t(e),S=>(a(),l("div",{key:S.id,class:"f-branch"},[n("b",null,o(S.name),1),n("small",null,o(S.address),1),S.contact_number?(a(),l("a",{key:0,href:`tel:${S.contact_number}`},o(S.contact_number),9,Ii)):j("",!0)]))),128)),f[20]||(f[20]=n("div",{class:"f-branch"},[n("b",null,"خدمات منزلية"),n("small",null,"حلاقة شعر ولحية وماسكات طبيعية")],-1))])]),f[21]||(f[21]=en('<div class="f-bottom"><small>© 2026 عناية سامي — جميع الحقوق محفوظة</small><div class="pay" aria-label="بوابات الدفع"><span title="Visa">VISA</span><span title="Mastercard">Mastercard</span><span title="مدى">mada</span><span title="Tabby">tabby</span><span title="Apple Pay">Pay</span></div></div>',1))])]),n("div",{class:I(["footbar",{on:wn.value}]),id:"footbar"},[n("div",Di,[n("button",{class:"btn btn-back",id:"btnBack",style:G({visibility:_n.value?"visible":"hidden"}),onClick:$n},[...f[22]||(f[22]=[n("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[n("path",{d:"M5 12h14M13 6l6 6-6 6"})],-1),x(" السابق ",-1)])],4),n("div",Li,[pn.value?(a(),l(_,{key:0},[f[23]||(f[23]=x("الإجمالي ",-1)),n("b",null,o(t(Y)(pn.value.price))+" ر.س",1),f[24]||(f[24]=x(" — 🔒 بياناتك محمية وآمنة",-1))],64)):(a(),l(_,{key:1},[x("🔒 بياناتك محمية وآمنة")],64))]),n("button",{class:"btn btn-gold",id:"btnNext",disabled:!gn.value,onClick:Mn},[x(o(zn.value)+" ",1),g(h,{inner:Ni,size:15})],8,Pi)])],2),n("div",{class:I(["pay-loading",{on:C.value}]),id:"payLoading"},[...f[25]||(f[25]=[n("div",{class:"pl-box"},[n("div",{class:"pl-ring"}),n("b",null,"جارٍ إتمام الإهداء بأمان…"),n("small",null,"سيتم إرسال الهدية مباشرة بعد إتمام الدفع")],-1)])],2),n("div",{class:I(["toast",{on:rn.value}]),id:"toast"},o(K.value),3)],512)}}};export{Ki as default};
