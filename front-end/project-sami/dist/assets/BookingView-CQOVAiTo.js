import{E as Fr,G as Tr,u as n,o as t,c as s,b as r,F as D,e as X,n as I,t as l,h as vr,r as er,s as zr,H as Or,i as m,j as Gr,q as V,a as M,d as kr,x as _r,k as Ur,I as wr,J as sr,m as fr,w as Dr,K as Yr,A as Wr,B as Rr,_ as Kr,L as Xr,M as Jr,N as Qr,p as ur,O as Zr}from"./index-CiLk9SU8.js";import{u as re,a as ee}from"./useInternalLinks-IoTGl9uV.js";import{u as lr,r as G,f as xr,a as ar,b as jr}from"./useBooking-yKzyjeYw.js";import{f as ne,a as qr,b as te,v as ae,c as oe,i as ie}from"./bookingApi-ABpFpAXp.js";import{s as se}from"./serviceDetails-gQMMCHKA.js";import{c as Hr,a as Br,b as Ir}from"./giftIcons-C3hH12nn.js";import{l as le}from"./i18nField-CJ_3XKph.js";import{_ as Lr}from"./SkeletonLoader-DObrqQuB.js";import{f as de}from"./accountApi-rg_QDq25.js";const pe=`\r
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
.mode-grid{display:flex;flex-wrap:wrap;justify-content:center;align-items:flex-start;\r
  gap:38px;margin:4px 0 26px}\r
.mode{position:relative;width:188px;padding:0;border:0;background:none;border-radius:0;\r
  cursor:pointer;text-align:center;overflow:visible;transition:transform .3s var(--ease)}\r
.mode:hover{transform:translateY(-4px);box-shadow:none}\r
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
.mode.dark{background:none;border:0;color:inherit}\r
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
.mode .chk{position:absolute;top:2px;left:28px;width:26px;height:26px;border-radius:50%;\r
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
@media(max-width:560px){.mode-grid{gap:22px}.mode{width:150px}.mode .mi{width:96px;height:96px}.mode .mi svg{width:33px;height:33px}.mode .chk{left:20px}}\r
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
.cal{padding:20px;box-shadow:0 18px 38px -30px rgba(80,60,20,.42)}\r
.loyalty-preview{margin:0 0 16px;padding:24px 28px;border:1.5px solid var(--gold);border-radius:20px;background:linear-gradient(135deg,#fffdf8,#fff8eb);text-align:center;box-shadow:0 16px 34px -30px rgba(143,89,15,.65)}\r
.loyalty-preview h3{margin:0 0 16px;font-family:var(--font-d);font-size:22px;color:var(--gold-deep)}\r
.loyalty-preview p{margin:0;color:var(--mute);font-size:14px;line-height:1.9}.loyalty-preview p b{color:var(--ink)}\r
.loyalty-preview strong{display:block;color:var(--gold-deep);font-size:14px;line-height:1.8}\r
.cal-head{display:flex;align-items:center;justify-content:center;margin-bottom:14px}\r
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
.cal-legend i{width:7px;height:7px;border-radius:50%}\r
.date-line{display:flex;align-items:center;gap:10px;margin:22px 0 0;padding:18px 22px 0;border-top:1px dashed var(--line);font-family:var(--font-d);font-size:22px;color:var(--ink)}\r
.booking-periods{margin:4px 0 16px}\r
.booking-periods .period{min-height:54px;font-size:15px;background:#fff}\r
.available-times-title{margin-bottom:12px;color:var(--mute);font-size:13px}\r
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
.time-start-service .cat-ico svg,.plan-icon svg{width:24px;height:24px;stroke:currentColor}\r
.session-plan .plan-icon{color:var(--gold-deep)!important;background:rgba(198,161,91,.12)!important;border-color:rgba(198,161,91,.28)!important}\r
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
.tl b{font-size:13.5px;display:block;color:var(--ink);line-height:1.5}\r
.tl .with{font-size:11px;color:var(--mute);margin-top:2px;line-height:1.65;\r
  text-overflow:ellipsis;white-space:nowrap}\r
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
@media(max-width:1080px){\r
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
}\r
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
`,Vr=[{id:"s1",cat:"hair",name:"حلاقة عادية",desc:"حلاقة شعر عادية بقصات عصرية",dur:20,price:20},{id:"s2",cat:"hair",name:"حلاقة شعر + تحديد لحية",desc:"حلاقة شعر مع تحديد اللحية",dur:30,price:35},{id:"s3",cat:"hair",name:"حلاقة مع غسيل",desc:"حلاقة مع غسيل وتنظيف الشعر",dur:30,price:30},{id:"s4",cat:"hair",name:"حلاقة VIP",desc:"حلاقة فاخرة مع خدمة VIP",dur:50,price:80},{id:"s5",cat:"hair",name:"تنسيق اللحية",desc:"تنسيق وتجميل اللحية",dur:20,price:15},{id:"s6",cat:"hair",name:"تصفيف الشعر",desc:"تصفيف الشعر بالمنتجات المناسبة",dur:15,price:15},{id:"s7",cat:"skin",name:"تنظيف بشرة عميق",desc:"تنظيف عميق ينظف وينعش البشرة",dur:50,price:150},{id:"s8",cat:"skin",name:"تنظيف بشرة سريع",desc:"جلسة سريعة لإشراقة فورية",dur:30,price:80},{id:"s9",cat:"skin",name:"ماسك الذهب",desc:"ماسك فاخر لنضارة استثنائية",dur:25,price:90},{id:"s10",cat:"pedi",name:"بديكير عادي",desc:"عناية أساسية للأقدام والأظافر",dur:45,price:60},{id:"s11",cat:"pedi",name:"بديكير فاخر",desc:"عناية متكاملة مع تقشير وترطيب",dur:60,price:100},{id:"s12",cat:"pedi",name:"بديكير طبي",desc:"علاج تشققات القدم والمسامير",dur:60,price:120},{id:"s13",cat:"pedi",name:"إزالة جلد ميت",desc:"إزالة الجلد الميت من القدمين",dur:30,price:40},{id:"s14",cat:"mass",name:"مساج استرخاء للجسم",desc:"استرخاء عميق يجدد طاقتك",dur:60,price:180},{id:"s15",cat:"mass",name:"مساج رأس",desc:"جلسة قصيرة لتخفيف التوتر",dur:15,price:25},{id:"s16",cat:"mass",name:"مساج علاجي",desc:"مساج متخصص للعضلات المجهدة",dur:60,price:220},{id:"s17",cat:"bath",name:"حمام مغربي كلاسيكي",desc:"تقشير وتنقية بطقوس أصيلة",dur:60,price:200},{id:"s18",cat:"bath",name:"حمام مغربي ملكي",desc:"التجربة الكاملة مع ماسك وتدليك",dur:90,price:300}];for(const nr of Object.values(se))for(const e of nr.variants||[])e.svcId&&!Vr.some(z=>z.id===e.svcId)&&Vr.push({id:e.svcId,cat:e.cat,name:e.name,desc:e.desc||"",dur:e.dur,price:e.price,hidden:!0});const ce=[{id:"u1",name:"كريم ترطيب متوازن",desc:"ترطيب وتغذية يدوم طويلًا",price:110,img:"https://sami-care.sa//storage/uploads/403/HyxbPuOgHBgbg0pgpMZr9bcFv2OryQtxjRMLnhxb.jpg"},{id:"u2",name:"غسول تنظيف البشرة",desc:"ينظف بعمق وينعش البشرة",price:95,img:"https://sami-care.sa//storage/uploads/405/L2sxjQjZgTztP0swgRTlXV0jVjCLuS5GJyypCJmT.jpg"},{id:"u3",name:"زيت اللحية الذهبي",desc:"ترطيب وتغذية عميقة",price:120,img:"https://sami-care.sa//storage/uploads/406/uGGoLhrbcMofuyS2kedJ44ejvBqYnz1M0mA0zTMP.jpg"}],ge=[{t:"اختيار الخدمات",ic:'<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"/>'},{t:"اختيار الموظف",ic:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>'},{t:"اختيار الوقت",ic:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>'},{t:"تأكيد الحجز",ic:'<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>'},{t:"الدفع",ic:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>'}],ue={class:"wrap stepper",id:"stepperWrap"},xe={class:"steps",id:"steps"},me=["data-i"],he={class:"n"},be=["onClick"],fe=["innerHTML"],ve={__name:"BookingStepper",setup(nr){const{state:e}=lr();function z(v){v<e.step&&(e.step=v)}return(v,S)=>Fr((t(),s("div",ue,[r("div",xe,[(t(!0),s(D,null,X(n(ge),(B,C)=>(t(),s("div",{key:C,class:I(["step",{active:C===n(e).step,done:C<n(e).step}]),"data-i":C},[S[0]||(S[0]=r("div",{class:"bar"},[r("i")],-1)),r("span",he,l(C+1),1),r("span",{class:"bubble",onClick:j=>z(C)},[(t(),s("svg",{width:"21",height:"21",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7",innerHTML:B.ic},null,8,fe))],8,be),r("label",null,l(B.t),1)],10,me))),128))])],512)),[[Tr,!n(e).done]])}},ye={key:0,class:"branch-strip"},we=["src","alt"],ke={class:"bi"},_e={key:1,class:"empty-hint",style:{display:"grid",gap:"10px"}},ze={class:"cat-row"},$e=["data-cat","onClick"],Me=["src","alt"],Ce={class:"lbl"},Se={class:"cat-name"},Fe={key:0,class:"empty-hint"},Be={key:1,class:"sub-block"},Le={class:"sub-title"},Ae={class:"sub-title__main"},Ee={class:"tick"},Te=["innerHTML"],De={key:0,class:"empty-hint"},je={key:1,class:"subs"},He=["data-svc","onClick"],Ie={class:"top"},Ne={class:"si"},Pe=["innerHTML"],Ve={class:"foot"},Ye={class:"dur"},Re={class:"prc"},qe={__name:"ServicesStep",setup(nr){const{state:e,hasSvc:z,toggleSvc:v}=lr(),{current:S}=vr(),{state:B}=Ur(),C=o=>le(o,B.lang),j=er([]),A=er(!0);zr(async()=>{try{const o=await Or();j.value=o!=null&&o.status?o.data||[]:[]}catch{j.value=[]}finally{A.value=!1}});const x=m(()=>j.value.map(o=>({id:o.id,name:C(o.name),image:Gr(o.image)||o.feature_image||null}))),H=m(()=>j.value.find(o=>o.id===e.activeCat)||null),q=m(()=>{var o;return C((o=H.value)==null?void 0:o.name)}),y=m(()=>Hr(H.value)),F=m(()=>{var o;return(((o=H.value)==null?void 0:o.services)||[]).map(c=>({id:c.id,categoryId:H.value.id,categoryName:q.value,icon:y.value,name:C(c.name),desc:C(c.description)||"",dur:c.duration_min,price:c.default_price}))}),L=o=>e.services.some(c=>c.categoryId===o),E=m(()=>F.value.filter(o=>z(o.id)).length),$=o=>({"--acc":Ir(o.icon)}),b=o=>Br(o.icon);return(o,c)=>(t(),s(D,null,[c[5]||(c[5]=r("div",{class:"panel-head"},[r("h1",null,"اختر الخدمة التي تناسبك"),r("p",null,"يمكنك اختيار خدمة واحدة أو أكثر من أي قسم")],-1)),n(S)?(t(),s("div",ye,[n(S).image?(t(),s("img",{key:0,src:n(S).image,alt:n(S).name},null,8,we)):V("",!0),r("span",ke,[c[0]||(c[0]=M("مكان التنفيذ: ",-1)),r("b",null,l(n(S).name),1),r("small",null,l(n(S).address),1)])])):V("",!0),A.value?(t(),s("div",_e,[kr(Lr,{height:"64px","border-radius":"12px"}),kr(Lr,{height:"92px","border-radius":"12px"})])):(t(),s(D,{key:2},[r("div",ze,[(t(!0),s(D,null,X(x.value,_=>(t(),s("div",{key:_.id,class:I(["cat",{sel:n(e).activeCat===_.id,"has-picks":L(_.id)}]),"data-cat":_.id,onClick:N=>n(e).activeCat=_.id},[_.image?(t(),s("img",{key:0,src:_.image,alt:_.name},null,8,Me)):V("",!0),c[1]||(c[1]=r("span",{class:"chk"},[r("svg",{width:"9",height:"9",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3"},[r("path",{d:"M20 6L9 17l-5-5"})])],-1)),r("span",Ce,[r("span",Se,l(_.name),1)])],10,$e))),128))]),n(e).activeCat?(t(),s("div",Be,[r("div",Le,[r("span",Ae,[M(" خدمات "+l(q.value)+" ",1),r("span",Ee,[(t(),s("svg",{viewBox:"0 0 24 24","aria-hidden":"true",innerHTML:n(Br)(y.value)},null,8,Te))])]),r("small",null,l(E.value?E.value+" مختارة":"اختر خدمة أو أكثر"),1)]),F.value.length?(t(),s("div",je,[(t(!0),s(D,null,X(F.value,_=>(t(),s("div",{key:_.id,class:I(["sub",{sel:n(z)(_.id)}]),"data-svc":_.id,style:_r($(_)),onClick:N=>n(v)(_)},[r("div",Ie,[r("span",Ne,[(t(),s("svg",{viewBox:"0 0 24 24","aria-hidden":"true",innerHTML:b(_)},null,8,Pe))]),r("b",null,l(_.name),1),c[3]||(c[3]=r("span",{class:"chk"},[r("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3"},[r("path",{d:"M20 6L9 17l-5-5"})])],-1))]),r("small",null,l(_.desc),1),r("div",Ve,[r("span",Ye,"🕐 "+l(_.dur)+" دقيقة",1),r("span",Re,[M(l(n(G)(_.price))+" ",1),c[4]||(c[4]=r("small",null,"ر.س",-1))])])],14,He))),128))])):(t(),s("div",De,"لا توجد خدمات متاحة حاليًا ضمن هذا القسم"))])):(t(),s("div",Fe,[...c[2]||(c[2]=[r("b",null,"اختر خدمة لعرض تفاصيلها",-1),M("اختر إحدى الخدمات الأساسية أعلاه لعرض الخدمات الفرعية المتاحة",-1)])]))],64))],64))}},Oe={class:"mode-grid"},Ge={key:0,class:"emp-section emp-section--groups"},Ue={class:"emp-cat emp-cat--group"},We={class:"cat-ico"},Ke=["innerHTML"],Xe={class:"emp-cat__info"},Je={class:"emp-cat__services"},Qe={key:0,class:"empty-hint"},Ze={key:1,class:"empty-hint"},rn={key:2,class:"emp-list emp-list--groups"},en=["onClick"],nn=["onClick"],tn={key:1,class:"j-note card",style:{display:"flex",gap:"16px","align-items":"center",padding:"20px 24px","border-color":"var(--line)"}},an={__name:"EmployeeStep",setup(nr){const{state:e,selSvcs:z,setEmployee:v}=lr(),{current:S}=vr(),B=wr({}),C=wr({}),j=["توفير الوقت","أفضل تقييم متاح","تنفيذ خدمات القسم بنفس الموظف","منع أي تعارض في المواعيد"],A=["اختر موظفًا واحدًا لكل قسم","الموظف المختار ينفذ كل خدمات القسم","تحكم كامل في فريق جلستك"],x=m(()=>{const g=new Map;return z.value.forEach(p=>{const u=String(p.categoryId??p.categoryName??p.id);g.has(u)||g.set(u,{id:u,name:p.categoryName||p.name,icon:p.icon||Hr(p.categoryId),services:[]}),g.get(u).services.push(p)}),[...g.values()]});function H(g){return[g.first_name,g.last_name].filter(Boolean).join(" ")||g.username||"موظف"}function q(g){return{"--acc":Ir(g.icon)}}function y(g){return`${g.services.length} ${g.services.length===1?"خدمة":"خدمات"}`}function F(g){return g.services.map(p=>p.name).join("، ")}function L(g){const p=g.services.map(w=>B[w.id]);if(!p.length||p.some(w=>!Array.isArray(w)))return[];const[u,...h]=p,f=u.filter(w=>h.every(W=>W.some(mr=>String(mr.id)===String(w.id))));return[...new Map(f.map(w=>[String(w.id),w])).values()]}function E(g){return g.services.some(p=>C[p.id]||!Array.isArray(B[p.id]))}function $(g){const p=g.services.map(h=>e.emp[h.id]).filter(Boolean);if(p.length!==g.services.length)return null;const u=p[0];return p.every(h=>String(h.id)===String(u.id))?u:null}function b(g,p){var u;return String(((u=$(g))==null?void 0:u.id)??"")===String(p.id??"")}function o(g){const p=g.services.map(u=>z.value.findIndex(h=>String(h.id)===String(u.id))).filter(u=>u>=0);return p.length?Math.min(...p):-1}function c(g){const p=o(g);p!==-1&&z.value.slice(p).forEach(u=>{delete e.time[u.id]})}function _(g,p,{clearTimes:u=!0}={}){g.services.forEach(h=>v(h.id,p)),u&&c(g)}function N(){e.mode==="auto"&&x.value.forEach(g=>{L(g).length&&g.services.forEach(u=>{e.staffOptions[u.id]=B[u.id]||[],v(u.id,{id:null,name:"اختيار تلقائي"})})})}function Y(g){const p=e.mode!==g;e.mode=g,p&&(e.time={},e.emp={}),N()}function T(g,p){e.mode="manual",_(g,p)}async function rr(g){var p,u;if(!B[g.id]){C[g.id]=!0;try{const h=(p=S.value)!=null&&p.home?0:(u=S.value)==null?void 0:u.id,f=await ne({branchId:h,serviceId:g.id}),w=(Array.isArray(f)?f:[]).map(W=>({id:W.id,name:H(W)}));B[g.id]=[...new Map(w.map(W=>[String(W.id),W])).values()],e.staffOptions[g.id]=B[g.id],N()}catch{B[g.id]=[]}finally{C[g.id]=!1}}}function U(){z.value.forEach(rr)}return zr(U),sr(()=>z.value.map(g=>g.id),U),sr(()=>e.mode,N),(g,p)=>(t(),s(D,null,[p[10]||(p[10]=r("div",{class:"panel-head"},[r("h1",null,"اختر الموظف"),r("p",null,"اختر موظفًا واحدًا لكل قسم، وسيتم تطبيقه على كل الخدمات المختارة داخل هذا القسم")],-1)),r("div",Oe,[r("div",{class:I(["mode dark",{sel:n(e).mode==="auto"}]),onClick:p[0]||(p[0]=u=>Y("auto"))},[p[3]||(p[3]=fr('<span class="chk"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"></path></svg></span><span class="mi"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="8" r="4"></circle><path d="M5 21c0-4 3-6 7-6s7 2 7 6"></path></svg></span><h3>اختيار تلقائي</h3><div class="sub-t">سنختار لك أفضل فريق متاح</div><span class="flag">★ موصى به</span>',5)),r("ul",null,[(t(),s(D,null,X(j,(u,h)=>r("li",{key:h},[p[2]||(p[2]=r("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.6"},[r("path",{d:"M20 6L9 17l-5-5"})],-1)),M(" "+l(u),1)])),64))])],2),r("div",{class:I(["mode",{sel:n(e).mode==="manual"}]),onClick:p[1]||(p[1]=u=>Y("manual"))},[p[5]||(p[5]=fr('<span class="chk"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" stroke-width="3"><path d="M20 6L9 17l-5-5"></path></svg></span><span class="mi"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span><h3>اختيار موظف محدد</h3><div class="sub-t">اختر موظفًا لكل قسم</div><span class="flag">تحكم كامل</span>',5)),r("ul",null,[(t(),s(D,null,X(A,(u,h)=>r("li",{key:h},[p[4]||(p[4]=r("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.6"},[r("path",{d:"M20 6L9 17l-5-5"})],-1)),M(" "+l(u),1)])),64))])],2)]),n(e).mode==="manual"?(t(),s("div",Ge,[(t(!0),s(D,null,X(x.value,u=>(t(),s("div",{key:u.id,class:"emp-row emp-row--group",style:_r(q(u))},[r("div",Ue,[r("span",We,[(t(),s("svg",{viewBox:"0 0 24 24","aria-hidden":"true",innerHTML:n(Br)(u.icon)},null,8,Ke))]),r("span",Xe,[r("b",null,l(u.name),1),r("small",null,l(y(u)),1),r("span",Je,l(F(u)),1)])]),E(u)?(t(),s("div",Qe,[kr(Lr,{height:"44px","border-radius":"8px"})])):L(u).length?(t(),s("div",rn,[r("button",{type:"button",class:"emp any",onClick:Dr(h=>T(u,L(u)[0]),["stop"])},[...p[6]||(p[6]=[fr('<span class="av" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span><b>أي موظف</b><span class="rate">الأنسب تلقائيًا</span>',3)])],8,en),(t(!0),s(D,null,X(L(u),h=>(t(),s("button",{key:h.id,type:"button",class:I(["emp",{sel:b(u,h)}]),onClick:Dr(f=>T(u,h),["stop"])},[p[7]||(p[7]=r("span",{class:"chk"},[r("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"#fff","stroke-width":"3"},[r("path",{d:"M20 6L9 17l-5-5"})])],-1)),p[8]||(p[8]=r("span",{class:"av","aria-hidden":"true"},null,-1)),r("b",null,l(h.name),1)],10,nn))),128))])):(t(),s("div",Ze,"لا يوجد موظف متاح يمكنه تنفيذ كل خدمات هذا القسم"))],4))),128))])):V("",!0),n(e).mode==="auto"?(t(),s("div",tn,[...p[9]||(p[9]=[fr('<span style="flex:none;width:44px;height:44px;border-radius:13px;display:grid;place-items:center;background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M13 2L3 14h9l-1 8 10-12h-9z"></path></svg></span><p style="font-size:13.5px;color:#5c5442;line-height:1.9;"><b style="color:var(--ink);">تم اختيار موظف واحد مناسب لكل قسم تلقائيًا.</b> سيتم تنفيذ كل خدمات القسم بنفس الموظف، وتقدر تشوف الأوقات في الخطوة الجاية.</p>',2)])])):V("",!0)],64))}},on={class:"card branch-strip"},sn={class:"cells"},ln={class:"cell"},dn={class:"cell"},pn={class:"loyalty-preview","aria-live":"polite"},cn={class:"card cal"},gn={class:"cal-head"},un={class:"cal-cells"},xn=["disabled","onClick"],mn={class:"dow"},hn={class:"dnum"},bn={key:0,class:"empty-hint",style:{"margin-top":"10px"}},fn={class:"date-line"},vn={class:"card detail-card time-start-card",style:{"margin-top":"14px"}},yn={class:"periods booking-periods"},wn={key:1,class:"empty-hint"},kn={key:2,class:"empty-hint"},_n={key:3,class:"empty-hint"},zn={key:4,class:"slots initial-slots"},$n=["onClick"],Mn={key:0,class:"tag"},Cn={key:5,class:"best-slot"},Sn={key:0,class:"session-plan"},Fn={class:"plan-track"},Bn={key:0,class:"plan-gap"},Ln={class:"plan-icon"},An=["innerHTML"],En={class:"t"},Tn={key:0,class:"plan-note plan-note--pending"},Dn={key:1,class:"plan-note plan-note--warn"},jn={key:2,class:"plan-note"},Hn={__name:"TimeStep",setup(nr){const e=["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],z=["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],{state:v,selSvcs:S,totalDur:B,priceParts:C,setEmployee:j,setTime:A}=lr(),x=er(5),H=m(()=>Math.floor(C.value.total/100)*x.value),q=new Date;q.setHours(0,0,0,0);const y=er(new Date(q)),F=er("all"),L=wr({}),E=wr({}),$=wr({}),b=m(()=>Array.from({length:7},(i,a)=>{const d=new Date(y.value);return d.setDate(d.getDate()+a),d}));m(()=>y.value.getTime()<=q.getTime());const o=m(()=>{const i=b.value;return i[0].getMonth()===i[6].getMonth()?`${i[0].getDate()} - ${i[6].getDate()} ${z[i[0].getMonth()]}`:`${i[0].getDate()} ${z[i[0].getMonth()]} - ${i[6].getDate()} ${z[i[6].getMonth()]}`}),c=i=>i<q,_=i=>v.date&&i.getTime()===v.date.getTime(),N=m(()=>{const i=new Map;return S.value.forEach(a=>{const d=String(a.categoryId??a.categoryName??a.id);i.has(d)||i.set(d,{id:d,name:a.categoryName||a.name,icon:a.icon||Hr(a.categoryId),services:[]}),i.get(d).services.push(a)}),[...i.values()]}),Y=m(()=>N.value.flatMap(i=>i.services)),T=m(()=>Y.value[0]||null);m(()=>N.value[0]||null);const rr=m(()=>T.value?v.time[T.value.id]:"");function U(i){return`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}-${String(i.getDate()).padStart(2,"0")}`}function g(i){if(!i||typeof i!="string")return null;const[a,d]=i.split(":").map(Number);return!Number.isFinite(a)||!Number.isFinite(d)?null:a*60+d}function p(i){if(!Number.isFinite(i))return"";const a=1440,d=(Math.round(i)%a+a)%a;return`${String(Math.floor(d/60)).padStart(2,"0")}:${String(d%60).padStart(2,"0")}`}function u(i){return[...new Set((Array.isArray(i)?i:[]).filter(a=>g(a)!==null))].sort((a,d)=>g(a)-g(d))}function h(i){Y.value.slice(i).forEach(a=>{delete v.time[a.id]})}function f(i,{apply:a=!1}={}){var tr;const d=g(i),P=Y.value;if(!P.length||d===null)return{complete:!1,rows:[],end:""};let J=d;const Z=[];for(let cr=0;cr<P.length;cr++){const O=P[cr],or=u(L[O.id]),ir=cr===0?or.includes(i)?i:or.find(gr=>g(gr)>=J):or.find(gr=>g(gr)>=J);if(!ir){a&&h(cr);const gr=Z[Z.length-1];return{complete:!1,rows:Z,missing:O,end:(gr==null?void 0:gr.end)||""}}const Nr=g(ir),Pr=Nr+(Number(O.dur)||0);Z.push({service:O,start:ir,end:p(Pr),expected:p(J),shifted:Nr>J}),a&&A(O.id,ir),a&&v.mode==="auto"&&((tr=E[O.id])!=null&&tr[ir])&&j(O.id,E[O.id][ir]),J=Pr}return{complete:!0,rows:Z,end:p(J)}}function w(){rr.value&&f(rr.value,{apply:!0})}function W(i){f(i,{apply:!0})}function mr(i){return{"--acc":Ir(i.icon)}}function $r(i){return i.services.reduce((a,d)=>a+(Number(d.dur)||0),0)}function R(i){const a=i.services.map(P=>v.emp[P.id]).filter(Boolean);if(!a.length)return null;const d=a[0];return a.every(P=>String(P.id)===String(d.id)),d}function k(i){return`${i.services.length} ${i.services.length===1?"خدمة":"خدمات"}`}function K(i){c(i)||(v.date=i,v.time={},Object.keys(L).forEach(a=>{delete L[a]}))}async function Q(i){var P;const a=v.emp[i.id];if(!v.date||!a){delete L[i.id];return}const d=U(v.date);$[i.id]=!0;try{const J=v.mode==="auto"?v.staffOptions[i.id]||[]:[a],Z=await Promise.all(J.filter(O=>(O==null?void 0:O.id)!=null).map(async O=>({candidate:O,times:await te({date:d,staffId:O.id,durationMin:i.dur}).catch(()=>[])}))),tr={};Z.forEach(({candidate:O,times:or})=>{u(or).forEach(ir=>{tr[ir]||(tr[ir]=O)})});const cr=Object.keys(tr);v.date&&U(v.date)===d&&((P=v.emp[i.id])==null?void 0:P.id)===a.id&&(L[i.id]=u(cr),E[i.id]=tr,w())}catch{L[i.id]=[],w()}finally{$[i.id]=!1}}sr(()=>v.date,()=>{F.value="all",S.value.forEach(Q)}),sr(()=>S.value.map(i=>{var a;return`${i.id}:${(a=v.emp[i.id])==null?void 0:a.id}`}),()=>S.value.forEach(Q)),zr(async()=>{var i;S.value.forEach(Q);try{const a=await qr();x.value=Math.max(Number((i=a==null?void 0:a.data)==null?void 0:i.points_per_100)||5,1)}catch{}});const dr=m(()=>v.date?`${e[v.date.getDay()]} ${v.date.getDate()} ${z[v.date.getMonth()]} ${v.date.getFullYear()}`:"اختر تاريخًا من التقويم"),Mr=m(()=>T.value&&$[T.value.id]),hr=m(()=>T.value?u(L[T.value.id]):[]),br=m(()=>hr.value.filter(i=>{const a=g(i);return F.value==="am"?a<720:F.value==="pm"?a>=720:!0})),Ar=m(()=>!!v.date&&Y.value.every(i=>Array.isArray(L[i.id])&&!$[i.id])),Er=m(()=>!!rr.value&&Y.value.some(i=>$[i.id]||!Array.isArray(L[i.id]))),Cr=m(()=>rr.value?Y.value.find(i=>!v.time[i.id]):null),pr=m(()=>Ar.value&&hr.value.find(i=>f(i).complete)||""),yr=m(()=>{const i=[];let a=null;return N.value.forEach(d=>{const P=d.services.map(or=>g(v.time[or.id])),J=P.every(or=>or!==null),Z=P[0];if(!J){i.push({type:"group",key:`group-${d.id}`,group:d,name:d.name,icon:d.icon,style:mr(d),duration:$r(d),services:d.services,employee:R(d),pending:!0});return}a!==null&&Z>a&&i.push({type:"gap",key:`gap-${i.length}`,start:p(a),end:p(Z),duration:Z-a});const tr=d.services[d.services.length-1],O=g(v.time[tr.id])+(Number(tr.dur)||0);i.push({type:"group",key:`group-${d.id}`,group:d,name:d.name,icon:d.icon,style:mr(d),start:p(Z),end:p(O),duration:$r(d),services:d.services,employee:R(d),pending:!1}),a=O}),i}),Sr=m(()=>{const i=yr.value.filter(d=>d.type==="group"&&!d.pending),a=i[i.length-1];return(a==null?void 0:a.end)||""});return(i,a)=>(t(),s(D,null,[a[17]||(a[17]=r("div",{class:"panel-head"},[r("h1",null,"اختر وقت بداية الجلسة"),r("p",null,"اختر أول موعد فقط، وسيتم ترتيب باقي الأقسام تلقائيًا حسب مدة كل قسم والأوقات المتاحة.")],-1)),r("div",on,[a[6]||(a[6]=r("div",{class:"bi"},[r("b",null,"ملخص جلستك"),r("small",null,"قبل اختيار الوقت")],-1)),r("div",sn,[r("div",ln,[r("b",null,l(n(S).length),1),a[4]||(a[4]=M("الخدمات",-1))]),r("div",dn,[r("b",null,l(n(xr)(n(B))),1),a[5]||(a[5]=M("المدة الإجمالية",-1))])])]),r("div",pn,[a[9]||(a[9]=r("h3",null,[r("span",{"aria-hidden":"true"},"✨"),M(" مكافأة نقاط الولاء لهذه الجلسة")],-1)),r("p",null,[a[7]||(a[7]=M("ستحصل على ",-1)),r("b",null,l(n(G)(H.value))+" نقطة ولاء",1),a[8]||(a[8]=M(" عند إتمام هذا الحجز.",-1))]),r("strong",null,"يمنحك نظام الولاء "+l(n(G)(x.value))+" نقطة مقابل كل 100 ر.س مدفوعة.",1)]),r("div",cn,[r("div",gn,[r("b",null,l(o.value),1)]),r("div",un,[(t(!0),s(D,null,X(b.value,(d,P)=>(t(),s("button",{key:P,disabled:c(d),class:I({sel:_(d),avail:!c(d)}),onClick:J=>K(d)},[r("span",mn,l(e[d.getDay()].slice(0,3)),1),r("span",hn,l(d.getDate()),1)],10,xn))),128))]),a[10]||(a[10]=r("div",{class:"cal-legend"},[r("span",null,[r("i",{style:{background:"var(--green)"}}),M(" تتوفر مواعيد")]),r("span",null,[r("i",{style:{background:"#D8D0BC"}}),M(" غير متاح")])],-1))]),n(v).date?(t(),s(D,{key:1},[r("div",fn,"📅 "+l(dr.value),1),r("div",vn,[a[13]||(a[13]=r("h4",null,[M("وقت بداية الجلسة "),r("small",{style:{"font-weight":"400",color:"var(--mute)"}},"سننسق باقي الأقسام بعده")],-1)),V("",!0),r("div",yn,[r("button",{class:I(["period",{sel:F.value==="all"}]),onClick:a[0]||(a[0]=d=>F.value="all")},"🗓️ كل اليوم",2),r("button",{class:I(["period",{sel:F.value==="am"}]),onClick:a[1]||(a[1]=d=>F.value="am")},"☀️ صباحًا",2),r("button",{class:I(["period",{sel:F.value==="pm"}]),onClick:a[2]||(a[2]=d=>F.value="pm")},"🌇 مساءً",2)]),a[14]||(a[14]=r("div",{class:"available-times-title"},"الأوقات المتاحة",-1)),Mr.value||T.value&&!Array.isArray(L[T.value.id])?(t(),s("div",wn,[kr(Lr,{height:"44px","border-radius":"8px"})])):hr.value.length?br.value.length?(t(),s("div",zn,[(t(!0),s(D,null,X(br.value,d=>(t(),s("button",{key:d,class:I(["slot",{sel:rr.value===d}]),onClick:P=>W(d)},[pr.value===d?(t(),s("span",Mn,"الأفضل")):V("",!0),M(" "+l(n(ar)(d)),1)],10,$n))),128))])):(t(),s("div",_n,"لا توجد أوقات في هذه الفترة")):(t(),s("div",kn,"لا توجد أوقات متاحة لهذا اليوم")),pr.value&&rr.value!==pr.value?(t(),s("div",Cn,[r("span",null,[a[12]||(a[12]=M("أفضل بداية متاحة اليوم: ",-1)),r("b",null,l(n(ar)(pr.value)),1)]),r("button",{onClick:a[3]||(a[3]=d=>W(pr.value))},"اختيار")])):V("",!0)]),rr.value?(t(),s("div",Sn,[a[16]||(a[16]=r("h4",null,[r("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[r("path",{d:"M13 2L3 14h7l-1 8 10-12h-7l1-8z"})]),M(" خطة تنفيذ الجلسة ")],-1)),r("div",Fn,[(t(!0),s(D,null,X(yr.value,d=>{var P;return t(),s(D,{key:d.key},[d.type==="gap"?(t(),s("div",Bn,[a[15]||(a[15]=r("span",null,"فاصل انتظار",-1)),r("b",null,l(n(ar)(d.start))+" - "+l(n(ar)(d.end)),1),r("small",null,l(n(xr)(d.duration)),1)])):(t(),s("div",{key:1,class:I(["plan-item plan-item--group",{pending:d.pending}]),style:_r(d.style)},[r("span",Ln,[(t(),s("svg",{viewBox:"0 0 24 24","aria-hidden":"true",innerHTML:n(Br)(d.icon)},null,8,An))]),r("b",null,l(d.name),1),r("small",null,"مع "+l(((P=d.employee)==null?void 0:P.name)||"-"),1),r("span",En,l(d.pending?"بانتظار وقت متاح":`${n(ar)(d.start)} - ${n(ar)(d.end)}`),1),r("small",null,l(k(d.group))+" · "+l(n(xr)(d.duration)),1)],6))],64)}),128))]),Er.value?(t(),s("div",Tn,"جاري تنسيق باقي الأقسام حسب الأوقات المتاحة.")):Cr.value?(t(),s("div",Dn,"لم نجد وقتًا متاحًا لـ "+l(Cr.value.name)+" بعد هذا الموعد. اختر بداية أبكر أو يومًا آخر.",1)):(t(),s("div",jn,"تم تنسيق الجلسة تلقائيًا، والنهاية المتوقعة "+l(n(ar)(Sr.value))+".",1))])):V("",!0)],64)):(t(),s("div",bn,[...a[11]||(a[11]=[r("b",null,"ابدأ باختيار التاريخ",-1),M("اختر يومًا من التقويم لعرض الأوقات المتاحة",-1)])]))],64))}},In={class:"card detail-card"},Nn={class:"d-grid"},Pn={class:"d-cell"},Vn={class:"d-cell"},Yn={class:"d-cell"},Rn={class:"d-cell"},qn={class:"card detail-card"},On={class:"timeline-cards"},Gn={class:"tl-main"},Un={class:"with"},Wn={class:"tl-time"},Kn={class:"tm"},Xn={class:"dr"},Jn={key:0,class:"card detail-card products-detail-card"},Qn={class:"upsell"},Zn=["src","alt"],rt={class:"inf"},et={class:"p"},nt=["disabled","onClick"],tt={__name:"ConfirmStep",setup(nr){const{state:e,selSvcs:z,totalDur:v}=lr(),{current:S}=vr(),{user:B,isAuthenticated:C}=Yr(),{state:j,products:A,addToCart:x,setQty:H}=Wr();zr(()=>{C.value&&B.value&&!e.cust.name&&(e.cust.name=[B.value.first_name,B.value.last_name].filter(Boolean).join(" "),e.cust.phone=B.value.mobile||"",e.cust.mail=B.value.email||"")});const q=m(()=>e.date?jr(e.date):""),y=m(()=>{const $=new Map;z.value.forEach(o=>{const c=String(o.categoryId??o.categoryName??o.id);$.has(c)||$.set(c,{id:c,name:o.categoryName||o.name,services:[]}),$.get(c).services.push(o)});const b=o=>{if(!o)return Number.MAX_SAFE_INTEGER;const[c,_]=String(o).split(":").map(Number);return Number.isFinite(c)&&Number.isFinite(_)?c*60+_:Number.MAX_SAFE_INTEGER};return[...$.values()].map(o=>{var N;const c=[...o.services].sort((Y,T)=>b(e.time[Y.id])-b(e.time[T.id])),_=[...new Set(c.map(Y=>{var T;return(T=e.emp[Y.id])==null?void 0:T.name}).filter(Boolean))];return{...o,services:c,start:e.time[(N=c[0])==null?void 0:N.id]||"",duration:c.reduce((Y,T)=>Y+(Number(T.dur)||0),0),price:c.reduce((Y,T)=>Y+(Number(T.price)||0),0),employees:_}}).sort((o,c)=>b(o.start)-b(c.start))}),F=m(()=>{const $=A.value.slice(0,3);return $.length?$.map(b=>({id:b.id,name:b.n,desc:b.d,price:b.pr,img:b.image||b.img||"/images/generated/products/care-set-card-hq.png"})):ce.map(b=>({id:null,name:b.name,desc:b.desc,price:b.price,img:b.img||"/images/generated/products/care-set-card-hq.png"}))});function L($){return $.id!=null&&!!j.cart[$.id]}function E($){$.id!=null&&(L($)?H($.id,0):x($.id))}return($,b)=>{var o;return Rr("RouterLink"),t(),s(D,null,[b[20]||(b[20]=r("div",{class:"panel-head"},[r("h1",null,"تأكيد الحجز"),r("p",null,"راجع تفاصيل جلستك قبل تأكيد الحجز والدفع")],-1)),r("div",In,[b[8]||(b[8]=r("h4",null,[r("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[r("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),r("path",{d:"M16 2v4M8 2v4M3 10h18"})]),M(" تفاصيل الموعد")],-1)),r("div",Nn,[r("div",Pn,[b[4]||(b[4]=r("small",null,"📍 الفرع",-1)),r("b",null,l(((o=n(S))==null?void 0:o.name)||"—"),1)]),r("div",Vn,[b[5]||(b[5]=r("small",null,"📅 التاريخ",-1)),r("b",null,l(q.value),1)]),r("div",Yn,[b[6]||(b[6]=r("small",null,"⏱️ المدة الإجمالية",-1)),r("b",null,l(n(xr)(n(v))),1)]),r("div",Rn,[b[7]||(b[7]=r("small",null,"✂️ عدد الخدمات",-1)),r("b",null,l(n(z).length),1)])])]),r("div",qn,[b[9]||(b[9]=r("h4",null,[r("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[r("circle",{cx:"12",cy:"12",r:"9"}),r("path",{d:"M12 7v5l3 3"})]),M(" تفاصيل الجلسة")],-1)),r("div",On,[(t(!0),s(D,null,X(y.value,c=>(t(),s("div",{key:c.id,class:"tl"},[r("div",Gn,[r("b",null,l(c.name),1),r("div",Un,"مع "+l(c.employees.join("، ")||"—"),1)]),r("div",Wn,[r("span",Kn,l(n(ar)(c.start)),1),r("span",Xn,l(c.duration)+" دقيقة · "+l(n(G)(c.price))+" ر.س",1)])]))),128))])]),F.value.length?(t(),s("div",Jn,[b[10]||(b[10]=r("h4",null,[r("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[r("path",{d:"M12 2l2.9 6.2 6.6.8-4.9 4.6 1.3 6.6L12 17l-5.9 3.2 1.3-6.6L2.5 9l6.6-.8z"})]),M(" منتجات مناسبة لجلستك")],-1)),r("div",Qn,[(t(!0),s(D,null,X(F.value,c=>(t(),s("div",{key:c.id||c.name,class:I(["up",{added:L(c)}])},[r("img",{src:c.img,alt:c.name,loading:"lazy"},null,8,Zn),r("span",rt,[r("b",null,l(c.name),1),r("small",null,l(c.desc),1),r("span",et,l(n(G)(c.price))+" ر.س",1)]),r("button",{type:"button",disabled:c.id==null,onClick:_=>E(c)},l(L(c)?"✓ أضيف":"إضافة"),9,nt)],2))),128))])])):V("",!0),V("",!0)],64)}}},at={class:"card detail-card"},ot={class:"pay-methods"},it=["onClick"],st={class:"pmi"},lt={class:"card detail-card payment-rewards-card"},dt={class:"rewards"},pt={class:"rt"},ct={class:"ri"},gt=["innerHTML"],ut=["max","value","disabled"],xt={class:"hint"},mt={class:"rt"},ht={class:"ri"},bt=["innerHTML"],ft=["max","value","disabled"],vt={class:"hint"},yt={class:"coupon"},wt={class:"ci"},kt=["innerHTML"],_t=["onKeydown"],zt=["disabled"],$t={class:"reward-total"},Mt={key:0},Ct={class:"trust-row"},St={class:"ti"},Ft=["innerHTML"],Bt={__name:"PayStep",setup(nr){const{state:e,priceParts:z,pointValue:v,couponDiscount:S,walletDiscount:B,loyaltyPointsUsed:C,loyaltyDiscount:j,payableTotal:A}=lr(),x=er(!1);zr(async()=>{var h,f;try{const w=await de(),W=((h=w==null?void 0:w.data)==null?void 0:h.balances)||{};e.walletBalance=Number(W.wallet??0),e.loyaltyPoints=Number(W.loyalty_points??0)}catch{}try{const w=await qr();e.pointValue=Number(((f=w==null?void 0:w.data)==null?void 0:f.point_value)??.5)||.5}catch{}});const H=m(()=>Math.max(Number(e.walletBalance)||0,0)),q=m(()=>Math.max(parseInt(e.loyaltyPoints,10)||0,0)),y=m(()=>Math.max(z.value.total-S.value,0)),F=m(()=>Math.min(B.value,y.value)),L=m(()=>Math.max(z.value.total-S.value-F.value,0)),E=m(()=>Math.min(q.value,Math.ceil(L.value/v.value))),$=m(()=>F.value>0||C.value>0),b=m(()=>[{id:"cod",n:"الدفع عند الوصول",d:$.value?"غير متاح مع خصم المحفظة أو النقاط":"ادفع عند وصولك للفرع",logo:"COD",enabled:!$.value},{id:"mada",n:"مدى",d:"قريبًا",logo:"مدى",enabled:!1},{id:"card",n:"بطاقات الائتمان والخصم",d:$.value?"ادفع المتبقي بعد الخصومات":"قريبًا — Visa / Mastercard",logo:"VISA",enabled:$.value&&A.value>0},{id:"urpay",n:"يورباي",d:$.value?"ادفع المتبقي بعد الخصومات":"الدفع عبر يورباي",logo:"UrPay",enabled:A.value>0},{id:"tabby",n:"تابي",d:"قريبًا",logo:"tabby",enabled:!1}]);sr([$,A],()=>{$.value&&e.pay==="cod"&&(e.pay=A.value>0?"card":null)});const o=[["ضمان الجودة","نضمن لك أفضل تجربة",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>'],["دفع آمن","تقنيات تشفير متقدمة",'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>'],["حماية البيانات","بياناتك محمية بالكامل",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'],["دعم فوري","فريق دعم جاهز لخدمتك",'<path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>']],c={wallet:'<path d="M18 8V7a2 2 0 00-2-2H5a2 2 0 000 4h14a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2V7"/><path d="M16 13h.01"/>',gift:'<path d="M20 12v8H4v-8"/><path d="M2 7h20v5H2z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 110-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 100-5C13 2 12 7 12 7z"/>',coupon:'<path d="M4 7a2 2 0 012-2h12a2 2 0 012 2v3a2 2 0 000 4v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3a2 2 0 000-4z"/><path d="M9 9h.01M15 15h.01M16 8l-8 8"/>'};function _(h){h.enabled&&(e.pay=h.id)}function N(h,f){const w=Number(h);return Number.isFinite(w)?Math.max(0,Math.min(w,f)):0}function Y(){e.rewards.useWallet=!e.rewards.useWallet,e.rewards.useWallet?e.rewards.walletAmount=N(e.rewards.walletAmount||y.value,Math.min(H.value,y.value)):e.rewards.walletAmount=0}function T(h){e.rewards.walletAmount=N(h,Math.min(H.value,y.value)),e.rewards.useWallet=e.rewards.walletAmount>0}function rr(){e.rewards.useLoyalty=!e.rewards.useLoyalty,e.rewards.useLoyalty?e.rewards.loyaltyPoints=Math.min(e.rewards.loyaltyPoints||E.value,E.value):e.rewards.loyaltyPoints=0}function U(h){const f=Math.max(0,Math.min(parseInt(h,10)||0,E.value));e.rewards.loyaltyPoints=f,e.rewards.useLoyalty=f>0}function g(h){const w=(h==null?void 0:h.discount_type)==="percent"?z.value.total*(Number(h==null?void 0:h.discount_percentage)||0)/100:Number(h==null?void 0:h.discount_amount)||0;return Math.min(Math.max(w,0),z.value.total)}async function p(){const h=e.rewards.couponCode.trim();if(!h){e.rewards.couponStatus="bad",e.rewards.couponMessage="أدخل كود الخصم أولًا";return}x.value=!0;try{const f=await ae(h);if(!(f!=null&&f.valid)){e.rewards.couponApplied="",e.rewards.couponDiscount=0,e.rewards.couponStatus="bad",e.rewards.couponMessage="كود الخصم غير صالح";return}const w=g(f);e.rewards.couponCode=h,e.rewards.couponApplied=h,e.rewards.couponDiscount=w,e.rewards.couponStatus="ok",e.rewards.couponMessage=`تم تطبيق خصم ${G(Math.round(w))} ر.س`}catch(f){e.rewards.couponStatus="bad",e.rewards.couponMessage=f.message||"تعذّر التحقق من الكوبون"}finally{x.value=!1}}function u(){e.rewards.couponApplied="",e.rewards.couponDiscount=0,e.rewards.couponStatus="",e.rewards.couponMessage=""}return sr([H,y],()=>{e.rewards.useWallet&&T(e.rewards.walletAmount)}),sr(E,()=>{e.rewards.useLoyalty&&U(e.rewards.loyaltyPoints)}),(h,f)=>(t(),s(D,null,[f[11]||(f[11]=r("div",{class:"panel-head"},[r("h1",null,"الدفع"),r("p",null,"اختر طريقة الدفع المناسبة وأكمل حجزك")],-1)),r("div",at,[f[5]||(f[5]=r("h4",null,"اختر طريقة الدفع",-1)),r("div",ot,[(t(!0),s(D,null,X(b.value,w=>(t(),s("div",{key:w.id,class:I(["pm",{sel:n(e).pay===w.id,disabled:!w.enabled}]),onClick:W=>_(w)},[r("span",st,l(w.logo),1),r("span",null,[r("b",null,l(w.n),1),r("small",null,l(w.d),1)]),f[4]||(f[4]=r("span",{class:"rad"},[r("i")],-1))],10,it))),128))]),f[6]||(f[6]=r("div",{class:"secure-line"},"🔒 جميع عمليات الدفع آمنة ومشفرة",-1))]),r("div",lt,[f[10]||(f[10]=r("h4",null,[r("span",{class:"step-dot"},"2"),M(" استخدام العروض و المكافآت")],-1)),r("div",dt,[r("div",{class:I(["rw",{on:n(e).rewards.useWallet}])},[r("div",pt,[r("span",ct,[(t(),s("svg",{width:"19",height:"19",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:c.wallet},null,8,gt))]),r("span",null,[f[7]||(f[7]=r("b",null,"استخدام من المحفظة",-1)),r("small",null,"الرصيد الحالي: "+l(n(G)(H.value))+" ر.س",1)]),r("span",{class:I(["switch",{on:n(e).rewards.useWallet}]),onClick:Y},null,2)]),r("input",{type:"number",min:"0",max:Math.min(H.value,y.value),step:"1",value:n(e).rewards.walletAmount,disabled:!n(e).rewards.useWallet,onInput:f[0]||(f[0]=w=>T(w.target.value))},null,40,ut),r("span",xt,"المبلغ المتاح حتى "+l(n(G)(Math.round(Math.min(H.value,y.value))))+" ر.س",1)],2),r("div",{class:I(["rw",{on:n(e).rewards.useLoyalty}])},[r("div",mt,[r("span",ht,[(t(),s("svg",{width:"19",height:"19",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:c.gift},null,8,bt))]),r("span",null,[f[8]||(f[8]=r("b",null,"استخدام نقاط الولاء",-1)),r("small",null,"لديك "+l(n(G)(q.value))+" نقطة",1)]),r("span",{class:I(["switch",{on:n(e).rewards.useLoyalty}]),onClick:rr},null,2)]),r("input",{type:"number",min:"0",max:E.value,step:"1",value:n(e).rewards.loyaltyPoints,disabled:!n(e).rewards.useLoyalty,onInput:f[1]||(f[1]=w=>U(w.target.value))},null,40,ft),r("span",vt,"تساوي خصم "+l(n(G)(Math.round(n(C)*n(v))))+" ر.س",1)],2)]),r("div",yt,[r("span",wt,[(t(),s("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:c.coupon},null,8,kt))]),Fr(r("input",{"onUpdate:modelValue":f[2]||(f[2]=w=>n(e).rewards.couponCode=w),placeholder:"أدخل كود الخصم",onInput:f[3]||(f[3]=w=>n(e).rewards.couponApplied&&n(e).rewards.couponCode!==n(e).rewards.couponApplied?u():null),onKeydown:Jr(Dr(p,["prevent"]),["enter"])},null,40,_t),[[Xr,n(e).rewards.couponCode]]),n(e).rewards.couponApplied?(t(),s("button",{key:0,type:"button",class:"coupon-clear",onClick:u},"إلغاء")):V("",!0),r("button",{type:"button",onClick:p,disabled:x.value},l(x.value?"...":"تطبيق"),9,zt)]),n(e).rewards.couponMessage?(t(),s("p",{key:0,class:I(["coupon-msg",n(e).rewards.couponStatus])},l(n(e).rewards.couponMessage),3)):V("",!0),r("div",$t,[f[9]||(f[9]=r("span",null,"المبلغ بعد المكافآت",-1)),r("b",null,l(n(G)(Math.round(n(A))))+" ر.س",1),n(S)||F.value||n(j)?(t(),s("small",Mt," تم خصم "+l(n(G)(Math.round(n(S)+F.value+n(j))))+" ر.س ",1)):V("",!0)])]),r("div",Ct,[(t(),s(D,null,X(o,(w,W)=>r("div",{key:W,class:"trust"},[r("span",St,[(t(),s("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7",innerHTML:w[2]},null,8,Ft))]),r("b",null,l(w[0]),1),r("small",null,l(w[1]),1)])),64))])],64))}},Lt=Kr(Bt,[["__scopeId","data-v-2ebf844f"]]),At={class:"success-wrap"},Et={class:"suc-grid"},Tt={class:"card suc-details"},Dt={class:"sd-row"},jt={class:"k"},Ht=["innerHTML"],It={class:"v"},Nt={class:"sd-row"},Pt={class:"k"},Vt=["innerHTML"],Yt={class:"v"},Rt={class:"sd-row"},qt={class:"k"},Ot=["innerHTML"],Gt={class:"v"},Ut={class:"sd-row"},Wt={class:"k"},Kt=["innerHTML"],Xt={class:"v"},Jt={class:"sd-row"},Qt={class:"k"},Zt=["innerHTML"],ra={class:"v"},ea={class:"sd-row"},na={class:"k"},ta=["innerHTML"],aa={class:"card qr-card"},oa={class:"code"},ia={class:"qr-box"},sa=["src"],la=["href"],da={class:"suc-actions"},pa={class:"suc-perks"},ca={class:"ti"},ga=["innerHTML"],ua="color:var(--gold-deep);font-family:var(--font-d);font-size:17px",xa={__name:"BookingSuccess",emits:["home","calendar","share"],setup(nr,{emit:e}){const{state:z,selSvcs:v,totalDur:S,priceParts:B}=lr(),{current:C}=vr(),j=e,A=m(()=>B.value),x=m(()=>z.date?jr(z.date):""),H=m(()=>[...new Set(v.value.map(b=>{var o;return(o=z.emp[b.id])==null?void 0:o.name}).filter(Boolean))]),q=m(()=>{var b;return{r:z.bookRef||"",b:((b=C.value)==null?void 0:b.name)||"",d:x.value,u:xr(S.value),e:H.value.join("، "),p:A.value.total,s:v.value.map(o=>{var c;return[o.name,ar(z.time[o.id]),((c=z.emp[o.id])==null?void 0:c.name)||"",o.price]})}}),y=m(()=>{const b=JSON.stringify(q.value);return btoa(unescape(encodeURIComponent(b))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}),F=m(()=>`${window.location.origin}/booking?receipt=${y.value}`),L=m(()=>`https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=12&data=${encodeURIComponent(F.value)}`),E={pin:'<path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>',cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>',scis:'<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"/>',user:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',card:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>'},$=[["خدمة VIP","تجربة فاخرة مصممة لراحتك",'<path d="M2 8l4 4 6-8 6 8 4-4v10a2 2 0 01-2 2H4a2 2 0 01-2-2z"/>'],["بياناتك آمنة","نضمن لك خصوصية وأمان بياناتك",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'],["تعديل الحجز","يمكنك تعديل أو إلغاء الحجز قبل موعده",'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>'],["دعم عملاء 24/7","نحن هنا لخدمتك دائمًا",'<path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>']];return(b,o)=>{var c;return t(),s("div",At,[o[15]||(o[15]=fr('<div class="suc-ic"><span class="spark s1">✦</span><span class="spark s2">✧</span><svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M20 6L9 17l-5-5"></path></svg></div><h1>تم تأكيد حجزك بنجاح!</h1><p class="sub">نتطلع لخدمتك وتقديم تجربة استثنائية تليق بك</p>',3)),r("div",Et,[r("div",Tt,[o[9]||(o[9]=r("h4",null,"تفاصيل الحجز",-1)),r("div",Dt,[r("span",jt,[(t(),s("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:E.pin},null,8,Ht)),o[3]||(o[3]=M(" الفرع",-1))]),r("span",It,l(((c=n(C))==null?void 0:c.name)||"—"),1)]),r("div",Nt,[r("span",Pt,[(t(),s("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:E.cal},null,8,Vt)),o[4]||(o[4]=M(" التاريخ",-1))]),r("span",Yt,l(x.value),1)]),r("div",Rt,[r("span",qt,[(t(),s("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:E.info},null,8,Ot)),o[5]||(o[5]=M(" مدة الجلسة",-1))]),r("span",Gt,l(n(xr)(n(S))),1)]),r("div",Ut,[r("span",Wt,[(t(),s("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:E.scis},null,8,Kt)),o[6]||(o[6]=M(" الخدمات",-1))]),r("span",Xt,l(n(v).map(_=>`${_.name} (${n(ar)(n(z).time[_.id])})`).join(" + ")),1)]),r("div",Jt,[r("span",Qt,[(t(),s("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:E.user},null,8,Zt)),o[7]||(o[7]=M(" الفريق",-1))]),r("span",ra,l(H.value.join("، ")),1)]),r("div",ea,[r("span",na,[(t(),s("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:E.card},null,8,ta)),o[8]||(o[8]=M(" المبلغ التقديري",-1))]),r("span",{class:"v",style:ua},l(n(G)(A.value.total))+" ر.س",1)])]),r("div",aa,[o[10]||(o[10]=r("h4",{style:{"font-family":"var(--font-d)","font-size":"16px",color:"var(--ink)"}},"رقم الفاتورة",-1)),r("div",oa,l(n(z).bookRef||"—"),1),r("div",ia,[r("img",{src:L.value,alt:"QR تفاصيل الحجز",loading:"lazy"},null,8,sa)]),r("a",{class:"receipt-link",href:F.value,target:"_blank",rel:"noopener"},"فتح تفاصيل الحجز",8,la),o[11]||(o[11]=r("small",null,"امسح الرمز بالكاميرا لعرض تفاصيل الحجز",-1))])]),r("div",da,[r("button",{class:"btn btn-gold",onClick:o[0]||(o[0]=_=>j("home"))},[...o[12]||(o[12]=[r("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[r("path",{d:"M3 9l9-6 9 6v11a1 1 0 01-1 1H4a1 1 0 01-1-1z"})],-1),M(" العودة إلى الرئيسية",-1)])]),r("button",{class:"btn btn-line",onClick:o[1]||(o[1]=_=>j("calendar"))},[...o[13]||(o[13]=[r("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[r("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),r("path",{d:"M16 2v4M8 2v4M3 10h18M12 14v4M10 16h4"})],-1),M(" إضافة للتقويم",-1)])]),r("button",{class:"btn btn-line",onClick:o[2]||(o[2]=_=>j("share"))},[...o[14]||(o[14]=[fr('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"></path></svg> مشاركة الحجز',2)])])]),r("div",pa,[(t(),s(D,null,X($,(_,N)=>r("div",{key:N,class:"trust"},[r("span",ca,[(t(),s("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7",innerHTML:_[2]},null,8,ga))]),r("b",null,l(_[0]),1),r("small",null,l(_[1]),1)])),64))])])}}},ma={key:0,class:"card"},ha={key:0,class:"br-img"},ba=["src","alt"],fa={key:1,class:"sum-row"},va={class:"v"},ya={key:2,class:"sum-row"},wa={class:"v"},ka={class:"sum-row"},_a={class:"v"},za={class:"sum-row"},$a={class:"v"},Ma={key:3,class:"sum-row"},Ca={class:"v"},Sa={class:"sum-svcs"},Fa={class:"nm"},Ba={class:"pr"},La=["onClick"],Aa={class:"sum-price"},Ea={class:"sp-row"},Ta={class:"sp-row"},Da={class:"sp-total"},ja={class:"v"},Ha={class:"sum-note"},Ia={width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",style:{flex:"none"}},Na={__name:"BookingSummary",setup(nr){const{state:e,selSvcs:z,totalDur:v,priceParts:S,toggleSvc:B}=lr(),{current:C}=vr(),j=er(!1),A=m(()=>e.services.length>0);sr(A,q=>{q?Qr(()=>requestAnimationFrame(()=>{j.value=!0})):j.value=!1},{immediate:!0});const x=m(()=>S.value),H=m(()=>e.date?jr(e.date):"");return(q,y)=>(t(),s("div",{id:"summary",class:I({show:j.value})},[A.value?(t(),s("div",ma,[y[13]||(y[13]=r("h3",null,[r("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"var(--gold-deep)","stroke-width":"1.8"},[r("path",{d:"M9 11l3 3L22 4"}),r("path",{d:"M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"})]),M(" ملخص الحجز")],-1)),n(C)?(t(),s("div",ha,[n(C).image?(t(),s("img",{key:0,src:n(C).image,alt:n(C).name},null,8,ba)):V("",!0)])):V("",!0),n(C)?(t(),s("div",fa,[y[0]||(y[0]=r("span",{class:"k"},"📍 الفرع",-1)),r("span",va,l(n(C).name),1)])):V("",!0),n(e).date?(t(),s("div",ya,[y[1]||(y[1]=r("span",{class:"k"},"📅 التاريخ",-1)),r("span",wa,l(H.value),1)])):V("",!0),r("div",ka,[y[2]||(y[2]=r("span",{class:"k"},"⏱️ المدة الإجمالية",-1)),r("span",_a,l(n(xr)(n(v))),1)]),r("div",za,[y[3]||(y[3]=r("span",{class:"k"},"✂️ عدد الخدمات",-1)),r("span",$a,l(n(z).length)+" "+l(n(z).length>2?"خدمات":"خدمة"),1)]),n(e).mode?(t(),s("div",Ma,[y[4]||(y[4]=r("span",{class:"k"},"👤 الموظفون",-1)),r("span",Ca,l(n(e).mode==="auto"?"اختيار تلقائي ذكي":"اختيار يدوي"),1)])):V("",!0),r("div",Sa,[(t(!0),s(D,null,X(n(z),F=>(t(),s("div",{key:F.id,class:"sum-svc"},[y[6]||(y[6]=r("i",{style:{background:"var(--gold)"}},null,-1)),r("span",Fa,l(F.name),1),r("span",Ba,l(n(G)(F.price))+" ر.س",1),r("button",{class:"rm","aria-label":"حذف",onClick:L=>n(B)(F)},[...y[5]||(y[5]=[r("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[r("path",{d:"M18 6L6 18M6 6l12 12"})],-1)])],8,La)]))),128))]),r("div",Aa,[r("div",Ea,[y[7]||(y[7]=r("span",null,"المجموع الفرعي",-1)),r("span",null,l(n(G)(x.value.sub))+" ر.س",1)]),r("div",Ta,[y[8]||(y[8]=r("span",null,"ضريبة القيمة المضافة (15%)",-1)),r("span",null,"+"+l(n(G)(x.value.vat))+" ر.س",1)]),r("div",Da,[y[10]||(y[10]=r("span",{class:"k"},"المبلغ الإجمالي",-1)),r("span",ja,[M(l(n(G)(x.value.total))+" ",1),y[9]||(y[9]=r("small",null,"ر.س",-1))])])]),r("div",Ha,[(t(),s("svg",Ia,[...y[11]||(y[11]=[r("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},null,-1)])])),y[12]||(y[12]=M(" بياناتك محمية — يمكنك تعديل أو إلغاء الحجز قبل 6 ساعات من الموعد",-1))])])):V("",!0)],2))}},Pa={class:"shell"},Va={class:"wrap"},Ya={class:"panel",id:"panel"},Ra={key:0,class:"success-wrap receipt-wrap"},qa={class:"suc-grid receipt-grid"},Oa={class:"card suc-details"},Ga={class:"sd-row"},Ua={class:"v receipt-code"},Wa={class:"sd-row"},Ka={class:"v"},Xa={class:"sd-row"},Ja={class:"v"},Qa={class:"sd-row"},Za={class:"v"},ro={class:"sd-row"},eo={class:"v"},no={class:"sd-row"},to={class:"card suc-details receipt-services"},ao={class:"footbar",id:"footbar"},oo={class:"wrap in"},io={class:"fb-mid",id:"fbMid"},so={key:0,class:"tot"},lo=["disabled"],po="color:var(--gold-deep);font-family:var(--font-d);font-size:17px",yo={__name:"BookingView",setup(nr){const e=er(null),z=Zr(),{current:v,locations:S,loadServiceLocations:B,setLocation:C}=vr(),{requireAuth:j,user:A}=Yr();B(),sr([()=>z.query.branch,S],([R,k])=>{const K=Array.isArray(R)?R[0]:R;if(!K||!k.length)return;const Q=K==="hm"||K==="home-service"?k.find(dr=>dr.home):k.find(dr=>String(dr.id)===String(K));Q&&C(Q.id)},{immediate:!0});const{state:x,selSvcs:H,priceParts:q,canProceed:y,nextLabel:F,reset:L,payableTotal:E,walletDiscount:$,loyaltyPointsUsed:b}=lr();re(pe,"booking"),ee(e);const o=er(!1),c=er(""),_=er(!1);function N(R){c.value=R,_.value=!0,clearTimeout(N._h),N._h=setTimeout(()=>{_.value=!1},2600)}const Y=m(()=>x.services.length>0),T=m(()=>x.step===4?E.value:q.value.total);function rr(R){if(!R)return null;try{const k=String(R).replace(/-/g,"+").replace(/_/g,"/"),K=k.padEnd(k.length+(4-k.length%4)%4,"="),Q=JSON.parse(decodeURIComponent(escape(atob(K))));return Q&&typeof Q=="object"?Q:null}catch{return null}}const U=m(()=>rr(z.query.receipt)),g=m(()=>!!U.value),p=m(()=>{var R;return Array.isArray((R=U.value)==null?void 0:R.s)?U.value.s:[]}),u=m(()=>!g.value&&!x.done&&Y.value&&x.step>=1),h=m(()=>u.value?"minmax(0,1fr) minmax(285px,315px)":"1fr");function f(){x.step>0&&(x.step--,scrollTo({top:0,behavior:"smooth"}))}function w(){if(y.value){if(x.step===4){j(mr);return}x.step++,scrollTo({top:0,behavior:"smooth"})}}function W(R){return`${R.getFullYear()}-${String(R.getMonth()+1).padStart(2,"0")}-${String(R.getDate()).padStart(2,"0")}`}async function mr(){var R,k,K,Q,dr,Mr,hr;o.value=!0;try{const br=[(R=A.value)==null?void 0:R.first_name,(k=A.value)==null?void 0:k.last_name].filter(Boolean).join(" ");x.cust.name=x.cust.name||br||((K=A.value)==null?void 0:K.username)||"",x.cust.phone=x.cust.phone||((Q=A.value)==null?void 0:Q.mobile)||"",x.cust.mail=x.cust.mail||((dr=A.value)==null?void 0:dr.email)||"";const Ar=(Mr=v.value)!=null&&Mr.home?0:Number((hr=v.value)==null?void 0:hr.id),Er=H.value.map(J=>{var Z;return{subServices:[{id:J.id,date:W(x.date),time:x.time[J.id],duration:J.dur,staffId:(Z=x.emp[J.id])==null?void 0:Z.id}]}});await oe({branch:Ar,services:Er,customerName:x.cust.name,mobileNo:x.cust.phone});const Cr=x.rewards,pr=Number($.value.toFixed(2)),yr=b.value,Sr=pr>0,i=yr>0,a=Cr.couponApplied||"",d=Sr||i?"card":x.pay||"card",P=await ie(d,{wallet:Sr,walletAmount:pr,loyalty:i,loyaltyPoints:yr,couponCode:a});if(P.payment_url){window.location.href=P.payment_url;return}x.bookRef=P.invoice_id||null,x.done=!0,scrollTo({top:0,behavior:"smooth"})}catch(br){N(br.message||"تعذّر إتمام الحجز، حاول مرة أخرى")}finally{o.value=!1}}function $r(){L(),location.href="/"}return(R,k)=>(Rr("RouterLink"),t(),s("div",{ref_key:"root",ref:e},[r("div",Pa,[g.value?V("",!0):(t(),ur(ve,{key:0})),r("div",Va,[r("div",{class:"stage",id:"stage",style:_r(`grid-template-columns:${h.value}`)},[r("main",Ya,[g.value?(t(),s("div",Ra,[k[10]||(k[10]=r("div",{class:"suc-ic"},[r("svg",{width:"44",height:"44",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.2"},[r("path",{d:"M20 6L9 17l-5-5"})])],-1)),k[11]||(k[11]=r("h1",null,"تفاصيل الحجز",-1)),k[12]||(k[12]=r("p",{class:"sub"},"تم فتح تفاصيل الحجز من رمز QR",-1)),r("div",qa,[r("div",Oa,[k[8]||(k[8]=r("h4",null,"بيانات الحجز",-1)),r("div",Ga,[k[2]||(k[2]=r("span",{class:"k"},"رقم الفاتورة",-1)),r("span",Ua,l(U.value.r||"—"),1)]),r("div",Wa,[k[3]||(k[3]=r("span",{class:"k"},"الفرع",-1)),r("span",Ka,l(U.value.b||"—"),1)]),r("div",Xa,[k[4]||(k[4]=r("span",{class:"k"},"التاريخ",-1)),r("span",Ja,l(U.value.d||"—"),1)]),r("div",Qa,[k[5]||(k[5]=r("span",{class:"k"},"مدة الجلسة",-1)),r("span",Za,l(U.value.u||"—"),1)]),r("div",ro,[k[6]||(k[6]=r("span",{class:"k"},"الفريق",-1)),r("span",eo,l(U.value.e||"—"),1)]),r("div",no,[k[7]||(k[7]=r("span",{class:"k"},"المبلغ",-1)),r("span",{class:"v",style:po},l(n(G)(Number(U.value.p)||0))+" ر.س",1)])]),r("div",to,[k[9]||(k[9]=r("h4",null,"الخدمات",-1)),(t(!0),s(D,null,X(p.value,(K,Q)=>(t(),s("div",{key:Q,class:"receipt-service"},[r("b",null,l(K[0]),1),r("small",null,l(K[1]||"—")+" · "+l(K[2]||U.value.e||"—"),1),r("span",null,l(n(G)(Number(K[3])||0))+" ر.س",1)]))),128))])])])):n(x).done?(t(),ur(xa,{key:1,onHome:$r,onCalendar:k[0]||(k[0]=K=>N("تمت إضافة الموعد إلى التقويم")),onShare:k[1]||(k[1]=K=>N("تم نسخ رابط الحجز للمشاركة"))})):n(x).step===0?(t(),ur(qe,{key:2})):n(x).step===1?(t(),ur(an,{key:3})):n(x).step===2?(t(),ur(Hn,{key:4})):n(x).step===3?(t(),ur(tt,{key:5})):(t(),ur(Lt,{key:6}))]),Fr(r("aside",{class:I(["summary booking-summary-compact",{show:u.value,"booking-summary-time":n(x).step===2}])},[kr(Na)],2),[[Tr,u.value]])],4)])]),V("",!0),Fr(r("div",ao,[r("div",oo,[r("button",{class:"btn btn-back",id:"btnBack",style:_r({visibility:n(x).step===0?"hidden":"visible"}),onClick:f},[...k[29]||(k[29]=[r("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[r("path",{d:"M5 12h14M13 6l6 6-6 6"})],-1),M(" السابق ",-1)])],4),r("div",io,[k[31]||(k[31]=r("span",null,"🔒 بياناتك محمية وآمنة",-1)),Y.value?(t(),s("span",so,[k[30]||(k[30]=M("المبلغ الإجمالي ",-1)),r("b",null,l(n(G)(Math.round(T.value)))+" ر.س",1)])):V("",!0)]),r("button",{class:I(["btn",n(x).step===4?"btn-pay":"btn-gold"]),id:"btnNext",disabled:!n(y),onClick:w},[M(l(n(F))+" ",1),k[32]||(k[32]=r("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.2"},[r("path",{d:"M19 12H5M11 18l-6-6 6-6"})],-1))],10,lo)])],512),[[Tr,!n(x).done&&!g.value]]),r("div",{class:I(["pay-loading",{on:o.value}]),id:"payLoading"},[...k[33]||(k[33]=[r("div",{class:"pl-box"},[r("div",{class:"pl-ring"}),r("b",null,"جارٍ معالجة الدفع بأمان…"),r("small",null,"لا تغلق الصفحة، سيتم تأكيد حجزك خلال لحظات")],-1)])],2),r("div",{class:I(["toast",{on:_.value}]),id:"toast"},l(c.value),3)],512))}};export{yo as default};
