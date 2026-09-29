// Para logos reais: coloque a imagem (data URI) em L[indice], ex.: L[0]="data:image/png;base64,..."
const L={};
const M=[["Vale","Verde","#0e8f45","#fff","0,6 km","10 min",1],["Mercado","Central","#f2b100","#3a2a00","1,1 km","15 min",1.03],["Atacado","Popular","#e5432d","#fff","2,3 km","22 min",.95],["Horti","Leo","#7cb518","#fff","0,9 km","12 min",1.06],["Super","Mais","#1d4ed8","#fff","3,4 km","30 min",.98]];
const P=[["7891000100103","Leite Integral 1L","Caixa",5.49,4.79,"carton","#2a6fdb"],["7891000315507","Leite Condensado 395g","Lata",6.99,5.59,"can","#e8a317"],["7891000053508","Molho de Tomate 340g","Sachê",2.29,1.95,"bag","#d63a2f"],["7891000244807","Arroz Branco 5kg","Pacote",28.9,0,"bag","#2f8f4e"],["7891000121009","Feijão Carioca 1kg","Pacote",8.49,7.49,"bag","#9a4a1c"],["7891000317006","Café Torrado 500g","Pacote",18.9,0,"bag","#4a2c1a"],["7891000058800","Açúcar Refinado 1kg","Pacote",4.79,0,"bag","#3b82c4"],["7891000067000","Óleo de Soja 900ml","Garrafa",7.29,6.49,"bottle","#e0a800"],["7891000110003","Macarrão Espaguete 500g","Pacote",4.19,0,"box","#d8452e"],["7891000201005","Biscoito Recheado 130g","Pacote",2.99,2.49,"box","#7b3fa0"],["7891000305003","Suco de Maçã 1L","Caixa",6.49,5.29,"carton","#e0562b"],["7891000400001","Sabão em Pó 1kg","Caixa",14.9,0,"box","#1b7fc4"],["7891000500008","Papel Higiênico 12un","Fardo",16.9,13.9,"bag","#5aa9e0"],["7891000600005","Pão de Forma 500g","Pacote",7.99,0,"bag","#c98a3d"],["7891000700002","Refrigerante Cola 2L","Garrafa",8.99,7.49,"bottle","#c8102e"],["7891000800009","Queijo Mussarela 200g","Bandeja",12.5,0,"box","#e6b800"]];
const IC={home:"M3 11l9-8 9 8v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z",tag:"M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8zM7.5 7.5h.01",scan:"M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3M8 9v6M12 9v6M16 9v6",list:"M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01",user:"M20 21v-1a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v1M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",cart:"M3 4h2l2.4 11h10.2l2-8H6M9 20h.01M17 20h.01",search:"M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.3-4.3",back:"M15 18l-6-6 6-6",pin:"M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11zM12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"};
const ic=n=>`<svg class="i" viewBox="0 0 24 24"><path d="${IC[n]}"/></svg>`;
function pack(t,c){const b={carton:`<path d="M18 24L40 8l22 16v68H18z" fill="${c}"/><path d="M18 24h44" stroke="#fff" stroke-opacity=".4" stroke-width="3"/>`,can:`<rect x="18" y="12" width="44" height="80" rx="9" fill="${c}"/><rect x="18" y="12" width="44" height="9" rx="4" fill="#fff" fill-opacity=".45"/>`,bag:`<path d="M15 12h50l4 82H11z" fill="${c}"/><path d="M15 12h50v7H15z" fill="#000" fill-opacity=".18"/>`,bottle:`<rect x="31" y="4" width="18" height="14" rx="3" fill="#fff" fill-opacity=".7"/><path d="M32 18h16c0 12 15 16 15 34v40a4 4 0 0 1-4 4H21a4 4 0 0 1-4-4V52c0-18 15-22 15-34z" fill="${c}"/>`,box:`<rect x="13" y="14" width="54" height="80" rx="6" fill="${c}"/>`}[t];
 return `<svg viewBox="0 0 80 100">${b}<rect x="${t=="carton"?18:t=="can"?18:t=="bag"?13:t=="bottle"?17:13}" y="46" width="${t=="carton"?44:t=="can"?44:t=="bag"?54:t=="bottle"?46:54}" height="28" fill="#fff" fill-opacity=".92"/><circle cx="40" cy="60" r="8" fill="${c}"/><path d="M36 60h8" stroke="#fff" stroke-width="2"/></svg>`}
const $=s=>document.querySelector(s),R=n=>"R$ "+n.toFixed(2).replace(".",",");
let S={view:"home",mk:null,cart:{},list:[],cur:null,name:"Cliente Exemplo",dark:false,q:""};
try{const x=JSON.parse(localStorage.getItem("pf2")||"null");if(x)S={...S,...x,view:"home",cur:null,q:""}}catch(e){}
const save=()=>{try{localStorage.setItem("pf2",JSON.stringify({mk:S.mk,cart:S.cart,list:S.list,name:S.name,dark:S.dark}))}catch(e){}};
const mult=()=>S.mk!=null?M[S.mk][6]:1;
function find(code){const p=P.find(x=>x[0]==code);if(p)return{c:code,n:p[1],s:p[2],p:p[3]*mult(),o:p[4]?p[4]*mult():0,t:p[5],k:p[6]};
 let h=0;for(const ch of code)h=(h*31+ch.charCodeAt(0))>>>0;return{c:code,n:"Produto "+code.slice(-4),s:"Item não cadastrado",p:2+(h%3000)/100*mult(),o:0,t:"box",k:`hsl(${h%360} 55% 45%)`}}
const promos=()=>P.filter(x=>x[4]).map(x=>find(x[0]));
const total=()=>Object.values(S.cart).reduce((a,i)=>a+(i.o||i.p)*i.q,0),count=()=>Object.values(S.cart).reduce((a,i)=>a+i.q,0);
const price=i=>`<span class="pr">${R(i.o||i.p)}</span>${i.o?`<span class="old">${R(i.p)}</span>`:""}`;
const art=i=>`<div class="art">${pack(i.t,i.k)}</div>`;
const logo=(m,i,s)=>`<div class="logo" style="background:${m[2]};color:${m[3]};${s?`width:${s}px;height:${s}px`:""}">${L[i]?`<img src="${L[i]}">`:`<div><span>${m[0]}</span><strong>${m[1]}</strong></div>`}</div>`;
function add(c){const i=S.cart[c]||{...find(c),q:0};i.q++;S.cart[c]=i;save()}
function go(v){stopCam();S.view=v;S.cur=null;render()}
const tabs=[["home","home","Início"],["promo","tag","Ofertas"],["scan","scan","Escanear"],["list","list","Lista"],["me","user","Perfil"]];
function render(){document.documentElement.dataset.theme=S.dark?"dark":"light";
 $("#nav").innerHTML=tabs.map(t=>`<button class="${t[0]=="scan"?"mid ":""}${S.view==t[0]?"on":""}" onclick="go('${t[0]}')"><i style="display:contents">${t[0]=="scan"?`<i>${ic(t[1])}</i>`:ic(t[1])}</i>${t[2]}</button>`).join("");
 $("#v").innerHTML=({home,promo,scan,list,me,cart,done})[S.view]();if(S.view=="scan")startCam()}
function mcard(i){const m=M[i];return `<div class="ck">${logo(m,i)}<b>${m[0]} ${m[1]}</b><div class="mu">${m[4]} · ${m[5]}</div><button class="btn o sm w" onclick="start(${i})">${S.mk===i?"Continuar":"Iniciar compras"}</button></div>`}
function home(){const q=S.q.toLowerCase(),f=M.map((m,i)=>i).filter(i=>(M[i][0]+" "+M[i][1]).toLowerCase().includes(q));
 return `<div class="hero"><div class="row" style="gap:6px;font-size:13px;font-weight:600">${ic("pin")} Mercados perto de você</div><h1 style="margin-top:10px">Tudo pronto para fazer suas compras?</h1></div>
<div class="search">${ic("search")}<input placeholder="Buscar supermercado" value="${S.q}" oninput="S.q=this.value;const p=this.selectionStart;render();const e=$('.search input');e.focus();e.setSelectionRange(p,p)"></div>
<div class="sec"><h2>Check-in rápido</h2></div><div class="car">${f.slice(0,4).map(mcard).join("")||'<p class="mu">Nenhum resultado</p>'}</div>
<div class="ban"><div style="flex:1"><h2 style="font-size:16px">Sem preço na prateleira?</h2><p>Escaneie o código de barras e veja o valor na hora.</p></div><button class="btn sm" onclick="${S.mk!=null?"go('scan')":"window.scrollTo(0,0)"}">Escanear</button></div>
<div class="mint"><div class="sec"><h2>Supermercados</h2><span class="mu">${f.length} na região</span></div><div class="grid">${f.map(i=>`<div class="tile ${S.mk===i?"on":""}" onclick="start(${i})">${logo(M[i],i,84)}<b>${M[i][0]} ${M[i][1]}</b><div class="mu">${M[i][5]} · ${M[i][4]}</div></div>`).join("")}</div></div>`}
function start(i){if(S.mk!==i)S.cart={};S.mk=i;save();go("scan")}
function pgrid(a){return `<div class="grid">${a.map(i=>`<div class="pcard">${i.o?`<span class="off">-${Math.round((1-i.o/i.p)*100)}%</span>`:""}${art(i)}<button class="add" onclick="add('${i.c}');render()">+</button><div class="nm">${i.n}</div>${price(i)}</div>`).join("")}</div>`}
function promo(){return `<div class="top"><div><h1>Ofertas</h1><div class="mu">${S.mk!=null?M[S.mk][0]+" "+M[S.mk][1]:"Da região"}</div></div>${S.mk!=null?pill():""}</div>${pgrid(promos())}`}
const pill=()=>`<button class="pill" onclick="go('cart')">${ic("cart")}${R(total())}</button>`;
function scan(){
 if(S.mk==null)return `<div class="pad" style="text-align:center;padding-top:90px"><div class="logo" style="background:var(--gl);color:var(--g)">${ic("pin")}</div><h1 style="margin:18px 0 8px">Escolha um mercado</h1><p class="mu" style="margin-bottom:18px">Inicie as compras para usar o scanner.</p><button class="btn" onclick="go('home')">Ver mercados</button></div>`;
 const c=S.cur;return `<div class="top"><div class="row">${logo(M[S.mk],S.mk,40).replace("border-radius:20px","")}<div><b style="font-size:15px">${M[S.mk][0]} ${M[S.mk][1]}</b><div class="mu">Compras em andamento</div></div></div>${pill()}</div>
<div class="cam"><video id="vid" playsinline muted></video><div class="fr"></div><p id="msg">Aponte para o código de barras</p></div>
<div class="chips">${P.slice(0,9).map(p=>`<button onclick="lookup('${p[0]}')">${p[1]}</button>`).join("")}</div>
<div class="row pad" style="margin-top:12px"><input class="in" id="code" inputmode="numeric" placeholder="Ou digite o código"><button class="btn" onclick="lookup($('#code').value.trim())">OK</button></div>`+
 (c?`<div class="sheet"><div class="row">${art(c)}<div style="flex:1"><b>${c.n}</b><div class="mu" style="margin:2px 0 6px">${c.s} · ${c.c}</div><div style="font-size:20px">${price(c)}</div></div></div>
 <div class="row" style="margin-top:18px"><button class="btn r" style="flex:1" onclick="S.cur=null;render()">Deixar</button><button class="btn" style="flex:2" onclick="add('${c.c}');S.cur=null;render()">Adicionar ao carrinho</button></div></div>`:"")}
let stream=null,zx=null,last=0,raf=0;
function lookup(c){if(!c)return;S.cur=find(c);render()}
function found(c){const t=Date.now();if(t-last<2500||S.cur)return;last=t;navigator.vibrate&&navigator.vibrate(60);lookup(c)}
async function startCam(){const v=$("#vid"),msg=$("#msg");if(!v)return;
 try{if("BarcodeDetector" in window){const d=new BarcodeDetector({formats:["ean_13","ean_8","upc_a","upc_e","code_128"]});
   stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});v.srcObject=stream;await v.play();
   const loop=async()=>{if(!stream)return;try{const r=await d.detect(v);if(r[0])found(r[0].rawValue)}catch(e){}raf=requestAnimationFrame(()=>setTimeout(loop,150))};loop()}
  else{if(!window.ZXing)await new Promise((ok,no)=>{const s=document.createElement("script");s.src="https://cdn.jsdelivr.net/npm/@zxing/library@0.21.3/umd/index.min.js";s.onload=ok;s.onerror=no;document.head.appendChild(s)});
   zx=new ZXing.BrowserMultiFormatReader();await zx.decodeFromConstraints({video:{facingMode:"environment"}},v,r=>{if(r)found(r.getText())})}
 }catch(e){if(msg)msg.textContent="Câmera indisponível. Permita o acesso ou abra em uma nova aba."}}
function stopCam(){cancelAnimationFrame(raf);if(stream){stream.getTracks().forEach(t=>t.stop());stream=null}if(zx){try{zx.reset()}catch(e){}zx=null}}
function cart(){const it=Object.values(S.cart);
 return `<div class="top"><div class="row"><button class="btn r sm" onclick="go('scan')" style="padding:8px">${ic("back")}</button><h1>Carrinho</h1></div></div>`+(it.length?it.map(i=>`<div class="line row">${art(i)}<div style="flex:1"><b style="font-size:14px">${i.n}</b><div>${price(i)}</div></div><div class="q"><button onclick="qty('${i.c}',-1)">−</button><b>${i.q}</b><button onclick="qty('${i.c}',1)">+</button></div></div>`).join("")+
 `<div class="bot"><div class="row sp" style="margin-bottom:12px"><span class="mu">Total · ${count()} itens</span><span class="pr" style="font-size:24px">${R(total())}</span></div><button class="btn w" onclick="go('done')">Finalizar compra</button></div>`:`<div class="pad" style="text-align:center;padding-top:70px"><p class="mu" style="margin-bottom:16px">Seu carrinho está vazio.</p><button class="btn" onclick="go('scan')">Escanear itens</button></div>`)}
function qty(c,d){S.cart[c].q+=d;if(S.cart[c].q<=0)delete S.cart[c];save();render()}
function done(){let h=7,cells="";for(let i=0;i<225;i++){h=(h*1103515245+12345+count())>>>0;cells+=`<i class="${h>>>16&1?"":"w"}"></i>`}
 return `<div class="card" style="text-align:center;margin-top:40px;padding:26px 18px"><h1>Compra finalizada</h1><p class="mu" style="margin-top:6px">Apresente este código no caixa (simulação)</p><div class="qr">${cells}</div><div class="pr" style="font-size:28px">${R(total())}</div><p class="mu" style="margin:6px 0 18px">${count()} itens</p><button class="btn w" onclick="S.cart={};save();go('home')">Concluir</button></div>`}
function list(){return `<div class="top"><div><h1>Lista de compras</h1><div class="mu">Anote o que precisa comprar</div></div></div><div class="row pad" style="margin-bottom:14px"><input class="in" id="li" placeholder="Ex.: arroz, leite..." onkeydown="if(event.key=='Enter')addL()"><button class="btn" onclick="addL()">+</button></div>
 ${S.list.length?S.list.map((x,i)=>`<div class="card row" style="padding:12px 14px;margin-bottom:8px"><input type="checkbox" class="chk" ${x.d?"checked":""} onchange="S.list[${i}].d=this.checked;save();render()"><span style="flex:1;font-weight:600" class="${x.d?"done":""}">${x.t}</span><button class="btn r sm" onclick="S.list.splice(${i},1);save();render()">✕</button></div>`).join(""):`<p class="mu pad">Sua lista está vazia.</p>`}`}
function addL(){const t=$("#li").value.trim();if(!t)return;S.list.push({t,d:false});save();render()}
function me(){return `<div class="hero" style="padding-bottom:30px"><div class="row"><div class="logo" style="width:64px;height:64px;background:#fff;color:var(--gd);border-radius:50%">${ic("user")}</div><div><h1 style="font-size:20px">${S.name}</h1><div class="mu">cliente@exemplo.com</div></div></div></div>
 <div class="row" style="margin:16px 18px"><div class="card" style="flex:1;text-align:center;margin:0"><b style="font-size:22px">${count()}</b><div class="mu">no carrinho</div></div><div class="card" style="flex:1;text-align:center;margin:0"><b style="font-size:22px">${S.list.filter(x=>!x.d).length}</b><div class="mu">na lista</div></div></div>
 <div class="card row sp"><span>Mercado atual</span><b>${S.mk!=null?M[S.mk][0]+" "+M[S.mk][1]:"—"}</b></div>
 <div class="card row sp"><span>Modo escuro</span><input type="checkbox" class="chk" ${S.dark?"checked":""} onchange="S.dark=this.checked;save();render()"></div>
 <div class="card"><label class="mu">Nome</label><input class="in" value="${S.name}" onchange="S.name=this.value;save();render()" style="margin-top:8px"></div>
 <p class="mu" style="text-align:center;margin-top:14px">Todos os dados são fictícios.</p>`}
render();
