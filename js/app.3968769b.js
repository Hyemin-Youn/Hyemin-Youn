(function(){"use strict";var e={5169:function(e,t,i){var o=i(3751),s=i(641);const r={id:"app"};function a(e,t,i,o,a,n){const l=(0,s.g2)("router-view");return(0,s.uX)(),(0,s.CE)("div",r,[(0,s.bF)(l)])}var n=i(33);const l={class:"banner-content"},v={class:"banner-title"},c={class:"banner-description"},d={class:"banner-buttons"};function u(e,t,i,o,r,a){return(0,s.uX)(),(0,s.CE)("div",{class:"banner",style:(0,n.Tr)({backgroundImage:`url(${a.bannerImage})`})},[(0,s.Lk)("div",l,[(0,s.Lk)("h1",v,(0,n.v_)(i.heroMovie.title),1),(0,s.Lk)("p",c,(0,n.v_)(i.heroMovie.overview||"영화에 대한 설명이 없습니다."),1),(0,s.Lk)("div",d,[(0,s.Lk)("button",{class:"banner-button play",onClick:t[0]||(t[0]=(...e)=>a.playMovie&&a.playMovie(...e))}," 재생 "),(0,s.Lk)("button",{class:"banner-button info",onClick:t[1]||(t[1]=(...e)=>a.showDetails&&a.showDetails(...e))}," 상세 정보 ")])]),t[2]||(t[2]=(0,s.Lk)("div",{class:"banner-fade"},null,-1))],4)}i(4114);var h={name:"Banner",props:{heroMovie:{type:Object,required:!0}},computed:{bannerImage(){return this.heroMovie.backdrop_path?`https://image.tmdb.org/t/p/original${this.heroMovie.backdrop_path}`:""}},methods:{playMovie(){console.log("Play movie:",this.heroMovie.title)},showDetails(){this.heroMovie.id?this.$router.push(`/movie/${this.heroMovie.id}`):console.error("Movie ID is not available")}}},g=i(6262);const A=(0,g.A)(h,[["render",u],["__scopeId","data-v-216c46c0"]]);var m=A;const p={class:"home"},D={key:0,class:"loading-overlay"},N={key:1};function k(e,t,i,o,r,a){const l=(0,s.g2)("navbar"),v=(0,s.g2)("Banner"),c=(0,s.g2)("SliderContent");return(0,s.uX)(),(0,s.CE)("div",null,[(0,s.bF)(l),(0,s.Lk)("div",p,[r.isLoading?((0,s.uX)(),(0,s.CE)("div",D,t[0]||(t[0]=[(0,s.Lk)("p",null,"로딩중 ...",-1)]))):((0,s.uX)(),(0,s.CE)("div",N,[(0,s.bF)(v,{heroMovie:r.heroMovie},null,8,["heroMovie"]),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(r.movieCategories,(e=>((0,s.uX)(),(0,s.CE)("div",{key:e.name,class:"movie-category"},[(0,s.Lk)("h3",null,(0,n.v_)(e.title),1),(0,s.bF)(c,{movies:e.movies},null,8,["movies"])])))),128))]))])])}i(1454);var R=i(4335),w="data:image/png;base64,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",b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAJQSURBVFiFxdfJjw1RFAbwXzdaaEQT87ATU4wxLMTGuhNtRf8BSMTG9C+IhcSGJQs7IYi9xDyFBdJIRAgRM4khHTE8i3vKe6T1q1dVHV9yclO3zne+U/dWnXuK1rEah3Afn8Pu4SBWFYiXG104jlqDvQnLrn/iGMZXLT4ND0LkMTZjYsP9iTH3JHweYGpV4iNwLQKfROcgvp04Fb5Xg1sa2yPgBXTk8O/ApeBsKyveJi3rDyxsgbcoOI/LJrBUepLzBbgXg7t4MKf2JkHmxXilQAKXY5xfJoGuGD8USOB9jBPKJPA2xskFEpgS4+sC3N+YK+3jzQLcW8GdUyYB6ItAa1rgrA3O3bLi0BvB+jAuh/846WyoYWMVCbThjHp1mz6I7wz1qnk6uJVgrFQJa/iIvViBMWErY+5T+JwLTqXowD70+/NEbLT+SCT3GVBkiWZKe7sOs2PuKc5KR/HzAjH/H1pdgXapKE3BpL/uvcGrsFr51OpoQzeO4p1/739m78K3W44HbOawFvvVe71+3MZL9VYsi5OtzBKMivnr2C31By1jF76HyBWsx+gcvNHokWpGLWLsbFX8gPo3v6lVcgN6I0YtYubC1iC80OQsz4kF0pbVsCWP81epoi2rQDzDcun/4at6kzMgso52R4XiGfZE7BP/clgo/Vg8xPAhSGAEHoXGgmyysSPaIH1Oh6U3t2p8w5HQ6BnI4bK0RHOHQDzD/NC4ONDN19KL0qxPLINh+CJ9FahXwuHSG/oDz4YwAZgViYzUsNXtuKN5na/KboSmX8iAsy1IrQKsAAAAAElFTkSuQmCC";const f={class:"navbar"},M={class:"navbar-left"},E={class:"nav-links"},L={class:"navbar-right"};function I(e,t,i,o,r,a){const n=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("nav",f,[(0,s.Lk)("div",M,[(0,s.bF)(n,{to:"/home"},{default:(0,s.k6)((()=>t[1]||(t[1]=[(0,s.Lk)("img",{src:w,alt:"Logo",class:"logo"},null,-1)]))),_:1}),(0,s.Lk)("ul",E,[(0,s.Lk)("li",null,[(0,s.bF)(n,{to:"/home"},{default:(0,s.k6)((()=>t[2]||(t[2]=[(0,s.eW)("홈")]))),_:1})]),(0,s.Lk)("li",null,[(0,s.bF)(n,{to:"/popular"},{default:(0,s.k6)((()=>t[3]||(t[3]=[(0,s.eW)("대세 콘텐츠")]))),_:1})]),(0,s.Lk)("li",null,[(0,s.bF)(n,{to:"/search"},{default:(0,s.k6)((()=>t[4]||(t[4]=[(0,s.eW)("찾아보기")]))),_:1})]),(0,s.Lk)("li",null,[(0,s.bF)(n,{to:"/wishlist"},{default:(0,s.k6)((()=>t[5]||(t[5]=[(0,s.eW)("내가 찜한 리스트")]))),_:1})])])]),(0,s.Lk)("div",L,[(0,s.Lk)("img",{src:b,alt:"Profile",class:"profile-icon",onClick:t[0]||(t[0]=(...e)=>a.logout&&a.logout(...e))})])])}var C={name:"Navbar",methods:{logout(){localStorage.removeItem("user"),this.$store&&this.$store.dispatch("logout"),this.$router.push("/signin")}}};const y=(0,g.A)(C,[["render",I],["__scopeId","data-v-4e4d3f0e"]]);var S=y;const B={class:"slider-wrapper"},P={class:"poster-list"},Q=["onMouseenter","onMouseleave","onClick"],H={class:"info"};function J(e,t,i,o,r,a){const l=(0,s.g2)("font-awesome-icon");return(0,s.uX)(),(0,s.CE)("div",B,[(0,s.Lk)("button",{class:"arrow-btn left",onClick:t[0]||(t[0]=(...e)=>a.slideLeft&&a.slideLeft(...e))},[(0,s.bF)(l,{icon:["fas","angle-left"]})]),(0,s.Lk)("div",P,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(a.displayedMovies,((e,t)=>((0,s.uX)(),(0,s.CE)("div",{key:e.id,class:(0,n.C4)(["poster",{active:r.isHovered[t]}]),style:(0,n.Tr)({backgroundImage:`url(${a.makeImagePath(e.poster_path,"w500")})`}),onMouseenter:e=>a.hoverMovie(t),onMouseleave:e=>a.unhoverMovie(t),onClick:e=>a.toggleMovieHover(t)},[(0,s.Lk)("div",H,[(0,s.Lk)("h4",null,(0,n.v_)(e.title),1),(0,s.Lk)("p",null,"평점: ⭐ "+(0,n.v_)(e.vote_average),1),(0,s.Lk)("p",null,"개봉일: "+(0,n.v_)(e.release_date),1)])],46,Q)))),128))]),(0,s.Lk)("button",{class:"arrow-btn right",onClick:t[1]||(t[1]=(...e)=>a.slideRight&&a.slideRight(...e))},[(0,s.bF)(l,{icon:["fas","angle-right"]})])])}var O={props:{movies:{type:Array,required:!0}},data(){return{currentIndex:0,itemsPerPage:6,isHovered:{}}},computed:{displayedMovies(){return this.movies.slice(this.currentIndex,this.currentIndex+this.itemsPerPage)}},methods:{slideLeft(){this.currentIndex>0&&this.currentIndex--},slideRight(){this.currentIndex+this.itemsPerPage<this.movies.length&&this.currentIndex++},makeImagePath(e,t){return`https://image.tmdb.org/t/p/${t}${e}`},hoverMovie(e){this.$set(this.isHovered,e,!0)},unhoverMovie(e){this.$set(this.isHovered,e,!1)},toggleMovieHover(e){this.$set(this.isHovered,e,!this.isHovered[e])}}};const F=(0,g.A)(O,[["render",J],["__scopeId","data-v-e0581b16"]]);var T=F,U={name:"Home",components:{Banner:m,Navbar:S,SliderContent:T},data(){return{isLoading:!0,heroMovie:{},movieCategories:[{name:"popular",title:"인기 영화",movies:[]},{name:"now_playing",title:"최신 영화",movies:[]},{name:"top_rated",title:"높은 평점 영화",movies:[]},{name:"upcoming",title:"개봉 예정 영화",movies:[]}]}},created(){this.loadData()},methods:{async loadData(){try{console.log("데이터 로드 시작"),await Promise.all([this.fetchHeroMovie(),this.fetchMovies()]),console.log("데이터 로드 성공")}catch(e){console.error("Error loading data:",e)}finally{this.isLoading=!1,console.log("로딩 상태:",this.isLoading)}},async fetchHeroMovie(){const e="75b7c972001662bd9d37622e0e222947";try{const t=await R.A.get(`https://api.themoviedb.org/3/movie/popular?api_key=${e}&language=ko-KR`);console.log("Hero Movie 데이터:",t.data.results[0]),this.heroMovie=t.data.results[0]}catch(t){console.error("Hero Movie 로드 실패:",t)}},async fetchMovies(){const e="75b7c972001662bd9d37622e0e222947";try{const t=this.movieCategories.map((async t=>{const i=await R.A.get(`https://api.themoviedb.org/3/movie/${t.name}?api_key=${e}&language=ko-KR`);console.log(`${t.title} 데이터:`,i.data.results),t.movies=i.data.results}));await Promise.all(t)}catch(t){console.error("Movie Categories 로드 실패:",t)}}}};const Y=(0,g.A)(U,[["render",k],["__scopeId","data-v-effe2744"]]);var W=Y,V={components:{Banner:m,Home:W}};const G=(0,g.A)(V,[["render",a]]);var x=G,X=i(5220);const K={class:"wrapper"},z={class:"content"},Z={key:0,class:"error"},j={class:"remember-me"},_={class:"content"},q={key:0,class:"error"},$={class:"terms"},ee=["disabled"];function te(e,t,i,r,a,l){return(0,s.uX)(),(0,s.CE)("div",null,[t[23]||(t[23]=(0,s.Lk)("div",{class:"bg-image"},null,-1)),(0,s.Lk)("div",K,[(0,s.Lk)("div",{class:(0,n.C4)(["card",{active:"login"===a.activeCard,backward:"signup"===a.activeCard}])},[(0,s.Lk)("div",z,[t[16]||(t[16]=(0,s.Lk)("h2",null,"Login",-1)),(0,s.Lk)("form",{onSubmit:t[3]||(t[3]=(0,o.D$)(((...e)=>l.handleLogin&&l.handleLogin(...e)),["prevent"]))},[t[12]||(t[12]=(0,s.Lk)("label",{for:"email"},"Email",-1)),(0,s.bo)((0,s.Lk)("input",{id:"email","onUpdate:modelValue":t[0]||(t[0]=e=>a.email=e),type:"email",required:""},null,512),[[o.Jo,a.email]]),t[13]||(t[13]=(0,s.Lk)("label",{for:"password"},"Password",-1)),(0,s.bo)((0,s.Lk)("input",{id:"password","onUpdate:modelValue":t[1]||(t[1]=e=>a.password=e),type:"password",required:""},null,512),[[o.Jo,a.password]]),a.loginError?((0,s.uX)(),(0,s.CE)("p",Z,(0,n.v_)(a.loginError),1)):(0,s.Q3)("",!0),(0,s.Lk)("div",j,[(0,s.bo)((0,s.Lk)("input",{id:"rememberMe","onUpdate:modelValue":t[2]||(t[2]=e=>a.rememberMe=e),type:"checkbox"},null,512),[[o.lH,a.rememberMe]]),t[11]||(t[11]=(0,s.Lk)("label",{for:"rememberMe"},"Remember Me",-1))]),t[14]||(t[14]=(0,s.Lk)("button",{type:"submit"},"Sign In",-1))],32),(0,s.Lk)("p",{class:"switch",onClick:t[4]||(t[4]=(...e)=>l.switchToSignup&&l.switchToSignup(...e))},t[15]||(t[15]=[(0,s.eW)(" Don't have an account? "),(0,s.Lk)("b",null,"Sign up",-1)]))])],2),(0,s.Lk)("div",{class:(0,n.C4)(["card",{active:"signup"===a.activeCard,backward:"login"===a.activeCard}])},[(0,s.Lk)("div",_,[t[22]||(t[22]=(0,s.Lk)("h2",null,"Sign Up",-1)),(0,s.Lk)("form",{onSubmit:t[9]||(t[9]=(0,o.D$)(((...e)=>l.handleRegister&&l.handleRegister(...e)),["prevent"]))},[t[18]||(t[18]=(0,s.Lk)("label",{for:"newEmail"},"Email",-1)),(0,s.bo)((0,s.Lk)("input",{id:"newEmail","onUpdate:modelValue":t[5]||(t[5]=e=>a.newEmail=e),type:"email",required:""},null,512),[[o.Jo,a.newEmail]]),t[19]||(t[19]=(0,s.Lk)("label",{for:"newPassword"},"Password",-1)),(0,s.bo)((0,s.Lk)("input",{id:"newPassword","onUpdate:modelValue":t[6]||(t[6]=e=>a.newPassword=e),type:"password",required:""},null,512),[[o.Jo,a.newPassword]]),t[20]||(t[20]=(0,s.Lk)("label",{for:"confirmPassword"},"Confirm Password",-1)),(0,s.bo)((0,s.Lk)("input",{id:"confirmPassword","onUpdate:modelValue":t[7]||(t[7]=e=>a.confirmPassword=e),type:"password",required:""},null,512),[[o.Jo,a.confirmPassword]]),a.signupError?((0,s.uX)(),(0,s.CE)("p",q,(0,n.v_)(a.signupError),1)):(0,s.Q3)("",!0),(0,s.Lk)("div",$,[(0,s.bo)((0,s.Lk)("input",{id:"terms","onUpdate:modelValue":t[8]||(t[8]=e=>a.termsAccepted=e),type:"checkbox"},null,512),[[o.lH,a.termsAccepted]]),t[17]||(t[17]=(0,s.Lk)("label",{for:"terms"},[(0,s.eW)("I have read the "),(0,s.Lk)("b",null,"Terms and Conditions")],-1))]),(0,s.Lk)("button",{type:"submit",disabled:!a.termsAccepted},"Register",8,ee)],32),(0,s.Lk)("p",{class:"switch",onClick:t[10]||(t[10]=(...e)=>l.switchToLogin&&l.switchToLogin(...e))},t[21]||(t[21]=[(0,s.eW)(" Already have an account? "),(0,s.Lk)("b",null,"Sign in",-1)]))])],2)])])}i(8992),i(3949);var ie={data(){return{activeCard:"login",email:"",password:"",rememberMe:!1,loginError:"",newEmail:"",newPassword:"",confirmPassword:"",termsAccepted:!1,signupError:""}},methods:{switchToSignup(){this.activeCard="signup",this.triggerCardAnimation()},switchToLogin(){this.activeCard="login",this.triggerCardAnimation()},triggerCardAnimation(){const e=document.querySelectorAll(".card");e.forEach((e=>{e.classList.contains("active")?(e.classList.remove("active"),e.classList.add("backward")):(e.classList.remove("backward"),e.classList.add("enter"),setTimeout((()=>{e.classList.remove("enter"),e.classList.add("active")}),1e3))}))},handleLogin(){this.password.length<6?this.loginError="Password must be at least 6 characters long.":(alert("Login successful!"),this.$store.dispatch("login",{email:this.email}),"/home"!==this.$route.path&&this.$router.push("/home"))},handleRegister(){this.newPassword.length<6?this.signupError="Password must be at least 6 characters long.":this.newPassword===this.confirmPassword?(alert("Registration successful!"),this.switchToLogin()):this.signupError="Passwords do not match."}}};const oe=(0,g.A)(ie,[["render",te],["__scopeId","data-v-5fe688fa"]]);var se=oe;const re={class:"wishlist"},ae={class:"wishlist-movies"},ne={class:"movie-info"},le=["onClick"];function ve(e,t,i,o,r,a){return(0,s.uX)(),(0,s.CE)("div",re,[t[0]||(t[0]=(0,s.Lk)("h2",null,"내가 찜한 영화",-1)),(0,s.Lk)("div",ae,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(o.wishlist,(e=>((0,s.uX)(),(0,s.CE)("div",{key:e.id,class:"wishlist-movie",style:(0,n.Tr)({backgroundImage:`url(${o.makeImagePath(e.poster_path,"w500")})`})},[(0,s.Lk)("div",ne,[(0,s.Lk)("h4",null,(0,n.v_)(e.title),1),(0,s.Lk)("button",{onClick:t=>o.removeFromWishlist(e.id),class:"remove-btn"}," 삭제 ",8,le)])],4)))),128))])])}var ce=i(6278);const de=(e,t)=>`https://image.tmdb.org/t/p/${t}${e}`;var ue={setup(){const e=(0,ce.Pj)(),t=(0,s.EW)((()=>e.getters.wishlist)),i=t=>{e.dispatch("removeFromWishList",t)};return{wishlist:t,makeImagePath:de,removeFromWishlist:i}}};const he=(0,g.A)(ue,[["render",ve],["__scopeId","data-v-78eca961"]]);var ge=he;i(7550);const Ae=(0,ce.y$)({state:{user:JSON.parse(localStorage.getItem("user"))||null,isAuthenticated:!!localStorage.getItem("user"),wishlist:JSON.parse(localStorage.getItem("wishlist"))||[]},mutations:{setUser(e,t){e.user=t,e.isAuthenticated=!!t,t?localStorage.setItem("user",JSON.stringify(t)):localStorage.removeItem("user")},logout(e){e.user=null,e.isAuthenticated=!1,localStorage.removeItem("user")},TOGGLE_WISHLIST(e,t){const i=e.wishlist.findIndex((e=>e.id===t.id));-1===i?e.wishlist.push(t):e.wishlist.splice(i,1),localStorage.setItem("wishlist",JSON.stringify(e.wishlist))}},actions:{toggleWishlist({commit:e},t){e("TOGGLE_WISHLIST",t)}},getters:{wishlist:e=>e.wishlist,isInWishlist:e=>t=>e.wishlist.some((e=>e.id===t))}});var me=Ae;const pe={key:0,class:"movie-detail"},De=["src"],Ne={class:"content"};function ke(e,t,i,o,r,a){return r.movie?((0,s.uX)(),(0,s.CE)("div",pe,[(0,s.Lk)("img",{src:a.makeImagePath(r.movie.backdrop_path,"w1280"),alt:"Movie Background"},null,8,De),(0,s.Lk)("div",Ne,[(0,s.Lk)("h2",null,(0,n.v_)(r.movie.title),1),(0,s.Lk)("p",null,(0,n.v_)(r.movie.overview),1),(0,s.Lk)("p",null,"개봉일: "+(0,n.v_)(r.movie.release_date),1),(0,s.Lk)("p",null,"평점: ⭐ "+(0,n.v_)(r.movie.vote_average),1)])])):(0,s.Q3)("",!0)}var Re={data(){return{movie:null}},created(){this.fetchMovieDetail()},methods:{async fetchMovieDetail(){const e="75b7c972001662bd9d37622e0e222947",t=this.$route.params.id;try{const i=await R.A.get(`https://api.themoviedb.org/3/movie/${t}?api_key=${e}&language=ko-KR`);this.movie=i.data}catch(i){console.error("Error fetching movie details:",i)}},makeImagePath(e,t){return`https://image.tmdb.org/t/p/${t}${e}`}}};const we=(0,g.A)(Re,[["render",ke],["__scopeId","data-v-515c214e"]]);var be=we;const fe=[{path:"/signin",name:"SignIn",component:se,meta:{hideNavbar:!0}},{path:"/home",name:"Home",component:W,meta:{requiresAuth:!0}},{path:"/",redirect:"/signin"},{path:"/movies/:id",component:be},{path:"/wishlist",name:"Wishlist",component:ge},{path:"/slider",name:"SliderContent",component:T}],Me=(0,X.aE)({history:(0,X.Bt)(),routes:fe});Me.beforeEach(((e,t,i)=>{const o=me.getters.isAuthenticated;"SignIn"===e.name&&o?i("/home"):i()}));var Ee=Me,Le=i(7107),Ie=i(1273),Ce=i(6188);const ye=(0,o.Ef)(x);ye.use(Ee),ye.use(me),ye.mount("#app"),Le.Yv.add(Ce.Uec,Ce.vmR,Ce.qcK,Ce.ekB),ye.component("font-awesome-icon",Ie.gc)}},t={};function i(o){var s=t[o];if(void 0!==s)return s.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,i),r.exports}i.m=e,function(){var e=[];i.O=function(t,o,s,r){if(!o){var a=1/0;for(c=0;c<e.length;c++){o=e[c][0],s=e[c][1],r=e[c][2];for(var n=!0,l=0;l<o.length;l++)(!1&r||a>=r)&&Object.keys(i.O).every((function(e){return i.O[e](o[l])}))?o.splice(l--,1):(n=!1,r<a&&(a=r));if(n){e.splice(c--,1);var v=s();void 0!==v&&(t=v)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[o,s,r]}}(),function(){i.d=function(e,t){for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};i.O.j=function(t){return 0===e[t]};var t=function(t,o){var s,r,a=o[0],n=o[1],l=o[2],v=0;if(a.some((function(t){return 0!==e[t]}))){for(s in n)i.o(n,s)&&(i.m[s]=n[s]);if(l)var c=l(i)}for(t&&t(o);v<a.length;v++)r=a[v],i.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return i.O(c)},o=self["webpackChunknetflix_clone"]=self["webpackChunknetflix_clone"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=i.O(void 0,[504],(function(){return i(5169)}));o=i.O(o)})();
//# sourceMappingURL=app.3968769b.js.map