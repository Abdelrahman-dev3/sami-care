import{B as Y,C as K,u as t,o as a,c as r,b as n,F as y,e as L,n as $,t as o,k,a as h,q as E,i as I,l as S,D as O,r as U,E as an,G as dn,h as pn,d as Z,j as N,H as cn}from"./index-Cg6jaJBg.js";import{u as gn,a as xn}from"./useInternalLinks-CJP2UQ1A.js";import{u as j,S as mn,c as J,B as q,a as Q,r as T,E as un,b as nn,A as V,d as R,f as W,e as D,U as rn,P as hn}from"./useBooking-6IYovh1Q.js";import{c as G}from"./giftIcons-w9RYaTqR.js";import"./serviceDetails-gQMMCHKA.js";const bn=`
:root{
  --ink:#0A0906; --coal:#14110C; --coal-2:#1C1811;
  --gold:#CE9234; --gold-bright:#E8BE6C; --gold-deep:#9C6B1F;
  --champagne:#F0E6CF; --ivory:#F8F4EB; --paper:#FBFAF6; --card:#FFFFFF;
  --smoke:#9A9080; --mute:#7d745f; --text:#2A2519;
  --line:rgba(143,113,52,.22); --line-dark:rgba(198,161,91,.22);
  --green:#2E8B57; --green-bg:#EAF5EC;
  --c-hair:#C6963F; --c-skin:#D96A8B; --c-pedi:#B9743B; --c-mass:#8B6FC0; --c-bath:#4E9E6F;
  --ease:cubic-bezier(.33,.9,.35,1); --dur:.26s;
  --font-d:'Noto Kufi Arabic',serif; --font-b:'Readex Pro',sans-serif;
}
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:var(--font-b);background:var(--ink);color:var(--text);-webkit-font-smoothing:antialiased;overflow-x:hidden}
::selection{background:var(--gold);color:var(--ink)}
img{max-width:100%;display:block}
a{color:inherit;text-decoration:none}
button{font-family:inherit;cursor:pointer;border:none;background:none;color:inherit}
input,textarea{font-family:inherit}
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
nav.links a{font-size:15px;color:var(--champagne);opacity:.82;transition:var(--dur)}
nav.links a:hover{opacity:1;color:var(--gold-bright)}
.nav-actions{display:flex;align-items:center;gap:12px;margin-inline-start:auto}
nav.links + .nav-actions{margin-inline-start:0}
.icon-btn{position:relative;width:40px;height:40px;border-radius:50%;display:grid;place-items:center;
  border:1px solid var(--line-dark);color:var(--champagne);transition:var(--dur) var(--ease)}
.icon-btn:hover{border-color:var(--gold);color:var(--gold-bright)}
.icon-btn .count{position:absolute;top:-5px;left:-5px;min-width:18px;height:18px;border-radius:9px;
  background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);
  font-size:10.5px;font-weight:700;display:grid;place-items:center;padding-inline:4px;
  transition:transform .3s var(--ease)}
.icon-btn .count.pop{transform:scale(1.35)}
.loyal{display:inline-flex;align-items:center;gap:8px;border:1px solid var(--gold);color:var(--gold-bright);
  padding:9px 18px;border-radius:999px;font-size:13px}
.site-loc{display:inline-flex;align-items:center;gap:8px;border:1px solid var(--line-dark);color:var(--champagne);
  padding:9px 14px;border-radius:999px;font-size:13px;background:rgba(255,255,255,.03);transition:var(--dur) var(--ease)}
.site-loc:hover{border-color:var(--gold);color:var(--gold-bright)}

/* ===== حاوية الصفحة ===== */
.shell{background:var(--paper);border-radius:26px 26px 0 0;min-height:calc(100vh - 71px);padding-bottom:110px;position:relative}

/* ===== الستيبر ===== */
.stepper{padding:34px 0 8px}
.steps{display:flex;align-items:flex-start;justify-content:space-between;position:relative;max-width:980px;margin-inline:auto}
.step{position:relative;z-index:2;display:flex;flex-direction:column;align-items:center;gap:10px;flex:1;cursor:default}
.step .bubble{
  width:52px;height:52px;border-radius:50%;display:grid;place-items:center;background:#fff;
  border:1.5px solid var(--line);color:#A79c86;position:relative;
  transition:all .35s var(--ease);
}
.step .n{position:absolute;top:-25px;font-size:11.5px;color:#B4a98f;font-weight:600;transition:color .3s}
.step label{font-size:12.5px;color:#A79c86;transition:color .3s;white-space:nowrap}
.step.active .bubble{
  background:linear-gradient(135deg,var(--gold-bright),var(--gold));border-color:transparent;color:var(--ink);
  box-shadow:0 10px 26px -8px rgba(143,113,52,.6),0 0 0 6px rgba(198,161,91,.14);
  transform:scale(1.06);
}
.step.active label{color:var(--gold-deep);font-weight:700}
.step.active .n{color:var(--gold-deep)}
.step.done .bubble{background:#fff;border-color:var(--gold);color:var(--gold-deep);cursor:pointer}
.step.done .bubble::after{
  content:"";position:absolute;top:-3px;left:-3px;width:18px;height:18px;border-radius:50%;
  background:var(--gold) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230A0906' stroke-width='3.4'%3E%3Cpath d='M20 6L9 17l-5-5'/%3E%3C/svg%3E") center/10px no-repeat;
}
.step .bar{position:absolute;top:26px;right:calc(50% + 34px);width:calc(100% - 68px);height:2px;background:var(--line);z-index:-1}
.step .bar i{display:block;height:100%;width:0;background:linear-gradient(90deg,var(--gold-deep),var(--gold-bright));transition:width .6s var(--ease)}
.step.done .bar i,.step.active .bar i{width:100%}
.step:first-child .bar{display:none}

/* ===== تخطيط المحتوى ===== */
.stage{display:grid;grid-template-columns:1fr 340px;gap:24px;padding:26px 0 104px;align-items:start;isolation:isolate}
.panel{min-width:0}
.panel-head{text-align:center;margin:12px 0 30px}
.panel-head h1{font-family:var(--font-d);font-size:clamp(26px,3.2vw,36px);color:var(--ink)}
.panel-head p{color:var(--mute);font-size:14.5px;margin-top:8px}

/* بطاقات عامة */
.card{background:var(--card);border:1px solid var(--line);border-radius:18px;
  box-shadow:0 14px 30px -22px rgba(80,60,20,.25)}

/* ===== خطوة 1: الفروع ===== */
.branches-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.branch{
  position:relative;border-radius:20px;overflow:hidden;background:#fff;border:1.5px solid var(--line);
  cursor:pointer;transition:transform .3s var(--ease),box-shadow .3s,border-color .3s;
}
.branch:hover{transform:translateY(-6px);box-shadow:0 26px 46px -24px rgba(80,60,20,.45)}
.branch.sel{border-color:var(--gold);box-shadow:0 0 0 4px rgba(198,161,91,.16),0 26px 46px -24px rgba(143,113,52,.5)}
.branch .img{aspect-ratio:16/10;overflow:hidden;position:relative;background:#151209}
.branch .img img{width:100%;height:100%;object-fit:cover;transition:transform .8s var(--ease)}
.branch:hover .img img{transform:scale(1.06)}
.branch .home-flag{position:absolute;top:14px;right:14px;background:rgba(255,251,240,.94);color:var(--gold-deep);
  font-size:11.5px;font-weight:700;padding:7px 14px;border-radius:999px;display:flex;gap:6px;align-items:center;
  box-shadow:0 8px 18px -8px rgba(0,0,0,.35)}
.branch .b-ic{
  position:absolute;bottom:-24px;right:calc(50% - 24px);width:48px;height:48px;border-radius:50%;
  background:#fff;border:1px solid var(--line);display:grid;place-items:center;color:var(--gold-deep);
  box-shadow:0 8px 20px -8px rgba(80,60,20,.4);transition:all .3s var(--ease);
}
.branch.sel .b-ic{background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);border-color:transparent}
.branch .body{padding:36px 20px 20px;text-align:center}
.branch h3{font-family:var(--font-d);font-size:20px;color:var(--gold-deep)}
.branch .addr{font-size:13px;color:var(--mute);margin:6px 0 14px}
.branch .meta{display:flex;justify-content:center;gap:14px;font-size:12px;color:#5c5442;flex-wrap:wrap;border-top:1px dashed var(--line);padding-top:13px}
.branch .meta b{color:var(--gold-deep)}
.branch .meta .live{color:var(--green);display:flex;gap:5px;align-items:center}
.branch .meta .live i{width:6px;height:6px;border-radius:50%;background:var(--green);animation:pulse 2s infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.3}}
.branch .pick{margin-top:14px;width:100%;border:1px solid var(--gold);color:var(--gold-deep);border-radius:12px;
  padding:11px;font-size:13.5px;font-weight:600;display:flex;justify-content:center;gap:8px;transition:var(--dur) var(--ease)}
.branch:hover .pick{background:rgba(198,161,91,.08)}
.branch.sel .pick{background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);border-color:transparent}
.branch-sheet-ov{position:fixed;inset:0;z-index:1600;background:rgba(10,7,3,.55);backdrop-filter:blur(6px);opacity:0;pointer-events:none;transition:opacity .28s var(--ease)}
.branch-sheet-ov.on{opacity:1;pointer-events:auto}
.branch-sheet{position:fixed;left:50%;bottom:0;z-index:1601;width:min(560px,100%);transform:translate(-50%,105%);background:linear-gradient(160deg,#fff,#F8F0E4);border:1px solid rgba(206,146,52,.28);border-radius:26px 26px 0 0;padding:18px 18px 24px;box-shadow:0 -28px 70px -24px rgba(20,12,4,.58);transition:transform .36s var(--ease)}
.branch-sheet.on{transform:translate(-50%,0)}
.branch-sheet .grab{width:48px;height:4px;border-radius:999px;background:#D8C9AF;margin:0 auto 14px}
.branch-sheet-head{text-align:center;margin-bottom:12px}.branch-sheet-head h3{font-family:var(--font-d);font-size:22px;color:var(--ink)}.branch-sheet-head p{font-size:13px;color:var(--mute);line-height:1.8;margin-top:5px}
.branch-choice{display:grid;grid-template-columns:96px 1fr auto;gap:13px;align-items:center;padding:12px;border-radius:18px;border:1.5px solid var(--line);background:#fff;text-align:right;margin-top:10px;box-shadow:0 10px 22px -20px rgba(80,50,20,.35)}
.branch-choice.sel{border-color:var(--gold);background:#FFF9EE;box-shadow:0 14px 28px -20px rgba(206,146,52,.75)}
.branch-choice img{width:96px;height:72px;border-radius:14px;object-fit:cover;background:#21170D}.branch-choice b{font-family:var(--font-d);font-size:15px;color:var(--ink)}.branch-choice small{display:block;color:var(--mute);font-size:11.5px;line-height:1.55;margin-top:3px}
.branch-choice .meta{display:flex;gap:6px;flex-wrap:wrap;margin-top:8px}.branch-choice .meta span{font-size:10px;color:var(--gold-deep);background:#FBFAF6;border:1px solid var(--line);border-radius:999px;padding:5px 8px}.branch-choice .check{width:28px;height:28px;border-radius:50%;display:grid;place-items:center;color:var(--gold-deep);border:1px solid rgba(206,146,52,.3);background:#fff;font-weight:900}

/* ===== خطوة 2: الخدمات ===== */
/* مكان تنفيذ الخدمة — ملاحظة صغيرة، مش كرت */
.branch-strip{display:flex;align-items:center;gap:9px;padding:0;margin:0 0 16px;
  background:none;border:0;box-shadow:none;font-size:12px;color:var(--mute)}
.branch-strip img{width:26px;height:26px;flex:none;object-fit:cover;border-radius:50%;
  border:1px solid rgba(198,161,91,.35)}
.branch-strip .bi{flex:1;min-width:0;display:flex;align-items:baseline;gap:6px;flex-wrap:wrap}
.branch-strip .bi b{font-family:inherit;font-size:12.5px;font-weight:700;color:var(--gold-deep)}
.branch-strip .bi small{color:var(--mute);font-size:11px}
.branch-strip .cells{flex:none;display:flex}
.branch-strip .cell{font-size:11px;color:var(--mute);padding:0;border:0}
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

/* ===== خطوة 3: الموظف ===== */
/* ===== طريقة اختيار الموظف — خياران دائريان مدمجان ===== */
.mode-grid{display:flex;flex-wrap:wrap;justify-content:center;align-items:flex-start;
  gap:38px;margin:4px 0 26px}
.mode{position:relative;width:188px;padding:0;border:0;background:none;border-radius:0;
  cursor:pointer;text-align:center;overflow:visible;transition:transform .3s var(--ease)}
.mode:hover{transform:translateY(-4px);box-shadow:none}

/* الدائرة هي الكرت نفسه */
.mode .mi{width:118px;height:118px;border-radius:50%;margin:0 auto 13px;display:grid;place-items:center;
  border:1.5px solid var(--line);background:#fff;color:var(--gold-deep);
  box-shadow:0 14px 28px -18px rgba(80,60,20,.42);
  transition:border-color .3s var(--ease),box-shadow .3s var(--ease),transform .3s var(--ease)}
.mode .mi svg{width:40px;height:40px}
.mode:hover .mi{border-color:var(--gold)}
.mode.sel .mi{border-color:var(--gold);
  box-shadow:0 0 0 4px rgba(198,161,91,.2),0 18px 32px -18px rgba(143,113,52,.55)}

/* الخيار التلقائي: الدائرة داكنة بدل الكرت كله */
.mode.dark{background:none;border:0;color:inherit}
.mode.dark .mi{background:linear-gradient(160deg,#1E1910,#0F0C07);
  border-color:rgba(233,207,142,.45);color:var(--gold-bright)}
.mode.dark h3{color:var(--ink)}

.mode h3{font-family:var(--font-d);font-size:16px;margin:0;color:var(--ink);text-align:center}
.mode .sub-t{font-size:11.5px;color:var(--mute);font-weight:500;margin:5px 0 0;text-align:center}

/* التفاصيل الطويلة اتشالت — الشكل بقى مختصر */
.mode ul{display:none}

.mode .flag{position:static;display:inline-block;margin-top:9px;padding:4px 11px;
  font-size:10px;font-weight:700;border-radius:999px;
  background:rgba(198,161,91,.14);color:var(--gold-deep)}
.mode.dark .flag{background:rgba(30,25,16,.08);color:var(--gold-deep)}

.mode .chk{position:absolute;top:2px;left:28px;width:26px;height:26px;border-radius:50%;
  border:1.5px solid var(--line);background:#fff;display:grid;place-items:center;color:var(--ink);
  transition:all .3s var(--ease);z-index:2}
.mode.sel .chk{background:linear-gradient(135deg,var(--gold-bright),var(--gold));border-color:transparent}
.mode .chk svg{opacity:0;transition:opacity .2s}
.mode.sel .chk svg{opacity:1}

.mode .glow-msg{max-width:none;margin:9px 0 0;padding:0;background:none;border-radius:0;
  font-size:11px;line-height:1.7;color:var(--gold-deep);text-align:center;
  opacity:0;transform:translateY(5px);transition:all .35s var(--ease)}
.mode.dark .glow-msg{background:none;color:var(--gold-deep)}
.mode.sel .glow-msg{opacity:1;transform:none}

@media(max-width:560px){.mode-grid{gap:22px}.mode{width:150px}.mode .mi{width:96px;height:96px}.mode .mi svg{width:33px;height:33px}.mode .chk{left:20px}}

.emp-section{margin-top:6px}
.emp-row{display:grid;grid-template-columns:118px 1fr;gap:0;margin-bottom:16px;align-items:stretch;background:#fff;border:1px solid var(--line);border-radius:18px;overflow:hidden;box-shadow:0 14px 30px -24px rgba(80,50,20,.32)}
.emp-cat{padding:14px 10px;color:#fff;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:7px;text-align:center}
.emp-cat .cat-ico{width:32px;height:32px;border-radius:50%;display:grid;place-items:center;border:1px solid rgba(255,255,255,.45);background:rgba(255,255,255,.12)}
.emp-cat b{font-family:var(--font-d);font-size:14px;line-height:1.4}.emp-cat small{font-size:10.5px;opacity:.9}
.emp-list{display:flex;flex-wrap:nowrap;gap:9px;overflow-x:auto;overflow-y:hidden;padding:12px 12px 15px;background:linear-gradient(180deg,#fff,#FFFDF9);scrollbar-width:thin;scrollbar-color:var(--gold) rgba(198,161,91,.1);scroll-snap-type:x proximity;overscroll-behavior-inline:contain}
.emp-list::-webkit-scrollbar{height:6px}
.emp-list::-webkit-scrollbar-track{background:rgba(198,161,91,.1);border-radius:999px}
.emp-list::-webkit-scrollbar-thumb{background:linear-gradient(90deg,var(--gold-deep),var(--gold));border-radius:999px}
.emp{
  flex:0 0 104px;background:#fff;border:1.5px solid var(--line);border-radius:13px;padding:10px 8px;text-align:center;
  cursor:pointer;transition:all var(--dur) var(--ease);position:relative;scroll-snap-align:start;
}
.emp:hover{transform:translateY(-4px);box-shadow:0 14px 26px -14px rgba(80,60,20,.4)}
.emp.sel{border-color:var(--acc,var(--gold));box-shadow:0 0 0 3px color-mix(in srgb,var(--acc,var(--gold)) 22%,transparent)}
.emp .av{width:46px;height:46px;border-radius:13px;margin:0 auto 8px;display:grid;place-items:center;
  font-family:var(--font-d);font-weight:700;font-size:19px;color:#fff;position:relative;background:linear-gradient(145deg,#D8D3CC,#F8F6F2);overflow:hidden}
.emp:not(.any) .av::before{content:"";width:29px;height:35px;border-radius:18px 18px 10px 10px;background:linear-gradient(180deg,#17130E 0 24%,#C08A52 24% 43%,#1B1712 43%);box-shadow:0 8px 16px -10px rgba(0,0,0,.6)}
.emp .chk{position:absolute;top:6px;left:6px;width:17px;height:17px;border-radius:50%;display:grid;place-items:center;
  color:#fff;opacity:0;transform:scale(.4);transition:all .25s var(--ease);background:var(--acc,var(--gold))}
.emp.sel .chk{opacity:1;transform:scale(1)}
.emp b{font-size:11.5px;color:var(--ink);display:block;line-height:1.45;white-space:normal;overflow-wrap:anywhere}
.emp .rate{font-size:10px;color:var(--gold-deep);margin-top:3px;display:block}
.emp.any .av{background:#fff;border:1.5px dashed var(--line);color:var(--mute)}
.emp.any b{color:var(--mute)}

/* ===== خطوة 4: الوقت ===== */
.time-grid{display:grid;grid-template-columns:minmax(300px,340px) minmax(0,1fr);gap:18px;align-items:start}
.time-grid>*{min-width:0}
.cal{padding:20px;box-shadow:0 18px 38px -30px rgba(80,60,20,.42)}
.cal-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px}
.cal-head b{font-family:var(--font-d);font-size:16px;color:var(--ink)}
.cal-nav{width:32px;height:32px;border-radius:9px;border:1px solid var(--line);display:grid;place-items:center;color:var(--gold-deep);transition:var(--dur)}
.cal-nav:hover:not(:disabled){background:rgba(198,161,91,.1)}
.cal-nav:disabled{opacity:.35;cursor:default}
.cal-cells{display:grid;grid-template-columns:repeat(7,1fr);gap:8px;text-align:center}
.cal-cells button{display:flex;flex-direction:column;align-items:center;gap:4px;padding:12px 4px;border-radius:14px;
  border:1.5px solid var(--line);font-size:13px;color:var(--ink);position:relative;transition:all .22s var(--ease);background:#fff}
.cal-cells button .dow{font-size:10.5px;color:var(--mute)}
.cal-cells button .dnum{font-family:var(--font-d);font-size:18px}
.cal-cells button:hover:not(:disabled){border-color:var(--gold);background:rgba(198,161,91,.08)}
.cal-cells button:disabled{color:#CFC7B2;cursor:default;background:#FAF7F0}
.cal-cells button.avail::after{content:"";position:absolute;bottom:6px;width:4px;height:4px;border-radius:50%;background:var(--green)}
.cal-cells button.sel{background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);font-weight:700;border-color:transparent;
  box-shadow:0 8px 18px -6px rgba(143,113,52,.55)}
.cal-cells button.sel .dow{color:var(--ink)}
.cal-legend{display:flex;gap:16px;margin-top:14px;padding-top:12px;border-top:1px dashed var(--line);font-size:11px;color:var(--mute)}
.cal-legend span{display:flex;gap:6px;align-items:center}
.cal-legend i{width:7px;height:7px;border-radius:50%}
.times-panel{padding:22px;box-shadow:0 18px 38px -30px rgba(80,60,20,.42)}
.times-panel .date-line{display:flex;align-items:center;gap:10px;font-family:var(--font-d);font-size:18px;color:var(--ink);margin-bottom:16px}
.notice{display:flex;gap:10px;align-items:center;background:rgba(198,161,91,.1);border:1px solid var(--line);
  border-radius:12px;padding:12px 16px;font-size:12.5px;color:var(--gold-deep);margin-bottom:18px}
.periods{display:flex;gap:10px;margin-bottom:18px}
.period{flex:1;display:flex;align-items:center;justify-content:center;gap:8px;padding:11px;border-radius:12px;
  border:1.5px solid var(--line);font-size:13px;color:var(--mute);transition:all var(--dur) var(--ease)}
.period.sel{border-color:var(--gold);color:var(--gold-deep);background:rgba(198,161,91,.1);font-weight:600}
.slots{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;min-height:120px}
.slot{position:relative;padding:12px;border-radius:12px;border:1.5px solid var(--line);font-size:13.5px;color:var(--ink);
  transition:all .22s var(--ease);background:#fff;animation:slotIn .35s var(--ease) both}
@keyframes slotIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
.slot:hover:not(:disabled){transform:scale(1.04);border-color:rgba(143,113,52,.5);box-shadow:0 10px 20px -10px rgba(80,60,20,.35)}
.slot:disabled{color:#C9C1AC;background:#FAF7EF;cursor:default;text-decoration:line-through}
.slot.sel{border-color:var(--gold);background:linear-gradient(160deg,#FFF9EC,#fff);font-weight:700;color:var(--gold-deep);
  box-shadow:0 0 0 3px rgba(198,161,91,.16)}
.slot.sel::after{content:"✓";position:absolute;top:-8px;left:-8px;width:22px;height:22px;border-radius:50%;
  background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);font-size:11px;display:grid;place-items:center}
.slot .tag{position:absolute;top:-9px;right:10px;font-size:9.5px;font-weight:700;padding:3px 9px;border-radius:999px;
  background:#FFEFE0;color:#B0622A}
.session-plan{margin-top:22px;padding:20px;border-radius:16px;background:#FCFAF4;border:1px solid var(--line)}
.session-plan h4{font-family:var(--font-d);font-size:16px;color:var(--ink);margin-bottom:16px;display:flex;gap:8px;align-items:center}
.plan-track{display:flex;flex-direction:row;gap:10px;align-items:stretch;overflow-x:auto;padding:6px 4px 12px;margin-top:12px;scrollbar-width:thin;scrollbar-color:rgba(156,107,31,.38) transparent;scroll-snap-type:x proximity;overscroll-behavior-inline:contain}
.plan-track::-webkit-scrollbar{height:6px}.plan-track::-webkit-scrollbar-thumb{background:rgba(156,107,31,.32);border-radius:999px}
.plan-item{position:relative;flex:0 0 156px;padding:14px 15px;border-radius:12px;border:1px solid var(--line);background:#fff;scroll-snap-align:start}
.plan-item b{font-size:13px;display:block}
.plan-item small{font-size:11px;color:var(--mute);display:block;margin-top:3px}
.plan-item .t{font-size:11.5px;font-weight:700;margin-top:7px;display:block}
.plan-note{display:flex;gap:8px;align-items:center;margin-top:14px;font-size:12px;color:var(--green);
  background:var(--green-bg);border-radius:10px;padding:10px 14px}
.best-slot{display:flex;align-items:center;gap:14px;margin-top:18px;padding:14px 18px;border-radius:14px;
  border:1px dashed var(--gold);background:#FFFDF6;font-size:13px;color:var(--gold-deep)}
.best-slot button{margin-inline-start:auto;padding:9px 20px;border-radius:10px;font-size:12.5px;font-weight:700;
  background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink)}

/* ===== تحسين الهيدر الموحد ===== */
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
  .nav{min-height:76px;padding:10px 12px;gap:8px;overflow:visible!important;justify-content:space-between;direction:rtl}
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


/* ===== خطوة 5: التأكيد ===== */
.ok-banner{display:flex;gap:14px;align-items:center;background:var(--green-bg);border:1px solid rgba(46,139,87,.25);
  border-radius:15px;padding:16px 20px;margin-bottom:20px}
.ok-banner .ic{width:40px;height:40px;border-radius:50%;background:var(--green);color:#fff;display:grid;place-items:center;flex:none}
.ok-banner b{color:#1E6B41;font-size:15px;display:block}
.ok-banner small{color:#4a7d5f;font-size:12.5px}
.detail-card{padding:22px;margin-bottom:18px}
.detail-card h4{font-family:var(--font-d);font-size:17px;color:var(--ink);margin-bottom:18px;display:flex;align-items:center;gap:9px}
.detail-card h4 svg{color:var(--gold-deep)}
.d-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
.d-cell{border-inline-start:1px solid var(--line);padding-inline-start:16px}
.d-cell:first-child{border:none;padding:0}
.d-cell small{font-size:11.5px;color:var(--mute);display:flex;gap:6px;align-items:center;margin-bottom:6px}
.d-cell b{font-size:14.5px;color:var(--ink)}
/* ===== كارت تفاصيل الجلسة =====
   ثلاثة أعمدة: أيقونة القسم | الاسم والخدمات والموظف | الوقت والمدة.
   قبل كده كان كل شيء مكدّسًا في عمود واحد، وفاصل القهوة كان في المنتصف
   بينما الكروت لليمين، فبان غير متناسق. */
.timeline-cards{display:flex;flex-direction:column;gap:10px;position:relative;padding-right:28px;margin-top:14px}
.tl-rail{position:absolute;top:16px;bottom:16px;right:10px;width:2px;border-radius:2px;
  background:linear-gradient(180deg,rgba(201,139,49,.12),rgba(201,139,49,.5),rgba(201,139,49,.12))}

.tl{position:relative;display:grid;grid-template-columns:36px minmax(0,1fr) auto;align-items:center;gap:13px;
  margin:0;padding:13px 16px;border-radius:14px;border:1px solid var(--line);background:#fff;
  box-shadow:0 12px 24px -20px rgba(80,60,20,.45);
  animation:slotIn .4s var(--ease) both;transition:transform .28s var(--ease),box-shadow .28s var(--ease)}
.tl:hover{transform:translateX(-3px);box-shadow:0 16px 30px -20px rgba(80,60,20,.55)}

/* النقطة على الخط الزمني — بلون القسم القادم من الستايل السطري */
.tl::after{content:"";position:absolute;top:50%;right:-23px;width:12px;height:12px;border-radius:50%;
  background:currentColor;transform:translateY(-50%);border:2.5px solid #fff;
  box-shadow:0 0 0 1.5px currentColor}

.tl .ti{width:36px;height:36px;border-radius:11px;display:grid;place-items:center;color:#fff;
  margin:0;font-size:16px;align-self:center}
.tl-main{min-width:0}
.tl-time{display:flex;flex-direction:column;align-items:flex-end;flex:none}
.tl b{font-size:13.5px;display:block;color:var(--ink);line-height:1.5}
.tl .with{font-size:11px;color:var(--mute);margin-top:2px;line-height:1.65;
  overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.tl .tm{font-size:12.5px;font-weight:800;display:block;text-align:end;white-space:nowrap;
  font-variant-numeric:tabular-nums}
.tl .dr{font-size:10.5px;color:var(--mute);display:block;text-align:end;margin-top:3px;white-space:nowrap}

/* فاصل القهوة: صف بنفس محاذاة الكروت وله نقطته على الخط */
.coffee-break{position:relative;display:flex;flex-direction:row;align-items:center;justify-content:flex-start;
  gap:10px;padding:8px 14px;border-radius:12px;border:1px dashed rgba(206,146,52,.45);background:#FFFDF7;
  color:var(--gold-deep);font-size:11.5px;font-weight:700;text-align:start;
  animation:slotIn .4s var(--ease) both}
.coffee-break::after{content:"";position:absolute;top:50%;right:-22px;width:10px;height:10px;border-radius:50%;
  background:var(--gold);transform:translateY(-50%);border:2.5px solid #fff}
.coffee-break .cup{width:30px;height:30px;flex:none;border-radius:50%;display:grid;place-items:center;
  background:#FFF8EA;border:1px solid rgba(206,146,52,.28);font-size:14px}

@media(max-width:700px){
  .tl{grid-template-columns:32px minmax(0,1fr);gap:10px;padding:11px 13px}
  .tl-time{grid-column:2;flex-direction:row;align-items:baseline;gap:8px;margin-top:6px}
  .tl .tm,.tl .dr{text-align:start;margin:0}
}
.coord-note{display:flex;gap:8px;align-items:center;font-size:12.5px;color:var(--green);background:var(--green-bg);
  border-radius:10px;padding:11px 15px;margin-top:22px}
.upsell{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.up{border:1px solid var(--line);border-radius:14px;padding:14px;display:flex;gap:12px;align-items:center;background:#fff;
  transition:all var(--dur) var(--ease)}
.up:hover{transform:translateY(-3px);box-shadow:0 14px 26px -16px rgba(80,60,20,.35)}
.up img{width:58px;height:58px;object-fit:cover;border-radius:11px;background:#F1EBDD}
.up .inf{flex:1;min-width:0}
.up b{font-size:13px;color:var(--ink);display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.up small{font-size:11px;color:var(--mute)}
.up .p{font-family:var(--font-d);font-size:14px;color:var(--gold-deep);display:block;margin-top:3px}
.up button{flex:none;padding:8px 15px;border-radius:9px;border:1px solid var(--gold);color:var(--gold-deep);
  font-size:12px;font-weight:600;transition:var(--dur)}
.up button:hover,.up.added button{background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);border-color:transparent}

/* Keep the confirmation products inside the main desktop column. */
@media(min-width:701px){
  .products-detail-card{min-width:0;max-width:100%;overflow:hidden}
  .products-detail-card h4{flex-wrap:wrap}
  .products-detail-card .upsell{
    width:100%;min-width:0;max-width:100%;
    grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
  }
  .products-detail-card .up{min-width:0;max-width:100%;padding:12px;gap:9px;overflow:hidden}
  .products-detail-card .up img{width:52px;height:52px;flex:0 0 52px}
  .products-detail-card .up button{padding:8px 10px}
}
.cust-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.cust-grid .fld small{font-size:11.5px;color:var(--mute);display:flex;gap:6px;align-items:center;margin-bottom:7px}
.cust-grid input,.notes-box textarea{
  width:100%;border:1.5px solid var(--line);border-radius:12px;padding:12px 14px;font-size:13.5px;background:#FDFBF5;
  color:var(--ink);transition:border-color var(--dur),box-shadow var(--dur);outline:none;
}
.cust-grid input:focus,.notes-box textarea:focus{border-color:var(--gold);box-shadow:0 0 0 3px rgba(198,161,91,.14)}
.notes-box textarea{resize:vertical;min-height:74px}
.terms{display:flex;gap:9px;align-items:center;font-size:12.5px;color:var(--mute);background:rgba(198,161,91,.08);
  border-radius:11px;padding:12px 16px;margin-top:16px}
.terms a{color:var(--gold-deep);font-weight:600;text-decoration:underline}

/* ===== خطوة 6: الدفع ===== */
.pay-methods{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.pm{position:relative;display:flex;align-items:center;gap:14px;padding:17px 18px;border-radius:15px;
  border:1.5px solid var(--line);background:#fff;cursor:pointer;transition:all var(--dur) var(--ease)}
.pm:hover{border-color:rgba(143,113,52,.5)}
.pm.sel{border-color:var(--gold);background:linear-gradient(160deg,#FFFBF0,#fff);box-shadow:0 0 0 3px rgba(198,161,91,.15)}
.pm .pmi{width:52px;height:36px;border-radius:9px;display:grid;place-items:center;background:#F5F0E4;font-weight:800;
  font-size:11px;color:var(--ink);letter-spacing:.02em;flex:none}
.pm b{font-size:14px;color:var(--ink);display:block}
.pm small{font-size:11.5px;color:var(--mute)}
.pm .rad{margin-inline-start:auto;width:22px;height:22px;border-radius:50%;border:1.5px solid var(--line);
  display:grid;place-items:center;transition:all .25s var(--ease);flex:none}
.pm .rad i{width:10px;height:10px;border-radius:50%;background:linear-gradient(135deg,var(--gold-bright),var(--gold));
  transform:scale(0);transition:transform .25s var(--ease)}
.pm.sel .rad{border-color:var(--gold)}
.pm.sel .rad i{transform:scale(1)}
.card-form{overflow:hidden;max-height:0;opacity:0;transition:max-height .45s var(--ease),opacity .35s,margin .35s}
.card-form.open{max-height:220px;opacity:1;margin-top:14px}
.card-form .cf{display:grid;grid-template-columns:2fr 1fr 1fr;gap:12px;padding:18px;border-radius:14px;background:#FCFAF4;border:1px solid var(--line)}
.card-form input{width:100%;border:1.5px solid var(--line);border-radius:11px;padding:12px;font-size:13px;background:#fff;outline:none;color:var(--ink)}
.card-form input:focus{border-color:var(--gold)}
.secure-line{display:flex;gap:8px;align-items:center;justify-content:center;margin-top:16px;font-size:12px;color:var(--mute)}
.rewards{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:6px}
.rw{padding:17px;border-radius:15px;border:1.5px solid var(--line);background:#fff}
.rw .rt{display:flex;align-items:center;gap:11px;margin-bottom:11px}
.rw .rt .ri{width:38px;height:38px;border-radius:11px;display:grid;place-items:center;
  background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink)}
.rw b{font-size:13.5px;color:var(--ink);display:block}
.rw small{font-size:11.5px;color:var(--mute)}
.switch{margin-inline-start:auto;width:46px;height:26px;border-radius:13px;background:#E3DCC9;position:relative;
  cursor:pointer;transition:background .3s var(--ease);flex:none}
.switch::after{content:"";position:absolute;top:3px;right:3px;width:20px;height:20px;border-radius:50%;background:#fff;
  box-shadow:0 2px 6px rgba(0,0,0,.2);transition:transform .3s var(--ease)}
.switch.on{background:linear-gradient(135deg,var(--gold-bright),var(--gold))}
.switch.on::after{transform:translateX(-20px)}
.rw input{width:100%;border:1.5px solid var(--line);border-radius:11px;padding:11px 13px;font-size:13px;background:#FDFBF5;outline:none;color:var(--ink)}
.rw input:focus{border-color:var(--gold)}
.rw .hint{font-size:11px;color:var(--gold-deep);margin-top:8px;display:block}
.coupon{display:flex;gap:10px;margin-top:12px;padding:16px;border-radius:15px;border:1.5px solid var(--line);background:#fff;align-items:center}
.coupon .ci{width:38px;height:38px;border-radius:50%;border:1px solid var(--line);display:grid;place-items:center;color:var(--gold-deep);flex:none}
.coupon input{flex:1;border:1.5px solid var(--line);border-radius:11px;padding:11px 14px;font-size:13px;background:#FDFBF5;outline:none;color:var(--ink)}
.coupon input:focus{border-color:var(--gold)}
.coupon button{padding:11px 24px;border-radius:11px;background:var(--ink);color:var(--gold-bright);font-size:13px;font-weight:600;transition:var(--dur)}
.coupon button:hover{background:#241E12}
.coupon-msg{font-size:12px;margin-top:10px;display:none;align-items:center;gap:7px}
.coupon-msg.ok{display:flex;color:var(--green)}
.coupon-msg.bad{display:flex;color:#B3452F}
.trust-row{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:22px}
.trust{text-align:center;padding:18px 12px;border-radius:14px;background:#fff;border:1px solid var(--line)}
.trust .ti{width:40px;height:40px;border-radius:12px;margin:0 auto 10px;display:grid;place-items:center;
  background:rgba(198,161,91,.12);color:var(--gold-deep)}
.trust b{font-size:12.5px;color:var(--ink);display:block}
.trust small{font-size:10.5px;color:var(--mute)}

/* ===== ملخص الحجز (الشريط الجانبي) ===== */
.summary{position:sticky;top:86px;opacity:0;transform:translateY(-14px);transition:opacity .38s var(--ease),transform .38s var(--ease)}
.summary.show{opacity:1;transform:translateY(0)}
.summary .card{padding:20px;overflow:hidden}
.summary h3{font-family:var(--font-d);font-size:18px;color:var(--ink);margin-bottom:16px;display:flex;align-items:center;gap:8px}
.summary .br-img{border-radius:13px;overflow:hidden;margin-bottom:14px;aspect-ratio:16/8;background:#EFE8D8}
.summary .br-img img{width:100%;height:100%;object-fit:cover}
.sum-row{display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid rgba(143,113,52,.12);font-size:13px}
.sum-row:last-of-type{border:none}
.sum-row .k{color:var(--mute);display:flex;gap:7px;align-items:center}
.sum-row .v{color:var(--ink);font-weight:600;text-align:left}
.sum-svcs{margin:6px 0}
.sum-svc{display:flex;align-items:center;gap:9px;padding:8px 0;font-size:12.5px;animation:slotIn .3s var(--ease) both}
.sum-svc i{width:8px;height:8px;border-radius:3px;flex:none}
.sum-svc .nm{flex:1;color:var(--ink)}
.sum-svc .pr{color:var(--gold-deep);font-weight:600;white-space:nowrap}
.sum-svc .rm{width:22px;height:22px;border-radius:7px;display:grid;place-items:center;color:#B3452F;opacity:.55;transition:var(--dur)}
.sum-svc .rm:hover{opacity:1;background:rgba(179,69,47,.1)}
.sum-price{margin-top:12px;padding-top:14px;border-top:1px dashed var(--line)}
.sp-row{display:flex;justify-content:space-between;font-size:12.5px;color:var(--mute);padding:4px 0}
.sp-row.disc{color:var(--green)}
.sp-total{display:flex;justify-content:space-between;align-items:baseline;margin-top:10px;padding-top:12px;border-top:1px solid var(--line)}
.sp-total .k{font-size:14px;color:var(--ink);font-weight:700}
.sp-total .v{font-family:var(--font-d);font-size:28px;color:var(--gold-deep);transition:transform .25s var(--ease)}
.sp-total .v.pulse{transform:scale(1.08)}
.sp-total .v small{font-size:13px}
.sum-note{margin-top:14px;display:flex;gap:9px;align-items:center;background:rgba(198,161,91,.1);border-radius:11px;
  padding:11px 13px;font-size:11.5px;color:var(--gold-deep)}
.sum-empty{text-align:center;color:var(--mute);font-size:12.5px;padding:26px 10px;border:1.5px dashed var(--line);border-radius:13px}

/* ملخص صغير وثابت من خطوة الموظف وحتى الدفع */
.booking-summary-compact{top:98px;align-self:start;min-width:0;margin-bottom:90px;z-index:2}
.stage>.panel{grid-column:1}
.stage>.booking-summary-compact{grid-column:2}
.booking-summary-compact .card{padding:15px;max-height:calc(100dvh - 188px);overflow:hidden;display:flex;flex-direction:column;scrollbar-gutter:stable}
.booking-summary-compact h3{font-size:15px;margin-bottom:10px}
.booking-summary-compact .br-img{aspect-ratio:auto;height:78px;margin-bottom:8px;border-radius:10px}
.booking-summary-compact .sum-row{padding:7px 0;font-size:11px}
.booking-summary-compact .sum-svcs{margin:3px 0;min-height:48px;max-height:148px;overflow-y:auto;overscroll-behavior:contain;scrollbar-gutter:stable;padding-inline-end:4px;scrollbar-width:thin;scrollbar-color:rgba(156,107,31,.38) transparent}
.booking-summary-compact .sum-svcs::-webkit-scrollbar{width:5px}.booking-summary-compact .sum-svcs::-webkit-scrollbar-thumb{background:rgba(156,107,31,.32);border-radius:999px}
.booking-summary-compact .sum-svc{gap:6px;padding:5px 0;font-size:10.5px}
.booking-summary-compact .sum-svc .rm{width:19px;height:19px}
.booking-summary-compact .sum-price{margin-top:7px;padding-top:8px}
.booking-summary-compact .sp-row{font-size:10.5px;padding:2px 0}
.booking-summary-compact .sp-total{margin-top:7px;padding-top:8px}
.booking-summary-compact .sp-total .k{font-size:11.5px}
.booking-summary-compact .sp-total .v{font-size:21px}
.booking-summary-compact .sp-total .v small{font-size:10px}
.booking-summary-compact .sum-note{margin-top:9px;padding:8px 9px;font-size:9.5px;line-height:1.55}
.booking-summary-time .br-img{display:none}
.booking-summary-time .card{max-height:calc(100dvh - 188px)}
.booking-summary-time .sum-svcs{max-height:132px}

/* مع الملخص الجانبي نحافظ على مساحة مريحة للتقويم والأوقات في الشاشات المتوسطة */
@media(min-width:901px) and (max-width:1180px){
  .stage:has(.booking-summary-time.show){grid-template-columns:minmax(0,1fr) 290px!important}
  .stage:has(.booking-summary-time.show) .time-grid{grid-template-columns:1fr}
}

/* ===== الشريط السفلي ===== */
.footbar{
  position:fixed;bottom:0;inset-inline:0;z-index:390;background:rgba(255,253,247,.92);
  backdrop-filter:blur(14px);border-top:1px solid var(--line);
  box-shadow:0 -14px 40px -20px rgba(80,60,20,.35);
}
.footbar .in{display:flex;align-items:center;gap:20px;padding:14px 0}
.btn{display:inline-flex;align-items:center;gap:10px;justify-content:center;padding:14px 32px;border-radius:14px;
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
.btn-back{border:1.5px solid var(--line);color:var(--mute);background:#fff;padding:14px 26px}
.btn-back:hover{border-color:var(--gold);color:var(--gold-deep)}
.fb-mid{flex:1;display:flex;justify-content:center;gap:34px;font-size:12.5px;color:var(--mute);flex-wrap:wrap}
.fb-mid b{color:var(--ink)}
.fb-mid .tot b{font-family:var(--font-d);font-size:19px;color:var(--gold-deep)}
.btn-pay{background:var(--ink);color:var(--gold-bright);padding:15px 36px}
.btn-pay:hover:not(:disabled){background:#221C10;transform:translateY(-2px)}

/* ===== النجاح ===== */
.success-wrap{max-width:900px;margin-inline:auto;padding:40px 0 30px;text-align:center}
.suc-ic{width:96px;height:96px;margin:0 auto 22px;border-radius:50%;border:2px solid var(--gold);position:relative;
  display:grid;place-items:center;color:var(--gold-deep);
  animation:sucPop .6s var(--ease) both .15s}
@keyframes sucPop{from{transform:scale(.4);opacity:0}60%{transform:scale(1.08)}to{transform:scale(1);opacity:1}}
.suc-ic svg{stroke-dasharray:60;stroke-dashoffset:60;animation:dash .7s var(--ease) forwards .5s}
@keyframes dash{to{stroke-dashoffset:0}}
.suc-ic .spark{position:absolute;color:var(--gold);animation:sparkle 2.6s ease-in-out infinite}
.suc-ic .s1{top:-8px;left:-16px}.suc-ic .s2{bottom:-4px;right:-18px;animation-delay:-1.2s}
@keyframes sparkle{0%,100%{opacity:.3;transform:scale(.8) rotate(0)}50%{opacity:1;transform:scale(1.1) rotate(20deg)}}
.success-wrap h1{font-family:var(--font-d);font-size:clamp(28px,3.6vw,42px);color:var(--ink)}
.success-wrap .sub{color:var(--mute);margin-top:10px;font-size:15px}
.sent-chip{display:inline-flex;gap:9px;align-items:center;margin-top:18px;background:#fff;border:1px solid var(--line);
  border-radius:999px;padding:10px 20px;font-size:12.5px;color:var(--mute)}
.sent-chip svg{color:var(--green)}
.suc-grid{display:grid;grid-template-columns:1fr 300px;gap:18px;margin-top:30px;text-align:right}
.suc-details{padding:24px}
.suc-details h4{font-family:var(--font-d);font-size:17px;margin-bottom:8px;color:var(--ink)}
.sd-row{display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-bottom:1px solid rgba(143,113,52,.12);font-size:13.5px}
.sd-row:last-child{border:none}
.sd-row .k{color:var(--mute);display:flex;gap:8px;align-items:center}
.sd-row .k svg{color:var(--gold-deep)}
.sd-row .v{font-weight:600;color:var(--ink)}
.qr-card{padding:22px;text-align:center}
.qr-card .code{font-family:var(--font-d);color:var(--gold-deep);font-size:17px;letter-spacing:.03em;margin:4px 0 14px;direction:ltr}
.qr-box{width:170px;height:170px;margin:0 auto;border:1.5px solid var(--gold);border-radius:16px;padding:10px;position:relative;background:#fff}
.qr-box canvas{width:100%;height:100%;image-rendering:pixelated}
.qr-card small{display:block;margin-top:12px;font-size:11.5px;color:var(--mute)}
.wallets{display:flex;gap:8px;justify-content:center;margin-top:14px}
.wallets button{flex:1;display:flex;gap:7px;align-items:center;justify-content:center;padding:10px;border-radius:11px;
  background:var(--ink);color:#fff;font-size:11.5px;transition:var(--dur)}
.wallets button:hover{background:#241E12}
.next-steps{padding:24px;margin-top:18px;text-align:right}
.next-steps h4{font-family:var(--font-d);font-size:17px;color:var(--ink);margin-bottom:24px;text-align:center}
.ns-track{display:grid;grid-template-columns:repeat(4,1fr);position:relative}
.ns-track::before{content:"";position:absolute;top:24px;right:12%;left:12%;height:2px;
  background:repeating-linear-gradient(90deg,var(--line) 0 6px,transparent 6px 12px)}
.ns{position:relative;text-align:center;padding:0 8px}
.ns .ni{width:48px;height:48px;border-radius:50%;margin:0 auto 12px;display:grid;place-items:center;background:#fff;
  border:1.5px solid var(--line);color:var(--mute);position:relative;z-index:1}
.ns.done .ni{background:linear-gradient(135deg,var(--gold-bright),var(--gold));border-color:transparent;color:var(--ink)}
.ns b{font-size:12.5px;color:var(--ink);display:block}
.ns.done b{color:var(--gold-deep)}
.ns small{font-size:10.5px;color:var(--mute);display:block;margin-top:5px;line-height:1.6}
.suc-actions{display:flex;gap:12px;justify-content:center;margin-top:26px;flex-wrap:wrap}
.btn-line{border:1.5px solid var(--gold);color:var(--gold-deep);background:#fff}
.btn-line:hover{background:rgba(198,161,91,.08);transform:translateY(-2px)}
.suc-perks{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:30px}

/* ===== حركات عامة ===== */
.view{display:none}
.view.on{display:block;animation:viewIn .45s var(--ease) both}
@keyframes viewIn{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
.pay-loading{position:fixed;inset:0;z-index:999;display:none;place-items:center;background:rgba(10,9,6,.7);backdrop-filter:blur(6px)}
.pay-loading.on{display:grid}
.pl-box{background:#fff;border-radius:22px;padding:44px 60px;text-align:center;animation:viewIn .35s var(--ease)}
.pl-ring{width:64px;height:64px;margin:0 auto 20px;border-radius:50%;border:3px solid rgba(198,161,91,.2);
  border-top-color:var(--gold);animation:spin 1s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
.pl-box b{font-family:var(--font-d);font-size:18px;color:var(--ink)}
.pl-box small{display:block;color:var(--mute);margin-top:8px;font-size:12.5px}
.toast{position:fixed;bottom:96px;right:50%;transform:translate(50%,20px);z-index:998;opacity:0;pointer-events:none;
  background:var(--ink);color:var(--champagne);padding:13px 24px;border-radius:13px;font-size:13px;
  border:1px solid var(--line-dark);transition:all .35s var(--ease);display:flex;gap:9px;align-items:center}
.toast.on{opacity:1;transform:translate(50%,0)}
.toast svg{color:var(--gold-bright)}

@media(max-width:1080px){
  .stage{grid-template-columns:1fr}
  .stage>.panel,.stage>.booking-summary-compact{grid-column:1}
  .summary{position:static;order:-1}
  .branches-grid{grid-template-columns:1fr 1fr}
  .cat-row{grid-template-columns:repeat(5,1fr)}
  .subs{grid-template-columns:repeat(3,1fr)}
  .time-grid{grid-template-columns:1fr}
  .d-grid{grid-template-columns:repeat(2,1fr)} .timeline-cards{display:flex;flex-direction:column;}
  .tl-rail{display:none}.tl::after{display:none}
  .suc-grid{grid-template-columns:1fr}
}
@media(min-width:901px) and (max-width:1080px){
  .stage:has(.booking-summary-compact.show){grid-template-columns:minmax(0,1fr) 290px!important}
  .stage>.panel{grid-column:1}
  .stage>.booking-summary-compact{grid-column:2;position:sticky;order:initial}
}
@media(max-width:700px){
  nav.links{display:none}
  .step label{display:none}
  .step .bubble{width:42px;height:42px}
  .step .bar{top:21px;right:calc(50% + 28px);width:calc(100% - 56px)}
  .branches-grid,.subs,.mode-grid,.pay-methods,.rewards,.upsell{grid-template-columns:1fr}
  .cat-row{grid-template-columns:repeat(5,1fr);gap:4px;width:100%;max-width:none;margin-bottom:16px}
  .cat{height:74px;border-radius:10px;border-width:1.5px}
  .cat .lbl{font-size:9px;inset-inline:4px;bottom:6px}
  .cat .chk{width:15px;height:15px;top:5px;left:5px}
  .slots{grid-template-columns:repeat(2,1fr)}
  .emp-row{grid-template-columns:1fr}
  .branch-strip{flex-wrap:wrap;gap:7px}
  .branch-strip .cells{display:none}
  .fb-mid{display:none}
  .trust-row,.suc-perks,.cust-grid{grid-template-columns:1fr 1fr}
  .ns-track{grid-template-columns:1fr 1fr;gap:20px}
  .ns-track::before{display:none}
  .d-grid{grid-template-columns:1fr 1fr}
  .d-cell{border:none;padding:0}
}
@media(prefers-reduced-motion:reduce){
  *,*::before,*::after{animation-duration:.01ms!important;transition-duration:.01ms!important}
}
`,vn={class:"wrap stepper",id:"stepperWrap"},fn={class:"steps",id:"steps"},kn=["data-i"],wn={class:"n"},yn=["onClick"],_n=["innerHTML"],$n={__name:"BookingStepper",setup(P){const{state:e}=j();function p(M){M<e.step&&(e.step=M)}return(M,B)=>Y((a(),r("div",vn,[n("div",fn,[(a(!0),r(y,null,L(t(mn),(z,d)=>(a(),r("div",{key:d,class:$(["step",{active:d===t(e).step,done:d<t(e).step}]),"data-i":d},[B[0]||(B[0]=n("div",{class:"bar"},[n("i")],-1)),n("span",wn,o(d+1),1),n("span",{class:"bubble",onClick:u=>p(d)},[(a(),r("svg",{width:"21",height:"21",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7",innerHTML:z.ic},null,8,_n))],8,yn),n("label",null,o(z.t),1)],10,kn))),128))])],512)),[[K,!t(e).done]])}},zn={key:0,class:"branch-strip"},Cn=["src","alt"],Mn={class:"bi"},Bn={class:"cells"},Fn={class:"cell"},Ln={class:"cat-row"},En=["data-cat","onClick"],Tn=["src","alt"],Dn={class:"lbl"},Sn={class:"cat-name"},An={class:"cat-icon"},Hn=["innerHTML"],jn={key:1,class:"empty-hint"},Pn={key:2,class:"sub-block"},Yn={class:"sub-title"},Vn={class:"sub-title__main"},In={class:"tick"},Nn=["innerHTML"],On={class:"subs"},Un=["data-svc","onClick"],Rn={class:"top"},qn={class:"si"},Wn=["innerHTML"],Xn={class:"foot"},Gn={class:"dur"},Kn={class:"prc"},Jn={__name:"ServicesStep",setup(P){const{state:e,hasSvc:p,toggleSvc:M}=j(),B=["hair","mass","skin","bath","pedi"],z=k(()=>B.map(s=>J(s)).filter(Boolean)),d=s=>Q.some(v=>v.cat===s&&p(v.id)),u=k(()=>q.find(s=>s.id===e.branch)),c=k(()=>J(e.activeCat)),b=k(()=>Q.filter(s=>s.cat===e.activeCat&&!s.hidden)),i=k(()=>b.value.filter(s=>p(s.id)).length);return(s,v)=>(a(),r(y,null,[v[5]||(v[5]=n("div",{class:"panel-head"},[n("h1",null,"اختر الخدمة التي تناسبك"),n("p",null,"يمكنك اختيار خدمة واحدة أو أكثر من أي قسم")],-1)),u.value?(a(),r("div",zn,[n("img",{src:u.value.img,alt:u.value.name},null,8,Cn),n("span",Mn,[v[0]||(v[0]=h("مكان التنفيذ: ",-1)),n("b",null,o(u.value.name),1),n("small",null,o(u.value.addr),1)]),n("span",Bn,[n("span",Fn,o(u.value.hours),1)])])):E("",!0),n("div",Ln,[(a(!0),r(y,null,L(z.value,f=>(a(),r("div",{key:f.id,class:$(["cat",{sel:t(e).activeCat===f.id,"has-picks":d(f.id)}]),"data-cat":f.id,onClick:g=>t(e).activeCat=f.id},[n("img",{src:f.img,alt:f.name},null,8,Tn),v[1]||(v[1]=n("span",{class:"chk"},[n("svg",{width:"9",height:"9",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3"},[n("path",{d:"M20 6L9 17l-5-5"})])],-1)),n("span",Dn,[n("span",Sn,o(f.name),1),n("span",An,[(a(),r("svg",{viewBox:"0 0 24 24","aria-hidden":"true",innerHTML:t(G)(f.id)},null,8,Hn))])])],10,En))),128))]),t(e).activeCat?(a(),r("div",Pn,[n("div",Yn,[n("span",Vn,[h(" خدمات "+o(c.value.name)+" ",1),n("span",In,[(a(),r("svg",{viewBox:"0 0 24 24","aria-hidden":"true",innerHTML:t(G)(c.value.id)},null,8,Nn))])]),n("small",null,o(i.value?i.value+" مختارة":"اختر خدمة أو أكثر"),1)]),n("div",On,[(a(!0),r(y,null,L(b.value,f=>(a(),r("div",{key:f.id,class:$(["sub",{sel:t(p)(f.id)}]),"data-svc":f.id,onClick:g=>t(M)(f.id)},[n("div",Rn,[n("span",qn,[(a(),r("svg",{viewBox:"0 0 24 24","aria-hidden":"true",innerHTML:t(G)(c.value.id)},null,8,Wn))]),n("b",null,o(f.name),1),v[3]||(v[3]=n("span",{class:"chk"},[n("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3"},[n("path",{d:"M20 6L9 17l-5-5"})])],-1))]),n("small",null,o(f.desc),1),n("div",Xn,[n("span",Gn,"🕐 "+o(f.dur)+" دقيقة",1),n("span",Kn,[h(o(t(T)(f.price))+" ",1),v[4]||(v[4]=n("small",null,"ر.س",-1))])])],10,Un))),128))])])):(a(),r("div",jn,[...v[2]||(v[2]=[n("b",null,"اختر خدمة لعرض تفاصيلها",-1),h("اختر إحدى الخدمات الأساسية أعلاه لعرض الخدمات الفرعية المتاحة",-1)])]))],64))}},Qn={class:"mode-grid"},Zn={key:0,class:"emp-section"},nt={class:"cat-ico"},tt=["data-cat","onClick"],et=["data-cat","data-emp","onClick"],ot={class:"rate"},at={key:1,class:"j-note card",style:{display:"flex",gap:"16px","align-items":"center",padding:"20px 24px","border-color":"var(--line)"}},rt="flex:none;width:44px;height:44px;border-radius:13px;display:grid;place-items:center;background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink)",it="font-size:13.5px;color:#5c5442;line-height:1.9",st={__name:"EmployeeStep",setup(P){const{state:e,selCats:p,hasSvc:M}=j(),B=u=>Q.filter(c=>c.cat===u&&M(c.id)).length,z=["توفير الوقت","أفضل تقييم متاح","تنفيذ الخدمات بالتوازي وتقليل الانتظار","منع أي تعارض في المواعيد"],d=["اختر الموظف الذي تفضّله","اطّلع على التقييمات والخبرات","تخصيص كل خدمة لموظف مختلف"];return(u,c)=>(a(),r(y,null,[c[13]||(c[13]=n("div",{class:"panel-head"},[n("h1",null,"اختر طريقة اختيار الموظف"),n("p",null,"يمكنك اختيار الموظف بنفسك أو ترك الأمر لنا لاختيار الأفضل لك")],-1)),n("div",Qn,[n("div",{class:$(["mode dark",{sel:t(e).mode==="auto"}]),"data-mode":"auto",onClick:c[0]||(c[0]=b=>t(e).mode="auto")},[c[3]||(c[3]=I('<span class="chk"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"></path></svg></span><span class="mi"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="8" r="4"></circle><path d="M5 21c0-4 3-6 7-6s7 2 7 6"></path><path d="M19 3l.9 1.9L22 6l-2.1 1.1L19 9l-.9-1.9L16 6l2.1-1.1z"></path></svg></span><h3>اختيار تلقائي</h3><div class="sub-t">سنختار لك أفضل فريق متاح</div><span class="flag">✨ الأسرع والأسهل</span>',5)),n("ul",null,[(a(),r(y,null,L(z,(b,i)=>n("li",{key:i},[c[2]||(c[2]=n("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.6"},[n("path",{d:"M20 6L9 17l-5-5"})],-1)),h(" "+o(b),1)])),64))]),c[4]||(c[4]=n("div",{class:"glow-msg"},"سيتم اختيار الفريق الأنسب تلقائيًا بعد تحديد وقت بداية الجلسة",-1))],2),n("div",{class:$(["mode",{sel:t(e).mode==="manual"}]),"data-mode":"manual",onClick:c[1]||(c[1]=b=>t(e).mode="manual")},[c[6]||(c[6]=I('<span class="chk"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" stroke-width="3"><path d="M20 6L9 17l-5-5"></path></svg></span><span class="mi"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span><h3>اختيار موظف محدد</h3><div class="sub-t">اختر الموظف المناسب لكل خدمة</div><span class="flag">🎯 تحكم كامل</span>',5)),n("ul",null,[(a(),r(y,null,L(d,(b,i)=>n("li",{key:i},[c[5]||(c[5]=n("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.6"},[n("path",{d:"M20 6L9 17l-5-5"})],-1)),h(" "+o(b),1)])),64))]),c[7]||(c[7]=n("div",{class:"glow-msg"},"اختر موظفًا لكل قسم من الأقسام أدناه",-1))],2)]),t(e).mode==="manual"?(a(),r("div",Zn,[(a(!0),r(y,null,L(t(p),b=>(a(),r("div",{key:b.id,class:"emp-row"},[n("div",{class:"emp-cat",style:S(`background:linear-gradient(150deg,${b.hex},${b.hex}CC)`)},[n("span",nt,o(b.emoji),1),n("b",null,o(b.name),1),n("small",null,o(B(b.id))+" خدمة",1)],4),n("div",{class:"emp-list",style:S(`--acc:${b.hex}`)},[n("div",{class:$(["emp any",{sel:t(e).emp[b.id]==="any"}]),"data-cat":b.id,"data-emp":"any",onClick:i=>t(e).emp[b.id]="any"},[...c[8]||(c[8]=[I('<span class="chk"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3"><path d="M20 6L9 17l-5-5"></path></svg></span><span class="av"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span><b>أي موظف</b><span class="rate">الأنسب تلقائيًا</span>',4)])],10,tt),(a(!0),r(y,null,L(t(un)[b.id],i=>(a(),r("div",{key:i.n,class:$(["emp",{sel:t(e).emp[b.id]===i.n}]),"data-cat":b.id,"data-emp":i.n,onClick:s=>t(e).emp[b.id]=i.n},[c[9]||(c[9]=n("span",{class:"chk"},[n("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"#fff","stroke-width":"3"},[n("path",{d:"M20 6L9 17l-5-5"})])],-1)),c[10]||(c[10]=n("span",{class:"av","aria-hidden":"true"},null,-1)),n("b",null,o(i.n),1),n("span",ot,"★ "+o(i.r),1)],10,et))),128))],4)]))),128))])):E("",!0),t(e).mode==="auto"?(a(),r("div",at,[n("span",{style:rt},[...c[11]||(c[11]=[n("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[n("path",{d:"M13 2L3 14h9l-1 8 10-12h-9z"})],-1)])]),n("p",{style:it},[...c[12]||(c[12]=[n("b",{style:{color:"var(--ink)"}},"كيف يعمل الاختيار التلقائي؟",-1),h(" في الخطوة التالية ستظهر لك ",-1),n("b",{style:{color:"var(--ink)"}},"أوقات يمكن تنفيذ جلستك فيها بالكامل",-1),h(" — يحسب النظام مدة الخدمات وتوفر الموظفين وتنسيق الأقسام، وبعد اختيار وقت البداية يبني الجلسة كاملة: توزيع الخدمات، اختيار الفريق الأنسب، وترتيب أوقات التنفيذ.",-1),n("br",null,null,-1),n("b",{style:{color:"var(--gold-deep)"}},"✨ عند اختيار الموظف تلقائيًا سيتم إضافة نقاط ولاء لك.",-1)])])])):E("",!0)],64))}},lt={class:"card branch-strip"},dt={class:"bi"},pt={class:"cells"},ct={class:"cell"},gt={class:"cell"},xt={class:"cell"},mt={key:0,class:"notice"},ut={width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",style:{flex:"none"}},ht={class:"time-grid"},bt={class:"card cal"},vt={class:"cal-head"},ft=["disabled"],kt={class:"cal-cells"},wt=["data-i","disabled","onClick"],yt={class:"dow"},_t={class:"dnum"},$t={class:"card times-panel"},zt={class:"date-line"},Ct={class:"periods"},Mt=["data-p","onClick"],Bt={class:"slots"},Ft=["data-t","disabled","onClick"],Lt={key:0,class:"tag"},Et={key:1,class:"empty-hint",style:{"grid-column":"1/-1"}},Tt={key:0,class:"best-slot"},Dt={key:1,class:"session-plan"},St={class:"plan-track"},At={key:0,class:"coffee-break"},Ht={class:"plan-note"},jt={key:1,class:"empty-hint",style:{"margin-top":"10px"}},Pt={__name:"TimeStep",setup(P){const{state:e,selCats:p,selSvcs:M,totalDur:B,slotsForDay:z,buildSession:d}=j(),u=new Date(2026,6,6),c=k(()=>q.find(w=>w.id===e.branch)),b=k(()=>{const w=e.mode==="manual"?p.value.map(l=>e.emp[l.id]&&e.emp[l.id]!=="any"?e.emp[l.id]:nn(l.id).n):p.value.map(l=>nn(l.id).n);return[...new Set(w)].length}),i=k(()=>Array.from({length:7},(w,l)=>{const m=new Date(e.calStart);return m.setDate(m.getDate()+l),m})),s=k(()=>e.calStart.getTime()<=u.getTime()),v=k(()=>{const w=i.value;return w[0].getMonth()===w[6].getMonth()?`${w[0].getDate()} – ${w[6].getDate()} ${V[w[0].getMonth()]}`:`${w[0].getDate()} ${V[w[0].getMonth()]} – ${w[6].getDate()} ${V[w[6].getMonth()]}`}),f=w=>w<u,g=w=>e.date&&w.getTime()===e.date.getTime();function C(w){const l=new Date(e.calStart);l.setDate(l.getDate()+w),e.calStart=l}function x(w){f(w)||(e.date=w,e.time=null)}const F=k(()=>e.date?z(e.date).filter(w=>{const l=w.t/60;return e.period==="all"||e.period==="am"&&l<12||e.period==="pm"&&l>=12&&l<17||e.period==="eve"&&l>=17}):[]),A=w=>w===2?"الأكثر طلبًا":w===F.value.length-1?"آخر موعد":"",_=k(()=>e.time!=null?d(e.time):null),X=k(()=>e.date?`${R[e.date.getDay()]} ${e.date.getDate()} ${V[e.date.getMonth()]} ${e.date.getFullYear()}`:"اختر تاريخًا من التقويم"),sn=[["all","كل اليوم","🗓️"],["am","صباحًا","☀️"],["pm","مساءً","🌇"]];return(w,l)=>(a(),r(y,null,[l[18]||(l[18]=n("div",{class:"panel-head"},[n("h1",null,"اختر الوقت المناسب لك"),n("p",null,"سيتم عرض الأوقات المتاحة بناءً على توفر الموظفين ومدة الخدمات — كل وقت معروض يمكن تنفيذ جلستك فيه بالكامل")],-1)),n("div",lt,[n("div",dt,[n("b",null,"📍 "+o(c.value?c.value.name:""),1),l[3]||(l[3]=n("small",null,"ملخص جلستك قبل اختيار الوقت",-1))]),n("div",pt,[n("div",ct,[n("b",null,o(t(M).length),1),l[4]||(l[4]=h("الخدمات",-1))]),n("div",gt,[n("b",null,o(b.value),1),l[5]||(l[5]=h("الموظفون",-1))]),n("div",xt,[n("b",null,o(t(W)(t(B))),1),l[6]||(l[6]=h("المدة الإجمالية",-1))])])]),t(e).mode==="auto"?(a(),r("div",mt,[(a(),r("svg",ut,[...l[7]||(l[7]=[n("path",{d:"M13 2L3 14h9l-1 8 10-12h-9z"},null,-1)])])),l[8]||(l[8]=h(" الأوقات الظاهرة أوقات جلسة كاملة قابلة للتنفيذ — وسيتم تنفيذ بعض الخدمات بالتوازي لتقليل وقت الانتظار",-1))])):E("",!0),n("div",ht,[n("div",bt,[n("div",vt,[n("button",{class:"cal-nav","data-nav":"-7",disabled:s.value,onClick:l[0]||(l[0]=m=>C(-7))},[...l[9]||(l[9]=[n("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[n("path",{d:"M9 6l6 6-6 6"})],-1)])],8,ft),n("b",null,o(v.value),1),n("button",{class:"cal-nav","data-nav":"7",onClick:l[1]||(l[1]=m=>C(7))},[...l[10]||(l[10]=[n("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[n("path",{d:"M15 6l-6 6 6 6"})],-1)])])]),n("div",kt,[(a(!0),r(y,null,L(i.value,(m,H)=>(a(),r("button",{key:H,"data-i":H,disabled:f(m),class:$({sel:g(m),avail:!f(m)}),onClick:ln=>x(m)},[n("span",yt,o(t(R)[m.getDay()].slice(0,3)),1),n("span",_t,o(m.getDate()),1)],10,wt))),128))]),l[11]||(l[11]=n("div",{class:"cal-legend"},[n("span",null,[n("i",{style:{background:"var(--green)"}}),h(" تتوفر مواعيد")]),n("span",null,[n("i",{style:{background:"#D8D0BC"}}),h(" غير متاح")])],-1))]),n("div",$t,[n("div",zt,"📅 "+o(X.value),1),t(e).date?(a(),r(y,{key:0},[n("div",Ct,[(a(),r(y,null,L(sn,m=>n("button",{key:m[0],class:$(["period",{sel:t(e).period===m[0]}]),"data-p":m[0],onClick:H=>t(e).period=m[0]},o(m[2])+" "+o(m[1]),11,Mt)),64))]),l[16]||(l[16]=n("div",{style:{"font-size":"13px",color:"var(--mute)","margin-bottom":"10px"}},"الأوقات المتاحة",-1)),n("div",Bt,[F.value.length?(a(!0),r(y,{key:0},L(F.value,(m,H)=>(a(),r("button",{key:m.t,class:$(["slot",{sel:t(e).time===m.t}]),"data-t":m.t,disabled:m.busy,style:S(`animation-delay:${Math.min(H*.03,.4)}s`),onClick:ln=>t(e).time=m.t},[A(H)&&!m.busy?(a(),r("span",Lt,o(A(H)),1)):(a(),r(y,{key:1},[],64)),h(o(t(D)(m.t)),1)],14,Ft))),128)):(a(),r("div",Et,"لا توجد أوقات متاحة في هذه الفترة"))]),t(e).time==null?(a(),r("div",Tt,[l[12]||(l[12]=h("⚡ أفضل موعد متاح اليوم: ",-1)),l[13]||(l[13]=n("b",null,"05:30 م",-1)),n("button",{"data-quick":"1050",onClick:l[2]||(l[2]=m=>t(e).time=1050)},"حجز سريع")])):E("",!0),_.value?(a(),r("div",Dt,[l[15]||(l[15]=n("h4",null,[n("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"var(--gold-deep)","stroke-width":"1.8"},[n("path",{d:"M13 2L3 14h9l-1 8 10-12h-9z"})]),h(" خطة تنفيذ الجلسة")],-1)),n("div",St,[(a(!0),r(y,null,L(_.value.items,(m,H)=>(a(),r(y,{key:H},[m.isBreak?(a(),r("div",At,[l[14]||(l[14]=n("span",{class:"cup"},"☕",-1)),n("span",null,o(t(D)(m.start))+" – "+o(t(D)(m.end)),1)])):(a(),r("div",{key:1,class:"plan-item",style:S(`border-color:${m.cat.hex}44;background:${m.cat.hex}0D`)},[n("b",{style:S(`color:${m.cat.hex}`)},o(m.cat.emoji)+" "+o(m.cat.name),5),n("small",null,"مع "+o(m.emp),1),n("span",{class:"t",style:S(`color:${m.cat.hex}`)},o(t(D)(m.start))+" – "+o(t(D)(m.end)),5),n("small",null,o(m.count)+" "+o(m.count>2?"خدمات":"خدمة")+" · "+o(m.dur)+" دقيقة",1)],4))],64))),128))]),n("div",Ht,"✓ هذا الترتيب يضمن راحتك وتنسيق الخدمات — نهاية الجلسة المتوقعة "+o(t(D)(_.value.end)),1)])):E("",!0)],64)):(a(),r("div",jt,[...l[17]||(l[17]=[n("b",null,"ابدأ باختيار التاريخ",-1),h("اختر يومًا من التقويم لعرض الأوقات المتاحة لجلستك",-1)])]))])])],64))}},Yt={class:"card detail-card"},Vt={class:"d-grid"},It={class:"d-cell"},Nt={class:"d-cell"},Ot={class:"d-cell"},Ut={class:"d-cell"},Rt={class:"card detail-card"},qt={class:"timeline-cards"},Wt={class:"tl-main"},Xt={class:"with"},Gt={class:"with"},Kt={class:"tl-time"},Jt={class:"dr"},Qt={class:"coord-note"},Zt={width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",style:{flex:"none"}},ne={class:"card detail-card products-detail-card"},te={class:"upsell"},ee=["src","alt"],oe={class:"inf"},ae={class:"p"},re=["data-up","onClick"],ie={class:"card detail-card"},se={class:"cust-grid"},le={class:"fld"},de={class:"fld"},pe={class:"fld"},ce={class:"notes-box",style:{"margin-top":"14px"}},ge="font-weight:400;color:var(--mute);font-family:var(--font-b);font-size:12px;margin-inline-start:auto",xe="font-size:11.5px;color:var(--mute);display:block;margin-bottom:7px",me={__name:"ConfirmStep",setup(P){const{state:e,totalDur:p,buildSession:M,hasUpsell:B,toggleUpsell:z}=j(),d=k(()=>q.find(b=>b.id===e.branch)),u=k(()=>M(e.time)),c=k(()=>`${R[e.date.getDay()]} ${e.date.getDate()} ${V[e.date.getMonth()]} ${e.date.getFullYear()}`);return(b,i)=>(a(),r(y,null,[i[20]||(i[20]=I('<div class="panel-head"><h1>تأكيد الحجز</h1><p>راجع تفاصيل جلستك قبل تأكيد الحجز والدفع</p></div><div class="ok-banner"><span class="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M20 6L9 17l-5-5"></path></svg></span><div><b>تم حفظ موعدك بنجاح</b><small>يمكنك تعديل أو إلغاء الحجز قبل 6 ساعات من وقت الموعد</small></div></div>',2)),n("div",Yt,[i[8]||(i[8]=n("h4",null,[n("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[n("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),n("path",{d:"M16 2v4M8 2v4M3 10h18"})]),h(" تفاصيل الموعد")],-1)),n("div",Vt,[n("div",It,[i[4]||(i[4]=n("small",null,"📍 الفرع",-1)),n("b",null,o(d.value.name),1)]),n("div",Nt,[i[5]||(i[5]=n("small",null,"📅 التاريخ",-1)),n("b",null,o(c.value),1)]),n("div",Ot,[i[6]||(i[6]=n("small",null,"🕐 وقت الحجز",-1)),n("b",null,o(t(D)(t(e).time)),1)]),n("div",Ut,[i[7]||(i[7]=n("small",null,"⏱️ مدة الجلسة",-1)),n("b",null,o(t(W)(t(p))),1)])])]),n("div",Rt,[i[12]||(i[12]=n("h4",null,[n("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 7v5l3 3"})]),h(" تفاصيل الجلسة")],-1)),n("div",qt,[i[10]||(i[10]=n("div",{class:"tl-rail"},null,-1)),(a(!0),r(y,null,L(u.value.items,(s,v)=>(a(),r(y,{key:v},[s.isBreak?(a(),r("div",{key:0,class:"coffee-break",style:S(`animation-delay:${v*.12}s`)},[i[9]||(i[9]=n("span",{class:"cup"},"☕",-1)),n("span",null,o(t(D)(s.start))+" – "+o(t(D)(s.end)),1)],4)):(a(),r("div",{key:1,class:"tl",style:S(`border-color:${s.cat.hex}3E;background:${s.cat.hex}0A;color:${s.cat.hex};animation-delay:${v*.12}s`)},[n("span",{class:"ti",style:S(`background:${s.cat.hex}`)},o(s.cat.emoji),5),n("div",Wt,[n("b",null,o(s.cat.name),1),n("div",Xt,o(s.services.map(f=>f.name).join(" • ")),1),n("div",Gt,"مع "+o(s.emp),1)]),n("div",Kt,[n("span",{class:"tm",style:S(`color:${s.cat.hex}`)},o(t(D)(s.start))+" – "+o(t(D)(s.end)),5),n("span",Jt,o(s.dur)+" دقيقة",1)])],4))],64))),128))]),n("div",Qt,[(a(),r("svg",Zt,[...i[11]||(i[11]=[n("path",{d:"M13 2L3 14h9l-1 8 10-12h-9z"},null,-1)])])),h(" تم تنسيق الجلسة بعناية"+o(t(e).mode==="auto"?" — اختار النظام الفريق الأنسب ورتّب الأوقات":"")+" لتمنحك تجربة مريحة وسلسة",1)])]),n("div",ne,[n("h4",null,[i[13]||(i[13]=n("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[n("path",{d:"M12 2l2.9 6.2 6.6.8-4.9 4.6 1.3 6.6L12 17l-5.9 3.2 1.3-6.6L2.5 9l6.6-.8z"})],-1)),i[14]||(i[14]=h(" منتجات مناسبة لجلستك ",-1)),n("small",{style:ge},"تم اختيار هذه المنتجات بعناية لتناسب خدماتك")]),n("div",te,[(a(!0),r(y,null,L(t(rn),s=>(a(),r("div",{key:s.id,class:$(["up",{added:t(B)(s.id)}])},[n("img",{src:s.img,alt:s.name},null,8,ee),n("span",oe,[n("b",null,o(s.name),1),n("small",null,o(s.desc),1),n("span",ae,o(t(T)(s.price))+" ر.س",1)]),n("button",{"data-up":s.id,onClick:v=>t(z)(s.id)},o(t(B)(s.id)?"✓ أضيف":"إضافة"),9,re)],2))),128))])]),n("div",ie,[i[18]||(i[18]=n("h4",null,[n("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[n("path",{d:"M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"}),n("circle",{cx:"12",cy:"7",r:"4"})]),h(" بيانات العميل")],-1)),n("div",se,[n("div",le,[i[15]||(i[15]=n("small",null,"👤 الاسم",-1)),Y(n("input",{id:"cName","onUpdate:modelValue":i[0]||(i[0]=s=>t(e).cust.name=s)},null,512),[[O,t(e).cust.name]])]),n("div",de,[i[16]||(i[16]=n("small",null,"📱 رقم الجوال",-1)),Y(n("input",{id:"cPhone",dir:"ltr","onUpdate:modelValue":i[1]||(i[1]=s=>t(e).cust.phone=s)},null,512),[[O,t(e).cust.phone]])]),n("div",pe,[i[17]||(i[17]=n("small",null,"✉️ البريد الإلكتروني",-1)),Y(n("input",{id:"cMail",dir:"ltr","onUpdate:modelValue":i[2]||(i[2]=s=>t(e).cust.mail=s)},null,512),[[O,t(e).cust.mail]])])]),n("div",ce,[n("small",{style:xe},"📝 ملاحظات إضافية (اختياري)"),Y(n("textarea",{id:"cNotes",placeholder:"اكتب أي ملاحظة أو طلب خاص بالجلسة...","onUpdate:modelValue":i[3]||(i[3]=s=>t(e).notes=s)},null,512),[[O,t(e).notes]])]),i[19]||(i[19]=n("div",{class:"terms"},[h("🛡️ بالتأكيد على الحجز، فإنك توافق على "),n("a",{href:"https://sami-care.sa/TermsAndConditions"},"الشروط والأحكام"),h(" و"),n("a",{href:"https://sami-care.sa/TermsAndConditions"},"سياسة الخصوصية")],-1))])],64))}},ue={class:"card detail-card"},he={class:"pay-methods"},be=["data-pay","onClick"],ve={class:"pmi"},fe={class:"card detail-card"},ke={class:"rewards"},we={class:"rw"},ye={class:"rt"},_e={class:"rw"},$e={class:"rt"},ze={class:"hint"},Ce={class:"coupon"},Me={class:"coupon-msg",id:"cpnMsg"},Be={class:"trust-row"},Fe={class:"ti"},Le=["innerHTML"],Ee=2450,tn=320,en=25,on="width:24px;height:24px;border-radius:50%;background:var(--ink);color:var(--gold-bright);display:inline-grid;place-items:center;font-size:12px;font-family:var(--font-b)",Te={__name:"PayStep",setup(P){const{state:e}=j(),p=k(()=>e.pay==="card"),M=[["ضمان الجودة","نضمن لك أفضل تجربة",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>'],["دفع آمن","تقنيات تشفير متقدمة",'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>'],["حماية البيانات","بياناتك محمية بالكامل",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'],["دعم فوري","فريق دعم جاهز لخدمتك",'<path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>']];function B(){const z=e.couponCode.trim();e.coupon=z?en:0}return(z,d)=>(a(),r(y,null,[d[16]||(d[16]=n("div",{class:"panel-head"},[n("h1",null,"الدفع"),n("p",null,"اختر طريقة الدفع المناسبة وأكمل حجزك")],-1)),n("div",ue,[n("h4",null,[n("span",{style:on},"1"),d[3]||(d[3]=h(" اختر طريقة الدفع",-1))]),n("div",he,[(a(!0),r(y,null,L(t(hn),u=>(a(),r("div",{key:u.id,class:$(["pm",{sel:t(e).pay===u.id}]),"data-pay":u.id,onClick:c=>t(e).pay=u.id},[n("span",ve,o(u.logo),1),n("span",null,[n("b",null,o(u.n),1),n("small",null,o(u.d),1)]),d[4]||(d[4]=n("span",{class:"rad"},[n("i")],-1))],10,be))),128))]),n("div",{class:$(["card-form",{open:p.value}])},[...d[5]||(d[5]=[n("div",{class:"cf"},[n("input",{placeholder:"رقم البطاقة",dir:"ltr",inputmode:"numeric"}),n("input",{placeholder:"MM/YY",dir:"ltr",inputmode:"numeric"}),n("input",{placeholder:"CVV",dir:"ltr",inputmode:"numeric"})],-1)])],2),d[6]||(d[6]=n("div",{class:"secure-line"},"🔒 جميع عمليات الدفع آمنة ومشفرة",-1))]),n("div",fe,[n("h4",null,[n("span",{style:on},"2"),d[7]||(d[7]=h(" استخدام العروض والمكافآت",-1))]),n("div",ke,[n("div",we,[n("div",ye,[d[9]||(d[9]=n("span",{class:"ri"},[n("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[n("path",{d:"M20 12v10H4V12M2 7h20v5H2zM12 22V7"})])],-1)),n("span",null,[d[8]||(d[8]=n("b",null,"استخدام نقاط الولاء",-1)),n("small",null,"لديك "+o(t(T)(Ee))+" نقطة",1)]),n("span",{class:$(["switch",{on:t(e).usePoints}]),id:"swPoints",onClick:d[0]||(d[0]=u=>t(e).usePoints=!t(e).usePoints)},null,2)]),d[10]||(d[10]=n("input",{value:"500 نقطة",readonly:""},null,-1)),d[11]||(d[11]=n("span",{class:"hint"},"تساوي خصم 50 ر.س",-1))]),n("div",_e,[n("div",$e,[d[13]||(d[13]=n("span",{class:"ri"},[n("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[n("path",{d:"M21 12V7H5a2 2 0 010-4h14v4M3 5v14a2 2 0 002 2h16v-5M18 12a2 2 0 000 4h4v-4z"})])],-1)),n("span",null,[d[12]||(d[12]=n("b",null,"استخدام من المحفظة",-1)),n("small",null,"الرصيد الحالي: "+o(t(T)(tn))+" ر.س",1)]),n("span",{class:$(["switch",{on:t(e).useWallet}]),id:"swWallet",onClick:d[1]||(d[1]=u=>t(e).useWallet=!t(e).useWallet)},null,2)]),d[14]||(d[14]=n("input",{value:"120 ر.س",readonly:""},null,-1)),n("span",ze,"المبلغ المتاح حتى "+o(t(T)(tn))+" ر.س",1)])]),n("div",Ce,[d[15]||(d[15]=n("span",{class:"ci"},"%",-1)),Y(n("input",{id:"cpnInput",placeholder:"أدخل كود الخصم","onUpdate:modelValue":d[2]||(d[2]=u=>t(e).couponCode=u)},null,512),[[O,t(e).couponCode]]),n("button",{id:"cpnBtn",onClick:B},"تطبيق")]),n("div",Me,o(t(e).coupon?"✓ تم تطبيق كود الخصم — خصم "+en+" ر.س":""),1)]),n("div",Be,[(a(),r(y,null,L(M,(u,c)=>n("div",{key:c,class:"trust"},[n("span",Fe,[(a(),r("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7",innerHTML:u[2]},null,8,Le))]),n("b",null,o(u[0]),1),n("small",null,o(u[1]),1)])),64))])],64))}},De={class:"success-wrap"},Se={class:"suc-grid"},Ae={class:"card suc-details"},He={class:"sd-row"},je={class:"k"},Pe=["innerHTML"],Ye={class:"v"},Ve={class:"sd-row"},Ie={class:"k"},Ne=["innerHTML"],Oe={class:"v"},Ue={class:"sd-row"},Re={class:"k"},qe=["innerHTML"],We={class:"v",dir:"ltr"},Xe={class:"sd-row"},Ge={class:"k"},Ke=["innerHTML"],Je={class:"v"},Qe={class:"sd-row"},Ze={class:"k"},no=["innerHTML"],to={class:"v"},eo={class:"sd-row"},oo={class:"k"},ao=["innerHTML"],ro={class:"v"},io={class:"sd-row"},so={class:"k"},lo=["innerHTML"],po={class:"card qr-card"},co={class:"code"},go={class:"card next-steps"},xo={class:"ns-track"},mo={class:"ni"},uo=["stroke-width","innerHTML"],ho={class:"suc-actions"},bo={class:"suc-perks"},vo={class:"ti"},fo=["innerHTML"],ko="color:var(--gold-deep);font-family:var(--font-d);font-size:17px",wo={__name:"BookingSuccess",emits:["home","calendar","share"],setup(P,{emit:e}){const{state:p,selSvcs:M,totalDur:B,priceParts:z,buildSession:d}=j(),u=e,c=k(()=>q.find(C=>C.id===p.branch)),b=k(()=>d(p.time)),i=k(()=>z.value),s=k(()=>`${R[p.date.getDay()]} ${p.date.getDate()} ${V[p.date.getMonth()]} ${p.date.getFullYear()}`),v={pin:'<path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>',cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>',scis:'<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"/>',user:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',card:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>'},f=[["تم تأكيد الحجز","تم استلام طلبك بنجاح",'<path d="M20 6L9 17l-5-5"/>',2],["تذكير قبل الموعد","سنذكّرك قبل موعدك بـ 24 ساعة",'<path d="M18 8a6 6 0 00-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 01-3.4 0"/>',1.8],["الوصول للفرع","يتم الترحيب بك في الموعد المحدد",'<path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>',1.8],["بدء الجلسة","استمتع بتجربة فاخرة",'<path d="M12 2l2.9 6.2 6.6.8-4.9 4.6 1.3 6.6L12 17l-5.9 3.2 1.3-6.6L2.5 9l6.6-.8z"/>',1.8]],g=[["خدمة VIP","تجربة فاخرة مصممة لراحتك",'<path d="M2 8l4 4 6-8 6 8 4-4v10a2 2 0 01-2 2H4a2 2 0 01-2-2z"/>'],["بياناتك آمنة","نضمن لك خصوصية وأمان بياناتك",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'],["تعديل الحجز","يمكنك تعديل أو إلغاء الحجز قبل موعده",'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>'],["دعم عملاء 24/7","نحن هنا لخدمتك دائمًا",'<path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>']];return(C,x)=>(a(),r("div",De,[x[19]||(x[19]=I('<div class="suc-ic"><span class="spark s1">✦</span><span class="spark s2">✧</span><svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M20 6L9 17l-5-5"></path></svg></div><h1>تم تأكيد حجزك بنجاح!</h1><p class="sub">نتطلع لخدمتك وتقديم تجربة استثنائية تليق بك</p><div class="sent-chip"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.1V12a10 10 0 11-5.9-9.1"></path><path d="M22 4L12 14l-3-3"></path></svg> تم إرسال تفاصيل الحجز إلى بريدك الإلكتروني ورقم جوالك</div>',4)),n("div",Se,[n("div",Ae,[x[10]||(x[10]=n("h4",null,"تفاصيل الحجز",-1)),n("div",He,[n("span",je,[(a(),r("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:v.pin},null,8,Pe)),x[3]||(x[3]=h(" الفرع",-1))]),n("span",Ye,o(c.value.name),1)]),n("div",Ve,[n("span",Ie,[(a(),r("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:v.cal},null,8,Ne)),x[4]||(x[4]=h(" التاريخ",-1))]),n("span",Oe,o(s.value),1)]),n("div",Ue,[n("span",Re,[(a(),r("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:v.clock},null,8,qe)),x[5]||(x[5]=h(" الوقت",-1))]),n("span",We,o(t(D)(t(p).time))+" – "+o(t(D)(b.value.end)),1)]),n("div",Xe,[n("span",Ge,[(a(),r("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:v.info},null,8,Ke)),x[6]||(x[6]=h(" مدة الجلسة",-1))]),n("span",Je,o(t(W)(t(B))),1)]),n("div",Qe,[n("span",Ze,[(a(),r("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:v.scis},null,8,no)),x[7]||(x[7]=h(" الخدمات",-1))]),n("span",to,o(t(M).map(F=>F.name).join(" + ")),1)]),n("div",eo,[n("span",oo,[(a(),r("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:v.user},null,8,ao)),x[8]||(x[8]=h(" الفريق",-1))]),n("span",ro,o(b.value.emps.join("، ")),1)]),n("div",io,[n("span",so,[(a(),r("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:v.card},null,8,lo)),x[9]||(x[9]=h(" المبلغ المدفوع",-1))]),n("span",{class:"v",style:ko},o(t(T)(i.value.total))+" ر.س",1)])]),n("div",po,[x[11]||(x[11]=n("h4",{style:{"font-family":"var(--font-d)","font-size":"16px",color:"var(--ink)"}},"رمز الحجز",-1)),n("div",co,o(t(p).bookRef),1),x[12]||(x[12]=n("div",{class:"qr-box"},[n("canvas",{id:"qrCv"})],-1)),x[13]||(x[13]=n("small",null,"📱 امسح الرمز عند الوصول لإظهار تفاصيل الحجز وتسجيل الحضور",-1)),x[14]||(x[14]=n("div",{class:"wallets"},[n("button",null,"🍎 Apple Wallet"),n("button",null,"📲 Google Wallet")],-1))])]),n("div",go,[x[15]||(x[15]=n("h4",null,"ماذا يحدث الآن؟",-1)),n("div",xo,[(a(),r(y,null,L(f,(F,A)=>n("div",{key:A,class:$(["ns",{done:A===0}])},[n("span",mo,[(a(),r("svg",{width:"19",height:"19",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":F[3],innerHTML:F[2]},null,8,uo))]),n("b",null,o(F[0]),1),n("small",null,o(F[1]),1)],2)),64))])]),n("div",ho,[n("button",{class:"btn btn-gold",onClick:x[0]||(x[0]=F=>u("home"))},[...x[16]||(x[16]=[n("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[n("path",{d:"M3 9l9-6 9 6v11a1 1 0 01-1 1H4a1 1 0 01-1-1z"})],-1),h(" العودة إلى الرئيسية",-1)])]),n("button",{class:"btn btn-line",id:"btnCal",onClick:x[1]||(x[1]=F=>u("calendar"))},[...x[17]||(x[17]=[n("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[n("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),n("path",{d:"M16 2v4M8 2v4M3 10h18M12 14v4M10 16h4"})],-1),h(" إضافة للتقويم",-1)])]),n("button",{class:"btn btn-line",id:"btnShare",onClick:x[2]||(x[2]=F=>u("share"))},[...x[18]||(x[18]=[I('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"></path></svg> مشاركة الحجز',2)])])]),n("div",bo,[(a(),r(y,null,L(g,(F,A)=>n("div",{key:A,class:"trust"},[n("span",vo,[(a(),r("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7",innerHTML:F[2]},null,8,fo))]),n("b",null,o(F[0]),1),n("small",null,o(F[1]),1)])),64))])]))}},yo={key:0,class:"card"},_o={key:0,class:"br-img"},$o=["src","alt"],zo={key:1,class:"sum-row"},Co={class:"v"},Mo={key:2,class:"sum-row"},Bo={class:"v"},Fo={key:3,class:"sum-row"},Lo={class:"v"},Eo={class:"sum-row"},To={class:"v"},Do={class:"sum-row"},So={class:"v"},Ao={key:4,class:"sum-row"},Ho={class:"v"},jo={class:"sum-svcs"},Po={class:"nm"},Yo={class:"pr"},Vo=["data-rm","onClick"],Io={class:"nm"},No={class:"pr"},Oo=["data-rmu","onClick"],Uo={class:"sum-price"},Ro={class:"sp-row"},qo={key:0,class:"sp-row disc"},Wo={key:1,class:"sp-row disc"},Xo={key:2,class:"sp-row disc"},Go={class:"sp-row"},Ko={class:"sp-total"},Jo={class:"v",id:"sumTotal"},Qo={class:"sum-note"},Zo={width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",style:{flex:"none"}},na={__name:"BookingSummary",setup(P){const{state:e,selSvcs:p,totalDur:M,priceParts:B,toggleSvc:z,toggleUpsell:d}=j(),u=U(!1),c=k(()=>e.services.length>0);an(c,f=>{f?dn(()=>requestAnimationFrame(()=>{u.value=!0})):u.value=!1},{immediate:!0});const b=k(()=>q.find(f=>f.id===e.branch)),i=k(()=>B.value),s=k(()=>e.upsell.map(f=>rn.find(g=>g.id===f))),v=k(()=>e.date?`${R[e.date.getDay()]} ${e.date.getDate()} ${V[e.date.getMonth()]} ${e.date.getFullYear()}`:"");return(f,g)=>(a(),r("div",{id:"summary",class:$({show:u.value})},[c.value?(a(),r("div",yo,[g[18]||(g[18]=n("h3",null,[n("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"var(--gold-deep)","stroke-width":"1.8"},[n("path",{d:"M9 11l3 3L22 4"}),n("path",{d:"M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"})]),h(" ملخص الحجز")],-1)),b.value?(a(),r("div",_o,[n("img",{src:b.value.img,alt:b.value.name},null,8,$o)])):E("",!0),b.value?(a(),r("div",zo,[g[0]||(g[0]=n("span",{class:"k"},"📍 الفرع",-1)),n("span",Co,o(b.value.name),1)])):E("",!0),t(e).date?(a(),r("div",Mo,[g[1]||(g[1]=n("span",{class:"k"},"📅 التاريخ",-1)),n("span",Bo,o(v.value),1)])):E("",!0),t(e).time!=null?(a(),r("div",Fo,[g[2]||(g[2]=n("span",{class:"k"},"🕐 الوقت",-1)),n("span",Lo,o(t(D)(t(e).time)),1)])):E("",!0),n("div",Eo,[g[3]||(g[3]=n("span",{class:"k"},"⏱️ المدة الإجمالية",-1)),n("span",To,o(t(W)(t(M))),1)]),n("div",Do,[g[4]||(g[4]=n("span",{class:"k"},"✂️ عدد الخدمات",-1)),n("span",So,o(t(p).length)+" "+o(t(p).length>2?"خدمات":"خدمة"),1)]),t(e).mode?(a(),r("div",Ao,[g[5]||(g[5]=n("span",{class:"k"},"👤 الموظفون",-1)),n("span",Ho,o(t(e).mode==="auto"?"اختيار تلقائي ذكي":"اختيار يدوي"),1)])):E("",!0),n("div",jo,[(a(!0),r(y,null,L(t(p),C=>(a(),r("div",{key:C.id,class:"sum-svc"},[n("i",{style:S(`background:${t(J)(C.cat).hex}`)},null,4),n("span",Po,o(C.name),1),n("span",Yo,o(t(T)(C.price))+" ر.س",1),n("button",{class:"rm","data-rm":C.id,"aria-label":"حذف",onClick:x=>t(z)(C.id)},[...g[6]||(g[6]=[n("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[n("path",{d:"M18 6L6 18M6 6l12 12"})],-1)])],8,Vo)]))),128)),(a(!0),r(y,null,L(s.value,C=>(a(),r("div",{key:C.id,class:"sum-svc"},[g[9]||(g[9]=n("i",{style:{background:"var(--gold)"}},null,-1)),n("span",Io,[h(o(C.name)+" ",1),g[7]||(g[7]=n("small",{style:{color:"var(--mute)"}},"(منتج)",-1))]),n("span",No,o(t(T)(C.price))+" ر.س",1),n("button",{class:"rm","data-rmu":C.id,onClick:x=>t(d)(C.id)},[...g[8]||(g[8]=[n("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[n("path",{d:"M18 6L6 18M6 6l12 12"})],-1)])],8,Oo)]))),128))]),n("div",Uo,[n("div",Ro,[g[10]||(g[10]=n("span",null,"المجموع الفرعي",-1)),n("span",null,o(t(T)(i.value.sub))+" ر.س",1)]),i.value.pts?(a(),r("div",qo,[g[11]||(g[11]=n("span",null,"خصم النقاط",-1)),n("span",null,"-"+o(t(T)(i.value.pts))+" ر.س",1)])):E("",!0),i.value.wal?(a(),r("div",Wo,[g[12]||(g[12]=n("span",null,"استخدام المحفظة",-1)),n("span",null,"-"+o(t(T)(i.value.wal))+" ر.س",1)])):E("",!0),i.value.cpn?(a(),r("div",Xo,[n("span",null,"كود الخصم ("+o(t(e).couponCode)+")",1),n("span",null,"-"+o(t(T)(i.value.cpn))+" ر.س",1)])):E("",!0),n("div",Go,[g[13]||(g[13]=n("span",null,"ضريبة القيمة المضافة (15%)",-1)),n("span",null,"+"+o(t(T)(i.value.vat))+" ر.س",1)]),n("div",Ko,[g[15]||(g[15]=n("span",{class:"k"},"المبلغ الإجمالي",-1)),n("span",Jo,[h(o(t(T)(i.value.total))+" ",1),g[14]||(g[14]=n("small",null,"ر.س",-1))])])]),n("div",Qo,[(a(),r("svg",Zo,[...g[16]||(g[16]=[n("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},null,-1)])])),g[17]||(g[17]=h(" بياناتك محمية — يمكنك تعديل أو إلغاء الحجز قبل 6 ساعات من الموعد",-1))])])):E("",!0)],2))}},ta={class:"shell"},ea={class:"wrap"},oa={class:"panel",id:"panel"},aa={class:"footbar",id:"footbar"},ra={class:"wrap in"},ia={class:"fb-mid",id:"fbMid"},sa={key:0,class:"tot"},la=["disabled"],ma={__name:"BookingView",setup(P){const e=U(null);pn();const{state:p,selCats:M,priceParts:B,canProceed:z,nextLabel:d}=j();gn(bn,"booking"),xn(e);const u=U(!1),c=U(""),b=U(!1);function i(A){c.value=A,b.value=!0,clearTimeout(i._h),i._h=setTimeout(()=>{b.value=!1},2600)}k(()=>p.services.length+p.upsell.length);const s=k(()=>p.services.length>0),v=k(()=>!p.done&&s.value&&p.step>=1),f=k(()=>v.value?"minmax(0,1fr) minmax(285px,315px)":"1fr");an(()=>p.services.slice(),()=>{const A=M.value.map(_=>_.id);Object.keys(p.emp).forEach(_=>{A.includes(_)||delete p.emp[_]})});function g(){p.step>0&&(p.step--,scrollTo({top:0,behavior:"smooth"}))}function C(){if(z.value){if(p.step===4){x();return}p.step++,scrollTo({top:0,behavior:"smooth"})}}function x(){u.value=!0,setTimeout(()=>{u.value=!1,p.done=!0,p.bookRef="#SAMI-2026-"+String(Math.floor(1e4+Math.random()*89999)),scrollTo({top:0,behavior:"smooth"})},2100)}function F(){location.href="/"}return(A,_)=>(a(),r("div",{ref_key:"root",ref:e},[n("div",ta,[Z($n),n("div",ea,[n("div",{class:"stage",id:"stage",style:S(`grid-template-columns:${f.value}`)},[n("main",oa,[t(p).done?(a(),N(wo,{key:0,onHome:F,onCalendar:_[0]||(_[0]=X=>i("تمت إضافة الموعد إلى التقويم")),onShare:_[1]||(_[1]=X=>i("تم نسخ رابط الحجز للمشاركة"))})):t(p).step===0?(a(),N(Jn,{key:1})):t(p).step===1?(a(),N(st,{key:2})):t(p).step===2?(a(),N(Pt,{key:3})):t(p).step===3?(a(),N(me,{key:4})):(a(),N(Te,{key:5}))]),Y(n("aside",{class:$(["summary booking-summary-compact",{show:v.value,"booking-summary-time":t(p).step===2}])},[Z(na)],2),[[K,v.value]])],4)])]),_[7]||(_[7]=I('<footer><div class="wrap"><div class="f-grid"><div class="f-brand"><a class="logo" href="/"><span class="mark"><img src="'+cn+'" alt="عناية سامي" style="width:29px;height:29px;object-fit:contain;"></span><span class="name"><b>عناية سامي</b><span>SAMI CARE</span></span></a><p>مركز متخصص في العناية الرجالية المتكاملة بجدة، حيث تلتقي الفخامة بالاحترافية في كل تفصيلة.</p><div class="socials"><a href="https://x.com/samicare_sa" aria-label="X"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-6.8 7.8L23.3 22h-6.3l-4.9-6.4L6.5 22H3.4l7.3-8.3L1 2h6.5l4.4 5.8L18.9 2zm-1.1 18h1.7L7.1 3.9H5.3L17.8 20z"></path></svg></a><a href="https://www.instagram.com/samicare.sa/" aria-label="انستقرام"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1" fill="currentColor"></circle></svg></a><a href="https://www.facebook.com/samicare.sa" aria-label="فيسبوك"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg></a></div></div><div><h4>روابط مهمة</h4><ul class="f-links"><li><a href="/">الرئيسية</a></li><li><a href="/booking">حجز موعد</a></li><li><a href="/#services">خدماتنا</a></li><li><a href="/packages-gifts">الباقات</a></li><li><a href="/gifts">الهدايا</a></li></ul></div><div><h4>استكشف</h4><ul class="f-links"><li><a href="/store">المتجر</a></li><li><a href="/branches">فروعنا</a></li><li><a href="/contact">تواصل معنا</a></li><li></li><li><a href="https://sami-care.sa/TermsAndConditions">الشروط والأحكام</a></li></ul></div><div><h4>عناوين الفروع</h4><div class="f-branch"><b>قريش</b><small>جدة البوادي شارع قريش</small><a href="tel:+966550046462">+966 55 004 6462</a></div><div class="f-branch"><b>البغدادية</b><small>جدة البغدادية الغربية شارع حائل</small><a href="tel:+966569610958">+966 56 961 0958</a></div><div class="f-branch"><b>خدمات منزلية</b><small>حلاقة شعر ولحية وماسكات طبيعية</small></div></div></div><div class="f-bottom"><small>© 2026 عناية سامي — جميع الحقوق محفوظة</small><div class="pay" aria-label="بوابات الدفع"><span title="Visa">VISA</span><span title="Mastercard">Mastercard</span><span title="مدى">mada</span><span title="Tabby">tabby</span><span title="Apple Pay">Pay</span></div></div></div></footer>',1)),Y(n("div",aa,[n("div",ra,[n("button",{class:"btn btn-back",id:"btnBack",style:S({visibility:t(p).step===0?"hidden":"visible"}),onClick:g},[..._[2]||(_[2]=[n("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[n("path",{d:"M5 12h14M13 6l6 6-6 6"})],-1),h(" السابق ",-1)])],4),n("div",ia,[_[4]||(_[4]=n("span",null,"🔒 بياناتك محمية وآمنة",-1)),s.value?(a(),r("span",sa,[_[3]||(_[3]=h("المبلغ الإجمالي ",-1)),n("b",null,o(t(T)(t(B).total))+" ر.س",1)])):E("",!0)]),n("button",{class:$(["btn",t(p).step===4?"btn-pay":"btn-gold"]),id:"btnNext",disabled:!t(z),onClick:C},[h(o(t(d))+" ",1),_[5]||(_[5]=n("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.2"},[n("path",{d:"M19 12H5M11 18l-6-6 6-6"})],-1))],10,la)])],512),[[K,!t(p).done]]),n("div",{class:$(["pay-loading",{on:u.value}]),id:"payLoading"},[..._[6]||(_[6]=[n("div",{class:"pl-box"},[n("div",{class:"pl-ring"}),n("b",null,"جارٍ معالجة الدفع بأمان…"),n("small",null,"لا تغلق الصفحة، سيتم تأكيد حجزك خلال لحظات")],-1)])],2),n("div",{class:$(["toast",{on:b.value}]),id:"toast"},o(c.value),3)],512))}};export{ma as default};
