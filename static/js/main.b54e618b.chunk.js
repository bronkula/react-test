(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{19:function(e,t,a){e.exports=a(31)},24:function(e,t,a){},25:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),c=a.n(l),o=(a(24),a(25),a(5)),s=a(6),i=function(e){return console.log(e),r.a.createElement("header",{className:"navbar"},r.a.createElement("div",{className:"container flex-parent"},r.a.createElement("div",{className:"flex-child"},r.a.createElement("h1",null,e.title)),r.a.createElement("nav",{className:"nav flex-none"},r.a.createElement("ul",null,e.children.map((function(e,t){return r.a.createElement("li",{key:t},e)}))))))},m=function(){return r.a.createElement("div",{className:"card pad"},r.a.createElement("h2",null,"Intro to React Apps"),r.a.createElement("p",null,"This page will be a short introduction to some basic, and even advanced topics for creating a React App from scratch. Open the code and step through the application part by part, as you analyse the inner workings."),r.a.createElement("h3",null,"Relevant Links"),r.a.createElement("ul",null,r.a.createElement("li",null,"Add React to a Page: ",r.a.createElement("a",{href:"https://reactjs.org/docs/add-react-to-a-website.html"},"https://reactjs.org/docs/add-react-to-a-website.html")),r.a.createElement("li",null,"Hooks: ",r.a.createElement("a",{href:"https://reactjs.org/docs/hooks-reference.html"},"https://reactjs.org/docs/hooks-reference.html")),r.a.createElement("li",null,"Hooks Examples: ",r.a.createElement("a",{href:"https://daveceddia.com/useeffect-hook-examples/"},"https://daveceddia.com/useeffect-hook-examples/")),r.a.createElement("li",null,"React Router: ",r.a.createElement("a",{href:"https://reacttraining.com/react-router/web/guides/quick-start"},"https://reacttraining.com/react-router/web/guides/quick-start")),r.a.createElement("li",null,"Deployment: ",r.a.createElement("a",{href:"https://create-react-app.dev/docs/deployment/#serving-apps-with-client-side-routing"},"https://create-react-app.dev/docs/deployment/#serving-apps-with-client-side-routing"))))},u=a(15),p=a(18),d=function(e){var t=e.data;return r.a.createElement("li",null,t)},h=function(e){var t=e.data;return r.a.createElement("ul",null,t.map((function(e,t){return r.a.createElement(d,{key:t,data:e})})))},E=function(e){var t=e.next,a=e.prev;return r.a.createElement("div",{className:"flex-parent"},r.a.createElement("div",{className:"flex-none"},r.a.createElement(o.b,{className:"btn",to:a[1]},a[0])),r.a.createElement("div",{className:"flex-child"},"\xa0"),r.a.createElement("div",{className:"flex-none"},r.a.createElement(o.b,{className:"btn",to:t[1]},t[0])))},f=function(e){var t=+Object(s.f)().path.split("/").slice(-1)[0];return r.a.createElement(E,{prev:["Prev",e.path+"/"+(t-1||"")],next:["Next",e.path+"/"+(t+1)]})},v=function(e){var t=e.data,a=e.callback,n=e.delimiter;return t.map((function(e){return r.a.createElement("span",{onClick:function(){return a({first:e})}},e)})).reduce((function(e,t){return[e,n,t]}))};function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var g=function(e){return r.a.createElement("div",{class:"card"},r.a.createElement("div",{class:"pad"},r.a.createElement("h3",null,"Learn about react stuff."),r.a.createElement("p",null,"I should probably mention this page is only useful if you also look at the ",r.a.createElement("a",{href:"https://github.com/bronkula/react-test",target:"_blank",rel:"noopener noreferrer"},"github source repository"),". The build will just seem silly by itself.")),r.a.createElement("div",{class:"pad line-up"},r.a.createElement("div",{className:"flex-parent"},r.a.createElement("div",{className:"flex-child"}),r.a.createElement(o.b,{className:"btn",to:"".concat(e.path,"/1")},"Start!"))))},y=function(e){var t=e.path,a=["Red","Blue","Green","Cyan","Magenta","Yellow"];return r.a.createElement("div",{class:"card"},r.a.createElement("div",{class:"pad"},r.a.createElement("h3",null,"Lists"),r.a.createElement("hr",null),r.a.createElement("div",null,"Inline List"),a.map((function(e,t){return r.a.createElement("div",{key:t},e)})),r.a.createElement("hr",null),r.a.createElement("div",null,"Component List"),r.a.createElement(h,{data:a})),r.a.createElement("div",{class:"pad line-up"},r.a.createElement(f,{path:t})))},w=function(e){var t=e.path,a=e.fonts,n=e.setFont;return r.a.createElement("div",{class:"card"},r.a.createElement("div",{class:"pad"},r.a.createElement("h3",null,"React forms"),r.a.createElement("div",null,"Choose a sans-serif font. Such as:",r.a.createElement(v,{data:["Arial","Arial Black","Tahoma","Verdana","sans-serif"],callback:n,delimiter:", "})),r.a.createElement("hr",null),r.a.createElement("div",null,"This input will update all values instantly."),r.a.createElement("input",{type:"text",value:a.first,onChange:function(e){e.preventDefault(),n({first:e.target.value})}}),r.a.createElement("hr",null),r.a.createElement("div",null,"Don't try to change values ",r.a.createElement("em",null,"on submit")," of ",r.a.createElement("em",null,"controlled inputs"),"."),r.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},r.a.createElement("input",{type:"text",value:a.first,onChange:function(e){e.preventDefault(),n({first:e.target.value})}})),r.a.createElement("hr",null),r.a.createElement("div",{style:{fontFamily:a.first}},"The chosen font is ",a.first,".")),r.a.createElement("div",{class:"pad line-up"},r.a.createElement(f,{path:t})))},k=function(e){var t=e.path,a=e.fonts,n=e.setFont;return r.a.createElement("div",{class:"card"},r.a.createElement("div",{class:"pad"},r.a.createElement("h3",null,"Select Pulldowns"),r.a.createElement("hr",null),r.a.createElement("select",{value:a.second,onChange:function(e){n({second:e.target.value})}},r.a.createElement("option",{value:"times new roman"},"Times New Roman"),r.a.createElement("option",{value:"cambria"},"Cambria"),r.a.createElement("option",{value:"georgia"},"Georgia"),r.a.createElement("option",{value:"serif"},"Serif")),r.a.createElement("div",{style:{fontFamily:a.second}},"The chosen font is ",a.second,".")),r.a.createElement("div",{class:"pad line-up"},r.a.createElement(f,{path:t})))},x=function(e){var t=e.path,a=e.fonts;return r.a.createElement("div",{class:"card"},r.a.createElement("div",{class:"pad"},r.a.createElement("h3",null,"Now you can see your chosen fonts."),r.a.createElement("div",{style:{fontFamily:a.first}},"The first chosen font is ",a.first,"."),r.a.createElement("div",{style:{fontFamily:a.second}},"The second chosen font is ",a.second,".")),r.a.createElement("div",{class:"pad line-up"},r.a.createElement(E,{prev:["Start Over","".concat(t,"/2")],next:["Finish","/"]})))},O=function(){var e=Object(s.f)().path,t=Object(n.useReducer)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{},t)}),{first:"Arial",second:"serif"}),a=Object(p.a)(t,2),l=a[0],c=a[1];return r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:e},r.a.createElement(g,{path:e})),r.a.createElement(s.a,{exact:!0,path:"".concat(e,"/1")},r.a.createElement(y,{path:e})),r.a.createElement(s.a,{exact:!0,path:"".concat(e,"/2")},r.a.createElement(w,{path:e,fonts:l,setFont:c})),r.a.createElement(s.a,{exact:!0,path:"".concat(e,"/3")},r.a.createElement(k,{path:e,fonts:l,setFont:c})),r.a.createElement(s.a,{exact:!0,path:"".concat(e,"/4")},r.a.createElement(x,{path:e,fonts:l})))};var j=function(){return r.a.createElement(o.a,null,r.a.createElement(i,{title:"Learning React"},r.a.createElement(o.b,{to:"/"},"Home"),r.a.createElement(o.b,{to:"/learn"},"Learn React")),r.a.createElement("div",{className:"container"},r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:m}),r.a.createElement(s.a,{path:"/learn",component:O}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.b54e618b.chunk.js.map