import{S as n,i as s,s as a,A as t,j as o,m as p,o as e,p as c,v as u,r as i,w as l,q as r,e as k,t as h,k as g,c as m,a as d,g as w,d as y,n as f,b,f as v,E,J as O}from"../../chunks/vendor-3b929796.js";import{B as P}from"../../chunks/blog-post-layout-8a40c0f8.js";import"../../chunks/Tags-e29fbb37.js";function x(n){let s,a,t,o,p,e,c,u,i,l,r,P,x,I,B,j,C,A,H,T,$,N,S,L,F,D,W,_,M,q,U,V,z,R,J,G,K,Q,X,Y,Z,nn,sn,an,tn,on,pn,en,cn,un,ln,rn,kn,hn,gn,mn,dn,wn,yn,fn,bn,vn,En,On,Pn,xn,In,Bn,jn,Cn,An,Hn,Tn,$n,Nn,Sn,Ln,Fn,Dn,Wn,_n,Mn,qn,Un,Vn,zn,Rn,Jn,Gn,Kn,Qn,Xn,Yn;return{c(){s=k("p"),a=h("When testing our apps there are times when we need to control things that are beyond our control, like the window object.\nOne common scenario is when we need to test our code against browser specific APIs."),t=g(),o=k("blockquote"),p=k("p"),e=h("If you are looking how to upgrade your testing skills this is the article you have been looking for!"),c=g(),u=k("h2"),i=h("Show me the code"),l=g(),r=k("pre"),P=g(),x=k("h3"),I=h("Now lets test the "),B=k("code"),j=h("goBack()"),C=h(" method"),A=g(),H=k("p"),T=h("As you know already the "),$=k("code"),N=h("window.history"),S=h(" is read only.\nWe need to test two cases:"),L=g(),F=k("ul"),D=k("li"),W=h("history.length == 1"),_=g(),M=k("li"),q=h("history.length > 1"),U=g(),V=k("p"),z=h("in our history.component.spec.ts\nwe use the "),R=k("code"),J=h("spyOnProperty"),G=h(" to mock the "),K=k("code"),Q=h("window.history.length"),X=h(" to be able to test our both cases:"),Y=g(),Z=k("pre"),nn=g(),sn=k("p"),an=h("that was easy :)"),tn=g(),on=k("p"),pn=h("Now lets tackle a more interesting case, what about testing a browser specific api?"),en=g(),cn=k("h3"),un=h("Testing browser specific APIs"),ln=g(),rn=k("p"),kn=h("Now in the "),hn=k("code"),gn=h("saveFile()"),mn=h(" method we are using a browser specific API, here things are getting more interesting."),dn=g(),wn=k("p"),yn=h("The "),fn=k("code"),bn=h("window.navigator.msSaveOrOpenBlob"),vn=h(" is available only on IE,\non other supported browsers we have a different implementation."),En=g(),On=k("p"),Pn=h("Let’s dive to our test code!"),xn=g(),In=k("pre"),Bn=g(),jn=k("p"),Cn=h("Here we mocked the "),An=k("code"),Hn=h("window.navigator"),Tn=h(" to be able to simulate the behavior on both cases!"),$n=g(),Nn=k("h2"),Sn=h("Summary"),Ln=g(),Fn=k("p"),Dn=h("Today we learned about mocking the window object to be able to do tests against browser specific APIs.\nBy using this technique you will be able to mock anything you need to test your code."),Wn=g(),_n=k("p"),Mn=h("I hope you enjoyed it,\nHappy coding :)"),qn=g(),Un=k("h3"),Vn=h("Credits"),zn=g(),Rn=k("p"),Jn=h("Photo by "),Gn=k("a"),Kn=h("Artem Podrez"),Qn=h("  from "),Xn=k("a"),Yn=h("Pexels"),this.h()},l(n){s=m(n,"P",{});var k=d(s);a=w(k,"When testing our apps there are times when we need to control things that are beyond our control, like the window object.\nOne common scenario is when we need to test our code against browser specific APIs."),k.forEach(y),t=f(n),o=m(n,"BLOCKQUOTE",{});var h=d(o);p=m(h,"P",{});var g=d(p);e=w(g,"If you are looking how to upgrade your testing skills this is the article you have been looking for!"),g.forEach(y),h.forEach(y),c=f(n),u=m(n,"H2",{});var b=d(u);i=w(b,"Show me the code"),b.forEach(y),l=f(n),r=m(n,"PRE",{class:!0}),d(r).forEach(y),P=f(n),x=m(n,"H3",{});var v=d(x);I=w(v,"Now lets test the "),B=m(v,"CODE",{});var E=d(B);j=w(E,"goBack()"),E.forEach(y),C=w(v," method"),v.forEach(y),A=f(n),H=m(n,"P",{});var O=d(H);T=w(O,"As you know already the "),$=m(O,"CODE",{});var Zn=d($);N=w(Zn,"window.history"),Zn.forEach(y),S=w(O," is read only.\nWe need to test two cases:"),O.forEach(y),L=f(n),F=m(n,"UL",{});var ns=d(F);D=m(ns,"LI",{});var ss=d(D);W=w(ss,"history.length == 1"),ss.forEach(y),_=f(ns),M=m(ns,"LI",{});var as=d(M);q=w(as,"history.length > 1"),as.forEach(y),ns.forEach(y),U=f(n),V=m(n,"P",{});var ts=d(V);z=w(ts,"in our history.component.spec.ts\nwe use the "),R=m(ts,"CODE",{});var os=d(R);J=w(os,"spyOnProperty"),os.forEach(y),G=w(ts," to mock the "),K=m(ts,"CODE",{});var ps=d(K);Q=w(ps,"window.history.length"),ps.forEach(y),X=w(ts," to be able to test our both cases:"),ts.forEach(y),Y=f(n),Z=m(n,"PRE",{class:!0}),d(Z).forEach(y),nn=f(n),sn=m(n,"P",{});var es=d(sn);an=w(es,"that was easy :)"),es.forEach(y),tn=f(n),on=m(n,"P",{});var cs=d(on);pn=w(cs,"Now lets tackle a more interesting case, what about testing a browser specific api?"),cs.forEach(y),en=f(n),cn=m(n,"H3",{});var us=d(cn);un=w(us,"Testing browser specific APIs"),us.forEach(y),ln=f(n),rn=m(n,"P",{});var is=d(rn);kn=w(is,"Now in the "),hn=m(is,"CODE",{});var ls=d(hn);gn=w(ls,"saveFile()"),ls.forEach(y),mn=w(is," method we are using a browser specific API, here things are getting more interesting."),is.forEach(y),dn=f(n),wn=m(n,"P",{});var rs=d(wn);yn=w(rs,"The "),fn=m(rs,"CODE",{});var ks=d(fn);bn=w(ks,"window.navigator.msSaveOrOpenBlob"),ks.forEach(y),vn=w(rs," is available only on IE,\non other supported browsers we have a different implementation."),rs.forEach(y),En=f(n),On=m(n,"P",{});var hs=d(On);Pn=w(hs,"Let’s dive to our test code!"),hs.forEach(y),xn=f(n),In=m(n,"PRE",{class:!0}),d(In).forEach(y),Bn=f(n),jn=m(n,"P",{});var gs=d(jn);Cn=w(gs,"Here we mocked the "),An=m(gs,"CODE",{});var ms=d(An);Hn=w(ms,"window.navigator"),ms.forEach(y),Tn=w(gs," to be able to simulate the behavior on both cases!"),gs.forEach(y),$n=f(n),Nn=m(n,"H2",{});var ds=d(Nn);Sn=w(ds,"Summary"),ds.forEach(y),Ln=f(n),Fn=m(n,"P",{});var ws=d(Fn);Dn=w(ws,"Today we learned about mocking the window object to be able to do tests against browser specific APIs.\nBy using this technique you will be able to mock anything you need to test your code."),ws.forEach(y),Wn=f(n),_n=m(n,"P",{});var ys=d(_n);Mn=w(ys,"I hope you enjoyed it,\nHappy coding :)"),ys.forEach(y),qn=f(n),Un=m(n,"H3",{});var fs=d(Un);Vn=w(fs,"Credits"),fs.forEach(y),zn=f(n),Rn=m(n,"P",{});var bs=d(Rn);Jn=w(bs,"Photo by "),Gn=m(bs,"A",{href:!0,rel:!0});var vs=d(Gn);Kn=w(vs,"Artem Podrez"),vs.forEach(y),Qn=w(bs,"  from "),Xn=m(bs,"A",{href:!0,rel:!0});var Es=d(Xn);Yn=w(Es,"Pexels"),Es.forEach(y),bs.forEach(y),this.h()},h(){b(r,"class","language-typescript"),b(Z,"class","language-typescript"),b(In,"class","language-typescript"),b(Gn,"href","https://www.pexels.com/@artempodrez?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels"),b(Gn,"rel","nofollow"),b(Xn,"href","https://www.pexels.com/photo/a-woman-doing-an-experiment-5726788/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels"),b(Xn,"rel","nofollow")},m(n,k){v(n,s,k),E(s,a),v(n,t,k),v(n,o,k),E(o,p),E(p,e),v(n,c,k),v(n,u,k),E(u,i),v(n,l,k),v(n,r,k),r.innerHTML='<code class="language-typescript"><span class="token comment">// history.component.ts</span>\n<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Component<span class="token punctuation">,</span> OnInit <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'@angular/core\'</span><span class="token punctuation">;</span>\n\n@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>\n  selector<span class="token operator">:</span> <span class="token string">\'app-history\'</span><span class="token punctuation">,</span>\n  templateUrl<span class="token operator">:</span> <span class="token string">\'./history.component.html\'</span><span class="token punctuation">,</span>\n  styleUrls<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'./history.component.css\'</span><span class="token punctuation">]</span>\n<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">HistoryComponent</span> <span class="token keyword">implements</span> <span class="token class-name">OnInit</span> <span class="token punctuation">&#123;</span>\n\n  <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span> <span class="token punctuation">&#125;</span>\n\n  <span class="token function">ngOnInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n  <span class="token punctuation">&#125;</span>\n\n  <span class="token function">goBack</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>history<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'length 1\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>\n      window<span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">back</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">&#125;</span>\n  <span class="token punctuation">&#125;</span>\n\n  <span class="token function">saveFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n    <span class="token keyword">const</span> blob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">\'\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>\n      <span class="token keyword">type</span><span class="token operator">:</span> <span class="token string">\'text/html\'</span>\n    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// IE</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>navigator <span class="token operator">&amp;&amp;</span> window<span class="token punctuation">.</span>navigator<span class="token punctuation">.</span>msSaveOrOpenBlob<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n      window<span class="token punctuation">.</span>navigator<span class="token punctuation">.</span><span class="token function">msSaveOrOpenBlob</span><span class="token punctuation">(</span>blob<span class="token punctuation">,</span> <span class="token string">\'file.txt\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>\n      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'custom handling\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">&#125;</span>\n  <span class="token punctuation">&#125;</span>\n\n<span class="token punctuation">&#125;</span></code>',v(n,P,k),v(n,x,k),E(x,I),E(x,B),E(B,j),E(x,C),v(n,A,k),v(n,H,k),E(H,T),E(H,$),E($,N),E(H,S),v(n,L,k),v(n,F,k),E(F,D),E(D,W),E(F,_),E(F,M),E(M,q),v(n,U,k),v(n,V,k),E(V,z),E(V,R),E(R,J),E(V,G),E(V,K),E(K,Q),E(V,X),v(n,Y,k),v(n,Z,k),Z.innerHTML='<code class="language-typescript">  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'should execute "goBack" as expected when history === 1\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>\n    <span class="token comment">// spy on console.log()</span>\n    <span class="token function">spyOn</span><span class="token punctuation">(</span><span class="token builtin">console</span><span class="token punctuation">,</span> <span class="token string">\'log\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// here we mock the history length to be 1</span>\n    <span class="token function">spyOnProperty</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>history<span class="token punctuation">,</span> <span class="token string">\'length\'</span><span class="token punctuation">,</span> <span class="token string">\'get\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>and<span class="token punctuation">.</span><span class="token function">returnValue</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    component<span class="token punctuation">.</span><span class="token function">goBack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token function">expect</span><span class="token punctuation">(</span><span class="token builtin">console</span><span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveBeenCalledWith</span><span class="token punctuation">(</span><span class="token string">\'length 1\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'should execute "goBack" as expected when history > 1\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>\n    <span class="token comment">// spy on window.history.back()</span>\n    <span class="token function">spyOn</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>history<span class="token punctuation">,</span> <span class="token string">\'back\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// here we mock the history length to be 2</span>\n    <span class="token function">spyOnProperty</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>history<span class="token punctuation">,</span> <span class="token string">\'length\'</span><span class="token punctuation">,</span> <span class="token string">\'get\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>and<span class="token punctuation">.</span><span class="token function">returnValue</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    component<span class="token punctuation">.</span><span class="token function">goBack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token function">expect</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>history<span class="token punctuation">.</span>back<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveBeenCalled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>',v(n,nn,k),v(n,sn,k),E(sn,an),v(n,tn,k),v(n,on,k),E(on,pn),v(n,en,k),v(n,cn,k),E(cn,un),v(n,ln,k),v(n,rn,k),E(rn,kn),E(rn,hn),E(hn,gn),E(rn,mn),v(n,dn,k),v(n,wn,k),E(wn,yn),E(wn,fn),E(fn,bn),E(wn,vn),v(n,En,k),v(n,On,k),E(On,Pn),v(n,xn,k),v(n,In,k),In.innerHTML='<code class="language-typescript"> <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'should execute "saveFile" as expected on IE\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>\n    <span class="token comment">// create a mock navigator</span>\n    <span class="token keyword">const</span> mockNavigator <span class="token operator">=</span> jasmine<span class="token punctuation">.</span><span class="token function">createSpyObj</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">\'msSaveOrOpenBlob\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// here we use the mockNavigator to simulate IE</span>\n    <span class="token function">spyOnProperty</span><span class="token punctuation">(</span>window<span class="token punctuation">,</span> <span class="token string">\'navigator\'</span><span class="token punctuation">,</span> <span class="token string">\'get\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>and<span class="token punctuation">.</span><span class="token function">returnValue</span><span class="token punctuation">(</span>mockNavigator<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    component<span class="token punctuation">.</span><span class="token function">saveFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// verify that method has been called :)</span>\n    <span class="token function">expect</span><span class="token punctuation">(</span>mockNavigator<span class="token punctuation">.</span>msSaveOrOpenBlob<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveBeenCalled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'should execute "saveFile" as expected on browsers other than IE\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>\n    <span class="token comment">// spy on console.log()</span>\n    <span class="token function">spyOn</span><span class="token punctuation">(</span><span class="token builtin">console</span><span class="token punctuation">,</span> <span class="token string">\'log\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// create a mock navigator</span>\n    <span class="token keyword">const</span> mockNavigator <span class="token operator">=</span> jasmine<span class="token punctuation">.</span><span class="token function">createSpyObj</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">\'\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// here we use the mockNavigator to simulate behavior</span>\n    <span class="token function">spyOnProperty</span><span class="token punctuation">(</span>window<span class="token punctuation">,</span> <span class="token string">\'navigator\'</span><span class="token punctuation">,</span> <span class="token string">\'get\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>and<span class="token punctuation">.</span><span class="token function">returnValue</span><span class="token punctuation">(</span>mockNavigator<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    component<span class="token punctuation">.</span><span class="token function">saveFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// verify that method has been called :)</span>\n    <span class="token function">expect</span><span class="token punctuation">(</span><span class="token builtin">console</span><span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveBeenCalledWith</span><span class="token punctuation">(</span><span class="token string">\'custom handling\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code>',v(n,Bn,k),v(n,jn,k),E(jn,Cn),E(jn,An),E(An,Hn),E(jn,Tn),v(n,$n,k),v(n,Nn,k),E(Nn,Sn),v(n,Ln,k),v(n,Fn,k),E(Fn,Dn),v(n,Wn,k),v(n,_n,k),E(_n,Mn),v(n,qn,k),v(n,Un,k),E(Un,Vn),v(n,zn,k),v(n,Rn,k),E(Rn,Jn),E(Rn,Gn),E(Gn,Kn),E(Rn,Qn),E(Rn,Xn),E(Xn,Yn)},p:O,d(n){n&&y(s),n&&y(t),n&&y(o),n&&y(c),n&&y(u),n&&y(l),n&&y(r),n&&y(P),n&&y(x),n&&y(A),n&&y(H),n&&y(L),n&&y(F),n&&y(U),n&&y(V),n&&y(Y),n&&y(Z),n&&y(nn),n&&y(sn),n&&y(tn),n&&y(on),n&&y(en),n&&y(cn),n&&y(ln),n&&y(rn),n&&y(dn),n&&y(wn),n&&y(En),n&&y(On),n&&y(xn),n&&y(In),n&&y(Bn),n&&y(jn),n&&y($n),n&&y(Nn),n&&y(Ln),n&&y(Fn),n&&y(Wn),n&&y(_n),n&&y(qn),n&&y(Un),n&&y(zn),n&&y(Rn)}}}function I(n){let s,a;const k=[B];let h={$$slots:{default:[x]},$$scope:{ctx:n}};for(let o=0;o<k.length;o+=1)h=t(h,k[o]);return s=new P({props:h}),{c(){o(s.$$.fragment)},l(n){p(s.$$.fragment,n)},m(n,t){e(s,n,t),a=!0},p(n,[a]){const t=0&a?c(k,[r(B)]):{};1&a&&(t.$$scope={dirty:a,ctx:n}),s.$set(t)},i(n){a||(u(s.$$.fragment,n),a=!0)},o(n){i(s.$$.fragment,n),a=!1},d(n){l(s,n)}}}const B={author:"achimoraites",date:"Fri May 08 2020 00:00:00 GMT+0300",excerpt:"When testing our apps there are times when we need to control things that are beyond our control, like the window object",image:"https://images.pexels.com/photos/5726788/pexels-photo-5726788.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=255&w=400",tags:["angular","javascript","typescript","testing"],slug:"advanced-angular-testing-using-jasmine",subtitle:"Improve the scalabillity of your Angular project by using inheritance!",title:"Angular Testing with Jasmine",url:"https://achimoraites.github.io/blog/advanced-angular-testing-using-jasmine"},j=!0;export default class extends n{constructor(n){super(),s(this,n,null,I,a,{})}}export{B as metadata,j as prerender};
