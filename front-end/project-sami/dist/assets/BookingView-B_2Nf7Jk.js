import{J as hr,K as Dr,e as n,o as t,c as a,b as r,F as Y,r as Z,n as W,t as o,i as _r,g as nr,v as $r,L as Qr,d as v,j as Jr,l as Cr,M as Zr,s as N,a as S,f as gr,y as Lr,u as Ur,N as re,O as Br,D as or,P as Sr,w as Fr,G as kr,p as vr,Q as ee,E as ne,S as te,U as Hr,V as Kr,A as Wr,B as Gr,q as mr,_ as ae,X as oe,Y as ie,Z as se}from"./index-C9ZtmBeG.js";import{u as le}from"./usePageStyles-CiqSTiR8.js";import{u as de}from"./useInternalLinks-CedUnouj.js";import{u as pr,r as O,f as br,a as dr,b as Nr}from"./useBooking-C_FYAPt6.js";import{b as pe,B as ce,s as ge}from"./BookingQr-DddH1oOA.js";import{f as ue,a as Xr,b as xe,P as me,v as he,s as be,c as fe,i as ve}from"./PaymentMethodList-d17XcT9d.js";import{s as ye}from"./serviceDetails-gQMMCHKA.js";import{F as we}from"./FavoriteButton-gRCSCZ1L.js";import{c as Vr,a as Tr,b as Yr}from"./giftIcons-C3hH12nn.js";import{_ as jr}from"./SkeletonLoader-CD_EF7c0.js";import{f as ke}from"./accountApi-DcUlx9lo.js";function _e(rr,e=3,$=Math.random){const u=[...new Map(rr.filter(k=>k.stockQty>0).map(k=>[String(k.id),k])).values()];for(let k=u.length-1;k>0;k--){const h=Math.floor($()*(k+1));[u[k],u[h]]=[u[h],u[k]]}return u.slice(0,e)}function $e(rr){return Object.entries(rr).filter(([,e])=>e>0).map(([e,$])=>({product_id:Number(e),qty:$}))}const ze=`\r
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
`,Or=[{id:"s1",cat:"hair",name:"حلاقة عادية",desc:"حلاقة شعر عادية بقصات عصرية",dur:20,price:20},{id:"s2",cat:"hair",name:"حلاقة شعر + تحديد لحية",desc:"حلاقة شعر مع تحديد اللحية",dur:30,price:35},{id:"s3",cat:"hair",name:"حلاقة مع غسيل",desc:"حلاقة مع غسيل وتنظيف الشعر",dur:30,price:30},{id:"s4",cat:"hair",name:"حلاقة VIP",desc:"حلاقة فاخرة مع خدمة VIP",dur:50,price:80},{id:"s5",cat:"hair",name:"تنسيق اللحية",desc:"تنسيق وتجميل اللحية",dur:20,price:15},{id:"s6",cat:"hair",name:"تصفيف الشعر",desc:"تصفيف الشعر بالمنتجات المناسبة",dur:15,price:15},{id:"s7",cat:"skin",name:"تنظيف بشرة عميق",desc:"تنظيف عميق ينظف وينعش البشرة",dur:50,price:150},{id:"s8",cat:"skin",name:"تنظيف بشرة سريع",desc:"جلسة سريعة لإشراقة فورية",dur:30,price:80},{id:"s9",cat:"skin",name:"ماسك الذهب",desc:"ماسك فاخر لنضارة استثنائية",dur:25,price:90},{id:"s10",cat:"pedi",name:"بديكير عادي",desc:"عناية أساسية للأقدام والأظافر",dur:45,price:60},{id:"s11",cat:"pedi",name:"بديكير فاخر",desc:"عناية متكاملة مع تقشير وترطيب",dur:60,price:100},{id:"s12",cat:"pedi",name:"بديكير طبي",desc:"علاج تشققات القدم والمسامير",dur:60,price:120},{id:"s13",cat:"pedi",name:"إزالة جلد ميت",desc:"إزالة الجلد الميت من القدمين",dur:30,price:40},{id:"s14",cat:"mass",name:"مساج استرخاء للجسم",desc:"استرخاء عميق يجدد طاقتك",dur:60,price:180},{id:"s15",cat:"mass",name:"مساج رأس",desc:"جلسة قصيرة لتخفيف التوتر",dur:15,price:25},{id:"s16",cat:"mass",name:"مساج علاجي",desc:"مساج متخصص للعضلات المجهدة",dur:60,price:220},{id:"s17",cat:"bath",name:"حمام مغربي كلاسيكي",desc:"تقشير وتنقية بطقوس أصيلة",dur:60,price:200},{id:"s18",cat:"bath",name:"حمام مغربي ملكي",desc:"التجربة الكاملة مع ماسك وتدليك",dur:90,price:300}];for(const rr of Object.values(ye))for(const e of rr.variants||[])e.svcId&&!Or.some($=>$.id===e.svcId)&&Or.push({id:e.svcId,cat:e.cat,name:e.name,desc:e.desc||"",dur:e.dur,price:e.price,hidden:!0});const Me=[{t:"اختيار الخدمات",ic:'<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"/>'},{t:"اختيار الموظف",ic:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>'},{t:"اختيار الوقت",ic:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>'},{t:"تأكيد الحجز",ic:'<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>'},{t:"الدفع",ic:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>'}],Ce={class:"wrap stepper",id:"stepperWrap"},Se={class:"steps",id:"steps"},Fe=["data-i"],Be={class:"n"},Le=["onClick"],Ee=["innerHTML"],Ae={__name:"BookingStepper",setup(rr){const{state:e}=pr();function $(u){u<e.step&&(e.step=u)}return(u,k)=>hr((t(),a("div",Ce,[r("div",Se,[(t(!0),a(Y,null,Z(n(Me),(h,j)=>(t(),a("div",{key:j,class:W(["step",{active:j===n(e).step,done:j<n(e).step}]),"data-i":j},[k[0]||(k[0]=r("div",{class:"bar"},[r("i")],-1)),r("span",Be,o(j+1),1),r("span",{class:"bubble",onClick:D=>$(j)},[(t(),a("svg",{width:"21",height:"21",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7",innerHTML:h.ic},null,8,Ee))],8,Le),r("label",null,o(h.t),1)],10,Fe))),128))])],512)),[[Dr,!n(e).done]])}},De={key:0,class:"branch-strip"},Te=["src","alt"],je={class:"bi"},Ne={key:1,class:"empty-hint",style:{display:"grid",gap:"10px"}},Pe={class:"cat-row"},Ie=["data-cat","onClick"],He=["src","alt"],Ve={class:"lbl"},Ye={class:"cat-name"},qe={key:0,class:"empty-hint"},Re={key:1,class:"sub-block"},Oe={class:"sub-title"},Ue={class:"sub-title__main"},Ke={class:"tick"},We=["innerHTML"],Ge={key:0,class:"empty-hint"},Xe={key:1,class:"subs"},Qe=["data-svc","onClick"],Je={class:"top"},Ze={class:"si"},rn=["innerHTML"],en={class:"foot"},nn={class:"dur"},tn={class:"prc"},an={__name:"ServicesStep",setup(rr){const{state:e,hasSvc:$,toggleSvc:u}=pr(),{current:k}=_r(),{state:h}=Ur(),j=p=>re(p,h.lang),D=nr([]),w=nr(!0);$r(async()=>{try{const p=await Qr();D.value=p!=null&&p.status?p.data||[]:[]}catch{D.value=[]}finally{w.value=!1}});const C=v(()=>D.value.map(p=>({id:p.id,name:Cr(p,"name",h.lang),image:Jr(p.image)||p.feature_image||null}))),P=v(()=>D.value.find(p=>p.id===e.activeCat)||null),U=v(()=>Cr(P.value,"name",h.lang)),c=v(()=>Vr(P.value)),x=v(()=>{var p;return(((p=P.value)==null?void 0:p.services)||[]).map(y=>({id:y.id,categoryId:P.value.id,categoryNameT:Zr(P.value,"name"),get categoryName(){return j(this.categoryNameT)},icon:c.value,get name(){return Cr(y,"name",h.lang)},get desc(){return Cr(y,"description",h.lang)},dur:y.duration_min,price:y.default_price}))}),T=p=>e.services.some(y=>y.categoryId===p),B=v(()=>x.value.filter(p=>$(p.id)).length),b=p=>({"--acc":Yr(p.icon)}),M=p=>Tr(p.icon);return(p,y)=>(t(),a(Y,null,[y[5]||(y[5]=r("div",{class:"panel-head"},[r("h1",null,"اختر الخدمة التي تناسبك"),r("p",null,"يمكنك اختيار خدمة واحدة أو أكثر من أي قسم")],-1)),n(k)?(t(),a("div",De,[n(k).image?(t(),a("img",{key:0,src:n(k).image,alt:n(k).name},null,8,Te)):N("",!0),r("span",je,[y[0]||(y[0]=S("مكان التنفيذ: ",-1)),r("b",null,o(n(k).name),1),r("small",null,o(n(k).address),1)])])):N("",!0),w.value?(t(),a("div",Ne,[gr(jr,{height:"64px","border-radius":"12px"}),gr(jr,{height:"92px","border-radius":"12px"})])):(t(),a(Y,{key:2},[r("div",Pe,[(t(!0),a(Y,null,Z(C.value,_=>(t(),a("div",{key:_.id,class:W(["cat",{sel:n(e).activeCat===_.id,"has-picks":T(_.id)}]),"data-cat":_.id,onClick:L=>n(e).activeCat=_.id},[_.image?(t(),a("img",{key:0,src:_.image,alt:_.name},null,8,He)):N("",!0),y[1]||(y[1]=r("span",{class:"chk"},[r("svg",{width:"9",height:"9",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3"},[r("path",{d:"M20 6L9 17l-5-5"})])],-1)),r("span",Ve,[r("span",Ye,o(_.name),1)])],10,Ie))),128))]),n(e).activeCat?(t(),a("div",Re,[r("div",Oe,[r("span",Ue,[S(" خدمات "+o(U.value)+" ",1),r("span",Ke,[(t(),a("svg",{viewBox:"0 0 24 24","aria-hidden":"true",innerHTML:n(Tr)(c.value)},null,8,We))])]),r("small",null,o(B.value?B.value+" مختارة":"اختر خدمة أو أكثر"),1)]),x.value.length?(t(),a("div",Xe,[(t(!0),a(Y,null,Z(x.value,_=>(t(),a("div",{key:_.id,class:W(["sub",{sel:n($)(_.id)}]),"data-svc":_.id,style:Lr(b(_)),onClick:L=>n(u)(_)},[gr(we,{type:"service",id:_.id},null,8,["id"]),r("div",Je,[r("span",Ze,[(t(),a("svg",{viewBox:"0 0 24 24","aria-hidden":"true",innerHTML:M(_)},null,8,rn))]),r("b",null,o(_.name),1),y[3]||(y[3]=r("span",{class:"chk"},[r("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3"},[r("path",{d:"M20 6L9 17l-5-5"})])],-1))]),r("small",null,o(_.desc),1),r("div",en,[r("span",nn,"🕐 "+o(_.dur)+" دقيقة",1),r("span",tn,[S(o(n(O)(_.price))+" ",1),y[4]||(y[4]=r("small",null,"ر.س",-1))])])],14,Qe))),128))])):(t(),a("div",Ge,"لا توجد خدمات متاحة حاليًا ضمن هذا القسم"))])):(t(),a("div",qe,[...y[2]||(y[2]=[r("b",null,"اختر خدمة لعرض تفاصيلها",-1),S("اختر إحدى الخدمات الأساسية أعلاه لعرض الخدمات الفرعية المتاحة",-1)])]))],64))],64))}},on={class:"mode-grid"},sn=["aria-pressed"],ln=["aria-pressed"],dn={key:0,class:"emp-section emp-section--groups"},pn={class:"emp-cat emp-cat--group"},cn={class:"cat-ico"},gn=["innerHTML"],un={class:"emp-cat__info"},xn={class:"emp-cat__services"},mn={key:0,class:"empty-hint"},hn={key:1,class:"empty-hint"},bn={key:2,class:"emp-list emp-list--groups"},fn=["onClick"],vn=["onClick"],yn={key:1,class:"j-note card",style:{display:"flex",gap:"16px","align-items":"center",padding:"20px 24px","border-color":"var(--line)"}},wn={__name:"EmployeeStep",setup(rr){const{state:e,selSvcs:$,setEmployee:u}=pr(),{current:k}=_r(),h=Br({}),j=Br({}),D=["توفير الوقت","أفضل تقييم متاح","تنفيذ خدمات القسم بنفس الموظف","منع أي تعارض في المواعيد"],w=["اختر موظفًا واحدًا لكل قسم","الموظف المختار ينفذ كل خدمات القسم","تحكم كامل في فريق جلستك"],C=v(()=>{const g=new Map;return $.value.forEach(d=>{const m=String(d.categoryId??d.categoryName??d.id);g.has(m)||g.set(m,{id:m,name:d.categoryName||d.name,icon:d.icon||Vr(d.categoryId),services:[]}),g.get(m).services.push(d)}),[...g.values()]});function P(g){return[g.first_name,g.last_name].filter(Boolean).join(" ")||g.username||"موظف"}function U(g){return{"--acc":Yr(g.icon)}}function c(g){return`${g.services.length} ${g.services.length===1?"خدمة":"خدمات"}`}function x(g){return g.services.map(d=>d.name).join("، ")}function T(g){const d=g.services.map(A=>h[A.id]);if(!d.length||d.some(A=>!Array.isArray(A)))return[];const[m,...E]=d,Q=m.filter(A=>E.every(f=>f.some(F=>String(F.id)===String(A.id))));return[...new Map(Q.map(A=>[String(A.id),A])).values()]}function B(g){return g.services.some(d=>j[d.id]||!Array.isArray(h[d.id]))}function b(g){const d=g.services.map(E=>e.emp[E.id]).filter(Boolean);if(d.length!==g.services.length)return null;const m=d[0];return d.every(E=>String(E.id)===String(m.id))?m:null}function M(g,d){var m;return String(((m=b(g))==null?void 0:m.id)??"")===String(d.id??"")}function p(g){const d=g.services.map(m=>$.value.findIndex(E=>String(E.id)===String(m.id))).filter(m=>m>=0);return d.length?Math.min(...d):-1}function y(g){const d=p(g);d!==-1&&$.value.slice(d).forEach(m=>{delete e.time[m.id]})}function _(g,d,{clearTimes:m=!0}={}){g.services.forEach(E=>u(E.id,d)),m&&y(g)}function L(){e.mode==="auto"&&C.value.forEach(g=>{T(g).length&&g.services.forEach(m=>{e.staffOptions[m.id]=h[m.id]||[],u(m.id,{id:null,name:"اختيار تلقائي"})})})}function K(g){const d=e.mode!==g;e.mode=g,d&&(e.time={},e.emp={}),L()}function I(g,d){e.mode="manual",_(g,d)}async function q(g){var d,m;if(!h[g.id]){j[g.id]=!0;try{const E=(d=k.value)!=null&&d.home?0:(m=k.value)==null?void 0:m.id,Q=await ue({branchId:E,serviceId:g.id}),A=(Array.isArray(Q)?Q:[]).map(f=>({id:f.id,name:P(f)}));h[g.id]=[...new Map(A.map(f=>[String(f.id),f])).values()],e.staffOptions[g.id]=h[g.id],L()}catch{h[g.id]=[]}finally{j[g.id]=!1}}}function er(){$.value.forEach(q)}return $r(er),or(()=>$.value.map(g=>g.id),er),or(()=>e.mode,L),(g,d)=>(t(),a(Y,null,[d[14]||(d[14]=r("div",{class:"panel-head"},[r("h1",null,"اختر الموظف"),r("p",null,"اختر موظفًا واحدًا لكل قسم، وسيتم تطبيقه على كل الخدمات المختارة داخل هذا القسم")],-1)),r("div",on,[r("div",{class:W(["mode dark",{sel:n(e).mode==="auto"}]),role:"button",tabindex:"0","aria-pressed":n(e).mode==="auto",onClick:d[0]||(d[0]=m=>K("auto")),onKeydown:[d[1]||(d[1]=Sr(m=>K("auto"),["enter"])),d[2]||(d[2]=Sr(Fr(m=>K("auto"),["prevent"]),["space"]))]},[d[7]||(d[7]=kr('<span class="chk"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"></path></svg></span><span class="mi"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="m13 2-9 12h7l-1 8 10-13h-7l0-7Z"></path></svg></span><h3>اختيار تلقائي</h3><div class="sub-t">سنختار لك أفضل فريق متاح</div><span class="flag">★ موصى به</span>',5)),r("ul",null,[(t(),a(Y,null,Z(D,(m,E)=>r("li",{key:E},[d[6]||(d[6]=r("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.6"},[r("path",{d:"M20 6L9 17l-5-5"})],-1)),S(" "+o(m),1)])),64))])],42,sn),r("div",{class:W(["mode",{sel:n(e).mode==="manual"}]),role:"button",tabindex:"0","aria-pressed":n(e).mode==="manual",onClick:d[3]||(d[3]=m=>K("manual")),onKeydown:[d[4]||(d[4]=Sr(m=>K("manual"),["enter"])),d[5]||(d[5]=Sr(Fr(m=>K("manual"),["prevent"]),["space"]))]},[d[9]||(d[9]=kr('<span class="chk"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" stroke-width="3"><path d="M20 6L9 17l-5-5"></path></svg></span><span class="mi"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span><h3>اختيار موظف محدد</h3><div class="sub-t">اختر موظفًا لكل قسم</div><span class="flag">تحكم كامل</span>',5)),r("ul",null,[(t(),a(Y,null,Z(w,(m,E)=>r("li",{key:E},[d[8]||(d[8]=r("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.6"},[r("path",{d:"M20 6L9 17l-5-5"})],-1)),S(" "+o(m),1)])),64))])],42,ln)]),n(e).mode==="manual"?(t(),a("div",dn,[(t(!0),a(Y,null,Z(C.value,m=>(t(),a("div",{key:m.id,class:"emp-row emp-row--group",style:Lr(U(m))},[r("div",pn,[r("span",cn,[(t(),a("svg",{viewBox:"0 0 24 24","aria-hidden":"true",innerHTML:n(Tr)(m.icon)},null,8,gn))]),r("span",un,[r("b",null,o(m.name),1),r("small",null,o(c(m)),1),r("span",xn,o(x(m)),1)])]),B(m)?(t(),a("div",mn,[gr(jr,{height:"44px","border-radius":"8px"})])):T(m).length?(t(),a("div",bn,[r("button",{type:"button",class:"emp any",onClick:Fr(E=>I(m,T(m)[0]),["stop"])},[...d[10]||(d[10]=[kr('<span class="av" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span><b>أي موظف</b><span class="rate">الأنسب تلقائيًا</span>',3)])],8,fn),(t(!0),a(Y,null,Z(T(m),E=>(t(),a("button",{key:E.id,type:"button",class:W(["emp",{sel:M(m,E)}]),onClick:Fr(Q=>I(m,E),["stop"])},[d[11]||(d[11]=r("span",{class:"chk"},[r("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"#fff","stroke-width":"3"},[r("path",{d:"M20 6L9 17l-5-5"})])],-1)),d[12]||(d[12]=r("span",{class:"av","aria-hidden":"true"},null,-1)),r("b",null,o(E.name),1)],10,vn))),128))])):(t(),a("div",hn,"لا يوجد موظف متاح يمكنه تنفيذ كل خدمات هذا القسم"))],4))),128))])):N("",!0),n(e).mode==="auto"?(t(),a("div",yn,[...d[13]||(d[13]=[kr('<span style="flex:none;width:44px;height:44px;border-radius:13px;display:grid;place-items:center;background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M13 2L3 14h9l-1 8 10-12h-9z"></path></svg></span><p style="font-size:13.5px;color:#5c5442;line-height:1.9;"><b style="color:var(--ink);">تم اختيار موظف واحد مناسب لكل قسم تلقائيًا.</b> سيتم تنفيذ كل خدمات القسم بنفس الموظف، وتقدر تشوف الأوقات في الخطوة الجاية.</p>',2)])])):N("",!0)],64))}},kn={class:"card branch-strip"},_n={class:"cells"},$n={class:"cell"},zn={class:"cell"},Mn={class:"loyalty-preview","aria-live":"polite"},Cn={class:"card cal"},Sn={class:"cal-head"},Fn={class:"cal-cells"},Bn=["disabled","onClick"],Ln={class:"dow"},En={class:"dnum"},An={key:0,class:"empty-hint",style:{"margin-top":"10px"}},Dn={class:"date-line"},Tn={class:"card detail-card time-start-card",style:{"margin-top":"14px"}},jn={class:"periods booking-periods"},Nn={key:1,class:"empty-hint"},Pn={key:2,class:"empty-hint"},In={key:3,class:"empty-hint"},Hn={key:4,class:"slots initial-slots"},Vn=["onClick"],Yn={key:0,class:"tag"},qn={key:5,class:"best-slot"},Rn={key:0,class:"session-plan"},On={class:"plan-track"},Un={key:0,class:"plan-gap"},Kn={class:"plan-icon"},Wn=["innerHTML"],Gn={class:"t"},Xn={key:0,class:"plan-note plan-note--pending"},Qn={key:1,class:"plan-note plan-note--warn"},Jn={key:2,class:"plan-note"},Zn={__name:"TimeStep",setup(rr){const e=["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],$=["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],{state:u,selSvcs:k,totalDur:h,priceParts:j,setEmployee:D,setTime:w}=pr(),C=nr(5),P=v(()=>Math.floor(j.value.total/100)*C.value),U=new Date;U.setHours(0,0,0,0);const c=nr(new Date(U)),x=nr("all"),T=Br({}),B=Br({}),b=Br({}),M=v(()=>Array.from({length:7},(s,i)=>{const l=new Date(c.value);return l.setDate(l.getDate()+i),l}));v(()=>c.value.getTime()<=U.getTime());const p=v(()=>{const s=M.value;return s[0].getMonth()===s[6].getMonth()?`${s[0].getDate()} - ${s[6].getDate()} ${$[s[0].getMonth()]}`:`${s[0].getDate()} ${$[s[0].getMonth()]} - ${s[6].getDate()} ${$[s[6].getMonth()]}`}),y=s=>s<U,_=s=>u.date&&s.getTime()===u.date.getTime(),L=v(()=>{const s=new Map;return k.value.forEach(i=>{const l=String(i.categoryId??i.categoryName??i.id);s.has(l)||s.set(l,{id:l,name:i.categoryName||i.name,icon:i.icon||Vr(i.categoryId),services:[]}),s.get(l).services.push(i)}),[...s.values()]}),K=v(()=>L.value.flatMap(s=>s.services)),I=v(()=>K.value[0]||null);v(()=>L.value[0]||null);const q=v(()=>I.value?u.time[I.value.id]:"");function er(s){return`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}-${String(s.getDate()).padStart(2,"0")}`}function g(s){if(!s||typeof s!="string")return null;const[i,l]=s.split(":").map(Number);return!Number.isFinite(i)||!Number.isFinite(l)?null:i*60+l}function d(s){if(!Number.isFinite(s))return"";const i=1440,l=(Math.round(s)%i+i)%i;return`${String(Math.floor(l/60)).padStart(2,"0")}:${String(l%60).padStart(2,"0")}`}function m(s){return[...new Set((Array.isArray(s)?s:[]).filter(i=>g(i)!==null))].sort((i,l)=>g(i)-g(l))}function E(s){K.value.slice(s).forEach(i=>{delete u.time[i.id]})}function Q(s,{apply:i=!1}={}){var lr;const l=g(s),G=K.value;if(!G.length||l===null)return{complete:!1,rows:[],end:""};let ir=l;const ar=[];for(let cr=0;cr<G.length;cr++){const R=G[cr],V=m(T[R.id]),J=cr===0?V.includes(s)?s:V.find(fr=>g(fr)>=ir):V.find(fr=>g(fr)>=ir);if(!J){i&&E(cr);const fr=ar[ar.length-1];return{complete:!1,rows:ar,missing:R,end:(fr==null?void 0:fr.end)||""}}const qr=g(J),Rr=qr+(Number(R.dur)||0);ar.push({service:R,start:J,end:d(Rr),expected:d(ir),shifted:qr>ir}),i&&w(R.id,J),i&&u.mode==="auto"&&((lr=B[R.id])!=null&&lr[J])&&D(R.id,B[R.id][J]),ir=Rr}return{complete:!0,rows:ar,end:d(ir)}}function A(){q.value&&Q(q.value,{apply:!0})}function f(s){Q(s,{apply:!0})}function F(s){return{"--acc":Yr(s.icon)}}function sr(s){return s.services.reduce((i,l)=>i+(Number(l.dur)||0),0)}function yr(s){const i=s.services.map(G=>u.emp[G.id]).filter(Boolean);if(!i.length)return null;const l=i[0];return i.every(G=>String(G.id)===String(l.id)),l}function Pr(s){return`${s.services.length} ${s.services.length===1?"خدمة":"خدمات"}`}function Ir(s){y(s)||(u.date=s,u.time={},Object.keys(T).forEach(i=>{delete T[i]}))}async function zr(s){var G;const i=u.emp[s.id];if(!u.date||!i){delete T[s.id];return}const l=er(u.date);b[s.id]=!0;try{const ir=u.mode==="auto"?u.staffOptions[s.id]||[]:[i],ar=await Promise.all(ir.filter(R=>(R==null?void 0:R.id)!=null).map(async R=>({candidate:R,times:await xe({date:l,staffId:R.id,durationMin:s.dur}).catch(()=>[])}))),lr={};ar.forEach(({candidate:R,times:V})=>{m(V).forEach(J=>{lr[J]||(lr[J]=R)})});const cr=Object.keys(lr);u.date&&er(u.date)===l&&((G=u.emp[s.id])==null?void 0:G.id)===i.id&&(T[s.id]=m(cr),B[s.id]=lr,A())}catch{T[s.id]=[],A()}finally{b[s.id]=!1}}or(()=>u.date,()=>{x.value="all",k.value.forEach(zr)}),or(()=>k.value.map(s=>{var i;return`${s.id}:${(i=u.emp[s.id])==null?void 0:i.id}`}),()=>k.value.forEach(zr)),$r(async()=>{var s;k.value.forEach(zr);try{const i=await Xr();C.value=Math.max(Number((s=i==null?void 0:i.data)==null?void 0:s.points_per_100)||5,1)}catch{}});const H=v(()=>u.date?`${e[u.date.getDay()]} ${u.date.getDate()} ${$[u.date.getMonth()]} ${u.date.getFullYear()}`:"اختر تاريخًا من التقويم"),z=v(()=>I.value&&b[I.value.id]),X=v(()=>I.value?m(T[I.value.id]):[]),tr=v(()=>X.value.filter(s=>{const i=g(s);return x.value==="am"?i<720:x.value==="pm"?i>=720:!0})),ur=v(()=>!!u.date&&K.value.every(s=>Array.isArray(T[s.id])&&!b[s.id])),Er=v(()=>!!q.value&&K.value.some(s=>b[s.id]||!Array.isArray(T[s.id]))),Mr=v(()=>q.value?K.value.find(s=>!u.time[s.id]):null),xr=v(()=>ur.value&&X.value.find(s=>Q(s).complete)||""),wr=v(()=>{const s=[];let i=null;return L.value.forEach(l=>{const G=l.services.map(V=>g(u.time[V.id])),ir=G.every(V=>V!==null),ar=G[0];if(!ir){s.push({type:"group",key:`group-${l.id}`,group:l,name:l.name,icon:l.icon,style:F(l),duration:sr(l),services:l.services,employee:yr(l),pending:!0});return}i!==null&&ar>i&&s.push({type:"gap",key:`gap-${s.length}`,start:d(i),end:d(ar),duration:ar-i});const lr=l.services[l.services.length-1],R=g(u.time[lr.id])+(Number(lr.dur)||0);s.push({type:"group",key:`group-${l.id}`,group:l,name:l.name,icon:l.icon,style:F(l),start:d(ar),end:d(R),duration:sr(l),services:l.services,employee:yr(l),pending:!1}),i=R}),s}),Ar=v(()=>{const s=wr.value.filter(l=>l.type==="group"&&!l.pending),i=s[s.length-1];return(i==null?void 0:i.end)||""});return(s,i)=>(t(),a(Y,null,[i[17]||(i[17]=r("div",{class:"panel-head"},[r("h1",null,"اختر وقت بداية الجلسة"),r("p",null,"اختر أول موعد فقط، وسيتم ترتيب باقي الأقسام تلقائيًا حسب مدة كل قسم والأوقات المتاحة.")],-1)),r("div",kn,[i[6]||(i[6]=r("div",{class:"bi"},[r("b",null,"ملخص جلستك"),r("small",null,"قبل اختيار الوقت")],-1)),r("div",_n,[r("div",$n,[r("b",null,o(n(k).length),1),i[4]||(i[4]=S("الخدمات",-1))]),r("div",zn,[r("b",null,o(n(br)(n(h))),1),i[5]||(i[5]=S("المدة الإجمالية",-1))])])]),r("div",Mn,[i[9]||(i[9]=r("h3",null,[r("span",{"aria-hidden":"true"},"✨"),S(" مكافأة نقاط الولاء لهذه الجلسة")],-1)),r("p",null,[i[7]||(i[7]=S("ستحصل على ",-1)),r("b",null,o(n(O)(P.value))+" نقطة ولاء",1),i[8]||(i[8]=S(" عند إتمام هذا الحجز.",-1))]),r("strong",null,"يمنحك نظام الولاء "+o(n(O)(C.value))+" نقطة مقابل كل 100 ر.س مدفوعة.",1)]),r("div",Cn,[r("div",Sn,[r("b",null,o(p.value),1)]),r("div",Fn,[(t(!0),a(Y,null,Z(M.value,(l,G)=>(t(),a("button",{key:G,disabled:y(l),class:W({sel:_(l),avail:!y(l)}),onClick:ir=>Ir(l)},[r("span",Ln,o(e[l.getDay()].slice(0,3)),1),r("span",En,o(l.getDate()),1)],10,Bn))),128))]),i[10]||(i[10]=r("div",{class:"cal-legend"},[r("span",null,[r("i",{style:{background:"var(--green)"}}),S(" تتوفر مواعيد")]),r("span",null,[r("i",{style:{background:"#D8D0BC"}}),S(" غير متاح")])],-1))]),n(u).date?(t(),a(Y,{key:1},[r("div",Dn,"📅 "+o(H.value),1),r("div",Tn,[i[13]||(i[13]=r("h4",null,[S("وقت بداية الجلسة "),r("small",{style:{"font-weight":"400",color:"var(--mute)"}},"سننسق باقي الأقسام بعده")],-1)),N("",!0),r("div",jn,[r("button",{class:W(["period",{sel:x.value==="all"}]),onClick:i[0]||(i[0]=l=>x.value="all")},"🗓️ كل اليوم",2),r("button",{class:W(["period",{sel:x.value==="am"}]),onClick:i[1]||(i[1]=l=>x.value="am")},"☀️ صباحًا",2),r("button",{class:W(["period",{sel:x.value==="pm"}]),onClick:i[2]||(i[2]=l=>x.value="pm")},"🌇 مساءً",2)]),i[14]||(i[14]=r("div",{class:"available-times-title"},"الأوقات المتاحة",-1)),z.value||I.value&&!Array.isArray(T[I.value.id])?(t(),a("div",Nn,[gr(jr,{height:"44px","border-radius":"8px"})])):X.value.length?tr.value.length?(t(),a("div",Hn,[(t(!0),a(Y,null,Z(tr.value,l=>(t(),a("button",{key:l,class:W(["slot",{sel:q.value===l}]),onClick:G=>f(l)},[xr.value===l?(t(),a("span",Yn,"الأفضل")):N("",!0),S(" "+o(n(dr)(l)),1)],10,Vn))),128))])):(t(),a("div",In,"لا توجد أوقات في هذه الفترة")):(t(),a("div",Pn,"لا توجد أوقات متاحة لهذا اليوم")),xr.value&&q.value!==xr.value?(t(),a("div",qn,[r("span",null,[i[12]||(i[12]=S("أفضل بداية متاحة اليوم: ",-1)),r("b",null,o(n(dr)(xr.value)),1)]),r("button",{onClick:i[3]||(i[3]=l=>f(xr.value))},"اختيار")])):N("",!0)]),q.value?(t(),a("div",Rn,[i[16]||(i[16]=r("h4",null,[r("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[r("path",{d:"M13 2L3 14h7l-1 8 10-12h-7l1-8z"})]),S(" خطة تنفيذ الجلسة ")],-1)),r("div",On,[(t(!0),a(Y,null,Z(wr.value,l=>{var G;return t(),a(Y,{key:l.key},[l.type==="gap"?(t(),a("div",Un,[i[15]||(i[15]=r("span",null,"فاصل انتظار",-1)),r("b",null,o(n(dr)(l.start))+" - "+o(n(dr)(l.end)),1),r("small",null,o(n(br)(l.duration)),1)])):(t(),a("div",{key:1,class:W(["plan-item plan-item--group",{pending:l.pending}]),style:Lr(l.style)},[r("span",Kn,[(t(),a("svg",{viewBox:"0 0 24 24","aria-hidden":"true",innerHTML:n(Tr)(l.icon)},null,8,Wn))]),r("b",null,o(l.name),1),r("small",null,"مع "+o(((G=l.employee)==null?void 0:G.name)||"-"),1),r("span",Gn,o(l.pending?"بانتظار وقت متاح":`${n(dr)(l.start)} - ${n(dr)(l.end)}`),1),r("small",null,o(Pr(l.group))+" · "+o(n(br)(l.duration)),1)],6))],64)}),128))]),Er.value?(t(),a("div",Xn,"جاري تنسيق باقي الأقسام حسب الأوقات المتاحة.")):Mr.value?(t(),a("div",Qn,"لم نجد وقتًا متاحًا لـ "+o(Mr.value.name)+" بعد هذا الموعد. اختر بداية أبكر أو يومًا آخر.",1)):(t(),a("div",Jn,"تم تنسيق الجلسة تلقائيًا، والنهاية المتوقعة "+o(n(dr)(Ar.value))+".",1))])):N("",!0)],64)):(t(),a("div",An,[...i[11]||(i[11]=[r("b",null,"ابدأ باختيار التاريخ",-1),S("اختر يومًا من التقويم لعرض الأوقات المتاحة",-1)])]))],64))}},rt={key:0,role:"status"},et={key:1,role:"status"},nt={__name:"HomeVisitMap",setup(rr){const{state:e}=pr(),$=nr(null),u=nr(""),k=nr(!0);let h,j=!1;const D=w=>{u.value=w.detail,k.value=!1};return $r(async()=>{window.addEventListener("sami-map-error",D);try{if(!vr.maps_key)throw new Error("الخريطة غير متاحة حالياً. يمكنك استخدام موقعي الحالي لتحديد عنوان الزيارة.");if(window.SamiHomeMap||await new Promise((w,C)=>{const P=document.createElement("script");P.src=ee("/js/home-service-map.js"),P.onload=w,P.onerror=()=>C(new Error("تعذر تحميل الخريطة. يمكنك استخدام موقعي الحالي.")),document.head.appendChild(P)}),j)return;if(h=await window.SamiHomeMap.create($.value,{key:vr.maps_key,latitude:vr.latitude,longitude:vr.longitude,radiusKm:vr.radius_km,onSelect:w=>{e.homeLatitude=w.latitude,e.homeLongitude=w.longitude}}),j){h==null||h.destroy();return}h==null||h.select(e.homeLatitude,e.homeLongitude)}catch(w){u.value=w.message}finally{k.value=!1}}),or(()=>[e.homeLatitude,e.homeLongitude],([w,C])=>h==null?void 0:h.select(w,C)),ne(()=>{j=!0,h==null||h.destroy(),window.removeEventListener("sami-map-error",D)}),(w,C)=>(t(),a("div",null,[C[0]||(C[0]=r("p",null,"اضغط على الخريطة لتحديد موقع الزيارة داخل نطاق التغطية المظلل.",-1)),k.value?(t(),a("p",rt,"جارٍ تحميل الخريطة...")):N("",!0),u.value?(t(),a("p",et,o(u.value),1)):N("",!0),hr(r("div",{ref_key:"element",ref:$,"aria-label":"خريطة موقع الزيارة ونطاق التغطية",style:{height:"340px",width:"100%","border-radius":"12px"}},null,512),[[Dr,!u.value]])]))}},tt={class:"card",style:{padding:"20px","margin-bottom":"20px"},dir:"rtl"},at=["value"],ot=["href"],it={key:1,role:"alert"},st={key:2,role:"alert"},lt={__name:"HomeVisitLocation",setup(rr){const{state:e,homeFee:$,homeCovered:u}=pr(),{state:k}=Ur(),h=nr("");function j(){if(h.value="",!navigator.geolocation){h.value="تحديد الموقع غير متاح؛ أدخل الإحداثيات.";return}navigator.geolocation.getCurrentPosition(D=>{e.homeLatitude=D.coords.latitude,e.homeLongitude=D.coords.longitude},()=>{h.value="تعذر تحديد الموقع. اسمح بالوصول للموقع أو أدخل الإحداثيات."})}return(D,w)=>(t(),a("section",tt,[w[7]||(w[7]=r("h3",null,"عنوان الزيارة المنزلية",-1)),r("label",null,[w[4]||(w[4]=S("المدينة ",-1)),hr(r("select",{"onUpdate:modelValue":w[0]||(w[0]=C=>n(e).homeCityId=C),required:""},[w[3]||(w[3]=r("option",{value:"",disabled:""},"اختر المدينة",-1)),(t(!0),a(Y,null,Z(n(vr).cities,C=>(t(),a("option",{key:C.id,value:C.id},o(n(Cr)(C,"name",n(k).lang))+" — "+o(C.home_service_fee)+" ر.س",9,at))),128))],512),[[te,n(e).homeCityId]])]),r("p",null,"رسوم الزيارة: "+o(n($))+" ر.س (قبل الضريبة)",1),r("button",{type:"button",onClick:j},"استخدام موقعي الحالي"),r("label",null,[w[5]||(w[5]=S("خط العرض ",-1)),hr(r("input",{"onUpdate:modelValue":w[1]||(w[1]=C=>n(e).homeLatitude=C),type:"number",step:"any",min:"-90",max:"90",required:""},null,512),[[Hr,n(e).homeLatitude]])]),r("label",null,[w[6]||(w[6]=S("خط الطول ",-1)),hr(r("input",{"onUpdate:modelValue":w[2]||(w[2]=C=>n(e).homeLongitude=C),type:"number",step:"any",min:"-180",max:"180",required:""},null,512),[[Hr,n(e).homeLongitude]])]),n(e).homeLatitude!==""&&n(e).homeLongitude!==""?(t(),a("a",{key:0,href:`https://maps.google.com/?q=${Number(n(e).homeLatitude)},${Number(n(e).homeLongitude)}`,target:"_blank",rel:"noopener"},"عرض موقع الزيارة على خرائط جوجل",8,ot)):N("",!0),gr(nt),r("p",null,"التغطية حتى "+o(n(vr).radius_km)+" كم من المركز الموضح.",1),n(u)?N("",!0):(t(),a("p",it,"اختر المدينة وحدد موقعاً داخل نطاق التغطية للمتابعة.")),h.value?(t(),a("p",st,o(h.value),1)):N("",!0)]))}},dt={class:"card detail-card"},pt={class:"d-grid"},ct={class:"d-cell"},gt={class:"d-cell"},ut={class:"d-cell"},xt={class:"d-cell"},mt={class:"card detail-card"},ht={class:"timeline-cards"},bt={class:"tl-main"},ft={class:"with"},vt={class:"tl-time"},yt={class:"tm"},wt={class:"dr"},kt={key:1,class:"card detail-card products-detail-card"},_t={class:"upsell"},$t=["src","alt"],zt={class:"inf"},Mt={class:"p"},Ct=["disabled","onClick"],St={__name:"ConfirmStep",setup(rr){const{state:e,selSvcs:$,totalDur:u}=pr(),{current:k}=_r(),{user:h,isAuthenticated:j}=Kr(),{state:D,products:w,addToCart:C,setQty:P}=Wr();$r(()=>{j.value&&h.value&&!e.cust.name&&(e.cust.name=[h.value.first_name,h.value.last_name].filter(Boolean).join(" "),e.cust.phone=h.value.mobile||"",e.cust.mail=h.value.email||"")});const U=v(()=>e.date?Nr(e.date):""),c=v(()=>{const M=new Map;$.value.forEach(y=>{const _=String(y.categoryId??y.categoryName??y.id);M.has(_)||M.set(_,{id:_,name:y.categoryName||y.name,services:[]}),M.get(_).services.push(y)});const p=y=>{if(!y)return Number.MAX_SAFE_INTEGER;const[_,L]=String(y).split(":").map(Number);return Number.isFinite(_)&&Number.isFinite(L)?_*60+L:Number.MAX_SAFE_INTEGER};return[...M.values()].map(y=>{var K;const _=[...y.services].sort((I,q)=>p(e.time[I.id])-p(e.time[q.id])),L=[...new Set(_.map(I=>{var q;return(q=e.emp[I.id])==null?void 0:q.name}).filter(Boolean))];return{...y,services:_,start:e.time[(K=_[0])==null?void 0:K.id]||"",duration:_.reduce((I,q)=>I+(Number(q.dur)||0),0),price:_.reduce((I,q)=>I+(Number(q.price)||0),0),employees:L}}).sort((y,_)=>p(y.start)-p(_.start))}),x=nr([]);or(()=>w.value.map(M=>`${M.id}:${M.stockQty}`).join(","),()=>{x.value=_e(w.value).map(M=>M.id)},{immediate:!0});const T=v(()=>x.value.map(M=>w.value.find(p=>p.id===M)).filter(Boolean).map(M=>({id:M.id,name:M.n,desc:M.d,price:M.pr,img:M.image||M.img||"/images/generated/products/care-set-card-hq.png"})));function B(M){return M.id!=null&&!!D.cart[M.id]}function b(M){M.id!=null&&(B(M)?P(M.id,0):C(M.id))}return(M,p)=>{var y,_;return Gr("RouterLink"),t(),a(Y,null,[(y=n(k))!=null&&y.home?(t(),mr(lt,{key:0})):N("",!0),p[20]||(p[20]=r("div",{class:"panel-head"},[r("h1",null,"تأكيد الحجز"),r("p",null,"راجع تفاصيل جلستك قبل تأكيد الحجز والدفع")],-1)),r("div",dt,[p[8]||(p[8]=r("h4",null,[r("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[r("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),r("path",{d:"M16 2v4M8 2v4M3 10h18"})]),S(" تفاصيل الموعد")],-1)),r("div",pt,[r("div",ct,[p[4]||(p[4]=r("small",null,"📍 الفرع",-1)),r("b",null,o(((_=n(k))==null?void 0:_.name)||"—"),1)]),r("div",gt,[p[5]||(p[5]=r("small",null,"📅 التاريخ",-1)),r("b",null,o(U.value),1)]),r("div",ut,[p[6]||(p[6]=r("small",null,"⏱️ المدة الإجمالية",-1)),r("b",null,o(n(br)(n(u))),1)]),r("div",xt,[p[7]||(p[7]=r("small",null,"✂️ عدد الخدمات",-1)),r("b",null,o(n($).length),1)])])]),r("div",mt,[p[9]||(p[9]=r("h4",null,[r("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[r("circle",{cx:"12",cy:"12",r:"9"}),r("path",{d:"M12 7v5l3 3"})]),S(" تفاصيل الجلسة")],-1)),r("div",ht,[(t(!0),a(Y,null,Z(c.value,L=>(t(),a("div",{key:L.id,class:"tl"},[r("div",bt,[r("b",null,o(L.name),1),r("div",ft,"مع "+o(L.employees.join("، ")||"—"),1)]),r("div",vt,[r("span",yt,o(n(dr)(L.start)),1),r("span",wt,o(L.duration)+" دقيقة · "+o(n(O)(L.price))+" ر.س",1)])]))),128))])]),T.value.length?(t(),a("div",kt,[p[10]||(p[10]=r("h4",null,[r("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[r("path",{d:"M12 2l2.9 6.2 6.6.8-4.9 4.6 1.3 6.6L12 17l-5.9 3.2 1.3-6.6L2.5 9l6.6-.8z"})]),S(" منتجات مناسبة لجلستك")],-1)),r("div",_t,[(t(!0),a(Y,null,Z(T.value,L=>(t(),a("div",{key:L.id||L.name,class:W(["up",{added:B(L)}])},[r("img",{src:L.img,alt:L.name,loading:"lazy"},null,8,$t),r("span",zt,[r("b",null,o(L.name),1),r("small",null,o(L.desc),1),r("span",Mt,o(n(O)(L.price))+" ر.س",1)]),r("button",{type:"button",disabled:L.id==null,onClick:K=>b(L)},o(B(L)?"✓ أضيف":"إضافة"),9,Ct)],2))),128))])])):N("",!0),N("",!0)],64)}}},Ft={class:"card detail-card"},Bt={key:0,class:"cod-deposit-alert"},Lt={class:"card detail-card payment-rewards-card"},Et={class:"rewards"},At={class:"rt"},Dt={class:"ri"},Tt=["innerHTML"],jt=["max","value","disabled"],Nt={class:"hint"},Pt={class:"rt"},It={class:"ri"},Ht=["innerHTML"],Vt=["max","value","disabled"],Yt={class:"hint"},qt={class:"coupon"},Rt={class:"ci"},Ot=["innerHTML"],Ut=["onKeydown"],Kt=["disabled"],Wt={class:"reward-total"},Gt={key:0},Xt={class:"trust-row"},Qt={class:"ti"},Jt=["innerHTML"],Zt={__name:"PayStep",setup(rr){const{state:e,priceParts:$,selSvcs:u,pointValue:k,couponDiscount:h,walletDiscount:j,loyaltyPointsUsed:D,loyaltyDiscount:w,payableTotal:C}=pr(),P=nr(!1);let U=0;$r(async()=>{var A,f;try{const F=await ke(),sr=((A=F==null?void 0:F.data)==null?void 0:A.balances)||{};e.walletBalance=Number(sr.wallet??0),e.loyaltyPoints=Number(sr.loyalty_points??0)}catch{}try{const F=await Xr();e.pointValue=Number(((f=F==null?void 0:F.data)==null?void 0:f.point_value)??.5)||.5}catch{}});const c=v(()=>Math.max(Number(e.walletBalance)||0,0)),x=v(()=>Math.max(parseInt(e.loyaltyPoints,10)||0,0)),T=v(()=>Math.max($.value.total-h.value,0)),B=v(()=>Math.min(j.value,T.value)),b=v(()=>Math.max($.value.total-h.value-B.value,0)),M=v(()=>Math.min(x.value,Math.ceil(b.value/k.value))),p=v(()=>B.value>0||D.value>0),y=v(()=>Math.round(($.value.total*.3+Number.EPSILON)*100)/100),_=v(()=>c.value>=y.value),L=v(()=>oe.methods({total:$.value.total,walletBalance:c.value,payable:C.value,hasRewards:p.value}));or(L,A=>{e.pay&&!A.some(f=>f.id===e.pay&&f.enabled)&&(e.pay=null)},{immediate:!0}),or([_,p,C],()=>{p.value&&e.pay==="cod"?e.pay=C.value>0?"card":null:!_.value&&e.pay==="cod"&&(e.pay=null)});const K=[["ضمان الجودة","نضمن لك أفضل تجربة",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>'],["دفع آمن","تقنيات تشفير متقدمة",'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>'],["حماية البيانات","بياناتك محمية بالكامل",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'],["دعم فوري","فريق دعم جاهز لخدمتك",'<path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>']],I={wallet:'<path d="M18 8V7a2 2 0 00-2-2H5a2 2 0 000 4h14a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2V7"/><path d="M16 13h.01"/>',gift:'<path d="M20 12v8H4v-8"/><path d="M2 7h20v5H2z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 110-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 100-5C13 2 12 7 12 7z"/>',coupon:'<path d="M4 7a2 2 0 012-2h12a2 2 0 012 2v3a2 2 0 000 4v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3a2 2 0 000-4z"/><path d="M9 9h.01M15 15h.01M16 8l-8 8"/>'};function q(A,f){const F=Number(A);return Number.isFinite(F)?Math.max(0,Math.min(F,f)):0}function er(){e.rewards.useWallet=!e.rewards.useWallet,e.rewards.useWallet?e.rewards.walletAmount=q(e.rewards.walletAmount||T.value,Math.min(c.value,T.value)):e.rewards.walletAmount=0}function g(A){e.rewards.walletAmount=q(A,Math.min(c.value,T.value)),e.rewards.useWallet=e.rewards.walletAmount>0}function d(){e.rewards.useLoyalty=!e.rewards.useLoyalty,e.rewards.useLoyalty?e.rewards.loyaltyPoints=Math.min(e.rewards.loyaltyPoints||M.value,M.value):e.rewards.loyaltyPoints=0}function m(A){const f=Math.max(0,Math.min(parseInt(A,10)||0,M.value));e.rewards.loyaltyPoints=f,e.rewards.useLoyalty=f>0}async function E(){const A=e.rewards.couponCode.trim();if(!A){e.rewards.couponStatus="bad",e.rewards.couponMessage="أدخل كود الخصم أولًا";return}P.value=!0;const f=++U;try{const F=await he(A,u.value.map(yr=>yr.id));if(f!==U||e.rewards.couponCode.trim()!==A)return;if(!(F!=null&&F.valid)){e.rewards.couponApplied="",e.rewards.couponDiscount=0,e.rewards.couponStatus="bad",e.rewards.couponMessage=(F==null?void 0:F.message)||"كود الخصم غير صالح";return}const sr=Math.max(0,Number(F.effective_discount)||0);e.rewards.couponCode=A,e.rewards.couponApplied=A,e.rewards.couponDiscount=sr,e.rewards.couponStatus="ok",e.rewards.couponMessage=`تم تطبيق خصم ${O(Math.round(sr))} ر.س`}catch(F){e.rewards.couponApplied="",e.rewards.couponDiscount=0,e.rewards.couponStatus="bad",e.rewards.couponMessage=F.message||"تعذّر التحقق من الكوبون"}finally{P.value=!1}}function Q(){U++,e.rewards.couponApplied="",e.rewards.couponDiscount=0,e.rewards.couponStatus="",e.rewards.couponMessage=""}return or(()=>u.value.map(A=>`${A.id}:${A.price}`).join("|"),Q),or([c,T],()=>{e.rewards.useWallet&&g(e.rewards.walletAmount)}),or(M,()=>{e.rewards.useLoyalty&&m(e.rewards.loyaltyPoints)}),(A,f)=>(t(),a(Y,null,[f[13]||(f[13]=r("div",{class:"panel-head"},[r("h1",null,"الدفع"),r("p",null,"اختر طريقة الدفع المناسبة وأكمل حجزك")],-1)),r("div",Ft,[f[7]||(f[7]=r("h4",null,"اختر طريقة الدفع",-1)),gr(me,{modelValue:n(e).pay,"onUpdate:modelValue":f[0]||(f[0]=F=>n(e).pay=F),methods:L.value},null,8,["modelValue","methods"]),!_.value&&!p.value?(t(),a("div",Bt,[f[5]||(f[5]=S(" 💡 ",-1)),f[6]||(f[6]=r("b",null,"ملاحظة الدفع عند الوصول:",-1)),S(" يتطلب توفر عربون بنسبة 30% ("+o(n(O)(y.value))+" ر.س) في رصيد محفظتك لتأكيد الحجز. رصيدك الحالي: "+o(n(O)(c.value))+" ر.س. ",1)])):N("",!0),f[8]||(f[8]=r("div",{class:"secure-line"},"🔒 جميع عمليات الدفع آمنة ومشفرة",-1))]),r("div",Lt,[f[12]||(f[12]=r("h4",null,[r("span",{class:"step-dot"},"2"),S(" استخدام العروض و المكافآت")],-1)),r("div",Et,[r("div",{class:W(["rw",{on:n(e).rewards.useWallet}])},[r("div",At,[r("span",Dt,[(t(),a("svg",{width:"19",height:"19",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:I.wallet},null,8,Tt))]),r("span",null,[f[9]||(f[9]=r("b",null,"استخدام من المحفظة",-1)),r("small",null,"الرصيد الحالي: "+o(n(O)(c.value))+" ر.س",1)]),r("span",{class:W(["switch",{on:n(e).rewards.useWallet}]),onClick:er},null,2)]),r("input",{type:"number",min:"0",max:Math.min(c.value,T.value),step:"1",value:n(e).rewards.walletAmount,disabled:!n(e).rewards.useWallet,onInput:f[1]||(f[1]=F=>g(F.target.value))},null,40,jt),r("span",Nt,"المبلغ المتاح حتى "+o(n(O)(Math.round(Math.min(c.value,T.value))))+" ر.س",1)],2),r("div",{class:W(["rw",{on:n(e).rewards.useLoyalty}])},[r("div",Pt,[r("span",It,[(t(),a("svg",{width:"19",height:"19",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:I.gift},null,8,Ht))]),r("span",null,[f[10]||(f[10]=r("b",null,"استخدام نقاط الولاء",-1)),r("small",null,"لديك "+o(n(O)(x.value))+" نقطة",1)]),r("span",{class:W(["switch",{on:n(e).rewards.useLoyalty}]),onClick:d},null,2)]),r("input",{type:"number",min:"0",max:M.value,step:"1",value:n(e).rewards.loyaltyPoints,disabled:!n(e).rewards.useLoyalty,onInput:f[2]||(f[2]=F=>m(F.target.value))},null,40,Vt),r("span",Yt,"تساوي خصم "+o(n(O)(Math.round(n(D)*n(k))))+" ر.س",1)],2)]),r("div",qt,[r("span",Rt,[(t(),a("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:I.coupon},null,8,Ot))]),hr(r("input",{"onUpdate:modelValue":f[3]||(f[3]=F=>n(e).rewards.couponCode=F),placeholder:"أدخل كود الخصم",onInput:f[4]||(f[4]=F=>n(e).rewards.couponApplied&&n(e).rewards.couponCode!==n(e).rewards.couponApplied?Q():null),onKeydown:Sr(Fr(E,["prevent"]),["enter"])},null,40,Ut),[[Hr,n(e).rewards.couponCode]]),n(e).rewards.couponApplied?(t(),a("button",{key:0,type:"button",class:"coupon-clear",onClick:Q},"إلغاء")):N("",!0),r("button",{type:"button",onClick:E,disabled:P.value},o(P.value?"...":"تطبيق"),9,Kt)]),n(e).rewards.couponMessage?(t(),a("p",{key:0,class:W(["coupon-msg",n(e).rewards.couponStatus])},o(n(e).rewards.couponMessage),3)):N("",!0),r("div",Wt,[f[11]||(f[11]=r("span",null,"المبلغ بعد المكافآت",-1)),r("b",null,o(n(O)(Math.round(n(C))))+" ر.س",1),n(h)||B.value||n(w)?(t(),a("small",Gt," تم خصم "+o(n(O)(Math.round(n(h)+B.value+n(w))))+" ر.س ",1)):N("",!0)])]),r("div",Xt,[(t(),a(Y,null,Z(K,(F,sr)=>r("div",{key:sr,class:"trust"},[r("span",Qt,[(t(),a("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7",innerHTML:F[2]},null,8,Jt))]),r("b",null,o(F[0]),1),r("small",null,o(F[1]),1)])),64))])],64))}},ra=ae(Zt,[["__scopeId","data-v-7183b20a"]]),ea={class:"success-wrap"},na={class:"suc-grid"},ta={class:"card suc-details"},aa={class:"sd-row"},oa={class:"k"},ia=["innerHTML"],sa={class:"v"},la={class:"sd-row"},da={class:"k"},pa=["innerHTML"],ca={class:"v"},ga={class:"sd-row"},ua={class:"k"},xa=["innerHTML"],ma={class:"v"},ha={class:"sd-row"},ba={class:"k"},fa=["innerHTML"],va={class:"v"},ya={class:"sd-row"},wa={class:"k"},ka=["innerHTML"],_a={class:"v"},$a={class:"sd-row"},za={class:"k"},Ma=["innerHTML"],Ca={class:"card qr-card"},Sa={class:"code"},Fa={class:"suc-actions"},Ba={class:"suc-perks"},La={class:"ti"},Ea=["innerHTML"],Aa="color:var(--gold-deep);font-family:var(--font-d);font-size:17px",Da={__name:"BookingSuccess",emits:["home","calendar","share"],setup(rr,{emit:e}){const{state:$,selSvcs:u,totalDur:k,priceParts:h}=pr(),{current:j}=_r(),D=e,w=v(()=>h.value),C=v(()=>$.date?Nr($.date):""),P=v(()=>[...new Set(u.value.map(B=>{var b;return(b=$.emp[B.id])==null?void 0:b.name}).filter(Boolean))]),U=v(()=>{var B;return{r:$.bookRef||"",b:((B=j.value)==null?void 0:B.name)||"",d:C.value,u:br(k.value),e:P.value.join("، "),p:w.value.total,s:u.value.map(b=>{var M;return[b.name,dr($.time[b.id]),((M=$.emp[b.id])==null?void 0:M.name)||"",b.price]})}}),c=v(()=>pe(U.value)),x={pin:'<path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>',cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>',scis:'<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"/>',user:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',card:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>'},T=[["خدمة VIP","تجربة فاخرة مصممة لراحتك",'<path d="M2 8l4 4 6-8 6 8 4-4v10a2 2 0 01-2 2H4a2 2 0 01-2-2z"/>'],["بياناتك آمنة","نضمن لك خصوصية وأمان بياناتك",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'],["تعديل الحجز","يمكنك تعديل أو إلغاء الحجز قبل موعده",'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>'],["دعم عملاء 24/7","نحن هنا لخدمتك دائمًا",'<path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>']];return(B,b)=>{var M;return t(),a("div",ea,[b[14]||(b[14]=kr('<div class="suc-ic"><span class="spark s1">✦</span><span class="spark s2">✧</span><svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M20 6L9 17l-5-5"></path></svg></div><h1>تم تأكيد حجزك بنجاح!</h1><p class="sub">نتطلع لخدمتك وتقديم تجربة استثنائية تليق بك</p>',3)),r("div",na,[r("div",ta,[b[9]||(b[9]=r("h4",null,"تفاصيل الحجز",-1)),r("div",aa,[r("span",oa,[(t(),a("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:x.pin},null,8,ia)),b[3]||(b[3]=S(" الفرع",-1))]),r("span",sa,o(((M=n(j))==null?void 0:M.name)||"—"),1)]),r("div",la,[r("span",da,[(t(),a("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:x.cal},null,8,pa)),b[4]||(b[4]=S(" التاريخ",-1))]),r("span",ca,o(C.value),1)]),r("div",ga,[r("span",ua,[(t(),a("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:x.info},null,8,xa)),b[5]||(b[5]=S(" مدة الجلسة",-1))]),r("span",ma,o(n(br)(n(k))),1)]),r("div",ha,[r("span",ba,[(t(),a("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:x.scis},null,8,fa)),b[6]||(b[6]=S(" الخدمات",-1))]),r("span",va,o(n(u).map(p=>`${p.name} (${n(dr)(n($).time[p.id])})`).join(" + ")),1)]),r("div",ya,[r("span",wa,[(t(),a("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:x.user},null,8,ka)),b[7]||(b[7]=S(" الفريق",-1))]),r("span",_a,o(P.value.join("، ")),1)]),r("div",$a,[r("span",za,[(t(),a("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:x.card},null,8,Ma)),b[8]||(b[8]=S(" المبلغ التقديري",-1))]),r("span",{class:"v",style:Aa},o(n(O)(w.value.total))+" ر.س",1)])]),r("div",Ca,[b[10]||(b[10]=r("h4",{style:{"font-family":"var(--font-d)","font-size":"16px",color:"var(--ink)"}},"رقم الفاتورة",-1)),r("div",Sa,o(n($).bookRef||"—"),1),gr(ce,{url:c.value},null,8,["url"])])]),r("div",Fa,[r("button",{class:"btn btn-gold",onClick:b[0]||(b[0]=p=>D("home"))},[...b[11]||(b[11]=[r("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[r("path",{d:"M3 9l9-6 9 6v11a1 1 0 01-1 1H4a1 1 0 01-1-1z"})],-1),S(" العودة إلى الرئيسية",-1)])]),r("button",{class:"btn btn-line",onClick:b[1]||(b[1]=p=>D("calendar"))},[...b[12]||(b[12]=[r("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[r("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),r("path",{d:"M16 2v4M8 2v4M3 10h18M12 14v4M10 16h4"})],-1),S(" إضافة للتقويم",-1)])]),r("button",{class:"btn btn-line",onClick:b[2]||(b[2]=p=>D("share"))},[...b[13]||(b[13]=[kr('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"></path></svg> مشاركة الحجز',2)])])]),r("div",Ba,[(t(),a(Y,null,Z(T,(p,y)=>r("div",{key:y,class:"trust"},[r("span",La,[(t(),a("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7",innerHTML:p[2]},null,8,Ea))]),r("b",null,o(p[0]),1),r("small",null,o(p[1]),1)])),64))])])}}},Ta={key:0,class:"card"},ja={key:0,class:"br-img"},Na=["src","alt"],Pa={key:1,class:"sum-row"},Ia={class:"v"},Ha={key:2,class:"sum-row"},Va={class:"v"},Ya={class:"sum-row"},qa={class:"v"},Ra={class:"sum-row"},Oa={class:"v"},Ua={key:3,class:"sum-row"},Ka={class:"v"},Wa={key:4,class:"sum-row"},Ga={class:"v"},Xa={class:"sum-svcs"},Qa={class:"nm"},Ja={class:"pr"},Za=["onClick"],ro={key:5,class:"sum-svcs"},eo={class:"nm"},no={class:"pr"},to={class:"sum-price"},ao={class:"sp-row"},oo={class:"sp-row"},io={class:"sp-total"},so={class:"v"},lo={class:"sum-note"},po={width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",style:{flex:"none"}},co={__name:"BookingSummary",setup(rr){const{state:e,selSvcs:$,totalDur:u,priceParts:k,toggleSvc:h,selectedProducts:j}=pr(),{current:D}=_r(),w=nr(!1),C=v(()=>e.services.length>0);or(C,c=>{c?ie(()=>requestAnimationFrame(()=>{w.value=!0})):w.value=!1},{immediate:!0});const P=v(()=>k.value),U=v(()=>e.date?Nr(e.date):"");return(c,x)=>{var T;return t(),a("div",{id:"summary",class:W({show:w.value})},[C.value?(t(),a("div",Ta,[x[14]||(x[14]=r("h3",null,[r("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"var(--gold-deep)","stroke-width":"1.8"},[r("path",{d:"M9 11l3 3L22 4"}),r("path",{d:"M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"})]),S(" ملخص الحجز")],-1)),n(D)?(t(),a("div",ja,[n(D).image?(t(),a("img",{key:0,src:n(D).image,alt:n(D).name},null,8,Na)):N("",!0)])):N("",!0),n(D)?(t(),a("div",Pa,[x[0]||(x[0]=r("span",{class:"k"},"📍 الفرع",-1)),r("span",Ia,o(n(D).name),1)])):N("",!0),n(e).date?(t(),a("div",Ha,[x[1]||(x[1]=r("span",{class:"k"},"📅 التاريخ",-1)),r("span",Va,o(U.value),1)])):N("",!0),r("div",Ya,[x[2]||(x[2]=r("span",{class:"k"},"⏱️ المدة الإجمالية",-1)),r("span",qa,o(n(br)(n(u))),1)]),r("div",Ra,[x[3]||(x[3]=r("span",{class:"k"},"✂️ عدد الخدمات",-1)),r("span",Oa,o(n($).length)+" "+o(n($).length>2?"خدمات":"خدمة"),1)]),n(e).mode?(t(),a("div",Ua,[x[4]||(x[4]=r("span",{class:"k"},"👤 الموظفون",-1)),r("span",Ka,o(n(e).mode==="auto"?"اختيار تلقائي ذكي":"اختيار يدوي"),1)])):N("",!0),(T=n(D))!=null&&T.home?(t(),a("div",Wa,[x[5]||(x[5]=r("span",{class:"k"},"رسوم الزيارة المنزلية",-1)),r("span",Ga,o(n(O)(P.value.homeFee))+" ر.س",1)])):N("",!0),r("div",Xa,[(t(!0),a(Y,null,Z(n($),B=>(t(),a("div",{key:B.id,class:"sum-svc"},[x[7]||(x[7]=r("i",{style:{background:"var(--gold)"}},null,-1)),r("span",Qa,o(B.name),1),r("span",Ja,o(n(O)(B.price))+" ر.س",1),r("button",{class:"rm","aria-label":"حذف",onClick:b=>n(h)(B)},[...x[6]||(x[6]=[r("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[r("path",{d:"M18 6L6 18M6 6l12 12"})],-1)])],8,Za)]))),128))]),n(j).length?(t(),a("div",ro,[(t(!0),a(Y,null,Z(n(j),B=>(t(),a("div",{key:B.id,class:"sum-svc"},[r("span",eo,o(B.n)+" ? "+o(B.qty),1),r("span",no,o(n(O)(B.pr*B.qty))+" ?.?",1)]))),128))])):N("",!0),r("div",to,[r("div",ao,[x[8]||(x[8]=r("span",null,"المجموع الفرعي",-1)),r("span",null,o(n(O)(P.value.sub))+" ر.س",1)]),r("div",oo,[x[9]||(x[9]=r("span",null,"ضريبة القيمة المضافة (15%)",-1)),r("span",null,"+"+o(n(O)(P.value.vat))+" ر.س",1)]),r("div",io,[x[11]||(x[11]=r("span",{class:"k"},"المبلغ الإجمالي",-1)),r("span",so,[S(o(n(O)(P.value.total))+" ",1),x[10]||(x[10]=r("small",null,"ر.س",-1))])])]),r("div",lo,[(t(),a("svg",po,[...x[12]||(x[12]=[r("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},null,-1)])])),x[13]||(x[13]=S(" بياناتك محمية — يمكنك تعديل أو إلغاء الحجز قبل 6 ساعات من الموعد",-1))])])):N("",!0)],2)}}},go={class:"shell"},uo={class:"wrap"},xo={class:"panel",id:"panel"},mo={key:0,class:"success-wrap receipt-wrap"},ho={class:"suc-grid receipt-grid"},bo={class:"card suc-details"},fo={class:"sd-row"},vo={class:"v receipt-code"},yo={class:"sd-row"},wo={class:"v"},ko={class:"sd-row"},_o={class:"v"},$o={class:"sd-row"},zo={class:"v"},Mo={class:"sd-row"},Co={class:"v"},So={class:"sd-row"},Fo={class:"card suc-details receipt-services"},Bo={class:"footbar",id:"footbar"},Lo={class:"wrap in"},Eo={class:"fb-mid",id:"fbMid"},Ao={key:0,class:"tot"},Do=["disabled"],To="color:var(--gold-deep);font-family:var(--font-d);font-size:17px",Ko={__name:"BookingView",setup(rr){const{state:e,clearCart:$,cartItems:u}=Wr(),k=nr(null),h=se(),{current:j,locations:D,loadServiceLocations:w,setLocation:C}=_r(),{requireAuth:P,user:U}=Kr();w(),or([()=>h.query.branch,D],([H,z])=>{const X=Array.isArray(H)?H[0]:H;if(!X||!z.length)return;const tr=X==="hm"||X==="home-service"?z.find(ur=>ur.home):z.find(ur=>String(ur.id)===String(X));tr&&C(tr.id)},{immediate:!0});const{state:c,selSvcs:x,totalDur:T,priceParts:B,canProceed:b,nextLabel:M,reset:p,payableTotal:y,walletDiscount:_,loyaltyPointsUsed:L}=pr();le(ze,"booking"),de(k);const K=nr(!1),I=nr(""),q=nr(!1);function er(H){I.value=H,q.value=!0,clearTimeout(er._h),er._h=setTimeout(()=>{q.value=!1},2600)}or(()=>h.query.payment,H=>{H&&(H==="failed"?er("فشلت عملية الدفع الإلكتروني، يرجى إعادة المحاولة."):(H==="cancelled"||H==="cancel")&&er("تم إلغاء عملية الدفع."))},{immediate:!0});const g=v(()=>c.services.length>0),d=v(()=>c.step===4?y.value:B.value.total);function m(H){if(!H)return null;try{const z=String(H).replace(/-/g,"+").replace(/_/g,"/"),X=z.padEnd(z.length+(4-z.length%4)%4,"="),tr=JSON.parse(decodeURIComponent(escape(atob(X))));return tr&&typeof tr=="object"?tr:null}catch{return null}}const E=v(()=>m(h.query.receipt)),Q=v(()=>!!E.value),A=v(()=>{var H;return Array.isArray((H=E.value)==null?void 0:H.s)?E.value.s:[]}),f=v(()=>!Q.value&&!c.done&&g.value),F=v(()=>f.value?"minmax(0,1fr) minmax(285px,315px)":"1fr");function sr(){c.step>0&&(c.step--,scrollTo({top:0,behavior:"smooth"}))}function yr(){if(b.value){if(c.step===4){P(Ir);return}c.step++,scrollTo({top:0,behavior:"smooth"})}}function Pr(H){return`${H.getFullYear()}-${String(H.getMonth()+1).padStart(2,"0")}-${String(H.getDate()).padStart(2,"0")}`}async function Ir(){var H,z,X,tr,ur,Er,Mr,xr;if(!(K.value||!b.value)){K.value=!0;try{const wr=[(H=U.value)==null?void 0:H.first_name,(z=U.value)==null?void 0:z.last_name].filter(Boolean).join(" ");c.cust.name=c.cust.name||wr||((X=U.value)==null?void 0:X.username)||"",c.cust.phone=c.cust.phone||((tr=U.value)==null?void 0:tr.mobile)||"",c.cust.mail=c.cust.mail||((ur=U.value)==null?void 0:ur.email)||"";const Ar=(Er=j.value)!=null&&Er.home?0:Number((Mr=j.value)==null?void 0:Mr.id);if(c.pay==="cod"){const V=Math.round(B.value.total*.3);if((Number(c.walletBalance)||0)<V){er(`عذرًا، الدفع عند الوصول يتطلب توفر عربون 30% (${O(V)} ر.س) في محفظتك`);return}}const s=x.value.map(V=>{var J;return{subServices:[{id:V.id,date:Pr(c.date),time:c.time[V.id],duration:V.dur,staffId:(J=c.emp[V.id])==null?void 0:J.id}]}});await be($e(e.cart)),await fe({branch:Ar,...Ar===0?{city_id:c.homeCityId,latitude:c.homeLatitude,longitude:c.homeLongitude}:{},services:s,customerName:c.cust.name,mobileNo:c.cust.phone});const i=c.rewards,l=Number(_.value.toFixed(2)),G=L.value,ir=l>0,ar=G>0,lr=i.couponApplied||"",cr=y.value<=0?"card":c.pay==="cod"?"cod":c.pay||"card",R=await ve(cr,{wallet:ir,walletAmount:l,loyalty:ar,loyaltyPoints:G,couponCode:lr});if(R.payment_url){ge({b:((xr=j.value)==null?void 0:xr.name)||"",d:Nr(c.date),u:br(T.value),e:[...new Set(x.value.map(V=>{var J;return(J=c.emp[V.id])==null?void 0:J.name}).filter(Boolean))].join("، "),p:B.value.total,s:x.value.map(V=>{var J;return[V.name,dr(c.time[V.id]),((J=c.emp[V.id])==null?void 0:J.name)||"",V.price]})},R.attempt_id),window.location.href=R.payment_url;return}c.purchasedProducts=u.value.map(V=>({...V})),c.bookRef=R.invoice_id||null,c.done=!0,$(),scrollTo({top:0,behavior:"smooth"})}catch(wr){er(wr.message||"تعذّر إتمام الحجز، حاول مرة أخرى")}finally{K.value=!1}}}function zr(){p(),location.href="/"}return(H,z)=>(Gr("RouterLink"),t(),a("div",{ref_key:"root",ref:k},[r("div",go,[Q.value?N("",!0):(t(),mr(Ae,{key:0})),r("div",uo,[r("div",{class:W(["stage",{"stage-services-summary":n(c).step===0&&f.value}]),id:"stage",style:Lr(`grid-template-columns:${F.value}`)},[r("main",xo,[Q.value?(t(),a("div",mo,[z[10]||(z[10]=r("div",{class:"suc-ic"},[r("svg",{width:"44",height:"44",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.2"},[r("path",{d:"M20 6L9 17l-5-5"})])],-1)),z[11]||(z[11]=r("h1",null,"تفاصيل الحجز",-1)),z[12]||(z[12]=r("p",{class:"sub"},"تم فتح تفاصيل الحجز من رمز QR",-1)),r("div",ho,[r("div",bo,[z[8]||(z[8]=r("h4",null,"بيانات الحجز",-1)),r("div",fo,[z[2]||(z[2]=r("span",{class:"k"},"رقم الفاتورة",-1)),r("span",vo,o(E.value.r||"—"),1)]),r("div",yo,[z[3]||(z[3]=r("span",{class:"k"},"الفرع",-1)),r("span",wo,o(E.value.b||"—"),1)]),r("div",ko,[z[4]||(z[4]=r("span",{class:"k"},"التاريخ",-1)),r("span",_o,o(E.value.d||"—"),1)]),r("div",$o,[z[5]||(z[5]=r("span",{class:"k"},"مدة الجلسة",-1)),r("span",zo,o(E.value.u||"—"),1)]),r("div",Mo,[z[6]||(z[6]=r("span",{class:"k"},"الفريق",-1)),r("span",Co,o(E.value.e||"—"),1)]),r("div",So,[z[7]||(z[7]=r("span",{class:"k"},"المبلغ",-1)),r("span",{class:"v",style:To},o(n(O)(Number(E.value.p)||0))+" ر.س",1)])]),r("div",Fo,[z[9]||(z[9]=r("h4",null,"الخدمات",-1)),(t(!0),a(Y,null,Z(A.value,(X,tr)=>(t(),a("div",{key:tr,class:"receipt-service"},[r("b",null,o(X[0]),1),r("small",null,o(X[1]||"—")+" · "+o(X[2]||E.value.e||"—"),1),r("span",null,o(n(O)(Number(X[3])||0))+" ر.س",1)]))),128))])])])):n(c).done?(t(),mr(Da,{key:1,onHome:zr,onCalendar:z[0]||(z[0]=X=>er("تمت إضافة الموعد إلى التقويم")),onShare:z[1]||(z[1]=X=>er("تم نسخ رابط الحجز للمشاركة"))})):n(c).step===0?(t(),mr(an,{key:2})):n(c).step===1?(t(),mr(wn,{key:3})):n(c).step===2?(t(),mr(Zn,{key:4})):n(c).step===3?(t(),mr(St,{key:5})):(t(),mr(ra,{key:6}))]),hr(r("aside",{class:W(["summary booking-summary-compact",{show:f.value,"booking-summary-time":n(c).step===2}])},[gr(co)],2),[[Dr,f.value]])],6)])]),N("",!0),hr(r("div",Bo,[r("div",Lo,[r("button",{class:"btn btn-back",id:"btnBack",style:Lr({visibility:n(c).step===0?"hidden":"visible"}),onClick:sr},[...z[29]||(z[29]=[r("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[r("path",{d:"M5 12h14M13 6l6 6-6 6"})],-1),S(" السابق ",-1)])],4),r("div",Eo,[z[31]||(z[31]=r("span",null,"🔒 بياناتك محمية وآمنة",-1)),g.value?(t(),a("span",Ao,[z[30]||(z[30]=S("المبلغ الإجمالي ",-1)),r("b",null,o(n(O)(Math.round(d.value)))+" ر.س",1)])):N("",!0)]),r("button",{class:W(["btn",n(c).step===4?"btn-pay":"btn-gold"]),id:"btnNext",disabled:!n(b),onClick:yr},[S(o(n(M))+" ",1),z[32]||(z[32]=r("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.2"},[r("path",{d:"M19 12H5M11 18l-6-6 6-6"})],-1))],10,Do)])],512),[[Dr,!n(c).done&&!Q.value]]),r("div",{class:W(["pay-loading",{on:K.value}]),id:"payLoading"},[...z[33]||(z[33]=[r("div",{class:"pl-box"},[r("div",{class:"pl-ring"}),r("b",null,"جارٍ معالجة الدفع بأمان…"),r("small",null,"لا تغلق الصفحة، سيتم تأكيد حجزك خلال لحظات")],-1)])],2),r("div",{class:W(["toast",{on:q.value}]),id:"toast"},o(I.value),3)],512))}};export{Ko as default};
