import{k as $,K as pn,o as a,c as g,b as n,n as C,u as t,d as b,J as v,a as f,F,e as A,t as l,B as D,U as dn,l as X,q as E,w as gn,D as Y,j as S,i as tn,H as K,r as V,h as cn}from"./index-Cg6jaJBg.js";import{u as xn,a as fn}from"./useInternalLinks-CJP2UQ1A.js";import{S as U,B as bn,D as on,P as q,C as J,_ as mn,a as W,b as rn,c as an,d as sn,G as hn}from"./GiftCard-Dcm3GHqN.js";import{c as Q}from"./giftIcons-w9RYaTqR.js";import{L as vn}from"./LocationNotice-CCO8UXv6.js";const un="/images/gifts/hero.jpg",kn=.15,G=_=>q.find(p=>p.id===_),yn=_=>on.find(p=>p.id===_),Z=_=>bn.find(p=>p.id===_),O=_=>U.find(p=>p.id===_),u=pn({step:0,gtype:null,branch:null,activeCat:null,pkg:null,svcs:[],sort:"pop",favs:[],sender:"",name:"",phone:"",msg:"",design:"lux-dark",method:"wa",when:"now",schedDate:"",pay:null,extraCollapsed:!1,terms:!1,couponIn:"",coupon:0,couponCode:"",done:!1,ref:null});function L(){const _=c=>u.svcs.includes(c),p=c=>{const k=u.svcs.indexOf(c);k===-1?u.svcs.push(c):u.svcs.splice(k,1)},i=c=>u.favs.includes(c),w=c=>{const k=u.favs.indexOf(c);k===-1?u.favs.push(c):u.favs.splice(k,1)},d=$(()=>u.gtype==="svc"?u.svcs.reduce((c,k)=>c+O(k).price,0):u.pkg?G(u.pkg).price:0),y=$(()=>u.gtype==="svc"?u.svcs.length?u.svcs.map(k=>O(k).name).join(" + "):null:u.pkg?G(u.pkg).name:null),m=$(()=>{const c=d.value,k=u.branch?Z(u.branch).fee:0,M=Math.round((c+k)*kn),x=Math.min(u.coupon,c);return{val:c,fee:k,vat:M,disc:x,total:c+k+M-x}}),z=$(()=>{switch(u.step){case 0:return!!u.gtype;case 1:return u.gtype==="svc"?u.svcs.length>0:!!u.pkg;case 2:return!0;case 3:return!!u.pay&&u.terms}return!1});function r(c){c>0&&!z.value||(u.step+=c,u.step<0&&(u.step=0),scrollTo({top:0,behavior:"smooth"}))}function o(){u.step=0,u.gtype=null,u.pkg=null,u.svcs=[],u.done=!1,u.ref=null,u.pay=null,u.terms=!1}return{state:u,pkgOf:G,dsgOf:yn,brOf:Z,svcOf:O,hasSvc:_,toggleSvc:p,isFav:i,toggleFav:w,giftValue:d,giftLabel:y,priceParts:m,canNext:z,go:r,reset:o}}const wn=`
:root{
  --ink:#0A0906; --coal:#14110C;
  --gold:#CE9234; --gold-bright:#E8BE6C; --gold-deep:#9C6B1F;
  --champagne:#F0E6CF; --ivory:#F8F4EB; --paper:#FBFAF6; --card:#FFFFFF;
  --smoke:#9A9080; --mute:#7d745f; --text:#2A2519;
  --line:rgba(143,113,52,.22); --line-dark:rgba(198,161,91,.22);
  --green:#2E8B57; --green-bg:#EAF5EC;
  --p-relax:#4E9E6F; --p-fast:#D98A3B; --p-full:#B8912F; --p-groom:#8B6FC0; --p-home:#3E8E9E; --p-vip:#B0642A;
  --ease:cubic-bezier(.33,.9,.35,1); --dur:.26s;
  --font-d:'Noto Kufi Arabic',serif; --font-b:'Readex Pro',sans-serif;
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
/* شاشة البداية: الهيرو ملاصق للهيدر بدون فجوة ولا زوايا مدوّرة */
.shell:has(.gifts-hero){border-radius:0;padding-top:0}
.shell:has(.gifts-hero) > .wrap{padding-top:0}

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
  position:absolute;top:calc(100% - 24px);right:calc(50% - 24px);width:48px;height:48px;border-radius:50%;
  background:#fff;display:grid;place-items:center;color:var(--pc);border:2px solid;z-index:3;
  box-shadow:0 10px 20px -8px rgba(80,60,20,.4);transition:transform .35s var(--ease);
}
.pkg:hover .badge{transform:rotateY(180deg)}
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
.gift-stepper-compact{margin:14px 0 0;padding:10px 20px;border:1px solid rgba(198,161,91,.2);border-radius:16px;background:#fcfaf6}
.gift-stepper-compact .g-stepper{padding:0}
.gift-stepper-compact .g-steps{max-width:980px;align-items:flex-start}
.gift-stepper-compact .g-step{gap:5px}
.gift-stepper-compact .g-step .bubble{width:36px;height:36px;font-size:12px}
.gift-stepper-compact .g-step .bar{top:18px;right:calc(50% + 24px);width:calc(100% - 48px);height:2px}
.gift-stepper-compact .g-step b{font-size:11.5px;line-height:1.45;white-space:nowrap}
.gift-stepper-compact .g-step small,.gift-stepper-compact .step-count{display:none}
.gift-stepper-compact .g-step.active .bubble{box-shadow:0 8px 18px -8px rgba(143,113,52,.55),0 0 0 3px rgba(198,161,91,.12);transform:none}
.g-stage{display:grid;grid-template-columns:1fr 320px;gap:24px;padding:24px 0;align-items:start}
.g-stage.g-stage--pick{grid-template-columns:minmax(0,1fr)}
.g-head{text-align:center;margin:8px 0 26px}
.g-head h1{font-family:var(--font-d);font-size:clamp(24px,3vw,34px);color:var(--ink)}
.g-head h1 .lock{color:var(--gold-deep)}
.g-head p{color:var(--mute);font-size:14px;margin-top:7px}

/* خطوة 1: نوع الهدية */
.gift-type-full{width:100%;max-width:none;margin-inline:0;padding-inline:0}
.gift-type-full .g-head{padding-inline:24px}
.gtype-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}
.gtype{position:relative;border-radius:20px;overflow:hidden;border:1.5px solid var(--line);cursor:pointer;
  background:#fff;transition:all .3s var(--ease)}
.gtype:hover{transform:translateY(-5px);box-shadow:0 26px 46px -24px rgba(80,60,20,.5)}
.gtype.sel{border-color:var(--gold);box-shadow:0 0 0 4px rgba(198,161,91,.16)}
.gtype .im{aspect-ratio:16/11;overflow:hidden;background:linear-gradient(150deg,#F3EBD8,#EFE5CC);position:relative}
.gtype .im img{width:100%;height:100%;object-fit:cover;transition:transform .7s var(--ease)}
.gtype:hover .im img{transform:scale(1.05)}
.gtype .ic{position:absolute;top:18px;left:18px;width:54px;height:54px;border-radius:50%;
  background:#fff;border:0;display:grid;place-items:center;color:var(--gold-deep);z-index:2;
  box-shadow:0 8px 20px -8px rgba(60,40,10,.35)}
.gtype .bd{padding:22px 20px;text-align:center;background:#fff}
.gtype h3{font-family:var(--font-d);font-size:22px;color:var(--ink);margin:0 0 8px}
.gtype p{font-size:13px;color:var(--mute);margin:0 0 18px;line-height:1.85}
.gtype .go{display:inline-flex;width:100%;justify-content:center;gap:8px;padding:13px;border-radius:11px;
  background:#fff;border:1.5px solid var(--gold);color:var(--gold-deep);font-size:13.5px;font-weight:700;transition:background .2s}
.gtype .go:hover{background:#fdf6e9}
/* ===== شريط ملاحظة مكان التنفيذ ===== */
.loc-note{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin:14px 0 2px;padding:12px 18px;
  border-radius:14px;background:#FFF8EA;border:1px solid rgba(201,139,49,.28);font-size:12.5px;color:var(--ink)}
.loc-note--empty{background:#FCF4F1;border-color:rgba(190,90,50,.28)}
.loc-note__ic{display:grid;place-items:center;width:32px;height:32px;border-radius:50%;
  background:#fff;border:1px solid rgba(201,139,49,.3);color:var(--gold-deep);flex:none}
.loc-note__txt{flex:1;min-width:0}
.loc-note__txt b{color:var(--gold-deep)}
.loc-note__txt small{display:block;font-size:10.5px;color:var(--mute);margin-top:2px}
.loc-note button{border:1.5px solid var(--gold-deep);color:var(--gold-deep);background:transparent;border-radius:10px;
  padding:7px 15px;font-size:11.5px;font-weight:700;font-family:inherit;cursor:pointer;flex:none}
.loc-note button:hover{background:#fdf3e2}
/* ===== هيرو الهدايا (تخطيط منقسم فاتح) ===== */
.gifts-hero{position:relative;left:50%;right:50%;width:100vw;margin-left:-50vw;margin-right:-50vw;margin-top:0;
  display:grid;grid-template-columns:1fr 1.15fr;align-items:stretch;min-height:300px;background:#EFE8E2}
.gifts-hero__img{overflow:hidden}
.gifts-hero__img img{width:100%;height:100%;object-fit:cover;display:block;
  -webkit-mask-image:linear-gradient(to right,#000 62%,rgba(0,0,0,.55) 84%,transparent 100%);
  mask-image:linear-gradient(to right,#000 62%,rgba(0,0,0,.55) 84%,transparent 100%)}
.gifts-hero__copy{align-self:center;justify-self:center;text-align:center;max-width:470px;padding:26px 24px}
.gifts-hero__ic{display:inline-flex;color:var(--gold);margin-bottom:9px}
.gifts-hero__copy h1{font-family:var(--font-d);font-size:32px;margin:0 0 11px;color:var(--ink)}
.gifts-hero__copy p{font-size:13px;line-height:1.9;color:var(--mute);margin:0}

/* ===== لماذا تهدي من عناية سامي (صف أفقي) ===== */
.why-gift-row{padding:36px 0 10px}
.section-title-sm{display:flex;align-items:center;justify-content:center;gap:16px;margin-bottom:24px}
.section-title-sm h2{font-size:24px;margin:0;color:var(--ink)}
.section-title-sm i{width:32px;height:1px;background:var(--gold)}
.wg-row{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.wg-col{text-align:center;padding:24px 18px;border:1px solid rgba(198,161,91,.22);border-radius:16px;background:#FCF9F3}
.wg-col .wi{display:inline-flex;color:var(--gold-deep);margin-bottom:12px}
.wg-col b{display:block;font-size:13.5px;margin-bottom:6px;color:var(--ink)}
.wg-col small{font-size:11.5px;color:var(--mute);line-height:1.75}

/* ===== شريط تحتاج مساعدة ===== */
.help-bar{display:flex;align-items:center;gap:18px;margin:26px 0 44px;padding:22px 26px;border-radius:16px;
  background:#FCF9F3;border:1px solid rgba(198,161,91,.22)}
.help-bar__txt{flex:1;text-align:right}
.help-bar__txt b{display:block;font-size:15px;color:var(--ink);margin-bottom:4px}
.help-bar__txt small{font-size:12px;color:var(--mute)}
.help-bar .btn{flex:none;padding:11px 30px;border-radius:11px}
.help-bar .hi{flex:none;order:99;width:56px;height:56px;border-radius:50%;background:#fff;border:1px solid rgba(198,161,91,.25);
  display:grid;place-items:center;color:var(--gold-deep)}
@media(max-width:900px){.gifts-hero{grid-template-columns:1fr;min-height:0}.gifts-hero__img{order:-1;height:190px}.gifts-hero__img img{-webkit-mask-image:linear-gradient(to bottom,#000 74%,transparent 100%);mask-image:linear-gradient(to bottom,#000 74%,transparent 100%)}.gifts-hero__copy{padding:22px 20px 34px}.gifts-hero__copy h1{font-size:32px}.wg-row{grid-template-columns:repeat(2,1fr)}.help-bar{flex-direction:column;text-align:center}.help-bar__txt{text-align:center}}

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
.gsum{position:sticky;top:86px}
.gsum .card{padding:20px}
.gsum h3{font-family:var(--font-d);font-size:17px;color:var(--ink);margin-bottom:16px;display:flex;align-items:center;gap:10px}
.gsum h3::after{content:"";flex:1;height:1px;background:linear-gradient(-90deg,var(--gold),transparent)}
.gsum .pkline{display:flex;gap:12px;margin-bottom:14px;padding-bottom:14px;border-bottom:1px solid rgba(143,113,52,.14)}
.gsum .pkline img{width:74px;height:74px;object-fit:cover;border-radius:12px}
.gsum .pkline b{font-family:var(--font-d);font-size:15px;color:var(--ink);display:block}
.gsum .pkline small{font-size:11px;color:var(--mute);display:block;margin-top:3px;line-height:1.6}
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


/* ===== خاص بصفحات الهدايا ===== */
.inline-actions{display:flex;gap:14px;align-items:center;justify-content:space-between;margin-top:26px;flex-wrap:wrap}
.inline-actions .btn{min-width:200px}
.btn-prev{border:1.5px solid var(--line);color:var(--mute);background:#fff}
.btn-prev:hover{border-color:var(--gold);color:var(--gold-deep)}
.step-count{font-size:12px;color:var(--mute);text-align:center;margin-top:20px}
/* الكاروسيل */
.caro-wrap{position:relative}
.caro{display:flex;gap:14px;overflow-x:auto;scroll-behavior:smooth;scrollbar-width:none;padding:6px 2px 12px}
.caro::-webkit-scrollbar{display:none}
.caro .gpkg{flex:0 0 calc(25% - 11px);min-width:225px}
.caro-btn{position:absolute;top:calc(50% - 20px);width:38px;height:38px;border-radius:50%;z-index:5;
  background:rgba(255,253,247,.85);border:1px solid var(--line);color:var(--gold-deep);
  display:grid;place-items:center;opacity:.55;transition:all var(--dur) var(--ease);backdrop-filter:blur(4px)}
.caro-btn:hover{opacity:1;box-shadow:0 10px 20px -10px rgba(80,60,20,.4)}
.caro-btn.r{right:-14px}.caro-btn.l{left:-14px}

/* صفحة اختيار باقة الإهداء: شبكة واضحة ومتساوية داخل مساحة المحتوى */
.g-stage>.view{min-width:0}
.g-stage .caro-wrap{padding:0}
.g-stage .caro{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;overflow:visible;padding:3px 0 8px}
.g-stage .caro .gpkg{min-width:0;width:100%;height:100%;flex:none}
.g-stage .caro .gpkg{border-radius:14px}
.g-stage .caro .gpkg .ph{height:105px;aspect-ratio:auto}
.g-stage .caro .gpkg .ph .chk{top:7px;left:7px;width:21px;height:21px;font-size:10px}
.g-stage .caro .gpkg .bd{display:flex;flex-direction:column;flex:1;padding:10px 9px}
.g-stage .caro .gpkg h4{font-size:12.5px;line-height:1.4}
.g-stage .caro .gpkg .dur{font-size:9px;margin:3px 0}
.g-stage .caro .gpkg .desc{font-size:9px;line-height:1.55}
.g-stage .caro .gpkg .prc{font-size:16px;margin:6px 0}
.g-stage .caro .gpkg .prc small{font-size:9px}
.g-stage .caro .gpkg .pick{margin-top:auto;padding:7px 5px;border-radius:9px;font-size:9.5px;gap:4px}
.g-stage .caro-btn{display:none}
/* Desktop gift-package cards: give the artwork room and show the full image. */
@media(min-width:761px){
  .g-stage .caro .gpkg .ph{
    height:190px;
    background:#f7f2e8;
  }
  .g-stage .caro .gpkg .ph img{
    object-fit:cover;
    object-position:center;
  }
}
.gift-location-note{display:flex;justify-content:center;margin:0 0 18px;text-align:center}
.gift-location-note .loc-note{margin-bottom:0;padding:8px 13px;border:1px solid rgba(198,161,91,.22);border-radius:999px;background:#fcf9f3}
.gift-location-note .loc-note__ic{width:26px;height:26px;border-radius:50%;display:inline-grid;place-items:center;background:#fff4df;border:1px solid rgba(198,161,91,.28);color:var(--gold-deep)}
@media(max-width:1050px){.g-stage .caro{grid-template-columns:repeat(3,minmax(0,1fr))}}
@media(max-width:760px){.g-stage .caro{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:520px){.g-stage .caro{grid-template-columns:1fr}}
.fav{position:absolute;top:10px;right:10px;width:30px;height:30px;border-radius:50%;z-index:3;
  background:rgba(255,253,247,.9);display:grid;place-items:center;color:var(--mute);transition:all .25s var(--ease)}
.fav:hover{transform:scale(1.12)}
.fav.on{color:#C94F63}
/* بطاقات الخدمات المفردة */
.gsvcs{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.gsvc{background:#fff;border:1.5px solid var(--line);border-radius:15px;padding:16px;cursor:pointer;
  transition:all var(--dur) var(--ease);position:relative;animation:pkgIn .35s var(--ease) both}
.gsvc:hover{transform:translateY(-4px);box-shadow:0 16px 30px -18px rgba(80,60,20,.4)}
.gsvc.sel{border-color:var(--gold);background:linear-gradient(160deg,#FFFBF0,#fff);box-shadow:0 0 0 3px rgba(198,161,91,.15)}
.gsvc .si{width:40px;height:40px;border-radius:12px;display:grid;place-items:center;font-size:18px;
  background:rgba(198,161,91,.1);color:var(--gold-deep);margin-bottom:10px}
.gsvc .chk{position:absolute;top:12px;left:12px;width:22px;height:22px;border-radius:7px;border:1.5px solid var(--line);
  display:grid;place-items:center;color:var(--ink);transition:all .25s var(--ease)}
.gsvc.sel .chk{background:linear-gradient(135deg,var(--gold-bright),var(--gold));border-color:transparent}
.gsvc b{font-size:13.5px;color:var(--ink);display:block}
.gsvc small{font-size:11px;color:var(--mute);display:block;margin-top:4px}
.gsvc .ft{display:flex;justify-content:space-between;margin-top:11px;padding-top:10px;border-top:1px dashed var(--line);
  font-size:11.5px;color:var(--mute)}
.gsvc .ft .p{font-family:var(--font-d);font-size:15px;color:var(--gold-deep)}

/* اختيار خدمات الإهداء — مطابق لاختيار الخدمات في الحجز */
/* ============================================================
   خطوة اختيار الخدمات — نفس شكل نسخة الموبايل
   (نسخة الموبايل ملف مستقل في public/mobile ولم تُمَس)
   ============================================================ */

/* ===== صف الأقسام: صورة معتّمة والاسم فوقها ===== */
.cat-row{display:grid;grid-template-columns:repeat(5,1fr);gap:11px;margin:0 auto 22px;max-width:820px}
.cat{position:relative;height:100px;border-radius:14px;overflow:hidden;cursor:pointer;display:block;
  border:2px solid transparent;background:#20170E;color:#fff;
  transition:transform .3s var(--ease),border-color .3s var(--ease),box-shadow .3s var(--ease)}
.cat img{display:block;width:100%;height:100%;object-fit:cover;filter:brightness(.6);
  transition:filter .35s var(--ease),transform .55s var(--ease)}
.cat::after{content:"";position:absolute;inset:0;pointer-events:none;
  background:linear-gradient(180deg,transparent 40%,rgba(9,7,5,.75) 100%)}
.cat:hover{transform:translateY(-3px);box-shadow:0 14px 26px -16px rgba(60,42,12,.6)}
.cat:hover img{filter:brightness(.72);transform:scale(1.05)}

/* القسم المفتوح: تدرّج ذهبي فوق الصورة + علامة صح */
.cat.sel{border-color:var(--gold)}
.cat.sel::after{background:linear-gradient(180deg,rgba(214,150,44,.55),rgba(160,102,17,.88))}
.cat.sel img{filter:brightness(.72)}

.cat .lbl{position:absolute;z-index:2;inset-inline:8px;bottom:9px;display:block;
  color:#fff;font-family:var(--font-b);font-size:12.5px;font-weight:800;line-height:1.35;
  text-align:center;text-shadow:0 2px 6px rgba(0,0,0,.6)}
.cat .cat-icon{display:none}

.cat .chk{position:absolute;z-index:3;top:7px;left:7px;width:19px;height:19px;border-radius:50%;
  background:#fff;display:grid;place-items:center;color:#B87A16;
  opacity:0;transform:scale(.4);transition:all .3s var(--ease)}
.cat.sel .chk,.cat.has-picks .chk{opacity:1;transform:scale(1)}

.sub-block{margin-bottom:8px}

/* ===== عنوان قسم الخدمات: لليمين مع خط ذهبي تحته ===== */
.sub-title{display:flex;align-items:flex-end;justify-content:flex-start;gap:12px;
  margin:24px 0 16px;border-bottom:1px solid var(--line)}
.sub-title__main{display:inline-flex;align-items:center;gap:9px;padding-bottom:9px;margin-bottom:-1px;
  border-bottom:2px solid var(--gold);
  font-family:var(--font-d);font-size:18px;color:var(--ink);white-space:nowrap}
.sub-title .tick{width:auto;height:auto;background:none;border-radius:0;display:inline-grid;place-items:center;color:var(--gold-deep)}
.sub-title .tick svg{width:19px;height:19px;fill:none;stroke:currentColor;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}
.sub-title small{font-size:12px;color:var(--mute);font-family:var(--font-b);
  margin-inline-start:auto;padding-bottom:9px}

/* ===== كروت الخدمات الفرعية ===== */
.subs{display:grid;grid-template-columns:repeat(4,1fr);gap:11px}
.sub{position:relative;background:#fff;border:1.5px solid var(--line);border-radius:12px;padding:13px 14px;
  cursor:pointer;display:flex;flex-direction:column;transition:all var(--dur) var(--ease)}
.sub:hover{transform:translateY(-3px);box-shadow:0 14px 26px -18px rgba(80,60,20,.38);border-color:rgba(143,113,52,.45)}
.sub.sel{border-color:var(--gold);background:linear-gradient(160deg,#FFFBF0,#fff);box-shadow:0 0 0 3px rgba(198,161,91,.14)}

/* صف واحد: الأيقونة ثم الاسم ثم مربّع الاختيار في الطرف */
.sub .top{display:flex;align-items:flex-start;gap:9px;margin-bottom:6px}
.sub .top .si{flex:none;width:30px;height:30px;border-radius:9px;display:grid;place-items:center;
  background:rgba(198,161,91,.11);color:var(--gold-deep)}
.sub .top .si svg{width:17px;height:17px;fill:none;stroke:currentColor;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}
.sub .top b{flex:1;min-width:0;font-size:13px;color:var(--ink);line-height:1.5;padding-top:2px}
.sub .chk{flex:none;width:19px;height:19px;border-radius:6px;border:1.5px solid var(--line);
  display:grid;place-items:center;color:#fff;transition:all .25s var(--ease)}
.sub.sel .chk{background:linear-gradient(135deg,var(--gold-bright),var(--gold));border-color:transparent;color:var(--ink)}

.sub small{font-size:11px;color:var(--mute);display:block;line-height:1.65;min-height:30px}
.sub .foot{display:flex;justify-content:space-between;align-items:center;margin-top:auto;padding-top:9px}
.sub .dur{font-size:11px;color:var(--mute);display:flex;gap:5px;align-items:center}
.sub .prc{font-family:var(--font-d);font-size:15.5px;color:var(--gold-deep)}
.sub .prc small{display:inline;font-size:10.5px;color:var(--mute);min-height:0}

.empty-hint{border:1.5px dashed var(--line);border-radius:16px;padding:44px 20px;text-align:center;color:var(--mute);font-size:14px}
.empty-hint b{color:var(--ink);font-family:var(--font-d);font-size:17px;display:block;margin-bottom:6px}
@media(max-width:900px){.subs{grid-template-columns:repeat(2,1fr)}}
/* المودال */
.modal{position:fixed;inset:0;z-index:950;display:none;place-items:center;background:rgba(10,9,6,.62);backdrop-filter:blur(6px)}
.modal.on{display:grid}
.modal .mbox{background:#fff;border-radius:22px;width:min(680px,92%);max-height:86vh;overflow:auto;
  padding:26px;animation:viewIn .35s var(--ease)}
.modal .mhead{display:flex;align-items:center;justify-content:space-between;margin-bottom:18px}
.modal .mhead b{font-family:var(--font-d);font-size:18px;color:var(--ink)}
.modal .mclose{width:36px;height:36px;border-radius:50%;border:1px solid var(--line);display:grid;place-items:center;
  color:var(--mute);transition:var(--dur)}
.modal .mclose:hover{border-color:var(--gold);color:var(--gold-deep);transform:rotate(90deg)}
.modal .designs{grid-template-columns:repeat(3,1fr);gap:14px}
.modal .design .sw{aspect-ratio:16/10;font-size:12px}
.design-trigger{display:flex;align-items:center;gap:14px;padding:14px 16px;border:1.5px solid var(--line);border-radius:14px;
  background:#FDFBF5;cursor:pointer;transition:all var(--dur) var(--ease)}
.design-trigger:hover{border-color:var(--gold)}
.design-trigger .cur{width:74px;height:48px;border-radius:10px;display:grid;place-items:center;
  font-family:var(--font-d);font-size:9px;flex:none}
.design-trigger .t{flex:1}
.design-trigger .t b{font-size:13px;color:var(--ink);display:block}
.design-trigger .t small{font-size:11px;color:var(--mute)}
.design-trigger .chg{font-size:12px;color:var(--gold-deep);font-weight:700;display:flex;gap:6px;align-items:center}
/* أكورديون الدفع */
.pay-group{margin-bottom:14px}
.pay-group>b{font-size:13px;color:var(--ink);display:flex;gap:8px;align-items:center;margin-bottom:10px}
.pay-group>b .gi{width:26px;height:26px;border-radius:8px;display:grid;place-items:center;
  background:rgba(198,161,91,.12);color:var(--gold-deep)}
.acc-pm{border:1.5px solid var(--line);border-radius:14px;background:#fff;margin-bottom:10px;overflow:hidden;
  transition:border-color var(--dur),box-shadow var(--dur)}
.acc-pm.sel{border-color:var(--gold);box-shadow:0 0 0 3px rgba(198,161,91,.14)}
.acc-pm .head{display:flex;align-items:center;gap:13px;padding:15px 17px;cursor:pointer}
.acc-pm .lg{min-width:62px;height:32px;border-radius:8px;display:grid;place-items:center;background:#F5F0E4;
  font-weight:800;font-size:11px;color:var(--ink);padding-inline:10px;flex:none}
.acc-pm .tt b{font-size:13.5px;color:var(--ink);display:block}
.acc-pm .tt small{font-size:11px;color:var(--mute)}
.acc-pm .rad{margin-inline-start:auto;width:22px;height:22px;border-radius:50%;border:1.5px solid var(--line);
  display:grid;place-items:center;transition:all .25s var(--ease);flex:none}
.acc-pm .rad i{width:10px;height:10px;border-radius:50%;background:linear-gradient(135deg,var(--gold-bright),var(--gold));
  transform:scale(0);transition:transform .25s var(--ease)}
.acc-pm.sel .rad{border-color:var(--gold)}
.acc-pm.sel .rad i{transform:scale(1)}
.acc-pm .body{max-height:0;opacity:0;overflow:hidden;transition:max-height .4s var(--ease),opacity .3s}
.acc-pm.sel .body.has{max-height:300px;opacity:1}
.acc-pm .body .in{padding:0 17px 17px}
.pay-collapse{overflow:hidden;transition:max-height .5s var(--ease),opacity .4s;max-height:900px;opacity:1}
.pay-collapse.hid{max-height:0;opacity:0}
.collapse-hint{display:none;align-items:center;justify-content:center;gap:8px;font-size:12px;color:var(--gold-deep);
  padding:11px;border:1.5px dashed var(--line);border-radius:12px;cursor:pointer;margin-bottom:14px;background:#FFFDF6}
.collapse-hint.on{display:flex}
.terms-chk{display:flex;gap:10px;align-items:center;font-size:12.5px;color:var(--mute);margin-top:16px;cursor:pointer}
.terms-chk i{width:20px;height:20px;border-radius:6px;border:1.5px solid var(--line);display:grid;place-items:center;
  color:var(--ink);transition:all .25s;flex:none}
.terms-chk.on i{background:linear-gradient(135deg,var(--gold-bright),var(--gold));border-color:transparent}
.terms-chk a{color:var(--gold-deep);font-weight:600;text-decoration:underline}
/* النجاح */
.gs-hero{position:relative;width:120px;height:110px;margin:0 auto 16px}
.gs-hero .circ{position:absolute;top:0;right:calc(50% - 34px);width:68px;height:68px;border-radius:50%;
  background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);display:grid;place-items:center;
  box-shadow:0 16px 32px -12px rgba(143,113,52,.6);animation:sucPop .6s var(--ease) both .1s;z-index:2}
.gs-hero .circ svg{stroke-dasharray:60;stroke-dashoffset:60;animation:dash .7s var(--ease) forwards .45s}
.gs-hero .gbox{position:absolute;bottom:0;left:calc(50% - 46px);width:52px;height:44px;border-radius:10px;
  background:linear-gradient(150deg,#241d10,#0f0c06);border:1px solid rgba(143,113,52,.5);
  animation:giftFloat 5s ease-in-out infinite}
.gs-hero .gbox::before{content:"";position:absolute;inset-block:0;right:calc(50% - 5px);width:10px;
  background:linear-gradient(180deg,var(--gold-bright),var(--gold-deep))}
.gs-hero .spark{position:absolute;color:var(--gold);animation:sparkle 2.6s ease-in-out infinite;font-size:13px}
@keyframes sparkle{0%,100%{opacity:.3;transform:scale(.8) rotate(0)}50%{opacity:1;transform:scale(1.1) rotate(20deg)}}
.gsuc-box{background:#fff;border:1px solid var(--line);border-radius:20px;padding:24px;margin-top:22px;
  display:grid;grid-template-columns:220px 1fr;gap:24px;align-items:center;text-align:right}
.gsuc-box .mini-card{aspect-ratio:16/10;border-radius:14px;position:relative;display:grid;place-items:center;
  box-shadow:0 20px 38px -18px rgba(20,15,5,.5)}
.gsuc-box .mini-card .lg{font-family:var(--font-d);font-size:15px;letter-spacing:.1em;text-align:center}
.gsuc-box .mini-card .lg small{display:block;font-size:9px;letter-spacing:.04em;opacity:.8;margin-top:3px}
.gsuc-box h3{font-family:var(--font-d);font-size:19px;color:var(--ink);margin-bottom:6px}
.copy-ref{display:inline-flex;gap:7px;align-items:center;color:var(--gold-deep);cursor:pointer;font-weight:600}
.copy-ref:hover{text-decoration:underline}
@media(max-width:900px){
  .caro .gpkg{flex-basis:calc(50% - 7px)}
  .gsvcs{grid-template-columns:1fr 1fr}
  .gsuc-box{grid-template-columns:1fr;text-align:center}
  .gsuc-box .mini-card{max-width:240px;margin-inline:auto}
}
@media(max-width:640px){
  .caro .gpkg{flex-basis:86%}
  .gsvcs{grid-template-columns:1fr}
  .inline-actions .btn{min-width:0;flex:1}
  .modal .designs{grid-template-columns:1fr 1fr}
}
`,zn="/images/gifts/service.jpg",_n="/images/gifts/package.jpg",$n={class:"gtype-grid"},Fn={class:"im"},Cn={class:"ic"},Mn={class:"bd"},En={class:"go"},jn={class:"im"},Bn={class:"ic"},An={class:"bd"},Sn={class:"go"},nn={__name:"GiftTypeStep",emits:["pick"],setup(_,{emit:p}){const{state:i}=L(),w=p,d={chair:'<path d="M3 18v-6a2 2 0 012-2h14a2 2 0 012 2v6"/><path d="M5 18v2M19 18v2M7 10V7a2 2 0 012-2h6a2 2 0 012 2v3"/>',gift:'<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7s-2-5-5-5-3 5 0 5h5zM12 7s2-5 5-5 3 5 0 5h-5z"/>',arrow:'<path d="M19 12H5M11 18l-6-6 6-6"/>'};return(y,m)=>(a(),g(F,null,[m[10]||(m[10]=n("div",{class:"g-head"},[n("h1",null,"ماذا ترغب بإهدائه؟"),n("p",null,"اختر ما يناسبك لإهداء تجربة مميزة لمن تحب")],-1)),n("div",$n,[n("div",{class:C(["gtype",{sel:t(i).gtype==="svc"}]),"data-gt":"svc",onClick:m[0]||(m[0]=z=>w("pick","svc"))},[n("div",Fn,[m[2]||(m[2]=n("img",{src:zn,alt:"إهداء خدمة"},null,-1)),n("span",Cn,[b(v,{inner:d.chair,size:20},null,8,["inner"])])]),n("div",Mn,[m[4]||(m[4]=n("h3",null,"إهداء خدمة",-1)),m[5]||(m[5]=n("p",null,[f("اختر خدمة واحدة أو أكثر"),n("br"),f("وأهدِها لمن تحب.")],-1)),n("span",En,[b(v,{inner:d.arrow,size:14},null,8,["inner"]),m[3]||(m[3]=f(" اختر خدمة لإهدائها",-1))])])],2),n("div",{class:C(["gtype",{sel:t(i).gtype==="pkg"}]),"data-gt":"pkg",onClick:m[1]||(m[1]=z=>w("pick","pkg"))},[n("div",jn,[m[6]||(m[6]=n("img",{src:_n,alt:"إهداء باقة"},null,-1)),n("span",Bn,[b(v,{inner:d.gift,size:20},null,8,["inner"])])]),n("div",An,[m[8]||(m[8]=n("h3",null,"إهداء باقة",-1)),m[9]||(m[9]=n("p",null,[f("اختر باقة مصممة بعناية"),n("br"),f("لتمنح تجربة متكاملة لمن تحب.")],-1)),n("span",Sn,[b(v,{inner:d.arrow,size:14},null,8,["inner"]),m[7]||(m[7]=f(" اختر باقة لإهدائها",-1))])])],2)])],64))}},Ln={class:"cat-row"},In=["data-cat","onClick"],Dn=["src","alt"],Yn={class:"chk"},Pn={class:"lbl"},Vn={key:0,class:"empty-hint"},Hn={key:1,class:"sub-block"},Nn={class:"sub-title"},Tn={class:"sub-title__main"},Gn={class:"tick"},On=["innerHTML"],Rn={class:"subs"},Un=["data-sv","onClick"],qn={class:"top"},Xn={class:"si"},Kn=["innerHTML"],Wn={class:"chk"},Jn={class:"foot"},Qn={class:"dur"},Zn={class:"prc"},ne={class:"inline-actions"},ee=["disabled"],te={class:"gp-sort"},oe={class:"caro-wrap"},re={class:"caro",id:"caro"},ie=["data-gp","onClick"],ae={class:"ph"},se=["src","alt"],le=["data-fav","onClick"],pe={class:"chk"},de={class:"bd"},ge={class:"dur"},ce={class:"desc"},xe={class:"prc"},fe={class:"pick"},be={class:"inline-actions"},me=["disabled"],he="position:absolute;top:7px;left:34px;background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);font-size:8px;font-weight:700;padding:4px 7px;border-radius:999px;z-index:2",ve="text-align:right;font-size:8.5px;color:var(--mute);margin:5px 0;border-top:1px dashed var(--line);padding-top:6px",ue="display:block;color:var(--ink);font-size:9px;margin-bottom:4px",ke={__name:"GiftPickStep",emits:["nav"],setup(_,{emit:p}){const{state:i,hasSvc:w,toggleSvc:d,isFav:y,toggleFav:m}=L(),z=p,r=s=>s.toLocaleString("ar-EG-u-nu-latn"),o={check:'<path d="M20 6L9 17l-5-5"/>',heart:'<path d="M12 21s-7-4.4-9.3-8.5C.8 9 2.6 5.5 6 5.5c2 0 3.4 1.1 4 2.3.6-1.2 2-2.3 4-2.3 3.4 0 5.2 3.5 3.3 7-2.3 4.1-9.3 8.5-9.3 8.5z"/>',box:'<path d="M20 12v10H4V12M2 7h20v5H2z"/>',prev:'<path d="M5 12h14M13 6l6 6-6 6"/>',next:'<path d="M19 12H5M11 18l-6-6 6-6"/>',chevR:'<path d="M9 6l6 6-6 6"/>',chevL:'<path d="M15 6l-6 6 6 6"/>'},c=["hair","mass","skin","bath","pedi"],k=$(()=>c.map(s=>J.find(e=>e.id===s))),M=s=>U.some(e=>e.cat===s&&w(e.id)),x=$(()=>J.find(s=>s.id===i.activeCat)),j=$(()=>U.filter(s=>s.cat===i.activeCat&&!s.hidden)),I=$(()=>j.value.filter(s=>w(s.id)).length),P=$(()=>q.slice().sort((s,e)=>i.sort==="low"?s.price-e.price:i.sort==="high"?e.price-s.price:(e.hot?1:0)-(s.hot?1:0)));function B(s){const e=document.getElementById("caro");e&&e.scrollBy({left:s*300,behavior:"smooth"})}return(s,e)=>t(i).gtype==="svc"?(a(),g(F,{key:0},[e[11]||(e[11]=n("div",{class:"g-head"},[n("h1",null,"اختر الخدمة التي ترغب بإهدائها"),n("p",null,"يمكنك اختيار خدمة واحدة أو أكثر")],-1)),n("div",Ln,[(a(!0),g(F,null,A(k.value,h=>(a(),g("div",{key:h.id,class:C(["cat",{sel:t(i).activeCat===h.id,"has-picks":M(h.id)}]),"data-cat":h.id,onClick:N=>t(i).activeCat=h.id},[n("img",{src:h.img,alt:h.name,loading:"lazy"},null,8,Dn),n("span",Yn,[b(v,{inner:o.check,size:11},null,8,["inner"])]),n("span",Pn,l(h.name),1)],10,In))),128))]),t(i).activeCat?(a(),g("div",Hn,[n("div",Nn,[n("span",Tn,[f(" خدمات "+l(x.value.name)+" ",1),n("span",Gn,[(a(),g("svg",{viewBox:"0 0 24 24","aria-hidden":"true",innerHTML:t(Q)(x.value.id)},null,8,On))])]),n("small",null,l(I.value?I.value+" مختارة":"اختر خدمة أو أكثر"),1)]),n("div",Rn,[(a(!0),g(F,null,A(j.value,h=>(a(),g("div",{key:h.id,class:C(["sub",{sel:t(w)(h.id)}]),"data-sv":h.id,onClick:N=>t(d)(h.id)},[n("div",qn,[n("span",Xn,[(a(),g("svg",{viewBox:"0 0 24 24","aria-hidden":"true",innerHTML:t(Q)(x.value.id)},null,8,Kn))]),n("b",null,l(h.name),1),n("span",Wn,[b(v,{inner:o.check,size:12},null,8,["inner"])])]),n("small",null,l(h.desc),1),n("div",Jn,[n("span",Qn,"🕐 "+l(h.dur)+" دقيقة",1),n("span",Zn,[f(l(r(h.price))+" ",1),e[8]||(e[8]=n("small",null,"ر.س",-1))])])],10,Un))),128))])])):(a(),g("div",Vn,[...e[7]||(e[7]=[n("b",null,"اختر خدمة لعرض تفاصيلها",-1),f("اختر إحدى الخدمات الأساسية أعلاه لعرض الخدمات الفرعية المتاحة",-1)])])),n("div",ne,[n("button",{class:"btn btn-prev","data-nav":"back",onClick:e[0]||(e[0]=h=>z("nav",-1))},[b(v,{inner:o.prev,size:15},null,8,["inner"]),e[9]||(e[9]=f(" رجوع",-1))]),n("button",{class:"btn btn-gold","data-nav":"next",disabled:!t(i).svcs.length,onClick:e[1]||(e[1]=h=>z("nav",1))},[e[10]||(e[10]=f("التالي: تخصيص الهدية ",-1)),b(v,{inner:o.next,size:15},null,8,["inner"])],8,ee)])],64)):(a(),g(F,{key:1},[e[16]||(e[16]=n("div",{class:"g-head"},[n("h1",null,"اختر الباقة التي ترغب بإهدائها"),n("p",null,"باقات مميزة تمنح تجربة متكاملة من الاسترخاء والعناية")],-1)),n("div",te,[D(n("select",{id:"gpSort","onUpdate:modelValue":e[2]||(e[2]=h=>t(i).sort=h)},[...e[12]||(e[12]=[n("option",{value:"pop"},"الأكثر طلبًا",-1),n("option",{value:"low"},"السعر: الأقل أولًا",-1),n("option",{value:"high"},"السعر: الأعلى أولًا",-1)])],512),[[dn,t(i).sort]]),n("small",null,l(Math.min(4,t(q).length))+" باقات متاحة — مرّر لاستعراض المزيد",1)]),n("div",oe,[n("button",{class:"caro-btn r","data-caro":"1",onClick:e[3]||(e[3]=h=>B(1))},[b(v,{inner:o.chevR,size:15},null,8,["inner"])]),n("button",{class:"caro-btn l","data-caro":"-1",onClick:e[4]||(e[4]=h=>B(-1))},[b(v,{inner:o.chevL,size:15},null,8,["inner"])]),n("div",re,[(a(!0),g(F,null,A(P.value,(h,N)=>(a(),g("div",{key:h.id,class:C(["gpkg",{sel:t(i).pkg===h.id}]),"data-gp":h.id,style:X(`--pc:${h.hex};animation-delay:${N*.05}s`),onClick:T=>t(i).pkg=h.id},[n("div",ae,[n("img",{src:h.img,alt:h.name},null,8,se),h.hot?(a(),g("span",{key:0,style:he},"الأكثر طلبًا")):E("",!0),n("button",{class:C(["fav",{on:t(y)(h.id)}]),"data-fav":h.id,onClick:gn(T=>t(m)(h.id),["stop"])},[b(v,{inner:o.heart,size:14},null,8,["inner"])],10,le),n("span",pe,[b(v,{inner:o.check,size:13},null,8,["inner"])])]),n("div",de,[n("h4",null,l(h.name),1),n("div",ge,"🕐 "+l(h.dur)+" دقيقة",1),n("div",ce,l(h.desc),1),n("div",{style:ve},[n("b",{style:ue},"تشمل الباقة"),(a(!0),g(F,null,A(h.inc,(T,ln)=>(a(),g("div",{key:ln,style:{padding:"2px 0"}},"✓ "+l(T),1))),128))]),n("div",xe,[f(l(r(h.price))+" ",1),e[13]||(e[13]=n("small",null,"ر.س",-1))]),n("button",fe,[b(v,{inner:o.box,size:14},null,8,["inner"]),f(" "+l(t(i).pkg===h.id?"تم الاختيار ✓":"استعرض الباقة"),1)])])],14,ie))),128))])]),n("div",be,[n("button",{class:"btn btn-prev","data-nav":"back",onClick:e[5]||(e[5]=h=>z("nav",-1))},[b(v,{inner:o.prev,size:15},null,8,["inner"]),e[14]||(e[14]=f(" رجوع",-1))]),n("button",{class:"btn btn-gold","data-nav":"next",disabled:!t(i).pkg,onClick:e[6]||(e[6]=h=>z("nav",1))},[e[15]||(e[15]=f("التالي: تخصيص الهدية ",-1)),b(v,{inner:o.next,size:15},null,8,["inner"])],8,me)])],64))}},ye={class:"custom-grid"},we={class:"preview-col"},ze={id:"cardPrev"},_e={class:"gcard-msg"},$e={id:"pvName"},Fe={id:"pvMsg"},Ce={style:{display:"block","margin-top":"8px","font-size":"11px",color:"var(--mute)"}},Me={id:"pvSender"},Ee={class:"form-col"},je={class:"card",style:{"margin-bottom":"14px"}},Be={class:"two"},Ae={class:"fld"},Se={class:"fld"},Le={class:"two"},Ie={class:"fld",style:{"margin-bottom":"4px"}},De={class:"fld",style:{"margin-bottom":"4px"}},Ye={class:"card",style:{"margin-bottom":"14px"}},Pe={class:"designs"},Ve=["data-d","onClick"],He={class:"dchk"},Ne={class:"card"},Te={class:"methods"},Ge=["data-m","onClick"],Oe={class:"mi"},Re={class:"send-opts",style:{"margin-top":"16px","margin-bottom":"0"}},Ue={class:"fld",style:{margin:"0"}},qe={class:"inline-actions"},Xe=["disabled"],Ke={__name:"GiftCustomizeStep",emits:["nav"],setup(_,{emit:p}){const{state:i,canNext:w}=L(),d=p,y=$(()=>200-i.msg.length),m={eye:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',user:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',brush:'<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.6 7.6"/><circle cx="11" cy="11" r="2"/>',send:'<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>',check:'<path d="M20 6L9 17l-5-5"/>',prev:'<path d="M5 12h14M13 6l6 6-6 6"/>',next:'<path d="M19 12H5M11 18l-6-6 6-6"/>'};return(z,r)=>(a(),g(F,null,[r[27]||(r[27]=n("div",{class:"g-head"},[n("h1",null,"خصص هديتك لتكون أجمل 🤍"),n("p",null,"أضف لمستك الخاصة مع رسالة وتصميم بطاقة الإهداء")],-1)),n("div",ye,[n("div",we,[n("h4",null,[b(v,{inner:m.eye,size:16},null,8,["inner"]),r[9]||(r[9]=f(" معاينة بطاقة الإهداء",-1))]),n("div",ze,[b(mn,{design:t(i).design},null,8,["design"])]),n("div",_e,[r[12]||(r[12]=n("span",{class:"q q1"},'"',-1)),r[13]||(r[13]=n("span",{class:"q q2"},'"',-1)),n("b",null,[r[10]||(r[10]=f("إلى: ",-1)),n("span",$e,l(t(i).name||"—"),1)]),n("p",Fe,l(t(i).msg||"اكتب رسالتك الخاصة لتظهر هنا"),1),n("small",Ce,[r[11]||(r[11]=f("من: ",-1)),n("span",Me,l(t(i).sender||"مجهول جميل"),1)])])]),n("div",Ee,[n("div",je,[n("h4",null,[b(v,{inner:m.user,size:16},null,8,["inner"]),r[14]||(r[14]=f(" بيانات الإهداء",-1))]),n("div",Be,[n("div",Ae,[r[15]||(r[15]=n("label",null,"اسم المُهدي (أنت)",-1)),D(n("input",{id:"gSender",placeholder:"اسمك","onUpdate:modelValue":r[0]||(r[0]=o=>t(i).sender=o)},null,512),[[Y,t(i).sender]])]),n("div",Se,[r[16]||(r[16]=n("label",null,"اسم المهدى إليه",-1)),D(n("input",{id:"gName",placeholder:"أدخل الاسم","onUpdate:modelValue":r[1]||(r[1]=o=>t(i).name=o)},null,512),[[Y,t(i).name]])])]),n("div",Le,[n("div",Ie,[r[17]||(r[17]=n("label",null,"رقم جوال المستلم",-1)),D(n("input",{id:"gPhone",dir:"ltr",placeholder:"05xxxxxxxx","onUpdate:modelValue":r[2]||(r[2]=o=>t(i).phone=o)},null,512),[[Y,t(i).phone]])])]),n("div",De,[r[18]||(r[18]=n("label",null,"الرسالة الشخصية",-1)),D(n("textarea",{id:"gMsg",maxlength:"200",placeholder:"اكتب رسالتك الخاصة هنا...","onUpdate:modelValue":r[3]||(r[3]=o=>t(i).msg=o)},null,512),[[Y,t(i).msg]]),n("span",{class:C(["cnt",{max:y.value<20}]),id:"gCnt"},l(t(i).msg.length)+"/200",3)])]),n("div",Ye,[n("h4",null,[b(v,{inner:m.brush,size:16},null,8,["inner"]),r[19]||(r[19]=f(" تصميم بطاقة الإهداء",-1))]),n("div",Pe,[(a(!0),g(F,null,A(t(on),o=>(a(),g("div",{key:o.id,class:C(["design",{sel:t(i).design===o.id}]),"data-d":o.id,onClick:c=>t(i).design=o.id},[n("div",{class:"sw",style:X(`background:${o.bg};color:${o.fg}`)},[n("span",He,[b(v,{inner:m.check,size:10},null,8,["inner"])]),r[20]||(r[20]=f("SAMI",-1))],4),n("small",null,l(o.n),1)],10,Ve))),128))])]),n("div",Ne,[n("h4",null,[b(v,{inner:m.send,size:16},null,8,["inner"]),r[21]||(r[21]=f(" طريقة وتوقيت الإرسال",-1))]),n("div",Te,[(a(!0),g(F,null,A(t(W),o=>(a(),g("div",{key:o.id,class:C(["mth",{sel:t(i).method===o.id}]),"data-m":o.id,onClick:c=>t(i).method=o.id},[n("span",Oe,[b(v,{inner:o.ic,size:17},null,8,["inner"])]),f(l(o.n),1)],10,Ge))),128))]),n("div",Re,[n("span",{class:C(["ro",{on:t(i).when==="now"}]),"data-w":"now",onClick:r[4]||(r[4]=o=>t(i).when="now")},[...r[22]||(r[22]=[n("i",null,null,-1),f(" 🚀 إرسال الآن — سيتم إرسال الهدية فورًا",-1)])],2),n("span",{class:C(["ro",{on:t(i).when==="later"}]),"data-w":"later",onClick:r[5]||(r[5]=o=>t(i).when="later")},[...r[23]||(r[23]=[n("i",null,null,-1),f(" 📅 جدولة لاحقًا",-1)])],2)]),n("div",{class:C(["sched-box",{open:t(i).when==="later"}])},[n("div",Ue,[r[24]||(r[24]=n("label",null,"اختر التاريخ والوقت المناسب",-1)),D(n("input",{type:"datetime-local",id:"gSched","onUpdate:modelValue":r[6]||(r[6]=o=>t(i).schedDate=o)},null,512),[[Y,t(i).schedDate]])])],2)]),n("div",qe,[n("button",{class:"btn btn-prev","data-nav":"back",onClick:r[7]||(r[7]=o=>d("nav",-1))},[b(v,{inner:m.prev,size:15},null,8,["inner"]),r[25]||(r[25]=f(" رجوع",-1))]),n("button",{class:"btn btn-gold","data-nav":"next",disabled:!t(w),onClick:r[8]||(r[8]=o=>d("nav",1))},[r[26]||(r[26]=f("متابعة إلى الدفع ",-1)),b(v,{inner:m.next,size:15},null,8,["inner"])],8,Xe)])])])],64))}},We=["data-pay"],Je={class:"head"},Qe={class:"lg"},Ze={class:"tt"},nt={key:0,class:"body has"},R={__name:"PayMethod",props:{m:{type:Object,required:!0},hasForm:{type:Boolean,default:!1}},setup(_){const{state:p}=L();return(i,w)=>(a(),g("div",{class:C(["acc-pm",{sel:t(p).pay===_.m.id}]),"data-pay":_.m.id,onClick:w[0]||(w[0]=d=>t(p).pay=_.m.id)},[n("div",Je,[n("span",Qe,l(_.m.logo),1),n("span",Ze,[n("b",null,l(_.m.n),1),n("small",null,l(_.m.d),1)]),w[1]||(w[1]=n("span",{class:"rad"},[n("i")],-1))]),_.hasForm?(a(),g("div",nt,[...w[2]||(w[2]=[n("div",{class:"in"},[n("div",{class:"two"},[n("div",{class:"fld",style:{"margin-bottom":"10px"}},[n("label",null,"رقم البطاقة"),n("input",{dir:"ltr",inputmode:"numeric",placeholder:"•••• •••• •••• ••••"})]),n("div",{class:"fld",style:{"margin-bottom":"10px"}},[n("label",null,"الاسم على البطاقة"),n("input",{placeholder:"الاسم كما هو على البطاقة"})])]),n("div",{class:"two"},[n("div",{class:"fld",style:{margin:"0"}},[n("label",null,"تاريخ الانتهاء"),n("input",{dir:"ltr",placeholder:"MM / YY"})]),n("div",{class:"fld",style:{margin:"0"}},[n("label",null,"رمز الأمان (CVV)"),n("input",{dir:"ltr",inputmode:"numeric",placeholder:"•••"})])])],-1)])])):E("",!0)],10,We))}},et={class:"card",style:{padding:"22px"}},tt={class:"pay-group"},ot={class:"gi"},rt={class:"pay-group"},it={class:"gi"},at={class:"pay-group",style:{"margin-bottom":"4px"}},st={class:"gi"},lt={class:"coupon",style:{border:"none",padding:"16px 0 0","margin-top":"6px","border-top":"1px dashed var(--line)","border-radius":"0"}},pt={class:"inline-actions"},dt=["disabled"],en=25,gt={__name:"GiftPayStep",emits:["nav","pay"],setup(_,{emit:p}){const{state:i,canNext:w}=L(),d=p,y=$(()=>i.pay==="apple"&&i.extraCollapsed),m={card:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',wallet:'<path d="M21 12V7H5a2 2 0 010-4h14v4M3 5v14a2 2 0 002 2h16v-5M18 12a2 2 0 000 4h4v-4z"/>',chevD:'<path d="M6 9l6 6 6-6"/>',check:'<path d="M20 6L9 17l-5-5"/>',prev:'<path d="M5 12h14M13 6l6 6-6 6"/>',lock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>'};function z(){const r=i.couponIn.trim();r&&(i.couponCode=r,i.coupon=en)}return(r,o)=>(a(),g(F,null,[o[15]||(o[15]=n("div",{class:"g-head"},[n("h1",null,"الدفع"),n("p",null,"اختر طريقة الدفع المناسبة وأكمل إهداءك")],-1)),n("div",et,[n("div",tt,[n("b",null,[n("span",ot,[b(v,{inner:m.card,size:14},null,8,["inner"])]),o[5]||(o[5]=f(" وسائل الدفع الأساسية",-1))]),(a(!0),g(F,null,A(t(rn),c=>(a(),S(R,{key:c.id,m:c,"has-form":!!c.form},null,8,["m","has-form"]))),128))]),n("div",{class:C(["collapse-hint",{on:y.value}]),id:"expandPays",onClick:o[0]||(o[0]=c=>t(i).extraCollapsed=!1)},[b(v,{inner:m.chevD,size:14},null,8,["inner"]),o[6]||(o[6]=f(" عرض خيارات الدفع الإضافية (الدفع المرن، المحفظة والولاء)",-1))],2),n("div",{class:C(["pay-collapse",{hid:y.value}]),id:"extraPays"},[n("div",rt,[n("b",null,[n("span",it,[b(v,{inner:m.clock,size:14},null,8,["inner"])]),o[7]||(o[7]=f(" الدفع المرن",-1))]),(a(!0),g(F,null,A(t(an),c=>(a(),S(R,{key:c.id,m:c},null,8,["m"]))),128))]),n("div",at,[n("b",null,[n("span",st,[b(v,{inner:m.wallet,size:14},null,8,["inner"])]),o[8]||(o[8]=f(" المحفظة والولاء",-1))]),(a(!0),g(F,null,A(t(sn),c=>(a(),S(R,{key:c.id,m:c},null,8,["m"]))),128))])],2),n("div",lt,[o[9]||(o[9]=n("span",{class:"ci"},"%",-1)),D(n("input",{id:"cpnInput",placeholder:"أدخل كود الخصم","onUpdate:modelValue":o[1]||(o[1]=c=>t(i).couponIn=c)},null,512),[[Y,t(i).couponIn]]),n("button",{id:"cpnBtn",onClick:z},"تطبيق")]),n("div",{class:C(["coupon-msg",{ok:t(i).couponCode}]),id:"cpnMsg"},l(t(i).couponCode?"✓ تم تطبيق كود الخصم بنجاح — خصم "+en+" ر.س":""),3),n("span",{class:C(["terms-chk",{on:t(i).terms}]),id:"termsChk",onClick:o[2]||(o[2]=c=>t(i).terms=!t(i).terms)},[n("i",null,[b(v,{inner:m.check,size:11},null,8,["inner"])]),o[10]||(o[10]=f(" أوافق على ",-1)),o[11]||(o[11]=n("a",{href:"https://sami-care.sa/TermsAndConditions"},"الشروط والأحكام وسياسة الخصوصية",-1))],2),n("div",pt,[n("button",{class:"btn btn-prev","data-nav":"back",onClick:o[3]||(o[3]=c=>d("nav",-1))},[b(v,{inner:m.prev,size:15},null,8,["inner"]),o[12]||(o[12]=f(" الرجوع",-1))]),n("button",{class:"btn btn-gold",id:"doPay",disabled:!t(w),onClick:o[4]||(o[4]=c=>d("pay"))},[b(v,{inner:m.lock,size:15},null,8,["inner"]),o[13]||(o[13]=f(" إتمام الإهداء",-1))],8,dt)]),o[14]||(o[14]=n("div",{class:"after-pay"},"سيتم إرسال الهدية مباشرة بعد إتمام الدفع",-1))])],64))}},ct={class:"gsuccess",style:{"padding-top":"4px"}},xt={class:"gsuc-box"},ft={class:"gs-row"},bt={class:"k"},mt={class:"v"},ht={class:"gs-row"},vt={class:"k"},ut={class:"v"},kt={class:"gs-row"},yt={class:"k"},wt={class:"v"},zt={class:"gs-row"},_t={class:"k"},$t={class:"gsuc-actions"},Ft={__name:"GiftSuccess",emits:["recipient","track","new-gift","share","home","copy-ref"],setup(_,{emit:p}){const{state:i,giftLabel:w,dsgOf:d}=L(),y=p,m=["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],z=new Date(2026,6,7),r=$(()=>d(i.design)),o=$(()=>{const M=W.find(x=>x.id===i.method);return M?M.n:""}),c=$(()=>i.when==="now"?`اليوم ${z.getDate()} ${m[z.getMonth()]} ${z.getFullYear()}`:"مجدولة — "+(i.schedDate||"")),k={user:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',send:'<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',copy:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>',box:'<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7"/>',arrow:'<path d="M15 12H3M12 5l7 7-7 7"/>',plus:'<path d="M12 5v14M5 12h14"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>',home:'<path d="M3 9l9-6 9 6v11a1 1 0 01-1 1H4a1 1 0 01-1-1z"/>'};return(M,x)=>(a(),g("div",ct,[x[16]||(x[16]=tn('<div class="gs-hero"><span class="spark" style="top:0;right:8px;">✦</span><span class="spark" style="bottom:14px;left:2px;animation-delay:-1.2s;">✧</span><span class="circ"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6L9 17l-5-5"></path></svg></span><span class="gbox"></span></div><h1>تم إرسال الهدية بنجاح</h1><p class="sub">تم تجهيز هديتك وإرسالها للمستلم بنجاح، وسيتم إشعاره فور استلامها ✨</p>',3)),n("div",xt,[n("div",{class:"mini-card",style:X(`background:${r.value.bg};color:${r.value.fg}`)},[...x[6]||(x[6]=[n("span",{class:"lg"},[n("img",{src:K,style:{height:"24px","vertical-align":"middle"},alt:""}),n("br"),f("SAMI"),n("small",null,"عناية سامي")],-1)])],4),n("div",null,[n("h3",null,"إهداء "+l(t(w)),1),n("div",ft,[n("span",bt,[b(v,{inner:k.user,size:14},null,8,["inner"]),x[7]||(x[7]=f(" إلى",-1))]),n("span",mt,l(t(i).name),1)]),n("div",ht,[n("span",vt,[b(v,{inner:k.send,size:14},null,8,["inner"]),x[8]||(x[8]=f(" طريقة الإرسال",-1))]),n("span",ut,l(o.value),1)]),n("div",kt,[n("span",yt,[b(v,{inner:k.clock,size:14},null,8,["inner"]),x[9]||(x[9]=f(" وقت الإرسال",-1))]),n("span",wt,l(c.value),1)]),n("div",zt,[n("span",_t,[b(v,{inner:k.copy,size:14},null,8,["inner"]),x[10]||(x[10]=f(" رقم الطلب",-1))]),n("span",{class:"v copy-ref",id:"copyRef",dir:"ltr",onClick:x[0]||(x[0]=j=>y("copy-ref"))},l(t(i).ref)+" ⧉",1)])])]),n("div",$t,[n("button",{class:"btn btn-gold",id:"openRecipient",onClick:x[1]||(x[1]=j=>y("recipient"))},[b(v,{inner:k.box,size:15},null,8,["inner"]),x[11]||(x[11]=f(" فتح صفحة المستلم",-1))]),n("button",{class:"btn btn-line",id:"trackGift",onClick:x[2]||(x[2]=j=>y("track"))},[b(v,{inner:k.arrow,size:15},null,8,["inner"]),x[12]||(x[12]=f(" تتبع الهدية",-1))]),n("button",{class:"btn btn-line",id:"newGift",onClick:x[3]||(x[3]=j=>y("new-gift"))},[b(v,{inner:k.plus,size:15},null,8,["inner"]),x[13]||(x[13]=f(" إهداء جديد",-1))]),n("button",{class:"btn btn-line",id:"shareGift",onClick:x[4]||(x[4]=j=>y("share"))},[b(v,{inner:k.share,size:15},null,8,["inner"]),x[14]||(x[14]=f(" مشاركة الهدية",-1))]),n("button",{class:"btn btn-line",id:"goHome",onClick:x[5]||(x[5]=j=>y("home"))},[b(v,{inner:k.home,size:15},null,8,["inner"]),x[15]||(x[15]=f(" العودة للرئيسية",-1))])]),x[17]||(x[17]=n("div",{class:"thanks"},[n("i",null,"❦"),f(" شكرًا لاختيارك عناية سامي لتقديم تجربة مميزة لمن تحب "),n("i",null,"❦")],-1))]))}},Ct={class:"gsum"},Mt={class:"card"},Et={key:0,class:"pkline"},jt=["src"],Bt={key:1},At={class:"pr"},St={key:1,style:{"text-align":"center","margin-bottom":"14px"}},Lt={style:{position:"absolute",top:"-5px",right:"14px",width:"46px",opacity:".9"},viewBox:"0 0 64 40",fill:"none",stroke:"currentColor","stroke-width":"2"},It={style:{display:"block","font-family":"var(--font-d)",color:"var(--ink)","font-size":"14.5px"}},Dt={style:{display:"block",color:"var(--ink)","font-size":"12px","font-weight":"700","margin-top":"8px"}},Yt={style:{display:"block",color:"var(--mute)","font-size":"11.5px","margin-top":"4px","line-height":"1.7"}},Pt={key:2,class:"gs-row"},Vt={class:"v"},Ht={class:"gs-row"},Nt={class:"v"},Tt={class:"gs-row"},Gt={class:"v"},Ot={class:"gs-row"},Rt={class:"v"},Ut={class:"gs-row"},qt={class:"v"},Xt={class:"gs-row"},Kt={class:"v"},Wt={class:"chip"},Jt={class:"gs-row"},Qt={class:"v"},Zt={class:"sum-like",style:{"margin-top":"10px","padding-top":"12px","border-top":"1px dashed var(--line)"}},no={class:"v"},eo={class:"v"},to={class:"v"},oo={class:"v",style:{color:"var(--green)"}},ro={class:"gs-total"},io={class:"v"},ao={class:"gs-note"},so={key:0,class:"card help-card"},lo={class:"hi"},po="https://sami-care.sa//storage/uploads/404/IO26IC8Qd0LCbCeHNjYPUhOmSWeZi3FkEPYFpsuB.jpg",go="background:linear-gradient(150deg,#1D1810,#0B0906);color:#E8BE6C;max-width:190px;margin:0 auto 12px;aspect-ratio:16/10;border-radius:14px;display:grid;place-items:center;box-shadow:0 16px 30px -16px rgba(20,15,5,.5);position:relative",H="border:none;padding:4px 0",co={__name:"GiftSummary",setup(_){const{state:p,priceParts:i,giftLabel:w,pkgOf:d,dsgOf:y,brOf:m}=L(),z=s=>s.toLocaleString("ar-EG-u-nu-latn"),r=$(()=>i.value),o=$(()=>w.value),c=$(()=>p.branch?m(p.branch):null),k=$(()=>y(p.design)),M=$(()=>p.pkg?d(p.pkg):null),x=$(()=>p.gtype==="svc"?po:M.value?M.value.img:null),j=$(()=>{const s=W.find(e=>e.id===p.method);return s?s.n:""}),I=$(()=>{const s=[...rn,...an,...sn].find(e=>e.id===p.pay);return s?s.n:""}),P=$(()=>c.value?"اختر "+(p.gtype==="svc"?"الخدمة":"الباقة")+" المناسبة لإهدائها لمن تحب":"حدد مكان تنفيذ الخدمة أولًا لعرض "+(p.gtype==="svc"?"الخدمات":"الباقات")+" والأسعار"),B={lock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>',head:'<path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>'};return(s,e)=>(a(),g("div",Ct,[n("div",Mt,[e[17]||(e[17]=n("h3",null,"ملخص الهدية",-1)),o.value&&x.value?(a(),g("div",Et,[n("img",{src:x.value,alt:""},null,8,jt),n("span",null,[n("b",null,l(o.value),1),t(p).gtype==="pkg"&&M.value?(a(),g(F,{key:0},[n("small",null,"🕐 "+l(M.value.dur)+" دقيقة",1),n("small",null,l(M.value.desc),1)],64)):(a(),g("small",Bt,l(t(p).svcs.length)+" "+l(t(p).svcs.length>2?"خدمات":"خدمة")+" مختارة",1)),n("span",At,l(z(r.value.val))+" ر.س",1)])])):(a(),g("div",St,[n("div",{class:"mini-card",style:go},[(a(),g("svg",Lt,[...e[0]||(e[0]=[n("path",{d:"M32 30C18 30 10 24 12 15s16-5 20 8c4-13 18-17 20-8s-6 15-20 15z"},null,-1)])])),e[1]||(e[1]=n("span",{style:{"font-family":"var(--font-d)","font-size":"14px","letter-spacing":".1em","text-align":"center"}},[n("img",{src:K,style:{height:"24px","vertical-align":"middle"},alt:""}),n("br"),f("SAMI"),n("small",{style:{display:"block","font-size":"8.5px","letter-spacing":".04em",opacity:".8","margin-top":"2px"}},"عناية سامي")],-1))]),n("b",It,l(t(p).gtype==="svc"?"إهداء خدمة":"إهداء باقة"),1),n("small",Dt,l(t(p).gtype==="svc"?"لم يتم اختيار خدمة بعد":"لم يتم اختيار باقة بعد"),1),n("small",Yt,l(P.value),1)])),c.value?(a(),g("div",Pt,[e[2]||(e[2]=n("span",{class:"k"},"📍 الفرع المختار",-1)),n("span",Vt,l(c.value.name),1)])):E("",!0),t(p).step>=2?(a(),g(F,{key:3},[n("div",Ht,[e[3]||(e[3]=n("span",{class:"k"},"🎨 تصميم البطاقة",-1)),n("span",Nt,l(k.value.n),1)]),n("div",Tt,[e[4]||(e[4]=n("span",{class:"k"},"💬 الرسالة",-1)),n("span",Gt,l(t(p).msg?"مخصصة":"—"),1)]),n("div",Ot,[e[5]||(e[5]=n("span",{class:"k"},"📤 طريقة الإرسال",-1)),n("span",Rt,l(j.value),1)]),n("div",Ut,[e[6]||(e[6]=n("span",{class:"k"},"👤 المهدى إليه",-1)),n("span",qt,l(t(p).name||"—"),1)]),n("div",Xt,[e[7]||(e[7]=n("span",{class:"k"},"🕐 وقت الإرسال",-1)),n("span",Kt,[n("span",Wt,l(t(p).when==="now"?"إرسال الآن":"مجدول"),1)])])],64)):E("",!0),t(p).done?(a(),g(F,{key:4},[n("div",Jt,[e[8]||(e[8]=n("span",{class:"k"},"💳 طريقة الدفع",-1)),n("span",Qt,l(I.value),1)]),e[9]||(e[9]=n("div",{class:"gs-row"},[n("span",{class:"k"},"✅ حالة الدفع"),n("span",{class:"v"},[n("span",{class:"chip"},"مكتمل")])],-1))],64)):E("",!0),r.value.val?(a(),g(F,{key:5},[n("div",Zt,[n("div",{class:"gs-row",style:H},[e[10]||(e[10]=n("span",{class:"k"},"قيمة الهدية",-1)),n("span",no,l(z(r.value.val))+" ر.س",1)]),r.value.fee?(a(),g("div",{key:0,class:"gs-row",style:H},[e[11]||(e[11]=n("span",{class:"k"},"رسوم الخدمة المنزلية",-1)),n("span",eo,"+"+l(z(r.value.fee))+" ر.س",1)])):E("",!0),n("div",{class:"gs-row",style:H},[e[12]||(e[12]=n("span",{class:"k"},"ضريبة القيمة المضافة (15%)",-1)),n("span",to,"+"+l(z(r.value.vat))+" ر.س",1)]),r.value.disc?(a(),g("div",{key:1,class:"gs-row",style:H},[e[13]||(e[13]=n("span",{class:"k",style:{color:"var(--green)"}},"خصم",-1)),n("span",oo,"-"+l(z(r.value.disc))+" ر.س",1)])):E("",!0)]),n("div",ro,[e[15]||(e[15]=n("span",{class:"k"},"الإجمالي",-1)),n("span",io,[f(l(z(r.value.total))+" ",1),e[14]||(e[14]=n("small",{style:{"font-size":"13px"}},"ر.س",-1))])])],64)):E("",!0),n("div",ao,[b(v,{inner:B.lock,size:14},null,8,["inner"]),e[16]||(e[16]=f(" الدفع آمن ومشفّر — نستخدم أحدث تقنيات التشفير لحماية بياناتك",-1))])]),t(p).step<=1&&!t(p).done?(a(),g("div",so,[n("span",lo,[b(v,{inner:B.head,size:18},null,8,["inner"])]),e[18]||(e[18]=n("b",null,"تحتاج مساعدة؟",-1)),e[19]||(e[19]=n("small",null,"فريقنا جاهز لمساعدتك في الاختيار",-1)),e[20]||(e[20]=n("a",{href:"https://wa.me/963959415545"},"تواصل معنا",-1))])):E("",!0)]))}},xo={class:"g-stepper"},fo={class:"g-steps"},bo=["data-i"],mo={class:"bubble"},ho={class:"step-count"},vo='<path d="M20 6L9 17l-5-5"/>',uo={__name:"GiftStepper",setup(_){const{state:p}=L();return(i,w)=>(a(),g("div",xo,[n("div",fo,[(a(!0),g(F,null,A(t(hn),(d,y)=>(a(),g("div",{key:y,class:C(["g-step",{active:y===t(p).step&&!t(p).done,done:y<t(p).step||t(p).done}]),"data-i":y},[w[0]||(w[0]=n("div",{class:"bar"},[n("i")],-1)),n("span",mo,[y<t(p).step||t(p).done?(a(),S(v,{key:0,inner:vo,size:16})):(a(),g(F,{key:1},[f(l(y+1),1)],64))]),n("b",null,l(d.t),1),n("small",null,l(d.s),1)],10,bo))),128))]),n("div",ho,"الخطوة "+l(Math.min(t(p).step+1,5))+" من 5",1)]))}},ko={class:"shell"},yo={class:"wrap",id:"giftsApp"},wo={key:0,class:"gifts-hero"},zo={class:"gifts-hero__copy"},_o={class:"gifts-hero__ic"},$o={class:"view on gift-type-full"},Fo={class:"container why-gift-row"},Co={class:"wg-row"},Mo={class:"wi"},Eo={class:"container"},jo={class:"help-bar"},Bo={class:"hi"},Ao={key:2,class:"gift-stepper-compact"},So={class:"view on"},Lo={key:0,class:"gift-location-note"},Io={key:0,id:"gsumWrap"},No={__name:"GiftsView",setup(_){const p=V(null),{current:i,openPicker:w}=cn(),{state:d,go:y,reset:m}=L();xn(wn,"gifts"),fn(p);const z=V(!1),r=V(""),o=V(!1);function c(B){r.value=B,o.value=!0,clearTimeout(c._h),c._h=setTimeout(()=>{o.value=!1},2600)}const k=$(()=>!d.done&&d.step===0&&!d.gtype);function M(B){w(()=>{var e;d.gtype=B,d.pkg=null,d.svcs=[],d.activeCat=null,d.branch=((e=i.value)==null?void 0:e.id)||d.branch,d.step=1,scrollTo({top:0,behavior:"smooth"})})}function x(){z.value=!0,setTimeout(()=>{z.value=!1,d.done=!0,d.step=4,d.ref="#SAMI-2026-"+String(Math.floor(1e4+Math.random()*89999)),scrollTo({top:0,behavior:"smooth"})},2100)}function j(){return new URL("gift-recipient/",location.href).href+"?ref="+encodeURIComponent(d.ref||"")}const I={gift:'<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7s-2-5-5-5-3 5 0 5h5zM12 7s2-5 5-5 3 5 0 5h-5z"/>',head:'<path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>'},P=[["هدية رقمية فورية","تصلك فورًا عبر البريد الإلكتروني أو الواتساب.",'<path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4z"/>'],["تجربة فاخرة","أجواء راقية وخدمات تليق بمن تحب.",'<path d="M12 3l1.9 5.2L19 10l-5.1 1.8L12 17l-1.9-5.2L5 10l5.1-1.8z"/><path d="M18 3v3M19.5 4.5h-3"/>'],["صالحة لمدة 6 أشهر","يستخدمها المستلم في الوقت الذي يناسبه.",'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>'],["آمنة وموثوقة","هدية إلكترونية آمنة تصلك فورًا.",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>']];return(B,s)=>(a(),g("div",{ref_key:"root",ref:p},[n("div",ko,[n("div",yo,[!t(d).done&&t(d).step===0?(a(),g("section",wo,[n("div",zo,[n("span",_o,[b(v,{inner:I.gift,size:30},null,8,["inner"])]),s[6]||(s[6]=n("h1",null,"فاجئ من تحب",-1)),s[7]||(s[7]=n("p",null,"أهدِ خدمة أو باقة من عناية سامي، وقدِّم تجربة استرخاء متكاملة تجمع بين العناية الفاخرة وأدق التفاصيل. لتكون هدية تترك انطباعًا لا يُنسى.",-1))]),s[8]||(s[8]=n("div",{class:"gifts-hero__img"},[n("img",{src:un,alt:"هدية عناية سامي"})],-1))])):E("",!0),k.value?(a(),g(F,{key:1},[n("div",$o,[b(nn,{onPick:M})]),n("div",Fo,[s[9]||(s[9]=n("div",{class:"section-title-sm"},[n("i"),n("h2",null,"لماذا تهدي من عناية سامي؟"),n("i")],-1)),n("div",Co,[(a(),g(F,null,A(P,(e,h)=>n("div",{key:h,class:"wg-col"},[n("span",Mo,[b(v,{inner:e[2],size:26},null,8,["inner"])]),n("b",null,l(e[0]),1),n("small",null,l(e[1]),1)])),64))])]),n("div",Eo,[n("div",jo,[s[10]||(s[10]=n("div",{class:"help-bar__txt"},[n("b",null,"تحتاج مساعدة؟"),n("small",null,"فريقنا جاهز لمساعدتك في اختيار الهدية المناسبة.")],-1)),s[11]||(s[11]=n("a",{href:"https://wa.me/963959415545",class:"btn btn-line"},"تواصل معنا",-1)),n("span",Bo,[b(v,{inner:I.head,size:22},null,8,["inner"])])])])],64)):E("",!0),t(d).gtype&&(t(d).step>0||t(d).done)?(a(),g("div",Ao,[b(uo)])):E("",!0),k.value?E("",!0):(a(),g("div",{key:3,class:C(["g-stage",{"g-stage--pick":!t(d).done&&t(d).step===1}])},[n("main",So,[!t(d).done&&t(d).step>0?(a(),g("div",Lo,[b(vn)])):E("",!0),t(d).done?(a(),S(Ft,{key:1,onRecipient:s[0]||(s[0]=e=>B.location.href=j()),onTrack:s[1]||(s[1]=e=>c("حالة الهدية: تم الإرسال — بانتظار فتح المستلم")),onNewGift:s[2]||(s[2]=e=>t(m)()),onShare:s[3]||(s[3]=e=>c("تم نسخ رابط الهدية للمشاركة")),onHome:s[4]||(s[4]=e=>B.$router.push("/")),onCopyRef:s[5]||(s[5]=e=>c("تم نسخ رقم الطلب"))})):t(d).step===0?(a(),S(nn,{key:2,onPick:M})):t(d).step===1?(a(),S(ke,{key:3,onNav:t(y)},null,8,["onNav"])):t(d).step===2?(a(),S(Ke,{key:4,onNav:t(y)},null,8,["onNav"])):t(d).step===3?(a(),S(gt,{key:5,onNav:t(y),onPay:x},null,8,["onNav"])):E("",!0)]),t(d).done||t(d).step>=2?(a(),g("aside",Io,[b(co)])):E("",!0)],2))])]),s[13]||(s[13]=tn('<footer><div class="wrap"><div class="f-grid"><div class="f-brand"><a class="logo" href="/"><span class="mark"><img src="'+K+'" alt="عناية سامي" style="width:29px;height:29px;object-fit:contain;"></span><span class="name"><b>عناية سامي</b><span>SAMI CARE</span></span></a><p>مركز متخصص في العناية الرجالية المتكاملة بجدة، حيث تلتقي الفخامة بالاحترافية في كل تفصيلة.</p><div class="socials"><a href="https://x.com/samicare_sa" aria-label="X"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-6.8 7.8L23.3 22h-6.3l-4.9-6.4L6.5 22H3.4l7.3-8.3L1 2h6.5l4.4 5.8L18.9 2zm-1.1 18h1.7L7.1 3.9H5.3L17.8 20z"></path></svg></a><a href="https://www.instagram.com/samicare.sa/" aria-label="انستقرام"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1" fill="currentColor"></circle></svg></a><a href="https://www.facebook.com/samicare.sa" aria-label="فيسبوك"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg></a></div></div><div><h4>روابط مهمة</h4><ul class="f-links"><li><a href="/">الرئيسية</a></li><li><a href="/booking">حجز موعد</a></li><li><a href="/#services">خدماتنا</a></li><li><a href="/packages-gifts">الباقات</a></li><li><a href="/gifts">الهدايا</a></li></ul></div><div><h4>استكشف</h4><ul class="f-links"><li><a href="/store">المتجر</a></li><li><a href="/branches">فروعنا</a></li><li><a href="/contact">تواصل معنا</a></li><li></li><li><a href="https://sami-care.sa/TermsAndConditions">الشروط والأحكام</a></li></ul></div><div><h4>عناوين الفروع</h4><div class="f-branch"><b>قريش</b><small>جدة البوادي شارع قريش</small><a href="tel:+966550046462">+966 55 004 6462</a></div><div class="f-branch"><b>البغدادية</b><small>جدة البغدادية الغربية شارع حائل</small><a href="tel:+966569610958">+966 56 961 0958</a></div><div class="f-branch"><b>خدمات منزلية</b><small>حلاقة شعر ولحية وماسكات طبيعية</small></div></div></div><div class="f-bottom"><small>© 2026 عناية سامي — جميع الحقوق محفوظة</small><div class="pay" aria-label="بوابات الدفع"><span title="Visa">VISA</span><span title="Mastercard">Mastercard</span><span title="مدى">mada</span><span title="Tabby">tabby</span><span title="Apple Pay">Pay</span></div></div></div></footer>',1)),n("div",{class:C(["pay-loading",{on:z.value}]),id:"payLoading"},[...s[12]||(s[12]=[n("div",{class:"pl-box"},[n("div",{class:"pl-ring"}),n("b",null,"جارٍ إتمام الإهداء بأمان…"),n("small",null,"سيتم إرسال الهدية مباشرة بعد إتمام الدفع")],-1)])],2),n("div",{class:C(["toast",{on:o.value}]),id:"toast"},[n("span",null,l(r.value),1)],2)],512))}};export{No as default};
