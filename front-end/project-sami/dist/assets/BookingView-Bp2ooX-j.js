import{B as R,C as nn,u as e,o as t,c as o,b as n,F as C,e as S,n as A,t as l,h as U,r as P,v as J,D as cn,i as F,j as gn,q as D,a as m,k as xn,E as G,G as O,m as N,s as ln,z as dn,H as W,d as L,y as T,_ as mn,I as un,x as rn,p as q,J as bn}from"./index-DRmIOvU6.js";import{u as hn,a as fn}from"./useInternalLinks-C5bGJrEd.js";import{u as Y,r as V,f as Q,a as en,b as tn}from"./useBooking-SSv0VvMN.js";import{f as vn,a as kn,c as wn,i as yn}from"./bookingApi-D6f14PcE.js";import{s as _n}from"./serviceDetails-gQMMCHKA.js";import{c as zn}from"./giftIcons-w9RYaTqR.js";import{l as $n}from"./i18nField-CJ_3XKph.js";import{f as Cn}from"./accountApi-Cxd2lFgQ.js";const Mn=`
:root{
  --ink:#0A0906; --coal:#14110C; --coal-2:#1C1811;
  --gold:#CE9234; --gold-bright:#E8BE6C; --gold-deep:#9C6B1F;
  --champagne:#F0E6CF; --ivory:#F8F4EB; --paper:#FBFAF6; --card:#FFFFFF;
  --smoke:#9A9080; --mute:#7d745f; --text:#2A2519;
  --line:rgba(143,113,52,.22); --line-dark:rgba(198,161,91,.22);
  --green:#2E8B57; --green-bg:#EAF5EC;
  --c-hair:#C6963F; --c-skin:#D96A8B; --c-pedi:#B9743B; --c-mass:#8B6FC0; --c-bath:#4E9E6F;
  --ease:cubic-bezier(.33,.9,.35,1); --dur:.26s;
  --font-d:'Lama Sans',serif; --font-b:'Lama Sans',sans-serif;
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
`,sn=[{id:"s1",cat:"hair",name:"حلاقة عادية",desc:"حلاقة شعر عادية بقصات عصرية",dur:20,price:20},{id:"s2",cat:"hair",name:"حلاقة شعر + تحديد لحية",desc:"حلاقة شعر مع تحديد اللحية",dur:30,price:35},{id:"s3",cat:"hair",name:"حلاقة مع غسيل",desc:"حلاقة مع غسيل وتنظيف الشعر",dur:30,price:30},{id:"s4",cat:"hair",name:"حلاقة VIP",desc:"حلاقة فاخرة مع خدمة VIP",dur:50,price:80},{id:"s5",cat:"hair",name:"تنسيق اللحية",desc:"تنسيق وتجميل اللحية",dur:20,price:15},{id:"s6",cat:"hair",name:"تصفيف الشعر",desc:"تصفيف الشعر بالمنتجات المناسبة",dur:15,price:15},{id:"s7",cat:"skin",name:"تنظيف بشرة عميق",desc:"تنظيف عميق ينظف وينعش البشرة",dur:50,price:150},{id:"s8",cat:"skin",name:"تنظيف بشرة سريع",desc:"جلسة سريعة لإشراقة فورية",dur:30,price:80},{id:"s9",cat:"skin",name:"ماسك الذهب",desc:"ماسك فاخر لنضارة استثنائية",dur:25,price:90},{id:"s10",cat:"pedi",name:"بديكير عادي",desc:"عناية أساسية للأقدام والأظافر",dur:45,price:60},{id:"s11",cat:"pedi",name:"بديكير فاخر",desc:"عناية متكاملة مع تقشير وترطيب",dur:60,price:100},{id:"s12",cat:"pedi",name:"بديكير طبي",desc:"علاج تشققات القدم والمسامير",dur:60,price:120},{id:"s13",cat:"pedi",name:"إزالة جلد ميت",desc:"إزالة الجلد الميت من القدمين",dur:30,price:40},{id:"s14",cat:"mass",name:"مساج استرخاء للجسم",desc:"استرخاء عميق يجدد طاقتك",dur:60,price:180},{id:"s15",cat:"mass",name:"مساج رأس",desc:"جلسة قصيرة لتخفيف التوتر",dur:15,price:25},{id:"s16",cat:"mass",name:"مساج علاجي",desc:"مساج متخصص للعضلات المجهدة",dur:60,price:220},{id:"s17",cat:"bath",name:"حمام مغربي كلاسيكي",desc:"تقشير وتنقية بطقوس أصيلة",dur:60,price:200},{id:"s18",cat:"bath",name:"حمام مغربي ملكي",desc:"التجربة الكاملة مع ماسك وتدليك",dur:90,price:300}];for(const H of Object.values(_n))for(const i of H.variants||[])i.svcId&&!sn.some(h=>h.id===i.svcId)&&sn.push({id:i.svcId,cat:i.cat,name:i.name,desc:i.desc||"",dur:i.dur,price:i.price,hidden:!0});const Fn=[{t:"اختيار الخدمات",ic:'<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"/>'},{t:"اختيار الموظف",ic:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>'},{t:"اختيار الوقت",ic:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>'},{t:"تأكيد الحجز",ic:'<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>'},{t:"الدفع",ic:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>'}],Bn={class:"wrap stepper",id:"stepperWrap"},Sn={class:"steps",id:"steps"},Ln=["data-i"],En={class:"n"},Dn=["onClick"],An=["innerHTML"],Tn={__name:"BookingStepper",setup(H){const{state:i}=Y();function h(u){u<i.step&&(i.step=u)}return(u,y)=>R((t(),o("div",Bn,[n("div",Sn,[(t(!0),o(C,null,S(e(Fn),(_,d)=>(t(),o("div",{key:d,class:A(["step",{active:d===e(i).step,done:d<e(i).step}]),"data-i":d},[y[0]||(y[0]=n("div",{class:"bar"},[n("i")],-1)),n("span",En,l(d+1),1),n("span",{class:"bubble",onClick:k=>h(d)},[(t(),o("svg",{width:"21",height:"21",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7",innerHTML:_.ic},null,8,An))],8,Dn),n("label",null,l(_.t),1)],10,Ln))),128))])],512)),[[nn,!e(i).done]])}},jn={key:0,class:"branch-strip"},Hn=["src","alt"],In={class:"bi"},Vn={key:1,class:"empty-hint"},Yn={class:"cat-row"},Pn=["data-cat","onClick"],Nn=["src","alt"],Rn={class:"lbl"},qn={class:"cat-name"},Un={key:0,class:"empty-hint"},On={key:1,class:"sub-block"},Xn={class:"sub-title"},Kn={class:"sub-title__main"},Wn={class:"tick"},Gn=["innerHTML"],Jn={key:0,class:"empty-hint"},Qn={key:1,class:"subs"},Zn=["data-svc","onClick"],ne={class:"top"},ee={class:"foot"},te={class:"dur"},oe={class:"prc"},ae={__name:"ServicesStep",setup(H){const{state:i,hasSvc:h,toggleSvc:u}=Y(),{current:y}=U(),{state:_}=xn(),d=g=>$n(g,_.lang),k=P([]),w=P(!0);J(async()=>{try{const g=await cn();k.value=g!=null&&g.status?g.data||[]:[]}catch{k.value=[]}finally{w.value=!1}});const a=F(()=>k.value.map(g=>({id:g.id,name:d(g.name),image:gn(g.image)||g.feature_image||null}))),M=F(()=>k.value.find(g=>g.id===i.activeCat)||null),$=F(()=>{var g;return d((g=M.value)==null?void 0:g.name)}),r=F(()=>{var g;return(((g=M.value)==null?void 0:g.services)||[]).map(c=>({id:c.id,categoryId:M.value.id,categoryName:$.value,name:d(c.name),desc:d(c.description)||"",dur:c.duration_min,price:c.default_price}))}),x=g=>i.services.some(c=>c.categoryId===g),s=F(()=>r.value.filter(g=>h(g.id)).length);return(g,c)=>(t(),o(C,null,[c[6]||(c[6]=n("div",{class:"panel-head"},[n("h1",null,"اختر الخدمة التي تناسبك"),n("p",null,"يمكنك اختيار خدمة واحدة أو أكثر من أي قسم")],-1)),e(y)?(t(),o("div",jn,[e(y).image?(t(),o("img",{key:0,src:e(y).image,alt:e(y).name},null,8,Hn)):D("",!0),n("span",In,[c[0]||(c[0]=m("مكان التنفيذ: ",-1)),n("b",null,l(e(y).name),1),n("small",null,l(e(y).address),1)])])):D("",!0),w.value?(t(),o("div",Vn,[...c[1]||(c[1]=[n("b",null,"جاري تحميل الخدمات...",-1)])])):(t(),o(C,{key:2},[n("div",Yn,[(t(!0),o(C,null,S(a.value,f=>(t(),o("div",{key:f.id,class:A(["cat",{sel:e(i).activeCat===f.id,"has-picks":x(f.id)}]),"data-cat":f.id,onClick:I=>e(i).activeCat=f.id},[f.image?(t(),o("img",{key:0,src:f.image,alt:f.name},null,8,Nn)):D("",!0),c[2]||(c[2]=n("span",{class:"chk"},[n("svg",{width:"9",height:"9",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3"},[n("path",{d:"M20 6L9 17l-5-5"})])],-1)),n("span",Rn,[n("span",qn,l(f.name),1)])],10,Pn))),128))]),e(i).activeCat?(t(),o("div",On,[n("div",Xn,[n("span",Kn,[m(" خدمات "+l($.value)+" ",1),n("span",Wn,[(t(),o("svg",{viewBox:"0 0 24 24","aria-hidden":"true",innerHTML:e(zn)()},null,8,Gn))])]),n("small",null,l(s.value?s.value+" مختارة":"اختر خدمة أو أكثر"),1)]),r.value.length?(t(),o("div",Qn,[(t(!0),o(C,null,S(r.value,f=>(t(),o("div",{key:f.id,class:A(["sub",{sel:e(h)(f.id)}]),"data-svc":f.id,onClick:I=>e(u)(f)},[n("div",ne,[n("b",null,l(f.name),1),c[4]||(c[4]=n("span",{class:"chk"},[n("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3"},[n("path",{d:"M20 6L9 17l-5-5"})])],-1))]),n("small",null,l(f.desc),1),n("div",ee,[n("span",te,"🕐 "+l(f.dur)+" دقيقة",1),n("span",oe,[m(l(e(V)(f.price))+" ",1),c[5]||(c[5]=n("small",null,"ر.س",-1))])])],10,Zn))),128))])):(t(),o("div",Jn,"لا توجد خدمات متاحة حاليًا ضمن هذا القسم"))])):(t(),o("div",Un,[...c[3]||(c[3]=[n("b",null,"اختر خدمة لعرض تفاصيلها",-1),m("اختر إحدى الخدمات الأساسية أعلاه لعرض الخدمات الفرعية المتاحة",-1)])]))],64))],64))}},re={class:"mode-grid"},ie={key:0,class:"emp-section"},se={class:"emp-cat"},le={key:0,class:"empty-hint"},de={key:1,class:"empty-hint"},pe={key:2,class:"emp-list"},ce=["onClick"],ge={key:1,class:"j-note card",style:{display:"flex",gap:"16px","align-items":"center",padding:"20px 24px","border-color":"var(--line)"}},xe={__name:"EmployeeStep",setup(H){const{state:i,selSvcs:h,setEmployee:u}=Y(),{current:y}=U(),_=G({}),d=G({}),k=["توفير الوقت","أفضل تقييم متاح","منع أي تعارض في المواعيد"],w=["اختر الموظف الذي تفضّله لكل خدمة","تحكم كامل في فريق جلستك"];function a(r){return[r.first_name,r.last_name].filter(Boolean).join(" ")||r.username||"موظف"}async function M(r){var x,s;if(!_[r.id]){d[r.id]=!0;try{const g=(x=y.value)!=null&&x.home?0:(s=y.value)==null?void 0:s.id,c=await vn({branchId:g,serviceId:r.id}),f=(Array.isArray(c)?c:[]).map(I=>({id:I.id,name:a(I)}));_[r.id]=f,i.mode==="auto"&&f.length&&!i.emp[r.id]&&u(r.id,f[0])}catch{_[r.id]=[]}finally{d[r.id]=!1}}}function $(){h.value.forEach(M)}return J($),O(()=>h.value.map(r=>r.id),$),O(()=>i.mode,r=>{r==="auto"&&h.value.forEach(x=>{const s=_[x.id];s!=null&&s.length&&!i.emp[x.id]&&u(x.id,s[0])})}),(r,x)=>(t(),o(C,null,[x[8]||(x[8]=n("div",{class:"panel-head"},[n("h1",null,"اختر طريقة اختيار الموظف"),n("p",null,"يمكنك اختيار الموظف بنفسك لكل خدمة أو ترك الأمر لنا لاختيار الأفضل لك")],-1)),n("div",re,[n("div",{class:A(["mode dark",{sel:e(i).mode==="auto"}]),onClick:x[0]||(x[0]=s=>e(i).mode="auto")},[x[3]||(x[3]=N('<span class="chk"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"></path></svg></span><span class="mi"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="8" r="4"></circle><path d="M5 21c0-4 3-6 7-6s7 2 7 6"></path></svg></span><h3>اختيار تلقائي</h3><div class="sub-t">سنختار لك أفضل فريق متاح</div><span class="flag">✨ الأسرع والأسهل</span>',5)),n("ul",null,[(t(),o(C,null,S(k,(s,g)=>n("li",{key:g},[x[2]||(x[2]=n("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.6"},[n("path",{d:"M20 6L9 17l-5-5"})],-1)),m(" "+l(s),1)])),64))])],2),n("div",{class:A(["mode",{sel:e(i).mode==="manual"}]),onClick:x[1]||(x[1]=s=>e(i).mode="manual")},[x[5]||(x[5]=N('<span class="chk"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" stroke-width="3"><path d="M20 6L9 17l-5-5"></path></svg></span><span class="mi"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span><h3>اختيار موظف محدد</h3><div class="sub-t">اختر الموظف المناسب لكل خدمة</div><span class="flag">🎯 تحكم كامل</span>',5)),n("ul",null,[(t(),o(C,null,S(w,(s,g)=>n("li",{key:g},[x[4]||(x[4]=n("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.6"},[n("path",{d:"M20 6L9 17l-5-5"})],-1)),m(" "+l(s),1)])),64))])],2)]),e(i).mode==="manual"?(t(),o("div",ie,[(t(!0),o(C,null,S(e(h),s=>{var g;return t(),o("div",{key:s.id,class:"emp-row"},[n("div",se,[n("b",null,l(s.name),1),n("small",null,l(s.categoryName),1)]),d[s.id]?(t(),o("div",le,"جاري تحميل الموظفين...")):(g=_[s.id])!=null&&g.length?(t(),o("div",pe,[(t(!0),o(C,null,S(_[s.id],c=>{var f;return t(),o("div",{key:c.id,class:A(["emp",{sel:((f=e(i).emp[s.id])==null?void 0:f.id)===c.id}]),onClick:I=>e(u)(s.id,c)},[x[6]||(x[6]=N('<span class="chk"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3"><path d="M20 6L9 17l-5-5"></path></svg></span><span class="av" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span>',2)),n("b",null,l(c.name),1)],10,ce)}),128))])):(t(),o("div",de,"لا يوجد موظفون متاحون لهذه الخدمة في هذا الفرع"))])}),128))])):D("",!0),e(i).mode==="auto"?(t(),o("div",ge,[...x[7]||(x[7]=[N('<span style="flex:none;width:44px;height:44px;border-radius:13px;display:grid;place-items:center;background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M13 2L3 14h9l-1 8 10-12h-9z"></path></svg></span><p style="font-size:13.5px;color:#5c5442;line-height:1.9;"><b style="color:var(--ink);">تم اختيار أفضل موظف متاح لكل خدمة تلقائيًا.</b> هتقدر تشوف وتعدّل الأوقات في الخطوة الجاية.</p>',2)])])):D("",!0)],64))}},me={class:"card branch-strip"},ue={class:"cells"},be={class:"cell"},he={class:"cell"},fe={class:"card cal"},ve={class:"cal-head"},ke=["disabled"],we={class:"cal-cells"},ye=["disabled","onClick"],_e={class:"dow"},ze={class:"dnum"},$e={key:0,class:"empty-hint",style:{"margin-top":"10px"}},Ce={class:"date-line"},Me={style:{"font-weight":"400",color:"var(--mute)"}},Fe={key:0,class:"empty-hint"},Be={key:1,class:"empty-hint"},Se={key:2,class:"slots"},Le=["onClick"],Ee={__name:"TimeStep",setup(H){const i=["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],h=["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],{state:u,selSvcs:y,totalDur:_,setTime:d}=Y(),k=new Date;k.setHours(0,0,0,0);const w=P(new Date(k)),a=G({}),M=G({}),$=F(()=>Array.from({length:7},(b,v)=>{const z=new Date(w.value);return z.setDate(z.getDate()+v),z})),r=F(()=>w.value.getTime()<=k.getTime()),x=F(()=>{const b=$.value;return b[0].getMonth()===b[6].getMonth()?`${b[0].getDate()} – ${b[6].getDate()} ${h[b[0].getMonth()]}`:`${b[0].getDate()} ${h[b[0].getMonth()]} – ${b[6].getDate()} ${h[b[6].getMonth()]}`}),s=b=>b<k,g=b=>u.date&&b.getTime()===u.date.getTime();function c(b){const v=new Date(w.value);v.setDate(v.getDate()+b),w.value=v}function f(b){return`${b.getFullYear()}-${String(b.getMonth()+1).padStart(2,"0")}-${String(b.getDate()).padStart(2,"0")}`}function I(b){s(b)||(u.date=b,u.time={})}async function X(b){const v=u.emp[b.id];if(!(!u.date||!v)){M[b.id]=!0;try{const z=await kn({date:f(u.date),staffId:v.id,durationMin:b.dur});a[b.id]=Array.isArray(z)?z:[]}catch{a[b.id]=[]}finally{M[b.id]=!1}}}O(()=>u.date,()=>y.value.forEach(X)),O(()=>y.value.map(b=>{var v;return`${b.id}:${(v=u.emp[b.id])==null?void 0:v.id}`}),()=>y.value.forEach(X));const Z=F(()=>u.date?`${i[u.date.getDay()]} ${u.date.getDate()} ${h[u.date.getMonth()]} ${u.date.getFullYear()}`:"اختر تاريخًا من التقويم");return(b,v)=>(t(),o(C,null,[v[8]||(v[8]=n("div",{class:"panel-head"},[n("h1",null,"اختر الوقت المناسب لك"),n("p",null,"سيتم عرض الأوقات المتاحة فعليًا حسب توفر كل موظف — اختر وقتًا لكل خدمة")],-1)),n("div",me,[v[4]||(v[4]=n("div",{class:"bi"},[n("b",null,"ملخص جلستك"),n("small",null,"قبل اختيار الوقت")],-1)),n("div",ue,[n("div",be,[n("b",null,l(e(y).length),1),v[2]||(v[2]=m("الخدمات",-1))]),n("div",he,[n("b",null,l(e(Q)(e(_))),1),v[3]||(v[3]=m("المدة الإجمالية",-1))])])]),n("div",fe,[n("div",ve,[n("button",{class:"cal-nav",disabled:r.value,onClick:v[0]||(v[0]=z=>c(-7))},[...v[5]||(v[5]=[n("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[n("path",{d:"M9 6l6 6-6 6"})],-1)])],8,ke),n("b",null,l(x.value),1),n("button",{class:"cal-nav",onClick:v[1]||(v[1]=z=>c(7))},[...v[6]||(v[6]=[n("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[n("path",{d:"M15 6l-6 6 6 6"})],-1)])])]),n("div",we,[(t(!0),o(C,null,S($.value,(z,E)=>(t(),o("button",{key:E,disabled:s(z),class:A({sel:g(z),avail:!s(z)}),onClick:p=>I(z)},[n("span",_e,l(i[z.getDay()].slice(0,3)),1),n("span",ze,l(z.getDate()),1)],10,ye))),128))])]),e(u).date?(t(),o(C,{key:1},[n("div",Ce,"📅 "+l(Z.value),1),(t(!0),o(C,null,S(e(y),z=>{var E,p;return t(),o("div",{key:z.id,class:"card detail-card",style:{"margin-top":"14px"}},[n("h4",null,[m(l(z.name)+" ",1),n("small",Me,"مع "+l(((E=e(u).emp[z.id])==null?void 0:E.name)||"—"),1)]),M[z.id]?(t(),o("div",Fe,"جاري تحميل الأوقات المتاحة...")):(p=a[z.id])!=null&&p.length?(t(),o("div",Se,[(t(!0),o(C,null,S(a[z.id],B=>(t(),o("button",{key:B,class:A(["slot",{sel:e(u).time[z.id]===B}]),onClick:j=>e(d)(z.id,B)},l(e(en)(B)),11,Le))),128))])):(t(),o("div",Be,"لا توجد أوقات متاحة لهذا اليوم"))])}),128))],64)):(t(),o("div",$e,[...v[7]||(v[7]=[n("b",null,"ابدأ باختيار التاريخ",-1),m("اختر يومًا من التقويم لعرض الأوقات المتاحة",-1)])]))],64))}},De={class:"card detail-card"},Ae={class:"d-grid"},Te={class:"d-cell"},je={class:"d-cell"},He={class:"d-cell"},Ie={class:"d-cell"},Ve={class:"card detail-card"},Ye={class:"timeline-cards"},Pe={class:"tl-main"},Ne={class:"with"},Re={class:"with"},qe={class:"tl-time"},Ue={class:"tm"},Oe={class:"dr"},Xe={class:"card detail-card"},Ke={class:"cust-grid"},We={class:"fld"},Ge={class:"fld"},Je={class:"fld"},Qe={class:"notes-box",style:{"margin-top":"14px"}},Ze={class:"terms"},nt={__name:"ConfirmStep",setup(H){const{state:i,selSvcs:h,totalDur:u}=Y(),{current:y}=U(),{user:_,isAuthenticated:d}=ln();J(()=>{d.value&&_.value&&!i.cust.name&&(i.cust.name=[_.value.first_name,_.value.last_name].filter(Boolean).join(" "),i.cust.phone=_.value.mobile||"",i.cust.mail=_.value.email||"")});const k=F(()=>i.date?tn(i.date):"");return(w,a)=>{var $;const M=dn("RouterLink");return t(),o(C,null,[a[19]||(a[19]=n("div",{class:"panel-head"},[n("h1",null,"تأكيد الحجز"),n("p",null,"راجع تفاصيل جلستك قبل تأكيد الحجز والدفع")],-1)),n("div",De,[a[8]||(a[8]=n("h4",null,[n("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[n("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),n("path",{d:"M16 2v4M8 2v4M3 10h18"})]),m(" تفاصيل الموعد")],-1)),n("div",Ae,[n("div",Te,[a[4]||(a[4]=n("small",null,"📍 الفرع",-1)),n("b",null,l((($=e(y))==null?void 0:$.name)||"—"),1)]),n("div",je,[a[5]||(a[5]=n("small",null,"📅 التاريخ",-1)),n("b",null,l(k.value),1)]),n("div",He,[a[6]||(a[6]=n("small",null,"⏱️ المدة الإجمالية",-1)),n("b",null,l(e(Q)(e(u))),1)]),n("div",Ie,[a[7]||(a[7]=n("small",null,"✂️ عدد الخدمات",-1)),n("b",null,l(e(h).length),1)])])]),n("div",Ve,[a[9]||(a[9]=n("h4",null,[n("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 7v5l3 3"})]),m(" تفاصيل الجلسة")],-1)),n("div",Ye,[(t(!0),o(C,null,S(e(h),r=>{var x;return t(),o("div",{key:r.id,class:"tl"},[n("div",Pe,[n("b",null,l(r.name),1),n("div",Ne,l(r.categoryName),1),n("div",Re,"مع "+l(((x=e(i).emp[r.id])==null?void 0:x.name)||"—"),1)]),n("div",qe,[n("span",Ue,l(e(en)(e(i).time[r.id])),1),n("span",Oe,l(r.dur)+" دقيقة · "+l(e(V)(r.price))+" ر.س",1)])])}),128))])]),n("div",Xe,[a[18]||(a[18]=n("h4",null,[n("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[n("path",{d:"M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"}),n("circle",{cx:"12",cy:"7",r:"4"})]),m(" بيانات العميل")],-1)),n("div",Ke,[n("div",We,[a[10]||(a[10]=n("small",null,"👤 الاسم",-1)),R(n("input",{"onUpdate:modelValue":a[0]||(a[0]=r=>e(i).cust.name=r)},null,512),[[W,e(i).cust.name]])]),n("div",Ge,[a[11]||(a[11]=n("small",null,"📱 رقم الجوال",-1)),R(n("input",{dir:"ltr","onUpdate:modelValue":a[1]||(a[1]=r=>e(i).cust.phone=r)},null,512),[[W,e(i).cust.phone]])]),n("div",Je,[a[12]||(a[12]=n("small",null,"✉️ البريد الإلكتروني (اختياري)",-1)),R(n("input",{dir:"ltr","onUpdate:modelValue":a[2]||(a[2]=r=>e(i).cust.mail=r)},null,512),[[W,e(i).cust.mail]])])]),n("div",Qe,[a[13]||(a[13]=n("small",{style:{"font-size":"11.5px",color:"var(--mute)",display:"block","margin-bottom":"7px"}},"📝 ملاحظات إضافية (اختياري)",-1)),R(n("textarea",{placeholder:"اكتب أي ملاحظة أو طلب خاص بالجلسة...","onUpdate:modelValue":a[3]||(a[3]=r=>e(i).notes=r)},null,512),[[W,e(i).notes]])]),n("div",Ze,[a[16]||(a[16]=m("🛡️ بالتأكيد على الحجز، فإنك توافق على ",-1)),L(M,{to:"/terms"},{default:T(()=>[...a[14]||(a[14]=[m("الشروط والأحكام",-1)])]),_:1}),a[17]||(a[17]=m(" و",-1)),L(M,{to:"/privacy-policy"},{default:T(()=>[...a[15]||(a[15]=[m("سياسة الخصوصية",-1)])]),_:1})])])],64)}}},et={class:"card detail-card"},tt={class:"pay-methods"},ot=["onClick"],at={class:"pmi"},rt={key:0,style:{color:"#b42318","font-size":"12px","margin-top":"8px"}},it={class:"trust-row"},st={class:"ti"},lt=["innerHTML"],dt={__name:"PayStep",setup(H){const{state:i,priceParts:h}=Y();J(async()=>{var k,w;try{const a=await Cn();i.walletBalance=((w=(k=a==null?void 0:a.data)==null?void 0:k.balances)==null?void 0:w.wallet)??0}catch{}});const u=F(()=>[{id:"cod",n:"الدفع عند الوصول",d:"ادفع عند وصولك للفرع",logo:"💵",enabled:!0},{id:"wallet",n:"المحفظة",d:i.walletBalance!==null?`الرصيد الحالي ${V(i.walletBalance)} ر.س`:"ادفع من رصيد محفظتك",logo:"👛",enabled:!0},{id:"mada",n:"مدى",d:"قريبًا",logo:"مدى",enabled:!1},{id:"card",n:"بطاقات الائتمان والخصم",d:"قريبًا — Visa / Mastercard",logo:"VISA",enabled:!1},{id:"tabby",n:"تابي",d:"قريبًا",logo:"tabby",enabled:!1}]),y=F(()=>i.pay==="wallet"&&i.walletBalance!==null&&i.walletBalance<h.value.total),_=[["ضمان الجودة","نضمن لك أفضل تجربة",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>'],["دفع آمن","تقنيات تشفير متقدمة",'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>'],["حماية البيانات","بياناتك محمية بالكامل",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'],["دعم فوري","فريق دعم جاهز لخدمتك",'<path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>']];function d(k){k.enabled&&(i.pay=k.id)}return(k,w)=>(t(),o(C,null,[w[3]||(w[3]=n("div",{class:"panel-head"},[n("h1",null,"الدفع"),n("p",null,"اختر طريقة الدفع المناسبة وأكمل حجزك")],-1)),n("div",et,[w[1]||(w[1]=n("h4",null,"اختر طريقة الدفع",-1)),n("div",tt,[(t(!0),o(C,null,S(u.value,a=>(t(),o("div",{key:a.id,class:A(["pm",{sel:e(i).pay===a.id,disabled:!a.enabled}]),onClick:M=>d(a)},[n("span",at,l(a.logo),1),n("span",null,[n("b",null,l(a.n),1),n("small",null,l(a.d),1)]),w[0]||(w[0]=n("span",{class:"rad"},[n("i")],-1))],10,ot))),128)),y.value?(t(),o("p",rt,"رصيد محفظتك لا يكفي لدفع القيمة كاملة، اختر وسيلة دفع أخرى.")):D("",!0)]),w[2]||(w[2]=n("div",{class:"secure-line"},"🔒 جميع عمليات الدفع آمنة ومشفرة",-1))]),n("div",it,[(t(),o(C,null,S(_,(a,M)=>n("div",{key:M,class:"trust"},[n("span",st,[(t(),o("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7",innerHTML:a[2]},null,8,lt))]),n("b",null,l(a[0]),1),n("small",null,l(a[1]),1)])),64))])],64))}},pt=mn(dt,[["__scopeId","data-v-ad216b10"]]),ct={class:"success-wrap"},gt={class:"suc-grid"},xt={class:"card suc-details"},mt={class:"sd-row"},ut={class:"k"},bt=["innerHTML"],ht={class:"v"},ft={class:"sd-row"},vt={class:"k"},kt=["innerHTML"],wt={class:"v"},yt={class:"sd-row"},_t={class:"k"},zt=["innerHTML"],$t={class:"v"},Ct={class:"sd-row"},Mt={class:"k"},Ft=["innerHTML"],Bt={class:"v"},St={class:"sd-row"},Lt={class:"k"},Et=["innerHTML"],Dt={class:"v"},At={class:"sd-row"},Tt={class:"k"},jt=["innerHTML"],Ht={class:"card qr-card"},It={class:"code"},Vt={class:"suc-actions"},Yt={class:"suc-perks"},Pt={class:"ti"},Nt=["innerHTML"],Rt="color:var(--gold-deep);font-family:var(--font-d);font-size:17px",qt={__name:"BookingSuccess",emits:["home","calendar","share"],setup(H,{emit:i}){const{state:h,selSvcs:u,totalDur:y,priceParts:_}=Y(),{current:d}=U(),k=i,w=F(()=>_.value),a=F(()=>h.date?tn(h.date):""),M=F(()=>[...new Set(u.value.map(x=>{var s;return(s=h.emp[x.id])==null?void 0:s.name}).filter(Boolean))]),$={pin:'<path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>',cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>',scis:'<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"/>',user:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',card:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>'},r=[["خدمة VIP","تجربة فاخرة مصممة لراحتك",'<path d="M2 8l4 4 6-8 6 8 4-4v10a2 2 0 01-2 2H4a2 2 0 01-2-2z"/>'],["بياناتك آمنة","نضمن لك خصوصية وأمان بياناتك",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'],["تعديل الحجز","يمكنك تعديل أو إلغاء الحجز قبل موعده",'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>'],["دعم عملاء 24/7","نحن هنا لخدمتك دائمًا",'<path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>']];return(x,s)=>{var g;return t(),o("div",ct,[s[15]||(s[15]=N('<div class="suc-ic"><span class="spark s1">✦</span><span class="spark s2">✧</span><svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M20 6L9 17l-5-5"></path></svg></div><h1>تم تأكيد حجزك بنجاح!</h1><p class="sub">نتطلع لخدمتك وتقديم تجربة استثنائية تليق بك</p>',3)),n("div",gt,[n("div",xt,[s[9]||(s[9]=n("h4",null,"تفاصيل الحجز",-1)),n("div",mt,[n("span",ut,[(t(),o("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:$.pin},null,8,bt)),s[3]||(s[3]=m(" الفرع",-1))]),n("span",ht,l(((g=e(d))==null?void 0:g.name)||"—"),1)]),n("div",ft,[n("span",vt,[(t(),o("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:$.cal},null,8,kt)),s[4]||(s[4]=m(" التاريخ",-1))]),n("span",wt,l(a.value),1)]),n("div",yt,[n("span",_t,[(t(),o("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:$.info},null,8,zt)),s[5]||(s[5]=m(" مدة الجلسة",-1))]),n("span",$t,l(e(Q)(e(y))),1)]),n("div",Ct,[n("span",Mt,[(t(),o("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:$.scis},null,8,Ft)),s[6]||(s[6]=m(" الخدمات",-1))]),n("span",Bt,l(e(u).map(c=>`${c.name} (${e(en)(e(h).time[c.id])})`).join(" + ")),1)]),n("div",St,[n("span",Lt,[(t(),o("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:$.user},null,8,Et)),s[7]||(s[7]=m(" الفريق",-1))]),n("span",Dt,l(M.value.join("، ")),1)]),n("div",At,[n("span",Tt,[(t(),o("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:$.card},null,8,jt)),s[8]||(s[8]=m(" المبلغ التقديري",-1))]),n("span",{class:"v",style:Rt},l(e(V)(w.value.total))+" ر.س",1)])]),n("div",Ht,[s[10]||(s[10]=n("h4",{style:{"font-family":"var(--font-d)","font-size":"16px",color:"var(--ink)"}},"رقم الفاتورة",-1)),n("div",It,l(e(h).bookRef||"—"),1),s[11]||(s[11]=n("small",null,"سيتواصل معك فريقنا لتأكيد التفاصيل قبل موعدك",-1))])]),n("div",Vt,[n("button",{class:"btn btn-gold",onClick:s[0]||(s[0]=c=>k("home"))},[...s[12]||(s[12]=[n("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[n("path",{d:"M3 9l9-6 9 6v11a1 1 0 01-1 1H4a1 1 0 01-1-1z"})],-1),m(" العودة إلى الرئيسية",-1)])]),n("button",{class:"btn btn-line",onClick:s[1]||(s[1]=c=>k("calendar"))},[...s[13]||(s[13]=[n("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[n("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),n("path",{d:"M16 2v4M8 2v4M3 10h18M12 14v4M10 16h4"})],-1),m(" إضافة للتقويم",-1)])]),n("button",{class:"btn btn-line",onClick:s[2]||(s[2]=c=>k("share"))},[...s[14]||(s[14]=[N('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"></path></svg> مشاركة الحجز',2)])])]),n("div",Yt,[(t(),o(C,null,S(r,(c,f)=>n("div",{key:f,class:"trust"},[n("span",Pt,[(t(),o("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7",innerHTML:c[2]},null,8,Nt))]),n("b",null,l(c[0]),1),n("small",null,l(c[1]),1)])),64))])])}}},Ut={key:0,class:"card"},Ot={key:0,class:"br-img"},Xt=["src","alt"],Kt={key:1,class:"sum-row"},Wt={class:"v"},Gt={key:2,class:"sum-row"},Jt={class:"v"},Qt={class:"sum-row"},Zt={class:"v"},no={class:"sum-row"},eo={class:"v"},to={key:3,class:"sum-row"},oo={class:"v"},ao={class:"sum-svcs"},ro={class:"nm"},io={class:"pr"},so=["onClick"],lo={class:"sum-price"},po={class:"sp-row"},co={class:"sp-row"},go={class:"sp-total"},xo={class:"v"},mo={class:"sum-note"},uo={width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",style:{flex:"none"}},bo={__name:"BookingSummary",setup(H){const{state:i,selSvcs:h,totalDur:u,priceParts:y,toggleSvc:_}=Y(),{current:d}=U(),k=P(!1),w=F(()=>i.services.length>0);O(w,$=>{$?un(()=>requestAnimationFrame(()=>{k.value=!0})):k.value=!1},{immediate:!0});const a=F(()=>y.value),M=F(()=>i.date?tn(i.date):"");return($,r)=>(t(),o("div",{id:"summary",class:A({show:k.value})},[w.value?(t(),o("div",Ut,[r[13]||(r[13]=n("h3",null,[n("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"var(--gold-deep)","stroke-width":"1.8"},[n("path",{d:"M9 11l3 3L22 4"}),n("path",{d:"M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"})]),m(" ملخص الحجز")],-1)),e(d)?(t(),o("div",Ot,[e(d).image?(t(),o("img",{key:0,src:e(d).image,alt:e(d).name},null,8,Xt)):D("",!0)])):D("",!0),e(d)?(t(),o("div",Kt,[r[0]||(r[0]=n("span",{class:"k"},"📍 الفرع",-1)),n("span",Wt,l(e(d).name),1)])):D("",!0),e(i).date?(t(),o("div",Gt,[r[1]||(r[1]=n("span",{class:"k"},"📅 التاريخ",-1)),n("span",Jt,l(M.value),1)])):D("",!0),n("div",Qt,[r[2]||(r[2]=n("span",{class:"k"},"⏱️ المدة الإجمالية",-1)),n("span",Zt,l(e(Q)(e(u))),1)]),n("div",no,[r[3]||(r[3]=n("span",{class:"k"},"✂️ عدد الخدمات",-1)),n("span",eo,l(e(h).length)+" "+l(e(h).length>2?"خدمات":"خدمة"),1)]),e(i).mode?(t(),o("div",to,[r[4]||(r[4]=n("span",{class:"k"},"👤 الموظفون",-1)),n("span",oo,l(e(i).mode==="auto"?"اختيار تلقائي ذكي":"اختيار يدوي"),1)])):D("",!0),n("div",ao,[(t(!0),o(C,null,S(e(h),x=>(t(),o("div",{key:x.id,class:"sum-svc"},[r[6]||(r[6]=n("i",{style:{background:"var(--gold)"}},null,-1)),n("span",ro,l(x.name),1),n("span",io,l(e(V)(x.price))+" ر.س",1),n("button",{class:"rm","aria-label":"حذف",onClick:s=>e(_)(x)},[...r[5]||(r[5]=[n("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[n("path",{d:"M18 6L6 18M6 6l12 12"})],-1)])],8,so)]))),128))]),n("div",lo,[n("div",po,[r[7]||(r[7]=n("span",null,"المجموع الفرعي",-1)),n("span",null,l(e(V)(a.value.sub))+" ر.س",1)]),n("div",co,[r[8]||(r[8]=n("span",null,"ضريبة القيمة المضافة (15%)",-1)),n("span",null,"+"+l(e(V)(a.value.vat))+" ر.س",1)]),n("div",go,[r[10]||(r[10]=n("span",{class:"k"},"المبلغ الإجمالي",-1)),n("span",xo,[m(l(e(V)(a.value.total))+" ",1),r[9]||(r[9]=n("small",null,"ر.س",-1))])])]),n("div",mo,[(t(),o("svg",uo,[...r[11]||(r[11]=[n("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},null,-1)])])),r[12]||(r[12]=m(" بياناتك محمية — يمكنك تعديل أو إلغاء الحجز قبل 6 ساعات من الموعد",-1))])])):D("",!0)],2))}},ho={class:"shell"},fo={class:"wrap"},vo={class:"panel",id:"panel"},ko={class:"wrap"},wo={class:"f-grid"},yo={class:"f-brand"},_o={class:"f-links"},zo={class:"f-links"},$o=["href"],Co={class:"footbar",id:"footbar"},Mo={class:"wrap in"},Fo={class:"fb-mid",id:"fbMid"},Bo={key:0,class:"tot"},So=["disabled"],Vo={__name:"BookingView",setup(H){const i=P(null),{current:h,locations:u,loadServiceLocations:y}=U(),{requireAuth:_}=ln();y();const{state:d,selSvcs:k,priceParts:w,canProceed:a,nextLabel:M,reset:$}=Y();hn(Mn,"booking"),fn(i);const r=P(!1),x=P(""),s=P(!1);function g(E){x.value=E,s.value=!0,clearTimeout(g._h),g._h=setTimeout(()=>{s.value=!1},2600)}const c=F(()=>d.services.length>0),f=F(()=>!d.done&&c.value&&d.step>=1),I=F(()=>f.value?"minmax(0,1fr) minmax(285px,315px)":"1fr");function X(){d.step>0&&(d.step--,scrollTo({top:0,behavior:"smooth"}))}function Z(){if(a.value){if(d.step===4){_(v);return}d.step++,scrollTo({top:0,behavior:"smooth"})}}function b(E){return`${E.getFullYear()}-${String(E.getMonth()+1).padStart(2,"0")}-${String(E.getDate()).padStart(2,"0")}`}async function v(){var E,p;r.value=!0;try{const B=(E=h.value)!=null&&E.home?0:Number((p=h.value)==null?void 0:p.id),j=k.value.map(K=>{var an;return{subServices:[{id:K.id,date:b(d.date),time:d.time[K.id],duration:K.dur,staffId:(an=d.emp[K.id])==null?void 0:an.id}]}});await wn({branch:B,services:j,customerName:d.cust.name,mobileNo:d.cust.phone});const on=d.pay==="wallet",pn=await yn(on?"card":d.pay,{wallet:on});d.bookRef=pn.invoice_id||null,d.done=!0,scrollTo({top:0,behavior:"smooth"})}catch(B){g(B.message||"تعذّر إتمام الحجز، حاول مرة أخرى")}finally{r.value=!1}}function z(){$(),location.href="/"}return(E,p)=>{const B=dn("RouterLink");return t(),o("div",{ref_key:"root",ref:i},[n("div",ho,[L(Tn),n("div",fo,[n("div",{class:"stage",id:"stage",style:rn(`grid-template-columns:${I.value}`)},[n("main",vo,[e(d).done?(t(),q(qt,{key:0,onHome:z,onCalendar:p[0]||(p[0]=j=>g("تمت إضافة الموعد إلى التقويم")),onShare:p[1]||(p[1]=j=>g("تم نسخ رابط الحجز للمشاركة"))})):e(d).step===0?(t(),q(ae,{key:1})):e(d).step===1?(t(),q(xe,{key:2})):e(d).step===2?(t(),q(Ee,{key:3})):e(d).step===3?(t(),q(nt,{key:4})):(t(),q(pt,{key:5}))]),R(n("aside",{class:A(["summary booking-summary-compact",{show:f.value,"booking-summary-time":e(d).step===2}])},[L(bo)],2),[[nn,f.value]])],4)])]),n("footer",null,[n("div",ko,[n("div",wo,[n("div",yo,[L(B,{class:"logo",to:"/"},{default:T(()=>[...p[2]||(p[2]=[n("span",{class:"mark"},[n("img",{src:bn,alt:"عناية سامي",style:{width:"29px",height:"29px","object-fit":"contain"}})],-1),n("span",{class:"name"},[n("b",null,"عناية سامي"),n("span",null,"SAMI CARE")],-1)])]),_:1}),p[3]||(p[3]=N('<p>مركز متخصص في العناية الرجالية المتكاملة بجدة، حيث تلتقي الفخامة بالاحترافية في كل تفصيلة.</p><div class="socials"><a href="https://x.com/samicare_sa" aria-label="X"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-6.8 7.8L23.3 22h-6.3l-4.9-6.4L6.5 22H3.4l7.3-8.3L1 2h6.5l4.4 5.8L18.9 2zm-1.1 18h1.7L7.1 3.9H5.3L17.8 20z"></path></svg></a><a href="https://www.instagram.com/samicare.sa/" aria-label="انستقرام"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1" fill="currentColor"></circle></svg></a><a href="https://www.facebook.com/samicare.sa" aria-label="فيسبوك"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg></a></div>',2))]),n("div",null,[p[9]||(p[9]=n("h4",null,"روابط مهمة",-1)),n("ul",_o,[n("li",null,[L(B,{to:"/"},{default:T(()=>[...p[4]||(p[4]=[m("الرئيسية",-1)])]),_:1})]),n("li",null,[L(B,{to:"/booking"},{default:T(()=>[...p[5]||(p[5]=[m("حجز موعد",-1)])]),_:1})]),n("li",null,[L(B,{to:"/#services"},{default:T(()=>[...p[6]||(p[6]=[m("خدماتنا",-1)])]),_:1})]),n("li",null,[L(B,{to:"/packages-gifts"},{default:T(()=>[...p[7]||(p[7]=[m("الباقات",-1)])]),_:1})]),n("li",null,[L(B,{to:"/gifts"},{default:T(()=>[...p[8]||(p[8]=[m("الهدايا",-1)])]),_:1})])])]),n("div",null,[p[15]||(p[15]=n("h4",null,"استكشف",-1)),n("ul",zo,[n("li",null,[L(B,{to:"/store"},{default:T(()=>[...p[10]||(p[10]=[m("المتجر",-1)])]),_:1})]),n("li",null,[L(B,{to:"/branches"},{default:T(()=>[...p[11]||(p[11]=[m("فروعنا",-1)])]),_:1})]),n("li",null,[L(B,{to:"/contact"},{default:T(()=>[...p[12]||(p[12]=[m("تواصل معنا",-1)])]),_:1})]),n("li",null,[L(B,{to:"/terms"},{default:T(()=>[...p[13]||(p[13]=[m("الشروط والأحكام",-1)])]),_:1})]),n("li",null,[L(B,{to:"/privacy-policy"},{default:T(()=>[...p[14]||(p[14]=[m("سياسة الخصوصية",-1)])]),_:1})])])]),n("div",null,[p[16]||(p[16]=n("h4",null,"عناوين الفروع",-1)),(t(!0),o(C,null,S(e(u),j=>(t(),o("div",{key:j.id,class:"f-branch"},[n("b",null,l(j.name),1),n("small",null,l(j.address),1),j.contact_number?(t(),o("a",{key:0,href:`tel:${j.contact_number}`},l(j.contact_number),9,$o)):D("",!0)]))),128))])]),p[17]||(p[17]=N('<div class="f-bottom"><small>© 2026 عناية سامي — جميع الحقوق محفوظة</small><div class="pay" aria-label="بوابات الدفع"><span title="Visa">VISA</span><span title="Mastercard">Mastercard</span><span title="مدى">mada</span><span title="Tabby">tabby</span><span title="Apple Pay">Pay</span></div></div>',1))])]),R(n("div",Co,[n("div",Mo,[n("button",{class:"btn btn-back",id:"btnBack",style:rn({visibility:e(d).step===0?"hidden":"visible"}),onClick:X},[...p[18]||(p[18]=[n("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[n("path",{d:"M5 12h14M13 6l6 6-6 6"})],-1),m(" السابق ",-1)])],4),n("div",Fo,[p[20]||(p[20]=n("span",null,"🔒 بياناتك محمية وآمنة",-1)),c.value?(t(),o("span",Bo,[p[19]||(p[19]=m("المبلغ الإجمالي ",-1)),n("b",null,l(e(V)(e(w).total))+" ر.س",1)])):D("",!0)]),n("button",{class:A(["btn",e(d).step===4?"btn-pay":"btn-gold"]),id:"btnNext",disabled:!e(a),onClick:Z},[m(l(e(M))+" ",1),p[21]||(p[21]=n("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.2"},[n("path",{d:"M19 12H5M11 18l-6-6 6-6"})],-1))],10,So)])],512),[[nn,!e(d).done]]),n("div",{class:A(["pay-loading",{on:r.value}]),id:"payLoading"},[...p[22]||(p[22]=[n("div",{class:"pl-box"},[n("div",{class:"pl-ring"}),n("b",null,"جارٍ معالجة الدفع بأمان…"),n("small",null,"لا تغلق الصفحة، سيتم تأكيد حجزك خلال لحظات")],-1)])],2),n("div",{class:A(["toast",{on:s.value}]),id:"toast"},l(x.value),3)],512)}}};export{Vo as default};
