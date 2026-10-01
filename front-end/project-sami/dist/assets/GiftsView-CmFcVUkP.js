import{d as C,M as dr,o as a,c as s,b as r,n as A,e,f as l,U as k,a as c,F as $,_ as er,g as T,q as gr,J as cr,j as xr,l as O,K as fr,r as Y,p as B,t as b,H as G,Z as br,v as tr,u as mr,L as ur,P as R,z as or,k as I,w as J,D as q,i as ar,a0 as ir,m as H,O as vr}from"./index-Bs4B5fFm.js";import{u as hr}from"./usePageStyles-BsKXAz8A.js";import{u as kr}from"./useInternalLinks-DFu5X4c8.js";import{p as Z}from"./paymentPolicy-Dun9PtFA.js";import{c as yr,D as sr,G as lr,S as X,P as wr,a as zr,b as _r,d as $r}from"./GiftCard-CiDFpnYg.js";import{i as Fr}from"./PaymentMethodList-Hnqqr2gc.js";import{F as Cr}from"./FavoriteButton-DWHEVbcX.js";import{a as Mr}from"./giftIcons-C3hH12nn.js";import{u as Er,r as jr,C as Br}from"./CheckoutPaymentOptions-Dkn_porA.js";import{_ as Q}from"./SkeletonLoader-CNkcL428.js";import{L as Lr}from"./LocationNotice-CNCcO5vs.js";import"./accountApi-DjzvT3R8.js";const Ar="/images/gifts/hero.jpg",Ir=.15,Sr=S=>sr.find(m=>m.id===S),i=dr({step:0,gtype:null,branch:null,activeCat:null,pkg:null,svcs:[],sort:"pop",favs:[],sender:"",name:"",phone:"",msg:"",design:"lux-dark",method:"wa",when:"now",schedDate:"",pay:null,terms:!1,placing:!1,done:!1,ref:null,claimUrl:null,claimToken:null,walletBalance:null});function V(){const S=v=>i.svcs.some(y=>y.id===v),m=v=>{const y=i.svcs.findIndex(L=>L.id===v.id);y===-1?i.svcs.push(v):i.svcs.splice(y,1)},o=v=>i.favs.includes(v),E=v=>{const y=i.favs.indexOf(v);y===-1?i.favs.push(v):i.favs.splice(y,1)},w=C(()=>{var v;return i.gtype==="svc"?i.svcs.reduce((y,L)=>y+L.price,0):((v=i.pkg)==null?void 0:v.price)||0}),z=C(()=>{var v;return i.gtype==="svc"?i.svcs.length?i.svcs.map(y=>y.name).join(" + "):null:((v=i.pkg)==null?void 0:v.name)||null}),d=C(()=>{const v=w.value,y=Math.round(v*Ir);return{val:v,vat:y,total:v+y}}),f=C(()=>{switch(i.step){case 0:return!!i.gtype;case 1:return i.gtype==="svc"?i.svcs.length>0:!!i.pkg;case 2:return i.name.trim().length>1&&i.phone.trim().length>=9;case 3:return Z.canPay(i,d.value.total)&&i.terms&&!i.placing}return!1});function t(v){v>0&&!f.value||(i.step+=v,i.step<0&&(i.step=0),scrollTo({top:0,behavior:"smooth"}))}function u(){i.step=0,i.gtype=null,i.pkg=null,i.svcs=[],i.done=!1,i.ref=null,i.claimUrl=null,i.pay=null,i.terms=!1,i.useWallet=!1,i.walletAmount=0,i.useLoyalty=!1,i.loyaltyPointsUsed=0}async function F(){var v,y,L,_;if(!f.value)return null;i.placing=!0;try{const g=i.branch==="home-service"?0:Number.isInteger(i.branch)?i.branch:null,M={location:{recipient_name:i.name.trim(),recipient_mobile:i.phone.trim(),message:i.msg.trim()||void 0,sender_name:i.sender.trim()||void 0},design:i.design,branch:g,send_channel:i.method||"link"};i.gtype==="svc"?M.services=[{subServices:i.svcs.map(h=>({id:h.id}))}]:M.packages=[{id:i.pkg.id}];const x=await yr(M),{gateway:D,...N}=Z.payment(i,d.value.total),P=await Fr(D,N);return P.payment_url?(window.location.href=P.payment_url,{created:x,payment:P}):(i.ref=(v=x==null?void 0:x.data)!=null&&v.gift_card_id?`#GIFT-${x.data.gift_card_id}`:"#GIFT",i.claimUrl=((y=x==null?void 0:x.data)==null?void 0:y.share_url)||((L=x==null?void 0:x.data)==null?void 0:L.claim_url)||null,i.claimToken=((_=x==null?void 0:x.data)==null?void 0:_.claim_token)||null,i.done=!0,i.step=4,{created:x,payment:P})}finally{i.placing=!1}}return{state:i,dsgOf:Sr,hasSvc:S,toggleSvc:m,isFav:o,toggleFav:E,giftValue:w,giftLabel:z,priceParts:d,canNext:f,go:t,reset:u,placeGift:F}}const Dr=`\r
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
/* شاشة البداية: الهيرو ملاصق للهيدر بدون فجوة ولا زوايا مدوّرة */\r
.shell:has(.gifts-hero){border-radius:0;padding-top:0}\r
.shell:has(.gifts-hero) > .wrap{padding-top:0}\r
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
  position:absolute;top:calc(100% - 24px);right:calc(50% - 24px);width:48px;height:48px;border-radius:50%;\r
  background:#fff;display:grid;place-items:center;color:var(--pc);border:2px solid;z-index:3;\r
  box-shadow:0 10px 20px -8px rgba(80,60,20,.4);transition:transform .35s var(--ease);\r
}\r
.pkg:hover .badge{transform:rotateY(180deg)}\r
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
.gift-stepper-compact{margin:14px 0 0;padding:10px 20px;border:1px solid rgba(198,161,91,.2);border-radius:16px;background:#fcfaf6}\r
.gift-stepper-compact .g-stepper{padding:0}\r
.gift-stepper-compact .g-steps{max-width:980px;align-items:flex-start}\r
.gift-stepper-compact .g-step{gap:5px}\r
.gift-stepper-compact .g-step .bubble{width:36px;height:36px;font-size:12px}\r
.gift-stepper-compact .g-step .bar{top:18px;right:calc(50% + 24px);width:calc(100% - 48px);height:2px}\r
.gift-stepper-compact .g-step b{font-size:11.5px;line-height:1.45;white-space:nowrap}\r
.gift-stepper-compact .g-step small,.gift-stepper-compact .step-count{display:none}\r
.gift-stepper-compact .g-step.active .bubble{box-shadow:0 8px 18px -8px rgba(143,113,52,.55),0 0 0 3px rgba(198,161,91,.12);transform:none}\r
.g-stage{display:grid;grid-template-columns:1fr 320px;gap:24px;padding:24px 0;align-items:start}\r
.g-stage.g-stage--pick{grid-template-columns:minmax(0,1fr)}\r
.g-head{text-align:center;margin:8px 0 26px}\r
.g-head h1{font-family:var(--font-d);font-size:clamp(24px,3vw,34px);color:var(--ink)}\r
.g-head h1 .lock{color:var(--gold-deep)}\r
.g-head p{color:var(--mute);font-size:14px;margin-top:7px}\r
\r
/* خطوة 1: نوع الهدية */\r
.gift-type-full{width:100%;max-width:none;margin-inline:0;padding-inline:0}\r
.gift-type-full .g-head{padding-inline:24px}\r
.gtype-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}\r
.gtype{position:relative;border-radius:20px;overflow:hidden;border:1.5px solid var(--line);cursor:pointer;\r
  background:#fff;transition:all .3s var(--ease)}\r
.gtype:hover{transform:translateY(-5px);box-shadow:0 26px 46px -24px rgba(80,60,20,.5)}\r
.gtype.sel{border-color:var(--gold);box-shadow:0 0 0 4px rgba(198,161,91,.16)}\r
.gtype .im{aspect-ratio:16/11;overflow:hidden;background:linear-gradient(150deg,#F3EBD8,#EFE5CC);position:relative}\r
.gtype .im img{width:100%;height:100%;object-fit:cover;transition:transform .7s var(--ease)}\r
.gtype:hover .im img{transform:scale(1.05)}\r
.gtype .ic{position:absolute;top:18px;left:18px;width:54px;height:54px;border-radius:50%;\r
  background:#fff;border:0;display:grid;place-items:center;color:var(--gold-deep);z-index:2;\r
  box-shadow:0 8px 20px -8px rgba(60,40,10,.35)}\r
.gtype .bd{padding:22px 20px;text-align:center;background:#fff}\r
.gtype h3{font-family:var(--font-d);font-size:22px;color:var(--ink);margin:0 0 8px}\r
.gtype p{font-size:13px;color:var(--mute);margin:0 0 18px;line-height:1.85}\r
.gtype .go{display:inline-flex;width:100%;justify-content:center;gap:8px;padding:13px;border-radius:11px;\r
  background:#fff;border:1.5px solid var(--gold);color:var(--gold-deep);font-size:13.5px;font-weight:700;transition:background .2s}\r
.gtype .go:hover{background:#fdf6e9}\r
/* ===== شريط ملاحظة مكان التنفيذ ===== */\r
.loc-note{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin:14px 0 2px;padding:12px 18px;\r
  border-radius:14px;background:#FFF8EA;border:1px solid rgba(201,139,49,.28);font-size:12.5px;color:var(--ink)}\r
.loc-note--empty{background:#FCF4F1;border-color:rgba(190,90,50,.28)}\r
.loc-note__ic{display:grid;place-items:center;width:32px;height:32px;border-radius:50%;\r
  background:#fff;border:1px solid rgba(201,139,49,.3);color:var(--gold-deep);flex:none}\r
.loc-note__txt{flex:1;min-width:0}\r
.loc-note__txt b{color:var(--gold-deep)}\r
.loc-note__txt small{display:block;font-size:10.5px;color:var(--mute);margin-top:2px}\r
.loc-note button{border:1.5px solid var(--gold-deep);color:var(--gold-deep);background:transparent;border-radius:10px;\r
  padding:7px 15px;font-size:11.5px;font-weight:700;font-family:inherit;cursor:pointer;flex:none}\r
.loc-note button:hover{background:#fdf3e2}\r
/* ===== هيرو الهدايا (تخطيط منقسم فاتح) ===== */\r
.gifts-hero{position:relative;left:50%;right:50%;width:100vw;margin-left:-50vw;margin-right:-50vw;margin-top:0;\r
  display:grid;grid-template-columns:1fr 1.15fr;align-items:stretch;min-height:300px;background:#EFE8E2}\r
.gifts-hero__img{overflow:hidden}\r
.gifts-hero__img img{width:100%;height:100%;object-fit:cover;display:block;\r
  -webkit-mask-image:linear-gradient(to right,#000 62%,rgba(0,0,0,.55) 84%,transparent 100%);\r
  mask-image:linear-gradient(to right,#000 62%,rgba(0,0,0,.55) 84%,transparent 100%)}\r
.gifts-hero__copy{align-self:center;justify-self:center;text-align:center;max-width:470px;padding:26px 24px}\r
.gifts-hero__ic{display:inline-flex;color:var(--gold);margin-bottom:9px}\r
.gifts-hero__copy h1{font-family:var(--font-d);font-size:32px;margin:0 0 11px;color:var(--ink)}\r
.gifts-hero__copy p{font-size:13px;line-height:1.9;color:var(--mute);margin:0}\r
\r
/* ===== لماذا تهدي من عناية سامي (صف أفقي) ===== */\r
.why-gift-row{padding:36px 0 10px}\r
.section-title-sm{display:flex;align-items:center;justify-content:center;gap:16px;margin-bottom:24px}\r
.section-title-sm h2{font-size:24px;margin:0;color:var(--ink)}\r
.section-title-sm i{width:32px;height:1px;background:var(--gold)}\r
.wg-row{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}\r
.wg-col{text-align:center;padding:24px 18px;border:1px solid rgba(198,161,91,.22);border-radius:16px;background:#FCF9F3}\r
.wg-col .wi{display:inline-flex;color:var(--gold-deep);margin-bottom:12px}\r
.wg-col b{display:block;font-size:13.5px;margin-bottom:6px;color:var(--ink)}\r
.wg-col small{font-size:11.5px;color:var(--mute);line-height:1.75}\r
\r
/* ===== شريط تحتاج مساعدة ===== */\r
.help-bar{display:flex;align-items:center;gap:18px;margin:26px 0 44px;padding:22px 26px;border-radius:16px;\r
  background:#FCF9F3;border:1px solid rgba(198,161,91,.22)}\r
.help-bar__txt{flex:1;text-align:start}\r
.help-bar__txt b{display:block;font-size:15px;color:var(--ink);margin-bottom:4px}\r
.help-bar__txt small{font-size:12px;color:var(--mute)}\r
.help-bar .btn{flex:none;padding:11px 30px;border-radius:11px}\r
.help-bar .hi{flex:none;order:99;width:56px;height:56px;border-radius:50%;background:#fff;border:1px solid rgba(198,161,91,.25);\r
  display:grid;place-items:center;color:var(--gold-deep)}\r
@media(max-width:900px){.gifts-hero{grid-template-columns:1fr;min-height:0}.gifts-hero__img{order:-1;height:190px}.gifts-hero__img img{-webkit-mask-image:linear-gradient(to bottom,#000 74%,transparent 100%);mask-image:linear-gradient(to bottom,#000 74%,transparent 100%)}.gifts-hero__copy{padding:22px 20px 34px}.gifts-hero__copy h1{font-size:32px}.wg-row{grid-template-columns:repeat(2,1fr)}.help-bar{flex-direction:column;text-align:center}.help-bar__txt{text-align:center}}\r
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
.gsum{position:sticky;top:86px}\r
.gsum .card{padding:20px}\r
.gsum h3{font-family:var(--font-d);font-size:17px;color:var(--ink);margin-bottom:16px;display:flex;align-items:center;gap:10px}\r
.gsum h3::after{content:"";flex:1;height:1px;background:linear-gradient(-90deg,var(--gold),transparent)}\r
.gsum .pkline{display:flex;gap:12px;margin-bottom:14px;padding-bottom:14px;border-bottom:1px solid rgba(143,113,52,.14)}\r
.gsum .pkline img{width:74px;height:74px;object-fit:cover;border-radius:12px}\r
.gsum .pkline b{font-family:var(--font-d);font-size:15px;color:var(--ink);display:block}\r
.gsum .pkline small{font-size:11px;color:var(--mute);display:block;margin-top:3px;line-height:1.6}\r
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
\r
\r
/* ===== خاص بصفحات الهدايا ===== */\r
.inline-actions{display:flex;gap:14px;align-items:center;justify-content:space-between;margin-top:26px;flex-wrap:wrap}\r
.inline-actions .btn{min-width:200px}\r
.btn-prev{border:1.5px solid var(--line);color:var(--mute);background:#fff}\r
.btn-prev:hover{border-color:var(--gold);color:var(--gold-deep)}\r
.step-count{font-size:12px;color:var(--mute);text-align:center;margin-top:20px}\r
/* الكاروسيل */\r
.caro-wrap{position:relative}\r
.caro{display:flex;gap:14px;overflow-x:auto;scroll-behavior:smooth;scrollbar-width:none;padding:6px 2px 12px}\r
.caro::-webkit-scrollbar{display:none}\r
.caro .gpkg{flex:0 0 calc(25% - 11px);min-width:225px}\r
.caro-btn{position:absolute;top:calc(50% - 20px);width:38px;height:38px;border-radius:50%;z-index:5;\r
  background:rgba(255,253,247,.85);border:1px solid var(--line);color:var(--gold-deep);\r
  display:grid;place-items:center;opacity:.55;transition:all var(--dur) var(--ease);backdrop-filter:blur(4px)}\r
.caro-btn:hover{opacity:1;box-shadow:0 10px 20px -10px rgba(80,60,20,.4)}\r
.caro-btn.r{right:-14px}.caro-btn.l{left:-14px}\r
\r
/* صفحة اختيار باقة الإهداء: شبكة واضحة ومتساوية داخل مساحة المحتوى */\r
.g-stage>.view{min-width:0}\r
.g-stage .caro-wrap{padding:0}\r
.g-stage .caro{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;overflow:visible;padding:3px 0 8px}\r
.g-stage .caro .gpkg{min-width:0;width:100%;height:100%;flex:none}\r
.g-stage .caro .gpkg{border-radius:14px}\r
.g-stage .caro .gpkg .ph{height:105px;aspect-ratio:auto}\r
.g-stage .caro .gpkg .ph .chk{top:7px;left:7px;width:21px;height:21px;font-size:10px}\r
.g-stage .caro .gpkg .bd{display:flex;flex-direction:column;flex:1;padding:10px 9px}\r
.g-stage .caro .gpkg h4{font-size:12.5px;line-height:1.4}\r
.g-stage .caro .gpkg .dur{font-size:9px;margin:3px 0}\r
.g-stage .caro .gpkg .desc{font-size:9px;line-height:1.55}\r
.g-stage .caro .gpkg .prc{font-size:16px;margin:6px 0}\r
.g-stage .caro .gpkg .prc small{font-size:9px}\r
.g-stage .caro .gpkg .pick{margin-top:auto;padding:7px 5px;border-radius:9px;font-size:9.5px;gap:4px}\r
.g-stage .caro-btn{display:none}\r
/* Desktop gift-package cards: give the artwork room and show the full image. */\r
@media(min-width:761px){\r
  .g-stage .caro .gpkg .ph{\r
    height:190px;\r
    background:#f7f2e8;\r
  }\r
  .g-stage .caro .gpkg .ph img{\r
    object-fit:cover;\r
    object-position:center;\r
  }\r
}\r
.gift-location-note{display:flex;justify-content:center;margin:0 0 18px;text-align:center}\r
.gift-location-note .loc-note{margin-bottom:0;padding:8px 13px;border:1px solid rgba(198,161,91,.22);border-radius:999px;background:#fcf9f3}\r
.gift-location-note .loc-note__ic{width:26px;height:26px;border-radius:50%;display:inline-grid;place-items:center;background:#fff4df;border:1px solid rgba(198,161,91,.28);color:var(--gold-deep)}\r
@media(max-width:1050px){.g-stage .caro{grid-template-columns:repeat(3,minmax(0,1fr))}}\r
@media(max-width:760px){.g-stage .caro{grid-template-columns:repeat(2,minmax(0,1fr))}}\r
@media(max-width:520px){.g-stage .caro{grid-template-columns:1fr}}\r
.fav{position:absolute;top:10px;right:10px;width:30px;height:30px;border-radius:50%;z-index:3;\r
  background:rgba(255,253,247,.9);display:grid;place-items:center;color:var(--mute);transition:all .25s var(--ease)}\r
.fav:hover{transform:scale(1.12)}\r
.fav.on{color:#C94F63}\r
/* بطاقات الخدمات المفردة */\r
.gsvcs{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}\r
.gsvc{background:#fff;border:1.5px solid var(--line);border-radius:15px;padding:16px;cursor:pointer;\r
  transition:all var(--dur) var(--ease);position:relative;animation:pkgIn .35s var(--ease) both}\r
.gsvc:hover{transform:translateY(-4px);box-shadow:0 16px 30px -18px rgba(80,60,20,.4)}\r
.gsvc.sel{border-color:var(--gold);background:linear-gradient(160deg,#FFFBF0,#fff);box-shadow:0 0 0 3px rgba(198,161,91,.15)}\r
.gsvc .si{width:40px;height:40px;border-radius:12px;display:grid;place-items:center;font-size:18px;\r
  background:rgba(198,161,91,.1);color:var(--gold-deep);margin-bottom:10px}\r
.gsvc .chk{position:absolute;top:12px;left:12px;width:22px;height:22px;border-radius:7px;border:1.5px solid var(--line);\r
  display:grid;place-items:center;color:var(--ink);transition:all .25s var(--ease)}\r
.gsvc.sel .chk{background:linear-gradient(135deg,var(--gold-bright),var(--gold));border-color:transparent}\r
.gsvc b{font-size:13.5px;color:var(--ink);display:block}\r
.gsvc small{font-size:11px;color:var(--mute);display:block;margin-top:4px}\r
.gsvc .ft{display:flex;justify-content:space-between;margin-top:11px;padding-top:10px;border-top:1px dashed var(--line);\r
  font-size:11.5px;color:var(--mute)}\r
.gsvc .ft .p{font-family:var(--font-d);font-size:15px;color:var(--gold-deep)}\r
\r
/* اختيار خدمات الإهداء — مطابق لاختيار الخدمات في الحجز */\r
/* ============================================================\r
   خطوة اختيار الخدمات — نفس شكل نسخة الموبايل\r
   (نسخة الموبايل ملف مستقل في public/mobile ولم تُمَس)\r
   ============================================================ */\r
\r
/* ===== صف الأقسام: صورة معتّمة والاسم فوقها ===== */\r
.cat-row{display:grid;grid-template-columns:repeat(5,1fr);gap:11px;margin:0 auto 22px;max-width:820px}\r
.cat{position:relative;height:100px;border-radius:14px;overflow:hidden;cursor:pointer;display:block;\r
  border:2px solid transparent;background:#20170E;color:#fff;\r
  transition:transform .3s var(--ease),border-color .3s var(--ease),box-shadow .3s var(--ease)}\r
.cat img{display:block;width:100%;height:100%;object-fit:cover;filter:brightness(.6);\r
  transition:filter .35s var(--ease),transform .55s var(--ease)}\r
.cat::after{content:"";position:absolute;inset:0;pointer-events:none;\r
  background:linear-gradient(180deg,transparent 40%,rgba(9,7,5,.75) 100%)}\r
.cat:hover{transform:translateY(-3px);box-shadow:0 14px 26px -16px rgba(60,42,12,.6)}\r
.cat:hover img{filter:brightness(.72);transform:scale(1.05)}\r
\r
/* القسم المفتوح: تدرّج ذهبي فوق الصورة + علامة صح */\r
.cat.sel{border-color:var(--gold)}\r
.cat.sel::after{background:linear-gradient(180deg,rgba(214,150,44,.55),rgba(160,102,17,.88))}\r
.cat.sel img{filter:brightness(.72)}\r
\r
.cat .lbl{position:absolute;z-index:2;inset-inline:8px;bottom:9px;display:block;\r
  color:#fff;font-family:var(--font-b);font-size:12.5px;font-weight:800;line-height:1.35;\r
  text-align:center;text-shadow:0 2px 6px rgba(0,0,0,.6)}\r
.cat .cat-icon{display:none}\r
\r
.cat .chk{position:absolute;z-index:3;top:7px;left:7px;width:19px;height:19px;border-radius:50%;\r
  background:#fff;display:grid;place-items:center;color:#B87A16;\r
  opacity:0;transform:scale(.4);transition:all .3s var(--ease)}\r
.cat.sel .chk,.cat.has-picks .chk{opacity:1;transform:scale(1)}\r
\r
.sub-block{margin-bottom:8px}\r
\r
/* ===== عنوان قسم الخدمات: لليمين مع خط ذهبي تحته ===== */\r
.sub-title{display:flex;align-items:flex-end;justify-content:flex-start;gap:12px;\r
  margin:24px 0 16px;border-bottom:1px solid var(--line)}\r
.sub-title__main{display:inline-flex;align-items:center;gap:9px;padding-bottom:9px;margin-bottom:-1px;\r
  border-bottom:2px solid var(--gold);\r
  font-family:var(--font-d);font-size:18px;color:var(--ink);white-space:nowrap}\r
.sub-title .tick{width:auto;height:auto;background:none;border-radius:0;display:inline-grid;place-items:center;color:var(--gold-deep)}\r
.sub-title .tick svg{width:19px;height:19px;fill:none;stroke:currentColor;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}\r
.sub-title small{font-size:12px;color:var(--mute);font-family:var(--font-b);\r
  margin-inline-start:auto;padding-bottom:9px}\r
\r
/* ===== كروت الخدمات الفرعية ===== */\r
.subs{display:grid;grid-template-columns:repeat(4,1fr);gap:11px}\r
.sub{position:relative;background:#fff;border:1.5px solid var(--line);border-radius:12px;padding:13px 14px;\r
  cursor:pointer;display:flex;flex-direction:column;transition:all var(--dur) var(--ease)}\r
.sub:hover{transform:translateY(-3px);box-shadow:0 14px 26px -18px rgba(80,60,20,.38);border-color:rgba(143,113,52,.45)}\r
.sub.sel{border-color:var(--gold);background:linear-gradient(160deg,#FFFBF0,#fff);box-shadow:0 0 0 3px rgba(198,161,91,.14)}\r
\r
/* صف واحد: الأيقونة ثم الاسم ثم مربّع الاختيار في الطرف */\r
.sub .top{display:flex;align-items:flex-start;gap:9px;margin-bottom:6px}\r
.sub .top .si{flex:none;width:30px;height:30px;border-radius:9px;display:grid;place-items:center;\r
  background:rgba(198,161,91,.11);color:var(--gold-deep)}\r
.sub .top .si svg{width:17px;height:17px;fill:none;stroke:currentColor;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}\r
.sub .top b{flex:1;min-width:0;font-size:13px;color:var(--ink);line-height:1.5;padding-top:2px}\r
.sub .chk{flex:none;width:19px;height:19px;border-radius:6px;border:1.5px solid var(--line);\r
  display:grid;place-items:center;color:#fff;transition:all .25s var(--ease)}\r
.sub.sel .chk{background:linear-gradient(135deg,var(--gold-bright),var(--gold));border-color:transparent;color:var(--ink)}\r
\r
.sub small{font-size:11px;color:var(--mute);display:block;line-height:1.65;min-height:30px}\r
.sub .foot{display:flex;justify-content:space-between;align-items:center;margin-top:auto;padding-top:9px}\r
.sub .dur{font-size:11px;color:var(--mute);display:flex;gap:5px;align-items:center}\r
.sub .prc{font-family:var(--font-d);font-size:15.5px;color:var(--gold-deep)}\r
.sub .prc small{display:inline;font-size:10.5px;color:var(--mute);min-height:0}\r
\r
.empty-hint{border:1.5px dashed var(--line);border-radius:16px;padding:44px 20px;text-align:center;color:var(--mute);font-size:14px}\r
.empty-hint b{color:var(--ink);font-family:var(--font-d);font-size:17px;display:block;margin-bottom:6px}\r
@media(max-width:900px){.subs{grid-template-columns:repeat(2,1fr)}}\r
/* المودال */\r
.modal{position:fixed;inset:0;z-index:950;display:none;place-items:center;background:rgba(10,9,6,.62);backdrop-filter:blur(6px)}\r
.modal.on{display:grid}\r
.modal .mbox{background:#fff;border-radius:22px;width:min(680px,92%);max-height:86vh;overflow:auto;\r
  padding:26px;animation:viewIn .35s var(--ease)}\r
.modal .mhead{display:flex;align-items:center;justify-content:space-between;margin-bottom:18px}\r
.modal .mhead b{font-family:var(--font-d);font-size:18px;color:var(--ink)}\r
.modal .mclose{width:36px;height:36px;border-radius:50%;border:1px solid var(--line);display:grid;place-items:center;\r
  color:var(--mute);transition:var(--dur)}\r
.modal .mclose:hover{border-color:var(--gold);color:var(--gold-deep);transform:rotate(90deg)}\r
.modal .designs{grid-template-columns:repeat(3,1fr);gap:14px}\r
.modal .design .sw{aspect-ratio:16/10;font-size:12px}\r
.design-trigger{display:flex;align-items:center;gap:14px;padding:14px 16px;border:1.5px solid var(--line);border-radius:14px;\r
  background:#FDFBF5;cursor:pointer;transition:all var(--dur) var(--ease)}\r
.design-trigger:hover{border-color:var(--gold)}\r
.design-trigger .cur{width:74px;height:48px;border-radius:10px;display:grid;place-items:center;\r
  font-family:var(--font-d);font-size:9px;flex:none}\r
.design-trigger .t{flex:1}\r
.design-trigger .t b{font-size:13px;color:var(--ink);display:block}\r
.design-trigger .t small{font-size:11px;color:var(--mute)}\r
.design-trigger .chg{font-size:12px;color:var(--gold-deep);font-weight:700;display:flex;gap:6px;align-items:center}\r
/* أكورديون الدفع */\r
.pay-group{margin-bottom:14px}\r
.pay-group>b{font-size:13px;color:var(--ink);display:flex;gap:8px;align-items:center;margin-bottom:10px}\r
.pay-group>b .gi{width:26px;height:26px;border-radius:8px;display:grid;place-items:center;\r
  background:rgba(198,161,91,.12);color:var(--gold-deep)}\r
.acc-pm{border:1.5px solid var(--line);border-radius:14px;background:#fff;margin-bottom:10px;overflow:hidden;\r
  transition:border-color var(--dur),box-shadow var(--dur)}\r
.acc-pm.sel{border-color:var(--gold);box-shadow:0 0 0 3px rgba(198,161,91,.14)}\r
.acc-pm .head{display:flex;align-items:center;gap:13px;padding:15px 17px;cursor:pointer}\r
.acc-pm .lg{min-width:62px;height:32px;border-radius:8px;display:grid;place-items:center;background:#F5F0E4;\r
  font-weight:800;font-size:11px;color:var(--ink);padding-inline:10px;flex:none}\r
.acc-pm .tt b{font-size:13.5px;color:var(--ink);display:block}\r
.acc-pm .tt small{font-size:11px;color:var(--mute)}\r
.acc-pm .rad{margin-inline-start:auto;width:22px;height:22px;border-radius:50%;border:1.5px solid var(--line);\r
  display:grid;place-items:center;transition:all .25s var(--ease);flex:none}\r
.acc-pm .rad i{width:10px;height:10px;border-radius:50%;background:linear-gradient(135deg,var(--gold-bright),var(--gold));\r
  transform:scale(0);transition:transform .25s var(--ease)}\r
.acc-pm.sel .rad{border-color:var(--gold)}\r
.acc-pm.sel .rad i{transform:scale(1)}\r
.acc-pm .body{max-height:0;opacity:0;overflow:hidden;transition:max-height .4s var(--ease),opacity .3s}\r
.acc-pm.sel .body.has{max-height:300px;opacity:1}\r
.acc-pm .body .in{padding:0 17px 17px}\r
.pay-collapse{overflow:hidden;transition:max-height .5s var(--ease),opacity .4s;max-height:900px;opacity:1}\r
.pay-collapse.hid{max-height:0;opacity:0}\r
.collapse-hint{display:none;align-items:center;justify-content:center;gap:8px;font-size:12px;color:var(--gold-deep);\r
  padding:11px;border:1.5px dashed var(--line);border-radius:12px;cursor:pointer;margin-bottom:14px;background:#FFFDF6}\r
.collapse-hint.on{display:flex}\r
.terms-chk{display:flex;gap:10px;align-items:center;font-size:12.5px;color:var(--mute);margin-top:16px;cursor:pointer}\r
.terms-chk i{width:20px;height:20px;border-radius:6px;border:1.5px solid var(--line);display:grid;place-items:center;\r
  color:var(--ink);transition:all .25s;flex:none}\r
.terms-chk.on i{background:linear-gradient(135deg,var(--gold-bright),var(--gold));border-color:transparent}\r
.terms-chk a{color:var(--gold-deep);font-weight:600;text-decoration:underline}\r
/* النجاح */\r
.gs-hero{position:relative;width:120px;height:110px;margin:0 auto 16px}\r
.gs-hero .circ{position:absolute;top:0;right:calc(50% - 34px);width:68px;height:68px;border-radius:50%;\r
  background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);display:grid;place-items:center;\r
  box-shadow:0 16px 32px -12px rgba(143,113,52,.6);animation:sucPop .6s var(--ease) both .1s;z-index:2}\r
.gs-hero .circ svg{stroke-dasharray:60;stroke-dashoffset:60;animation:dash .7s var(--ease) forwards .45s}\r
.gs-hero .gbox{position:absolute;bottom:0;left:calc(50% - 46px);width:52px;height:44px;border-radius:10px;\r
  background:linear-gradient(150deg,#241d10,#0f0c06);border:1px solid rgba(143,113,52,.5);\r
  animation:giftFloat 5s ease-in-out infinite}\r
.gs-hero .gbox::before{content:"";position:absolute;inset-block:0;right:calc(50% - 5px);width:10px;\r
  background:linear-gradient(180deg,var(--gold-bright),var(--gold-deep))}\r
.gs-hero .spark{position:absolute;color:var(--gold);animation:sparkle 2.6s ease-in-out infinite;font-size:13px}\r
@keyframes sparkle{0%,100%{opacity:.3;transform:scale(.8) rotate(0)}50%{opacity:1;transform:scale(1.1) rotate(20deg)}}\r
.gsuc-box{background:#fff;border:1px solid var(--line);border-radius:20px;padding:24px;margin-top:22px;\r
  display:grid;grid-template-columns:220px 1fr;gap:24px;align-items:center;text-align:start}\r
.gsuc-box .mini-card{aspect-ratio:16/10;border-radius:14px;position:relative;display:grid;place-items:center;\r
  box-shadow:0 20px 38px -18px rgba(20,15,5,.5)}\r
.gsuc-box .mini-card .lg{font-family:var(--font-d);font-size:15px;letter-spacing:.1em;text-align:center}\r
.gsuc-box .mini-card .lg small{display:block;font-size:9px;letter-spacing:.04em;opacity:.8;margin-top:3px}\r
.gsuc-box h3{font-family:var(--font-d);font-size:19px;color:var(--ink);margin-bottom:6px}\r
.copy-ref{display:inline-flex;gap:7px;align-items:center;color:var(--gold-deep);cursor:pointer;font-weight:600}\r
.copy-ref:hover{text-decoration:underline}\r
@media(max-width:900px){\r
  .caro .gpkg{flex-basis:calc(50% - 7px)}\r
  .gsvcs{grid-template-columns:1fr 1fr}\r
  .gsuc-box{grid-template-columns:1fr;text-align:center}\r
  .gsuc-box .mini-card{max-width:240px;margin-inline:auto}\r
}\r
@media(max-width:640px){\r
  .caro .gpkg{flex-basis:86%}\r
  .gsvcs{grid-template-columns:1fr}\r
  .inline-actions .btn{min-width:0;flex:1}\r
  .modal .designs{grid-template-columns:1fr 1fr}\r
}\r
`,Pr="/images/gifts/service.jpg",Yr="/images/gifts/package.jpg",Nr={class:"gtype-grid"},Tr={class:"im"},Vr={class:"ic"},Gr={class:"bd"},Hr={class:"go"},Rr={class:"im"},Ur={class:"ic"},Or={class:"bd"},qr={class:"go"},rr={__name:"GiftTypeStep",emits:["pick"],setup(S,{emit:m}){const{state:o}=V(),E=m,w={chair:'<path d="M3 18v-6a2 2 0 012-2h14a2 2 0 012 2v6"/><path d="M5 18v2M19 18v2M7 10V7a2 2 0 012-2h6a2 2 0 012 2v3"/>',gift:'<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7s-2-5-5-5-3 5 0 5h5zM12 7s2-5 5-5 3 5 0 5h-5z"/>',arrow:'<path d="M19 12H5M11 18l-6-6 6-6"/>'};return(z,d)=>(a(),s($,null,[d[10]||(d[10]=r("div",{class:"g-head"},[r("h1",null,"ماذا ترغب بإهدائه؟"),r("p",null,"اختر ما يناسبك لإهداء تجربة مميزة لمن تحب")],-1)),r("div",Nr,[r("div",{class:A(["gtype",{sel:e(o).gtype==="svc"}]),"data-gt":"svc",onClick:d[0]||(d[0]=f=>E("pick","svc"))},[r("div",Tr,[d[2]||(d[2]=r("img",{src:Pr,alt:"إهداء خدمة"},null,-1)),r("span",Vr,[l(k,{inner:w.chair,size:20},null,8,["inner"])])]),r("div",Gr,[d[4]||(d[4]=r("h3",null,"إهداء خدمة",-1)),d[5]||(d[5]=r("p",null,[c("اختر خدمة واحدة أو أكثر"),r("br"),c("وأهدِها لمن تحب.")],-1)),r("span",Hr,[l(k,{inner:w.arrow,size:14},null,8,["inner"]),d[3]||(d[3]=c(" اختر خدمة لإهدائها",-1))])])],2),r("div",{class:A(["gtype",{sel:e(o).gtype==="pkg"}]),"data-gt":"pkg",onClick:d[1]||(d[1]=f=>E("pick","pkg"))},[r("div",Rr,[d[6]||(d[6]=r("img",{src:Yr,alt:"إهداء باقة"},null,-1)),r("span",Ur,[l(k,{inner:w.gift,size:20},null,8,["inner"])])]),r("div",Or,[d[8]||(d[8]=r("h3",null,"إهداء باقة",-1)),d[9]||(d[9]=r("p",null,[c("اختر باقة مصممة بعناية"),r("br"),c("لتمنح تجربة متكاملة لمن تحب.")],-1)),r("span",qr,[l(k,{inner:w.arrow,size:14},null,8,["inner"]),d[7]||(d[7]=c(" اختر باقة لإهدائها",-1))])])],2)])],64))}},Xr={key:0,class:"empty-hint",style:{display:"grid",gap:"10px"}},Wr={class:"cat-row"},Kr=["data-cat","onClick"],Jr=["src","alt"],Zr={class:"chk"},Qr={class:"lbl"},rn={key:0,class:"empty-hint"},nn={key:1,class:"sub-block"},en={class:"sub-title"},tn={class:"sub-title__main"},on={class:"tick"},an=["innerHTML"],sn={key:0,class:"empty-hint"},ln={key:1,class:"subs"},pn=["data-sv","onClick"],dn={class:"top"},gn={class:"chk"},cn={class:"foot"},xn={class:"dur"},fn={class:"prc"},bn={class:"inline-actions"},mn=["disabled"],un={class:"gp-sort"},vn={key:0,class:"empty-hint"},hn={key:1,class:"caro-wrap"},kn={class:"caro",id:"caro"},yn=["data-gp","onClick"],wn={class:"ph"},zn=["src","alt"],_n={key:0,class:"hotflag"},$n={class:"chk"},Fn={class:"bd"},Cn={class:"dur"},Mn={class:"desc"},En={class:"inc-box"},jn={class:"prc"},Bn={class:"pick"},Ln={class:"inline-actions"},An=["disabled"],In={__name:"GiftPickStep",emits:["nav"],setup(S,{emit:m}){const{state:o,hasSvc:E,toggleSvc:w}=V(),{filteredPkgs:z}=Er(),d=m,{state:f}=mr(),t=h=>ur(h,f.lang),u=h=>h.toLocaleString("ar-EG-u-nu-latn"),F={check:'<path d="M20 6L9 17l-5-5"/>',prev:'<path d="M5 12h14M13 6l6 6-6 6"/>',next:'<path d="M19 12H5M11 18l-6-6 6-6"/>',chevR:'<path d="M9 6l6 6-6 6"/>',chevL:'<path d="M15 6l-6 6 6 6"/>'},v=T([]),y=T(!0);gr(async()=>{try{const h=await cr();v.value=h!=null&&h.status?h.data||[]:[]}catch{v.value=[]}finally{y.value=!1}});const L=C(()=>v.value.map(h=>({id:h.id,name:O(h,"name",f.lang),image:xr(h.image)||h.feature_image||null}))),_=C(()=>v.value.find(h=>h.id===o.activeCat)||null),g=C(()=>O(_.value,"name",f.lang)),M=C(()=>{var h;return(((h=_.value)==null?void 0:h.services)||[]).map(n=>({id:n.id,categoryId:_.value.id,categoryNameT:fr(_.value,"name"),get categoryName(){return t(this.categoryNameT)},get name(){return O(n,"name",f.lang)},get desc(){return O(n,"description",f.lang)},dur:n.duration_min,price:n.default_price}))}),x=h=>o.svcs.some(n=>n.categoryId===h),D=C(()=>M.value.filter(h=>E(h.id)).length),N=C(()=>z.value.slice().sort((h,n)=>o.sort==="low"?h.price-n.price:o.sort==="high"?n.price-h.price:(n.hot?1:0)-(h.hot?1:0)));function P(h){const n=document.getElementById("caro");n&&n.scrollBy({left:h*300,behavior:"smooth"})}return(h,n)=>e(o).gtype==="svc"?(a(),s($,{key:0},[n[11]||(n[11]=r("div",{class:"g-head"},[r("h1",null,"اختر الخدمة التي ترغب بإهدائها"),r("p",null,"يمكنك اختيار خدمة واحدة أو أكثر")],-1)),y.value?(a(),s("div",Xr,[l(Q,{height:"64px","border-radius":"12px"}),l(Q,{height:"92px","border-radius":"12px"})])):(a(),s($,{key:1},[r("div",Wr,[(a(!0),s($,null,Y(L.value,p=>(a(),s("div",{key:p.id,class:A(["cat",{sel:e(o).activeCat===p.id,"has-picks":x(p.id)}]),"data-cat":p.id,onClick:j=>e(o).activeCat=p.id},[p.image?(a(),s("img",{key:0,src:p.image,alt:p.name,loading:"lazy"},null,8,Jr)):B("",!0),r("span",Zr,[l(k,{inner:F.check,size:11},null,8,["inner"])]),r("span",Qr,b(p.name),1)],10,Kr))),128))]),e(o).activeCat?(a(),s("div",nn,[r("div",en,[r("span",tn,[c(" خدمات "+b(g.value)+" ",1),r("span",on,[(a(),s("svg",{viewBox:"0 0 24 24","aria-hidden":"true",innerHTML:e(Mr)()},null,8,an))])]),r("small",null,b(D.value?D.value+" مختارة":"اختر خدمة أو أكثر"),1)]),M.value.length?(a(),s("div",ln,[(a(!0),s($,null,Y(M.value,p=>(a(),s("div",{key:p.id,class:A(["sub",{sel:e(E)(p.id)}]),"data-sv":p.id,onClick:j=>e(w)(p)},[r("div",dn,[r("b",null,b(p.name),1),r("span",gn,[l(k,{inner:F.check,size:12},null,8,["inner"])])]),r("small",null,b(p.desc),1),r("div",cn,[r("span",xn,"🕐 "+b(p.dur)+" دقيقة",1),r("span",fn,[c(b(u(p.price))+" ",1),n[8]||(n[8]=r("small",null,"ر.س",-1))])])],10,pn))),128))])):(a(),s("div",sn,"لا توجد خدمات متاحة حاليًا ضمن هذا القسم"))])):(a(),s("div",rn,[...n[7]||(n[7]=[r("b",null,"اختر خدمة لعرض تفاصيلها",-1),c("اختر إحدى الخدمات الأساسية أعلاه لعرض الخدمات الفرعية المتاحة",-1)])]))],64)),r("div",bn,[r("button",{class:"btn btn-prev","data-nav":"back",onClick:n[0]||(n[0]=p=>d("nav",-1))},[l(k,{inner:F.prev,size:15},null,8,["inner"]),n[9]||(n[9]=c(" رجوع",-1))]),r("button",{class:"btn btn-gold","data-nav":"next",disabled:!e(o).svcs.length,onClick:n[1]||(n[1]=p=>d("nav",1))},[n[10]||(n[10]=c("التالي: تخصيص الهدية ",-1)),l(k,{inner:F.next,size:15},null,8,["inner"])],8,mn)])],64)):(a(),s($,{key:1},[n[17]||(n[17]=r("div",{class:"g-head"},[r("h1",null,"اختر الباقة التي ترغب بإهدائها"),r("p",null,"باقات مميزة تمنح تجربة متكاملة من الاسترخاء والعناية")],-1)),r("div",un,[G(r("select",{id:"gpSort","onUpdate:modelValue":n[2]||(n[2]=p=>e(o).sort=p)},[...n[12]||(n[12]=[r("option",{value:"pop"},"الأكثر طلبًا",-1),r("option",{value:"low"},"السعر: الأقل أولًا",-1),r("option",{value:"high"},"السعر: الأعلى أولًا",-1)])],512),[[br,e(o).sort]]),r("small",null,b(N.value.length)+" باقات متاحة — مرّر لاستعراض المزيد",1)]),N.value.length?(a(),s("div",hn,[r("button",{class:"caro-btn r","data-caro":"1",onClick:n[3]||(n[3]=p=>P(1))},[l(k,{inner:F.chevR,size:15},null,8,["inner"])]),r("button",{class:"caro-btn l","data-caro":"-1",onClick:n[4]||(n[4]=p=>P(-1))},[l(k,{inner:F.chevL,size:15},null,8,["inner"])]),r("div",kn,[(a(!0),s($,null,Y(N.value,(p,j)=>{var U,W;return a(),s("div",{key:p.id,class:A(["gpkg",{sel:((U=e(o).pkg)==null?void 0:U.id)===p.id}]),"data-gp":p.id,style:tr(`--pc:${p.hex};animation-delay:${j*.05}s`),onClick:K=>e(o).pkg=p},[r("div",wn,[r("img",{src:p.img,alt:p.name},null,8,zn),p.hot?(a(),s("span",_n,"الأكثر طلبًا")):B("",!0),l(Cr,{class:"fav",type:"package",id:p.id},null,8,["id"]),r("span",$n,[l(k,{inner:F.check,size:13},null,8,["inner"])])]),r("div",Fn,[r("h4",null,b(p.name),1),r("div",Cn,"🕐 "+b(p.dur)+" دقيقة",1),r("div",Mn,b(p.desc),1),r("div",En,[n[13]||(n[13]=r("b",{class:"inc-title"},"تشمل الباقة",-1)),(a(!0),s($,null,Y(p.inc,(K,pr)=>(a(),s("div",{key:pr,style:{padding:"2px 0"}},"✓ "+b(K),1))),128))]),r("div",jn,[c(b(e(jr)(p.price))+" ",1),n[14]||(n[14]=r("small",null,"ر.س",-1))]),r("button",Bn,b(((W=e(o).pkg)==null?void 0:W.id)===p.id?"تم الاختيار ✓":"استعرض الباقة"),1)])],14,yn)}),128))])])):(a(),s("div",vn,"لا توجد باقات متاحة حاليًا")),r("div",Ln,[r("button",{class:"btn btn-prev","data-nav":"back",onClick:n[5]||(n[5]=p=>d("nav",-1))},[l(k,{inner:F.prev,size:15},null,8,["inner"]),n[15]||(n[15]=c(" رجوع",-1))]),r("button",{class:"btn btn-gold","data-nav":"next",disabled:!e(o).pkg,onClick:n[6]||(n[6]=p=>d("nav",1))},[n[16]||(n[16]=c("التالي: تخصيص الهدية ",-1)),l(k,{inner:F.next,size:15},null,8,["inner"])],8,An)])],64))}},Sn=er(In,[["__scopeId","data-v-1ce87454"]]),Dn={class:"custom-grid"},Pn={class:"preview-col"},Yn={id:"cardPrev"},Nn={class:"form-col"},Tn={class:"card",style:{"margin-bottom":"14px"}},Vn={class:"two"},Gn={class:"fld"},Hn={class:"fld"},Rn={class:"two"},Un={class:"fld",style:{"margin-bottom":"4px"}},On={class:"fld",style:{"margin-bottom":"4px"}},qn={class:"card",style:{"margin-bottom":"14px"}},Xn={class:"designs"},Wn=["data-d","onClick"],Kn={class:"dchk"},Jn={style:{visibility:"hidden"},"aria-hidden":"true"},Zn={class:"card"},Qn={class:"methods"},re=["data-m","onClick"],ne={class:"mi"},ee={class:"send-opts",style:{"margin-top":"16px","margin-bottom":"0"}},te={class:"fld",style:{margin:"0"}},oe={class:"inline-actions"},ae=["disabled"],ie={__name:"GiftCustomizeStep",emits:["nav"],setup(S,{emit:m}){const{state:o,canNext:E}=V(),w=m,z=C(()=>200-o.msg.length),d={eye:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',user:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',brush:'<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.6 7.6"/><circle cx="11" cy="11" r="2"/>',send:'<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>',check:'<path d="M20 6L9 17l-5-5"/>',prev:'<path d="M5 12h14M13 6l6 6-6 6"/>',next:'<path d="M19 12H5M11 18l-6-6 6-6"/>'};return(f,t)=>(a(),s($,null,[t[23]||(t[23]=r("div",{class:"g-head"},[r("h1",null,"خصص هديتك لتكون أجمل 🤍"),r("p",null,"أضف لمستك الخاصة مع رسالة وتصميم بطاقة الإهداء")],-1)),r("div",Dn,[r("div",Pn,[r("h4",null,[l(k,{inner:d.eye,size:16},null,8,["inner"]),t[9]||(t[9]=c(" معاينة بطاقة الإهداء",-1))]),r("div",Yn,[l(lr,{design:e(o).design,recipient:e(o).name,sender:e(o).sender,message:e(o).msg},null,8,["design","recipient","sender","message"])])]),r("div",Nn,[r("div",Tn,[r("h4",null,[l(k,{inner:d.user,size:16},null,8,["inner"]),t[10]||(t[10]=c(" بيانات الإهداء",-1))]),r("div",Vn,[r("div",Gn,[t[11]||(t[11]=r("label",null,"اسم المُهدي (أنت)",-1)),G(r("input",{id:"gSender",placeholder:"اسمك","onUpdate:modelValue":t[0]||(t[0]=u=>e(o).sender=u)},null,512),[[R,e(o).sender]])]),r("div",Hn,[t[12]||(t[12]=r("label",null,"اسم المهدى إليه",-1)),G(r("input",{id:"gName",placeholder:"أدخل الاسم","onUpdate:modelValue":t[1]||(t[1]=u=>e(o).name=u)},null,512),[[R,e(o).name]])])]),r("div",Rn,[r("div",Un,[t[13]||(t[13]=r("label",null,"رقم جوال المستلم",-1)),G(r("input",{id:"gPhone",dir:"ltr",placeholder:"05xxxxxxxx","onUpdate:modelValue":t[2]||(t[2]=u=>e(o).phone=u)},null,512),[[R,e(o).phone]])])]),r("div",On,[t[14]||(t[14]=r("label",null,"الرسالة الشخصية",-1)),G(r("textarea",{id:"gMsg",maxlength:"200",placeholder:"اكتب رسالتك الخاصة هنا...","onUpdate:modelValue":t[3]||(t[3]=u=>e(o).msg=u)},null,512),[[R,e(o).msg]]),r("span",{class:A(["cnt",{max:z.value<20}]),id:"gCnt"},b(e(o).msg.length)+"/200",3)])]),r("div",qn,[r("h4",null,[l(k,{inner:d.brush,size:16},null,8,["inner"]),t[15]||(t[15]=c(" تصميم بطاقة الإهداء",-1))]),r("div",Xn,[(a(!0),s($,null,Y(e(sr),u=>(a(),s("div",{key:u.id,class:A(["design",{sel:e(o).design===u.id}]),"data-d":u.id,onClick:F=>e(o).design=u.id},[r("div",{class:"sw",style:tr(`background:${u.bg};color:${u.fg}`)},[r("span",Kn,[l(k,{inner:d.check,size:10},null,8,["inner"])]),t[16]||(t[16]=c("SAMI",-1))],4),r("small",Jn,b(u.n),1)],10,Wn))),128))])]),r("div",Zn,[r("h4",null,[l(k,{inner:d.send,size:16},null,8,["inner"]),t[17]||(t[17]=c(" طريقة وتوقيت الإرسال",-1))]),r("div",Qn,[(a(!0),s($,null,Y(e(X),u=>(a(),s("div",{key:u.id,class:A(["mth",{sel:e(o).method===u.id}]),"data-m":u.id,onClick:F=>e(o).method=u.id},[r("span",ne,[l(k,{inner:u.ic,size:17},null,8,["inner"])]),c(b(u.n),1)],10,re))),128))]),r("div",ee,[r("span",{class:A(["ro",{on:e(o).when==="now"}]),"data-w":"now",onClick:t[4]||(t[4]=u=>e(o).when="now")},[...t[18]||(t[18]=[r("i",null,null,-1),c(" 🚀 إرسال الآن — سيتم إرسال الهدية فورًا",-1)])],2),r("span",{class:A(["ro",{on:e(o).when==="later"}]),"data-w":"later",onClick:t[5]||(t[5]=u=>e(o).when="later")},[...t[19]||(t[19]=[r("i",null,null,-1),c(" 📅 جدولة لاحقًا",-1)])],2)]),r("div",{class:A(["sched-box",{open:e(o).when==="later"}])},[r("div",te,[t[20]||(t[20]=r("label",null,"اختر التاريخ والوقت المناسب",-1)),G(r("input",{type:"datetime-local",id:"gSched","onUpdate:modelValue":t[6]||(t[6]=u=>e(o).schedDate=u)},null,512),[[R,e(o).schedDate]])])],2)]),r("div",oe,[r("button",{class:"btn btn-prev","data-nav":"back",onClick:t[7]||(t[7]=u=>w("nav",-1))},[l(k,{inner:d.prev,size:15},null,8,["inner"]),t[21]||(t[21]=c(" رجوع",-1))]),r("button",{class:"btn btn-gold","data-nav":"next",disabled:!e(E),onClick:t[8]||(t[8]=u=>w("nav",1))},[t[22]||(t[22]=c("متابعة إلى الدفع ",-1)),l(k,{inner:d.next,size:15},null,8,["inner"])],8,ae)])])])],64))}},se={class:"card",style:{padding:"22px"}},le={class:"inline-actions"},pe=["disabled"],de={__name:"GiftPayStep",emits:["nav","pay"],setup(S,{emit:m}){const{state:o,canNext:E,priceParts:w}=V(),z=m,d={check:'<path d="M20 6L9 17l-5-5"/>',prev:'<path d="M5 12h14M13 6l6 6-6 6"/>',lock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>'};return(f,t)=>{const u=or("RouterLink");return a(),s($,null,[t[12]||(t[12]=r("div",{class:"g-head"},[r("h1",null,"الدفع"),r("p",null,"اختر طريقة الدفع المناسبة وأكمل إهداءك")],-1)),r("div",se,[l(Br,{state:e(o),total:e(w).total},null,8,["state","total"]),r("span",{class:A(["terms-chk",{on:e(o).terms}]),id:"termsChk",onClick:t[2]||(t[2]=F=>e(o).terms=!e(o).terms)},[r("i",null,[l(k,{inner:d.check,size:11},null,8,["inner"])]),t[7]||(t[7]=c(" أوافق على ",-1)),l(u,{to:"/terms",onClick:t[0]||(t[0]=J(()=>{},["stop"]))},{default:I(()=>[...t[5]||(t[5]=[c("الشروط والأحكام",-1)])]),_:1}),t[8]||(t[8]=c(" و",-1)),l(u,{to:"/privacy-policy",onClick:t[1]||(t[1]=J(()=>{},["stop"]))},{default:I(()=>[...t[6]||(t[6]=[c("سياسة الخصوصية",-1)])]),_:1})],2),r("div",le,[r("button",{class:"btn btn-prev","data-nav":"back",onClick:t[3]||(t[3]=F=>z("nav",-1))},[l(k,{inner:d.prev,size:15},null,8,["inner"]),t[9]||(t[9]=c(" الرجوع",-1))]),r("button",{class:"btn btn-gold",id:"doPay",disabled:!e(E),onClick:t[4]||(t[4]=F=>z("pay"))},[l(k,{inner:d.lock,size:15},null,8,["inner"]),t[10]||(t[10]=c(" إتمام الإهداء",-1))],8,pe)]),t[11]||(t[11]=r("div",{class:"after-pay"},"سيتم إرسال الهدية مباشرة بعد إتمام الدفع",-1))])],64)}}},ge={class:"gsuccess",style:{"padding-top":"4px"}},ce={class:"gsuc-box"},xe={class:"gs-row"},fe={class:"k"},be={class:"v"},me={class:"gs-row"},ue={class:"k"},ve={class:"v"},he={class:"gs-row"},ke={class:"k"},ye={class:"v"},we={class:"gs-row"},ze={class:"k"},_e={class:"gsuc-actions"},$e={key:0,class:"gift-share-panel"},Fe={class:"gift-share-row"},Ce=["value"],Me={key:0},Ee={__name:"GiftSuccess",emits:["recipient","track","new-gift","share","home","copy-ref"],setup(S,{emit:m}){const{state:o,giftLabel:E}=V(),w=m,z=T(!1),d=T(!1),f=["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],t=new Date,u=C(()=>{const M=X.find(x=>x.id===o.method);return M?M.n:""}),F=C(()=>o.when==="now"?`اليوم ${t.getDate()} ${f[t.getMonth()]} ${t.getFullYear()}`:"مجدولة — "+(o.schedDate||"")),v=C(()=>o.claimToken?new URL(`/gift-recipient?token=${encodeURIComponent(o.claimToken)}`,window.location.origin).href:o.claimUrl||"");function y(){if(!v.value)return;const M=String(o.phone||"").replace(/\D/g,""),x=encodeURIComponent(`لديك هدية من عناية سامي ✨
${v.value}`);window.open(`https://wa.me/${M}?text=${x}`,"_blank","noopener")}function L(){z.value=!0,d.value=!1,v.value&&window.open(v.value,"_blank","noopener,noreferrer")}async function _(){try{if(navigator&&navigator.clipboard)await navigator.clipboard.writeText(v.value);else{const M=document.getElementById("gift-share-link");M&&(M.focus(),M.select(),document.execCommand("copy"))}d.value=!0,setTimeout(()=>{d.value=!1},2200)}catch{alert("تعذّر نسخ الرابط، يمكنك نسخه يدويًا من الحقل أدناه.")}}const g={user:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',send:'<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',copy:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>',plus:'<path d="M12 5v14M5 12h14"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>',home:'<path d="M3 9l9-6 9 6v11a1 1 0 01-1 1H4a1 1 0 01-1-1z"/>'};return(M,x)=>(a(),s("div",ge,[x[12]||(x[12]=q('<div class="gs-hero" data-v-f969ab4c><span class="spark" style="top:0;right:8px;" data-v-f969ab4c>✦</span><span class="spark" style="bottom:14px;left:2px;animation-delay:-1.2s;" data-v-f969ab4c>✧</span><span class="circ" data-v-f969ab4c><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" data-v-f969ab4c><path d="M20 6L9 17l-5-5" data-v-f969ab4c></path></svg></span><span class="gbox" data-v-f969ab4c></span></div><h1 data-v-f969ab4c>تم إرسال الهدية بنجاح</h1><p class="sub" data-v-f969ab4c>تم تجهيز هديتك وإرسالها للمستلم بنجاح، وسيتم إشعاره فور استلامها ✨</p>',3)),r("div",ce,[l(lr,{design:e(o).design,recipient:e(o).name,sender:e(o).sender,message:e(o).msg},null,8,["design","recipient","sender","message"]),r("div",null,[r("h3",null,"إهداء "+b(e(E)),1),r("div",xe,[r("span",fe,[l(k,{inner:g.user,size:14},null,8,["inner"]),x[4]||(x[4]=c(" إلى",-1))]),r("span",be,b(e(o).name),1)]),r("div",me,[r("span",ue,[l(k,{inner:g.send,size:14},null,8,["inner"]),x[5]||(x[5]=c(" طريقة الإرسال",-1))]),r("span",ve,b(u.value),1)]),r("div",he,[r("span",ke,[l(k,{inner:g.clock,size:14},null,8,["inner"]),x[6]||(x[6]=c(" وقت الإرسال",-1))]),r("span",ye,b(F.value),1)]),r("div",we,[r("span",ze,[l(k,{inner:g.copy,size:14},null,8,["inner"]),x[7]||(x[7]=c(" رقم الطلب",-1))]),r("span",{class:"v copy-ref",id:"copyRef",dir:"ltr",onClick:x[0]||(x[0]=D=>w("copy-ref"))},b(e(o).ref)+" ⧉",1)])])]),r("div",_e,[r("button",{class:"btn btn-line",id:"newGift",onClick:x[1]||(x[1]=D=>w("new-gift"))},[l(k,{inner:g.plus,size:15},null,8,["inner"]),x[8]||(x[8]=c(" إهداء جديد",-1))]),r("button",{class:"btn btn-line",id:"shareGift",onClick:x[2]||(x[2]=D=>{L(),w("share")})},[l(k,{inner:g.share,size:15},null,8,["inner"]),x[9]||(x[9]=c(" مشاركة الهدية ",-1))]),r("button",{class:"btn btn-line",id:"goHome",onClick:x[3]||(x[3]=D=>w("home"))},[l(k,{inner:g.home,size:15},null,8,["inner"]),x[10]||(x[10]=c(" العودة للرئيسية",-1))])]),z.value?(a(),s("div",$e,[x[11]||(x[11]=r("label",null,"رابط الهدية",-1)),r("div",Fe,[r("input",{id:"gift-share-link",type:"text",value:v.value,readonly:""},null,8,Ce),e(o).method==="wa"?(a(),s("button",{key:0,class:"btn btn-gold",onClick:y},"إرسال عبر واتساب")):B("",!0),r("button",{class:"btn btn-gold",onClick:_},"نسخ الرابط")]),d.value?(a(),s("small",Me,"تم نسخ الرابط بنجاح")):B("",!0)])):B("",!0),x[13]||(x[13]=r("div",{class:"thanks"},[r("i",null,"❦"),c(" شكرًا لاختيارك عناية سامي لتقديم تجربة مميزة لمن تحب "),r("i",null,"❦")],-1))]))}},je=er(Ee,[["__scopeId","data-v-f969ab4c"]]),Be={class:"gsum"},Le={class:"card"},Ae={key:0,class:"pkline"},Ie=["src"],Se={key:1},De={class:"pr"},Pe={key:1,style:{"text-align":"center","margin-bottom":"14px"}},Ye={style:{position:"absolute",top:"-5px",right:"14px",width:"46px",opacity:".9"},viewBox:"0 0 64 40",fill:"none",stroke:"currentColor","stroke-width":"2"},Ne={style:{display:"block","font-family":"var(--font-d)",color:"var(--ink)","font-size":"14.5px"}},Te={style:{display:"block",color:"var(--ink)","font-size":"12px","font-weight":"700","margin-top":"8px"}},Ve={style:{display:"block",color:"var(--mute)","font-size":"11.5px","margin-top":"4px","line-height":"1.7"}},Ge={key:2,class:"gs-row"},He={class:"v"},Re={class:"gs-row"},Ue={class:"v"},Oe={class:"gs-row"},qe={class:"v"},Xe={class:"gs-row"},We={class:"v"},Ke={class:"gs-row"},Je={class:"v"},Ze={class:"chip"},Qe={class:"gs-row"},rt={class:"v"},nt={class:"sum-like",style:{"margin-top":"10px","padding-top":"12px","border-top":"1px dashed var(--line)"}},et={class:"v"},tt={class:"v"},ot={class:"gs-total"},at={class:"v"},it={class:"gs-note"},st={key:0,class:"card help-card"},lt={class:"hi"},pt="background:linear-gradient(150deg,#1D1810,#0B0906);color:#E8BE6C;max-width:190px;margin:0 auto 12px;aspect-ratio:16/10;border-radius:14px;display:grid;place-items:center;box-shadow:0 16px 30px -16px rgba(20,15,5,.5);position:relative",nr="border:none;padding:4px 0",dt={__name:"GiftSummary",setup(S){const{state:m,priceParts:o,giftLabel:E,dsgOf:w}=V(),{current:z}=ar(),d=_=>_.toLocaleString("ar-EG-u-nu-latn"),f=C(()=>o.value),t=C(()=>E.value);C(()=>w(m.design));const u=C(()=>m.gtype==="svc"?null:m.pkg?m.pkg.img:null),F=C(()=>{const _=X.find(g=>g.id===m.method);return _?_.n:""}),v=C(()=>{const _=[...wr,...zr,..._r].find(g=>g.id===m.pay);return _?_.n:""}),y=C(()=>z.value?"اختر "+(m.gtype==="svc"?"الخدمة":"الباقة")+" المناسبة لإهدائها لمن تحب":"حدد مكان تنفيذ الخدمة أولًا لعرض "+(m.gtype==="svc"?"الخدمات":"الباقات")+" والأسعار"),L={lock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>',head:'<path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>'};return(_,g)=>(a(),s("div",Be,[r("div",Le,[g[14]||(g[14]=r("h3",null,"ملخص الهدية",-1)),t.value&&(u.value||e(m).gtype==="svc")?(a(),s("div",Ae,[u.value?(a(),s("img",{key:0,src:u.value,alt:""},null,8,Ie)):B("",!0),r("span",null,[r("b",null,b(t.value),1),e(m).gtype==="pkg"&&e(m).pkg?(a(),s($,{key:0},[r("small",null,"🕐 "+b(e(m).pkg.dur)+" دقيقة",1),r("small",null,b(e(m).pkg.desc),1)],64)):(a(),s("small",Se,b(e(m).svcs.length)+" "+b(e(m).svcs.length>2?"خدمات":"خدمة")+" مختارة",1)),r("span",De,b(d(f.value.val))+" ر.س",1)])])):(a(),s("div",Pe,[r("div",{class:"mini-card",style:pt},[(a(),s("svg",Ye,[...g[0]||(g[0]=[r("path",{d:"M32 30C18 30 10 24 12 15s16-5 20 8c4-13 18-17 20-8s-6 15-20 15z"},null,-1)])])),g[1]||(g[1]=r("span",{style:{"font-family":"var(--font-d)","font-size":"14px","letter-spacing":".1em","text-align":"center"}},[r("img",{src:ir,style:{height:"24px","vertical-align":"middle"},alt:""}),r("br"),c("SAMI"),r("small",{style:{display:"block","font-size":"8.5px","letter-spacing":".04em",opacity:".8","margin-top":"2px"}},"عناية سامي")],-1))]),r("b",Ne,b(e(m).gtype==="svc"?"إهداء خدمة":"إهداء باقة"),1),r("small",Te,b(e(m).gtype==="svc"?"لم يتم اختيار خدمة بعد":"لم يتم اختيار باقة بعد"),1),r("small",Ve,b(y.value),1)])),e(z)?(a(),s("div",Ge,[g[2]||(g[2]=r("span",{class:"k"},"📍 الفرع المختار",-1)),r("span",He,b(e(z).name),1)])):B("",!0),e(m).step>=2?(a(),s($,{key:3},[r("div",Re,[g[3]||(g[3]=r("span",{class:"k"},"💬 الرسالة",-1)),r("span",Ue,b(e(m).msg?"مخصصة":"—"),1)]),r("div",Oe,[g[4]||(g[4]=r("span",{class:"k"},"📤 طريقة الإرسال",-1)),r("span",qe,b(F.value),1)]),r("div",Xe,[g[5]||(g[5]=r("span",{class:"k"},"👤 المهدى إليه",-1)),r("span",We,b(e(m).name||"—"),1)]),r("div",Ke,[g[6]||(g[6]=r("span",{class:"k"},"🕐 وقت الإرسال",-1)),r("span",Je,[r("span",Ze,b(e(m).when==="now"?"إرسال الآن":"مجدول"),1)])])],64)):B("",!0),e(m).done?(a(),s($,{key:4},[r("div",Qe,[g[7]||(g[7]=r("span",{class:"k"},"💳 طريقة الدفع",-1)),r("span",rt,b(v.value),1)]),g[8]||(g[8]=r("div",{class:"gs-row"},[r("span",{class:"k"},"✅ حالة الدفع"),r("span",{class:"v"},[r("span",{class:"chip"},"مكتمل")])],-1))],64)):B("",!0),f.value.val?(a(),s($,{key:5},[r("div",nt,[r("div",{class:"gs-row",style:nr},[g[9]||(g[9]=r("span",{class:"k"},"قيمة الهدية",-1)),r("span",et,b(d(f.value.val))+" ر.س",1)]),r("div",{class:"gs-row",style:nr},[g[10]||(g[10]=r("span",{class:"k"},"ضريبة القيمة المضافة (15%)",-1)),r("span",tt,"+"+b(d(f.value.vat))+" ر.س",1)])]),r("div",ot,[g[12]||(g[12]=r("span",{class:"k"},"الإجمالي",-1)),r("span",at,[c(b(d(f.value.total))+" ",1),g[11]||(g[11]=r("small",{style:{"font-size":"13px"}},"ر.س",-1))])])],64)):B("",!0),r("div",it,[l(k,{inner:L.lock,size:14},null,8,["inner"]),g[13]||(g[13]=c(" الدفع آمن ومشفّر — نستخدم أحدث تقنيات التشفير لحماية بياناتك",-1))])]),e(m).step<=1&&!e(m).done?(a(),s("div",st,[r("span",lt,[l(k,{inner:L.head,size:18},null,8,["inner"])]),g[15]||(g[15]=r("b",null,"تحتاج مساعدة؟",-1)),g[16]||(g[16]=r("small",null,"فريقنا جاهز لمساعدتك في الاختيار",-1)),g[17]||(g[17]=r("a",{href:"https://wa.me/963959415545"},"تواصل معنا",-1))])):B("",!0)]))}},gt={class:"g-stepper"},ct={class:"g-steps"},xt=["data-i"],ft={class:"bubble"},bt={class:"step-count"},mt='<path d="M20 6L9 17l-5-5"/>',ut={__name:"GiftStepper",setup(S){const{state:m}=V();return(o,E)=>(a(),s("div",gt,[r("div",ct,[(a(!0),s($,null,Y(e($r),(w,z)=>(a(),s("div",{key:z,class:A(["g-step",{active:z===e(m).step&&!e(m).done,done:z<e(m).step||e(m).done}]),"data-i":z},[E[0]||(E[0]=r("div",{class:"bar"},[r("i")],-1)),r("span",ft,[z<e(m).step||e(m).done?(a(),H(k,{key:0,inner:mt,size:16})):(a(),s($,{key:1},[c(b(z+1),1)],64))]),r("b",null,b(w.t),1),r("small",null,b(w.s),1)],10,xt))),128))]),r("div",bt,"الخطوة "+b(Math.min(e(m).step+1,5))+" من 5",1)]))}},vt={class:"shell"},ht={class:"wrap",id:"giftsApp"},kt={key:0,class:"gifts-hero"},yt={class:"gifts-hero__copy"},wt={class:"gifts-hero__ic"},zt={class:"view on gift-type-full"},_t={class:"container why-gift-row"},$t={class:"wg-row"},Ft={class:"wi"},Ct={class:"container"},Mt={class:"help-bar"},Et={class:"hi"},jt={key:2,class:"gift-stepper-compact"},Bt={class:"view on"},Lt={key:0,class:"gift-location-note"},At={key:0,id:"gsumWrap"},It={class:"wrap"},St={class:"f-grid"},Dt={class:"f-brand"},Pt={class:"f-links"},Yt={class:"f-links"},Jt={__name:"GiftsView",setup(S){const m=T(null),{current:o,openPicker:E,locations:w,loadServiceLocations:z}=ar();z();const{requireAuth:d}=vr(),{state:f,go:t,reset:u,placeGift:F}=V();hr(Dr,"gifts"),kr(m);const v=T(!1),y=T(""),L=T(!1);function _(h){y.value=h,L.value=!0,clearTimeout(_._h),_._h=setTimeout(()=>{L.value=!1},2600)}const g=C(()=>!f.done&&f.step===0&&!f.gtype);function M(h){E(()=>{var p;f.gtype=h,f.pkg=null,f.svcs=[],f.activeCat=null,f.branch=((p=o.value)==null?void 0:p.id)||f.branch,f.step=1,scrollTo({top:0,behavior:"smooth"})})}function x(){d(async()=>{v.value=!0;try{await F(),scrollTo({top:0,behavior:"smooth"})}catch(h){_(h.message||"تعذّر إتمام الإهداء، حاول مرة أخرى")}finally{v.value=!1}})}function D(){return f.claimToken?new URL(`/gift-recipient?token=${encodeURIComponent(f.claimToken)}`,location.origin).href:f.claimUrl||new URL("/gift-recipient",location.origin).href}const N={gift:'<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7s-2-5-5-5-3 5 0 5h5zM12 7s2-5 5-5 3 5 0 5h-5z"/>',head:'<path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>'},P=[["هدية رقمية فورية","تصلك فورًا عبر البريد الإلكتروني أو الواتساب.",'<path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4z"/>'],["تجربة فاخرة","أجواء راقية وخدمات تليق بمن تحب.",'<path d="M12 3l1.9 5.2L19 10l-5.1 1.8L12 17l-1.9-5.2L5 10l5.1-1.8z"/><path d="M18 3v3M19.5 4.5h-3"/>'],["صالحة لمدة 6 أشهر","يستخدمها المستلم في الوقت الذي يناسبه.",'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>'],["آمنة وموثوقة","هدية إلكترونية آمنة تصلك فورًا.",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>']];return(h,n)=>{const p=or("RouterLink");return a(),s("div",{ref_key:"root",ref:m},[r("div",vt,[r("div",ht,[!e(f).done&&e(f).step===0?(a(),s("section",kt,[r("div",yt,[r("span",wt,[l(k,{inner:N.gift,size:30},null,8,["inner"])]),n[6]||(n[6]=r("h1",null,"فاجئ من تحب",-1)),n[7]||(n[7]=r("p",null,"أهدِ خدمة أو باقة من عناية سامي، وقدِّم تجربة استرخاء متكاملة تجمع بين العناية الفاخرة وأدق التفاصيل. لتكون هدية تترك انطباعًا لا يُنسى.",-1))]),n[8]||(n[8]=r("div",{class:"gifts-hero__img"},[r("img",{src:Ar,alt:"هدية عناية سامي"})],-1))])):B("",!0),g.value?(a(),s($,{key:1},[r("div",zt,[l(rr,{onPick:M})]),r("div",_t,[n[9]||(n[9]=r("div",{class:"section-title-sm"},[r("i"),r("h2",null,"لماذا تهدي من عناية سامي؟"),r("i")],-1)),r("div",$t,[(a(),s($,null,Y(P,(j,U)=>r("div",{key:U,class:"wg-col"},[r("span",Ft,[l(k,{inner:j[2],size:26},null,8,["inner"])]),r("b",null,b(j[0]),1),r("small",null,b(j[1]),1)])),64))])]),r("div",Ct,[r("div",Mt,[n[10]||(n[10]=r("div",{class:"help-bar__txt"},[r("b",null,"تحتاج مساعدة؟"),r("small",null,"فريقنا جاهز لمساعدتك في اختيار الهدية المناسبة.")],-1)),n[11]||(n[11]=r("a",{href:"https://wa.me/963959415545",class:"btn btn-line"},"تواصل معنا",-1)),r("span",Et,[l(k,{inner:N.head,size:22},null,8,["inner"])])])])],64)):B("",!0),e(f).gtype&&(e(f).step>0||e(f).done)?(a(),s("div",jt,[l(ut)])):B("",!0),g.value?B("",!0):(a(),s("div",{key:3,class:A(["g-stage",{"g-stage--pick":!e(f).done&&e(f).step===1}])},[r("main",Bt,[!e(f).done&&e(f).step>0?(a(),s("div",Lt,[l(Lr)])):B("",!0),e(f).done?(a(),H(je,{key:1,onRecipient:n[0]||(n[0]=j=>h.location.href=D()),onTrack:n[1]||(n[1]=j=>_("حالة الهدية: تم الإرسال — بانتظار فتح المستلم")),onNewGift:n[2]||(n[2]=j=>e(u)()),onShare:n[3]||(n[3]=j=>_("تم نسخ رابط الهدية للمشاركة")),onHome:n[4]||(n[4]=j=>h.$router.push("/")),onCopyRef:n[5]||(n[5]=j=>_("تم نسخ رقم الطلب"))})):e(f).step===0?(a(),H(rr,{key:2,onPick:M})):e(f).step===1?(a(),H(Sn,{key:3,onNav:e(t)},null,8,["onNav"])):e(f).step===2?(a(),H(ie,{key:4,onNav:e(t)},null,8,["onNav"])):e(f).step===3?(a(),H(de,{key:5,onNav:e(t),onPay:x},null,8,["onNav"])):B("",!0)]),e(f).done||e(f).step>=2?(a(),s("aside",At,[l(dt)])):B("",!0)],2))])]),r("footer",null,[r("div",It,[r("div",St,[r("div",Dt,[l(p,{class:"logo",to:"/"},{default:I(()=>[...n[12]||(n[12]=[r("span",{class:"mark"},[r("img",{src:ir,alt:"عناية سامي",style:{width:"29px",height:"29px","object-fit":"contain"}})],-1),r("span",{class:"name"},[r("b",null,"عناية سامي"),r("span",null,"SAMI CARE")],-1)])]),_:1}),n[13]||(n[13]=q('<p>مركز متخصص في العناية الرجالية المتكاملة بجدة، حيث تلتقي الفخامة بالاحترافية في كل تفصيلة.</p><div class="socials"><a href="https://x.com/samicare_sa" aria-label="X"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-6.8 7.8L23.3 22h-6.3l-4.9-6.4L6.5 22H3.4l7.3-8.3L1 2h6.5l4.4 5.8L18.9 2zm-1.1 18h1.7L7.1 3.9H5.3L17.8 20z"></path></svg></a><a href="https://www.instagram.com/samicare.sa/" aria-label="انستقرام"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1" fill="currentColor"></circle></svg></a><a href="https://www.facebook.com/samicare.sa" aria-label="فيسبوك"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg></a></div>',2))]),r("div",null,[n[19]||(n[19]=r("h4",null,"روابط مهمة",-1)),r("ul",Pt,[r("li",null,[l(p,{to:"/"},{default:I(()=>[...n[14]||(n[14]=[c("الرئيسية",-1)])]),_:1})]),r("li",null,[l(p,{to:"/booking"},{default:I(()=>[...n[15]||(n[15]=[c("حجز موعد",-1)])]),_:1})]),r("li",null,[l(p,{to:"/#services"},{default:I(()=>[...n[16]||(n[16]=[c("خدماتنا",-1)])]),_:1})]),r("li",null,[l(p,{to:"/packages-gifts"},{default:I(()=>[...n[17]||(n[17]=[c("الباقات",-1)])]),_:1})]),r("li",null,[l(p,{to:"/gifts"},{default:I(()=>[...n[18]||(n[18]=[c("الهدايا",-1)])]),_:1})])])]),r("div",null,[n[25]||(n[25]=r("h4",null,"استكشف",-1)),r("ul",Yt,[r("li",null,[l(p,{to:"/store"},{default:I(()=>[...n[20]||(n[20]=[c("المتجر",-1)])]),_:1})]),r("li",null,[l(p,{to:"/branches"},{default:I(()=>[...n[21]||(n[21]=[c("فروعنا",-1)])]),_:1})]),r("li",null,[l(p,{to:"/contact"},{default:I(()=>[...n[22]||(n[22]=[c("تواصل معنا",-1)])]),_:1})]),r("li",null,[l(p,{to:"/terms"},{default:I(()=>[...n[23]||(n[23]=[c("الشروط والأحكام",-1)])]),_:1})]),r("li",null,[l(p,{to:"/privacy-policy"},{default:I(()=>[...n[24]||(n[24]=[c("سياسة الخصوصية",-1)])]),_:1})])])]),r("div",null,[n[27]||(n[27]=r("h3",null,"عناوين الفروع",-1)),(a(!0),s($,null,Y(e(w),j=>(a(),s($,{key:j.id},[r("b",null,b(j.name),1),r("p",null,[c(b(j.address),1),j.contact_number?(a(),s($,{key:0},[n[26]||(n[26]=r("br",null,null,-1)),c(b(j.contact_number),1)],64)):B("",!0)])],64))),128))])]),n[28]||(n[28]=q('<div class="f-bottom"><small>© 2026 عناية سامي — جميع الحقوق محفوظة</small><div class="pay" aria-label="بوابات الدفع"><span title="Visa">VISA</span><span title="Mastercard">Mastercard</span><span title="مدى">mada</span><span title="Tabby">tabby</span><span title="Apple Pay">Pay</span></div></div>',1))])]),r("div",{class:A(["pay-loading",{on:v.value}]),id:"payLoading"},[...n[29]||(n[29]=[r("div",{class:"pl-box"},[r("div",{class:"pl-ring"}),r("b",null,"جارٍ إتمام الإهداء بأمان…"),r("small",null,"سيتم إرسال الهدية مباشرة بعد إتمام الدفع")],-1)])],2),r("div",{class:A(["toast",{on:L.value}]),id:"toast"},[r("span",null,b(y.value),1)],2)],512)}}};export{Jt as default};
