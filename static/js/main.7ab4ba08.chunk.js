(this["webpackJsonpsim-dogs"]=this["webpackJsonpsim-dogs"]||[]).push([[0],{66:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(9),s=n.n(i),r=(n(66),n(29)),j=n(124),o=n(128),l=n(125),d=n(126),b=n(123),g=n(129),h=n(122),u=n(119),O=n(121),x=n(6);var m=function(e){var t=e.images;return Object(x.jsx)(o.a,{m:1,p:1,children:t.length?Object(x.jsx)(u.a,{cellHeight:160,cols:4,children:t.map((function(e,t){return Object(x.jsx)(O.a,{children:Object(x.jsx)("img",{src:e,alt:"dog-".concat(t)})},t)}))}):Object(x.jsx)(u.a,{cellHeight:160,cols:4,children:Array(8).fill(null).map((function(e,t){return Object(x.jsx)(O.a,{children:Object(x.jsx)(h.a,{animation:"wave",variant:"rect",height:160})},t)}))})})},f=n(37),p=n.n(f),v={getDogs:function(){return p.a.get("https://dog.ceo/api/breeds/list/all")},getImages:function(e){return p.a.get("https://dog.ceo/api/breed/".concat(e,"/images/random/8"))}};var w=function(e){var t=e.dogs,n=function(e){var t=e.currentTarget.innerText.toLowerCase();v.getImages(t).then((function(e){var t=e.data.message;console.log(t),j(t)}))},a=Object(c.useState)([]),i=Object(r.a)(a,2),s=i[0],j=i[1];return Object(x.jsxs)(x.Fragment,{children:[t.length?Object(x.jsx)(b.a,{container:!0,spacing:3,children:t.map((function(e,t){return Object(x.jsx)(b.a,{item:!0,xs:3,children:Object(x.jsx)(g.a,{variant:"contained",fullWidth:!0,onClick:n,children:e})},t)}))}):Object(x.jsx)(b.a,{container:!0,spacing:3,children:Array(12).fill(null).map((function(e,t){return Object(x.jsx)(b.a,{item:!0,xs:3,children:Object(x.jsx)(h.a,{animation:"wave",variant:"text",width:"100%",height:40})},t)}))}),Object(x.jsx)(m,{images:s})]})};var y=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=(t[0],t[1]),a=Object(c.useState)([]),i=Object(r.a)(a,2),s=i[0],b=i[1];return Object(c.useEffect)((function(){v.getDogs().then((function(e){var t=Object.keys(e.data.message);n(t),b(t)}))}),[]),Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)(j.a,{children:[Object(x.jsxs)(o.a,{display:"flex",justifyContent:"space-between",p:1,m:1,children:[Object(x.jsx)(o.a,{p:1,children:Object(x.jsx)(l.a,{variant:"h1",children:"Dogs!"})}),Object(x.jsx)(o.a,{p:1,m:1,children:Object(x.jsx)(d.a,{id:"search-breeds",label:"Search"})})]}),Object(x.jsx)(w,{dogs:s.slice(0,12)})]})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,132)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(y,{})}),document.getElementById("root")),C()}},[[91,1,2]]]);
//# sourceMappingURL=main.7ab4ba08.chunk.js.map