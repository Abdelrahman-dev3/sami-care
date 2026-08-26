import{i as M,o as i,c as l,m as O,b as n,u as t,F as k,a as d,t as a,e as F,x as N,n as C,q as Y,d as c,L as v,p as P,r as V,v as an,G as _n,z as rn,B as R,H as q,y as D,_ as zn,Q as $n,h as Mn,s as Cn,J as Fn}from"./index-BRzvpxnI.js";import{u as Bn,a as En}from"./useInternalLinks-vlzQGtpv.js";import{u as S,B as Sn,c as An,A as In,d as Ln,f as K,e as W,r as j,g as sn,h as Dn,i as Hn,_ as ln,j as dn,k as Q,l as jn}from"./GiftCard-CUOtoa5V.js";import{f as Pn,a as Yn,b as Nn,i as Vn}from"./bookingApi-irucBSYt.js";import{f as Tn}from"./accountApi-atjuX8Pi.js";import"./i18nField-CJ_3XKph.js";const Gn=`
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
  margin:16px 0 0;padding:0;border:0;background:none;border-radius:0;font-size:12px;color:#6f675e}
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
.branch-gate-list button{text-align:right;border:1.5px solid var(--line);border-radius:13px;padding:13px 16px;background:#fff}
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
.pkg .inc{margin:14px 0;padding-top:14px;border-top:1px dashed var(--line);text-align:right;flex:1}
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
  .nav{min-height:76px;padding:10px 12px;gap:8px;overflow:visible!important;justify-content:space-between;direction:rtl}
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
.gsuc-grid{display:grid;grid-template-columns:1.15fr 1fr;gap:18px;margin-top:26px;text-align:right}
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
`,Rn="/images/generated/packages/complete-care-hq.png",qn={class:"branch-gate"},On={class:"ph"},Kn=["src","alt"],Wn={class:"body"},Un={class:"dur"},Xn={class:"desc"},Qn={class:"inc"},Jn={class:"price"},Zn={class:"acts"},nt=["data-book","onClick"],tt=["data-gift","onClick"],et={class:"gift-banner"},ot={class:"txt"},at={class:"mini-feats"},it={class:"mi"},rt={class:"cta"},st={class:"perks"},lt={class:"pi"},dt={__name:"PackagesCatalog",emits:["book","gift","gift-now","pick-branch"],setup(A,{emit:r}){const{state:_,filteredPkgs:m}=S(),p=r,e=o=>o.toLocaleString("ar-EG-u-nu-latn"),g=M(()=>{const o=Sn.find(u=>u.id===_.siteBranch);return o?o.name:""}),h=M(()=>`grid-template-columns:repeat(${Math.min(m.value.length,5)},1fr)`),f={clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',gift:'<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7s-2-5-5-5-3 5 0 5h5zM12 7s2-5 5-5 3 5 0 5h-5z"/>'},x=[["بطاقة إهداء رقمية",'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>'],["رسالة مخصصة من قلبك",'<path d="M21 11.5a8.4 8.4 0 01-9 8.4 8.5 8.5 0 01-3.8-.9L3 21l2-5.2a8.4 8.4 0 011.5-9.8 8.5 8.5 0 0114.5 5.5z"/>'],["إرسال فوري عبر واتساب أو بريد",'<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>'],["جدولة الإهداء في الوقت المناسب",'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>']],s=[["غرفة VIP خاصة","لباقات مختارة",'<path d="M2 8l4 4 6-8 6 8 4-4v10a2 2 0 01-2 2H4a2 2 0 01-2-2z"/>'],["منتجات فاخرة","ضمن باقاتك",'<path d="M20 12v9H4v-9M2 7h20v5H2z"/>'],["أولوية في الحجز","مواعيد مرنة",'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4"/>'],["ضيافة فاخرة","مشروبات مختارة",'<path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4z"/>'],["نقاط ولاء مضاعفة","مع كل باقة",'<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7"/>'],["ضمان الجودة","أفضل تجربة",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>']];return(o,u)=>(i(),l(k,null,[u[15]||(u[15]=O('<section class="pk-hero"><div class="bg"><img src="'+Rn+'" alt=""></div><svg class="ghost-logo" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width=".8"><path d="M12 2l9 5v10l-9 5-9-5V7z"></path><path d="M12 2v20M3 7l9 5 9-5M3 17l9-5 9 5"></path></svg><div class="in"><div class="eyebrow">تجارب متكاملة</div><h1>لراحتـك وأناقتـك</h1><p>اختر الباقة التي تناسب احتياجاتك واستمتع بتجربة عناية متكاملة توفر عليك الوقت والجهد</p></div></section>',1)),n("div",qn,[t(_).siteBranch?(i(),l(k,{key:0},[n("span",null,[u[3]||(u[3]=d("📍 الفرع المختار: ",-1)),n("b",null,a(g.value),1)]),n("button",{id:"branchGateChange",onClick:u[0]||(u[0]=y=>p("pick-branch"))},"تغيير الفرع")],64)):(i(),l(k,{key:1},[u[4]||(u[4]=n("span",null,"حدد فرعك أولًا لعرض الأسعار والمواعيد المتاحة بدقة",-1)),n("button",{id:"branchGateChange",class:"primary",onClick:u[1]||(u[1]=y=>p("pick-branch"))},"اختر الفرع")],64))]),n("div",{class:"pkgs",style:N(h.value)},[(i(!0),l(k,null,F(t(m),(y,H)=>(i(),l("article",{key:y.id,class:C(["pkg",{hot:y.hot}]),style:N(`--pc:${y.color};animation-delay:${H*.07}s`)},[n("div",On,[n("img",{src:y.img,alt:y.name},null,8,Kn),y.hot?(i(),l(k,{key:0},[u[5]||(u[5]=n("span",{class:"hotflag"},"الأكثر طلبًا",-1)),u[6]||(u[6]=n("span",{class:"starflag"},"★",-1))],64)):Y("",!0)]),n("span",{class:"badge",style:N(`border-color:${y.hex}`)},[c(v,{inner:y.ico,size:22},null,8,["inner"])],4),n("div",Wn,[n("h3",null,a(y.name),1),n("div",Un,[c(v,{inner:f.clock,size:13},null,8,["inner"]),d(" "+a(y.dur)+" دقيقة",1)]),n("div",Xn,a(y.desc),1),n("div",Qn,[u[8]||(u[8]=n("b",null,"تشمل الباقة",-1)),n("ul",null,[(i(!0),l(k,null,F(y.inc,(w,$)=>(i(),l("li",{key:$},[u[7]||(u[7]=n("i",null,"✓",-1)),d(a(w),1)]))),128))])]),n("div",Jn,[d(a(e(y.price))+" ",1),u[9]||(u[9]=n("small",null,"ر.س",-1))]),n("div",Zn,[n("button",{class:"book","data-book":y.id,onClick:w=>p("book",y.id)},"احجز الباقة",8,nt),n("button",{class:"gift-mini","data-gift":y.id,onClick:w=>p("gift",y.id)},[c(v,{inner:f.gift,size:14},null,8,["inner"]),u[10]||(u[10]=d(" أهدِ هذه الباقة",-1))],8,tt)])])],6))),128))],4),n("section",et,[u[14]||(u[14]=n("div",{class:"gb-box"},[n("div",{class:"face"}),n("span",{class:"tag"},"هدية لكم من القلب 💛")],-1)),n("div",ot,[u[11]||(u[11]=n("h2",null,"أهدِ تجربة فاخرة لمن تحب",-1)),u[12]||(u[12]=n("p",null,"اختر الباقة، أضف رسالة مخصصة، وسيصلك المهدى إليه بشكل أنيق في الوقت المناسب",-1)),n("div",at,[(i(),l(k,null,F(x,(y,H)=>n("div",{key:H,class:"mf"},[n("span",it,[c(v,{inner:y[1],size:16},null,8,["inner"])]),d(a(y[0]),1)])),64))])]),n("div",rt,[n("button",{class:"btn btn-gold",id:"giftNow",onClick:u[2]||(u[2]=y=>p("gift-now"))},[c(v,{inner:f.gift,size:16},null,8,["inner"]),u[13]||(u[13]=d(" أهدِ باقة الآن",-1))])])]),n("div",st,[(i(),l(k,null,F(s,(y,H)=>n("div",{key:H,class:"perk"},[n("span",lt,[c(v,{inner:y[2],size:17},null,8,["inner"])]),n("b",null,a(y[0]),1),n("small",null,a(y[1]),1)])),64))])],64))}},pt={class:"g-stepper"},gt={class:"g-steps"},ct=["data-bi"],xt={class:"bubble"},ft='<path d="M20 6L9 17l-5-5"/>',bt={__name:"BookStepper",setup(A){const{state:r}=S();return(_,m)=>(i(),l("div",pt,[n("div",gt,[(i(!0),l(k,null,F(t(An),(p,e)=>(i(),l("div",{key:e,class:C(["g-step",{active:e===t(r).bk.step&&!t(r).bk.done,done:e<t(r).bk.step||t(r).bk.done}]),"data-bi":e},[m[0]||(m[0]=n("div",{class:"bar"},[n("i")],-1)),n("span",xt,[e<t(r).bk.step||t(r).bk.done?(i(),P(v,{key:0,inner:ft,size:17})):(i(),l(k,{key:1},[d(a(e+1),1)],64))]),n("b",null,a(p.t),1),n("small",null,a(p.s),1)],10,ct))),128))])]))}},ut={class:"g-head"},vt={class:"card",style:{padding:"20px","margin-bottom":"16px"}},mt={class:"daystrip"},ht=["data-bd","onClick"],kt={key:0,class:"card",style:{padding:"40px","text-align":"center",color:"var(--mute)","font-size":"13.5px"}},yt={key:1,class:"card",style:{padding:"20px"}},wt={class:"periods"},_t=["data-bp","onClick"],zt={key:1,class:"slots"},$t=["data-bt","onClick"],Mt={key:0,class:"tag"},Ct={key:2,class:"card",style:{padding:"40px","text-align":"center",color:"var(--mute)","font-size":"13.5px"}},en="grid-column:1/-1;text-align:center;color:var(--mute);padding:30px;border:1.5px dashed var(--line);border-radius:14px;font-size:13px",Ft="font-family:var(--font-d);font-size:15px;color:var(--ink);margin-bottom:12px",Bt="font-family:var(--font-d);font-size:15px;color:var(--ink);margin-bottom:4px",Et={__name:"BookTimeStep",setup(A){const{state:r,pkgOf:_,bkDays:m}=S(),p=r.bk,e=m(),g=M(()=>_(p.pkg)),h=V(!0),f=V([]),x=V(!1);function s(w){return`${w.getFullYear()}-${String(w.getMonth()+1).padStart(2,"0")}-${String(w.getDate()).padStart(2,"0")}`}an(async()=>{if(p.employee){h.value=!1;return}try{const w=await Pn({branchId:p.branch,serviceId:0}),$=(Array.isArray(w)?w:[])[0];$&&(p.employee={id:$.id,name:[$.first_name,$.last_name].filter(Boolean).join(" ")||"موظف"})}catch{p.employee=null}finally{h.value=!1}});async function o(){var w;if(p.dayIdx==null||!p.employee){f.value=[];return}x.value=!0;try{const $=await Yn({date:s(e[p.dayIdx]),staffId:p.employee.id,durationMin:(w=g.value)==null?void 0:w.dur});f.value=Array.isArray($)?$:[]}catch{f.value=[]}finally{x.value=!1}}_n(()=>{var w;return[p.dayIdx,(w=p.employee)==null?void 0:w.id]},o);const u=M(()=>f.value.filter(w=>{const $=Number(w.split(":")[0]);return p.period==="all"||p.period==="am"&&$<12||p.period==="pm"&&$>=12&&$<17||p.period==="eve"&&$>=17})),y=w=>w===2?"الأكثر طلبًا":w===u.value.length-1?"آخر موعد":"",H=[["all","كل اليوم","🗓️"],["am","صباحًا","☀️"],["pm","مساءً","🌇"]];return(w,$)=>(i(),l(k,null,[n("div",ut,[$[0]||($[0]=n("h1",null,"اختر الوقت والتاريخ",-1)),n("p",null,"اختر الوقت المناسب لك — مدة الباقة "+a(g.value.dur)+" دقيقة",1)]),n("div",vt,[n("h4",{style:Ft},"📅 اختر اليوم"),n("div",mt,[(i(!0),l(k,null,F(t(e),(z,E)=>(i(),l("div",{key:E,class:C(["day",{sel:t(p).dayIdx===E}]),"data-bd":E,onClick:U=>{t(p).dayIdx=E,t(p).time=null}},[n("small",null,a(t(In)[z.getDay()]),1),n("b",null,a(z.getDate()),1),n("small",null,a(t(Ln)[z.getMonth()]),1)],10,ht))),128))])]),h.value?(i(),l("div",kt,"جاري تجهيز الحجز...")):t(p).dayIdx!=null?(i(),l("div",yt,[n("h4",{style:Bt},"🕐 "+a(t(K)(t(e)[t(p).dayIdx])),1),n("div",wt,[(i(),l(k,null,F(H,z=>n("button",{key:z[0],class:C(["period",{sel:t(p).period===z[0]}]),"data-bp":z[0],onClick:E=>t(p).period=z[0]},a(z[2])+" "+a(z[1]),11,_t)),64))]),x.value?(i(),l("div",{key:0,style:en},"جاري تحميل الأوقات المتاحة...")):(i(),l("div",zt,[u.value.length?(i(!0),l(k,{key:0},F(u.value,(z,E)=>(i(),l("button",{key:z,class:C(["slot",{sel:t(p).time===z}]),"data-bt":z,style:N(`animation-delay:${Math.min(E*.03,.4)}s`),onClick:U=>t(p).time=z},[y(E)?(i(),l("span",Mt,a(y(E)),1)):(i(),l(k,{key:1},[],64)),d(a(t(W)(z)),1)],14,$t))),128)):(i(),l("div",{key:1,style:en},"لا توجد أوقات متاحة في هذه الفترة"))]))])):(i(),l("div",Ct,[...$[1]||($[1]=[n("b",{style:{display:"block","font-family":"var(--font-d)","font-size":"16px",color:"var(--ink)","margin-bottom":"6px"}},"ابدأ باختيار اليوم",-1),d("اختر يومًا من الشريط أعلاه لعرض الأوقات المتاحة",-1)])]))],64))}},St={class:"ok-banner"},At={class:"ic"},It=["src","alt"],Lt={class:"t"},Dt={class:"incs"},Ht={class:"pr"},jt={class:"card bk-rows",style:{"margin-bottom":"16px"}},Pt={class:"gs-row"},Yt={class:"k"},Nt={class:"v"},Vt={class:"gs-row"},Tt={class:"k"},Gt={class:"v"},Rt={class:"gs-row"},qt={class:"k"},Ot={class:"v",dir:"ltr"},Kt={class:"gs-row"},Wt={class:"k"},Ut={class:"v"},Xt={class:"card",style:{padding:"20px"}},Qt={class:"fld",style:{margin:"0"}},Jt="font-size:12px;color:var(--mute);font-family:var(--font-b)",Zt="display:flex;gap:9px;align-items:center;font-size:12px;color:var(--mute);background:rgba(198,161,91,.08);border-radius:11px;padding:11px 15px;margin-top:14px",ne="color:var(--gold-deep);font-weight:600;text-decoration:underline",te={__name:"BookConfirmStep",setup(A){const{state:r,pkgOf:_,bkDays:m}=S(),p=r.bk,e=M(()=>_(p.pkg)),g=M(()=>m()[p.dayIdx]),h={check:'<path d="M20 6L9 17l-5-5"/>',pin:'<path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>',cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>'};return(f,x)=>{const s=rn("RouterLink");return i(),l(k,null,[x[9]||(x[9]=n("div",{class:"g-head"},[n("h1",null,"تأكيد الحجز"),n("p",null,"راجع تفاصيل الحجز قبل المتابعة للدفع")],-1)),n("div",St,[n("span",At,[c(v,{inner:h.check,size:16},null,8,["inner"])]),x[1]||(x[1]=n("div",null,[n("b",null,"تم حفظ موعدك بنجاح"),n("small",null,"يمكنك تعديل أو إلغاء الحجز قبل 6 ساعات من وقت الموعد")],-1))]),n("div",{class:"card bk-pkg-hero",style:N(`--pc:${e.value.color}`)},[n("img",{src:e.value.img,alt:e.value.name},null,8,It),n("div",Lt,[n("h4",null,a(e.value.name),1),n("small",null,"🕐 "+a(e.value.dur)+" دقيقة — "+a(e.value.desc),1),n("div",Dt,[(i(!0),l(k,null,F(e.value.inc,(o,u)=>(i(),l("span",{key:u},"✓ "+a(o),1))),128))])]),n("div",Ht,[d(a(t(j)(e.value.price))+" ",1),n("small",{style:Jt},"ر.س")])],4),n("div",jt,[n("div",Pt,[n("span",Yt,[c(v,{inner:h.pin,size:15},null,8,["inner"]),x[2]||(x[2]=d(" الفرع",-1))]),n("span",Nt,a(e.value.branchName),1)]),n("div",Vt,[n("span",Tt,[c(v,{inner:h.cal,size:15},null,8,["inner"]),x[3]||(x[3]=d(" التاريخ",-1))]),n("span",Gt,a(t(K)(g.value)),1)]),n("div",Rt,[n("span",qt,[c(v,{inner:h.clock,size:15},null,8,["inner"]),x[4]||(x[4]=d(" الوقت",-1))]),n("span",Ot,a(t(W)(t(p).time)),1)]),n("div",Kt,[n("span",Wt,[c(v,{inner:h.info,size:15},null,8,["inner"]),x[5]||(x[5]=d(" مدة الجلسة",-1))]),n("span",Ut,a(e.value.dur)+" دقيقة",1)])]),n("div",Xt,[n("div",Qt,[x[6]||(x[6]=n("label",null,"📝 ملاحظات (اختياري)",-1)),R(n("textarea",{id:"bkNotes",placeholder:"أضف أي ملاحظة...","onUpdate:modelValue":x[0]||(x[0]=o=>t(p).notes=o)},null,512),[[q,t(p).notes]])]),n("div",{style:Zt},[x[8]||(x[8]=d(" 🛡️ بالتأكيد على الحجز، فإنك توافق على ",-1)),c(s,{to:"/terms",style:ne},{default:D(()=>[...x[7]||(x[7]=[d("الشروط والأحكام",-1)])]),_:1})])])],64)}}},ee={class:"card pay-summary-strip"},oe={class:"amt"},ae={class:"card",style:{padding:"20px"}},ie={class:"bk-pays"},re=["data-bkpay","onClick"],se={class:"lg"},le={key:0,style:{color:"#b42318","font-size":"12px","margin-top":"4px"}},de=["disabled"],pe='<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>',ge="display:flex;gap:8px;align-items:center;justify-content:center;margin-top:14px;font-size:12px;color:var(--mute)",ce={__name:"BookPayStep",emits:["pay"],setup(A,{emit:r}){const{state:_,pkgOf:m,bkDays:p}=S(),e=r,g=_.bk,h=M(()=>m(g.pkg)),f=M(()=>p()[g.dayIdx]),x=["cash","wallet"],s=V(null);an(async()=>{var w,$;try{const z=await Tn();s.value=(($=(w=z==null?void 0:z.data)==null?void 0:w.balances)==null?void 0:$.wallet)??0}catch{}});function o(w){return w.id==="wallet"&&s.value!==null?`${w.n} (${j(s.value)} ر.س)`:w.n}function u(w){x.includes(w.id)&&(g.pay=w.id)}const y=M(()=>g.pay==="wallet"&&s.value!==null&&s.value<h.value.price),H=M(()=>!!g.pay&&!y.value);return(w,$)=>(i(),l(k,null,[$[2]||($[2]=n("div",{class:"g-head"},[n("h1",null,"اختر طريقة الدفع"),n("p",null,"ادفع بأمان وسهولة")],-1)),n("div",ee,[n("b",null,a(h.value.name),1),n("small",null,a(h.value.branchName)+" — "+a(t(K)(f.value))+" • "+a(t(W)(t(g).time)),1),n("span",oe,a(t(j)(h.value.price))+" ر.س",1)]),n("div",ae,[n("div",ie,[(i(!0),l(k,null,F(t(sn),z=>(i(),l("div",{key:z.id,class:C(["bkpm",{sel:t(g).pay===z.id,disabled:!x.includes(z.id)}]),"data-bkpay":z.id,onClick:E=>u(z)},[n("span",se,a(z.logo),1),n("b",null,a(o(z)),1),$[1]||($[1]=n("span",{class:"rad"},[n("i")],-1))],10,re))),128)),y.value?(i(),l("p",le,"رصيد محفظتك لا يكفي لدفع القيمة كاملة، اختر وسيلة دفع أخرى.")):Y("",!0)]),n("button",{class:"btn-paynow",id:"bkPayNow",disabled:!H.value,onClick:$[0]||($[0]=z=>e("pay"))},[c(v,{inner:pe,size:16}),d(" ادفع الآن — "+a(t(j)(h.value.price))+" ر.س",1)],8,de),n("div",{style:ge},"🌐 جميع المعاملات مؤمّنة وآمنة")])],64))}},xe=zn(ce,[["__scopeId","data-v-15d2d279"]]),fe={class:"gsuccess"},be={class:"gsuc-grid"},ue={class:"card gsuc-details"},ve={class:"gs-row"},me={class:"k"},he={class:"v"},ke={class:"gs-row"},ye={class:"k"},we={class:"v"},_e={class:"gs-row"},ze={class:"k"},$e={class:"v"},Me={class:"gs-row"},Ce={class:"k"},Fe={class:"v",dir:"ltr"},Be={class:"gs-row"},Ee={class:"k"},Se={class:"v"},Ae={class:"gs-row"},Ie={class:"k"},Le={class:"gs-row"},De={class:"k"},He={class:"v",dir:"ltr"},je={class:"gsuc-actions"},Pe="color:var(--gold-deep);font-family:var(--font-d);font-size:16px",Ye="display:block;margin-top:12px;font-size:11.5px;color:var(--mute)",Ne="display:flex;gap:8px;margin-top:14px",on="flex:1;padding:11px;font-size:12px",Ve={__name:"BookSuccess",emits:["home","calendar","share"],setup(A,{emit:r}){const{state:_,pkgOf:m,bkDays:p}=S(),e=r,g=_.bk,h=M(()=>m(g.pkg)),f=M(()=>p()[g.dayIdx]),x={box:'<path d="M20 12v10H4V12M2 7h20v5H2z"/>',pin:'<path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>',cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>',card:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',qr:'<path d="M4 4h16v16H4z"/><path d="M9 9h2v2H9zM13 9h2M9 13h2M13 13h2v2h-2z"/>',home:'<path d="M3 9l9-6 9 6v11a1 1 0 01-1 1H4a1 1 0 01-1-1z"/>',calAdd:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M12 14v4M10 16h4"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>'};return(s,o)=>(i(),l("div",fe,[o[16]||(o[16]=O('<div class="gsuc-head"><h1>تم تأكيد حجزك بنجاح!</h1><span class="ic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6L9 17l-5-5"></path></svg></span></div><p class="sub">نتطلع لخدمتك وتقديم تجربة استثنائية تليق بك</p>',2)),n("div",be,[n("div",ue,[o[10]||(o[10]=n("h4",null,"تفاصيل الحجز",-1)),n("div",ve,[n("span",me,[c(v,{inner:x.box,size:14},null,8,["inner"]),o[3]||(o[3]=d(" الباقة",-1))]),n("span",he,a(h.value.name),1)]),n("div",ke,[n("span",ye,[c(v,{inner:x.pin,size:14},null,8,["inner"]),o[4]||(o[4]=d(" الفرع",-1))]),n("span",we,a(h.value.branchName),1)]),n("div",_e,[n("span",ze,[c(v,{inner:x.cal,size:14},null,8,["inner"]),o[5]||(o[5]=d(" التاريخ",-1))]),n("span",$e,a(t(K)(f.value)),1)]),n("div",Me,[n("span",Ce,[c(v,{inner:x.clock,size:14},null,8,["inner"]),o[6]||(o[6]=d(" الوقت",-1))]),n("span",Fe,a(t(W)(t(g).time)),1)]),n("div",Be,[n("span",Ee,[c(v,{inner:x.info,size:14},null,8,["inner"]),o[7]||(o[7]=d(" مدة الجلسة",-1))]),n("span",Se,a(h.value.dur)+" دقيقة",1)]),n("div",Ae,[n("span",Ie,[c(v,{inner:x.card,size:14},null,8,["inner"]),o[8]||(o[8]=d(" المبلغ المدفوع",-1))]),n("span",{class:"v",style:Pe},a(t(j)(h.value.price))+" ر.س",1)]),n("div",Le,[n("span",De,[c(v,{inner:x.qr,size:14},null,8,["inner"]),o[9]||(o[9]=d(" رمز الحجز",-1))]),n("span",He,a(t(g).ref),1)])]),n("div",{class:"card gsuc-details",style:{"text-align":"center"}},[o[11]||(o[11]=n("h4",{style:{"text-align":"right"}},"رمز الوصول السريع",-1)),o[12]||(o[12]=n("div",{class:"qr-box"},[n("canvas",{id:"bkQr"})],-1)),n("small",{style:Ye},"📱 امسح الرمز عند الوصول لتسجيل الحضور"),n("div",{style:Ne},[n("button",{class:"btn btn-dark",style:on},"🍎 Apple Wallet"),n("button",{class:"btn btn-dark",style:on},"📲 Google Wallet")])])]),n("div",je,[n("button",{class:"btn btn-gold",id:"bkHome",onClick:o[0]||(o[0]=u=>e("home"))},[c(v,{inner:x.home,size:15},null,8,["inner"]),o[13]||(o[13]=d(" العودة إلى الرئيسية",-1))]),n("button",{class:"btn btn-line",id:"bkCal",onClick:o[1]||(o[1]=u=>e("calendar"))},[c(v,{inner:x.calAdd,size:15},null,8,["inner"]),o[14]||(o[14]=d(" إضافة إلى التقويم",-1))]),n("button",{class:"btn btn-line",id:"bkShare",onClick:o[2]||(o[2]=u=>e("share"))},[c(v,{inner:x.share,size:15},null,8,["inner"]),o[15]||(o[15]=d(" مشاركة الحجز",-1))])]),o[17]||(o[17]=n("div",{class:"thanks"},[n("i",null,"❦"),d(" جودة تستحقها.. تجربة لا تنساها "),n("i",null,"❦")],-1))]))}},Te={class:"gsum"},Ge={class:"card"},Re={class:"pkline"},qe=["src"],Oe={class:"pr"},Ke={key:0,class:"gs-row"},We={class:"v"},Ue={key:1,class:"gs-row"},Xe={class:"v"},Qe={key:2,class:"gs-row"},Je={class:"v"},Ze={key:3,class:"gs-row"},no={class:"v"},to={class:"gs-total"},eo={class:"v"},oo={class:"gs-note"},ao={class:"card help-card"},io={class:"hi"},ro={__name:"BookSummary",setup(A){const{state:r,pkgOf:_,bkDays:m}=S(),p=r.bk,e=M(()=>_(p.pkg)),g=M(()=>p.dayIdx!=null?m()[p.dayIdx]:null),h=M(()=>{const x=sn.find(s=>s.id===p.pay);return x?x.n:""}),f={shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',head:'<path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>'};return(x,s)=>(i(),l("div",Te,[n("div",Ge,[s[7]||(s[7]=n("h3",null,"ملخص الحجز",-1)),n("div",Re,[n("img",{src:e.value.img,alt:""},null,8,qe),n("span",null,[n("b",null,a(e.value.name),1),n("small",null,"🕐 "+a(e.value.dur)+" دقيقة",1),n("small",null,a(e.value.desc),1),n("span",Oe,a(t(j)(e.value.price))+" ر.س",1)])]),e.value.branchName?(i(),l("div",Ke,[s[0]||(s[0]=n("span",{class:"k"},"📍 الفرع",-1)),n("span",We,a(e.value.branchName),1)])):Y("",!0),g.value?(i(),l("div",Ue,[s[1]||(s[1]=n("span",{class:"k"},"📅 التاريخ",-1)),n("span",Xe,a(t(K)(g.value)),1)])):Y("",!0),t(p).time!=null?(i(),l("div",Qe,[s[2]||(s[2]=n("span",{class:"k"},"🕐 الوقت",-1)),n("span",Je,a(t(W)(t(p).time)),1)])):Y("",!0),t(p).pay?(i(),l("div",Ze,[s[3]||(s[3]=n("span",{class:"k"},"💳 طريقة الدفع",-1)),n("span",no,a(h.value),1)])):Y("",!0),n("div",to,[s[5]||(s[5]=n("span",{class:"k"},"الإجمالي",-1)),n("span",eo,[d(a(t(j)(e.value.price))+" ",1),s[4]||(s[4]=n("small",{style:{"font-size":"13px"}},"ر.س",-1))])]),n("div",oo,[c(v,{inner:f.shield,size:14},null,8,["inner"]),s[6]||(s[6]=d(" حجز آمن — تعديل أو إلغاء مجاني قبل 6 ساعات",-1))])]),n("div",ao,[n("span",io,[c(v,{inner:f.head,size:18},null,8,["inner"])]),s[8]||(s[8]=n("b",null,"دعم على مدار الساعة",-1)),s[9]||(s[9]=n("small",null,"نحن هنا لخدمتك",-1)),s[10]||(s[10]=n("a",{href:"https://wa.me/963959415545"},"تواصل معنا",-1))])]))}},so={class:"g-stepper"},lo={class:"g-steps"},po=["data-i"],go={class:"bubble"},co='<path d="M20 6L9 17l-5-5"/>',xo={__name:"GiftStepper",setup(A){const{state:r}=S();return(_,m)=>(i(),l("div",so,[n("div",lo,[(i(!0),l(k,null,F(t(Dn),(p,e)=>(i(),l("div",{key:e,class:C(["g-step",{active:e===t(r).gstep,done:e<t(r).gstep||t(r).done}]),"data-i":e},[m[0]||(m[0]=n("div",{class:"bar"},[n("i")],-1)),n("span",go,[e<t(r).gstep||t(r).done?(i(),P(v,{key:0,inner:co,size:17})):(i(),l(k,{key:1},[d(a(e+1),1)],64))]),n("b",null,a(p.t),1),n("small",null,a(p.s),1)],10,po))),128))])]))}},fo={class:"gtype-grid"},bo=["data-gt","onClick"],uo={class:"im"},vo=["src"],mo={class:"ic"},ho={class:"bd"},ko={class:"go"},yo='<path d="M19 12H5M11 18l-6-6 6-6"/>',wo={__name:"GiftTypeStep",setup(A){const{state:r}=S();return(_,m)=>(i(),l(k,null,[m[0]||(m[0]=n("div",{class:"g-head"},[n("h1",null,"ماذا ترغب بإهدائه؟"),n("p",null,"اختر ما يناسبك لإهداء تجربة مميزة لمن تحب")],-1)),n("div",fo,[(i(!0),l(k,null,F(t(Hn),p=>(i(),l("div",{key:p.id,class:C(["gtype",{sel:t(r).gtype===p.id}]),"data-gt":p.id,onClick:e=>t(r).gtype=p.id},[n("div",uo,[n("img",{src:p.img,alt:""},null,8,vo),n("span",mo,[c(v,{inner:p.ic,size:22},null,8,["inner"])])]),n("div",ho,[n("h3",null,a(p.n),1),n("p",null,a(p.d),1),n("span",ko,[d(a(p.btn)+" ",1),c(v,{inner:yo,size:14})])])],10,bo))),128))])],64))}},_o={class:"gp-sort"},zo={class:"gpkgs"},$o=["data-gp","onClick"],Mo={class:"ph"},Co=["src","alt"],Fo={class:"chk"},Bo={class:"bd"},Eo={class:"dur"},So={class:"desc"},Ao={class:"prc"},Io={class:"pick"},Lo={__name:"GiftPickStep",setup(A){const{state:r,packages:_}=S(),m={check:'<path d="M20 6L9 17l-5-5"/>',gift:'<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7s-2-5-5-5-3 5 0 5h5zM12 7s2-5 5-5 3 5 0 5h-5z"/>'},p=M(()=>_.value.slice().sort((e,g)=>r.sort==="low"?e.price-g.price:r.sort==="high"?g.price-e.price:(g.hot?1:0)-(e.hot?1:0)));return(e,g)=>(i(),l(k,null,[g[3]||(g[3]=n("div",{class:"g-head"},[n("h1",null,"اختر الباقة التي ترغب بإهدائها"),n("p",null,"باقات مميزة تمنح تجربة متكاملة من الاسترخاء والعناية")],-1)),n("div",_o,[R(n("select",{id:"gpSort","onUpdate:modelValue":g[0]||(g[0]=h=>t(r).sort=h)},[...g[1]||(g[1]=[n("option",{value:"pop"},"الأكثر مبيعًا",-1),n("option",{value:"low"},"السعر: الأقل أولًا",-1),n("option",{value:"high"},"السعر: الأعلى أولًا",-1)])],512),[[$n,t(r).sort]]),n("small",null,a(t(_).length)+" باقات متاحة",1)]),n("div",zo,[(i(!0),l(k,null,F(p.value,(h,f)=>(i(),l("div",{key:h.id,class:C(["gpkg",{sel:t(r).gpkg===h.id}]),"data-gp":h.id,style:N(`--pc:${h.color};animation-delay:${f*.06}s`),onClick:x=>t(r).gpkg=h.id},[n("div",Mo,[n("img",{src:h.img,alt:h.name},null,8,Co),n("span",Fo,[c(v,{inner:m.check,size:13},null,8,["inner"])])]),n("div",Bo,[n("h4",null,a(h.name),1),n("div",Eo,"🕐 "+a(h.dur)+" دقيقة",1),n("div",So,a(h.desc),1),n("div",Ao,[d(a(t(j)(h.price))+" ",1),g[2]||(g[2]=n("small",null,"ر.س",-1))]),n("button",Io,[c(v,{inner:m.gift,size:14},null,8,["inner"]),d(" "+a(t(r).gpkg===h.id?"تم الاختيار ✓":"أهدِ هذه الباقة"),1)])])],14,$o))),128))])],64))}},Do={class:"custom-grid"},Ho={class:"preview-col"},jo={id:"cardPrev"},Po={class:"gcard-msg"},Yo={id:"pvName"},No={id:"pvMsg"},Vo={class:"form-col"},To={class:"card",style:{"margin-bottom":"16px"}},Go={class:"two"},Ro={class:"fld"},qo={class:"fld"},Oo={class:"fld",style:{"margin-bottom":"4px"}},Ko={class:"card",style:{"margin-bottom":"16px"}},Wo={class:"designs"},Uo=["data-d","onClick"],Xo={class:"dchk"},Qo={class:"card"},Jo={class:"send-opts"},Zo={class:"fld",style:{margin:"0"}},na={class:"methods",style:{"margin-top":"14px"}},ta=["data-m","onClick"],ea={class:"mi"},oa={__name:"GiftCustomizeStep",setup(A){const{state:r}=S(),_=M(()=>200-r.msg.length),m={eye:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',user:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',brush:'<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.6 7.6"/><circle cx="11" cy="11" r="2"/>',send:'<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>',check:'<path d="M20 6L9 17l-5-5"/>'};return(p,e)=>(i(),l(k,null,[e[20]||(e[20]=n("div",{class:"g-head"},[n("h1",null,"خصص هديتك لتكون أجمل"),n("p",null,"أضف لمستك الخاصة مع رسالة وتصميم بطاقة الإهداء")],-1)),n("div",Do,[n("div",Ho,[n("h4",null,[c(v,{inner:m.eye,size:16},null,8,["inner"]),e[6]||(e[6]=d(" معاينة بطاقة الإهداء",-1))]),n("div",jo,[c(ln,{design:t(r).design},null,8,["design"])]),n("div",Po,[e[8]||(e[8]=n("span",{class:"q q1"},'"',-1)),e[9]||(e[9]=n("span",{class:"q q2"},'"',-1)),n("b",null,[e[7]||(e[7]=d("إلى: ",-1)),n("span",Yo,a(t(r).name||"—"),1)]),n("p",No,a(t(r).msg||"اكتب رسالتك الشخصية لتظهر هنا"),1)])]),n("div",Vo,[n("div",To,[n("h4",null,[c(v,{inner:m.user,size:16},null,8,["inner"]),e[10]||(e[10]=d(" بيانات المهدى إليه",-1))]),n("div",Go,[n("div",Ro,[e[11]||(e[11]=n("label",null,"الاسم الكامل",-1)),R(n("input",{id:"gName",placeholder:"أحمد محمد","onUpdate:modelValue":e[0]||(e[0]=g=>t(r).name=g)},null,512),[[q,t(r).name]])]),n("div",qo,[e[12]||(e[12]=n("label",null,"رقم الجوال",-1)),R(n("input",{id:"gPhone",dir:"ltr",placeholder:"05xxxxxxxx","onUpdate:modelValue":e[1]||(e[1]=g=>t(r).phone=g)},null,512),[[q,t(r).phone]])])]),n("div",Oo,[e[13]||(e[13]=n("label",null,"الرسالة الشخصية",-1)),R(n("textarea",{id:"gMsg",maxlength:"200",placeholder:"اكتب رسالتك من القلب...","onUpdate:modelValue":e[2]||(e[2]=g=>t(r).msg=g)},null,512),[[q,t(r).msg]]),n("span",{class:C(["cnt",{max:_.value<20}]),id:"gCnt"},a(t(r).msg.length)+"/200",3)])]),n("div",Ko,[n("h4",null,[c(v,{inner:m.brush,size:16},null,8,["inner"]),e[14]||(e[14]=d(" تصميم بطاقة الإهداء",-1))]),n("div",Wo,[(i(!0),l(k,null,F(t(dn),g=>(i(),l("div",{key:g.id,class:C(["design",{sel:t(r).design===g.id}]),"data-d":g.id,onClick:h=>t(r).design=g.id},[n("div",{class:"sw",style:N(`background:${g.bg};color:${g.fg}`)},[n("span",Xo,[c(v,{inner:m.check,size:10},null,8,["inner"])]),e[15]||(e[15]=d("SAMI",-1))],4),n("small",null,a(g.n),1)],10,Uo))),128))])]),n("div",Qo,[n("h4",null,[c(v,{inner:m.send,size:16},null,8,["inner"]),e[16]||(e[16]=d(" طريقة الإرسال",-1))]),n("div",Jo,[n("span",{class:C(["ro",{on:t(r).when==="now"}]),"data-w":"now",onClick:e[3]||(e[3]=g=>t(r).when="now")},[...e[17]||(e[17]=[n("i",null,null,-1),d(" إرسال الآن",-1)])],2),n("span",{class:C(["ro",{on:t(r).when==="later"}]),"data-w":"later",onClick:e[4]||(e[4]=g=>t(r).when="later")},[...e[18]||(e[18]=[n("i",null,null,-1),d(" 📅 جدولة لاحقًا",-1)])],2)]),n("div",{class:C(["sched-box",{open:t(r).when==="later"}])},[n("div",Zo,[e[19]||(e[19]=n("label",null,"موعد الإرسال",-1)),R(n("input",{type:"datetime-local",id:"gSched","onUpdate:modelValue":e[5]||(e[5]=g=>t(r).schedDate=g)},null,512),[[q,t(r).schedDate]])])],2),n("div",na,[(i(!0),l(k,null,F(t(Q),g=>(i(),l("div",{key:g.id,class:C(["mth",{sel:t(r).method===g.id}]),"data-m":g.id,onClick:h=>t(r).method=g.id},[n("span",ea,[c(v,{inner:g.ic,size:17},null,8,["inner"])]),d(a(g.n),1)],10,ta))),128))])])])])],64))}},aa={class:"card",style:{padding:"22px","margin-bottom":"16px"}},ia={class:"pay-methods"},ra=["data-pay","onClick"],sa={class:"pmi"},la={class:"cf-box"},da={class:"secure-strip"},pa="font-family:var(--font-d);font-size:16px;color:var(--ink);margin-bottom:16px",ga={__name:"GiftPayStep",setup(A){const{state:r}=S(),_=M(()=>r.pay==="card"||r.pay==="mada"),m={check:'<path d="M20 6L9 17l-5-5"/>',shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'};return(p,e)=>(i(),l(k,null,[e[8]||(e[8]=n("div",{class:"g-head"},[n("h1",null,[d("أكمل الدفع لإرسال هديتك "),n("span",{class:"lock"},"🔒")]),n("p",null,"بيانات دفع آمنة ومشفرة بالكامل")],-1)),n("div",aa,[n("h4",{style:pa},"اختر طريقة الدفع"),n("div",ia,[(i(!0),l(k,null,F(t(jn),g=>(i(),l("div",{key:g.id,class:C(["pm",{sel:t(r).pay===g.id}]),"data-pay":g.id,onClick:h=>t(r).pay=g.id},[e[1]||(e[1]=n("span",{class:"rad"},[n("i")],-1)),n("span",sa,a(g.logo),1),n("b",null,a(g.n),1),n("small",null,a(g.d),1)],10,ra))),128))]),n("div",{class:C(["card-form",{open:_.value}])},[n("div",la,[e[3]||(e[3]=n("h5",null,"بيانات البطاقة",-1)),e[4]||(e[4]=n("div",{class:"two"},[n("div",{class:"fld"},[n("label",null,"رقم البطاقة"),n("input",{dir:"ltr",inputmode:"numeric",placeholder:"•••• •••• •••• ••••"})]),n("div",{class:"fld"},[n("label",null,"الاسم على البطاقة"),n("input",{placeholder:"الاسم كما هو على البطاقة"})])],-1)),e[5]||(e[5]=n("div",{class:"two"},[n("div",{class:"fld",style:{margin:"0"}},[n("label",null,"تاريخ الانتهاء"),n("input",{dir:"ltr",placeholder:"MM / YY"})]),n("div",{class:"fld",style:{margin:"0"}},[n("label",null,"رمز الأمان (CVV)"),n("input",{dir:"ltr",inputmode:"numeric",placeholder:"•••"})])],-1)),n("span",{class:C(["save-card",{on:t(r).saveCard}]),id:"saveCard",onClick:e[0]||(e[0]=g=>t(r).saveCard=!t(r).saveCard)},[n("i",null,[c(v,{inner:m.check,size:11},null,8,["inner"])]),e[2]||(e[2]=d(" حفظ البطاقة لاستخدامها لاحقًا",-1))],2)])],2),n("div",da,[c(v,{inner:m.shield,size:15},null,8,["inner"]),e[6]||(e[6]=d(" جميع بيانات الدفع محمية بتقنية تشفير آمنة ومعتمدة",-1))]),e[7]||(e[7]=n("div",{class:"after-pay"},"سيتم إرسال الهدية مباشرة بعد إتمام الدفع",-1))])],64))}},ca={class:"gsuccess"},xa={class:"gsuc-grid"},fa={class:"gsuc-card-col"},ba={class:"gcard-msg"},ua={class:"card gsuc-details"},va={class:"gs-row"},ma={class:"k"},ha={class:"v"},ka={class:"gs-row"},ya={class:"k"},wa={class:"v"},_a={class:"gs-row"},za={class:"k"},$a={class:"v",dir:"ltr"},Ma={class:"gs-row"},Ca={class:"k"},Fa={class:"v"},Ba={class:"chip"},Ea={class:"gs-row"},Sa={class:"k"},Aa={class:"gs-row"},Ia={class:"k"},La={class:"v",dir:"ltr"},Da={class:"gsuc-actions"},Ha="display:flex;gap:10px;align-items:center;background:var(--green-bg);border-radius:12px;padding:13px 15px;margin-top:14px;font-size:12.5px;color:#1E6B41",ja="flex:none;width:26px;height:26px;border-radius:50%;background:var(--green);color:#fff;display:grid;place-items:center",Pa={__name:"GiftSuccess",emits:["recipient","new-gift","copy-self","share","home"],setup(A,{emit:r}){const{state:_}=S(),m=r,p=["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],e=new Date,g=`${e.getDate()} ${p[e.getMonth()]} ${e.getFullYear()}`,h="✦✧✦✧".split("").map((s,o)=>({c:s,style:`top:${10+o*16}%;${o%2?"right":"left"}:${4+o*3}%;animation-delay:-${o}s`})),f=M(()=>{const s=Q.find(o=>o.id===_.method);return s?s.n:""}),x={user:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',send:'<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>',phone:'<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',card:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',check:'<path d="M20 6L9 17l-5-5"/>',box:'<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7"/>',gift:'<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7s-2-5-5-5-3 5 0 5h5zM12 7s2-5 5-5 3 5 0 5h-5z"/>',mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 6L2 7"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>',home:'<path d="M3 9l9-6 9 6v11a1 1 0 01-1 1H4a1 1 0 01-1-1z"/>'};return(s,o)=>(i(),l("div",ca,[(i(!0),l(k,null,F(t(h),(u,y)=>(i(),l("span",{key:y,class:"confetti",style:N(u.style)},a(u.c),5))),128)),o[20]||(o[20]=O('<div class="gsuc-head"><h1>تم إرسال هديتك بنجاح</h1><span class="ic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6L9 17l-5-5"></path></svg></span></div><p class="sub">لقد أسعدت قلبًا اليوم 🤍 شكرًا لاختيارك عناية سامي</p>',2)),n("div",xa,[n("div",fa,[c(ln,{design:t(_).design},null,8,["design"]),n("div",ba,[o[5]||(o[5]=n("span",{class:"q q1"},'"',-1)),o[6]||(o[6]=n("span",{class:"q q2"},'"',-1)),n("p",null,a(t(_).msg),1)])]),n("div",ua,[o[14]||(o[14]=n("h4",null,"تفاصيل الإرسال",-1)),n("div",va,[n("span",ma,[c(v,{inner:x.user,size:14},null,8,["inner"]),o[7]||(o[7]=d(" المهدى إليه",-1))]),n("span",ha,a(t(_).name),1)]),n("div",ka,[n("span",ya,[c(v,{inner:x.send,size:14},null,8,["inner"]),o[8]||(o[8]=d(" طريقة الإرسال",-1))]),n("span",wa,a(f.value),1)]),n("div",_a,[n("span",za,[c(v,{inner:x.phone,size:14},null,8,["inner"]),o[9]||(o[9]=d(" رقم الجوال",-1))]),n("span",$a,a(t(_).phone),1)]),n("div",Ma,[n("span",Ca,[c(v,{inner:x.clock,size:14},null,8,["inner"]),o[10]||(o[10]=d(" وقت الإرسال",-1))]),n("span",Fa,[n("span",Ba,"✓ "+a(t(_).when==="now"?"تم الإرسال الآن":"مجدولة"),1)])]),n("div",Ea,[n("span",Sa,[c(v,{inner:x.cal,size:14},null,8,["inner"]),o[11]||(o[11]=d(" تاريخ الإرسال",-1))]),n("span",{class:"v"},a(g))]),n("div",Aa,[n("span",Ia,[c(v,{inner:x.card,size:14},null,8,["inner"]),o[12]||(o[12]=d(" رقم العملية",-1))]),n("span",La,a(t(_).ref),1)]),n("div",{style:Ha},[n("span",{style:ja},[c(v,{inner:x.check,size:13},null,8,["inner"])]),o[13]||(o[13]=d(" تم إرسال الهدية بنجاح إلى المستلم — ستظهر الهدية في رسالة خاصة من عناية سامي ",-1))])])]),n("div",Da,[n("button",{class:"btn btn-gold",id:"openRecipient",onClick:o[0]||(o[0]=u=>m("recipient"))},[c(v,{inner:x.box,size:15},null,8,["inner"]),o[15]||(o[15]=d(" فتح صفحة المستلم",-1))]),n("button",{class:"btn btn-dark",id:"newGift",onClick:o[1]||(o[1]=u=>m("new-gift"))},[c(v,{inner:x.gift,size:15},null,8,["inner"]),o[16]||(o[16]=d(" إهداء جديد",-1))]),n("button",{class:"btn btn-line",id:"copySelf",onClick:o[2]||(o[2]=u=>m("copy-self"))},[c(v,{inner:x.mail,size:15},null,8,["inner"]),o[17]||(o[17]=d(" إرسال نسخة لنفسي",-1))]),n("button",{class:"btn btn-line",id:"shareGift",onClick:o[3]||(o[3]=u=>m("share"))},[c(v,{inner:x.share,size:15},null,8,["inner"]),o[18]||(o[18]=d(" مشاركة الهدية",-1))]),n("button",{class:"btn btn-line",id:"backHome",onClick:o[4]||(o[4]=u=>m("home"))},[c(v,{inner:x.home,size:15},null,8,["inner"]),o[19]||(o[19]=d(" العودة للرئيسية",-1))])]),o[21]||(o[21]=n("div",{class:"thanks"},[n("i",null,"❦"),d(" شكرًا لاختيارك عناية سامي لتقديم تجربة مميزة لمن تحب "),n("i",null,"❦")],-1))]))}},Ya={key:0,class:"gsum"},Na={class:"card"},Va={class:"why-gift"},Ta={class:"wi"},Ga={class:"card help-card"},Ra={class:"hi"},qa={key:1,class:"gsum"},Oa={class:"card"},Ka={key:0,class:"pkline"},Wa=["src"],Ua={class:"pr"},Xa={class:"gs-row"},Qa={class:"v"},Ja={class:"gs-row"},Za={class:"v",dir:"ltr"},ni={class:"gs-row"},ti={class:"v"},ei={class:"gs-row"},oi={class:"v"},ai={class:"gs-row"},ii={class:"v"},ri={class:"gs-row"},si={class:"v"},li={class:"chip"},di={key:3,class:"gs-total"},pi={class:"v"},gi={class:"gs-note"},ci={key:0,class:"card help-card"},xi={class:"hi"},fi="text-align:center;padding:20px;border:1.5px dashed var(--line);border-radius:13px;color:var(--mute);font-size:12.5px;margin-bottom:12px",bi="display:block;font-family:var(--font-d);color:var(--ink);margin-bottom:4px",ui={__name:"GiftSummary",setup(A){const{state:r,pkgOf:_}=S(),m=M(()=>r.gpkg?_(r.gpkg):null),p=M(()=>dn.find(x=>x.id===r.design)),e=M(()=>r.gstep===0||!m.value&&r.gstep<2),g=M(()=>{const x=Q.find(s=>s.id===r.method);return x?x.n:""}),h={head:'<path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>',lock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>'},f=[["هدية رقمية فورية","تصلك أو تصل للمستلم فور إتمام الدفع",'<path d="M13 2L3 14h9l-1 8 10-12h-9z"/>'],["صالحة لمدة 6 أشهر","من تاريخ الشراء",'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>'],["المستلم يختار موعده","يختار الوقت والفرع المناسب له",'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>'],["آمنة وموثوقة","نضمن لك تجربة إهداء مميزة",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>']];return(x,s)=>e.value?(i(),l("div",Ya,[n("div",Na,[s[0]||(s[0]=n("h3",null,"لماذا الإهداء من سامي؟",-1)),n("div",Va,[(i(),l(k,null,F(f,(o,u)=>n("div",{key:u,class:"wg"},[n("span",Ta,[c(v,{inner:o[2],size:17},null,8,["inner"])]),n("span",null,[n("b",null,a(o[0]),1),n("small",null,a(o[1]),1)])])),64))])]),n("div",Ga,[n("span",Ra,[c(v,{inner:h.head,size:18},null,8,["inner"])]),s[1]||(s[1]=n("b",null,"تحتاج مساعدة؟",-1)),s[2]||(s[2]=n("small",null,"فريقنا جاهز لمساعدتك",-1)),s[3]||(s[3]=n("a",{href:"https://wa.me/963959415545"},"تواصل معنا",-1))])])):(i(),l("div",qa,[n("div",Oa,[s[14]||(s[14]=n("h3",null,"ملخص الإهداء",-1)),m.value?(i(),l("div",Ka,[n("img",{src:m.value.img,alt:""},null,8,Wa),n("span",null,[n("b",null,a(m.value.name),1),n("small",null,"🕐 "+a(m.value.dur)+" دقيقة",1),n("small",null,a(m.value.desc),1),n("span",Ua,a(t(j)(m.value.price))+" ر.س",1)])])):(i(),l("div",{key:1,style:fi},[n("b",{style:bi},"لم يتم اختيار باقة بعد"),s[4]||(s[4]=d("اختر الباقة المناسبة لإهدائها لمن تحب",-1))])),t(r).gstep>=2?(i(),l(k,{key:2},[n("div",Xa,[s[5]||(s[5]=n("span",{class:"k"},"👤 المهدى إليه",-1)),n("span",Qa,a(t(r).name||"—"),1)]),n("div",Ja,[s[6]||(s[6]=n("span",{class:"k"},"📱 رقم الجوال",-1)),n("span",Za,a(t(r).phone||"—"),1)]),n("div",ni,[s[7]||(s[7]=n("span",{class:"k"},"🎨 تصميم البطاقة",-1)),n("span",ti,a(p.value.n),1)]),n("div",ei,[s[8]||(s[8]=n("span",{class:"k"},"💬 الرسالة",-1)),n("span",oi,a(t(r).msg?"تمت إضافة رسالة مخصصة":"—"),1)]),n("div",ai,[s[9]||(s[9]=n("span",{class:"k"},"📤 طريقة الإرسال",-1)),n("span",ii,a(g.value),1)]),n("div",ri,[s[10]||(s[10]=n("span",{class:"k"},"🕐 وقت الإرسال",-1)),n("span",si,[n("span",li,a(t(r).when==="now"?"فوري":"مجدول"),1)])])],64)):Y("",!0),m.value?(i(),l("div",di,[s[12]||(s[12]=n("span",{class:"k"},"الإجمالي",-1)),n("span",pi,[d(a(t(j)(m.value.price))+" ",1),s[11]||(s[11]=n("small",{style:{"font-size":"13px"}},"ر.س",-1))])])):Y("",!0),n("div",gi,[c(v,{inner:h.lock,size:14},null,8,["inner"]),s[13]||(s[13]=d(" بإتمامك معلومات الهدية مشفرة وآمنة 100%",-1))])]),t(r).gstep===1?(i(),l("div",ci,[n("span",xi,[c(v,{inner:h.head,size:18},null,8,["inner"])]),s[15]||(s[15]=n("b",null,"تحتاج مساعدة؟",-1)),s[16]||(s[16]=n("small",null,"فريقنا جاهز لمساعدتك في اختيار الهدية المثالية",-1)),s[17]||(s[17]=n("a",{href:"https://wa.me/963959415545"},"تواصل معنا",-1))])):Y("",!0)]))}},vi={class:"shell"},mi={class:"wrap",id:"pkgApp"},hi={key:0,class:"view on"},ki={key:1,class:"g-stage"},yi={class:"view on"},wi={id:"gsumWrap"},_i={key:0,class:"view on"},zi={key:1,class:"g-stage"},$i={class:"view on"},Mi={id:"gsumWrap"},Ci={class:"wrap"},Fi={class:"f-grid"},Bi={class:"f-brand"},Ei={class:"f-links"},Si={class:"f-links"},Ai=["href"],Ii={class:"wrap in"},Li={class:"fb-mid",id:"fbMid"},Di=["disabled"],Hi='<path d="M19 12H5M11 18l-6-6 6-6"/>',Gi={__name:"PackagesGiftsView",setup(A){const r=V(null),{current:_,openPicker:m,requireLocation:p,locations:e,loadServiceLocations:g}=Mn();g();const{requireAuth:h}=Cn(),{state:f,pkgOf:x,bkDays:s,gCanNext:o,gNextLabel:u,bkCanNext:y,bkNextLabel:H,startGift:w,startBook:$,backToPackages:z}=S();Bn(Gn,"packages-gifts"),En(r);const E=V(!1),U=V(""),X=V(!1);function T(B){U.value=B,X.value=!0,clearTimeout(T._h),T._h=setTimeout(()=>{X.value=!1},2600)}const G=M(()=>f.page==="book"),pn=M(()=>G.value?!(f.bk.done||f.bk.step>=2):f.page==="gift"&&!f.done&&f.gstep!==4),gn=M(()=>G.value?!0:f.gstep!==0),J=M(()=>{const B=G.value?f.bk.pkg:f.gpkg;return B?x(B):null}),Z=M(()=>G.value?y.value:o.value),cn=M(()=>G.value?H.value:u.value);function xn(){if(G.value){if(f.bk.step===0){z();return}f.bk.step--}else{if(f.gstep===0){z();return}f.gstep--}scrollTo({top:0,behavior:"smooth"})}function fn(){if(Z.value){if(G.value)f.bk.step++;else{if(f.gstep===3){bn();return}f.gstep++}scrollTo({top:0,behavior:"smooth"})}}function bn(){E.value=!0,setTimeout(()=>{E.value=!1,f.done=!0,f.gstep=4,f.ref="#GIFT-2026-"+String(Math.floor(1e4+Math.random()*89999)),scrollTo({top:0,behavior:"smooth"})},2100)}function un(B){return`${B.getFullYear()}-${String(B.getMonth()+1).padStart(2,"0")}-${String(B.getDate()).padStart(2,"0")}`}function vn(){h(async()=>{var B;E.value=!0;try{const b=f.bk,L=s()[b.dayIdx];await Nn({package_id:b.pkg,branch_id:b.branch,date:un(L),time:b.time,employee_id:(B=b.employee)==null?void 0:B.id,notes:b.notes||void 0});const I=b.pay==="wallet",wn=await Vn(I?"card":"cod",{wallet:I});f.bk.ref=wn.invoice_id||null,f.bk.done=!0,scrollTo({top:0,behavior:"smooth"})}catch(b){T(b.message||"تعذّر إتمام الحجز، حاول مرة أخرى")}finally{E.value=!1}})}function nn(){_.value&&(f.siteBranch=_.value.id)}function mn(B){$(B)}function hn(B){p(()=>{nn(),w("pkg",B)})}function kn(){p(()=>{nn(),w(null,null)})}function yn(){f.done=!1,f.gstep=0,f.gtype=null,f.gpkg=null,f.pay=null,f.ref=null,scrollTo({top:0,behavior:"smooth"})}function tn(){location.href="/"}return(B,b)=>{const L=rn("RouterLink");return i(),l("div",{ref_key:"root",ref:r},[n("div",vi,[n("div",mi,[t(f).page==="packages"?(i(),P(dt,{key:0,onBook:mn,onGift:hn,onGiftNow:kn,onPickBranch:t(m)},null,8,["onPickBranch"])):t(f).page==="book"?(i(),l(k,{key:1},[c(bt),t(f).bk.done?(i(),l("div",hi,[c(Ve,{onHome:tn,onCalendar:b[0]||(b[0]=I=>T("تمت إضافة الموعد إلى التقويم")),onShare:b[1]||(b[1]=I=>T("تم نسخ رابط الحجز للمشاركة"))})])):(i(),l("div",ki,[n("main",yi,[t(f).bk.step===0?(i(),P(Et,{key:0})):t(f).bk.step===1?(i(),P(te,{key:1})):(i(),P(xe,{key:2,onPay:vn}))]),n("aside",wi,[c(ro)])]))],64)):(i(),l(k,{key:2},[c(xo),t(f).done?(i(),l("div",_i,[c(Pa,{onRecipient:b[2]||(b[2]=I=>B.location.href="/gift-recipient?ref="+encodeURIComponent(t(f).ref||"")),onNewGift:yn,onCopySelf:b[3]||(b[3]=I=>T("تم إرسال نسخة من الهدية إلى بريدك")),onShare:b[4]||(b[4]=I=>T("تم نسخ رابط الهدية للمشاركة")),onHome:tn})])):(i(),l("div",zi,[n("main",$i,[t(f).gstep===0?(i(),P(wo,{key:0})):t(f).gstep===1?(i(),P(Lo,{key:1})):t(f).gstep===2?(i(),P(oa,{key:2})):(i(),P(ga,{key:3}))]),n("aside",Mi,[c(ui)])]))],64))])]),n("footer",null,[n("div",Ci,[n("div",Fi,[n("div",Bi,[c(L,{class:"logo",to:"/"},{default:D(()=>[...b[5]||(b[5]=[n("span",{class:"mark"},[n("img",{src:Fn,alt:"عناية سامي",style:{width:"29px",height:"29px","object-fit":"contain"}})],-1),n("span",{class:"name"},[n("b",null,"عناية سامي"),n("span",null,"SAMI CARE")],-1)])]),_:1}),b[6]||(b[6]=O('<p>مركز متخصص في العناية الرجالية المتكاملة بجدة، حيث تلتقي الفخامة بالاحترافية في كل تفصيلة.</p><div class="socials"><a href="https://x.com/samicare_sa" aria-label="X"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-6.8 7.8L23.3 22h-6.3l-4.9-6.4L6.5 22H3.4l7.3-8.3L1 2h6.5l4.4 5.8L18.9 2zm-1.1 18h1.7L7.1 3.9H5.3L17.8 20z"></path></svg></a><a href="https://www.instagram.com/samicare.sa/" aria-label="انستقرام"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1" fill="currentColor"></circle></svg></a><a href="https://www.facebook.com/samicare.sa" aria-label="فيسبوك"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg></a></div>',2))]),n("div",null,[b[12]||(b[12]=n("h4",null,"روابط مهمة",-1)),n("ul",Ei,[n("li",null,[c(L,{to:"/"},{default:D(()=>[...b[7]||(b[7]=[d("الرئيسية",-1)])]),_:1})]),n("li",null,[c(L,{to:"/booking"},{default:D(()=>[...b[8]||(b[8]=[d("حجز موعد",-1)])]),_:1})]),n("li",null,[c(L,{to:"/#services"},{default:D(()=>[...b[9]||(b[9]=[d("خدماتنا",-1)])]),_:1})]),n("li",null,[c(L,{to:"/packages-gifts"},{default:D(()=>[...b[10]||(b[10]=[d("الباقات",-1)])]),_:1})]),n("li",null,[c(L,{to:"/gifts"},{default:D(()=>[...b[11]||(b[11]=[d("الهدايا",-1)])]),_:1})])])]),n("div",null,[b[18]||(b[18]=n("h4",null,"استكشف",-1)),n("ul",Si,[n("li",null,[c(L,{to:"/store"},{default:D(()=>[...b[13]||(b[13]=[d("المتجر",-1)])]),_:1})]),n("li",null,[c(L,{to:"/branches"},{default:D(()=>[...b[14]||(b[14]=[d("فروعنا",-1)])]),_:1})]),n("li",null,[c(L,{to:"/contact"},{default:D(()=>[...b[15]||(b[15]=[d("تواصل معنا",-1)])]),_:1})]),n("li",null,[c(L,{to:"/terms"},{default:D(()=>[...b[16]||(b[16]=[d("الشروط والأحكام",-1)])]),_:1})]),n("li",null,[c(L,{to:"/privacy-policy"},{default:D(()=>[...b[17]||(b[17]=[d("سياسة الخصوصية",-1)])]),_:1})])])]),n("div",null,[b[19]||(b[19]=n("h4",null,"عناوين الفروع",-1)),(i(!0),l(k,null,F(t(e),I=>(i(),l("div",{key:I.id,class:"f-branch"},[n("b",null,a(I.name),1),n("small",null,a(I.address),1),I.contact_number?(i(),l("a",{key:0,href:`tel:${I.contact_number}`},a(I.contact_number),9,Ai)):Y("",!0)]))),128)),b[20]||(b[20]=n("div",{class:"f-branch"},[n("b",null,"خدمات منزلية"),n("small",null,"حلاقة شعر ولحية وماسكات طبيعية")],-1))])]),b[21]||(b[21]=O('<div class="f-bottom"><small>© 2026 عناية سامي — جميع الحقوق محفوظة</small><div class="pay" aria-label="بوابات الدفع"><span title="Visa">VISA</span><span title="Mastercard">Mastercard</span><span title="مدى">mada</span><span title="Tabby">tabby</span><span title="Apple Pay">Pay</span></div></div>',1))])]),n("div",{class:C(["footbar",{on:pn.value}]),id:"footbar"},[n("div",Ii,[n("button",{class:"btn btn-back",id:"btnBack",style:N({visibility:gn.value?"visible":"hidden"}),onClick:xn},[...b[22]||(b[22]=[n("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[n("path",{d:"M5 12h14M13 6l6 6-6 6"})],-1),d(" السابق ",-1)])],4),n("div",Li,[J.value?(i(),l(k,{key:0},[b[23]||(b[23]=d("الإجمالي ",-1)),n("b",null,a(t(j)(J.value.price))+" ر.س",1),b[24]||(b[24]=d(" — 🔒 بياناتك محمية وآمنة",-1))],64)):(i(),l(k,{key:1},[d("🔒 بياناتك محمية وآمنة")],64))]),n("button",{class:"btn btn-gold",id:"btnNext",disabled:!Z.value,onClick:fn},[d(a(cn.value)+" ",1),c(v,{inner:Hi,size:15})],8,Di)])],2),n("div",{class:C(["pay-loading",{on:E.value}]),id:"payLoading"},[...b[25]||(b[25]=[n("div",{class:"pl-box"},[n("div",{class:"pl-ring"}),n("b",null,"جارٍ إتمام الإهداء بأمان…"),n("small",null,"سيتم إرسال الهدية مباشرة بعد إتمام الدفع")],-1)])],2),n("div",{class:C(["toast",{on:X.value}]),id:"toast"},a(U.value),3)],512)}}};export{Gi as default};
