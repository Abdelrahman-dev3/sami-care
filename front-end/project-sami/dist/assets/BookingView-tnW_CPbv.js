import{J as fr,K as jr,e as n,o as t,c as a,b as r,F as H,r as er,n as K,t as o,_ as Ur,i as $r,g as ar,v as zr,L as Jr,d as v,j as Zr,l as Fr,M as re,s as P,a as F,f as ur,y as Ar,u as Gr,N as ee,O as Er,D as sr,P as Br,w as Lr,G as _r,p as wr,Q as ne,E as te,S as ae,U as Hr,V as Kr,A as Wr,B as Xr,q as br,X as oe,Y as ie,Z as se}from"./index-CcVA_ZL6.js";import{u as le}from"./usePageStyles-C0KE2aJ5.js";import{u as de}from"./useInternalLinks-CIfsmaXv.js";import{u as cr,r as U,f as vr,a as pr,b as Ir}from"./useBooking-B7VyUOgJ.js";import{b as pe,B as ce,s as ge}from"./BookingQr-BLLvFtmk.js";import{f as ue,a as Qr,b as xe,P as me,v as he,s as be,c as fe,i as ve}from"./PaymentMethodList--CbQnJbL.js";import{s as ye}from"./serviceDetails-gQMMCHKA.js";import{s as we}from"./servicePrice-BKyCtkSr.js";import{F as ke}from"./FavoriteButton-DVDrHFVy.js";import{c as Vr,a as Nr,b as Rr}from"./giftIcons-C3hH12nn.js";import{_ as Pr}from"./SkeletonLoader-DnfsEbB7.js";import{G as _e}from"./GiftCodeRedeem-Du7_TSft.js";import{f as $e}from"./accountApi-DFcBKC64.js";import"./giftsApi-B3rWQLc_.js";function ze(tr,e=3,_=Math.random){const c=[...new Map(tr.filter(y=>y.stockQty>0).map(y=>[String(y.id),y])).values()];for(let y=c.length-1;y>0;y--){const b=Math.floor(_()*(y+1));[c[y],c[b]]=[c[b],c[y]]}return c.slice(0,e)}function Me(tr){return Object.entries(tr).filter(([,e])=>e>0).map(([e,_])=>({product_id:Number(e),qty:_}))}const Ce=`\r
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
`,Or=[{id:"s1",cat:"hair",name:"حلاقة عادية",desc:"حلاقة شعر عادية بقصات عصرية",dur:20,price:20},{id:"s2",cat:"hair",name:"حلاقة شعر + تحديد لحية",desc:"حلاقة شعر مع تحديد اللحية",dur:30,price:35},{id:"s3",cat:"hair",name:"حلاقة مع غسيل",desc:"حلاقة مع غسيل وتنظيف الشعر",dur:30,price:30},{id:"s4",cat:"hair",name:"حلاقة VIP",desc:"حلاقة فاخرة مع خدمة VIP",dur:50,price:80},{id:"s5",cat:"hair",name:"تنسيق اللحية",desc:"تنسيق وتجميل اللحية",dur:20,price:15},{id:"s6",cat:"hair",name:"تصفيف الشعر",desc:"تصفيف الشعر بالمنتجات المناسبة",dur:15,price:15},{id:"s7",cat:"skin",name:"تنظيف بشرة عميق",desc:"تنظيف عميق ينظف وينعش البشرة",dur:50,price:150},{id:"s8",cat:"skin",name:"تنظيف بشرة سريع",desc:"جلسة سريعة لإشراقة فورية",dur:30,price:80},{id:"s9",cat:"skin",name:"ماسك الذهب",desc:"ماسك فاخر لنضارة استثنائية",dur:25,price:90},{id:"s10",cat:"pedi",name:"بديكير عادي",desc:"عناية أساسية للأقدام والأظافر",dur:45,price:60},{id:"s11",cat:"pedi",name:"بديكير فاخر",desc:"عناية متكاملة مع تقشير وترطيب",dur:60,price:100},{id:"s12",cat:"pedi",name:"بديكير طبي",desc:"علاج تشققات القدم والمسامير",dur:60,price:120},{id:"s13",cat:"pedi",name:"إزالة جلد ميت",desc:"إزالة الجلد الميت من القدمين",dur:30,price:40},{id:"s14",cat:"mass",name:"مساج استرخاء للجسم",desc:"استرخاء عميق يجدد طاقتك",dur:60,price:180},{id:"s15",cat:"mass",name:"مساج رأس",desc:"جلسة قصيرة لتخفيف التوتر",dur:15,price:25},{id:"s16",cat:"mass",name:"مساج علاجي",desc:"مساج متخصص للعضلات المجهدة",dur:60,price:220},{id:"s17",cat:"bath",name:"حمام مغربي كلاسيكي",desc:"تقشير وتنقية بطقوس أصيلة",dur:60,price:200},{id:"s18",cat:"bath",name:"حمام مغربي ملكي",desc:"التجربة الكاملة مع ماسك وتدليك",dur:90,price:300}];for(const tr of Object.values(ye))for(const e of tr.variants||[])e.svcId&&!Or.some(_=>_.id===e.svcId)&&Or.push({id:e.svcId,cat:e.cat,name:e.name,desc:e.desc||"",dur:e.dur,price:e.price,hidden:!0});const Se=[{t:"اختيار الخدمات",ic:'<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"/>'},{t:"اختيار الموظف",ic:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>'},{t:"اختيار الوقت",ic:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>'},{t:"تأكيد الحجز",ic:'<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>'},{t:"الدفع",ic:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>'}],Fe={class:"wrap stepper",id:"stepperWrap"},Be={class:"steps",id:"steps"},Le=["data-i"],Ee={class:"n"},Ae=["onClick"],De=["innerHTML"],Te={__name:"BookingStepper",setup(tr){const{state:e}=cr();function _(c){c<e.step&&(e.step=c)}return(c,y)=>fr((t(),a("div",Fe,[r("div",Be,[(t(!0),a(H,null,er(n(Se),(b,E)=>(t(),a("div",{key:E,class:K(["step",{active:E===n(e).step,done:E<n(e).step}]),"data-i":E},[y[0]||(y[0]=r("div",{class:"bar"},[r("i")],-1)),r("span",Ee,o(E+1),1),r("span",{class:"bubble",onClick:N=>_(E)},[(t(),a("svg",{width:"21",height:"21",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7",innerHTML:b.ic},null,8,De))],8,Ae),r("label",null,o(b.t),1)],10,Le))),128))])],512)),[[jr,!n(e).done]])}},je={class:"branch-strip"},Ne=["src","alt"],Pe={class:"bi"},Ie={key:2},He={key:0,class:"empty-hint",style:{display:"grid",gap:"10px"}},Ve={class:"cat-row"},Re=["data-cat","onClick"],Ye=["src","alt"],qe={class:"lbl"},Oe={class:"cat-name"},Ue={key:0,class:"empty-hint"},Ge={key:1,class:"sub-block"},Ke={class:"sub-title"},We={class:"sub-title__main"},Xe={class:"tick"},Qe=["innerHTML"],Je={key:0,class:"empty-hint"},Ze={key:1,class:"subs"},rn=["data-svc","onClick"],en={class:"top"},nn={class:"si"},tn=["innerHTML"],an={class:"foot"},on={class:"dur"},sn={class:"prc"},ln={__name:"ServicesStep",setup(tr){const{state:e,hasSvc:_,toggleSvc:c}=cr(),{current:y,openPicker:b}=$r(),{state:E}=Gr(),N=h=>ee(h,E.lang),w=ar([]),S=ar(!0);zr(async()=>{try{const h=await Jr();w.value=h!=null&&h.status?h.data||[]:[]}catch{w.value=[]}finally{S.value=!1}});const V=v(()=>w.value.map(h=>({id:h.id,name:Fr(h,"name",E.lang),image:Zr(h.image)||h.feature_image||null}))),I=v(()=>w.value.find(h=>h.id===e.activeCat)||null),m=v(()=>Fr(I.value,"name",E.lang)),u=v(()=>Vr(I.value)),B=v(()=>{var h;return(((h=I.value)==null?void 0:h.services)||[]).map(f=>({id:f.id,categoryId:I.value.id,categoryNameT:re(I.value,"name"),get categoryName(){return N(this.categoryNameT)},icon:u.value,get name(){return Fr(f,"name",E.lang)},get desc(){return Fr(f,"description",E.lang)},dur:f.duration_min,default_price:f.default_price,branches:f.branches,price:we(f,y.value)}))}),D=h=>e.services.some(f=>f.categoryId===h),g=v(()=>B.value.filter(h=>_(h.id)).length),M=h=>({"--acc":Rr(h.icon)}),C=h=>Nr(h.icon);return(h,f)=>{var L;return t(),a(H,null,[f[6]||(f[6]=r("div",{class:"panel-head"},[r("h1",null,"اختر الخدمة التي تناسبك"),r("p",null,"يمكنك اختيار خدمة واحدة أو أكثر من أي قسم")],-1)),r("div",je,[(L=n(y))!=null&&L.image?(t(),a("img",{key:0,src:n(y).image,alt:n(y).name},null,8,Ne)):P("",!0),r("span",Pe,[n(y)?(t(),a(H,{key:0},[f[1]||(f[1]=F("مكان التنفيذ: ",-1)),r("b",null,o(n(y).name),1)],64)):(t(),a(H,{key:1},[F("يرجى اختيار الفرع لعرض أسعار الخدمات وحجز موعدك")],64)),r("button",{type:"button",class:"branch-picker-link",onClick:f[0]||(f[0]=$=>n(b)())},o(n(y)?"تغيير الفرع":"اختيار الفرع"),1),n(y)?(t(),a("small",Ie,o(n(y).address),1)):P("",!0)])]),S.value?(t(),a("div",He,[ur(Pr,{height:"64px","border-radius":"12px"}),ur(Pr,{height:"92px","border-radius":"12px"})])):(t(),a(H,{key:1},[r("div",Ve,[(t(!0),a(H,null,er(V.value,$=>(t(),a("div",{key:$.id,class:K(["cat",{sel:n(e).activeCat===$.id,"has-picks":D($.id)}]),"data-cat":$.id,onClick:R=>n(e).activeCat=$.id},[$.image?(t(),a("img",{key:0,src:$.image,alt:$.name},null,8,Ye)):P("",!0),f[2]||(f[2]=r("span",{class:"chk"},[r("svg",{width:"9",height:"9",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3"},[r("path",{d:"M20 6L9 17l-5-5"})])],-1)),r("span",qe,[r("span",Oe,o($.name),1)])],10,Re))),128))]),n(e).activeCat?(t(),a("div",Ge,[r("div",Ke,[r("span",We,[F(" خدمات "+o(m.value)+" ",1),r("span",Xe,[(t(),a("svg",{viewBox:"0 0 24 24","aria-hidden":"true",innerHTML:n(Nr)(u.value)},null,8,Qe))])]),r("small",null,o(g.value?g.value+" مختارة":"اختر خدمة أو أكثر"),1)]),B.value.length?(t(),a("div",Ze,[(t(!0),a(H,null,er(B.value,$=>(t(),a("div",{key:$.id,class:K(["sub",{sel:n(_)($.id)}]),"data-svc":$.id,style:Ar(M($)),onClick:R=>n(c)($)},[ur(ke,{type:"service",id:$.id},null,8,["id"]),r("div",en,[r("span",nn,[(t(),a("svg",{viewBox:"0 0 24 24","aria-hidden":"true",innerHTML:C($)},null,8,tn))]),r("b",null,o($.name),1),f[4]||(f[4]=r("span",{class:"chk"},[r("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3"},[r("path",{d:"M20 6L9 17l-5-5"})])],-1))]),r("small",null,o($.desc),1),r("div",an,[r("span",on,"🕐 "+o($.dur)+" دقيقة",1),r("span",sn,[F(o(n(U)($.price))+" ",1),f[5]||(f[5]=r("small",null,"ر.س",-1))])])],14,rn))),128))])):(t(),a("div",Je,"لا توجد خدمات متاحة حاليًا ضمن هذا القسم"))])):(t(),a("div",Ue,[...f[3]||(f[3]=[r("b",null,"اختر خدمة لعرض تفاصيلها",-1),F("اختر إحدى الخدمات الأساسية أعلاه لعرض الخدمات الفرعية المتاحة",-1)])]))],64))],64)}}},dn=Ur(ln,[["__scopeId","data-v-562dd9a2"]]),pn={class:"mode-grid"},cn=["aria-pressed"],gn=["aria-pressed"],un={key:0,class:"emp-section emp-section--groups"},xn={class:"emp-cat emp-cat--group"},mn={class:"cat-ico"},hn=["innerHTML"],bn={class:"emp-cat__info"},fn={class:"emp-cat__services"},vn={key:0,class:"empty-hint"},yn={key:1,class:"empty-hint"},wn={key:2,class:"emp-list emp-list--groups"},kn=["onClick"],_n=["onClick"],$n={key:1,class:"j-note card",style:{display:"flex",gap:"16px","align-items":"center",padding:"20px 24px","border-color":"var(--line)"}},zn={__name:"EmployeeStep",setup(tr){const{state:e,selSvcs:_,setEmployee:c}=cr(),{current:y}=$r(),b=Er({}),E=Er({}),N=["توفير الوقت","أفضل تقييم متاح","تنفيذ خدمات القسم بنفس الموظف","منع أي تعارض في المواعيد"],w=["اختر موظفًا واحدًا لكل قسم","الموظف المختار ينفذ كل خدمات القسم","تحكم كامل في فريق جلستك"],S=v(()=>{const p=new Map;return _.value.forEach(d=>{const x=String(d.categoryId??d.categoryName??d.id);p.has(x)||p.set(x,{id:x,name:d.categoryName||d.name,icon:d.icon||Vr(d.categoryId),services:[]}),p.get(x).services.push(d)}),[...p.values()]});function V(p){return[p.first_name,p.last_name].filter(Boolean).join(" ")||p.username||"موظف"}function I(p){return{"--acc":Rr(p.icon)}}function m(p){return`${p.services.length} ${p.services.length===1?"خدمة":"خدمات"}`}function u(p){return p.services.map(d=>d.name).join("، ")}function B(p){const d=p.services.map(Z=>b[Z.id]);if(!d.length||d.some(Z=>!Array.isArray(Z)))return[];const[x,...A]=d,nr=x.filter(Z=>A.every(Q=>Q.some(T=>String(T.id)===String(Z.id))));return[...new Map(nr.map(Z=>[String(Z.id),Z])).values()]}function D(p){return p.services.some(d=>E[d.id]||!Array.isArray(b[d.id]))}function g(p){const d=p.services.map(A=>e.emp[A.id]).filter(Boolean);if(d.length!==p.services.length)return null;const x=d[0];return d.every(A=>String(A.id)===String(x.id))?x:null}function M(p,d){var x;return String(((x=g(p))==null?void 0:x.id)??"")===String(d.id??"")}function C(p){const d=p.services.map(x=>_.value.findIndex(A=>String(A.id)===String(x.id))).filter(x=>x>=0);return d.length?Math.min(...d):-1}function h(p){const d=C(p);d!==-1&&_.value.slice(d).forEach(x=>{delete e.time[x.id]})}function f(p,d,{clearTimes:x=!0}={}){p.services.forEach(A=>c(A.id,d)),x&&h(p)}function L(){e.mode==="auto"&&S.value.forEach(p=>{B(p).length&&p.services.forEach(x=>{e.staffOptions[x.id]=b[x.id]||[],c(x.id,{id:null,name:"اختيار تلقائي"})})})}function $(p){const d=e.mode!==p;e.mode=p,d&&(e.time={},e.emp={}),L()}function R(p,d){e.mode="manual",f(p,d)}async function G(p){var d,x;if(!b[p.id]){E[p.id]=!0;try{const A=(d=y.value)!=null&&d.home?0:(x=y.value)==null?void 0:x.id,nr=await ue({branchId:A,serviceId:p.id}),Z=(Array.isArray(nr)?nr:[]).map(Q=>({id:Q.id,name:V(Q)}));b[p.id]=[...new Map(Z.map(Q=>[String(Q.id),Q])).values()],e.staffOptions[p.id]=b[p.id],L()}catch{b[p.id]=[]}finally{E[p.id]=!1}}}function J(){_.value.forEach(G)}return zr(J),sr(()=>_.value.map(p=>p.id),J),sr(()=>e.mode,L),(p,d)=>(t(),a(H,null,[d[14]||(d[14]=r("div",{class:"panel-head"},[r("h1",null,"اختر الموظف"),r("p",null,"اختر موظفًا واحدًا لكل قسم، وسيتم تطبيقه على كل الخدمات المختارة داخل هذا القسم")],-1)),r("div",pn,[r("div",{class:K(["mode dark",{sel:n(e).mode==="auto"}]),role:"button",tabindex:"0","aria-pressed":n(e).mode==="auto",onClick:d[0]||(d[0]=x=>$("auto")),onKeydown:[d[1]||(d[1]=Br(x=>$("auto"),["enter"])),d[2]||(d[2]=Br(Lr(x=>$("auto"),["prevent"]),["space"]))]},[d[7]||(d[7]=_r('<span class="chk"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"></path></svg></span><span class="mi"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="m13 2-9 12h7l-1 8 10-13h-7l0-7Z"></path></svg></span><h3>اختيار تلقائي</h3><div class="sub-t">سنختار لك أفضل فريق متاح</div><span class="flag">★ موصى به</span>',5)),r("ul",null,[(t(),a(H,null,er(N,(x,A)=>r("li",{key:A},[d[6]||(d[6]=r("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.6"},[r("path",{d:"M20 6L9 17l-5-5"})],-1)),F(" "+o(x),1)])),64))])],42,cn),r("div",{class:K(["mode",{sel:n(e).mode==="manual"}]),role:"button",tabindex:"0","aria-pressed":n(e).mode==="manual",onClick:d[3]||(d[3]=x=>$("manual")),onKeydown:[d[4]||(d[4]=Br(x=>$("manual"),["enter"])),d[5]||(d[5]=Br(Lr(x=>$("manual"),["prevent"]),["space"]))]},[d[9]||(d[9]=_r('<span class="chk"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" stroke-width="3"><path d="M20 6L9 17l-5-5"></path></svg></span><span class="mi"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span><h3>اختيار موظف محدد</h3><div class="sub-t">اختر موظفًا لكل قسم</div><span class="flag">تحكم كامل</span>',5)),r("ul",null,[(t(),a(H,null,er(w,(x,A)=>r("li",{key:A},[d[8]||(d[8]=r("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.6"},[r("path",{d:"M20 6L9 17l-5-5"})],-1)),F(" "+o(x),1)])),64))])],42,gn)]),n(e).mode==="manual"?(t(),a("div",un,[(t(!0),a(H,null,er(S.value,x=>(t(),a("div",{key:x.id,class:"emp-row emp-row--group",style:Ar(I(x))},[r("div",xn,[r("span",mn,[(t(),a("svg",{viewBox:"0 0 24 24","aria-hidden":"true",innerHTML:n(Nr)(x.icon)},null,8,hn))]),r("span",bn,[r("b",null,o(x.name),1),r("small",null,o(m(x)),1),r("span",fn,o(u(x)),1)])]),D(x)?(t(),a("div",vn,[ur(Pr,{height:"44px","border-radius":"8px"})])):B(x).length?(t(),a("div",wn,[r("button",{type:"button",class:"emp any",onClick:Lr(A=>R(x,B(x)[0]),["stop"])},[...d[10]||(d[10]=[_r('<span class="av" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span><b>أي موظف</b><span class="rate">الأنسب تلقائيًا</span>',3)])],8,kn),(t(!0),a(H,null,er(B(x),A=>(t(),a("button",{key:A.id,type:"button",class:K(["emp",{sel:M(x,A)}]),onClick:Lr(nr=>R(x,A),["stop"])},[d[11]||(d[11]=r("span",{class:"chk"},[r("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"#fff","stroke-width":"3"},[r("path",{d:"M20 6L9 17l-5-5"})])],-1)),d[12]||(d[12]=r("span",{class:"av","aria-hidden":"true"},null,-1)),r("b",null,o(A.name),1)],10,_n))),128))])):(t(),a("div",yn,"لا يوجد موظف متاح يمكنه تنفيذ كل خدمات هذا القسم"))],4))),128))])):P("",!0),n(e).mode==="auto"?(t(),a("div",$n,[...d[13]||(d[13]=[_r('<span style="flex:none;width:44px;height:44px;border-radius:13px;display:grid;place-items:center;background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M13 2L3 14h9l-1 8 10-12h-9z"></path></svg></span><p style="font-size:13.5px;color:#5c5442;line-height:1.9;"><b style="color:var(--ink);">تم اختيار موظف واحد مناسب لكل قسم تلقائيًا.</b> سيتم تنفيذ كل خدمات القسم بنفس الموظف، وتقدر تشوف الأوقات في الخطوة الجاية.</p>',2)])])):P("",!0)],64))}},Mn={class:"card branch-strip"},Cn={class:"cells"},Sn={class:"cell"},Fn={class:"cell"},Bn={class:"loyalty-preview","aria-live":"polite"},Ln={class:"card cal"},En={class:"cal-head"},An={class:"cal-cells"},Dn=["disabled","onClick"],Tn={class:"dow"},jn={class:"dnum"},Nn={key:0,class:"empty-hint",style:{"margin-top":"10px"}},Pn={class:"date-line"},In={class:"card detail-card time-start-card",style:{"margin-top":"14px"}},Hn={class:"periods booking-periods"},Vn={key:1,class:"empty-hint"},Rn={key:2,class:"empty-hint"},Yn={key:3,class:"empty-hint"},qn={key:4,class:"slots initial-slots"},On=["onClick"],Un={key:0,class:"tag"},Gn={key:5,class:"best-slot"},Kn={key:0,class:"session-plan"},Wn={class:"plan-track"},Xn={key:0,class:"plan-gap"},Qn={class:"plan-icon"},Jn=["innerHTML"],Zn={class:"t"},rt={key:0,class:"plan-note plan-note--pending"},et={key:1,class:"plan-note plan-note--warn"},nt={key:2,class:"plan-note"},tt={__name:"TimeStep",setup(tr){const e=["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],_=["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],{state:c,selSvcs:y,totalDur:b,priceParts:E,setEmployee:N,setTime:w}=cr(),S=ar(5),V=v(()=>Math.floor(E.value.total/100)*S.value),I=new Date;I.setHours(0,0,0,0);const m=ar(new Date(I)),u=ar("all"),B=Er({}),D=Er({}),g=Er({}),M=v(()=>Array.from({length:7},(s,i)=>{const l=new Date(m.value);return l.setDate(l.getDate()+i),l}));v(()=>m.value.getTime()<=I.getTime());const C=v(()=>{const s=M.value;return s[0].getMonth()===s[6].getMonth()?`${s[0].getDate()} - ${s[6].getDate()} ${_[s[0].getMonth()]}`:`${s[0].getDate()} ${_[s[0].getMonth()]} - ${s[6].getDate()} ${_[s[6].getMonth()]}`}),h=s=>s<I,f=s=>c.date&&s.getTime()===c.date.getTime(),L=v(()=>{const s=new Map;return y.value.forEach(i=>{const l=String(i.categoryId??i.categoryName??i.id);s.has(l)||s.set(l,{id:l,name:i.categoryName||i.name,icon:i.icon||Vr(i.categoryId),services:[]}),s.get(l).services.push(i)}),[...s.values()]}),$=v(()=>L.value.flatMap(s=>s.services)),R=v(()=>$.value[0]||null);v(()=>L.value[0]||null);const G=v(()=>R.value?c.time[R.value.id]:"");function J(s){return`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}-${String(s.getDate()).padStart(2,"0")}`}function p(s){if(!s||typeof s!="string")return null;const[i,l]=s.split(":").map(Number);return!Number.isFinite(i)||!Number.isFinite(l)?null:i*60+l}function d(s){if(!Number.isFinite(s))return"";const i=1440,l=(Math.round(s)%i+i)%i;return`${String(Math.floor(l/60)).padStart(2,"0")}:${String(l%60).padStart(2,"0")}`}function x(s){return[...new Set((Array.isArray(s)?s:[]).filter(i=>p(i)!==null))].sort((i,l)=>p(i)-p(l))}function A(s){$.value.slice(s).forEach(i=>{delete c.time[i.id]})}function nr(s,{apply:i=!1}={}){var dr;const l=p(s),W=$.value;if(!W.length||l===null)return{complete:!1,rows:[],end:""};let lr=l;const ir=[];for(let gr=0;gr<W.length;gr++){const O=W[gr],q=x(B[O.id]),rr=gr===0?q.includes(s)?s:q.find(yr=>p(yr)>=lr):q.find(yr=>p(yr)>=lr);if(!rr){i&&A(gr);const yr=ir[ir.length-1];return{complete:!1,rows:ir,missing:O,end:(yr==null?void 0:yr.end)||""}}const Yr=p(rr),qr=Yr+(Number(O.dur)||0);ir.push({service:O,start:rr,end:d(qr),expected:d(lr),shifted:Yr>lr}),i&&w(O.id,rr),i&&c.mode==="auto"&&((dr=D[O.id])!=null&&dr[rr])&&N(O.id,D[O.id][rr]),lr=qr}return{complete:!0,rows:ir,end:d(lr)}}function Z(){G.value&&nr(G.value,{apply:!0})}function Q(s){nr(s,{apply:!0})}function T(s){return{"--acc":Rr(s.icon)}}function k(s){return s.services.reduce((i,l)=>i+(Number(l.dur)||0),0)}function j(s){const i=s.services.map(W=>c.emp[W.id]).filter(Boolean);if(!i.length)return null;const l=i[0];return i.every(W=>String(W.id)===String(l.id)),l}function xr(s){return`${s.services.length} ${s.services.length===1?"خدمة":"خدمات"}`}function Mr(s){h(s)||(c.date=s,c.time={},Object.keys(B).forEach(i=>{delete B[i]}))}async function Cr(s){var W;const i=c.emp[s.id];if(!c.date||!i){delete B[s.id];return}const l=J(c.date);g[s.id]=!0;try{const lr=c.mode==="auto"?c.staffOptions[s.id]||[]:[i],ir=await Promise.all(lr.filter(O=>(O==null?void 0:O.id)!=null).map(async O=>({candidate:O,times:await xe({date:l,staffId:O.id,durationMin:s.dur}).catch(()=>[])}))),dr={};ir.forEach(({candidate:O,times:q})=>{x(q).forEach(rr=>{dr[rr]||(dr[rr]=O)})});const gr=Object.keys(dr);c.date&&J(c.date)===l&&((W=c.emp[s.id])==null?void 0:W.id)===i.id&&(B[s.id]=x(gr),D[s.id]=dr,Z())}catch{B[s.id]=[],Z()}finally{g[s.id]=!1}}sr(()=>c.date,()=>{u.value="all",y.value.forEach(Cr)}),sr(()=>y.value.map(s=>{var i;return`${s.id}:${(i=c.emp[s.id])==null?void 0:i.id}`}),()=>y.value.forEach(Cr)),zr(async()=>{var s;y.value.forEach(Cr);try{const i=await Qr();S.value=Math.max(Number((s=i==null?void 0:i.data)==null?void 0:s.points_per_100)||5,1)}catch{}});const Y=v(()=>c.date?`${e[c.date.getDay()]} ${c.date.getDate()} ${_[c.date.getMonth()]} ${c.date.getFullYear()}`:"اختر تاريخًا من التقويم"),z=v(()=>R.value&&g[R.value.id]),X=v(()=>R.value?x(B[R.value.id]):[]),or=v(()=>X.value.filter(s=>{const i=p(s);return u.value==="am"?i<720:u.value==="pm"?i>=720:!0})),mr=v(()=>!!c.date&&$.value.every(s=>Array.isArray(B[s.id])&&!g[s.id])),Dr=v(()=>!!G.value&&$.value.some(s=>g[s.id]||!Array.isArray(B[s.id]))),Sr=v(()=>G.value?$.value.find(s=>!c.time[s.id]):null),hr=v(()=>mr.value&&X.value.find(s=>nr(s).complete)||""),kr=v(()=>{const s=[];let i=null;return L.value.forEach(l=>{const W=l.services.map(q=>p(c.time[q.id])),lr=W.every(q=>q!==null),ir=W[0];if(!lr){s.push({type:"group",key:`group-${l.id}`,group:l,name:l.name,icon:l.icon,style:T(l),duration:k(l),services:l.services,employee:j(l),pending:!0});return}i!==null&&ir>i&&s.push({type:"gap",key:`gap-${s.length}`,start:d(i),end:d(ir),duration:ir-i});const dr=l.services[l.services.length-1],O=p(c.time[dr.id])+(Number(dr.dur)||0);s.push({type:"group",key:`group-${l.id}`,group:l,name:l.name,icon:l.icon,style:T(l),start:d(ir),end:d(O),duration:k(l),services:l.services,employee:j(l),pending:!1}),i=O}),s}),Tr=v(()=>{const s=kr.value.filter(l=>l.type==="group"&&!l.pending),i=s[s.length-1];return(i==null?void 0:i.end)||""});return(s,i)=>(t(),a(H,null,[i[17]||(i[17]=r("div",{class:"panel-head"},[r("h1",null,"اختر وقت بداية الجلسة"),r("p",null,"اختر أول موعد فقط، وسيتم ترتيب باقي الأقسام تلقائيًا حسب مدة كل قسم والأوقات المتاحة.")],-1)),r("div",Mn,[i[6]||(i[6]=r("div",{class:"bi"},[r("b",null,"ملخص جلستك"),r("small",null,"قبل اختيار الوقت")],-1)),r("div",Cn,[r("div",Sn,[r("b",null,o(n(y).length),1),i[4]||(i[4]=F("الخدمات",-1))]),r("div",Fn,[r("b",null,o(n(vr)(n(b))),1),i[5]||(i[5]=F("المدة الإجمالية",-1))])])]),r("div",Bn,[i[9]||(i[9]=r("h3",null,[r("span",{"aria-hidden":"true"},"✨"),F(" مكافأة نقاط الولاء لهذه الجلسة")],-1)),r("p",null,[i[7]||(i[7]=F("ستحصل على ",-1)),r("b",null,o(n(U)(V.value))+" نقطة ولاء",1),i[8]||(i[8]=F(" عند إتمام هذا الحجز.",-1))]),r("strong",null,"يمنحك نظام الولاء "+o(n(U)(S.value))+" نقطة مقابل كل 100 ر.س مدفوعة.",1)]),r("div",Ln,[r("div",En,[r("b",null,o(C.value),1)]),r("div",An,[(t(!0),a(H,null,er(M.value,(l,W)=>(t(),a("button",{key:W,disabled:h(l),class:K({sel:f(l),avail:!h(l)}),onClick:lr=>Mr(l)},[r("span",Tn,o(e[l.getDay()].slice(0,3)),1),r("span",jn,o(l.getDate()),1)],10,Dn))),128))]),i[10]||(i[10]=r("div",{class:"cal-legend"},[r("span",null,[r("i",{style:{background:"var(--green)"}}),F(" تتوفر مواعيد")]),r("span",null,[r("i",{style:{background:"#D8D0BC"}}),F(" غير متاح")])],-1))]),n(c).date?(t(),a(H,{key:1},[r("div",Pn,"📅 "+o(Y.value),1),r("div",In,[i[13]||(i[13]=r("h4",null,[F("وقت بداية الجلسة "),r("small",{style:{"font-weight":"400",color:"var(--mute)"}},"سننسق باقي الأقسام بعده")],-1)),P("",!0),r("div",Hn,[r("button",{class:K(["period",{sel:u.value==="all"}]),onClick:i[0]||(i[0]=l=>u.value="all")},"🗓️ كل اليوم",2),r("button",{class:K(["period",{sel:u.value==="am"}]),onClick:i[1]||(i[1]=l=>u.value="am")},"☀️ صباحًا",2),r("button",{class:K(["period",{sel:u.value==="pm"}]),onClick:i[2]||(i[2]=l=>u.value="pm")},"🌇 مساءً",2)]),i[14]||(i[14]=r("div",{class:"available-times-title"},"الأوقات المتاحة",-1)),z.value||R.value&&!Array.isArray(B[R.value.id])?(t(),a("div",Vn,[ur(Pr,{height:"44px","border-radius":"8px"})])):X.value.length?or.value.length?(t(),a("div",qn,[(t(!0),a(H,null,er(or.value,l=>(t(),a("button",{key:l,class:K(["slot",{sel:G.value===l}]),onClick:W=>Q(l)},[hr.value===l?(t(),a("span",Un,"الأفضل")):P("",!0),F(" "+o(n(pr)(l)),1)],10,On))),128))])):(t(),a("div",Yn,"لا توجد أوقات في هذه الفترة")):(t(),a("div",Rn,"لا توجد أوقات متاحة لهذا اليوم")),hr.value&&G.value!==hr.value?(t(),a("div",Gn,[r("span",null,[i[12]||(i[12]=F("أفضل بداية متاحة اليوم: ",-1)),r("b",null,o(n(pr)(hr.value)),1)]),r("button",{onClick:i[3]||(i[3]=l=>Q(hr.value))},"اختيار")])):P("",!0)]),G.value?(t(),a("div",Kn,[i[16]||(i[16]=r("h4",null,[r("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[r("path",{d:"M13 2L3 14h7l-1 8 10-12h-7l1-8z"})]),F(" خطة تنفيذ الجلسة ")],-1)),r("div",Wn,[(t(!0),a(H,null,er(kr.value,l=>{var W;return t(),a(H,{key:l.key},[l.type==="gap"?(t(),a("div",Xn,[i[15]||(i[15]=r("span",null,"فاصل انتظار",-1)),r("b",null,o(n(pr)(l.start))+" - "+o(n(pr)(l.end)),1),r("small",null,o(n(vr)(l.duration)),1)])):(t(),a("div",{key:1,class:K(["plan-item plan-item--group",{pending:l.pending}]),style:Ar(l.style)},[r("span",Qn,[(t(),a("svg",{viewBox:"0 0 24 24","aria-hidden":"true",innerHTML:n(Nr)(l.icon)},null,8,Jn))]),r("b",null,o(l.name),1),r("small",null,"مع "+o(((W=l.employee)==null?void 0:W.name)||"-"),1),r("span",Zn,o(l.pending?"بانتظار وقت متاح":`${n(pr)(l.start)} - ${n(pr)(l.end)}`),1),r("small",null,o(xr(l.group))+" · "+o(n(vr)(l.duration)),1)],6))],64)}),128))]),Dr.value?(t(),a("div",rt,"جاري تنسيق باقي الأقسام حسب الأوقات المتاحة.")):Sr.value?(t(),a("div",et,"لم نجد وقتًا متاحًا لـ "+o(Sr.value.name)+" بعد هذا الموعد. اختر بداية أبكر أو يومًا آخر.",1)):(t(),a("div",nt,"تم تنسيق الجلسة تلقائيًا، والنهاية المتوقعة "+o(n(pr)(Tr.value))+".",1))])):P("",!0)],64)):(t(),a("div",Nn,[...i[11]||(i[11]=[r("b",null,"ابدأ باختيار التاريخ",-1),F("اختر يومًا من التقويم لعرض الأوقات المتاحة",-1)])]))],64))}},at={key:0,role:"status"},ot={key:1,role:"status"},it={__name:"HomeVisitMap",setup(tr){const{state:e}=cr(),_=ar(null),c=ar(""),y=ar(!0);let b,E=!1;const N=w=>{c.value=w.detail,y.value=!1};return zr(async()=>{window.addEventListener("sami-map-error",N);try{if(!wr.maps_key)throw new Error("الخريطة غير متاحة حالياً. يمكنك استخدام موقعي الحالي لتحديد عنوان الزيارة.");if(window.SamiHomeMap||await new Promise((w,S)=>{const V=document.createElement("script");V.src=ne("/js/home-service-map.js"),V.onload=w,V.onerror=()=>S(new Error("تعذر تحميل الخريطة. يمكنك استخدام موقعي الحالي.")),document.head.appendChild(V)}),E)return;if(b=await window.SamiHomeMap.create(_.value,{key:wr.maps_key,latitude:wr.latitude,longitude:wr.longitude,radiusKm:wr.radius_km,onSelect:w=>{e.homeLatitude=w.latitude,e.homeLongitude=w.longitude}}),E){b==null||b.destroy();return}b==null||b.select(e.homeLatitude,e.homeLongitude)}catch(w){c.value=w.message}finally{y.value=!1}}),sr(()=>[e.homeLatitude,e.homeLongitude],([w,S])=>b==null?void 0:b.select(w,S)),te(()=>{E=!0,b==null||b.destroy(),window.removeEventListener("sami-map-error",N)}),(w,S)=>(t(),a("div",null,[S[0]||(S[0]=r("p",null,"اضغط على الخريطة لتحديد موقع الزيارة داخل نطاق التغطية المظلل.",-1)),y.value?(t(),a("p",at,"جارٍ تحميل الخريطة...")):P("",!0),c.value?(t(),a("p",ot,o(c.value),1)):P("",!0),fr(r("div",{ref_key:"element",ref:_,"aria-label":"خريطة موقع الزيارة ونطاق التغطية",style:{height:"340px",width:"100%","border-radius":"12px"}},null,512),[[jr,!c.value]])]))}},st={class:"card",style:{padding:"20px","margin-bottom":"20px"},dir:"rtl"},lt=["value"],dt=["href"],pt={key:1,role:"alert"},ct={key:2,role:"alert"},gt={__name:"HomeVisitLocation",setup(tr){const{state:e,homeFee:_,homeCovered:c}=cr(),{state:y}=Gr(),b=ar("");function E(){if(b.value="",!navigator.geolocation){b.value="تحديد الموقع غير متاح؛ أدخل الإحداثيات.";return}navigator.geolocation.getCurrentPosition(N=>{e.homeLatitude=N.coords.latitude,e.homeLongitude=N.coords.longitude},()=>{b.value="تعذر تحديد الموقع. اسمح بالوصول للموقع أو أدخل الإحداثيات."})}return(N,w)=>(t(),a("section",st,[w[7]||(w[7]=r("h3",null,"عنوان الزيارة المنزلية",-1)),r("label",null,[w[4]||(w[4]=F("المدينة ",-1)),fr(r("select",{"onUpdate:modelValue":w[0]||(w[0]=S=>n(e).homeCityId=S),required:""},[w[3]||(w[3]=r("option",{value:"",disabled:""},"اختر المدينة",-1)),(t(!0),a(H,null,er(n(wr).cities,S=>(t(),a("option",{key:S.id,value:S.id},o(n(Fr)(S,"name",n(y).lang))+" — "+o(S.home_service_fee)+" ر.س",9,lt))),128))],512),[[ae,n(e).homeCityId]])]),r("p",null,"رسوم الزيارة: "+o(n(_))+" ر.س (قبل الضريبة)",1),r("button",{type:"button",onClick:E},"استخدام موقعي الحالي"),r("label",null,[w[5]||(w[5]=F("خط العرض ",-1)),fr(r("input",{"onUpdate:modelValue":w[1]||(w[1]=S=>n(e).homeLatitude=S),type:"number",step:"any",min:"-90",max:"90",required:""},null,512),[[Hr,n(e).homeLatitude]])]),r("label",null,[w[6]||(w[6]=F("خط الطول ",-1)),fr(r("input",{"onUpdate:modelValue":w[2]||(w[2]=S=>n(e).homeLongitude=S),type:"number",step:"any",min:"-180",max:"180",required:""},null,512),[[Hr,n(e).homeLongitude]])]),n(e).homeLatitude!==""&&n(e).homeLongitude!==""?(t(),a("a",{key:0,href:`https://maps.google.com/?q=${Number(n(e).homeLatitude)},${Number(n(e).homeLongitude)}`,target:"_blank",rel:"noopener"},"عرض موقع الزيارة على خرائط جوجل",8,dt)):P("",!0),ur(it),r("p",null,"التغطية حتى "+o(n(wr).radius_km)+" كم من المركز الموضح.",1),n(c)?P("",!0):(t(),a("p",pt,"اختر المدينة وحدد موقعاً داخل نطاق التغطية للمتابعة.")),b.value?(t(),a("p",ct,o(b.value),1)):P("",!0)]))}},ut={class:"card detail-card"},xt={class:"d-grid"},mt={class:"d-cell"},ht={class:"d-cell"},bt={class:"d-cell"},ft={class:"d-cell"},vt={class:"card detail-card"},yt={class:"timeline-cards"},wt={class:"tl-main"},kt={class:"with"},_t={class:"tl-time"},$t={class:"tm"},zt={class:"dr"},Mt={key:1,class:"card detail-card products-detail-card"},Ct={class:"upsell"},St=["src","alt"],Ft={class:"inf"},Bt={class:"p"},Lt=["disabled","onClick"],Et={__name:"ConfirmStep",setup(tr){const{state:e,selSvcs:_,totalDur:c}=cr(),{current:y}=$r(),{user:b,isAuthenticated:E}=Kr(),{state:N,products:w,addToCart:S,setQty:V}=Wr();zr(()=>{E.value&&b.value&&!e.cust.name&&(e.cust.name=[b.value.first_name,b.value.last_name].filter(Boolean).join(" "),e.cust.phone=b.value.mobile||"",e.cust.mail=b.value.email||"")});const I=v(()=>e.date?Ir(e.date):""),m=v(()=>{const M=new Map;_.value.forEach(h=>{const f=String(h.categoryId??h.categoryName??h.id);M.has(f)||M.set(f,{id:f,name:h.categoryName||h.name,services:[]}),M.get(f).services.push(h)});const C=h=>{if(!h)return Number.MAX_SAFE_INTEGER;const[f,L]=String(h).split(":").map(Number);return Number.isFinite(f)&&Number.isFinite(L)?f*60+L:Number.MAX_SAFE_INTEGER};return[...M.values()].map(h=>{var $;const f=[...h.services].sort((R,G)=>C(e.time[R.id])-C(e.time[G.id])),L=[...new Set(f.map(R=>{var G;return(G=e.emp[R.id])==null?void 0:G.name}).filter(Boolean))];return{...h,services:f,start:e.time[($=f[0])==null?void 0:$.id]||"",duration:f.reduce((R,G)=>R+(Number(G.dur)||0),0),price:f.reduce((R,G)=>R+(Number(G.price)||0),0),employees:L}}).sort((h,f)=>C(h.start)-C(f.start))}),u=ar([]);sr(()=>w.value.map(M=>`${M.id}:${M.stockQty}`).join(","),()=>{u.value=ze(w.value).map(M=>M.id)},{immediate:!0});const B=v(()=>u.value.map(M=>w.value.find(C=>C.id===M)).filter(Boolean).map(M=>({id:M.id,name:M.n,desc:M.d,price:M.pr,img:M.image||M.img||"/images/generated/products/care-set-card-hq.png"})));function D(M){return M.id!=null&&!!N.cart[M.id]}function g(M){M.id!=null&&(D(M)?V(M.id,0):S(M.id))}return(M,C)=>{var h,f;return Xr("RouterLink"),t(),a(H,null,[(h=n(y))!=null&&h.home?(t(),br(gt,{key:0})):P("",!0),C[20]||(C[20]=r("div",{class:"panel-head"},[r("h1",null,"تأكيد الحجز"),r("p",null,"راجع تفاصيل جلستك قبل تأكيد الحجز والدفع")],-1)),r("div",ut,[C[8]||(C[8]=r("h4",null,[r("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[r("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),r("path",{d:"M16 2v4M8 2v4M3 10h18"})]),F(" تفاصيل الموعد")],-1)),r("div",xt,[r("div",mt,[C[4]||(C[4]=r("small",null,"📍 الفرع",-1)),r("b",null,o(((f=n(y))==null?void 0:f.name)||"—"),1)]),r("div",ht,[C[5]||(C[5]=r("small",null,"📅 التاريخ",-1)),r("b",null,o(I.value),1)]),r("div",bt,[C[6]||(C[6]=r("small",null,"⏱️ المدة الإجمالية",-1)),r("b",null,o(n(vr)(n(c))),1)]),r("div",ft,[C[7]||(C[7]=r("small",null,"✂️ عدد الخدمات",-1)),r("b",null,o(n(_).length),1)])])]),r("div",vt,[C[9]||(C[9]=r("h4",null,[r("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[r("circle",{cx:"12",cy:"12",r:"9"}),r("path",{d:"M12 7v5l3 3"})]),F(" تفاصيل الجلسة")],-1)),r("div",yt,[(t(!0),a(H,null,er(m.value,L=>(t(),a("div",{key:L.id,class:"tl"},[r("div",wt,[r("b",null,o(L.name),1),r("div",kt,"مع "+o(L.employees.join("، ")||"—"),1)]),r("div",_t,[r("span",$t,o(n(pr)(L.start)),1),r("span",zt,o(L.duration)+" دقيقة · "+o(n(U)(L.price))+" ر.س",1)])]))),128))])]),B.value.length?(t(),a("div",Mt,[C[10]||(C[10]=r("h4",null,[r("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[r("path",{d:"M12 2l2.9 6.2 6.6.8-4.9 4.6 1.3 6.6L12 17l-5.9 3.2 1.3-6.6L2.5 9l6.6-.8z"})]),F(" منتجات مناسبة لجلستك")],-1)),r("div",Ct,[(t(!0),a(H,null,er(B.value,L=>(t(),a("div",{key:L.id||L.name,class:K(["up",{added:D(L)}])},[r("img",{src:L.img,alt:L.name,loading:"lazy"},null,8,St),r("span",Ft,[r("b",null,o(L.name),1),r("small",null,o(L.desc),1),r("span",Bt,o(n(U)(L.price))+" ر.س",1)]),r("button",{type:"button",disabled:L.id==null,onClick:$=>g(L)},o(D(L)?"✓ أضيف":"إضافة"),9,Lt)],2))),128))])])):P("",!0),P("",!0)],64)}}},At={class:"card detail-card"},Dt={key:0,class:"cod-deposit-alert"},Tt={class:"card detail-card payment-rewards-card"},jt={class:"rewards"},Nt={class:"gift-code-box"},Pt={class:"rt"},It={class:"ri"},Ht=["innerHTML"],Vt=["max","value","disabled"],Rt={class:"hint"},Yt={class:"rt"},qt={class:"ri"},Ot=["innerHTML"],Ut=["max","value","disabled"],Gt={class:"hint"},Kt={class:"coupon"},Wt={class:"ci"},Xt=["innerHTML"],Qt=["onKeydown"],Jt=["disabled"],Zt={class:"reward-total"},ra={key:0},ea={class:"trust-row"},na={class:"ti"},ta=["innerHTML"],aa={__name:"PayStep",setup(tr){const{state:e,priceParts:_,selSvcs:c,pointValue:y,couponDiscount:b,walletDiscount:E,loyaltyPointsUsed:N,loyaltyDiscount:w,payableTotal:S}=cr(),V=ar(!1);let I=0;async function m(){var T;try{const k=await $e(),j=((T=k==null?void 0:k.data)==null?void 0:T.balances)||{};e.walletBalance=Number(j.wallet??0),e.loyaltyPoints=Number(j.loyalty_points??0)}catch{}}async function u(T){await m(),(T==null?void 0:T.type)==="value"&&!e.rewards.useWallet&&d()}zr(async()=>{var T;await m();try{const k=await Qr();e.pointValue=Number(((T=k==null?void 0:k.data)==null?void 0:T.point_value)??.5)||.5}catch{}});const B=v(()=>Math.max(Number(e.walletBalance)||0,0)),D=v(()=>Math.max(parseInt(e.loyaltyPoints,10)||0,0)),g=v(()=>Math.max(_.value.total-b.value,0)),M=v(()=>Math.min(E.value,g.value)),C=v(()=>Math.max(_.value.total-b.value-M.value,0)),h=v(()=>Math.min(D.value,Math.ceil(C.value/y.value))),f=v(()=>M.value>0||N.value>0),L=v(()=>Math.round((_.value.total*.3+Number.EPSILON)*100)/100),$=v(()=>B.value>=L.value),R=v(()=>oe.methods({total:_.value.total,walletBalance:B.value,payable:S.value,hasRewards:f.value}));sr(R,T=>{e.pay&&!T.some(k=>k.id===e.pay&&k.enabled)&&(e.pay=null)},{immediate:!0}),sr([$,f,S],()=>{f.value&&e.pay==="cod"?e.pay=S.value>0?"card":null:!$.value&&e.pay==="cod"&&(e.pay=null)});const G=[["ضمان الجودة","نضمن لك أفضل تجربة",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>'],["دفع آمن","تقنيات تشفير متقدمة",'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>'],["حماية البيانات","بياناتك محمية بالكامل",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'],["دعم فوري","فريق دعم جاهز لخدمتك",'<path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>']],J={wallet:'<path d="M18 8V7a2 2 0 00-2-2H5a2 2 0 000 4h14a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2V7"/><path d="M16 13h.01"/>',gift:'<path d="M20 12v8H4v-8"/><path d="M2 7h20v5H2z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 110-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 100-5C13 2 12 7 12 7z"/>',coupon:'<path d="M4 7a2 2 0 012-2h12a2 2 0 012 2v3a2 2 0 000 4v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3a2 2 0 000-4z"/><path d="M9 9h.01M15 15h.01M16 8l-8 8"/>'};function p(T,k){const j=Number(T);return Number.isFinite(j)?Math.max(0,Math.min(j,k)):0}function d(){e.rewards.useWallet=!e.rewards.useWallet,e.rewards.useWallet?e.rewards.walletAmount=p(e.rewards.walletAmount||g.value,Math.min(B.value,g.value)):e.rewards.walletAmount=0}function x(T){e.rewards.walletAmount=p(T,Math.min(B.value,g.value)),e.rewards.useWallet=e.rewards.walletAmount>0}function A(){e.rewards.useLoyalty=!e.rewards.useLoyalty,e.rewards.useLoyalty?e.rewards.loyaltyPoints=Math.min(e.rewards.loyaltyPoints||h.value,h.value):e.rewards.loyaltyPoints=0}function nr(T){const k=Math.max(0,Math.min(parseInt(T,10)||0,h.value));e.rewards.loyaltyPoints=k,e.rewards.useLoyalty=k>0}async function Z(){const T=e.rewards.couponCode.trim();if(!T){e.rewards.couponStatus="bad",e.rewards.couponMessage="أدخل كود الخصم أولًا";return}V.value=!0;const k=++I;try{const j=await he(T,c.value.map(Mr=>Mr.id));if(k!==I||e.rewards.couponCode.trim()!==T)return;if(!(j!=null&&j.valid)){e.rewards.couponApplied="",e.rewards.couponDiscount=0,e.rewards.couponStatus="bad",e.rewards.couponMessage=(j==null?void 0:j.message)||"كود الخصم غير صالح";return}const xr=Math.max(0,Number(j.effective_discount)||0);e.rewards.couponCode=T,e.rewards.couponApplied=T,e.rewards.couponDiscount=xr,e.rewards.couponStatus="ok",e.rewards.couponMessage=`تم تطبيق خصم ${U(Math.round(xr))} ر.س`}catch(j){e.rewards.couponApplied="",e.rewards.couponDiscount=0,e.rewards.couponStatus="bad",e.rewards.couponMessage=j.message||"تعذّر التحقق من الكوبون"}finally{V.value=!1}}function Q(){I++,e.rewards.couponApplied="",e.rewards.couponDiscount=0,e.rewards.couponStatus="",e.rewards.couponMessage=""}return sr(()=>c.value.map(T=>`${T.id}:${T.price}`).join("|"),Q),sr([B,g],()=>{e.rewards.useWallet&&x(e.rewards.walletAmount)}),sr(h,()=>{e.rewards.useLoyalty&&nr(e.rewards.loyaltyPoints)}),(T,k)=>(t(),a(H,null,[k[13]||(k[13]=r("div",{class:"panel-head"},[r("h1",null,"الدفع"),r("p",null,"اختر طريقة الدفع المناسبة وأكمل حجزك")],-1)),r("div",At,[k[7]||(k[7]=r("h4",null,"اختر طريقة الدفع",-1)),ur(me,{modelValue:n(e).pay,"onUpdate:modelValue":k[0]||(k[0]=j=>n(e).pay=j),methods:R.value},null,8,["modelValue","methods"]),!$.value&&!f.value?(t(),a("div",Dt,[k[5]||(k[5]=F(" 💡 ",-1)),k[6]||(k[6]=r("b",null,"ملاحظة الدفع عند الوصول:",-1)),F(" يتطلب توفر عربون بنسبة 30% ("+o(n(U)(L.value))+" ر.س) في رصيد محفظتك لتأكيد الحجز. رصيدك الحالي: "+o(n(U)(B.value))+" ر.س. ",1)])):P("",!0),k[8]||(k[8]=r("div",{class:"secure-line"},"🔒 جميع عمليات الدفع آمنة ومشفرة",-1))]),r("div",Tt,[k[12]||(k[12]=r("h4",null,[r("span",{class:"step-dot"},"2"),F(" استخدام العروض و المكافآت")],-1)),r("div",jt,[r("div",Nt,[ur(_e,{compact:"",onRedeemed:u})]),r("div",{class:K(["rw",{on:n(e).rewards.useWallet}])},[r("div",Pt,[r("span",It,[(t(),a("svg",{width:"19",height:"19",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:J.wallet},null,8,Ht))]),r("span",null,[k[9]||(k[9]=r("b",null,"استخدام من المحفظة",-1)),r("small",null,"الرصيد الحالي: "+o(n(U)(B.value))+" ر.س",1)]),r("span",{class:K(["switch",{on:n(e).rewards.useWallet}]),onClick:d},null,2)]),r("input",{type:"number",min:"0",max:Math.min(B.value,g.value),step:"1",value:n(e).rewards.walletAmount,disabled:!n(e).rewards.useWallet,onInput:k[1]||(k[1]=j=>x(j.target.value))},null,40,Vt),r("span",Rt,"المبلغ المتاح حتى "+o(n(U)(Math.round(Math.min(B.value,g.value))))+" ر.س",1)],2),r("div",{class:K(["rw",{on:n(e).rewards.useLoyalty}])},[r("div",Yt,[r("span",qt,[(t(),a("svg",{width:"19",height:"19",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:J.gift},null,8,Ot))]),r("span",null,[k[10]||(k[10]=r("b",null,"استخدام نقاط الولاء",-1)),r("small",null,"لديك "+o(n(U)(D.value))+" نقطة",1)]),r("span",{class:K(["switch",{on:n(e).rewards.useLoyalty}]),onClick:A},null,2)]),r("input",{type:"number",min:"0",max:h.value,step:"1",value:n(e).rewards.loyaltyPoints,disabled:!n(e).rewards.useLoyalty,onInput:k[2]||(k[2]=j=>nr(j.target.value))},null,40,Ut),r("span",Gt,"تساوي خصم "+o(n(U)(Math.round(n(N)*n(y))))+" ر.س",1)],2)]),r("div",Kt,[r("span",Wt,[(t(),a("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:J.coupon},null,8,Xt))]),fr(r("input",{"onUpdate:modelValue":k[3]||(k[3]=j=>n(e).rewards.couponCode=j),placeholder:"أدخل كود الخصم",onInput:k[4]||(k[4]=j=>n(e).rewards.couponApplied&&n(e).rewards.couponCode!==n(e).rewards.couponApplied?Q():null),onKeydown:Br(Lr(Z,["prevent"]),["enter"])},null,40,Qt),[[Hr,n(e).rewards.couponCode]]),n(e).rewards.couponApplied?(t(),a("button",{key:0,type:"button",class:"coupon-clear",onClick:Q},"إلغاء")):P("",!0),r("button",{type:"button",onClick:Z,disabled:V.value},o(V.value?"...":"تطبيق"),9,Jt)]),n(e).rewards.couponMessage?(t(),a("p",{key:0,class:K(["coupon-msg",n(e).rewards.couponStatus])},o(n(e).rewards.couponMessage),3)):P("",!0),r("div",Zt,[k[11]||(k[11]=r("span",null,"المبلغ بعد المكافآت",-1)),r("b",null,o(n(U)(Math.round(n(S))))+" ر.س",1),n(b)||M.value||n(w)?(t(),a("small",ra," تم خصم "+o(n(U)(Math.round(n(b)+M.value+n(w))))+" ر.س ",1)):P("",!0)])]),r("div",ea,[(t(),a(H,null,er(G,(j,xr)=>r("div",{key:xr,class:"trust"},[r("span",na,[(t(),a("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7",innerHTML:j[2]},null,8,ta))]),r("b",null,o(j[0]),1),r("small",null,o(j[1]),1)])),64))])],64))}},oa=Ur(aa,[["__scopeId","data-v-508798f4"]]),ia={class:"success-wrap"},sa={class:"suc-grid"},la={class:"card suc-details"},da={class:"sd-row"},pa={class:"k"},ca=["innerHTML"],ga={class:"v"},ua={class:"sd-row"},xa={class:"k"},ma=["innerHTML"],ha={class:"v"},ba={class:"sd-row"},fa={class:"k"},va=["innerHTML"],ya={class:"v"},wa={class:"sd-row"},ka={class:"k"},_a=["innerHTML"],$a={class:"v"},za={class:"sd-row"},Ma={class:"k"},Ca=["innerHTML"],Sa={class:"v"},Fa={class:"sd-row"},Ba={class:"k"},La=["innerHTML"],Ea={class:"card qr-card"},Aa={class:"code"},Da={class:"suc-actions"},Ta={class:"suc-perks"},ja={class:"ti"},Na=["innerHTML"],Pa="color:var(--gold-deep);font-family:var(--font-d);font-size:17px",Ia={__name:"BookingSuccess",emits:["home","calendar","share"],setup(tr,{emit:e}){const{state:_,selSvcs:c,totalDur:y,priceParts:b}=cr(),{current:E}=$r(),N=e,w=v(()=>b.value),S=v(()=>_.date?Ir(_.date):""),V=v(()=>[...new Set(c.value.map(D=>{var g;return(g=_.emp[D.id])==null?void 0:g.name}).filter(Boolean))]),I=v(()=>{var D;return{r:_.bookRef||"",b:((D=E.value)==null?void 0:D.name)||"",d:S.value,u:vr(y.value),e:V.value.join("، "),p:w.value.total,s:c.value.map(g=>{var M;return[g.name,pr(_.time[g.id]),((M=_.emp[g.id])==null?void 0:M.name)||"",g.price]})}}),m=v(()=>pe(I.value)),u={pin:'<path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>',cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>',scis:'<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"/>',user:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',card:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>'},B=[["خدمة VIP","تجربة فاخرة مصممة لراحتك",'<path d="M2 8l4 4 6-8 6 8 4-4v10a2 2 0 01-2 2H4a2 2 0 01-2-2z"/>'],["بياناتك آمنة","نضمن لك خصوصية وأمان بياناتك",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'],["تعديل الحجز","يمكنك تعديل أو إلغاء الحجز قبل موعده",'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>'],["دعم عملاء 24/7","نحن هنا لخدمتك دائمًا",'<path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>']];return(D,g)=>{var M;return t(),a("div",ia,[g[14]||(g[14]=_r('<div class="suc-ic"><span class="spark s1">✦</span><span class="spark s2">✧</span><svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M20 6L9 17l-5-5"></path></svg></div><h1>تم تأكيد حجزك بنجاح!</h1><p class="sub">نتطلع لخدمتك وتقديم تجربة استثنائية تليق بك</p>',3)),r("div",sa,[r("div",la,[g[9]||(g[9]=r("h4",null,"تفاصيل الحجز",-1)),r("div",da,[r("span",pa,[(t(),a("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:u.pin},null,8,ca)),g[3]||(g[3]=F(" الفرع",-1))]),r("span",ga,o(((M=n(E))==null?void 0:M.name)||"—"),1)]),r("div",ua,[r("span",xa,[(t(),a("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:u.cal},null,8,ma)),g[4]||(g[4]=F(" التاريخ",-1))]),r("span",ha,o(S.value),1)]),r("div",ba,[r("span",fa,[(t(),a("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:u.info},null,8,va)),g[5]||(g[5]=F(" مدة الجلسة",-1))]),r("span",ya,o(n(vr)(n(y))),1)]),r("div",wa,[r("span",ka,[(t(),a("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:u.scis},null,8,_a)),g[6]||(g[6]=F(" الخدمات",-1))]),r("span",$a,o(n(c).map(C=>`${C.name} (${n(pr)(n(_).time[C.id])})`).join(" + ")),1)]),r("div",za,[r("span",Ma,[(t(),a("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:u.user},null,8,Ca)),g[7]||(g[7]=F(" الفريق",-1))]),r("span",Sa,o(V.value.join("، ")),1)]),r("div",Fa,[r("span",Ba,[(t(),a("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",innerHTML:u.card},null,8,La)),g[8]||(g[8]=F(" المبلغ التقديري",-1))]),r("span",{class:"v",style:Pa},o(n(U)(w.value.total))+" ر.س",1)])]),r("div",Ea,[g[10]||(g[10]=r("h4",{style:{"font-family":"var(--font-d)","font-size":"16px",color:"var(--ink)"}},"رقم الفاتورة",-1)),r("div",Aa,o(n(_).bookRef||"—"),1),ur(ce,{url:m.value},null,8,["url"])])]),r("div",Da,[r("button",{class:"btn btn-gold",onClick:g[0]||(g[0]=C=>N("home"))},[...g[11]||(g[11]=[r("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[r("path",{d:"M3 9l9-6 9 6v11a1 1 0 01-1 1H4a1 1 0 01-1-1z"})],-1),F(" العودة إلى الرئيسية",-1)])]),r("button",{class:"btn btn-line",onClick:g[1]||(g[1]=C=>N("calendar"))},[...g[12]||(g[12]=[r("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[r("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),r("path",{d:"M16 2v4M8 2v4M3 10h18M12 14v4M10 16h4"})],-1),F(" إضافة للتقويم",-1)])]),r("button",{class:"btn btn-line",onClick:g[2]||(g[2]=C=>N("share"))},[...g[13]||(g[13]=[_r('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"></path></svg> مشاركة الحجز',2)])])]),r("div",Ta,[(t(),a(H,null,er(B,(C,h)=>r("div",{key:h,class:"trust"},[r("span",ja,[(t(),a("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7",innerHTML:C[2]},null,8,Na))]),r("b",null,o(C[0]),1),r("small",null,o(C[1]),1)])),64))])])}}},Ha={key:0,class:"card"},Va={key:0,class:"br-img"},Ra=["src","alt"],Ya={key:1,class:"sum-row"},qa={class:"v"},Oa={key:2,class:"sum-row"},Ua={class:"v"},Ga={class:"sum-row"},Ka={class:"v"},Wa={class:"sum-row"},Xa={class:"v"},Qa={key:3,class:"sum-row"},Ja={class:"v"},Za={key:4,class:"sum-row"},ro={class:"v"},eo={class:"sum-svcs"},no={class:"nm"},to={class:"pr"},ao=["onClick"],oo={key:5,class:"sum-svcs"},io={class:"nm"},so={class:"pr"},lo={class:"sum-price"},po={class:"sp-row"},co={class:"sp-row"},go={class:"sp-total"},uo={class:"v"},xo={class:"sum-note"},mo={width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",style:{flex:"none"}},ho={__name:"BookingSummary",setup(tr){const{state:e,selSvcs:_,totalDur:c,priceParts:y,toggleSvc:b,selectedProducts:E}=cr(),{current:N}=$r(),w=ar(!1),S=v(()=>e.services.length>0);sr(S,m=>{m?ie(()=>requestAnimationFrame(()=>{w.value=!0})):w.value=!1},{immediate:!0});const V=v(()=>y.value),I=v(()=>e.date?Ir(e.date):"");return(m,u)=>{var B;return t(),a("div",{id:"summary",class:K({show:w.value})},[S.value?(t(),a("div",Ha,[u[14]||(u[14]=r("h3",null,[r("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"var(--gold-deep)","stroke-width":"1.8"},[r("path",{d:"M9 11l3 3L22 4"}),r("path",{d:"M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"})]),F(" ملخص الحجز")],-1)),n(N)?(t(),a("div",Va,[n(N).image?(t(),a("img",{key:0,src:n(N).image,alt:n(N).name},null,8,Ra)):P("",!0)])):P("",!0),n(N)?(t(),a("div",Ya,[u[0]||(u[0]=r("span",{class:"k"},"📍 الفرع",-1)),r("span",qa,o(n(N).name),1)])):P("",!0),n(e).date?(t(),a("div",Oa,[u[1]||(u[1]=r("span",{class:"k"},"📅 التاريخ",-1)),r("span",Ua,o(I.value),1)])):P("",!0),r("div",Ga,[u[2]||(u[2]=r("span",{class:"k"},"⏱️ المدة الإجمالية",-1)),r("span",Ka,o(n(vr)(n(c))),1)]),r("div",Wa,[u[3]||(u[3]=r("span",{class:"k"},"✂️ عدد الخدمات",-1)),r("span",Xa,o(n(_).length)+" "+o(n(_).length>2?"خدمات":"خدمة"),1)]),n(e).mode?(t(),a("div",Qa,[u[4]||(u[4]=r("span",{class:"k"},"👤 الموظفون",-1)),r("span",Ja,o(n(e).mode==="auto"?"اختيار تلقائي ذكي":"اختيار يدوي"),1)])):P("",!0),(B=n(N))!=null&&B.home?(t(),a("div",Za,[u[5]||(u[5]=r("span",{class:"k"},"رسوم الزيارة المنزلية",-1)),r("span",ro,o(n(U)(V.value.homeFee))+" ر.س",1)])):P("",!0),r("div",eo,[(t(!0),a(H,null,er(n(_),D=>(t(),a("div",{key:D.id,class:"sum-svc"},[u[7]||(u[7]=r("i",{style:{background:"var(--gold)"}},null,-1)),r("span",no,o(D.name),1),r("span",to,o(n(U)(D.price))+" ر.س",1),r("button",{class:"rm","aria-label":"حذف",onClick:g=>n(b)(D)},[...u[6]||(u[6]=[r("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[r("path",{d:"M18 6L6 18M6 6l12 12"})],-1)])],8,ao)]))),128))]),n(E).length?(t(),a("div",oo,[(t(!0),a(H,null,er(n(E),D=>(t(),a("div",{key:D.id,class:"sum-svc"},[r("span",io,o(D.n)+" ? "+o(D.qty),1),r("span",so,o(n(U)(D.pr*D.qty))+" ?.?",1)]))),128))])):P("",!0),r("div",lo,[r("div",po,[u[8]||(u[8]=r("span",null,"المجموع الفرعي",-1)),r("span",null,o(n(U)(V.value.sub))+" ر.س",1)]),r("div",co,[u[9]||(u[9]=r("span",null,"ضريبة القيمة المضافة (15%)",-1)),r("span",null,"+"+o(n(U)(V.value.vat))+" ر.س",1)]),r("div",go,[u[11]||(u[11]=r("span",{class:"k"},"المبلغ الإجمالي",-1)),r("span",uo,[F(o(n(U)(V.value.total))+" ",1),u[10]||(u[10]=r("small",null,"ر.س",-1))])])]),r("div",xo,[(t(),a("svg",mo,[...u[12]||(u[12]=[r("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},null,-1)])])),u[13]||(u[13]=F(" بياناتك محمية — يمكنك تعديل أو إلغاء الحجز قبل 6 ساعات من الموعد",-1))])])):P("",!0)],2)}}},bo={class:"shell"},fo={class:"wrap"},vo={class:"panel",id:"panel"},yo={key:0,class:"success-wrap receipt-wrap"},wo={class:"suc-grid receipt-grid"},ko={class:"card suc-details"},_o={class:"sd-row"},$o={class:"v receipt-code"},zo={class:"sd-row"},Mo={class:"v"},Co={class:"sd-row"},So={class:"v"},Fo={class:"sd-row"},Bo={class:"v"},Lo={class:"sd-row"},Eo={class:"v"},Ao={class:"sd-row"},Do={class:"card suc-details receipt-services"},To={class:"footbar",id:"footbar"},jo={class:"wrap in"},No={class:"fb-mid",id:"fbMid"},Po={key:0,class:"tot"},Io=["disabled"],Ho="color:var(--gold-deep);font-family:var(--font-d);font-size:17px",ei={__name:"BookingView",setup(tr){const{state:e,clearCart:_,cartItems:c}=Wr(),y=ar(null),b=se(),{current:E,locations:N,loadServiceLocations:w,setLocation:S}=$r(),{requireAuth:V,user:I}=Kr();w(),sr([()=>b.query.branch,N],([Y,z])=>{const X=Array.isArray(Y)?Y[0]:Y;if(!X||!z.length)return;const or=X==="hm"||X==="home-service"?z.find(mr=>mr.home):z.find(mr=>String(mr.id)===String(X));or&&S(or.id)},{immediate:!0});const{state:m,selSvcs:u,totalDur:B,priceParts:D,canProceed:g,nextLabel:M,reset:C,payableTotal:h,walletDiscount:f,loyaltyPointsUsed:L}=cr();le(Ce,"booking"),de(y);const $=ar(!1),R=ar(""),G=ar(!1);function J(Y){R.value=Y,G.value=!0,clearTimeout(J._h),J._h=setTimeout(()=>{G.value=!1},2600)}sr(()=>b.query.payment,Y=>{Y&&(Y==="failed"?J("فشلت عملية الدفع الإلكتروني، يرجى إعادة المحاولة."):(Y==="cancelled"||Y==="cancel")&&J("تم إلغاء عملية الدفع."))},{immediate:!0});const p=v(()=>m.services.length>0),d=v(()=>m.step===4?h.value:D.value.total);function x(Y){if(!Y)return null;try{const z=String(Y).replace(/-/g,"+").replace(/_/g,"/"),X=z.padEnd(z.length+(4-z.length%4)%4,"="),or=JSON.parse(decodeURIComponent(escape(atob(X))));return or&&typeof or=="object"?or:null}catch{return null}}const A=v(()=>x(b.query.receipt)),nr=v(()=>!!A.value),Z=v(()=>{var Y;return Array.isArray((Y=A.value)==null?void 0:Y.s)?A.value.s:[]}),Q=v(()=>!nr.value&&!m.done&&p.value),T=v(()=>Q.value?"minmax(0,1fr) minmax(285px,315px)":"1fr");function k(){m.step>0&&(m.step--,scrollTo({top:0,behavior:"smooth"}))}function j(){if(g.value){if(m.step===4){V(Mr);return}m.step++,scrollTo({top:0,behavior:"smooth"})}}function xr(Y){return`${Y.getFullYear()}-${String(Y.getMonth()+1).padStart(2,"0")}-${String(Y.getDate()).padStart(2,"0")}`}async function Mr(){var Y,z,X,or,mr,Dr,Sr,hr;if(!($.value||!g.value)){$.value=!0;try{const kr=[(Y=I.value)==null?void 0:Y.first_name,(z=I.value)==null?void 0:z.last_name].filter(Boolean).join(" ");m.cust.name=m.cust.name||kr||((X=I.value)==null?void 0:X.username)||"",m.cust.phone=m.cust.phone||((or=I.value)==null?void 0:or.mobile)||"",m.cust.mail=m.cust.mail||((mr=I.value)==null?void 0:mr.email)||"";const Tr=(Dr=E.value)!=null&&Dr.home?0:Number((Sr=E.value)==null?void 0:Sr.id);if(m.pay==="cod"){const q=Math.round(D.value.total*.3);if((Number(m.walletBalance)||0)<q){J(`عذرًا، الدفع عند الوصول يتطلب توفر عربون 30% (${U(q)} ر.س) في محفظتك`);return}}const s=u.value.map(q=>{var rr;return{subServices:[{id:q.id,date:xr(m.date),time:m.time[q.id],duration:q.dur,staffId:(rr=m.emp[q.id])==null?void 0:rr.id}]}});await be(Me(e.cart)),await fe({branch:Tr,...Tr===0?{city_id:m.homeCityId,latitude:m.homeLatitude,longitude:m.homeLongitude}:{},services:s,customerName:m.cust.name,mobileNo:m.cust.phone});const i=m.rewards,l=Number(f.value.toFixed(2)),W=L.value,lr=l>0,ir=W>0,dr=i.couponApplied||"",gr=h.value<=0?"card":m.pay==="cod"?"cod":m.pay||"card",O=await ve(gr,{wallet:lr,walletAmount:l,loyalty:ir,loyaltyPoints:W,couponCode:dr});if(O.payment_url){ge({b:((hr=E.value)==null?void 0:hr.name)||"",d:Ir(m.date),u:vr(B.value),e:[...new Set(u.value.map(q=>{var rr;return(rr=m.emp[q.id])==null?void 0:rr.name}).filter(Boolean))].join("، "),p:D.value.total,s:u.value.map(q=>{var rr;return[q.name,pr(m.time[q.id]),((rr=m.emp[q.id])==null?void 0:rr.name)||"",q.price]})},O.attempt_id),window.location.href=O.payment_url;return}m.purchasedProducts=c.value.map(q=>({...q})),m.bookRef=O.invoice_id||null,m.done=!0,_(),scrollTo({top:0,behavior:"smooth"})}catch(kr){J(kr.message||"تعذّر إتمام الحجز، حاول مرة أخرى")}finally{$.value=!1}}}function Cr(){C(),location.href="/"}return(Y,z)=>(Xr("RouterLink"),t(),a("div",{ref_key:"root",ref:y},[r("div",bo,[nr.value?P("",!0):(t(),br(Te,{key:0})),r("div",fo,[r("div",{class:K(["stage",{"stage-services-summary":n(m).step===0&&Q.value}]),id:"stage",style:Ar(`grid-template-columns:${T.value}`)},[r("main",vo,[nr.value?(t(),a("div",yo,[z[10]||(z[10]=r("div",{class:"suc-ic"},[r("svg",{width:"44",height:"44",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.2"},[r("path",{d:"M20 6L9 17l-5-5"})])],-1)),z[11]||(z[11]=r("h1",null,"تفاصيل الحجز",-1)),z[12]||(z[12]=r("p",{class:"sub"},"تم فتح تفاصيل الحجز من رمز QR",-1)),r("div",wo,[r("div",ko,[z[8]||(z[8]=r("h4",null,"بيانات الحجز",-1)),r("div",_o,[z[2]||(z[2]=r("span",{class:"k"},"رقم الفاتورة",-1)),r("span",$o,o(A.value.r||"—"),1)]),r("div",zo,[z[3]||(z[3]=r("span",{class:"k"},"الفرع",-1)),r("span",Mo,o(A.value.b||"—"),1)]),r("div",Co,[z[4]||(z[4]=r("span",{class:"k"},"التاريخ",-1)),r("span",So,o(A.value.d||"—"),1)]),r("div",Fo,[z[5]||(z[5]=r("span",{class:"k"},"مدة الجلسة",-1)),r("span",Bo,o(A.value.u||"—"),1)]),r("div",Lo,[z[6]||(z[6]=r("span",{class:"k"},"الفريق",-1)),r("span",Eo,o(A.value.e||"—"),1)]),r("div",Ao,[z[7]||(z[7]=r("span",{class:"k"},"المبلغ",-1)),r("span",{class:"v",style:Ho},o(n(U)(Number(A.value.p)||0))+" ر.س",1)])]),r("div",Do,[z[9]||(z[9]=r("h4",null,"الخدمات",-1)),(t(!0),a(H,null,er(Z.value,(X,or)=>(t(),a("div",{key:or,class:"receipt-service"},[r("b",null,o(X[0]),1),r("small",null,o(X[1]||"—")+" · "+o(X[2]||A.value.e||"—"),1),r("span",null,o(n(U)(Number(X[3])||0))+" ر.س",1)]))),128))])])])):n(m).done?(t(),br(Ia,{key:1,onHome:Cr,onCalendar:z[0]||(z[0]=X=>J("تمت إضافة الموعد إلى التقويم")),onShare:z[1]||(z[1]=X=>J("تم نسخ رابط الحجز للمشاركة"))})):n(m).step===0?(t(),br(dn,{key:2})):n(m).step===1?(t(),br(zn,{key:3})):n(m).step===2?(t(),br(tt,{key:4})):n(m).step===3?(t(),br(Et,{key:5})):(t(),br(oa,{key:6}))]),fr(r("aside",{class:K(["summary booking-summary-compact",{show:Q.value,"booking-summary-time":n(m).step===2}])},[ur(ho)],2),[[jr,Q.value]])],6)])]),P("",!0),fr(r("div",To,[r("div",jo,[r("button",{class:"btn btn-back",id:"btnBack",style:Ar({visibility:n(m).step===0?"hidden":"visible"}),onClick:k},[...z[29]||(z[29]=[r("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[r("path",{d:"M5 12h14M13 6l6 6-6 6"})],-1),F(" السابق ",-1)])],4),r("div",No,[z[31]||(z[31]=r("span",null,"🔒 بياناتك محمية وآمنة",-1)),p.value?(t(),a("span",Po,[z[30]||(z[30]=F("المبلغ الإجمالي ",-1)),r("b",null,o(n(U)(Math.round(d.value)))+" ر.س",1)])):P("",!0)]),r("button",{class:K(["btn",n(m).step===4?"btn-pay":"btn-gold"]),id:"btnNext",disabled:!n(g),onClick:j},[F(o(n(M))+" ",1),z[32]||(z[32]=r("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.2"},[r("path",{d:"M19 12H5M11 18l-6-6 6-6"})],-1))],10,Io)])],512),[[jr,!n(m).done&&!nr.value]]),r("div",{class:K(["pay-loading",{on:$.value}]),id:"payLoading"},[...z[33]||(z[33]=[r("div",{class:"pl-box"},[r("div",{class:"pl-ring"}),r("b",null,"جارٍ معالجة الدفع بأمان…"),r("small",null,"لا تغلق الصفحة، سيتم تأكيد حجزك خلال لحظات")],-1)])],2),r("div",{class:K(["toast",{on:G.value}]),id:"toast"},o(R.value),3)],512))}};export{ei as default};
