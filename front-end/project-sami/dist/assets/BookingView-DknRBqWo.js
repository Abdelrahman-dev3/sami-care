import{D as dr,E as Ar,u as n,o as t,c as o,b as r,F as D,e as W,n as P,t as a,h as fr,r as ar,s as $r,G as Yr,i as v,j as Rr,q as I,a as _,d as U,x as br,k as qr,H as Fr,I as cr,m as pr,w as Er,J as Nr,A as Ur,B as Vr,K as kr,y as J,_ as Or,L as Wr,M as Gr,p as ur,N as Kr,O as Jr}from"./index-DLnqZKEk.js";import{u as Xr,a as Qr}from"./useInternalLinks-DYIoCoE9.js";import{u as or,r as O,f as xr,a as nr,b as Tr}from"./useBooking-CLSPbgOd.js";import{f as Zr,a as re,b as ee,v as ne,c as te,i as ae}from"./bookingApi-hCn3ka-4.js";import{s as oe}from"./serviceDetails-gQMMCHKA.js";import{c as Dr,a as _r,b as jr}from"./giftIcons-C3hH12nn.js";import{l as ie}from"./i18nField-CJ_3XKph.js";import{_ as Sr}from"./SkeletonLoader-dbXOyXap.js";import{f as se}from"./accountApi-8-hYp00J.js";const le=`\r
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
.sub.sel{border-color:var(--acc,var(--gold));background:linear-gradient(160deg,#FFFBF0,#fff);box-shadow:0 0 0 3px color-mix(in srgb,var(--acc,var(--gold)) 18%,transparent)}
\r
/* صف واحد: الأيقونة ثم الاسم ثم مربّع الاختيار في الطرف */\r
.sub .top{display:grid;grid-template-columns:30px minmax(0,1fr) 19px;align-items:start;gap:9px;margin-bottom:6px}
.sub .top .si{flex:none;width:30px;height:30px;border-radius:9px;display:grid;place-items:center;
  background:color-mix(in srgb,var(--acc,var(--gold)) 14%,#fff);color:var(--acc,var(--gold-deep))}
.sub .top .si svg{width:17px;height:17px;fill:none;stroke:currentColor;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}
.sub .top b{min-width:0;font-size:13px;color:var(--ink);line-height:1.5;padding-top:2px;text-align:right;overflow-wrap:break-word}
.sub .chk{flex:none;width:19px;height:19px;border-radius:6px;border:1.5px solid var(--line);
  display:grid;place-items:center;color:#fff;transition:all .25s var(--ease)}
.sub.sel .chk{background:var(--acc,var(--gold));border-color:transparent;color:#fff}
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
.emp-row{--acc:var(--gold);display:block;margin-bottom:16px;background:#fff;border:1px solid var(--line);border-radius:18px;overflow:hidden;box-shadow:0 14px 30px -24px rgba(80,50,20,.32)}
.emp-cat{padding:13px 15px 11px;color:var(--ink);display:flex;justify-content:flex-start;align-items:center;gap:11px;text-align:right;background:#fff;border-bottom:1px solid rgba(143,113,52,.12)}
.emp-cat .cat-ico{flex:none;width:43px;height:43px;border-radius:50%;display:grid;place-items:center;border:1px solid color-mix(in srgb,var(--acc) 34%,transparent);background:color-mix(in srgb,var(--acc) 11%,#fff);color:var(--acc,var(--gold-deep))}
.emp-cat .cat-ico svg{width:19px;height:19px;fill:none;stroke:currentColor;stroke-width:1.65;stroke-linecap:round;stroke-linejoin:round}
.emp-cat__info{min-width:0;display:grid;gap:2px}
.emp-cat b{font-family:var(--font-d);font-size:14.5px;line-height:1.45;color:var(--ink);overflow-wrap:break-word}.emp-cat small{font-size:11px;color:var(--acc,var(--gold-deep));overflow-wrap:break-word}
.emp-list{display:flex;flex-wrap:nowrap;gap:9px;overflow-x:auto;overflow-y:hidden;padding:12px 14px 15px;background:linear-gradient(180deg,#fff,#FFFDF9);scrollbar-width:thin;scrollbar-color:var(--gold) rgba(198,161,91,.1);scroll-snap-type:x proximity;overscroll-behavior-inline:contain}
.emp-list::-webkit-scrollbar{height:6px}\r
.emp-list::-webkit-scrollbar-track{background:rgba(198,161,91,.1);border-radius:999px}\r
.emp-list::-webkit-scrollbar-thumb{background:linear-gradient(90deg,var(--gold-deep),var(--gold));border-radius:999px}\r
.emp{
  flex:0 0 104px;background:#fff;border:1.5px solid var(--line);border-radius:13px;padding:10px 8px;text-align:center;
  cursor:pointer;transition:all var(--dur) var(--ease);position:relative;scroll-snap-align:start;touch-action:manipulation;
}
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
.emp-row--group{display:grid;grid-template-columns:190px minmax(0,1fr);align-items:stretch;min-height:154px}
.emp-row--group .emp-cat--group{display:grid;justify-items:center;align-content:center;gap:8px;text-align:center;padding:20px 16px;background:linear-gradient(145deg,color-mix(in srgb,var(--acc,var(--gold)) 88%,#c99a3e),#c99639);color:#fff;border-bottom:0;border-inline-start:1px solid rgba(255,255,255,.22)}
.emp-row--group .emp-cat--group .cat-ico{width:52px;height:52px;border-color:rgba(255,255,255,.55);background:rgba(255,255,255,.13);color:#fff}
.emp-row--group .emp-cat--group .cat-ico svg{width:23px;height:23px}
.emp-row--group .emp-cat--group b{color:#fff;font-size:17px}
.emp-row--group .emp-cat--group small{color:rgba(255,255,255,.86);font-weight:700}
.emp-cat__services{display:block;max-width:150px;color:rgba(255,255,255,.78);font-size:10px;line-height:1.55;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.emp-list--groups{align-items:stretch;padding:16px;background:linear-gradient(180deg,#fff,#FFFDF9)}
.emp-list--groups .emp{flex-basis:132px;min-height:134px;padding:16px 10px}
.emp-list--groups .emp .av{width:58px;height:58px;border-radius:17px}
.emp-list--groups .emp:not(.any) .av::before{width:37px;height:44px;border-radius:20px 20px 12px 12px}
.emp-list--groups .emp b{font-size:12px}
@media(max-width:700px){
  .emp-row--group{grid-template-columns:1fr;min-height:0}
  .emp-row--group .emp-cat--group{display:flex;justify-content:flex-start;text-align:right;padding:13px 15px;border-inline-start:0}
  .emp-row--group .emp-cat--group .cat-ico{width:43px;height:43px}
  .emp-cat__services{max-width:none;color:rgba(255,255,255,.78);font-size:9.5px}
  .emp-list--groups .emp{flex-basis:108px;min-height:112px;padding:11px 8px}
  .emp-list--groups .emp .av{width:46px;height:46px;border-radius:13px}
}
.time-grid{display:grid;grid-template-columns:minmax(300px,340px) minmax(0,1fr);gap:18px;align-items:start}
.time-grid>*{min-width:0}\r
.cal{padding:20px;box-shadow:0 18px 38px -30px rgba(80,60,20,.42)}\r
.cal-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px}\r
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
.service-time-summary{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin:-6px 0 12px;font-size:11.5px;color:var(--mute)}
.service-time-summary span{display:inline-flex;align-items:center;min-height:26px;padding:5px 9px;border-radius:999px;background:#FFF8EA;border:1px solid rgba(206,146,52,.2)}
.service-time-summary .shift-note{color:var(--gold-deep);background:#FFF2DD;border-color:rgba(206,146,52,.35);font-weight:700}
.time-start-card h4{display:flex;align-items:baseline;justify-content:space-between;gap:12px;flex-wrap:wrap}
.time-start-service{display:flex;align-items:center;gap:12px;margin:0 0 16px;padding:12px 14px;border-radius:14px;background:linear-gradient(180deg,rgba(255,255,255,.94),rgba(252,248,238,.86));border:1px solid rgba(198,161,91,.22)}
.time-start-service .cat-ico,.plan-icon{width:42px;height:42px;display:grid;place-items:center;flex:0 0 auto;border-radius:12px;color:var(--acc,var(--gold-deep));background:rgba(198,161,91,.1);border:1px solid rgba(198,161,91,.18)}
.time-start-service .cat-ico svg,.plan-icon svg{width:24px;height:24px;stroke:currentColor}
.time-start-copy{min-width:0;display:grid;gap:3px}.time-start-copy b{font-size:13.5px}.time-start-copy small{font-size:11px;color:var(--mute);line-height:1.6;white-space:normal}
.initial-slots{min-height:0}
.session-plan{margin-top:22px;padding:20px;border-radius:16px;background:#FCFAF4;border:1px solid var(--line)}
.session-plan h4{font-family:var(--font-d);font-size:16px;color:var(--ink);margin-bottom:16px;display:flex;gap:8px;align-items:center}
.plan-track{display:flex;flex-direction:row;gap:10px;align-items:stretch;overflow-x:auto;padding:6px 4px 12px;margin-top:12px;scrollbar-width:thin;scrollbar-color:rgba(156,107,31,.38) transparent;scroll-snap-type:x proximity;overscroll-behavior-inline:contain}
.plan-track::-webkit-scrollbar{height:6px}.plan-track::-webkit-scrollbar-thumb{background:rgba(156,107,31,.32);border-radius:999px}
.plan-item{position:relative;flex:0 0 172px;padding:14px 15px;border-radius:12px;border:1px solid var(--line);background:#fff;scroll-snap-align:start}
.plan-item--group{border-color:rgba(198,161,91,.28);background:linear-gradient(180deg,#fff,rgba(255,250,240,.82))}
.plan-item.pending{opacity:.72}
.plan-item b{font-size:13px;display:block}
.plan-item small{font-size:11px;color:var(--mute);display:block;margin-top:3px}
.plan-item .t{font-size:11.5px;font-weight:700;margin-top:7px;display:block}
.plan-gap{flex:0 0 126px;align-self:center;display:grid;place-items:center;text-align:center;gap:3px;padding:10px 12px;border-radius:999px;background:#FFF8EA;border:1px dashed rgba(198,161,91,.42);color:var(--gold-deep);scroll-snap-align:start}
.plan-gap span,.plan-gap small{font-size:10.5px;color:var(--mute)}.plan-gap b{font-size:11px}
.plan-note{display:flex;gap:8px;align-items:center;margin-top:14px;font-size:12px;color:var(--green);
  background:var(--green-bg);border-radius:10px;padding:10px 14px}
.plan-note--pending{color:var(--gold-deep);background:#FFF8EA}.plan-note--warn{color:#9A4D16;background:#FFF2DD}
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
  overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\r
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
.up button{flex:none;padding:8px 15px;border-radius:9px;border:1px solid var(--gold);color:var(--gold-deep);
  font-size:12px;font-weight:600;transition:var(--dur)}
.up button:hover,.up.added button{background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);border-color:transparent}
.up button:disabled{opacity:.55;cursor:not-allowed;background:#d6cec1;color:#fff;border-color:transparent}
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
.coupon-msg{font-size:12px;margin-top:10px;display:none;align-items:center;gap:7px}
.coupon-msg.ok{display:flex;color:var(--green)}
.coupon-msg.bad{display:flex;color:#B3452F}
.payment-rewards-card{margin-top:16px}
.payment-rewards-card h4{display:flex;align-items:center;gap:10px;justify-content:flex-start}
.payment-rewards-card .step-dot{width:30px;height:30px;border-radius:50%;display:grid;place-items:center;background:#050403;color:var(--gold-bright);font-size:13px;font-weight:800;flex:none}
.rw.on{border-color:rgba(198,161,91,.55);background:linear-gradient(145deg,#fffdf8,#fff8ea);box-shadow:0 10px 26px -24px rgba(89,53,9,.5)}
.rw input:disabled{opacity:.55;cursor:not-allowed}
.coupon button:disabled{opacity:.65;cursor:wait}
.coupon .coupon-clear{padding:10px 14px;background:#F5F0E4;color:var(--gold-deep)}
.coupon .coupon-clear:hover{background:#EEE4D2}
.reward-total{margin-top:14px;padding:13px 15px;border:1px dashed rgba(198,161,91,.55);border-radius:13px;background:rgba(198,161,91,.08);display:grid;grid-template-columns:1fr auto;gap:5px 14px;align-items:center}
.reward-total span{font-size:12.5px;color:var(--mute)}
.reward-total b{font-size:15px;color:var(--gold-deep)}
.reward-total small{grid-column:1/-1;color:var(--green);font-size:11.5px;font-weight:700}
.trust-row{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:22px}
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
.qr-box{width:170px;height:170px;margin:0 auto;border:1.5px solid var(--gold);border-radius:16px;padding:10px;position:relative;background:#fff}
.qr-box canvas{width:100%;height:100%;image-rendering:pixelated}
.qr-box img{width:100%;height:100%;object-fit:contain;display:block}
.qr-card small{display:block;margin-top:12px;font-size:11.5px;color:var(--mute)}
.receipt-link{display:inline-flex;margin-top:12px;color:var(--gold-deep);font-size:12px;font-weight:700;text-decoration:underline}
.receipt-wrap{padding-top:24px}
.receipt-grid{grid-template-columns:1fr 1fr}
.receipt-code{direction:ltr;color:var(--gold-deep)}
.receipt-services{display:grid;align-content:start;gap:10px}
.receipt-service{display:grid;gap:4px;padding:12px 0;border-bottom:1px solid rgba(143,113,52,.12)}
.receipt-service:last-child{border-bottom:0}
.receipt-service b{font-size:13.5px;color:var(--ink)}
.receipt-service small{font-size:11.5px;color:var(--mute)}
.receipt-service span{font-size:12px;color:var(--gold-deep);font-weight:800}
.wallets{display:flex;gap:8px;justify-content:center;margin-top:14px}
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
  .cat-row{grid-template-columns:repeat(5,1fr);gap:4px;width:100%;max-width:none;margin-bottom:16px}
  .cat{height:74px;border-radius:10px;border-width:1.5px}
  .cat .lbl{font-size:9px;inset-inline:4px;bottom:6px;min-height:24px;display:flex;align-items:flex-end;justify-content:center}
  .cat .cat-name{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;line-height:1.25}
  .cat .chk{width:15px;height:15px;top:5px;left:5px}
  .sub{min-height:112px;padding:12px 12px 11px}
  .sub .top{grid-template-columns:28px minmax(0,1fr) 19px;align-items:center;gap:8px;margin-bottom:5px}
  .sub .top .si{width:28px;height:28px;border-radius:8px}
  .sub .top .si svg{width:16px;height:16px}
  .sub .top b{font-size:12.5px;line-height:1.45;padding-top:0}
  .sub small{min-height:0}
  .slots{grid-template-columns:repeat(2,1fr)}
  .emp-cat{padding:12px 13px 10px;gap:10px}
  .emp-cat .cat-ico{width:40px;height:40px}
  .emp-cat b{font-size:13.5px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
  .emp-cat small{font-size:10.5px}
  .emp-list{padding:12px 12px 14px}
  .branch-strip{flex-wrap:wrap;gap:7px}
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
`,Pr=[{id:"s1",cat:"hair",name:"حلاقة عادية",desc:"حلاقة شعر عادية بقصات عصرية",dur:20,price:20},{id:"s2",cat:"hair",name:"حلاقة شعر + تحديد لحية",desc:"حلاقة شعر مع تحديد اللحية",dur:30,price:35},{id:"s3",cat:"hair",name:"حلاقة مع غسيل",desc:"حلاقة مع غسيل وتنظيف الشعر",dur:30,price:30},{id:"s4",cat:"hair",name:"حلاقة VIP",desc:"حلاقة فاخرة مع خدمة VIP",dur:50,price:80},{id:"s5",cat:"hair",name:"تنسيق اللحية",desc:"تنسيق وتجميل اللحية",dur:20,price:15},{id:"s6",cat:"hair",name:"تصفيف الشعر",desc:"تصفيف الشعر بالمنتجات المناسبة",dur:15,price:15},{id:"s7",cat:"skin",name:"تنظيف بشرة عميق",desc:"تنظيف عميق ينظف وينعش البشرة",dur:50,price:150},{id:"s8",cat:"skin",name:"تنظيف بشرة سريع",desc:"جلسة سريعة لإشراقة فورية",dur:30,price:80},{id:"s9",cat:"skin",name:"ماسك الذهب",desc:"ماسك فاخر لنضارة استثنائية",dur:25,price:90},{id:"s10",cat:"pedi",name:"بديكير عادي",desc:"عناية أساسية للأقدام والأظافر",dur:45,price:60},{id:"s11",cat:"pedi",name:"بديكير فاخر",desc:"عناية متكاملة مع تقشير وترطيب",dur:60,price:100},{id:"s12",cat:"pedi",name:"بديكير طبي",desc:"علاج تشققات القدم والمسامير",dur:60,price:120},{id:"s13",cat:"pedi",name:"إزالة جلد ميت",desc:"إزالة الجلد الميت من القدمين",dur:30,price:40},{id:"s14",cat:"mass",name:"مساج استرخاء للجسم",desc:"استرخاء عميق يجدد طاقتك",dur:60,price:180},{id:"s15",cat:"mass",name:"مساج رأس",desc:"جلسة قصيرة لتخفيف التوتر",dur:15,price:25},{id:"s16",cat:"mass",name:"مساج علاجي",desc:"مساج متخصص للعضلات المجهدة",dur:60,price:220},{id:"s17",cat:"bath",name:"حمام مغربي كلاسيكي",desc:"تقشير وتنقية بطقوس أصيلة",dur:60,price:200},{id:"s18",cat:"bath",name:"حمام مغربي ملكي",desc:"التجربة الكاملة مع ماسك وتدليك",dur:90,price:300}];for(const rr of Object.values(oe))for(const e of rr.variants||[])e.svcId&&!Pr.some(z=>z.id===e.svcId)&&Pr.push({id:e.svcId,cat:e.cat,name:e.name,desc:e.desc||"",dur:e.dur,price:e.price,hidden:!0});const de=[{id:"u1",name:"كريم ترطيب متوازن",desc:"ترطيب وتغذية يدوم طويلًا",price:110,img:"https://sami-care.sa//storage/uploads/403/HyxbPuOgHBgbg0pgpMZr9bcFv2OryQtxjRMLnhxb.jpg"},{id:"u2",name:"غسول تنظيف البشرة",desc:"ينظف بعمق وينعش البشرة",price:95,img:"https://sami-care.sa//storage/uploads/405/L2sxjQjZgTztP0swgRTlXV0jVjCLuS5GJyypCJmT.jpg"},{id:"u3",name:"زيت اللحية الذهبي",desc:"ترطيب وتغذية عميقة",price:120,img:"https://sami-care.sa//storage/uploads/406/uGGoLhrbcMofuyS2kedJ44ejvBqYnz1M0mA0zTMP.jpg"}],pe=[{t:"اختيار الخدمات",ic:'<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"/>'},{t:"اختيار الموظف",ic:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>'},{t:"اختيار الوقت",ic:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>'},{t:"تأكيد الحجز",ic:'<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>'},{t:"الدفع",ic:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>'}],ce={class:"wrap stepper",id:"stepperWrap"},ge={class:"steps",id:"steps"},ue=["data-i"],xe={class:"n"},me=["onClick"],he=["innerHTML"],be={__name:"BookingStepper",setup(rr){const{state:e}=or();function z(k){k<e.step&&(e.step=k)}return(k,C)=>dr((t(),o("div",ce,[r("div",ge,[(t(!0),o(D,null,W(n(pe),(A,M)=>(t(),o("div",{key:M,class:P(["step",{active:M===n(e).step,done:M<n(e).step}]),"data-i":M},[C[0]||(C[0]=r("div",{class:"bar"},[r("i")],-1)),r("span",xe,a(M+1),1),r("span",{class:"bubble",onClick:h=>z(M)},[(t(),o("svg",{width:"21",height:"21",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7",innerHTML:A.ic},null,8,he))],8,me),r("label",null,a(A.t),1)],10,ue))),128))])],512)),[[Ar,!n(e).done]])}},fe={key:0,class:"branch-strip"},ve=["src","alt"],ye={class:"bi"},we={key:1,class:"empty-hint",style:{display:"grid",gap:"10px"}},ke={class:"cat-row"},_e=["data-cat","onClick"],$e=["src","alt"],ze={class:"lbl"},Me={class:"cat-name"},Ce={key:0,class:"empty-hint"},Fe={key:1,class:"sub-block"},Se={class:"sub-title"},Be={class:"sub-title__main"},Le={class:"tick"},Ae=["innerHTML"],Ee={key:0,class:"empty-hint"},Te={key:1,class:"subs"},De=["data-svc","onClick"],je={class:"top"},He={class:"si"},Ie=["innerHTML"],Pe={class:"foot"},Ne={class:"dur"},Ve={class:"prc"},Ye={__name:"ServicesStep",setup(rr){const{state:e,hasSvc:z,toggleSvc:k}=or(),{current:C}=fr(),{state:A}=qr(),M=l=>ie(l,A.lang),h=ar([]),j=ar(!0);$r(async()=>{try{const l=await Yr();h.value=l!=null&&l.status?l.data||[]:[]}catch{h.value=[]}finally{j.value=!1}});const S=v(()=>h.value.map(l=>({id:l.id,name:M(l.name),image:Rr(l.image)||l.feature_image||null}))),B=v(()=>h.value.find(l=>l.id===e.activeCat)||null),N=v(()=>{var l;return M((l=B.value)==null?void 0:l.name)}),y=v(()=>Dr(B.value)),L=v(()=>{var l;return(((l=B.value)==null?void 0:l.services)||[]).map(u=>({id:u.id,categoryId:B.value.id,categoryName:N.value,icon:y.value,name:M(u.name),desc:M(u.description)||"",dur:u.duration_min,price:u.default_price}))}),V=l=>e.services.some(u=>u.categoryId===l),F=v(()=>L.value.filter(l=>z(l.id)).length),c=l=>({"--acc":jr(l.icon)}),E=l=>_r(l.icon);return(l,u)=>(t(),o(D,null,[u[5]||(u[5]=r("div",{class:"panel-head"},[r("h1",null,"اختر الخدمة التي تناسبك"),r("p",null,"يمكنك اختيار خدمة واحدة أو أكثر من أي قسم")],-1)),n(C)?(t(),o("div",fe,[n(C).image?(t(),o("img",{key:0,src:n(C).image,alt:n(C).name},null,8,ve)):I("",!0),r("span",ye,[u[0]||(u[0]=_("مكان التنفيذ: ",-1)),r("b",null,a(n(C).name),1),r("small",null,a(n(C).address),1)])])):I("",!0),j.value?(t(),o("div",we,[U(Sr,{height:"64px","border-radius":"12px"}),U(Sr,{height:"92px","border-radius":"12px"})])):(t(),o(D,{key:2},[r("div",ke,[(t(!0),o(D,null,W(S.value,w=>(t(),o("div",{key:w.id,class:P(["cat",{sel:n(e).activeCat===w.id,"has-picks":V(w.id)}]),"data-cat":w.id,onClick:K=>n(e).activeCat=w.id},[w.image?(t(),o("img",{key:0,src:w.image,alt:w.name},null,8,$e)):I("",!0),u[1]||(u[1]=r("span",{class:"chk"},[r("svg",{width:"9",height:"9",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3"},[r("path",{d:"M20 6L9 17l-5-5"})])],-1)),r("span",ze,[r("span",Me,a(w.name),1)])],10,_e))),128))]),n(e).activeCat?(t(),o("div",Fe,[r("div",Se,[r("span",Be,[_(" خدمات "+a(N.value)+" ",1),r("span",Le,[(t(),o("svg",{viewBox:"0 0 24 24","aria-hidden":"true",innerHTML:n(_r)(y.value)},null,8,Ae))])]),r("small",null,a(F.value?F.value+" مختارة":"اختر خدمة أو أكثر"),1)]),L.value.length?(t(),o("div",Te,[(t(!0),o(D,null,W(L.value,w=>(t(),o("div",{key:w.id,class:P(["sub",{sel:n(z)(w.id)}]),"data-svc":w.id,style:br(c(w)),onClick:K=>n(k)(w)},[r("div",je,[r("span",He,[(t(),o("svg",{viewBox:"0 0 24 24","aria-hidden":"true",innerHTML:E(w)},null,8,Ie))]),r("b",null,a(w.name),1),u[3]||(u[3]=r("span",{class:"chk"},[r("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3"},[r("path",{d:"M20 6L9 17l-5-5"})])],-1))]),r("small",null,a(w.desc),1),r("div",Pe,[r("span",Ne,"🕐 "+a(w.dur)+" دقيقة",1),r("span",Ve,[_(a(n(O)(w.price))+" ",1),u[4]||(u[4]=r("small",null,"ر.س",-1))])])],14,De))),128))])):(t(),o("div",Ee,"لا توجد خدمات متاحة حاليًا ضمن هذا القسم"))])):(t(),o("div",Ce,[...u[2]||(u[2]=[r("b",null,"اختر خدمة لعرض تفاصيلها",-1),_("اختر إحدى الخدمات الأساسية أعلاه لعرض الخدمات الفرعية المتاحة",-1)])]))],64))],64))}},Re={class:"mode-grid"},qe={key:0,class:"emp-section emp-section--groups"},Ue={class:"emp-cat emp-cat--group"},Oe={class:"cat-ico"},We=["innerHTML"],Ge={class:"emp-cat__info"},Ke={class:"emp-cat__services"},Je={key:0,class:"empty-hint"},Xe={key:1,class:"empty-hint"},Qe={key:2,class:"emp-list emp-list--groups"},Ze=["onClick"],rn=["onClick"],en={key:1,class:"j-note card",style:{display:"flex",gap:"16px","align-items":"center",padding:"20px 24px","border-color":"var(--line)"}},nn={__name:"EmployeeStep",setup(rr){const{state:e,selSvcs:z,setEmployee:k}=or(),{current:C}=fr(),A=Fr({}),M=Fr({}),h=["توفير الوقت","أفضل تقييم متاح","تنفيذ خدمات القسم بنفس الموظف","منع أي تعارض في المواعيد"],j=["اختر موظفًا واحدًا لكل قسم","الموظف المختار ينفذ كل خدمات القسم","تحكم كامل في فريق جلستك"],S=v(()=>{const x=new Map;return z.value.forEach(g=>{const f=String(g.categoryId??g.categoryName??g.id);x.has(f)||x.set(f,{id:f,name:g.categoryName||g.name,icon:g.icon||Dr(g.categoryId),services:[]}),x.get(f).services.push(g)}),[...x.values()]});function B(x){return[x.first_name,x.last_name].filter(Boolean).join(" ")||x.username||"موظف"}function N(x){return{"--acc":jr(x.icon)}}function y(x){return`${x.services.length} ${x.services.length===1?"خدمة":"خدمات"}`}function L(x){return x.services.map(g=>g.name).join("، ")}function V(x){const g=x.services.map(m=>A[m.id]);if(!g.length||g.some(m=>!Array.isArray(m)))return[];const[f,...b]=g;return f.filter(m=>b.every($=>$.some(X=>String(X.id)===String(m.id))))}function F(x){return x.services.some(g=>M[g.id]||!Array.isArray(A[g.id]))}function c(x){const g=x.services.map(b=>e.emp[b.id]).filter(Boolean);if(g.length!==x.services.length)return null;const f=g[0];return g.every(b=>String(b.id)===String(f.id))?f:null}function E(x,g){var f;return String(((f=c(x))==null?void 0:f.id)??"")===String(g.id??"")}function l(x){const g=x.services.map(f=>z.value.findIndex(b=>String(b.id)===String(f.id))).filter(f=>f>=0);return g.length?Math.min(...g):-1}function u(x){const g=l(x);g!==-1&&z.value.slice(g).forEach(f=>{delete e.time[f.id]})}function w(x,g,{clearTimes:f=!0}={}){x.services.forEach(b=>k(b.id,g)),f&&u(x)}function K(){e.mode==="auto"&&S.value.forEach(x=>{const g=V(x);if(!g.length)return;const f=c(x);f&&g.some(m=>String(m.id)===String(f.id))||w(x,g[0])})}function tr(x){const g=e.mode!==x;e.mode=x,g&&(e.time={},x==="auto"&&(e.emp={})),K()}function T(x,g){e.mode="manual",w(x,g)}async function G(x){var g,f;if(!A[x.id]){M[x.id]=!0;try{const b=(g=C.value)!=null&&g.home?0:(f=C.value)==null?void 0:f.id,m=await Zr({branchId:b,serviceId:x.id});A[x.id]=(Array.isArray(m)?m:[]).map($=>({id:$.id,name:B($)})),K()}catch{A[x.id]=[]}finally{M[x.id]=!1}}}function Q(){z.value.forEach(G)}return $r(Q),cr(()=>z.value.map(x=>x.id),Q),cr(()=>e.mode,K),(x,g)=>(t(),o(D,null,[g[10]||(g[10]=r("div",{class:"panel-head"},[r("h1",null,"اختر الموظف"),r("p",null,"اختر موظفًا واحدًا لكل قسم، وسيتم تطبيقه على كل الخدمات المختارة داخل هذا القسم")],-1)),r("div",Re,[r("div",{class:P(["mode dark",{sel:n(e).mode==="auto"}]),onClick:g[0]||(g[0]=f=>tr("auto"))},[g[3]||(g[3]=pr('<span class="chk"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"></path></svg></span><span class="mi"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="8" r="4"></circle><path d="M5 21c0-4 3-6 7-6s7 2 7 6"></path></svg></span><h3>اختيار تلقائي</h3><div class="sub-t">سنختار لك أفضل فريق متاح</div><span class="flag">★ موصى به</span>',5)),r("ul",null,[(t(),o(D,null,W(h,(f,b)=>r("li",{key:b},[g[2]||(g[2]=r("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.6"},[r("path",{d:"M20 6L9 17l-5-5"})],-1)),_(" "+a(f),1)])),64))])],2),r("div",{class:P(["mode",{sel:n(e).mode==="manual"}]),onClick:g[1]||(g[1]=f=>tr("manual"))},[g[5]||(g[5]=pr('<span class="chk"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" stroke-width="3"><path d="M20 6L9 17l-5-5"></path></svg></span><span class="mi"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span><h3>اختيار موظف محدد</h3><div class="sub-t">اختر موظفًا لكل قسم</div><span class="flag">تحكم كامل</span>',5)),r("ul",null,[(t(),o(D,null,W(j,(f,b)=>r("li",{key:b},[g[4]||(g[4]=r("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.6"},[r("path",{d:"M20 6L9 17l-5-5"})],-1)),_(" "+a(f),1)])),64))])],2)]),n(e).mode==="manual"?(t(),o("div",qe,[(t(!0),o(D,null,W(S.value,f=>(t(),o("div",{key:f.id,class:"emp-row emp-row--group",style:br(N(f))},[r("div",Ue,[r("span",Oe,[(t(),o("svg",{viewBox:"0 0 24 24","aria-hidden":"true",innerHTML:n(_r)(f.icon)},null,8,We))]),r("span",Ge,[r("b",null,a(f.name),1),r("small",null,a(y(f)),1),r("span",Ke,a(L(f)),1)])]),F(f)?(t(),o("div",Je,[U(Sr,{height:"44px","border-radius":"8px"})])):V(f).length?(t(),o("div",Qe,[r("button",{type:"button",class:"emp any",onClick:Er(b=>T(f,V(f)[0]),["stop"])},[...g[6]||(g[6]=[pr('<span class="av" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span><b>أي موظف</b><span class="rate">الأنسب تلقائيًا</span>',3)])],8,Ze),(t(!0),o(D,null,W(V(f),b=>(t(),o("button",{key:b.id,type:"button",class:P(["emp",{sel:E(f,b)}]),onClick:Er(m=>T(f,b),["stop"])},[g[7]||(g[7]=r("span",{class:"chk"},[r("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"#fff","stroke-width":"3"},[r("path",{d:"M20 6L9 17l-5-5"})])],-1)),g[8]||(g[8]=r("span",{class:"av","aria-hidden":"true"},null,-1)),r("b",null,a(b.name),1)],10,rn))),128))])):(t(),o("div",Xe,"لا يوجد موظف متاح يمكنه تنفيذ كل خدمات هذا القسم"))],4))),128))])):I("",!0),n(e).mode==="auto"?(t(),o("div",en,[...g[9]||(g[9]=[pr('<span style="flex:none;width:44px;height:44px;border-radius:13px;display:grid;place-items:center;background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M13 2L3 14h9l-1 8 10-12h-9z"></path></svg></span><p style="font-size:13.5px;color:#5c5442;line-height:1.9;"><b style="color:var(--ink);">تم اختيار موظف واحد مناسب لكل قسم تلقائيًا.</b> سيتم تنفيذ كل خدمات القسم بنفس الموظف، وتقدر تشوف الأوقات في الخطوة الجاية.</p>',2)])])):I("",!0)],64))}},tn={class:"card branch-strip"},an={class:"cells"},on={class:"cell"},sn={class:"cell"},ln={class:"card cal"},dn={class:"cal-head"},pn=["disabled"],cn={class:"cal-cells"},gn=["disabled","onClick"],un={class:"dow"},xn={class:"dnum"},mn={key:0,class:"empty-hint",style:{"margin-top":"10px"}},hn={class:"date-line"},bn={class:"card detail-card time-start-card",style:{"margin-top":"14px"}},fn={class:"cat-ico"},vn=["innerHTML"],yn={class:"time-start-copy"},wn={key:1,class:"empty-hint"},kn={key:2,class:"empty-hint"},_n={key:3,class:"slots initial-slots"},$n=["onClick"],zn={key:0,class:"tag"},Mn={key:4,class:"best-slot"},Cn={key:0,class:"session-plan"},Fn={class:"plan-track"},Sn={key:0,class:"plan-gap"},Bn={class:"plan-icon"},Ln=["innerHTML"],An={class:"t"},En={key:0,class:"plan-note plan-note--pending"},Tn={key:1,class:"plan-note plan-note--warn"},Dn={key:2,class:"plan-note"},jn={__name:"TimeStep",setup(rr){const e=["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],z=["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],{state:k,selSvcs:C,totalDur:A,setTime:M}=or(),h=new Date;h.setHours(0,0,0,0);const j=ar(new Date(h)),S=Fr({}),B=Fr({}),N=v(()=>Array.from({length:7},(i,s)=>{const d=new Date(j.value);return d.setDate(d.getDate()+s),d})),y=v(()=>j.value.getTime()<=h.getTime()),L=v(()=>{const i=N.value;return i[0].getMonth()===i[6].getMonth()?`${i[0].getDate()} - ${i[6].getDate()} ${z[i[0].getMonth()]}`:`${i[0].getDate()} ${z[i[0].getMonth()]} - ${i[6].getDate()} ${z[i[6].getMonth()]}`}),V=i=>i<h,F=i=>k.date&&i.getTime()===k.date.getTime(),c=v(()=>{const i=new Map;return C.value.forEach(s=>{const d=String(s.categoryId??s.categoryName??s.id);i.has(d)||i.set(d,{id:d,name:s.categoryName||s.name,icon:s.icon||Dr(s.categoryId),services:[]}),i.get(d).services.push(s)}),[...i.values()]}),E=v(()=>c.value.flatMap(i=>i.services)),l=v(()=>E.value[0]||null),u=v(()=>c.value[0]||null),w=v(()=>l.value?k.time[l.value.id]:"");function K(i){const s=new Date(j.value);s.setDate(s.getDate()+i),j.value=s}function tr(i){return`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}-${String(i.getDate()).padStart(2,"0")}`}function T(i){if(!i||typeof i!="string")return null;const[s,d]=i.split(":").map(Number);return!Number.isFinite(s)||!Number.isFinite(d)?null:s*60+d}function G(i){if(!Number.isFinite(i))return"";const s=1440,d=(Math.round(i)%s+s)%s;return`${String(Math.floor(d/60)).padStart(2,"0")}:${String(d%60).padStart(2,"0")}`}function Q(i){return[...new Set((Array.isArray(i)?i:[]).filter(s=>T(s)!==null))].sort((s,d)=>T(s)-T(d))}function x(i){E.value.slice(i).forEach(s=>{delete k.time[s.id]})}function g(i,{apply:s=!1}={}){const d=T(i),R=E.value;if(!R.length||d===null)return{complete:!1,rows:[],end:""};let Z=d;const er=[];for(let sr=0;sr<R.length;sr++){const mr=R[sr],hr=Q(S[mr.id]),lr=sr===0?hr.includes(i)?i:hr.find(gr=>T(gr)>=Z):hr.find(gr=>T(gr)>=Z);if(!lr){s&&x(sr);const gr=er[er.length-1];return{complete:!1,rows:er,missing:mr,end:(gr==null?void 0:gr.end)||""}}const Hr=T(lr),Ir=Hr+(Number(mr.dur)||0);er.push({service:mr,start:lr,end:G(Ir),expected:G(Z),shifted:Hr>Z}),s&&M(mr.id,lr),Z=Ir}return{complete:!0,rows:er,end:G(Z)}}function f(){w.value&&g(w.value,{apply:!0})}function b(i){g(i,{apply:!0})}function m(i){return{"--acc":jr(i.icon)}}function $(i){return i.services.reduce((s,d)=>s+(Number(d.dur)||0),0)}function X(i){const s=i.services.map(R=>k.emp[R.id]).filter(Boolean);if(!s.length)return null;const d=s[0];return s.every(R=>String(R.id)===String(d.id)),d}function q(i){return`${i.services.length} ${i.services.length===1?"خدمة":"خدمات"}`}function p(i){return i.services.map(s=>s.name).join("، ")}function Y(i){V(i)||(k.date=i,k.time={},Object.keys(S).forEach(s=>{delete S[s]}))}async function H(i){var R;const s=k.emp[i.id];if(!k.date||!s){delete S[i.id];return}const d=tr(k.date);B[i.id]=!0;try{const Z=await re({date:d,staffId:s.id,durationMin:i.dur});k.date&&tr(k.date)===d&&((R=k.emp[i.id])==null?void 0:R.id)===s.id&&(S[i.id]=Q(Z),f())}catch{S[i.id]=[],f()}finally{B[i.id]=!1}}cr(()=>k.date,()=>C.value.forEach(H)),cr(()=>C.value.map(i=>{var s;return`${i.id}:${(s=k.emp[i.id])==null?void 0:s.id}`}),()=>C.value.forEach(H)),$r(()=>C.value.forEach(H));const vr=v(()=>k.date?`${e[k.date.getDay()]} ${k.date.getDate()} ${z[k.date.getMonth()]} ${k.date.getFullYear()}`:"اختر تاريخًا من التقويم"),Br=v(()=>l.value&&B[l.value.id]),yr=v(()=>l.value?Q(S[l.value.id]):[]),zr=v(()=>!!k.date&&E.value.every(i=>Array.isArray(S[i.id])&&!B[i.id])),Mr=v(()=>!!w.value&&E.value.some(i=>B[i.id]||!Array.isArray(S[i.id]))),wr=v(()=>w.value?E.value.find(i=>!k.time[i.id]):null),ir=v(()=>zr.value&&yr.value.find(i=>g(i).complete)||""),Cr=v(()=>{const i=[];let s=null;return c.value.forEach(d=>{const R=d.services.map(lr=>T(k.time[lr.id])),Z=R.every(lr=>lr!==null),er=R[0];if(!Z){i.push({type:"group",key:`group-${d.id}`,group:d,name:d.name,icon:d.icon,style:m(d),duration:$(d),services:d.services,employee:X(d),pending:!0});return}s!==null&&er>s&&i.push({type:"gap",key:`gap-${i.length}`,start:G(s),end:G(er),duration:er-s});const sr=d.services[d.services.length-1],hr=T(k.time[sr.id])+(Number(sr.dur)||0);i.push({type:"group",key:`group-${d.id}`,group:d,name:d.name,icon:d.icon,style:m(d),start:G(er),end:G(hr),duration:$(d),services:d.services,employee:X(d),pending:!1}),s=hr}),i}),Lr=v(()=>{const i=Cr.value.filter(d=>d.type==="group"&&!d.pending),s=i[i.length-1];return(s==null?void 0:s.end)||""});return(i,s)=>(t(),o(D,null,[s[13]||(s[13]=r("div",{class:"panel-head"},[r("h1",null,"اختر وقت بداية الجلسة"),r("p",null,"اختر أول موعد فقط، وسيتم ترتيب باقي الأقسام تلقائيًا حسب مدة كل قسم والأوقات المتاحة.")],-1)),r("div",tn,[s[5]||(s[5]=r("div",{class:"bi"},[r("b",null,"ملخص جلستك"),r("small",null,"قبل اختيار الوقت")],-1)),r("div",an,[r("div",on,[r("b",null,a(n(C).length),1),s[3]||(s[3]=_("الخدمات",-1))]),r("div",sn,[r("b",null,a(n(xr)(n(A))),1),s[4]||(s[4]=_("المدة الإجمالية",-1))])])]),r("div",ln,[r("div",dn,[r("button",{class:"cal-nav",disabled:y.value,onClick:s[0]||(s[0]=d=>K(-7))},[...s[6]||(s[6]=[r("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[r("path",{d:"M9 6l6 6-6 6"})],-1)])],8,pn),r("b",null,a(L.value),1),r("button",{class:"cal-nav",onClick:s[1]||(s[1]=d=>K(7))},[...s[7]||(s[7]=[r("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[r("path",{d:"M15 6l-6 6 6 6"})],-1)])])]),r("div",cn,[(t(!0),o(D,null,W(N.value,(d,R)=>(t(),o("button",{key:R,disabled:V(d),class:P({sel:F(d),avail:!V(d)}),onClick:Z=>Y(d)},[r("span",un,a(e[d.getDay()].slice(0,3)),1),r("span",xn,a(d.getDate()),1)],10,gn))),128))])]),n(k).date?(t(),o(D,{key:1},[r("div",hn,"التاريخ: "+a(vr.value),1),r("div",bn,[s[10]||(s[10]=r("h4",null,[_("وقت بداية الجلسة "),r("small",{style:{"font-weight":"400",color:"var(--mute)"}},"سننسق باقي الأقسام بعده")],-1)),u.value?(t(),o("div",{key:0,class:"time-start-service",style:br(m(u.value))},[r("span",fn,[(t(),o("svg",{viewBox:"0 0 24 24","aria-hidden":"true",innerHTML:n(_r)(u.value.icon)},null,8,vn))]),r("span",yn,[r("b",null,a(u.value.name),1),r("small",null,a(q(u.value))+" - "+a(p(u.value)),1)])],4)):I("",!0),Br.value||l.value&&!Array.isArray(S[l.value.id])?(t(),o("div",wn,[U(Sr,{height:"44px","border-radius":"8px"})])):yr.value.length?(t(),o("div",_n,[(t(!0),o(D,null,W(yr.value,d=>(t(),o("button",{key:d,class:P(["slot",{sel:w.value===d}]),onClick:R=>b(d)},[ir.value===d?(t(),o("span",zn,"الأفضل")):I("",!0),_(" "+a(n(nr)(d)),1)],10,$n))),128))])):(t(),o("div",kn,"لا توجد أوقات متاحة لهذا اليوم")),ir.value&&w.value!==ir.value?(t(),o("div",Mn,[r("span",null,[s[9]||(s[9]=_("أفضل بداية متاحة اليوم: ",-1)),r("b",null,a(n(nr)(ir.value)),1)]),r("button",{onClick:s[2]||(s[2]=d=>b(ir.value))},"اختيار")])):I("",!0)]),w.value?(t(),o("div",Cn,[s[12]||(s[12]=r("h4",null,[r("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[r("path",{d:"M13 2L3 14h7l-1 8 10-12h-7l1-8z"})]),_(" خطة تنفيذ الجلسة ")],-1)),r("div",Fn,[(t(!0),o(D,null,W(Cr.value,d=>{var R;return t(),o(D,{key:d.key},[d.type==="gap"?(t(),o("div",Sn,[s[11]||(s[11]=r("span",null,"فاصل انتظار",-1)),r("b",null,a(n(nr)(d.start))+" - "+a(n(nr)(d.end)),1),r("small",null,a(n(xr)(d.duration)),1)])):(t(),o("div",{key:1,class:P(["plan-item plan-item--group",{pending:d.pending}]),style:br(d.style)},[r("span",Bn,[(t(),o("svg",{viewBox:"0 0 24 24","aria-hidden":"true",innerHTML:n(_r)(d.icon)},null,8,Ln))]),r("b",null,a(d.name),1),r("small",null,"مع "+a(((R=d.employee)==null?void 0:R.name)||"-"),1),r("span",An,a(d.pending?"بانتظار وقت متاح":`${n(nr)(d.start)} - ${n(nr)(d.end)}`),1),r("small",null,a(q(d.group))+" · "+a(n(xr)(d.duration)),1)],6))],64)}),128))]),Mr.value?(t(),o("div",En,"جاري تنسيق باقي الأقسام حسب الأوقات المتاحة.")):wr.value?(t(),o("div",Tn,"لم نجد وقتًا متاحًا لـ "+a(wr.value.name)+" بعد هذا الموعد. اختر بداية أبكر أو يومًا آخر.",1)):(t(),o("div",Dn,"تم تنسيق الجلسة تلقائيًا، والنهاية المتوقعة "+a(n(nr)(Lr.value))+".",1))])):I("",!0)],64)):(t(),o("div",mn,[...s[8]||(s[8]=[r("b",null,"ابدأ باختيار التاريخ",-1),_("اختر يومًا من التقويم لعرض الأوقات المتاحة",-1)])]))],64))}},Hn={class:"card detail-card"},In={class:"d-grid"},Pn={class:"d-cell"},Nn={class:"d-cell"},Vn={class:"d-cell"},Yn={class:"d-cell"},Rn={class:"card detail-card"},qn={class:"timeline-cards"},Un={class:"tl-main"},On={class:"with"},Wn={class:"with"},Gn={class:"tl-time"},Kn={class:"tm"},Jn={class:"dr"},Xn={key:0,class:"card detail-card products-detail-card"},Qn={class:"upsell"},Zn=["src","alt"],rt={class:"inf"},et={class:"p"},nt=["disabled","onClick"],tt={class:"card detail-card"},at={class:"cust-grid"},ot={class:"fld"},it={class:"fld"},st={class:"fld"},lt={class:"notes-box",style:{"margin-top":"14px"}},dt={class:"terms"},pt={__name:"ConfirmStep",setup(rr){const{state:e,selSvcs:z,totalDur:k}=or(),{current:C}=fr(),{user:A,isAuthenticated:M}=Nr(),{state:h,products:j,addToCart:S,setQty:B}=Ur();$r(()=>{M.value&&A.value&&!e.cust.name&&(e.cust.name=[A.value.first_name,A.value.last_name].filter(Boolean).join(" "),e.cust.phone=A.value.mobile||"",e.cust.mail=A.value.email||"")});const N=v(()=>e.date?Tr(e.date):""),y=v(()=>{const F=j.value.slice(0,3);return F.length?F.map(c=>({id:c.id,name:c.n,desc:c.d,price:c.pr,img:c.image||c.img||"/images/generated/products/care-set-card-hq.png"})):de.map(c=>({id:null,name:c.name,desc:c.desc,price:c.price,img:c.img||"/images/generated/products/care-set-card-hq.png"}))});function L(F){return F.id!=null&&!!h.cart[F.id]}function V(F){F.id!=null&&(L(F)?B(F.id,0):S(F.id))}return(F,c)=>{var l;const E=Vr("RouterLink");return t(),o(D,null,[c[20]||(c[20]=r("div",{class:"panel-head"},[r("h1",null,"تأكيد الحجز"),r("p",null,"راجع تفاصيل جلستك قبل تأكيد الحجز والدفع")],-1)),r("div",Hn,[c[8]||(c[8]=r("h4",null,[r("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[r("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),r("path",{d:"M16 2v4M8 2v4M3 10h18"})]),_(" تفاصيل الموعد")],-1)),r("div",In,[r("div",Pn,[c[4]||(c[4]=r("small",null,"📍 الفرع",-1)),r("b",null,a(((l=n(C))==null?void 0:l.name)||"—"),1)]),r("div",Nn,[c[5]||(c[5]=r("small",null,"📅 التاريخ",-1)),r("b",null,a(N.value),1)]),r("div",Vn,[c[6]||(c[6]=r("small",null,"⏱️ المدة الإجمالية",-1)),r("b",null,a(n(xr)(n(k))),1)]),r("div",Yn,[c[7]||(c[7]=r("small",null,"✂️ عدد الخدمات",-1)),r("b",null,a(n(z).length),1)])])]),r("div",Rn,[c[9]||(c[9]=r("h4",null,[r("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[r("circle",{cx:"12",cy:"12",r:"9"}),r("path",{d:"M12 7v5l3 3"})]),_(" تفاصيل الجلسة")],-1)),r("div",qn,[(t(!0),o(D,null,W(n(z),u=>{var w;return t(),o("div",{key:u.id,class:"tl"},[r("div",Un,[r("b",null,a(u.name),1),r("div",On,a(u.categoryName),1),r("div",Wn,"مع "+a(((w=n(e).emp[u.id])==null?void 0:w.name)||"—"),1)]),r("div",Gn,[r("span",Kn,a(n(nr)(n(e).time[u.id])),1),r("span",Jn,a(u.dur)+" دقيقة · "+a(n(O)(u.price))+" ر.س",1)])])}),128))])]),y.value.length?(t(),o("div",Xn,[c[10]||(c[10]=r("h4",null,[r("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[r("path",{d:"M12 2l2.9 6.2 6.6.8-4.9 4.6 1.3 6.6L12 17l-5.9 3.2 1.3-6.6L2.5 9l6.6-.8z"})]),_(" منتجات مناسبة لجلستك")],-1)),r("div",Qn,[(t(!0),o(D,null,W(y.value,u=>(t(),o("div",{key:u.id||u.name,class:P(["up",{added:L(u)}])},[r("img",{src:u.img,alt:u.name,loading:"lazy"},null,8,Zn),r("span",rt,[r("b",null,a(u.name),1),r("small",null,a(u.desc),1),r("span",et,a(n(O)(u.price))+" ر.س",1)]),r("button",{type:"button",disabled:u.id==null,onClick:w=>V(u)},a(L(u)?"✓ أضيف":"إضافة"),9,nt)],2))),128))])])):I("",!0),r("div",tt,[c[19]||(c[19]=r("h4",null,[r("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[r("path",{d:"M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"}),r("circle",{cx:"12",cy:"7",r:"4"})]),_(" بيانات العميل")],-1)),r("div",at,[r("div",ot,[c[11]||(c[11]=r("small",null,"👤 الاسم",-1)),dr(r("input",{"onUpdate:modelValue":c[0]||(c[0]=u=>n(e).cust.name=u)},null,512),[[kr,n(e).cust.name]])]),r("div",it,[c[12]||(c[12]=r("small",null,"📱 رقم الجوال",-1)),dr(r("input",{dir:"ltr","onUpdate:modelValue":c[1]||(c[1]=u=>n(e).cust.phone=u)},null,512),[[kr,n(e).cust.phone]])]),r("div",st,[c[13]||(c[13]=r("small",null,"✉️ البريد الإلكتروني (اختياري)",-1)),dr(r("input",{dir:"ltr","onUpdate:modelValue":c[2]||(c[2]=u=>n(e).cust.mail=u)},null,512),[[kr,n(e).cust.mail]])])]),r("div",lt,[c[14]||(c[14]=r("small",{style:{"font-size":"11.5px",color:"var(--mute)",display:"block","margin-bottom":"7px"}},"📝 ملاحظات إضافية (اختياري)",-1)),dr(r("textarea",{placeholder:"اكتب أي ملاحظة أو طلب خاص بالجلسة...","onUpdate:modelValue":c[3]||(c[3]=u=>n(e).notes=u)},null,512),[[kr,n(e).notes]])]),r("div",dt,[c[17]||(c[17]=_("🛡️ بالتأكيد على الحجز، فإنك توافق على ",-1)),U(E,{to:"/terms"},{default:J(()=>[...c[15]||(c[15]=[_("الشروط والأحكام",-1)])]),_:1}),c[18]||(c[18]=_(" و",-1)),U(E,{to:"/privacy-policy"},{default:J(()=>[...c[16]||(c[16]=[_("سياسة الخصوصية",-1)])]),_:1})])])],64)}}},ct={class:"card detail-card"},gt={class:"pay-methods"},ut=["onClick"],xt={class:"pmi"},mt={class:"card detail-card payment-rewards-card"},ht={class:"rewards"},bt={class:"rt"},ft={class:"ri"},vt=["innerHTML"],yt=["max","value","disabled"],wt={class:"hint"},kt={class:"rt"},_t={class:"ri"},$t=["innerHTML"],zt=["max","value","disabled"],Mt={class:"hint"},Ct={class:"coupon"},Ft={class:"ci"},St=["innerHTML"],Bt=["onKeydown"],Lt=["disabled"],At={class:"reward-total"},Et={key:0},Tt={class:"trust-row"},Dt={class:"ti"},jt=["innerHTML"],Ht={__name:"PayStep",setup(rr){const{state:e,priceParts:z,pointValue:k,couponDiscount:C,walletDiscount:A,loyaltyPointsUsed:M,loyaltyDiscount:h,payableTotal:j}=or(),S=ar(!1);$r(async()=>{var b,m;try{const $=await se(),X=((b=$==null?void 0:$.data)==null?void 0:b.balances)||{};e.walletBalance=Number(X.wallet??0),e.loyaltyPoints=Number(X.loyalty_points??0)}catch{}try{const $=await ee();e.pointValue=Number(((m=$==null?void 0:$.data)==null?void 0:m.point_value)??.5)||.5}catch{}});const B=v(()=>Math.max(Number(e.walletBalance)||0,0)),N=v(()=>Math.max(parseInt(e.loyaltyPoints,10)||0,0)),y=v(()=>Math.max(z.value.total-C.value,0)),L=v(()=>Math.min(A.value,y.value)),V=v(()=>Math.max(z.value.total-C.value-L.value,0)),F=v(()=>Math.min(N.value,Math.ceil(V.value/k.value))),c=v(()=>L.value>0||M.value>0),E=v(()=>[{id:"cod",n:"الدفع عند الوصول",d:c.value?"غير متاح مع خصم المحفظة أو النقاط":"ادفع عند وصولك للفرع",logo:"COD",enabled:!c.value},{id:"mada",n:"مدى",d:"قريبًا",logo:"مدى",enabled:!1},{id:"card",n:"بطاقات الائتمان والخصم",d:c.value?"ادفع المتبقي بعد الخصومات":"قريبًا — Visa / Mastercard",logo:"VISA",enabled:c.value&&j.value>0},{id:"tabby",n:"تابي",d:"قريبًا",logo:"tabby",enabled:!1}]);cr([c,j],()=>{c.value&&e.pay==="cod"&&(e.pay=j.value>0?"card":null)});const l=[["ضمان الجودة","نضمن لك أفضل تجربة",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>'],["دفع آمن","تقنيات تشفير متقدمة",'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>'],["حماية البيانات","بياناتك محمية بالكامل",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'],["دعم فوري","فريق دعم جاهز لخدمتك",'<path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>']],u={wallet:'<path d="M18 8V7a2 2 0 00-2-2H5a2 2 0 000 4h14a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2V7"/><path d="M16 13h.01"/>',gift:'<path d="M20 12v8H4v-8"/><path d="M2 7h20v5H2z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 110-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 100-5C13 2 12 7 12 7z"/>',coupon:'<path d="M4 7a2 2 0 012-2h12a2 2 0 012 2v3a2 2 0 000 4v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3a2 2 0 000-4z"/><path d="M9 9h.01M15 15h.01M16 8l-8 8"/>'};function w(b){b.enabled&&(e.pay=b.id)}function K(b,m){const $=Number(b);return Number.isFinite($)?Math.max(0,Math.min($,m)):0}function tr(){e.rewards.useWallet=!e.rewards.useWallet,e.rewards.useWallet?e.rewards.walletAmount=K(e.rewards.walletAmount||y.value,Math.min(B.value,y.value)):e.rewards.walletAmount=0}function T(b){e.rewards.walletAmount=K(b,Math.min(B.value,y.value)),e.rewards.useWallet=e.rewards.walletAmount>0}function G(){e.rewards.useLoyalty=!e.rewards.useLoyalty,e.rewards.useLoyalty?e.rewards.loyaltyPoints=Math.min(e.rewards.loyaltyPoints||F.value,F.value):e.rewards.loyaltyPoints=0}function Q(b){const m=Math.max(0,Math.min(parseInt(b,10)||0,F.value));e.rewards.loyaltyPoints=m,e.rewards.useLoyalty=m>0}function x(b){const $=(b==null?void 0:b.discount_type)==="percent"?z.value.total*(Number(b==null?void 0:b.discount_percentage)||0)/100:Number(b==null?void 0:b.discount_amount)||0;return Math.min(Math.max($,0),z.value.total)}async function g(){const b=e.rewards.couponCode.trim();if(!b){e.rewards.couponStatus="bad",e.rewards.couponMessage="أدخل كود الخصم أولًا";return}S.value=!0;try{const m=await ne(b);if(!(m!=null&&m.valid)){e.rewards.couponApplied="",e.rewards.couponDiscount=0,e.rewards.couponStatus="bad",e.rewards.couponMessage="كود الخصم غير صالح";return}const $=x(m);e.rewards.couponCode=b,e.rewards.couponApplied=b,e.rewards.couponDiscount=$,e.rewards.couponStatus="ok",e.rewards.couponMessage=`تم تطبيق خصم ${O(Math.round($))} ر.س`}catch(m){e.rewards.couponStatus="bad",e.rewards.couponMessage=m.message||"تعذّر التحقق من الكوبون"}finally{S.value=!1}}function f(){e.rewards.couponApplied="",e.rewards.couponDiscount=0,e.rewards.couponStatus="",e.rewards.couponMessage=""}return cr([B,y],()=>{e.rewards.useWallet&&T(e.rewards.walletAmount)}),cr(F,()=>{e.rewards.useLoyalty&&Q(e.rewards.loyaltyPoints)}),(b,m)=>(t(),o(D,null,[m[11]||(m[11]=r("div",{class:"panel-head"},[r("h1",null,"الدفع"),r("p",null,"اختر طريقة الدفع المناسبة وأكمل حجزك")],-1)),r("div",ct,[m[5]||(m[5]=r("h4",null,"اختر طريقة الدفع",-1)),r("div",gt,[(t(!0),o(D,null,W(E.value,$=>(t(),o("div",{key:$.id,class:P(["pm",{sel:n(e).pay===$.id,disabled:!$.enabled}]),onClick:X=>w($)},[r("span",xt,a($.logo),1),r("span",null,[r("b",null,a($.n),1),r("small",null,a($.d),1)]),m[4]||(m[4]=r("span",{class:"rad"},[r("i")],-1))],10,ut))),128))]),m[6]||(m[6]=r("div",{class:"secure-line"},"🔒 جميع عمليات الدفع آمنة ومشفرة",-1))]),r("div",mt,[m[10]||(m[10]=r("h4",null,[r("span",{class:"step-dot"},"2"),_(" استخدام العروض و المكافآت")],-1)),r("div",ht,[r("div",{class:P(["rw",{on:n(e).rewards.useWallet}])},[r("div",bt,[r("span",ft,[(t(),o("svg",{width:"19",height:"19",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:u.wallet},null,8,vt))]),r("span",null,[m[7]||(m[7]=r("b",null,"استخدام من المحفظة",-1)),r("small",null,"الرصيد الحالي: "+a(n(O)(B.value))+" ر.س",1)]),r("span",{class:P(["switch",{on:n(e).rewards.useWallet}]),onClick:tr},null,2)]),r("input",{type:"number",min:"0",max:Math.min(B.value,y.value),step:"1",value:n(e).rewards.walletAmount,disabled:!n(e).rewards.useWallet,onInput:m[0]||(m[0]=$=>T($.target.value))},null,40,yt),r("span",wt,"المبلغ المتاح حتى "+a(n(O)(Math.round(Math.min(B.value,y.value))))+" ر.س",1)],2),r("div",{class:P(["rw",{on:n(e).rewards.useLoyalty}])},[r("div",kt,[r("span",_t,[(t(),o("svg",{width:"19",height:"19",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:u.gift},null,8,$t))]),r("span",null,[m[8]||(m[8]=r("b",null,"استخدام نقاط الولاء",-1)),r("small",null,"لديك "+a(n(O)(N.value))+" نقطة",1)]),r("span",{class:P(["switch",{on:n(e).rewards.useLoyalty}]),onClick:G},null,2)]),r("input",{type:"number",min:"0",max:F.value,step:"1",value:n(e).rewards.loyaltyPoints,disabled:!n(e).rewards.useLoyalty,onInput:m[1]||(m[1]=$=>Q($.target.value))},null,40,zt),r("span",Mt,"تساوي خصم "+a(n(O)(Math.round(n(M)*n(k))))+" ر.س",1)],2)]),r("div",Ct,[r("span",Ft,[(t(),o("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:u.coupon},null,8,St))]),dr(r("input",{"onUpdate:modelValue":m[2]||(m[2]=$=>n(e).rewards.couponCode=$),placeholder:"أدخل كود الخصم",onInput:m[3]||(m[3]=$=>n(e).rewards.couponApplied&&n(e).rewards.couponCode!==n(e).rewards.couponApplied?f():null),onKeydown:Wr(Er(g,["prevent"]),["enter"])},null,40,Bt),[[kr,n(e).rewards.couponCode]]),n(e).rewards.couponApplied?(t(),o("button",{key:0,type:"button",class:"coupon-clear",onClick:f},"إلغاء")):I("",!0),r("button",{type:"button",onClick:g,disabled:S.value},a(S.value?"...":"تطبيق"),9,Lt)]),n(e).rewards.couponMessage?(t(),o("p",{key:0,class:P(["coupon-msg",n(e).rewards.couponStatus])},a(n(e).rewards.couponMessage),3)):I("",!0),r("div",At,[m[9]||(m[9]=r("span",null,"المبلغ بعد المكافآت",-1)),r("b",null,a(n(O)(Math.round(n(j))))+" ر.س",1),n(C)||L.value||n(h)?(t(),o("small",Et," تم خصم "+a(n(O)(Math.round(n(C)+L.value+n(h))))+" ر.س ",1)):I("",!0)])]),r("div",Tt,[(t(),o(D,null,W(l,($,X)=>r("div",{key:X,class:"trust"},[r("span",Dt,[(t(),o("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7",innerHTML:$[2]},null,8,jt))]),r("b",null,a($[0]),1),r("small",null,a($[1]),1)])),64))])],64))}},It=Or(Ht,[["__scopeId","data-v-c11e2a79"]]),Pt={class:"success-wrap"},Nt={class:"suc-grid"},Vt={class:"card suc-details"},Yt={class:"sd-row"},Rt={class:"k"},qt=["innerHTML"],Ut={class:"v"},Ot={class:"sd-row"},Wt={class:"k"},Gt=["innerHTML"],Kt={class:"v"},Jt={class:"sd-row"},Xt={class:"k"},Qt=["innerHTML"],Zt={class:"v"},ra={class:"sd-row"},ea={class:"k"},na=["innerHTML"],ta={class:"v"},aa={class:"sd-row"},oa={class:"k"},ia=["innerHTML"],sa={class:"v"},la={class:"sd-row"},da={class:"k"},pa=["innerHTML"],ca={class:"card qr-card"},ga={class:"code"},ua={class:"qr-box"},xa=["src"],ma=["href"],ha={class:"suc-actions"},ba={class:"suc-perks"},fa={class:"ti"},va=["innerHTML"],ya="color:var(--gold-deep);font-family:var(--font-d);font-size:17px",wa={__name:"BookingSuccess",emits:["home","calendar","share"],setup(rr,{emit:e}){const{state:z,selSvcs:k,totalDur:C,priceParts:A}=or(),{current:M}=fr(),h=e,j=v(()=>A.value),S=v(()=>z.date?Tr(z.date):""),B=v(()=>[...new Set(k.value.map(E=>{var l;return(l=z.emp[E.id])==null?void 0:l.name}).filter(Boolean))]),N=v(()=>{var E;return{r:z.bookRef||"",b:((E=M.value)==null?void 0:E.name)||"",d:S.value,u:xr(C.value),e:B.value.join("، "),p:j.value.total,s:k.value.map(l=>{var u;return[l.name,nr(z.time[l.id]),((u=z.emp[l.id])==null?void 0:u.name)||"",l.price]})}}),y=v(()=>{const E=JSON.stringify(N.value);return btoa(unescape(encodeURIComponent(E))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}),L=v(()=>`${window.location.origin}/booking?receipt=${y.value}`),V=v(()=>`https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=12&data=${encodeURIComponent(L.value)}`),F={pin:'<path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>',cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>',scis:'<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"/>',user:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',card:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>'},c=[["خدمة VIP","تجربة فاخرة مصممة لراحتك",'<path d="M2 8l4 4 6-8 6 8 4-4v10a2 2 0 01-2 2H4a2 2 0 01-2-2z"/>'],["بياناتك آمنة","نضمن لك خصوصية وأمان بياناتك",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'],["تعديل الحجز","يمكنك تعديل أو إلغاء الحجز قبل موعده",'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>'],["دعم عملاء 24/7","نحن هنا لخدمتك دائمًا",'<path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>']];return(E,l)=>{var u;return t(),o("div",Pt,[l[15]||(l[15]=pr('<div class="suc-ic"><span class="spark s1">✦</span><span class="spark s2">✧</span><svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M20 6L9 17l-5-5"></path></svg></div><h1>تم تأكيد حجزك بنجاح!</h1><p class="sub">نتطلع لخدمتك وتقديم تجربة استثنائية تليق بك</p>',3)),r("div",Nt,[r("div",Vt,[l[9]||(l[9]=r("h4",null,"تفاصيل الحجز",-1)),r("div",Yt,[r("span",Rt,[(t(),o("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:F.pin},null,8,qt)),l[3]||(l[3]=_(" الفرع",-1))]),r("span",Ut,a(((u=n(M))==null?void 0:u.name)||"—"),1)]),r("div",Ot,[r("span",Wt,[(t(),o("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:F.cal},null,8,Gt)),l[4]||(l[4]=_(" التاريخ",-1))]),r("span",Kt,a(S.value),1)]),r("div",Jt,[r("span",Xt,[(t(),o("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:F.info},null,8,Qt)),l[5]||(l[5]=_(" مدة الجلسة",-1))]),r("span",Zt,a(n(xr)(n(C))),1)]),r("div",ra,[r("span",ea,[(t(),o("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:F.scis},null,8,na)),l[6]||(l[6]=_(" الخدمات",-1))]),r("span",ta,a(n(k).map(w=>`${w.name} (${n(nr)(n(z).time[w.id])})`).join(" + ")),1)]),r("div",aa,[r("span",oa,[(t(),o("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:F.user},null,8,ia)),l[7]||(l[7]=_(" الفريق",-1))]),r("span",sa,a(B.value.join("، ")),1)]),r("div",la,[r("span",da,[(t(),o("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:F.card},null,8,pa)),l[8]||(l[8]=_(" المبلغ التقديري",-1))]),r("span",{class:"v",style:ya},a(n(O)(j.value.total))+" ر.س",1)])]),r("div",ca,[l[10]||(l[10]=r("h4",{style:{"font-family":"var(--font-d)","font-size":"16px",color:"var(--ink)"}},"رقم الفاتورة",-1)),r("div",ga,a(n(z).bookRef||"—"),1),r("div",ua,[r("img",{src:V.value,alt:"QR تفاصيل الحجز",loading:"lazy"},null,8,xa)]),r("a",{class:"receipt-link",href:L.value,target:"_blank",rel:"noopener"},"فتح تفاصيل الحجز",8,ma),l[11]||(l[11]=r("small",null,"امسح الرمز بالكاميرا لعرض تفاصيل الحجز",-1))])]),r("div",ha,[r("button",{class:"btn btn-gold",onClick:l[0]||(l[0]=w=>h("home"))},[...l[12]||(l[12]=[r("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[r("path",{d:"M3 9l9-6 9 6v11a1 1 0 01-1 1H4a1 1 0 01-1-1z"})],-1),_(" العودة إلى الرئيسية",-1)])]),r("button",{class:"btn btn-line",onClick:l[1]||(l[1]=w=>h("calendar"))},[...l[13]||(l[13]=[r("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[r("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),r("path",{d:"M16 2v4M8 2v4M3 10h18M12 14v4M10 16h4"})],-1),_(" إضافة للتقويم",-1)])]),r("button",{class:"btn btn-line",onClick:l[2]||(l[2]=w=>h("share"))},[...l[14]||(l[14]=[pr('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"></path></svg> مشاركة الحجز',2)])])]),r("div",ba,[(t(),o(D,null,W(c,(w,K)=>r("div",{key:K,class:"trust"},[r("span",fa,[(t(),o("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7",innerHTML:w[2]},null,8,va))]),r("b",null,a(w[0]),1),r("small",null,a(w[1]),1)])),64))])])}}},ka={key:0,class:"card"},_a={key:0,class:"br-img"},$a=["src","alt"],za={key:1,class:"sum-row"},Ma={class:"v"},Ca={key:2,class:"sum-row"},Fa={class:"v"},Sa={class:"sum-row"},Ba={class:"v"},La={class:"sum-row"},Aa={class:"v"},Ea={key:3,class:"sum-row"},Ta={class:"v"},Da={class:"sum-svcs"},ja={class:"nm"},Ha={class:"pr"},Ia=["onClick"],Pa={class:"sum-price"},Na={class:"sp-row"},Va={class:"sp-row"},Ya={class:"sp-total"},Ra={class:"v"},qa={class:"sum-note"},Ua={width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",style:{flex:"none"}},Oa={__name:"BookingSummary",setup(rr){const{state:e,selSvcs:z,totalDur:k,priceParts:C,toggleSvc:A}=or(),{current:M}=fr(),h=ar(!1),j=v(()=>e.services.length>0);cr(j,N=>{N?Gr(()=>requestAnimationFrame(()=>{h.value=!0})):h.value=!1},{immediate:!0});const S=v(()=>C.value),B=v(()=>e.date?Tr(e.date):"");return(N,y)=>(t(),o("div",{id:"summary",class:P({show:h.value})},[j.value?(t(),o("div",ka,[y[13]||(y[13]=r("h3",null,[r("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"var(--gold-deep)","stroke-width":"1.8"},[r("path",{d:"M9 11l3 3L22 4"}),r("path",{d:"M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"})]),_(" ملخص الحجز")],-1)),n(M)?(t(),o("div",_a,[n(M).image?(t(),o("img",{key:0,src:n(M).image,alt:n(M).name},null,8,$a)):I("",!0)])):I("",!0),n(M)?(t(),o("div",za,[y[0]||(y[0]=r("span",{class:"k"},"📍 الفرع",-1)),r("span",Ma,a(n(M).name),1)])):I("",!0),n(e).date?(t(),o("div",Ca,[y[1]||(y[1]=r("span",{class:"k"},"📅 التاريخ",-1)),r("span",Fa,a(B.value),1)])):I("",!0),r("div",Sa,[y[2]||(y[2]=r("span",{class:"k"},"⏱️ المدة الإجمالية",-1)),r("span",Ba,a(n(xr)(n(k))),1)]),r("div",La,[y[3]||(y[3]=r("span",{class:"k"},"✂️ عدد الخدمات",-1)),r("span",Aa,a(n(z).length)+" "+a(n(z).length>2?"خدمات":"خدمة"),1)]),n(e).mode?(t(),o("div",Ea,[y[4]||(y[4]=r("span",{class:"k"},"👤 الموظفون",-1)),r("span",Ta,a(n(e).mode==="auto"?"اختيار تلقائي ذكي":"اختيار يدوي"),1)])):I("",!0),r("div",Da,[(t(!0),o(D,null,W(n(z),L=>(t(),o("div",{key:L.id,class:"sum-svc"},[y[6]||(y[6]=r("i",{style:{background:"var(--gold)"}},null,-1)),r("span",ja,a(L.name),1),r("span",Ha,a(n(O)(L.price))+" ر.س",1),r("button",{class:"rm","aria-label":"حذف",onClick:V=>n(A)(L)},[...y[5]||(y[5]=[r("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[r("path",{d:"M18 6L6 18M6 6l12 12"})],-1)])],8,Ia)]))),128))]),r("div",Pa,[r("div",Na,[y[7]||(y[7]=r("span",null,"المجموع الفرعي",-1)),r("span",null,a(n(O)(S.value.sub))+" ر.س",1)]),r("div",Va,[y[8]||(y[8]=r("span",null,"ضريبة القيمة المضافة (15%)",-1)),r("span",null,"+"+a(n(O)(S.value.vat))+" ر.س",1)]),r("div",Ya,[y[10]||(y[10]=r("span",{class:"k"},"المبلغ الإجمالي",-1)),r("span",Ra,[_(a(n(O)(S.value.total))+" ",1),y[9]||(y[9]=r("small",null,"ر.س",-1))])])]),r("div",qa,[(t(),o("svg",Ua,[...y[11]||(y[11]=[r("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},null,-1)])])),y[12]||(y[12]=_(" بياناتك محمية — يمكنك تعديل أو إلغاء الحجز قبل 6 ساعات من الموعد",-1))])])):I("",!0)],2))}},Wa={class:"shell"},Ga={class:"wrap"},Ka={class:"panel",id:"panel"},Ja={key:0,class:"success-wrap receipt-wrap"},Xa={class:"suc-grid receipt-grid"},Qa={class:"card suc-details"},Za={class:"sd-row"},ro={class:"v receipt-code"},eo={class:"sd-row"},no={class:"v"},to={class:"sd-row"},ao={class:"v"},oo={class:"sd-row"},io={class:"v"},so={class:"sd-row"},lo={class:"v"},po={class:"sd-row"},co={class:"card suc-details receipt-services"},go={class:"wrap"},uo={class:"f-grid"},xo={class:"f-brand"},mo={class:"f-links"},ho={class:"f-links"},bo=["href"],fo={class:"footbar",id:"footbar"},vo={class:"wrap in"},yo={class:"fb-mid",id:"fbMid"},wo={key:0,class:"tot"},ko=["disabled"],_o="color:var(--gold-deep);font-family:var(--font-d);font-size:17px",Eo={__name:"BookingView",setup(rr){const e=ar(null),z=Kr(),{current:k,locations:C,loadServiceLocations:A}=fr(),{requireAuth:M}=Nr();A();const{state:h,selSvcs:j,priceParts:S,canProceed:B,nextLabel:N,reset:y,payableTotal:L,walletDiscount:V,loyaltyPointsUsed:F}=or();Xr(le,"booking"),Qr(e);const c=ar(!1),E=ar(""),l=ar(!1);function u(q){E.value=q,l.value=!0,clearTimeout(u._h),u._h=setTimeout(()=>{l.value=!1},2600)}const w=v(()=>h.services.length>0),K=v(()=>h.step===4?L.value:S.value.total);function tr(q){if(!q)return null;try{const p=String(q).replace(/-/g,"+").replace(/_/g,"/"),Y=p.padEnd(p.length+(4-p.length%4)%4,"="),H=JSON.parse(decodeURIComponent(escape(atob(Y))));return H&&typeof H=="object"?H:null}catch{return null}}const T=v(()=>tr(z.query.receipt)),G=v(()=>!!T.value),Q=v(()=>{var q;return Array.isArray((q=T.value)==null?void 0:q.s)?T.value.s:[]}),x=v(()=>!G.value&&!h.done&&w.value&&h.step>=1),g=v(()=>x.value?"minmax(0,1fr) minmax(285px,315px)":"1fr");function f(){h.step>0&&(h.step--,scrollTo({top:0,behavior:"smooth"}))}function b(){if(B.value){if(h.step===4){M($);return}h.step++,scrollTo({top:0,behavior:"smooth"})}}function m(q){return`${q.getFullYear()}-${String(q.getMonth()+1).padStart(2,"0")}-${String(q.getDate()).padStart(2,"0")}`}async function $(){var q,p;c.value=!0;try{const Y=(q=k.value)!=null&&q.home?0:Number((p=k.value)==null?void 0:p.id),H=j.value.map(s=>{var d;return{subServices:[{id:s.id,date:m(h.date),time:h.time[s.id],duration:s.dur,staffId:(d=h.emp[s.id])==null?void 0:d.id}]}});await te({branch:Y,services:H,customerName:h.cust.name,mobileNo:h.cust.phone});const vr=h.rewards,Br=Number(V.value.toFixed(2)),yr=h.pay==="wallet"?Math.min(Number(h.walletBalance)||0,L.value||S.value.total):0,zr=Math.max(Br,yr),Mr=F.value,wr=zr>0,ir=Mr>0,Cr=vr.couponApplied||"",Lr=wr||ir||h.pay==="wallet"?"card":h.pay||"card",i=await ae(Lr,{wallet:wr,walletAmount:zr,loyalty:ir,loyaltyPoints:Mr,couponCode:Cr});if(i.payment_url){window.location.href=i.payment_url;return}h.bookRef=i.invoice_id||null,h.done=!0,scrollTo({top:0,behavior:"smooth"})}catch(Y){u(Y.message||"تعذّر إتمام الحجز، حاول مرة أخرى")}finally{c.value=!1}}function X(){y(),location.href="/"}return(q,p)=>{const Y=Vr("RouterLink");return t(),o("div",{ref_key:"root",ref:e},[r("div",Wa,[G.value?I("",!0):(t(),ur(be,{key:0})),r("div",Ga,[r("div",{class:"stage",id:"stage",style:br(`grid-template-columns:${g.value}`)},[r("main",Ka,[G.value?(t(),o("div",Ja,[p[10]||(p[10]=r("div",{class:"suc-ic"},[r("svg",{width:"44",height:"44",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.2"},[r("path",{d:"M20 6L9 17l-5-5"})])],-1)),p[11]||(p[11]=r("h1",null,"تفاصيل الحجز",-1)),p[12]||(p[12]=r("p",{class:"sub"},"تم فتح تفاصيل الحجز من رمز QR",-1)),r("div",Xa,[r("div",Qa,[p[8]||(p[8]=r("h4",null,"بيانات الحجز",-1)),r("div",Za,[p[2]||(p[2]=r("span",{class:"k"},"رقم الفاتورة",-1)),r("span",ro,a(T.value.r||"—"),1)]),r("div",eo,[p[3]||(p[3]=r("span",{class:"k"},"الفرع",-1)),r("span",no,a(T.value.b||"—"),1)]),r("div",to,[p[4]||(p[4]=r("span",{class:"k"},"التاريخ",-1)),r("span",ao,a(T.value.d||"—"),1)]),r("div",oo,[p[5]||(p[5]=r("span",{class:"k"},"مدة الجلسة",-1)),r("span",io,a(T.value.u||"—"),1)]),r("div",so,[p[6]||(p[6]=r("span",{class:"k"},"الفريق",-1)),r("span",lo,a(T.value.e||"—"),1)]),r("div",po,[p[7]||(p[7]=r("span",{class:"k"},"المبلغ",-1)),r("span",{class:"v",style:_o},a(n(O)(Number(T.value.p)||0))+" ر.س",1)])]),r("div",co,[p[9]||(p[9]=r("h4",null,"الخدمات",-1)),(t(!0),o(D,null,W(Q.value,(H,vr)=>(t(),o("div",{key:vr,class:"receipt-service"},[r("b",null,a(H[0]),1),r("small",null,a(H[1]||"—")+" · "+a(H[2]||T.value.e||"—"),1),r("span",null,a(n(O)(Number(H[3])||0))+" ر.س",1)]))),128))])])])):n(h).done?(t(),ur(wa,{key:1,onHome:X,onCalendar:p[0]||(p[0]=H=>u("تمت إضافة الموعد إلى التقويم")),onShare:p[1]||(p[1]=H=>u("تم نسخ رابط الحجز للمشاركة"))})):n(h).step===0?(t(),ur(Ye,{key:2})):n(h).step===1?(t(),ur(nn,{key:3})):n(h).step===2?(t(),ur(jn,{key:4})):n(h).step===3?(t(),ur(pt,{key:5})):(t(),ur(It,{key:6}))]),dr(r("aside",{class:P(["summary booking-summary-compact",{show:x.value,"booking-summary-time":n(h).step===2}])},[U(Oa)],2),[[Ar,x.value]])],4)])]),r("footer",null,[r("div",go,[r("div",uo,[r("div",xo,[U(Y,{class:"logo",to:"/"},{default:J(()=>[...p[13]||(p[13]=[r("span",{class:"mark"},[r("img",{src:Jr,alt:"عناية سامي",style:{width:"29px",height:"29px","object-fit":"contain"}})],-1),r("span",{class:"name"},[r("b",null,"عناية سامي"),r("span",null,"SAMI CARE")],-1)])]),_:1}),p[14]||(p[14]=pr('<p>مركز متخصص في العناية الرجالية المتكاملة بجدة، حيث تلتقي الفخامة بالاحترافية في كل تفصيلة.</p><div class="socials"><a href="https://x.com/samicare_sa" aria-label="X"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-6.8 7.8L23.3 22h-6.3l-4.9-6.4L6.5 22H3.4l7.3-8.3L1 2h6.5l4.4 5.8L18.9 2zm-1.1 18h1.7L7.1 3.9H5.3L17.8 20z"></path></svg></a><a href="https://www.instagram.com/samicare.sa/" aria-label="انستقرام"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1" fill="currentColor"></circle></svg></a><a href="https://www.facebook.com/samicare.sa" aria-label="فيسبوك"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg></a></div>',2))]),r("div",null,[p[20]||(p[20]=r("h4",null,"روابط مهمة",-1)),r("ul",mo,[r("li",null,[U(Y,{to:"/"},{default:J(()=>[...p[15]||(p[15]=[_("الرئيسية",-1)])]),_:1})]),r("li",null,[U(Y,{to:"/booking"},{default:J(()=>[...p[16]||(p[16]=[_("حجز موعد",-1)])]),_:1})]),r("li",null,[U(Y,{to:"/#services"},{default:J(()=>[...p[17]||(p[17]=[_("خدماتنا",-1)])]),_:1})]),r("li",null,[U(Y,{to:"/packages-gifts"},{default:J(()=>[...p[18]||(p[18]=[_("الباقات",-1)])]),_:1})]),r("li",null,[U(Y,{to:"/gifts"},{default:J(()=>[...p[19]||(p[19]=[_("الهدايا",-1)])]),_:1})])])]),r("div",null,[p[26]||(p[26]=r("h4",null,"استكشف",-1)),r("ul",ho,[r("li",null,[U(Y,{to:"/store"},{default:J(()=>[...p[21]||(p[21]=[_("المتجر",-1)])]),_:1})]),r("li",null,[U(Y,{to:"/branches"},{default:J(()=>[...p[22]||(p[22]=[_("فروعنا",-1)])]),_:1})]),r("li",null,[U(Y,{to:"/contact"},{default:J(()=>[...p[23]||(p[23]=[_("تواصل معنا",-1)])]),_:1})]),r("li",null,[U(Y,{to:"/terms"},{default:J(()=>[...p[24]||(p[24]=[_("الشروط والأحكام",-1)])]),_:1})]),r("li",null,[U(Y,{to:"/privacy-policy"},{default:J(()=>[...p[25]||(p[25]=[_("سياسة الخصوصية",-1)])]),_:1})])])]),r("div",null,[p[27]||(p[27]=r("h4",null,"عناوين الفروع",-1)),(t(!0),o(D,null,W(n(C),H=>(t(),o("div",{key:H.id,class:"f-branch"},[r("b",null,a(H.name),1),r("small",null,a(H.address),1),H.contact_number?(t(),o("a",{key:0,href:`tel:${H.contact_number}`},a(H.contact_number),9,bo)):I("",!0)]))),128))])]),p[28]||(p[28]=pr('<div class="f-bottom"><small>© 2026 عناية سامي — جميع الحقوق محفوظة</small><div class="pay" aria-label="بوابات الدفع"><span title="Visa">VISA</span><span title="Mastercard">Mastercard</span><span title="مدى">mada</span><span title="Tabby">tabby</span><span title="Apple Pay">Pay</span></div></div>',1))])]),dr(r("div",fo,[r("div",vo,[r("button",{class:"btn btn-back",id:"btnBack",style:br({visibility:n(h).step===0?"hidden":"visible"}),onClick:f},[...p[29]||(p[29]=[r("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[r("path",{d:"M5 12h14M13 6l6 6-6 6"})],-1),_(" السابق ",-1)])],4),r("div",yo,[p[31]||(p[31]=r("span",null,"🔒 بياناتك محمية وآمنة",-1)),w.value?(t(),o("span",wo,[p[30]||(p[30]=_("المبلغ الإجمالي ",-1)),r("b",null,a(n(O)(Math.round(K.value)))+" ر.س",1)])):I("",!0)]),r("button",{class:P(["btn",n(h).step===4?"btn-pay":"btn-gold"]),id:"btnNext",disabled:!n(B),onClick:b},[_(a(n(N))+" ",1),p[32]||(p[32]=r("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.2"},[r("path",{d:"M19 12H5M11 18l-6-6 6-6"})],-1))],10,ko)])],512),[[Ar,!n(h).done&&!G.value]]),r("div",{class:P(["pay-loading",{on:c.value}]),id:"payLoading"},[...p[33]||(p[33]=[r("div",{class:"pl-box"},[r("div",{class:"pl-ring"}),r("b",null,"جارٍ معالجة الدفع بأمان…"),r("small",null,"لا تغلق الصفحة، سيتم تأكيد حجزك خلال لحظات")],-1)])],2),r("div",{class:P(["toast",{on:l.value}]),id:"toast"},a(E.value),3)],512)}}};export{Eo as default};
