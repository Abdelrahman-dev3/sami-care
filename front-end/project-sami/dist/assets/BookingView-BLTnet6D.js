import{E as Sr,G as Tr,u as n,o as t,c as s,b as r,F as P,e as J,n as Y,t as i,h as yr,r as nr,s as zr,H as Or,i as h,j as Gr,q as R,a as M,d as _r,x as $r,k as Ur,I as kr,J as sr,m as vr,w as Dr,K as Yr,A as Wr,B as Rr,_ as Kr,L as Xr,M as Jr,N as Qr,p as mr,O as Zr}from"./index-C_v4GyG2.js";import{u as re,a as ee}from"./useInternalLinks-DqBxxCgd.js";import{u as pr,r as N,f as hr,a as ir,b as jr}from"./useBooking-BtLS46Vc.js";import{f as ne,a as qr,b as te,v as ae,c as oe,i as ie}from"./bookingApi-lwQlTaqF.js";import{s as se}from"./serviceDetails-gQMMCHKA.js";import{c as Nr,a as Fr,b as Hr}from"./giftIcons-C3hH12nn.js";import{l as le}from"./i18nField-CJ_3XKph.js";import{_ as Br}from"./SkeletonLoader-BsDQpnjP.js";import{f as de}from"./accountApi-6O3-gKeM.js";const pe=`\r
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
`,Vr=[{id:"s1",cat:"hair",name:"حلاقة عادية",desc:"حلاقة شعر عادية بقصات عصرية",dur:20,price:20},{id:"s2",cat:"hair",name:"حلاقة شعر + تحديد لحية",desc:"حلاقة شعر مع تحديد اللحية",dur:30,price:35},{id:"s3",cat:"hair",name:"حلاقة مع غسيل",desc:"حلاقة مع غسيل وتنظيف الشعر",dur:30,price:30},{id:"s4",cat:"hair",name:"حلاقة VIP",desc:"حلاقة فاخرة مع خدمة VIP",dur:50,price:80},{id:"s5",cat:"hair",name:"تنسيق اللحية",desc:"تنسيق وتجميل اللحية",dur:20,price:15},{id:"s6",cat:"hair",name:"تصفيف الشعر",desc:"تصفيف الشعر بالمنتجات المناسبة",dur:15,price:15},{id:"s7",cat:"skin",name:"تنظيف بشرة عميق",desc:"تنظيف عميق ينظف وينعش البشرة",dur:50,price:150},{id:"s8",cat:"skin",name:"تنظيف بشرة سريع",desc:"جلسة سريعة لإشراقة فورية",dur:30,price:80},{id:"s9",cat:"skin",name:"ماسك الذهب",desc:"ماسك فاخر لنضارة استثنائية",dur:25,price:90},{id:"s10",cat:"pedi",name:"بديكير عادي",desc:"عناية أساسية للأقدام والأظافر",dur:45,price:60},{id:"s11",cat:"pedi",name:"بديكير فاخر",desc:"عناية متكاملة مع تقشير وترطيب",dur:60,price:100},{id:"s12",cat:"pedi",name:"بديكير طبي",desc:"علاج تشققات القدم والمسامير",dur:60,price:120},{id:"s13",cat:"pedi",name:"إزالة جلد ميت",desc:"إزالة الجلد الميت من القدمين",dur:30,price:40},{id:"s14",cat:"mass",name:"مساج استرخاء للجسم",desc:"استرخاء عميق يجدد طاقتك",dur:60,price:180},{id:"s15",cat:"mass",name:"مساج رأس",desc:"جلسة قصيرة لتخفيف التوتر",dur:15,price:25},{id:"s16",cat:"mass",name:"مساج علاجي",desc:"مساج متخصص للعضلات المجهدة",dur:60,price:220},{id:"s17",cat:"bath",name:"حمام مغربي كلاسيكي",desc:"تقشير وتنقية بطقوس أصيلة",dur:60,price:200},{id:"s18",cat:"bath",name:"حمام مغربي ملكي",desc:"التجربة الكاملة مع ماسك وتدليك",dur:90,price:300}];for(const tr of Object.values(se))for(const e of tr.variants||[])e.svcId&&!Vr.some(k=>k.id===e.svcId)&&Vr.push({id:e.svcId,cat:e.cat,name:e.name,desc:e.desc||"",dur:e.dur,price:e.price,hidden:!0});const ce=[{id:"u1",name:"كريم ترطيب متوازن",desc:"ترطيب وتغذية يدوم طويلًا",price:110,img:"https://sami-care.sa//storage/uploads/403/HyxbPuOgHBgbg0pgpMZr9bcFv2OryQtxjRMLnhxb.jpg"},{id:"u2",name:"غسول تنظيف البشرة",desc:"ينظف بعمق وينعش البشرة",price:95,img:"https://sami-care.sa//storage/uploads/405/L2sxjQjZgTztP0swgRTlXV0jVjCLuS5GJyypCJmT.jpg"},{id:"u3",name:"زيت اللحية الذهبي",desc:"ترطيب وتغذية عميقة",price:120,img:"https://sami-care.sa//storage/uploads/406/uGGoLhrbcMofuyS2kedJ44ejvBqYnz1M0mA0zTMP.jpg"}],ge=[{t:"اختيار الخدمات",ic:'<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"/>'},{t:"اختيار الموظف",ic:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>'},{t:"اختيار الوقت",ic:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>'},{t:"تأكيد الحجز",ic:'<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>'},{t:"الدفع",ic:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>'}],ue={class:"wrap stepper",id:"stepperWrap"},xe={class:"steps",id:"steps"},me=["data-i"],he={class:"n"},be=["onClick"],fe=["innerHTML"],ve={__name:"BookingStepper",setup(tr){const{state:e}=pr();function k(f){f<e.step&&(e.step=f)}return(f,S)=>Sr((t(),s("div",ue,[r("div",xe,[(t(!0),s(P,null,J(n(ge),(B,C)=>(t(),s("div",{key:C,class:Y(["step",{active:C===n(e).step,done:C<n(e).step}]),"data-i":C},[S[0]||(S[0]=r("div",{class:"bar"},[r("i")],-1)),r("span",he,i(C+1),1),r("span",{class:"bubble",onClick:V=>k(C)},[(t(),s("svg",{width:"21",height:"21",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7",innerHTML:B.ic},null,8,fe))],8,be),r("label",null,i(B.t),1)],10,me))),128))])],512)),[[Tr,!n(e).done]])}},ye={key:0,class:"branch-strip"},we=["src","alt"],ke={class:"bi"},_e={key:1,class:"empty-hint",style:{display:"grid",gap:"10px"}},$e={class:"cat-row"},ze=["data-cat","onClick"],Me=["src","alt"],Ce={class:"lbl"},Se={class:"cat-name"},Fe={key:0,class:"empty-hint"},Be={key:1,class:"sub-block"},Le={class:"sub-title"},Ae={class:"sub-title__main"},Ee={class:"tick"},Te=["innerHTML"],De={key:0,class:"empty-hint"},je={key:1,class:"subs"},Ne=["data-svc","onClick"],He={class:"top"},Ie={class:"si"},Pe=["innerHTML"],Ve={class:"foot"},Ye={class:"dur"},Re={class:"prc"},qe={__name:"ServicesStep",setup(tr){const{state:e,hasSvc:k,toggleSvc:f}=pr(),{current:S}=yr(),{state:B}=Ur(),C=a=>le(a,B.lang),V=nr([]),j=nr(!0);zr(async()=>{try{const a=await Or();V.value=a!=null&&a.status?a.data||[]:[]}catch{V.value=[]}finally{j.value=!1}});const u=h(()=>V.value.map(a=>({id:a.id,name:C(a.name),image:Gr(a.image)||a.feature_image||null}))),E=h(()=>V.value.find(a=>a.id===e.activeCat)||null),O=h(()=>{var a;return C((a=E.value)==null?void 0:a.name)}),v=h(()=>Nr(E.value)),F=h(()=>{var a;return(((a=E.value)==null?void 0:a.services)||[]).map(c=>({id:c.id,categoryId:E.value.id,categoryName:O.value,icon:v.value,name:C(c.name),desc:C(c.description)||"",dur:c.duration_min,price:c.default_price}))}),L=a=>e.services.some(c=>c.categoryId===a),H=h(()=>F.value.filter(a=>k(a.id)).length),z=a=>({"--acc":Hr(a.icon)}),b=a=>Fr(a.icon);return(a,c)=>(t(),s(P,null,[c[5]||(c[5]=r("div",{class:"panel-head"},[r("h1",null,"اختر الخدمة التي تناسبك"),r("p",null,"يمكنك اختيار خدمة واحدة أو أكثر من أي قسم")],-1)),n(S)?(t(),s("div",ye,[n(S).image?(t(),s("img",{key:0,src:n(S).image,alt:n(S).name},null,8,we)):R("",!0),r("span",ke,[c[0]||(c[0]=M("مكان التنفيذ: ",-1)),r("b",null,i(n(S).name),1),r("small",null,i(n(S).address),1)])])):R("",!0),j.value?(t(),s("div",_e,[_r(Br,{height:"64px","border-radius":"12px"}),_r(Br,{height:"92px","border-radius":"12px"})])):(t(),s(P,{key:2},[r("div",$e,[(t(!0),s(P,null,J(u.value,w=>(t(),s("div",{key:w.id,class:Y(["cat",{sel:n(e).activeCat===w.id,"has-picks":L(w.id)}]),"data-cat":w.id,onClick:T=>n(e).activeCat=w.id},[w.image?(t(),s("img",{key:0,src:w.image,alt:w.name},null,8,Me)):R("",!0),c[1]||(c[1]=r("span",{class:"chk"},[r("svg",{width:"9",height:"9",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3"},[r("path",{d:"M20 6L9 17l-5-5"})])],-1)),r("span",Ce,[r("span",Se,i(w.name),1)])],10,ze))),128))]),n(e).activeCat?(t(),s("div",Be,[r("div",Le,[r("span",Ae,[M(" خدمات "+i(O.value)+" ",1),r("span",Ee,[(t(),s("svg",{viewBox:"0 0 24 24","aria-hidden":"true",innerHTML:n(Fr)(v.value)},null,8,Te))])]),r("small",null,i(H.value?H.value+" مختارة":"اختر خدمة أو أكثر"),1)]),F.value.length?(t(),s("div",je,[(t(!0),s(P,null,J(F.value,w=>(t(),s("div",{key:w.id,class:Y(["sub",{sel:n(k)(w.id)}]),"data-svc":w.id,style:$r(z(w)),onClick:T=>n(f)(w)},[r("div",He,[r("span",Ie,[(t(),s("svg",{viewBox:"0 0 24 24","aria-hidden":"true",innerHTML:b(w)},null,8,Pe))]),r("b",null,i(w.name),1),c[3]||(c[3]=r("span",{class:"chk"},[r("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3"},[r("path",{d:"M20 6L9 17l-5-5"})])],-1))]),r("small",null,i(w.desc),1),r("div",Ve,[r("span",Ye,"🕐 "+i(w.dur)+" دقيقة",1),r("span",Re,[M(i(n(N)(w.price))+" ",1),c[4]||(c[4]=r("small",null,"ر.س",-1))])])],14,Ne))),128))])):(t(),s("div",De,"لا توجد خدمات متاحة حاليًا ضمن هذا القسم"))])):(t(),s("div",Fe,[...c[2]||(c[2]=[r("b",null,"اختر خدمة لعرض تفاصيلها",-1),M("اختر إحدى الخدمات الأساسية أعلاه لعرض الخدمات الفرعية المتاحة",-1)])]))],64))],64))}},Oe={class:"mode-grid"},Ge={key:0,class:"emp-section emp-section--groups"},Ue={class:"emp-cat emp-cat--group"},We={class:"cat-ico"},Ke=["innerHTML"],Xe={class:"emp-cat__info"},Je={class:"emp-cat__services"},Qe={key:0,class:"empty-hint"},Ze={key:1,class:"empty-hint"},rn={key:2,class:"emp-list emp-list--groups"},en=["onClick"],nn=["onClick"],tn={key:1,class:"j-note card",style:{display:"flex",gap:"16px","align-items":"center",padding:"20px 24px","border-color":"var(--line)"}},an={__name:"EmployeeStep",setup(tr){const{state:e,selSvcs:k,setEmployee:f}=pr(),{current:S}=yr(),B=kr({}),C=kr({}),V=["توفير الوقت","أفضل تقييم متاح","تنفيذ خدمات القسم بنفس الموظف","منع أي تعارض في المواعيد"],j=["اختر موظفًا واحدًا لكل قسم","الموظف المختار ينفذ كل خدمات القسم","تحكم كامل في فريق جلستك"],u=h(()=>{const g=new Map;return k.value.forEach(p=>{const x=String(p.categoryId??p.categoryName??p.id);g.has(x)||g.set(x,{id:x,name:p.categoryName||p.name,icon:p.icon||Nr(p.categoryId),services:[]}),g.get(x).services.push(p)}),[...g.values()]});function E(g){return[g.first_name,g.last_name].filter(Boolean).join(" ")||g.username||"موظف"}function O(g){return{"--acc":Hr(g.icon)}}function v(g){return`${g.services.length} ${g.services.length===1?"خدمة":"خدمات"}`}function F(g){return g.services.map(p=>p.name).join("، ")}function L(g){const p=g.services.map(_=>B[_.id]);if(!p.length||p.some(_=>!Array.isArray(_)))return[];const[x,...A]=p,rr=x.filter(_=>A.every(m=>m.some($=>String($.id)===String(_.id))));return[...new Map(rr.map(_=>[String(_.id),_])).values()]}function H(g){return g.services.some(p=>C[p.id]||!Array.isArray(B[p.id]))}function z(g){const p=g.services.map(A=>e.emp[A.id]).filter(Boolean);if(p.length!==g.services.length)return null;const x=p[0];return p.every(A=>String(A.id)===String(x.id))?x:null}function b(g,p){var x;return String(((x=z(g))==null?void 0:x.id)??"")===String(p.id??"")}function a(g){const p=g.services.map(x=>k.value.findIndex(A=>String(A.id)===String(x.id))).filter(x=>x>=0);return p.length?Math.min(...p):-1}function c(g){const p=a(g);p!==-1&&k.value.slice(p).forEach(x=>{delete e.time[x.id]})}function w(g,p,{clearTimes:x=!0}={}){g.services.forEach(A=>f(A.id,p)),x&&c(g)}function T(){e.mode==="auto"&&u.value.forEach(g=>{L(g).length&&g.services.forEach(x=>{e.staffOptions[x.id]=B[x.id]||[],f(x.id,{id:null,name:"اختيار تلقائي"})})})}function G(g){const p=e.mode!==g;e.mode=g,p&&(e.time={},e.emp={}),T()}function I(g,p){e.mode="manual",w(g,p)}async function er(g){var p,x;if(!B[g.id]){C[g.id]=!0;try{const A=(p=S.value)!=null&&p.home?0:(x=S.value)==null?void 0:x.id,rr=await ne({branchId:A,serviceId:g.id}),_=(Array.isArray(rr)?rr:[]).map(m=>({id:m.id,name:E(m)}));B[g.id]=[...new Map(_.map(m=>[String(m.id),m])).values()],e.staffOptions[g.id]=B[g.id],T()}catch{B[g.id]=[]}finally{C[g.id]=!1}}}function W(){k.value.forEach(er)}return zr(W),sr(()=>k.value.map(g=>g.id),W),sr(()=>e.mode,T),(g,p)=>(t(),s(P,null,[p[10]||(p[10]=r("div",{class:"panel-head"},[r("h1",null,"اختر الموظف"),r("p",null,"اختر موظفًا واحدًا لكل قسم، وسيتم تطبيقه على كل الخدمات المختارة داخل هذا القسم")],-1)),r("div",Oe,[r("div",{class:Y(["mode dark",{sel:n(e).mode==="auto"}]),onClick:p[0]||(p[0]=x=>G("auto"))},[p[3]||(p[3]=vr('<span class="chk"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"></path></svg></span><span class="mi"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="8" r="4"></circle><path d="M5 21c0-4 3-6 7-6s7 2 7 6"></path></svg></span><h3>اختيار تلقائي</h3><div class="sub-t">سنختار لك أفضل فريق متاح</div><span class="flag">★ موصى به</span>',5)),r("ul",null,[(t(),s(P,null,J(V,(x,A)=>r("li",{key:A},[p[2]||(p[2]=r("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.6"},[r("path",{d:"M20 6L9 17l-5-5"})],-1)),M(" "+i(x),1)])),64))])],2),r("div",{class:Y(["mode",{sel:n(e).mode==="manual"}]),onClick:p[1]||(p[1]=x=>G("manual"))},[p[5]||(p[5]=vr('<span class="chk"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" stroke-width="3"><path d="M20 6L9 17l-5-5"></path></svg></span><span class="mi"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span><h3>اختيار موظف محدد</h3><div class="sub-t">اختر موظفًا لكل قسم</div><span class="flag">تحكم كامل</span>',5)),r("ul",null,[(t(),s(P,null,J(j,(x,A)=>r("li",{key:A},[p[4]||(p[4]=r("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.6"},[r("path",{d:"M20 6L9 17l-5-5"})],-1)),M(" "+i(x),1)])),64))])],2)]),n(e).mode==="manual"?(t(),s("div",Ge,[(t(!0),s(P,null,J(u.value,x=>(t(),s("div",{key:x.id,class:"emp-row emp-row--group",style:$r(O(x))},[r("div",Ue,[r("span",We,[(t(),s("svg",{viewBox:"0 0 24 24","aria-hidden":"true",innerHTML:n(Fr)(x.icon)},null,8,Ke))]),r("span",Xe,[r("b",null,i(x.name),1),r("small",null,i(v(x)),1),r("span",Je,i(F(x)),1)])]),H(x)?(t(),s("div",Qe,[_r(Br,{height:"44px","border-radius":"8px"})])):L(x).length?(t(),s("div",rn,[r("button",{type:"button",class:"emp any",onClick:Dr(A=>I(x,L(x)[0]),["stop"])},[...p[6]||(p[6]=[vr('<span class="av" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span><b>أي موظف</b><span class="rate">الأنسب تلقائيًا</span>',3)])],8,en),(t(!0),s(P,null,J(L(x),A=>(t(),s("button",{key:A.id,type:"button",class:Y(["emp",{sel:b(x,A)}]),onClick:Dr(rr=>I(x,A),["stop"])},[p[7]||(p[7]=r("span",{class:"chk"},[r("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"#fff","stroke-width":"3"},[r("path",{d:"M20 6L9 17l-5-5"})])],-1)),p[8]||(p[8]=r("span",{class:"av","aria-hidden":"true"},null,-1)),r("b",null,i(A.name),1)],10,nn))),128))])):(t(),s("div",Ze,"لا يوجد موظف متاح يمكنه تنفيذ كل خدمات هذا القسم"))],4))),128))])):R("",!0),n(e).mode==="auto"?(t(),s("div",tn,[...p[9]||(p[9]=[vr('<span style="flex:none;width:44px;height:44px;border-radius:13px;display:grid;place-items:center;background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M13 2L3 14h9l-1 8 10-12h-9z"></path></svg></span><p style="font-size:13.5px;color:#5c5442;line-height:1.9;"><b style="color:var(--ink);">تم اختيار موظف واحد مناسب لكل قسم تلقائيًا.</b> سيتم تنفيذ كل خدمات القسم بنفس الموظف، وتقدر تشوف الأوقات في الخطوة الجاية.</p>',2)])])):R("",!0)],64))}},on={class:"card branch-strip"},sn={class:"cells"},ln={class:"cell"},dn={class:"cell"},pn={class:"loyalty-preview","aria-live":"polite"},cn={class:"card cal"},gn={class:"cal-head"},un={class:"cal-cells"},xn=["disabled","onClick"],mn={class:"dow"},hn={class:"dnum"},bn={key:0,class:"empty-hint",style:{"margin-top":"10px"}},fn={class:"date-line"},vn={class:"card detail-card time-start-card",style:{"margin-top":"14px"}},yn={class:"periods booking-periods"},wn={key:1,class:"empty-hint"},kn={key:2,class:"empty-hint"},_n={key:3,class:"empty-hint"},$n={key:4,class:"slots initial-slots"},zn=["onClick"],Mn={key:0,class:"tag"},Cn={key:5,class:"best-slot"},Sn={key:0,class:"session-plan"},Fn={class:"plan-track"},Bn={key:0,class:"plan-gap"},Ln={class:"plan-icon"},An=["innerHTML"],En={class:"t"},Tn={key:0,class:"plan-note plan-note--pending"},Dn={key:1,class:"plan-note plan-note--warn"},jn={key:2,class:"plan-note"},Nn={__name:"TimeStep",setup(tr){const e=["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],k=["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],{state:f,selSvcs:S,totalDur:B,priceParts:C,setEmployee:V,setTime:j}=pr(),u=nr(5),E=h(()=>Math.floor(C.value.total/100)*u.value),O=new Date;O.setHours(0,0,0,0);const v=nr(new Date(O)),F=nr("all"),L=kr({}),H=kr({}),z=kr({}),b=h(()=>Array.from({length:7},(l,o)=>{const d=new Date(v.value);return d.setDate(d.getDate()+o),d}));h(()=>v.value.getTime()<=O.getTime());const a=h(()=>{const l=b.value;return l[0].getMonth()===l[6].getMonth()?`${l[0].getDate()} - ${l[6].getDate()} ${k[l[0].getMonth()]}`:`${l[0].getDate()} ${k[l[0].getMonth()]} - ${l[6].getDate()} ${k[l[6].getMonth()]}`}),c=l=>l<O,w=l=>f.date&&l.getTime()===f.date.getTime(),T=h(()=>{const l=new Map;return S.value.forEach(o=>{const d=String(o.categoryId??o.categoryName??o.id);l.has(d)||l.set(d,{id:d,name:o.categoryName||o.name,icon:o.icon||Nr(o.categoryId),services:[]}),l.get(d).services.push(o)}),[...l.values()]}),G=h(()=>T.value.flatMap(l=>l.services)),I=h(()=>G.value[0]||null);h(()=>T.value[0]||null);const er=h(()=>I.value?f.time[I.value.id]:"");function W(l){return`${l.getFullYear()}-${String(l.getMonth()+1).padStart(2,"0")}-${String(l.getDate()).padStart(2,"0")}`}function g(l){if(!l||typeof l!="string")return null;const[o,d]=l.split(":").map(Number);return!Number.isFinite(o)||!Number.isFinite(d)?null:o*60+d}function p(l){if(!Number.isFinite(l))return"";const o=1440,d=(Math.round(l)%o+o)%o;return`${String(Math.floor(d/60)).padStart(2,"0")}:${String(d%60).padStart(2,"0")}`}function x(l){return[...new Set((Array.isArray(l)?l:[]).filter(o=>g(o)!==null))].sort((o,d)=>g(o)-g(d))}function A(l){G.value.slice(l).forEach(o=>{delete f.time[o.id]})}function rr(l,{apply:o=!1}={}){var or;const d=g(l),q=G.value;if(!q.length||d===null)return{complete:!1,rows:[],end:""};let K=d;const Z=[];for(let ur=0;ur<q.length;ur++){const U=q[ur],lr=x(L[U.id]),dr=ur===0?lr.includes(l)?l:lr.find(xr=>g(xr)>=K):lr.find(xr=>g(xr)>=K);if(!dr){o&&A(ur);const xr=Z[Z.length-1];return{complete:!1,rows:Z,missing:U,end:(xr==null?void 0:xr.end)||""}}const Ir=g(dr),Pr=Ir+(Number(U.dur)||0);Z.push({service:U,start:dr,end:p(Pr),expected:p(K),shifted:Ir>K}),o&&j(U.id,dr),o&&f.mode==="auto"&&((or=H[U.id])!=null&&or[dr])&&V(U.id,H[U.id][dr]),K=Pr}return{complete:!0,rows:Z,end:p(K)}}function _(){er.value&&rr(er.value,{apply:!0})}function m(l){rr(l,{apply:!0})}function $(l){return{"--acc":Hr(l.icon)}}function ar(l){return l.services.reduce((o,d)=>o+(Number(d.dur)||0),0)}function D(l){const o=l.services.map(q=>f.emp[q.id]).filter(Boolean);if(!o.length)return null;const d=o[0];return o.every(q=>String(q.id)===String(d.id)),d}function y(l){return`${l.services.length} ${l.services.length===1?"خدمة":"خدمات"}`}function X(l){c(l)||(f.date=l,f.time={},Object.keys(L).forEach(o=>{delete L[o]}))}async function Q(l){var q;const o=f.emp[l.id];if(!f.date||!o){delete L[l.id];return}const d=W(f.date);z[l.id]=!0;try{const K=f.mode==="auto"?f.staffOptions[l.id]||[]:[o],Z=await Promise.all(K.filter(U=>(U==null?void 0:U.id)!=null).map(async U=>({candidate:U,times:await te({date:d,staffId:U.id,durationMin:l.dur}).catch(()=>[])}))),or={};Z.forEach(({candidate:U,times:lr})=>{x(lr).forEach(dr=>{or[dr]||(or[dr]=U)})});const ur=Object.keys(or);f.date&&W(f.date)===d&&((q=f.emp[l.id])==null?void 0:q.id)===o.id&&(L[l.id]=x(ur),H[l.id]=or,_())}catch{L[l.id]=[],_()}finally{z[l.id]=!1}}sr(()=>f.date,()=>{F.value="all",S.value.forEach(Q)}),sr(()=>S.value.map(l=>{var o;return`${l.id}:${(o=f.emp[l.id])==null?void 0:o.id}`}),()=>S.value.forEach(Q)),zr(async()=>{var l;S.value.forEach(Q);try{const o=await qr();u.value=Math.max(Number((l=o==null?void 0:o.data)==null?void 0:l.points_per_100)||5,1)}catch{}});const cr=h(()=>f.date?`${e[f.date.getDay()]} ${f.date.getDate()} ${k[f.date.getMonth()]} ${f.date.getFullYear()}`:"اختر تاريخًا من التقويم"),Mr=h(()=>I.value&&z[I.value.id]),br=h(()=>I.value?x(L[I.value.id]):[]),fr=h(()=>br.value.filter(l=>{const o=g(l);return F.value==="am"?o<720:F.value==="pm"?o>=720:!0})),Lr=h(()=>!!f.date&&G.value.every(l=>Array.isArray(L[l.id])&&!z[l.id])),Ar=h(()=>!!er.value&&G.value.some(l=>z[l.id]||!Array.isArray(L[l.id]))),Cr=h(()=>er.value?G.value.find(l=>!f.time[l.id]):null),gr=h(()=>Lr.value&&br.value.find(l=>rr(l).complete)||""),wr=h(()=>{const l=[];let o=null;return T.value.forEach(d=>{const q=d.services.map(lr=>g(f.time[lr.id])),K=q.every(lr=>lr!==null),Z=q[0];if(!K){l.push({type:"group",key:`group-${d.id}`,group:d,name:d.name,icon:d.icon,style:$(d),duration:ar(d),services:d.services,employee:D(d),pending:!0});return}o!==null&&Z>o&&l.push({type:"gap",key:`gap-${l.length}`,start:p(o),end:p(Z),duration:Z-o});const or=d.services[d.services.length-1],U=g(f.time[or.id])+(Number(or.dur)||0);l.push({type:"group",key:`group-${d.id}`,group:d,name:d.name,icon:d.icon,style:$(d),start:p(Z),end:p(U),duration:ar(d),services:d.services,employee:D(d),pending:!1}),o=U}),l}),Er=h(()=>{const l=wr.value.filter(d=>d.type==="group"&&!d.pending),o=l[l.length-1];return(o==null?void 0:o.end)||""});return(l,o)=>(t(),s(P,null,[o[17]||(o[17]=r("div",{class:"panel-head"},[r("h1",null,"اختر وقت بداية الجلسة"),r("p",null,"اختر أول موعد فقط، وسيتم ترتيب باقي الأقسام تلقائيًا حسب مدة كل قسم والأوقات المتاحة.")],-1)),r("div",on,[o[6]||(o[6]=r("div",{class:"bi"},[r("b",null,"ملخص جلستك"),r("small",null,"قبل اختيار الوقت")],-1)),r("div",sn,[r("div",ln,[r("b",null,i(n(S).length),1),o[4]||(o[4]=M("الخدمات",-1))]),r("div",dn,[r("b",null,i(n(hr)(n(B))),1),o[5]||(o[5]=M("المدة الإجمالية",-1))])])]),r("div",pn,[o[9]||(o[9]=r("h3",null,[r("span",{"aria-hidden":"true"},"✨"),M(" مكافأة نقاط الولاء لهذه الجلسة")],-1)),r("p",null,[o[7]||(o[7]=M("ستحصل على ",-1)),r("b",null,i(n(N)(E.value))+" نقطة ولاء",1),o[8]||(o[8]=M(" عند إتمام هذا الحجز.",-1))]),r("strong",null,"يمنحك نظام الولاء "+i(n(N)(u.value))+" نقطة مقابل كل 100 ر.س مدفوعة.",1)]),r("div",cn,[r("div",gn,[r("b",null,i(a.value),1)]),r("div",un,[(t(!0),s(P,null,J(b.value,(d,q)=>(t(),s("button",{key:q,disabled:c(d),class:Y({sel:w(d),avail:!c(d)}),onClick:K=>X(d)},[r("span",mn,i(e[d.getDay()].slice(0,3)),1),r("span",hn,i(d.getDate()),1)],10,xn))),128))]),o[10]||(o[10]=r("div",{class:"cal-legend"},[r("span",null,[r("i",{style:{background:"var(--green)"}}),M(" تتوفر مواعيد")]),r("span",null,[r("i",{style:{background:"#D8D0BC"}}),M(" غير متاح")])],-1))]),n(f).date?(t(),s(P,{key:1},[r("div",fn,"📅 "+i(cr.value),1),r("div",vn,[o[13]||(o[13]=r("h4",null,[M("وقت بداية الجلسة "),r("small",{style:{"font-weight":"400",color:"var(--mute)"}},"سننسق باقي الأقسام بعده")],-1)),R("",!0),r("div",yn,[r("button",{class:Y(["period",{sel:F.value==="all"}]),onClick:o[0]||(o[0]=d=>F.value="all")},"🗓️ كل اليوم",2),r("button",{class:Y(["period",{sel:F.value==="am"}]),onClick:o[1]||(o[1]=d=>F.value="am")},"☀️ صباحًا",2),r("button",{class:Y(["period",{sel:F.value==="pm"}]),onClick:o[2]||(o[2]=d=>F.value="pm")},"🌇 مساءً",2)]),o[14]||(o[14]=r("div",{class:"available-times-title"},"الأوقات المتاحة",-1)),Mr.value||I.value&&!Array.isArray(L[I.value.id])?(t(),s("div",wn,[_r(Br,{height:"44px","border-radius":"8px"})])):br.value.length?fr.value.length?(t(),s("div",$n,[(t(!0),s(P,null,J(fr.value,d=>(t(),s("button",{key:d,class:Y(["slot",{sel:er.value===d}]),onClick:q=>m(d)},[gr.value===d?(t(),s("span",Mn,"الأفضل")):R("",!0),M(" "+i(n(ir)(d)),1)],10,zn))),128))])):(t(),s("div",_n,"لا توجد أوقات في هذه الفترة")):(t(),s("div",kn,"لا توجد أوقات متاحة لهذا اليوم")),gr.value&&er.value!==gr.value?(t(),s("div",Cn,[r("span",null,[o[12]||(o[12]=M("أفضل بداية متاحة اليوم: ",-1)),r("b",null,i(n(ir)(gr.value)),1)]),r("button",{onClick:o[3]||(o[3]=d=>m(gr.value))},"اختيار")])):R("",!0)]),er.value?(t(),s("div",Sn,[o[16]||(o[16]=r("h4",null,[r("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[r("path",{d:"M13 2L3 14h7l-1 8 10-12h-7l1-8z"})]),M(" خطة تنفيذ الجلسة ")],-1)),r("div",Fn,[(t(!0),s(P,null,J(wr.value,d=>{var q;return t(),s(P,{key:d.key},[d.type==="gap"?(t(),s("div",Bn,[o[15]||(o[15]=r("span",null,"فاصل انتظار",-1)),r("b",null,i(n(ir)(d.start))+" - "+i(n(ir)(d.end)),1),r("small",null,i(n(hr)(d.duration)),1)])):(t(),s("div",{key:1,class:Y(["plan-item plan-item--group",{pending:d.pending}]),style:$r(d.style)},[r("span",Ln,[(t(),s("svg",{viewBox:"0 0 24 24","aria-hidden":"true",innerHTML:n(Fr)(d.icon)},null,8,An))]),r("b",null,i(d.name),1),r("small",null,"مع "+i(((q=d.employee)==null?void 0:q.name)||"-"),1),r("span",En,i(d.pending?"بانتظار وقت متاح":`${n(ir)(d.start)} - ${n(ir)(d.end)}`),1),r("small",null,i(y(d.group))+" · "+i(n(hr)(d.duration)),1)],6))],64)}),128))]),Ar.value?(t(),s("div",Tn,"جاري تنسيق باقي الأقسام حسب الأوقات المتاحة.")):Cr.value?(t(),s("div",Dn,"لم نجد وقتًا متاحًا لـ "+i(Cr.value.name)+" بعد هذا الموعد. اختر بداية أبكر أو يومًا آخر.",1)):(t(),s("div",jn,"تم تنسيق الجلسة تلقائيًا، والنهاية المتوقعة "+i(n(ir)(Er.value))+".",1))])):R("",!0)],64)):(t(),s("div",bn,[...o[11]||(o[11]=[r("b",null,"ابدأ باختيار التاريخ",-1),M("اختر يومًا من التقويم لعرض الأوقات المتاحة",-1)])]))],64))}},Hn={class:"card detail-card"},In={class:"d-grid"},Pn={class:"d-cell"},Vn={class:"d-cell"},Yn={class:"d-cell"},Rn={class:"d-cell"},qn={class:"card detail-card"},On={class:"timeline-cards"},Gn={class:"tl-main"},Un={class:"with"},Wn={class:"tl-time"},Kn={class:"tm"},Xn={class:"dr"},Jn={key:0,class:"card detail-card products-detail-card"},Qn={class:"upsell"},Zn=["src","alt"],rt={class:"inf"},et={class:"p"},nt=["disabled","onClick"],tt={__name:"ConfirmStep",setup(tr){const{state:e,selSvcs:k,totalDur:f}=pr(),{current:S}=yr(),{user:B,isAuthenticated:C}=Yr(),{state:V,products:j,addToCart:u,setQty:E}=Wr();zr(()=>{C.value&&B.value&&!e.cust.name&&(e.cust.name=[B.value.first_name,B.value.last_name].filter(Boolean).join(" "),e.cust.phone=B.value.mobile||"",e.cust.mail=B.value.email||"")});const O=h(()=>e.date?jr(e.date):""),v=h(()=>{const z=new Map;k.value.forEach(a=>{const c=String(a.categoryId??a.categoryName??a.id);z.has(c)||z.set(c,{id:c,name:a.categoryName||a.name,services:[]}),z.get(c).services.push(a)});const b=a=>{if(!a)return Number.MAX_SAFE_INTEGER;const[c,w]=String(a).split(":").map(Number);return Number.isFinite(c)&&Number.isFinite(w)?c*60+w:Number.MAX_SAFE_INTEGER};return[...z.values()].map(a=>{var T;const c=[...a.services].sort((G,I)=>b(e.time[G.id])-b(e.time[I.id])),w=[...new Set(c.map(G=>{var I;return(I=e.emp[G.id])==null?void 0:I.name}).filter(Boolean))];return{...a,services:c,start:e.time[(T=c[0])==null?void 0:T.id]||"",duration:c.reduce((G,I)=>G+(Number(I.dur)||0),0),price:c.reduce((G,I)=>G+(Number(I.price)||0),0),employees:w}}).sort((a,c)=>b(a.start)-b(c.start))}),F=h(()=>{const z=j.value.slice(0,3);return z.length?z.map(b=>({id:b.id,name:b.n,desc:b.d,price:b.pr,img:b.image||b.img||"/images/generated/products/care-set-card-hq.png"})):ce.map(b=>({id:null,name:b.name,desc:b.desc,price:b.price,img:b.img||"/images/generated/products/care-set-card-hq.png"}))});function L(z){return z.id!=null&&!!V.cart[z.id]}function H(z){z.id!=null&&(L(z)?E(z.id,0):u(z.id))}return(z,b)=>{var a;return Rr("RouterLink"),t(),s(P,null,[b[20]||(b[20]=r("div",{class:"panel-head"},[r("h1",null,"تأكيد الحجز"),r("p",null,"راجع تفاصيل جلستك قبل تأكيد الحجز والدفع")],-1)),r("div",Hn,[b[8]||(b[8]=r("h4",null,[r("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[r("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),r("path",{d:"M16 2v4M8 2v4M3 10h18"})]),M(" تفاصيل الموعد")],-1)),r("div",In,[r("div",Pn,[b[4]||(b[4]=r("small",null,"📍 الفرع",-1)),r("b",null,i(((a=n(S))==null?void 0:a.name)||"—"),1)]),r("div",Vn,[b[5]||(b[5]=r("small",null,"📅 التاريخ",-1)),r("b",null,i(O.value),1)]),r("div",Yn,[b[6]||(b[6]=r("small",null,"⏱️ المدة الإجمالية",-1)),r("b",null,i(n(hr)(n(f))),1)]),r("div",Rn,[b[7]||(b[7]=r("small",null,"✂️ عدد الخدمات",-1)),r("b",null,i(n(k).length),1)])])]),r("div",qn,[b[9]||(b[9]=r("h4",null,[r("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[r("circle",{cx:"12",cy:"12",r:"9"}),r("path",{d:"M12 7v5l3 3"})]),M(" تفاصيل الجلسة")],-1)),r("div",On,[(t(!0),s(P,null,J(v.value,c=>(t(),s("div",{key:c.id,class:"tl"},[r("div",Gn,[r("b",null,i(c.name),1),r("div",Un,"مع "+i(c.employees.join("، ")||"—"),1)]),r("div",Wn,[r("span",Kn,i(n(ir)(c.start)),1),r("span",Xn,i(c.duration)+" دقيقة · "+i(n(N)(c.price))+" ر.س",1)])]))),128))])]),F.value.length?(t(),s("div",Jn,[b[10]||(b[10]=r("h4",null,[r("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[r("path",{d:"M12 2l2.9 6.2 6.6.8-4.9 4.6 1.3 6.6L12 17l-5.9 3.2 1.3-6.6L2.5 9l6.6-.8z"})]),M(" منتجات مناسبة لجلستك")],-1)),r("div",Qn,[(t(!0),s(P,null,J(F.value,c=>(t(),s("div",{key:c.id||c.name,class:Y(["up",{added:L(c)}])},[r("img",{src:c.img,alt:c.name,loading:"lazy"},null,8,Zn),r("span",rt,[r("b",null,i(c.name),1),r("small",null,i(c.desc),1),r("span",et,i(n(N)(c.price))+" ر.س",1)]),r("button",{type:"button",disabled:c.id==null,onClick:w=>H(c)},i(L(c)?"✓ أضيف":"إضافة"),9,nt)],2))),128))])])):R("",!0),R("",!0)],64)}}},at={class:"card detail-card"},ot={class:"pay-methods"},it=["onClick"],st={class:"pmi"},lt={key:0,class:"cod-deposit-alert"},dt={class:"card detail-card payment-rewards-card"},pt={class:"rewards"},ct={class:"rt"},gt={class:"ri"},ut=["innerHTML"],xt=["max","value","disabled"],mt={class:"hint"},ht={class:"rt"},bt={class:"ri"},ft=["innerHTML"],vt=["max","value","disabled"],yt={class:"hint"},wt={class:"coupon"},kt={class:"ci"},_t=["innerHTML"],$t=["onKeydown"],zt=["disabled"],Mt={class:"reward-total"},Ct={key:0},St={class:"trust-row"},Ft={class:"ti"},Bt=["innerHTML"],Lt={__name:"PayStep",setup(tr){const{state:e,priceParts:k,pointValue:f,couponDiscount:S,walletDiscount:B,loyaltyPointsUsed:C,loyaltyDiscount:V,payableTotal:j}=pr(),u=nr(!1);zr(async()=>{var _,m;try{const $=await de(),ar=((_=$==null?void 0:$.data)==null?void 0:_.balances)||{};e.walletBalance=Number(ar.wallet??0),e.loyaltyPoints=Number(ar.loyalty_points??0)}catch{}try{const $=await qr();e.pointValue=Number(((m=$==null?void 0:$.data)==null?void 0:m.point_value)??.5)||.5}catch{}});const E=h(()=>Math.max(Number(e.walletBalance)||0,0)),O=h(()=>Math.max(parseInt(e.loyaltyPoints,10)||0,0)),v=h(()=>Math.max(k.value.total-S.value,0)),F=h(()=>Math.min(B.value,v.value)),L=h(()=>Math.max(k.value.total-S.value-F.value,0)),H=h(()=>Math.min(O.value,Math.ceil(L.value/f.value))),z=h(()=>F.value>0||C.value>0),b=h(()=>Math.round(k.value.total*.3)),a=h(()=>E.value>=b.value),c=h(()=>[{id:"cod",n:"الدفع عند الوصول",d:z.value?"غير متاح مع خصم المحفظة أو النقاط":a.value?`عربون 30% (${N(b.value)} ر.س) يُخصم من المحفظة والباقي عند الوصول`:`يتطلب عربون 30% (${N(b.value)} ر.س) في المحفظة — رصيدك: ${N(E.value)} ر.س`,logo:"COD",enabled:!z.value&&a.value},{id:"mada",n:"مدى",d:"قريبًا",logo:"مدى",enabled:!1},{id:"card",n:"بطاقات الائتمان والخصم",d:z.value?"ادفع المتبقي بعد الخصومات":"قريبًا — Visa / Mastercard",logo:"VISA",enabled:z.value&&j.value>0},{id:"urpay",n:"يورباي",d:z.value?"ادفع المتبقي بعد الخصومات":"الدفع عبر يورباي",logo:"UrPay",enabled:j.value>0},{id:"tabby",n:"تابي",d:"قريبًا",logo:"tabby",enabled:!1}]);sr([a,z,j],()=>{z.value&&e.pay==="cod"?e.pay=j.value>0?"card":null:!a.value&&e.pay==="cod"&&(e.pay=null)});const w=[["ضمان الجودة","نضمن لك أفضل تجربة",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>'],["دفع آمن","تقنيات تشفير متقدمة",'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>'],["حماية البيانات","بياناتك محمية بالكامل",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'],["دعم فوري","فريق دعم جاهز لخدمتك",'<path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>']],T={wallet:'<path d="M18 8V7a2 2 0 00-2-2H5a2 2 0 000 4h14a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2V7"/><path d="M16 13h.01"/>',gift:'<path d="M20 12v8H4v-8"/><path d="M2 7h20v5H2z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 110-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 100-5C13 2 12 7 12 7z"/>',coupon:'<path d="M4 7a2 2 0 012-2h12a2 2 0 012 2v3a2 2 0 000 4v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3a2 2 0 000-4z"/><path d="M9 9h.01M15 15h.01M16 8l-8 8"/>'};function G(_){_.enabled&&(e.pay=_.id)}function I(_,m){const $=Number(_);return Number.isFinite($)?Math.max(0,Math.min($,m)):0}function er(){e.rewards.useWallet=!e.rewards.useWallet,e.rewards.useWallet?e.rewards.walletAmount=I(e.rewards.walletAmount||v.value,Math.min(E.value,v.value)):e.rewards.walletAmount=0}function W(_){e.rewards.walletAmount=I(_,Math.min(E.value,v.value)),e.rewards.useWallet=e.rewards.walletAmount>0}function g(){e.rewards.useLoyalty=!e.rewards.useLoyalty,e.rewards.useLoyalty?e.rewards.loyaltyPoints=Math.min(e.rewards.loyaltyPoints||H.value,H.value):e.rewards.loyaltyPoints=0}function p(_){const m=Math.max(0,Math.min(parseInt(_,10)||0,H.value));e.rewards.loyaltyPoints=m,e.rewards.useLoyalty=m>0}function x(_){const $=(_==null?void 0:_.discount_type)==="percent"?k.value.total*(Number(_==null?void 0:_.discount_percentage)||0)/100:Number(_==null?void 0:_.discount_amount)||0;return Math.min(Math.max($,0),k.value.total)}async function A(){const _=e.rewards.couponCode.trim();if(!_){e.rewards.couponStatus="bad",e.rewards.couponMessage="أدخل كود الخصم أولًا";return}u.value=!0;try{const m=await ae(_);if(!(m!=null&&m.valid)){e.rewards.couponApplied="",e.rewards.couponDiscount=0,e.rewards.couponStatus="bad",e.rewards.couponMessage="كود الخصم غير صالح";return}const $=x(m);e.rewards.couponCode=_,e.rewards.couponApplied=_,e.rewards.couponDiscount=$,e.rewards.couponStatus="ok",e.rewards.couponMessage=`تم تطبيق خصم ${N(Math.round($))} ر.س`}catch(m){e.rewards.couponStatus="bad",e.rewards.couponMessage=m.message||"تعذّر التحقق من الكوبون"}finally{u.value=!1}}function rr(){e.rewards.couponApplied="",e.rewards.couponDiscount=0,e.rewards.couponStatus="",e.rewards.couponMessage=""}return sr([E,v],()=>{e.rewards.useWallet&&W(e.rewards.walletAmount)}),sr(H,()=>{e.rewards.useLoyalty&&p(e.rewards.loyaltyPoints)}),(_,m)=>(t(),s(P,null,[m[13]||(m[13]=r("div",{class:"panel-head"},[r("h1",null,"الدفع"),r("p",null,"اختر طريقة الدفع المناسبة وأكمل حجزك")],-1)),r("div",at,[m[7]||(m[7]=r("h4",null,"اختر طريقة الدفع",-1)),r("div",ot,[(t(!0),s(P,null,J(c.value,$=>(t(),s("div",{key:$.id,class:Y(["pm",{sel:n(e).pay===$.id,disabled:!$.enabled}]),onClick:ar=>G($)},[r("span",st,i($.logo),1),r("span",null,[r("b",null,i($.n),1),r("small",null,i($.d),1)]),m[4]||(m[4]=r("span",{class:"rad"},[r("i")],-1))],10,it))),128))]),!a.value&&!z.value?(t(),s("div",lt,[m[5]||(m[5]=M(" 💡 ",-1)),m[6]||(m[6]=r("b",null,"ملاحظة الدفع عند الوصول:",-1)),M(" يتطلب توفر عربون بنسبة 30% ("+i(n(N)(b.value))+" ر.س) في رصيد محفظتك لتأكيد الحجز. رصيدك الحالي: "+i(n(N)(E.value))+" ر.س. ",1)])):R("",!0),m[8]||(m[8]=r("div",{class:"secure-line"},"🔒 جميع عمليات الدفع آمنة ومشفرة",-1))]),r("div",dt,[m[12]||(m[12]=r("h4",null,[r("span",{class:"step-dot"},"2"),M(" استخدام العروض و المكافآت")],-1)),r("div",pt,[r("div",{class:Y(["rw",{on:n(e).rewards.useWallet}])},[r("div",ct,[r("span",gt,[(t(),s("svg",{width:"19",height:"19",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:T.wallet},null,8,ut))]),r("span",null,[m[9]||(m[9]=r("b",null,"استخدام من المحفظة",-1)),r("small",null,"الرصيد الحالي: "+i(n(N)(E.value))+" ر.س",1)]),r("span",{class:Y(["switch",{on:n(e).rewards.useWallet}]),onClick:er},null,2)]),r("input",{type:"number",min:"0",max:Math.min(E.value,v.value),step:"1",value:n(e).rewards.walletAmount,disabled:!n(e).rewards.useWallet,onInput:m[0]||(m[0]=$=>W($.target.value))},null,40,xt),r("span",mt,"المبلغ المتاح حتى "+i(n(N)(Math.round(Math.min(E.value,v.value))))+" ر.س",1)],2),r("div",{class:Y(["rw",{on:n(e).rewards.useLoyalty}])},[r("div",ht,[r("span",bt,[(t(),s("svg",{width:"19",height:"19",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:T.gift},null,8,ft))]),r("span",null,[m[10]||(m[10]=r("b",null,"استخدام نقاط الولاء",-1)),r("small",null,"لديك "+i(n(N)(O.value))+" نقطة",1)]),r("span",{class:Y(["switch",{on:n(e).rewards.useLoyalty}]),onClick:g},null,2)]),r("input",{type:"number",min:"0",max:H.value,step:"1",value:n(e).rewards.loyaltyPoints,disabled:!n(e).rewards.useLoyalty,onInput:m[1]||(m[1]=$=>p($.target.value))},null,40,vt),r("span",yt,"تساوي خصم "+i(n(N)(Math.round(n(C)*n(f))))+" ر.س",1)],2)]),r("div",wt,[r("span",kt,[(t(),s("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:T.coupon},null,8,_t))]),Sr(r("input",{"onUpdate:modelValue":m[2]||(m[2]=$=>n(e).rewards.couponCode=$),placeholder:"أدخل كود الخصم",onInput:m[3]||(m[3]=$=>n(e).rewards.couponApplied&&n(e).rewards.couponCode!==n(e).rewards.couponApplied?rr():null),onKeydown:Jr(Dr(A,["prevent"]),["enter"])},null,40,$t),[[Xr,n(e).rewards.couponCode]]),n(e).rewards.couponApplied?(t(),s("button",{key:0,type:"button",class:"coupon-clear",onClick:rr},"إلغاء")):R("",!0),r("button",{type:"button",onClick:A,disabled:u.value},i(u.value?"...":"تطبيق"),9,zt)]),n(e).rewards.couponMessage?(t(),s("p",{key:0,class:Y(["coupon-msg",n(e).rewards.couponStatus])},i(n(e).rewards.couponMessage),3)):R("",!0),r("div",Mt,[m[11]||(m[11]=r("span",null,"المبلغ بعد المكافآت",-1)),r("b",null,i(n(N)(Math.round(n(j))))+" ر.س",1),n(S)||F.value||n(V)?(t(),s("small",Ct," تم خصم "+i(n(N)(Math.round(n(S)+F.value+n(V))))+" ر.س ",1)):R("",!0)])]),r("div",St,[(t(),s(P,null,J(w,($,ar)=>r("div",{key:ar,class:"trust"},[r("span",Ft,[(t(),s("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7",innerHTML:$[2]},null,8,Bt))]),r("b",null,i($[0]),1),r("small",null,i($[1]),1)])),64))])],64))}},At=Kr(Lt,[["__scopeId","data-v-a2e9b89d"]]),Et={class:"success-wrap"},Tt={class:"suc-grid"},Dt={class:"card suc-details"},jt={class:"sd-row"},Nt={class:"k"},Ht=["innerHTML"],It={class:"v"},Pt={class:"sd-row"},Vt={class:"k"},Yt=["innerHTML"],Rt={class:"v"},qt={class:"sd-row"},Ot={class:"k"},Gt=["innerHTML"],Ut={class:"v"},Wt={class:"sd-row"},Kt={class:"k"},Xt=["innerHTML"],Jt={class:"v"},Qt={class:"sd-row"},Zt={class:"k"},ra=["innerHTML"],ea={class:"v"},na={class:"sd-row"},ta={class:"k"},aa=["innerHTML"],oa={class:"card qr-card"},ia={class:"code"},sa={class:"qr-box"},la=["src"],da=["href"],pa={class:"suc-actions"},ca={class:"suc-perks"},ga={class:"ti"},ua=["innerHTML"],xa="color:var(--gold-deep);font-family:var(--font-d);font-size:17px",ma={__name:"BookingSuccess",emits:["home","calendar","share"],setup(tr,{emit:e}){const{state:k,selSvcs:f,totalDur:S,priceParts:B}=pr(),{current:C}=yr(),V=e,j=h(()=>B.value),u=h(()=>k.date?jr(k.date):""),E=h(()=>[...new Set(f.value.map(b=>{var a;return(a=k.emp[b.id])==null?void 0:a.name}).filter(Boolean))]),O=h(()=>{var b;return{r:k.bookRef||"",b:((b=C.value)==null?void 0:b.name)||"",d:u.value,u:hr(S.value),e:E.value.join("، "),p:j.value.total,s:f.value.map(a=>{var c;return[a.name,ir(k.time[a.id]),((c=k.emp[a.id])==null?void 0:c.name)||"",a.price]})}}),v=h(()=>{const b=JSON.stringify(O.value);return btoa(unescape(encodeURIComponent(b))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}),F=h(()=>`${window.location.origin}/booking?receipt=${v.value}`),L=h(()=>`https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=12&data=${encodeURIComponent(F.value)}`),H={pin:'<path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>',cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>',scis:'<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"/>',user:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',card:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>'},z=[["خدمة VIP","تجربة فاخرة مصممة لراحتك",'<path d="M2 8l4 4 6-8 6 8 4-4v10a2 2 0 01-2 2H4a2 2 0 01-2-2z"/>'],["بياناتك آمنة","نضمن لك خصوصية وأمان بياناتك",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'],["تعديل الحجز","يمكنك تعديل أو إلغاء الحجز قبل موعده",'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>'],["دعم عملاء 24/7","نحن هنا لخدمتك دائمًا",'<path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>']];return(b,a)=>{var c;return t(),s("div",Et,[a[15]||(a[15]=vr('<div class="suc-ic"><span class="spark s1">✦</span><span class="spark s2">✧</span><svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M20 6L9 17l-5-5"></path></svg></div><h1>تم تأكيد حجزك بنجاح!</h1><p class="sub">نتطلع لخدمتك وتقديم تجربة استثنائية تليق بك</p>',3)),r("div",Tt,[r("div",Dt,[a[9]||(a[9]=r("h4",null,"تفاصيل الحجز",-1)),r("div",jt,[r("span",Nt,[(t(),s("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:H.pin},null,8,Ht)),a[3]||(a[3]=M(" الفرع",-1))]),r("span",It,i(((c=n(C))==null?void 0:c.name)||"—"),1)]),r("div",Pt,[r("span",Vt,[(t(),s("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:H.cal},null,8,Yt)),a[4]||(a[4]=M(" التاريخ",-1))]),r("span",Rt,i(u.value),1)]),r("div",qt,[r("span",Ot,[(t(),s("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:H.info},null,8,Gt)),a[5]||(a[5]=M(" مدة الجلسة",-1))]),r("span",Ut,i(n(hr)(n(S))),1)]),r("div",Wt,[r("span",Kt,[(t(),s("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:H.scis},null,8,Xt)),a[6]||(a[6]=M(" الخدمات",-1))]),r("span",Jt,i(n(f).map(w=>`${w.name} (${n(ir)(n(k).time[w.id])})`).join(" + ")),1)]),r("div",Qt,[r("span",Zt,[(t(),s("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:H.user},null,8,ra)),a[7]||(a[7]=M(" الفريق",-1))]),r("span",ea,i(E.value.join("، ")),1)]),r("div",na,[r("span",ta,[(t(),s("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:H.card},null,8,aa)),a[8]||(a[8]=M(" المبلغ التقديري",-1))]),r("span",{class:"v",style:xa},i(n(N)(j.value.total))+" ر.س",1)])]),r("div",oa,[a[10]||(a[10]=r("h4",{style:{"font-family":"var(--font-d)","font-size":"16px",color:"var(--ink)"}},"رقم الفاتورة",-1)),r("div",ia,i(n(k).bookRef||"—"),1),r("div",sa,[r("img",{src:L.value,alt:"QR تفاصيل الحجز",loading:"lazy"},null,8,la)]),r("a",{class:"receipt-link",href:F.value,target:"_blank",rel:"noopener"},"فتح تفاصيل الحجز",8,da),a[11]||(a[11]=r("small",null,"امسح الرمز بالكاميرا لعرض تفاصيل الحجز",-1))])]),r("div",pa,[r("button",{class:"btn btn-gold",onClick:a[0]||(a[0]=w=>V("home"))},[...a[12]||(a[12]=[r("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[r("path",{d:"M3 9l9-6 9 6v11a1 1 0 01-1 1H4a1 1 0 01-1-1z"})],-1),M(" العودة إلى الرئيسية",-1)])]),r("button",{class:"btn btn-line",onClick:a[1]||(a[1]=w=>V("calendar"))},[...a[13]||(a[13]=[r("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[r("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),r("path",{d:"M16 2v4M8 2v4M3 10h18M12 14v4M10 16h4"})],-1),M(" إضافة للتقويم",-1)])]),r("button",{class:"btn btn-line",onClick:a[2]||(a[2]=w=>V("share"))},[...a[14]||(a[14]=[vr('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"></path></svg> مشاركة الحجز',2)])])]),r("div",ca,[(t(),s(P,null,J(z,(w,T)=>r("div",{key:T,class:"trust"},[r("span",ga,[(t(),s("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7",innerHTML:w[2]},null,8,ua))]),r("b",null,i(w[0]),1),r("small",null,i(w[1]),1)])),64))])])}}},ha={key:0,class:"card"},ba={key:0,class:"br-img"},fa=["src","alt"],va={key:1,class:"sum-row"},ya={class:"v"},wa={key:2,class:"sum-row"},ka={class:"v"},_a={class:"sum-row"},$a={class:"v"},za={class:"sum-row"},Ma={class:"v"},Ca={key:3,class:"sum-row"},Sa={class:"v"},Fa={class:"sum-svcs"},Ba={class:"nm"},La={class:"pr"},Aa=["onClick"],Ea={class:"sum-price"},Ta={class:"sp-row"},Da={class:"sp-row"},ja={class:"sp-total"},Na={class:"v"},Ha={class:"sum-note"},Ia={width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",style:{flex:"none"}},Pa={__name:"BookingSummary",setup(tr){const{state:e,selSvcs:k,totalDur:f,priceParts:S,toggleSvc:B}=pr(),{current:C}=yr(),V=nr(!1),j=h(()=>e.services.length>0);sr(j,O=>{O?Qr(()=>requestAnimationFrame(()=>{V.value=!0})):V.value=!1},{immediate:!0});const u=h(()=>S.value),E=h(()=>e.date?jr(e.date):"");return(O,v)=>(t(),s("div",{id:"summary",class:Y({show:V.value})},[j.value?(t(),s("div",ha,[v[13]||(v[13]=r("h3",null,[r("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"var(--gold-deep)","stroke-width":"1.8"},[r("path",{d:"M9 11l3 3L22 4"}),r("path",{d:"M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"})]),M(" ملخص الحجز")],-1)),n(C)?(t(),s("div",ba,[n(C).image?(t(),s("img",{key:0,src:n(C).image,alt:n(C).name},null,8,fa)):R("",!0)])):R("",!0),n(C)?(t(),s("div",va,[v[0]||(v[0]=r("span",{class:"k"},"📍 الفرع",-1)),r("span",ya,i(n(C).name),1)])):R("",!0),n(e).date?(t(),s("div",wa,[v[1]||(v[1]=r("span",{class:"k"},"📅 التاريخ",-1)),r("span",ka,i(E.value),1)])):R("",!0),r("div",_a,[v[2]||(v[2]=r("span",{class:"k"},"⏱️ المدة الإجمالية",-1)),r("span",$a,i(n(hr)(n(f))),1)]),r("div",za,[v[3]||(v[3]=r("span",{class:"k"},"✂️ عدد الخدمات",-1)),r("span",Ma,i(n(k).length)+" "+i(n(k).length>2?"خدمات":"خدمة"),1)]),n(e).mode?(t(),s("div",Ca,[v[4]||(v[4]=r("span",{class:"k"},"👤 الموظفون",-1)),r("span",Sa,i(n(e).mode==="auto"?"اختيار تلقائي ذكي":"اختيار يدوي"),1)])):R("",!0),r("div",Fa,[(t(!0),s(P,null,J(n(k),F=>(t(),s("div",{key:F.id,class:"sum-svc"},[v[6]||(v[6]=r("i",{style:{background:"var(--gold)"}},null,-1)),r("span",Ba,i(F.name),1),r("span",La,i(n(N)(F.price))+" ر.س",1),r("button",{class:"rm","aria-label":"حذف",onClick:L=>n(B)(F)},[...v[5]||(v[5]=[r("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[r("path",{d:"M18 6L6 18M6 6l12 12"})],-1)])],8,Aa)]))),128))]),r("div",Ea,[r("div",Ta,[v[7]||(v[7]=r("span",null,"المجموع الفرعي",-1)),r("span",null,i(n(N)(u.value.sub))+" ر.س",1)]),r("div",Da,[v[8]||(v[8]=r("span",null,"ضريبة القيمة المضافة (15%)",-1)),r("span",null,"+"+i(n(N)(u.value.vat))+" ر.س",1)]),r("div",ja,[v[10]||(v[10]=r("span",{class:"k"},"المبلغ الإجمالي",-1)),r("span",Na,[M(i(n(N)(u.value.total))+" ",1),v[9]||(v[9]=r("small",null,"ر.س",-1))])])]),r("div",Ha,[(t(),s("svg",Ia,[...v[11]||(v[11]=[r("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},null,-1)])])),v[12]||(v[12]=M(" بياناتك محمية — يمكنك تعديل أو إلغاء الحجز قبل 6 ساعات من الموعد",-1))])])):R("",!0)],2))}},Va={class:"shell"},Ya={class:"wrap"},Ra={class:"panel",id:"panel"},qa={key:0,class:"success-wrap receipt-wrap"},Oa={class:"suc-grid receipt-grid"},Ga={class:"card suc-details"},Ua={class:"sd-row"},Wa={class:"v receipt-code"},Ka={class:"sd-row"},Xa={class:"v"},Ja={class:"sd-row"},Qa={class:"v"},Za={class:"sd-row"},ro={class:"v"},eo={class:"sd-row"},no={class:"v"},to={class:"sd-row"},ao={class:"card suc-details receipt-services"},oo={class:"footbar",id:"footbar"},io={class:"wrap in"},so={class:"fb-mid",id:"fbMid"},lo={key:0,class:"tot"},po=["disabled"],co="color:var(--gold-deep);font-family:var(--font-d);font-size:17px",wo={__name:"BookingView",setup(tr){const e=nr(null),k=Zr(),{current:f,locations:S,loadServiceLocations:B,setLocation:C}=yr(),{requireAuth:V,user:j}=Yr();B(),sr([()=>k.query.branch,S],([D,y])=>{const X=Array.isArray(D)?D[0]:D;if(!X||!y.length)return;const Q=X==="hm"||X==="home-service"?y.find(cr=>cr.home):y.find(cr=>String(cr.id)===String(X));Q&&C(Q.id)},{immediate:!0});const{state:u,selSvcs:E,priceParts:O,canProceed:v,nextLabel:F,reset:L,payableTotal:H,walletDiscount:z,loyaltyPointsUsed:b}=pr();re(pe,"booking"),ee(e);const a=nr(!1),c=nr(""),w=nr(!1);function T(D){c.value=D,w.value=!0,clearTimeout(T._h),T._h=setTimeout(()=>{w.value=!1},2600)}sr(()=>k.query.payment,D=>{D&&(D==="failed"?T("فشلت عملية الدفع الإلكتروني، يرجى إعادة المحاولة."):(D==="cancelled"||D==="cancel")&&T("تم إلغاء عملية الدفع."))},{immediate:!0});const G=h(()=>u.services.length>0),I=h(()=>u.step===4?H.value:O.value.total);function er(D){if(!D)return null;try{const y=String(D).replace(/-/g,"+").replace(/_/g,"/"),X=y.padEnd(y.length+(4-y.length%4)%4,"="),Q=JSON.parse(decodeURIComponent(escape(atob(X))));return Q&&typeof Q=="object"?Q:null}catch{return null}}const W=h(()=>er(k.query.receipt)),g=h(()=>!!W.value),p=h(()=>{var D;return Array.isArray((D=W.value)==null?void 0:D.s)?W.value.s:[]}),x=h(()=>!g.value&&!u.done&&G.value&&u.step>=1),A=h(()=>x.value?"minmax(0,1fr) minmax(285px,315px)":"1fr");function rr(){u.step>0&&(u.step--,scrollTo({top:0,behavior:"smooth"}))}function _(){if(v.value){if(u.step===4){V($);return}u.step++,scrollTo({top:0,behavior:"smooth"})}}function m(D){return`${D.getFullYear()}-${String(D.getMonth()+1).padStart(2,"0")}-${String(D.getDate()).padStart(2,"0")}`}async function $(){var D,y,X,Q,cr,Mr,br;a.value=!0;try{const fr=[(D=j.value)==null?void 0:D.first_name,(y=j.value)==null?void 0:y.last_name].filter(Boolean).join(" ");u.cust.name=u.cust.name||fr||((X=j.value)==null?void 0:X.username)||"",u.cust.phone=u.cust.phone||((Q=j.value)==null?void 0:Q.mobile)||"",u.cust.mail=u.cust.mail||((cr=j.value)==null?void 0:cr.email)||"";const Lr=(Mr=f.value)!=null&&Mr.home?0:Number((br=f.value)==null?void 0:br.id);if(u.pay==="cod"){const K=Math.round(O.value.total*.3);if((Number(u.walletBalance)||0)<K){T(`عذرًا، الدفع عند الوصول يتطلب توفر عربون 30% (${N(K)} ر.س) في محفظتك`);return}}const Ar=E.value.map(K=>{var Z;return{subServices:[{id:K.id,date:m(u.date),time:u.time[K.id],duration:K.dur,staffId:(Z=u.emp[K.id])==null?void 0:Z.id}]}});await oe({branch:Lr,services:Ar,customerName:u.cust.name,mobileNo:u.cust.phone});const Cr=u.rewards,gr=Number(z.value.toFixed(2)),wr=b.value,Er=gr>0,l=wr>0,o=Cr.couponApplied||"",d=u.pay==="cod"?"cod":u.pay||"card",q=await ie(d,{wallet:Er,walletAmount:gr,loyalty:l,loyaltyPoints:wr,couponCode:o});if(q.payment_url){window.location.href=q.payment_url;return}u.bookRef=q.invoice_id||null,u.done=!0,scrollTo({top:0,behavior:"smooth"})}catch(fr){T(fr.message||"تعذّر إتمام الحجز، حاول مرة أخرى")}finally{a.value=!1}}function ar(){L(),location.href="/"}return(D,y)=>(Rr("RouterLink"),t(),s("div",{ref_key:"root",ref:e},[r("div",Va,[g.value?R("",!0):(t(),mr(ve,{key:0})),r("div",Ya,[r("div",{class:"stage",id:"stage",style:$r(`grid-template-columns:${A.value}`)},[r("main",Ra,[g.value?(t(),s("div",qa,[y[10]||(y[10]=r("div",{class:"suc-ic"},[r("svg",{width:"44",height:"44",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.2"},[r("path",{d:"M20 6L9 17l-5-5"})])],-1)),y[11]||(y[11]=r("h1",null,"تفاصيل الحجز",-1)),y[12]||(y[12]=r("p",{class:"sub"},"تم فتح تفاصيل الحجز من رمز QR",-1)),r("div",Oa,[r("div",Ga,[y[8]||(y[8]=r("h4",null,"بيانات الحجز",-1)),r("div",Ua,[y[2]||(y[2]=r("span",{class:"k"},"رقم الفاتورة",-1)),r("span",Wa,i(W.value.r||"—"),1)]),r("div",Ka,[y[3]||(y[3]=r("span",{class:"k"},"الفرع",-1)),r("span",Xa,i(W.value.b||"—"),1)]),r("div",Ja,[y[4]||(y[4]=r("span",{class:"k"},"التاريخ",-1)),r("span",Qa,i(W.value.d||"—"),1)]),r("div",Za,[y[5]||(y[5]=r("span",{class:"k"},"مدة الجلسة",-1)),r("span",ro,i(W.value.u||"—"),1)]),r("div",eo,[y[6]||(y[6]=r("span",{class:"k"},"الفريق",-1)),r("span",no,i(W.value.e||"—"),1)]),r("div",to,[y[7]||(y[7]=r("span",{class:"k"},"المبلغ",-1)),r("span",{class:"v",style:co},i(n(N)(Number(W.value.p)||0))+" ر.س",1)])]),r("div",ao,[y[9]||(y[9]=r("h4",null,"الخدمات",-1)),(t(!0),s(P,null,J(p.value,(X,Q)=>(t(),s("div",{key:Q,class:"receipt-service"},[r("b",null,i(X[0]),1),r("small",null,i(X[1]||"—")+" · "+i(X[2]||W.value.e||"—"),1),r("span",null,i(n(N)(Number(X[3])||0))+" ر.س",1)]))),128))])])])):n(u).done?(t(),mr(ma,{key:1,onHome:ar,onCalendar:y[0]||(y[0]=X=>T("تمت إضافة الموعد إلى التقويم")),onShare:y[1]||(y[1]=X=>T("تم نسخ رابط الحجز للمشاركة"))})):n(u).step===0?(t(),mr(qe,{key:2})):n(u).step===1?(t(),mr(an,{key:3})):n(u).step===2?(t(),mr(Nn,{key:4})):n(u).step===3?(t(),mr(tt,{key:5})):(t(),mr(At,{key:6}))]),Sr(r("aside",{class:Y(["summary booking-summary-compact",{show:x.value,"booking-summary-time":n(u).step===2}])},[_r(Pa)],2),[[Tr,x.value]])],4)])]),R("",!0),Sr(r("div",oo,[r("div",io,[r("button",{class:"btn btn-back",id:"btnBack",style:$r({visibility:n(u).step===0?"hidden":"visible"}),onClick:rr},[...y[29]||(y[29]=[r("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[r("path",{d:"M5 12h14M13 6l6 6-6 6"})],-1),M(" السابق ",-1)])],4),r("div",so,[y[31]||(y[31]=r("span",null,"🔒 بياناتك محمية وآمنة",-1)),G.value?(t(),s("span",lo,[y[30]||(y[30]=M("المبلغ الإجمالي ",-1)),r("b",null,i(n(N)(Math.round(I.value)))+" ر.س",1)])):R("",!0)]),r("button",{class:Y(["btn",n(u).step===4?"btn-pay":"btn-gold"]),id:"btnNext",disabled:!n(v),onClick:_},[M(i(n(F))+" ",1),y[32]||(y[32]=r("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.2"},[r("path",{d:"M19 12H5M11 18l-6-6 6-6"})],-1))],10,po)])],512),[[Tr,!n(u).done&&!g.value]]),r("div",{class:Y(["pay-loading",{on:a.value}]),id:"payLoading"},[...y[33]||(y[33]=[r("div",{class:"pl-box"},[r("div",{class:"pl-ring"}),r("b",null,"جارٍ معالجة الدفع بأمان…"),r("small",null,"لا تغلق الصفحة، سيتم تأكيد حجزك خلال لحظات")],-1)])],2),r("div",{class:Y(["toast",{on:w.value}]),id:"toast"},i(c.value),3)],512))}};export{wo as default};
