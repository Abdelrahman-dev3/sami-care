import{i as M,N as xn,o as a,c as l,b as n,n as L,u as e,d as p,V as y,a as g,F,_ as rn,r as T,s as fn,K as bn,j as mn,l as O,L as un,e as N,q as B,t as f,I as H,$ as vn,x as an,w as W,k as hn,M as kn,Q as U,A as sn,m as S,E as K,h as ln,a1 as pn,p as R,P as yn}from"./index-BWc_r5XW.js";import{u as wn}from"./usePageStyles-CFfKXM_a.js";import{u as zn}from"./useInternalLinks-B6-MGd4J.js";import{p as nn}from"./paymentPolicy-Dun9PtFA.js";import{c as _n,D as dn,G as gn,S as Q,P as $n,a as Fn,b as Cn,d as Mn}from"./GiftCard-De1PZkAe.js";import{i as En}from"./PaymentMethodList-rNLOaUD5.js";import{a as jn}from"./giftIcons-C3hH12nn.js";import{u as Bn,r as Ln,C as An}from"./CheckoutPaymentOptions-DYllilEe.js";import{_ as en}from"./SkeletonLoader-CelJxdQQ.js";import{L as In}from"./LocationNotice-BJNsjiVi.js";import"./accountApi-Co9U6okJ.js";const Sn="/images/gifts/hero.jpg",Pn=.15,Dn=P=>dn.find(b=>b.id===P),s=xn({step:0,gtype:null,branch:null,activeCat:null,pkg:null,svcs:[],sort:"pop",favs:[],sender:"",name:"",phone:"",msg:"",design:"lux-dark",method:"wa",when:"now",schedDate:"",pay:null,terms:!1,placing:!1,done:!1,ref:null,claimUrl:null,claimToken:null,walletBalance:null});function V(){const P=k=>s.svcs.some(w=>w.id===k),b=k=>{const w=s.svcs.findIndex(j=>j.id===k.id);w===-1?s.svcs.push(k):s.svcs.splice(w,1)},o=k=>s.favs.includes(k),E=k=>{const w=s.favs.indexOf(k);w===-1?s.favs.push(k):s.favs.splice(w,1)},z=M(()=>{var k;return s.gtype==="svc"?s.svcs.reduce((w,j)=>w+j.price,0):((k=s.pkg)==null?void 0:k.price)||0}),_=M(()=>{var k;return s.gtype==="svc"?s.svcs.length?s.svcs.map(w=>w.name).join(" + "):null:((k=s.pkg)==null?void 0:k.name)||null}),c=M(()=>{const k=z.value,w=Math.round(k*Pn);return{val:k,vat:w,total:k+w}}),m=M(()=>{switch(s.step){case 0:return!!s.gtype;case 1:return s.gtype==="svc"?s.svcs.length>0:!!s.pkg;case 2:return s.name.trim().length>1&&s.phone.trim().length>=9;case 3:return nn.canPay(s,c.value.total)&&s.terms&&!s.placing}return!1});function t(k){k>0&&!m.value||(s.step+=k,s.step<0&&(s.step=0),scrollTo({top:0,behavior:"smooth"}))}function u(){s.step=0,s.gtype=null,s.pkg=null,s.svcs=[],s.done=!1,s.ref=null,s.claimUrl=null,s.pay=null,s.terms=!1,s.useWallet=!1,s.walletAmount=0,s.useLoyalty=!1,s.loyaltyPointsUsed=0}async function A(){var k,w,j,$;if(!m.value)return null;s.placing=!0;try{const d=s.branch==="home-service"?0:Number.isInteger(s.branch)?s.branch:null,C={location:{recipient_name:s.name.trim(),recipient_mobile:s.phone.trim(),message:s.msg.trim()||void 0,sender_name:s.sender.trim()||void 0},design:s.design,branch:d,send_channel:s.method||"link"};s.gtype==="svc"?C.services=[{subServices:s.svcs.map(I=>({id:I.id}))}]:C.packages=[{id:s.pkg.id}];const x=await _n(C),{gateway:D,...G}=nn.payment(s,c.value.total),Y=await En(D,G);return Y.payment_url?(window.location.href=Y.payment_url,{created:x,payment:Y}):(s.ref=(k=x==null?void 0:x.data)!=null&&k.gift_card_id?`#GIFT-${x.data.gift_card_id}`:"#GIFT",s.claimUrl=((w=x==null?void 0:x.data)==null?void 0:w.share_url)||((j=x==null?void 0:x.data)==null?void 0:j.claim_url)||null,s.claimToken=(($=x==null?void 0:x.data)==null?void 0:$.claim_token)||null,s.done=!0,s.step=4,{created:x,payment:Y})}finally{s.placing=!1}}return{state:s,dsgOf:Dn,hasSvc:P,toggleSvc:b,isFav:o,toggleFav:E,giftValue:z,giftLabel:_,priceParts:c,canNext:m,go:t,reset:u,placeGift:A}}const Yn=`
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
.help-bar__txt{flex:1;text-align:start}
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
  display:grid;grid-template-columns:220px 1fr;gap:24px;align-items:center;text-align:start}
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
`,Nn="/images/gifts/service.jpg",Tn="/images/gifts/package.jpg",Vn={class:"gtype-grid"},Gn={class:"im"},Hn={class:"ic"},Rn={class:"bd"},Un={class:"go"},On={class:"im"},qn={class:"ic"},Xn={class:"bd"},Wn={class:"go"},tn={__name:"GiftTypeStep",emits:["pick"],setup(P,{emit:b}){const{state:o}=V(),E=b,z={chair:'<path d="M3 18v-6a2 2 0 012-2h14a2 2 0 012 2v6"/><path d="M5 18v2M19 18v2M7 10V7a2 2 0 012-2h6a2 2 0 012 2v3"/>',gift:'<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7s-2-5-5-5-3 5 0 5h5zM12 7s2-5 5-5 3 5 0 5h-5z"/>',arrow:'<path d="M19 12H5M11 18l-6-6 6-6"/>'};return(_,c)=>(a(),l(F,null,[c[10]||(c[10]=n("div",{class:"g-head"},[n("h1",null,"ماذا ترغب بإهدائه؟"),n("p",null,"اختر ما يناسبك لإهداء تجربة مميزة لمن تحب")],-1)),n("div",Vn,[n("div",{class:L(["gtype",{sel:e(o).gtype==="svc"}]),"data-gt":"svc",onClick:c[0]||(c[0]=m=>E("pick","svc"))},[n("div",Gn,[c[2]||(c[2]=n("img",{src:Nn,alt:"إهداء خدمة"},null,-1)),n("span",Hn,[p(y,{inner:z.chair,size:20},null,8,["inner"])])]),n("div",Rn,[c[4]||(c[4]=n("h3",null,"إهداء خدمة",-1)),c[5]||(c[5]=n("p",null,[g("اختر خدمة واحدة أو أكثر"),n("br"),g("وأهدِها لمن تحب.")],-1)),n("span",Un,[p(y,{inner:z.arrow,size:14},null,8,["inner"]),c[3]||(c[3]=g(" اختر خدمة لإهدائها",-1))])])],2),n("div",{class:L(["gtype",{sel:e(o).gtype==="pkg"}]),"data-gt":"pkg",onClick:c[1]||(c[1]=m=>E("pick","pkg"))},[n("div",On,[c[6]||(c[6]=n("img",{src:Tn,alt:"إهداء باقة"},null,-1)),n("span",qn,[p(y,{inner:z.gift,size:20},null,8,["inner"])])]),n("div",Xn,[c[8]||(c[8]=n("h3",null,"إهداء باقة",-1)),c[9]||(c[9]=n("p",null,[g("اختر باقة مصممة بعناية"),n("br"),g("لتمنح تجربة متكاملة لمن تحب.")],-1)),n("span",Wn,[p(y,{inner:z.arrow,size:14},null,8,["inner"]),c[7]||(c[7]=g(" اختر باقة لإهدائها",-1))])])],2)])],64))}},Kn={key:0,class:"empty-hint",style:{display:"grid",gap:"10px"}},Qn={class:"cat-row"},Jn=["data-cat","onClick"],Zn=["src","alt"],ne={class:"chk"},ee={class:"lbl"},te={key:0,class:"empty-hint"},oe={key:1,class:"sub-block"},re={class:"sub-title"},ae={class:"sub-title__main"},ie={class:"tick"},se=["innerHTML"],le={key:0,class:"empty-hint"},pe={key:1,class:"subs"},de=["data-sv","onClick"],ge={class:"top"},ce={class:"chk"},xe={class:"foot"},fe={class:"dur"},be={class:"prc"},me={class:"inline-actions"},ue=["disabled"],ve={class:"gp-sort"},he={key:0,class:"empty-hint"},ke={key:1,class:"caro-wrap"},ye={class:"caro",id:"caro"},we=["data-gp","onClick"],ze={class:"ph"},_e=["src","alt"],$e={key:0,class:"hotflag"},Fe=["data-fav","onClick"],Ce={class:"chk"},Me={class:"bd"},Ee={class:"dur"},je={class:"desc"},Be={class:"inc-box"},Le={class:"prc"},Ae={class:"pick"},Ie={class:"inline-actions"},Se=["disabled"],Pe={__name:"GiftPickStep",emits:["nav"],setup(P,{emit:b}){const{state:o,hasSvc:E,toggleSvc:z,isFav:_,toggleFav:c}=V(),{filteredPkgs:m}=Bn(),t=b,{state:u}=hn(),A=h=>kn(h,u.lang),k=h=>h.toLocaleString("ar-EG-u-nu-latn"),w={check:'<path d="M20 6L9 17l-5-5"/>',heart:'<path d="M12 21s-7-4.4-9.3-8.5C.8 9 2.6 5.5 6 5.5c2 0 3.4 1.1 4 2.3.6-1.2 2-2.3 4-2.3 3.4 0 5.2 3.5 3.3 7-2.3 4.1-9.3 8.5-9.3 8.5z"/>',prev:'<path d="M5 12h14M13 6l6 6-6 6"/>',next:'<path d="M19 12H5M11 18l-6-6 6-6"/>',chevR:'<path d="M9 6l6 6-6 6"/>',chevL:'<path d="M15 6l-6 6 6 6"/>'},j=T([]),$=T(!0);fn(async()=>{try{const h=await bn();j.value=h!=null&&h.status?h.data||[]:[]}catch{j.value=[]}finally{$.value=!1}});const d=M(()=>j.value.map(h=>({id:h.id,name:O(h,"name",u.lang),image:mn(h.image)||h.feature_image||null}))),C=M(()=>j.value.find(h=>h.id===o.activeCat)||null),x=M(()=>O(C.value,"name",u.lang)),D=M(()=>{var h;return(((h=C.value)==null?void 0:h.services)||[]).map(r=>({id:r.id,categoryId:C.value.id,categoryNameT:un(C.value,"name"),get categoryName(){return A(this.categoryNameT)},get name(){return O(r,"name",u.lang)},get desc(){return O(r,"description",u.lang)},dur:r.duration_min,price:r.default_price}))}),G=h=>o.svcs.some(r=>r.categoryId===h),Y=M(()=>D.value.filter(h=>E(h.id)).length),I=M(()=>m.value.slice().sort((h,r)=>o.sort==="low"?h.price-r.price:o.sort==="high"?r.price-h.price:(r.hot?1:0)-(h.hot?1:0)));function i(h){const r=document.getElementById("caro");r&&r.scrollBy({left:h*300,behavior:"smooth"})}return(h,r)=>e(o).gtype==="svc"?(a(),l(F,{key:0},[r[11]||(r[11]=n("div",{class:"g-head"},[n("h1",null,"اختر الخدمة التي ترغب بإهدائها"),n("p",null,"يمكنك اختيار خدمة واحدة أو أكثر")],-1)),$.value?(a(),l("div",Kn,[p(en,{height:"64px","border-radius":"12px"}),p(en,{height:"92px","border-radius":"12px"})])):(a(),l(F,{key:1},[n("div",Qn,[(a(!0),l(F,null,N(d.value,v=>(a(),l("div",{key:v.id,class:L(["cat",{sel:e(o).activeCat===v.id,"has-picks":G(v.id)}]),"data-cat":v.id,onClick:q=>e(o).activeCat=v.id},[v.image?(a(),l("img",{key:0,src:v.image,alt:v.name,loading:"lazy"},null,8,Zn)):B("",!0),n("span",ne,[p(y,{inner:w.check,size:11},null,8,["inner"])]),n("span",ee,f(v.name),1)],10,Jn))),128))]),e(o).activeCat?(a(),l("div",oe,[n("div",re,[n("span",ae,[g(" خدمات "+f(x.value)+" ",1),n("span",ie,[(a(),l("svg",{viewBox:"0 0 24 24","aria-hidden":"true",innerHTML:e(jn)()},null,8,se))])]),n("small",null,f(Y.value?Y.value+" مختارة":"اختر خدمة أو أكثر"),1)]),D.value.length?(a(),l("div",pe,[(a(!0),l(F,null,N(D.value,v=>(a(),l("div",{key:v.id,class:L(["sub",{sel:e(E)(v.id)}]),"data-sv":v.id,onClick:q=>e(z)(v)},[n("div",ge,[n("b",null,f(v.name),1),n("span",ce,[p(y,{inner:w.check,size:12},null,8,["inner"])])]),n("small",null,f(v.desc),1),n("div",xe,[n("span",fe,"🕐 "+f(v.dur)+" دقيقة",1),n("span",be,[g(f(k(v.price))+" ",1),r[8]||(r[8]=n("small",null,"ر.س",-1))])])],10,de))),128))])):(a(),l("div",le,"لا توجد خدمات متاحة حاليًا ضمن هذا القسم"))])):(a(),l("div",te,[...r[7]||(r[7]=[n("b",null,"اختر خدمة لعرض تفاصيلها",-1),g("اختر إحدى الخدمات الأساسية أعلاه لعرض الخدمات الفرعية المتاحة",-1)])]))],64)),n("div",me,[n("button",{class:"btn btn-prev","data-nav":"back",onClick:r[0]||(r[0]=v=>t("nav",-1))},[p(y,{inner:w.prev,size:15},null,8,["inner"]),r[9]||(r[9]=g(" رجوع",-1))]),n("button",{class:"btn btn-gold","data-nav":"next",disabled:!e(o).svcs.length,onClick:r[1]||(r[1]=v=>t("nav",1))},[r[10]||(r[10]=g("التالي: تخصيص الهدية ",-1)),p(y,{inner:w.next,size:15},null,8,["inner"])],8,ue)])],64)):(a(),l(F,{key:1},[r[17]||(r[17]=n("div",{class:"g-head"},[n("h1",null,"اختر الباقة التي ترغب بإهدائها"),n("p",null,"باقات مميزة تمنح تجربة متكاملة من الاسترخاء والعناية")],-1)),n("div",ve,[H(n("select",{id:"gpSort","onUpdate:modelValue":r[2]||(r[2]=v=>e(o).sort=v)},[...r[12]||(r[12]=[n("option",{value:"pop"},"الأكثر طلبًا",-1),n("option",{value:"low"},"السعر: الأقل أولًا",-1),n("option",{value:"high"},"السعر: الأعلى أولًا",-1)])],512),[[vn,e(o).sort]]),n("small",null,f(I.value.length)+" باقات متاحة — مرّر لاستعراض المزيد",1)]),I.value.length?(a(),l("div",ke,[n("button",{class:"caro-btn r","data-caro":"1",onClick:r[3]||(r[3]=v=>i(1))},[p(y,{inner:w.chevR,size:15},null,8,["inner"])]),n("button",{class:"caro-btn l","data-caro":"-1",onClick:r[4]||(r[4]=v=>i(-1))},[p(y,{inner:w.chevL,size:15},null,8,["inner"])]),n("div",ye,[(a(!0),l(F,null,N(I.value,(v,q)=>{var J,Z;return a(),l("div",{key:v.id,class:L(["gpkg",{sel:((J=e(o).pkg)==null?void 0:J.id)===v.id}]),"data-gp":v.id,style:an(`--pc:${v.hex};animation-delay:${q*.05}s`),onClick:X=>e(o).pkg=v},[n("div",ze,[n("img",{src:v.img,alt:v.name},null,8,_e),v.hot?(a(),l("span",$e,"الأكثر طلبًا")):B("",!0),n("button",{class:L(["fav",{on:e(_)(v.id)}]),"data-fav":v.id,onClick:W(X=>e(c)(v.id),["stop"])},[p(y,{inner:w.heart,size:14},null,8,["inner"])],10,Fe),n("span",Ce,[p(y,{inner:w.check,size:13},null,8,["inner"])])]),n("div",Me,[n("h4",null,f(v.name),1),n("div",Ee,"🕐 "+f(v.dur)+" دقيقة",1),n("div",je,f(v.desc),1),n("div",Be,[r[13]||(r[13]=n("b",{class:"inc-title"},"تشمل الباقة",-1)),(a(!0),l(F,null,N(v.inc,(X,cn)=>(a(),l("div",{key:cn,style:{padding:"2px 0"}},"✓ "+f(X),1))),128))]),n("div",Le,[g(f(e(Ln)(v.price))+" ",1),r[14]||(r[14]=n("small",null,"ر.س",-1))]),n("button",Ae,f(((Z=e(o).pkg)==null?void 0:Z.id)===v.id?"تم الاختيار ✓":"استعرض الباقة"),1)])],14,we)}),128))])])):(a(),l("div",he,"لا توجد باقات متاحة حاليًا")),n("div",Ie,[n("button",{class:"btn btn-prev","data-nav":"back",onClick:r[5]||(r[5]=v=>t("nav",-1))},[p(y,{inner:w.prev,size:15},null,8,["inner"]),r[15]||(r[15]=g(" رجوع",-1))]),n("button",{class:"btn btn-gold","data-nav":"next",disabled:!e(o).pkg,onClick:r[6]||(r[6]=v=>t("nav",1))},[r[16]||(r[16]=g("التالي: تخصيص الهدية ",-1)),p(y,{inner:w.next,size:15},null,8,["inner"])],8,Se)])],64))}},De=rn(Pe,[["__scopeId","data-v-bc65cf47"]]),Ye={class:"custom-grid"},Ne={class:"preview-col"},Te={id:"cardPrev"},Ve={class:"form-col"},Ge={class:"card",style:{"margin-bottom":"14px"}},He={class:"two"},Re={class:"fld"},Ue={class:"fld"},Oe={class:"two"},qe={class:"fld",style:{"margin-bottom":"4px"}},Xe={class:"fld",style:{"margin-bottom":"4px"}},We={class:"card",style:{"margin-bottom":"14px"}},Ke={class:"designs"},Qe=["data-d","onClick"],Je={class:"dchk"},Ze={style:{visibility:"hidden"},"aria-hidden":"true"},nt={class:"card"},et={class:"methods"},tt=["data-m","onClick"],ot={class:"mi"},rt={class:"send-opts",style:{"margin-top":"16px","margin-bottom":"0"}},at={class:"fld",style:{margin:"0"}},it={class:"inline-actions"},st=["disabled"],lt={__name:"GiftCustomizeStep",emits:["nav"],setup(P,{emit:b}){const{state:o,canNext:E}=V(),z=b,_=M(()=>200-o.msg.length),c={eye:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',user:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',brush:'<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.6 7.6"/><circle cx="11" cy="11" r="2"/>',send:'<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>',check:'<path d="M20 6L9 17l-5-5"/>',prev:'<path d="M5 12h14M13 6l6 6-6 6"/>',next:'<path d="M19 12H5M11 18l-6-6 6-6"/>'};return(m,t)=>(a(),l(F,null,[t[23]||(t[23]=n("div",{class:"g-head"},[n("h1",null,"خصص هديتك لتكون أجمل 🤍"),n("p",null,"أضف لمستك الخاصة مع رسالة وتصميم بطاقة الإهداء")],-1)),n("div",Ye,[n("div",Ne,[n("h4",null,[p(y,{inner:c.eye,size:16},null,8,["inner"]),t[9]||(t[9]=g(" معاينة بطاقة الإهداء",-1))]),n("div",Te,[p(gn,{design:e(o).design,recipient:e(o).name,sender:e(o).sender,message:e(o).msg},null,8,["design","recipient","sender","message"])])]),n("div",Ve,[n("div",Ge,[n("h4",null,[p(y,{inner:c.user,size:16},null,8,["inner"]),t[10]||(t[10]=g(" بيانات الإهداء",-1))]),n("div",He,[n("div",Re,[t[11]||(t[11]=n("label",null,"اسم المُهدي (أنت)",-1)),H(n("input",{id:"gSender",placeholder:"اسمك","onUpdate:modelValue":t[0]||(t[0]=u=>e(o).sender=u)},null,512),[[U,e(o).sender]])]),n("div",Ue,[t[12]||(t[12]=n("label",null,"اسم المهدى إليه",-1)),H(n("input",{id:"gName",placeholder:"أدخل الاسم","onUpdate:modelValue":t[1]||(t[1]=u=>e(o).name=u)},null,512),[[U,e(o).name]])])]),n("div",Oe,[n("div",qe,[t[13]||(t[13]=n("label",null,"رقم جوال المستلم",-1)),H(n("input",{id:"gPhone",dir:"ltr",placeholder:"05xxxxxxxx","onUpdate:modelValue":t[2]||(t[2]=u=>e(o).phone=u)},null,512),[[U,e(o).phone]])])]),n("div",Xe,[t[14]||(t[14]=n("label",null,"الرسالة الشخصية",-1)),H(n("textarea",{id:"gMsg",maxlength:"200",placeholder:"اكتب رسالتك الخاصة هنا...","onUpdate:modelValue":t[3]||(t[3]=u=>e(o).msg=u)},null,512),[[U,e(o).msg]]),n("span",{class:L(["cnt",{max:_.value<20}]),id:"gCnt"},f(e(o).msg.length)+"/200",3)])]),n("div",We,[n("h4",null,[p(y,{inner:c.brush,size:16},null,8,["inner"]),t[15]||(t[15]=g(" تصميم بطاقة الإهداء",-1))]),n("div",Ke,[(a(!0),l(F,null,N(e(dn),u=>(a(),l("div",{key:u.id,class:L(["design",{sel:e(o).design===u.id}]),"data-d":u.id,onClick:A=>e(o).design=u.id},[n("div",{class:"sw",style:an(`background:${u.bg};color:${u.fg}`)},[n("span",Je,[p(y,{inner:c.check,size:10},null,8,["inner"])]),t[16]||(t[16]=g("SAMI",-1))],4),n("small",Ze,f(u.n),1)],10,Qe))),128))])]),n("div",nt,[n("h4",null,[p(y,{inner:c.send,size:16},null,8,["inner"]),t[17]||(t[17]=g(" طريقة وتوقيت الإرسال",-1))]),n("div",et,[(a(!0),l(F,null,N(e(Q),u=>(a(),l("div",{key:u.id,class:L(["mth",{sel:e(o).method===u.id}]),"data-m":u.id,onClick:A=>e(o).method=u.id},[n("span",ot,[p(y,{inner:u.ic,size:17},null,8,["inner"])]),g(f(u.n),1)],10,tt))),128))]),n("div",rt,[n("span",{class:L(["ro",{on:e(o).when==="now"}]),"data-w":"now",onClick:t[4]||(t[4]=u=>e(o).when="now")},[...t[18]||(t[18]=[n("i",null,null,-1),g(" 🚀 إرسال الآن — سيتم إرسال الهدية فورًا",-1)])],2),n("span",{class:L(["ro",{on:e(o).when==="later"}]),"data-w":"later",onClick:t[5]||(t[5]=u=>e(o).when="later")},[...t[19]||(t[19]=[n("i",null,null,-1),g(" 📅 جدولة لاحقًا",-1)])],2)]),n("div",{class:L(["sched-box",{open:e(o).when==="later"}])},[n("div",at,[t[20]||(t[20]=n("label",null,"اختر التاريخ والوقت المناسب",-1)),H(n("input",{type:"datetime-local",id:"gSched","onUpdate:modelValue":t[6]||(t[6]=u=>e(o).schedDate=u)},null,512),[[U,e(o).schedDate]])])],2)]),n("div",it,[n("button",{class:"btn btn-prev","data-nav":"back",onClick:t[7]||(t[7]=u=>z("nav",-1))},[p(y,{inner:c.prev,size:15},null,8,["inner"]),t[21]||(t[21]=g(" رجوع",-1))]),n("button",{class:"btn btn-gold","data-nav":"next",disabled:!e(E),onClick:t[8]||(t[8]=u=>z("nav",1))},[t[22]||(t[22]=g("متابعة إلى الدفع ",-1)),p(y,{inner:c.next,size:15},null,8,["inner"])],8,st)])])])],64))}},pt={class:"card",style:{padding:"22px"}},dt={class:"inline-actions"},gt=["disabled"],ct={__name:"GiftPayStep",emits:["nav","pay"],setup(P,{emit:b}){const{state:o,canNext:E,priceParts:z}=V(),_=b,c={check:'<path d="M20 6L9 17l-5-5"/>',prev:'<path d="M5 12h14M13 6l6 6-6 6"/>',lock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>'};return(m,t)=>{const u=sn("RouterLink");return a(),l(F,null,[t[12]||(t[12]=n("div",{class:"g-head"},[n("h1",null,"الدفع"),n("p",null,"اختر طريقة الدفع المناسبة وأكمل إهداءك")],-1)),n("div",pt,[p(An,{state:e(o),total:e(z).total},null,8,["state","total"]),n("span",{class:L(["terms-chk",{on:e(o).terms}]),id:"termsChk",onClick:t[2]||(t[2]=A=>e(o).terms=!e(o).terms)},[n("i",null,[p(y,{inner:c.check,size:11},null,8,["inner"])]),t[7]||(t[7]=g(" أوافق على ",-1)),p(u,{to:"/terms",onClick:t[0]||(t[0]=W(()=>{},["stop"]))},{default:S(()=>[...t[5]||(t[5]=[g("الشروط والأحكام",-1)])]),_:1}),t[8]||(t[8]=g(" و",-1)),p(u,{to:"/privacy-policy",onClick:t[1]||(t[1]=W(()=>{},["stop"]))},{default:S(()=>[...t[6]||(t[6]=[g("سياسة الخصوصية",-1)])]),_:1})],2),n("div",dt,[n("button",{class:"btn btn-prev","data-nav":"back",onClick:t[3]||(t[3]=A=>_("nav",-1))},[p(y,{inner:c.prev,size:15},null,8,["inner"]),t[9]||(t[9]=g(" الرجوع",-1))]),n("button",{class:"btn btn-gold",id:"doPay",disabled:!e(E),onClick:t[4]||(t[4]=A=>_("pay"))},[p(y,{inner:c.lock,size:15},null,8,["inner"]),t[10]||(t[10]=g(" إتمام الإهداء",-1))],8,gt)]),t[11]||(t[11]=n("div",{class:"after-pay"},"سيتم إرسال الهدية مباشرة بعد إتمام الدفع",-1))])],64)}}},xt={class:"gsuccess",style:{"padding-top":"4px"}},ft={class:"gsuc-box"},bt={class:"gs-row"},mt={class:"k"},ut={class:"v"},vt={class:"gs-row"},ht={class:"k"},kt={class:"v"},yt={class:"gs-row"},wt={class:"k"},zt={class:"v"},_t={class:"gs-row"},$t={class:"k"},Ft={class:"gsuc-actions"},Ct={key:0,class:"gift-share-panel"},Mt={class:"gift-share-row"},Et=["value"],jt={key:0},Bt={__name:"GiftSuccess",emits:["recipient","track","new-gift","share","home","copy-ref"],setup(P,{emit:b}){const{state:o,giftLabel:E}=V(),z=b,_=T(!1),c=T(!1),m=["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],t=new Date,u=M(()=>{const C=Q.find(x=>x.id===o.method);return C?C.n:""}),A=M(()=>o.when==="now"?`اليوم ${t.getDate()} ${m[t.getMonth()]} ${t.getFullYear()}`:"مجدولة — "+(o.schedDate||"")),k=M(()=>o.claimToken?new URL(`/gift-recipient?token=${encodeURIComponent(o.claimToken)}`,window.location.origin).href:o.claimUrl||"");function w(){if(!k.value)return;const C=String(o.phone||"").replace(/\D/g,""),x=encodeURIComponent(`لديك هدية من عناية سامي ✨
${k.value}`);window.open(`https://wa.me/${C}?text=${x}`,"_blank","noopener")}function j(){_.value=!0,c.value=!1,k.value&&window.open(k.value,"_blank","noopener,noreferrer")}async function $(){try{if(navigator&&navigator.clipboard)await navigator.clipboard.writeText(k.value);else{const C=document.getElementById("gift-share-link");C&&(C.focus(),C.select(),document.execCommand("copy"))}c.value=!0,setTimeout(()=>{c.value=!1},2200)}catch{alert("تعذّر نسخ الرابط، يمكنك نسخه يدويًا من الحقل أدناه.")}}const d={user:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',send:'<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',copy:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>',plus:'<path d="M12 5v14M5 12h14"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>',home:'<path d="M3 9l9-6 9 6v11a1 1 0 01-1 1H4a1 1 0 01-1-1z"/>'};return(C,x)=>(a(),l("div",xt,[x[12]||(x[12]=K('<div class="gs-hero" data-v-10e7bc68><span class="spark" style="top:0;right:8px;" data-v-10e7bc68>✦</span><span class="spark" style="bottom:14px;left:2px;animation-delay:-1.2s;" data-v-10e7bc68>✧</span><span class="circ" data-v-10e7bc68><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" data-v-10e7bc68><path d="M20 6L9 17l-5-5" data-v-10e7bc68></path></svg></span><span class="gbox" data-v-10e7bc68></span></div><h1 data-v-10e7bc68>تم إرسال الهدية بنجاح</h1><p class="sub" data-v-10e7bc68>تم تجهيز هديتك وإرسالها للمستلم بنجاح، وسيتم إشعاره فور استلامها ✨</p>',3)),n("div",ft,[p(gn,{design:e(o).design,recipient:e(o).name,sender:e(o).sender,message:e(o).msg},null,8,["design","recipient","sender","message"]),n("div",null,[n("h3",null,"إهداء "+f(e(E)),1),n("div",bt,[n("span",mt,[p(y,{inner:d.user,size:14},null,8,["inner"]),x[4]||(x[4]=g(" إلى",-1))]),n("span",ut,f(e(o).name),1)]),n("div",vt,[n("span",ht,[p(y,{inner:d.send,size:14},null,8,["inner"]),x[5]||(x[5]=g(" طريقة الإرسال",-1))]),n("span",kt,f(u.value),1)]),n("div",yt,[n("span",wt,[p(y,{inner:d.clock,size:14},null,8,["inner"]),x[6]||(x[6]=g(" وقت الإرسال",-1))]),n("span",zt,f(A.value),1)]),n("div",_t,[n("span",$t,[p(y,{inner:d.copy,size:14},null,8,["inner"]),x[7]||(x[7]=g(" رقم الطلب",-1))]),n("span",{class:"v copy-ref",id:"copyRef",dir:"ltr",onClick:x[0]||(x[0]=D=>z("copy-ref"))},f(e(o).ref)+" ⧉",1)])])]),n("div",Ft,[n("button",{class:"btn btn-line",id:"newGift",onClick:x[1]||(x[1]=D=>z("new-gift"))},[p(y,{inner:d.plus,size:15},null,8,["inner"]),x[8]||(x[8]=g(" إهداء جديد",-1))]),n("button",{class:"btn btn-line",id:"shareGift",onClick:x[2]||(x[2]=D=>{j(),z("share")})},[p(y,{inner:d.share,size:15},null,8,["inner"]),x[9]||(x[9]=g(" مشاركة الهدية ",-1))]),n("button",{class:"btn btn-line",id:"goHome",onClick:x[3]||(x[3]=D=>z("home"))},[p(y,{inner:d.home,size:15},null,8,["inner"]),x[10]||(x[10]=g(" العودة للرئيسية",-1))])]),_.value?(a(),l("div",Ct,[x[11]||(x[11]=n("label",null,"رابط الهدية",-1)),n("div",Mt,[n("input",{id:"gift-share-link",type:"text",value:k.value,readonly:""},null,8,Et),e(o).method==="wa"?(a(),l("button",{key:0,class:"btn btn-gold",onClick:w},"إرسال عبر واتساب")):B("",!0),n("button",{class:"btn btn-gold",onClick:$},"نسخ الرابط")]),c.value?(a(),l("small",jt,"تم نسخ الرابط بنجاح")):B("",!0)])):B("",!0),x[13]||(x[13]=n("div",{class:"thanks"},[n("i",null,"❦"),g(" شكرًا لاختيارك عناية سامي لتقديم تجربة مميزة لمن تحب "),n("i",null,"❦")],-1))]))}},Lt=rn(Bt,[["__scopeId","data-v-10e7bc68"]]),At={class:"gsum"},It={class:"card"},St={key:0,class:"pkline"},Pt=["src"],Dt={key:1},Yt={class:"pr"},Nt={key:1,style:{"text-align":"center","margin-bottom":"14px"}},Tt={style:{position:"absolute",top:"-5px",right:"14px",width:"46px",opacity:".9"},viewBox:"0 0 64 40",fill:"none",stroke:"currentColor","stroke-width":"2"},Vt={style:{display:"block","font-family":"var(--font-d)",color:"var(--ink)","font-size":"14.5px"}},Gt={style:{display:"block",color:"var(--ink)","font-size":"12px","font-weight":"700","margin-top":"8px"}},Ht={style:{display:"block",color:"var(--mute)","font-size":"11.5px","margin-top":"4px","line-height":"1.7"}},Rt={key:2,class:"gs-row"},Ut={class:"v"},Ot={class:"gs-row"},qt={class:"v"},Xt={class:"gs-row"},Wt={class:"v"},Kt={class:"gs-row"},Qt={class:"v"},Jt={class:"gs-row"},Zt={class:"v"},no={class:"chip"},eo={class:"gs-row"},to={class:"v"},oo={class:"sum-like",style:{"margin-top":"10px","padding-top":"12px","border-top":"1px dashed var(--line)"}},ro={class:"v"},ao={class:"v"},io={class:"gs-total"},so={class:"v"},lo={class:"gs-note"},po={key:0,class:"card help-card"},go={class:"hi"},co="background:linear-gradient(150deg,#1D1810,#0B0906);color:#E8BE6C;max-width:190px;margin:0 auto 12px;aspect-ratio:16/10;border-radius:14px;display:grid;place-items:center;box-shadow:0 16px 30px -16px rgba(20,15,5,.5);position:relative",on="border:none;padding:4px 0",xo={__name:"GiftSummary",setup(P){const{state:b,priceParts:o,giftLabel:E,dsgOf:z}=V(),{current:_}=ln(),c=$=>$.toLocaleString("ar-EG-u-nu-latn"),m=M(()=>o.value),t=M(()=>E.value);M(()=>z(b.design));const u=M(()=>b.gtype==="svc"?null:b.pkg?b.pkg.img:null),A=M(()=>{const $=Q.find(d=>d.id===b.method);return $?$.n:""}),k=M(()=>{const $=[...$n,...Fn,...Cn].find(d=>d.id===b.pay);return $?$.n:""}),w=M(()=>_.value?"اختر "+(b.gtype==="svc"?"الخدمة":"الباقة")+" المناسبة لإهدائها لمن تحب":"حدد مكان تنفيذ الخدمة أولًا لعرض "+(b.gtype==="svc"?"الخدمات":"الباقات")+" والأسعار"),j={lock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>',head:'<path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>'};return($,d)=>(a(),l("div",At,[n("div",It,[d[14]||(d[14]=n("h3",null,"ملخص الهدية",-1)),t.value&&(u.value||e(b).gtype==="svc")?(a(),l("div",St,[u.value?(a(),l("img",{key:0,src:u.value,alt:""},null,8,Pt)):B("",!0),n("span",null,[n("b",null,f(t.value),1),e(b).gtype==="pkg"&&e(b).pkg?(a(),l(F,{key:0},[n("small",null,"🕐 "+f(e(b).pkg.dur)+" دقيقة",1),n("small",null,f(e(b).pkg.desc),1)],64)):(a(),l("small",Dt,f(e(b).svcs.length)+" "+f(e(b).svcs.length>2?"خدمات":"خدمة")+" مختارة",1)),n("span",Yt,f(c(m.value.val))+" ر.س",1)])])):(a(),l("div",Nt,[n("div",{class:"mini-card",style:co},[(a(),l("svg",Tt,[...d[0]||(d[0]=[n("path",{d:"M32 30C18 30 10 24 12 15s16-5 20 8c4-13 18-17 20-8s-6 15-20 15z"},null,-1)])])),d[1]||(d[1]=n("span",{style:{"font-family":"var(--font-d)","font-size":"14px","letter-spacing":".1em","text-align":"center"}},[n("img",{src:pn,style:{height:"24px","vertical-align":"middle"},alt:""}),n("br"),g("SAMI"),n("small",{style:{display:"block","font-size":"8.5px","letter-spacing":".04em",opacity:".8","margin-top":"2px"}},"عناية سامي")],-1))]),n("b",Vt,f(e(b).gtype==="svc"?"إهداء خدمة":"إهداء باقة"),1),n("small",Gt,f(e(b).gtype==="svc"?"لم يتم اختيار خدمة بعد":"لم يتم اختيار باقة بعد"),1),n("small",Ht,f(w.value),1)])),e(_)?(a(),l("div",Rt,[d[2]||(d[2]=n("span",{class:"k"},"📍 الفرع المختار",-1)),n("span",Ut,f(e(_).name),1)])):B("",!0),e(b).step>=2?(a(),l(F,{key:3},[n("div",Ot,[d[3]||(d[3]=n("span",{class:"k"},"💬 الرسالة",-1)),n("span",qt,f(e(b).msg?"مخصصة":"—"),1)]),n("div",Xt,[d[4]||(d[4]=n("span",{class:"k"},"📤 طريقة الإرسال",-1)),n("span",Wt,f(A.value),1)]),n("div",Kt,[d[5]||(d[5]=n("span",{class:"k"},"👤 المهدى إليه",-1)),n("span",Qt,f(e(b).name||"—"),1)]),n("div",Jt,[d[6]||(d[6]=n("span",{class:"k"},"🕐 وقت الإرسال",-1)),n("span",Zt,[n("span",no,f(e(b).when==="now"?"إرسال الآن":"مجدول"),1)])])],64)):B("",!0),e(b).done?(a(),l(F,{key:4},[n("div",eo,[d[7]||(d[7]=n("span",{class:"k"},"💳 طريقة الدفع",-1)),n("span",to,f(k.value),1)]),d[8]||(d[8]=n("div",{class:"gs-row"},[n("span",{class:"k"},"✅ حالة الدفع"),n("span",{class:"v"},[n("span",{class:"chip"},"مكتمل")])],-1))],64)):B("",!0),m.value.val?(a(),l(F,{key:5},[n("div",oo,[n("div",{class:"gs-row",style:on},[d[9]||(d[9]=n("span",{class:"k"},"قيمة الهدية",-1)),n("span",ro,f(c(m.value.val))+" ر.س",1)]),n("div",{class:"gs-row",style:on},[d[10]||(d[10]=n("span",{class:"k"},"ضريبة القيمة المضافة (15%)",-1)),n("span",ao,"+"+f(c(m.value.vat))+" ر.س",1)])]),n("div",io,[d[12]||(d[12]=n("span",{class:"k"},"الإجمالي",-1)),n("span",so,[g(f(c(m.value.total))+" ",1),d[11]||(d[11]=n("small",{style:{"font-size":"13px"}},"ر.س",-1))])])],64)):B("",!0),n("div",lo,[p(y,{inner:j.lock,size:14},null,8,["inner"]),d[13]||(d[13]=g(" الدفع آمن ومشفّر — نستخدم أحدث تقنيات التشفير لحماية بياناتك",-1))])]),e(b).step<=1&&!e(b).done?(a(),l("div",po,[n("span",go,[p(y,{inner:j.head,size:18},null,8,["inner"])]),d[15]||(d[15]=n("b",null,"تحتاج مساعدة؟",-1)),d[16]||(d[16]=n("small",null,"فريقنا جاهز لمساعدتك في الاختيار",-1)),d[17]||(d[17]=n("a",{href:"https://wa.me/963959415545"},"تواصل معنا",-1))])):B("",!0)]))}},fo={class:"g-stepper"},bo={class:"g-steps"},mo=["data-i"],uo={class:"bubble"},vo={class:"step-count"},ho='<path d="M20 6L9 17l-5-5"/>',ko={__name:"GiftStepper",setup(P){const{state:b}=V();return(o,E)=>(a(),l("div",fo,[n("div",bo,[(a(!0),l(F,null,N(e(Mn),(z,_)=>(a(),l("div",{key:_,class:L(["g-step",{active:_===e(b).step&&!e(b).done,done:_<e(b).step||e(b).done}]),"data-i":_},[E[0]||(E[0]=n("div",{class:"bar"},[n("i")],-1)),n("span",uo,[_<e(b).step||e(b).done?(a(),R(y,{key:0,inner:ho,size:16})):(a(),l(F,{key:1},[g(f(_+1),1)],64))]),n("b",null,f(z.t),1),n("small",null,f(z.s),1)],10,mo))),128))]),n("div",vo,"الخطوة "+f(Math.min(e(b).step+1,5))+" من 5",1)]))}},yo={class:"shell"},wo={class:"wrap",id:"giftsApp"},zo={key:0,class:"gifts-hero"},_o={class:"gifts-hero__copy"},$o={class:"gifts-hero__ic"},Fo={class:"view on gift-type-full"},Co={class:"container why-gift-row"},Mo={class:"wg-row"},Eo={class:"wi"},jo={class:"container"},Bo={class:"help-bar"},Lo={class:"hi"},Ao={key:2,class:"gift-stepper-compact"},Io={class:"view on"},So={key:0,class:"gift-location-note"},Po={key:0,id:"gsumWrap"},Do={class:"wrap"},Yo={class:"f-grid"},No={class:"f-brand"},To={class:"f-links"},Vo={class:"f-links"},Zo={__name:"GiftsView",setup(P){const b=T(null),{current:o,openPicker:E,locations:z,loadServiceLocations:_}=ln();_();const{requireAuth:c}=yn(),{state:m,go:t,reset:u,placeGift:A}=V();wn(Yn,"gifts"),zn(b);const k=T(!1),w=T(""),j=T(!1);function $(I){w.value=I,j.value=!0,clearTimeout($._h),$._h=setTimeout(()=>{j.value=!1},2600)}const d=M(()=>!m.done&&m.step===0&&!m.gtype);function C(I){E(()=>{var h;m.gtype=I,m.pkg=null,m.svcs=[],m.activeCat=null,m.branch=((h=o.value)==null?void 0:h.id)||m.branch,m.step=1,scrollTo({top:0,behavior:"smooth"})})}function x(){c(async()=>{k.value=!0;try{await A(),scrollTo({top:0,behavior:"smooth"})}catch(I){$(I.message||"تعذّر إتمام الإهداء، حاول مرة أخرى")}finally{k.value=!1}})}function D(){return m.claimToken?new URL(`/gift-recipient?token=${encodeURIComponent(m.claimToken)}`,location.origin).href:m.claimUrl||new URL("/gift-recipient",location.origin).href}const G={gift:'<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7s-2-5-5-5-3 5 0 5h5zM12 7s2-5 5-5 3 5 0 5h-5z"/>',head:'<path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>'},Y=[["هدية رقمية فورية","تصلك فورًا عبر البريد الإلكتروني أو الواتساب.",'<path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4z"/>'],["تجربة فاخرة","أجواء راقية وخدمات تليق بمن تحب.",'<path d="M12 3l1.9 5.2L19 10l-5.1 1.8L12 17l-1.9-5.2L5 10l5.1-1.8z"/><path d="M18 3v3M19.5 4.5h-3"/>'],["صالحة لمدة 6 أشهر","يستخدمها المستلم في الوقت الذي يناسبه.",'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>'],["آمنة وموثوقة","هدية إلكترونية آمنة تصلك فورًا.",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>']];return(I,i)=>{const h=sn("RouterLink");return a(),l("div",{ref_key:"root",ref:b},[n("div",yo,[n("div",wo,[!e(m).done&&e(m).step===0?(a(),l("section",zo,[n("div",_o,[n("span",$o,[p(y,{inner:G.gift,size:30},null,8,["inner"])]),i[6]||(i[6]=n("h1",null,"فاجئ من تحب",-1)),i[7]||(i[7]=n("p",null,"أهدِ خدمة أو باقة من عناية سامي، وقدِّم تجربة استرخاء متكاملة تجمع بين العناية الفاخرة وأدق التفاصيل. لتكون هدية تترك انطباعًا لا يُنسى.",-1))]),i[8]||(i[8]=n("div",{class:"gifts-hero__img"},[n("img",{src:Sn,alt:"هدية عناية سامي"})],-1))])):B("",!0),d.value?(a(),l(F,{key:1},[n("div",Fo,[p(tn,{onPick:C})]),n("div",Co,[i[9]||(i[9]=n("div",{class:"section-title-sm"},[n("i"),n("h2",null,"لماذا تهدي من عناية سامي؟"),n("i")],-1)),n("div",Mo,[(a(),l(F,null,N(Y,(r,v)=>n("div",{key:v,class:"wg-col"},[n("span",Eo,[p(y,{inner:r[2],size:26},null,8,["inner"])]),n("b",null,f(r[0]),1),n("small",null,f(r[1]),1)])),64))])]),n("div",jo,[n("div",Bo,[i[10]||(i[10]=n("div",{class:"help-bar__txt"},[n("b",null,"تحتاج مساعدة؟"),n("small",null,"فريقنا جاهز لمساعدتك في اختيار الهدية المناسبة.")],-1)),i[11]||(i[11]=n("a",{href:"https://wa.me/963959415545",class:"btn btn-line"},"تواصل معنا",-1)),n("span",Lo,[p(y,{inner:G.head,size:22},null,8,["inner"])])])])],64)):B("",!0),e(m).gtype&&(e(m).step>0||e(m).done)?(a(),l("div",Ao,[p(ko)])):B("",!0),d.value?B("",!0):(a(),l("div",{key:3,class:L(["g-stage",{"g-stage--pick":!e(m).done&&e(m).step===1}])},[n("main",Io,[!e(m).done&&e(m).step>0?(a(),l("div",So,[p(In)])):B("",!0),e(m).done?(a(),R(Lt,{key:1,onRecipient:i[0]||(i[0]=r=>I.location.href=D()),onTrack:i[1]||(i[1]=r=>$("حالة الهدية: تم الإرسال — بانتظار فتح المستلم")),onNewGift:i[2]||(i[2]=r=>e(u)()),onShare:i[3]||(i[3]=r=>$("تم نسخ رابط الهدية للمشاركة")),onHome:i[4]||(i[4]=r=>I.$router.push("/")),onCopyRef:i[5]||(i[5]=r=>$("تم نسخ رقم الطلب"))})):e(m).step===0?(a(),R(tn,{key:2,onPick:C})):e(m).step===1?(a(),R(De,{key:3,onNav:e(t)},null,8,["onNav"])):e(m).step===2?(a(),R(lt,{key:4,onNav:e(t)},null,8,["onNav"])):e(m).step===3?(a(),R(ct,{key:5,onNav:e(t),onPay:x},null,8,["onNav"])):B("",!0)]),e(m).done||e(m).step>=2?(a(),l("aside",Po,[p(xo)])):B("",!0)],2))])]),n("footer",null,[n("div",Do,[n("div",Yo,[n("div",No,[p(h,{class:"logo",to:"/"},{default:S(()=>[...i[12]||(i[12]=[n("span",{class:"mark"},[n("img",{src:pn,alt:"عناية سامي",style:{width:"29px",height:"29px","object-fit":"contain"}})],-1),n("span",{class:"name"},[n("b",null,"عناية سامي"),n("span",null,"SAMI CARE")],-1)])]),_:1}),i[13]||(i[13]=K('<p>مركز متخصص في العناية الرجالية المتكاملة بجدة، حيث تلتقي الفخامة بالاحترافية في كل تفصيلة.</p><div class="socials"><a href="https://x.com/samicare_sa" aria-label="X"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-6.8 7.8L23.3 22h-6.3l-4.9-6.4L6.5 22H3.4l7.3-8.3L1 2h6.5l4.4 5.8L18.9 2zm-1.1 18h1.7L7.1 3.9H5.3L17.8 20z"></path></svg></a><a href="https://www.instagram.com/samicare.sa/" aria-label="انستقرام"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1" fill="currentColor"></circle></svg></a><a href="https://www.facebook.com/samicare.sa" aria-label="فيسبوك"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg></a></div>',2))]),n("div",null,[i[19]||(i[19]=n("h4",null,"روابط مهمة",-1)),n("ul",To,[n("li",null,[p(h,{to:"/"},{default:S(()=>[...i[14]||(i[14]=[g("الرئيسية",-1)])]),_:1})]),n("li",null,[p(h,{to:"/booking"},{default:S(()=>[...i[15]||(i[15]=[g("حجز موعد",-1)])]),_:1})]),n("li",null,[p(h,{to:"/#services"},{default:S(()=>[...i[16]||(i[16]=[g("خدماتنا",-1)])]),_:1})]),n("li",null,[p(h,{to:"/packages-gifts"},{default:S(()=>[...i[17]||(i[17]=[g("الباقات",-1)])]),_:1})]),n("li",null,[p(h,{to:"/gifts"},{default:S(()=>[...i[18]||(i[18]=[g("الهدايا",-1)])]),_:1})])])]),n("div",null,[i[25]||(i[25]=n("h4",null,"استكشف",-1)),n("ul",Vo,[n("li",null,[p(h,{to:"/store"},{default:S(()=>[...i[20]||(i[20]=[g("المتجر",-1)])]),_:1})]),n("li",null,[p(h,{to:"/branches"},{default:S(()=>[...i[21]||(i[21]=[g("فروعنا",-1)])]),_:1})]),n("li",null,[p(h,{to:"/contact"},{default:S(()=>[...i[22]||(i[22]=[g("تواصل معنا",-1)])]),_:1})]),n("li",null,[p(h,{to:"/terms"},{default:S(()=>[...i[23]||(i[23]=[g("الشروط والأحكام",-1)])]),_:1})]),n("li",null,[p(h,{to:"/privacy-policy"},{default:S(()=>[...i[24]||(i[24]=[g("سياسة الخصوصية",-1)])]),_:1})])])]),n("div",null,[i[27]||(i[27]=n("h3",null,"عناوين الفروع",-1)),(a(!0),l(F,null,N(e(z),r=>(a(),l(F,{key:r.id},[n("b",null,f(r.name),1),n("p",null,[g(f(r.address),1),r.contact_number?(a(),l(F,{key:0},[i[26]||(i[26]=n("br",null,null,-1)),g(f(r.contact_number),1)],64)):B("",!0)])],64))),128))])]),i[28]||(i[28]=K('<div class="f-bottom"><small>© 2026 عناية سامي — جميع الحقوق محفوظة</small><div class="pay" aria-label="بوابات الدفع"><span title="Visa">VISA</span><span title="Mastercard">Mastercard</span><span title="مدى">mada</span><span title="Tabby">tabby</span><span title="Apple Pay">Pay</span></div></div>',1))])]),n("div",{class:L(["pay-loading",{on:k.value}]),id:"payLoading"},[...i[29]||(i[29]=[n("div",{class:"pl-box"},[n("div",{class:"pl-ring"}),n("b",null,"جارٍ إتمام الإهداء بأمان…"),n("small",null,"سيتم إرسال الهدية مباشرة بعد إتمام الدفع")],-1)])],2),n("div",{class:L(["toast",{on:j.value}]),id:"toast"},[n("span",null,f(w.value),1)],2)],512)}}};export{Zo as default};
