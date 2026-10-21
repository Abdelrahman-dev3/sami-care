import{d as F,X as Z,O as cr,o as a,c as l,b as r,n as B,e as n,f as g,$ as h,a as x,F as C,_ as J,g as G,v as xr,L as fr,j as br,l as q,M as mr,r as Y,s as j,t as b,J as U,S as ur,y as or,u as vr,N as hr,U as R,B as ar,k as I,w as rr,G as W,a3 as ir,i as sr,a5 as lr,q as H,V as kr}from"./index-CcVA_ZL6.js";import{u as yr}from"./usePageStyles-C0KE2aJ5.js";import{u as wr}from"./useInternalLinks-CIfsmaXv.js";import{u as X,G as pr,S as K,P as zr,a as _r,b as $r,c as Fr}from"./GiftCard-Cj5y_vuy.js";import{c as Cr}from"./giftsApi-B3rWQLc_.js";import{i as Mr}from"./PaymentMethodList--CbQnJbL.js";import{F as Er}from"./FavoriteButton-DVDrHFVy.js";import{a as jr}from"./giftIcons-C3hH12nn.js";import{u as Br,r as Lr,C as Ar}from"./CheckoutPaymentOptions-rQuSRH7l.js";import{_ as nr}from"./SkeletonLoader-DnfsEbB7.js";import{L as Sr}from"./LocationNotice-Ba6_WiP7.js";import"./accountApi-DFcBKC64.js";const dr="/images/gifts/hero.jpg",Ir=.15,Dr=D=>X().designOf(D),i=cr({step:0,gtype:null,value:null,branch:null,activeCat:null,pkg:null,svcs:[],sort:"pop",favs:[],sender:"",name:"",phone:"",msg:"",design:"lux-dark",method:"wa",when:"now",schedDate:"",pay:null,terms:!1,placing:!1,done:!1,ref:null,claimUrl:null,claimToken:null,walletBalance:null});function V(){const D=v=>i.svcs.some(u=>u.id===v),z=v=>{const u=i.svcs.findIndex(E=>E.id===v.id);u===-1?i.svcs.push(v):i.svcs.splice(u,1)},e=v=>i.favs.includes(v),M=v=>{const u=i.favs.indexOf(v);u===-1?i.favs.push(v):i.favs.splice(u,1)},k=F(()=>{var v;return i.gtype==="svc"?i.svcs.reduce((u,E)=>u+E.price,0):i.gtype==="val"?Number(i.value)||0:((v=i.pkg)==null?void 0:v.price)||0}),_=F(()=>{var v;return i.gtype==="svc"?i.svcs.length?i.svcs.map(u=>u.name).join(" + "):null:i.gtype==="val"?k.value?`بطاقة هدية بقيمة ${k.value} ر.س`:null:((v=i.pkg)==null?void 0:v.name)||null}),p=F(()=>{const v=k.value,u=i.gtype==="val"?0:Math.round(v*Ir);return{val:v,vat:u,total:v+u}}),w=F(()=>{switch(i.step){case 0:return!!i.gtype;case 1:{if(i.gtype==="svc")return i.svcs.length>0;if(i.gtype==="val"){const{min:v,max:u}=X().designs.valueCard;return k.value>=v&&k.value<=u}return!!i.pkg}case 2:return i.name.trim().length>1&&i.phone.trim().length>=9;case 3:return Z.canPay(i,p.value.total)&&i.terms&&!i.placing}return!1});function o(v){v>0&&!w.value||(i.step+=v,i.step<0&&(i.step=0),scrollTo({top:0,behavior:"smooth"}))}function s(){i.step=0,i.gtype=null,i.pkg=null,i.svcs=[],i.value=null,i.done=!1,i.ref=null,i.claimUrl=null,i.pay=null,i.terms=!1,i.useWallet=!1,i.walletAmount=0,i.useLoyalty=!1,i.loyaltyPointsUsed=0}async function f(){var v,u,E,S;if(!w.value)return null;i.placing=!0;try{const $=i.branch==="home-service"?0:Number.isInteger(i.branch)?i.branch:null,c={location:{recipient_name:i.name.trim(),recipient_mobile:i.phone.trim(),message:i.msg.trim()||void 0,sender_name:i.sender.trim()||void 0},design:i.design,branch:$,send_channel:i.method||"link"};i.gtype==="val"?(c.type="value",c.value_amount=k.value):i.gtype==="svc"?c.services=[{subServices:i.svcs.map(y=>({id:y.id}))}]:c.packages=[{id:i.pkg.id}];const m=await Cr(c),{gateway:P,...T}=Z.payment(i,p.value.total),N=await Mr(P,T);return N.payment_url?(window.location.href=N.payment_url,{created:m,payment:N}):(i.ref=(v=m==null?void 0:m.data)!=null&&v.gift_card_id?`#GIFT-${m.data.gift_card_id}`:"#GIFT",i.claimUrl=((u=m==null?void 0:m.data)==null?void 0:u.share_url)||((E=m==null?void 0:m.data)==null?void 0:E.claim_url)||null,i.claimToken=((S=m==null?void 0:m.data)==null?void 0:S.claim_token)||null,i.done=!0,i.step=4,{created:m,payment:N})}finally{i.placing=!1}}return{state:i,dsgOf:Dr,hasSvc:D,toggleSvc:z,isFav:e,toggleFav:M,giftValue:k,giftLabel:_,priceParts:p,canNext:w,go:o,reset:s,placeGift:f}}const Pr=`\r
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
`,Nr="/images/gifts/service.jpg",Yr="/images/gifts/package.jpg",Vr={class:"gtype-grid"},Gr={class:"im"},Tr={class:"ic"},Hr={class:"bd"},Ur={class:"go"},Rr={class:"im"},Or={class:"ic"},qr={class:"bd"},Xr={class:"go"},Wr={class:"im"},Jr={class:"ic"},Kr={class:"bd"},Qr={class:"go"},er={__name:"GiftTypeStep",emits:["pick"],setup(D,{emit:z}){const{state:e}=V(),M=z,k={chair:'<path d="M3 18v-6a2 2 0 012-2h14a2 2 0 012 2v6"/><path d="M5 18v2M19 18v2M7 10V7a2 2 0 012-2h6a2 2 0 012 2v3"/>',gift:'<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7s-2-5-5-5-3 5 0 5h5zM12 7s2-5 5-5 3 5 0 5h-5z"/>',arrow:'<path d="M19 12H5M11 18l-6-6 6-6"/>',card:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/>'};return(_,p)=>(a(),l(C,null,[p[15]||(p[15]=r("div",{class:"g-head"},[r("h1",null,"ماذا ترغب بإهدائه؟"),r("p",null,"اختر ما يناسبك لإهداء تجربة مميزة لمن تحب")],-1)),r("div",Vr,[r("div",{class:B(["gtype",{sel:n(e).gtype==="svc"}]),"data-gt":"svc",onClick:p[0]||(p[0]=w=>M("pick","svc"))},[r("div",Gr,[p[3]||(p[3]=r("img",{src:Nr,alt:"إهداء خدمة"},null,-1)),r("span",Tr,[g(h,{inner:k.chair,size:20},null,8,["inner"])])]),r("div",Hr,[p[5]||(p[5]=r("h3",null,"إهداء خدمة",-1)),p[6]||(p[6]=r("p",null,[x("اختر خدمة واحدة أو أكثر"),r("br"),x("وأهدِها لمن تحب.")],-1)),r("span",Ur,[g(h,{inner:k.arrow,size:14},null,8,["inner"]),p[4]||(p[4]=x(" اختر خدمة لإهدائها",-1))])])],2),r("div",{class:B(["gtype",{sel:n(e).gtype==="pkg"}]),"data-gt":"pkg",onClick:p[1]||(p[1]=w=>M("pick","pkg"))},[r("div",Rr,[p[7]||(p[7]=r("img",{src:Yr,alt:"إهداء باقة"},null,-1)),r("span",Or,[g(h,{inner:k.gift,size:20},null,8,["inner"])])]),r("div",qr,[p[9]||(p[9]=r("h3",null,"إهداء باقة",-1)),p[10]||(p[10]=r("p",null,[x("اختر باقة مصممة بعناية"),r("br"),x("لتمنح تجربة متكاملة لمن تحب.")],-1)),r("span",Xr,[g(h,{inner:k.arrow,size:14},null,8,["inner"]),p[8]||(p[8]=x(" اختر باقة لإهدائها",-1))])])],2),r("div",{class:B(["gtype",{sel:n(e).gtype==="val"}]),"data-gt":"val",onClick:p[2]||(p[2]=w=>M("pick","val"))},[r("div",Wr,[p[11]||(p[11]=r("img",{src:dr,alt:"بطاقة هدية بقيمة"},null,-1)),r("span",Jr,[g(h,{inner:k.card,size:20},null,8,["inner"])])]),r("div",Kr,[p[13]||(p[13]=r("h3",null,"بطاقة هدية بقيمة",-1)),p[14]||(p[14]=r("p",null,[x("حدد المبلغ ودعه يختار"),r("br"),x("ما يحب من خدماتنا ومنتجاتنا.")],-1)),r("span",Qr,[g(h,{inner:k.arrow,size:14},null,8,["inner"]),p[12]||(p[12]=x(" اختر قيمة البطاقة",-1))])])],2)])],64))}},Zr={key:0,class:"empty-hint",style:{display:"grid",gap:"10px"}},rn={class:"cat-row"},nn=["data-cat","onClick"],en=["src","alt"],tn={class:"chk"},on={class:"lbl"},an={key:0,class:"empty-hint"},sn={key:1,class:"sub-block"},ln={class:"sub-title"},pn={class:"sub-title__main"},dn={class:"tick"},gn=["innerHTML"],cn={key:0,class:"empty-hint"},xn={key:1,class:"subs"},fn=["data-sv","onClick"],bn={class:"top"},mn={class:"chk"},un={class:"foot"},vn={class:"dur"},hn={class:"prc"},kn={class:"inline-actions"},yn=["disabled"],wn={class:"gp-sort"},zn={key:0,class:"empty-hint"},_n={key:1,class:"caro-wrap"},$n={class:"caro",id:"caro"},Fn=["data-gp","onClick"],Cn={class:"ph"},Mn=["src","alt"],En={key:0,class:"hotflag"},jn={class:"chk"},Bn={class:"bd"},Ln={class:"dur"},An={class:"desc"},Sn={class:"inc-box"},In={class:"prc"},Dn={class:"pick"},Pn={class:"inline-actions"},Nn=["disabled"],Yn={__name:"GiftPickStep",emits:["nav"],setup(D,{emit:z}){const{state:e,hasSvc:M,toggleSvc:k}=V(),{filteredPkgs:_}=Br(),p=z,{state:w}=vr(),o=y=>hr(y,w.lang),s=y=>y.toLocaleString("ar-EG-u-nu-latn"),f={check:'<path d="M20 6L9 17l-5-5"/>',prev:'<path d="M5 12h14M13 6l6 6-6 6"/>',next:'<path d="M19 12H5M11 18l-6-6 6-6"/>',chevR:'<path d="M9 6l6 6-6 6"/>',chevL:'<path d="M15 6l-6 6 6 6"/>'},v=G([]),u=G(!0);xr(async()=>{try{const y=await fr();v.value=y!=null&&y.status?y.data||[]:[]}catch{v.value=[]}finally{u.value=!1}});const E=F(()=>v.value.map(y=>({id:y.id,name:q(y,"name",w.lang),image:br(y.image)||y.feature_image||null}))),S=F(()=>v.value.find(y=>y.id===e.activeCat)||null),$=F(()=>q(S.value,"name",w.lang)),c=F(()=>{var y;return(((y=S.value)==null?void 0:y.services)||[]).map(d=>({id:d.id,categoryId:S.value.id,categoryNameT:mr(S.value,"name"),get categoryName(){return o(this.categoryNameT)},get name(){return q(d,"name",w.lang)},get desc(){return q(d,"description",w.lang)},dur:d.duration_min,price:d.default_price}))}),m=y=>e.svcs.some(d=>d.categoryId===y),P=F(()=>c.value.filter(y=>M(y.id)).length),T=F(()=>_.value.slice().sort((y,d)=>e.sort==="low"?y.price-d.price:e.sort==="high"?d.price-y.price:(d.hot?1:0)-(y.hot?1:0)));function N(y){const d=document.getElementById("caro");d&&d.scrollBy({left:y*300,behavior:"smooth"})}return(y,d)=>n(e).gtype==="svc"?(a(),l(C,{key:0},[d[11]||(d[11]=r("div",{class:"g-head"},[r("h1",null,"اختر الخدمة التي ترغب بإهدائها"),r("p",null,"يمكنك اختيار خدمة واحدة أو أكثر")],-1)),u.value?(a(),l("div",Zr,[g(nr,{height:"64px","border-radius":"12px"}),g(nr,{height:"92px","border-radius":"12px"})])):(a(),l(C,{key:1},[r("div",rn,[(a(!0),l(C,null,Y(E.value,t=>(a(),l("div",{key:t.id,class:B(["cat",{sel:n(e).activeCat===t.id,"has-picks":m(t.id)}]),"data-cat":t.id,onClick:L=>n(e).activeCat=t.id},[t.image?(a(),l("img",{key:0,src:t.image,alt:t.name,loading:"lazy"},null,8,en)):j("",!0),r("span",tn,[g(h,{inner:f.check,size:11},null,8,["inner"])]),r("span",on,b(t.name),1)],10,nn))),128))]),n(e).activeCat?(a(),l("div",sn,[r("div",ln,[r("span",pn,[x(" خدمات "+b($.value)+" ",1),r("span",dn,[(a(),l("svg",{viewBox:"0 0 24 24","aria-hidden":"true",innerHTML:n(jr)()},null,8,gn))])]),r("small",null,b(P.value?P.value+" مختارة":"اختر خدمة أو أكثر"),1)]),c.value.length?(a(),l("div",xn,[(a(!0),l(C,null,Y(c.value,t=>(a(),l("div",{key:t.id,class:B(["sub",{sel:n(M)(t.id)}]),"data-sv":t.id,onClick:L=>n(k)(t)},[r("div",bn,[r("b",null,b(t.name),1),r("span",mn,[g(h,{inner:f.check,size:12},null,8,["inner"])])]),r("small",null,b(t.desc),1),r("div",un,[r("span",vn,"🕐 "+b(t.dur)+" دقيقة",1),r("span",hn,[x(b(s(t.price))+" ",1),d[8]||(d[8]=r("small",null,"ر.س",-1))])])],10,fn))),128))])):(a(),l("div",cn,"لا توجد خدمات متاحة حاليًا ضمن هذا القسم"))])):(a(),l("div",an,[...d[7]||(d[7]=[r("b",null,"اختر خدمة لعرض تفاصيلها",-1),x("اختر إحدى الخدمات الأساسية أعلاه لعرض الخدمات الفرعية المتاحة",-1)])]))],64)),r("div",kn,[r("button",{class:"btn btn-prev","data-nav":"back",onClick:d[0]||(d[0]=t=>p("nav",-1))},[g(h,{inner:f.prev,size:15},null,8,["inner"]),d[9]||(d[9]=x(" رجوع",-1))]),r("button",{class:"btn btn-gold","data-nav":"next",disabled:!n(e).svcs.length,onClick:d[1]||(d[1]=t=>p("nav",1))},[d[10]||(d[10]=x("التالي: تخصيص الهدية ",-1)),g(h,{inner:f.next,size:15},null,8,["inner"])],8,yn)])],64)):(a(),l(C,{key:1},[d[17]||(d[17]=r("div",{class:"g-head"},[r("h1",null,"اختر الباقة التي ترغب بإهدائها"),r("p",null,"باقات مميزة تمنح تجربة متكاملة من الاسترخاء والعناية")],-1)),r("div",wn,[U(r("select",{id:"gpSort","onUpdate:modelValue":d[2]||(d[2]=t=>n(e).sort=t)},[...d[12]||(d[12]=[r("option",{value:"pop"},"الأكثر طلبًا",-1),r("option",{value:"low"},"السعر: الأقل أولًا",-1),r("option",{value:"high"},"السعر: الأعلى أولًا",-1)])],512),[[ur,n(e).sort]]),r("small",null,b(T.value.length)+" باقات متاحة — مرّر لاستعراض المزيد",1)]),T.value.length?(a(),l("div",_n,[r("button",{class:"caro-btn r","data-caro":"1",onClick:d[3]||(d[3]=t=>N(1))},[g(h,{inner:f.chevR,size:15},null,8,["inner"])]),r("button",{class:"caro-btn l","data-caro":"-1",onClick:d[4]||(d[4]=t=>N(-1))},[g(h,{inner:f.chevL,size:15},null,8,["inner"])]),r("div",$n,[(a(!0),l(C,null,Y(T.value,(t,L)=>{var A,O;return a(),l("div",{key:t.id,class:B(["gpkg",{sel:((A=n(e).pkg)==null?void 0:A.id)===t.id}]),"data-gp":t.id,style:or(`--pc:${t.hex};animation-delay:${L*.05}s`),onClick:Q=>n(e).pkg=t},[r("div",Cn,[r("img",{src:t.img,alt:t.name},null,8,Mn),t.hot?(a(),l("span",En,"الأكثر طلبًا")):j("",!0),g(Er,{class:"fav",type:"package",id:t.id},null,8,["id"]),r("span",jn,[g(h,{inner:f.check,size:13},null,8,["inner"])])]),r("div",Bn,[r("h4",null,b(t.name),1),r("div",Ln,"🕐 "+b(t.dur)+" دقيقة",1),r("div",An,b(t.desc),1),r("div",Sn,[d[13]||(d[13]=r("b",{class:"inc-title"},"تشمل الباقة",-1)),(a(!0),l(C,null,Y(t.inc,(Q,gr)=>(a(),l("div",{key:gr,style:{padding:"2px 0"}},"✓ "+b(Q),1))),128))]),r("div",In,[x(b(n(Lr)(t.price))+" ",1),d[14]||(d[14]=r("small",null,"ر.س",-1))]),r("button",Dn,b(((O=n(e).pkg)==null?void 0:O.id)===t.id?"تم الاختيار ✓":"استعرض الباقة"),1)])],14,Fn)}),128))])])):(a(),l("div",zn,"لا توجد باقات متاحة حاليًا")),r("div",Pn,[r("button",{class:"btn btn-prev","data-nav":"back",onClick:d[5]||(d[5]=t=>p("nav",-1))},[g(h,{inner:f.prev,size:15},null,8,["inner"]),d[15]||(d[15]=x(" رجوع",-1))]),r("button",{class:"btn btn-gold","data-nav":"next",disabled:!n(e).pkg,onClick:d[6]||(d[6]=t=>p("nav",1))},[d[16]||(d[16]=x("التالي: تخصيص الهدية ",-1)),g(h,{inner:f.next,size:15},null,8,["inner"])],8,Nn)])],64))}},Vn=J(Yn,[["__scopeId","data-v-1ce87454"]]),Gn={class:"card gv-card"},Tn={class:"gv-presets"},Hn=["onClick"],Un={class:"fld"},Rn=["min","max"],On={class:"inline-actions"},qn=["disabled"],Xn={__name:"GiftValueStep",emits:["nav"],setup(D,{emit:z}){const{state:e,canNext:M}=V(),{designs:k}=X(),_=z,p=F(()=>k.valueCard),w=F(()=>Math.round((p.value.validity_days||180)/30)),o=v=>Number(v||0).toLocaleString("ar-EG-u-nu-latn"),s=F(()=>e.value!==null&&e.value!==""&&!M.value),f={prev:'<path d="M5 12h14M13 6l6 6-6 6"/>',next:'<path d="M19 12H5M11 18l-6-6 6-6"/>'};return(v,u)=>(a(),l(C,null,[u[8]||(u[8]=r("div",{class:"g-head"},[r("h1",null,"اختر قيمة بطاقة الهدية"),r("p",null,"يضيفها المستلم إلى محفظته ويستخدمها في الخدمات والمتجر")],-1)),r("div",Gn,[r("div",Tn,[(a(!0),l(C,null,Y(p.value.presets,E=>(a(),l("button",{key:E,type:"button",class:B({sel:Number(n(e).value)===E}),onClick:S=>n(e).value=E},[r("b",null,b(o(E)),1),u[3]||(u[3]=x(" ر.س",-1))],10,Hn))),128))]),r("div",Un,[u[4]||(u[4]=r("label",{for:"gv-amount"},"أو أدخل مبلغاً آخر",-1)),U(r("input",{id:"gv-amount","onUpdate:modelValue":u[0]||(u[0]=E=>n(e).value=E),type:"number",inputmode:"decimal",min:p.value.min,max:p.value.max,step:"1",placeholder:"المبلغ"},null,8,Rn),[[R,n(e).value,void 0,{number:!0}]]),r("small",{class:B({err:s.value})},"المبلغ بين "+b(o(p.value.min))+" و "+b(o(p.value.max))+" ر.س · صالحة لمدة "+b(w.value)+" أشهر",3)]),u[7]||(u[7]=r("ul",{class:"gv-notes"},[r("li",null,"تصل للمستلم مع كود ورابط خاص"),r("li",null,"تُضاف لمحفظة المستلم كرصيد ترويجي"),r("li",null,"لا تُستبدل نقداً")],-1)),r("div",On,[r("button",{class:"btn btn-prev",onClick:u[1]||(u[1]=E=>_("nav",-1))},[g(h,{inner:f.prev,size:15},null,8,["inner"]),u[5]||(u[5]=x(" رجوع",-1))]),r("button",{class:"btn btn-gold",disabled:!n(M),onClick:u[2]||(u[2]=E=>_("nav",1))},[u[6]||(u[6]=x("متابعة ",-1)),g(h,{inner:f.next,size:15},null,8,["inner"])],8,qn)])])],64))}},Wn=J(Xn,[["__scopeId","data-v-889d98d0"]]),Jn={class:"custom-grid"},Kn={class:"preview-col"},Qn={id:"cardPrev"},Zn={class:"form-col"},re={class:"card",style:{"margin-bottom":"14px"}},ne={class:"two"},ee={class:"fld"},te={class:"fld"},oe={class:"two"},ae={class:"fld",style:{"margin-bottom":"4px"}},ie={class:"fld",style:{"margin-bottom":"4px"}},se={class:"card",style:{"margin-bottom":"14px"}},le={class:"designs"},pe=["data-d","onClick"],de={class:"dchk"},ge={style:{visibility:"hidden"},"aria-hidden":"true"},ce={class:"card"},xe={class:"methods"},fe=["data-m","onClick"],be={class:"mi"},me={class:"send-opts",style:{"margin-top":"16px","margin-bottom":"0"}},ue={class:"fld",style:{margin:"0"}},ve={class:"inline-actions"},he=["disabled"],ke={__name:"GiftCustomizeStep",emits:["nav"],setup(D,{emit:z}){const{state:e,canNext:M}=V(),{designs:k}=X(),_=z,p=F(()=>200-e.msg.length),w={eye:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',user:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',brush:'<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.6 7.6"/><circle cx="11" cy="11" r="2"/>',send:'<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>',check:'<path d="M20 6L9 17l-5-5"/>',prev:'<path d="M5 12h14M13 6l6 6-6 6"/>',next:'<path d="M19 12H5M11 18l-6-6 6-6"/>'};return(o,s)=>(a(),l(C,null,[s[23]||(s[23]=r("div",{class:"g-head"},[r("h1",null,"خصص هديتك لتكون أجمل 🤍"),r("p",null,"أضف لمستك الخاصة مع رسالة وتصميم بطاقة الإهداء")],-1)),r("div",Jn,[r("div",Kn,[r("h4",null,[g(h,{inner:w.eye,size:16},null,8,["inner"]),s[9]||(s[9]=x(" معاينة بطاقة الإهداء",-1))]),r("div",Qn,[g(pr,{design:n(e).design,recipient:n(e).name,sender:n(e).sender,message:n(e).msg},null,8,["design","recipient","sender","message"])])]),r("div",Zn,[r("div",re,[r("h4",null,[g(h,{inner:w.user,size:16},null,8,["inner"]),s[10]||(s[10]=x(" بيانات الإهداء",-1))]),r("div",ne,[r("div",ee,[s[11]||(s[11]=r("label",null,"اسم المُهدي (أنت)",-1)),U(r("input",{id:"gSender",placeholder:"اسمك","onUpdate:modelValue":s[0]||(s[0]=f=>n(e).sender=f)},null,512),[[R,n(e).sender]])]),r("div",te,[s[12]||(s[12]=r("label",null,"اسم المهدى إليه",-1)),U(r("input",{id:"gName",placeholder:"أدخل الاسم","onUpdate:modelValue":s[1]||(s[1]=f=>n(e).name=f)},null,512),[[R,n(e).name]])])]),r("div",oe,[r("div",ae,[s[13]||(s[13]=r("label",null,"رقم جوال المستلم",-1)),U(r("input",{id:"gPhone",dir:"ltr",placeholder:"05xxxxxxxx","onUpdate:modelValue":s[2]||(s[2]=f=>n(e).phone=f)},null,512),[[R,n(e).phone]])])]),r("div",ie,[s[14]||(s[14]=r("label",null,"الرسالة الشخصية",-1)),U(r("textarea",{id:"gMsg",maxlength:"200",placeholder:"اكتب رسالتك الخاصة هنا...","onUpdate:modelValue":s[3]||(s[3]=f=>n(e).msg=f)},null,512),[[R,n(e).msg]]),r("span",{class:B(["cnt",{max:p.value<20}]),id:"gCnt"},b(n(e).msg.length)+"/200",3)])]),r("div",se,[r("h4",null,[g(h,{inner:w.brush,size:16},null,8,["inner"]),s[15]||(s[15]=x(" تصميم بطاقة الإهداء",-1))]),r("div",le,[(a(!0),l(C,null,Y(n(k).designs,f=>(a(),l("div",{key:f.id,class:B(["design",{sel:n(e).design===f.id}]),"data-d":f.id,onClick:v=>n(e).design=f.id},[r("div",{class:"sw",style:or(f.image?`background:${f.bg};background-image:url('${encodeURI(f.image)}');background-size:cover;color:${f.fg}`:`background:${f.bg};color:${f.fg}`)},[r("span",de,[g(h,{inner:w.check,size:10},null,8,["inner"])]),s[16]||(s[16]=x("SAMI",-1))],4),r("small",ge,b(f.n),1)],10,pe))),128))])]),r("div",ce,[r("h4",null,[g(h,{inner:w.send,size:16},null,8,["inner"]),s[17]||(s[17]=x(" طريقة وتوقيت الإرسال",-1))]),r("div",xe,[(a(!0),l(C,null,Y(n(K),f=>(a(),l("div",{key:f.id,class:B(["mth",{sel:n(e).method===f.id}]),"data-m":f.id,onClick:v=>n(e).method=f.id},[r("span",be,[g(h,{inner:f.ic,size:17},null,8,["inner"])]),x(b(f.n),1)],10,fe))),128))]),r("div",me,[r("span",{class:B(["ro",{on:n(e).when==="now"}]),"data-w":"now",onClick:s[4]||(s[4]=f=>n(e).when="now")},[...s[18]||(s[18]=[r("i",null,null,-1),x(" 🚀 إرسال الآن — سيتم إرسال الهدية فورًا",-1)])],2),r("span",{class:B(["ro",{on:n(e).when==="later"}]),"data-w":"later",onClick:s[5]||(s[5]=f=>n(e).when="later")},[...s[19]||(s[19]=[r("i",null,null,-1),x(" 📅 جدولة لاحقًا",-1)])],2)]),r("div",{class:B(["sched-box",{open:n(e).when==="later"}])},[r("div",ue,[s[20]||(s[20]=r("label",null,"اختر التاريخ والوقت المناسب",-1)),U(r("input",{type:"datetime-local",id:"gSched","onUpdate:modelValue":s[6]||(s[6]=f=>n(e).schedDate=f)},null,512),[[R,n(e).schedDate]])])],2)]),r("div",ve,[r("button",{class:"btn btn-prev","data-nav":"back",onClick:s[7]||(s[7]=f=>_("nav",-1))},[g(h,{inner:w.prev,size:15},null,8,["inner"]),s[21]||(s[21]=x(" رجوع",-1))]),r("button",{class:"btn btn-gold","data-nav":"next",disabled:!n(M),onClick:s[8]||(s[8]=f=>_("nav",1))},[s[22]||(s[22]=x("متابعة إلى الدفع ",-1)),g(h,{inner:w.next,size:15},null,8,["inner"])],8,he)])])])],64))}},ye={class:"card",style:{padding:"22px"}},we={class:"inline-actions"},ze=["disabled"],_e={__name:"GiftPayStep",emits:["nav","pay"],setup(D,{emit:z}){const{state:e,canNext:M,priceParts:k}=V(),_=z,p={check:'<path d="M20 6L9 17l-5-5"/>',prev:'<path d="M5 12h14M13 6l6 6-6 6"/>',lock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>'};return(w,o)=>{const s=ar("RouterLink");return a(),l(C,null,[o[12]||(o[12]=r("div",{class:"g-head"},[r("h1",null,"الدفع"),r("p",null,"اختر طريقة الدفع المناسبة وأكمل إهداءك")],-1)),r("div",ye,[g(Ar,{state:n(e),total:n(k).total},null,8,["state","total"]),r("span",{class:B(["terms-chk",{on:n(e).terms}]),id:"termsChk",onClick:o[2]||(o[2]=f=>n(e).terms=!n(e).terms)},[r("i",null,[g(h,{inner:p.check,size:11},null,8,["inner"])]),o[7]||(o[7]=x(" أوافق على ",-1)),g(s,{to:"/terms",onClick:o[0]||(o[0]=rr(()=>{},["stop"]))},{default:I(()=>[...o[5]||(o[5]=[x("الشروط والأحكام",-1)])]),_:1}),o[8]||(o[8]=x(" و",-1)),g(s,{to:"/privacy-policy",onClick:o[1]||(o[1]=rr(()=>{},["stop"]))},{default:I(()=>[...o[6]||(o[6]=[x("سياسة الخصوصية",-1)])]),_:1})],2),r("div",we,[r("button",{class:"btn btn-prev","data-nav":"back",onClick:o[3]||(o[3]=f=>_("nav",-1))},[g(h,{inner:p.prev,size:15},null,8,["inner"]),o[9]||(o[9]=x(" الرجوع",-1))]),r("button",{class:"btn btn-gold",id:"doPay",disabled:!n(M),onClick:o[4]||(o[4]=f=>_("pay"))},[g(h,{inner:p.lock,size:15},null,8,["inner"]),o[10]||(o[10]=x(" إتمام الإهداء",-1))],8,ze)]),o[11]||(o[11]=r("div",{class:"after-pay"},"سيتم إرسال الهدية مباشرة بعد إتمام الدفع",-1))])],64)}}},$e={class:"gsuccess",style:{"padding-top":"4px"}},Fe={class:"gsuc-box"},Ce={class:"gs-row"},Me={class:"k"},Ee={class:"v"},je={class:"gs-row"},Be={class:"k"},Le={class:"v"},Ae={class:"gs-row"},Se={class:"k"},Ie={class:"v"},De={class:"gs-row"},Pe={class:"k"},Ne={class:"gsuc-actions"},Ye={key:0,class:"gift-share-panel"},Ve={class:"gift-share-row"},Ge=["value"],Te={key:0},He={__name:"GiftSuccess",emits:["recipient","track","new-gift","share","home","copy-ref"],setup(D,{emit:z}){const{state:e,giftLabel:M}=V(),k=z,_=G(!1),p=G(!1),w=["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],o=new Date,s=F(()=>{const c=K.find(m=>m.id===e.method);return c?c.n:""}),f=F(()=>e.when==="now"?`اليوم ${o.getDate()} ${w[o.getMonth()]} ${o.getFullYear()}`:"مجدولة — "+(e.schedDate||"")),v=F(()=>e.claimToken?new URL(`/gift-recipient?token=${encodeURIComponent(e.claimToken)}`,window.location.origin).href:e.claimUrl||"");function u(){if(!v.value)return;const c=String(e.phone||"").replace(/\D/g,""),m=encodeURIComponent(`لديك هدية من عناية سامي ✨
${v.value}`);window.open(`https://wa.me/${c}?text=${m}`,"_blank","noopener")}function E(){_.value=!0,p.value=!1,v.value&&window.open(v.value,"_blank","noopener,noreferrer")}async function S(){try{if(navigator&&navigator.clipboard)await navigator.clipboard.writeText(v.value);else{const c=document.getElementById("gift-share-link");c&&(c.focus(),c.select(),document.execCommand("copy"))}p.value=!0,setTimeout(()=>{p.value=!1},2200)}catch{alert("تعذّر نسخ الرابط، يمكنك نسخه يدويًا من الحقل أدناه.")}}const $={user:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',send:'<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',copy:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>',plus:'<path d="M12 5v14M5 12h14"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>',home:'<path d="M3 9l9-6 9 6v11a1 1 0 01-1 1H4a1 1 0 01-1-1z"/>'};return(c,m)=>(a(),l("div",$e,[m[12]||(m[12]=W('<div class="gs-hero" data-v-f969ab4c><span class="spark" style="top:0;right:8px;" data-v-f969ab4c>✦</span><span class="spark" style="bottom:14px;left:2px;animation-delay:-1.2s;" data-v-f969ab4c>✧</span><span class="circ" data-v-f969ab4c><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" data-v-f969ab4c><path d="M20 6L9 17l-5-5" data-v-f969ab4c></path></svg></span><span class="gbox" data-v-f969ab4c></span></div><h1 data-v-f969ab4c>تم إرسال الهدية بنجاح</h1><p class="sub" data-v-f969ab4c>تم تجهيز هديتك وإرسالها للمستلم بنجاح، وسيتم إشعاره فور استلامها ✨</p>',3)),r("div",Fe,[g(pr,{design:n(e).design,recipient:n(e).name,sender:n(e).sender,message:n(e).msg},null,8,["design","recipient","sender","message"]),r("div",null,[r("h3",null,"إهداء "+b(n(M)),1),r("div",Ce,[r("span",Me,[g(h,{inner:$.user,size:14},null,8,["inner"]),m[4]||(m[4]=x(" إلى",-1))]),r("span",Ee,b(n(e).name),1)]),r("div",je,[r("span",Be,[g(h,{inner:$.send,size:14},null,8,["inner"]),m[5]||(m[5]=x(" طريقة الإرسال",-1))]),r("span",Le,b(s.value),1)]),r("div",Ae,[r("span",Se,[g(h,{inner:$.clock,size:14},null,8,["inner"]),m[6]||(m[6]=x(" وقت الإرسال",-1))]),r("span",Ie,b(f.value),1)]),r("div",De,[r("span",Pe,[g(h,{inner:$.copy,size:14},null,8,["inner"]),m[7]||(m[7]=x(" رقم الطلب",-1))]),r("span",{class:"v copy-ref",id:"copyRef",dir:"ltr",onClick:m[0]||(m[0]=P=>k("copy-ref"))},b(n(e).ref)+" ⧉",1)])])]),r("div",Ne,[r("button",{class:"btn btn-line",id:"newGift",onClick:m[1]||(m[1]=P=>k("new-gift"))},[g(h,{inner:$.plus,size:15},null,8,["inner"]),m[8]||(m[8]=x(" إهداء جديد",-1))]),r("button",{class:"btn btn-line",id:"shareGift",onClick:m[2]||(m[2]=P=>{E(),k("share")})},[g(h,{inner:$.share,size:15},null,8,["inner"]),m[9]||(m[9]=x(" مشاركة الهدية ",-1))]),r("button",{class:"btn btn-line",id:"goHome",onClick:m[3]||(m[3]=P=>k("home"))},[g(h,{inner:$.home,size:15},null,8,["inner"]),m[10]||(m[10]=x(" العودة للرئيسية",-1))])]),_.value?(a(),l("div",Ye,[m[11]||(m[11]=r("label",null,"رابط الهدية",-1)),r("div",Ve,[r("input",{id:"gift-share-link",type:"text",value:v.value,readonly:""},null,8,Ge),n(e).method==="wa"?(a(),l("button",{key:0,class:"btn btn-gold",onClick:u},"إرسال عبر واتساب")):j("",!0),r("button",{class:"btn btn-gold",onClick:S},"نسخ الرابط")]),p.value?(a(),l("small",Te,"تم نسخ الرابط بنجاح")):j("",!0)])):j("",!0),m[13]||(m[13]=r("div",{class:"thanks"},[r("i",null,"❦"),x(" شكرًا لاختيارك عناية سامي لتقديم تجربة مميزة لمن تحب "),r("i",null,"❦")],-1))]))}},Ue=J(He,[["__scopeId","data-v-f969ab4c"]]),Re={class:"gsum"},Oe={class:"card"},qe={key:0,class:"pkline"},Xe=["src"],We={key:1},Je={key:2},Ke={class:"pr"},Qe={key:1,style:{"text-align":"center","margin-bottom":"14px"}},Ze={style:{position:"absolute",top:"-5px",right:"14px",width:"46px",opacity:".9"},viewBox:"0 0 64 40",fill:"none",stroke:"currentColor","stroke-width":"2"},rt={style:{display:"block","font-family":"var(--font-d)",color:"var(--ink)","font-size":"14.5px"}},nt={style:{display:"block",color:"var(--ink)","font-size":"12px","font-weight":"700","margin-top":"8px"}},et={style:{display:"block",color:"var(--mute)","font-size":"11.5px","margin-top":"4px","line-height":"1.7"}},tt={key:2,class:"gs-row"},ot={class:"v"},at={class:"gs-row"},it={class:"v"},st={class:"gs-row"},lt={class:"v"},pt={class:"gs-row"},dt={class:"v"},gt={class:"gs-row"},ct={class:"v"},xt={class:"chip"},ft={class:"gs-row"},bt={class:"v"},mt={class:"sum-like",style:{"margin-top":"10px","padding-top":"12px","border-top":"1px dashed var(--line)"}},ut={class:"v"},vt={class:"v"},ht={class:"gs-total"},kt={class:"v"},yt={class:"gs-note"},wt={key:0,class:"card help-card"},zt={class:"hi"},_t=["href"],$t="background:linear-gradient(150deg,#1D1810,#0B0906);color:#E8BE6C;max-width:190px;margin:0 auto 12px;aspect-ratio:16/10;border-radius:14px;display:grid;place-items:center;box-shadow:0 16px 30px -16px rgba(20,15,5,.5);position:relative",tr="border:none;padding:4px 0",Ft={__name:"GiftSummary",setup(D){const{whatsappUrl:z}=ir(),{state:e,priceParts:M,giftLabel:k,dsgOf:_}=V(),{current:p}=sr(),w=$=>$.toLocaleString("ar-EG-u-nu-latn"),o=F(()=>M.value),s=F(()=>k.value);F(()=>_(e.design));const f=F(()=>e.gtype==="svc"?null:e.pkg?e.pkg.img:null),v=F(()=>{const $=K.find(c=>c.id===e.method);return $?$.n:""}),u=F(()=>{const $=[...zr,..._r,...$r].find(c=>c.id===e.pay);return $?$.n:""}),E=F(()=>p.value?"اختر "+(e.gtype==="svc"?"الخدمة":"الباقة")+" المناسبة لإهدائها لمن تحب":"حدد مكان تنفيذ الخدمة أولًا لعرض "+(e.gtype==="svc"?"الخدمات":"الباقات")+" والأسعار"),S={lock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>',head:'<path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>'};return($,c)=>(a(),l("div",Re,[r("div",Oe,[c[14]||(c[14]=r("h3",null,"ملخص الهدية",-1)),s.value&&(f.value||n(e).gtype==="svc"||n(e).gtype==="val")?(a(),l("div",qe,[f.value?(a(),l("img",{key:0,src:f.value,alt:""},null,8,Xe)):j("",!0),r("span",null,[r("b",null,b(s.value),1),n(e).gtype==="pkg"&&n(e).pkg?(a(),l(C,{key:0},[r("small",null,"🕐 "+b(n(e).pkg.dur)+" دقيقة",1),r("small",null,b(n(e).pkg.desc),1)],64)):n(e).gtype==="val"?(a(),l("small",We,"تُضاف لمحفظة المستلم")):(a(),l("small",Je,b(n(e).svcs.length)+" "+b(n(e).svcs.length>2?"خدمات":"خدمة")+" مختارة",1)),r("span",Ke,b(w(o.value.val))+" ر.س",1)])])):(a(),l("div",Qe,[r("div",{class:"mini-card",style:$t},[(a(),l("svg",Ze,[...c[0]||(c[0]=[r("path",{d:"M32 30C18 30 10 24 12 15s16-5 20 8c4-13 18-17 20-8s-6 15-20 15z"},null,-1)])])),c[1]||(c[1]=r("span",{style:{"font-family":"var(--font-d)","font-size":"14px","letter-spacing":".1em","text-align":"center"}},[r("img",{src:lr,style:{height:"24px","vertical-align":"middle"},alt:""}),r("br"),x("SAMI"),r("small",{style:{display:"block","font-size":"8.5px","letter-spacing":".04em",opacity:".8","margin-top":"2px"}},"عناية سامي")],-1))]),r("b",rt,b(n(e).gtype==="svc"?"إهداء خدمة":"إهداء باقة"),1),r("small",nt,b(n(e).gtype==="svc"?"لم يتم اختيار خدمة بعد":"لم يتم اختيار باقة بعد"),1),r("small",et,b(E.value),1)])),n(p)?(a(),l("div",tt,[c[2]||(c[2]=r("span",{class:"k"},"📍 الفرع المختار",-1)),r("span",ot,b(n(p).name),1)])):j("",!0),n(e).step>=2?(a(),l(C,{key:3},[r("div",at,[c[3]||(c[3]=r("span",{class:"k"},"💬 الرسالة",-1)),r("span",it,b(n(e).msg?"مخصصة":"—"),1)]),r("div",st,[c[4]||(c[4]=r("span",{class:"k"},"📤 طريقة الإرسال",-1)),r("span",lt,b(v.value),1)]),r("div",pt,[c[5]||(c[5]=r("span",{class:"k"},"👤 المهدى إليه",-1)),r("span",dt,b(n(e).name||"—"),1)]),r("div",gt,[c[6]||(c[6]=r("span",{class:"k"},"🕐 وقت الإرسال",-1)),r("span",ct,[r("span",xt,b(n(e).when==="now"?"إرسال الآن":"مجدول"),1)])])],64)):j("",!0),n(e).done?(a(),l(C,{key:4},[r("div",ft,[c[7]||(c[7]=r("span",{class:"k"},"💳 طريقة الدفع",-1)),r("span",bt,b(u.value),1)]),c[8]||(c[8]=r("div",{class:"gs-row"},[r("span",{class:"k"},"✅ حالة الدفع"),r("span",{class:"v"},[r("span",{class:"chip"},"مكتمل")])],-1))],64)):j("",!0),o.value.val?(a(),l(C,{key:5},[r("div",mt,[r("div",{class:"gs-row",style:tr},[c[9]||(c[9]=r("span",{class:"k"},"قيمة الهدية",-1)),r("span",ut,b(w(o.value.val))+" ر.س",1)]),n(e).gtype!=="val"?(a(),l("div",{key:0,class:"gs-row",style:tr},[c[10]||(c[10]=r("span",{class:"k"},"ضريبة القيمة المضافة (15%)",-1)),r("span",vt,"+"+b(w(o.value.vat))+" ر.س",1)])):j("",!0)]),r("div",ht,[c[12]||(c[12]=r("span",{class:"k"},"الإجمالي",-1)),r("span",kt,[x(b(w(o.value.total))+" ",1),c[11]||(c[11]=r("small",{style:{"font-size":"13px"}},"ر.س",-1))])])],64)):j("",!0),r("div",yt,[g(h,{inner:S.lock,size:14},null,8,["inner"]),c[13]||(c[13]=x(" الدفع آمن ومشفّر — نستخدم أحدث تقنيات التشفير لحماية بياناتك",-1))])]),n(e).step<=1&&!n(e).done?(a(),l("div",wt,[r("span",zt,[g(h,{inner:S.head,size:18},null,8,["inner"])]),c[15]||(c[15]=r("b",null,"تحتاج مساعدة؟",-1)),c[16]||(c[16]=r("small",null,"فريقنا جاهز لمساعدتك في الاختيار",-1)),n(z)?(a(),l("a",{key:0,href:n(z)},"تواصل معنا",8,_t)):j("",!0)])):j("",!0)]))}},Ct={class:"g-stepper"},Mt={class:"g-steps"},Et=["data-i"],jt={class:"bubble"},Bt={class:"step-count"},Lt='<path d="M20 6L9 17l-5-5"/>',At={__name:"GiftStepper",setup(D){const{state:z}=V();return(e,M)=>(a(),l("div",Ct,[r("div",Mt,[(a(!0),l(C,null,Y(n(Fr),(k,_)=>(a(),l("div",{key:_,class:B(["g-step",{active:_===n(z).step&&!n(z).done,done:_<n(z).step||n(z).done}]),"data-i":_},[M[0]||(M[0]=r("div",{class:"bar"},[r("i")],-1)),r("span",jt,[_<n(z).step||n(z).done?(a(),H(h,{key:0,inner:Lt,size:16})):(a(),l(C,{key:1},[x(b(_+1),1)],64))]),r("b",null,b(k.t),1),r("small",null,b(k.s),1)],10,Et))),128))]),r("div",Bt,"الخطوة "+b(Math.min(n(z).step+1,5))+" من 5",1)]))}},St={class:"shell"},It={class:"wrap",id:"giftsApp"},Dt={key:0,class:"gifts-hero"},Pt={class:"gifts-hero__copy"},Nt={class:"gifts-hero__ic"},Yt={class:"view on gift-type-full"},Vt={class:"container why-gift-row"},Gt={class:"wg-row"},Tt={class:"wi"},Ht={class:"container"},Ut={class:"help-bar"},Rt=["href"],Ot={class:"hi"},qt={key:2,class:"gift-stepper-compact"},Xt={class:"view on"},Wt={key:0,class:"gift-location-note"},Jt={key:0,id:"gsumWrap"},Kt={class:"wrap"},Qt={class:"f-grid"},Zt={class:"f-brand"},ro={class:"f-links"},no={class:"f-links"},bo={__name:"GiftsView",setup(D){const{whatsappUrl:z}=ir(),e=G(null),{current:M,openPicker:k,locations:_,loadServiceLocations:p}=sr();p();const{requireAuth:w}=kr(),{state:o,go:s,reset:f,placeGift:v}=V();yr(Pr,"gifts"),wr(e);const u=G(!1),E=G(""),S=G(!1);function $(d){E.value=d,S.value=!0,clearTimeout($._h),$._h=setTimeout(()=>{S.value=!1},2600)}const c=F(()=>!o.done&&o.step===0&&!o.gtype);function m(d){const t=()=>{var L;o.gtype=d,o.pkg=null,o.svcs=[],o.activeCat=null,o.branch=((L=M.value)==null?void 0:L.id)||o.branch,o.step=1,scrollTo({top:0,behavior:"smooth"})};if(d==="val"){o.gtype=d,o.pkg=null,o.svcs=[],o.step=1,scrollTo({top:0,behavior:"smooth"});return}k(t)}function P(){w(async()=>{u.value=!0;try{await v(),scrollTo({top:0,behavior:"smooth"})}catch(d){$(d.message||"تعذّر إتمام الإهداء، حاول مرة أخرى")}finally{u.value=!1}})}function T(){return o.claimToken?new URL(`/gift-recipient?token=${encodeURIComponent(o.claimToken)}`,location.origin).href:o.claimUrl||new URL("/gift-recipient",location.origin).href}const N={gift:'<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7s-2-5-5-5-3 5 0 5h5zM12 7s2-5 5-5 3 5 0 5h-5z"/>',head:'<path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>'},y=[["هدية رقمية فورية","تصلك فورًا عبر البريد الإلكتروني أو الواتساب.",'<path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4z"/>'],["تجربة فاخرة","أجواء راقية وخدمات تليق بمن تحب.",'<path d="M12 3l1.9 5.2L19 10l-5.1 1.8L12 17l-1.9-5.2L5 10l5.1-1.8z"/><path d="M18 3v3M19.5 4.5h-3"/>'],["صالحة لمدة 6 أشهر","يستخدمها المستلم في الوقت الذي يناسبه.",'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>'],["آمنة وموثوقة","هدية إلكترونية آمنة تصلك فورًا.",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>']];return(d,t)=>{const L=ar("RouterLink");return a(),l("div",{ref_key:"root",ref:e},[r("div",St,[r("div",It,[!n(o).done&&n(o).step===0?(a(),l("section",Dt,[r("div",Pt,[r("span",Nt,[g(h,{inner:N.gift,size:30},null,8,["inner"])]),t[6]||(t[6]=r("h1",null,"فاجئ من تحب",-1)),t[7]||(t[7]=r("p",null,"أهدِ خدمة أو باقة من عناية سامي، وقدِّم تجربة استرخاء متكاملة تجمع بين العناية الفاخرة وأدق التفاصيل. لتكون هدية تترك انطباعًا لا يُنسى.",-1))]),t[8]||(t[8]=r("div",{class:"gifts-hero__img"},[r("img",{src:dr,alt:"هدية عناية سامي"})],-1))])):j("",!0),c.value?(a(),l(C,{key:1},[r("div",Yt,[g(er,{onPick:m})]),r("div",Vt,[t[9]||(t[9]=r("div",{class:"section-title-sm"},[r("i"),r("h2",null,"لماذا تهدي من عناية سامي؟"),r("i")],-1)),r("div",Gt,[(a(),l(C,null,Y(y,(A,O)=>r("div",{key:O,class:"wg-col"},[r("span",Tt,[g(h,{inner:A[2],size:26},null,8,["inner"])]),r("b",null,b(A[0]),1),r("small",null,b(A[1]),1)])),64))])]),r("div",Ht,[r("div",Ut,[t[10]||(t[10]=r("div",{class:"help-bar__txt"},[r("b",null,"تحتاج مساعدة؟"),r("small",null,"فريقنا جاهز لمساعدتك في اختيار الهدية المناسبة.")],-1)),n(z)?(a(),l("a",{key:0,href:n(z),class:"btn btn-line"},"تواصل معنا",8,Rt)):j("",!0),r("span",Ot,[g(h,{inner:N.head,size:22},null,8,["inner"])])])])],64)):j("",!0),n(o).gtype&&(n(o).step>0||n(o).done)?(a(),l("div",qt,[g(At)])):j("",!0),c.value?j("",!0):(a(),l("div",{key:3,class:B(["g-stage",{"g-stage--pick":!n(o).done&&n(o).step===1}])},[r("main",Xt,[!n(o).done&&n(o).step>0&&n(o).gtype!=="val"?(a(),l("div",Wt,[g(Sr)])):j("",!0),n(o).done?(a(),H(Ue,{key:1,onRecipient:t[0]||(t[0]=A=>d.location.href=T()),onTrack:t[1]||(t[1]=A=>d.$router.push("/account?tab=gifts")),onNewGift:t[2]||(t[2]=A=>n(f)()),onShare:t[3]||(t[3]=A=>$("تم نسخ رابط الهدية للمشاركة")),onHome:t[4]||(t[4]=A=>d.$router.push("/")),onCopyRef:t[5]||(t[5]=A=>$("تم نسخ رقم الطلب"))})):n(o).step===0?(a(),H(er,{key:2,onPick:m})):n(o).step===1&&n(o).gtype==="val"?(a(),H(Wn,{key:3,onNav:n(s)},null,8,["onNav"])):n(o).step===1?(a(),H(Vn,{key:4,onNav:n(s)},null,8,["onNav"])):n(o).step===2?(a(),H(ke,{key:5,onNav:n(s)},null,8,["onNav"])):n(o).step===3?(a(),H(_e,{key:6,onNav:n(s),onPay:P},null,8,["onNav"])):j("",!0)]),n(o).done||n(o).step>=2?(a(),l("aside",Jt,[g(Ft)])):j("",!0)],2))])]),r("footer",null,[r("div",Kt,[r("div",Qt,[r("div",Zt,[g(L,{class:"logo",to:"/"},{default:I(()=>[...t[11]||(t[11]=[r("span",{class:"mark"},[r("img",{src:lr,alt:"عناية سامي",style:{width:"29px",height:"29px","object-fit":"contain"}})],-1),r("span",{class:"name"},[r("b",null,"عناية سامي"),r("span",null,"SAMI CARE")],-1)])]),_:1}),t[12]||(t[12]=W('<p>مركز متخصص في العناية الرجالية المتكاملة بجدة، حيث تلتقي الفخامة بالاحترافية في كل تفصيلة.</p><div class="socials"><a href="https://x.com/samicare_sa" aria-label="X"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-6.8 7.8L23.3 22h-6.3l-4.9-6.4L6.5 22H3.4l7.3-8.3L1 2h6.5l4.4 5.8L18.9 2zm-1.1 18h1.7L7.1 3.9H5.3L17.8 20z"></path></svg></a><a href="https://www.instagram.com/samicare.sa/" aria-label="انستقرام"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1" fill="currentColor"></circle></svg></a><a href="https://www.facebook.com/samicare.sa" aria-label="فيسبوك"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg></a></div>',2))]),r("div",null,[t[18]||(t[18]=r("h4",null,"روابط مهمة",-1)),r("ul",ro,[r("li",null,[g(L,{to:"/"},{default:I(()=>[...t[13]||(t[13]=[x("الرئيسية",-1)])]),_:1})]),r("li",null,[g(L,{to:"/booking"},{default:I(()=>[...t[14]||(t[14]=[x("حجز موعد",-1)])]),_:1})]),r("li",null,[g(L,{to:"/#services"},{default:I(()=>[...t[15]||(t[15]=[x("خدماتنا",-1)])]),_:1})]),r("li",null,[g(L,{to:"/packages-gifts"},{default:I(()=>[...t[16]||(t[16]=[x("الباقات",-1)])]),_:1})]),r("li",null,[g(L,{to:"/gifts"},{default:I(()=>[...t[17]||(t[17]=[x("الهدايا",-1)])]),_:1})])])]),r("div",null,[t[24]||(t[24]=r("h4",null,"استكشف",-1)),r("ul",no,[r("li",null,[g(L,{to:"/store"},{default:I(()=>[...t[19]||(t[19]=[x("المتجر",-1)])]),_:1})]),r("li",null,[g(L,{to:"/branches"},{default:I(()=>[...t[20]||(t[20]=[x("فروعنا",-1)])]),_:1})]),r("li",null,[g(L,{to:"/contact"},{default:I(()=>[...t[21]||(t[21]=[x("تواصل معنا",-1)])]),_:1})]),r("li",null,[g(L,{to:"/terms"},{default:I(()=>[...t[22]||(t[22]=[x("الشروط والأحكام",-1)])]),_:1})]),r("li",null,[g(L,{to:"/privacy-policy"},{default:I(()=>[...t[23]||(t[23]=[x("سياسة الخصوصية",-1)])]),_:1})])])]),r("div",null,[t[26]||(t[26]=r("h3",null,"عناوين الفروع",-1)),(a(!0),l(C,null,Y(n(_),A=>(a(),l(C,{key:A.id},[r("b",null,b(A.name),1),r("p",null,[x(b(A.address),1),A.contact_number?(a(),l(C,{key:0},[t[25]||(t[25]=r("br",null,null,-1)),x(b(A.contact_number),1)],64)):j("",!0)])],64))),128))])]),t[27]||(t[27]=W('<div class="f-bottom"><small>© 2026 عناية سامي — جميع الحقوق محفوظة</small><div class="pay" aria-label="بوابات الدفع"><span title="Visa">VISA</span><span title="Mastercard">Mastercard</span><span title="مدى">mada</span><span title="Tabby">tabby</span><span title="Apple Pay">Pay</span></div></div>',1))])]),r("div",{class:B(["pay-loading",{on:u.value}]),id:"payLoading"},[...t[28]||(t[28]=[r("div",{class:"pl-box"},[r("div",{class:"pl-ring"}),r("b",null,"جارٍ إتمام الإهداء بأمان…"),r("small",null,"سيتم إرسال الهدية مباشرة بعد إتمام الدفع")],-1)])],2),r("div",{class:B(["toast",{on:S.value}]),id:"toast"},[r("span",null,b(E.value),1)],2)],512)}}};export{bo as default};
