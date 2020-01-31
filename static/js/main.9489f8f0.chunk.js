(window["webpackJsonpmy-portfolio"]=window["webpackJsonpmy-portfolio"]||[]).push([[1],{17:function(e,t,a){"use strict";var i=a(0),n=a.n(i),r=a(9),l=a(10),o=a(7),c=a.n(o),s=a(5),m=a.n(s);var u=function(){var e=Object(i.useState)(""),t=Object(r.a)(e,2),a=t[0],o=t[1],s=Object(i.useState)(!1),u=Object(r.a)(s,2),p=u[0],g=u[1];return Object(i.useEffect)((function(){c.a.get("/api/information").then((function(e){o(e.data)}))}),[]),n.a.createElement("nav",{className:p?"mi-header is-visible":"mi-header"},n.a.createElement("button",{"aria-label":"menu-button",onClick:function(){g(!p)},className:"mi-header-toggler"},p?n.a.createElement(m.a,{name:"close"}):n.a.createElement(m.a,{name:"menu"})),n.a.createElement("div",{className:"mi-header-inner"},n.a.createElement("div",{className:"mi-header-image"},n.a.createElement(l.b,{to:"/"},n.a.createElement("img",{src:a.brandImage,alt:"brandimage"}))),n.a.createElement("ul",{className:"mi-header-menu"},n.a.createElement("li",null,n.a.createElement(l.c,{exact:!0,to:"/"},n.a.createElement("span",null,"Home"))),n.a.createElement("li",null,n.a.createElement(l.c,{to:"/resume"},n.a.createElement("span",null,"Resume"))),n.a.createElement("li",null,n.a.createElement(l.c,{to:"/articles"},n.a.createElement("span",null,"Articles")))),n.a.createElement("p",{className:"mi-header-copyright"},"\xa9 ",(new Date).getFullYear()," ",n.a.createElement("b",null,n.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://achimoraites.github.io"},"Achilles Moraites")))))};var p=function(e){return n.a.createElement("div",{className:"mi-bglines"},n.a.createElement("span",null),n.a.createElement("span",null),n.a.createElement("span",null),n.a.createElement("span",null),n.a.createElement("span",null))};t.a=function(e){return n.a.createElement("div",{className:"mi-wrapper"},n.a.createElement(p,null),n.a.createElement(u,null),e.children)}},38:function(e,t,a){e.exports=a(82)},46:function(e,t,a){},47:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(18),l=a.n(r),o=(a(43),a(44),a(45),a(46),a(10)),c=a(8),s=(a(47),a(9)),m=a(7),u=a.n(m),p=a(34),g=a.n(p),d=a(5),f=a.n(d);var b=function(e){var t=Object(i.useState)({}),a=Object(s.a)(t,2),r=a[0],l=a[1];return Object(i.useEffect)((function(){u.a.get("/api/information").then((function(e){l(e.data.socialLinks)}))}),[]),n.a.createElement("ul",{className:e.bordered?"mi-socialicons mi-socialicons-bordered":"mi-socialicons"},r.facebook?n.a.createElement("li",null,n.a.createElement("a",{rel:"noopener noreferrer",target:"_blank","aria-label":"facebook",href:r.facebook},n.a.createElement(f.a,{name:"facebook"}))):null,r.twitter?n.a.createElement("li",null,n.a.createElement("a",{rel:"noopener noreferrer",target:"_blank","aria-label":"twitter",href:r.twitter},n.a.createElement(f.a,{name:"twitter"}))):null,r.pinterest?n.a.createElement("li",null,n.a.createElement("a",{rel:"noopener noreferrer",target:"_blank","aria-label":"pinterest",href:r.pinterest},n.a.createElement(f.a,{name:"pinterest"}))):null,r.behance?n.a.createElement("li",null,n.a.createElement("a",{rel:"noopener noreferrer",target:"_blank","aria-label":"behance",href:r.behance},n.a.createElement(f.a,{name:"behance"}))):null,r.linkedin?n.a.createElement("li",null,n.a.createElement("a",{rel:"noopener noreferrer",target:"_blank","aria-label":"linkedin",href:r.linkedin},n.a.createElement(f.a,{name:"linkedin"}))):null,r.dribbble?n.a.createElement("li",null,n.a.createElement("a",{rel:"noopener noreferrer",target:"_blank","aria-label":"dribbble",href:r.dribbble},n.a.createElement(f.a,{name:"dribbble"}))):null,r.github?n.a.createElement("li",null,n.a.createElement("a",{rel:"noopener noreferrer",target:"_blank","aria-label":"github",href:r.github},n.a.createElement(f.a,{name:"github"}))):null)},h=a(17);var v=function(){var e=Object(i.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(i.useEffect)((function(){u.a.get("/api/information").then((function(e){r(e.data)}))}),[]),n.a.createElement(h.a,null,n.a.createElement("div",{className:"mi-home-area mi-padding-section"},n.a.createElement(g.a,{className:"mi-home-particle",params:{particles:{number:{value:160,density:{enable:!1}},color:{value:"#ffffff"},opacity:{value:.1},size:{value:5,random:!0,anim:{speed:4,size_min:.3}},line_linked:{enable:!1},move:{random:!0,speed:1,direction:"top",out_mode:"out"}}}}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row justify-content-center"},n.a.createElement("div",{className:"col-lg-10 col-12"},n.a.createElement("div",{className:"mi-home-content"},n.a.createElement("h1",null,"Hi, I am ",n.a.createElement("span",{className:"color-theme"},a.name)),n.a.createElement("p",null,a.aboutContent),n.a.createElement(b,{bordered:!0})))))))},E=Object(i.lazy)((function(){return a.e(6).then(a.bind(null,110))})),y=Object(i.lazy)((function(){return Promise.all([a.e(0),a.e(5)]).then(a.bind(null,111))})),w=Object(i.lazy)((function(){return Promise.all([a.e(0),a.e(4),a.e(7)]).then(a.bind(null,112))}));var k={loader:{height:"100vh",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}},j=function(){return n.a.createElement(o.a,null,n.a.createElement(i.Suspense,{fallback:n.a.createElement("div",{style:k.loader},n.a.createElement("div",{class:"lds-ripple"},n.a.createElement("div",null),n.a.createElement("div",null)))},n.a.createElement(c.c,null,n.a.createElement(c.a,{path:"/",exact:!0,component:v}),n.a.createElement(c.a,{path:"/about",component:w}),n.a.createElement(c.a,{path:"/resume",component:E}),n.a.createElement(c.a,{path:"/articles",component:y}))))},A=new(a(69))(a(7)),S={name:"Achilles Moraites",aboutContent:"I am a software engineering lover that actively looks for ways to improve the quality of my work, while trying to make the complex as simple and efficient.",age:35,phone:"",nationality:"Greek",language:"English, Spanish, Greek",email:"",address:"",freelanceStatus:"Available",socialLinks:{twitter:"https://twitter.com/achimoraites",pinterest:"",behance:"",linkedin:"https://www.linkedin.com/in/achimoraitis",dribbble:"",github:"https://github.com/achimoraites"},brandImage:"/images/brand-image.jpg",aboutImage:"/images/about-image.jpg",aboutImageLg:"/images/about-image-lg.jpg",cvfile:"/files/empty.pdf"},x=[{title:"Web Design",icon:"color-pallet",details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."},{title:"Web Development",icon:"code",details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."},{title:"Mobile Application",icon:"mobile",details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."}],U=[{id:1,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.",author:{name:"Burdette Turner",designation:"Web Developer, Abc Company"}},{id:2,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",author:{name:"Susan Yost",designation:"Client"}},{id:3,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",author:{name:"Irving Feeney",designation:"Fiverr Client"}}],N=[{title:"Javascript",value:90},{title:"Typescript",value:90},{title:"Angular",value:85},{title:"ReactJS",value:80},{title:"VueJS",value:80},{title:"Redux",value:75},{title:"CSS3",value:90},{title:"Sass",value:80}],C=[{id:1,title:"T-shirt Mockup",subtitle:"A beautiful t-shirt mockup.",imageUrl:"/images/portfolio-image-1.jpg",largeImageUrl:["/images/portfolio-image-1-lg.jpg"],url:"https://dribbble.com"},{id:2,title:"Coffee Mug",subtitle:"Awesome coffee mug design.",imageUrl:"/images/portfolio-image-4.jpg",largeImageUrl:["/images/portfolio-image-4-lg.jpg","/images/portfolio-image-4-lg2.jpg"],url:"https://facebook.com"},{id:3,title:"Tea & Coffee Mug",subtitle:"Beautiful mug with logo.",imageUrl:"/images/portfolio-image-2.jpg",url:"https://pinterest.com"},{id:4,title:"Pen Holder",subtitle:"A pen holder with beautiful design.",imageUrl:"/images/portfolio-image-3.jpg",largeImageUrl:["/images/portfolio-image-3-lg.jpg"],url:"#"},{id:5,title:"Mug",subtitle:"Mug with awesome style",imageUrl:"/images/portfolio-image-5.jpg",largeImageUrl:["/images/portfolio-image-5-lg.jpg"]},{id:6,title:"Pendrive",subtitle:"Free pendrive mockup design.",imageUrl:"/images/portfolio-image-6.jpg",largeImageUrl:["/images/portfolio-image-6-lg.jpg"]},{id:7,title:"Beautiful Pendrive",subtitle:"Pendrive with great design & flexible.",imageUrl:"/images/portfolio-image-7.jpg",largeImageUrl:["/images/portfolio-image-7-lg.jpg"],url:"https://twitter.com"},{id:8,title:"Sticker",subtitle:"Clip sticker mockup design.",imageUrl:"/images/portfolio-image-8.jpg",largeImageUrl:["/images/portfolio-image-8-lg.jpg"]}],I=[{id:1,title:"Typescript Tips and Tricks ",subtitle:"Typescript tricks to make your life as a software developer easier.",imageUrl:"/images/articles/article1.jpg",url:"https://dev.to/achimoraites/typescript-tips-and-tricks-4fnh"},{id:2,title:"Simplify your Angular Component testing",subtitle:"Components are everywhere in our apps and testing them is part of our daily software development process.",imageUrl:"/images/articles/article2.jpg",url:"https://dev.to/achimoraites/simplify-your-angular-component-testing-1l3f"},{id:3,title:"Design Patterns \u2014 Composite",subtitle:"The composite design pattern is about a hierarchy where nodes with children have different behavior than childless nodes.",imageUrl:"/images/articles/article3.jpg",url:"https://dev.to/achimoraites/design-patterns-composite-4k49"}],D={workingExperience:[{id:1,year:"November 2019 - Present",position:"Frontend Web Developer",company:"noris network",details:""},{id:2,year:"January 2019 - October 2019",position:"Full stack Developer",company:"Delivery Manager",details:"Full stack development using AWS , NodeJS, VueJS, Angular 5+, Ionic 4"},{id:3,year:"June 2018 - 2019",position:"Software Developer",company:"Freelance Web Develpment",details:"Development of web Applications using: VueJS, ReactJS, Redux, Django, Express.js"}],educationExperience:[{id:1,year:"2018 - 2019",graduation:"Master of Science",university:"Abc University",details:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."},{id:2,year:"2016 - 2018",graduation:"Bachelor of Science",university:"Abc University",details:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."},{id:3,year:"2015 - 2016",graduation:"Higher Schoold Graduation",university:"Abc College",details:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."}]},O={phoneNumbers:["+012-3456-7891","+012-3456-7892"],emailAddress:["admin.sitename@example.com","info.sitename@example.com"],address:"121 King Street, Melbourne, Victoria 3000, Australia"};A.onGet("/api/information").reply((function(e){return[200,S]})),A.onGet("/api/services").reply((function(e){return[200,x]})),A.onGet("/api/reviews").reply((function(e){return[200,U]})),A.onGet("/api/skills").reply((function(e){return[200,N]})),A.onGet("/api/portfolios").reply((function(e){return[200,C]})),A.onGet("/api/articles").reply((function(e){return[200,I]})),A.onGet("/api/experience").reply((function(e){return[200,D]})),A.onGet("/api/contactinfo").reply((function(e){return[200,O]})),A.onAny().passThrough();var q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(n.a.createElement(j,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");q?(!function(e,t){fetch(e).then((function(a){var i=a.headers.get("content-type");404===a.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):L(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):L(t,e)}))}}()}},[[38,2,3]]]);
//# sourceMappingURL=main.9489f8f0.chunk.js.map