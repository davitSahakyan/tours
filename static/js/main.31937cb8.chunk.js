(this.webpackJsonptours=this.webpackJsonptours||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.fa2322be.png"},function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),i=n.n(r),s=n(1),l=n(2),c=n(4),u=n(3),m=n(5),h=(n(14),n(8)),f=n.n(h),d=function(){return o.a.createElement("nav",{className:"navbar"},o.a.createElement("img",{src:f.a,alt:"tours logo"}),o.a.createElement("ul",{className:"nav-links"},o.a.createElement("li",null,o.a.createElement("a",{href:"/",className:"nav-link"},"home")),o.a.createElement("li",null,o.a.createElement("a",{href:"/",className:"nav-link"},"about")),o.a.createElement("li",null,o.a.createElement("a",{href:"/",className:"nav-link active"},"tours"))))},p=(n(15),n(16),n(17),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleInfo=function(){n.setState({showInfo:!n.state.showInfo})},n.state={showInfo:!1},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.tour,t=e.id,n=e.city,a=e.img,r=e.name,i=e.info,s=this.state.showInfo,l=this.props.removeTour;return o.a.createElement("article",{className:"tour"},o.a.createElement("div",{className:"image-container"},o.a.createElement("img",{src:a,alt:n}),o.a.createElement("span",{className:"close-btn",onClick:function(){return l(t)}},o.a.createElement("i",{className:"fas fa-window-close"}))),o.a.createElement("div",{className:"tour-info"},o.a.createElement("h3",null,n),o.a.createElement("h4",null,r),o.a.createElement("h5",{onClick:this.handleInfo},"info",o.a.createElement("span",null,o.a.createElement("i",{className:"fas fa-caret-square-down"}))),s&&o.a.createElement("p",null,i)))}}]),t}(a.Component)),g=[{id:1,city:"florence",img:"./img/florence.jpg",name:"florence tour",info:"Discover three of Tuscany\u2019s most iconic destinations on a full-day tour from Florence by coach. \n       Snap photos of the famous Leaning Tower and Piazza dei Miracoli in Pisa, stroll through the \n       UNESCO-listed hill town of San Gimignano, and step inside Siena\u2019s cathedral."},{id:2,city:"paris",img:"./img/paris.jpg",name:"paris lights tour",info:"Paris is one of the most visited cities of the world and welcomes every year around 25 million tourists.\n       Paris, it is 276 monuments, churches, fountains, bridges and canals lit up at night...\n       See for yourself how these sites are illuminated and discover the magic of the capital."},{id:3,city:"london",img:"./img/london.jpg",name:"london royal palace tour",info:"Take a sightseeing tour of London and learn from experts as they show you the city's best attractions\n       and famous landmarks. Learn interesting historical and cultural facts about London on a walking tour,\n        a double decker bus tour, a river Thames tour, or a even a helicopter tour."},{id:4,city:"rome",img:"./img/rome.jpg",name:"rome colizey tour",info:"On this Colosseum underground tour, you can experience this historic Rome icon to the fullest with\n       access to areas that are typically closed to the public\u2014the underground chambers and the arena floor.\n       After skipping the main entrance line,\n       explore the Colosseum with an informative guide, who shares stories about life in Ancient Rome."}],v=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).removeTour=function(t){var n=e.state.tours.filter((function(e){return e.id!==t}));e.setState({tours:n})},e.state={tours:g},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.tours;return console.log(t),o.a.createElement("section",{className:"tour-list"},t.map((function(t){return o.a.createElement(p,{key:t.id,tour:t,removeTour:e.removeTour})})))}}]),t}(a.Component),b=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={loading:!1},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(d,null),o.a.createElement(v,null))}}]),t}(o.a.Component);n(18);i.a.render(o.a.createElement(b,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.31937cb8.chunk.js.map