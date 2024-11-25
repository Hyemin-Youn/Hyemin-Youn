(function(){"use strict";var e={1134:function(e,t,i){var o=i(3751),s=i(641);const a={id:"app"};function n(e,t,i,o,n,r){const l=(0,s.g2)("Navbar"),c=(0,s.g2)("router-view");return(0,s.uX)(),(0,s.CE)("div",a,[(0,s.bF)(l),(0,s.bF)(c)])}var r=i(33);const l={class:"banner-content"},c={class:"banner-title"},v={class:"banner-description"},d={class:"banner-buttons"};function u(e,t,i,o,a,n){return(0,s.uX)(),(0,s.CE)("div",{class:"banner",style:(0,r.Tr)({backgroundImage:`url(${n.bannerImage})`})},[(0,s.Lk)("div",l,[(0,s.Lk)("h1",c,(0,r.v_)(i.heroMovie.title),1),(0,s.Lk)("p",v,(0,r.v_)(i.heroMovie.overview||"영화에 대한 설명이 없습니다."),1),(0,s.Lk)("div",d,[(0,s.Lk)("button",{class:"banner-button play",onClick:t[0]||(t[0]=(...e)=>n.playMovie&&n.playMovie(...e))}," 재생 "),(0,s.Lk)("button",{class:"banner-button info",onClick:t[1]||(t[1]=(...e)=>n.showDetails&&n.showDetails(...e))}," 상세 정보 ")])]),t[2]||(t[2]=(0,s.Lk)("div",{class:"banner-fade"},null,-1))],4)}i(4114);var g={name:"Banner",props:{heroMovie:{type:Object,required:!0}},computed:{bannerImage(){return this.heroMovie.backdrop_path?`https://image.tmdb.org/t/p/original${this.heroMovie.backdrop_path}`:""}},methods:{playMovie(){console.log("Play movie:",this.heroMovie.title)},showDetails(){this.heroMovie.id?this.$router.push(`/movie/${this.heroMovie.id}`):console.error("Movie ID is not available")}}},h=i(6262);const p=(0,h.A)(g,[["render",u],["__scopeId","data-v-216c46c0"]]);var m=p;const A={class:"home"},k={key:0,class:"loading-overlay"},D={key:1};function N(e,t,i,o,a,n){const l=(0,s.g2)("navbar"),c=(0,s.g2)("Banner"),v=(0,s.g2)("SliderContent");return(0,s.uX)(),(0,s.CE)("div",null,[(0,s.bF)(l),(0,s.Lk)("div",A,[a.isLoading?((0,s.uX)(),(0,s.CE)("div",k,t[0]||(t[0]=[(0,s.Lk)("p",null,"로딩중 ...",-1)]))):((0,s.uX)(),(0,s.CE)("div",D,[(0,s.bF)(c,{heroMovie:a.heroMovie},null,8,["heroMovie"]),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(a.movieCategories,(e=>((0,s.uX)(),(0,s.CE)("div",{key:e.name,class:"movie-category"},[(0,s.Lk)("h3",null,(0,r.v_)(e.title),1),(0,s.bF)(v,{movies:e.movies},null,8,["movies"])])))),128))]))])])}i(1454);var w=i(4335),R="data:image/png;base64,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",b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAJQSURBVFiFxdfJjw1RFAbwXzdaaEQT87ATU4wxLMTGuhNtRf8BSMTG9C+IhcSGJQs7IYi9xDyFBdJIRAgRM4khHTE8i3vKe6T1q1dVHV9yclO3zne+U/dWnXuK1rEah3Afn8Pu4SBWFYiXG104jlqDvQnLrn/iGMZXLT4ND0LkMTZjYsP9iTH3JHweYGpV4iNwLQKfROcgvp04Fb5Xg1sa2yPgBXTk8O/ApeBsKyveJi3rDyxsgbcoOI/LJrBUepLzBbgXg7t4MKf2JkHmxXilQAKXY5xfJoGuGD8USOB9jBPKJPA2xskFEpgS4+sC3N+YK+3jzQLcW8GdUyYB6ItAa1rgrA3O3bLi0BvB+jAuh/846WyoYWMVCbThjHp1mz6I7wz1qnk6uJVgrFQJa/iIvViBMWErY+5T+JwLTqXowD70+/NEbLT+SCT3GVBkiWZKe7sOs2PuKc5KR/HzAjH/H1pdgXapKE3BpL/uvcGrsFr51OpoQzeO4p1/739m78K3W44HbOawFvvVe71+3MZL9VYsi5OtzBKMivnr2C31By1jF76HyBWsx+gcvNHokWpGLWLsbFX8gPo3v6lVcgN6I0YtYubC1iC80OQsz4kF0pbVsCWP81epoi2rQDzDcun/4at6kzMgso52R4XiGfZE7BP/clgo/Vg8xPAhSGAEHoXGgmyysSPaIH1Oh6U3t2p8w5HQ6BnI4bK0RHOHQDzD/NC4ONDN19KL0qxPLINh+CJ9FahXwuHSG/oDz4YwAZgViYzUsNXtuKN5na/KboSmX8iAsy1IrQKsAAAAAElFTkSuQmCC";const f={class:"navbar"},L={class:"navbar-left"},E={class:"nav-links"},M={class:"navbar-right"};function C(e,t,i,o,a,n){const r=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("nav",f,[(0,s.Lk)("div",L,[(0,s.bF)(r,{to:"/home"},{default:(0,s.k6)((()=>t[1]||(t[1]=[(0,s.Lk)("img",{src:R,alt:"Logo",class:"logo"},null,-1)]))),_:1}),(0,s.Lk)("ul",E,[(0,s.Lk)("li",null,[(0,s.bF)(r,{to:"/home"},{default:(0,s.k6)((()=>t[2]||(t[2]=[(0,s.eW)("홈")]))),_:1})]),(0,s.Lk)("li",null,[(0,s.bF)(r,{to:"/popular"},{default:(0,s.k6)((()=>t[3]||(t[3]=[(0,s.eW)("대세 콘텐츠")]))),_:1})]),(0,s.Lk)("li",null,[(0,s.bF)(r,{to:"/search"},{default:(0,s.k6)((()=>t[4]||(t[4]=[(0,s.eW)("찾아보기")]))),_:1})]),(0,s.Lk)("li",null,[(0,s.bF)(r,{to:"/wishlist"},{default:(0,s.k6)((()=>t[5]||(t[5]=[(0,s.eW)("내가 찜한 리스트")]))),_:1})])])]),(0,s.Lk)("div",M,[(0,s.Lk)("img",{src:b,alt:"Profile",class:"profile-icon",onClick:t[0]||(t[0]=(...e)=>n.logout&&n.logout(...e))})])])}var y={name:"Navbar",methods:{logout(){localStorage.removeItem("user"),this.$store&&this.$store.dispatch("logout"),this.$router.push("/signin")}}};const I=(0,h.A)(y,[["render",C],["__scopeId","data-v-481997bd"]]);var P=I;const S={class:"slider-wrapper"},B={class:"poster-list"},Q=["onMouseenter","onMouseleave","onClick"],O={class:"info"};function T(e,t,i,o,a,n){const l=(0,s.g2)("font-awesome-icon");return(0,s.uX)(),(0,s.CE)("div",S,[(0,s.Lk)("button",{class:"arrow-btn left",onClick:t[0]||(t[0]=(...e)=>n.slideLeft&&n.slideLeft(...e))},[(0,s.bF)(l,{icon:["fas","angle-left"]})]),(0,s.Lk)("div",B,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.displayedMovies,((e,t)=>((0,s.uX)(),(0,s.CE)("div",{key:e.id,class:(0,r.C4)(["poster",{active:a.isHovered[t]}]),style:(0,r.Tr)({backgroundImage:`url(${n.makeImagePath(e.poster_path,"w500")})`}),onMouseenter:e=>n.hoverMovie(t),onMouseleave:e=>n.unhoverMovie(t),onClick:e=>n.toggleMovieHover(t)},[(0,s.Lk)("div",O,[(0,s.Lk)("h4",null,(0,r.v_)(e.title),1),(0,s.Lk)("p",null,"평점: ⭐ "+(0,r.v_)(e.vote_average),1),(0,s.Lk)("p",null,"개봉일: "+(0,r.v_)(e.release_date),1)])],46,Q)))),128))]),(0,s.Lk)("button",{class:"arrow-btn right",onClick:t[1]||(t[1]=(...e)=>n.slideRight&&n.slideRight(...e))},[(0,s.bF)(l,{icon:["fas","angle-right"]})])])}var H={props:{movies:{type:Array,required:!0}},data(){return{currentIndex:0,itemsPerPage:6,isHovered:{}}},computed:{displayedMovies(){return this.movies.slice(this.currentIndex,this.currentIndex+this.itemsPerPage)}},methods:{slideLeft(){this.currentIndex>0&&this.currentIndex--},slideRight(){this.currentIndex+this.itemsPerPage<this.movies.length&&this.currentIndex++},makeImagePath(e,t){return`https://image.tmdb.org/t/p/${t}${e}`},hoverMovie(e){this.$set(this.isHovered,e,!0)},unhoverMovie(e){this.$set(this.isHovered,e,!1)},toggleMovieHover(e){this.$set(this.isHovered,e,!this.isHovered[e])}}};const F=(0,h.A)(H,[["render",T],["__scopeId","data-v-e0581b16"]]);var W=F,X={name:"Home",components:{Banner:m,Navbar:P,SliderContent:W},data(){return{isLoading:!0,heroMovie:{},movieCategories:[{name:"popular",title:"인기 영화",movies:[]},{name:"now_playing",title:"최신 영화",movies:[]},{name:"top_rated",title:"높은 평점 영화",movies:[]},{name:"upcoming",title:"개봉 예정 영화",movies:[]}]}},created(){this.loadData()},methods:{async loadData(){try{console.log("데이터 로드 시작"),await Promise.all([this.fetchHeroMovie(),this.fetchMovies()]),console.log("데이터 로드 성공")}catch(e){console.error("Error loading data:",e)}finally{this.isLoading=!1,console.log("로딩 상태:",this.isLoading)}},async fetchHeroMovie(){const e="75b7c972001662bd9d37622e0e222947";try{const t=await w.A.get(`https://api.themoviedb.org/3/movie/popular?api_key=${e}&language=ko-KR`);console.log("Hero Movie 데이터:",t.data.results[0]),this.heroMovie=t.data.results[0]}catch(t){console.error("Hero Movie 로드 실패:",t)}},async fetchMovies(){const e="75b7c972001662bd9d37622e0e222947";try{const t=this.movieCategories.map((async t=>{const i=await w.A.get(`https://api.themoviedb.org/3/movie/${t.name}?api_key=${e}&language=ko-KR`);console.log(`${t.title} 데이터:`,i.data.results),t.movies=i.data.results}));await Promise.all(t)}catch(t){console.error("Movie Categories 로드 실패:",t)}}}};const J=(0,h.A)(X,[["render",N],["__scopeId","data-v-effe2744"]]);var U=J,Y={components:{Banner:m,Home:U}};const _=(0,h.A)(Y,[["render",n]]);var V=_,x=i(5220);const K={class:"wrapper"},G={class:"content"},z={key:0,class:"error"},j={class:"remember-me"},Z={class:"content"},q={key:0,class:"error"},$={class:"terms"},ee=["disabled"];function te(e,t,i,a,n,l){return(0,s.uX)(),(0,s.CE)("div",null,[t[23]||(t[23]=(0,s.Lk)("div",{class:"bg-image"},null,-1)),(0,s.Lk)("div",K,[(0,s.Lk)("div",{class:(0,r.C4)(["card",{active:"login"===n.activeCard,backward:"signup"===n.activeCard}])},[(0,s.Lk)("div",G,[t[16]||(t[16]=(0,s.Lk)("h2",null,"Login",-1)),(0,s.Lk)("form",{onSubmit:t[3]||(t[3]=(0,o.D$)(((...e)=>l.handleLogin&&l.handleLogin(...e)),["prevent"]))},[t[12]||(t[12]=(0,s.Lk)("label",{for:"email"},"Email",-1)),(0,s.bo)((0,s.Lk)("input",{id:"email","onUpdate:modelValue":t[0]||(t[0]=e=>n.email=e),type:"email",required:""},null,512),[[o.Jo,n.email]]),t[13]||(t[13]=(0,s.Lk)("label",{for:"password"},"Password",-1)),(0,s.bo)((0,s.Lk)("input",{id:"password","onUpdate:modelValue":t[1]||(t[1]=e=>n.password=e),type:"password",required:""},null,512),[[o.Jo,n.password]]),n.loginError?((0,s.uX)(),(0,s.CE)("p",z,(0,r.v_)(n.loginError),1)):(0,s.Q3)("",!0),(0,s.Lk)("div",j,[(0,s.bo)((0,s.Lk)("input",{id:"rememberMe","onUpdate:modelValue":t[2]||(t[2]=e=>n.rememberMe=e),type:"checkbox"},null,512),[[o.lH,n.rememberMe]]),t[11]||(t[11]=(0,s.Lk)("label",{for:"rememberMe"},"Remember Me",-1))]),t[14]||(t[14]=(0,s.Lk)("button",{type:"submit"},"Sign In",-1))],32),(0,s.Lk)("p",{class:"switch",onClick:t[4]||(t[4]=(...e)=>l.switchToSignup&&l.switchToSignup(...e))},t[15]||(t[15]=[(0,s.eW)(" Don't have an account? "),(0,s.Lk)("b",null,"Sign up",-1)]))])],2),(0,s.Lk)("div",{class:(0,r.C4)(["card",{active:"signup"===n.activeCard,backward:"login"===n.activeCard}])},[(0,s.Lk)("div",Z,[t[22]||(t[22]=(0,s.Lk)("h2",null,"Sign Up",-1)),(0,s.Lk)("form",{onSubmit:t[9]||(t[9]=(0,o.D$)(((...e)=>l.handleRegister&&l.handleRegister(...e)),["prevent"]))},[t[18]||(t[18]=(0,s.Lk)("label",{for:"newEmail"},"Email",-1)),(0,s.bo)((0,s.Lk)("input",{id:"newEmail","onUpdate:modelValue":t[5]||(t[5]=e=>n.newEmail=e),type:"email",required:""},null,512),[[o.Jo,n.newEmail]]),t[19]||(t[19]=(0,s.Lk)("label",{for:"newPassword"},"Password",-1)),(0,s.bo)((0,s.Lk)("input",{id:"newPassword","onUpdate:modelValue":t[6]||(t[6]=e=>n.newPassword=e),type:"password",required:""},null,512),[[o.Jo,n.newPassword]]),t[20]||(t[20]=(0,s.Lk)("label",{for:"confirmPassword"},"Confirm Password",-1)),(0,s.bo)((0,s.Lk)("input",{id:"confirmPassword","onUpdate:modelValue":t[7]||(t[7]=e=>n.confirmPassword=e),type:"password",required:""},null,512),[[o.Jo,n.confirmPassword]]),n.signupError?((0,s.uX)(),(0,s.CE)("p",q,(0,r.v_)(n.signupError),1)):(0,s.Q3)("",!0),(0,s.Lk)("div",$,[(0,s.bo)((0,s.Lk)("input",{id:"terms","onUpdate:modelValue":t[8]||(t[8]=e=>n.termsAccepted=e),type:"checkbox"},null,512),[[o.lH,n.termsAccepted]]),t[17]||(t[17]=(0,s.Lk)("label",{for:"terms"},[(0,s.eW)("I have read the "),(0,s.Lk)("b",null,"Terms and Conditions")],-1))]),(0,s.Lk)("button",{type:"submit",disabled:!n.termsAccepted},"Register",8,ee)],32),(0,s.Lk)("p",{class:"switch",onClick:t[10]||(t[10]=(...e)=>l.switchToLogin&&l.switchToLogin(...e))},t[21]||(t[21]=[(0,s.eW)(" Already have an account? "),(0,s.Lk)("b",null,"Sign in",-1)]))])],2)])])}i(8992),i(3949);var ie={data(){return{activeCard:"login",email:"",password:"",rememberMe:!1,loginError:"",newEmail:"",newPassword:"",confirmPassword:"",termsAccepted:!1,signupError:""}},methods:{switchToSignup(){this.activeCard="signup",this.triggerCardAnimation()},switchToLogin(){this.activeCard="login",this.triggerCardAnimation()},triggerCardAnimation(){const e=document.querySelectorAll(".card");e.forEach((e=>{e.classList.contains("active")?(e.classList.remove("active"),e.classList.add("backward")):(e.classList.remove("backward"),e.classList.add("enter"),setTimeout((()=>{e.classList.remove("enter"),e.classList.add("active")}),1e3))}))},handleLogin(){this.password.length<6?this.loginError="Password must be at least 6 characters long.":(alert("Login successful!"),this.$store.dispatch("login",{email:this.email}),"/home"!==this.$route.path&&this.$router.push("/home"))},handleRegister(){this.newPassword.length<6?this.signupError="Password must be at least 6 characters long.":this.newPassword===this.confirmPassword?(alert("Registration successful!"),this.switchToLogin()):this.signupError="Passwords do not match."}}};const oe=(0,h.A)(ie,[["render",te],["__scopeId","data-v-5fe688fa"]]);var se=oe;const ae={class:"wishlist"},ne={class:"wishlist-movies"},re=["src","alt"],le=["onClick"];function ce(e,t,i,o,a,n){return(0,s.uX)(),(0,s.CE)("div",ae,[t[0]||(t[0]=(0,s.Lk)("h2",null,"내가 찜한 영화",-1)),(0,s.Lk)("div",ne,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(o.wishlist,(e=>((0,s.uX)(),(0,s.CE)("div",{key:e.id,class:"wishlist-movie"},[(0,s.Lk)("img",{src:`https://image.tmdb.org/t/p/w500/${e.poster_path}`,alt:e.title},null,8,re),(0,s.Lk)("p",null,(0,r.v_)(e.title),1),(0,s.Lk)("button",{onClick:t=>o.toggleWishlist(e)},"삭제",8,le)])))),128))])])}var ve=i(6278),de={setup(){const e=(0,ve.Pj)(),t=(0,s.EW)((()=>e.getters.wishlist)),i=t=>{e.dispatch("toggleWishlist",t)};return{wishlist:t,toggleWishlist:i}}};const ue=(0,h.A)(de,[["render",ce],["__scopeId","data-v-0a91d856"]]);var ge=ue;i(7550);const he=createStore({state:{wishlist:JSON.parse(localStorage.getItem("wishlist"))||[]},mutations:{TOGGLE_WISHLIST(e,t){const i=e.wishlist.findIndex((e=>e.id===t.id));-1===i?e.wishlist.push(t):e.wishlist.splice(i,1),localStorage.setItem("wishlist",JSON.stringify(e.wishlist))}},actions:{toggleWishlist({commit:e},t){e("TOGGLE_WISHLIST",t)}},getters:{wishlist:e=>e.wishlist,isInWishlist:e=>t=>e.wishlist.some((e=>e.id===t))}});var pe=he;const me={key:0,class:"movie-detail"},Ae=["src"],ke={class:"content"};function De(e,t,i,o,a,n){return a.movie?((0,s.uX)(),(0,s.CE)("div",me,[(0,s.Lk)("img",{src:n.makeImagePath(a.movie.backdrop_path,"w1280"),alt:"Movie Background"},null,8,Ae),(0,s.Lk)("div",ke,[(0,s.Lk)("h2",null,(0,r.v_)(a.movie.title),1),(0,s.Lk)("p",null,(0,r.v_)(a.movie.overview),1),(0,s.Lk)("p",null,"개봉일: "+(0,r.v_)(a.movie.release_date),1),(0,s.Lk)("p",null,"평점: ⭐ "+(0,r.v_)(a.movie.vote_average),1)])])):(0,s.Q3)("",!0)}var Ne={data(){return{movie:null}},created(){this.fetchMovieDetail()},methods:{async fetchMovieDetail(){const e="75b7c972001662bd9d37622e0e222947",t=this.$route.params.id;try{const i=await w.A.get(`https://api.themoviedb.org/3/movie/${t}?api_key=${e}&language=ko-KR`);this.movie=i.data}catch(i){console.error("Error fetching movie details:",i)}},makeImagePath(e,t){return`https://image.tmdb.org/t/p/${t}${e}`}}};const we=(0,h.A)(Ne,[["render",De],["__scopeId","data-v-515c214e"]]);var Re=we;const be={class:"view-toggle"},fe={class:"content"},Le={class:"movie-grid"},Ee={key:1,class:"loading"};function Me(e,t,i,o,a,n){const l=(0,s.g2)("Navbar"),c=(0,s.g2)("MovieCard"),v=(0,s.g2)("Pagination");return(0,s.uX)(),(0,s.CE)("div",{class:"popular",onScroll:t[3]||(t[3]=(...e)=>n.handleScroll&&n.handleScroll(...e))},[(0,s.bF)(l),(0,s.Lk)("div",be,[(0,s.Lk)("button",{class:(0,r.C4)({active:"table"===a.viewMode}),onClick:t[0]||(t[0]=e=>n.changeViewMode("table"))}," Table View ",2),(0,s.Lk)("button",{class:(0,r.C4)({active:"infinite"===a.viewMode}),onClick:t[1]||(t[1]=e=>n.changeViewMode("infinite"))}," 무한 스크롤 View ",2)]),(0,s.Lk)("div",fe,[t[4]||(t[4]=(0,s.Lk)("h1",null,"대세 콘텐츠",-1)),(0,s.Lk)("div",Le,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(a.movies,(e=>((0,s.uX)(),(0,s.Wv)(c,{key:e.id,movie:e},null,8,["movie"])))),128))]),"table"===a.viewMode?((0,s.uX)(),(0,s.Wv)(v,{key:0,currentPage:a.currentPage,totalPages:a.totalPages,onChangePage:n.fetchMovies},null,8,["currentPage","totalPages","onChangePage"])):(0,s.Q3)("",!0),a.loading&&"infinite"===a.viewMode?((0,s.uX)(),(0,s.CE)("div",Ee," 로딩 중... ")):(0,s.Q3)("",!0),a.showScrollTopButton?((0,s.uX)(),(0,s.CE)("button",{key:2,class:"scroll-top",onClick:t[2]||(t[2]=(...e)=>n.scrollToTop&&n.scrollToTop(...e))}," 위로 ")):(0,s.Q3)("",!0)])],32)}const Ce={class:"movie-card"},ye=["src","alt"],Ie={class:"title"};function Pe(e,t,i,a,n,l){return(0,s.uX)(),(0,s.CE)("div",Ce,[(0,s.Lk)("img",{src:l.posterUrl,alt:i.movie.title,class:"poster",onClick:t[0]||(t[0]=(...e)=>a.toggleWishlist&&a.toggleWishlist(...e))},null,8,ye),(0,s.Lk)("p",Ie,(0,r.v_)(i.movie.title),1),(0,s.Lk)("span",{class:"like-icon",onClick:t[1]||(t[1]=(0,o.D$)(((...e)=>a.toggleWishlist&&a.toggleWishlist(...e)),["stop"]))},[(0,s.Lk)("i",{class:(0,r.C4)(a.isInWishlist?"fas fa-heart liked":"far fa-heart")},null,2)])])}var Se={props:{movie:{type:Object,required:!0}},setup(e){const t=(0,ve.Pj)(),i=(0,s.EW)((()=>t.getters.isInWishlist(e.movie.id))),o=()=>{t.dispatch("toggleWishlist",e.movie)};return{isInWishlist:i,toggleWishlist:o}},computed:{posterUrl(){return`https://image.tmdb.org/t/p/w500/${this.movie.poster_path}`}}};const Be=(0,h.A)(Se,[["render",Pe],["__scopeId","data-v-093d652b"]]);var Qe=Be;const Oe={class:"pagination"},Te=["disabled"],He=["disabled"];function Fe(e,t,i,o,a,n){return(0,s.uX)(),(0,s.CE)("div",Oe,[(0,s.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>n.prevPage&&n.prevPage(...e)),disabled:1===i.currentPage},"이전",8,Te),(0,s.Lk)("span",null,(0,r.v_)(i.currentPage)+" / "+(0,r.v_)(i.totalPages),1),(0,s.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>n.nextPage&&n.nextPage(...e)),disabled:i.currentPage===i.totalPages},"다음",8,He)])}var We={props:{currentPage:{type:Number,required:!0},totalPages:{type:Number,required:!0}},methods:{prevPage(){this.$emit("change-page",this.currentPage-1)},nextPage(){this.$emit("change-page",this.currentPage+1)}}};const Xe=(0,h.A)(We,[["render",Fe],["__scopeId","data-v-44d82a91"]]);var Je=Xe;const Ue="75b7c972001662bd9d37622e0e222947",Ye="https://api.themoviedb.org/3",_e=async(e=1)=>{try{const t=await w.A.get(`${Ye}/movie/popular`,{params:{api_key:Ue,language:"ko-KR",page:e}});return t.data}catch(t){return console.error("Error fetching popular movies:",t),{results:[]}}},Ve=async e=>{const{genre:t,rating:i,language:o,page:s=1}=e;try{const e={api_key:Ue,language:"ko-KR",page:s};if(t&&"장르 (전체)"!==t){const i={Action:28,Adventure:12,Comedy:35,Crime:80,Family:10751};e.with_genres=i[t]||null}if(i&&"평점 (전체)"!==i){const[t,o]=i.split("~").map(Number);e["vote_average.gte"]=t||0,e["vote_average.lte"]=o||10}o&&"언어 (전체)"!==o&&(e.with_original_language=o);const a=await w.A.get(`${Ye}/discover/movie`,{params:e});return a.data}catch(a){return console.error("Error fetching movies:",a),{results:[]}}};var xe={name:"Popular",components:{Navbar:P,MovieCard:Qe,Pagination:Je},data(){return{movies:[],currentPage:1,totalPages:1,viewMode:"table",loading:!1,showScrollTopButton:!1}},methods:{async fetchMovies(e=1,t=!1){if(this.loading)return;this.loading=!0;const i=await _e(e);this.movies=t?[...this.movies,...i.results]:i.results,this.currentPage=e,this.totalPages=i.total_pages,this.loading=!1},changeViewMode(e){this.viewMode=e,this.movies=[],this.currentPage=1,this.fetchMovies()},handleScroll(){const e=window.innerHeight+window.scrollY>=document.body.offsetHeight-100;e&&"infinite"===this.viewMode&&this.currentPage<this.totalPages&&this.fetchMovies(this.currentPage+1,!0),this.showScrollTopButton=window.scrollY>300},scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}},created(){this.fetchMovies(),window.addEventListener("scroll",this.handleScroll)},beforeDestroy(){window.removeEventListener("scroll",this.handleScroll)}};const Ke=(0,h.A)(xe,[["render",Me],["__scopeId","data-v-ec5cf30c"]]);var Ge=Ke;const ze={class:"dropdown-container"},je=["onClick"],Ze={key:0,class:"select-items"},qe=["onClick"],$e={class:"movie-grid"},et=["src","alt"],tt={class:"movie-title"},it={key:0,class:"loading"};function ot(e,t,i,o,a,n){const l=(0,s.g2)("Navbar");return(0,s.uX)(),(0,s.CE)("div",{class:"search-page",onScroll:t[1]||(t[1]=(...e)=>n.handleScroll&&n.handleScroll(...e))},[(0,s.bF)(l),t[3]||(t[3]=(0,s.Lk)("h1",null,"영화 검색",-1)),(0,s.Lk)("div",ze,[t[2]||(t[2]=(0,s.Lk)("label",null,"선호하는 설정을 선택하세요",-1)),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.dropdownEntries,(e=>((0,s.uX)(),(0,s.CE)("div",{key:e.key,class:"custom-select"},[(0,s.Lk)("div",{class:"select-selected",onClick:t=>n.toggleDropdown(e.key)},(0,r.v_)(a.selectedOptions[e.key]),9,je),a.activeDropdown===e.key?((0,s.uX)(),(0,s.CE)("div",Ze,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e.options,(t=>((0,s.uX)(),(0,s.CE)("div",{key:t,onClick:i=>n.selectOption(e.key,t)},(0,r.v_)(t),9,qe)))),128))])):(0,s.Q3)("",!0)])))),128)),(0,s.Lk)("button",{class:"clear-options",onClick:t[0]||(t[0]=(...e)=>n.clearOptions&&n.clearOptions(...e))},"초기화")]),(0,s.Lk)("div",$e,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(a.movies,(e=>((0,s.uX)(),(0,s.CE)("div",{class:"movie-card",key:e.id},[(0,s.Lk)("img",{class:"movie-poster",src:n.getPosterUrl(e.poster_path),alt:e.title},null,8,et),(0,s.Lk)("div",tt,(0,r.v_)(e.title),1)])))),128))]),a.loading?((0,s.uX)(),(0,s.CE)("div",it,"로딩 중...")):(0,s.Q3)("",!0)],32)}var st={name:"Search",components:{Navbar:P},data(){return{dropdowns:{originalLanguage:["장르 (전체)","Action","Adventure","Comedy","Crime","Family"],translationLanguage:["평점 (전체)","9~10","8~9","7~8","6~7","5~6","4~5","4점 이하"],sorting:["언어 (전체)","en","ko"]},DEFAULT_OPTIONS:{originalLanguage:"장르 (전체)",translationLanguage:"평점 (전체)",sorting:"언어 (전체)"},selectedOptions:{originalLanguage:"장르 (전체)",translationLanguage:"평점 (전체)",sorting:"언어 (전체)"},activeDropdown:null,movies:[],currentPage:1,totalPages:1,loading:!1}},computed:{dropdownEntries(){return Object.entries(this.dropdowns).map((([e,t])=>({key:e,options:t})))}},methods:{async fetchMovies(e=1,t=!1){if(this.loading)return;this.loading=!0;const i={genre:this.selectedOptions.originalLanguage,rating:this.selectedOptions.translationLanguage,language:this.selectedOptions.sorting,page:e},o=await Ve(i);this.movies=t?[...this.movies,...o.results]:o.results,this.currentPage=e,this.totalPages=o.total_pages,this.loading=!1},toggleDropdown(e){this.activeDropdown=this.activeDropdown===e?null:e},selectOption(e,t){this.selectedOptions={...this.selectedOptions,[e]:t},this.activeDropdown=null,this.fetchMovies(1)},clearOptions(){this.selectedOptions={...this.DEFAULT_OPTIONS},this.fetchMovies(1)},handleScroll(){const e=window.innerHeight+window.scrollY>=document.body.offsetHeight-100;e&&this.currentPage<this.totalPages&&this.fetchMovies(this.currentPage+1,!0)},getPosterUrl(e){return`https://image.tmdb.org/t/p/w500/${e}`}},created(){this.fetchMovies(),window.addEventListener("scroll",this.handleScroll)},beforeDestroy(){window.removeEventListener("scroll",this.handleScroll)}};const at=(0,h.A)(st,[["render",ot],["__scopeId","data-v-225c2789"]]);var nt=at;const rt=[{path:"/signin",name:"SignIn",component:se,meta:{hideNavbar:!0}},{path:"/home",name:"Home",component:U,meta:{requiresAuth:!0}},{path:"/",redirect:"/signin"},{path:"/movies/:id",component:Re},{path:"/wishlist",name:"Wishlist",component:ge},{path:"/slider",name:"SliderContent",component:W},{path:"/popular",name:"Popular",component:Ge},{path:"/search",name:"Search",component:nt}],lt=(0,x.aE)({history:(0,x.Bt)(),routes:rt});lt.beforeEach(((e,t,i)=>{const o=pe.getters.isAuthenticated;"SignIn"===e.name&&o?i("/home"):i()}));var ct=lt,vt=i(7107),dt=i(1273),ut=i(6188);const gt=(0,o.Ef)(V);gt.use(ct),gt.use(pe),gt.mount("#app"),vt.Yv.add(ut.Uec,ut.vmR,ut.qcK,ut.ekB),gt.component("font-awesome-icon",dt.gc)}},t={};function i(o){var s=t[o];if(void 0!==s)return s.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,i),a.exports}i.m=e,function(){var e=[];i.O=function(t,o,s,a){if(!o){var n=1/0;for(v=0;v<e.length;v++){o=e[v][0],s=e[v][1],a=e[v][2];for(var r=!0,l=0;l<o.length;l++)(!1&a||n>=a)&&Object.keys(i.O).every((function(e){return i.O[e](o[l])}))?o.splice(l--,1):(r=!1,a<n&&(n=a));if(r){e.splice(v--,1);var c=s();void 0!==c&&(t=c)}}return t}a=a||0;for(var v=e.length;v>0&&e[v-1][2]>a;v--)e[v]=e[v-1];e[v]=[o,s,a]}}(),function(){i.d=function(e,t){for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};i.O.j=function(t){return 0===e[t]};var t=function(t,o){var s,a,n=o[0],r=o[1],l=o[2],c=0;if(n.some((function(t){return 0!==e[t]}))){for(s in r)i.o(r,s)&&(i.m[s]=r[s]);if(l)var v=l(i)}for(t&&t(o);c<n.length;c++)a=n[c],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(v)},o=self["webpackChunknetflix_clone"]=self["webpackChunknetflix_clone"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=i.O(void 0,[504],(function(){return i(1134)}));o=i.O(o)})();
//# sourceMappingURL=app.0b79922b.js.map