(this["webpackJsonpgif-expert"]=this["webpackJsonpgif-expert"]||[]).push([[0],{18:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(8),a=n.n(c),i=n(2),s=n(10),u=n(0),o=function(e){var t=e.setCategories,n=Object(r.useState)(""),c=Object(i.a)(n,2),a=c[0],o=c[1];return Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),!a&&alert("Debe agregar una categor\xeda"),a&&(t((function(e){return[a].concat(Object(s.a)(e))})),o(""))},children:Object(u.jsx)("input",{type:"text",value:a,onChange:function(e){o(e.target.value)}})})},j=n(11),d=n(6),l=n.n(d),b=n(9),f=function(){var e=Object(b.a)(l.a.mark((function e(t){var n,r,c,a,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=gFvXbiD6hcGW63vrvaVGCnUYmllz6bHI"),e.next=3,fetch(n);case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,a=c.data,console.log(a),i=a.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_medium.url}})),console.log(i),e.abrupt("return",i);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=(n(7),function(e){var t=e.title,n=e.url;return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("img",{src:n,alt:t}),Object(u.jsx)("p",{children:t})]})}),O=function(e){var t=e.category,n=function(e){var t=Object(r.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){f(e).then((function(e){a({data:e,loading:!1})}))}),[e]),c}(t),c=n.data,a=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{children:t}),a?"Cargando...":"Data cargada",Object(u.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(u.jsx)(p,Object(j.a)({},e),e.id)}))})]})},g=function(){var e=Object(r.useState)(["One punch"]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Gif expert app"}),Object(u.jsx)(o,{setCategories:c}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(e){return Object(u.jsx)(O,{category:e},e)}))})]})};a.a.render(Object(u.jsx)(g,{}),document.getElementById("root"))},7:function(e,t,n){}},[[18,1,2]]]);
//# sourceMappingURL=main.062197b4.chunk.js.map