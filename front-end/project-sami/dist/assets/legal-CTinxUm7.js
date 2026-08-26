const n=`:root{
  --ink:#0A0906; --coal:#14110C;
  --gold:#CE9234; --gold-bright:#E8BE6C; --gold-deep:#9C6B1F;
  --champagne:#F0E6CF; --ivory:#F8F4EB; --paper:#FBFAF6; --card:#FFFFFF;
  --smoke:#9A9080; --mute:#7d745f; --text:#2A2519;
  --line:rgba(143,113,52,.22); --line-dark:rgba(198,161,91,.22);
  --ease:cubic-bezier(.33,.9,.35,1); --dur:.26s;
  --font-d:'Lama Sans',serif; --font-b:'Lama Sans',sans-serif;
}
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:var(--font-b);background:var(--ink);color:var(--text);-webkit-font-smoothing:antialiased;overflow-x:hidden}
::selection{background:var(--gold);color:var(--ink)}
a{color:var(--gold-deep);text-decoration:underline}
button{font-family:inherit;cursor:pointer;border:none;background:none;color:inherit}
.wrap{width:min(880px,94%);margin-inline:auto}

.shell{background:var(--paper);border-radius:26px 26px 0 0;min-height:calc(100vh - 71px);padding-bottom:80px;position:relative}

.page-head{padding:60px 0 24px;text-align:center}
.page-head h1{font-family:var(--font-d);font-size:clamp(28px,4.5vw,42px);color:var(--ink);margin-bottom:10px}
.page-head p{color:var(--mute);font-size:14px}

.legal-content{padding:10px 0 40px;line-height:1.9;font-size:15px;color:var(--text)}
.legal-content section{margin-bottom:28px}
.legal-content h2{font-family:var(--font-d);font-size:20px;color:var(--ink);margin-bottom:10px;display:flex;align-items:center;gap:8px}
.legal-content h2 i{width:6px;height:6px;border-radius:50%;background:var(--gold);display:inline-block}
.legal-content p{margin-bottom:10px;color:var(--mute)}
.legal-content ul{padding-inline-start:22px;color:var(--mute)}
.legal-content li{margin-bottom:6px}
.legal-content .updated{font-size:12.5px;color:var(--smoke);margin-top:6px}

@media(max-width:640px){
  .page-head{padding:40px 0 15px}
  .legal-content{font-size:14px}
}
`;export{n as p};
