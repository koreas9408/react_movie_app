(this.webpackJsonpmovie_app_2019=this.webpackJsonpmovie_app_2019||[]).push([[0],{33:function(e,t,a){e.exports=a(63)},56:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(29),s=a.n(o);var i=function(){return r.a.createElement("span",null,"About this page : I buit it because I love movies")},c=a(16),m=a.n(c),l=a(10),u=a(11),p=a(13),v=a(12),d=a(14),h=a(30),E=a.n(h),y=a(7);a(56);var f=function(e){var t=e.id,a=e.year,n=e.title,o=e.summary,s=e.poster,i=e.genres;return r.a.createElement(y.b,{to:{pathname:"/movie/".concat(t),state:{year:a,title:n,summary:o,poster:s,genres:i}}},r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:s,alt:n}),r.a.createElement("div",{className:"moie_data"},r.a.createElement("h3",{className:"movie_title"},n),r.a.createElement("h5",{className:"movie_year"},a),r.a.createElement("ul",{className:"movie_genres"},i.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres_genre"},e)}))),r.a.createElement("p",{className:"movie_summary"},o.slice(0,180),"..."))))},b=(a(62),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0,movies:[]},a.getMovies=function(){var e,t;return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m.a.awrap(E.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating"));case 2:e=n.sent,t=e.data.data.movies,a.setState({movies:t,isLoading:!1});case 5:case"end":return n.stop()}}))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader_text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(f,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),t}(r.a.Component)),g=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?r.a.createElement("span",null,e.state.title):null}}]),t}(r.a.Component);var _=function(){return r.a.createElement("div",null,r.a.createElement(y.b,{to:"/"},"Home"),r.a.createElement(y.b,{to:{pathname:"/about",state:{fromNavigation:!0}}},"About"))},N=a(6);var j=function(){return r.a.createElement(y.a,null,r.a.createElement(_,null),r.a.createElement(N.a,{path:"/",exact:!0,component:b}),r.a.createElement(N.a,{path:"/about",component:i}),r.a.createElement(N.a,{path:"/movie/:id",component:g}))};s.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.e240f1bd.chunk.js.map