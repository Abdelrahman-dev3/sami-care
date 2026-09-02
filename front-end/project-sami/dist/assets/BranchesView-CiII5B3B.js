import{r as b,h as m,c as a,b as r,u as s,p as u,F as v,e as w,o as i,q as p,t,a as e,w as k}from"./index-Vk1P3ydW.js";import{u as y,a as z}from"./useInternalLinks-2Kkcr9fM.js";import{P as B}from"./PageSkeleton-Dllr_-tz.js";import"./SkeletonLoader-BqmQIqPp.js";const C=`\r
:root{\r
  --ink:#0A0906; --coal:#14110C;\r
  --gold:#CE9234; --gold-bright:#E8BE6C; --gold-deep:#9C6B1F;\r
  --champagne:#F0E6CF; --ivory:#F8F4EB; --paper:#FBFAF6; --card:#FFFFFF;\r
  --smoke:#9A9080; --mute:#7d745f; --text:#2A2519;\r
  --line:rgba(143,113,52,.22); --line-dark:rgba(198,161,91,.22);\r
  --ease:cubic-bezier(.33,.9,.35,1); --dur:.26s;\r
  --font-d:'Lama Sans',serif; --font-b:'Lama Sans',sans-serif;\r
}\r
*{margin:0;padding:0;box-sizing:border-box}\r
body{font-family:var(--font-b);background:var(--ink);color:var(--text);-webkit-font-smoothing:antialiased;overflow-x:hidden}\r
::selection{background:var(--gold);color:var(--ink)}\r
img{max-width:100%;display:block;border-radius:12px}\r
a{color:inherit;text-decoration:none}\r
button{font-family:inherit;cursor:pointer;border:none;background:none;color:inherit}\r
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
nav.links a{font-size:15px;color:var(--champagne);opacity:.82;transition:var(--dur);position:relative;padding-bottom:4px}\r
nav.links a:hover,nav.links a.on{opacity:1;color:var(--gold-bright)}\r
nav.links a.on::after{content:"";position:absolute;bottom:0;right:0;left:0;height:2px;background:var(--gold-bright);border-radius:2px}\r
.nav-actions{display:flex;align-items:center;gap:12px}\r
.loyal{display:inline-flex;align-items:center;gap:8px;border:1px solid var(--gold);color:var(--gold-bright);\r
  padding:9px 18px;border-radius:999px;font-size:13px}\r
\r
.shell{background:var(--paper);border-radius:26px 26px 0 0;min-height:calc(100vh - 71px);padding-bottom:80px;position:relative}\r
\r
/* ===== الأزرار ===== */\r
.btn{display:inline-flex;align-items:center;gap:10px;justify-content:center;padding:14px 30px;border-radius:14px;\r
  font-size:14.5px;font-weight:700;position:relative;overflow:hidden;transition:transform var(--dur) var(--ease),box-shadow var(--dur) var(--ease)}\r
.btn:active{transform:scale(.98)}\r
.btn-gold{color:var(--ink);background:linear-gradient(135deg,var(--gold-bright) 0%,var(--gold) 50%,var(--gold-deep) 120%);\r
  box-shadow:0 12px 26px -10px rgba(143,113,52,.65)}\r
.btn-gold:hover{transform:translateY(-2px);box-shadow:0 18px 34px -10px rgba(143,113,52,.7)}\r
.btn-line{border:1.5px solid var(--gold);color:var(--gold-deep);background:#fff}\r
.btn-line:hover{background:rgba(198,161,91,.08);transform:translateY(-2px)}\r
\r
/* ===== محتوى الصفحة ===== */\r
.page-head{padding:60px 0 30px;text-align:center}\r
.page-head h1{font-family:var(--font-d);font-size:clamp(30px,4.5vw,48px);color:var(--ink);margin-bottom:12px}\r
.page-head p{color:var(--mute);font-size:16px;max-width:600px;margin-inline:auto;line-height:1.7}\r
\r
.branches-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:20px}\r
.branch-card{background:#fff;border:1px solid var(--line);border-radius:20px;padding:24px;display:flex;flex-direction:column;\r
  box-shadow:0 14px 30px -22px rgba(80,60,20,.25);transition:transform var(--dur) var(--ease),box-shadow var(--dur) var(--ease)}\r
.branch-card:hover{transform:translateY(-5px);box-shadow:0 20px 40px -20px rgba(80,60,20,.35)}\r
.branch-img{width:100%;height:180px;background:#EAE5DB;border-radius:12px;overflow:hidden;position:relative;margin-bottom:18px}\r
.branch-img img{width:100%;height:100%;object-fit:cover;transition:transform .7s var(--ease)}\r
.branch-card:hover .branch-img img{transform:scale(1.05)}\r
.branch-info{flex:1}\r
.branch-info h3{font-family:var(--font-d);font-size:22px;color:var(--ink);margin-bottom:12px}\r
.branch-meta{display:flex;flex-direction:column;gap:10px;margin-bottom:20px;font-size:14px;color:var(--mute)}\r
.branch-meta span{display:flex;align-items:center;gap:10px}\r
.branch-meta span svg{color:var(--gold-deep);flex-shrink:0}\r
\r
/* ===== الفوتر ===== */\r
footer{background:#070604;border-top:1px solid var(--line);padding:70px 0 30px;color:var(--champagne)}\r
.foot-grid{display:grid;grid-template-columns:2fr 1fr 1.5fr;gap:40px;margin-bottom:50px}\r
.foot-brand h3{font-family:var(--font-d);font-size:24px;color:var(--gold-bright);margin-bottom:14px}\r
.foot-brand p{font-size:14px;color:var(--smoke);line-height:1.8;max-width:320px}\r
.foot-links h4{font-family:var(--font-d);font-size:17px;color:var(--gold-bright);margin-bottom:22px}\r
.foot-links ul{list-style:none;display:flex;flex-direction:column;gap:12px}\r
.foot-links a{font-size:13.5px;color:var(--smoke);transition:var(--dur)}\r
.foot-links a:hover{color:var(--gold-bright);padding-inline-start:6px}\r
.foot-contact h4{font-family:var(--font-d);font-size:17px;color:var(--gold-bright);margin-bottom:22px}\r
.foot-contact p{font-size:14px;color:var(--smoke);line-height:1.8;margin-bottom:10px}\r
.foot-copy{border-top:1px solid rgba(198,161,91,.1);padding-top:30px;text-align:center;font-size:12.5px;color:var(--smoke)}\r
\r
@media(max-width:1024px){\r
  .branches-grid{grid-template-columns:1fr 1fr}\r
  .foot-grid{grid-template-columns:1fr 1fr}\r
}\r
@media(max-width:700px){\r
  nav.links{display:none}\r
  .branches-grid{grid-template-columns:1fr}\r
  .foot-grid{grid-template-columns:1fr}\r
  .page-head{padding:40px 0 15px}\r
}\r
\r
/* ===== تحسين الهيدر الموحد ===== */\r
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
.loc-ov{position:fixed;inset:0;z-index:500;background:rgba(18,12,5,.58);backdrop-filter:blur(4px);\r
  display:flex;align-items:center;justify-content:center;padding:20px;opacity:0;pointer-events:none;transition:opacity .22s}\r
.loc-ov.on{opacity:1;pointer-events:auto}\r
.loc-modal{position:relative;width:min(470px,100%);background:#fff;border-radius:22px;padding:28px 24px 24px;\r
  box-shadow:0 34px 70px -24px rgba(30,20,6,.5);max-height:90vh;overflow-y:auto}\r
.loc-close{position:absolute;top:14px;left:16px;width:32px;height:32px;border:0;background:#f4efe6;border-radius:50%;\r
  font-size:20px;line-height:1;color:#6f665c;cursor:pointer}\r
.loc-head{text-align:center;margin-bottom:20px}\r
.loc-head h3{font-size:20px;margin:0 0 6px;color:#241f1b}\r
.loc-head p{font-size:12px;color:#8b8379;margin:0}\r
.loc-list{display:grid;gap:11px}\r
.loc-item{display:grid;grid-template-columns:1fr 104px;align-items:center;gap:11px;\r
  border:1.5px solid #efe9e0;border-radius:16px;padding:9px;background:#fff;cursor:pointer;text-align:right;width:100%}\r
.loc-item:hover{border-color:#d7a243;background:#fffaf0}\r
.loc-item.on{border-color:#c98b31;background:#fffaf0;box-shadow:0 0 0 3px rgba(201,139,49,.14)}\r
.loc-item img{width:104px;height:72px;border-radius:12px;object-fit:cover}\r
.loc-txt b{display:block;font-size:14px;color:#241f1b}\r
.loc-txt small{display:block;font-size:10.5px;color:#8b8379;line-height:1.6;margin-top:3px}\r
.loc-txt em{display:flex;align-items:center;gap:5px;font-style:normal;font-size:10px;color:#2E8B57;margin-top:5px}\r
.loc-txt em::before{content:"";width:6px;height:6px;border-radius:50%;background:#2E8B57}\r
`,E={class:"shell"},F={class:"wrap"},_={key:1,class:"branches-grid"},A={class:"branch-img"},D=["src","alt"],j={class:"branch-info"},L={class:"branch-meta"},S={key:0},M={key:1},V={key:2},Y=["onClick"],$={__name:"BranchesView",setup(P){const d=b(null),{locations:g,locationsLoading:c,loadServiceLocations:x,setLocation:f}=m();y(C,"branches"),z(d),x();function h(l){f(l.id),location.href="/booking"}return(l,o)=>(i(),a("div",{ref_key:"root",ref:d,class:""},[r("div",E,[r("div",F,[o[4]||(o[4]=r("div",{class:"page-head"},[r("h1",null,"فروعنا الفاخرة"),r("p",null,"اختر الفرع الأقرب إليك لبدء حجز خدماتك. فروعنا مجهزة بالكامل لتقدم لك أرقى تجارب العناية والاسترخاء.")],-1)),s(c)?(i(),u(B,{key:0,variant:"list"})):(i(),a("div",_,[(i(!0),a(v,null,w(s(g),n=>(i(),a("div",{key:n.id,class:"branch-card"},[r("div",A,[n.image?(i(),a("img",{key:0,src:n.image,alt:n.name},null,8,D)):p("",!0)]),r("div",j,[r("h3",null,t(n.name),1),r("div",L,[r("span",null,[o[0]||(o[0]=r("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[r("path",{d:"M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0118 0z"}),r("circle",{cx:"12",cy:"10",r:"3"})],-1)),e(t(n.address),1)]),n.home?(i(),a("span",S,[...o[1]||(o[1]=[r("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[r("path",{d:"M3 9l9-6 9 6v11a1 1 0 01-1 1H4a1 1 0 01-1-1z"}),r("path",{d:"M9 21V12h6v9"})],-1),e("خدمة VIP",-1)])])):n.contact_number?(i(),a("span",M,[o[2]||(o[2]=r("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[r("path",{d:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z"})],-1)),e(t(n.contact_number),1)])):p("",!0),n.rating_star?(i(),a("span",V,[o[3]||(o[3]=r("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[r("path",{d:"M12 2l2.9 6.2 6.6.8-4.9 4.6 1.3 6.6L12 17l-5.9 3.2 1.3-6.6L2.5 9l6.6-.8z"})],-1)),e("تقييم "+t(n.rating_star),1)])):p("",!0)])]),r("a",{href:"#",class:"btn btn-gold",style:{width:"100%"},onClick:k(I=>h(n),["prevent"])},t(n.home?"احجز الخدمة المنزلية":"احجز في هذا الفرع"),9,Y)]))),128))]))])])],512))}};export{$ as default};
