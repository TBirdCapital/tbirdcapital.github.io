(this.webpackJsonptbirdcap=this.webpackJsonptbirdcap||[]).push([[0],{166:function(e,a,t){e.exports=t.p+"static/media/birdhalf3.b61ec682.png"},169:function(e,a,t){e.exports=t.p+"static/media/logo.f4be55c2.svg"},170:function(e,a,t){e.exports=t.p+"static/media/angelicon.ab170943.svg"},180:function(e,a,t){e.exports=t(542)},186:function(e,a,t){},187:function(e,a,t){e.exports=t.p+"static/media/dots.67ec1533.svg"},188:function(e,a,t){},50:function(e,a,t){e.exports=t.p+"static/media/linkedin-logo.bb52b3b6.svg"},542:function(e,a,t){"use strict";t.r(a);t(181);var n=t(0),l=t.n(n),i=t(49),s=t.n(i),c=(t(186),t(90)),r=t(167),o=t(168),m=t(178),d=t(179),u=t(169),f=t.n(u),p=(t(187),t(50)),E=t.n(p),h=t(170),v=t.n(h),g=(t(188),t(189),t(193),t(171)),N=t.n(g),b=t(13),w=t(172),y=t.n(w),k=t(173),x=t.n(k),C=t(541),D=function(e){Object(d.a)(n,e);var a=Object(m.a)(n);function n(e){var t;return Object(r.a)(this,n),(t=a.call(this,e)).handleIterate=function(e,a,t,n){return 1===n&&(a=Object(c.a)({},a,{className:"zero-margin mt-3 mt-md-0 mt-lg-0 text-left playfair"})),"a"===e&&(a=Object(c.a)({},a,{className:"playfair red-a",target:"_blank"})),l.a.createElement(e,a,t)},t.handleBurger=function(){t.setState({burgerMenu:!t.state.burgerMenu}),console.log(t.state.burgerMenu)},t.toggleBio=function(e){t.setState({bioOpen:t.state.bioOpen===e?-1:e})},t.state={width:window.innerWidth,height:window.innerHeight,sizeLimit:768,burgerMenu:!1,aboutText:"",teamData:[],portfolioData:[],bioOpen:-1},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this,a=C.createClient({space:"kpndngk418ru",accessToken:"6gfR7ml1YUc663Qzrg5JZ3CaWZnj7gEqN46t9VoNcQU"});a.getEntries({content_type:"aboutPage"}).then((function(a){e.setState({aboutText:a.items[0].fields.text.content[0].content[0].value})})),a.getEntries({content_type:"teamMember"}).then((function(a){e.setState({teamData:a.items})})),a.getEntries({content_type:"portfolioCompany"}).then((function(a){for(var t=[],n=[],l=0;l<a.items.length;l++)t.push(a.items[l].fields.companyName);t=t.sort();for(l=0;l<t.length;l++){for(var i=0;t[l]!=a.items[i].fields.companyName;)i++;n.push(a.items[i])}e.setState({portfolioData:n})}))}},{key:"componentWillUnmount",value:function(){}},{key:"updateWindowDimensions",value:function(){console.log(window.innerWidth)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"full-body"},l.a.createElement("div",{className:"navbar w-100"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"d-hide w-100"},l.a.createElement(y.a,{open:this.state.burgerMenu},l.a.createElement("div",{className:"w-100 burger-buttons transition-all"},l.a.createElement("div",{className:"row playfair"},l.a.createElement("div",{className:"col-md mt-2 text-center w-100"},l.a.createElement(b.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,offset:-50,duration:500},"About")),l.a.createElement("div",{className:"col-md text-center my-2 w-100"},l.a.createElement(b.Link,{activeClass:"active",to:"team",spy:!0,smooth:!0,offset:-50,duration:500},"Team")),l.a.createElement("div",{className:"col mb-3 text-center w-100"},l.a.createElement(b.Link,{activeClass:"active",to:"portfolio",spy:!0,smooth:!0,offset:-50,duration:500},"Companies"))))),l.a.createElement("div",{className:"burger-box p-2 ml-2 mt-2"},l.a.createElement(x.a,{isOpen:this.state.burgerMenu,menuClicked:this.handleBurger,width:25,height:25,strokeWidth:2,rotate:0,color:"#b80f0a",animationDuration:.5}))),l.a.createElement("div",{className:"row m-hide"},l.a.createElement("div",{className:"col nav-logo"},l.a.createElement(b.Link,{activeClass:"active",to:"home",spy:!0,smooth:!0,offset:-50,duration:500},l.a.createElement("img",{className:"nav-logo transition-all",src:f.a}))),l.a.createElement("div",{className:"col-md-auto d-flex w-40-d"},l.a.createElement("div",{className:"row playfair"},l.a.createElement("div",{className:"col"},l.a.createElement(b.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,offset:-50,duration:500},"About")),l.a.createElement("div",{className:"col"},l.a.createElement(b.Link,{activeClass:"active",to:"team",spy:!0,smooth:!0,offset:-50,duration:500},"Team")),l.a.createElement("div",{className:"col"},l.a.createElement(b.Link,{activeClass:"active",to:"portfolio",spy:!0,smooth:!0,offset:-50,duration:500},"Companies"))))))),l.a.createElement("section",{className:"home d-flex",id:"home"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-auto home-text"},l.a.createElement("div",{className:"head-text text-center w-100"},l.a.createElement("h1",{className:"tbird-font"},"T-BIRD"),l.a.createElement("h2",{className:"tbird-font"},"CAPITAL"),l.a.createElement("h2",{className:"playfair mt-5"},"An ",l.a.createElement("a",{className:"red"},"early-stage")," venture capital firm and",l.a.createElement("a",{className:"red"}," partner")," to exceptional entrepreneurs."),l.a.createElement("img",{className:"w-100  d-hide",src:t(166)}))),l.a.createElement("div",{className:"col-md home-img"},l.a.createElement("img",{className:"m-hide",src:t(166)}))))),l.a.createElement("section",{className:"about my-5 py-5",id:"about"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md pl-md-3"},l.a.createElement("h1",{className:"playfair weight-600 red mb-3"},"About Us"),l.a.createElement("p",{className:"playfair"},this.state.aboutText))))),l.a.createElement("section",{className:"team my-5 py-5",id:"team"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"playfair weight-600 red mb-3"},"Team"),this.state.teamData.reverse().map((function(a,t){return l.a.createElement("div",{className:"row mb-5"},l.a.createElement("div",{className:"profile-image col-md d-flex align-items-center"},l.a.createElement("div",{className:"text-center"},l.a.createElement("div",{className:"profile-pic w-100"},l.a.createElement("img",{className:"w-100 h-100",src:a.fields.profilePic.fields.file.url})))),l.a.createElement("div",{className:"profile-desc w-75 d-flex align-items-center col-md-auto"},l.a.createElement("div",{className:"w-100"},l.a.createElement("div",{className:"w-100 name-sec d-flex"},l.a.createElement("h3",{className:"playfair red-a font-weight-600"},a.fields.fullName,l.a.createElement("a",{className:"ml-4",href:a.fields.linkedinUrl,target:"_blank"},l.a.createElement("img",{className:"linkedin-logo m-hide",src:E.a})))),l.a.createElement("div",{className:"m-hide"},l.a.createElement(N.a,{text:a.fields.bio,onIterate:e.handleIterate})),l.a.createElement("div",{className:"d-hide bio-expand w-100"},l.a.createElement("img",{className:"linkedin-logo transition-all ml-3",src:E.a}),l.a.createElement("button",{className:"playfair m-hide",onClick:function(){return e.toggleBio(t)}},"Read Bio")))))})))),l.a.createElement("section",{className:"portfolio",id:"portfolio"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"playfair weight-600 red mb-3"},"Investments and Advisory Positions"),l.a.createElement("div",{className:"row"},this.state.portfolioData.map((function(e){return l.a.createElement("div",{className:"col-auto"},l.a.createElement("a",{target:"_blank",href:e.fields.websiteUrl,className:"company-link red-a"},l.a.createElement("div",{className:"img-container mb-3 w-100"},l.a.createElement("img",{className:"w-100 transition-all",src:e.fields.companyLogo.fields.file.url})),e.fields.companyName))}))))),l.a.createElement("section",{className:"footer my-5 playfair text-center"},l.a.createElement("p",null,l.a.createElement("a",{className:"transition-all",href:"https://www.linkedin.com/company/tbirdcap/",target:"_blank"},"Follow us",l.a.createElement("img",{className:"linkedin-logo transition-all ml-2",src:E.a}))),l.a.createElement("p",null,l.a.createElement("a",{className:"transition-all",href:"https://angel.co/t-bird-capital/syndicate",target:"_blank"},"Invest with us",l.a.createElement("img",{className:"linkedin-logo transition-all ml-1",src:v.a}))),l.a.createElement("p",null,"\xa9 T-Bird Capital 2020")))}}]),n}(l.a.PureComponent);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},89:function(e,a){}},[[180,1,2]]]);
//# sourceMappingURL=main.a4d4b3e1.chunk.js.map