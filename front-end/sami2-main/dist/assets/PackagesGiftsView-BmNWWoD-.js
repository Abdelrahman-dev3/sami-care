import{k,K as mn,o as l,c as p,i as K,b as n,u as e,F as v,a as g,t as i,e as C,n as M,d as b,J as f,l as H,q as I,j as A,B as Y,D as N,U as kn,r as q,h as yn,H as wn}from"./index-Cg6jaJBg.js";import{u as zn,a as _n}from"./useInternalLinks-CJP2UQ1A.js";import{_ as tn}from"./GiftCard-Dcm3GHqN.js";const R=[{id:"relax",name:"باقة الاسترخاء",cat:"relax",dur:90,price:450,color:"var(--p-relax)",hex:"#4E9E6F",desc:"استرخاء عميق وتجديد للطاقة للجسم والعقل",inc:["مساج استرخائي للجسم","تنظيف بشرة عميق","جلسة بخار","مشروب صحي"],ico:'<path d="M12 3c-1.2 3-4 4.5-4 8a4 4 0 008 0c0-3.5-2.8-5-4-8z"/><path d="M5 21h14"/>',img:"/images/generated/services/massage-hq.png"},{id:"fast",name:"باقة سريعة",cat:"fast",dur:45,price:250,color:"var(--p-fast)",hex:"#D98A3B",desc:"عناية سريعة وفعّالة تناسب جدولك المزدحم",inc:["حلاقة سريعة","ترتيب لحية","غسيل شعر","تصفيف"],ico:'<path d="M13 2L3 14h9l-1 8 10-12h-9z"/>',img:"/images/generated/packages/hair-care-hq.png"},{id:"full",name:"باقة العناية الكاملة",cat:"full",dur:120,price:650,color:"var(--p-full)",hex:"#B8912F",hot:!0,desc:"عناية متكاملة من الرأس حتى القدم لإطلالة مثالية",inc:["حلاقة كلاسيكية","تنظيف بشرة عميق","حمام مغربي","ترطيب الشعر","مشروب صحي"],ico:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',img:"/images/generated/packages/complete-care-hq.png"},{id:"groom",name:"باقة العريس",cat:"groom",dur:150,price:950,color:"var(--p-groom)",hex:"#8B6FC0",desc:"إطلالة استثنائية في يومك المميز — جاهزية تامة من الرأس للقدم",inc:["حلاقة فاخرة","تنظيف بشرة عميق","حمام مغربي","تنعيم وترطيب الشعر","عطر فاخر","ضيافة خاصة"],ico:'<path d="M6 3h12l4 6-10 12L2 9z"/><path d="M2 9h20M12 3l-4 6 4 12 4-12-4-6z"/>',img:"/images/gifts/package.jpg"},{id:"home",name:"باقة منزلية",cat:"home",dur:60,price:350,color:"var(--p-home)",hex:"#3E8E9E",desc:"راحة تامة في منزلك ونفس جودة العناية",inc:["حلاقة في المنزل","تنظيف بشرة","ترتيب لحية","منتجات عناية مجانية"],ico:'<path d="M3 9l9-6 9 6v11a1 1 0 01-1 1H4a1 1 0 01-1-1z"/><path d="M9 21V12h6v9"/>',img:"/images/generated/branches/home-service-hq.png"},{id:"vip",name:"باقة VIP",cat:"vip",dur:110,price:850,color:"var(--p-vip)",hex:"#B0642A",desc:"غرفة خاصة وضيافة فاخرة وتجربة ملكية متكاملة",inc:["غرفة VIP خاصة","حلاقة فاخرة","تنظيف بشرة عميق","مساج رأس","ضيافة فاخرة"],ico:'<path d="M2 8l4 4 6-8 6 8 4-4v10a2 2 0 01-2 2H4a2 2 0 01-2-2z"/>',img:"/images/services/bath/royal.jpg"}],$n=[{id:"all",n:"كل الباقات",ic:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>'},{id:"relax",n:"الاسترخاء",ic:'<path d="M12 3c-1.2 3-4 4.5-4 8a4 4 0 008 0c0-3.5-2.8-5-4-8z"/><path d="M5 21h14"/>'},{id:"full",n:"العناية الكاملة",ic:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>'},{id:"groom",n:"العريس",ic:'<path d="M6 3h12l4 6-10 12L2 9z"/>'},{id:"vip",n:"VIP",ic:'<path d="M2 8l4 4 6-8 6 8 4-4v10a2 2 0 01-2 2H4a2 2 0 01-2-2z"/>'},{id:"fast",n:"سريعة",ic:'<path d="M13 2L3 14h9l-1 8 10-12h-9z"/>'},{id:"home",n:"المنزلية",ic:'<path d="M3 9l9-6 9 6v11a1 1 0 01-1 1H4a1 1 0 01-1-1z"/>'}],en=[{id:"lux-dark",n:"ملكي أسود مذهب",bg:"radial-gradient(circle at 20% 12%,rgba(232,190,108,.24),transparent 30%),linear-gradient(150deg,#1D1810,#070604 72%)",fg:"#E8BE6C",icon:"◆"},{id:"gold-leaf",n:"ختم الذهب الفاخر",bg:"linear-gradient(150deg,#FFF4D8,#D4AF5E 54%,#7C5519)",fg:"#1B140D",icon:"✦"},{id:"emerald",n:"زمرد النخبة",bg:"radial-gradient(circle at 80% 8%,rgba(255,255,255,.18),transparent 28%),linear-gradient(150deg,#082118,#176A50 58%,#05110D)",fg:"#DDF7E8",icon:"◇"},{id:"birthday",n:"هدية عيد ميلاد",bg:"radial-gradient(circle at 20% 18%,rgba(255,255,255,.28),transparent 30%),linear-gradient(150deg,#4B102E,#B94069 56%,#F2B8CF)",fg:"#FFFFFF",icon:"★"},{id:"eid-adha",n:"هدية عيد الأضحى",bg:"radial-gradient(circle at 85% 12%,rgba(255,255,255,.22),transparent 28%),linear-gradient(150deg,#092B25,#0F6B58 52%,#D8B45B)",fg:"#FFF7DA",icon:"☾"},{id:"christmas",n:"هدية الكريسماس",bg:"linear-gradient(150deg,#0D2B1F,#146B3A 52%,#B41F2A)",fg:"#FFFFFF",icon:"✶"},{id:"ramadan",n:"هدية رمضان والعيد",bg:"radial-gradient(circle at 20% 10%,rgba(232,190,108,.26),transparent 32%),linear-gradient(150deg,#11132C,#26316B 55%,#C99B3B)",fg:"#F8E7B0",icon:"☾"}],U=[{id:"wa",n:"واتساب",ic:'<path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2z"/><path d="M8.5 9.5c.5 2.5 3 5 5.5 5.5l1.5-1.5 2 1c-.5 1.5-2 2-3.5 1.5-3-.9-5.6-3.5-6.5-6.5-.5-1.5 0-3 1.5-3.5l1 2z"/>'},{id:"sms",n:"رسالة نصية",ic:'<path d="M21 11.5a8.4 8.4 0 01-9 8.4 8.5 8.5 0 01-3.8-.9L3 21l2-5.2a8.4 8.4 0 011.5-9.8 8.5 8.5 0 0114.5 5.5z"/>'},{id:"mail",n:"بريد إلكتروني",ic:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 6L2 7"/>'},{id:"link",n:"رابط مشاركة",ic:'<path d="M10 13a5 5 0 007.5.5l3-3a5 5 0 00-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 00-7.5-.5l-3 3a5 5 0 007 7l1.7-1.7"/>'}],Mn=[{id:"mada",n:"بطاقة مدى",d:"الدفع ببطاقة مدى",logo:"مدى mada"},{id:"apple",n:"Apple Pay",d:"دفع سريع وآمن",logo:" Pay"},{id:"card",n:"فيزا / ماستركارد",d:"بطاقات الائتمان",logo:"VISA ●●"},{id:"stc",n:"STC Pay",d:"المحفظة الرقمية",logo:"stc pay"},{id:"wallet",n:"المحفظة الرقمية",d:"رصيدك في سامي",logo:"👛"},{id:"points",n:"نقاط الولاء",d:"المتاح: 320 نقطة",logo:"✨"}],Fn=[{id:"pkg",n:"إهداء باقة",d:"اختر باقة جاهزة مصممة لتمنح تجربة متكاملة",btn:"اختر باقة لإهدائها",ic:'<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7s-2-5-5-5-3 5 0 5h5zM12 7s2-5 5-5 3 5 0 5h-5z"/>',img:"https://sami-care.sa//storage/uploads/422/zpncY6t7PeEmjKRKJnYepOUwN7nDJAVpsmNh6hut.png"},{id:"svc",n:"إهداء خدمة",d:"اختر خدمة واحدة أو أكثر من خدماتنا المتنوعة",btn:"اختر خدمة لإهدائها",ic:'<path d="M12 21s-7-4.4-9.3-8.5C.8 9 2.6 5.5 6 5.5c2 0 3.4 1.1 4 2.3.6-1.2 2-2.3 4-2.3 3.4 0 5.2 3.5 3.3 7-2.3 4.1-9.3 8.5-9.3 8.5z"/>',img:"https://sami-care.sa//storage/uploads/404/IO26IC8Qd0LCbCeHNjYPUhOmSWeZi3FkEPYFpsuB.jpg"}],Cn=[{t:"نوع الهدية",s:"إهداء خدمة / باقة"},{t:"اختيار الهدية",s:"اختر الباقة المناسبة"},{t:"تخصيص الهدية",s:"الرسالة والتصميم وطريقة الإرسال"},{t:"الدفع",s:"إتمام عملية الدفع"},{t:"نجاح الإهداء",s:"تم إرسال الهدية بنجاح"}],V=[{id:"qr",name:"فرع قريش",addr:"جدة، البوادي — شارع قريش",rate:4.7,hours:"12:00 ص – 10:00 م",vis:"+980 زائر شهريًا",home:!1,img:"https://sami-care.sa//storage/uploads/389/4fKSZ0AIoLjJT4JuFKO81qWrxGQ6ymQ6zLbi1L3b.jpg"},{id:"bg",name:"فرع البغدادية",addr:"جدة، البغدادية الغربية — شارع حائل",rate:4.8,hours:"12:00 ص – 10:00 م",vis:"+1.2K زائر شهريًا",home:!1,img:"https://sami-care.sa//storage/uploads/391/sSX2TVdlk84EEewXCDhT0w24X5WAJnPOA0GE6VHD.jpg"},{id:"hm",name:"خدمة منزلية",addr:"الباقة كاملة في منزلك — أينما كنت في جدة",rate:4.9,hours:"خدمة VIP",vis:"+2K عميل سعيد",home:!0,img:"https://sami-care.sa//storage/uploads/407/7gF352Ispha9FbN9jPxmjnpOQDg5vFY41n5ZTdqK.png"}],Bn=[{t:"اختيار الوقت",s:"اختر الوقت المناسب لك"},{t:"تأكيد الحجز",s:"راجع تفاصيل الحجز"},{t:"الدفع",s:"ادفع بأمان وسهولة"},{t:"نجاح الحجز",s:"تم تأكيد حجزك"}],on=["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],an=["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],rn=[{id:"mada",n:"مدى",logo:"مدى mada"},{id:"visa",n:"Visa",logo:"VISA"},{id:"mc",n:"ماستركارد",logo:"●● MC"},{id:"apple",n:"أبل باي",logo:" Pay"},{id:"cash",n:"الدفع عند الوصول",logo:"💵"}];function L(w){let r=Math.floor(w/60);const u=w%60,h=r>=12;return r=r%12||12,`${String(r).padStart(2,"0")}:${String(u).padStart(2,"0")} ${h?"م":"ص"}`}function G(w){return`${on[w.getDay()]} ${w.getDate()} ${an[w.getMonth()]} ${w.getFullYear()}`}const D=w=>w.toLocaleString("ar-EG-u-nu-latn"),Z=new Date(2026,6,7),sn="samiSiteBranch",En=w=>R.find(r=>r.id===w),Sn=w=>V.find(r=>r.id===w);function An(){try{const w=localStorage.getItem(sn);return V.some(r=>r.id===w)?w:null}catch{return null}}const $=mn({page:"packages",filter:"all",sort:"pop",gstep:0,gtype:null,gpkg:null,name:"",phone:"",msg:`أنت تستحق لحظة من الراحة والاهتمام.
استمتع بتجربة فاخرة تمنحك الاسترخاء والعناية.`,design:"lux-dark",method:"wa",when:"now",schedDate:"",pay:null,saveCard:!0,done:!1,ref:null,siteBranch:An(),bk:{step:0,pkg:null,branch:null,dayIdx:null,period:"all",time:null,notes:"",pay:null,done:!1,ref:null}});function E(){const w=k(()=>R.filter(o=>$.filter==="all"||o.cat===$.filter)),r=k(()=>{switch($.gstep){case 0:return!!$.gtype;case 1:return!!$.gpkg;case 2:return $.name.trim().length>1&&$.phone.trim().length>=9&&($.when==="now"||$.schedDate);case 3:return!!$.pay}return!1}),u=k(()=>["التالي: اختيار الهدية","التالي: تخصيص الهدية","متابعة إلى الدفع","🔒 إتمام الإهداء"][$.gstep]),h=k(()=>{const o=$.bk;switch(o.step){case 0:return o.dayIdx!=null&&o.time!=null;case 1:return!0}return!1}),x=k(()=>["التالي: تأكيد الحجز","متابعة إلى الدفع"][$.bk.step]),t=()=>Array.from({length:12},(o,a)=>{const c=new Date(Z);return c.setDate(c.getDate()+a),c}),d=o=>{const a=[];for(let c=600;c<=1260;c+=45){const z=(o.getDate()*5+c/45)%7===0;a.push({t:c,busy:z})}return a};function y(o,a){$.page="gift",$.gstep=o?1:0,$.gtype=o,$.gpkg=a,$.done=!1,$.ref=null,scrollTo({top:0,behavior:"smooth"})}function _(o){$.page="book",$.bk={step:0,pkg:o,branch:$.siteBranch||null,dayIdx:null,period:"all",time:null,notes:"",pay:null,done:!1,ref:null},scrollTo({top:0,behavior:"smooth"})}function m(){$.page="packages",$.done=!1,scrollTo({top:0})}function s(o){$.siteBranch=o;try{localStorage.setItem(sn,o)}catch{}}return{state:$,TODAY:Z,pkgOf:En,brOf:Sn,filteredPkgs:w,gCanNext:r,gNextLabel:u,bkCanNext:h,bkNextLabel:x,bkDays:t,bkSlots:d,startGift:y,startBook:_,backToPackages:m,setBranch:s}}const Dn=`
:root{
  --ink:#0A0906; --coal:#14110C;
  --gold:#CE9234; --gold-bright:#E8BE6C; --gold-deep:#9C6B1F;
  --champagne:#F0E6CF; --ivory:#F8F4EB; --paper:#FBFAF6; --card:#FFFFFF;
  --smoke:#9A9080; --mute:#7d745f; --text:#2A2519;
  --line:rgba(143,113,52,.22); --line-dark:rgba(198,161,91,.22);
  --green:#2E8B57; --green-bg:#EAF5EC;
  --p-relax:#4E9E6F; --p-fast:#D98A3B; --p-full:#B8912F; --p-groom:#8B6FC0; --p-home:#3E8E9E; --p-vip:#B0642A;
  --ease:cubic-bezier(.33,.9,.35,1); --dur:.26s;
  --font-d:'Noto Kufi Arabic',serif; --font-b:'Readex Pro',sans-serif;
}
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:var(--font-b);background:var(--ink);color:var(--text);-webkit-font-smoothing:antialiased;overflow-x:hidden}
::selection{background:var(--gold);color:var(--ink)}
img{max-width:100%;display:block}
a{color:inherit;text-decoration:none}
button{font-family:inherit;cursor:pointer;border:none;background:none;color:inherit}
input,textarea,select{font-family:inherit}
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
nav.links a{font-size:13.5px;color:var(--champagne);opacity:.82;transition:var(--dur);position:relative;padding-bottom:4px}
nav.links a:hover,nav.links a.on{opacity:1;color:var(--gold-bright)}
nav.links a.on::after{content:"";position:absolute;bottom:0;right:0;left:0;height:2px;background:var(--gold-bright);border-radius:2px}
.nav-actions{display:flex;align-items:center;gap:12px}
.icon-btn{position:relative;width:40px;height:40px;border-radius:50%;display:grid;place-items:center;
  border:1px solid var(--line-dark);color:var(--champagne);transition:var(--dur) var(--ease)}
.icon-btn:hover{border-color:var(--gold);color:var(--gold-bright)}
.icon-btn .count{position:absolute;top:-5px;left:-5px;min-width:18px;height:18px;border-radius:9px;
  background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);
  font-size:10.5px;font-weight:700;display:grid;place-items:center;padding-inline:4px}
.loyal{display:inline-flex;align-items:center;gap:8px;border:1px solid var(--gold);color:var(--gold-bright);
  padding:9px 18px;border-radius:999px;font-size:13px}

.shell{background:var(--paper);border-radius:26px 26px 0 0;min-height:calc(100vh - 71px);padding-bottom:80px;position:relative}

/* ===== أزرار عامة ===== */
.btn{display:inline-flex;align-items:center;gap:10px;justify-content:center;padding:14px 30px;border-radius:14px;
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
.btn-line{border:1.5px solid var(--gold);color:var(--gold-deep);background:#fff}
.btn-line:hover{background:rgba(198,161,91,.08);transform:translateY(-2px)}
.btn-dark{background:var(--ink);color:var(--gold-bright)}
.btn-dark:hover{background:#241E12;transform:translateY(-2px)}
.card{background:var(--card);border:1px solid var(--line);border-radius:18px;
  box-shadow:0 14px 30px -22px rgba(80,60,20,.25)}

/* ===== هيرو الباقات ===== */
.pk-hero{position:relative;border-radius:22px;overflow:hidden;margin-top:24px;min-height:300px;
  display:flex;align-items:center;background:#0d0b07}
.pk-hero .bg{position:absolute;inset:0}
.pk-hero .bg img{width:100%;height:100%;object-fit:cover;object-position:75% center;filter:brightness(.85)}
.pk-hero .bg::after{content:"";position:absolute;inset:0;
  background:linear-gradient(90deg,rgba(10,9,6,.92) 0%,rgba(10,9,6,.72) 42%,rgba(10,9,6,.1) 100%)}
.pk-hero .in{position:relative;z-index:2;padding:52px;max-width:560px}
.pk-hero .eyebrow{font-family:var(--font-d);font-size:clamp(20px,2.4vw,28px);color:var(--gold-bright)}
.pk-hero h1{font-family:var(--font-d);font-size:clamp(30px,4.2vw,50px);color:var(--ivory);line-height:1.25;margin:4px 0 14px}
.pk-hero p{color:var(--champagne);font-size:15px;line-height:1.9;font-weight:300;opacity:.85;max-width:44ch}
.pk-hero .ghost-logo{position:absolute;left:5%;top:50%;transform:translateY(-50%);width:220px;opacity:.14;z-index:1;color:var(--gold-bright)}

/* ===== فلاتر الباقات ===== */
/* ملاحظة صغيرة على سطر واحد — مش سكشن كامل */
.branch-gate{display:flex;align-items:center;justify-content:flex-start;gap:8px;flex-wrap:wrap;
  margin:16px 0 0;padding:0;border:0;background:none;border-radius:0;font-size:12px;color:#6f675e}
.branch-gate b{color:var(--gold-deep);font-weight:700}
.branch-gate button{border:0;background:none;padding:0;margin-inline-start:2px;color:var(--gold-deep);
  font-family:inherit;font-size:11.5px;font-weight:700;text-decoration:underline;text-underline-offset:3px;cursor:pointer}
.branch-gate button:hover{color:#855911}
.branch-gate button.primary{background:none;color:#a5603f}
.branch-gate-ov{position:fixed;inset:0;z-index:400;background:rgba(20,14,6,.55);backdrop-filter:blur(3px);
  display:flex;align-items:center;justify-content:center;opacity:0;pointer-events:none;transition:opacity .25s}
.branch-gate-ov.on{opacity:1;pointer-events:auto}
.branch-gate-modal{width:min(420px,92%);background:#fff;border-radius:20px;padding:26px;text-align:center;box-shadow:0 30px 60px -20px rgba(0,0,0,.4)}
.branch-gate-modal h3{font-family:var(--font-d);font-size:20px;margin:0 0 6px}
.branch-gate-modal p{font-size:12.5px;color:var(--mute);margin:0 0 18px}
.branch-gate-list{display:grid;gap:10px}
.branch-gate-list button{text-align:right;border:1.5px solid var(--line);border-radius:13px;padding:13px 16px;background:#fff}
.branch-gate-list button:hover{border-color:var(--gold)}
.branch-gate-list button b{display:block;font-size:14px;margin-bottom:3px}
.branch-gate-list button small{color:var(--mute);font-size:11.5px}
.branch-gate-close{margin-top:14px;background:none;border:0;color:var(--mute);font-size:12.5px;text-decoration:underline}
.filters{display:flex;gap:12px;margin:26px 0;flex-wrap:wrap}
.flt{display:inline-flex;align-items:center;gap:9px;padding:12px 24px;border-radius:14px;font-size:13.5px;font-weight:600;
  background:#fff;border:1.5px solid var(--line);color:var(--mute);transition:all var(--dur) var(--ease)}
.flt:hover{transform:translateY(-2px);border-color:rgba(143,113,52,.5);color:var(--gold-deep)}
.flt.on{background:var(--ink);color:var(--gold-bright);border-color:var(--ink);
  box-shadow:0 12px 24px -12px rgba(10,9,6,.6)}
.flt svg{width:16px;height:16px}

/* ===== شبكة الباقات ===== */
.pkgs{display:grid;grid-template-columns:repeat(5,1fr);gap:16px;align-items:stretch}
.pkg{
  position:relative;background:#fff;border:1.5px solid var(--line);border-radius:20px;overflow:visible;
  display:flex;flex-direction:column;transition:transform .3s var(--ease),box-shadow .3s,border-color .3s,opacity .3s;
  animation:pkgIn .45s var(--ease) both;
}
@keyframes pkgIn{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
.pkg:hover{transform:translateY(-8px);box-shadow:0 30px 54px -26px rgba(80,60,20,.5)}
.pkg.hot{border-color:var(--gold)}
.pkg .ph{position:relative;border-radius:19px 19px 0 0;overflow:hidden;aspect-ratio:16/10.5;background:#161209}
.pkg .ph img{width:100%;height:100%;object-fit:cover;transition:transform .7s var(--ease)}
.pkg:hover .ph img{transform:scale(1.06)}
.pkg .hotflag{position:absolute;top:12px;right:12px;background:linear-gradient(135deg,var(--gold-bright),var(--gold));
  color:var(--ink);font-size:10.5px;font-weight:700;padding:6px 13px;border-radius:999px;z-index:2;
  box-shadow:0 8px 16px -6px rgba(143,113,52,.6)}
.pkg .starflag{position:absolute;top:12px;left:12px;width:30px;height:30px;border-radius:50%;background:rgba(10,9,6,.7);
  border:1px solid var(--gold);display:grid;place-items:center;color:var(--gold-bright);z-index:2}
.pkg .badge{
  position:relative;width:48px;height:48px;border-radius:50%;flex:0 0 48px;align-self:center;margin:-24px auto -24px;
  background:#fff;display:grid;place-items:center;color:var(--pc);border:2px solid;z-index:3;
  box-shadow:0 10px 20px -8px rgba(80,60,20,.4);transition:transform .35s var(--ease);
}
.pkg .badge svg{display:block;width:22px;height:22px;stroke-width:2.2}
.pkg:hover .badge{transform:translateY(-2px) scale(1.06)}
.pkg .ph{margin-bottom:0}
.pkg .body{padding:34px 18px 18px;display:flex;flex-direction:column;flex:1;text-align:center;position:relative}
.pkg h3{font-family:var(--font-d);font-size:19px;color:var(--ink)}
.pkg .dur{font-size:12px;color:var(--mute);margin:6px 0 8px;display:flex;justify-content:center;gap:6px;align-items:center}
.pkg .desc{font-size:12.5px;color:var(--mute);line-height:1.8;min-height:44px}
.pkg .inc{margin:14px 0;padding-top:14px;border-top:1px dashed var(--line);text-align:right;flex:1}
.pkg .inc b{font-size:12px;color:var(--ink);display:block;margin-bottom:10px}
.pkg .inc ul{list-style:none;display:grid;gap:8px}
.pkg .inc li{display:flex;gap:8px;align-items:center;font-size:12px;color:#5c5442}
.pkg .inc li i{width:15px;height:15px;border-radius:50%;background:var(--pc);color:#fff;display:grid;place-items:center;flex:none;font-size:9px;font-style:normal}
.pkg .price{font-family:var(--font-d);font-size:30px;color:var(--pc);margin:4px 0 12px}
.pkg .price small{font-size:13px;color:var(--mute);font-family:var(--font-b)}
.pkg .acts{display:grid;gap:8px}
.pkg .book{width:100%;padding:12px;border-radius:12px;font-size:13.5px;font-weight:700;border:1.5px solid var(--pc);
  color:var(--pc);transition:all var(--dur) var(--ease)}
.pkg .book:hover,.pkg.hot .book{background:var(--pc);color:#fff}
.pkg.hot .book{border-color:transparent;background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink)}
.pkg.hot .book:hover{filter:brightness(1.05)}
.pkg .gift-mini{font-size:12px;color:var(--mute);display:inline-flex;gap:6px;align-items:center;justify-content:center;
  padding:8px;transition:color var(--dur)}
.pkg .gift-mini:hover{color:var(--gold-deep)}

/* ===== بانر الإهداء ===== */
.gift-banner{margin:34px 0 26px;border-radius:22px;overflow:hidden;position:relative;
  background:linear-gradient(120deg,#F7EFD9,#FDF9EE 55%,#F5ECD4);border:1px solid var(--line);
  display:grid;grid-template-columns:200px 1fr auto;align-items:center;gap:26px;padding:28px 34px}
.gift-banner::before{content:"";position:absolute;inset:-40%;pointer-events:none;
  background:conic-gradient(from 0deg,transparent 72%,rgba(198,161,91,.18) 80%,transparent 88%);
  animation:sweep 10s linear infinite}
@keyframes sweep{to{transform:rotate(360deg)}}
.gb-box{width:150px;height:150px;position:relative;transform-style:preserve-3d;perspective:600px;
  animation:giftFloat 7s ease-in-out infinite;justify-self:center}
@keyframes giftFloat{0%,100%{transform:rotateY(-14deg) rotateX(6deg) translateY(0)}50%{transform:rotateY(14deg) rotateX(-3deg) translateY(-8px)}}
.gb-box .face{position:absolute;inset:0;border-radius:18px;border:1px solid rgba(143,113,52,.5);
  background:linear-gradient(150deg,#241d10,#0f0c06);display:grid;place-items:center;
  box-shadow:inset 0 0 34px rgba(198,161,91,.2),0 24px 44px -16px rgba(80,60,20,.5)}
.gb-box .face::before{content:"";position:absolute;inset-block:0;right:calc(50% - 8px);width:16px;
  background:linear-gradient(180deg,var(--gold-bright),var(--gold-deep))}
.gb-box .face::after{content:"";position:absolute;inset-inline:0;top:calc(50% - 8px);height:16px;
  background:linear-gradient(90deg,var(--gold-deep),var(--gold-bright),var(--gold-deep))}
.gb-box .tag{position:absolute;bottom:-14px;left:-22px;background:#FFFDF6;border:1px solid var(--line);
  padding:8px 14px;border-radius:10px;font-size:10.5px;color:var(--gold-deep);transform:rotate(-8deg);
  box-shadow:0 10px 18px -8px rgba(80,60,20,.35)}
.gift-banner .txt{position:relative;z-index:1}
.gift-banner h2{font-family:var(--font-d);font-size:clamp(21px,2.6vw,28px);color:var(--ink)}
.gift-banner p{color:var(--mute);font-size:13.5px;margin-top:8px;line-height:1.9;max-width:52ch}
.gift-banner .mini-feats{display:flex;gap:26px;margin-top:16px;flex-wrap:wrap}
.gift-banner .mf{text-align:center;font-size:11px;color:var(--mute)}
.gift-banner .mf .mi{width:38px;height:38px;margin:0 auto 7px;border-radius:11px;border:1px solid var(--line);
  display:grid;place-items:center;color:var(--gold-deep);background:#fff}
.gift-banner .cta{position:relative;z-index:1}

/* ===== شريط المزايا ===== */
.perks{display:grid;grid-template-columns:repeat(6,1fr);gap:0;background:#fff;border:1px solid var(--line);
  border-radius:18px;padding:20px 10px;margin-top:26px}
.perk{text-align:center;padding:6px 12px;border-inline-start:1px solid var(--line)}
.perk:first-child{border:none}
.perk .pi{width:40px;height:40px;margin:0 auto 9px;border-radius:12px;display:grid;place-items:center;
  background:rgba(198,161,91,.1);color:var(--gold-deep)}
.perk b{font-size:12.5px;color:var(--ink);display:block}
.perk small{font-size:10.5px;color:var(--mute)}

/* ===== تحسين الهيدر الموحد ===== */
body{background:#FBFAF6!important}
.shell,#app,#giftApp{background:#FBFAF6!important}
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


/* ===== ستيبر الإهداء ===== */
.g-stepper{padding:32px 0 6px}
.g-steps{display:flex;justify-content:space-between;max-width:860px;margin-inline:auto;position:relative}
.g-step{flex:1;display:flex;flex-direction:column;align-items:center;gap:9px;position:relative;z-index:2}
.g-step .bubble{width:46px;height:46px;border-radius:50%;background:#fff;border:1.5px solid var(--line);
  display:grid;place-items:center;color:#A79c86;font-weight:700;font-size:14px;transition:all .35s var(--ease)}
.g-step b{font-size:13px;color:#A79c86;font-family:var(--font-d);transition:color .3s}
.g-step small{font-size:10.5px;color:#B4a98f}
.g-step .bar{position:absolute;top:23px;right:calc(50% + 30px);width:calc(100% - 60px);height:2px;background:var(--line);z-index:-1}
.g-step .bar i{display:block;height:100%;width:0;background:linear-gradient(90deg,var(--gold-deep),var(--gold-bright));transition:width .6s var(--ease)}
.g-step:first-child .bar{display:none}
.g-step.active .bubble{background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);border-color:transparent;
  box-shadow:0 10px 24px -8px rgba(143,113,52,.6),0 0 0 6px rgba(198,161,91,.14);transform:scale(1.06)}
.g-step.active b{color:var(--gold-deep)}
.g-step.done .bubble{border-color:var(--gold);color:var(--gold-deep);cursor:pointer}
.g-step.done .bar i,.g-step.active .bar i{width:100%}
.g-stage{display:grid;grid-template-columns:1fr 320px;gap:24px;padding:24px 0;align-items:start}
.g-head{text-align:center;margin:8px 0 26px}
.g-head h1{font-family:var(--font-d);font-size:clamp(24px,3vw,34px);color:var(--ink)}
.g-head h1 .lock{color:var(--gold-deep)}
.g-head p{color:var(--mute);font-size:14px;margin-top:7px}

/* خطوة 1: نوع الهدية */
.gtype-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}
.gtype{position:relative;border-radius:20px;overflow:hidden;border:1.5px solid var(--line);cursor:pointer;
  background:#fff;transition:all .3s var(--ease)}
.gtype:hover{transform:translateY(-5px);box-shadow:0 26px 46px -24px rgba(80,60,20,.5)}
.gtype.sel{border-color:var(--gold);box-shadow:0 0 0 4px rgba(198,161,91,.16)}
.gtype .im{aspect-ratio:16/9.5;overflow:hidden;background:linear-gradient(150deg,#F3EBD8,#EFE5CC);position:relative}
.gtype .im img{width:100%;height:100%;object-fit:cover;transition:transform .7s var(--ease)}
.gtype:hover .im img{transform:scale(1.05)}
.gtype .ic{position:absolute;top:16px;left:16px;width:56px;height:56px;border-radius:50%;background:rgba(255,253,246,.9);
  border:1px solid var(--gold);display:grid;place-items:center;color:var(--gold-deep)}
.gtype .bd{padding:20px;text-align:center}
.gtype h3{font-family:var(--font-d);font-size:21px;color:var(--ink)}
.gtype p{font-size:13px;color:var(--mute);margin:7px 0 16px;line-height:1.8}
.gtype .go{display:inline-flex;width:100%;justify-content:center;gap:8px;padding:13px;border-radius:13px;
  background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);font-size:13.5px;font-weight:700}

/* خطوة 2: اختيار الباقة للإهداء */
.gp-sort{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px}
.gp-sort small{font-size:12.5px;color:var(--mute)}
.gp-sort select{border:1.5px solid var(--line);border-radius:11px;padding:10px 16px;font-size:13px;background:#fff;color:var(--ink);outline:none}
.gpkgs{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.gpkg{background:#fff;border:1.5px solid var(--line);border-radius:18px;overflow:hidden;cursor:pointer;
  transition:all .3s var(--ease);display:flex;flex-direction:column;animation:pkgIn .4s var(--ease) both}
.gpkg:hover{transform:translateY(-5px);box-shadow:0 24px 44px -24px rgba(80,60,20,.5)}
.gpkg.sel{border-color:var(--gold);box-shadow:0 0 0 4px rgba(198,161,91,.18)}
.gpkg .ph{aspect-ratio:16/9;overflow:hidden;position:relative;background:#161209}
.gpkg .ph img{width:100%;height:100%;object-fit:cover}
.gpkg .ph .chk{position:absolute;top:10px;left:10px;width:26px;height:26px;border-radius:50%;
  background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);display:grid;place-items:center;
  opacity:0;transform:scale(.4);transition:all .3s var(--ease)}
.gpkg.sel .ph .chk{opacity:1;transform:scale(1)}
.gpkg .bd{padding:16px;text-align:center;display:flex;flex-direction:column;flex:1}
.gpkg h4{font-family:var(--font-d);font-size:16.5px;color:var(--ink)}
.gpkg .dur{font-size:11.5px;color:var(--mute);margin:5px 0}
.gpkg .desc{font-size:11.5px;color:var(--mute);line-height:1.7;flex:1}
.gpkg .prc{font-family:var(--font-d);font-size:22px;color:var(--pc,var(--gold-deep));margin:10px 0}
.gpkg .prc small{font-size:12px;color:var(--mute);font-family:var(--font-b)}
.gpkg .pick{border:1.5px solid var(--gold);color:var(--gold-deep);border-radius:11px;padding:10px;font-size:12.5px;font-weight:700;
  display:flex;justify-content:center;gap:7px;transition:var(--dur)}
.gpkg.sel .pick,.gpkg .pick:hover{background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);border-color:transparent}

/* خطوة 3: التخصيص */
.custom-grid{display:grid;grid-template-columns:1fr 1.35fr;gap:18px;align-items:start}
.preview-col{position:sticky;top:90px}
.preview-col h4,.form-col h4{font-family:var(--font-d);font-size:16px;color:var(--ink);margin-bottom:14px;display:flex;gap:8px;align-items:center}
.gcard{
  aspect-ratio:16/10;border-radius:18px;position:relative;overflow:hidden;padding:26px;
  display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;
  box-shadow:0 30px 54px -24px rgba(20,15,5,.55);transition:background .45s var(--ease),color .45s;
}
.gcard .bow{position:absolute;top:-6px;right:18px;width:64px;color:currentColor;opacity:.9}
.gcard .leaves{position:absolute;inset:0;pointer-events:none;opacity:.35}
.gcard .leaves svg{position:absolute}
.gcard .lg{font-family:var(--font-d);font-size:15px;letter-spacing:.14em;margin-bottom:4px;display:flex;align-items:center;gap:8px}
.gcard .lg small{font-size:9px;letter-spacing:.06em;opacity:.8}
.gcard h3{font-family:var(--font-d);font-size:clamp(20px,2.4vw,27px);margin:10px 0 6px}
.gcard .tg{font-size:12px;opacity:.85;letter-spacing:.02em}
.gcard .hr{width:120px;height:1px;background:currentColor;opacity:.4;margin:16px auto 0;position:relative}
.gcard .hr::after{content:"♡";position:absolute;top:-9px;right:calc(50% - 8px);font-size:13px;background:inherit;padding-inline:6px}
.gcard-msg{margin-top:14px;background:#FDF9EE;border:1px solid var(--line);border-radius:14px;padding:16px 18px;position:relative}
.gcard-msg .q{position:absolute;top:8px;font-size:26px;color:var(--gold);font-family:serif;line-height:1}
.gcard-msg .q1{right:12px}.gcard-msg .q2{left:12px;bottom:4px;top:auto}
.gcard-msg b{display:block;font-family:var(--font-d);color:var(--gold-deep);font-size:14.5px;margin-bottom:6px}
.gcard-msg p{font-size:12.5px;color:#5c5442;line-height:1.9;white-space:pre-wrap}
.form-col .card{padding:20px}
.fld{margin-bottom:16px}
.fld label{font-size:12.5px;color:var(--mute);display:block;margin-bottom:8px;font-weight:600}
.fld input,.fld textarea{width:100%;border:1.5px solid var(--line);border-radius:12px;padding:12px 14px;font-size:13.5px;
  background:#FDFBF5;color:var(--ink);outline:none;transition:border-color var(--dur),box-shadow var(--dur)}
.fld input:focus,.fld textarea:focus{border-color:var(--gold);box-shadow:0 0 0 3px rgba(198,161,91,.14)}
.fld textarea{resize:vertical;min-height:88px}
.fld .cnt{font-size:11px;color:var(--mute);margin-top:6px;display:block}
.fld .cnt.max{color:#B3452F}
.two{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.designs{display:grid;grid-template-columns:repeat(5,1fr);gap:10px}
.design{cursor:pointer;text-align:center}
.design .sw{aspect-ratio:16/11;border-radius:12px;border:2px solid transparent;position:relative;overflow:hidden;
  transition:all .25s var(--ease);display:grid;place-items:center;font-family:var(--font-d);font-size:9px}
.design:hover .sw{transform:translateY(-3px)}
.design.sel .sw{border-color:var(--gold);box-shadow:0 0 0 3px rgba(198,161,91,.2)}
.design .sw .dchk{position:absolute;top:5px;left:5px;width:18px;height:18px;border-radius:50%;
  background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);display:grid;place-items:center;
  opacity:0;transform:scale(.4);transition:all .25s var(--ease)}
.design.sel .sw .dchk{opacity:1;transform:scale(1)}
.design small{font-size:10.5px;color:var(--mute);display:block;margin-top:6px}
.design.sel small{color:var(--gold-deep);font-weight:700}
.send-opts{display:flex;gap:16px;margin-bottom:14px}
.send-opts .ro{display:flex;gap:8px;align-items:center;font-size:13px;color:var(--ink);cursor:pointer}
.send-opts .ro i{width:18px;height:18px;border-radius:50%;border:1.5px solid var(--line);display:grid;place-items:center;transition:all .25s}
.send-opts .ro i::after{content:"";width:9px;height:9px;border-radius:50%;background:linear-gradient(135deg,var(--gold-bright),var(--gold));transform:scale(0);transition:transform .25s var(--ease)}
.send-opts .ro.on i{border-color:var(--gold)}
.send-opts .ro.on i::after{transform:scale(1)}
.methods{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}
.mth{border:1.5px solid var(--line);border-radius:13px;padding:15px 8px;text-align:center;cursor:pointer;
  background:#fff;transition:all var(--dur) var(--ease);color:var(--mute);font-size:12px}
.mth:hover{transform:translateY(-3px)}
.mth.sel{border-color:var(--gold);color:var(--gold-deep);background:linear-gradient(160deg,#FFFBF0,#fff);font-weight:700;
  box-shadow:0 0 0 3px rgba(198,161,91,.14)}
.mth .mi{width:36px;height:36px;margin:0 auto 8px;border-radius:11px;display:grid;place-items:center;
  background:rgba(198,161,91,.1);color:var(--gold-deep)}
.sched-box{overflow:hidden;max-height:0;opacity:0;transition:max-height .4s var(--ease),opacity .3s,margin .3s}
.sched-box.open{max-height:120px;opacity:1;margin-top:12px}

/* خطوة 4: الدفع */
.pay-methods{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.pm{position:relative;display:flex;flex-direction:column;gap:10px;padding:16px;border-radius:15px;align-items:center;text-align:center;
  border:1.5px solid var(--line);background:#fff;cursor:pointer;transition:all var(--dur) var(--ease)}
.pm:hover{border-color:rgba(143,113,52,.5)}
.pm.sel{border-color:var(--gold);background:linear-gradient(160deg,#FFFBF0,#fff);box-shadow:0 0 0 3px rgba(198,161,91,.15)}
.pm .pmi{height:34px;border-radius:9px;display:grid;place-items:center;padding-inline:14px;background:#F5F0E4;
  font-weight:800;font-size:12px;color:var(--ink)}
.pm b{font-size:13px;color:var(--ink)}
.pm small{font-size:10.5px;color:var(--mute)}
.pm .rad{position:absolute;top:12px;left:12px;width:20px;height:20px;border-radius:50%;border:1.5px solid var(--line);
  display:grid;place-items:center;transition:all .25s var(--ease)}
.pm .rad i{width:9px;height:9px;border-radius:50%;background:linear-gradient(135deg,var(--gold-bright),var(--gold));
  transform:scale(0);transition:transform .25s var(--ease)}
.pm.sel .rad{border-color:var(--gold)}
.pm.sel .rad i{transform:scale(1)}
.card-form{overflow:hidden;max-height:0;opacity:0;transition:max-height .45s var(--ease),opacity .35s,margin .35s}
.card-form.open{max-height:320px;opacity:1;margin-top:16px}
.cf-box{padding:18px;border-radius:14px;background:#FCFAF4;border:1px solid var(--line)}
.cf-box h5{font-size:13px;color:var(--ink);margin-bottom:14px}
.save-card{display:flex;gap:9px;align-items:center;font-size:12.5px;color:var(--mute);margin-top:12px;cursor:pointer}
.save-card i{width:19px;height:19px;border-radius:6px;border:1.5px solid var(--line);display:grid;place-items:center;color:#fff;transition:all .25s}
.save-card.on i{background:linear-gradient(135deg,var(--gold-bright),var(--gold));border-color:transparent;color:var(--ink)}
.secure-strip{display:flex;gap:9px;align-items:center;justify-content:center;background:rgba(198,161,91,.08);
  border-radius:12px;padding:12px;font-size:12px;color:var(--gold-deep);margin-top:16px}
.after-pay{font-size:11.5px;color:var(--mute);text-align:center;margin-top:12px}

/* الشريط الجانبي - ملخص الهدية */
.gsum{position:sticky;top:86px}
.gsum .card{padding:20px}
.gsum h3{font-family:var(--font-d);font-size:17px;color:var(--ink);margin-bottom:16px;display:flex;align-items:center;gap:10px}
.gsum h3::after{content:"";flex:1;height:1px;background:linear-gradient(-90deg,var(--gold),transparent)}
.gsum .pkline{display:flex;gap:12px;margin-bottom:14px;padding-bottom:14px;border-bottom:1px solid rgba(143,113,52,.14)}
.gsum .pkline img{width:74px;height:74px;object-fit:cover;border-radius:12px}
.gsum .pkline b{font-family:var(--font-d);font-size:15px;color:var(--ink);display:block}
.gsum .pkline small{font-size:11px;color:var(--mute);display:block;margin-top:3px;line-height:1.6}
.gsum .pkline .pr{font-family:var(--font-d);color:var(--gold-deep);font-size:15px;margin-top:5px;display:block}
.gs-row{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:9px 0;
  border-bottom:1px solid rgba(143,113,52,.1);font-size:12.5px}
.gs-row:last-of-type{border:none}
.gs-row .k{color:var(--mute);display:flex;gap:7px;align-items:center;flex:none}
.gs-row .v{color:var(--ink);font-weight:600;text-align:left;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.gs-row .v .chip{font-size:10.5px;background:var(--green-bg);color:var(--green);padding:3px 10px;border-radius:999px;font-weight:700}
.gs-total{display:flex;justify-content:space-between;align-items:baseline;margin-top:12px;padding-top:14px;border-top:1px dashed var(--line)}
.gs-total .k{font-size:13.5px;font-weight:700;color:var(--ink)}
.gs-total .v{font-family:var(--font-d);font-size:26px;color:var(--gold-deep)}
.gs-note{margin-top:14px;display:flex;gap:9px;align-items:center;background:rgba(198,161,91,.1);border-radius:11px;
  padding:11px 13px;font-size:11.5px;color:var(--gold-deep)}
.why-gift{margin-top:16px}
.why-gift .wg{display:flex;gap:12px;align-items:flex-start;padding:11px 0;border-bottom:1px solid rgba(143,113,52,.1)}
.why-gift .wg:last-child{border:none}
.why-gift .wi{flex:none;width:40px;height:40px;border-radius:50%;border:1px solid var(--line);display:grid;place-items:center;color:var(--gold-deep);background:#FDFBF5}
.why-gift b{font-size:13px;color:var(--ink);display:block}
.why-gift small{font-size:11.5px;color:var(--mute)}
.help-card{margin-top:16px;text-align:center;padding:20px}
.help-card .hi{width:46px;height:46px;margin:0 auto 10px;border-radius:50%;border:1px solid var(--line);display:grid;place-items:center;color:var(--gold-deep)}
.help-card b{font-family:var(--font-d);color:var(--ink);display:block}
.help-card small{color:var(--mute);font-size:12px;display:block;margin:4px 0 12px}
.help-card a{display:inline-block;border:1.5px solid var(--gold);color:var(--gold-deep);border-radius:11px;padding:9px 26px;font-size:12.5px;font-weight:600}

/* خطوة 5: النجاح */
.gsuccess{max-width:1000px;margin-inline:auto;text-align:center;padding-top:16px}
.gsuc-head{display:flex;gap:14px;align-items:center;justify-content:center;margin-bottom:8px}
.gsuc-head .ic{width:56px;height:56px;border-radius:50%;border:2px solid var(--gold);color:var(--gold-deep);
  display:grid;place-items:center;animation:sucPop .6s var(--ease) both .1s}
@keyframes sucPop{from{transform:scale(.4);opacity:0}60%{transform:scale(1.1)}to{transform:scale(1);opacity:1}}
.gsuc-head .ic svg{stroke-dasharray:60;stroke-dashoffset:60;animation:dash .7s var(--ease) forwards .45s}
@keyframes dash{to{stroke-dashoffset:0}}
.gsuccess h1{font-family:var(--font-d);font-size:clamp(26px,3.4vw,38px);color:var(--ink)}
.gsuccess .sub{color:var(--mute);font-size:14px;margin-top:6px}
.gsuc-grid{display:grid;grid-template-columns:1.15fr 1fr;gap:18px;margin-top:26px;text-align:right}
.gsuc-card-col .gcard{box-shadow:0 26px 48px -22px rgba(20,15,5,.5)}
.gsuc-details{padding:22px}
.gsuc-details h4{font-family:var(--font-d);font-size:17px;color:var(--ink);margin-bottom:10px}
.gsuc-actions{display:flex;gap:12px;justify-content:center;margin-top:26px;flex-wrap:wrap}
.confetti{position:absolute;pointer-events:none;font-size:13px;color:var(--gold);animation:conf 3.4s ease-in-out infinite;opacity:.6}
@keyframes conf{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(-12px) rotate(24deg)}}
.thanks{margin-top:26px;color:var(--mute);font-size:13px;display:flex;gap:12px;align-items:center;justify-content:center}
.thanks i{color:var(--gold);font-style:normal}

/* الشريط السفلي */
.footbar{position:fixed;bottom:0;inset-inline:0;z-index:390;background:rgba(255,253,247,.92);
  backdrop-filter:blur(14px);border-top:1px solid var(--line);
  box-shadow:0 -14px 40px -20px rgba(80,60,20,.35);display:none}
.footbar.on{display:block}
.footbar .in{display:flex;align-items:center;gap:20px;padding:13px 0}
.btn-back{border:1.5px solid var(--line);color:var(--mute);background:#fff;padding:13px 24px}
.btn-back:hover{border-color:var(--gold);color:var(--gold-deep)}
.fb-mid{flex:1;text-align:center;font-size:12.5px;color:var(--mute)}
.fb-mid b{color:var(--gold-deep);font-family:var(--font-d);font-size:17px}
.view{display:none}
.view.on{display:block;animation:viewIn .45s var(--ease) both}
@keyframes viewIn{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
.pay-loading{position:fixed;inset:0;z-index:999;display:none;place-items:center;background:rgba(10,9,6,.7);backdrop-filter:blur(6px)}
.pay-loading.on{display:grid}
.pl-box{background:#fff;border-radius:22px;padding:42px 58px;text-align:center;animation:viewIn .35s var(--ease)}
.pl-ring{width:60px;height:60px;margin:0 auto 18px;border-radius:50%;border:3px solid rgba(198,161,91,.2);
  border-top-color:var(--gold);animation:spin 1s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
.pl-box b{font-family:var(--font-d);font-size:17px;color:var(--ink)}
.pl-box small{display:block;color:var(--mute);margin-top:7px;font-size:12px}
.toast{position:fixed;bottom:90px;right:50%;transform:translate(50%,20px);z-index:998;opacity:0;pointer-events:none;
  background:var(--ink);color:var(--champagne);padding:13px 24px;border-radius:13px;font-size:13px;
  border:1px solid var(--line-dark);transition:all .35s var(--ease);display:flex;gap:9px;align-items:center}
.toast.on{opacity:1;transform:translate(50%,0)}
.toast svg{color:var(--gold-bright)}

@media(max-width:1100px){
  .pkgs{grid-template-columns:repeat(3,1fr)}
  .gpkgs{grid-template-columns:1fr 1fr}
  .g-stage{grid-template-columns:1fr}
  .gsum{position:static;order:-1}
  .perks{grid-template-columns:repeat(3,1fr)}
  .perk:nth-child(4){border:none}
  .custom-grid{grid-template-columns:1fr}
  .preview-col{position:static}
  .gift-banner{grid-template-columns:1fr;text-align:center}
  .gift-banner .mini-feats{justify-content:center}
  .gb-box{margin-inline:auto}
}
@media(max-width:700px){
  nav.links{display:none}
  .pkgs,.gpkgs,.gtype-grid,.pay-methods{grid-template-columns:1fr}
  .pkgs{max-width:420px;margin-inline:auto}
  .g-step b,.g-step small{display:none}
  .g-step .bubble{width:40px;height:40px}
  .g-step .bar{top:20px;right:calc(50% + 26px);width:calc(100% - 52px)}
  .designs,.methods{grid-template-columns:repeat(3,1fr)}
  .perks{grid-template-columns:1fr 1fr}
  .perk{border:none}
  .pk-hero .in{padding:32px 24px}
  .gsuc-grid{grid-template-columns:1fr}
  .two{grid-template-columns:1fr}
  .fb-mid{display:none}
  .filters{overflow-x:auto;flex-wrap:nowrap;padding-bottom:6px}
  .flt{flex:none}
}
/* ===== حجز الباقة: اختيار الفرع ===== */
.bk-branches{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.bkbr{position:relative;background:#fff;border:1.5px solid var(--line);border-radius:18px;overflow:hidden;cursor:pointer;
  transition:all .3s var(--ease);animation:pkgIn .4s var(--ease) both}
.bkbr:hover{transform:translateY(-5px);box-shadow:0 24px 44px -24px rgba(80,60,20,.5)}
.bkbr.sel{border-color:var(--gold);box-shadow:0 0 0 4px rgba(198,161,91,.16)}
.bkbr .ph{aspect-ratio:16/9.5;overflow:hidden;position:relative;background:#161209}
.bkbr .ph img{width:100%;height:100%;object-fit:cover;transition:transform .7s var(--ease)}
.bkbr:hover .ph img{transform:scale(1.05)}
.bkbr .chk{position:absolute;top:10px;left:10px;width:26px;height:26px;border-radius:50%;z-index:2;
  background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);display:grid;place-items:center;
  opacity:0;transform:scale(.4);transition:all .3s var(--ease)}
.bkbr.sel .chk{opacity:1;transform:scale(1)}
.bkbr .homeflag{position:absolute;top:10px;right:10px;background:rgba(255,251,240,.94);color:var(--gold-deep);
  font-size:10.5px;font-weight:700;padding:6px 12px;border-radius:999px;z-index:2}
.bkbr .bd{padding:16px;text-align:center}
.bkbr h4{font-family:var(--font-d);font-size:17px;color:var(--gold-deep)}
.bkbr .addr{font-size:12px;color:var(--mute);margin:5px 0 11px}
.bkbr .meta{display:flex;justify-content:center;gap:13px;font-size:11.5px;color:#5c5442;
  border-top:1px dashed var(--line);padding-top:11px;flex-wrap:wrap}
.bkbr .meta .live{color:var(--green);display:flex;gap:5px;align-items:center}
.bkbr .meta .live i{width:6px;height:6px;border-radius:50%;background:var(--green);animation:pulseDot 2s infinite}
@keyframes pulseDot{0%,100%{opacity:1}50%{opacity:.3}}
/* ===== شريط الأيام والأوقات ===== */
.daystrip{display:flex;gap:10px;overflow-x:auto;padding:4px 2px 10px;scrollbar-width:thin}
.day{flex:0 0 84px;text-align:center;padding:13px 8px;border-radius:14px;border:1.5px solid var(--line);
  background:#fff;cursor:pointer;transition:all .25s var(--ease)}
.day:hover{transform:translateY(-3px);border-color:rgba(143,113,52,.5)}
.day.sel{border-color:var(--gold);background:linear-gradient(160deg,#FFF9EC,#fff);box-shadow:0 0 0 3px rgba(198,161,91,.16)}
.day small{font-size:11px;color:var(--mute);display:block}
.day b{font-family:var(--font-d);font-size:21px;color:var(--ink);display:block;margin:3px 0}
.day.sel b,.day.sel small{color:var(--gold-deep)}
.periods{display:flex;gap:10px;margin:16px 0 14px}
.period{flex:1;display:flex;align-items:center;justify-content:center;gap:8px;padding:11px;border-radius:12px;
  border:1.5px solid var(--line);font-size:13px;color:var(--mute);transition:all var(--dur) var(--ease);background:#fff}
.period.sel{border-color:var(--gold);color:var(--gold-deep);background:rgba(198,161,91,.08);font-weight:600}
.slots{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}
.slot{position:relative;padding:12px;border-radius:12px;border:1.5px solid var(--line);font-size:13.5px;color:var(--ink);
  transition:all .22s var(--ease);background:#fff;animation:pkgIn .3s var(--ease) both}
.slot:hover:not(:disabled){transform:scale(1.04);border-color:rgba(143,113,52,.5);box-shadow:0 10px 20px -10px rgba(80,60,20,.35)}
.slot:disabled{color:#C9C1AC;background:#FAF7EF;cursor:default;text-decoration:line-through}
.slot.sel{border-color:var(--gold);background:linear-gradient(160deg,#FFF9EC,#fff);font-weight:700;color:var(--gold-deep);
  box-shadow:0 0 0 3px rgba(198,161,91,.16)}
.slot.sel::after{content:"✓";position:absolute;top:-8px;left:-8px;width:22px;height:22px;border-radius:50%;
  background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink);font-size:11px;display:grid;place-items:center}
.slot .tag{position:absolute;top:-9px;right:10px;font-size:9.5px;font-weight:700;padding:3px 9px;border-radius:999px;
  background:#FFEFE0;color:#B0622A}
.end-line{display:flex;gap:10px;align-items:center;justify-content:space-between;background:rgba(198,161,91,.08);
  border:1px solid var(--line);border-radius:13px;padding:13px 18px;margin-top:16px;font-size:12.5px;color:var(--gold-deep)}
.end-line b{color:var(--ink)}
/* ===== تأكيد حجز الباقة ===== */
.bk-pkg-hero{display:flex;gap:16px;align-items:center;padding:18px;margin-bottom:16px}
.bk-pkg-hero img{width:110px;height:88px;object-fit:cover;border-radius:14px}
.bk-pkg-hero .t{flex:1}
.bk-pkg-hero h4{font-family:var(--font-d);font-size:19px;color:var(--ink)}
.bk-pkg-hero small{color:var(--mute);font-size:12px;display:block;margin-top:4px;line-height:1.7}
.bk-pkg-hero .incs{display:flex;gap:7px;flex-wrap:wrap;margin-top:9px}
.bk-pkg-hero .incs span{font-size:10.5px;background:rgba(198,161,91,.12);color:var(--gold-deep);
  padding:4px 11px;border-radius:999px}
.bk-pkg-hero .pr{font-family:var(--font-d);font-size:26px;color:var(--pc,var(--gold-deep));white-space:nowrap}
.bk-rows{padding:6px 20px}
.ok-banner{display:flex;gap:14px;align-items:center;background:var(--green-bg);border:1px solid rgba(46,139,87,.25);
  border-radius:15px;padding:15px 20px;margin-bottom:16px}
.ok-banner .ic{width:38px;height:38px;border-radius:50%;background:var(--green);color:#fff;display:grid;place-items:center;flex:none}
.ok-banner b{color:#1E6B41;font-size:14px;display:block}
.ok-banner small{color:#4a7d5f;font-size:12px}
/* ===== دفع الباقة (قائمة عمودية كالتصميم) ===== */
.bk-pays{display:grid;gap:10px}
.bkpm{display:flex;align-items:center;gap:14px;padding:15px 18px;border-radius:14px;border:1.5px solid var(--line);
  background:#fff;cursor:pointer;transition:all var(--dur) var(--ease)}
.bkpm:hover{border-color:rgba(143,113,52,.5)}
.bkpm.sel{border-color:var(--gold);background:linear-gradient(160deg,#FFFBF0,#fff);box-shadow:0 0 0 3px rgba(198,161,91,.15)}
.bkpm .lg{width:64px;height:34px;border-radius:9px;display:grid;place-items:center;background:#F5F0E4;
  font-weight:800;font-size:11.5px;color:var(--ink);flex:none}
.bkpm b{font-size:13.5px;color:var(--ink)}
.bkpm .rad{margin-inline-start:auto;width:22px;height:22px;border-radius:50%;border:1.5px solid var(--line);
  display:grid;place-items:center;transition:all .25s var(--ease);flex:none}
.bkpm .rad i{width:10px;height:10px;border-radius:50%;background:linear-gradient(135deg,var(--gold-bright),var(--gold));
  transform:scale(0);transition:transform .25s var(--ease)}
.bkpm.sel .rad{border-color:var(--gold)}
.bkpm.sel .rad i{transform:scale(1)}
.pay-summary-strip{padding:16px 20px;margin-bottom:14px;background:linear-gradient(160deg,#FFF9EC,#fff)}
.pay-summary-strip b{font-family:var(--font-d);font-size:16px;color:var(--ink);display:block}
.pay-summary-strip small{color:var(--mute);font-size:12px;display:block;margin-top:5px}
.pay-summary-strip .amt{font-family:var(--font-d);font-size:26px;color:var(--gold-deep);margin-top:8px;display:block}
.btn-paynow{width:100%;background:var(--ink);color:#fff;padding:16px;border-radius:14px;font-size:15px;font-weight:700;
  display:flex;justify-content:center;gap:10px;transition:all var(--dur) var(--ease);margin-top:16px}
.btn-paynow:hover:not(:disabled){background:#241E12;transform:translateY(-2px);box-shadow:0 16px 30px -14px rgba(10,9,6,.6)}
.btn-paynow:disabled{opacity:.45;cursor:not-allowed}
.qr-box{width:150px;height:150px;margin:14px auto 0;border:1.5px solid var(--gold);border-radius:16px;padding:9px;background:#fff}
.qr-box canvas{width:100%;height:100%;image-rendering:pixelated}
@media(max-width:1100px){.bk-branches{grid-template-columns:1fr 1fr}}
@media(max-width:700px){
  .bk-branches{grid-template-columns:1fr}
  .slots{grid-template-columns:repeat(2,1fr)}
  .bk-pkg-hero{flex-wrap:wrap}
}
@media(prefers-reduced-motion:reduce){
  *,*::before,*::after{animation-duration:.01ms!important;transition-duration:.01ms!important}
}
`,In="/images/generated/packages/complete-care-hq.png",Hn={class:"branch-gate"},Ln={class:"filters"},Pn=["data-f","onClick"],jn={class:"ph"},Vn=["src","alt"],Tn={class:"body"},Yn={class:"dur"},Nn={class:"desc"},Gn={class:"inc"},On={class:"price"},qn={class:"acts"},Rn=["data-book","onClick"],Kn=["data-gift","onClick"],Wn={class:"gift-banner"},Un={class:"txt"},Xn={class:"mini-feats"},Jn={class:"mi"},Qn={class:"cta"},Zn={class:"perks"},nt={class:"pi"},tt={__name:"PackagesCatalog",emits:["book","gift","gift-now","pick-branch"],setup(w,{emit:r}){const{state:u,filteredPkgs:h}=E(),x=r,t=o=>o.toLocaleString("ar-EG-u-nu-latn"),d=k(()=>{const o=V.find(a=>a.id===u.siteBranch);return o?o.name:""}),y=k(()=>`grid-template-columns:repeat(${Math.min(h.value.length,5)},1fr)`),_={clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',gift:'<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7s-2-5-5-5-3 5 0 5h5zM12 7s2-5 5-5 3 5 0 5h-5z"/>'},m=[["بطاقة إهداء رقمية",'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>'],["رسالة مخصصة من قلبك",'<path d="M21 11.5a8.4 8.4 0 01-9 8.4 8.5 8.5 0 01-3.8-.9L3 21l2-5.2a8.4 8.4 0 011.5-9.8 8.5 8.5 0 0114.5 5.5z"/>'],["إرسال فوري عبر واتساب أو بريد",'<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>'],["جدولة الإهداء في الوقت المناسب",'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>']],s=[["غرفة VIP خاصة","لباقات مختارة",'<path d="M2 8l4 4 6-8 6 8 4-4v10a2 2 0 01-2 2H4a2 2 0 01-2-2z"/>'],["منتجات فاخرة","ضمن باقاتك",'<path d="M20 12v9H4v-9M2 7h20v5H2z"/>'],["أولوية في الحجز","مواعيد مرنة",'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4"/>'],["ضيافة فاخرة","مشروبات مختارة",'<path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4z"/>'],["نقاط ولاء مضاعفة","مع كل باقة",'<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7"/>'],["ضمان الجودة","أفضل تجربة",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>']];return(o,a)=>(l(),p(v,null,[a[15]||(a[15]=K('<section class="pk-hero"><div class="bg"><img src="'+In+'" alt=""></div><svg class="ghost-logo" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width=".8"><path d="M12 2l9 5v10l-9 5-9-5V7z"></path><path d="M12 2v20M3 7l9 5 9-5M3 17l9-5 9 5"></path></svg><div class="in"><div class="eyebrow">تجارب متكاملة</div><h1>لراحتـك وأناقتـك</h1><p>اختر الباقة التي تناسب احتياجاتك واستمتع بتجربة عناية متكاملة توفر عليك الوقت والجهد</p></div></section>',1)),n("div",Hn,[e(u).siteBranch?(l(),p(v,{key:0},[n("span",null,[a[3]||(a[3]=g("📍 الفرع المختار: ",-1)),n("b",null,i(d.value),1)]),n("button",{id:"branchGateChange",onClick:a[0]||(a[0]=c=>x("pick-branch"))},"تغيير الفرع")],64)):(l(),p(v,{key:1},[a[4]||(a[4]=n("span",null,"حدد فرعك أولًا لعرض الأسعار والمواعيد المتاحة بدقة",-1)),n("button",{id:"branchGateChange",class:"primary",onClick:a[1]||(a[1]=c=>x("pick-branch"))},"اختر الفرع")],64))]),n("div",Ln,[(l(!0),p(v,null,C(e($n),c=>(l(),p("button",{key:c.id,class:M(["flt",{on:e(u).filter===c.id}]),"data-f":c.id,onClick:z=>e(u).filter=c.id},[b(f,{inner:c.ic,size:16},null,8,["inner"]),g(" "+i(c.n),1)],10,Pn))),128))]),n("div",{class:"pkgs",style:H(y.value)},[(l(!0),p(v,null,C(e(h),(c,z)=>(l(),p("article",{key:c.id,class:M(["pkg",{hot:c.hot}]),style:H(`--pc:${c.color};animation-delay:${z*.07}s`)},[n("div",jn,[n("img",{src:c.img,alt:c.name},null,8,Vn),c.hot?(l(),p(v,{key:0},[a[5]||(a[5]=n("span",{class:"hotflag"},"الأكثر طلبًا",-1)),a[6]||(a[6]=n("span",{class:"starflag"},"★",-1))],64)):I("",!0)]),n("span",{class:"badge",style:H(`border-color:${c.hex}`)},[b(f,{inner:c.ico,size:22},null,8,["inner"])],4),n("div",Tn,[n("h3",null,i(c.name),1),n("div",Yn,[b(f,{inner:_.clock,size:13},null,8,["inner"]),g(" "+i(c.dur)+" دقيقة",1)]),n("div",Nn,i(c.desc),1),n("div",Gn,[a[8]||(a[8]=n("b",null,"تشمل الباقة",-1)),n("ul",null,[(l(!0),p(v,null,C(c.inc,(B,P)=>(l(),p("li",{key:P},[a[7]||(a[7]=n("i",null,"✓",-1)),g(i(B),1)]))),128))])]),n("div",On,[g(i(t(c.price))+" ",1),a[9]||(a[9]=n("small",null,"ر.س",-1))]),n("div",qn,[n("button",{class:"book","data-book":c.id,onClick:B=>x("book",c.id)},"احجز الباقة",8,Rn),n("button",{class:"gift-mini","data-gift":c.id,onClick:B=>x("gift",c.id)},[b(f,{inner:_.gift,size:14},null,8,["inner"]),a[10]||(a[10]=g(" أهدِ هذه الباقة",-1))],8,Kn)])])],6))),128))],4),n("section",Wn,[a[14]||(a[14]=n("div",{class:"gb-box"},[n("div",{class:"face"}),n("span",{class:"tag"},"هدية لكم من القلب 💛")],-1)),n("div",Un,[a[11]||(a[11]=n("h2",null,"أهدِ تجربة فاخرة لمن تحب",-1)),a[12]||(a[12]=n("p",null,"اختر الباقة، أضف رسالة مخصصة، وسيصلك المهدى إليه بشكل أنيق في الوقت المناسب",-1)),n("div",Xn,[(l(),p(v,null,C(m,(c,z)=>n("div",{key:z,class:"mf"},[n("span",Jn,[b(f,{inner:c[1],size:16},null,8,["inner"])]),g(i(c[0]),1)])),64))])]),n("div",Qn,[n("button",{class:"btn btn-gold",id:"giftNow",onClick:a[2]||(a[2]=c=>x("gift-now"))},[b(f,{inner:_.gift,size:16},null,8,["inner"]),a[13]||(a[13]=g(" أهدِ باقة الآن",-1))])])]),n("div",Zn,[(l(),p(v,null,C(s,(c,z)=>n("div",{key:z,class:"perk"},[n("span",nt,[b(f,{inner:c[2],size:17},null,8,["inner"])]),n("b",null,i(c[0]),1),n("small",null,i(c[1]),1)])),64))])],64))}},et={class:"g-stepper"},ot={class:"g-steps"},at=["data-bi"],it={class:"bubble"},rt='<path d="M20 6L9 17l-5-5"/>',st={__name:"BookStepper",setup(w){const{state:r}=E();return(u,h)=>(l(),p("div",et,[n("div",ot,[(l(!0),p(v,null,C(e(Bn),(x,t)=>(l(),p("div",{key:t,class:M(["g-step",{active:t===e(r).bk.step&&!e(r).bk.done,done:t<e(r).bk.step||e(r).bk.done}]),"data-bi":t},[h[0]||(h[0]=n("div",{class:"bar"},[n("i")],-1)),n("span",it,[t<e(r).bk.step||e(r).bk.done?(l(),A(f,{key:0,inner:rt,size:17})):(l(),p(v,{key:1},[g(i(t+1),1)],64))]),n("b",null,i(x.t),1),n("small",null,i(x.s),1)],10,at))),128))])]))}},lt={class:"g-head"},dt={class:"card",style:{padding:"20px","margin-bottom":"16px"}},pt={class:"daystrip"},gt=["data-bd","onClick"],ct={key:0,class:"card",style:{padding:"20px"}},xt={class:"periods"},bt=["data-bp","onClick"],ft={class:"slots"},ht=["data-bt","disabled","onClick"],ut={key:0,class:"tag"},vt={key:0,class:"end-line"},mt={key:1,class:"card",style:{padding:"40px","text-align":"center",color:"var(--mute)","font-size":"13.5px"}},kt="grid-column:1/-1;text-align:center;color:var(--mute);padding:30px;border:1.5px dashed var(--line);border-radius:14px;font-size:13px",yt="font-family:var(--font-d);font-size:15px;color:var(--ink);margin-bottom:12px",wt="font-family:var(--font-d);font-size:15px;color:var(--ink);margin-bottom:4px",zt={__name:"BookTimeStep",setup(w){const{state:r,pkgOf:u,bkDays:h,bkSlots:x}=E(),t=r.bk,d=h(),y=k(()=>u(t.pkg)),_=k(()=>t.dayIdx==null?[]:x(d[t.dayIdx]).filter(a=>{const c=a.t/60;return t.period==="all"||t.period==="am"&&c<12||t.period==="pm"&&c>=12&&c<17||t.period==="eve"&&c>=17})),m=a=>a===2?"الأكثر طلبًا":a===_.value.length-1?"آخر موعد":"",s=k(()=>t.time!=null?L(t.time+y.value.dur):null),o=[["all","كل اليوم","🗓️"],["am","صباحًا","☀️"],["pm","مساءً","🌇"]];return(a,c)=>(l(),p(v,null,[n("div",lt,[c[0]||(c[0]=n("h1",null,"اختر الوقت والتاريخ",-1)),n("p",null,"اختر الوقت المناسب لك — مدة الباقة "+i(y.value.dur)+" دقيقة",1)]),n("div",dt,[n("h4",{style:yt},"📅 اختر اليوم"),n("div",pt,[(l(!0),p(v,null,C(e(d),(z,B)=>(l(),p("div",{key:B,class:M(["day",{sel:e(t).dayIdx===B}]),"data-bd":B,onClick:P=>{e(t).dayIdx=B,e(t).time=null}},[n("small",null,i(e(on)[z.getDay()]),1),n("b",null,i(z.getDate()),1),n("small",null,i(e(an)[z.getMonth()]),1)],10,gt))),128))])]),e(t).dayIdx!=null?(l(),p("div",ct,[n("h4",{style:wt},"🕐 "+i(e(G)(e(d)[e(t).dayIdx])),1),n("div",xt,[(l(),p(v,null,C(o,z=>n("button",{key:z[0],class:M(["period",{sel:e(t).period===z[0]}]),"data-bp":z[0],onClick:B=>e(t).period=z[0]},i(z[2])+" "+i(z[1]),11,bt)),64))]),n("div",ft,[_.value.length?(l(!0),p(v,{key:0},C(_.value,(z,B)=>(l(),p("button",{key:z.t,class:M(["slot",{sel:e(t).time===z.t}]),"data-bt":z.t,disabled:z.busy,style:H(`animation-delay:${Math.min(B*.03,.4)}s`),onClick:P=>e(t).time=z.t},[m(B)&&!z.busy?(l(),p("span",ut,i(m(B)),1)):(l(),p(v,{key:1},[],64)),g(i(e(L)(z.t)),1)],14,ht))),128)):(l(),p("div",{key:1,style:kt},"لا توجد أوقات متاحة في هذه الفترة"))]),e(t).time!=null?(l(),p("div",vt,[n("span",null,[c[1]||(c[1]=g("⏱️ مدة الجلسة: ",-1)),n("b",null,i(y.value.dur)+" دقيقة",1)]),n("span",null,[c[2]||(c[2]=g("الوقت المتوقع للانتهاء: ",-1)),n("b",null,i(s.value),1)])])):I("",!0)])):(l(),p("div",mt,[...c[3]||(c[3]=[n("b",{style:{display:"block","font-family":"var(--font-d)","font-size":"16px",color:"var(--ink)","margin-bottom":"6px"}},"ابدأ باختيار اليوم",-1),g("اختر يومًا من الشريط أعلاه لعرض الأوقات المتاحة",-1)])]))],64))}},_t={class:"ok-banner"},$t={class:"ic"},Mt=["src","alt"],Ft={class:"t"},Ct={class:"incs"},Bt={class:"pr"},Et={class:"card bk-rows",style:{"margin-bottom":"16px"}},St={class:"gs-row"},At={class:"k"},Dt={class:"v"},It={class:"gs-row"},Ht={class:"k"},Lt={class:"v"},Pt={class:"gs-row"},jt={class:"k"},Vt={class:"v",dir:"ltr"},Tt={class:"gs-row"},Yt={class:"k"},Nt={class:"v"},Gt={class:"card",style:{padding:"20px"}},Ot={class:"fld",style:{margin:"0"}},qt="font-size:12px;color:var(--mute);font-family:var(--font-b)",Rt="display:flex;gap:9px;align-items:center;font-size:12px;color:var(--mute);background:rgba(198,161,91,.08);border-radius:11px;padding:11px 15px;margin-top:14px",Kt="color:var(--gold-deep);font-weight:600;text-decoration:underline",Wt={__name:"BookConfirmStep",setup(w){const{state:r,pkgOf:u,bkDays:h}=E(),x=r.bk,t=k(()=>u(x.pkg)),d=k(()=>V.find(m=>m.id===x.branch)),y=k(()=>h()[x.dayIdx]),_={check:'<path d="M20 6L9 17l-5-5"/>',pin:'<path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>',cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>'};return(m,s)=>(l(),p(v,null,[s[8]||(s[8]=n("div",{class:"g-head"},[n("h1",null,"تأكيد الحجز"),n("p",null,"راجع تفاصيل الحجز قبل المتابعة للدفع")],-1)),n("div",_t,[n("span",$t,[b(f,{inner:_.check,size:16},null,8,["inner"])]),s[1]||(s[1]=n("div",null,[n("b",null,"تم حفظ موعدك بنجاح"),n("small",null,"يمكنك تعديل أو إلغاء الحجز قبل 6 ساعات من وقت الموعد")],-1))]),n("div",{class:"card bk-pkg-hero",style:H(`--pc:${t.value.color}`)},[n("img",{src:t.value.img,alt:t.value.name},null,8,Mt),n("div",Ft,[n("h4",null,i(t.value.name),1),n("small",null,"🕐 "+i(t.value.dur)+" دقيقة — "+i(t.value.desc),1),n("div",Ct,[(l(!0),p(v,null,C(t.value.inc,(o,a)=>(l(),p("span",{key:a},"✓ "+i(o),1))),128))])]),n("div",Bt,[g(i(e(D)(t.value.price))+" ",1),n("small",{style:qt},"ر.س")])],4),n("div",Et,[n("div",St,[n("span",At,[b(f,{inner:_.pin,size:15},null,8,["inner"]),s[2]||(s[2]=g(" الفرع",-1))]),n("span",Dt,i(d.value.name),1)]),n("div",It,[n("span",Ht,[b(f,{inner:_.cal,size:15},null,8,["inner"]),s[3]||(s[3]=g(" التاريخ",-1))]),n("span",Lt,i(e(G)(y.value)),1)]),n("div",Pt,[n("span",jt,[b(f,{inner:_.clock,size:15},null,8,["inner"]),s[4]||(s[4]=g(" الوقت",-1))]),n("span",Vt,i(e(L)(e(x).time))+" – "+i(e(L)(e(x).time+t.value.dur)),1)]),n("div",Tt,[n("span",Yt,[b(f,{inner:_.info,size:15},null,8,["inner"]),s[5]||(s[5]=g(" مدة الجلسة",-1))]),n("span",Nt,i(t.value.dur)+" دقيقة",1)])]),n("div",Gt,[n("div",Ot,[s[6]||(s[6]=n("label",null,"📝 ملاحظات (اختياري)",-1)),Y(n("textarea",{id:"bkNotes",placeholder:"أضف أي ملاحظة...","onUpdate:modelValue":s[0]||(s[0]=o=>e(x).notes=o)},null,512),[[N,e(x).notes]])]),n("div",{style:Rt},[s[7]||(s[7]=g(" 🛡️ بالتأكيد على الحجز، فإنك توافق على ",-1)),n("a",{href:"https://sami-care.sa/TermsAndConditions",style:Kt},"الشروط والأحكام")])])],64))}},Ut={class:"card pay-summary-strip"},Xt={class:"amt"},Jt={class:"card",style:{padding:"20px"}},Qt={class:"bk-pays"},Zt=["data-bkpay","onClick"],ne={class:"lg"},te=["disabled"],ee='<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>',oe="display:flex;gap:8px;align-items:center;justify-content:center;margin-top:14px;font-size:12px;color:var(--mute)",ae={__name:"BookPayStep",emits:["pay"],setup(w,{emit:r}){const{state:u,pkgOf:h,bkDays:x}=E(),t=r,d=u.bk,y=k(()=>h(d.pkg)),_=k(()=>V.find(s=>s.id===d.branch)),m=k(()=>x()[d.dayIdx]);return(s,o)=>(l(),p(v,null,[o[2]||(o[2]=n("div",{class:"g-head"},[n("h1",null,"اختر طريقة الدفع"),n("p",null,"ادفع بأمان وسهولة")],-1)),n("div",Ut,[n("b",null,i(y.value.name),1),n("small",null,i(_.value.name)+" — "+i(e(G)(m.value))+" • "+i(e(L)(e(d).time)),1),n("span",Xt,i(e(D)(y.value.price))+" ر.س",1)]),n("div",Jt,[n("div",Qt,[(l(!0),p(v,null,C(e(rn),a=>(l(),p("div",{key:a.id,class:M(["bkpm",{sel:e(d).pay===a.id}]),"data-bkpay":a.id,onClick:c=>e(d).pay=a.id},[n("span",ne,i(a.logo),1),n("b",null,i(a.n),1),o[1]||(o[1]=n("span",{class:"rad"},[n("i")],-1))],10,Zt))),128))]),n("button",{class:"btn-paynow",id:"bkPayNow",disabled:!e(d).pay,onClick:o[0]||(o[0]=a=>t("pay"))},[b(f,{inner:ee,size:16}),g(" ادفع الآن — "+i(e(D)(y.value.price))+" ر.س",1)],8,te),n("div",{style:oe},"🌐 جميع المعاملات مؤمّنة وآمنة")])],64))}},ie={class:"gsuccess"},re={class:"gsuc-grid"},se={class:"card gsuc-details"},le={class:"gs-row"},de={class:"k"},pe={class:"v"},ge={class:"gs-row"},ce={class:"k"},xe={class:"v"},be={class:"gs-row"},fe={class:"k"},he={class:"v"},ue={class:"gs-row"},ve={class:"k"},me={class:"v",dir:"ltr"},ke={class:"gs-row"},ye={class:"k"},we={class:"v"},ze={class:"gs-row"},_e={class:"k"},$e={class:"gs-row"},Me={class:"k"},Fe={class:"v",dir:"ltr"},Ce={class:"gsuc-actions"},Be="color:var(--gold-deep);font-family:var(--font-d);font-size:16px",Ee="display:block;margin-top:12px;font-size:11.5px;color:var(--mute)",Se="display:flex;gap:8px;margin-top:14px",nn="flex:1;padding:11px;font-size:12px",Ae={__name:"BookSuccess",emits:["home","calendar","share"],setup(w,{emit:r}){const{state:u,pkgOf:h,bkDays:x}=E(),t=r,d=u.bk,y=k(()=>h(d.pkg)),_=k(()=>V.find(o=>o.id===d.branch)),m=k(()=>x()[d.dayIdx]),s={box:'<path d="M20 12v10H4V12M2 7h20v5H2z"/>',pin:'<path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>',cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>',card:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',qr:'<path d="M4 4h16v16H4z"/><path d="M9 9h2v2H9zM13 9h2M9 13h2M13 13h2v2h-2z"/>',home:'<path d="M3 9l9-6 9 6v11a1 1 0 01-1 1H4a1 1 0 01-1-1z"/>',calAdd:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M12 14v4M10 16h4"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>'};return(o,a)=>(l(),p("div",ie,[a[16]||(a[16]=K('<div class="gsuc-head"><h1>تم تأكيد حجزك بنجاح!</h1><span class="ic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6L9 17l-5-5"></path></svg></span></div><p class="sub">نتطلع لخدمتك وتقديم تجربة استثنائية تليق بك</p>',2)),n("div",re,[n("div",se,[a[10]||(a[10]=n("h4",null,"تفاصيل الحجز",-1)),n("div",le,[n("span",de,[b(f,{inner:s.box,size:14},null,8,["inner"]),a[3]||(a[3]=g(" الباقة",-1))]),n("span",pe,i(y.value.name),1)]),n("div",ge,[n("span",ce,[b(f,{inner:s.pin,size:14},null,8,["inner"]),a[4]||(a[4]=g(" الفرع",-1))]),n("span",xe,i(_.value.name),1)]),n("div",be,[n("span",fe,[b(f,{inner:s.cal,size:14},null,8,["inner"]),a[5]||(a[5]=g(" التاريخ",-1))]),n("span",he,i(e(G)(m.value)),1)]),n("div",ue,[n("span",ve,[b(f,{inner:s.clock,size:14},null,8,["inner"]),a[6]||(a[6]=g(" الوقت",-1))]),n("span",me,i(e(L)(e(d).time))+" – "+i(e(L)(e(d).time+y.value.dur)),1)]),n("div",ke,[n("span",ye,[b(f,{inner:s.info,size:14},null,8,["inner"]),a[7]||(a[7]=g(" مدة الجلسة",-1))]),n("span",we,i(y.value.dur)+" دقيقة",1)]),n("div",ze,[n("span",_e,[b(f,{inner:s.card,size:14},null,8,["inner"]),a[8]||(a[8]=g(" المبلغ المدفوع",-1))]),n("span",{class:"v",style:Be},i(e(D)(y.value.price))+" ر.س",1)]),n("div",$e,[n("span",Me,[b(f,{inner:s.qr,size:14},null,8,["inner"]),a[9]||(a[9]=g(" رمز الحجز",-1))]),n("span",Fe,i(e(d).ref),1)])]),n("div",{class:"card gsuc-details",style:{"text-align":"center"}},[a[11]||(a[11]=n("h4",{style:{"text-align":"right"}},"رمز الوصول السريع",-1)),a[12]||(a[12]=n("div",{class:"qr-box"},[n("canvas",{id:"bkQr"})],-1)),n("small",{style:Ee},"📱 امسح الرمز عند الوصول لتسجيل الحضور"),n("div",{style:Se},[n("button",{class:"btn btn-dark",style:nn},"🍎 Apple Wallet"),n("button",{class:"btn btn-dark",style:nn},"📲 Google Wallet")])])]),n("div",Ce,[n("button",{class:"btn btn-gold",id:"bkHome",onClick:a[0]||(a[0]=c=>t("home"))},[b(f,{inner:s.home,size:15},null,8,["inner"]),a[13]||(a[13]=g(" العودة إلى الرئيسية",-1))]),n("button",{class:"btn btn-line",id:"bkCal",onClick:a[1]||(a[1]=c=>t("calendar"))},[b(f,{inner:s.calAdd,size:15},null,8,["inner"]),a[14]||(a[14]=g(" إضافة إلى التقويم",-1))]),n("button",{class:"btn btn-line",id:"bkShare",onClick:a[2]||(a[2]=c=>t("share"))},[b(f,{inner:s.share,size:15},null,8,["inner"]),a[15]||(a[15]=g(" مشاركة الحجز",-1))])]),a[17]||(a[17]=n("div",{class:"thanks"},[n("i",null,"❦"),g(" جودة تستحقها.. تجربة لا تنساها "),n("i",null,"❦")],-1))]))}},De={class:"gsum"},Ie={class:"card"},He={class:"pkline"},Le=["src"],Pe={class:"pr"},je={key:0,class:"gs-row"},Ve={class:"v"},Te={key:1,class:"gs-row"},Ye={class:"v"},Ne={class:"gs-row"},Ge={class:"v"},Oe={class:"gs-row"},qe={class:"v"},Re={key:3,class:"gs-row"},Ke={class:"v"},We={class:"gs-total"},Ue={class:"v"},Xe={class:"gs-note"},Je={class:"card help-card"},Qe={class:"hi"},Ze={__name:"BookSummary",setup(w){const{state:r,pkgOf:u,bkDays:h}=E(),x=r.bk,t=k(()=>u(x.pkg)),d=k(()=>x.branch?V.find(s=>s.id===x.branch):null),y=k(()=>x.dayIdx!=null?h()[x.dayIdx]:null),_=k(()=>{const s=rn.find(o=>o.id===x.pay);return s?s.n:""}),m={shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',head:'<path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>'};return(s,o)=>(l(),p("div",De,[n("div",Ie,[o[8]||(o[8]=n("h3",null,"ملخص الحجز",-1)),n("div",He,[n("img",{src:t.value.img,alt:""},null,8,Le),n("span",null,[n("b",null,i(t.value.name),1),n("small",null,"🕐 "+i(t.value.dur)+" دقيقة",1),n("small",null,i(t.value.desc),1),n("span",Pe,i(e(D)(t.value.price))+" ر.س",1)])]),d.value?(l(),p("div",je,[o[0]||(o[0]=n("span",{class:"k"},"📍 الفرع",-1)),n("span",Ve,i(d.value.name),1)])):I("",!0),y.value?(l(),p("div",Te,[o[1]||(o[1]=n("span",{class:"k"},"📅 التاريخ",-1)),n("span",Ye,i(e(G)(y.value)),1)])):I("",!0),e(x).time!=null?(l(),p(v,{key:2},[n("div",Ne,[o[2]||(o[2]=n("span",{class:"k"},"🕐 الوقت",-1)),n("span",Ge,i(e(L)(e(x).time)),1)]),n("div",Oe,[o[3]||(o[3]=n("span",{class:"k"},"⏱️ نهاية الجلسة",-1)),n("span",qe,i(e(L)(e(x).time+t.value.dur)),1)])],64)):I("",!0),e(x).pay?(l(),p("div",Re,[o[4]||(o[4]=n("span",{class:"k"},"💳 طريقة الدفع",-1)),n("span",Ke,i(_.value),1)])):I("",!0),n("div",We,[o[6]||(o[6]=n("span",{class:"k"},"الإجمالي",-1)),n("span",Ue,[g(i(e(D)(t.value.price))+" ",1),o[5]||(o[5]=n("small",{style:{"font-size":"13px"}},"ر.س",-1))])]),n("div",Xe,[b(f,{inner:m.shield,size:14},null,8,["inner"]),o[7]||(o[7]=g(" حجز آمن — تعديل أو إلغاء مجاني قبل 6 ساعات",-1))])]),n("div",Je,[n("span",Qe,[b(f,{inner:m.head,size:18},null,8,["inner"])]),o[9]||(o[9]=n("b",null,"دعم على مدار الساعة",-1)),o[10]||(o[10]=n("small",null,"نحن هنا لخدمتك",-1)),o[11]||(o[11]=n("a",{href:"https://wa.me/963959415545"},"تواصل معنا",-1))])]))}},no={class:"g-stepper"},to={class:"g-steps"},eo=["data-i"],oo={class:"bubble"},ao='<path d="M20 6L9 17l-5-5"/>',io={__name:"GiftStepper",setup(w){const{state:r}=E();return(u,h)=>(l(),p("div",no,[n("div",to,[(l(!0),p(v,null,C(e(Cn),(x,t)=>(l(),p("div",{key:t,class:M(["g-step",{active:t===e(r).gstep,done:t<e(r).gstep||e(r).done}]),"data-i":t},[h[0]||(h[0]=n("div",{class:"bar"},[n("i")],-1)),n("span",oo,[t<e(r).gstep||e(r).done?(l(),A(f,{key:0,inner:ao,size:17})):(l(),p(v,{key:1},[g(i(t+1),1)],64))]),n("b",null,i(x.t),1),n("small",null,i(x.s),1)],10,eo))),128))])]))}},ro={class:"gtype-grid"},so=["data-gt","onClick"],lo={class:"im"},po=["src"],go={class:"ic"},co={class:"bd"},xo={class:"go"},bo='<path d="M19 12H5M11 18l-6-6 6-6"/>',fo={__name:"GiftTypeStep",setup(w){const{state:r}=E();return(u,h)=>(l(),p(v,null,[h[0]||(h[0]=n("div",{class:"g-head"},[n("h1",null,"ماذا ترغب بإهدائه؟"),n("p",null,"اختر ما يناسبك لإهداء تجربة مميزة لمن تحب")],-1)),n("div",ro,[(l(!0),p(v,null,C(e(Fn),x=>(l(),p("div",{key:x.id,class:M(["gtype",{sel:e(r).gtype===x.id}]),"data-gt":x.id,onClick:t=>e(r).gtype=x.id},[n("div",lo,[n("img",{src:x.img,alt:""},null,8,po),n("span",go,[b(f,{inner:x.ic,size:22},null,8,["inner"])])]),n("div",co,[n("h3",null,i(x.n),1),n("p",null,i(x.d),1),n("span",xo,[g(i(x.btn)+" ",1),b(f,{inner:bo,size:14})])])],10,so))),128))])],64))}},ho={class:"gp-sort"},uo={class:"gpkgs"},vo=["data-gp","onClick"],mo={class:"ph"},ko=["src","alt"],yo={class:"chk"},wo={class:"bd"},zo={class:"dur"},_o={class:"desc"},$o={class:"prc"},Mo={class:"pick"},Fo={__name:"GiftPickStep",setup(w){const{state:r}=E(),u={check:'<path d="M20 6L9 17l-5-5"/>',gift:'<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7s-2-5-5-5-3 5 0 5h5zM12 7s2-5 5-5 3 5 0 5h-5z"/>'},h=k(()=>R.slice().sort((x,t)=>r.sort==="low"?x.price-t.price:r.sort==="high"?t.price-x.price:(t.hot?1:0)-(x.hot?1:0)));return(x,t)=>(l(),p(v,null,[t[3]||(t[3]=n("div",{class:"g-head"},[n("h1",null,"اختر الباقة التي ترغب بإهدائها"),n("p",null,"باقات مميزة تمنح تجربة متكاملة من الاسترخاء والعناية")],-1)),n("div",ho,[Y(n("select",{id:"gpSort","onUpdate:modelValue":t[0]||(t[0]=d=>e(r).sort=d)},[...t[1]||(t[1]=[n("option",{value:"pop"},"الأكثر مبيعًا",-1),n("option",{value:"low"},"السعر: الأقل أولًا",-1),n("option",{value:"high"},"السعر: الأعلى أولًا",-1)])],512),[[kn,e(r).sort]]),n("small",null,i(e(R).length)+" باقات متاحة",1)]),n("div",uo,[(l(!0),p(v,null,C(h.value,(d,y)=>(l(),p("div",{key:d.id,class:M(["gpkg",{sel:e(r).gpkg===d.id}]),"data-gp":d.id,style:H(`--pc:${d.color};animation-delay:${y*.06}s`),onClick:_=>e(r).gpkg=d.id},[n("div",mo,[n("img",{src:d.img,alt:d.name},null,8,ko),n("span",yo,[b(f,{inner:u.check,size:13},null,8,["inner"])])]),n("div",wo,[n("h4",null,i(d.name),1),n("div",zo,"🕐 "+i(d.dur)+" دقيقة",1),n("div",_o,i(d.desc),1),n("div",$o,[g(i(e(D)(d.price))+" ",1),t[2]||(t[2]=n("small",null,"ر.س",-1))]),n("button",Mo,[b(f,{inner:u.gift,size:14},null,8,["inner"]),g(" "+i(e(r).gpkg===d.id?"تم الاختيار ✓":"أهدِ هذه الباقة"),1)])])],14,vo))),128))])],64))}},Co={class:"custom-grid"},Bo={class:"preview-col"},Eo={id:"cardPrev"},So={class:"gcard-msg"},Ao={id:"pvName"},Do={id:"pvMsg"},Io={class:"form-col"},Ho={class:"card",style:{"margin-bottom":"16px"}},Lo={class:"two"},Po={class:"fld"},jo={class:"fld"},Vo={class:"fld",style:{"margin-bottom":"4px"}},To={class:"card",style:{"margin-bottom":"16px"}},Yo={class:"designs"},No=["data-d","onClick"],Go={class:"dchk"},Oo={class:"card"},qo={class:"send-opts"},Ro={class:"fld",style:{margin:"0"}},Ko={class:"methods",style:{"margin-top":"14px"}},Wo=["data-m","onClick"],Uo={class:"mi"},Xo={__name:"GiftCustomizeStep",setup(w){const{state:r}=E(),u=k(()=>200-r.msg.length),h={eye:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',user:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',brush:'<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.6 7.6"/><circle cx="11" cy="11" r="2"/>',send:'<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>',check:'<path d="M20 6L9 17l-5-5"/>'};return(x,t)=>(l(),p(v,null,[t[20]||(t[20]=n("div",{class:"g-head"},[n("h1",null,"خصص هديتك لتكون أجمل"),n("p",null,"أضف لمستك الخاصة مع رسالة وتصميم بطاقة الإهداء")],-1)),n("div",Co,[n("div",Bo,[n("h4",null,[b(f,{inner:h.eye,size:16},null,8,["inner"]),t[6]||(t[6]=g(" معاينة بطاقة الإهداء",-1))]),n("div",Eo,[b(tn,{design:e(r).design},null,8,["design"])]),n("div",So,[t[8]||(t[8]=n("span",{class:"q q1"},'"',-1)),t[9]||(t[9]=n("span",{class:"q q2"},'"',-1)),n("b",null,[t[7]||(t[7]=g("إلى: ",-1)),n("span",Ao,i(e(r).name||"—"),1)]),n("p",Do,i(e(r).msg||"اكتب رسالتك الشخصية لتظهر هنا"),1)])]),n("div",Io,[n("div",Ho,[n("h4",null,[b(f,{inner:h.user,size:16},null,8,["inner"]),t[10]||(t[10]=g(" بيانات المهدى إليه",-1))]),n("div",Lo,[n("div",Po,[t[11]||(t[11]=n("label",null,"الاسم الكامل",-1)),Y(n("input",{id:"gName",placeholder:"أحمد محمد","onUpdate:modelValue":t[0]||(t[0]=d=>e(r).name=d)},null,512),[[N,e(r).name]])]),n("div",jo,[t[12]||(t[12]=n("label",null,"رقم الجوال",-1)),Y(n("input",{id:"gPhone",dir:"ltr",placeholder:"05xxxxxxxx","onUpdate:modelValue":t[1]||(t[1]=d=>e(r).phone=d)},null,512),[[N,e(r).phone]])])]),n("div",Vo,[t[13]||(t[13]=n("label",null,"الرسالة الشخصية",-1)),Y(n("textarea",{id:"gMsg",maxlength:"200",placeholder:"اكتب رسالتك من القلب...","onUpdate:modelValue":t[2]||(t[2]=d=>e(r).msg=d)},null,512),[[N,e(r).msg]]),n("span",{class:M(["cnt",{max:u.value<20}]),id:"gCnt"},i(e(r).msg.length)+"/200",3)])]),n("div",To,[n("h4",null,[b(f,{inner:h.brush,size:16},null,8,["inner"]),t[14]||(t[14]=g(" تصميم بطاقة الإهداء",-1))]),n("div",Yo,[(l(!0),p(v,null,C(e(en),d=>(l(),p("div",{key:d.id,class:M(["design",{sel:e(r).design===d.id}]),"data-d":d.id,onClick:y=>e(r).design=d.id},[n("div",{class:"sw",style:H(`background:${d.bg};color:${d.fg}`)},[n("span",Go,[b(f,{inner:h.check,size:10},null,8,["inner"])]),t[15]||(t[15]=g("SAMI",-1))],4),n("small",null,i(d.n),1)],10,No))),128))])]),n("div",Oo,[n("h4",null,[b(f,{inner:h.send,size:16},null,8,["inner"]),t[16]||(t[16]=g(" طريقة الإرسال",-1))]),n("div",qo,[n("span",{class:M(["ro",{on:e(r).when==="now"}]),"data-w":"now",onClick:t[3]||(t[3]=d=>e(r).when="now")},[...t[17]||(t[17]=[n("i",null,null,-1),g(" إرسال الآن",-1)])],2),n("span",{class:M(["ro",{on:e(r).when==="later"}]),"data-w":"later",onClick:t[4]||(t[4]=d=>e(r).when="later")},[...t[18]||(t[18]=[n("i",null,null,-1),g(" 📅 جدولة لاحقًا",-1)])],2)]),n("div",{class:M(["sched-box",{open:e(r).when==="later"}])},[n("div",Ro,[t[19]||(t[19]=n("label",null,"موعد الإرسال",-1)),Y(n("input",{type:"datetime-local",id:"gSched","onUpdate:modelValue":t[5]||(t[5]=d=>e(r).schedDate=d)},null,512),[[N,e(r).schedDate]])])],2),n("div",Ko,[(l(!0),p(v,null,C(e(U),d=>(l(),p("div",{key:d.id,class:M(["mth",{sel:e(r).method===d.id}]),"data-m":d.id,onClick:y=>e(r).method=d.id},[n("span",Uo,[b(f,{inner:d.ic,size:17},null,8,["inner"])]),g(i(d.n),1)],10,Wo))),128))])])])])],64))}},Jo={class:"card",style:{padding:"22px","margin-bottom":"16px"}},Qo={class:"pay-methods"},Zo=["data-pay","onClick"],na={class:"pmi"},ta={class:"cf-box"},ea={class:"secure-strip"},oa="font-family:var(--font-d);font-size:16px;color:var(--ink);margin-bottom:16px",aa={__name:"GiftPayStep",setup(w){const{state:r}=E(),u=k(()=>r.pay==="card"||r.pay==="mada"),h={check:'<path d="M20 6L9 17l-5-5"/>',shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'};return(x,t)=>(l(),p(v,null,[t[8]||(t[8]=n("div",{class:"g-head"},[n("h1",null,[g("أكمل الدفع لإرسال هديتك "),n("span",{class:"lock"},"🔒")]),n("p",null,"بيانات دفع آمنة ومشفرة بالكامل")],-1)),n("div",Jo,[n("h4",{style:oa},"اختر طريقة الدفع"),n("div",Qo,[(l(!0),p(v,null,C(e(Mn),d=>(l(),p("div",{key:d.id,class:M(["pm",{sel:e(r).pay===d.id}]),"data-pay":d.id,onClick:y=>e(r).pay=d.id},[t[1]||(t[1]=n("span",{class:"rad"},[n("i")],-1)),n("span",na,i(d.logo),1),n("b",null,i(d.n),1),n("small",null,i(d.d),1)],10,Zo))),128))]),n("div",{class:M(["card-form",{open:u.value}])},[n("div",ta,[t[3]||(t[3]=n("h5",null,"بيانات البطاقة",-1)),t[4]||(t[4]=n("div",{class:"two"},[n("div",{class:"fld"},[n("label",null,"رقم البطاقة"),n("input",{dir:"ltr",inputmode:"numeric",placeholder:"•••• •••• •••• ••••"})]),n("div",{class:"fld"},[n("label",null,"الاسم على البطاقة"),n("input",{placeholder:"الاسم كما هو على البطاقة"})])],-1)),t[5]||(t[5]=n("div",{class:"two"},[n("div",{class:"fld",style:{margin:"0"}},[n("label",null,"تاريخ الانتهاء"),n("input",{dir:"ltr",placeholder:"MM / YY"})]),n("div",{class:"fld",style:{margin:"0"}},[n("label",null,"رمز الأمان (CVV)"),n("input",{dir:"ltr",inputmode:"numeric",placeholder:"•••"})])],-1)),n("span",{class:M(["save-card",{on:e(r).saveCard}]),id:"saveCard",onClick:t[0]||(t[0]=d=>e(r).saveCard=!e(r).saveCard)},[n("i",null,[b(f,{inner:h.check,size:11},null,8,["inner"])]),t[2]||(t[2]=g(" حفظ البطاقة لاستخدامها لاحقًا",-1))],2)])],2),n("div",ea,[b(f,{inner:h.shield,size:15},null,8,["inner"]),t[6]||(t[6]=g(" جميع بيانات الدفع محمية بتقنية تشفير آمنة ومعتمدة",-1))]),t[7]||(t[7]=n("div",{class:"after-pay"},"سيتم إرسال الهدية مباشرة بعد إتمام الدفع",-1))])],64))}},ia={class:"gsuccess"},ra={class:"gsuc-grid"},sa={class:"gsuc-card-col"},la={class:"gcard-msg"},da={class:"card gsuc-details"},pa={class:"gs-row"},ga={class:"k"},ca={class:"v"},xa={class:"gs-row"},ba={class:"k"},fa={class:"v"},ha={class:"gs-row"},ua={class:"k"},va={class:"v",dir:"ltr"},ma={class:"gs-row"},ka={class:"k"},ya={class:"v"},wa={class:"chip"},za={class:"gs-row"},_a={class:"k"},$a={class:"gs-row"},Ma={class:"k"},Fa={class:"v",dir:"ltr"},Ca={class:"gsuc-actions"},Ba="display:flex;gap:10px;align-items:center;background:var(--green-bg);border-radius:12px;padding:13px 15px;margin-top:14px;font-size:12.5px;color:#1E6B41",Ea="flex:none;width:26px;height:26px;border-radius:50%;background:var(--green);color:#fff;display:grid;place-items:center",Sa={__name:"GiftSuccess",emits:["recipient","new-gift","copy-self","share","home"],setup(w,{emit:r}){const{state:u}=E(),h=r,x=["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],t=new Date,d=`${t.getDate()} ${x[t.getMonth()]} ${t.getFullYear()}`,y="✦✧✦✧".split("").map((s,o)=>({c:s,style:`top:${10+o*16}%;${o%2?"right":"left"}:${4+o*3}%;animation-delay:-${o}s`})),_=k(()=>{const s=U.find(o=>o.id===u.method);return s?s.n:""}),m={user:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',send:'<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>',phone:'<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',card:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',check:'<path d="M20 6L9 17l-5-5"/>',box:'<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7"/>',gift:'<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7s-2-5-5-5-3 5 0 5h5zM12 7s2-5 5-5 3 5 0 5h-5z"/>',mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 6L2 7"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>',home:'<path d="M3 9l9-6 9 6v11a1 1 0 01-1 1H4a1 1 0 01-1-1z"/>'};return(s,o)=>(l(),p("div",ia,[(l(!0),p(v,null,C(e(y),(a,c)=>(l(),p("span",{key:c,class:"confetti",style:H(a.style)},i(a.c),5))),128)),o[20]||(o[20]=K('<div class="gsuc-head"><h1>تم إرسال هديتك بنجاح</h1><span class="ic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6L9 17l-5-5"></path></svg></span></div><p class="sub">لقد أسعدت قلبًا اليوم 🤍 شكرًا لاختيارك عناية سامي</p>',2)),n("div",ra,[n("div",sa,[b(tn,{design:e(u).design},null,8,["design"]),n("div",la,[o[5]||(o[5]=n("span",{class:"q q1"},'"',-1)),o[6]||(o[6]=n("span",{class:"q q2"},'"',-1)),n("p",null,i(e(u).msg),1)])]),n("div",da,[o[14]||(o[14]=n("h4",null,"تفاصيل الإرسال",-1)),n("div",pa,[n("span",ga,[b(f,{inner:m.user,size:14},null,8,["inner"]),o[7]||(o[7]=g(" المهدى إليه",-1))]),n("span",ca,i(e(u).name),1)]),n("div",xa,[n("span",ba,[b(f,{inner:m.send,size:14},null,8,["inner"]),o[8]||(o[8]=g(" طريقة الإرسال",-1))]),n("span",fa,i(_.value),1)]),n("div",ha,[n("span",ua,[b(f,{inner:m.phone,size:14},null,8,["inner"]),o[9]||(o[9]=g(" رقم الجوال",-1))]),n("span",va,i(e(u).phone),1)]),n("div",ma,[n("span",ka,[b(f,{inner:m.clock,size:14},null,8,["inner"]),o[10]||(o[10]=g(" وقت الإرسال",-1))]),n("span",ya,[n("span",wa,"✓ "+i(e(u).when==="now"?"تم الإرسال الآن":"مجدولة"),1)])]),n("div",za,[n("span",_a,[b(f,{inner:m.cal,size:14},null,8,["inner"]),o[11]||(o[11]=g(" تاريخ الإرسال",-1))]),n("span",{class:"v"},i(d))]),n("div",$a,[n("span",Ma,[b(f,{inner:m.card,size:14},null,8,["inner"]),o[12]||(o[12]=g(" رقم العملية",-1))]),n("span",Fa,i(e(u).ref),1)]),n("div",{style:Ba},[n("span",{style:Ea},[b(f,{inner:m.check,size:13},null,8,["inner"])]),o[13]||(o[13]=g(" تم إرسال الهدية بنجاح إلى المستلم — ستظهر الهدية في رسالة خاصة من عناية سامي ",-1))])])]),n("div",Ca,[n("button",{class:"btn btn-gold",id:"openRecipient",onClick:o[0]||(o[0]=a=>h("recipient"))},[b(f,{inner:m.box,size:15},null,8,["inner"]),o[15]||(o[15]=g(" فتح صفحة المستلم",-1))]),n("button",{class:"btn btn-dark",id:"newGift",onClick:o[1]||(o[1]=a=>h("new-gift"))},[b(f,{inner:m.gift,size:15},null,8,["inner"]),o[16]||(o[16]=g(" إهداء جديد",-1))]),n("button",{class:"btn btn-line",id:"copySelf",onClick:o[2]||(o[2]=a=>h("copy-self"))},[b(f,{inner:m.mail,size:15},null,8,["inner"]),o[17]||(o[17]=g(" إرسال نسخة لنفسي",-1))]),n("button",{class:"btn btn-line",id:"shareGift",onClick:o[3]||(o[3]=a=>h("share"))},[b(f,{inner:m.share,size:15},null,8,["inner"]),o[18]||(o[18]=g(" مشاركة الهدية",-1))]),n("button",{class:"btn btn-line",id:"backHome",onClick:o[4]||(o[4]=a=>h("home"))},[b(f,{inner:m.home,size:15},null,8,["inner"]),o[19]||(o[19]=g(" العودة للرئيسية",-1))])]),o[21]||(o[21]=n("div",{class:"thanks"},[n("i",null,"❦"),g(" شكرًا لاختيارك عناية سامي لتقديم تجربة مميزة لمن تحب "),n("i",null,"❦")],-1))]))}},Aa={key:0,class:"gsum"},Da={class:"card"},Ia={class:"why-gift"},Ha={class:"wi"},La={class:"card help-card"},Pa={class:"hi"},ja={key:1,class:"gsum"},Va={class:"card"},Ta={key:0,class:"pkline"},Ya=["src"],Na={class:"pr"},Ga={class:"gs-row"},Oa={class:"v"},qa={class:"gs-row"},Ra={class:"v",dir:"ltr"},Ka={class:"gs-row"},Wa={class:"v"},Ua={class:"gs-row"},Xa={class:"v"},Ja={class:"gs-row"},Qa={class:"v"},Za={class:"gs-row"},ni={class:"v"},ti={class:"chip"},ei={key:3,class:"gs-total"},oi={class:"v"},ai={class:"gs-note"},ii={key:0,class:"card help-card"},ri={class:"hi"},si="text-align:center;padding:20px;border:1.5px dashed var(--line);border-radius:13px;color:var(--mute);font-size:12.5px;margin-bottom:12px",li="display:block;font-family:var(--font-d);color:var(--ink);margin-bottom:4px",di={__name:"GiftSummary",setup(w){const{state:r,pkgOf:u}=E(),h=k(()=>r.gpkg?u(r.gpkg):null),x=k(()=>en.find(m=>m.id===r.design)),t=k(()=>r.gstep===0||!h.value&&r.gstep<2),d=k(()=>{const m=U.find(s=>s.id===r.method);return m?m.n:""}),y={head:'<path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>',lock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>'},_=[["هدية رقمية فورية","تصلك أو تصل للمستلم فور إتمام الدفع",'<path d="M13 2L3 14h9l-1 8 10-12h-9z"/>'],["صالحة لمدة 6 أشهر","من تاريخ الشراء",'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>'],["المستلم يختار موعده","يختار الوقت والفرع المناسب له",'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>'],["آمنة وموثوقة","نضمن لك تجربة إهداء مميزة",'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>']];return(m,s)=>t.value?(l(),p("div",Aa,[n("div",Da,[s[0]||(s[0]=n("h3",null,"لماذا الإهداء من سامي؟",-1)),n("div",Ia,[(l(),p(v,null,C(_,(o,a)=>n("div",{key:a,class:"wg"},[n("span",Ha,[b(f,{inner:o[2],size:17},null,8,["inner"])]),n("span",null,[n("b",null,i(o[0]),1),n("small",null,i(o[1]),1)])])),64))])]),n("div",La,[n("span",Pa,[b(f,{inner:y.head,size:18},null,8,["inner"])]),s[1]||(s[1]=n("b",null,"تحتاج مساعدة؟",-1)),s[2]||(s[2]=n("small",null,"فريقنا جاهز لمساعدتك",-1)),s[3]||(s[3]=n("a",{href:"https://wa.me/963959415545"},"تواصل معنا",-1))])])):(l(),p("div",ja,[n("div",Va,[s[14]||(s[14]=n("h3",null,"ملخص الإهداء",-1)),h.value?(l(),p("div",Ta,[n("img",{src:h.value.img,alt:""},null,8,Ya),n("span",null,[n("b",null,i(h.value.name),1),n("small",null,"🕐 "+i(h.value.dur)+" دقيقة",1),n("small",null,i(h.value.desc),1),n("span",Na,i(e(D)(h.value.price))+" ر.س",1)])])):(l(),p("div",{key:1,style:si},[n("b",{style:li},"لم يتم اختيار باقة بعد"),s[4]||(s[4]=g("اختر الباقة المناسبة لإهدائها لمن تحب",-1))])),e(r).gstep>=2?(l(),p(v,{key:2},[n("div",Ga,[s[5]||(s[5]=n("span",{class:"k"},"👤 المهدى إليه",-1)),n("span",Oa,i(e(r).name||"—"),1)]),n("div",qa,[s[6]||(s[6]=n("span",{class:"k"},"📱 رقم الجوال",-1)),n("span",Ra,i(e(r).phone||"—"),1)]),n("div",Ka,[s[7]||(s[7]=n("span",{class:"k"},"🎨 تصميم البطاقة",-1)),n("span",Wa,i(x.value.n),1)]),n("div",Ua,[s[8]||(s[8]=n("span",{class:"k"},"💬 الرسالة",-1)),n("span",Xa,i(e(r).msg?"تمت إضافة رسالة مخصصة":"—"),1)]),n("div",Ja,[s[9]||(s[9]=n("span",{class:"k"},"📤 طريقة الإرسال",-1)),n("span",Qa,i(d.value),1)]),n("div",Za,[s[10]||(s[10]=n("span",{class:"k"},"🕐 وقت الإرسال",-1)),n("span",ni,[n("span",ti,i(e(r).when==="now"?"فوري":"مجدول"),1)])])],64)):I("",!0),h.value?(l(),p("div",ei,[s[12]||(s[12]=n("span",{class:"k"},"الإجمالي",-1)),n("span",oi,[g(i(e(D)(h.value.price))+" ",1),s[11]||(s[11]=n("small",{style:{"font-size":"13px"}},"ر.س",-1))])])):I("",!0),n("div",ai,[b(f,{inner:y.lock,size:14},null,8,["inner"]),s[13]||(s[13]=g(" بإتمامك معلومات الهدية مشفرة وآمنة 100%",-1))])]),e(r).gstep===1?(l(),p("div",ii,[n("span",ri,[b(f,{inner:y.head,size:18},null,8,["inner"])]),s[15]||(s[15]=n("b",null,"تحتاج مساعدة؟",-1)),s[16]||(s[16]=n("small",null,"فريقنا جاهز لمساعدتك في اختيار الهدية المثالية",-1)),s[17]||(s[17]=n("a",{href:"https://wa.me/963959415545"},"تواصل معنا",-1))])):I("",!0)]))}},pi={class:"shell"},gi={class:"wrap",id:"pkgApp"},ci={key:0,class:"view on"},xi={key:1,class:"g-stage"},bi={class:"view on"},fi={id:"gsumWrap"},hi={key:0,class:"view on"},ui={key:1,class:"g-stage"},vi={class:"view on"},mi={id:"gsumWrap"},ki={class:"wrap in"},yi={class:"fb-mid",id:"fbMid"},wi=["disabled"],zi='<path d="M19 12H5M11 18l-6-6 6-6"/>',Fi={__name:"PackagesGiftsView",setup(w){const r=q(null),{current:u,openPicker:h,requireLocation:x}=yn(),{state:t,pkgOf:d,gCanNext:y,gNextLabel:_,bkCanNext:m,bkNextLabel:s,startGift:o,startBook:a,backToPackages:c}=E();zn(Dn,"packages-gifts"),_n(r);const z=q(!1),B=q(""),P=q(!1);function T(S){B.value=S,P.value=!0,clearTimeout(T._h),T._h=setTimeout(()=>{P.value=!1},2600)}const j=k(()=>t.page==="book"),ln=k(()=>j.value?!(t.bk.done||t.bk.step>=2):t.page==="gift"&&!t.done&&t.gstep!==4),dn=k(()=>j.value?!0:t.gstep!==0),X=k(()=>{const S=j.value?t.bk.pkg:t.gpkg;return S?d(S):null}),J=k(()=>j.value?m.value:y.value),pn=k(()=>j.value?s.value:_.value);function gn(){if(j.value){if(t.bk.step===0){c();return}t.bk.step--}else{if(t.gstep===0){c();return}t.gstep--}scrollTo({top:0,behavior:"smooth"})}function cn(){if(J.value){if(j.value)t.bk.step++;else{if(t.gstep===3){xn();return}t.gstep++}scrollTo({top:0,behavior:"smooth"})}}function xn(){z.value=!0,setTimeout(()=>{z.value=!1,t.done=!0,t.gstep=4,t.ref="#GIFT-2026-"+String(Math.floor(1e4+Math.random()*89999)),scrollTo({top:0,behavior:"smooth"})},2100)}function bn(){z.value=!0,setTimeout(()=>{z.value=!1,t.bk.done=!0,t.bk.ref="#BK-2026-"+String(Math.floor(1e4+Math.random()*89999)),scrollTo({top:0,behavior:"smooth"})},2100)}function W(){u.value&&(t.siteBranch=u.value.id)}function fn(S){x(()=>{W(),a(S)})}function hn(S){x(()=>{W(),o("pkg",S)})}function un(){x(()=>{W(),o(null,null)})}function vn(){t.done=!1,t.gstep=0,t.gtype=null,t.gpkg=null,t.pay=null,t.ref=null,scrollTo({top:0,behavior:"smooth"})}function Q(){location.href="/"}return(S,F)=>(l(),p("div",{ref_key:"root",ref:r},[n("div",pi,[n("div",gi,[e(t).page==="packages"?(l(),A(tt,{key:0,onBook:fn,onGift:hn,onGiftNow:un,onPickBranch:e(h)},null,8,["onPickBranch"])):e(t).page==="book"?(l(),p(v,{key:1},[b(st),e(t).bk.done?(l(),p("div",ci,[b(Ae,{onHome:Q,onCalendar:F[0]||(F[0]=O=>T("تمت إضافة الموعد إلى التقويم")),onShare:F[1]||(F[1]=O=>T("تم نسخ رابط الحجز للمشاركة"))})])):(l(),p("div",xi,[n("main",bi,[e(t).bk.step===0?(l(),A(zt,{key:0})):e(t).bk.step===1?(l(),A(Wt,{key:1})):(l(),A(ae,{key:2,onPay:bn}))]),n("aside",fi,[b(Ze)])]))],64)):(l(),p(v,{key:2},[b(io),e(t).done?(l(),p("div",hi,[b(Sa,{onRecipient:F[2]||(F[2]=O=>S.location.href="/gift-recipient?ref="+encodeURIComponent(e(t).ref||"")),onNewGift:vn,onCopySelf:F[3]||(F[3]=O=>T("تم إرسال نسخة من الهدية إلى بريدك")),onShare:F[4]||(F[4]=O=>T("تم نسخ رابط الهدية للمشاركة")),onHome:Q})])):(l(),p("div",ui,[n("main",vi,[e(t).gstep===0?(l(),A(fo,{key:0})):e(t).gstep===1?(l(),A(Fo,{key:1})):e(t).gstep===2?(l(),A(Xo,{key:2})):(l(),A(aa,{key:3}))]),n("aside",mi,[b(di)])]))],64))])]),F[9]||(F[9]=K('<footer><div class="wrap"><div class="f-grid"><div class="f-brand"><a class="logo" href="/"><span class="mark"><img src="'+wn+'" alt="عناية سامي" style="width:29px;height:29px;object-fit:contain;"></span><span class="name"><b>عناية سامي</b><span>SAMI CARE</span></span></a><p>مركز متخصص في العناية الرجالية المتكاملة بجدة، حيث تلتقي الفخامة بالاحترافية في كل تفصيلة.</p><div class="socials"><a href="https://x.com/samicare_sa" aria-label="X"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-6.8 7.8L23.3 22h-6.3l-4.9-6.4L6.5 22H3.4l7.3-8.3L1 2h6.5l4.4 5.8L18.9 2zm-1.1 18h1.7L7.1 3.9H5.3L17.8 20z"></path></svg></a><a href="https://www.instagram.com/samicare.sa/" aria-label="انستقرام"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1" fill="currentColor"></circle></svg></a><a href="https://www.facebook.com/samicare.sa" aria-label="فيسبوك"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg></a></div></div><div><h4>روابط مهمة</h4><ul class="f-links"><li><a href="/">الرئيسية</a></li><li><a href="/booking">حجز موعد</a></li><li><a href="/#services">خدماتنا</a></li><li><a href="/packages-gifts">الباقات</a></li><li><a href="/gifts">الهدايا</a></li></ul></div><div><h4>استكشف</h4><ul class="f-links"><li><a href="/store">المتجر</a></li><li><a href="/branches">فروعنا</a></li><li><a href="/contact">تواصل معنا</a></li><li></li><li><a href="https://sami-care.sa/TermsAndConditions">الشروط والأحكام</a></li></ul></div><div><h4>عناوين الفروع</h4><div class="f-branch"><b>قريش</b><small>جدة البوادي شارع قريش</small><a href="tel:+966550046462">+966 55 004 6462</a></div><div class="f-branch"><b>البغدادية</b><small>جدة البغدادية الغربية شارع حائل</small><a href="tel:+966569610958">+966 56 961 0958</a></div><div class="f-branch"><b>خدمات منزلية</b><small>حلاقة شعر ولحية وماسكات طبيعية</small></div></div></div><div class="f-bottom"><small>© 2026 عناية سامي — جميع الحقوق محفوظة</small><div class="pay" aria-label="بوابات الدفع"><span title="Visa">VISA</span><span title="Mastercard">Mastercard</span><span title="مدى">mada</span><span title="Tabby">tabby</span><span title="Apple Pay">Pay</span></div></div></div></footer>',1)),n("div",{class:M(["footbar",{on:ln.value}]),id:"footbar"},[n("div",ki,[n("button",{class:"btn btn-back",id:"btnBack",style:H({visibility:dn.value?"visible":"hidden"}),onClick:gn},[...F[5]||(F[5]=[n("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[n("path",{d:"M5 12h14M13 6l6 6-6 6"})],-1),g(" السابق ",-1)])],4),n("div",yi,[X.value?(l(),p(v,{key:0},[F[6]||(F[6]=g("الإجمالي ",-1)),n("b",null,i(e(D)(X.value.price))+" ر.س",1),F[7]||(F[7]=g(" — 🔒 بياناتك محمية وآمنة",-1))],64)):(l(),p(v,{key:1},[g("🔒 بياناتك محمية وآمنة")],64))]),n("button",{class:"btn btn-gold",id:"btnNext",disabled:!J.value,onClick:cn},[g(i(pn.value)+" ",1),b(f,{inner:zi,size:15})],8,wi)])],2),n("div",{class:M(["pay-loading",{on:z.value}]),id:"payLoading"},[...F[8]||(F[8]=[n("div",{class:"pl-box"},[n("div",{class:"pl-ring"}),n("b",null,"جارٍ إتمام الإهداء بأمان…"),n("small",null,"سيتم إرسال الهدية مباشرة بعد إتمام الدفع")],-1)])],2),n("div",{class:M(["toast",{on:P.value}]),id:"toast"},i(B.value),3)],512))}};export{Fi as default};
