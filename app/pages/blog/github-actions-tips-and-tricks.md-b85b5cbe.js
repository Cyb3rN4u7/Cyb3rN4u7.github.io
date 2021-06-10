import{S as a,i as e,s as n,A as s,j as t,m as o,o as r,p as c,v as i,r as p,w as l,q as u,e as h,t as g,k as f,c as k,a as m,g as y,d,n as v,b as E,f as b,D as w,E as T}from"../../chunks/vendor-1ec63ec4.js";import{B as P}from"../../chunks/blog-post-layout-7879c791.js";import"../../chunks/OpenGraph-09d9fd23.js";import"../../chunks/Tags-fbac4788.js";function O(a){let e,n,s,t,o,r,c,i,p,l,u,P,O,L,A,H,N,I,G,S,C,$,K,x,_,R,j,M,U,D,B,F,W,q,Q,J,z,V,X,Y,Z,aa,ea,na,sa,ta,oa,ra,ca,ia,pa,la,ua,ha,ga,fa,ka,ma,ya,da,va,Ea,ba,wa,Ta,Pa,Oa,La,Aa,Ha,Na,Ia,Ga,Sa,Ca,$a,Ka,xa,_a,Ra,ja,Ma,Ua,Da,Ba,Fa,Wa,qa,Qa,Ja,za,Va,Xa,Ya,Za,ae,ee,ne,se,te,oe,re,ce,ie,pe,le,ue,he,ge,fe,ke,me,ye,de,ve,Ee,be,we,Te,Pe,Oe,Le,Ae,He,Ne,Ie,Ge,Se,Ce,$e,Ke,xe,_e,Re,je,Me,Ue,De,Be,Fe,We,qe,Qe,Je,ze,Ve,Xe,Ye,Ze,an,en,nn,sn,tn,on,rn,cn,pn,ln,un,hn,gn,fn,kn,mn,yn,dn,vn,En,bn,wn,Tn,Pn,On,Ln,An,Hn,Nn,In,Gn,Sn,Cn;return{c(){e=h("p"),n=g("Here there are some cool tricks you can do to improve your Github Actions."),s=f(),t=h("h2"),o=g("Caching your packages"),r=f(),c=h("p"),i=g("How many times you have re-installed all of your packages in your actions even when no packages were changed?\nThis is not only time consuming but it can actually cost you more money as "),p=h("strong"),l=g("Github actions"),u=g(" are charged based on the time they actually run;\nyou can "),P=h("a"),O=g("have a look here"),L=g(" in case you are interested 😉"),A=f(),H=h("h3"),N=g("How"),I=f(),G=h("p"),S=g("To cache our modules we will use the "),C=h("a"),$=h("code"),K=g("actions/cache@v2"),x=g(" action"),_=f(),R=h("p"),j=g("Here is an example of caching npm dependencies for Linux/MacOS"),M=f(),U=h("pre"),D=f(),B=h("p"),F=h("strong"),W=h("a"),q=g("Here you can see it in a Github Action used for deploying this blog to gh-pages"),Q=g(" 🚀"),J=f(),z=h("h2"),V=g("Create strings based on env variables"),X=f(),Y=h("p"),Z=g("There are times where you need to be able to create a string based on env variables.\nThe most common case is when you want to create a path using one or more env variables;"),aa=f(),ea=h("h3"),na=g("How"),sa=f(),ta=h("pre"),oa=f(),ra=h("h2"),ca=g("Use a custom npm config"),ia=f(),pa=h("p"),la=g("This is very handly when you are working with private packages 📦"),ua=f(),ha=h("p"),ga=g("The idea is to store your PAT TOKEN for accessing your packages in your repository secrets and then use it on a custom npm config file."),fa=f(),ka=h("blockquote"),ma=h("p"),ya=g("📝Note that we can just use the default "),da=h("code"),va=g(".npmrc"),Ea=g(" but it is a good idea to keep the npm config for your github actions separated."),ba=f(),wa=h("h3"),Ta=g("How"),Pa=f(),Oa=h("p"),La=g("In order for it to work we need to:"),Aa=f(),Ha=h("ol"),Na=h("li"),Ia=g("Create an npm config file 🦄"),Ga=h("ul"),Sa=h("li"),Ca=g("includes the configuration for our private github packages"),$a=f(),Ka=h("li"),xa=g("we will take the PAT TOKEN from an env variable"),_a=f(),Ra=h("li"),ja=g("we can name it anything that we want"),Ma=f(),Ua=h("li"),Da=g("place it in the project root folder"),Ba=f(),Fa=h("li"),Wa=g("set our action to use our npm config file ✨"),qa=f(),Qa=h("li"),Ja=g("Generate a PAT TOKEN"),za=f(),Va=h("li"),Xa=g("Place the PAT TOKEN in our repository secrets"),Ya=f(),Za=h("p"),ae=g("Lets have a look at a case where we are using private github packages"),ee=f(),ne=h("ol"),se=h("li"),te=h("strong"),oe=g("Create the npm config file"),re=f(),ce=h("p"),ie=g("Create a file named "),pe=h("code"),le=g(".ci.npmrc"),ue=g(" in the root folder of your project and place the following contents:"),he=f(),ge=h("pre"),fe=f(),ke=h("blockquote"),me=h("p"),ye=g("💡 Remember to replace “@your-scope” with your scope"),de=f(),ve=h("ol"),Ee=h("li"),be=h("strong"),we=g("Set the action to use our custom npm config file"),Te=f(),Pe=h("pre"),Oe=f(),Le=h("ol"),Ae=h("li"),He=g("Create your PAT TOKEN\nFollow the "),Ne=h("a"),Ie=g("instructions here"),Ge=g("\nWhen you are on the step 7 permissions and scopes:"),Se=f(),Ce=h("ul"),$e=h("li"),Ke=g("make sure to select the “write:packages” option!"),xe=f(),_e=h("li"),Re=g("the “read:packages” is enabled as well\n"),je=h("img"),Ue=f(),De=h("li"),Be=g("Continue to the next steps and keep your PAT TOKEN ready!"),Fe=f(),We=h("ol"),qe=h("li"),Qe=h("strong"),Je=g("Place the PAT TOKEN to your repo secrets"),ze=g("\nGo to your repository on github:"),Ve=h("ol"),Xe=h("li"),Ye=g("Click on “⚙️settings” tab"),Ze=f(),an=h("li"),en=g("Select “Secrets”"),nn=f(),sn=h("li"),tn=g("Click on “New repository secret”"),on=f(),rn=h("li"),cn=g("Set the “name” to be ”"),pn=h("strong"),ln=g("PAT_TOKEN"),un=g("”"),hn=f(),gn=h("li"),fn=g("Paste your token in the “value”"),kn=f(),mn=h("li"),yn=g("Select “Add secret”"),dn=f(),vn=h("p"),En=h("img"),wn=f(),Tn=h("h3"),Pn=g("Summary 👨🏻‍💻"),On=f(),Ln=h("p"),An=g("We have explored ways to improve the performance of our github actions using caching."),Hn=f(),Nn=h("p"),In=g("Then we explored how we can create strings dynamically from env variables and finnaly we had a look in configuring our npm config for using private github packages in a secure and scalable way 😉."),Gn=f(),Sn=h("p"),Cn=g("Happy coding 😄 !!!"),this.h()},l(a){e=k(a,"P",{});var h=m(e);n=y(h,"Here there are some cool tricks you can do to improve your Github Actions."),h.forEach(d),s=v(a),t=k(a,"H2",{});var g=m(t);o=y(g,"Caching your packages"),g.forEach(d),r=v(a),c=k(a,"P",{});var f=m(c);i=y(f,"How many times you have re-installed all of your packages in your actions even when no packages were changed?\nThis is not only time consuming but it can actually cost you more money as "),p=k(f,"STRONG",{});var E=m(p);l=y(E,"Github actions"),E.forEach(d),u=y(f," are charged based on the time they actually run;\nyou can "),P=k(f,"A",{href:!0,rel:!0});var b=m(P);O=y(b,"have a look here"),b.forEach(d),L=y(f," in case you are interested 😉"),f.forEach(d),A=v(a),H=k(a,"H3",{});var w=m(H);N=y(w,"How"),w.forEach(d),I=v(a),G=k(a,"P",{});var T=m(G);S=y(T,"To cache our modules we will use the "),C=k(T,"A",{href:!0,rel:!0});var Me=m(C);$=k(Me,"CODE",{});var bn=m($);K=y(bn,"actions/cache@v2"),bn.forEach(d),Me.forEach(d),x=y(T," action"),T.forEach(d),_=v(a),R=k(a,"P",{});var $n=m(R);j=y($n,"Here is an example of caching npm dependencies for Linux/MacOS"),$n.forEach(d),M=v(a),U=k(a,"PRE",{class:!0}),m(U).forEach(d),D=v(a),B=k(a,"P",{});var Kn=m(B);F=k(Kn,"STRONG",{});var xn=m(F);W=k(xn,"A",{href:!0,rel:!0});var _n=m(W);q=y(_n,"Here you can see it in a Github Action used for deploying this blog to gh-pages"),_n.forEach(d),xn.forEach(d),Q=y(Kn," 🚀"),Kn.forEach(d),J=v(a),z=k(a,"H2",{});var Rn=m(z);V=y(Rn,"Create strings based on env variables"),Rn.forEach(d),X=v(a),Y=k(a,"P",{});var jn=m(Y);Z=y(jn,"There are times where you need to be able to create a string based on env variables.\nThe most common case is when you want to create a path using one or more env variables;"),jn.forEach(d),aa=v(a),ea=k(a,"H3",{});var Mn=m(ea);na=y(Mn,"How"),Mn.forEach(d),sa=v(a),ta=k(a,"PRE",{class:!0}),m(ta).forEach(d),oa=v(a),ra=k(a,"H2",{});var Un=m(ra);ca=y(Un,"Use a custom npm config"),Un.forEach(d),ia=v(a),pa=k(a,"P",{});var Dn=m(pa);la=y(Dn,"This is very handly when you are working with private packages 📦"),Dn.forEach(d),ua=v(a),ha=k(a,"P",{});var Bn=m(ha);ga=y(Bn,"The idea is to store your PAT TOKEN for accessing your packages in your repository secrets and then use it on a custom npm config file."),Bn.forEach(d),fa=v(a),ka=k(a,"BLOCKQUOTE",{});var Fn=m(ka);ma=k(Fn,"P",{});var Wn=m(ma);ya=y(Wn,"📝Note that we can just use the default "),da=k(Wn,"CODE",{});var qn=m(da);va=y(qn,".npmrc"),qn.forEach(d),Ea=y(Wn," but it is a good idea to keep the npm config for your github actions separated."),Wn.forEach(d),Fn.forEach(d),ba=v(a),wa=k(a,"H3",{});var Qn=m(wa);Ta=y(Qn,"How"),Qn.forEach(d),Pa=v(a),Oa=k(a,"P",{});var Jn=m(Oa);La=y(Jn,"In order for it to work we need to:"),Jn.forEach(d),Aa=v(a),Ha=k(a,"OL",{});var zn=m(Ha);Na=k(zn,"LI",{});var Vn=m(Na);Ia=y(Vn,"Create an npm config file 🦄"),Ga=k(Vn,"UL",{});var Xn=m(Ga);Sa=k(Xn,"LI",{});var Yn=m(Sa);Ca=y(Yn,"includes the configuration for our private github packages"),Yn.forEach(d),$a=v(Xn),Ka=k(Xn,"LI",{});var Zn=m(Ka);xa=y(Zn,"we will take the PAT TOKEN from an env variable"),Zn.forEach(d),_a=v(Xn),Ra=k(Xn,"LI",{});var as=m(Ra);ja=y(as,"we can name it anything that we want"),as.forEach(d),Ma=v(Xn),Ua=k(Xn,"LI",{});var es=m(Ua);Da=y(es,"place it in the project root folder"),es.forEach(d),Xn.forEach(d),Vn.forEach(d),Ba=v(zn),Fa=k(zn,"LI",{});var ns=m(Fa);Wa=y(ns,"set our action to use our npm config file ✨"),ns.forEach(d),qa=v(zn),Qa=k(zn,"LI",{});var ss=m(Qa);Ja=y(ss,"Generate a PAT TOKEN"),ss.forEach(d),za=v(zn),Va=k(zn,"LI",{});var ts=m(Va);Xa=y(ts,"Place the PAT TOKEN in our repository secrets"),ts.forEach(d),zn.forEach(d),Ya=v(a),Za=k(a,"P",{});var os=m(Za);ae=y(os,"Lets have a look at a case where we are using private github packages"),os.forEach(d),ee=v(a),ne=k(a,"OL",{});var rs=m(ne);se=k(rs,"LI",{});var cs=m(se);te=k(cs,"STRONG",{});var is=m(te);oe=y(is,"Create the npm config file"),is.forEach(d),cs.forEach(d),rs.forEach(d),re=v(a),ce=k(a,"P",{});var ps=m(ce);ie=y(ps,"Create a file named "),pe=k(ps,"CODE",{});var ls=m(pe);le=y(ls,".ci.npmrc"),ls.forEach(d),ue=y(ps," in the root folder of your project and place the following contents:"),ps.forEach(d),he=v(a),ge=k(a,"PRE",{class:!0}),m(ge).forEach(d),fe=v(a),ke=k(a,"BLOCKQUOTE",{});var us=m(ke);me=k(us,"P",{});var hs=m(me);ye=y(hs,"💡 Remember to replace “@your-scope” with your scope"),hs.forEach(d),us.forEach(d),de=v(a),ve=k(a,"OL",{start:!0});var gs=m(ve);Ee=k(gs,"LI",{});var fs=m(Ee);be=k(fs,"STRONG",{});var ks=m(be);we=y(ks,"Set the action to use our custom npm config file"),ks.forEach(d),fs.forEach(d),gs.forEach(d),Te=v(a),Pe=k(a,"PRE",{class:!0}),m(Pe).forEach(d),Oe=v(a),Le=k(a,"OL",{start:!0});var ms=m(Le);Ae=k(ms,"LI",{});var ys=m(Ae);He=y(ys,"Create your PAT TOKEN\nFollow the "),Ne=k(ys,"A",{href:!0,rel:!0});var ds=m(Ne);Ie=y(ds,"instructions here"),ds.forEach(d),Ge=y(ys,"\nWhen you are on the step 7 permissions and scopes:"),ys.forEach(d),ms.forEach(d),Se=v(a),Ce=k(a,"UL",{});var vs=m(Ce);$e=k(vs,"LI",{});var Es=m($e);Ke=y(Es,"make sure to select the “write:packages” option!"),Es.forEach(d),xe=v(vs),_e=k(vs,"LI",{});var bs=m(_e);Re=y(bs,"the “read:packages” is enabled as well\n"),je=k(bs,"IMG",{src:!0,alt:!0}),bs.forEach(d),Ue=v(vs),De=k(vs,"LI",{});var ws=m(De);Be=y(ws,"Continue to the next steps and keep your PAT TOKEN ready!"),ws.forEach(d),vs.forEach(d),Fe=v(a),We=k(a,"OL",{start:!0});var Ts=m(We);qe=k(Ts,"LI",{});var Ps=m(qe);Qe=k(Ps,"STRONG",{});var Os=m(Qe);Je=y(Os,"Place the PAT TOKEN to your repo secrets"),Os.forEach(d),ze=y(Ps,"\nGo to your repository on github:"),Ve=k(Ps,"OL",{});var Ls=m(Ve);Xe=k(Ls,"LI",{});var As=m(Xe);Ye=y(As,"Click on “⚙️settings” tab"),As.forEach(d),Ze=v(Ls),an=k(Ls,"LI",{});var Hs=m(an);en=y(Hs,"Select “Secrets”"),Hs.forEach(d),nn=v(Ls),sn=k(Ls,"LI",{});var Ns=m(sn);tn=y(Ns,"Click on “New repository secret”"),Ns.forEach(d),on=v(Ls),rn=k(Ls,"LI",{});var Is=m(rn);cn=y(Is,"Set the “name” to be ”"),pn=k(Is,"STRONG",{});var Gs=m(pn);ln=y(Gs,"PAT_TOKEN"),Gs.forEach(d),un=y(Is,"”"),Is.forEach(d),hn=v(Ls),gn=k(Ls,"LI",{});var Ss=m(gn);fn=y(Ss,"Paste your token in the “value”"),Ss.forEach(d),kn=v(Ls),mn=k(Ls,"LI",{});var Cs=m(mn);yn=y(Cs,"Select “Add secret”"),Cs.forEach(d),Ls.forEach(d),Ps.forEach(d),Ts.forEach(d),dn=v(a),vn=k(a,"P",{});var $s=m(vn);En=k($s,"IMG",{src:!0,alt:!0}),$s.forEach(d),wn=v(a),Tn=k(a,"H3",{});var Ks=m(Tn);Pn=y(Ks,"Summary 👨🏻‍💻"),Ks.forEach(d),On=v(a),Ln=k(a,"P",{});var xs=m(Ln);An=y(xs,"We have explored ways to improve the performance of our github actions using caching."),xs.forEach(d),Hn=v(a),Nn=k(a,"P",{});var _s=m(Nn);In=y(_s,"Then we explored how we can create strings dynamically from env variables and finnaly we had a look in configuring our npm config for using private github packages in a secure and scalable way 😉."),_s.forEach(d),Gn=v(a),Sn=k(a,"P",{});var Rs=m(Sn);Cn=y(Rs,"Happy coding 😄 !!!"),Rs.forEach(d),this.h()},h(){E(P,"href","https://github.com/pricing"),E(P,"rel","nofollow"),E(C,"href","https://github.com/actions/cache"),E(C,"rel","nofollow"),E(U,"class","language-yaml"),E(W,"href","https://github.com/achimoraites/achimoraites.github.io/blob/master/.github/workflows/deploy-gh.yaml#L24-L31"),E(W,"rel","nofollow"),E(ta,"class","language-yaml"),E(ge,"class","language-undefined"),E(ve,"start","2"),E(Pe,"class","language-yaml"),E(Ne,"href","https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token"),E(Ne,"rel","nofollow"),E(Le,"start","3"),je.src!==(Me="/images/blog/github-actions-tips-and-tricks/pat-creation.webp")&&E(je,"src","/images/blog/github-actions-tips-and-tricks/pat-creation.webp"),E(je,"alt","Github pat scopes"),E(We,"start","4"),En.src!==(bn="/images/blog/github-actions-tips-and-tricks/add-repo-secret.webp")&&E(En,"src","/images/blog/github-actions-tips-and-tricks/add-repo-secret.webp"),E(En,"alt","Github add secret")},m(a,h){b(a,e,h),w(e,n),b(a,s,h),b(a,t,h),w(t,o),b(a,r,h),b(a,c,h),w(c,i),w(c,p),w(p,l),w(c,u),w(c,P),w(P,O),w(c,L),b(a,A,h),b(a,H,h),w(H,N),b(a,I,h),b(a,G,h),w(G,S),w(G,C),w(C,$),w($,K),w(G,x),b(a,_,h),b(a,R,h),w(R,j),b(a,M,h),b(a,U,h),U.innerHTML='<code class="language-yaml"><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Cache node_modules 📦\n  <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/cache@v2\n  <span class="token key atrule">with</span><span class="token punctuation">:</span>\n    <span class="token key atrule">path</span><span class="token punctuation">:</span> ~/.npm\n    <span class="token key atrule">key</span><span class="token punctuation">:</span> $<span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> runner.os <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span><span class="token punctuation">-</span>node<span class="token punctuation">-</span>$<span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> hashFiles(\'<span class="token important">**/package-lock.json\')</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span>\n    <span class="token key atrule">restore-keys</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">\n      $&#123;&#123; runner.os &#125;&#125;-node-</span></code>',b(a,D,h),b(a,B,h),w(B,F),w(F,W),w(W,q),w(B,Q),b(a,J,h),b(a,z,h),w(z,V),b(a,X,h),b(a,Y,h),w(Y,Z),b(a,aa,h),b(a,ea,h),w(ea,na),b(a,sa,h),b(a,ta,h),ta.innerHTML='<code class="language-yaml"><span class="token key atrule">name</span><span class="token punctuation">:</span> paths<span class="token punctuation">-</span>printer 🦄\n\n<span class="token key atrule">env</span><span class="token punctuation">:</span>\n  <span class="token key atrule">BASE_URL</span><span class="token punctuation">:</span> <span class="token string">"https://example.com/"</span>\n<span class="token key atrule">jobs</span><span class="token punctuation">:</span>\n  <span class="token key atrule">print-stuff</span><span class="token punctuation">:</span>\n    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest\n    <span class="token key atrule">steps</span><span class="token punctuation">:</span>\n\t  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Create paths from env variables\n\t    <span class="token comment"># this outputs "IMAGES_PATH: https://example.com/assets/img/"</span>\n\t    <span class="token key atrule">run</span><span class="token punctuation">:</span>  <span class="token key atrule">echo  "IMAGES_PATH</span><span class="token punctuation">:</span> $<span class="token punctuation">&#123;</span>env.IMAGES_PATH<span class="token punctuation">&#125;</span>"\n\t    <span class="token key atrule">env</span><span class="token punctuation">:</span>\n\t      <span class="token key atrule">IMAGES_PATH</span><span class="token punctuation">:</span> <span class="token string">"$&#123;&#123; env.BASE_URL &#125;&#125;assets/img/"</span></code>',b(a,oa,h),b(a,ra,h),w(ra,ca),b(a,ia,h),b(a,pa,h),w(pa,la),b(a,ua,h),b(a,ha,h),w(ha,ga),b(a,fa,h),b(a,ka,h),w(ka,ma),w(ma,ya),w(ma,da),w(da,va),w(ma,Ea),b(a,ba,h),b(a,wa,h),w(wa,Ta),b(a,Pa,h),b(a,Oa,h),w(Oa,La),b(a,Aa,h),b(a,Ha,h),w(Ha,Na),w(Na,Ia),w(Na,Ga),w(Ga,Sa),w(Sa,Ca),w(Ga,$a),w(Ga,Ka),w(Ka,xa),w(Ga,_a),w(Ga,Ra),w(Ra,ja),w(Ga,Ma),w(Ga,Ua),w(Ua,Da),w(Ha,Ba),w(Ha,Fa),w(Fa,Wa),w(Ha,qa),w(Ha,Qa),w(Qa,Ja),w(Ha,za),w(Ha,Va),w(Va,Xa),b(a,Ya,h),b(a,Za,h),w(Za,ae),b(a,ee,h),b(a,ne,h),w(ne,se),w(se,te),w(te,oe),b(a,re,h),b(a,ce,h),w(ce,ie),w(ce,pe),w(pe,le),w(ce,ue),b(a,he,h),b(a,ge,h),ge.innerHTML='<code class="language-undefined">@your-scope:registry=https://npm.pkg.github.com\n//npm.pkg.github.com/:_authToken=$&#123;NODE_AUTH_TOKEN&#125;</code>',b(a,fe,h),b(a,ke,h),w(ke,me),w(me,ye),b(a,de,h),b(a,ve,h),w(ve,Ee),w(Ee,be),w(be,we),b(a,Te,h),b(a,Pe,h),Pe.innerHTML='<code class="language-yaml"><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install dependencies ✨\n  <span class="token key atrule">run</span><span class="token punctuation">:</span> npm ci\n  <span class="token key atrule">env</span><span class="token punctuation">:</span>\n    <span class="token key atrule">NPM_CONFIG_USERCONFIG</span><span class="token punctuation">:</span> .ci.npmrc\n    <span class="token key atrule">NODE_AUTH_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> secrets.PAT_TOKEN <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></code>',b(a,Oe,h),b(a,Le,h),w(Le,Ae),w(Ae,He),w(Ae,Ne),w(Ne,Ie),w(Ae,Ge),b(a,Se,h),b(a,Ce,h),w(Ce,$e),w($e,Ke),w(Ce,xe),w(Ce,_e),w(_e,Re),w(_e,je),w(Ce,Ue),w(Ce,De),w(De,Be),b(a,Fe,h),b(a,We,h),w(We,qe),w(qe,Qe),w(Qe,Je),w(qe,ze),w(qe,Ve),w(Ve,Xe),w(Xe,Ye),w(Ve,Ze),w(Ve,an),w(an,en),w(Ve,nn),w(Ve,sn),w(sn,tn),w(Ve,on),w(Ve,rn),w(rn,cn),w(rn,pn),w(pn,ln),w(rn,un),w(Ve,hn),w(Ve,gn),w(gn,fn),w(Ve,kn),w(Ve,mn),w(mn,yn),b(a,dn,h),b(a,vn,h),w(vn,En),b(a,wn,h),b(a,Tn,h),w(Tn,Pn),b(a,On,h),b(a,Ln,h),w(Ln,An),b(a,Hn,h),b(a,Nn,h),w(Nn,In),b(a,Gn,h),b(a,Sn,h),w(Sn,Cn)},p:T,d(a){a&&d(e),a&&d(s),a&&d(t),a&&d(r),a&&d(c),a&&d(A),a&&d(H),a&&d(I),a&&d(G),a&&d(_),a&&d(R),a&&d(M),a&&d(U),a&&d(D),a&&d(B),a&&d(J),a&&d(z),a&&d(X),a&&d(Y),a&&d(aa),a&&d(ea),a&&d(sa),a&&d(ta),a&&d(oa),a&&d(ra),a&&d(ia),a&&d(pa),a&&d(ua),a&&d(ha),a&&d(fa),a&&d(ka),a&&d(ba),a&&d(wa),a&&d(Pa),a&&d(Oa),a&&d(Aa),a&&d(Ha),a&&d(Ya),a&&d(Za),a&&d(ee),a&&d(ne),a&&d(re),a&&d(ce),a&&d(he),a&&d(ge),a&&d(fe),a&&d(ke),a&&d(de),a&&d(ve),a&&d(Te),a&&d(Pe),a&&d(Oe),a&&d(Le),a&&d(Se),a&&d(Ce),a&&d(Fe),a&&d(We),a&&d(dn),a&&d(vn),a&&d(wn),a&&d(Tn),a&&d(On),a&&d(Ln),a&&d(Hn),a&&d(Nn),a&&d(Gn),a&&d(Sn)}}}function L(a){let e,n;const h=[A];let g={$$slots:{default:[O]},$$scope:{ctx:a}};for(let t=0;t<h.length;t+=1)g=s(g,h[t]);return e=new P({props:g}),{c(){t(e.$$.fragment)},l(a){o(e.$$.fragment,a)},m(a,s){r(e,a,s),n=!0},p(a,[n]){const s=0&n?c(h,[u(A)]):{};1&n&&(s.$$scope={dirty:n,ctx:a}),e.$set(s)},i(a){n||(i(e.$$.fragment,a),n=!0)},o(a){p(e.$$.fragment,a),n=!1},d(a){l(e,a)}}}const A={author:"achimoraites",date:"Tue Jun 08 2021 21:57:00 GMT+0200",excerpt:"Here there are some cool tricks you can do to improve your Github Actions",image:"https://images.pexels.com/photos/1181287/pexels-photo-1181287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=225&w=400",tags:["ci","productivity"],slug:"github-actions-tips-and-tricks",title:"Github actions tweaks",url:"https://achimoraites.github.io/blog/github-actions-tips-and-tricks"},H=!0;export default class extends a{constructor(a){super(),e(this,a,null,L,n,{})}}export{A as metadata,H as prerender};
