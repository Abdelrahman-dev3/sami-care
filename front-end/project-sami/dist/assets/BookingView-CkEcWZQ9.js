import{K as he,L as je,e as t,o as n,c as a,b as e,F as I,r as X,n as U,t as o,_ as We,i as ye,g as J,x as $e,M as er,d as w,j as rr,l as Se,N as tr,s as P,a as L,f as de,z as Ee,u as qe,O as nr,P as Le,E as ae,Q as Fe,w as Be,H as _e,p as fe,S as ar,G as Qe,U as or,V as Ve,v as Re,B as Xe,C as Je,q as xe,X as ir,Y as sr,Z as lr}from"./index-BHOMaz1u.js";import{u as dr}from"./usePageStyles-DnIXd0gr.js";import{u as pr}from"./useInternalLinks-DAanAWlH.js";import{u as pe,r as Y,f as be,a as le,b as Ne}from"./useBooking-gbJjfdUs.js";import{b as cr,B as ur,s as gr}from"./BookingQr-YB-TgOJu.js";import{f as mr,a as Ze,b as xr,P as hr,v as br,s as vr,c as fr,i as yr}from"./PaymentMethodList-CfQ2OU98.js";import{s as wr}from"./serviceDetails-gQMMCHKA.js";import{s as kr}from"./servicePrice-BKyCtkSr.js";import{F as _r}from"./FavoriteButton-BJtNjZNJ.js";import{c as Ye,a as Ie,b as Oe}from"./giftIcons-C3hH12nn.js";import{_ as He}from"./SkeletonLoader-Veg7_xPU.js";import{u as $r}from"./useQuietHours-_ntvc7hC.js";import{S as zr,G as Mr}from"./GiftCodeRedeem-bpHBS7jw.js";import{f as Cr}from"./accountApi-Bp8K4p7X.js";import"./giftsApi-CJ0c23Se.js";function Sr(ee,r=3,M=Math.random){const T=[...new Map(ee.filter(z=>z.stockQty>0).map(z=>[String(z.id),z])).values()];for(let z=T.length-1;z>0;z--){const f=Math.floor(M()*(z+1));[T[z],T[f]]=[T[f],T[z]]}return T.slice(0,r)}function Fr(ee){return Object.entries(ee).filter(([,r])=>r>0).map(([r,M])=>({product_id:Number(r),qty:M}))}const Br=`\r
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
.mode-grid{display:flex;flex-wrap:wrap;justify-content:center;align-items:stretch;\r
  gap:20px;margin:4px 0 26px}\r
.mode{position:relative;flex:1;max-width:260px;min-width:160px;padding:24px 16px 20px;border:1.5px solid var(--line);background:#fff;border-radius:22px;\r
  cursor:pointer;text-align:center;overflow:visible;transition:transform .3s var(--ease)}\r
.mode:hover{transform:translateY(-3px);border-color:var(--gold);box-shadow:0 12px 28px -20px rgba(80,60,20,.4)}\r
.mode.sel{border-color:var(--gold);background:linear-gradient(160deg,#fff,#faf5e9);box-shadow:0 0 0 3px rgba(198,161,91,.12)}\r
.mode:focus-visible{outline:3px solid var(--gold-deep);outline-offset:4px}\r
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
.mode.dark{color:inherit}\r
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
.mode .chk{position:absolute;top:12px;left:12px;width:24px;height:24px;border-radius:50%;\r
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
@media(max-width:560px){.mode-grid{gap:12px}.mode{min-width:130px;padding:22px 10px 16px}.mode .mi{width:86px;height:86px}.mode .mi svg{width:32px;height:32px}.mode h3{font-size:14px}.mode .chk{left:9px;top:9px;width:21px;height:21px}}\r
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
@media(min-width:901px){\r
  .stage-services-summary .subs{grid-template-columns:repeat(2,minmax(0,1fr))}\r
  .stage-services-summary>.panel{min-width:0}\r
}\r
@media(max-width:900px){\r
  .stage{grid-template-columns:minmax(0,1fr)!important}\r
  .stage-services-summary>.summary{order:initial}\r
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
`,Ke=[{id:"s1",cat:"hair",name:"حلاقة عادية",desc:"حلاقة شعر عادية بقصات عصرية",dur:20,price:20},{id:"s2",cat:"hair",name:"حلاقة شعر + تحديد لحية",desc:"حلاقة شعر مع تحديد اللحية",dur:30,price:35},{id:"s3",cat:"hair",name:"حلاقة مع غسيل",desc:"حلاقة مع غسيل وتنظيف الشعر",dur:30,price:30},{id:"s4",cat:"hair",name:"حلاقة VIP",desc:"حلاقة فاخرة مع خدمة VIP",dur:50,price:80},{id:"s5",cat:"hair",name:"تنسيق اللحية",desc:"تنسيق وتجميل اللحية",dur:20,price:15},{id:"s6",cat:"hair",name:"تصفيف الشعر",desc:"تصفيف الشعر بالمنتجات المناسبة",dur:15,price:15},{id:"s7",cat:"skin",name:"تنظيف بشرة عميق",desc:"تنظيف عميق ينظف وينعش البشرة",dur:50,price:150},{id:"s8",cat:"skin",name:"تنظيف بشرة سريع",desc:"جلسة سريعة لإشراقة فورية",dur:30,price:80},{id:"s9",cat:"skin",name:"ماسك الذهب",desc:"ماسك فاخر لنضارة استثنائية",dur:25,price:90},{id:"s10",cat:"pedi",name:"بديكير عادي",desc:"عناية أساسية للأقدام والأظافر",dur:45,price:60},{id:"s11",cat:"pedi",name:"بديكير فاخر",desc:"عناية متكاملة مع تقشير وترطيب",dur:60,price:100},{id:"s12",cat:"pedi",name:"بديكير طبي",desc:"علاج تشققات القدم والمسامير",dur:60,price:120},{id:"s13",cat:"pedi",name:"إزالة جلد ميت",desc:"إزالة الجلد الميت من القدمين",dur:30,price:40},{id:"s14",cat:"mass",name:"مساج استرخاء للجسم",desc:"استرخاء عميق يجدد طاقتك",dur:60,price:180},{id:"s15",cat:"mass",name:"مساج رأس",desc:"جلسة قصيرة لتخفيف التوتر",dur:15,price:25},{id:"s16",cat:"mass",name:"مساج علاجي",desc:"مساج متخصص للعضلات المجهدة",dur:60,price:220},{id:"s17",cat:"bath",name:"حمام مغربي كلاسيكي",desc:"تقشير وتنقية بطقوس أصيلة",dur:60,price:200},{id:"s18",cat:"bath",name:"حمام مغربي ملكي",desc:"التجربة الكاملة مع ماسك وتدليك",dur:90,price:300}];for(const ee of Object.values(wr))for(const r of ee.variants||[])r.svcId&&!Ke.some(M=>M.id===r.svcId)&&Ke.push({id:r.svcId,cat:r.cat,name:r.name,desc:r.desc||"",dur:r.dur,price:r.price,hidden:!0});const Lr=[{t:"اختيار الخدمات",ic:'<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"/>'},{t:"اختيار الموظف",ic:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>'},{t:"اختيار الوقت",ic:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>'},{t:"تأكيد الحجز",ic:'<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>'},{t:"الدفع",ic:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>'}],Er={class:"wrap stepper",id:"stepperWrap"},Ar={class:"steps",id:"steps"},Tr=["data-i"],Dr={class:"n"},Pr=["onClick"],jr=["innerHTML"],Ir={__name:"BookingStepper",setup(ee){const{state:r}=pe();function M(T){T<r.step&&(r.step=T)}return(T,z)=>he((n(),a("div",Er,[e("div",Ar,[(n(!0),a(I,null,X(t(Lr),(f,E)=>(n(),a("div",{key:E,class:U(["step",{active:E===t(r).step,done:E<t(r).step}]),"data-i":E},[z[0]||(z[0]=e("div",{class:"bar"},[e("i")],-1)),e("span",Dr,o(E+1),1),e("span",{class:"bubble",onClick:c=>M(E)},[(n(),a("svg",{width:"21",height:"21",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7",innerHTML:f.ic},null,8,jr))],8,Pr),e("label",null,o(f.t),1)],10,Tr))),128))])],512)),[[je,!t(r).done]])}},Hr={class:"branch-strip"},Nr=["src","alt"],Vr={class:"bi"},qr={key:2},Rr={key:0,class:"empty-hint",style:{display:"grid",gap:"10px"}},Yr={class:"cat-row"},Or=["data-cat","onClick"],Ur=["src","alt"],Gr={class:"lbl"},Kr={class:"cat-name"},Wr={key:0,class:"empty-hint"},Qr={key:1,class:"sub-block"},Xr={class:"sub-title"},Jr={class:"sub-title__main"},Zr={class:"tick"},et=["innerHTML"],rt={key:0,class:"empty-hint"},tt={key:1,class:"subs"},nt=["data-svc","onClick"],at={class:"top"},ot={class:"si"},it=["innerHTML"],st={class:"foot"},lt={class:"dur"},dt={class:"prc"},pt={__name:"ServicesStep",setup(ee){const{state:r,hasSvc:M,toggleSvc:T}=pe(),{current:z,openPicker:f}=ye(),{state:E}=qe(),c=p=>nr(p,E.lang),u=J([]),A=J(!0);$e(async()=>{try{const p=await er();u.value=p!=null&&p.status?p.data||[]:[]}catch{u.value=[]}finally{A.value=!1}});const H=w(()=>u.value.map(p=>({id:p.id,name:Se(p,"name",E.lang),image:rr(p.image)||p.feature_image||null}))),q=w(()=>u.value.find(p=>p.id===r.activeCat)||null),m=w(()=>Se(q.value,"name",E.lang)),y=w(()=>Ye(q.value)),O=w(()=>{var p;return(((p=q.value)==null?void 0:p.services)||[]).map(v=>({id:v.id,categoryId:q.value.id,categoryNameT:tr(q.value,"name"),get categoryName(){return c(this.categoryNameT)},icon:y.value,get name(){return Se(v,"name",E.lang)},get desc(){return Se(v,"description",E.lang)},dur:v.duration_min,default_price:v.default_price,branches:v.branches,price:kr(v,z.value)}))}),D=p=>r.services.some(v=>v.categoryId===p),h=w(()=>O.value.filter(p=>M(p.id)).length),C=p=>({"--acc":Oe(p.icon)}),b=p=>Ie(p.icon);return(p,v)=>{var F;return n(),a(I,null,[v[6]||(v[6]=e("div",{class:"panel-head"},[e("h1",null,"اختر الخدمة التي تناسبك"),e("p",null,"يمكنك اختيار خدمة واحدة أو أكثر من أي قسم")],-1)),e("div",Hr,[(F=t(z))!=null&&F.image?(n(),a("img",{key:0,src:t(z).image,alt:t(z).name},null,8,Nr)):P("",!0),e("span",Vr,[t(z)?(n(),a(I,{key:0},[v[1]||(v[1]=L("مكان التنفيذ: ",-1)),e("b",null,o(t(z).name),1)],64)):(n(),a(I,{key:1},[L("يرجى اختيار الفرع لعرض أسعار الخدمات وحجز موعدك")],64)),e("button",{type:"button",class:"branch-picker-link",onClick:v[0]||(v[0]=B=>t(f)())},o(t(z)?"تغيير الفرع":"اختيار الفرع"),1),t(z)?(n(),a("small",qr,o(t(z).address),1)):P("",!0)])]),A.value?(n(),a("div",Rr,[de(He,{height:"64px","border-radius":"12px"}),de(He,{height:"92px","border-radius":"12px"})])):(n(),a(I,{key:1},[e("div",Yr,[(n(!0),a(I,null,X(H.value,B=>(n(),a("div",{key:B.id,class:U(["cat",{sel:t(r).activeCat===B.id,"has-picks":D(B.id)}]),"data-cat":B.id,onClick:G=>t(r).activeCat=B.id},[B.image?(n(),a("img",{key:0,src:B.image,alt:B.name},null,8,Ur)):P("",!0),v[2]||(v[2]=e("span",{class:"chk"},[e("svg",{width:"9",height:"9",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3"},[e("path",{d:"M20 6L9 17l-5-5"})])],-1)),e("span",Gr,[e("span",Kr,o(B.name),1)])],10,Or))),128))]),t(r).activeCat?(n(),a("div",Qr,[e("div",Xr,[e("span",Jr,[L(" خدمات "+o(m.value)+" ",1),e("span",Zr,[(n(),a("svg",{viewBox:"0 0 24 24","aria-hidden":"true",innerHTML:t(Ie)(y.value)},null,8,et))])]),e("small",null,o(h.value?h.value+" مختارة":"اختر خدمة أو أكثر"),1)]),O.value.length?(n(),a("div",tt,[(n(!0),a(I,null,X(O.value,B=>(n(),a("div",{key:B.id,class:U(["sub",{sel:t(M)(B.id)}]),"data-svc":B.id,style:Ee(C(B)),onClick:G=>t(T)(B)},[de(_r,{type:"service",id:B.id},null,8,["id"]),e("div",at,[e("span",ot,[(n(),a("svg",{viewBox:"0 0 24 24","aria-hidden":"true",innerHTML:b(B)},null,8,it))]),e("b",null,o(B.name),1),v[4]||(v[4]=e("span",{class:"chk"},[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3"},[e("path",{d:"M20 6L9 17l-5-5"})])],-1))]),e("small",null,o(B.desc),1),e("div",st,[e("span",lt,"🕐 "+o(B.dur)+" دقيقة",1),e("span",dt,[L(o(t(Y)(B.price))+" ",1),v[5]||(v[5]=e("small",null,"ر.س",-1))])])],14,nt))),128))])):(n(),a("div",rt,"لا توجد خدمات متاحة حاليًا ضمن هذا القسم"))])):(n(),a("div",Wr,[...v[3]||(v[3]=[e("b",null,"اختر خدمة لعرض تفاصيلها",-1),L("اختر إحدى الخدمات الأساسية أعلاه لعرض الخدمات الفرعية المتاحة",-1)])]))],64))],64)}}},ct=We(pt,[["__scopeId","data-v-562dd9a2"]]),ut={class:"mode-grid"},gt=["aria-pressed"],mt=["aria-pressed"],xt={key:0,class:"emp-section emp-section--groups"},ht={class:"emp-cat emp-cat--group"},bt={class:"cat-ico"},vt=["innerHTML"],ft={class:"emp-cat__info"},yt={class:"emp-cat__services"},wt={key:0,class:"empty-hint"},kt={key:1,class:"empty-hint"},_t={key:2,class:"emp-list emp-list--groups"},$t=["onClick"],zt=["onClick"],Mt={key:1,class:"j-note card",style:{display:"flex",gap:"16px","align-items":"center",padding:"20px 24px","border-color":"var(--line)"}},Ct={__name:"EmployeeStep",setup(ee){const{state:r,selSvcs:M,setEmployee:T}=pe(),{current:z}=ye(),f=Le({}),E=Le({}),c=["توفير الوقت","أفضل تقييم متاح","تنفيذ خدمات القسم بنفس الموظف","منع أي تعارض في المواعيد"],u=["اختر موظفًا واحدًا لكل قسم","الموظف المختار ينفذ كل خدمات القسم","تحكم كامل في فريق جلستك"],A=w(()=>{const g=new Map;return M.value.forEach(d=>{const x=String(d.categoryId??d.categoryName??d.id);g.has(x)||g.set(x,{id:x,name:d.categoryName||d.name,icon:d.icon||Ye(d.categoryId),services:[]}),g.get(x).services.push(d)}),[...g.values()]});function H(g){return[g.first_name,g.last_name].filter(Boolean).join(" ")||g.username||"موظف"}function q(g){return{"--acc":Oe(g.icon)}}function m(g){return`${g.services.length} ${g.services.length===1?"خدمة":"خدمات"}`}function y(g){return g.services.map(d=>d.name).join("، ")}function O(g){const d=g.services.map(V=>f[V.id]);if(!d.length||d.some(V=>!Array.isArray(V)))return[];const[x,...S]=d,Z=x.filter(V=>S.every(W=>W.some(oe=>String(oe.id)===String(V.id))));return[...new Map(Z.map(V=>[String(V.id),V])).values()]}function D(g){return g.services.some(d=>E[d.id]||!Array.isArray(f[d.id]))}function h(g){const d=g.services.map(S=>r.emp[S.id]).filter(Boolean);if(d.length!==g.services.length)return null;const x=d[0];return d.every(S=>String(S.id)===String(x.id))?x:null}function C(g,d){var x;return String(((x=h(g))==null?void 0:x.id)??"")===String(d.id??"")}function b(g){const d=g.services.map(x=>M.value.findIndex(S=>String(S.id)===String(x.id))).filter(x=>x>=0);return d.length?Math.min(...d):-1}function p(g){const d=b(g);d!==-1&&M.value.slice(d).forEach(x=>{delete r.time[x.id]})}function v(g,d,{clearTimes:x=!0}={}){g.services.forEach(S=>T(S.id,d)),x&&p(g)}function F(){r.mode==="auto"&&A.value.forEach(g=>{O(g).length&&g.services.forEach(x=>{r.staffOptions[x.id]=f[x.id]||[],T(x.id,{id:null,name:"اختيار تلقائي"})})})}function B(g){const d=r.mode!==g;r.mode=g,d&&(r.time={},r.emp={}),F()}function G(g,d){r.mode="manual",v(g,d)}async function K(g){var d,x;if(!f[g.id]){E[g.id]=!0;try{const S=(d=z.value)!=null&&d.home?0:(x=z.value)==null?void 0:x.id,Z=await mr({branchId:S,serviceId:g.id}),V=(Array.isArray(Z)?Z:[]).map(W=>({id:W.id,name:H(W)}));f[g.id]=[...new Map(V.map(W=>[String(W.id),W])).values()],r.staffOptions[g.id]=f[g.id],F()}catch{f[g.id]=[]}finally{E[g.id]=!1}}}function re(){M.value.forEach(K)}return $e(re),ae(()=>M.value.map(g=>g.id),re),ae(()=>r.mode,F),(g,d)=>(n(),a(I,null,[d[14]||(d[14]=e("div",{class:"panel-head"},[e("h1",null,"اختر الموظف"),e("p",null,"اختر موظفًا واحدًا لكل قسم، وسيتم تطبيقه على كل الخدمات المختارة داخل هذا القسم")],-1)),e("div",ut,[e("div",{class:U(["mode dark",{sel:t(r).mode==="auto"}]),role:"button",tabindex:"0","aria-pressed":t(r).mode==="auto",onClick:d[0]||(d[0]=x=>B("auto")),onKeydown:[d[1]||(d[1]=Fe(x=>B("auto"),["enter"])),d[2]||(d[2]=Fe(Be(x=>B("auto"),["prevent"]),["space"]))]},[d[7]||(d[7]=_e('<span class="chk"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"></path></svg></span><span class="mi"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="m13 2-9 12h7l-1 8 10-13h-7l0-7Z"></path></svg></span><h3>اختيار تلقائي</h3><div class="sub-t">سنختار لك أفضل فريق متاح</div><span class="flag">★ موصى به</span>',5)),e("ul",null,[(n(),a(I,null,X(c,(x,S)=>e("li",{key:S},[d[6]||(d[6]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.6"},[e("path",{d:"M20 6L9 17l-5-5"})],-1)),L(" "+o(x),1)])),64))])],42,gt),e("div",{class:U(["mode",{sel:t(r).mode==="manual"}]),role:"button",tabindex:"0","aria-pressed":t(r).mode==="manual",onClick:d[3]||(d[3]=x=>B("manual")),onKeydown:[d[4]||(d[4]=Fe(x=>B("manual"),["enter"])),d[5]||(d[5]=Fe(Be(x=>B("manual"),["prevent"]),["space"]))]},[d[9]||(d[9]=_e('<span class="chk"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" stroke-width="3"><path d="M20 6L9 17l-5-5"></path></svg></span><span class="mi"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span><h3>اختيار موظف محدد</h3><div class="sub-t">اختر موظفًا لكل قسم</div><span class="flag">تحكم كامل</span>',5)),e("ul",null,[(n(),a(I,null,X(u,(x,S)=>e("li",{key:S},[d[8]||(d[8]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.6"},[e("path",{d:"M20 6L9 17l-5-5"})],-1)),L(" "+o(x),1)])),64))])],42,mt)]),t(r).mode==="manual"?(n(),a("div",xt,[(n(!0),a(I,null,X(A.value,x=>(n(),a("div",{key:x.id,class:"emp-row emp-row--group",style:Ee(q(x))},[e("div",ht,[e("span",bt,[(n(),a("svg",{viewBox:"0 0 24 24","aria-hidden":"true",innerHTML:t(Ie)(x.icon)},null,8,vt))]),e("span",ft,[e("b",null,o(x.name),1),e("small",null,o(m(x)),1),e("span",yt,o(y(x)),1)])]),D(x)?(n(),a("div",wt,[de(He,{height:"44px","border-radius":"8px"})])):O(x).length?(n(),a("div",_t,[e("button",{type:"button",class:"emp any",onClick:Be(S=>G(x,O(x)[0]),["stop"])},[...d[10]||(d[10]=[_e('<span class="av" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span><b>أي موظف</b><span class="rate">الأنسب تلقائيًا</span>',3)])],8,$t),(n(!0),a(I,null,X(O(x),S=>(n(),a("button",{key:S.id,type:"button",class:U(["emp",{sel:C(x,S)}]),onClick:Be(Z=>G(x,S),["stop"])},[d[11]||(d[11]=e("span",{class:"chk"},[e("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"#fff","stroke-width":"3"},[e("path",{d:"M20 6L9 17l-5-5"})])],-1)),d[12]||(d[12]=e("span",{class:"av","aria-hidden":"true"},null,-1)),e("b",null,o(S.name),1)],10,zt))),128))])):(n(),a("div",kt,"لا يوجد موظف متاح يمكنه تنفيذ كل خدمات هذا القسم"))],4))),128))])):P("",!0),t(r).mode==="auto"?(n(),a("div",Mt,[...d[13]||(d[13]=[_e('<span style="flex:none;width:44px;height:44px;border-radius:13px;display:grid;place-items:center;background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M13 2L3 14h9l-1 8 10-12h-9z"></path></svg></span><p style="font-size:13.5px;color:#5c5442;line-height:1.9;"><b style="color:var(--ink);">تم اختيار موظف واحد مناسب لكل قسم تلقائيًا.</b> سيتم تنفيذ كل خدمات القسم بنفس الموظف، وتقدر تشوف الأوقات في الخطوة الجاية.</p>',2)])])):P("",!0)],64))}},St={class:"card branch-strip"},Ft={class:"cells"},Bt={class:"cell"},Lt={class:"cell"},Et={class:"loyalty-preview","aria-live":"polite"},At={key:0,"data-no-i18n":"",style:{color:"#26714d"}},Tt={class:"card cal"},Dt={class:"cal-head"},Pt={class:"cal-cells"},jt=["disabled","onClick"],It={class:"dow"},Ht={class:"dnum"},Nt={key:0,class:"empty-hint",style:{"margin-top":"10px"}},Vt={class:"date-line"},qt={class:"card detail-card time-start-card",style:{"margin-top":"14px"}},Rt={class:"periods booking-periods"},Yt={key:1,class:"empty-hint"},Ot={key:2,class:"empty-hint"},Ut={key:3,class:"empty-hint"},Gt={key:4,class:"slots initial-slots"},Kt=["onClick"],Wt={key:0,class:"tag"},Qt={key:1,"data-no-i18n":"",style:{display:"block",color:"#26714d","font-size":"11px","white-space":"normal"}},Xt={key:5,class:"best-slot"},Jt={key:0,class:"session-plan"},Zt={class:"plan-track"},en={key:0,class:"plan-gap"},rn={class:"plan-icon"},tn=["innerHTML"],nn={class:"t"},an={key:0,class:"plan-note plan-note--pending"},on={key:1,class:"plan-note plan-note--warn"},sn={key:2,class:"plan-note"},ln={__name:"TimeStep",setup(ee){const{current:r}=ye(),{state:M}=qe(),{bonus:T}=$r(),z=s=>{var i,l;return!((i=r.value)!=null&&i.home)&&c.date?T((l=r.value)==null?void 0:l.id,Z(c.date),s):0},f=["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],E=["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],{state:c,selSvcs:u,totalDur:A,priceParts:H,setEmployee:q,setTime:m}=pe(),y=J(5),O=w(()=>Math.floor(H.value.total/100)*y.value),D=w(()=>u.value.reduce((s,i)=>s+z(c.time[i.id]),0)),h=new Date;h.setHours(0,0,0,0);const C=J(new Date(h)),b=J("all"),p=Le({}),v=Le({}),F=Le({}),B=w(()=>Array.from({length:7},(s,i)=>{const l=new Date(C.value);return l.setDate(l.getDate()+i),l}));w(()=>C.value.getTime()<=h.getTime());const G=w(()=>{const s=B.value;return s[0].getMonth()===s[6].getMonth()?`${s[0].getDate()} - ${s[6].getDate()} ${E[s[0].getMonth()]}`:`${s[0].getDate()} ${E[s[0].getMonth()]} - ${s[6].getDate()} ${E[s[6].getMonth()]}`}),K=s=>s<h,re=s=>c.date&&s.getTime()===c.date.getTime(),g=w(()=>{const s=new Map;return u.value.forEach(i=>{const l=String(i.categoryId??i.categoryName??i.id);s.has(l)||s.set(l,{id:l,name:i.categoryName||i.name,icon:i.icon||Ye(i.categoryId),services:[]}),s.get(l).services.push(i)}),[...s.values()]}),d=w(()=>u.value),x=w(()=>d.value.filter(i=>c.time[i.id]).sort((i,l)=>V(c.time[i.id])-V(c.time[l.id]))[0]||[...d.value].sort((i,l)=>(V(oe(p[i.id])[0])??1/0)-(V(oe(p[l.id])[0])??1/0))[0]||null);w(()=>g.value[0]||null);const S=w(()=>x.value?c.time[x.value.id]:"");function Z(s){return`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}-${String(s.getDate()).padStart(2,"0")}`}function V(s){if(!s||typeof s!="string")return null;const[i,l]=s.split(":").map(Number);return!Number.isFinite(i)||!Number.isFinite(l)?null:i*60+l}function W(s){if(!Number.isFinite(s))return"";const i=1440,l=(Math.round(s)%i+i)%i;return`${String(Math.floor(l/60)).padStart(2,"0")}:${String(l%60).padStart(2,"0")}`}function oe(s){return[...new Set((Array.isArray(s)?s:[]).filter(i=>V(i)!==null))].sort((i,l)=>V(i)-V(l))}function ce(s,{apply:i=!1}={}){const l=window.SamiBookingJourney.schedule(d.value,N=>oe(p[N.id]),s);return i&&(c.time={},l.rows.forEach(N=>{var ie;m(N.service.id,N.start),c.mode==="auto"&&((ie=v[N.service.id])!=null&&ie[N.start])&&q(N.service.id,v[N.service.id][N.start])})),l}function ue(){!S.value||!ke.value||ce(S.value,{apply:!0})}function ge(s){ce(s,{apply:!0})}function j(s){return{"--acc":Oe(s.icon)}}function $(s){return s.services.reduce((i,l)=>i+(Number(l.dur)||0),0)}function _(s){const i=s.services.map(N=>c.emp[N.id]).filter(Boolean);if(!i.length)return null;const l=i[0];return i.every(N=>String(N.id)===String(l.id)),l}function k(s){return`${s.services.length} ${s.services.length===1?"خدمة":"خدمات"}`}function Q(s){K(s)||(c.date=s,c.time={},Object.keys(p).forEach(i=>{delete p[i]}))}async function ne(s){var N;const i=c.emp[s.id];if(!c.date||!i){delete p[s.id];return}const l=Z(c.date);F[s.id]=!0;try{const ie=c.mode==="auto"?c.staffOptions[s.id]||[]:[i],R=await Promise.all(ie.filter(se=>(se==null?void 0:se.id)!=null).map(async se=>({candidate:se,times:await xr({date:l,staffId:se.id,durationMin:s.dur}).catch(()=>[])}))),te={};R.forEach(({candidate:se,times:Ce})=>{oe(Ce).forEach(Ge=>{te[Ge]||(te[Ge]=se)})});const Ue=Object.keys(te);c.date&&Z(c.date)===l&&((N=c.emp[s.id])==null?void 0:N.id)===i.id&&(p[s.id]=oe(Ue),v[s.id]=te,ue())}catch{p[s.id]=[],ue()}finally{F[s.id]=!1,ue()}}ae(()=>c.date,()=>{b.value="all",u.value.forEach(ne)}),ae(()=>u.value.map(s=>{var i;return`${s.id}:${(i=c.emp[s.id])==null?void 0:i.id}`}),()=>u.value.forEach(ne)),$e(async()=>{var s;u.value.forEach(ne);try{const i=await Ze();y.value=Math.max(Number((s=i==null?void 0:i.data)==null?void 0:s.points_per_100)||5,1)}catch{}});const me=w(()=>c.date?`${f[c.date.getDay()]} ${c.date.getDate()} ${E[c.date.getMonth()]} ${c.date.getFullYear()}`:"اختر تاريخًا من التقويم"),Ae=w(()=>d.value.some(s=>F[s.id]||!Array.isArray(p[s.id]))),we=w(()=>oe(d.value.flatMap(s=>p[s.id]||[]))),ze=w(()=>we.value.filter(s=>{const i=V(s);return b.value==="am"?i<720:b.value==="pm"?i>=720:!0})),ke=w(()=>!!c.date&&d.value.every(s=>Array.isArray(p[s.id])&&!F[s.id])),Te=w(()=>!!S.value&&d.value.some(s=>F[s.id]||!Array.isArray(p[s.id]))),De=w(()=>S.value?d.value.find(s=>!c.time[s.id]):null),ve=w(()=>ke.value&&we.value.find(s=>ce(s).complete)||""),Me=w(()=>{const s=[];let i=null;return window.SamiBookingJourney.groupsByTime(g.value,c.time,u.value).forEach(l=>{const N=l.services.map(Ce=>V(c.time[Ce.id])),ie=N.every(Ce=>Ce!==null),R=N[0];if(!ie){s.push({type:"group",key:`group-${l.key}`,group:l,name:l.name,icon:l.icon,style:j(l),duration:$(l),services:l.services,employee:_(l),pending:!0});return}i!==null&&R>i&&s.push({type:"gap",key:`gap-${s.length}`,start:W(i),end:W(R),duration:R-i});const te=l.services[l.services.length-1],se=V(c.time[te.id])+(Number(te.dur)||0);s.push({type:"group",key:`group-${l.key}`,group:l,name:l.name,icon:l.icon,style:j(l),start:W(R),end:W(se),duration:$(l),services:l.services,employee:_(l),pending:!1}),i=se}),s}),Pe=w(()=>{const s=Me.value.filter(l=>l.type==="group"&&!l.pending),i=s[s.length-1];return(i==null?void 0:i.end)||""});return(s,i)=>(n(),a(I,null,[i[17]||(i[17]=e("div",{class:"panel-head"},[e("h1",null,"اختر وقت بداية الجلسة"),e("p",null,"اختر أول موعد فقط، وسيتم ترتيب باقي الأقسام تلقائيًا حسب مدة كل قسم والأوقات المتاحة.")],-1)),e("div",St,[i[6]||(i[6]=e("div",{class:"bi"},[e("b",null,"ملخص جلستك"),e("small",null,"قبل اختيار الوقت")],-1)),e("div",Ft,[e("div",Bt,[e("b",null,o(t(u).length),1),i[4]||(i[4]=L("الخدمات",-1))]),e("div",Lt,[e("b",null,o(t(be)(t(A))),1),i[5]||(i[5]=L("المدة الإجمالية",-1))])])]),e("div",Et,[i[9]||(i[9]=e("h3",null,[e("span",{"aria-hidden":"true"},"✨"),L(" مكافأة نقاط الولاء لهذه الجلسة")],-1)),e("p",null,[i[7]||(i[7]=L("ستحصل على ",-1)),e("b",null,o(t(Y)(O.value))+" نقطة ولاء",1),i[8]||(i[8]=L(" عند إتمام هذا الحجز.",-1))]),D.value?(n(),a("p",At,o(t(M).lang==="en"?`Plus ${D.value} quiet hours points when the eligible bookings are completed.`:`بالإضافة إلى ${D.value} نقطة أوقات هدوء عند اكتمال الحجوزات المؤهلة.`),1)):P("",!0),e("strong",null,"يمنحك نظام الولاء "+o(t(Y)(y.value))+" نقطة مقابل كل 100 ر.س مدفوعة.",1)]),e("div",Tt,[e("div",Dt,[e("b",null,o(G.value),1)]),e("div",Pt,[(n(!0),a(I,null,X(B.value,(l,N)=>(n(),a("button",{key:N,disabled:K(l),class:U({sel:re(l),avail:!K(l)}),onClick:ie=>Q(l)},[e("span",It,o(f[l.getDay()].slice(0,3)),1),e("span",Ht,o(l.getDate()),1)],10,jt))),128))]),i[10]||(i[10]=e("div",{class:"cal-legend"},[e("span",null,[e("i",{style:{background:"var(--green)"}}),L(" تتوفر مواعيد")]),e("span",null,[e("i",{style:{background:"#D8D0BC"}}),L(" غير متاح")])],-1))]),t(c).date?(n(),a(I,{key:1},[e("div",Vt,"📅 "+o(me.value),1),e("div",qt,[i[13]||(i[13]=e("h4",null,[L("وقت بداية الجلسة "),e("small",{style:{"font-weight":"400",color:"var(--mute)"}},"سننسق باقي الأقسام بعده")],-1)),P("",!0),e("div",Rt,[e("button",{class:U(["period",{sel:b.value==="all"}]),onClick:i[0]||(i[0]=l=>b.value="all")},"🗓️ كل اليوم",2),e("button",{class:U(["period",{sel:b.value==="am"}]),onClick:i[1]||(i[1]=l=>b.value="am")},"☀️ صباحًا",2),e("button",{class:U(["period",{sel:b.value==="pm"}]),onClick:i[2]||(i[2]=l=>b.value="pm")},"🌇 مساءً",2)]),i[14]||(i[14]=e("div",{class:"available-times-title"},"الأوقات المتاحة",-1)),Ae.value||x.value&&!Array.isArray(p[x.value.id])?(n(),a("div",Yt,[de(He,{height:"44px","border-radius":"8px"})])):we.value.length?ze.value.length?(n(),a("div",Gt,[(n(!0),a(I,null,X(ze.value,l=>(n(),a("button",{key:l,class:U(["slot",{sel:S.value===l}]),onClick:N=>ge(l)},[ve.value===l?(n(),a("span",Wt,"الأفضل")):P("",!0),L(" "+o(t(le)(l))+" ",1),z(l)?(n(),a("small",Qt,o(t(M).lang==="en"?`Quiet hours: +${z(l)} points on completion`:`وقت هدوء: +${z(l)} نقطة عند إكمال الحجز`),1)):P("",!0)],10,Kt))),128))])):(n(),a("div",Ut,"لا توجد أوقات في هذه الفترة")):(n(),a("div",Ot,"لا توجد أوقات متاحة لهذا اليوم")),ve.value&&S.value!==ve.value?(n(),a("div",Xt,[e("span",null,[i[12]||(i[12]=L("أفضل بداية متاحة اليوم: ",-1)),e("b",null,o(t(le)(ve.value)),1)]),e("button",{onClick:i[3]||(i[3]=l=>ge(ve.value))},"اختيار")])):P("",!0)]),S.value?(n(),a("div",Jt,[i[16]||(i[16]=e("h4",null,[e("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2L3 14h7l-1 8 10-12h-7l1-8z"})]),L(" خطة تنفيذ الجلسة ")],-1)),e("div",Zt,[(n(!0),a(I,null,X(Me.value,l=>{var N;return n(),a(I,{key:l.key},[l.type==="gap"?(n(),a("div",en,[i[15]||(i[15]=e("span",null,"فاصل انتظار",-1)),e("b",null,o(t(le)(l.start))+" - "+o(t(le)(l.end)),1),e("small",null,o(t(be)(l.duration)),1)])):(n(),a("div",{key:1,class:U(["plan-item plan-item--group",{pending:l.pending}]),style:Ee(l.style)},[e("span",rn,[(n(),a("svg",{viewBox:"0 0 24 24","aria-hidden":"true",innerHTML:t(Ie)(l.icon)},null,8,tn))]),e("b",null,o(l.name),1),e("small",null,"مع "+o(((N=l.employee)==null?void 0:N.name)||"-"),1),e("span",nn,o(l.pending?"بانتظار وقت متاح":`${t(le)(l.start)} - ${t(le)(l.end)}`),1),e("small",null,o(k(l.group))+" · "+o(t(be)(l.duration)),1)],6))],64)}),128))]),Te.value?(n(),a("div",an,"جاري تنسيق باقي الأقسام حسب الأوقات المتاحة.")):De.value?(n(),a("div",on,"لم نجد وقتًا متاحًا لـ "+o(De.value.name)+" بعد هذا الموعد. اختر بداية أبكر أو يومًا آخر.",1)):(n(),a("div",sn,"تم تنسيق الجلسة تلقائيًا، والنهاية المتوقعة "+o(t(le)(Pe.value))+".",1))])):P("",!0)],64)):(n(),a("div",Nt,[...i[11]||(i[11]=[e("b",null,"ابدأ باختيار التاريخ",-1),L("اختر يومًا من التقويم لعرض الأوقات المتاحة",-1)])]))],64))}},dn={key:0,role:"status"},pn={key:1,role:"status"},cn={__name:"HomeVisitMap",setup(ee){const{state:r}=pe(),M=J(null),T=J(""),z=J(!0);let f,E=!1;const c=u=>{T.value=u.detail,z.value=!1};return $e(async()=>{window.addEventListener("sami-map-error",c);try{if(!fe.maps_key)throw new Error("الخريطة غير متاحة حالياً. يمكنك استخدام موقعي الحالي لتحديد عنوان الزيارة.");if(window.SamiHomeMap||await new Promise((u,A)=>{const H=document.createElement("script");H.src=ar("/js/home-service-map.js"),H.onload=u,H.onerror=()=>A(new Error("تعذر تحميل الخريطة. يمكنك استخدام موقعي الحالي.")),document.head.appendChild(H)}),E)return;if(f=await window.SamiHomeMap.create(M.value,{key:fe.maps_key,latitude:fe.latitude,longitude:fe.longitude,radiusKm:fe.radius_km,onSelect:u=>{r.homeLatitude=u.latitude,r.homeLongitude=u.longitude}}),E){f==null||f.destroy();return}f==null||f.select(r.homeLatitude,r.homeLongitude)}catch(u){T.value=u.message}finally{z.value=!1}}),ae(()=>[r.homeLatitude,r.homeLongitude],([u,A])=>f==null?void 0:f.select(u,A)),Qe(()=>{E=!0,f==null||f.destroy(),window.removeEventListener("sami-map-error",c)}),(u,A)=>(n(),a("div",null,[A[0]||(A[0]=e("p",null,"اضغط على الخريطة لتحديد موقع الزيارة داخل نطاق التغطية المظلل.",-1)),z.value?(n(),a("p",dn,"جارٍ تحميل الخريطة...")):P("",!0),T.value?(n(),a("p",pn,o(T.value),1)):P("",!0),he(e("div",{ref_key:"element",ref:M,"aria-label":"خريطة موقع الزيارة ونطاق التغطية",style:{height:"340px",width:"100%","border-radius":"12px"}},null,512),[[je,!T.value]])]))}},un={class:"card",style:{padding:"20px","margin-bottom":"20px"},dir:"rtl"},gn=["value"],mn=["href"],xn={key:1,role:"alert"},hn={key:2,role:"alert"},bn={__name:"HomeVisitLocation",setup(ee){const{state:r,homeFee:M,homeCovered:T}=pe(),{state:z}=qe(),f=J("");function E(){if(f.value="",!navigator.geolocation){f.value="تحديد الموقع غير متاح؛ أدخل الإحداثيات.";return}navigator.geolocation.getCurrentPosition(c=>{r.homeLatitude=c.coords.latitude,r.homeLongitude=c.coords.longitude},()=>{f.value="تعذر تحديد الموقع. اسمح بالوصول للموقع أو أدخل الإحداثيات."})}return(c,u)=>(n(),a("section",un,[u[7]||(u[7]=e("h3",null,"عنوان الزيارة المنزلية",-1)),e("label",null,[u[4]||(u[4]=L("المدينة ",-1)),he(e("select",{"onUpdate:modelValue":u[0]||(u[0]=A=>t(r).homeCityId=A),required:""},[u[3]||(u[3]=e("option",{value:"",disabled:""},"اختر المدينة",-1)),(n(!0),a(I,null,X(t(fe).cities,A=>(n(),a("option",{key:A.id,value:A.id},o(t(Se)(A,"name",t(z).lang))+" — "+o(A.home_service_fee)+" ر.س",9,gn))),128))],512),[[or,t(r).homeCityId]])]),e("p",null,"رسوم الزيارة: "+o(t(M))+" ر.س (قبل الضريبة)",1),e("button",{type:"button",onClick:E},"استخدام موقعي الحالي"),e("label",null,[u[5]||(u[5]=L("خط العرض ",-1)),he(e("input",{"onUpdate:modelValue":u[1]||(u[1]=A=>t(r).homeLatitude=A),type:"number",step:"any",min:"-90",max:"90",required:""},null,512),[[Ve,t(r).homeLatitude]])]),e("label",null,[u[6]||(u[6]=L("خط الطول ",-1)),he(e("input",{"onUpdate:modelValue":u[2]||(u[2]=A=>t(r).homeLongitude=A),type:"number",step:"any",min:"-180",max:"180",required:""},null,512),[[Ve,t(r).homeLongitude]])]),t(r).homeLatitude!==""&&t(r).homeLongitude!==""?(n(),a("a",{key:0,href:`https://maps.google.com/?q=${Number(t(r).homeLatitude)},${Number(t(r).homeLongitude)}`,target:"_blank",rel:"noopener"},"عرض موقع الزيارة على خرائط جوجل",8,mn)):P("",!0),de(cn),e("p",null,"التغطية حتى "+o(t(fe).radius_km)+" كم من المركز الموضح.",1),t(T)?P("",!0):(n(),a("p",xn,"اختر المدينة وحدد موقعاً داخل نطاق التغطية للمتابعة.")),f.value?(n(),a("p",hn,o(f.value),1)):P("",!0)]))}},vn={class:"card detail-card"},fn={class:"d-grid"},yn={class:"d-cell"},wn={class:"d-cell"},kn={class:"d-cell"},_n={class:"d-cell"},$n={class:"card detail-card"},zn={class:"timeline-cards"},Mn={class:"tl-main"},Cn={class:"with"},Sn={class:"tl-time"},Fn={class:"tm"},Bn={class:"dr"},Ln={key:1,class:"card detail-card products-detail-card"},En={class:"upsell"},An=["src","alt"],Tn={class:"inf"},Dn={class:"p"},Pn=["disabled","onClick"],jn={__name:"ConfirmStep",setup(ee){const{state:r,selSvcs:M,totalDur:T}=pe(),{current:z}=ye(),{user:f,isAuthenticated:E}=Re(),{state:c,products:u,addToCart:A,setQty:H}=Xe();$e(()=>{E.value&&f.value&&!r.cust.name&&(r.cust.name=[f.value.first_name,f.value.last_name].filter(Boolean).join(" "),r.cust.phone=f.value.mobile||"",r.cust.mail=f.value.email||"")});const q=w(()=>r.date?Ne(r.date):""),m=w(()=>{const C=new Map;M.value.forEach(p=>{const v=String(p.categoryId??p.categoryName??p.id);C.has(v)||C.set(v,{id:v,name:p.categoryName||p.name,services:[]}),C.get(v).services.push(p)});const b=p=>{if(!p)return Number.MAX_SAFE_INTEGER;const[v,F]=String(p).split(":").map(Number);return Number.isFinite(v)&&Number.isFinite(F)?v*60+F:Number.MAX_SAFE_INTEGER};return window.SamiBookingJourney.groupsByTime([...C.values()],r.time,M.value).map(p=>{var B;const v=[...p.services].sort((G,K)=>b(r.time[G.id])-b(r.time[K.id])),F=[...new Set(v.map(G=>{var K;return(K=r.emp[G.id])==null?void 0:K.name}).filter(Boolean))];return{...p,services:v,start:r.time[(B=v[0])==null?void 0:B.id]||"",duration:v.reduce((G,K)=>G+(Number(K.dur)||0),0),price:v.reduce((G,K)=>G+(Number(K.price)||0),0),employees:F}}).sort((p,v)=>b(p.start)-b(v.start))}),y=J([]);ae(()=>u.value.map(C=>`${C.id}:${C.stockQty}`).join(","),()=>{y.value=Sr(u.value).map(C=>C.id)},{immediate:!0});const O=w(()=>y.value.map(C=>u.value.find(b=>b.id===C)).filter(Boolean).map(C=>({id:C.id,name:C.n,desc:C.d,price:C.pr,img:C.image||C.img||"/images/generated/products/care-set-card-hq.png"})));function D(C){return C.id!=null&&!!c.cart[C.id]}function h(C){C.id!=null&&(D(C)?H(C.id,0):A(C.id))}return(C,b)=>{var p,v;return Je("RouterLink"),n(),a(I,null,[de(zr,{booking:""}),(p=t(z))!=null&&p.home?(n(),xe(bn,{key:0})):P("",!0),b[20]||(b[20]=e("div",{class:"panel-head"},[e("h1",null,"تأكيد الحجز"),e("p",null,"راجع تفاصيل جلستك قبل تأكيد الحجز والدفع")],-1)),e("div",vn,[b[8]||(b[8]=e("h4",null,[e("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[e("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),e("path",{d:"M16 2v4M8 2v4M3 10h18"})]),L(" تفاصيل الموعد")],-1)),e("div",fn,[e("div",yn,[b[4]||(b[4]=e("small",null,"📍 الفرع",-1)),e("b",null,o(((v=t(z))==null?void 0:v.name)||"—"),1)]),e("div",wn,[b[5]||(b[5]=e("small",null,"📅 التاريخ",-1)),e("b",null,o(q.value),1)]),e("div",kn,[b[6]||(b[6]=e("small",null,"⏱️ المدة الإجمالية",-1)),e("b",null,o(t(be)(t(T))),1)]),e("div",_n,[b[7]||(b[7]=e("small",null,"✂️ عدد الخدمات",-1)),e("b",null,o(t(M).length),1)])])]),e("div",$n,[b[9]||(b[9]=e("h4",null,[e("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[e("circle",{cx:"12",cy:"12",r:"9"}),e("path",{d:"M12 7v5l3 3"})]),L(" تفاصيل الجلسة")],-1)),e("div",zn,[(n(!0),a(I,null,X(m.value,F=>(n(),a("div",{key:F.key,class:"tl"},[e("div",Mn,[e("b",null,o(F.name),1),e("div",Cn,"مع "+o(F.employees.join("، ")||"—"),1)]),e("div",Sn,[e("span",Fn,o(t(le)(F.start)),1),e("span",Bn,o(F.duration)+" دقيقة · "+o(t(Y)(F.price))+" ر.س",1)])]))),128))])]),O.value.length?(n(),a("div",Ln,[b[10]||(b[10]=e("h4",null,[e("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[e("path",{d:"M12 2l2.9 6.2 6.6.8-4.9 4.6 1.3 6.6L12 17l-5.9 3.2 1.3-6.6L2.5 9l6.6-.8z"})]),L(" منتجات مناسبة لجلستك")],-1)),e("div",En,[(n(!0),a(I,null,X(O.value,F=>(n(),a("div",{key:F.id||F.name,class:U(["up",{added:D(F)}])},[e("img",{src:F.img,alt:F.name,loading:"lazy"},null,8,An),e("span",Tn,[e("b",null,o(F.name),1),e("small",null,o(F.desc),1),e("span",Dn,o(t(Y)(F.price))+" ر.س",1)]),e("button",{type:"button",disabled:F.id==null,onClick:B=>h(F)},o(D(F)?"✓ أضيف":"إضافة"),9,Pn)],2))),128))])])):P("",!0),P("",!0)],64)}}},In={class:"card detail-card"},Hn={key:0,class:"cod-deposit-alert"},Nn={class:"card detail-card payment-rewards-card"},Vn={key:0,role:"status"},qn={key:1,role:"alert"},Rn={class:"rewards"},Yn={class:"gift-code-box"},On={class:"rt"},Un={class:"ri"},Gn=["innerHTML"],Kn=["max","value","disabled"],Wn={key:0,class:"hint"},Qn={class:"rt"},Xn={class:"ri"},Jn=["innerHTML"],Zn=["max","value","disabled"],ea={class:"hint"},ra={class:"coupon"},ta={class:"ci"},na=["innerHTML"],aa=["onKeydown"],oa=["disabled"],ia={class:"reward-total"},sa={key:0},la={class:"trust-row"},da={class:"ti"},pa=["innerHTML"],ca={__name:"PayStep",setup(ee){const{state:r,priceParts:M,selSvcs:T,pointValue:z,couponDiscount:f,walletDiscount:E,loyaltyPointsUsed:c,loyaltyDiscount:u,payableTotal:A}=pe(),H=J(!1);let q=0;const{token:m}=Re(),y=J(!1),O=J(!1);let D=0;async function h(){const j=++D;if(r.walletBalance=null,r.loyaltyPoints=null,O.value=!1,y.value=!!m.value,!!m.value)try{const $=await Cr();if(j!==D)return;r.walletBalance=$.wallet,r.loyaltyPoints=$.loyalty_points}catch{j===D&&(O.value=!0)}finally{j===D&&(y.value=!1)}}ae(m,h,{immediate:!0}),Qe(()=>{D++});async function C(j){await h(),(j==null?void 0:j.type)==="value"&&!r.rewards.useWallet&&V()}$e(async()=>{var j;try{const $=await Ze();r.pointValue=Number(((j=$==null?void 0:$.data)==null?void 0:j.point_value)??.5)||.5}catch{}});const b=w(()=>Math.max(Number(r.walletBalance)||0,0)),p=w(()=>Math.max(parseInt(r.loyaltyPoints,10)||0,0)),v=w(()=>Math.max(M.value.total-f.value,0)),F=w(()=>Math.min(E.value,v.value)),B=w(()=>Math.max(M.value.total-f.value-F.value,0)),G=w(()=>Math.min(p.value,Math.ceil(B.value/z.value))),K=w(()=>F.value>0||c.value>0),re=w(()=>Math.round((M.value.total*.3+Number.EPSILON)*100)/100),g=w(()=>b.value>=re.value),d=w(()=>ir.methods({total:M.value.total,walletBalance:b.value,payable:A.value,hasRewards:K.value}));ae(d,j=>{r.pay&&!j.some($=>$.id===r.pay&&$.enabled)&&(r.pay=null)},{immediate:!0}),ae([g,K,A],()=>{K.value&&r.pay==="cod"?r.pay=A.value>0?"card":null:!g.value&&r.pay==="cod"&&(r.pay=null)});const x=[["ضمان الجودة","نضمن لك أفضل تجربة",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>'],["دفع آمن","تقنيات تشفير متقدمة",'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>'],["حماية البيانات","بياناتك محمية بالكامل",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'],["دعم فوري","فريق دعم جاهز لخدمتك",'<path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>']],S={wallet:'<path d="M18 8V7a2 2 0 00-2-2H5a2 2 0 000 4h14a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2V7"/><path d="M16 13h.01"/>',gift:'<path d="M20 12v8H4v-8"/><path d="M2 7h20v5H2z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 110-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 100-5C13 2 12 7 12 7z"/>',coupon:'<path d="M4 7a2 2 0 012-2h12a2 2 0 012 2v3a2 2 0 000 4v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3a2 2 0 000-4z"/><path d="M9 9h.01M15 15h.01M16 8l-8 8"/>'};function Z(j,$){const _=Number(j);return Number.isFinite(_)?Math.max(0,Math.min(_,$)):0}function V(){r.walletBalance!==null&&(r.rewards.useWallet=!r.rewards.useWallet,r.rewards.useWallet?r.rewards.walletAmount=Z(r.rewards.walletAmount||v.value,Math.min(b.value,v.value)):r.rewards.walletAmount=0)}function W(j){r.rewards.walletAmount=Z(j,Math.min(b.value,v.value)),r.rewards.useWallet=r.rewards.walletAmount>0}function oe(){r.loyaltyPoints!==null&&(r.rewards.useLoyalty=!r.rewards.useLoyalty,r.rewards.useLoyalty?r.rewards.loyaltyPoints=Math.min(r.rewards.loyaltyPoints||G.value,G.value):r.rewards.loyaltyPoints=0)}function ce(j){const $=Math.max(0,Math.min(parseInt(j,10)||0,G.value));r.rewards.loyaltyPoints=$,r.rewards.useLoyalty=$>0}async function ue(){const j=r.rewards.couponCode.trim();if(!j){r.rewards.couponStatus="bad",r.rewards.couponMessage="أدخل كود الخصم أولًا";return}H.value=!0;const $=++q;try{const _=await br(j,T.value.map(Q=>Q.id));if($!==q||r.rewards.couponCode.trim()!==j)return;if(!(_!=null&&_.valid)){r.rewards.couponApplied="",r.rewards.couponDiscount=0,r.rewards.couponStatus="bad",r.rewards.couponMessage=(_==null?void 0:_.message)||"كود الخصم غير صالح";return}const k=Math.max(0,Number(_.effective_discount)||0);r.rewards.couponCode=j,r.rewards.couponApplied=j,r.rewards.couponDiscount=k,r.rewards.couponStatus="ok",r.rewards.couponMessage=`تم تطبيق خصم ${Y(Math.round(k))} ر.س`}catch(_){r.rewards.couponApplied="",r.rewards.couponDiscount=0,r.rewards.couponStatus="bad",r.rewards.couponMessage=_.message||"تعذّر التحقق من الكوبون"}finally{H.value=!1}}function ge(){q++,r.rewards.couponApplied="",r.rewards.couponDiscount=0,r.rewards.couponStatus="",r.rewards.couponMessage=""}return ae(()=>T.value.map(j=>`${j.id}:${j.price}`).join("|"),ge),ae([b,v],()=>{r.rewards.useWallet&&W(r.rewards.walletAmount)}),ae(G,()=>{r.rewards.useLoyalty&&ce(r.rewards.loyaltyPoints)}),(j,$)=>(n(),a(I,null,[$[14]||($[14]=e("div",{class:"panel-head"},[e("h1",null,"الدفع"),e("p",null,"اختر طريقة الدفع المناسبة وأكمل حجزك")],-1)),e("div",In,[$[7]||($[7]=e("h4",null,"اختر طريقة الدفع",-1)),de(hr,{modelValue:t(r).pay,"onUpdate:modelValue":$[0]||($[0]=_=>t(r).pay=_),methods:d.value},null,8,["modelValue","methods"]),t(r).walletBalance!==null&&!g.value&&!K.value?(n(),a("div",Hn,[$[5]||($[5]=L(" 💡 ",-1)),$[6]||($[6]=e("b",null,"ملاحظة الدفع عند الوصول:",-1)),L(" يتطلب توفر عربون بنسبة 30% ("+o(t(Y)(re.value))+" ر.س) في رصيد محفظتك لتأكيد الحجز. رصيدك الحالي: "+o(t(Y)(b.value))+" ر.س. ",1)])):P("",!0),$[8]||($[8]=e("div",{class:"secure-line"},"🔒 جميع عمليات الدفع آمنة ومشفرة",-1))]),e("div",Nn,[$[13]||($[13]=e("h4",null,[e("span",{class:"step-dot"},"2"),L(" استخدام العروض و المكافآت")],-1)),y.value?(n(),a("p",Vn,"جارٍ تحميل رصيد المحفظة ونقاط الولاء...")):O.value?(n(),a("p",qn,[$[9]||($[9]=L("تعذر تحميل الرصيد. ",-1)),e("button",{type:"button",onClick:h},"إعادة المحاولة")])):P("",!0),e("div",Rn,[e("div",Yn,[de(Mr,{compact:"",onRedeemed:C})]),e("div",{class:U(["rw",{on:t(r).rewards.useWallet}])},[e("div",On,[e("span",Un,[(n(),a("svg",{width:"19",height:"19",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:S.wallet},null,8,Gn))]),e("span",null,[$[10]||($[10]=e("b",null,"استخدام من المحفظة",-1)),e("small",null,"الرصيد الحالي: "+o(t(r).walletBalance===null?"—":t(Y)(b.value)+" ر.س"),1)]),e("span",{class:U(["switch",{on:t(r).rewards.useWallet}]),onClick:V},null,2)]),e("input",{type:"number",min:"0",max:Math.min(b.value,v.value),step:"1",value:t(r).rewards.walletAmount,disabled:!t(r).rewards.useWallet,onInput:$[1]||($[1]=_=>W(_.target.value))},null,40,Kn),t(r).walletBalance!==null?(n(),a("span",Wn,"المبلغ المتاح حتى "+o(t(Y)(Math.round(Math.min(b.value,v.value))))+" ر.س",1)):P("",!0)],2),e("div",{class:U(["rw",{on:t(r).rewards.useLoyalty}])},[e("div",Qn,[e("span",Xn,[(n(),a("svg",{width:"19",height:"19",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:S.gift},null,8,Jn))]),e("span",null,[$[11]||($[11]=e("b",null,"استخدام نقاط الولاء",-1)),e("small",null,"لديك "+o(t(r).loyaltyPoints===null?"—":t(Y)(p.value))+" نقطة",1)]),e("span",{class:U(["switch",{on:t(r).rewards.useLoyalty}]),onClick:oe},null,2)]),e("input",{type:"number",min:"0",max:G.value,step:"1",value:t(r).rewards.loyaltyPoints,disabled:!t(r).rewards.useLoyalty,onInput:$[2]||($[2]=_=>ce(_.target.value))},null,40,Zn),e("span",ea,"تساوي خصم "+o(t(Y)(Math.round(t(c)*t(z))))+" ر.س",1)],2)]),e("div",ra,[e("span",ta,[(n(),a("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:S.coupon},null,8,na))]),he(e("input",{"onUpdate:modelValue":$[3]||($[3]=_=>t(r).rewards.couponCode=_),placeholder:"أدخل كود الخصم",onInput:$[4]||($[4]=_=>t(r).rewards.couponApplied&&t(r).rewards.couponCode!==t(r).rewards.couponApplied?ge():null),onKeydown:Fe(Be(ue,["prevent"]),["enter"])},null,40,aa),[[Ve,t(r).rewards.couponCode]]),t(r).rewards.couponApplied?(n(),a("button",{key:0,type:"button",class:"coupon-clear",onClick:ge},"إلغاء")):P("",!0),e("button",{type:"button",onClick:ue,disabled:H.value},o(H.value?"...":"تطبيق"),9,oa)]),t(r).rewards.couponMessage?(n(),a("p",{key:2,class:U(["coupon-msg",t(r).rewards.couponStatus])},o(t(r).rewards.couponMessage),3)):P("",!0),e("div",ia,[$[12]||($[12]=e("span",null,"المبلغ بعد المكافآت",-1)),e("b",null,o(t(Y)(Math.round(t(A))))+" ر.س",1),t(f)||F.value||t(u)?(n(),a("small",sa," تم خصم "+o(t(Y)(Math.round(t(f)+F.value+t(u))))+" ر.س ",1)):P("",!0)])]),e("div",la,[(n(),a(I,null,X(x,(_,k)=>e("div",{key:k,class:"trust"},[e("span",da,[(n(),a("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7",innerHTML:_[2]},null,8,pa))]),e("b",null,o(_[0]),1),e("small",null,o(_[1]),1)])),64))])],64))}},ua=We(ca,[["__scopeId","data-v-97ce913c"]]),ga={class:"success-wrap"},ma={class:"suc-grid"},xa={class:"card suc-details"},ha={class:"sd-row"},ba={class:"k"},va=["innerHTML"],fa={class:"v"},ya={class:"sd-row"},wa={class:"k"},ka=["innerHTML"],_a={class:"v"},$a={class:"sd-row"},za={class:"k"},Ma=["innerHTML"],Ca={class:"v"},Sa={class:"sd-row"},Fa={class:"k"},Ba=["innerHTML"],La={class:"v"},Ea={class:"sd-row"},Aa={class:"k"},Ta=["innerHTML"],Da={class:"v"},Pa={class:"sd-row"},ja={class:"k"},Ia=["innerHTML"],Ha={class:"card qr-card"},Na={class:"code"},Va={class:"suc-actions"},qa={class:"suc-perks"},Ra={class:"ti"},Ya=["innerHTML"],Oa="color:var(--gold-deep);font-family:var(--font-d);font-size:17px",Ua={__name:"BookingSuccess",emits:["home","calendar","share"],setup(ee,{emit:r}){const{state:M,selSvcs:T,totalDur:z,priceParts:f}=pe(),{current:E}=ye(),c=r,u=w(()=>f.value),A=w(()=>M.date?Ne(M.date):""),H=w(()=>[...new Set(T.value.map(D=>{var h;return(h=M.emp[D.id])==null?void 0:h.name}).filter(Boolean))]),q=w(()=>{var D;return{r:M.bookRef||"",b:((D=E.value)==null?void 0:D.name)||"",d:A.value,u:be(z.value),e:H.value.join("، "),p:u.value.total,s:T.value.map(h=>{var C;return[h.name,le(M.time[h.id]),((C=M.emp[h.id])==null?void 0:C.name)||"",h.price]})}}),m=w(()=>cr(q.value)),y={pin:'<path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>',cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>',scis:'<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"/>',user:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',card:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>'},O=[["خدمة VIP","تجربة فاخرة مصممة لراحتك",'<path d="M2 8l4 4 6-8 6 8 4-4v10a2 2 0 01-2 2H4a2 2 0 01-2-2z"/>'],["بياناتك آمنة","نضمن لك خصوصية وأمان بياناتك",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'],["تعديل الحجز","يمكنك تعديل أو إلغاء الحجز قبل موعده",'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>'],["دعم عملاء 24/7","نحن هنا لخدمتك دائمًا",'<path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>']];return(D,h)=>{var C;return n(),a("div",ga,[h[14]||(h[14]=_e('<div class="suc-ic"><span class="spark s1">✦</span><span class="spark s2">✧</span><svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M20 6L9 17l-5-5"></path></svg></div><h1>تم تأكيد حجزك بنجاح!</h1><p class="sub">نتطلع لخدمتك وتقديم تجربة استثنائية تليق بك</p>',3)),e("div",ma,[e("div",xa,[h[9]||(h[9]=e("h4",null,"تفاصيل الحجز",-1)),e("div",ha,[e("span",ba,[(n(),a("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:y.pin},null,8,va)),h[3]||(h[3]=L(" الفرع",-1))]),e("span",fa,o(((C=t(E))==null?void 0:C.name)||"—"),1)]),e("div",ya,[e("span",wa,[(n(),a("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:y.cal},null,8,ka)),h[4]||(h[4]=L(" التاريخ",-1))]),e("span",_a,o(A.value),1)]),e("div",$a,[e("span",za,[(n(),a("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:y.info},null,8,Ma)),h[5]||(h[5]=L(" مدة الجلسة",-1))]),e("span",Ca,o(t(be)(t(z))),1)]),e("div",Sa,[e("span",Fa,[(n(),a("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:y.scis},null,8,Ba)),h[6]||(h[6]=L(" الخدمات",-1))]),e("span",La,o(t(T).map(b=>`${b.name} (${t(le)(t(M).time[b.id])})`).join(" + ")),1)]),e("div",Ea,[e("span",Aa,[(n(),a("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:y.user},null,8,Ta)),h[7]||(h[7]=L(" الفريق",-1))]),e("span",Da,o(H.value.join("، ")),1)]),e("div",Pa,[e("span",ja,[(n(),a("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:y.card},null,8,Ia)),h[8]||(h[8]=L(" المبلغ التقديري",-1))]),e("span",{class:"v",style:Oa},o(t(Y)(u.value.total))+" ر.س",1)])]),e("div",Ha,[h[10]||(h[10]=e("h4",{style:{"font-family":"var(--font-d)","font-size":"16px",color:"var(--ink)"}},"رقم الفاتورة",-1)),e("div",Na,o(t(M).bookRef||"—"),1),de(ur,{url:m.value},null,8,["url"])])]),e("div",Va,[e("button",{class:"btn btn-gold",onClick:h[0]||(h[0]=b=>c("home"))},[...h[11]||(h[11]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M3 9l9-6 9 6v11a1 1 0 01-1 1H4a1 1 0 01-1-1z"})],-1),L(" العودة إلى الرئيسية",-1)])]),e("button",{class:"btn btn-line",onClick:h[1]||(h[1]=b=>c("calendar"))},[...h[12]||(h[12]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[e("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),e("path",{d:"M16 2v4M8 2v4M3 10h18M12 14v4M10 16h4"})],-1),L(" إضافة للتقويم",-1)])]),e("button",{class:"btn btn-line",onClick:h[2]||(h[2]=b=>c("share"))},[...h[13]||(h[13]=[_e('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"></path></svg> مشاركة الحجز',2)])])]),e("div",qa,[(n(),a(I,null,X(O,(b,p)=>e("div",{key:p,class:"trust"},[e("span",Ra,[(n(),a("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7",innerHTML:b[2]},null,8,Ya))]),e("b",null,o(b[0]),1),e("small",null,o(b[1]),1)])),64))])])}}},Ga={key:0,class:"card"},Ka={key:0,class:"br-img"},Wa=["src","alt"],Qa={key:1,class:"sum-row"},Xa={class:"v"},Ja={key:2,class:"sum-row"},Za={class:"v"},eo={class:"sum-row"},ro={class:"v"},to={class:"sum-row"},no={class:"v"},ao={key:3,class:"sum-row"},oo={class:"v"},io={key:4,class:"sum-row"},so={class:"v"},lo={class:"sum-svcs"},po={class:"nm"},co={class:"pr"},uo=["onClick"],go={key:5,class:"sum-svcs"},mo={class:"nm"},xo={class:"pr"},ho={class:"sum-price"},bo={class:"sp-row"},vo={class:"sp-row"},fo={class:"sp-total"},yo={class:"v"},wo={class:"sum-note"},ko={width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",style:{flex:"none"}},_o={__name:"BookingSummary",setup(ee){const{state:r,selSvcs:M,totalDur:T,priceParts:z,toggleSvc:f,selectedProducts:E}=pe(),{current:c}=ye(),u=J(!1),A=w(()=>r.services.length>0);ae(A,m=>{m?sr(()=>requestAnimationFrame(()=>{u.value=!0})):u.value=!1},{immediate:!0});const H=w(()=>z.value),q=w(()=>r.date?Ne(r.date):"");return(m,y)=>{var O;return n(),a("div",{id:"summary",class:U({show:u.value})},[A.value?(n(),a("div",Ga,[y[14]||(y[14]=e("h3",null,[e("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"var(--gold-deep)","stroke-width":"1.8"},[e("path",{d:"M9 11l3 3L22 4"}),e("path",{d:"M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"})]),L(" ملخص الحجز")],-1)),t(c)?(n(),a("div",Ka,[t(c).image?(n(),a("img",{key:0,src:t(c).image,alt:t(c).name},null,8,Wa)):P("",!0)])):P("",!0),t(c)?(n(),a("div",Qa,[y[0]||(y[0]=e("span",{class:"k"},"📍 الفرع",-1)),e("span",Xa,o(t(c).name),1)])):P("",!0),t(r).date?(n(),a("div",Ja,[y[1]||(y[1]=e("span",{class:"k"},"📅 التاريخ",-1)),e("span",Za,o(q.value),1)])):P("",!0),e("div",eo,[y[2]||(y[2]=e("span",{class:"k"},"⏱️ المدة الإجمالية",-1)),e("span",ro,o(t(be)(t(T))),1)]),e("div",to,[y[3]||(y[3]=e("span",{class:"k"},"✂️ عدد الخدمات",-1)),e("span",no,o(t(M).length)+" "+o(t(M).length>2?"خدمات":"خدمة"),1)]),t(r).mode?(n(),a("div",ao,[y[4]||(y[4]=e("span",{class:"k"},"👤 الموظفون",-1)),e("span",oo,o(t(r).mode==="auto"?"اختيار تلقائي ذكي":"اختيار يدوي"),1)])):P("",!0),(O=t(c))!=null&&O.home?(n(),a("div",io,[y[5]||(y[5]=e("span",{class:"k"},"رسوم الزيارة المنزلية",-1)),e("span",so,o(t(Y)(H.value.homeFee))+" ر.س",1)])):P("",!0),e("div",lo,[(n(!0),a(I,null,X(t(M),D=>(n(),a("div",{key:D.id,class:"sum-svc"},[y[7]||(y[7]=e("i",{style:{background:"var(--gold)"}},null,-1)),e("span",po,o(D.name),1),e("span",co,o(t(Y)(D.price))+" ر.س",1),e("button",{class:"rm","aria-label":"حذف",onClick:h=>t(f)(D)},[...y[6]||(y[6]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M18 6L6 18M6 6l12 12"})],-1)])],8,uo)]))),128))]),t(E).length?(n(),a("div",go,[(n(!0),a(I,null,X(t(E),D=>(n(),a("div",{key:D.id,class:"sum-svc"},[e("span",mo,o(D.n)+" ? "+o(D.qty),1),e("span",xo,o(t(Y)(D.pr*D.qty))+" ?.?",1)]))),128))])):P("",!0),e("div",ho,[e("div",bo,[y[8]||(y[8]=e("span",null,"المجموع الفرعي",-1)),e("span",null,o(t(Y)(H.value.sub))+" ر.س",1)]),e("div",vo,[y[9]||(y[9]=e("span",null,"ضريبة القيمة المضافة (15%)",-1)),e("span",null,"+"+o(t(Y)(H.value.vat))+" ر.س",1)]),e("div",fo,[y[11]||(y[11]=e("span",{class:"k"},"المبلغ الإجمالي",-1)),e("span",yo,[L(o(t(Y)(H.value.total))+" ",1),y[10]||(y[10]=e("small",null,"ر.س",-1))])])]),e("div",wo,[(n(),a("svg",ko,[...y[12]||(y[12]=[e("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},null,-1)])])),y[13]||(y[13]=L(" بياناتك محمية — يمكنك تعديل أو إلغاء الحجز قبل 6 ساعات من الموعد",-1))])])):P("",!0)],2)}}},$o={class:"shell"},zo={class:"wrap"},Mo={class:"panel",id:"panel"},Co={key:0,class:"success-wrap receipt-wrap"},So={class:"suc-grid receipt-grid"},Fo={class:"card suc-details"},Bo={class:"sd-row"},Lo={class:"v receipt-code"},Eo={class:"sd-row"},Ao={class:"v"},To={class:"sd-row"},Do={class:"v"},Po={class:"sd-row"},jo={class:"v"},Io={class:"sd-row"},Ho={class:"v"},No={class:"sd-row"},Vo={class:"card suc-details receipt-services"},qo={class:"footbar",id:"footbar"},Ro={class:"wrap in"},Yo={class:"fb-mid",id:"fbMid"},Oo={key:0,class:"tot"},Uo=["disabled"],Go="color:var(--gold-deep);font-family:var(--font-d);font-size:17px",di={__name:"BookingView",setup(ee){const{state:r,clearCart:M,cartItems:T}=Xe(),z=J(null),f=lr(),{current:E,locations:c,loadServiceLocations:u,setLocation:A}=ye(),{requireAuth:H,user:q}=Re();u(),ae([()=>f.query.branch,c],([_,k])=>{const Q=Array.isArray(_)?_[0]:_;if(!Q||!k.length)return;const ne=Q==="hm"||Q==="home-service"?k.find(me=>me.home):k.find(me=>String(me.id)===String(Q));ne&&A(ne.id)},{immediate:!0});const{state:m,selSvcs:y,totalDur:O,priceParts:D,canProceed:h,nextLabel:C,reset:b,payableTotal:p,walletDiscount:v,loyaltyPointsUsed:F}=pe();dr(Br,"booking"),pr(z);const B=J(!1),G=J(""),K=J(!1);function re(_){G.value=_,K.value=!0,clearTimeout(re._h),re._h=setTimeout(()=>{K.value=!1},2600)}ae(()=>f.query.payment,_=>{_&&(_==="failed"?re("فشلت عملية الدفع الإلكتروني، يرجى إعادة المحاولة."):(_==="cancelled"||_==="cancel")&&re("تم إلغاء عملية الدفع."))},{immediate:!0});const g=w(()=>m.services.length>0),d=w(()=>m.step===4?p.value:D.value.total);function x(_){if(!_)return null;try{const k=String(_).replace(/-/g,"+").replace(/_/g,"/"),Q=k.padEnd(k.length+(4-k.length%4)%4,"="),ne=JSON.parse(decodeURIComponent(escape(atob(Q))));return ne&&typeof ne=="object"?ne:null}catch{return null}}const S=w(()=>x(f.query.receipt)),Z=w(()=>!!S.value),V=w(()=>{var _;return Array.isArray((_=S.value)==null?void 0:_.s)?S.value.s:[]}),W=w(()=>!Z.value&&!m.done&&g.value),oe=w(()=>W.value?"minmax(0,1fr) minmax(285px,315px)":"1fr");function ce(){m.step>0&&(m.step--,scrollTo({top:0,behavior:"smooth"}))}function ue(){if(h.value){if(m.step===4){H(j);return}m.step++,scrollTo({top:0,behavior:"smooth"})}}function ge(_){return`${_.getFullYear()}-${String(_.getMonth()+1).padStart(2,"0")}-${String(_.getDate()).padStart(2,"0")}`}async function j(){var _,k,Q,ne,me,Ae,we,ze;if(!(B.value||!h.value)){B.value=!0;try{const ke=[(_=q.value)==null?void 0:_.first_name,(k=q.value)==null?void 0:k.last_name].filter(Boolean).join(" ");m.cust.name=m.cust.name||ke||((Q=q.value)==null?void 0:Q.username)||"",m.cust.phone=m.cust.phone||((ne=q.value)==null?void 0:ne.mobile)||"",m.cust.mail=m.cust.mail||((me=q.value)==null?void 0:me.email)||"";const Te=(Ae=E.value)!=null&&Ae.home?0:Number((we=E.value)==null?void 0:we.id);if(m.pay==="cod"){const R=Math.round(D.value.total*.3);if((Number(m.walletBalance)||0)<R){re(`عذرًا، الدفع عند الوصول يتطلب توفر عربون 30% (${Y(R)} ر.س) في محفظتك`);return}}const De=y.value.map(R=>{var te;return{subServices:[{id:R.id,...R.repeatRewardId?{repeat_reward_id:R.repeatRewardId}:{},date:ge(m.date),time:m.time[R.id],duration:R.dur,staffId:(te=m.emp[R.id])==null?void 0:te.id}]}});await vr(Fr(r.cart)),await fr({branch:Te,...Te===0?{city_id:m.homeCityId,latitude:m.homeLatitude,longitude:m.homeLongitude}:{},services:De,customerName:m.cust.name,mobileNo:m.cust.phone});const ve=m.rewards,Me=Number(v.value.toFixed(2)),Pe=F.value,s=Me>0,i=Pe>0,l=ve.couponApplied||"",N=p.value<=0?"card":m.pay==="cod"?"cod":m.pay||"card",ie=await yr(N,{wallet:s,walletAmount:Me,loyalty:i,loyaltyPoints:Pe,couponCode:l});if(ie.payment_url){gr({b:((ze=E.value)==null?void 0:ze.name)||"",d:Ne(m.date),u:be(O.value),e:[...new Set(y.value.map(R=>{var te;return(te=m.emp[R.id])==null?void 0:te.name}).filter(Boolean))].join("، "),p:D.value.total,s:y.value.map(R=>{var te;return[R.name,le(m.time[R.id]),((te=m.emp[R.id])==null?void 0:te.name)||"",R.price]})},ie.attempt_id),window.location.href=ie.payment_url;return}m.purchasedProducts=T.value.map(R=>({...R})),m.bookRef=ie.invoice_id||null,m.done=!0,M(),scrollTo({top:0,behavior:"smooth"})}catch(ke){re(ke.message||"تعذّر إتمام الحجز، حاول مرة أخرى")}finally{B.value=!1}}}function $(){b(),location.href="/"}return(_,k)=>(Je("RouterLink"),n(),a("div",{ref_key:"root",ref:z},[e("div",$o,[Z.value?P("",!0):(n(),xe(Ir,{key:0})),e("div",zo,[e("div",{class:U(["stage",{"stage-services-summary":t(m).step===0&&W.value}]),id:"stage",style:Ee(`grid-template-columns:${oe.value}`)},[e("main",Mo,[Z.value?(n(),a("div",Co,[k[10]||(k[10]=e("div",{class:"suc-ic"},[e("svg",{width:"44",height:"44",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.2"},[e("path",{d:"M20 6L9 17l-5-5"})])],-1)),k[11]||(k[11]=e("h1",null,"تفاصيل الحجز",-1)),k[12]||(k[12]=e("p",{class:"sub"},"تم فتح تفاصيل الحجز من رمز QR",-1)),e("div",So,[e("div",Fo,[k[8]||(k[8]=e("h4",null,"بيانات الحجز",-1)),e("div",Bo,[k[2]||(k[2]=e("span",{class:"k"},"رقم الفاتورة",-1)),e("span",Lo,o(S.value.r||"—"),1)]),e("div",Eo,[k[3]||(k[3]=e("span",{class:"k"},"الفرع",-1)),e("span",Ao,o(S.value.b||"—"),1)]),e("div",To,[k[4]||(k[4]=e("span",{class:"k"},"التاريخ",-1)),e("span",Do,o(S.value.d||"—"),1)]),e("div",Po,[k[5]||(k[5]=e("span",{class:"k"},"مدة الجلسة",-1)),e("span",jo,o(S.value.u||"—"),1)]),e("div",Io,[k[6]||(k[6]=e("span",{class:"k"},"الفريق",-1)),e("span",Ho,o(S.value.e||"—"),1)]),e("div",No,[k[7]||(k[7]=e("span",{class:"k"},"المبلغ",-1)),e("span",{class:"v",style:Go},o(t(Y)(Number(S.value.p)||0))+" ر.س",1)])]),e("div",Vo,[k[9]||(k[9]=e("h4",null,"الخدمات",-1)),(n(!0),a(I,null,X(V.value,(Q,ne)=>(n(),a("div",{key:ne,class:"receipt-service"},[e("b",null,o(Q[0]),1),e("small",null,o(Q[1]||"—")+" · "+o(Q[2]||S.value.e||"—"),1),e("span",null,o(t(Y)(Number(Q[3])||0))+" ر.س",1)]))),128))])])])):t(m).done?(n(),xe(Ua,{key:1,onHome:$,onCalendar:k[0]||(k[0]=Q=>re("تمت إضافة الموعد إلى التقويم")),onShare:k[1]||(k[1]=Q=>re("تم نسخ رابط الحجز للمشاركة"))})):t(m).step===0?(n(),xe(ct,{key:2})):t(m).step===1?(n(),xe(Ct,{key:3})):t(m).step===2?(n(),xe(ln,{key:4})):t(m).step===3?(n(),xe(jn,{key:5})):(n(),xe(ua,{key:6}))]),he(e("aside",{class:U(["summary booking-summary-compact",{show:W.value,"booking-summary-time":t(m).step===2}])},[de(_o)],2),[[je,W.value]])],6)])]),P("",!0),he(e("div",qo,[e("div",Ro,[e("button",{class:"btn btn-back",id:"btnBack",style:Ee({visibility:t(m).step===0?"hidden":"visible"}),onClick:ce},[...k[29]||(k[29]=[e("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M5 12h14M13 6l6 6-6 6"})],-1),L(" السابق ",-1)])],4),e("div",Yo,[k[31]||(k[31]=e("span",null,"🔒 بياناتك محمية وآمنة",-1)),g.value?(n(),a("span",Oo,[k[30]||(k[30]=L("المبلغ الإجمالي ",-1)),e("b",null,o(t(Y)(Math.round(d.value)))+" ر.س",1)])):P("",!0)]),e("button",{class:U(["btn",t(m).step===4?"btn-pay":"btn-gold"]),id:"btnNext",disabled:!t(h),onClick:ue},[L(o(t(C))+" ",1),k[32]||(k[32]=e("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.2"},[e("path",{d:"M19 12H5M11 18l-6-6 6-6"})],-1))],10,Uo)])],512),[[je,!t(m).done&&!Z.value]]),e("div",{class:U(["pay-loading",{on:B.value}]),id:"payLoading"},[...k[33]||(k[33]=[e("div",{class:"pl-box"},[e("div",{class:"pl-ring"}),e("b",null,"جارٍ معالجة الدفع بأمان…"),e("small",null,"لا تغلق الصفحة، سيتم تأكيد حجزك خلال لحظات")],-1)])],2),e("div",{class:U(["toast",{on:K.value}]),id:"toast"},o(G.value),3)],512))}};export{di as default};
