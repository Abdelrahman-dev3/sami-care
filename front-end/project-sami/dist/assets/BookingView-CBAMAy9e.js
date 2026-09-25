import{I as Tr,J as Pr,u as n,o as t,c as i,b as r,F as V,e as J,n as Y,t as s,h as vr,r as ar,s as Mr,K as Kr,i as b,j as Ur,l as Er,L as Wr,q as R,a as M,d as hr,x as $r,k as Xr,M as Qr,N as zr,C as or,O as kr,w as _r,E as fr,P as qr,z as Jr,A as Or,_ as Zr,Q as re,S as ee,p as mr,U as ne}from"./index-BWc_r5XW.js";import{u as te}from"./usePageStyles-CFfKXM_a.js";import{u as ae}from"./useInternalLinks-B6-MGd4J.js";import{u as pr,r as q,f as gr,a as tr,b as Nr}from"./useBooking-CDLMv2FL.js";import{b as oe,B as ie,s as se}from"./BookingQr-BuBfdGTZ.js";import{f as le,a as Gr,b as de,P as pe,v as ce,c as ge,i as ue}from"./PaymentMethodList-rNLOaUD5.js";import{s as xe}from"./serviceDetails-gQMMCHKA.js";import{c as Hr,a as Dr,b as Ir}from"./giftIcons-C3hH12nn.js";import{_ as jr}from"./SkeletonLoader-CelJxdQQ.js";import{p as me}from"./paymentPolicy-Dun9PtFA.js";import{f as he}from"./accountApi-Co9U6okJ.js";const be=`\r
:root{\r
  --ink:#0A0906; --coal:#14110C; --coal-2:#1C1811;\r
  --gold:#CE9234; --gold-bright:#E8BE6C; --gold-deep:#9C6B1F;\r
  --champagne:#F0E6CF; --ivory:#F8F4EB; --paper:#FBFAF6; --card:#FFFFFF;\r
  --smoke:#9A9080; --mute:#7d745f; --text:#2A2519;\r
  --line:rgba(143,113,52,.22); --line-dark:rgba(198,161,91,.22);\r
  --green:#2E8B57; --green-bg:#EAF5EC;\r
  --c-hair:#C6963F; --c-skin:#D96A8B; --c-pedi:#B9743B; --c-mass:#8B6FC0; --c-bath:#4E9E6F;\r
  --ease:cubic-bezier(.33,.9,.35,1); --dur:.26s;\r
  --font-d:'Lama Sans',serif; --font-b:'Lama Sans',sans-serif;\r
}\r
*{margin:0;padding:0;box-sizing:border-box}\r
body{font-family:var(--font-b);background:var(--ink);color:var(--text);-webkit-font-smoothing:antialiased;overflow-x:hidden}\r
::selection{background:var(--gold);color:var(--ink)}\r
img{max-width:100%;display:block}\r
a{color:inherit;text-decoration:none}\r
button{font-family:inherit;cursor:pointer;border:none;background:none;color:inherit}\r
input,textarea{font-family:inherit}\r
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
nav.links a{font-size:15px;color:var(--champagne);opacity:.82;transition:var(--dur)}\r
nav.links a:hover{opacity:1;color:var(--gold-bright)}\r
.nav-actions{display:flex;align-items:center;gap:12px;margin-inline-start:auto}\r
nav.links + .nav-actions{margin-inline-start:0}\r
.icon-btn{position:relative;width:40px;height:40px;border-radius:50%;display:grid;place-items:center;\r
  border:1px solid var(--line-dark);color:var(--champagne);transition:var(--dur) var(--ease)}\r
.icon-btn:hover{border-color:var(--gold);color:var(--gold-bright)}\r
.icon-btn .count{position:absolute;top:-5px;left:-5px;min-width:18px;height:18px;border-radius:9px;\r
  background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);\r
  font-size:10.5px;font-weight:700;display:grid;place-items:center;padding-inline:4px;\r
  transition:transform .3s var(--ease)}\r
.icon-btn .count.pop{transform:scale(1.35)}\r
.loyal{display:inline-flex;align-items:center;gap:8px;border:1px solid var(--gold);color:var(--gold-bright);\r
  padding:9px 18px;border-radius:999px;font-size:13px}\r
.site-loc{display:inline-flex;align-items:center;gap:8px;border:1px solid var(--line-dark);color:var(--champagne);\r
  padding:9px 14px;border-radius:999px;font-size:13px;background:rgba(255,255,255,.03);transition:var(--dur) var(--ease)}\r
.site-loc:hover{border-color:var(--gold);color:var(--gold-bright)}\r
\r
/* ===== حاوية الصفحة ===== */\r
.shell{background:var(--paper);border-radius:26px 26px 0 0;min-height:calc(100vh - 71px);padding-bottom:110px;position:relative}\r
\r
/* ===== الستيبر ===== */\r
.stepper{padding:34px 0 8px}\r
.steps{display:flex;align-items:flex-start;justify-content:space-between;position:relative;max-width:980px;margin-inline:auto}\r
.step{position:relative;z-index:2;display:flex;flex-direction:column;align-items:center;gap:10px;flex:1;cursor:default}\r
.step .bubble{\r
  width:52px;height:52px;border-radius:50%;display:grid;place-items:center;background:#fff;\r
  border:1.5px solid var(--line);color:#A79c86;position:relative;\r
  transition:all .35s var(--ease);\r
}\r
.step .n{position:absolute;top:-25px;font-size:11.5px;color:#B4a98f;font-weight:600;transition:color .3s}\r
.step label{font-size:12.5px;color:#A79c86;transition:color .3s;white-space:nowrap}\r
.step.active .bubble{\r
  background:linear-gradient(135deg,var(--gold-bright),var(--gold));border-color:transparent;color:var(--ink);\r
  box-shadow:0 10px 26px -8px rgba(143,113,52,.6),0 0 0 6px rgba(198,161,91,.14);\r
  transform:scale(1.06);\r
}\r
.step.active label{color:var(--gold-deep);font-weight:700}\r
.step.active .n{color:var(--gold-deep)}\r
.step.done .bubble{background:#fff;border-color:var(--gold);color:var(--gold-deep);cursor:pointer}\r
.step.done .bubble::after{\r
  content:"";position:absolute;top:-3px;left:-3px;width:18px;height:18px;border-radius:50%;\r
  background:var(--gold) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230A0906' stroke-width='3.4'%3E%3Cpath d='M20 6L9 17l-5-5'/%3E%3C/svg%3E") center/10px no-repeat;\r
}\r
.step .bar{position:absolute;top:26px;right:calc(50% + 34px);width:calc(100% - 68px);height:2px;background:var(--line);z-index:-1}\r
.step .bar i{display:block;height:100%;width:0;background:linear-gradient(90deg,var(--gold-deep),var(--gold-bright));transition:width .6s var(--ease)}\r
.step.done .bar i,.step.active .bar i{width:100%}\r
.step:last-child .bar{display:none}\r
\r
/* ===== تخطيط المحتوى ===== */\r
.stage{display:grid;grid-template-columns:1fr 340px;gap:24px;padding:26px 0 104px;align-items:start;isolation:isolate}\r
.panel{min-width:0}\r
.panel-head{text-align:center;margin:12px 0 30px}\r
.panel-head h1{font-family:var(--font-d);font-size:clamp(26px,3.2vw,36px);color:var(--ink)}\r
.panel-head p{color:var(--mute);font-size:14.5px;margin-top:8px}\r
\r
/* بطاقات عامة */\r
.card{background:var(--card);border:1px solid var(--line);border-radius:18px;\r
  box-shadow:0 14px 30px -22px rgba(80,60,20,.25)}\r
\r
/* ===== خطوة 1: الفروع ===== */\r
.branches-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}\r
.branch{\r
  position:relative;border-radius:20px;overflow:hidden;background:#fff;border:1.5px solid var(--line);\r
  cursor:pointer;transition:transform .3s var(--ease),box-shadow .3s,border-color .3s;\r
}\r
.branch:hover{transform:translateY(-6px);box-shadow:0 26px 46px -24px rgba(80,60,20,.45)}\r
.branch.sel{border-color:var(--gold);box-shadow:0 0 0 4px rgba(198,161,91,.16),0 26px 46px -24px rgba(143,113,52,.5)}\r
.branch .img{aspect-ratio:16/10;overflow:hidden;position:relative;background:#151209}\r
.branch .img img{width:100%;height:100%;object-fit:cover;transition:transform .8s var(--ease)}\r
.branch:hover .img img{transform:scale(1.06)}\r
.branch .home-flag{position:absolute;top:14px;right:14px;background:rgba(255,251,240,.94);color:var(--gold-deep);\r
  font-size:11.5px;font-weight:700;padding:7px 14px;border-radius:999px;display:flex;gap:6px;align-items:center;\r
  box-shadow:0 8px 18px -8px rgba(0,0,0,.35)}\r
.branch .b-ic{\r
  position:absolute;bottom:-24px;right:calc(50% - 24px);width:48px;height:48px;border-radius:50%;\r
  background:#fff;border:1px solid var(--line);display:grid;place-items:center;color:var(--gold-deep);\r
  box-shadow:0 8px 20px -8px rgba(80,60,20,.4);transition:all .3s var(--ease);\r
}\r
.branch.sel .b-ic{background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);border-color:transparent}\r
.branch .body{padding:36px 20px 20px;text-align:center}\r
.branch h3{font-family:var(--font-d);font-size:20px;color:var(--gold-deep)}\r
.branch .addr{font-size:13px;color:var(--mute);margin:6px 0 14px}\r
.branch .meta{display:flex;justify-content:center;gap:14px;font-size:12px;color:#5c5442;flex-wrap:wrap;border-top:1px dashed var(--line);padding-top:13px}\r
.branch .meta b{color:var(--gold-deep)}\r
.branch .meta .live{color:var(--green);display:flex;gap:5px;align-items:center}\r
.branch .meta .live i{width:6px;height:6px;border-radius:50%;background:var(--green);animation:pulse 2s infinite}\r
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.3}}\r
.branch .pick{margin-top:14px;width:100%;border:1px solid var(--gold);color:var(--gold-deep);border-radius:12px;\r
  padding:11px;font-size:13.5px;font-weight:600;display:flex;justify-content:center;gap:8px;transition:var(--dur) var(--ease)}\r
.branch:hover .pick{background:rgba(198,161,91,.08)}\r
.branch.sel .pick{background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);border-color:transparent}\r
.branch-sheet-ov{position:fixed;inset:0;z-index:1600;background:rgba(10,7,3,.55);backdrop-filter:blur(6px);opacity:0;pointer-events:none;transition:opacity .28s var(--ease)}\r
.branch-sheet-ov.on{opacity:1;pointer-events:auto}\r
.branch-sheet{position:fixed;left:50%;bottom:0;z-index:1601;width:min(560px,100%);transform:translate(-50%,105%);background:linear-gradient(160deg,#fff,#F8F0E4);border:1px solid rgba(206,146,52,.28);border-radius:26px 26px 0 0;padding:18px 18px 24px;box-shadow:0 -28px 70px -24px rgba(20,12,4,.58);transition:transform .36s var(--ease)}\r
.branch-sheet.on{transform:translate(-50%,0)}\r
.branch-sheet .grab{width:48px;height:4px;border-radius:999px;background:#D8C9AF;margin:0 auto 14px}\r
.branch-sheet-head{text-align:center;margin-bottom:12px}.branch-sheet-head h3{font-family:var(--font-d);font-size:22px;color:var(--ink)}.branch-sheet-head p{font-size:13px;color:var(--mute);line-height:1.8;margin-top:5px}\r
.branch-choice{display:grid;grid-template-columns:96px 1fr auto;gap:13px;align-items:center;padding:12px;border-radius:18px;border:1.5px solid var(--line);background:#fff;text-align:right;margin-top:10px;box-shadow:0 10px 22px -20px rgba(80,50,20,.35)}\r
.branch-choice.sel{border-color:var(--gold);background:#FFF9EE;box-shadow:0 14px 28px -20px rgba(206,146,52,.75)}\r
.branch-choice img{width:96px;height:72px;border-radius:14px;object-fit:cover;background:#21170D}.branch-choice b{font-family:var(--font-d);font-size:15px;color:var(--ink)}.branch-choice small{display:block;color:var(--mute);font-size:11.5px;line-height:1.55;margin-top:3px}\r
.branch-choice .meta{display:flex;gap:6px;flex-wrap:wrap;margin-top:8px}.branch-choice .meta span{font-size:10px;color:var(--gold-deep);background:#FBFAF6;border:1px solid var(--line);border-radius:999px;padding:5px 8px}.branch-choice .check{width:28px;height:28px;border-radius:50%;display:grid;place-items:center;color:var(--gold-deep);border:1px solid rgba(206,146,52,.3);background:#fff;font-weight:900}\r
\r
/* ===== خطوة 2: الخدمات ===== */\r
/* مكان تنفيذ الخدمة — ملاحظة صغيرة، مش كرت */\r
.branch-strip{display:flex;align-items:center;gap:9px;padding:0;margin:0 0 16px;\r
  background:none;border:0;box-shadow:none;font-size:12px;color:var(--mute)}\r
.branch-strip img{width:26px;height:26px;flex:none;object-fit:cover;border-radius:50%;\r
  border:1px solid rgba(198,161,91,.35)}\r
.branch-strip .bi{flex:1;min-width:0;display:flex;align-items:baseline;gap:6px;flex-wrap:wrap}\r
.branch-strip .bi b{font-family:inherit;font-size:12.5px;font-weight:700;color:var(--gold-deep)}\r
.branch-strip .bi small{color:var(--mute);font-size:11px}\r
.branch-strip .cells{flex:none;display:flex}\r
.branch-strip .cell{font-size:11px;color:var(--mute);padding:0;border:0}\r
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
.sub.sel{border-color:var(--acc,var(--gold));background:linear-gradient(160deg,#FFFBF0,#fff);box-shadow:0 0 0 3px color-mix(in srgb,var(--acc,var(--gold)) 18%,transparent)}\r
\r
/* صف واحد: الأيقونة ثم الاسم ثم مربّع الاختيار في الطرف */\r
.sub .top{display:grid;grid-template-columns:30px minmax(0,1fr) 19px;align-items:start;gap:9px;margin-bottom:6px}\r
.sub .top .si{flex:none;width:30px;height:30px;border-radius:9px;display:grid;place-items:center;\r
  background:color-mix(in srgb,var(--acc,var(--gold)) 14%,#fff);color:var(--acc,var(--gold-deep))}\r
.sub .top .si svg{width:17px;height:17px;fill:none;stroke:currentColor;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}\r
.sub .top b{min-width:0;font-size:13px;color:var(--ink);line-height:1.5;padding-top:2px;text-align:right;overflow-wrap:break-word}\r
.sub .chk{flex:none;width:19px;height:19px;border-radius:6px;border:1.5px solid var(--line);\r
  display:grid;place-items:center;color:#fff;transition:all .25s var(--ease)}\r
.sub.sel .chk{background:var(--acc,var(--gold));border-color:transparent;color:#fff}\r
\r
.sub small{font-size:11px;color:var(--mute);display:block;line-height:1.65;min-height:30px}\r
.sub .foot{display:flex;justify-content:space-between;align-items:center;margin-top:auto;padding-top:9px}\r
.sub .dur{font-size:11px;color:var(--mute);display:flex;gap:5px;align-items:center}\r
.sub .prc{font-family:var(--font-d);font-size:15.5px;color:var(--gold-deep)}\r
.sub .prc small{display:inline;font-size:10.5px;color:var(--mute);min-height:0}\r
\r
.empty-hint{border:1.5px dashed var(--line);border-radius:16px;padding:44px 20px;text-align:center;color:var(--mute);font-size:14px}\r
.empty-hint b{color:var(--ink);font-family:var(--font-d);font-size:17px;display:block;margin-bottom:6px}\r
\r
/* ===== خطوة 3: الموظف ===== */\r
/* ===== طريقة اختيار الموظف — خياران دائريان مدمجان ===== */\r
.mode-grid{display:flex;flex-wrap:wrap;justify-content:center;align-items:stretch;
  gap:20px;margin:4px 0 26px}
.mode{position:relative;flex:1;max-width:260px;min-width:160px;padding:24px 16px 20px;border:1.5px solid var(--line);background:#fff;border-radius:22px;
  cursor:pointer;text-align:center;overflow:visible;transition:transform .3s var(--ease)}\r
.mode:hover{transform:translateY(-3px);border-color:var(--gold);box-shadow:0 12px 28px -20px rgba(80,60,20,.4)}
.mode.sel{border-color:var(--gold);background:linear-gradient(160deg,#fff,#faf5e9);box-shadow:0 0 0 3px rgba(198,161,91,.12)}
.mode:focus-visible{outline:3px solid var(--gold-deep);outline-offset:4px}
\r
/* الدائرة هي الكرت نفسه */\r
.mode .mi{width:118px;height:118px;border-radius:50%;margin:0 auto 13px;display:grid;place-items:center;\r
  border:1.5px solid var(--line);background:#fff;color:var(--gold-deep);\r
  box-shadow:0 14px 28px -18px rgba(80,60,20,.42);\r
  transition:border-color .3s var(--ease),box-shadow .3s var(--ease),transform .3s var(--ease)}\r
.mode .mi svg{width:40px;height:40px}\r
.mode:hover .mi{border-color:var(--gold)}\r
.mode.sel .mi{border-color:var(--gold);\r
  box-shadow:0 0 0 4px rgba(198,161,91,.2),0 18px 32px -18px rgba(143,113,52,.55)}\r
\r
/* الخيار التلقائي: الدائرة داكنة بدل الكرت كله */\r
.mode.dark{color:inherit}
.mode.dark .mi{background:linear-gradient(160deg,#1E1910,#0F0C07);\r
  border-color:rgba(233,207,142,.45);color:var(--gold-bright)}\r
.mode.dark h3{color:var(--ink)}\r
\r
.mode h3{font-family:var(--font-d);font-size:16px;margin:0;color:var(--ink);text-align:center}\r
.mode .sub-t{font-size:11.5px;color:var(--mute);font-weight:500;margin:5px 0 0;text-align:center}\r
\r
/* التفاصيل الطويلة اتشالت — الشكل بقى مختصر */\r
.mode ul{display:none}\r
\r
.mode .flag{position:static;display:inline-block;margin-top:9px;padding:4px 11px;\r
  font-size:10px;font-weight:700;border-radius:999px;\r
  background:rgba(198,161,91,.14);color:var(--gold-deep)}\r
.mode.dark .flag{background:rgba(30,25,16,.08);color:var(--gold-deep)}\r
\r
.mode .chk{position:absolute;top:12px;left:12px;width:24px;height:24px;border-radius:50%;
  border:1.5px solid var(--line);background:#fff;display:grid;place-items:center;color:var(--ink);\r
  transition:all .3s var(--ease);z-index:2}\r
.mode.sel .chk{background:linear-gradient(135deg,var(--gold-bright),var(--gold));border-color:transparent}\r
.mode .chk svg{opacity:0;transition:opacity .2s}\r
.mode.sel .chk svg{opacity:1}\r
\r
.mode .glow-msg{max-width:none;margin:9px 0 0;padding:0;background:none;border-radius:0;\r
  font-size:11px;line-height:1.7;color:var(--gold-deep);text-align:center;\r
  opacity:0;transform:translateY(5px);transition:all .35s var(--ease)}\r
.mode.dark .glow-msg{background:none;color:var(--gold-deep)}\r
.mode.sel .glow-msg{opacity:1;transform:none}\r
\r
@media(max-width:560px){.mode-grid{gap:12px}.mode{min-width:130px;padding:22px 10px 16px}.mode .mi{width:86px;height:86px}.mode .mi svg{width:32px;height:32px}.mode h3{font-size:14px}.mode .chk{left:9px;top:9px;width:21px;height:21px}}
\r
.emp-section{margin-top:6px}\r
.emp-row{--acc:var(--gold);display:block;margin-bottom:16px;background:#fff;border:1px solid var(--line);border-radius:18px;overflow:hidden;box-shadow:0 14px 30px -24px rgba(80,50,20,.32)}\r
.emp-cat{padding:13px 15px 11px;color:var(--ink);display:flex;justify-content:flex-start;align-items:center;gap:11px;text-align:right;background:#fff;border-bottom:1px solid rgba(143,113,52,.12)}\r
.emp-cat .cat-ico{flex:none;width:43px;height:43px;border-radius:50%;display:grid;place-items:center;border:1px solid color-mix(in srgb,var(--acc) 34%,transparent);background:color-mix(in srgb,var(--acc) 11%,#fff);color:var(--acc,var(--gold-deep))}\r
.emp-cat .cat-ico svg{width:19px;height:19px;fill:none;stroke:currentColor;stroke-width:1.65;stroke-linecap:round;stroke-linejoin:round}\r
.emp-cat__info{min-width:0;display:grid;gap:2px}\r
.emp-cat b{font-family:var(--font-d);font-size:14.5px;line-height:1.45;color:var(--ink);overflow-wrap:break-word}.emp-cat small{font-size:11px;color:var(--acc,var(--gold-deep));overflow-wrap:break-word}\r
.emp-list{display:flex;flex-wrap:nowrap;gap:9px;overflow-x:auto;overflow-y:hidden;padding:12px 14px 15px;background:linear-gradient(180deg,#fff,#FFFDF9);scrollbar-width:thin;scrollbar-color:var(--gold) rgba(198,161,91,.1);scroll-snap-type:x proximity;overscroll-behavior-inline:contain}\r
.emp-list::-webkit-scrollbar{height:6px}\r
.emp-list::-webkit-scrollbar-track{background:rgba(198,161,91,.1);border-radius:999px}\r
.emp-list::-webkit-scrollbar-thumb{background:linear-gradient(90deg,var(--gold-deep),var(--gold));border-radius:999px}\r
.emp{\r
  flex:0 0 104px;background:#fff;border:1.5px solid var(--line);border-radius:13px;padding:10px 8px;text-align:center;\r
  cursor:pointer;transition:all var(--dur) var(--ease);position:relative;scroll-snap-align:start;touch-action:manipulation;\r
}\r
.emp:hover{transform:translateY(-4px);box-shadow:0 14px 26px -14px rgba(80,60,20,.4)}\r
.emp.sel{border-color:var(--acc,var(--gold));box-shadow:0 0 0 3px color-mix(in srgb,var(--acc,var(--gold)) 22%,transparent)}\r
.emp .av{width:46px;height:46px;border-radius:13px;margin:0 auto 8px;display:grid;place-items:center;\r
  font-family:var(--font-d);font-weight:700;font-size:19px;color:#fff;position:relative;background:linear-gradient(145deg,#D8D3CC,#F8F6F2);overflow:hidden}\r
.emp:not(.any) .av::before{content:"";width:29px;height:35px;border-radius:18px 18px 10px 10px;background:linear-gradient(180deg,#17130E 0 24%,#C08A52 24% 43%,#1B1712 43%);box-shadow:0 8px 16px -10px rgba(0,0,0,.6)}\r
.emp .chk{position:absolute;top:6px;left:6px;width:17px;height:17px;border-radius:50%;display:grid;place-items:center;\r
  color:#fff;opacity:0;transform:scale(.4);transition:all .25s var(--ease);background:var(--acc,var(--gold))}\r
.emp.sel .chk{opacity:1;transform:scale(1)}\r
.emp b{font-size:11.5px;color:var(--ink);display:block;line-height:1.45;white-space:normal;overflow-wrap:anywhere}\r
.emp .rate{font-size:10px;color:var(--gold-deep);margin-top:3px;display:block}\r
.emp.any .av{background:#fff;border:1.5px dashed var(--line);color:var(--mute)}\r
.emp.any b{color:var(--mute)}\r
\r
/* ===== خطوة 4: الوقت ===== */\r
.emp-row--group{display:grid;grid-template-columns:190px minmax(0,1fr);align-items:stretch;min-height:154px}\r
.emp-row--group .emp-cat--group{display:grid;justify-items:center;align-content:center;gap:8px;text-align:center;padding:20px 16px;background:linear-gradient(145deg,color-mix(in srgb,var(--acc,var(--gold)) 88%,#c99a3e),#c99639);color:#fff;border-bottom:0;border-inline-start:1px solid rgba(255,255,255,.22)}\r
.emp-row--group .emp-cat--group .cat-ico{width:52px;height:52px;border-color:rgba(255,255,255,.55);background:rgba(255,255,255,.13);color:#fff}\r
.emp-row--group .emp-cat--group .cat-ico svg{width:23px;height:23px}\r
.emp-row--group .emp-cat--group b{color:#fff;font-size:17px}\r
.emp-row--group .emp-cat--group small{color:rgba(255,255,255,.86);font-weight:700}\r
.emp-cat__services{display:block;max-width:150px;color:rgba(255,255,255,.78);font-size:10px;line-height:1.55;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}\r
.emp-list--groups{align-items:stretch;padding:16px;background:linear-gradient(180deg,#fff,#FFFDF9)}\r
.emp-list--groups .emp{flex-basis:132px;min-height:134px;padding:16px 10px}\r
.emp-list--groups .emp .av{width:58px;height:58px;border-radius:17px}\r
.emp-list--groups .emp:not(.any) .av::before{width:37px;height:44px;border-radius:20px 20px 12px 12px}\r
.emp-list--groups .emp b{font-size:12px}\r
@media(max-width:700px){\r
  .emp-row--group{grid-template-columns:1fr;min-height:0}\r
  .emp-row--group .emp-cat--group{display:flex;justify-content:flex-start;text-align:right;padding:13px 15px;border-inline-start:0}\r
  .emp-row--group .emp-cat--group .cat-ico{width:43px;height:43px}\r
  .emp-cat__services{max-width:none;color:rgba(255,255,255,.78);font-size:9.5px}\r
  .emp-list--groups .emp{flex-basis:108px;min-height:112px;padding:11px 8px}\r
  .emp-list--groups .emp .av{width:46px;height:46px;border-radius:13px}\r
}\r
.time-grid{display:grid;grid-template-columns:minmax(300px,340px) minmax(0,1fr);gap:18px;align-items:start}\r
.time-grid>*{min-width:0}\r
.cal{padding:20px;box-shadow:0 18px 38px -30px rgba(80,60,20,.42)}
.loyalty-preview{margin:0 0 16px;padding:24px 28px;border:1.5px solid var(--gold);border-radius:20px;background:linear-gradient(135deg,#fffdf8,#fff8eb);text-align:center;box-shadow:0 16px 34px -30px rgba(143,89,15,.65)}
.loyalty-preview h3{margin:0 0 16px;font-family:var(--font-d);font-size:22px;color:var(--gold-deep)}
.loyalty-preview p{margin:0;color:var(--mute);font-size:14px;line-height:1.9}.loyalty-preview p b{color:var(--ink)}
.loyalty-preview strong{display:block;color:var(--gold-deep);font-size:14px;line-height:1.8}
.cal-head{display:flex;align-items:center;justify-content:center;margin-bottom:14px}
.cal-head b{font-family:var(--font-d);font-size:16px;color:var(--ink)}\r
.cal-nav{width:32px;height:32px;border-radius:9px;border:1px solid var(--line);display:grid;place-items:center;color:var(--gold-deep);transition:var(--dur)}\r
.cal-nav:hover:not(:disabled){background:rgba(198,161,91,.1)}\r
.cal-nav:disabled{opacity:.35;cursor:default}\r
.cal-cells{display:grid;grid-template-columns:repeat(7,1fr);gap:8px;text-align:center}\r
.cal-cells button{display:flex;flex-direction:column;align-items:center;gap:4px;padding:12px 4px;border-radius:14px;\r
  border:1.5px solid var(--line);font-size:13px;color:var(--ink);position:relative;transition:all .22s var(--ease);background:#fff}\r
.cal-cells button .dow{font-size:10.5px;color:var(--mute)}\r
.cal-cells button .dnum{font-family:var(--font-d);font-size:18px}\r
.cal-cells button:hover:not(:disabled){border-color:var(--gold);background:rgba(198,161,91,.08)}\r
.cal-cells button:disabled{color:#CFC7B2;cursor:default;background:#FAF7F0}\r
.cal-cells button.avail::after{content:"";position:absolute;bottom:6px;width:4px;height:4px;border-radius:50%;background:var(--green)}\r
.cal-cells button.sel{background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);font-weight:700;border-color:transparent;\r
  box-shadow:0 8px 18px -6px rgba(143,113,52,.55)}\r
.cal-cells button.sel .dow{color:var(--ink)}\r
.cal-legend{display:flex;gap:16px;margin-top:14px;padding-top:12px;border-top:1px dashed var(--line);font-size:11px;color:var(--mute)}\r
.cal-legend span{display:flex;gap:6px;align-items:center}\r
.cal-legend i{width:7px;height:7px;border-radius:50%}
.date-line{display:flex;align-items:center;gap:10px;margin:22px 0 0;padding:18px 22px 0;border-top:1px dashed var(--line);font-family:var(--font-d);font-size:22px;color:var(--ink)}
.booking-periods{margin:4px 0 16px}
.booking-periods .period{min-height:54px;font-size:15px;background:#fff}
.available-times-title{margin-bottom:12px;color:var(--mute);font-size:13px}
.times-panel{padding:22px;box-shadow:0 18px 38px -30px rgba(80,60,20,.42)}\r
.times-panel .date-line{display:flex;align-items:center;gap:10px;font-family:var(--font-d);font-size:18px;color:var(--ink);margin-bottom:16px}\r
.notice{display:flex;gap:10px;align-items:center;background:rgba(198,161,91,.1);border:1px solid var(--line);\r
  border-radius:12px;padding:12px 16px;font-size:12.5px;color:var(--gold-deep);margin-bottom:18px}\r
.periods{display:flex;gap:10px;margin-bottom:18px}\r
.period{flex:1;display:flex;align-items:center;justify-content:center;gap:8px;padding:11px;border-radius:12px;\r
  border:1.5px solid var(--line);font-size:13px;color:var(--mute);transition:all var(--dur) var(--ease)}\r
.period.sel{border-color:var(--gold);color:var(--gold-deep);background:rgba(198,161,91,.1);font-weight:600}\r
.slots{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;min-height:120px}\r
.slot{position:relative;padding:12px;border-radius:12px;border:1.5px solid var(--line);font-size:13.5px;color:var(--ink);\r
  transition:all .22s var(--ease);background:#fff;animation:slotIn .35s var(--ease) both}\r
@keyframes slotIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}\r
.slot:hover:not(:disabled){transform:scale(1.04);border-color:rgba(143,113,52,.5);box-shadow:0 10px 20px -10px rgba(80,60,20,.35)}\r
.slot:disabled{color:#C9C1AC;background:#FAF7EF;cursor:default;text-decoration:line-through}\r
.slot.sel{border-color:var(--gold);background:linear-gradient(160deg,#FFF9EC,#fff);font-weight:700;color:var(--gold-deep);\r
  box-shadow:0 0 0 3px rgba(198,161,91,.16)}\r
.slot.sel::after{content:"✓";position:absolute;top:-8px;left:-8px;width:22px;height:22px;border-radius:50%;\r
  background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);font-size:11px;display:grid;place-items:center}\r
.slot .tag{position:absolute;top:-9px;right:10px;font-size:9.5px;font-weight:700;padding:3px 9px;border-radius:999px;\r
  background:#FFEFE0;color:#B0622A}\r
.service-time-summary{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin:-6px 0 12px;font-size:11.5px;color:var(--mute)}\r
.service-time-summary span{display:inline-flex;align-items:center;min-height:26px;padding:5px 9px;border-radius:999px;background:#FFF8EA;border:1px solid rgba(206,146,52,.2)}\r
.service-time-summary .shift-note{color:var(--gold-deep);background:#FFF2DD;border-color:rgba(206,146,52,.35);font-weight:700}\r
.time-start-card h4{display:flex;align-items:baseline;justify-content:space-between;gap:12px;flex-wrap:wrap}\r
.time-start-service{display:flex;align-items:center;gap:12px;margin:0 0 16px;padding:12px 14px;border-radius:14px;background:linear-gradient(180deg,rgba(255,255,255,.94),rgba(252,248,238,.86));border:1px solid rgba(198,161,91,.22)}\r
.time-start-service .cat-ico,.plan-icon{width:42px;height:42px;display:grid;place-items:center;flex:0 0 auto;border-radius:12px;color:var(--acc,var(--gold-deep));background:rgba(198,161,91,.1);border:1px solid rgba(198,161,91,.18)}\r
.time-start-service .cat-ico svg,.plan-icon svg{width:24px;height:24px;stroke:currentColor}
.session-plan .plan-icon{color:var(--gold-deep)!important;background:rgba(198,161,91,.12)!important;border-color:rgba(198,161,91,.28)!important}
.time-start-copy{min-width:0;display:grid;gap:3px}.time-start-copy b{font-size:13.5px}.time-start-copy small{font-size:11px;color:var(--mute);line-height:1.6;white-space:normal}\r
.initial-slots{min-height:0}\r
.session-plan{margin-top:22px;padding:20px;border-radius:16px;background:#FCFAF4;border:1px solid var(--line)}\r
.session-plan h4{font-family:var(--font-d);font-size:16px;color:var(--ink);margin-bottom:16px;display:flex;gap:8px;align-items:center}\r
.plan-track{display:flex;flex-direction:row;gap:10px;align-items:stretch;overflow-x:auto;padding:6px 4px 12px;margin-top:12px;scrollbar-width:thin;scrollbar-color:rgba(156,107,31,.38) transparent;scroll-snap-type:x proximity;overscroll-behavior-inline:contain}\r
.plan-track::-webkit-scrollbar{height:6px}.plan-track::-webkit-scrollbar-thumb{background:rgba(156,107,31,.32);border-radius:999px}\r
.plan-item{position:relative;flex:0 0 172px;padding:14px 15px;border-radius:12px;border:1px solid var(--line);background:#fff;scroll-snap-align:start}\r
.plan-item--group{border-color:rgba(198,161,91,.28);background:linear-gradient(180deg,#fff,rgba(255,250,240,.82))}\r
.plan-item.pending{opacity:.72}\r
.plan-item b{font-size:13px;display:block}\r
.plan-item small{font-size:11px;color:var(--mute);display:block;margin-top:3px}\r
.plan-item .t{font-size:11.5px;font-weight:700;margin-top:7px;display:block}\r
.plan-gap{flex:0 0 126px;align-self:center;display:grid;place-items:center;text-align:center;gap:3px;padding:10px 12px;border-radius:999px;background:#FFF8EA;border:1px dashed rgba(198,161,91,.42);color:var(--gold-deep);scroll-snap-align:start}\r
.plan-gap span,.plan-gap small{font-size:10.5px;color:var(--mute)}.plan-gap b{font-size:11px}\r
.plan-note{display:flex;gap:8px;align-items:center;margin-top:14px;font-size:12px;color:var(--green);\r
  background:var(--green-bg);border-radius:10px;padding:10px 14px}\r
.plan-note--pending{color:var(--gold-deep);background:#FFF8EA}.plan-note--warn{color:#9A4D16;background:#FFF2DD}\r
.best-slot{display:flex;align-items:center;gap:14px;margin-top:18px;padding:14px 18px;border-radius:14px;\r
  border:1px dashed var(--gold);background:#FFFDF6;font-size:13px;color:var(--gold-deep)}\r
.best-slot button{margin-inline-start:auto;padding:9px 20px;border-radius:10px;font-size:12.5px;font-weight:700;\r
  background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink)}\r
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
\r
/* ===== خطوة 5: التأكيد ===== */\r
.ok-banner{display:flex;gap:14px;align-items:center;background:var(--green-bg);border:1px solid rgba(46,139,87,.25);\r
  border-radius:15px;padding:16px 20px;margin-bottom:20px}\r
.ok-banner .ic{width:40px;height:40px;border-radius:50%;background:var(--green);color:#fff;display:grid;place-items:center;flex:none}\r
.ok-banner b{color:#1E6B41;font-size:15px;display:block}\r
.ok-banner small{color:#4a7d5f;font-size:12.5px}\r
.detail-card{padding:22px;margin-bottom:18px}\r
.detail-card h4{font-family:var(--font-d);font-size:17px;color:var(--ink);margin-bottom:18px;display:flex;align-items:center;gap:9px}\r
.detail-card h4 svg{color:var(--gold-deep)}\r
.d-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}\r
.d-cell{border-inline-start:1px solid var(--line);padding-inline-start:16px}\r
.d-cell:first-child{border:none;padding:0}\r
.d-cell small{font-size:11.5px;color:var(--mute);display:flex;gap:6px;align-items:center;margin-bottom:6px}\r
.d-cell b{font-size:14.5px;color:var(--ink)}\r
/* ===== كارت تفاصيل الجلسة =====\r
   ثلاثة أعمدة: أيقونة القسم | الاسم والخدمات والموظف | الوقت والمدة.\r
   قبل كده كان كل شيء مكدّسًا في عمود واحد، وفاصل القهوة كان في المنتصف\r
   بينما الكروت لليمين، فبان غير متناسق. */\r
.timeline-cards{display:flex;flex-direction:column;gap:10px;position:relative;padding-right:28px;margin-top:14px}\r
.tl-rail{position:absolute;top:16px;bottom:16px;right:10px;width:2px;border-radius:2px;\r
  background:linear-gradient(180deg,rgba(201,139,49,.12),rgba(201,139,49,.5),rgba(201,139,49,.12))}\r
\r
.tl{position:relative;display:grid;grid-template-columns:36px minmax(0,1fr) auto;align-items:center;gap:13px;\r
  margin:0;padding:13px 16px;border-radius:14px;border:1px solid var(--line);background:#fff;\r
  box-shadow:0 12px 24px -20px rgba(80,60,20,.45);\r
  animation:slotIn .4s var(--ease) both;transition:transform .28s var(--ease),box-shadow .28s var(--ease)}\r
.tl:hover{transform:translateX(-3px);box-shadow:0 16px 30px -20px rgba(80,60,20,.55)}\r
\r
/* النقطة على الخط الزمني — بلون القسم القادم من الستايل السطري */\r
.tl::after{content:"";position:absolute;top:50%;right:-23px;width:12px;height:12px;border-radius:50%;\r
  background:currentColor;transform:translateY(-50%);border:2.5px solid #fff;\r
  box-shadow:0 0 0 1.5px currentColor}\r
\r
.tl .ti{width:36px;height:36px;border-radius:11px;display:grid;place-items:center;color:#fff;\r
  margin:0;font-size:16px;align-self:center}\r
.tl-main{min-width:0}\r
.tl-time{display:flex;flex-direction:column;align-items:flex-end;flex:none}\r
.tl b{font-size:13.5px;display:block;color:var(--ink);line-height:1.5}
.tl .with{font-size:11px;color:var(--mute);margin-top:2px;line-height:1.65;
  text-overflow:ellipsis;white-space:nowrap}
.tl .tm{font-size:12.5px;font-weight:800;display:block;text-align:end;white-space:nowrap;\r
  font-variant-numeric:tabular-nums}\r
.tl .dr{font-size:10.5px;color:var(--mute);display:block;text-align:end;margin-top:3px;white-space:nowrap}\r
\r
/* فاصل القهوة: صف بنفس محاذاة الكروت وله نقطته على الخط */\r
.coffee-break{position:relative;display:flex;flex-direction:row;align-items:center;justify-content:flex-start;\r
  gap:10px;padding:8px 14px;border-radius:12px;border:1px dashed rgba(206,146,52,.45);background:#FFFDF7;\r
  color:var(--gold-deep);font-size:11.5px;font-weight:700;text-align:start;\r
  animation:slotIn .4s var(--ease) both}\r
.coffee-break::after{content:"";position:absolute;top:50%;right:-22px;width:10px;height:10px;border-radius:50%;\r
  background:var(--gold);transform:translateY(-50%);border:2.5px solid #fff}\r
.coffee-break .cup{width:30px;height:30px;flex:none;border-radius:50%;display:grid;place-items:center;\r
  background:#FFF8EA;border:1px solid rgba(206,146,52,.28);font-size:14px}\r
\r
@media(max-width:700px){\r
  .tl{grid-template-columns:32px minmax(0,1fr);gap:10px;padding:11px 13px}\r
  .tl-time{grid-column:2;flex-direction:row;align-items:baseline;gap:8px;margin-top:6px}\r
  .tl .tm,.tl .dr{text-align:start;margin:0}\r
}\r
.coord-note{display:flex;gap:8px;align-items:center;font-size:12.5px;color:var(--green);background:var(--green-bg);\r
  border-radius:10px;padding:11px 15px;margin-top:22px}\r
.upsell{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}\r
.up{border:1px solid var(--line);border-radius:14px;padding:14px;display:flex;gap:12px;align-items:center;background:#fff;\r
  transition:all var(--dur) var(--ease)}\r
.up:hover{transform:translateY(-3px);box-shadow:0 14px 26px -16px rgba(80,60,20,.35)}\r
.up img{width:58px;height:58px;object-fit:cover;border-radius:11px;background:#F1EBDD}\r
.up .inf{flex:1;min-width:0}\r
.up b{font-size:13px;color:var(--ink);display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\r
.up small{font-size:11px;color:var(--mute)}\r
.up .p{font-family:var(--font-d);font-size:14px;color:var(--gold-deep);display:block;margin-top:3px}\r
.up button{flex:none;padding:8px 15px;border-radius:9px;border:1px solid var(--gold);color:var(--gold-deep);\r
  font-size:12px;font-weight:600;transition:var(--dur)}\r
.up button:hover,.up.added button{background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);border-color:transparent}\r
.up button:disabled{opacity:.55;cursor:not-allowed;background:#d6cec1;color:#fff;border-color:transparent}\r
\r
/* Keep the confirmation products inside the main desktop column. */\r
@media(min-width:701px){\r
  .products-detail-card{min-width:0;max-width:100%;overflow:hidden}\r
  .products-detail-card h4{flex-wrap:wrap}\r
  .products-detail-card .upsell{\r
    width:100%;min-width:0;max-width:100%;\r
    grid-template-columns:repeat(auto-fit,minmax(220px,1fr));\r
  }\r
  .products-detail-card .up{min-width:0;max-width:100%;padding:12px;gap:9px;overflow:hidden}\r
  .products-detail-card .up img{width:52px;height:52px;flex:0 0 52px}\r
  .products-detail-card .up button{padding:8px 10px}\r
}\r
.cust-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}\r
.cust-grid .fld small{font-size:11.5px;color:var(--mute);display:flex;gap:6px;align-items:center;margin-bottom:7px}\r
.cust-grid input,.notes-box textarea{\r
  width:100%;border:1.5px solid var(--line);border-radius:12px;padding:12px 14px;font-size:13.5px;background:#FDFBF5;\r
  color:var(--ink);transition:border-color var(--dur),box-shadow var(--dur);outline:none;\r
}\r
.cust-grid input:focus,.notes-box textarea:focus{border-color:var(--gold);box-shadow:0 0 0 3px rgba(198,161,91,.14)}\r
.notes-box textarea{resize:vertical;min-height:74px}\r
.terms{display:flex;gap:9px;align-items:center;font-size:12.5px;color:var(--mute);background:rgba(198,161,91,.08);\r
  border-radius:11px;padding:12px 16px;margin-top:16px}\r
.terms a{color:var(--gold-deep);font-weight:600;text-decoration:underline}\r
\r
/* ===== خطوة 6: الدفع ===== */\r
.pay-methods{display:grid;grid-template-columns:1fr 1fr;gap:12px}\r
.pm{position:relative;display:flex;align-items:center;gap:14px;padding:17px 18px;border-radius:15px;\r
  border:1.5px solid var(--line);background:#fff;cursor:pointer;transition:all var(--dur) var(--ease)}\r
.pm:hover{border-color:rgba(143,113,52,.5)}\r
.pm.sel{border-color:var(--gold);background:linear-gradient(160deg,#FFFBF0,#fff);box-shadow:0 0 0 3px rgba(198,161,91,.15)}\r
.pm .pmi{width:52px;height:36px;border-radius:9px;display:grid;place-items:center;background:#F5F0E4;font-weight:800;\r
  font-size:11px;color:var(--ink);letter-spacing:.02em;flex:none}\r
.pm b{font-size:14px;color:var(--ink);display:block}\r
.pm small{font-size:11.5px;color:var(--mute)}\r
.pm .rad{margin-inline-start:auto;width:22px;height:22px;border-radius:50%;border:1.5px solid var(--line);\r
  display:grid;place-items:center;transition:all .25s var(--ease);flex:none}\r
.pm .rad i{width:10px;height:10px;border-radius:50%;background:linear-gradient(135deg,var(--gold-bright),var(--gold));\r
  transform:scale(0);transition:transform .25s var(--ease)}\r
.pm.sel .rad{border-color:var(--gold)}\r
.pm.sel .rad i{transform:scale(1)}\r
.card-form{overflow:hidden;max-height:0;opacity:0;transition:max-height .45s var(--ease),opacity .35s,margin .35s}\r
.card-form.open{max-height:220px;opacity:1;margin-top:14px}\r
.card-form .cf{display:grid;grid-template-columns:2fr 1fr 1fr;gap:12px;padding:18px;border-radius:14px;background:#FCFAF4;border:1px solid var(--line)}\r
.card-form input{width:100%;border:1.5px solid var(--line);border-radius:11px;padding:12px;font-size:13px;background:#fff;outline:none;color:var(--ink)}\r
.card-form input:focus{border-color:var(--gold)}\r
.secure-line{display:flex;gap:8px;align-items:center;justify-content:center;margin-top:16px;font-size:12px;color:var(--mute)}\r
.rewards{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:6px}\r
.rw{padding:17px;border-radius:15px;border:1.5px solid var(--line);background:#fff}\r
.rw .rt{display:flex;align-items:center;gap:11px;margin-bottom:11px}\r
.rw .rt .ri{width:38px;height:38px;border-radius:11px;display:grid;place-items:center;\r
  background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink)}\r
.rw b{font-size:13.5px;color:var(--ink);display:block}\r
.rw small{font-size:11.5px;color:var(--mute)}\r
.switch{margin-inline-start:auto;width:46px;height:26px;border-radius:13px;background:#E3DCC9;position:relative;\r
  cursor:pointer;transition:background .3s var(--ease);flex:none}\r
.switch::after{content:"";position:absolute;top:3px;right:3px;width:20px;height:20px;border-radius:50%;background:#fff;\r
  box-shadow:0 2px 6px rgba(0,0,0,.2);transition:transform .3s var(--ease)}\r
.switch.on{background:linear-gradient(135deg,var(--gold-bright),var(--gold))}\r
.switch.on::after{transform:translateX(-20px)}\r
.rw input{width:100%;border:1.5px solid var(--line);border-radius:11px;padding:11px 13px;font-size:13px;background:#FDFBF5;outline:none;color:var(--ink)}\r
.rw input:focus{border-color:var(--gold)}\r
.rw .hint{font-size:11px;color:var(--gold-deep);margin-top:8px;display:block}\r
.coupon{display:flex;gap:10px;margin-top:12px;padding:16px;border-radius:15px;border:1.5px solid var(--line);background:#fff;align-items:center}\r
.coupon .ci{width:38px;height:38px;border-radius:50%;border:1px solid var(--line);display:grid;place-items:center;color:var(--gold-deep);flex:none}\r
.coupon input{flex:1;border:1.5px solid var(--line);border-radius:11px;padding:11px 14px;font-size:13px;background:#FDFBF5;outline:none;color:var(--ink)}\r
.coupon input:focus{border-color:var(--gold)}\r
.coupon button{padding:11px 24px;border-radius:11px;background:var(--ink);color:var(--gold-bright);font-size:13px;font-weight:600;transition:var(--dur)}\r
.coupon button:hover{background:#241E12}\r
.coupon-msg{font-size:12px;margin-top:10px;display:none;align-items:center;gap:7px}\r
.coupon-msg.ok{display:flex;color:var(--green)}\r
.coupon-msg.bad{display:flex;color:#B3452F}\r
.payment-rewards-card{margin-top:16px}\r
.payment-rewards-card h4{display:flex;align-items:center;gap:10px;justify-content:flex-start}\r
.payment-rewards-card .step-dot{width:30px;height:30px;border-radius:50%;display:grid;place-items:center;background:#050403;color:var(--gold-bright);font-size:13px;font-weight:800;flex:none}\r
.rw.on{border-color:rgba(198,161,91,.55);background:linear-gradient(145deg,#fffdf8,#fff8ea);box-shadow:0 10px 26px -24px rgba(89,53,9,.5)}\r
.rw input:disabled{opacity:.55;cursor:not-allowed}\r
.coupon button:disabled{opacity:.65;cursor:wait}\r
.coupon .coupon-clear{padding:10px 14px;background:#F5F0E4;color:var(--gold-deep)}\r
.coupon .coupon-clear:hover{background:#EEE4D2}\r
.reward-total{margin-top:14px;padding:13px 15px;border:1px dashed rgba(198,161,91,.55);border-radius:13px;background:rgba(198,161,91,.08);display:grid;grid-template-columns:1fr auto;gap:5px 14px;align-items:center}\r
.reward-total span{font-size:12.5px;color:var(--mute)}\r
.reward-total b{font-size:15px;color:var(--gold-deep)}\r
.reward-total small{grid-column:1/-1;color:var(--green);font-size:11.5px;font-weight:700}\r
.trust-row{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:22px}\r
.trust{text-align:center;padding:18px 12px;border-radius:14px;background:#fff;border:1px solid var(--line)}\r
.trust .ti{width:40px;height:40px;border-radius:12px;margin:0 auto 10px;display:grid;place-items:center;\r
  background:rgba(198,161,91,.12);color:var(--gold-deep)}\r
.trust b{font-size:12.5px;color:var(--ink);display:block}\r
.trust small{font-size:10.5px;color:var(--mute)}\r
\r
/* ===== ملخص الحجز (الشريط الجانبي) ===== */\r
.summary{position:sticky;top:86px;opacity:0;transform:translateY(-14px);transition:opacity .38s var(--ease),transform .38s var(--ease)}\r
.summary.show{opacity:1;transform:translateY(0)}\r
.summary .card{padding:20px;overflow:hidden}\r
.summary h3{font-family:var(--font-d);font-size:18px;color:var(--ink);margin-bottom:16px;display:flex;align-items:center;gap:8px}\r
.summary .br-img{border-radius:13px;overflow:hidden;margin-bottom:14px;aspect-ratio:16/8;background:#EFE8D8}\r
.summary .br-img img{width:100%;height:100%;object-fit:cover}\r
.sum-row{display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid rgba(143,113,52,.12);font-size:13px}\r
.sum-row:last-of-type{border:none}\r
.sum-row .k{color:var(--mute);display:flex;gap:7px;align-items:center}\r
.sum-row .v{color:var(--ink);font-weight:600;text-align:left}\r
.sum-svcs{margin:6px 0}\r
.sum-svc{display:flex;align-items:center;gap:9px;padding:8px 0;font-size:12.5px;animation:slotIn .3s var(--ease) both}\r
.sum-svc i{width:8px;height:8px;border-radius:3px;flex:none}\r
.sum-svc .nm{flex:1;color:var(--ink)}\r
.sum-svc .pr{color:var(--gold-deep);font-weight:600;white-space:nowrap}\r
.sum-svc .rm{width:22px;height:22px;border-radius:7px;display:grid;place-items:center;color:#B3452F;opacity:.55;transition:var(--dur)}\r
.sum-svc .rm:hover{opacity:1;background:rgba(179,69,47,.1)}\r
.sum-price{margin-top:12px;padding-top:14px;border-top:1px dashed var(--line)}\r
.sp-row{display:flex;justify-content:space-between;font-size:12.5px;color:var(--mute);padding:4px 0}\r
.sp-row.disc{color:var(--green)}\r
.sp-total{display:flex;justify-content:space-between;align-items:baseline;margin-top:10px;padding-top:12px;border-top:1px solid var(--line)}\r
.sp-total .k{font-size:14px;color:var(--ink);font-weight:700}\r
.sp-total .v{font-family:var(--font-d);font-size:28px;color:var(--gold-deep);transition:transform .25s var(--ease)}\r
.sp-total .v.pulse{transform:scale(1.08)}\r
.sp-total .v small{font-size:13px}\r
.sum-note{margin-top:14px;display:flex;gap:9px;align-items:center;background:rgba(198,161,91,.1);border-radius:11px;\r
  padding:11px 13px;font-size:11.5px;color:var(--gold-deep)}\r
.sum-empty{text-align:center;color:var(--mute);font-size:12.5px;padding:26px 10px;border:1.5px dashed var(--line);border-radius:13px}\r
\r
/* ملخص صغير وثابت من خطوة الموظف وحتى الدفع */\r
.booking-summary-compact{top:98px;align-self:start;min-width:0;margin-bottom:90px;z-index:2}\r
.stage>.panel{grid-column:1}\r
.stage>.booking-summary-compact{grid-column:2}\r
.booking-summary-compact .card{padding:15px;max-height:calc(100dvh - 188px);overflow:hidden;display:flex;flex-direction:column;scrollbar-gutter:stable}\r
.booking-summary-compact h3{font-size:15px;margin-bottom:10px}\r
.booking-summary-compact .br-img{aspect-ratio:auto;height:78px;margin-bottom:8px;border-radius:10px}\r
.booking-summary-compact .sum-row{padding:7px 0;font-size:11px}\r
.booking-summary-compact .sum-svcs{margin:3px 0;min-height:48px;max-height:148px;overflow-y:auto;overscroll-behavior:contain;scrollbar-gutter:stable;padding-inline-end:4px;scrollbar-width:thin;scrollbar-color:rgba(156,107,31,.38) transparent}\r
.booking-summary-compact .sum-svcs::-webkit-scrollbar{width:5px}.booking-summary-compact .sum-svcs::-webkit-scrollbar-thumb{background:rgba(156,107,31,.32);border-radius:999px}\r
.booking-summary-compact .sum-svc{gap:6px;padding:5px 0;font-size:10.5px}\r
.booking-summary-compact .sum-svc .rm{width:19px;height:19px}\r
.booking-summary-compact .sum-price{margin-top:7px;padding-top:8px}\r
.booking-summary-compact .sp-row{font-size:10.5px;padding:2px 0}\r
.booking-summary-compact .sp-total{margin-top:7px;padding-top:8px}\r
.booking-summary-compact .sp-total .k{font-size:11.5px}\r
.booking-summary-compact .sp-total .v{font-size:21px}\r
.booking-summary-compact .sp-total .v small{font-size:10px}\r
.booking-summary-compact .sum-note{margin-top:9px;padding:8px 9px;font-size:9.5px;line-height:1.55}\r
.booking-summary-time .br-img{display:none}\r
.booking-summary-time .card{max-height:calc(100dvh - 188px)}\r
.booking-summary-time .sum-svcs{max-height:132px}\r
\r
/* مع الملخص الجانبي نحافظ على مساحة مريحة للتقويم والأوقات في الشاشات المتوسطة */\r
@media(min-width:901px) and (max-width:1180px){\r
  .stage:has(.booking-summary-time.show){grid-template-columns:minmax(0,1fr) 290px!important}\r
  .stage:has(.booking-summary-time.show) .time-grid{grid-template-columns:1fr}\r
}\r
\r
/* ===== الشريط السفلي ===== */\r
.footbar{\r
  position:fixed;bottom:0;inset-inline:0;z-index:390;background:rgba(255,253,247,.92);\r
  backdrop-filter:blur(14px);border-top:1px solid var(--line);\r
  box-shadow:0 -14px 40px -20px rgba(80,60,20,.35);\r
}\r
.footbar .in{display:flex;align-items:center;gap:20px;padding:14px 0}\r
.btn{display:inline-flex;align-items:center;gap:10px;justify-content:center;padding:14px 32px;border-radius:14px;\r
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
.btn-back{border:1.5px solid var(--line);color:var(--mute);background:#fff;padding:14px 26px}\r
.btn-back:hover{border-color:var(--gold);color:var(--gold-deep)}\r
.fb-mid{flex:1;display:flex;justify-content:center;gap:34px;font-size:12.5px;color:var(--mute);flex-wrap:wrap}\r
.fb-mid b{color:var(--ink)}\r
.fb-mid .tot b{font-family:var(--font-d);font-size:19px;color:var(--gold-deep)}\r
.btn-pay{background:var(--ink);color:var(--gold-bright);padding:15px 36px}\r
.btn-pay:hover:not(:disabled){background:#221C10;transform:translateY(-2px)}\r
\r
/* ===== النجاح ===== */\r
.success-wrap{max-width:900px;margin-inline:auto;padding:40px 0 30px;text-align:center}\r
.suc-ic{width:96px;height:96px;margin:0 auto 22px;border-radius:50%;border:2px solid var(--gold);position:relative;\r
  display:grid;place-items:center;color:var(--gold-deep);\r
  animation:sucPop .6s var(--ease) both .15s}\r
@keyframes sucPop{from{transform:scale(.4);opacity:0}60%{transform:scale(1.08)}to{transform:scale(1);opacity:1}}\r
.suc-ic svg{stroke-dasharray:60;stroke-dashoffset:60;animation:dash .7s var(--ease) forwards .5s}\r
@keyframes dash{to{stroke-dashoffset:0}}\r
.suc-ic .spark{position:absolute;color:var(--gold);animation:sparkle 2.6s ease-in-out infinite}\r
.suc-ic .s1{top:-8px;left:-16px}.suc-ic .s2{bottom:-4px;right:-18px;animation-delay:-1.2s}\r
@keyframes sparkle{0%,100%{opacity:.3;transform:scale(.8) rotate(0)}50%{opacity:1;transform:scale(1.1) rotate(20deg)}}\r
.success-wrap h1{font-family:var(--font-d);font-size:clamp(28px,3.6vw,42px);color:var(--ink)}\r
.success-wrap .sub{color:var(--mute);margin-top:10px;font-size:15px}\r
.sent-chip{display:inline-flex;gap:9px;align-items:center;margin-top:18px;background:#fff;border:1px solid var(--line);\r
  border-radius:999px;padding:10px 20px;font-size:12.5px;color:var(--mute)}\r
.sent-chip svg{color:var(--green)}\r
.suc-grid{display:grid;grid-template-columns:1fr 300px;gap:18px;margin-top:30px;text-align:right}\r
.suc-details{padding:24px}\r
.suc-details h4{font-family:var(--font-d);font-size:17px;margin-bottom:8px;color:var(--ink)}\r
.sd-row{display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-bottom:1px solid rgba(143,113,52,.12);font-size:13.5px}\r
.sd-row:last-child{border:none}\r
.sd-row .k{color:var(--mute);display:flex;gap:8px;align-items:center}\r
.sd-row .k svg{color:var(--gold-deep)}\r
.sd-row .v{font-weight:600;color:var(--ink)}\r
.qr-card{padding:22px;text-align:center}\r
.qr-card .code{font-family:var(--font-d);color:var(--gold-deep);font-size:17px;letter-spacing:.03em;margin:4px 0 14px;direction:ltr}\r
.qr-box{width:170px;height:170px;margin:0 auto;border:1.5px solid var(--gold);border-radius:16px;padding:10px;position:relative;background:#fff}\r
.qr-box canvas{width:100%;height:100%;image-rendering:pixelated}\r
.qr-box img{width:100%;height:100%;object-fit:contain;display:block}\r
.qr-card small{display:block;margin-top:12px;font-size:11.5px;color:var(--mute)}\r
.receipt-link{display:inline-flex;margin-top:12px;color:var(--gold-deep);font-size:12px;font-weight:700;text-decoration:underline}\r
.receipt-wrap{padding-top:24px}\r
.receipt-grid{grid-template-columns:1fr 1fr}\r
.receipt-code{direction:ltr;color:var(--gold-deep)}\r
.receipt-services{display:grid;align-content:start;gap:10px}\r
.receipt-service{display:grid;gap:4px;padding:12px 0;border-bottom:1px solid rgba(143,113,52,.12)}\r
.receipt-service:last-child{border-bottom:0}\r
.receipt-service b{font-size:13.5px;color:var(--ink)}\r
.receipt-service small{font-size:11.5px;color:var(--mute)}\r
.receipt-service span{font-size:12px;color:var(--gold-deep);font-weight:800}\r
.wallets{display:flex;gap:8px;justify-content:center;margin-top:14px}\r
.wallets button{flex:1;display:flex;gap:7px;align-items:center;justify-content:center;padding:10px;border-radius:11px;\r
  background:var(--ink);color:#fff;font-size:11.5px;transition:var(--dur)}\r
.wallets button:hover{background:#241E12}\r
.next-steps{padding:24px;margin-top:18px;text-align:right}\r
.next-steps h4{font-family:var(--font-d);font-size:17px;color:var(--ink);margin-bottom:24px;text-align:center}\r
.ns-track{display:grid;grid-template-columns:repeat(4,1fr);position:relative}\r
.ns-track::before{content:"";position:absolute;top:24px;right:12%;left:12%;height:2px;\r
  background:repeating-linear-gradient(90deg,var(--line) 0 6px,transparent 6px 12px)}\r
.ns{position:relative;text-align:center;padding:0 8px}\r
.ns .ni{width:48px;height:48px;border-radius:50%;margin:0 auto 12px;display:grid;place-items:center;background:#fff;\r
  border:1.5px solid var(--line);color:var(--mute);position:relative;z-index:1}\r
.ns.done .ni{background:linear-gradient(135deg,var(--gold-bright),var(--gold));border-color:transparent;color:var(--ink)}\r
.ns b{font-size:12.5px;color:var(--ink);display:block}\r
.ns.done b{color:var(--gold-deep)}\r
.ns small{font-size:10.5px;color:var(--mute);display:block;margin-top:5px;line-height:1.6}\r
.suc-actions{display:flex;gap:12px;justify-content:center;margin-top:26px;flex-wrap:wrap}\r
.btn-line{border:1.5px solid var(--gold);color:var(--gold-deep);background:#fff}\r
.btn-line:hover{background:rgba(198,161,91,.08);transform:translateY(-2px)}\r
.suc-perks{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:30px}\r
\r
/* ===== حركات عامة ===== */\r
.view{display:none}\r
.view.on{display:block;animation:viewIn .45s var(--ease) both}\r
@keyframes viewIn{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}\r
.pay-loading{position:fixed;inset:0;z-index:999;display:none;place-items:center;background:rgba(10,9,6,.7);backdrop-filter:blur(6px)}\r
.pay-loading.on{display:grid}\r
.pl-box{background:#fff;border-radius:22px;padding:44px 60px;text-align:center;animation:viewIn .35s var(--ease)}\r
.pl-ring{width:64px;height:64px;margin:0 auto 20px;border-radius:50%;border:3px solid rgba(198,161,91,.2);\r
  border-top-color:var(--gold);animation:spin 1s linear infinite}\r
@keyframes spin{to{transform:rotate(360deg)}}\r
.pl-box b{font-family:var(--font-d);font-size:18px;color:var(--ink)}\r
.pl-box small{display:block;color:var(--mute);margin-top:8px;font-size:12.5px}\r
.toast{position:fixed;bottom:96px;right:50%;transform:translate(50%,20px);z-index:998;opacity:0;pointer-events:none;\r
  background:var(--ink);color:var(--champagne);padding:13px 24px;border-radius:13px;font-size:13px;\r
  border:1px solid var(--line-dark);transition:all .35s var(--ease);display:flex;gap:9px;align-items:center}\r
.toast.on{opacity:1;transform:translate(50%,0)}\r
.toast svg{color:var(--gold-bright)}\r
\r
@media(max-width:1080px){
  .stage{grid-template-columns:1fr}\r
  .stage>.panel,.stage>.booking-summary-compact{grid-column:1}\r
  .summary{position:static;order:-1}\r
  .branches-grid{grid-template-columns:1fr 1fr}\r
  .cat-row{grid-template-columns:repeat(5,1fr)}\r
  .subs{grid-template-columns:repeat(3,1fr)}\r
  .time-grid{grid-template-columns:1fr}\r
  .d-grid{grid-template-columns:repeat(2,1fr)} .timeline-cards{display:flex;flex-direction:column;}\r
  .tl-rail{display:none}.tl::after{display:none}\r
  .suc-grid{grid-template-columns:1fr}\r
}
@media(min-width:901px){
  .stage-services-summary .subs{grid-template-columns:repeat(2,minmax(0,1fr))}
  .stage-services-summary>.panel{min-width:0}
}
@media(max-width:900px){
  .stage{grid-template-columns:minmax(0,1fr)!important}
  .stage-services-summary>.summary{order:initial}
}
@media(min-width:901px) and (max-width:1080px){\r
  .stage:has(.booking-summary-compact.show){grid-template-columns:minmax(0,1fr) 290px!important}\r
  .stage>.panel{grid-column:1}\r
  .stage>.booking-summary-compact{grid-column:2;position:sticky;order:initial}\r
}\r
@media(max-width:700px){\r
  nav.links{display:none}\r
  .step label{display:none}\r
  .step .bubble{width:42px;height:42px}\r
  .step .bar{top:21px;right:calc(50% + 28px);width:calc(100% - 56px)}\r
  .branches-grid,.subs,.mode-grid,.pay-methods,.rewards,.upsell{grid-template-columns:1fr}\r
  .cat-row{grid-template-columns:repeat(5,1fr);gap:4px;width:100%;max-width:none;margin-bottom:16px}\r
  .cat{height:74px;border-radius:10px;border-width:1.5px}\r
  .cat .lbl{font-size:9px;inset-inline:4px;bottom:6px;min-height:24px;display:flex;align-items:flex-end;justify-content:center}\r
  .cat .cat-name{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;line-height:1.25}\r
  .cat .chk{width:15px;height:15px;top:5px;left:5px}\r
  .sub{min-height:112px;padding:12px 12px 11px}\r
  .sub .top{grid-template-columns:28px minmax(0,1fr) 19px;align-items:center;gap:8px;margin-bottom:5px}\r
  .sub .top .si{width:28px;height:28px;border-radius:8px}\r
  .sub .top .si svg{width:16px;height:16px}\r
  .sub .top b{font-size:12.5px;line-height:1.45;padding-top:0}\r
  .sub small{min-height:0}\r
  .slots{grid-template-columns:repeat(2,1fr)}\r
  .emp-cat{padding:12px 13px 10px;gap:10px}\r
  .emp-cat .cat-ico{width:40px;height:40px}\r
  .emp-cat b{font-size:13.5px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}\r
  .emp-cat small{font-size:10.5px}\r
  .emp-list{padding:12px 12px 14px}\r
  .branch-strip{flex-wrap:wrap;gap:7px}\r
  .branch-strip .cells{display:none}\r
  .fb-mid{display:none}\r
  .trust-row,.suc-perks,.cust-grid{grid-template-columns:1fr 1fr}\r
  .ns-track{grid-template-columns:1fr 1fr;gap:20px}\r
  .ns-track::before{display:none}\r
  .d-grid{grid-template-columns:1fr 1fr}\r
  .d-cell{border:none;padding:0}\r
}\r
@media(prefers-reduced-motion:reduce){\r
  *,*::before,*::after{animation-duration:.01ms!important;transition-duration:.01ms!important}\r
}\r
`,Rr=[{id:"s1",cat:"hair",name:"حلاقة عادية",desc:"حلاقة شعر عادية بقصات عصرية",dur:20,price:20},{id:"s2",cat:"hair",name:"حلاقة شعر + تحديد لحية",desc:"حلاقة شعر مع تحديد اللحية",dur:30,price:35},{id:"s3",cat:"hair",name:"حلاقة مع غسيل",desc:"حلاقة مع غسيل وتنظيف الشعر",dur:30,price:30},{id:"s4",cat:"hair",name:"حلاقة VIP",desc:"حلاقة فاخرة مع خدمة VIP",dur:50,price:80},{id:"s5",cat:"hair",name:"تنسيق اللحية",desc:"تنسيق وتجميل اللحية",dur:20,price:15},{id:"s6",cat:"hair",name:"تصفيف الشعر",desc:"تصفيف الشعر بالمنتجات المناسبة",dur:15,price:15},{id:"s7",cat:"skin",name:"تنظيف بشرة عميق",desc:"تنظيف عميق ينظف وينعش البشرة",dur:50,price:150},{id:"s8",cat:"skin",name:"تنظيف بشرة سريع",desc:"جلسة سريعة لإشراقة فورية",dur:30,price:80},{id:"s9",cat:"skin",name:"ماسك الذهب",desc:"ماسك فاخر لنضارة استثنائية",dur:25,price:90},{id:"s10",cat:"pedi",name:"بديكير عادي",desc:"عناية أساسية للأقدام والأظافر",dur:45,price:60},{id:"s11",cat:"pedi",name:"بديكير فاخر",desc:"عناية متكاملة مع تقشير وترطيب",dur:60,price:100},{id:"s12",cat:"pedi",name:"بديكير طبي",desc:"علاج تشققات القدم والمسامير",dur:60,price:120},{id:"s13",cat:"pedi",name:"إزالة جلد ميت",desc:"إزالة الجلد الميت من القدمين",dur:30,price:40},{id:"s14",cat:"mass",name:"مساج استرخاء للجسم",desc:"استرخاء عميق يجدد طاقتك",dur:60,price:180},{id:"s15",cat:"mass",name:"مساج رأس",desc:"جلسة قصيرة لتخفيف التوتر",dur:15,price:25},{id:"s16",cat:"mass",name:"مساج علاجي",desc:"مساج متخصص للعضلات المجهدة",dur:60,price:220},{id:"s17",cat:"bath",name:"حمام مغربي كلاسيكي",desc:"تقشير وتنقية بطقوس أصيلة",dur:60,price:200},{id:"s18",cat:"bath",name:"حمام مغربي ملكي",desc:"التجربة الكاملة مع ماسك وتدليك",dur:90,price:300}];for(const ir of Object.values(xe))for(const e of ir.variants||[])e.svcId&&!Rr.some(k=>k.id===e.svcId)&&Rr.push({id:e.svcId,cat:e.cat,name:e.name,desc:e.desc||"",dur:e.dur,price:e.price,hidden:!0});const fe=[{id:"u1",name:"كريم ترطيب متوازن",desc:"ترطيب وتغذية يدوم طويلًا",price:110,img:"https://sami-care.sa//storage/uploads/403/HyxbPuOgHBgbg0pgpMZr9bcFv2OryQtxjRMLnhxb.jpg"},{id:"u2",name:"غسول تنظيف البشرة",desc:"ينظف بعمق وينعش البشرة",price:95,img:"https://sami-care.sa//storage/uploads/405/L2sxjQjZgTztP0swgRTlXV0jVjCLuS5GJyypCJmT.jpg"},{id:"u3",name:"زيت اللحية الذهبي",desc:"ترطيب وتغذية عميقة",price:120,img:"https://sami-care.sa//storage/uploads/406/uGGoLhrbcMofuyS2kedJ44ejvBqYnz1M0mA0zTMP.jpg"}],ve=[{t:"اختيار الخدمات",ic:'<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"/>'},{t:"اختيار الموظف",ic:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>'},{t:"اختيار الوقت",ic:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>'},{t:"تأكيد الحجز",ic:'<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>'},{t:"الدفع",ic:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>'}],ye={class:"wrap stepper",id:"stepperWrap"},we={class:"steps",id:"steps"},ke=["data-i"],_e={class:"n"},ze=["onClick"],$e=["innerHTML"],Me={__name:"BookingStepper",setup(ir){const{state:e}=pr();function k(f){f<e.step&&(e.step=f)}return(f,S)=>Tr((t(),i("div",ye,[r("div",we,[(t(!0),i(V,null,J(n(ve),(B,L)=>(t(),i("div",{key:L,class:Y(["step",{active:L===n(e).step,done:L<n(e).step}]),"data-i":L},[S[0]||(S[0]=r("div",{class:"bar"},[r("i")],-1)),r("span",_e,s(L+1),1),r("span",{class:"bubble",onClick:H=>k(L)},[(t(),i("svg",{width:"21",height:"21",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7",innerHTML:B.ic},null,8,$e))],8,ze),r("label",null,s(B.t),1)],10,ke))),128))])],512)),[[Pr,!n(e).done]])}},Ce={key:0,class:"branch-strip"},Se=["src","alt"],Fe={class:"bi"},Be={key:1,class:"empty-hint",style:{display:"grid",gap:"10px"}},Le={class:"cat-row"},Ae=["data-cat","onClick"],Ee=["src","alt"],Te={class:"lbl"},De={class:"cat-name"},je={key:0,class:"empty-hint"},Ne={key:1,class:"sub-block"},Pe={class:"sub-title"},He={class:"sub-title__main"},Ie={class:"tick"},Ve=["innerHTML"],Ye={key:0,class:"empty-hint"},Re={key:1,class:"subs"},qe=["data-svc","onClick"],Oe={class:"top"},Ge={class:"si"},Ke=["innerHTML"],Ue={class:"foot"},We={class:"dur"},Xe={class:"prc"},Qe={__name:"ServicesStep",setup(ir){const{state:e,hasSvc:k,toggleSvc:f}=pr(),{current:S}=vr(),{state:B}=Xr(),L=u=>Qr(u,B.lang),H=ar([]),j=ar(!0);Mr(async()=>{try{const u=await Kr();H.value=u!=null&&u.status?u.data||[]:[]}catch{H.value=[]}finally{j.value=!1}});const m=b(()=>H.value.map(u=>({id:u.id,name:Er(u,"name",B.lang),image:Ur(u.image)||u.feature_image||null}))),E=b(()=>H.value.find(u=>u.id===e.activeCat)||null),G=b(()=>Er(E.value,"name",B.lang)),v=b(()=>Hr(E.value)),z=b(()=>{var u;return(((u=E.value)==null?void 0:u.services)||[]).map(g=>({id:g.id,categoryId:E.value.id,categoryNameT:Wr(E.value,"name"),get categoryName(){return L(this.categoryNameT)},icon:v.value,get name(){return Er(g,"name",B.lang)},get desc(){return Er(g,"description",B.lang)},dur:g.duration_min,price:g.default_price}))}),T=u=>e.services.some(g=>g.categoryId===u),I=b(()=>z.value.filter(u=>k(u.id)).length),c=u=>({"--acc":Ir(u.icon)}),y=u=>Dr(u.icon);return(u,g)=>(t(),i(V,null,[g[5]||(g[5]=r("div",{class:"panel-head"},[r("h1",null,"اختر الخدمة التي تناسبك"),r("p",null,"يمكنك اختيار خدمة واحدة أو أكثر من أي قسم")],-1)),n(S)?(t(),i("div",Ce,[n(S).image?(t(),i("img",{key:0,src:n(S).image,alt:n(S).name},null,8,Se)):R("",!0),r("span",Fe,[g[0]||(g[0]=M("مكان التنفيذ: ",-1)),r("b",null,s(n(S).name),1),r("small",null,s(n(S).address),1)])])):R("",!0),j.value?(t(),i("div",Be,[hr(jr,{height:"64px","border-radius":"12px"}),hr(jr,{height:"92px","border-radius":"12px"})])):(t(),i(V,{key:2},[r("div",Le,[(t(!0),i(V,null,J(m.value,C=>(t(),i("div",{key:C.id,class:Y(["cat",{sel:n(e).activeCat===C.id,"has-picks":T(C.id)}]),"data-cat":C.id,onClick:K=>n(e).activeCat=C.id},[C.image?(t(),i("img",{key:0,src:C.image,alt:C.name},null,8,Ee)):R("",!0),g[1]||(g[1]=r("span",{class:"chk"},[r("svg",{width:"9",height:"9",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3"},[r("path",{d:"M20 6L9 17l-5-5"})])],-1)),r("span",Te,[r("span",De,s(C.name),1)])],10,Ae))),128))]),n(e).activeCat?(t(),i("div",Ne,[r("div",Pe,[r("span",He,[M(" خدمات "+s(G.value)+" ",1),r("span",Ie,[(t(),i("svg",{viewBox:"0 0 24 24","aria-hidden":"true",innerHTML:n(Dr)(v.value)},null,8,Ve))])]),r("small",null,s(I.value?I.value+" مختارة":"اختر خدمة أو أكثر"),1)]),z.value.length?(t(),i("div",Re,[(t(!0),i(V,null,J(z.value,C=>(t(),i("div",{key:C.id,class:Y(["sub",{sel:n(k)(C.id)}]),"data-svc":C.id,style:$r(c(C)),onClick:K=>n(f)(C)},[r("div",Oe,[r("span",Ge,[(t(),i("svg",{viewBox:"0 0 24 24","aria-hidden":"true",innerHTML:y(C)},null,8,Ke))]),r("b",null,s(C.name),1),g[3]||(g[3]=r("span",{class:"chk"},[r("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3"},[r("path",{d:"M20 6L9 17l-5-5"})])],-1))]),r("small",null,s(C.desc),1),r("div",Ue,[r("span",We,"🕐 "+s(C.dur)+" دقيقة",1),r("span",Xe,[M(s(n(q)(C.price))+" ",1),g[4]||(g[4]=r("small",null,"ر.س",-1))])])],14,qe))),128))])):(t(),i("div",Ye,"لا توجد خدمات متاحة حاليًا ضمن هذا القسم"))])):(t(),i("div",je,[...g[2]||(g[2]=[r("b",null,"اختر خدمة لعرض تفاصيلها",-1),M("اختر إحدى الخدمات الأساسية أعلاه لعرض الخدمات الفرعية المتاحة",-1)])]))],64))],64))}},Je={class:"mode-grid"},Ze=["aria-pressed"],rn=["aria-pressed"],en={key:0,class:"emp-section emp-section--groups"},nn={class:"emp-cat emp-cat--group"},tn={class:"cat-ico"},an=["innerHTML"],on={class:"emp-cat__info"},sn={class:"emp-cat__services"},ln={key:0,class:"empty-hint"},dn={key:1,class:"empty-hint"},pn={key:2,class:"emp-list emp-list--groups"},cn=["onClick"],gn=["onClick"],un={key:1,class:"j-note card",style:{display:"flex",gap:"16px","align-items":"center",padding:"20px 24px","border-color":"var(--line)"}},xn={__name:"EmployeeStep",setup(ir){const{state:e,selSvcs:k,setEmployee:f}=pr(),{current:S}=vr(),B=zr({}),L=zr({}),H=["توفير الوقت","أفضل تقييم متاح","تنفيذ خدمات القسم بنفس الموظف","منع أي تعارض في المواعيد"],j=["اختر موظفًا واحدًا لكل قسم","الموظف المختار ينفذ كل خدمات القسم","تحكم كامل في فريق جلستك"],m=b(()=>{const p=new Map;return k.value.forEach(d=>{const h=String(d.categoryId??d.categoryName??d.id);p.has(h)||p.set(h,{id:h,name:d.categoryName||d.name,icon:d.icon||Hr(d.categoryId),services:[]}),p.get(h).services.push(d)}),[...p.values()]});function E(p){return[p.first_name,p.last_name].filter(Boolean).join(" ")||p.username||"موظف"}function G(p){return{"--acc":Ir(p.icon)}}function v(p){return`${p.services.length} ${p.services.length===1?"خدمة":"خدمات"}`}function z(p){return p.services.map(d=>d.name).join("، ")}function T(p){const d=p.services.map(x=>B[x.id]);if(!d.length||d.some(x=>!Array.isArray(x)))return[];const[h,...A]=d,$=h.filter(x=>A.every(_=>_.some(nr=>String(nr.id)===String(x.id))));return[...new Map($.map(x=>[String(x.id),x])).values()]}function I(p){return p.services.some(d=>L[d.id]||!Array.isArray(B[d.id]))}function c(p){const d=p.services.map(A=>e.emp[A.id]).filter(Boolean);if(d.length!==p.services.length)return null;const h=d[0];return d.every(A=>String(A.id)===String(h.id))?h:null}function y(p,d){var h;return String(((h=c(p))==null?void 0:h.id)??"")===String(d.id??"")}function u(p){const d=p.services.map(h=>k.value.findIndex(A=>String(A.id)===String(h.id))).filter(h=>h>=0);return d.length?Math.min(...d):-1}function g(p){const d=u(p);d!==-1&&k.value.slice(d).forEach(h=>{delete e.time[h.id]})}function C(p,d,{clearTimes:h=!0}={}){p.services.forEach(A=>f(A.id,d)),h&&g(p)}function K(){e.mode==="auto"&&m.value.forEach(p=>{T(p).length&&p.services.forEach(h=>{e.staffOptions[h.id]=B[h.id]||[],f(h.id,{id:null,name:"اختيار تلقائي"})})})}function F(p){const d=e.mode!==p;e.mode=p,d&&(e.time={},e.emp={}),K()}function N(p,d){e.mode="manual",C(p,d)}async function Z(p){var d,h;if(!B[p.id]){L[p.id]=!0;try{const A=(d=S.value)!=null&&d.home?0:(h=S.value)==null?void 0:h.id,$=await le({branchId:A,serviceId:p.id}),x=(Array.isArray($)?$:[]).map(_=>({id:_.id,name:E(_)}));B[p.id]=[...new Map(x.map(_=>[String(_.id),_])).values()],e.staffOptions[p.id]=B[p.id],K()}catch{B[p.id]=[]}finally{L[p.id]=!1}}}function sr(){k.value.forEach(Z)}return Mr(sr),or(()=>k.value.map(p=>p.id),sr),or(()=>e.mode,K),(p,d)=>(t(),i(V,null,[d[14]||(d[14]=r("div",{class:"panel-head"},[r("h1",null,"اختر الموظف"),r("p",null,"اختر موظفًا واحدًا لكل قسم، وسيتم تطبيقه على كل الخدمات المختارة داخل هذا القسم")],-1)),r("div",Je,[r("div",{class:Y(["mode dark",{sel:n(e).mode==="auto"}]),role:"button",tabindex:"0","aria-pressed":n(e).mode==="auto",onClick:d[0]||(d[0]=h=>F("auto")),onKeydown:[d[1]||(d[1]=kr(h=>F("auto"),["enter"])),d[2]||(d[2]=kr(_r(h=>F("auto"),["prevent"]),["space"]))]},[d[7]||(d[7]=fr('<span class="chk"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"></path></svg></span><span class="mi"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="m13 2-9 12h7l-1 8 10-13h-7l0-7Z"></path></svg></span><h3>اختيار تلقائي</h3><div class="sub-t">سنختار لك أفضل فريق متاح</div><span class="flag">★ موصى به</span>',5)),r("ul",null,[(t(),i(V,null,J(H,(h,A)=>r("li",{key:A},[d[6]||(d[6]=r("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.6"},[r("path",{d:"M20 6L9 17l-5-5"})],-1)),M(" "+s(h),1)])),64))])],42,Ze),r("div",{class:Y(["mode",{sel:n(e).mode==="manual"}]),role:"button",tabindex:"0","aria-pressed":n(e).mode==="manual",onClick:d[3]||(d[3]=h=>F("manual")),onKeydown:[d[4]||(d[4]=kr(h=>F("manual"),["enter"])),d[5]||(d[5]=kr(_r(h=>F("manual"),["prevent"]),["space"]))]},[d[9]||(d[9]=fr('<span class="chk"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" stroke-width="3"><path d="M20 6L9 17l-5-5"></path></svg></span><span class="mi"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span><h3>اختيار موظف محدد</h3><div class="sub-t">اختر موظفًا لكل قسم</div><span class="flag">تحكم كامل</span>',5)),r("ul",null,[(t(),i(V,null,J(j,(h,A)=>r("li",{key:A},[d[8]||(d[8]=r("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.6"},[r("path",{d:"M20 6L9 17l-5-5"})],-1)),M(" "+s(h),1)])),64))])],42,rn)]),n(e).mode==="manual"?(t(),i("div",en,[(t(!0),i(V,null,J(m.value,h=>(t(),i("div",{key:h.id,class:"emp-row emp-row--group",style:$r(G(h))},[r("div",nn,[r("span",tn,[(t(),i("svg",{viewBox:"0 0 24 24","aria-hidden":"true",innerHTML:n(Dr)(h.icon)},null,8,an))]),r("span",on,[r("b",null,s(h.name),1),r("small",null,s(v(h)),1),r("span",sn,s(z(h)),1)])]),I(h)?(t(),i("div",ln,[hr(jr,{height:"44px","border-radius":"8px"})])):T(h).length?(t(),i("div",pn,[r("button",{type:"button",class:"emp any",onClick:_r(A=>N(h,T(h)[0]),["stop"])},[...d[10]||(d[10]=[fr('<span class="av" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span><b>أي موظف</b><span class="rate">الأنسب تلقائيًا</span>',3)])],8,cn),(t(!0),i(V,null,J(T(h),A=>(t(),i("button",{key:A.id,type:"button",class:Y(["emp",{sel:y(h,A)}]),onClick:_r($=>N(h,A),["stop"])},[d[11]||(d[11]=r("span",{class:"chk"},[r("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"#fff","stroke-width":"3"},[r("path",{d:"M20 6L9 17l-5-5"})])],-1)),d[12]||(d[12]=r("span",{class:"av","aria-hidden":"true"},null,-1)),r("b",null,s(A.name),1)],10,gn))),128))])):(t(),i("div",dn,"لا يوجد موظف متاح يمكنه تنفيذ كل خدمات هذا القسم"))],4))),128))])):R("",!0),n(e).mode==="auto"?(t(),i("div",un,[...d[13]||(d[13]=[fr('<span style="flex:none;width:44px;height:44px;border-radius:13px;display:grid;place-items:center;background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M13 2L3 14h9l-1 8 10-12h-9z"></path></svg></span><p style="font-size:13.5px;color:#5c5442;line-height:1.9;"><b style="color:var(--ink);">تم اختيار موظف واحد مناسب لكل قسم تلقائيًا.</b> سيتم تنفيذ كل خدمات القسم بنفس الموظف، وتقدر تشوف الأوقات في الخطوة الجاية.</p>',2)])])):R("",!0)],64))}},mn={class:"card branch-strip"},hn={class:"cells"},bn={class:"cell"},fn={class:"cell"},vn={class:"loyalty-preview","aria-live":"polite"},yn={class:"card cal"},wn={class:"cal-head"},kn={class:"cal-cells"},_n=["disabled","onClick"],zn={class:"dow"},$n={class:"dnum"},Mn={key:0,class:"empty-hint",style:{"margin-top":"10px"}},Cn={class:"date-line"},Sn={class:"card detail-card time-start-card",style:{"margin-top":"14px"}},Fn={class:"periods booking-periods"},Bn={key:1,class:"empty-hint"},Ln={key:2,class:"empty-hint"},An={key:3,class:"empty-hint"},En={key:4,class:"slots initial-slots"},Tn=["onClick"],Dn={key:0,class:"tag"},jn={key:5,class:"best-slot"},Nn={key:0,class:"session-plan"},Pn={class:"plan-track"},Hn={key:0,class:"plan-gap"},In={class:"plan-icon"},Vn=["innerHTML"],Yn={class:"t"},Rn={key:0,class:"plan-note plan-note--pending"},qn={key:1,class:"plan-note plan-note--warn"},On={key:2,class:"plan-note"},Gn={__name:"TimeStep",setup(ir){const e=["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],k=["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],{state:f,selSvcs:S,totalDur:B,priceParts:L,setEmployee:H,setTime:j}=pr(),m=ar(5),E=b(()=>Math.floor(L.value.total/100)*m.value),G=new Date;G.setHours(0,0,0,0);const v=ar(new Date(G)),z=ar("all"),T=zr({}),I=zr({}),c=zr({}),y=b(()=>Array.from({length:7},(o,a)=>{const l=new Date(v.value);return l.setDate(l.getDate()+a),l}));b(()=>v.value.getTime()<=G.getTime());const u=b(()=>{const o=y.value;return o[0].getMonth()===o[6].getMonth()?`${o[0].getDate()} - ${o[6].getDate()} ${k[o[0].getMonth()]}`:`${o[0].getDate()} ${k[o[0].getMonth()]} - ${o[6].getDate()} ${k[o[6].getMonth()]}`}),g=o=>o<G,C=o=>f.date&&o.getTime()===f.date.getTime(),K=b(()=>{const o=new Map;return S.value.forEach(a=>{const l=String(a.categoryId??a.categoryName??a.id);o.has(l)||o.set(l,{id:l,name:a.categoryName||a.name,icon:a.icon||Hr(a.categoryId),services:[]}),o.get(l).services.push(a)}),[...o.values()]}),F=b(()=>K.value.flatMap(o=>o.services)),N=b(()=>F.value[0]||null);b(()=>K.value[0]||null);const Z=b(()=>N.value?f.time[N.value.id]:"");function sr(o){return`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}-${String(o.getDate()).padStart(2,"0")}`}function p(o){if(!o||typeof o!="string")return null;const[a,l]=o.split(":").map(Number);return!Number.isFinite(a)||!Number.isFinite(l)?null:a*60+l}function d(o){if(!Number.isFinite(o))return"";const a=1440,l=(Math.round(o)%a+a)%a;return`${String(Math.floor(l/60)).padStart(2,"0")}:${String(l%60).padStart(2,"0")}`}function h(o){return[...new Set((Array.isArray(o)?o:[]).filter(a=>p(a)!==null))].sort((a,l)=>p(a)-p(l))}function A(o){F.value.slice(o).forEach(a=>{delete f.time[a.id]})}function $(o,{apply:a=!1}={}){var P;const l=p(o),O=F.value;if(!O.length||l===null)return{complete:!1,rows:[],end:""};let er=l;const X=[];for(let Q=0;Q<O.length;Q++){const W=O[Q],lr=h(T[W.id]),dr=Q===0?lr.includes(o)?o:lr.find(xr=>p(xr)>=er):lr.find(xr=>p(xr)>=er);if(!dr){a&&A(Q);const xr=X[X.length-1];return{complete:!1,rows:X,missing:W,end:(xr==null?void 0:xr.end)||""}}const Vr=p(dr),Yr=Vr+(Number(W.dur)||0);X.push({service:W,start:dr,end:d(Yr),expected:d(er),shifted:Vr>er}),a&&j(W.id,dr),a&&f.mode==="auto"&&((P=I[W.id])!=null&&P[dr])&&H(W.id,I[W.id][dr]),er=Yr}return{complete:!0,rows:X,end:d(er)}}function x(){Z.value&&$(Z.value,{apply:!0})}function _(o){$(o,{apply:!0})}function nr(o){return{"--acc":Ir(o.icon)}}function Cr(o){return o.services.reduce((a,l)=>a+(Number(l.dur)||0),0)}function Sr(o){const a=o.services.map(O=>f.emp[O.id]).filter(Boolean);if(!a.length)return null;const l=a[0];return a.every(O=>String(O.id)===String(l.id)),l}function D(o){return`${o.services.length} ${o.services.length===1?"خدمة":"خدمات"}`}function w(o){g(o)||(f.date=o,f.time={},Object.keys(T).forEach(a=>{delete T[a]}))}async function U(o){var O;const a=f.emp[o.id];if(!f.date||!a){delete T[o.id];return}const l=sr(f.date);c[o.id]=!0;try{const er=f.mode==="auto"?f.staffOptions[o.id]||[]:[a],X=await Promise.all(er.filter(W=>(W==null?void 0:W.id)!=null).map(async W=>({candidate:W,times:await de({date:l,staffId:W.id,durationMin:o.dur}).catch(()=>[])}))),P={};X.forEach(({candidate:W,times:lr})=>{h(lr).forEach(dr=>{P[dr]||(P[dr]=W)})});const Q=Object.keys(P);f.date&&sr(f.date)===l&&((O=f.emp[o.id])==null?void 0:O.id)===a.id&&(T[o.id]=h(Q),I[o.id]=P,x())}catch{T[o.id]=[],x()}finally{c[o.id]=!1}}or(()=>f.date,()=>{z.value="all",S.value.forEach(U)}),or(()=>S.value.map(o=>{var a;return`${o.id}:${(a=f.emp[o.id])==null?void 0:a.id}`}),()=>S.value.forEach(U)),Mr(async()=>{var o;S.value.forEach(U);try{const a=await Gr();m.value=Math.max(Number((o=a==null?void 0:a.data)==null?void 0:o.points_per_100)||5,1)}catch{}});const rr=b(()=>f.date?`${e[f.date.getDay()]} ${f.date.getDate()} ${k[f.date.getMonth()]} ${f.date.getFullYear()}`:"اختر تاريخًا من التقويم"),cr=b(()=>N.value&&c[N.value.id]),br=b(()=>N.value?h(T[N.value.id]):[]),yr=b(()=>br.value.filter(o=>{const a=p(o);return z.value==="am"?a<720:z.value==="pm"?a>=720:!0})),Fr=b(()=>!!f.date&&F.value.every(o=>Array.isArray(T[o.id])&&!c[o.id])),wr=b(()=>!!Z.value&&F.value.some(o=>c[o.id]||!Array.isArray(T[o.id]))),Br=b(()=>Z.value?F.value.find(o=>!f.time[o.id]):null),ur=b(()=>Fr.value&&br.value.find(o=>$(o).complete)||""),Lr=b(()=>{const o=[];let a=null;return K.value.forEach(l=>{const O=l.services.map(lr=>p(f.time[lr.id])),er=O.every(lr=>lr!==null),X=O[0];if(!er){o.push({type:"group",key:`group-${l.id}`,group:l,name:l.name,icon:l.icon,style:nr(l),duration:Cr(l),services:l.services,employee:Sr(l),pending:!0});return}a!==null&&X>a&&o.push({type:"gap",key:`gap-${o.length}`,start:d(a),end:d(X),duration:X-a});const P=l.services[l.services.length-1],W=p(f.time[P.id])+(Number(P.dur)||0);o.push({type:"group",key:`group-${l.id}`,group:l,name:l.name,icon:l.icon,style:nr(l),start:d(X),end:d(W),duration:Cr(l),services:l.services,employee:Sr(l),pending:!1}),a=W}),o}),Ar=b(()=>{const o=Lr.value.filter(l=>l.type==="group"&&!l.pending),a=o[o.length-1];return(a==null?void 0:a.end)||""});return(o,a)=>(t(),i(V,null,[a[17]||(a[17]=r("div",{class:"panel-head"},[r("h1",null,"اختر وقت بداية الجلسة"),r("p",null,"اختر أول موعد فقط، وسيتم ترتيب باقي الأقسام تلقائيًا حسب مدة كل قسم والأوقات المتاحة.")],-1)),r("div",mn,[a[6]||(a[6]=r("div",{class:"bi"},[r("b",null,"ملخص جلستك"),r("small",null,"قبل اختيار الوقت")],-1)),r("div",hn,[r("div",bn,[r("b",null,s(n(S).length),1),a[4]||(a[4]=M("الخدمات",-1))]),r("div",fn,[r("b",null,s(n(gr)(n(B))),1),a[5]||(a[5]=M("المدة الإجمالية",-1))])])]),r("div",vn,[a[9]||(a[9]=r("h3",null,[r("span",{"aria-hidden":"true"},"✨"),M(" مكافأة نقاط الولاء لهذه الجلسة")],-1)),r("p",null,[a[7]||(a[7]=M("ستحصل على ",-1)),r("b",null,s(n(q)(E.value))+" نقطة ولاء",1),a[8]||(a[8]=M(" عند إتمام هذا الحجز.",-1))]),r("strong",null,"يمنحك نظام الولاء "+s(n(q)(m.value))+" نقطة مقابل كل 100 ر.س مدفوعة.",1)]),r("div",yn,[r("div",wn,[r("b",null,s(u.value),1)]),r("div",kn,[(t(!0),i(V,null,J(y.value,(l,O)=>(t(),i("button",{key:O,disabled:g(l),class:Y({sel:C(l),avail:!g(l)}),onClick:er=>w(l)},[r("span",zn,s(e[l.getDay()].slice(0,3)),1),r("span",$n,s(l.getDate()),1)],10,_n))),128))]),a[10]||(a[10]=r("div",{class:"cal-legend"},[r("span",null,[r("i",{style:{background:"var(--green)"}}),M(" تتوفر مواعيد")]),r("span",null,[r("i",{style:{background:"#D8D0BC"}}),M(" غير متاح")])],-1))]),n(f).date?(t(),i(V,{key:1},[r("div",Cn,"📅 "+s(rr.value),1),r("div",Sn,[a[13]||(a[13]=r("h4",null,[M("وقت بداية الجلسة "),r("small",{style:{"font-weight":"400",color:"var(--mute)"}},"سننسق باقي الأقسام بعده")],-1)),R("",!0),r("div",Fn,[r("button",{class:Y(["period",{sel:z.value==="all"}]),onClick:a[0]||(a[0]=l=>z.value="all")},"🗓️ كل اليوم",2),r("button",{class:Y(["period",{sel:z.value==="am"}]),onClick:a[1]||(a[1]=l=>z.value="am")},"☀️ صباحًا",2),r("button",{class:Y(["period",{sel:z.value==="pm"}]),onClick:a[2]||(a[2]=l=>z.value="pm")},"🌇 مساءً",2)]),a[14]||(a[14]=r("div",{class:"available-times-title"},"الأوقات المتاحة",-1)),cr.value||N.value&&!Array.isArray(T[N.value.id])?(t(),i("div",Bn,[hr(jr,{height:"44px","border-radius":"8px"})])):br.value.length?yr.value.length?(t(),i("div",En,[(t(!0),i(V,null,J(yr.value,l=>(t(),i("button",{key:l,class:Y(["slot",{sel:Z.value===l}]),onClick:O=>_(l)},[ur.value===l?(t(),i("span",Dn,"الأفضل")):R("",!0),M(" "+s(n(tr)(l)),1)],10,Tn))),128))])):(t(),i("div",An,"لا توجد أوقات في هذه الفترة")):(t(),i("div",Ln,"لا توجد أوقات متاحة لهذا اليوم")),ur.value&&Z.value!==ur.value?(t(),i("div",jn,[r("span",null,[a[12]||(a[12]=M("أفضل بداية متاحة اليوم: ",-1)),r("b",null,s(n(tr)(ur.value)),1)]),r("button",{onClick:a[3]||(a[3]=l=>_(ur.value))},"اختيار")])):R("",!0)]),Z.value?(t(),i("div",Nn,[a[16]||(a[16]=r("h4",null,[r("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[r("path",{d:"M13 2L3 14h7l-1 8 10-12h-7l1-8z"})]),M(" خطة تنفيذ الجلسة ")],-1)),r("div",Pn,[(t(!0),i(V,null,J(Lr.value,l=>{var O;return t(),i(V,{key:l.key},[l.type==="gap"?(t(),i("div",Hn,[a[15]||(a[15]=r("span",null,"فاصل انتظار",-1)),r("b",null,s(n(tr)(l.start))+" - "+s(n(tr)(l.end)),1),r("small",null,s(n(gr)(l.duration)),1)])):(t(),i("div",{key:1,class:Y(["plan-item plan-item--group",{pending:l.pending}]),style:$r(l.style)},[r("span",In,[(t(),i("svg",{viewBox:"0 0 24 24","aria-hidden":"true",innerHTML:n(Dr)(l.icon)},null,8,Vn))]),r("b",null,s(l.name),1),r("small",null,"مع "+s(((O=l.employee)==null?void 0:O.name)||"-"),1),r("span",Yn,s(l.pending?"بانتظار وقت متاح":`${n(tr)(l.start)} - ${n(tr)(l.end)}`),1),r("small",null,s(D(l.group))+" · "+s(n(gr)(l.duration)),1)],6))],64)}),128))]),wr.value?(t(),i("div",Rn,"جاري تنسيق باقي الأقسام حسب الأوقات المتاحة.")):Br.value?(t(),i("div",qn,"لم نجد وقتًا متاحًا لـ "+s(Br.value.name)+" بعد هذا الموعد. اختر بداية أبكر أو يومًا آخر.",1)):(t(),i("div",On,"تم تنسيق الجلسة تلقائيًا، والنهاية المتوقعة "+s(n(tr)(Ar.value))+".",1))])):R("",!0)],64)):(t(),i("div",Mn,[...a[11]||(a[11]=[r("b",null,"ابدأ باختيار التاريخ",-1),M("اختر يومًا من التقويم لعرض الأوقات المتاحة",-1)])]))],64))}},Kn={class:"card detail-card"},Un={class:"d-grid"},Wn={class:"d-cell"},Xn={class:"d-cell"},Qn={class:"d-cell"},Jn={class:"d-cell"},Zn={class:"card detail-card"},rt={class:"timeline-cards"},et={class:"tl-main"},nt={class:"with"},tt={class:"tl-time"},at={class:"tm"},ot={class:"dr"},it={key:0,class:"card detail-card products-detail-card"},st={class:"upsell"},lt=["src","alt"],dt={class:"inf"},pt={class:"p"},ct=["disabled","onClick"],gt={__name:"ConfirmStep",setup(ir){const{state:e,selSvcs:k,totalDur:f}=pr(),{current:S}=vr(),{user:B,isAuthenticated:L}=qr(),{state:H,products:j,addToCart:m,setQty:E}=Jr();Mr(()=>{L.value&&B.value&&!e.cust.name&&(e.cust.name=[B.value.first_name,B.value.last_name].filter(Boolean).join(" "),e.cust.phone=B.value.mobile||"",e.cust.mail=B.value.email||"")});const G=b(()=>e.date?Nr(e.date):""),v=b(()=>{const c=new Map;k.value.forEach(u=>{const g=String(u.categoryId??u.categoryName??u.id);c.has(g)||c.set(g,{id:g,name:u.categoryName||u.name,services:[]}),c.get(g).services.push(u)});const y=u=>{if(!u)return Number.MAX_SAFE_INTEGER;const[g,C]=String(u).split(":").map(Number);return Number.isFinite(g)&&Number.isFinite(C)?g*60+C:Number.MAX_SAFE_INTEGER};return[...c.values()].map(u=>{var K;const g=[...u.services].sort((F,N)=>y(e.time[F.id])-y(e.time[N.id])),C=[...new Set(g.map(F=>{var N;return(N=e.emp[F.id])==null?void 0:N.name}).filter(Boolean))];return{...u,services:g,start:e.time[(K=g[0])==null?void 0:K.id]||"",duration:g.reduce((F,N)=>F+(Number(N.dur)||0),0),price:g.reduce((F,N)=>F+(Number(N.price)||0),0),employees:C}}).sort((u,g)=>y(u.start)-y(g.start))}),z=b(()=>{const c=j.value.slice(0,3);return c.length?c.map(y=>({id:y.id,name:y.n,desc:y.d,price:y.pr,img:y.image||y.img||"/images/generated/products/care-set-card-hq.png"})):fe.map(y=>({id:null,name:y.name,desc:y.desc,price:y.price,img:y.img||"/images/generated/products/care-set-card-hq.png"}))});function T(c){return c.id!=null&&!!H.cart[c.id]}function I(c){c.id!=null&&(T(c)?E(c.id,0):m(c.id))}return(c,y)=>{var u;return Or("RouterLink"),t(),i(V,null,[y[20]||(y[20]=r("div",{class:"panel-head"},[r("h1",null,"تأكيد الحجز"),r("p",null,"راجع تفاصيل جلستك قبل تأكيد الحجز والدفع")],-1)),r("div",Kn,[y[8]||(y[8]=r("h4",null,[r("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[r("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),r("path",{d:"M16 2v4M8 2v4M3 10h18"})]),M(" تفاصيل الموعد")],-1)),r("div",Un,[r("div",Wn,[y[4]||(y[4]=r("small",null,"📍 الفرع",-1)),r("b",null,s(((u=n(S))==null?void 0:u.name)||"—"),1)]),r("div",Xn,[y[5]||(y[5]=r("small",null,"📅 التاريخ",-1)),r("b",null,s(G.value),1)]),r("div",Qn,[y[6]||(y[6]=r("small",null,"⏱️ المدة الإجمالية",-1)),r("b",null,s(n(gr)(n(f))),1)]),r("div",Jn,[y[7]||(y[7]=r("small",null,"✂️ عدد الخدمات",-1)),r("b",null,s(n(k).length),1)])])]),r("div",Zn,[y[9]||(y[9]=r("h4",null,[r("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[r("circle",{cx:"12",cy:"12",r:"9"}),r("path",{d:"M12 7v5l3 3"})]),M(" تفاصيل الجلسة")],-1)),r("div",rt,[(t(!0),i(V,null,J(v.value,g=>(t(),i("div",{key:g.id,class:"tl"},[r("div",et,[r("b",null,s(g.name),1),r("div",nt,"مع "+s(g.employees.join("، ")||"—"),1)]),r("div",tt,[r("span",at,s(n(tr)(g.start)),1),r("span",ot,s(g.duration)+" دقيقة · "+s(n(q)(g.price))+" ر.س",1)])]))),128))])]),z.value.length?(t(),i("div",it,[y[10]||(y[10]=r("h4",null,[r("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[r("path",{d:"M12 2l2.9 6.2 6.6.8-4.9 4.6 1.3 6.6L12 17l-5.9 3.2 1.3-6.6L2.5 9l6.6-.8z"})]),M(" منتجات مناسبة لجلستك")],-1)),r("div",st,[(t(!0),i(V,null,J(z.value,g=>(t(),i("div",{key:g.id||g.name,class:Y(["up",{added:T(g)}])},[r("img",{src:g.img,alt:g.name,loading:"lazy"},null,8,lt),r("span",dt,[r("b",null,s(g.name),1),r("small",null,s(g.desc),1),r("span",pt,s(n(q)(g.price))+" ر.س",1)]),r("button",{type:"button",disabled:g.id==null,onClick:C=>I(g)},s(T(g)?"✓ أضيف":"إضافة"),9,ct)],2))),128))])])):R("",!0),R("",!0)],64)}}},ut={class:"card detail-card"},xt={key:0,class:"cod-deposit-alert"},mt={class:"card detail-card payment-rewards-card"},ht={class:"rewards"},bt={class:"rt"},ft={class:"ri"},vt=["innerHTML"],yt=["max","value","disabled"],wt={class:"hint"},kt={class:"rt"},_t={class:"ri"},zt=["innerHTML"],$t=["max","value","disabled"],Mt={class:"hint"},Ct={class:"coupon"},St={class:"ci"},Ft=["innerHTML"],Bt=["onKeydown"],Lt=["disabled"],At={class:"reward-total"},Et={key:0},Tt={class:"trust-row"},Dt={class:"ti"},jt=["innerHTML"],Nt={__name:"PayStep",setup(ir){const{state:e,priceParts:k,pointValue:f,couponDiscount:S,walletDiscount:B,loyaltyPointsUsed:L,loyaltyDiscount:H,payableTotal:j}=pr(),m=ar(!1);Mr(async()=>{var $,x;try{const _=await he(),nr=(($=_==null?void 0:_.data)==null?void 0:$.balances)||{};e.walletBalance=Number(nr.wallet??0),e.loyaltyPoints=Number(nr.loyalty_points??0)}catch{}try{const _=await Gr();e.pointValue=Number(((x=_==null?void 0:_.data)==null?void 0:x.point_value)??.5)||.5}catch{}});const E=b(()=>Math.max(Number(e.walletBalance)||0,0)),G=b(()=>Math.max(parseInt(e.loyaltyPoints,10)||0,0)),v=b(()=>Math.max(k.value.total-S.value,0)),z=b(()=>Math.min(B.value,v.value)),T=b(()=>Math.max(k.value.total-S.value-z.value,0)),I=b(()=>Math.min(G.value,Math.ceil(T.value/f.value))),c=b(()=>z.value>0||L.value>0),y=b(()=>Math.round(k.value.total*.3)),u=b(()=>E.value>=y.value),g=b(()=>me.methods({total:k.value.total,walletBalance:E.value,payable:j.value,hasRewards:c.value}));or(g,$=>{e.pay&&!$.some(x=>x.id===e.pay&&x.enabled)&&(e.pay=null)},{immediate:!0}),or([u,c,j],()=>{c.value&&e.pay==="cod"?e.pay=j.value>0?"card":null:!u.value&&e.pay==="cod"&&(e.pay=null)});const C=[["ضمان الجودة","نضمن لك أفضل تجربة",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>'],["دفع آمن","تقنيات تشفير متقدمة",'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>'],["حماية البيانات","بياناتك محمية بالكامل",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'],["دعم فوري","فريق دعم جاهز لخدمتك",'<path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>']],K={wallet:'<path d="M18 8V7a2 2 0 00-2-2H5a2 2 0 000 4h14a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2V7"/><path d="M16 13h.01"/>',gift:'<path d="M20 12v8H4v-8"/><path d="M2 7h20v5H2z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 110-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 100-5C13 2 12 7 12 7z"/>',coupon:'<path d="M4 7a2 2 0 012-2h12a2 2 0 012 2v3a2 2 0 000 4v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3a2 2 0 000-4z"/><path d="M9 9h.01M15 15h.01M16 8l-8 8"/>'};function F($,x){const _=Number($);return Number.isFinite(_)?Math.max(0,Math.min(_,x)):0}function N(){e.rewards.useWallet=!e.rewards.useWallet,e.rewards.useWallet?e.rewards.walletAmount=F(e.rewards.walletAmount||v.value,Math.min(E.value,v.value)):e.rewards.walletAmount=0}function Z($){e.rewards.walletAmount=F($,Math.min(E.value,v.value)),e.rewards.useWallet=e.rewards.walletAmount>0}function sr(){e.rewards.useLoyalty=!e.rewards.useLoyalty,e.rewards.useLoyalty?e.rewards.loyaltyPoints=Math.min(e.rewards.loyaltyPoints||I.value,I.value):e.rewards.loyaltyPoints=0}function p($){const x=Math.max(0,Math.min(parseInt($,10)||0,I.value));e.rewards.loyaltyPoints=x,e.rewards.useLoyalty=x>0}function d($){const _=($==null?void 0:$.discount_type)==="percent"?k.value.total*(Number($==null?void 0:$.discount_percentage)||0)/100:Number($==null?void 0:$.discount_amount)||0;return Math.min(Math.max(_,0),k.value.total)}async function h(){const $=e.rewards.couponCode.trim();if(!$){e.rewards.couponStatus="bad",e.rewards.couponMessage="أدخل كود الخصم أولًا";return}m.value=!0;try{const x=await ce($);if(!(x!=null&&x.valid)){e.rewards.couponApplied="",e.rewards.couponDiscount=0,e.rewards.couponStatus="bad",e.rewards.couponMessage="كود الخصم غير صالح";return}const _=d(x);e.rewards.couponCode=$,e.rewards.couponApplied=$,e.rewards.couponDiscount=_,e.rewards.couponStatus="ok",e.rewards.couponMessage=`تم تطبيق خصم ${q(Math.round(_))} ر.س`}catch(x){e.rewards.couponStatus="bad",e.rewards.couponMessage=x.message||"تعذّر التحقق من الكوبون"}finally{m.value=!1}}function A(){e.rewards.couponApplied="",e.rewards.couponDiscount=0,e.rewards.couponStatus="",e.rewards.couponMessage=""}return or([E,v],()=>{e.rewards.useWallet&&Z(e.rewards.walletAmount)}),or(I,()=>{e.rewards.useLoyalty&&p(e.rewards.loyaltyPoints)}),($,x)=>(t(),i(V,null,[x[13]||(x[13]=r("div",{class:"panel-head"},[r("h1",null,"الدفع"),r("p",null,"اختر طريقة الدفع المناسبة وأكمل حجزك")],-1)),r("div",ut,[x[7]||(x[7]=r("h4",null,"اختر طريقة الدفع",-1)),hr(pe,{modelValue:n(e).pay,"onUpdate:modelValue":x[0]||(x[0]=_=>n(e).pay=_),methods:g.value},null,8,["modelValue","methods"]),!u.value&&!c.value?(t(),i("div",xt,[x[5]||(x[5]=M(" 💡 ",-1)),x[6]||(x[6]=r("b",null,"ملاحظة الدفع عند الوصول:",-1)),M(" يتطلب توفر عربون بنسبة 30% ("+s(n(q)(y.value))+" ر.س) في رصيد محفظتك لتأكيد الحجز. رصيدك الحالي: "+s(n(q)(E.value))+" ر.س. ",1)])):R("",!0),x[8]||(x[8]=r("div",{class:"secure-line"},"🔒 جميع عمليات الدفع آمنة ومشفرة",-1))]),r("div",mt,[x[12]||(x[12]=r("h4",null,[r("span",{class:"step-dot"},"2"),M(" استخدام العروض و المكافآت")],-1)),r("div",ht,[r("div",{class:Y(["rw",{on:n(e).rewards.useWallet}])},[r("div",bt,[r("span",ft,[(t(),i("svg",{width:"19",height:"19",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:K.wallet},null,8,vt))]),r("span",null,[x[9]||(x[9]=r("b",null,"استخدام من المحفظة",-1)),r("small",null,"الرصيد الحالي: "+s(n(q)(E.value))+" ر.س",1)]),r("span",{class:Y(["switch",{on:n(e).rewards.useWallet}]),onClick:N},null,2)]),r("input",{type:"number",min:"0",max:Math.min(E.value,v.value),step:"1",value:n(e).rewards.walletAmount,disabled:!n(e).rewards.useWallet,onInput:x[1]||(x[1]=_=>Z(_.target.value))},null,40,yt),r("span",wt,"المبلغ المتاح حتى "+s(n(q)(Math.round(Math.min(E.value,v.value))))+" ر.س",1)],2),r("div",{class:Y(["rw",{on:n(e).rewards.useLoyalty}])},[r("div",kt,[r("span",_t,[(t(),i("svg",{width:"19",height:"19",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:K.gift},null,8,zt))]),r("span",null,[x[10]||(x[10]=r("b",null,"استخدام نقاط الولاء",-1)),r("small",null,"لديك "+s(n(q)(G.value))+" نقطة",1)]),r("span",{class:Y(["switch",{on:n(e).rewards.useLoyalty}]),onClick:sr},null,2)]),r("input",{type:"number",min:"0",max:I.value,step:"1",value:n(e).rewards.loyaltyPoints,disabled:!n(e).rewards.useLoyalty,onInput:x[2]||(x[2]=_=>p(_.target.value))},null,40,$t),r("span",Mt,"تساوي خصم "+s(n(q)(Math.round(n(L)*n(f))))+" ر.س",1)],2)]),r("div",Ct,[r("span",St,[(t(),i("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:K.coupon},null,8,Ft))]),Tr(r("input",{"onUpdate:modelValue":x[3]||(x[3]=_=>n(e).rewards.couponCode=_),placeholder:"أدخل كود الخصم",onInput:x[4]||(x[4]=_=>n(e).rewards.couponApplied&&n(e).rewards.couponCode!==n(e).rewards.couponApplied?A():null),onKeydown:kr(_r(h,["prevent"]),["enter"])},null,40,Bt),[[re,n(e).rewards.couponCode]]),n(e).rewards.couponApplied?(t(),i("button",{key:0,type:"button",class:"coupon-clear",onClick:A},"إلغاء")):R("",!0),r("button",{type:"button",onClick:h,disabled:m.value},s(m.value?"...":"تطبيق"),9,Lt)]),n(e).rewards.couponMessage?(t(),i("p",{key:0,class:Y(["coupon-msg",n(e).rewards.couponStatus])},s(n(e).rewards.couponMessage),3)):R("",!0),r("div",At,[x[11]||(x[11]=r("span",null,"المبلغ بعد المكافآت",-1)),r("b",null,s(n(q)(Math.round(n(j))))+" ر.س",1),n(S)||z.value||n(H)?(t(),i("small",Et," تم خصم "+s(n(q)(Math.round(n(S)+z.value+n(H))))+" ر.س ",1)):R("",!0)])]),r("div",Tt,[(t(),i(V,null,J(C,(_,nr)=>r("div",{key:nr,class:"trust"},[r("span",Dt,[(t(),i("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7",innerHTML:_[2]},null,8,jt))]),r("b",null,s(_[0]),1),r("small",null,s(_[1]),1)])),64))])],64))}},Pt=Zr(Nt,[["__scopeId","data-v-fb1ff1a1"]]),Ht={class:"success-wrap"},It={class:"suc-grid"},Vt={class:"card suc-details"},Yt={class:"sd-row"},Rt={class:"k"},qt=["innerHTML"],Ot={class:"v"},Gt={class:"sd-row"},Kt={class:"k"},Ut=["innerHTML"],Wt={class:"v"},Xt={class:"sd-row"},Qt={class:"k"},Jt=["innerHTML"],Zt={class:"v"},ra={class:"sd-row"},ea={class:"k"},na=["innerHTML"],ta={class:"v"},aa={class:"sd-row"},oa={class:"k"},ia=["innerHTML"],sa={class:"v"},la={class:"sd-row"},da={class:"k"},pa=["innerHTML"],ca={class:"card qr-card"},ga={class:"code"},ua={class:"suc-actions"},xa={class:"suc-perks"},ma={class:"ti"},ha=["innerHTML"],ba="color:var(--gold-deep);font-family:var(--font-d);font-size:17px",fa={__name:"BookingSuccess",emits:["home","calendar","share"],setup(ir,{emit:e}){const{state:k,selSvcs:f,totalDur:S,priceParts:B}=pr(),{current:L}=vr(),H=e,j=b(()=>B.value),m=b(()=>k.date?Nr(k.date):""),E=b(()=>[...new Set(f.value.map(I=>{var c;return(c=k.emp[I.id])==null?void 0:c.name}).filter(Boolean))]),G=b(()=>{var I;return{r:k.bookRef||"",b:((I=L.value)==null?void 0:I.name)||"",d:m.value,u:gr(S.value),e:E.value.join("، "),p:j.value.total,s:f.value.map(c=>{var y;return[c.name,tr(k.time[c.id]),((y=k.emp[c.id])==null?void 0:y.name)||"",c.price]})}}),v=b(()=>oe(G.value)),z={pin:'<path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>',cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>',scis:'<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"/>',user:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',card:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>'},T=[["خدمة VIP","تجربة فاخرة مصممة لراحتك",'<path d="M2 8l4 4 6-8 6 8 4-4v10a2 2 0 01-2 2H4a2 2 0 01-2-2z"/>'],["بياناتك آمنة","نضمن لك خصوصية وأمان بياناتك",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'],["تعديل الحجز","يمكنك تعديل أو إلغاء الحجز قبل موعده",'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>'],["دعم عملاء 24/7","نحن هنا لخدمتك دائمًا",'<path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>']];return(I,c)=>{var y;return t(),i("div",Ht,[c[14]||(c[14]=fr('<div class="suc-ic"><span class="spark s1">✦</span><span class="spark s2">✧</span><svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M20 6L9 17l-5-5"></path></svg></div><h1>تم تأكيد حجزك بنجاح!</h1><p class="sub">نتطلع لخدمتك وتقديم تجربة استثنائية تليق بك</p>',3)),r("div",It,[r("div",Vt,[c[9]||(c[9]=r("h4",null,"تفاصيل الحجز",-1)),r("div",Yt,[r("span",Rt,[(t(),i("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:z.pin},null,8,qt)),c[3]||(c[3]=M(" الفرع",-1))]),r("span",Ot,s(((y=n(L))==null?void 0:y.name)||"—"),1)]),r("div",Gt,[r("span",Kt,[(t(),i("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:z.cal},null,8,Ut)),c[4]||(c[4]=M(" التاريخ",-1))]),r("span",Wt,s(m.value),1)]),r("div",Xt,[r("span",Qt,[(t(),i("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:z.info},null,8,Jt)),c[5]||(c[5]=M(" مدة الجلسة",-1))]),r("span",Zt,s(n(gr)(n(S))),1)]),r("div",ra,[r("span",ea,[(t(),i("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:z.scis},null,8,na)),c[6]||(c[6]=M(" الخدمات",-1))]),r("span",ta,s(n(f).map(u=>`${u.name} (${n(tr)(n(k).time[u.id])})`).join(" + ")),1)]),r("div",aa,[r("span",oa,[(t(),i("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:z.user},null,8,ia)),c[7]||(c[7]=M(" الفريق",-1))]),r("span",sa,s(E.value.join("، ")),1)]),r("div",la,[r("span",da,[(t(),i("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:z.card},null,8,pa)),c[8]||(c[8]=M(" المبلغ التقديري",-1))]),r("span",{class:"v",style:ba},s(n(q)(j.value.total))+" ر.س",1)])]),r("div",ca,[c[10]||(c[10]=r("h4",{style:{"font-family":"var(--font-d)","font-size":"16px",color:"var(--ink)"}},"رقم الفاتورة",-1)),r("div",ga,s(n(k).bookRef||"—"),1),hr(ie,{url:v.value},null,8,["url"])])]),r("div",ua,[r("button",{class:"btn btn-gold",onClick:c[0]||(c[0]=u=>H("home"))},[...c[11]||(c[11]=[r("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[r("path",{d:"M3 9l9-6 9 6v11a1 1 0 01-1 1H4a1 1 0 01-1-1z"})],-1),M(" العودة إلى الرئيسية",-1)])]),r("button",{class:"btn btn-line",onClick:c[1]||(c[1]=u=>H("calendar"))},[...c[12]||(c[12]=[r("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[r("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),r("path",{d:"M16 2v4M8 2v4M3 10h18M12 14v4M10 16h4"})],-1),M(" إضافة للتقويم",-1)])]),r("button",{class:"btn btn-line",onClick:c[2]||(c[2]=u=>H("share"))},[...c[13]||(c[13]=[fr('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"></path></svg> مشاركة الحجز',2)])])]),r("div",xa,[(t(),i(V,null,J(T,(u,g)=>r("div",{key:g,class:"trust"},[r("span",ma,[(t(),i("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7",innerHTML:u[2]},null,8,ha))]),r("b",null,s(u[0]),1),r("small",null,s(u[1]),1)])),64))])])}}},va={key:0,class:"card"},ya={key:0,class:"br-img"},wa=["src","alt"],ka={key:1,class:"sum-row"},_a={class:"v"},za={key:2,class:"sum-row"},$a={class:"v"},Ma={class:"sum-row"},Ca={class:"v"},Sa={class:"sum-row"},Fa={class:"v"},Ba={key:3,class:"sum-row"},La={class:"v"},Aa={class:"sum-svcs"},Ea={class:"nm"},Ta={class:"pr"},Da=["onClick"],ja={class:"sum-price"},Na={class:"sp-row"},Pa={class:"sp-row"},Ha={class:"sp-total"},Ia={class:"v"},Va={class:"sum-note"},Ya={width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",style:{flex:"none"}},Ra={__name:"BookingSummary",setup(ir){const{state:e,selSvcs:k,totalDur:f,priceParts:S,toggleSvc:B}=pr(),{current:L}=vr(),H=ar(!1),j=b(()=>e.services.length>0);or(j,G=>{G?ee(()=>requestAnimationFrame(()=>{H.value=!0})):H.value=!1},{immediate:!0});const m=b(()=>S.value),E=b(()=>e.date?Nr(e.date):"");return(G,v)=>(t(),i("div",{id:"summary",class:Y({show:H.value})},[j.value?(t(),i("div",va,[v[13]||(v[13]=r("h3",null,[r("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"var(--gold-deep)","stroke-width":"1.8"},[r("path",{d:"M9 11l3 3L22 4"}),r("path",{d:"M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"})]),M(" ملخص الحجز")],-1)),n(L)?(t(),i("div",ya,[n(L).image?(t(),i("img",{key:0,src:n(L).image,alt:n(L).name},null,8,wa)):R("",!0)])):R("",!0),n(L)?(t(),i("div",ka,[v[0]||(v[0]=r("span",{class:"k"},"📍 الفرع",-1)),r("span",_a,s(n(L).name),1)])):R("",!0),n(e).date?(t(),i("div",za,[v[1]||(v[1]=r("span",{class:"k"},"📅 التاريخ",-1)),r("span",$a,s(E.value),1)])):R("",!0),r("div",Ma,[v[2]||(v[2]=r("span",{class:"k"},"⏱️ المدة الإجمالية",-1)),r("span",Ca,s(n(gr)(n(f))),1)]),r("div",Sa,[v[3]||(v[3]=r("span",{class:"k"},"✂️ عدد الخدمات",-1)),r("span",Fa,s(n(k).length)+" "+s(n(k).length>2?"خدمات":"خدمة"),1)]),n(e).mode?(t(),i("div",Ba,[v[4]||(v[4]=r("span",{class:"k"},"👤 الموظفون",-1)),r("span",La,s(n(e).mode==="auto"?"اختيار تلقائي ذكي":"اختيار يدوي"),1)])):R("",!0),r("div",Aa,[(t(!0),i(V,null,J(n(k),z=>(t(),i("div",{key:z.id,class:"sum-svc"},[v[6]||(v[6]=r("i",{style:{background:"var(--gold)"}},null,-1)),r("span",Ea,s(z.name),1),r("span",Ta,s(n(q)(z.price))+" ر.س",1),r("button",{class:"rm","aria-label":"حذف",onClick:T=>n(B)(z)},[...v[5]||(v[5]=[r("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[r("path",{d:"M18 6L6 18M6 6l12 12"})],-1)])],8,Da)]))),128))]),r("div",ja,[r("div",Na,[v[7]||(v[7]=r("span",null,"المجموع الفرعي",-1)),r("span",null,s(n(q)(m.value.sub))+" ر.س",1)]),r("div",Pa,[v[8]||(v[8]=r("span",null,"ضريبة القيمة المضافة (15%)",-1)),r("span",null,"+"+s(n(q)(m.value.vat))+" ر.س",1)]),r("div",Ha,[v[10]||(v[10]=r("span",{class:"k"},"المبلغ الإجمالي",-1)),r("span",Ia,[M(s(n(q)(m.value.total))+" ",1),v[9]||(v[9]=r("small",null,"ر.س",-1))])])]),r("div",Va,[(t(),i("svg",Ya,[...v[11]||(v[11]=[r("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},null,-1)])])),v[12]||(v[12]=M(" بياناتك محمية — يمكنك تعديل أو إلغاء الحجز قبل 6 ساعات من الموعد",-1))])])):R("",!0)],2))}},qa={class:"shell"},Oa={class:"wrap"},Ga={class:"panel",id:"panel"},Ka={key:0,class:"success-wrap receipt-wrap"},Ua={class:"suc-grid receipt-grid"},Wa={class:"card suc-details"},Xa={class:"sd-row"},Qa={class:"v receipt-code"},Ja={class:"sd-row"},Za={class:"v"},ro={class:"sd-row"},eo={class:"v"},no={class:"sd-row"},to={class:"v"},ao={class:"sd-row"},oo={class:"v"},io={class:"sd-row"},so={class:"card suc-details receipt-services"},lo={class:"footbar",id:"footbar"},po={class:"wrap in"},co={class:"fb-mid",id:"fbMid"},go={key:0,class:"tot"},uo=["disabled"],xo="color:var(--gold-deep);font-family:var(--font-d);font-size:17px",Mo={__name:"BookingView",setup(ir){const e=ar(null),k=ne(),{current:f,locations:S,loadServiceLocations:B,setLocation:L}=vr(),{requireAuth:H,user:j}=qr();B(),or([()=>k.query.branch,S],([D,w])=>{const U=Array.isArray(D)?D[0]:D;if(!U||!w.length)return;const rr=U==="hm"||U==="home-service"?w.find(cr=>cr.home):w.find(cr=>String(cr.id)===String(U));rr&&L(rr.id)},{immediate:!0});const{state:m,selSvcs:E,totalDur:G,priceParts:v,canProceed:z,nextLabel:T,reset:I,payableTotal:c,walletDiscount:y,loyaltyPointsUsed:u}=pr();te(be,"booking"),ae(e);const g=ar(!1),C=ar(""),K=ar(!1);function F(D){C.value=D,K.value=!0,clearTimeout(F._h),F._h=setTimeout(()=>{K.value=!1},2600)}or(()=>k.query.payment,D=>{D&&(D==="failed"?F("فشلت عملية الدفع الإلكتروني، يرجى إعادة المحاولة."):(D==="cancelled"||D==="cancel")&&F("تم إلغاء عملية الدفع."))},{immediate:!0});const N=b(()=>m.services.length>0),Z=b(()=>m.step===4?c.value:v.value.total);function sr(D){if(!D)return null;try{const w=String(D).replace(/-/g,"+").replace(/_/g,"/"),U=w.padEnd(w.length+(4-w.length%4)%4,"="),rr=JSON.parse(decodeURIComponent(escape(atob(U))));return rr&&typeof rr=="object"?rr:null}catch{return null}}const p=b(()=>sr(k.query.receipt)),d=b(()=>!!p.value),h=b(()=>{var D;return Array.isArray((D=p.value)==null?void 0:D.s)?p.value.s:[]}),A=b(()=>!d.value&&!m.done&&N.value),$=b(()=>A.value?"minmax(0,1fr) minmax(285px,315px)":"1fr");function x(){m.step>0&&(m.step--,scrollTo({top:0,behavior:"smooth"}))}function _(){if(z.value){if(m.step===4){H(Cr);return}m.step++,scrollTo({top:0,behavior:"smooth"})}}function nr(D){return`${D.getFullYear()}-${String(D.getMonth()+1).padStart(2,"0")}-${String(D.getDate()).padStart(2,"0")}`}async function Cr(){var D,w,U,rr,cr,br,yr,Fr;if(!(g.value||!z.value)){g.value=!0;try{const wr=[(D=j.value)==null?void 0:D.first_name,(w=j.value)==null?void 0:w.last_name].filter(Boolean).join(" ");m.cust.name=m.cust.name||wr||((U=j.value)==null?void 0:U.username)||"",m.cust.phone=m.cust.phone||((rr=j.value)==null?void 0:rr.mobile)||"",m.cust.mail=m.cust.mail||((cr=j.value)==null?void 0:cr.email)||"";const Br=(br=f.value)!=null&&br.home?0:Number((yr=f.value)==null?void 0:yr.id);if(m.pay==="cod"){const P=Math.round(v.value.total*.3);if((Number(m.walletBalance)||0)<P){F(`عذرًا، الدفع عند الوصول يتطلب توفر عربون 30% (${q(P)} ر.س) في محفظتك`);return}}const ur=E.value.map(P=>{var Q;return{subServices:[{id:P.id,date:nr(m.date),time:m.time[P.id],duration:P.dur,staffId:(Q=m.emp[P.id])==null?void 0:Q.id}]}});await ge({branch:Br,services:ur,customerName:m.cust.name,mobileNo:m.cust.phone});const Lr=m.rewards,Ar=Number(y.value.toFixed(2)),o=u.value,a=Ar>0,l=o>0,O=Lr.couponApplied||"",er=c.value<=0?"card":m.pay==="cod"?"cod":m.pay||"card",X=await ue(er,{wallet:a,walletAmount:Ar,loyalty:l,loyaltyPoints:o,couponCode:O});if(X.payment_url){se({b:((Fr=f.value)==null?void 0:Fr.name)||"",d:Nr(m.date),u:gr(G.value),e:[...new Set(E.value.map(P=>{var Q;return(Q=m.emp[P.id])==null?void 0:Q.name}).filter(Boolean))].join("، "),p:v.value.total,s:E.value.map(P=>{var Q;return[P.name,tr(m.time[P.id]),((Q=m.emp[P.id])==null?void 0:Q.name)||"",P.price]})},X.attempt_id),window.location.href=X.payment_url;return}m.bookRef=X.invoice_id||null,m.done=!0,scrollTo({top:0,behavior:"smooth"})}catch(wr){F(wr.message||"تعذّر إتمام الحجز، حاول مرة أخرى")}finally{g.value=!1}}}function Sr(){I(),location.href="/"}return(D,w)=>(Or("RouterLink"),t(),i("div",{ref_key:"root",ref:e},[r("div",qa,[d.value?R("",!0):(t(),mr(Me,{key:0})),r("div",Oa,[r("div",{class:Y(["stage",{"stage-services-summary":n(m).step===0&&A.value}]),id:"stage",style:$r(`grid-template-columns:${$.value}`)},[r("main",Ga,[d.value?(t(),i("div",Ka,[w[10]||(w[10]=r("div",{class:"suc-ic"},[r("svg",{width:"44",height:"44",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.2"},[r("path",{d:"M20 6L9 17l-5-5"})])],-1)),w[11]||(w[11]=r("h1",null,"تفاصيل الحجز",-1)),w[12]||(w[12]=r("p",{class:"sub"},"تم فتح تفاصيل الحجز من رمز QR",-1)),r("div",Ua,[r("div",Wa,[w[8]||(w[8]=r("h4",null,"بيانات الحجز",-1)),r("div",Xa,[w[2]||(w[2]=r("span",{class:"k"},"رقم الفاتورة",-1)),r("span",Qa,s(p.value.r||"—"),1)]),r("div",Ja,[w[3]||(w[3]=r("span",{class:"k"},"الفرع",-1)),r("span",Za,s(p.value.b||"—"),1)]),r("div",ro,[w[4]||(w[4]=r("span",{class:"k"},"التاريخ",-1)),r("span",eo,s(p.value.d||"—"),1)]),r("div",no,[w[5]||(w[5]=r("span",{class:"k"},"مدة الجلسة",-1)),r("span",to,s(p.value.u||"—"),1)]),r("div",ao,[w[6]||(w[6]=r("span",{class:"k"},"الفريق",-1)),r("span",oo,s(p.value.e||"—"),1)]),r("div",io,[w[7]||(w[7]=r("span",{class:"k"},"المبلغ",-1)),r("span",{class:"v",style:xo},s(n(q)(Number(p.value.p)||0))+" ر.س",1)])]),r("div",so,[w[9]||(w[9]=r("h4",null,"الخدمات",-1)),(t(!0),i(V,null,J(h.value,(U,rr)=>(t(),i("div",{key:rr,class:"receipt-service"},[r("b",null,s(U[0]),1),r("small",null,s(U[1]||"—")+" · "+s(U[2]||p.value.e||"—"),1),r("span",null,s(n(q)(Number(U[3])||0))+" ر.س",1)]))),128))])])])):n(m).done?(t(),mr(fa,{key:1,onHome:Sr,onCalendar:w[0]||(w[0]=U=>F("تمت إضافة الموعد إلى التقويم")),onShare:w[1]||(w[1]=U=>F("تم نسخ رابط الحجز للمشاركة"))})):n(m).step===0?(t(),mr(Qe,{key:2})):n(m).step===1?(t(),mr(xn,{key:3})):n(m).step===2?(t(),mr(Gn,{key:4})):n(m).step===3?(t(),mr(gt,{key:5})):(t(),mr(Pt,{key:6}))]),Tr(r("aside",{class:Y(["summary booking-summary-compact",{show:A.value,"booking-summary-time":n(m).step===2}])},[hr(Ra)],2),[[Pr,A.value]])],6)])]),R("",!0),Tr(r("div",lo,[r("div",po,[r("button",{class:"btn btn-back",id:"btnBack",style:$r({visibility:n(m).step===0?"hidden":"visible"}),onClick:x},[...w[29]||(w[29]=[r("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[r("path",{d:"M5 12h14M13 6l6 6-6 6"})],-1),M(" السابق ",-1)])],4),r("div",co,[w[31]||(w[31]=r("span",null,"🔒 بياناتك محمية وآمنة",-1)),N.value?(t(),i("span",go,[w[30]||(w[30]=M("المبلغ الإجمالي ",-1)),r("b",null,s(n(q)(Math.round(Z.value)))+" ر.س",1)])):R("",!0)]),r("button",{class:Y(["btn",n(m).step===4?"btn-pay":"btn-gold"]),id:"btnNext",disabled:!n(z),onClick:_},[M(s(n(T))+" ",1),w[32]||(w[32]=r("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.2"},[r("path",{d:"M19 12H5M11 18l-6-6 6-6"})],-1))],10,uo)])],512),[[Pr,!n(m).done&&!d.value]]),r("div",{class:Y(["pay-loading",{on:g.value}]),id:"payLoading"},[...w[33]||(w[33]=[r("div",{class:"pl-box"},[r("div",{class:"pl-ring"}),r("b",null,"جارٍ معالجة الدفع بأمان…"),r("small",null,"لا تغلق الصفحة، سيتم تأكيد حجزك خلال لحظات")],-1)])],2),r("div",{class:Y(["toast",{on:K.value}]),id:"toast"},s(C.value),3)],512))}};export{Mo as default};
