(this["webpackJsonpsim-dogs"]=this["webpackJsonpsim-dogs"]||[]).push([[0],{71:function(t,e,a){},96:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),s=a(9),r=a.n(s),i=(a(71),a(15)),o=a(129),u=a(132),l=a(122),g=a(124),d=a(125),j=a(4);var b=function(){return Object(j.jsx)(u.a,{m:1,p:1,children:Object(j.jsx)(l.a,{cellHeight:160,cols:4,children:Array(8).fill(null).map((function(t,e){return Object(j.jsx)(g.a,{children:Object(j.jsx)(d.a,{animation:"wave",variant:"rect",height:160})},e)}))})})};var f=function(t){var e=t.images;return Object(j.jsx)(u.a,{p:2,style:{backgroundColor:"#dedede"},children:Object(j.jsx)(l.a,{cellHeight:160,cols:4,children:e.map((function(t,e){return Object(j.jsx)(g.a,{children:Object(j.jsx)("img",{src:t,alt:"dog-".concat(e)})},e)}))})})};var h=function(t){var e=t.images,a=t.imagesStatus,c=t.setImagesStatus;switch(Object(n.useEffect)((function(){Promise.all(e.map((function(t){return e=t,new Promise((function(t,a){var n=new Image;n.src=e,n.onload=function(){return t(e)},n.onerror=function(t){return a(t)}}));var e}))).then((function(){e.length?c("loaded"):c("none")})).catch((function(t){return console.log("Failed to load images",t)}))}),[e,c]),a){case"loading":return Object(j.jsx)(b,{});case"loaded":return Object(j.jsx)(f,{images:e});default:return null}},v=a(133),O=a(126);var m=function(t){var e=t.dog,a=t.activeDog,n=t.setActiveDog,c=t.handleClick;return Object(j.jsx)(O.a,{fullWidth:!0,variant:"contained","aria-label":e,onClick:function(t){var e=t.currentTarget.getAttribute("aria-label");c(t),n(e)},style:e===a?{background:"linear-gradient(to right, #bb82fe, #554fff)",color:"white",textTransform:"lowercase"}:{textTransform:"lowercase"},children:e})};var x=function(t){var e=t.dogs,a=t.activeDog,n=t.setActiveDog,c=t.handleClick;return Object(j.jsx)(l.a,{cellHeight:50,cols:4,children:e.map((function(t,e){return Object(j.jsx)(g.a,{children:Object(j.jsx)(m,{dog:t,activeDog:a,setActiveDog:n,handleClick:c})},e)}))})};var S=function(){return Object(j.jsx)(l.a,{cellHeight:40,cols:4,children:Array(12).fill(null).map((function(t,e){return Object(j.jsx)(g.a,{children:Object(j.jsx)(d.a,{animation:"wave",variant:"text",width:"100%",height:40})},e)}))})};var D=function(t){var e=t.dogs,a=t.activeDog,n=t.buttonsStatus,c=t.setActiveDog,s=t.handleClick;switch(n){case"loaded":return Object(j.jsx)(x,{dogs:e,activeDog:a,handleClick:s,setActiveDog:c});case"none":return Object(j.jsx)(v.a,{severity:"warning",children:"No dogs found! Try another search..."});default:return Object(j.jsx)(S,{})}},p=a(39),C=a.n(p),w={getDogs:function(){return C.a.get("https://dog.ceo/api/breeds/list/all")},getImages:function(t){return C.a.get("https://dog.ceo/api/breed/".concat(t,"/images/random/8"))}};var A=function(t){var e=t.dogs,a=t.activeDog,c=t.buttonsStatus,s=t.imagesStatus,r=t.setActiveDog,o=t.setImagesStatus,u=Object(n.useState)([]),l=Object(i.a)(u,2),g=l[0],d=l[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(D,{dogs:e,activeDog:a,buttonsStatus:c,handleClick:function(t){o("loading");var e=t.currentTarget.getAttribute("aria-label");w.getImages(e).then((function(t){var e=t.data.message;d(e)}))},setActiveDog:r}),Object(j.jsx)(h,{images:g,imagesStatus:s,setImagesStatus:o})]})},y=a(128),k=a(130);var I=function(t){var e=t.allDogs,a=t.setButtonsStatus,n=t.setImagesStatus,c=t.setFilteredDogs,s=t.setActiveDog;return Object(j.jsxs)(u.a,{display:"flex",justifyContent:"space-between",p:1,m:1,children:[Object(j.jsx)(u.a,{p:1,children:Object(j.jsx)(y.a,{variant:"h3",style:{color:"#5f67fe"},children:"Dogs!"})}),Object(j.jsx)(u.a,{p:1,m:1,children:Object(j.jsx)(k.a,{id:"search-breeds",label:"Search",onChange:function(t){n("ready"),s("");var r=t.target.value.toLowerCase(),i=e.filter((function(t){return-1!==t.indexOf(r)}));i.length?a("loaded"):a("none"),c(i)}})})]})};var F=function(){var t=Object(n.useState)([]),e=Object(i.a)(t,2),a=e[0],c=e[1],s=Object(n.useState)([]),r=Object(i.a)(s,2),u=r[0],l=r[1],g=Object(n.useState)("ready"),d=Object(i.a)(g,2),b=d[0],f=d[1],h=Object(n.useState)(""),v=Object(i.a)(h,2),O=v[0],m=v[1],x=function(t){var e=t.apiCall,a=t.initialStatus,c=void 0===a?"ready":a,s=Object(n.useState)(),r=Object(i.a)(s,2),o=r[0],u=r[1],l=Object(n.useState)(c),g=Object(i.a)(l,2),d=g[0],j=g[1],b=Object(n.useState)(),f=Object(i.a)(b,2),h=f[0],v=f[1],O=Object(n.useCallback)(e,[e]);return Object(n.useEffect)((function(){j("loading"),O().then((function(t){v(t.data),j("loaded")})).catch((function(t){u(t)}))}),[O]),{error:o,status:d,data:h,setStatus:j}}({apiCall:w.getDogs,initialStatus:"loading"}),S=(x.error,x.status),D=x.data,p=x.setStatus;return Object(n.useEffect)((function(){if(null===D||void 0===D?void 0:D.message){var t=Object.keys(D.message);c(t),l(t)}}),[D]),Object(j.jsxs)(o.a,{children:[Object(j.jsx)(I,{allDogs:a,setButtonsStatus:p,setImagesStatus:f,setFilteredDogs:l,setActiveDog:m}),Object(j.jsx)(A,{dogs:u.slice(0,12),activeDog:O,buttonsStatus:S,imagesStatus:b,setActiveDog:m,setImagesStatus:f})]})};var T=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(F,{})})},B=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,136)).then((function(e){var a=e.getCLS,n=e.getFID,c=e.getFCP,s=e.getLCP,r=e.getTTFB;a(t),n(t),c(t),s(t),r(t)}))};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(T,{})}),document.getElementById("root")),B()}},[[96,1,2]]]);
//# sourceMappingURL=main.fe4eb802.chunk.js.map