import{S as a,i as n,s,A as e,j as o,m as t,o as p,p as r,v as c,r as l,w as u,q as i,e as d,t as h,k,c as m,a as f,g as y,d as g,n as v,b as w,f as E,E as M,J as b}from"../../chunks/vendor-3b929796.js";import{B as C}from"../../chunks/blog-post-layout-a1aeab29.js";function P(a){let n,s,e,o,t,p,r,c,l,u,i,C,P,S,x,L,T,N,I,j,$,A,O,H,W,D,F,R,q,B,G,_,z,U,Y,J,K,Q,V,X,Z,aa,na,sa,ea,oa,ta,pa,ra,ca,la,ua,ia,da,ha,ka,ma,fa,ya,ga,va,wa,Ea,Ma,ba,Ca,Pa,Sa,xa,La,Ta,Na,Ia,ja,$a,Aa,Oa,Ha,Wa,Da,Fa,Ra,qa,Ba,Ga,_a,za,Ua,Ya,Ja,Ka,Qa,Va,Xa,Za,an,nn,sn,en,on,tn,pn,rn,cn,ln,un,dn,hn,kn,mn,fn,yn,gn,vn,wn,En,Mn,bn,Cn,Pn,Sn,xn;return{c(){n=d("p"),s=h("Crafting high quality Angular apps requires to have knowledge of how to use the different types of modules to ensure readability, performance and scalability."),e=k(),o=d("p"),t=h("By setting up your project to use each module type properly you will have better control over your project to add more advanced features such as Lazy Loading and a more organized structure to work with."),p=k(),r=d("p"),c=h("We have 3 types of modules:"),l=k(),u=d("ul"),i=d("li"),C=d("strong"),P=h("Feature modules"),S=k(),x=d("li"),L=d("strong"),T=h("Core Module"),N=k(),I=d("li"),j=d("strong"),$=h("Shared Module"),A=k(),O=d("h2"),H=h("Feature Modules"),W=k(),D=d("p"),F=h("those are the modules that encapsulate a specific feature at a logic level, for example you have a dashboard page that allows the users to see their projects."),R=k(),q=d("p"),B=h("The dashboard module will have everything that is needed to allow a user to see their projects:"),G=k(),_=d("ul"),z=d("li"),U=h("components"),Y=k(),J=d("li"),K=h("services"),Q=k(),V=d("li"),X=h("pipes"),Z=k(),aa=d("li"),na=h("directives"),sa=k(),ea=d("p"),oa=h("In general feature specific functionality is included in the module."),ta=k(),pa=d("p"),ra=h("If we need to use some common functionality in our Feature Modules we import the Shared Module in the Modules that needs it."),ca=k(),la=d("p"),ua=h("We will talk more about shared functionality later."),ia=k(),da=d("pre"),ha=k(),ka=d("h2"),ma=h("Core Module"),fa=k(),ya=d("p"),ga=h("Here we include functionality that will be used only ONCE!"),va=k(),wa=d("p"),Ea=d("strong"),Ma=h("The Core module is used ONLY in the root (app) Module!"),ba=k(),Ca=d("p"),Pa=h("Common "),Sa=d("strong"),xa=h("services are placed in the Core Module"),La=h(" to ensure we have only a single instance of the services to avoid unexpected behaviors."),Ta=k(),Na=d("p"),Ia=h("In this type of module we also place components that are used only ONCE for example the NavBar and the Footer components."),ja=k(),$a=d("pre"),Aa=k(),Oa=d("h2"),Ha=h("Shared Module"),Wa=k(),Da=d("p"),Fa=h("This is the most missunderstooded kind of Module!"),Ra=k(),qa=d("p"),Ba=h("The purpose of the SharedModule is to make available commonly used:"),Ga=k(),_a=d("ul"),za=d("li"),Ua=h("components"),Ya=k(),Ja=d("li"),Ka=h("directives"),Qa=k(),Va=d("li"),Xa=h("pipes"),Za=k(),an=d("p"),nn=h("We use the SharedModule in the feature modules to make common functionality available."),sn=k(),en=d("p"),on=h("We also make sure to have only one Shared Module."),tn=k(),pn=d("p"),rn=h("We avoid placing services here!"),cn=k(),ln=d("pre"),un=k(),dn=d("p"),hn=h("This was a brief introduction to the 3 most common Modules types used in Angular Applications."),kn=k(),mn=d("p"),fn=h("Happy coding 😄"),yn=k(),gn=d("h3"),vn=h("Credits"),wn=k(),En=d("p"),Mn=h("Photo by "),bn=d("a"),Cn=h("Digital Buggu"),Pn=h("  from "),Sn=d("a"),xn=h("Pexels"),this.h()},l(a){n=m(a,"P",{});var d=f(n);s=y(d,"Crafting high quality Angular apps requires to have knowledge of how to use the different types of modules to ensure readability, performance and scalability."),d.forEach(g),e=v(a),o=m(a,"P",{});var h=f(o);t=y(h,"By setting up your project to use each module type properly you will have better control over your project to add more advanced features such as Lazy Loading and a more organized structure to work with."),h.forEach(g),p=v(a),r=m(a,"P",{});var k=f(r);c=y(k,"We have 3 types of modules:"),k.forEach(g),l=v(a),u=m(a,"UL",{});var w=f(u);i=m(w,"LI",{});var E=f(i);C=m(E,"STRONG",{});var M=f(C);P=y(M,"Feature modules"),M.forEach(g),E.forEach(g),S=v(w),x=m(w,"LI",{});var b=f(x);L=m(b,"STRONG",{});var Ln=f(L);T=y(Ln,"Core Module"),Ln.forEach(g),b.forEach(g),N=v(w),I=m(w,"LI",{});var Tn=f(I);j=m(Tn,"STRONG",{});var Nn=f(j);$=y(Nn,"Shared Module"),Nn.forEach(g),Tn.forEach(g),w.forEach(g),A=v(a),O=m(a,"H2",{});var In=f(O);H=y(In,"Feature Modules"),In.forEach(g),W=v(a),D=m(a,"P",{});var jn=f(D);F=y(jn,"those are the modules that encapsulate a specific feature at a logic level, for example you have a dashboard page that allows the users to see their projects."),jn.forEach(g),R=v(a),q=m(a,"P",{});var $n=f(q);B=y($n,"The dashboard module will have everything that is needed to allow a user to see their projects:"),$n.forEach(g),G=v(a),_=m(a,"UL",{});var An=f(_);z=m(An,"LI",{});var On=f(z);U=y(On,"components"),On.forEach(g),Y=v(An),J=m(An,"LI",{});var Hn=f(J);K=y(Hn,"services"),Hn.forEach(g),Q=v(An),V=m(An,"LI",{});var Wn=f(V);X=y(Wn,"pipes"),Wn.forEach(g),Z=v(An),aa=m(An,"LI",{});var Dn=f(aa);na=y(Dn,"directives"),Dn.forEach(g),An.forEach(g),sa=v(a),ea=m(a,"P",{});var Fn=f(ea);oa=y(Fn,"In general feature specific functionality is included in the module."),Fn.forEach(g),ta=v(a),pa=m(a,"P",{});var Rn=f(pa);ra=y(Rn,"If we need to use some common functionality in our Feature Modules we import the Shared Module in the Modules that needs it."),Rn.forEach(g),ca=v(a),la=m(a,"P",{});var qn=f(la);ua=y(qn,"We will talk more about shared functionality later."),qn.forEach(g),ia=v(a),da=m(a,"PRE",{class:!0}),f(da).forEach(g),ha=v(a),ka=m(a,"H2",{});var Bn=f(ka);ma=y(Bn,"Core Module"),Bn.forEach(g),fa=v(a),ya=m(a,"P",{});var Gn=f(ya);ga=y(Gn,"Here we include functionality that will be used only ONCE!"),Gn.forEach(g),va=v(a),wa=m(a,"P",{});var _n=f(wa);Ea=m(_n,"STRONG",{});var zn=f(Ea);Ma=y(zn,"The Core module is used ONLY in the root (app) Module!"),zn.forEach(g),_n.forEach(g),ba=v(a),Ca=m(a,"P",{});var Un=f(Ca);Pa=y(Un,"Common "),Sa=m(Un,"STRONG",{});var Yn=f(Sa);xa=y(Yn,"services are placed in the Core Module"),Yn.forEach(g),La=y(Un," to ensure we have only a single instance of the services to avoid unexpected behaviors."),Un.forEach(g),Ta=v(a),Na=m(a,"P",{});var Jn=f(Na);Ia=y(Jn,"In this type of module we also place components that are used only ONCE for example the NavBar and the Footer components."),Jn.forEach(g),ja=v(a),$a=m(a,"PRE",{class:!0}),f($a).forEach(g),Aa=v(a),Oa=m(a,"H2",{});var Kn=f(Oa);Ha=y(Kn,"Shared Module"),Kn.forEach(g),Wa=v(a),Da=m(a,"P",{});var Qn=f(Da);Fa=y(Qn,"This is the most missunderstooded kind of Module!"),Qn.forEach(g),Ra=v(a),qa=m(a,"P",{});var Vn=f(qa);Ba=y(Vn,"The purpose of the SharedModule is to make available commonly used:"),Vn.forEach(g),Ga=v(a),_a=m(a,"UL",{});var Xn=f(_a);za=m(Xn,"LI",{});var Zn=f(za);Ua=y(Zn,"components"),Zn.forEach(g),Ya=v(Xn),Ja=m(Xn,"LI",{});var as=f(Ja);Ka=y(as,"directives"),as.forEach(g),Qa=v(Xn),Va=m(Xn,"LI",{});var ns=f(Va);Xa=y(ns,"pipes"),ns.forEach(g),Xn.forEach(g),Za=v(a),an=m(a,"P",{});var ss=f(an);nn=y(ss,"We use the SharedModule in the feature modules to make common functionality available."),ss.forEach(g),sn=v(a),en=m(a,"P",{});var es=f(en);on=y(es,"We also make sure to have only one Shared Module."),es.forEach(g),tn=v(a),pn=m(a,"P",{});var os=f(pn);rn=y(os,"We avoid placing services here!"),os.forEach(g),cn=v(a),ln=m(a,"PRE",{class:!0}),f(ln).forEach(g),un=v(a),dn=m(a,"P",{});var ts=f(dn);hn=y(ts,"This was a brief introduction to the 3 most common Modules types used in Angular Applications."),ts.forEach(g),kn=v(a),mn=m(a,"P",{});var ps=f(mn);fn=y(ps,"Happy coding 😄"),ps.forEach(g),yn=v(a),gn=m(a,"H3",{});var rs=f(gn);vn=y(rs,"Credits"),rs.forEach(g),wn=v(a),En=m(a,"P",{});var cs=f(En);Mn=y(cs,"Photo by "),bn=m(cs,"A",{href:!0,rel:!0});var ls=f(bn);Cn=y(ls,"Digital Buggu"),ls.forEach(g),Pn=y(cs,"  from "),Sn=m(cs,"A",{href:!0,rel:!0});var us=f(Sn);xn=y(us,"Pexels"),us.forEach(g),cs.forEach(g),this.h()},h(){w(da,"class","language-typescript"),w($a,"class","language-typescript"),w(ln,"class","language-typescript"),w(bn,"href","https://www.pexels.com/@digitalbuggu?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels"),w(bn,"rel","nofollow"),w(Sn,"href","https://www.pexels.com/photo/colorful-toothed-wheels-171198/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels"),w(Sn,"rel","nofollow")},m(a,d){E(a,n,d),M(n,s),E(a,e,d),E(a,o,d),M(o,t),E(a,p,d),E(a,r,d),M(r,c),E(a,l,d),E(a,u,d),M(u,i),M(i,C),M(C,P),M(u,S),M(u,x),M(x,L),M(L,T),M(u,N),M(u,I),M(I,j),M(j,$),E(a,A,d),E(a,O,d),M(O,H),E(a,W,d),E(a,D,d),M(D,F),E(a,R,d),E(a,q,d),M(q,B),E(a,G,d),E(a,_,d),M(_,z),M(z,U),M(_,Y),M(_,J),M(J,K),M(_,Q),M(_,V),M(V,X),M(_,Z),M(_,aa),M(aa,na),E(a,sa,d),E(a,ea,d),M(ea,oa),E(a,ta,d),E(a,pa,d),M(pa,ra),E(a,ca,d),E(a,la,d),M(la,ua),E(a,ia,d),E(a,da,d),da.innerHTML='<code class="language-typescript"><span class="token comment">// feature module example</span>\n<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> NgModule <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'@angular/core\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> SharedModule <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'../shared/SharedModule\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> DashboardComponent <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'./dashboard/dashboard.component\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ProjectComponent <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'./project/project.component\'</span><span class="token punctuation">;</span>\n\n@<span class="token function">NgModule</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>\n  imports<span class="token operator">:</span> <span class="token punctuation">[</span>\n    NgModule<span class="token punctuation">,</span>\n    SharedModule\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  declarations<span class="token operator">:</span> <span class="token punctuation">[</span> DashboardComponent<span class="token punctuation">,</span> ProjectComponent <span class="token punctuation">]</span>\n<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">DashboardModule</span> <span class="token punctuation">&#123;</span> <span class="token punctuation">&#125;</span></code>',E(a,ha,d),E(a,ka,d),M(ka,ma),E(a,fa,d),E(a,ya,d),M(ya,ga),E(a,va,d),E(a,wa,d),M(wa,Ea),M(Ea,Ma),E(a,ba,d),E(a,Ca,d),M(Ca,Pa),M(Ca,Sa),M(Sa,xa),M(Ca,La),E(a,Ta,d),E(a,Na,d),M(Na,Ia),E(a,ja,d),E(a,$a,d),$a.innerHTML='<code class="language-typescript"><span class="token comment">// core module example</span>\n<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> NgModule<span class="token punctuation">,</span> Optional<span class="token punctuation">,</span> SkipSelf <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'@angular/core\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ApiService <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'./services/api.service\'</span><span class="token punctuation">;</span>\n\n@<span class="token function">NgModule</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>\n  providers<span class="token operator">:</span> <span class="token punctuation">[</span> ApiService <span class="token punctuation">]</span>\n<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">CoreModule</span> <span class="token punctuation">&#123;</span>\n   <span class="token comment">// do not allow to be used more than ONCE!!!</span>\n  <span class="token keyword">constructor</span><span class="token punctuation">(</span>@<span class="token function">Optional</span><span class="token punctuation">(</span><span class="token punctuation">)</span> @<span class="token function">SkipSelf</span><span class="token punctuation">(</span><span class="token punctuation">)</span> parent<span class="token operator">:</span> CoreModule<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>parent<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>\n        <span class="token string">\'Import CoreModule in the root module only!!!\'</span>\n      <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">&#125;</span>\n  <span class="token punctuation">&#125;</span>\n<span class="token punctuation">&#125;</span></code>',E(a,Aa,d),E(a,Oa,d),M(Oa,Ha),E(a,Wa,d),E(a,Da,d),M(Da,Fa),E(a,Ra,d),E(a,qa,d),M(qa,Ba),E(a,Ga,d),E(a,_a,d),M(_a,za),M(za,Ua),M(_a,Ya),M(_a,Ja),M(Ja,Ka),M(_a,Qa),M(_a,Va),M(Va,Xa),E(a,Za,d),E(a,an,d),M(an,nn),E(a,sn,d),E(a,en,d),M(en,on),E(a,tn,d),E(a,pn,d),M(pn,rn),E(a,cn,d),E(a,ln,d),ln.innerHTML='<code class="language-typescript"><span class="token comment">// shared module example</span>\n<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> CommonModule <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'@angular/common\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> NgModule <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'@angular/core\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> CustomerComponent <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'./components/customer/customer.component\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> PercentagePipe <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'./pipes/percentage/percentange.pipe\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> CustomerStyleDirective <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'./directives/customer-style/customer-style.directive\'</span><span class="token punctuation">;</span>\n\n@<span class="token function">NgModule</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>\n  imports<span class="token operator">:</span> <span class="token punctuation">[</span> CommonModule <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  exports<span class="token operator">:</span> <span class="token punctuation">[</span>\n    CommonModule<span class="token punctuation">,</span>\n    CustomerComponent<span class="token punctuation">,</span>\n    PercentagePipe<span class="token punctuation">,</span>\n    CustomerStyleDirective \n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  declarations<span class="token operator">:</span> <span class="token punctuation">[</span> CustomerComponent<span class="token punctuation">,</span> CustomerStyleDirective<span class="token punctuation">,</span> PercentagePipe <span class="token punctuation">]</span>\n<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">SharedModule</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span></code>',E(a,un,d),E(a,dn,d),M(dn,hn),E(a,kn,d),E(a,mn,d),M(mn,fn),E(a,yn,d),E(a,gn,d),M(gn,vn),E(a,wn,d),E(a,En,d),M(En,Mn),M(En,bn),M(bn,Cn),M(En,Pn),M(En,Sn),M(Sn,xn)},p:b,d(a){a&&g(n),a&&g(e),a&&g(o),a&&g(p),a&&g(r),a&&g(l),a&&g(u),a&&g(A),a&&g(O),a&&g(W),a&&g(D),a&&g(R),a&&g(q),a&&g(G),a&&g(_),a&&g(sa),a&&g(ea),a&&g(ta),a&&g(pa),a&&g(ca),a&&g(la),a&&g(ia),a&&g(da),a&&g(ha),a&&g(ka),a&&g(fa),a&&g(ya),a&&g(va),a&&g(wa),a&&g(ba),a&&g(Ca),a&&g(Ta),a&&g(Na),a&&g(ja),a&&g($a),a&&g(Aa),a&&g(Oa),a&&g(Wa),a&&g(Da),a&&g(Ra),a&&g(qa),a&&g(Ga),a&&g(_a),a&&g(Za),a&&g(an),a&&g(sn),a&&g(en),a&&g(tn),a&&g(pn),a&&g(cn),a&&g(ln),a&&g(un),a&&g(dn),a&&g(kn),a&&g(mn),a&&g(yn),a&&g(gn),a&&g(wn),a&&g(En)}}}function S(a){let n,s;const d=[x];let h={$$slots:{default:[P]},$$scope:{ctx:a}};for(let o=0;o<d.length;o+=1)h=e(h,d[o]);return n=new C({props:h}),{c(){o(n.$$.fragment)},l(a){t(n.$$.fragment,a)},m(a,e){p(n,a,e),s=!0},p(a,[s]){const e=0&s?r(d,[i(x)]):{};1&s&&(e.$$scope={dirty:s,ctx:a}),n.$set(e)},i(a){s||(c(n.$$.fragment,a),s=!0)},o(a){l(n.$$.fragment,a),s=!1},d(a){u(n,a)}}}const x={author:"achimoraites",date:"Sun May 10 2020 00:00:00 GMT+0300",excerpt:"Crafting high quality Angular apps requires to have knowledge of how to use the different types of modules to ensure readability, performance and scalability.",image:"test.jpg",slug:"angular-types-of-modules",subtitle:"Improve the scalabillity of your Angular project by using the module type pattern!",title:"Types of Modules in Angular",url:"https://achimoraites.github.io/blog/angular-types-of-modules"},L=!0;export default class extends a{constructor(a){super(),n(this,a,null,S,s,{})}}export{x as metadata,L as prerender};
