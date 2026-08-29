import{k as L,L as T,o as t,c as l,b as n,n as F,t as a,q as I,a as c,u as r,M as D,l as V,N as U,O as Q,P as G,Q as y,i as nn,F as _,e as Y,d as b,J as f,S as J,j as O,B as R,U as en,V as K,D as X,W,r as P,h as rn,E as on,H as tn,X as an,G as sn}from"./index-Cg6jaJBg.js";import{u as ln,a as dn}from"./useInternalLinks-CJP2UQ1A.js";const pn=`
:root{
  --ink:#0A0906; --coal:#14110C;
  --gold:#CE9234; --gold-bright:#E8BE6C; --gold-deep:#9C6B1F;
  --champagne:#F0E6CF; --ivory:#F8F4EB; --paper:#F5F1E7; --card:#FFFFFF;
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
nav.links a{font-size:15px;color:var(--champagne);opacity:.82;transition:var(--dur);position:relative;padding-bottom:4px}
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
.nav{gap:22px;min-height:82px}
nav.links{gap:18px;align-items:center;white-space:nowrap}
nav.links a{font-weight:500}
.logo{flex-shrink:0}.nav-actions{flex-shrink:0}
@media(max-width:1180px){nav.links{gap:12px}.loyal{padding-inline:13px}.nav{gap:14px}}
/* ===== فوتر مطابق للصفحة الرئيسية ===== */
footer.site-footer{background:#080a0b;color:#eee;padding:45px 30px 20px;border-top:0}
.site-footer .container{width:min(1180px,calc(100% - 48px));margin-inline:auto}
.site-footer .footer-content{display:grid;grid-template-columns:1.3fr .75fr .7fr .9fr 1fr;gap:45px;align-items:start}
.site-footer .footer-content h3{color:#c98b31;font-size:14px;margin:0 0 14px}
.site-footer .footer-content a,.site-footer .footer-content p{display:block;color:#eee;font-size:10px;line-height:2;text-decoration:none;margin:0}
.site-footer .footer-content b{display:block;font-size:11px;margin-top:4px}
.site-footer .footer-brand{align-self:center;text-align:center}
.site-footer .footer-brand img{display:block;width:88px;height:auto;object-fit:contain;margin:auto}
.site-footer .phone-form{display:flex;align-items:center;gap:8px;background:#fff;color:#333;border-radius:25px;padding:8px 12px}
.site-footer .phone-form input{border:0;outline:0;width:100%;min-width:0;background:transparent;color:#333;font:inherit}
.site-footer .whatsapp{margin-top:8px!important;background:#42a936;border-radius:20px;text-align:center;padding:6px;color:#fff!important}
.site-footer .copyright{text-align:center;color:#777;font-size:10px;margin:30px 0 0}
@media(max-width:900px){.site-footer .footer-content{grid-template-columns:repeat(2,1fr)}.nav{overflow-x:auto;justify-content:flex-start}.nav::-webkit-scrollbar{height:0}}
@media(max-width:640px){footer.site-footer{padding:35px 20px 90px}.site-footer .container{width:min(100% - 28px,1180px)}.site-footer .footer-content{grid-template-columns:1fr}.site-footer .footer-content>div:nth-child(2),.site-footer .footer-content>div:nth-child(4){display:none}}


/* ===== تحسين بطاقات الإهداء الملكية ===== */
.gcard.royal{isolation:isolate;border:1px solid rgba(255,255,255,.18);box-shadow:0 42px 78px -34px rgba(0,0,0,.78),inset 0 0 42px rgba(255,255,255,.08)}
.gcard.royal::before{content:"";position:absolute;inset:-55%;background:conic-gradient(from 0deg,transparent 72%,rgba(255,255,255,.18),transparent 86%);animation:sweep 11s linear infinite;z-index:0}
.gcard.royal>*{position:relative;z-index:1}.royal-frame{position:absolute;inset:14px!important;border:1px solid currentColor;border-radius:14px;opacity:.34;z-index:1}.royal-glow{position:absolute;inset:auto 12% -30% 12%!important;height:60%;background:radial-gradient(ellipse at center,currentColor,transparent 68%);opacity:.14;filter:blur(20px);z-index:0}.royal-seal{width:48px;height:48px;border-radius:50%;display:grid;place-items:center;margin:0 auto 8px;border:1px solid currentColor;background:rgba(255,255,255,.08);box-shadow:inset 0 0 18px rgba(255,255,255,.08);font-size:21px}.gcard.royal h3{font-size:clamp(22px,2.7vw,31px);letter-spacing:0}.design .sw{box-shadow:inset 0 0 0 1px rgba(255,255,255,.14)}


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

.loc-ov{position:fixed;inset:0;z-index:500;background:rgba(18,12,5,.58);backdrop-filter:blur(4px);
  display:flex;align-items:center;justify-content:center;padding:20px;opacity:0;pointer-events:none;transition:opacity .22s}
.loc-ov.on{opacity:1;pointer-events:auto}
.loc-modal{position:relative;width:min(470px,100%);background:#fff;border-radius:22px;padding:28px 24px 24px;
  box-shadow:0 34px 70px -24px rgba(30,20,6,.5);max-height:90vh;overflow-y:auto}
.loc-close{position:absolute;top:14px;left:16px;width:32px;height:32px;border:0;background:#f4efe6;border-radius:50%;
  font-size:20px;line-height:1;color:#6f665c;cursor:pointer}
.loc-head{text-align:center;margin-bottom:20px}
.loc-head h3{font-size:20px;margin:0 0 6px;color:#241f1b}
.loc-head p{font-size:12px;color:#8b8379;margin:0}
.loc-list{display:grid;gap:11px}
.loc-item{display:grid;grid-template-columns:1fr 104px;align-items:center;gap:11px;
  border:1.5px solid #efe9e0;border-radius:16px;padding:9px;background:#fff;cursor:pointer;text-align:right;width:100%}
.loc-item:hover{border-color:#d7a243;background:#fffaf0}
.loc-item.on{border-color:#c98b31;background:#fffaf0;box-shadow:0 0 0 3px rgba(201,139,49,.14)}
.loc-item img{width:104px;height:72px;border-radius:12px;object-fit:cover}
.loc-txt b{display:block;font-size:14px;color:#241f1b}
.loc-txt small{display:block;font-size:10.5px;color:#8b8379;line-height:1.6;margin-top:3px}
.loc-txt em{display:flex;align-items:center;gap:5px;font-style:normal;font-size:10px;color:#2E8B57;margin-top:5px}
.loc-txt em::before{content:"";width:6px;height:6px;border-radius:50%;background:#2E8B57}
.logo .name b{font-size:18px;white-space:nowrap}.logo .name span{font-size:10px;letter-spacing:.18em}


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
  nav.links{display:flex}
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
/* إبقاء شريط التنقل المرفق ظاهرًا في صفحة المتجر على كل شاشات الموقع.
   نسخة التطبيق المنفصلة تتولى شاشات الموبايل حتى 640px. */
@media(min-width:641px){
  header{display:block!important;visibility:visible!important;opacity:1!important}
  header .nav{display:flex!important}
  header nav.links{display:flex!important;visibility:visible!important;opacity:1!important}
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


/* ===== المتجر ===== */
/* البنر الرئيسي الفاخر */
.st-hero{position:relative;overflow:hidden;margin-top:22px;min-height:430px;
  width:100vw;margin-inline-start:calc(50% - 50vw);border-radius:0;
  display:grid;grid-template-columns:1fr 1fr;align-items:center;
  background:
   radial-gradient(560px 320px at 18% 30%,rgba(198,161,91,.28),transparent 60%),
   radial-gradient(420px 260px at 78% 85%,rgba(143,113,52,.22),transparent 60%),
   linear-gradient(135deg,#1A140C 0%,#0C0A06 55%,#161009 100%);
  border-block:1px solid var(--line-dark)}
.st-hero .in{position:relative;z-index:3;padding:54px max(56px,calc((100vw - 1280px)/2 + 56px))}
.st-hero .veins{position:absolute;inset:0;opacity:.5;pointer-events:none}
.st-hero .hero-frame{position:absolute;inset:16px;border:1px solid rgba(198,161,91,.18);border-radius:18px;pointer-events:none}
.st-hero .hero-frame::before,.st-hero .hero-frame::after{content:"";position:absolute;width:40px;height:40px;border:1.5px solid var(--gold)}
.st-hero .hero-frame::before{top:-1px;right:-1px;border-left:0;border-bottom:0;border-radius:0 18px 0 0}
.st-hero .hero-frame::after{bottom:-1px;left:-1px;border-right:0;border-top:0;border-radius:0 0 0 18px}
.st-hero .hp{position:absolute;color:var(--gold-bright);opacity:.5;animation:cfFloat2 5s ease-in-out infinite;font-size:11px;pointer-events:none}
@keyframes cfFloat2{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(-14px) rotate(25deg)}}
.st-hero .eyebrow2{display:inline-flex;align-items:center;gap:9px;font-size:12.5px;color:var(--gold-bright);
  border:1px solid var(--line-dark);padding:8px 18px;border-radius:999px;background:rgba(198,161,91,.08);letter-spacing:.03em}
.st-hero .eyebrow2 i{width:6px;height:6px;border-radius:50%;background:var(--gold-bright);box-shadow:0 0 9px var(--gold-bright);animation:pulseDot2 2.2s infinite}
@keyframes pulseDot2{0%,100%{opacity:1}50%{opacity:.3}}
.st-hero h1{font-family:var(--font-d);font-size:clamp(32px,4.4vw,54px);color:var(--ivory);line-height:1.28;margin:18px 0 14px}
.st-hero h1 .g{background:linear-gradient(100deg,var(--gold-deep) 0%,var(--gold-bright) 40%,#FFF3D6 50%,var(--gold-bright) 60%,var(--gold-deep) 100%);
  background-size:220% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:heroShine 5.5s linear infinite}
@keyframes heroShine{to{background-position:-220% 0}}
.st-hero p{color:var(--smoke);font-size:15px;line-height:1.95;max-width:42ch;font-weight:300}
.st-hero .hero-ctas{display:flex;gap:12px;margin-top:26px;flex-wrap:wrap}
.st-hero .btn-outline-l{border:1.5px solid var(--line-dark);color:var(--champagne);background:rgba(255,255,255,.02)}
.st-hero .btn-outline-l:hover{border-color:var(--gold);color:var(--gold-bright);transform:translateY(-2px)}
.st-hero .hero-stats{display:flex;gap:0;margin-top:30px;border-top:1px solid var(--line-dark);padding-top:20px}
.st-hero .hstat{padding-inline-end:26px;margin-inline-end:26px;border-inline-end:1px solid var(--line-dark)}
.st-hero .hstat:last-child{border:none;margin:0;padding:0}
.st-hero .hstat b{font-family:var(--font-d);font-size:22px;color:var(--gold-bright);display:block;line-height:1}
.st-hero .hstat small{color:var(--smoke);font-size:11px;display:block;margin-top:6px}
/* مشهد المنتجات */
.hero-scene{position:relative;height:100%;min-height:430px;z-index:2;perspective:900px}
.hero-scene .glow{position:absolute;top:50%;right:50%;transform:translate(50%,-50%);width:340px;height:340px;border-radius:50%;
  background:radial-gradient(circle,rgba(233,207,142,.3),transparent 68%);filter:blur(22px)}
.hero-scene .ring2{position:absolute;top:50%;right:50%;transform:translate(50%,-50%);width:330px;height:330px;border-radius:50%;
  border:1px solid rgba(198,161,91,.3);animation:ringPulse 7s ease-in-out infinite}
@keyframes ringPulse{0%,100%{transform:translate(50%,-50%) scale(1);opacity:.7}50%{transform:translate(50%,-50%) scale(1.05);opacity:.35}}
.hp-card{position:absolute;border-radius:18px;overflow:hidden;background:linear-gradient(160deg,#F8F3E8,#EFE7D4);
  border:1px solid rgba(233,207,142,.65);box-shadow:0 34px 60px -22px rgba(0,0,0,.85),0 0 0 5px rgba(198,161,91,.08),0 0 44px -14px rgba(198,161,91,.45);
  will-change:transform;transition:transform .18s ease-out;animation:cardFloat 6.5s ease-in-out infinite}
@keyframes cardFloat{0%,100%{margin-top:0}50%{margin-top:-12px}}
.hp-card img{width:100%;height:100%;object-fit:cover;display:block}
.hp-card .fb{display:none;width:100%;height:100%;place-items:center;
  background:radial-gradient(120px 80px at 50% 82%,rgba(198,161,91,.32),transparent 62%),linear-gradient(150deg,#2A2318,#0F0C07)}
.hp-card .tag2{position:absolute;bottom:0;inset-inline:0;padding:9px 12px;text-align:center;font-size:11px;font-weight:700;color:var(--ink);
  background:linear-gradient(180deg,rgba(248,243,232,0),rgba(248,243,232,.95) 40%);font-family:var(--font-d)}
.hp-c1{width:200px;height:240px;top:9%;right:calc(50% - 96px);z-index:3;animation-delay:0s}
.hp-c2{width:150px;height:185px;top:26%;right:8%;z-index:2;transform:rotate(7deg);animation-delay:-2.2s}
.hp-c3{width:150px;height:185px;bottom:9%;left:9%;z-index:2;transform:rotate(-8deg);animation-delay:-4.2s}
.hp-badge{position:absolute;z-index:4;display:flex;gap:10px;align-items:center;background:rgba(20,17,12,.88);backdrop-filter:blur(10px);
  border:1px solid var(--line-dark);border-radius:14px;padding:10px 15px;box-shadow:0 18px 34px -14px rgba(0,0,0,.7);
  animation:cardFloat 5.5s ease-in-out infinite;animation-delay:-1.4s}
.hp-badge .bi2{width:34px;height:34px;border-radius:10px;display:grid;place-items:center;flex:none;
  background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink)}
.hp-badge b{font-size:12px;color:var(--champagne);display:block}
.hp-badge small{font-size:10px;color:var(--smoke)}
.hp-b1{bottom:16%;right:6%}
.hp-b2{top:12%;left:7%}
.st-strip{display:flex;align-items:center;gap:18px;background:linear-gradient(90deg,#FBF6E9,#FFFDF6);border:1px solid var(--line);
  border-radius:18px;padding:16px 22px;margin-top:18px}
.st-strip .si{width:46px;height:46px;border-radius:50%;background:var(--ink);color:var(--gold-bright);display:grid;place-items:center;flex:none}
.st-strip p{flex:1;font-size:14px;color:var(--ink);font-weight:600}
/* إتمام الطلب */
.chk-note{display:flex;gap:10px;align-items:center;background:rgba(198,161,91,.08);border:1px solid var(--line);
  border-radius:13px;padding:12px 16px;font-size:12.5px;color:var(--gold-deep);margin-top:14px}
.sum-item{display:flex;gap:11px;align-items:center;padding:9px 0;border-bottom:1px solid rgba(143,113,52,.1)}
.sum-item .thumb{width:46px;height:46px;border-radius:10px;display:grid;place-items:center;flex:none;
  background:radial-gradient(44px 30px at 50% 80%,rgba(198,161,91,.35),transparent 65%),linear-gradient(150deg,#2A2318,#0F0C07)}
.sum-item b{font-size:12px;color:var(--ink);display:block}
.sum-item small{font-size:11px;color:var(--mute)}
.sum-item .p{margin-inline-start:auto;font-size:12.5px;font-weight:700;color:var(--gold-deep);white-space:nowrap}
/* الفئات */
.sec-line{display:flex;align-items:center;justify-content:space-between;margin:30px 0 16px}
.sec-line h2{font-family:var(--font-d);font-size:clamp(19px,2.4vw,25px);color:var(--ink);position:relative;padding-bottom:8px}
.sec-line h2::after{content:"";position:absolute;bottom:0;right:0;width:44px;height:2.5px;border-radius:2px;background:linear-gradient(-90deg,var(--gold),transparent)}
.sec-line a{font-size:13px;color:var(--gold-deep);font-weight:700;display:flex;gap:7px;align-items:center;cursor:pointer}
.cats{display:grid;grid-template-columns:repeat(7,1fr);gap:12px}
.store-promos{display:grid;gap:14px;margin-top:22px}
.store-promo{position:relative;display:flex;align-items:center;gap:22px;padding:24px 28px;border-radius:18px;overflow:hidden;
  background:radial-gradient(560px 260px at 85% 20%,rgba(198,161,91,.22),transparent 60%),linear-gradient(135deg,#1A140C,#0C0A06 60%,#161009);
  border:1px solid var(--line-dark)}
.store-promo__badge{position:absolute;top:16px;left:18px;background:var(--gold);color:#160f07;font-weight:700;font-size:10.5px;border-radius:20px;padding:4px 14px}
.store-promo__txt{flex:1}
.store-promo__txt h3{font-family:var(--font-d);color:var(--ivory);font-size:19px;margin:0 0 6px}
.store-promo__txt p{color:var(--smoke);font-size:12.5px;margin:0;max-width:52ch}
.store-promo .btn{flex:none}
@media(max-width:700px){.store-promo{flex-direction:column;text-align:center;padding-top:44px}}
.catc{background:#fff;border:1.5px solid var(--line);border-radius:16px;padding:14px 10px;text-align:center;cursor:pointer;
  transition:all var(--dur) var(--ease);position:relative}
.catc:hover{transform:translateY(-4px);box-shadow:0 16px 30px -18px rgba(80,60,20,.4)}
.catc.on{border-color:var(--gold);background:linear-gradient(160deg,#FFFBF0,#fff);box-shadow:0 0 0 3px rgba(198,161,91,.15)}
.catc .ill{height:64px;display:grid;place-items:center;margin-bottom:8px}
.catc b{font-size:12px;color:var(--ink);display:block;line-height:1.5}
.catc .ic-mini{position:absolute;top:9px;left:9px;color:var(--gold-deep);opacity:.7}
/* بطاقات المنتجات */
.badge-tag{position:absolute;top:12px;right:12px;z-index:3;font-size:10px;font-weight:800;padding:6px 13px;border-radius:999px;
  background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink)}
.badge-tag.new{background:#fff;color:var(--gold-deep);border:1px solid var(--gold)}
.pcard{background:#fff;border:1px solid var(--line);border-radius:18px;overflow:hidden;position:relative;
  transition:transform .3s var(--ease),box-shadow .3s;animation:pkgIn .4s var(--ease) both;display:flex;flex-direction:column}
.pcard:hover{transform:translateY(-6px);box-shadow:0 26px 46px -26px rgba(80,60,20,.5)}
.pcard .pimg{aspect-ratio:16/11;position:relative;display:grid;place-items:center;overflow:hidden;
  background:radial-gradient(300px 180px at 50% 82%,rgba(198,161,91,.32),transparent 62%),linear-gradient(150deg,#2A2318,#0F0C07)}
.pcard .pimg svg.prod{transition:transform .5s var(--ease);filter:drop-shadow(0 14px 18px rgba(0,0,0,.5))}
.pcard:hover .pimg svg.prod{transform:scale(1.07) translateY(-3px)}
.pcard .pimg .shelf{position:absolute;bottom:0;inset-inline:0;height:26%;
  background:linear-gradient(180deg,rgba(233,207,142,.1),rgba(20,16,9,.6));border-top:1px solid rgba(233,207,142,.22)}
.fav2{position:absolute;top:11px;left:11px;z-index:3;width:32px;height:32px;border-radius:50%;
  background:rgba(255,253,247,.92);display:grid;place-items:center;color:var(--mute);transition:all .25s var(--ease)}
.fav2:hover{transform:scale(1.12)}
.fav2.on{color:#C94F63}
.pcard .pbody{padding:15px 16px 16px;text-align:center;display:flex;flex-direction:column;flex:1}
.pcard .pbody b{font-size:14.5px;color:var(--ink);font-family:var(--font-d)}
.pcard .pbody small{font-size:11.5px;color:var(--mute);display:block;margin:5px 0 10px;line-height:1.7;flex:1}
.pcard .prow{display:flex;align-items:center;justify-content:space-between;gap:10px}
.pcard .pr{font-family:var(--font-d);font-size:18px;color:var(--ink);white-space:nowrap}
.pcard .pr small{display:inline;font-size:11px;color:var(--mute);margin:0}
.addbtn{flex:1;display:flex;align-items:center;justify-content:center;gap:8px;border:1.5px solid var(--gold);
  color:var(--gold-deep);border-radius:11px;padding:10px;font-size:12.5px;font-weight:700;transition:all .25s var(--ease);position:relative;overflow:hidden}
.addbtn:hover{background:rgba(198,161,91,.1)}
/* ===== عدّاد الكمية داخل بطاقة المنتج ===== */
.qstep{flex:1;min-width:112px;display:flex;align-items:center;justify-content:space-between;gap:4px;
  direction:ltr;border:1.5px solid var(--gold);border-radius:11px;padding:3px;background:rgba(198,161,91,.07)}
.qstep__btn{width:31px;height:31px;flex:none;display:grid;place-items:center;border:0;border-radius:8px;
  background:#fff;color:var(--gold-deep);cursor:pointer;transition:background .2s ease,color .2s ease,transform .15s ease}
.qstep__btn:hover{background:var(--gold);color:#fff}
.qstep__btn:active{transform:scale(.9)}
.qstep__btn svg{display:block;pointer-events:none}
.qstep__val{flex:1;text-align:center;font-family:var(--font-d);font-size:15px;color:var(--ink);
  font-variant-numeric:tabular-nums;user-select:none}
.pgrid.list .qstep{max-width:190px}
.addbtn.added{background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);border-color:transparent;animation:addPop .3s var(--ease)}
@keyframes addPop{40%{transform:scale(.94)}}
/* الأكثر مبيعًا كاروسيل */
.best-wrap{position:relative}
.best-caro{display:flex;gap:14px;overflow-x:auto;scroll-behavior:smooth;scrollbar-width:none;padding:6px 2px 12px}
.best-caro::-webkit-scrollbar{display:none}
.best-caro .pcard{flex:0 0 calc(25% - 11px);min-width:230px}
/* أدوات الشبكة */
.grid-tools{display:flex;align-items:center;gap:14px;flex-wrap:wrap;background:#fff;border:1px solid var(--line);
  border-radius:15px;padding:12px 16px;margin-bottom:18px}
.gt-filter{display:flex;gap:8px;align-items:center;font-size:13px;font-weight:700;color:var(--ink);
  border:1.5px solid var(--line);border-radius:11px;padding:10px 18px;transition:var(--dur)}
.gt-filter:hover{border-color:var(--gold);color:var(--gold-deep)}
.gt-count{flex:1;text-align:center;font-size:12.5px;color:var(--mute)}
.view-tg{display:flex;border:1.5px solid var(--line);border-radius:11px;overflow:hidden}
.view-tg button{width:38px;height:38px;display:grid;place-items:center;color:var(--mute);transition:var(--dur)}
.view-tg button.on{background:var(--ink);color:var(--gold-bright)}
.gt-sort{display:flex;gap:8px;align-items:center;font-size:12.5px;color:var(--mute)}
.gt-sort select{border:1.5px solid var(--line);border-radius:11px;padding:10px 14px;font-size:13px;background:#FDFBF5;color:var(--ink);outline:none;font-weight:600}
.pgrid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
.pgrid.list{grid-template-columns:1fr;gap:10px}
.pgrid.list .pcard{flex-direction:row;align-items:stretch}
.pgrid.list .pimg{aspect-ratio:auto;width:190px;flex:none}
.pgrid.list .pbody{text-align:right;padding:16px 20px}
.pgrid.list .prow{margin-top:auto;max-width:340px}
.show-more{display:flex;justify-content:center;margin-top:22px}
.show-more button{display:flex;gap:9px;align-items:center;border:1.5px solid var(--line);border-radius:999px;
  padding:12px 30px;font-size:13px;font-weight:700;color:var(--gold-deep);background:#fff;transition:var(--dur) var(--ease)}
.show-more button:hover{border-color:var(--gold);transform:translateY(-2px)}
/* اهتزاز السلة */
@keyframes cartShake{20%{transform:rotate(-12deg)}40%{transform:rotate(10deg)}60%{transform:rotate(-7deg)}80%{transform:rotate(5deg)}}
.icon-btn.shake{animation:cartShake .55s var(--ease)}
/* Bottom Sheet */
.sheet-ov{position:fixed;inset:0;z-index:940;background:rgba(10,9,6,.5);backdrop-filter:blur(4px);
  opacity:0;pointer-events:none;transition:opacity .3s var(--ease)}
.sheet-ov.on{opacity:1;pointer-events:auto}
.sheet{position:fixed;bottom:0;right:50%;transform:translate(50%,110%);z-index:941;width:min(560px,94%);
  background:#fff;border:1px solid var(--line);border-radius:22px 22px 0 0;padding:26px;
  box-shadow:0 -24px 60px -20px rgba(20,15,5,.5);transition:transform .45s var(--ease)}
.sheet.on{transform:translate(50%,0)}
.sheet .grab{width:44px;height:4px;border-radius:2px;background:var(--line);margin:0 auto 16px}
.sheet .shead{text-align:center;margin-bottom:16px}
.sheet .shead .si{width:52px;height:52px;margin:0 auto 10px;border-radius:50%;display:grid;place-items:center;
  background:rgba(198,161,91,.14);color:var(--gold-deep);border:1px solid var(--gold)}
.sheet .shead b{font-family:var(--font-d);font-size:18px;color:var(--ink)}
.sheet .sprod{display:flex;gap:14px;align-items:center;border:1px solid var(--line);border-radius:15px;padding:12px 16px;background:#FDFBF5}
.sheet .sprod .thumb{width:66px;height:66px;border-radius:12px;display:grid;place-items:center;flex:none;
  background:radial-gradient(60px 40px at 50% 80%,rgba(198,161,91,.35),transparent 65%),linear-gradient(150deg,#2A2318,#0F0C07)}
.sheet .sprod b{font-size:14px;color:var(--ink);display:block;font-family:var(--font-d)}
.sheet .sprod .p{font-family:var(--font-d);color:var(--gold-deep);font-size:15px;margin-top:4px;display:block}
.sheet .sacts{display:flex;gap:10px;margin-top:18px}
.sheet .sacts .btn{flex:1;padding:13px}
/* توست علوي */
.toast-top{position:fixed;top:86px;right:50%;transform:translate(50%,-16px);z-index:960;opacity:0;pointer-events:none;
  background:#fff;border:1px solid rgba(46,139,87,.35);color:#1E6B41;padding:12px 22px;border-radius:999px;
  font-size:13px;font-weight:700;display:flex;gap:9px;align-items:center;transition:all .35s var(--ease);
  box-shadow:0 18px 34px -16px rgba(30,80,50,.35)}
.toast-top.on{opacity:1;transform:translate(50%,0)}
.toast-top .ti{width:22px;height:22px;border-radius:50%;background:var(--green);color:#fff;display:grid;place-items:center;flex:none}
/* السلة الجانبية (من اليسار RTL) */
.drawer-ov{position:fixed;inset:0;z-index:945;background:rgba(10,9,6,.55);backdrop-filter:blur(4px);
  opacity:0;pointer-events:none;transition:opacity .3s var(--ease)}
.drawer-ov.on{opacity:1;pointer-events:auto}
.drawer{position:fixed;top:0;bottom:0;left:0;z-index:946;width:min(400px,92%);background:#fff;
  transform:translateX(-105%);transition:transform .45s var(--ease);display:flex;flex-direction:column;
  box-shadow:24px 0 60px -20px rgba(20,15,5,.5)}
.drawer.on{transform:translateX(0)}
.drawer .dhead{display:flex;align-items:center;justify-content:space-between;padding:18px 20px;border-bottom:1px solid var(--line)}
.drawer .dhead b{font-family:var(--font-d);font-size:18px;color:var(--ink)}
.drawer .dclose{width:36px;height:36px;border-radius:50%;border:1px solid var(--line);display:grid;place-items:center;color:var(--mute);transition:var(--dur)}
.drawer .dclose:hover{border-color:var(--gold);color:var(--gold-deep);transform:rotate(90deg)}
.drawer .dbody{flex:1;overflow-y:auto;padding:14px 20px}
.ditem{display:flex;gap:12px;align-items:center;padding:13px 0;border-bottom:1px solid rgba(143,113,52,.12);animation:pkgIn .3s var(--ease) both}
.ditem .thumb{width:62px;height:62px;border-radius:12px;display:grid;place-items:center;flex:none;
  background:radial-gradient(56px 38px at 50% 80%,rgba(198,161,91,.35),transparent 65%),linear-gradient(150deg,#2A2318,#0F0C07)}
.ditem .inf{flex:1;min-width:0}
.ditem .inf b{font-size:13px;color:var(--ink);display:block;font-family:var(--font-d);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.ditem .inf .p{font-size:12.5px;color:var(--gold-deep);font-weight:700;margin-top:3px;display:block}
.qty{display:flex;align-items:center;gap:2px;border:1.5px solid var(--line);border-radius:10px;overflow:hidden;margin-top:8px;width:max-content;direction:ltr}
.qty button{width:26px;height:26px;display:grid;place-items:center;color:var(--gold-deep);font-weight:800;transition:var(--dur)}
.qty button:hover{background:rgba(198,161,91,.12)}
.qty span{min-width:26px;text-align:center;font-size:13px;font-weight:700;color:var(--ink)}
.ditem .del{width:32px;height:32px;border-radius:9px;display:grid;place-items:center;color:#B3452F;opacity:.6;transition:var(--dur);flex:none}
.ditem .del:hover{opacity:1;background:rgba(179,69,47,.1)}
.drawer .dempty{text-align:center;padding:60px 20px;color:var(--mute);font-size:13px}
.drawer .dempty .ei{width:60px;height:60px;margin:0 auto 14px;border-radius:50%;border:1.5px dashed var(--line);display:grid;place-items:center;color:var(--gold-deep)}
.drawer .dfoot{border-top:1px solid var(--line);padding:16px 20px;background:#FDFBF5}
.drawer .dtotal{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:12px}
.drawer .dtotal small{font-size:12.5px;color:var(--mute)}
.drawer .dtotal b{font-family:var(--font-d);font-size:22px;color:var(--gold-deep)}
.drawer .dfoot .btn{width:100%;padding:15px}
@media(max-width:1100px){.cats{grid-template-columns:repeat(4,1fr)}.pgrid{grid-template-columns:repeat(3,1fr)}.best-caro .pcard{flex-basis:calc(33.3% - 10px)}
 .st-hero{grid-template-columns:1fr}
 .hero-scene{min-height:330px}
 .st-hero .in{padding:44px 40px 10px}
}
@media(max-width:760px){
 .st-hero .in{padding:34px 24px 0}
 .st-hero .hero-stats{flex-wrap:wrap;gap:16px}
 .st-hero .hstat{border:none;margin:0;padding:0}
 .hero-scene{min-height:300px;transform:scale(.82);transform-origin:top center}
 .cats{grid-template-columns:repeat(3,1fr)}
 .pgrid{grid-template-columns:1fr 1fr;gap:10px}
 .best-caro .pcard{flex-basis:74%}
 .gt-count{display:none}
 .pgrid.list .pimg{width:120px}
}
`,gn={class:"pimg"},cn=["data-fav"],xn=["width","height","viewBox","innerHTML"],bn={class:"pbody"},fn={class:"prow"},mn=["data-add"],hn=["aria-label"],vn=["aria-label"],un={key:0,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},kn={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.4"},yn={class:"qstep__val"},wn={class:"pr"},Z={__name:"ProductCard",props:{p:{type:Object,required:!0},index:{type:Number,default:0},view:{type:String,default:"grid"},fav:{type:Boolean,default:!1},qty:{type:Number,default:0}},emits:["toggle-fav","add","set-qty"],setup(v){const E=v,m=L(()=>`animation-delay:${Math.min(E.index*.05,.4)}s`),M=L(()=>E.view==="list"?96:118),d=L(()=>T(E.p.shape,M.value));return(h,x)=>(t(),l("article",{class:"pcard",style:V(m.value)},[n("div",gn,[x[5]||(x[5]=n("div",{class:"shelf"},null,-1)),v.p.badge?(t(),l("span",{key:0,class:F(["badge-tag",{new:v.p.new}])},a(v.p.badge),3)):I("",!0),n("button",{class:F(["fav2",{on:v.fav}]),"data-fav":v.p.id,"aria-label":"مفضلة",onClick:x[0]||(x[0]=z=>h.$emit("toggle-fav",v.p.id))},[...x[4]||(x[4]=[n("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[n("path",{d:"M12 21s-7-4.4-9.3-8.5C.8 9 2.6 5.5 6 5.5c2 0 3.4 1.1 4 2.3.6-1.2 2-2.3 4-2.3 3.4 0 5.2 3.5 3.3 7-2.3 4.1-9.3 8.5-9.3 8.5z"})],-1)])],10,cn),(t(),l("svg",{class:"prod",width:M.value,height:M.value,viewBox:d.value.viewBox,innerHTML:d.value.inner},null,8,xn))]),n("div",bn,[n("b",null,a(v.p.n),1),n("small",null,a(v.p.d),1),n("div",fn,[v.qty?(t(),l("div",{key:1,class:"qstep",role:"group","aria-label":`كمية ${v.p.n}`},[n("button",{class:"qstep__btn","aria-label":v.qty===1?"إزالة من السلة":"إنقاص الكمية",onClick:x[2]||(x[2]=z=>h.$emit("set-qty",v.p.id,v.qty-1))},[v.qty===1?(t(),l("svg",un,[...x[7]||(x[7]=[n("path",{d:"M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"},null,-1)])])):(t(),l("svg",kn,[...x[8]||(x[8]=[n("path",{d:"M5 12h14"},null,-1)])]))],8,vn),n("span",yn,a(v.qty),1),n("button",{class:"qstep__btn","aria-label":"زيادة الكمية",onClick:x[3]||(x[3]=z=>h.$emit("set-qty",v.p.id,v.qty+1))},[...x[9]||(x[9]=[n("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.4"},[n("path",{d:"M12 5v14M5 12h14"})],-1)])])],8,hn)):(t(),l("button",{key:0,class:"addbtn","data-add":v.p.id,onClick:x[1]||(x[1]=z=>h.$emit("add",v.p.id,z))},[...x[6]||(x[6]=[n("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[n("path",{d:"M6 7h12l1.5 14h-15zM8 7a4 4 0 018 0"})],-1),c(" إضافة للسلة ",-1)])],8,mn)),n("span",wn,[c(a(r(D)(v.p.pr))+" ",1),x[10]||(x[10]=n("small",null,"ر.س",-1))])])])],4))}},zn={class:"st-hero",id:"stHero"},Fn={class:"in"},$n={class:"hero-ctas"},Cn={class:"hero-scene",id:"heroScene"},_n={class:"hp-card hp-c1","data-depth":"16"},Bn={class:"fb"},Mn=["viewBox","innerHTML"],jn={class:"hp-card hp-c2","data-depth":"26"},En={class:"fb"},An=["viewBox","innerHTML"],Sn={class:"hp-card hp-c3","data-depth":"24"},Tn={class:"fb"},Ln=["viewBox","innerHTML"],qn={class:"hp-badge hp-b1","data-depth":"34"},Dn={class:"bi2"},Yn={class:"hp-badge hp-b2","data-depth":"30"},Pn={class:"bi2"},Hn={class:"st-strip"},Vn={class:"si"},In={class:"sec-line"},On={class:"cats"},Rn=["data-cat","onClick"],Nn={class:"ic-mini"},Qn={class:"ill",style:{background:"radial-gradient(70px 40px at 50% 85%,rgba(198,161,91,.28),transparent 65%),linear-gradient(150deg,#2A2318,#0F0C07)","border-radius":"11px"}},Xn=["viewBox","innerHTML"],Un={key:0,class:"store-promos"},Gn={class:"store-promo__badge"},Jn={class:"store-promo__txt"},Kn=["data-promo"],Wn={class:"sec-line"},Zn={class:"best-wrap"},ne={class:"caro-btn r","data-caro":"1"},ee={class:"caro-btn l","data-caro":"-1"},re={class:"best-caro",id:"bestCaro"},oe={class:"grid-tools"},te={class:"gt-filter"},ae={class:"gt-count"},ie={class:"view-tg"},se={class:"gt-sort"},le={key:1,class:"show-more"},de={class:"perks",style:{"grid-template-columns":"repeat(4,1fr)","margin-top":"26px"}},pe={class:"pi"},ge={__name:"StoreCatalog",emits:["scroll-to-grid","add"],setup(v,{emit:E}){const{state:m,isFav:M,toggleFav:d,visibleProducts:h,setQty:x}=U(),z=C=>m.cart[C]||0,p=L(()=>Q.slice(1).concat(Q[0])),w=L(()=>G.filter(e=>m.cat==="all"||e.cat===m.cat).length),j=L(()=>G.filter(C=>C.best)),g=L(()=>Array.from({length:7},(C,e)=>({ch:e%3?"✦":"❖",style:`top:${10+e*13%75}%;${e%2?"right":"left"}:${4+e*9%42}%;animation-delay:-${e*.7}s`}))),$=C=>{const e=Q.find(i=>i.id===C);return T(e.shape,52)},A=[["جودة مختارة بعناية","منتجات أصلية 100%",y.star],["تغليف فاخر","اهتمام بكل تفاصيل الطلب",y.box],["استلام من الفرع","جاهزة للاستلام من أقرب فرع",y.home],["إهداء سهل","أرسل المنتج أو الباقة كهدية",y.chat]],q=E;function B(C){m.cat=C,m.showAll=!1}function o(){m.showAll=!m.showAll}function s(C){m.view=C}return(C,e)=>(t(),l(_,null,[n("section",zn,[e[26]||(e[26]=nn('<svg class="veins" viewBox="0 0 800 430" preserveAspectRatio="none" fill="none"><path d="M-20 340 C160 300 240 380 420 330 S 700 250 830 300" stroke="rgba(198,161,91,.14)" stroke-width="1.2"></path><path d="M-20 120 C120 160 300 60 460 110 S 720 190 830 140" stroke="rgba(198,161,91,.1)" stroke-width="1"></path><path d="M100 430 C180 340 320 420 430 350" stroke="rgba(233,207,142,.08)" stroke-width="1"></path></svg><div class="hero-frame"></div>',2)),(t(!0),l(_,null,Y(g.value,(i,S)=>(t(),l("span",{key:S,class:"hp",style:V(i.style)},a(i.ch),5))),128)),n("div",Fn,[e[12]||(e[12]=n("span",{class:"eyebrow2"},[n("i"),c(" منتجات مختارة بعناية — جودة الصالون في منزلك")],-1)),e[13]||(e[13]=n("h1",null,[c("لتجربة يومية"),n("br"),n("span",{class:"g"},"استثنائيــــة")],-1)),e[14]||(e[14]=n("p",null,"منتجات فاخرة بجودة عالية لرجل يهتم بأدق التفاصيل — من العناية بالشعر واللحية إلى العطور الفاخرة.",-1)),n("div",$n,[n("button",{class:"btn btn-gold",id:"heroCta",onClick:e[0]||(e[0]=i=>q("scroll-to-grid"))},[e[11]||(e[11]=c("اكتشف المجموعة ",-1)),b(f,{inner:r(y).arrowL,size:15},null,8,["inner"])]),n("button",{class:"btn btn-outline-l",id:"heroBest",onClick:e[1]||(e[1]=i=>q("scroll-to-grid"))},"الأكثر مبيعًا")]),e[15]||(e[15]=n("div",{class:"hero-stats"},[n("div",{class:"hstat"},[n("b",null,"+30"),n("small",null,"منتج عناية فاخر")]),n("div",{class:"hstat"},[n("b",null,"100%"),n("small",null,"منتجات أصلية")]),n("div",{class:"hstat"},[n("b",null,"4.9 ★"),n("small",null,"تقييم عملائنا")])],-1))]),n("div",Cn,[e[24]||(e[24]=n("div",{class:"glow"},null,-1)),e[25]||(e[25]=n("div",{class:"ring2"},null,-1)),n("div",_n,[e[16]||(e[16]=n("img",{src:"https://sami-care.sa//storage/uploads/406/uGGoLhrbcMofuyS2kedJ44ejvBqYnz1M0mA0zTMP.jpg",alt:"زيت اللحية الذهبي",loading:"eager",onerror:"this.style.display='none';this.nextElementSibling.style.display='grid'"},null,-1)),n("div",Bn,[(t(),l("svg",{class:"prod",width:"90",height:"90",viewBox:r(T)("dropper",90).viewBox,innerHTML:r(T)("dropper",90).inner},null,8,Mn))]),e[17]||(e[17]=n("span",{class:"tag2"},"زيت اللحية الذهبي",-1))]),n("div",jn,[e[18]||(e[18]=n("img",{src:"https://sami-care.sa//storage/uploads/403/HyxbPuOgHBgbg0pgpMZr9bcFv2OryQtxjRMLnhxb.jpg",alt:"كريم الترطيب",onerror:"this.style.display='none';this.nextElementSibling.style.display='grid'"},null,-1)),n("div",En,[(t(),l("svg",{class:"prod",width:"70",height:"70",viewBox:r(T)("jar",70).viewBox,innerHTML:r(T)("jar",70).inner},null,8,An))]),e[19]||(e[19]=n("span",{class:"tag2"},"كريم الترطيب",-1))]),n("div",Sn,[e[20]||(e[20]=n("img",{src:"https://sami-care.sa//storage/uploads/405/L2sxjQjZgTztP0swgRTlXV0jVjCLuS5GJyypCJmT.jpg",alt:"غسول البشرة",onerror:"this.style.display='none';this.nextElementSibling.style.display='grid'"},null,-1)),n("div",Tn,[(t(),l("svg",{class:"prod",width:"70",height:"70",viewBox:r(T)("pump",70).viewBox,innerHTML:r(T)("pump",70).inner},null,8,Ln))]),e[21]||(e[21]=n("span",{class:"tag2"},"غسول البشرة",-1))]),n("div",qn,[n("span",Dn,[b(f,{inner:r(y).star,size:16},null,8,["inner"])]),e[22]||(e[22]=n("span",null,[n("b",null,"منتجات أصلية 100%"),n("small",null,"مختارة من عناية سامي")],-1))]),n("div",Yn,[n("span",Pn,[b(f,{inner:r(y).box,size:16},null,8,["inner"])]),e[23]||(e[23]=n("span",null,[n("b",null,"تغليف فاخر"),n("small",null,"اهتمام بكل تفاصيل الطلب")],-1))])])]),n("div",Hn,[n("span",Vn,[b(f,{inner:r(y).bag,size:19},null,8,["inner"])]),e[28]||(e[28]=n("p",null,"منتجات مختارة خصيصًا لتكمل تجربة عناية سامي داخل المنزل",-1)),n("button",{class:"btn btn-line",id:"stripCta",style:{padding:"11px 24px","font-size":"12.5px"},onClick:e[2]||(e[2]=i=>q("scroll-to-grid"))},[e[27]||(e[27]=c("تسوق المجموعة الكاملة ",-1)),b(f,{inner:r(y).arrowL,size:13},null,8,["inner"])])]),n("div",In,[e[30]||(e[30]=n("h2",null,"تسوق حسب الفئة",-1)),n("a",{"data-cat":"all",onClick:e[3]||(e[3]=i=>B("all"))},[b(f,{inner:r(y).arrowL,size:13},null,8,["inner"]),e[29]||(e[29]=c(" عرض جميع الفئات",-1))])]),n("div",On,[(t(!0),l(_,null,Y(p.value,i=>(t(),l("div",{key:i.id,class:F(["catc",{on:r(m).cat===i.id}]),"data-cat":i.id,onClick:S=>B(i.id)},[n("span",Nn,[b(f,{inner:r(y).star,size:12},null,8,["inner"])]),n("div",Qn,[(t(),l("svg",{class:"prod",width:"52",height:"52",viewBox:$(i.id).viewBox,innerHTML:$(i.id).inner},null,8,Xn))]),n("b",null,a(i.n),1)],10,Rn))),128))]),r(J).length?(t(),l("div",Un,[(t(!0),l(_,null,Y(r(J),i=>(t(),l("div",{key:i.id,class:"store-promo"},[n("span",Gn,a(i.badge),1),n("div",Jn,[n("h3",null,a(i.title),1),n("p",null,a(i.text),1)]),n("button",{class:"btn btn-gold","data-promo":i.id,onClick:e[4]||(e[4]=S=>q("scroll-to-grid"))},[c(a(i.cta)+" ",1),b(f,{inner:r(y).arrowL,size:13},null,8,["inner"])],8,Kn)]))),128))])):I("",!0),n("div",Wn,[e[32]||(e[32]=n("h2",null,"الأكثر مبيعًا",-1)),n("a",{"data-showall":"1",onClick:e[5]||(e[5]=i=>r(m).showAll=!0)},[b(f,{inner:r(y).arrowL,size:13},null,8,["inner"]),e[31]||(e[31]=c(" عرض جميع المنتجات",-1))])]),n("div",Zn,[n("button",ne,[b(f,{inner:r(y).chevR,size:15},null,8,["inner"])]),n("button",ee,[b(f,{inner:r(y).chevL,size:15},null,8,["inner"])]),n("div",re,[(t(!0),l(_,null,Y(j.value,(i,S)=>(t(),O(Z,{key:i.id,p:i,index:S,view:r(m).view,fav:r(M)(i.id),qty:z(i.id),onToggleFav:r(d),onAdd:e[6]||(e[6]=(H,k)=>q("add",H,k)),onSetQty:r(x)},null,8,["p","index","view","fav","qty","onToggleFav","onSetQty"]))),128))])]),e[37]||(e[37]=n("div",{class:"sec-line"},[n("h2",null,"منتجات عناية سامي")],-1)),n("div",oe,[n("button",te,[b(f,{inner:r(y).filter,size:15},null,8,["inner"]),e[33]||(e[33]=c(" تصفية المنتجات",-1))]),n("span",ae,"عرض 1 - "+a(r(h).length)+" من "+a(w.value)+" منتج",1),n("div",ie,[n("button",{class:F({on:r(m).view==="grid"}),"data-view":"grid","aria-label":"شبكة",onClick:e[7]||(e[7]=i=>s("grid"))},[b(f,{inner:r(y).grid,size:15},null,8,["inner"])],2),n("button",{class:F({on:r(m).view==="list"}),"data-view":"list","aria-label":"قائمة",onClick:e[8]||(e[8]=i=>s("list"))},[b(f,{inner:r(y).list,size:15},null,8,["inner"])],2)]),n("div",se,[e[35]||(e[35]=c("ترتيب ",-1)),R(n("select",{id:"sortSel","onUpdate:modelValue":e[9]||(e[9]=i=>r(m).sort=i)},[...e[34]||(e[34]=[n("option",{value:"new"},"الأحدث",-1),n("option",{value:"best"},"الأكثر مبيعًا",-1),n("option",{value:"low"},"السعر: الأقل أولًا",-1),n("option",{value:"high"},"السعر: الأعلى أولًا",-1)])],512),[[en,r(m).sort]])])]),n("div",{class:F(["pgrid",{list:r(m).view==="list"}]),id:"pgrid"},[(t(!0),l(_,null,Y(r(h),(i,S)=>(t(),O(Z,{key:i.id,p:i,index:S,view:r(m).view,fav:r(M)(i.id),qty:z(i.id),onToggleFav:r(d),onAdd:e[10]||(e[10]=(H,k)=>q("add",H,k)),onSetQty:r(x)},null,8,["p","index","view","fav","qty","onToggleFav","onSetQty"]))),128))],2),w.value>8?(t(),l("div",le,[n("button",{id:"moreBtn",onClick:o},[r(m).showAll?(t(),l(_,{key:0},[e[36]||(e[36]=c("إخفاء المنتجات ",-1)),b(f,{inner:r(y).chevUp,size:14},null,8,["inner"])],64)):(t(),l(_,{key:1},[c("عرض جميع المنتجات ("+a(w.value)+") ",1),b(f,{inner:r(y).chevDown,size:14},null,8,["inner"])],64))])])):I("",!0),n("div",de,[(t(),l(_,null,Y(A,(i,S)=>n("div",{key:S,class:"perk"},[n("span",pe,[b(f,{inner:i[2],size:17},null,8,["inner"])]),n("b",null,a(i[0]),1),n("small",null,a(i[1]),1)])),64))])],64))}},ce={class:"g-stepper",style:{"padding-bottom":"0"}},xe={style:{display:"flex","align-items":"center",gap:"12px","justify-content":"center"}},be={class:"g-stage",style:{"padding-top":"6px"}},fe={class:"view on"},me={class:"card",style:{padding:"22px","margin-bottom":"14px"}},he={class:"bk-pays",style:{display:"grid",gap:"10px"}},ve={class:"in",style:{display:"grid",gap:"9px"}},ue=["data-br","onClick"],ke={style:{display:"block","font-size":"13px"}},ye={style:{color:"var(--mute)","font-size":"11px"}},we={class:"in"},ze={class:"fld",style:{margin:"0"}},Fe={class:"card",style:{padding:"22px","margin-bottom":"14px"}},$e={class:"two"},Ce={class:"fld",style:{margin:"0"}},_e={class:"fld",style:{margin:"0"}},Be={class:"card",style:{padding:"22px"}},Me=["data-ckpay"],je=["onClick"],Ee={class:"lg"},Ae={class:"tt"},Se={class:"inline-actions"},Te=["disabled"],Le={class:"gsum"},qe={class:"card",style:{padding:"20px"}},De={class:"thumb"},Ye=["viewBox","innerHTML"],Pe={class:"p"},He={style:{"margin-top":"12px","padding-top":"12px","border-top":"1px dashed var(--line)"}},Ve={class:"gs-row",style:{border:"none",padding:"4px 0"}},Ie={class:"v"},Oe={class:"gs-row",style:{border:"none",padding:"4px 0"}},Re={class:"v"},Ne={class:"gs-row",style:{border:"none",padding:"4px 0"}},Qe={class:"k"},Xe={class:"gs-total"},Ue={class:"v"},Ge={class:"gs-note"},Je={__name:"StoreCheckout",emits:["back","placed"],setup(v,{emit:E}){const m=E,{state:M,cartItems:d,ckParts:h,ckCan:x,placeOrder:z}=U(),p=M.ck,w={arrowR:'<path d="M5 12h14M13 6l6 6-6 6"/>',lock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>',check:'<path d="M20 6L9 17l-5-5"/>'},j=B=>T(B,34),g=B=>`display:flex;gap:10px;align-items:center;font-size:13px;color:var(--ink);cursor:pointer;padding:10px 12px;border:1.5px solid ${p.branch===B?"var(--gold)":"var(--line)"};border-radius:11px;background:${p.branch===B?"#FFFBF0":"#fff"}`,$=B=>`width:16px;height:16px;border-radius:50%;border:1.5px solid ${p.branch===B?"var(--gold)":"var(--line)"};display:grid;place-items:center`,A=B=>`width:8px;height:8px;border-radius:50%;background:linear-gradient(135deg,var(--gold-bright),var(--gold));transform:scale(${p.branch===B?1:0});transition:.2s`;function q(){x.value&&m("placed",()=>z(K,W))}return(B,o)=>(t(),l(_,null,[n("div",ce,[n("div",xe,[n("button",{class:"btn btn-prev",id:"backStore",style:{padding:"10px 20px","font-size":"12.5px"},onClick:o[0]||(o[0]=s=>m("back"))},[b(f,{inner:w.arrowR,size:14},null,8,["inner"]),o[8]||(o[8]=c(" العودة للمتجر",-1))])])]),o[29]||(o[29]=n("div",{class:"g-head",style:{"margin-top":"14px"}},[n("h1",null,"إتمام الطلب 🛍️"),n("p",null,"خطوة أخيرة وتصلك منتجاتك المختارة بعناية")],-1)),n("div",be,[n("main",fe,[n("div",me,[o[12]||(o[12]=n("h4",{style:{"font-family":"var(--font-d)","font-size":"16px",color:"var(--ink)","margin-bottom":"14px"}},"1️⃣ طريقة الاستلام",-1)),n("div",he,[n("div",{class:F(["acc-pm",{sel:r(p).method==="pickup"}]),"data-mth":"pickup"},[n("div",{class:"head",onClick:o[1]||(o[1]=s=>r(p).method="pickup")},[...o[9]||(o[9]=[n("span",{class:"lg"},"🏬",-1),n("span",{class:"tt"},[n("b",null,"استلام من الفرع"),n("small",null,"جاهزة للاستلام من أقرب فرع — مجانًا")],-1),n("span",{class:"rad"},[n("i")],-1)])]),n("div",{class:F(["body",{has:r(p).method==="pickup"}])},[n("div",ve,[(t(!0),l(_,null,Y(r(K),s=>(t(),l("label",{key:s.id,style:V(g(s.id)),"data-br":s.id,onClick:C=>r(p).branch=s.id},[n("span",{style:V($(s.id))},[n("i",{style:V(A(s.id))},null,4)],4),n("span",null,[n("b",ke,a(s.n),1),n("small",ye,a(s.a),1)])],12,ue))),128))])],2)],2),n("div",{class:F(["acc-pm",{sel:r(p).method==="delivery"}]),"data-mth":"delivery"},[n("div",{class:"head",onClick:o[2]||(o[2]=s=>r(p).method="delivery")},[...o[10]||(o[10]=[n("span",{class:"lg"},"🚚",-1),n("span",{class:"tt"},[n("b",null,"توصيل للمنزل"),n("small",null,"توصيل سريع داخل جدة — 25 ر.س")],-1),n("span",{class:"rad"},[n("i")],-1)])]),n("div",{class:F(["body",{has:r(p).method==="delivery"}])},[n("div",we,[n("div",ze,[o[11]||(o[11]=n("label",null,"عنوان التوصيل",-1)),R(n("input",{id:"ckAddr",placeholder:"الحي، الشارع، رقم المبنى...","onUpdate:modelValue":o[3]||(o[3]=s=>r(p).addr=s)},null,512),[[X,r(p).addr]])])])],2)],2)])]),n("div",Fe,[o[15]||(o[15]=n("h4",{style:{"font-family":"var(--font-d)","font-size":"16px",color:"var(--ink)","margin-bottom":"14px"}},"2️⃣ بيانات العميل",-1)),n("div",$e,[n("div",Ce,[o[13]||(o[13]=n("label",null,"الاسم الكامل",-1)),R(n("input",{id:"ckName","onUpdate:modelValue":o[4]||(o[4]=s=>r(p).name=s)},null,512),[[X,r(p).name]])]),n("div",_e,[o[14]||(o[14]=n("label",null,"رقم الجوال",-1)),R(n("input",{id:"ckPhone",dir:"ltr","onUpdate:modelValue":o[5]||(o[5]=s=>r(p).phone=s)},null,512),[[X,r(p).phone]])])])]),n("div",Be,[o[21]||(o[21]=n("h4",{style:{"font-family":"var(--font-d)","font-size":"16px",color:"var(--ink)","margin-bottom":"14px"}},"3️⃣ طريقة الدفع",-1)),(t(!0),l(_,null,Y(r(W),s=>(t(),l("div",{key:s.id,class:F(["acc-pm",{sel:r(p).pay===s.id}]),"data-ckpay":s.id},[n("div",{class:"head",onClick:C=>r(p).pay=s.id},[n("span",Ee,a(s.logo),1),n("span",Ae,[n("b",null,a(s.n),1),n("small",null,a(s.d),1)]),o[16]||(o[16]=n("span",{class:"rad"},[n("i")],-1))],8,je),s.form?(t(),l("div",{key:0,class:F(["body",{has:r(p).pay===s.id}])},[...o[17]||(o[17]=[n("div",{class:"in"},[n("div",{class:"two"},[n("div",{class:"fld",style:{"margin-bottom":"10px"}},[n("label",null,"رقم البطاقة"),n("input",{dir:"ltr",inputmode:"numeric",placeholder:"•••• •••• •••• ••••"})]),n("div",{class:"fld",style:{"margin-bottom":"10px"}},[n("label",null,"الاسم على البطاقة"),n("input",{placeholder:"الاسم كما هو على البطاقة"})])]),n("div",{class:"two"},[n("div",{class:"fld",style:{margin:"0"}},[n("label",null,"تاريخ الانتهاء"),n("input",{dir:"ltr",placeholder:"MM / YY"})]),n("div",{class:"fld",style:{margin:"0"}},[n("label",null,"رمز الأمان (CVV)"),n("input",{dir:"ltr",inputmode:"numeric",placeholder:"•••"})])])],-1)])],2)):I("",!0)],10,Me))),128)),n("span",{class:F(["terms-chk",{on:r(p).terms}]),id:"ckTerms",onClick:o[6]||(o[6]=s=>r(p).terms=!r(p).terms)},[n("i",null,[b(f,{inner:w.check,size:11},null,8,["inner"])]),o[18]||(o[18]=c(" أوافق على ",-1)),o[19]||(o[19]=n("a",{href:"https://sami-care.sa/TermsAndConditions"},"الشروط والأحكام وسياسة الاسترجاع",-1))],2),n("div",Se,[n("button",{class:"btn btn-prev",id:"backStore2",onClick:o[7]||(o[7]=s=>m("back"))},[b(f,{inner:w.arrowR,size:15},null,8,["inner"]),o[20]||(o[20]=c(" الرجوع للمتجر",-1))]),n("button",{class:"btn btn-gold",id:"placeOrder",disabled:!r(x),onClick:q},[b(f,{inner:w.lock,size:15},null,8,["inner"]),c(" إتمام الطلب — "+a(r(D)(r(h).total))+" ر.س",1)],8,Te)]),o[22]||(o[22]=n("div",{class:"after-pay",style:{"font-size":"11.5px",color:"var(--mute)","text-align":"center","margin-top":"12px"}},"🔒 جميع عمليات الدفع آمنة ومشفرة",-1))])]),n("aside",null,[n("div",Le,[n("div",qe,[o[28]||(o[28]=n("h3",{style:{"font-family":"var(--font-d)","font-size":"17px",color:"var(--ink)","margin-bottom":"14px",display:"flex",gap:"10px","align-items":"center"}},[c("ملخص الطلب"),n("span",{style:{flex:"1",height:"1px",background:"linear-gradient(-90deg,var(--gold),transparent)"}})],-1)),(t(!0),l(_,null,Y(r(d),s=>(t(),l("div",{key:s.id,class:"sum-item"},[n("span",De,[(t(),l("svg",{class:"prod",width:"34",height:"34",viewBox:j(s.shape).viewBox,innerHTML:j(s.shape).inner},null,8,Ye))]),n("span",null,[n("b",null,a(s.n),1),n("small",null,"الكمية: "+a(s.qty),1)]),n("span",Pe,a(r(D)(s.pr*s.qty))+" ر.س",1)]))),128)),n("div",He,[n("div",Ve,[o[23]||(o[23]=n("span",{class:"k"},"المجموع الفرعي",-1)),n("span",Ie,a(r(D)(r(h).sub))+" ر.س",1)]),n("div",Oe,[o[24]||(o[24]=n("span",{class:"k"},"ضريبة القيمة المضافة (15%)",-1)),n("span",Re,"+"+a(r(D)(r(h).vat))+" ر.س",1)]),n("div",Ne,[n("span",Qe,a(r(p).method==="delivery"?"رسوم التوصيل":"الاستلام من الفرع"),1),n("span",{class:"v",style:V(r(h).ship?"":"color:var(--green)")},a(r(h).ship?"+"+r(D)(r(h).ship)+" ر.س":"مجانًا"),5)])]),n("div",Xe,[o[26]||(o[26]=n("span",{class:"k"},"الإجمالي",-1)),n("span",Ue,[c(a(r(D)(r(h).total))+" ",1),o[25]||(o[25]=n("small",{style:{"font-size":"13px"}},"ر.س",-1))])]),n("div",Ge,[b(f,{inner:w.lock,size:14},null,8,["inner"]),o[27]||(o[27]=c(" الدفع آمن ومشفّر — بياناتك محمية بالكامل",-1))])])])])])],64))}},Ke={class:"gsuccess",style:{"max-width":"860px","margin-inline":"auto"}},We={class:"sub"},Ze={class:"gsuc-grid",style:{"grid-template-columns":"1.2fr 1fr"}},nr={class:"card gsuc-details"},er={class:"gs-row"},rr={class:"k"},or={class:"v",dir:"ltr"},tr={class:"gs-row"},ar={class:"k"},ir={class:"v"},sr={class:"gs-row"},lr={class:"k"},dr={class:"v"},pr={class:"gs-row"},gr={class:"k"},cr={class:"v"},xr={class:"gs-row"},br={class:"k"},fr={class:"gs-row"},mr={class:"k"},hr={class:"v",style:{color:"var(--gold-deep)","font-family":"var(--font-d)","font-size":"17px"}},vr={class:"card gsuc-details"},ur={class:"thumb"},kr=["viewBox","innerHTML"],yr={class:"p"},wr={class:"gsuc-actions"},zr={__name:"StoreSuccess",props:{order:{type:Object,required:!0}},emits:["back","track"],setup(v,{emit:E}){const m=v,M=E,d={qr:'<path d="M4 4h16v16H4z"/><path d="M9 9h2v2H9zM13 13h2v2h-2z"/>',user:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',home:'<path d="M3 9l1-5h16l1 5M4 9v11h16V9M9 20v-6h6v6"/>',truck:'<path d="M1 3h15v13H1zM16 8h4l3 4v4h-7z"/><circle cx="6" cy="19" r="2"/><circle cx="19" cy="19" r="2"/>',card:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',check:'<path d="M20 6L9 17l-5-5"/>',lock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>',bag:'<path d="M6 7h12l1.5 14h-15zM8 7a4 4 0 018 0"/>'},h=L(()=>m.order),x=L(()=>m.order.parts),z=L(()=>h.value.method==="pickup"),p=L(()=>h.value.items.reduce((j,g)=>j+g.q,0)),w=j=>T(j,34);return(j,g)=>(t(),l("div",Ke,[g[10]||(g[10]=n("div",{class:"gsuc-head",style:{"margin-top":"20px"}},[n("h1",null,"تم تأكيد طلبك بنجاح!"),n("span",{class:"ic"},[n("svg",{width:"26",height:"26",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.4"},[n("path",{d:"M20 6L9 17l-5-5"})])])],-1)),n("p",We,a(z.value?"سيكون طلبك جاهزًا للاستلام من "+h.value.branch.n+" خلال ساعات العمل":"سيصلك طلبك خلال 24-48 ساعة على العنوان المحدد")+" — وسنرسل لك إشعارًا فور تجهيزه ✨",1),n("div",Ze,[n("div",nr,[g[7]||(g[7]=n("h4",null,"تفاصيل الطلب",-1)),n("div",er,[n("span",rr,[b(f,{inner:d.qr,size:14},null,8,["inner"]),g[2]||(g[2]=c(" رقم الطلب",-1))]),n("span",or,a(h.value.ref),1)]),n("div",tr,[n("span",ar,[b(f,{inner:d.user,size:14},null,8,["inner"]),g[3]||(g[3]=c(" العميل",-1))]),n("span",ir,a(h.value.name),1)]),n("div",sr,[n("span",lr,[b(f,{inner:z.value?d.home:d.truck,size:14},null,8,["inner"]),c(" "+a(z.value?"الاستلام":"التوصيل"),1)]),n("span",dr,a(z.value?h.value.branch.n:h.value.addr),1)]),n("div",pr,[n("span",gr,[b(f,{inner:d.card,size:14},null,8,["inner"]),g[4]||(g[4]=c(" طريقة الدفع",-1))]),n("span",cr,a(h.value.pay),1)]),n("div",xr,[n("span",br,[b(f,{inner:d.check,size:14},null,8,["inner"]),g[5]||(g[5]=c(" حالة الطلب",-1))]),g[6]||(g[6]=n("span",{class:"v"},[n("span",{class:"chip"},"قيد التجهيز")],-1))]),n("div",fr,[n("span",mr,[b(f,{inner:d.lock,size:14},null,8,["inner"]),c(" المبلغ "+a(h.value.pay==="الدفع عند الاستلام"?"المستحق":"المدفوع"),1)]),n("span",hr,a(r(D)(x.value.total))+" ر.س",1)])]),n("div",vr,[n("h4",null,"منتجاتك ("+a(p.value)+")",1),(t(!0),l(_,null,Y(h.value.items,({p:$,q:A})=>(t(),l("div",{key:$.id,class:"sum-item"},[n("span",ur,[(t(),l("svg",{class:"prod",width:"34",height:"34",viewBox:w($.shape).viewBox,innerHTML:w($.shape).inner},null,8,kr))]),n("span",null,[n("b",null,a($.n),1),n("small",null,"الكمية: "+a(A),1)]),n("span",yr,a(r(D)($.pr*A))+" ر.س",1)]))),128))])]),n("div",wr,[n("button",{class:"btn btn-gold",id:"backStore3",onClick:g[0]||(g[0]=$=>M("back"))},[b(f,{inner:d.bag,size:15},null,8,["inner"]),g[8]||(g[8]=c(" متابعة التسوق",-1))]),n("button",{class:"btn btn-line",id:"trackOrder",onClick:g[1]||(g[1]=$=>M("track"))},[b(f,{inner:d.truck,size:15},null,8,["inner"]),g[9]||(g[9]=c(" تتبع الطلب",-1))])]),g[11]||(g[11]=n("div",{class:"thanks"},[n("i",null,"❦"),c(" شكرًا لثقتك بمنتجات عناية سامي "),n("i",null,"❦")],-1))]))}},Fr={class:"shell"},$r={class:"wrap",id:"storeApp"},Cr={class:"sprod",id:"sheetProd"},_r={class:"thumb"},Br=["viewBox","innerHTML"],Mr={style:{flex:"1"}},jr={class:"p"},Er={class:"sacts"},Ar={id:"toastTopMsg"},Lr={__name:"StoreView",setup(v){const E=P(null),m=P(null),M=P(null);rn();const{state:d,cartQty:h,pOf:x}=U();ln(pn,"store"),dn(E);const z=P(!1),p=P(!1),w=P(null),j=P(!1),g=P(""),$=P(!1);function A(k){g.value=k,$.value=!0,clearTimeout(A._h),A._h=setTimeout(()=>{$.value=!1},2e3)}function q(){const k=m.value,u=M.value;!k||!u||(k.classList.remove("pop"),k.offsetWidth,k.classList.add("pop"),u.classList.remove("shake"),u.offsetWidth,u.classList.add("shake"),setTimeout(()=>k.classList.remove("pop"),350))}function B(k,u){d.cart[k]=(d.cart[k]||0)+1,sn(q),d.firstAdd?(d.firstAdd=!1,w.value=x(k),p.value=!0):A("تمت إضافة المنتج للسلة")}function o(){z.value=!0}function s(){z.value=!1}function C(){s(),d.page="checkout",d.ck.pay=null,d.ck.terms=!1,scrollTo({top:0,behavior:"smooth"})}function e(){d.page="store",scrollTo({top:0})}function i(k){j.value=!0,setTimeout(()=>{j.value=!1,k(),scrollTo({top:0,behavior:"smooth"})},2100)}function S(){const k=document.getElementById("pgrid");k&&k.scrollIntoView({behavior:"smooth",block:"start"})}on(()=>[d.page,h.value],()=>{d.page==="checkout"&&!h.value&&(d.page="store")});const H=()=>w.value?T(w.value.shape,46):null;return(k,u)=>(t(),l("div",{ref_key:"root",ref:E},[n("div",Fr,[n("div",$r,[r(d).page==="store"?(t(),O(ge,{key:0,onScrollToGrid:S,onAdd:B})):r(d).page==="checkout"?(t(),O(Je,{key:1,onBack:e,onPlaced:i})):r(d).page==="success"&&r(d).order?(t(),O(zr,{key:2,order:r(d).order,onBack:e,onTrack:u[0]||(u[0]=N=>A("حالة طلبك "+r(d).order.ref+": قيد التجهيز"))},null,8,["order"])):I("",!0)])]),u[7]||(u[7]=n("footer",{id:"contact",class:"site-footer"},[n("div",{class:"footer-content container"},[n("div",null,[n("h3",null,"تواصل معنا"),n("form",{class:"phone-form",onsubmit:"return false"},[n("span",null,"+966"),n("input",{type:"tel",placeholder:"رقم الجوال"})]),n("a",{class:"whatsapp",href:"https://wa.me/966566101963"},"تواصل واتساب ◉")]),n("div",null,[n("h3",null,"عن سامي"),n("a",{href:"/"},"الرئيسية"),n("a",{href:"/booking"},"خدماتنا"),n("a",{href:"/store"},"المنتجات"),n("a",{href:"/packages-gifts"},"الباقات")]),n("div",{class:"footer-brand"},[n("a",{href:"/"},[n("img",{src:tn,alt:"عناية سامي"})])]),n("div",null,[n("h3",null,"مساعدة"),n("a",{href:"/contact"},"اتصل معنا"),n("a",{href:"#"},"الشكاوى والاقتراحات"),n("a",{href:"#"},"سياسة الخصوصية"),n("a",{href:"#"},"الشروط والأحكام")]),n("div",null,[n("h3",null,"عناوين الفروع"),n("b",null,"الفرع الأول"),n("p",null,[c("جدة - الحمدانية، شارع خالد"),n("br"),c("0566101963")]),n("b",null,"الفرع الثاني"),n("p",null,[c("جدة - الروابي، شارع باريس"),n("br"),c("0530064642")])])]),n("p",{class:"copyright"},"© 2026 عناية سامي. جميع الحقوق محفوظة.")],-1)),n("div",{class:F(["sheet-ov",{on:p.value}]),id:"sheetOv",onClick:u[1]||(u[1]=N=>p.value=!1)},null,2),n("div",{class:F(["sheet",{on:p.value}]),id:"sheet"},[u[4]||(u[4]=nn('<div class="grab"></div><div class="shead"><span class="si"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 7h12l1.5 14h-15zM8 7a4 4 0 018 0"></path><path d="M9.5 13.5l1.8 1.8 3.4-3.4"></path></svg></span><b>تم إضافة المنتج</b></div>',2)),n("div",Cr,[w.value?(t(),l(_,{key:0},[n("span",_r,[(t(),l("svg",{class:"prod",width:"46",height:"46",viewBox:H().viewBox,innerHTML:H().inner},null,8,Br))]),n("span",Mr,[n("b",null,a(w.value.n),1),n("span",jr,a(r(D)(w.value.pr))+" ر.س",1)])],64)):I("",!0)]),n("div",Er,[n("button",{class:"btn btn-line",id:"sheetCont",onClick:u[2]||(u[2]=N=>p.value=!1)},"متابعة التسوق"),n("button",{class:"btn btn-gold",id:"sheetView",onClick:u[3]||(u[3]=N=>{p.value=!1,o()})},"عرض السلة")])],2),b(an,{open:z.value,onClose:s,onCheckout:C},null,8,["open"]),n("div",{class:F(["pay-loading",{on:j.value}]),id:"payLoading"},[...u[5]||(u[5]=[n("div",{class:"pl-box"},[n("div",{class:"pl-ring"}),n("b",null,"جارٍ معالجة طلبك بأمان…"),n("small",null,"لا تغلق الصفحة، سيتم تأكيد طلبك خلال لحظات")],-1)])],2),n("div",{class:F(["toast-top",{on:$.value}]),id:"toastTop"},[u[6]||(u[6]=n("span",{class:"ti"},[n("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3"},[n("path",{d:"M20 6L9 17l-5-5"})])],-1)),n("span",Ar,a(g.value),1)],2)],512))}};export{Lr as default};
