import{r as y,h as A,s as M,c as d,b as r,m as g,t as p,a as e,F as w,e as k,u as z,d as i,y as a,z as L,o as s,q as B,M as j}from"./index-C4NLY1yc.js";import{u as I,a as D}from"./useInternalLinks-BdzaQwE1.js";import{s as _}from"./accountApi-BDysirPv.js";const S=`\r
:root{\r
  --ink:#0A0906; --coal:#14110C;\r
  --gold:#CE9234; --gold-bright:#E8BE6C; --gold-deep:#9C6B1F;\r
  --champagne:#F0E6CF; --ivory:#F8F4EB; --paper:#FBFAF6; --card:#FFFFFF;\r
  --smoke:#9A9080; --mute:#7d745f; --text:#2A2519;\r
  --line:rgba(143,113,52,.22); --line-dark:rgba(198,161,91,.22);\r
  --green:#2E8B57; --green-bright:#3fa46b;\r
  --ease:cubic-bezier(.33,.9,.35,1); --dur:.26s;\r
  --font-d:'Lama Sans',serif; --font-b:'Lama Sans',sans-serif;\r
}\r
*{margin:0;padding:0;box-sizing:border-box}\r
body{font-family:var(--font-b);background:var(--ink);color:var(--text);-webkit-font-smoothing:antialiased;overflow-x:hidden}\r
::selection{background:var(--gold);color:var(--ink)}\r
img{max-width:100%;display:block}\r
a{color:inherit;text-decoration:none}\r
button{font-family:inherit;cursor:pointer;border:none;background:none;color:inherit}\r
input,textarea{font-family:inherit;font-size:14px;color:var(--ink);outline:none}\r
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
.shell{background:var(--paper);border-radius:26px 26px 0 0;min-height:calc(100vh - 71px);padding:50px 0 80px;position:relative}\r
\r
/* ===== الأزرار ===== */\r
.btn{display:inline-flex;align-items:center;gap:10px;justify-content:center;padding:14px 30px;border-radius:14px;\r
  font-size:14.5px;font-weight:700;position:relative;overflow:hidden;transition:transform var(--dur) var(--ease),box-shadow var(--dur) var(--ease)}\r
.btn:active{transform:scale(.98)}\r
.btn-gold{color:var(--ink);background:linear-gradient(135deg,var(--gold-bright) 0%,var(--gold) 50%,var(--gold-deep) 120%);\r
  box-shadow:0 12px 26px -10px rgba(143,113,52,.65)}\r
.btn-gold:hover{transform:translateY(-2px);box-shadow:0 18px 34px -10px rgba(143,113,52,.7)}\r
\r
/* ===== محتوى صفحة تواصل معنا ===== */\r
.contact-grid{display:grid;grid-template-columns:1.2fr 1.5fr;gap:30px;margin-top:20px;align-items:stretch}\r
\r
/* البطاقة اليسرى: فورم الإدخال */\r
.form-card{background:#fff;border:1px solid var(--line);border-radius:24px;padding:40px;position:relative;overflow:hidden;\r
  box-shadow:0 14px 30px -22px rgba(80,60,20,.25);display:flex;flex-direction:column;justify-content:space-between}\r
/* زاوية ذهبية جمالية مثل الصورة */\r
.form-card::before{content:"";position:absolute;top:0;left:0;width:70px;height:70px;\r
  background:linear-gradient(135deg, var(--gold-bright) 50%, transparent 50%);opacity:.85}\r
.form-card h2{font-family:var(--font-d);font-size:26px;color:var(--ink);margin-bottom:24px;padding-top:10px}\r
.fld{display:flex;flex-direction:column;gap:6px;margin-bottom:20px}\r
.fld label{font-size:12.5px;color:var(--mute);font-weight:600}\r
.fld input, .fld textarea{border:1px solid var(--line);border-radius:12px;padding:13px 16px;background:var(--ivory);\r
  transition:border-color var(--dur) var(--ease), box-shadow var(--dur) var(--ease)}\r
.fld input:focus, .fld textarea:focus{border-color:var(--gold);box-shadow:0 0 0 4px rgba(206,146,52,.12);background:#fff}\r
.fld textarea{resize:none;height:110px}\r
\r
/* البطاقة اليمنى: بيانات التواصل والمعلومات */\r
.info-card{background:#fff;border:1px solid var(--line);border-radius:24px;padding:40px;\r
  box-shadow:0 14px 30px -22px rgba(80,60,20,.25);display:flex;flex-direction:column;gap:30px}\r
\r
.info-section{border-bottom:1px dashed var(--line);padding-bottom:24px}\r
.info-section:last-of-type{border:none;padding-bottom:0}\r
.info-section h3{font-family:var(--font-d);font-size:19px;color:var(--gold-deep);margin-bottom:14px;display:flex;align-items:center;gap:10px}\r
.info-section h3 svg{color:var(--gold-deep)}\r
\r
/* تفاصيل المواعيد والعناوين */\r
.sched-detail{font-size:15px;color:var(--ink);line-height:1.7}\r
.sched-detail b{color:var(--gold-deep)}\r
\r
.addresses-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px}\r
.addr-box h4{font-family:var(--font-d);font-size:16.5px;color:var(--ink);margin-bottom:6px}\r
.addr-box p{font-size:13.5px;color:var(--mute);line-height:1.6}\r
.addr-box a{display:inline-flex;align-items:center;gap:6px;font-size:13px;color:var(--gold-deep);font-weight:700;margin-top:8px;direction: ltr;}\r
\r
.home-services p{font-size:14.5px;color:var(--mute);line-height:1.6;margin-bottom:8px}\r
.home-services a{display:inline-flex;align-items:center;gap:8px;font-size:15px;color:var(--gold-deep);font-weight:700}\r
\r
/* زر الواتساب الأخضر الأنيق والسريع */\r
.whatsapp-btn{display:flex;align-items:center;justify-content:center;gap:10px;background:var(--green);color:#fff;\r
  padding:16px;border-radius:14px;font-size:15.5px;font-weight:700;box-shadow:0 10px 22px -10px rgba(46,139,87,.45);\r
  transition:all var(--dur) var(--ease)}\r
.whatsapp-btn:hover{background:var(--green-bright);transform:translateY(-2px);box-shadow:0 14px 26px -10px rgba(46,139,87,.55)}\r
\r
/* توست النجاح */\r
.toast{position:fixed;bottom:24px;right:24px;z-index:500;background:var(--ink);color:var(--champagne);\r
  border:1px solid var(--line);padding:14px 24px;border-radius:14px;display:flex;align-items:center;gap:10px;\r
  font-size:13.5px;font-weight:600;opacity:0;pointer-events:none;transition:all .3s var(--ease);box-shadow:0 10px 24px -10px rgba(0,0,0,.4)}\r
.toast.on{opacity:1;transform:translateY(-10px)}\r
.toast svg{color:var(--gold-bright)}\r
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
  .contact-grid{grid-template-columns:1fr}\r
  .foot-grid{grid-template-columns:1fr 1fr}\r
}\r
@media(max-width:700px){\r
  nav.links{display:none}\r
  .form-card{padding:24px}\r
  .info-card{padding:24px}\r
  .addresses-grid{grid-template-columns:1fr}\r
  .foot-grid{grid-template-columns:1fr}\r
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
`,V={class:"shell"},N={class:"wrap"},P={class:"contact-grid"},Y={class:"form-card"},H=["disabled"],R={class:"info-card"},T={class:"info-section"},q={class:"addresses-grid"},$=["href"],X={class:"wrap"},G={class:"f-grid"},J={class:"f-brand"},K={class:"f-links"},O={class:"f-links"},Q=["href"],nr={__name:"ContactView",setup(U){const f=y(null),{locations:h,loadServiceLocations:C}=A();C();const{requireAuth:E}=M();I(S,"contact"),D(f);const c=y(!1);function F(){var b,m,u,v;const x=((b=document.getElementById("cName"))==null?void 0:b.value.trim())||"",n=((m=document.getElementById("cPhone"))==null?void 0:m.value.trim())||"",o=((u=document.getElementById("cMail"))==null?void 0:u.value.trim())||"",t=((v=document.getElementById("cMsg"))==null?void 0:v.value.trim())||"";if(!x||!n||!o||!t){alert("من فضلك أكمل كل الحقول المطلوبة (الاسم، الهاتف، البريد الإلكتروني، الرسالة)");return}E(async()=>{c.value=!0;try{await _({name:x,email:o,phone:n,message:t});const l=document.getElementById("toast");l==null||l.classList.add("on"),setTimeout(()=>l==null?void 0:l.classList.remove("on"),2600),document.getElementById("cName").value="",document.getElementById("cPhone").value="",document.getElementById("cMail").value="",document.getElementById("cMsg").value=""}catch(l){alert(l.message||"تعذّر إرسال رسالتك، حاول مرة أخرى")}finally{c.value=!1}})}return(x,n)=>{const o=L("RouterLink");return s(),d("div",{ref_key:"root",ref:f,class:""},[r("div",V,[r("div",N,[r("div",P,[r("div",Y,[n[0]||(n[0]=g('<div><h2>تواصل معنا</h2><div class="fld"><label>الاسم بالكامل *</label><input type="text" id="cName" placeholder="أدخل اسمك بالكامل"></div><div class="fld"><label>رقم الهاتف *</label><input type="text" id="cPhone" placeholder="05xxxxxxxx"></div><div class="fld"><label>البريد الإلكتروني</label><input type="email" id="cMail" placeholder="name@example.com"></div><div class="fld"><label>الرسالة</label><textarea id="cMsg" placeholder="اكتب استفسارك أو رسالتك هنا..."></textarea></div></div>',1)),r("button",{class:"btn btn-gold",id:"sendBtn",style:{"margin-top":"15px"},disabled:c.value,onClick:F},p(c.value?"جارٍ الإرسال...":"إرسال الرسالة"),9,H)]),r("div",R,[n[4]||(n[4]=g('<div class="info-section"><h3><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg> مواعيد العمل </h3><div class="sched-detail"> يومياً من <b>9:00 صباحاً</b> إلى <b>1:00 صباحاً</b> (بعد منتصف الليل) </div></div>',1)),r("div",T,[n[3]||(n[3]=r("h3",null,[r("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[r("path",{d:"M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0118 0z"}),r("circle",{cx:"12",cy:"10",r:"3"})]),e(" العناوين ")],-1)),r("div",q,[n[2]||(n[2]=r("div",{class:"addr-box"},[r("h4",null,"الادارة"),r("a",{href:"tel:9660569472722"},[r("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[r("path",{d:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"})]),e(" 9660569472722 ")])],-1)),(s(!0),d(w,null,k(z(h),t=>(s(),d("div",{key:t.id,class:"addr-box"},[r("h4",null,p(t.name),1),r("p",null,p(t.address),1),t.contact_number?(s(),d("a",{key:0,href:`tel:${t.contact_number}`},[n[1]||(n[1]=r("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[r("path",{d:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"})],-1)),e(" "+p(t.contact_number),1)],8,$)):B("",!0)]))),128))])]),n[5]||(n[5]=g('<div class="info-section"><h3><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> خدمات منزلية </h3><div class="home-services"><p>نوفر خدمة الحلاقة والعناية في منزلك لراحتك التامة (شعر، لحية، وماسكات طبيعية).</p><a href="tel:+966585555555">📞 966585555555+</a></div></div><a href="https://wa.me/963959415545" class="whatsapp-btn" target="_blank" rel="noopener"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg> التواصل السريع عبر الواتساب </a>',2))])])])]),n[24]||(n[24]=r("div",{class:"toast",id:"toast"},[r("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.6"},[r("path",{d:"M20 6L9 17l-5-5"})]),r("span",null,"تم إرسال رسالتك بنجاح! شكراً لتواصلك معنا.")],-1)),r("footer",null,[r("div",X,[r("div",G,[r("div",J,[i(o,{class:"logo",to:"/"},{default:a(()=>[...n[6]||(n[6]=[r("span",{class:"mark"},[r("img",{src:j,alt:"عناية سامي",style:{width:"29px",height:"29px","object-fit":"contain"}})],-1),r("span",{class:"name"},[r("b",null,"عناية سامي"),r("span",null,"SAMI CARE")],-1)])]),_:1}),n[7]||(n[7]=g('<p>مركز متخصص في العناية الرجالية المتكاملة بجدة، حيث تلتقي الفخامة بالاحترافية في كل تفصيلة.</p><div class="socials"><a href="https://x.com/samicare_sa" aria-label="X"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-6.8 7.8L23.3 22h-6.3l-4.9-6.4L6.5 22H3.4l7.3-8.3L1 2h6.5l4.4 5.8L18.9 2zm-1.1 18h1.7L7.1 3.9H5.3L17.8 20z"></path></svg></a><a href="https://www.instagram.com/samicare.sa/" aria-label="انستقرام"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1" fill="currentColor"></circle></svg></a><a href="https://www.facebook.com/samicare.sa" aria-label="فيسبوك"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg></a></div>',2))]),r("div",null,[n[13]||(n[13]=r("h4",null,"روابط مهمة",-1)),r("ul",K,[r("li",null,[i(o,{to:"/"},{default:a(()=>[...n[8]||(n[8]=[e("الرئيسية",-1)])]),_:1})]),r("li",null,[i(o,{to:"/booking"},{default:a(()=>[...n[9]||(n[9]=[e("حجز موعد",-1)])]),_:1})]),r("li",null,[i(o,{to:"/#services"},{default:a(()=>[...n[10]||(n[10]=[e("خدماتنا",-1)])]),_:1})]),r("li",null,[i(o,{to:"/packages-gifts"},{default:a(()=>[...n[11]||(n[11]=[e("الباقات",-1)])]),_:1})]),r("li",null,[i(o,{to:"/gifts"},{default:a(()=>[...n[12]||(n[12]=[e("الهدايا",-1)])]),_:1})])])]),r("div",null,[n[19]||(n[19]=r("h4",null,"استكشف",-1)),r("ul",O,[r("li",null,[i(o,{to:"/store"},{default:a(()=>[...n[14]||(n[14]=[e("المتجر",-1)])]),_:1})]),r("li",null,[i(o,{to:"/branches"},{default:a(()=>[...n[15]||(n[15]=[e("فروعنا",-1)])]),_:1})]),r("li",null,[i(o,{to:"/contact"},{default:a(()=>[...n[16]||(n[16]=[e("تواصل معنا",-1)])]),_:1})]),r("li",null,[i(o,{to:"/terms"},{default:a(()=>[...n[17]||(n[17]=[e("الشروط والأحكام",-1)])]),_:1})]),r("li",null,[i(o,{to:"/privacy-policy"},{default:a(()=>[...n[18]||(n[18]=[e("سياسة الخصوصية",-1)])]),_:1})])])]),r("div",null,[n[20]||(n[20]=r("h4",null,"عناوين الفروع",-1)),(s(!0),d(w,null,k(z(h),t=>(s(),d("div",{key:t.id,class:"f-branch"},[r("b",null,p(t.name),1),r("small",null,p(t.address),1),t.contact_number?(s(),d("a",{key:0,style:{direction:"ltr","text-align":"right"},href:`tel:${t.contact_number}`},p(t.contact_number),9,Q)):B("",!0)]))),128)),n[21]||(n[21]=r("div",{class:"f-branch"},[r("b",null,"الادارة"),r("a",{href:"tel:9660569472722"},"9660569472722")],-1)),n[22]||(n[22]=r("div",{class:"f-branch"},[r("b",null,"خدمات منزلية"),r("small",null,"حلاقة شعر ولحية وماسكات طبيعية")],-1))])]),n[23]||(n[23]=g('<div class="f-bottom"><small>© 2026 عناية سامي — جميع الحقوق محفوظة</small><div class="pay" aria-label="بوابات الدفع"><span title="Visa">VISA</span><span title="Mastercard">Mastercard</span><span title="مدى">mada</span><span title="Tabby">tabby</span><span title="Apple Pay">Pay</span></div></div>',1))])])],512)}}};export{nr as default};
