(()=>{"use strict";var e={309:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(81),o=n.n(a),d=n(645),c=n.n(d),i=n(667),r=n.n(i),l=new URL(n(889),n.b),s=new URL(n(681),n.b),p=new URL(n(904),n.b),m=c()(o()),u=r()(l),h=r()(s),C=r()(p);m.push([e.id,"* {\n    margin: 0;\n    padding: 0%;\n\n}\n\n@font-face {\n    font-family: 'Logo';\n    src: url("+u+');\n}\n\n@font-face {\n    font-family: "Butterbean";\n    src: url('+h+");\n}\n\n\n#content {\n    display: flex;\n    flex-direction: column;\n}\n\n\n\n.nav {\n\n    background-color: #999999;\n    height: 40px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px;\n}\n\n.logo {\n    font-family: 'Logo';\n    color: white;\n    font-size: 56px;\n    letter-spacing: 2px;\n}\n\n.navOptions {\n    font-family: \"Butterbean\";\n    font-size: 25px;\n    display: flex;\n    gap: 25px;\n}\n\n\n.body {\n    min-height: 100vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #333333;\n}\n\n.active {\n    background-image: url("+C+");\n    background-size: cover;\n\n\n}\n\n.centerBox {\n    font-family: 'Butterbean';\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    color: white;\n\n\n}\n\n.motto {\n    font-family: 'Logo';\n    font-size: 65px;\n    color: #d10000\n}\n\n.text {\n    padding-top: 15px;\n    font-size: 15px;\n    color: #d10000;\n}\n\n.contactPage {\n    display: block;\n    color: black;\n}\n\n.menuPage {\n    padding-bottom: 50px;\n\n}\n\n.appetizerContainer {\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 30px;\n    padding-top: 50px;\n\n}\n\n.containerContent {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-gap: 30px;\n}\n\n.itemContainer {\n    border: 3px solid white;\n    color: white;\n    border-radius: 15px;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    padding-bottom: 10px;\n    align-items: center;\n}\n\n.containerName {\n    font-family: 'Logo';\n    color: white;\n    font-size: 50px;\n\n\n}\n\nh1 {\n    font-family: 'Logo';\n}\n\nh3 {\n    color: white;\n    font-family: 'Butterbean';\n}\n\nimg {\n    border-radius: 11px 11px 0px 0px;\n    aspect-ratio: 3/2;\n    height: 250px;\n    width: 300px;\n    border-bottom: 3px solid white;\n}\n\n.hr {\n    border: 2px solid white;\n}\n\nbutton {\n    display: inline-block;\n    padding: 0.35em 1.2em;\n    border: 0.1em solid white;\n    margin: 0 0.3em 0.3em 0;\n    border-radius: 5px;\n    box-sizing: border-box;\n    text-decoration: none;\n    color: #FFFFFF;\n    text-align: center;\n    transition: all 0.2s;\n    background-color: #999999;\n    font-family: 'Logo';\n}\n\n\nbutton:hover {\n    color: #000000;\n    background-color: #FFFFFF;\n}\n\n.contactPage {\n    text-align: center;\n    display: flex;\n    gap: 50px;\n    color: white;\n\n}\n\n.box {\n    display: flex;\n    flex-direction: column;\n    gap: 25px;\n    border: 2px solid white;\n    padding: 15px;\n    width: 400px;\n\n}\n\n.boxName {\n    font-size: 30px;\n    font-family: 'Logo';\n    letter-spacing: 2px;\n}\n\n.boxContent {\n    font-family: 'Butterbean';\n}",""]);const f=m},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,o,d){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(a)for(var i=0;i<this.length;i++){var r=this[i][0];null!=r&&(c[r]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);a&&c[s[0]]||(void 0!==d&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=d),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var d={},c=[],i=0;i<e.length;i++){var r=e[i],l=a.base?r[0]+a.base:r[0],s=d[l]||0,p="".concat(l," ").concat(s);d[l]=s+1;var m=n(p),u={css:r[1],media:r[2],sourceMap:r[3],supports:r[4],layer:r[5]};if(-1!==m)t[m].references++,t[m].updater(u);else{var h=o(u,a);a.byIndex=i,t.splice(i,0,{identifier:p,updater:h,references:1})}c.push(p)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var d=a(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<d.length;c++){var i=n(d[c]);t[i].references--}for(var r=a(e,o),l=0;l<d.length;l++){var s=n(d[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}d=r}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,o&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var d=n.sourceMap;d&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(d))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},681:(e,t,n)=>{e.exports=n.p+"75331e59a855f9079618.otf"},889:(e,t,n)=>{e.exports=n.p+"b9f7b7088edd2a8a088c.ttf"},904:(e,t,n)=>{e.exports=n.p+"f6fa136289a43dbe5fe4.jpg"}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var d=t[a]={id:a,exports:{}};return e[a](d,d.exports,n),d.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),a=n(795),o=n.n(a),d=n(569),c=n.n(d),i=n(565),r=n.n(i),l=n(216),s=n.n(l),p=n(589),m=n.n(p),u=n(309),h={};h.styleTagTransform=m(),h.setAttributes=r(),h.insert=c().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=s(),t()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals;const C=n.p+"5036c68676119dab035b.jpeg",f=n.p+"c208381de5b6fb03bfb3.jpg",x=n.p+"4591fbfdf4534f25e78b.jpg",E=n.p+"594d501cca8409b615ae.jpg",v=n.p+"a35225b31e26d299d215.jpg",g=n.p+"7cbac145a3f678106917.jpg",b=n.p+"3a6597eeff36836153b7.jpg",L=n.p+"3599495ce8671f9fe0ac.jpeg",y=n.p+"bf4570f9e4a6b6f45c7a.jpeg",w=n.p+"b912401cb6a255271458.jpg",A=n.p+"d03a1dc42fa28632a50b.jpg",S=n.p+"31a6e2d9fbf484225056.jpg",N=()=>{let e=document.querySelector(".body");e.classList.add("active");let t=document.createElement("div");t.classList.add("centerBox");let n=document.createElement("div");n.classList.add("motto"),n.textContent="Flavours of South Asia";let a=document.createElement("div");a.classList.add("text"),a.textContent="TRADITIONAL, RICH, AUTHENTIC SINCE 2022",e.appendChild(t),t.appendChild(n),t.appendChild(a)};!function(){!function(){let e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("nav");let n=document.createElement("div");n.classList.add("body"),e.appendChild(t),e.appendChild(n);let a=document.createElement("div");a.classList.add("navOptions");let o=document.createElement("button");o.classList.add("option1"),o.textContent="HOME";let d=document.createElement("button");d.classList.add("option2"),d.textContent="MENU";let c=document.createElement("button");c.classList.add("option3"),c.textContent="CONTACT";let i=document.createElement("div");i.classList.add("logo"),i.textContent="DESI-EATS",t.appendChild(i),t.appendChild(a),a.appendChild(o),a.appendChild(d),a.appendChild(c)}(),N();let e=document.querySelector(".option1"),t=document.querySelector(".option2"),n=document.querySelector(".option3");function a(){document.querySelector(".body").replaceChildren()}e.addEventListener("click",(()=>{a(),N()})),t.addEventListener("click",(()=>{a(),(()=>{let e=document.querySelector(".body");e.classList.remove("active");let t=document.createElement("div");t.classList.add("menuPage");let n=document.createElement("div");n.classList.add("appetizerContainer");let a=document.createElement("div");a.classList.add("containerName"),a.textContent="APPETIZER";let o=document.createElement("hr");o.setAttribute("width","500px"),o.classList.add("hr");let d=document.createElement("div");d.classList.add("containerContent");const c=document.createElement("div");c.classList.add("itemContainer");const i=document.createElement("img");i.src=C,c.appendChild(i);const r=document.createElement("h1");r.textContent="-SAMOSA-",c.appendChild(r);const l=document.createElement("h3");l.textContent="$5.00",c.appendChild(l),d.appendChild(c),document.createElement("div").classList.add("containerContent");const s=document.createElement("div");s.classList.add("itemContainer");const p=document.createElement("img");p.src=x,s.appendChild(p);const m=document.createElement("h1");m.textContent="-CHANA CHAAT-",s.appendChild(m);const u=document.createElement("h3");u.textContent="$5.00",s.appendChild(u),d.appendChild(s),document.createElement("div").classList.add("containerContent");const h=document.createElement("div");h.classList.add("itemContainer");const N=document.createElement("img");N.src=f,h.appendChild(N);const j=document.createElement("h1");j.textContent="-GOL GAPPA-",h.appendChild(j);const T=document.createElement("h3");T.textContent="$5.00",h.appendChild(T),d.appendChild(h),n.appendChild(a),n.appendChild(o),n.appendChild(d),t.appendChild(n);let F=document.createElement("div");F.classList.add("appetizerContainer");let I=document.createElement("div");I.classList.add("containerName"),I.textContent="ENTREE";let M=document.createElement("hr");M.setAttribute("width","500px"),M.classList.add("hr");let P=document.createElement("div");P.classList.add("containerContent");const $=document.createElement("div");$.classList.add("itemContainer");const k=document.createElement("img");k.src=v,$.appendChild(k);const R=document.createElement("h1");R.textContent="-BIRYANI-",$.appendChild(R);const z=document.createElement("h3");z.textContent="$15.00",$.appendChild(z),P.appendChild($),document.createElement("div").classList.add("containerContent");const H=document.createElement("div");H.classList.add("itemContainer");const O=document.createElement("img");O.src=E,H.appendChild(O);const B=document.createElement("h1");B.textContent="-PALAK-",H.appendChild(B);const U=document.createElement("h3");U.textContent="$10.00",H.appendChild(U),P.appendChild(H),document.createElement("div").classList.add("containerContent");const q=document.createElement("div");q.classList.add("itemContainer");const Z=document.createElement("img");Z.src=L,q.appendChild(Z);const D=document.createElement("h1");D.textContent="-QEEMA-",q.appendChild(D);const K=document.createElement("h3");K.textContent="$12.00",q.appendChild(K),P.appendChild(q),document.createElement("div").classList.add("containerContent");const _=document.createElement("div");_.classList.add("itemContainer");const G=document.createElement("img");G.src=b,_.appendChild(G);const J=document.createElement("h1");J.textContent="-LAMB CHOPS-",_.appendChild(J);const Q=document.createElement("h3");Q.textContent="$18.00",_.appendChild(Q),P.appendChild(_),document.createElement("div").classList.add("containerContent");const Y=document.createElement("div");Y.classList.add("itemContainer");const W=document.createElement("img");W.src=y,Y.appendChild(W);const V=document.createElement("h1");V.textContent="-CHICKEN-",Y.appendChild(V);const X=document.createElement("h3");X.textContent="$13.00",Y.appendChild(X),P.appendChild(Y),document.createElement("div").classList.add("containerContent");const ee=document.createElement("div");ee.classList.add("itemContainer");const te=document.createElement("img");te.src=g,ee.appendChild(te);const ne=document.createElement("h1");ne.textContent="-HALEEM-",ee.appendChild(ne);const ae=document.createElement("h3");ae.textContent="$12.00",ee.appendChild(ae),P.appendChild(ee),F.appendChild(I),F.appendChild(M),F.appendChild(P),t.appendChild(F);let oe=document.createElement("div");oe.classList.add("appetizerContainer");let de=document.createElement("div");de.classList.add("containerName"),de.textContent="DESSERT";let ce=document.createElement("hr");ce.setAttribute("width","500px"),ce.classList.add("hr");let ie=document.createElement("div");ie.classList.add("containerContent");const re=document.createElement("div");re.classList.add("itemContainer");const le=document.createElement("img");le.src=S,re.appendChild(le);const se=document.createElement("h1");se.textContent="-GULAB JAMUN-",re.appendChild(se);const pe=document.createElement("h3");pe.textContent="$2.00",re.appendChild(pe),ie.appendChild(re);const me=document.createElement("div");me.classList.add("itemContainer");const ue=document.createElement("img");ue.src=w,me.appendChild(ue);const he=document.createElement("h1");he.textContent="-KULFI-",me.appendChild(he);const Ce=document.createElement("h3");Ce.textContent="$5.00",me.appendChild(Ce),ie.appendChild(me);const fe=document.createElement("div");fe.classList.add("itemContainer");const xe=document.createElement("img");xe.src=A,fe.appendChild(xe);const Ee=document.createElement("h1");Ee.textContent="-KHEER-",fe.appendChild(Ee);const ve=document.createElement("h3");ve.textContent="$5.00",fe.appendChild(ve),ie.appendChild(fe),oe.appendChild(de),oe.appendChild(ce),oe.appendChild(ie),t.appendChild(oe),e.appendChild(t)})()})),n.addEventListener("click",(()=>{a(),(()=>{let e=document.querySelector(".body"),t=document.createElement("div");t.classList.add("contactPage"),e.classList.remove("active");let n=document.createElement("div");n.classList.add("box");let a=document.createElement("div");a.classList.add("boxName"),a.textContent="-Location-",n.appendChild(a);let o=document.createElement("div");o.classList.add("boxContent"),o.textContent="125 Wall Street, NYC",n.appendChild(o),t.appendChild(n);let d=document.createElement("div");d.classList.add("box");let c=document.createElement("div");c.classList.add("boxName"),c.textContent="-Hours-",d.appendChild(c);let i=document.createElement("div");i.classList.add("boxContent"),i.textContent="Mon - Fri | Sat | Sun | 12pm - 9pm",d.appendChild(i),t.appendChild(d);let r=document.createElement("div");r.classList.add("box");let l=document.createElement("div");l.classList.add("boxName"),l.textContent="-Contact-",r.appendChild(l);let s=document.createElement("div");s.classList.add("boxContent"),s.textContent="(726) - 888 - 0983",r.appendChild(s),t.appendChild(r),e.appendChild(t)})()}))}()})()})();