(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,name:"Superman",image:"https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png"},{id:2,name:"Batman",image:"https://www.pngall.com/wp-content/uploads/4/Batman.png"},{id:3,name:"Spiderman",image:"https://www.writeups.org/wp-content/uploads/Spider-Man-Marvel-Comics-Peter-Parker-h552.jpg"},{id:4,name:"Wolverine",image:"https://starloggers.files.wordpress.com/2011/10/wolverine_comic_if_you_could-s392x480-134091.jpg"},{id:5,name:"Daredevil",image:"https://www.writeups.org/wp-content/uploads/Daredevil-Marvel-Comics-Matt-Murdock.jpg"},{id:6,name:"Captain America",image:"https://www.writeups.org/wp-content/uploads/Captain-America-Marvel-Comics-Avengers-Steve-Rogers-e.jpg"},{id:7,name:"Iron Man",image:"https://www.writeups.org/wp-content/uploads/Tony-Stark-Iron-Man-Marvel-movies-Robert-Downey-Jr-h.jpg"},{id:8,name:"The Flash",image:"http://pre07.deviantart.net/7a06/th/pre/f/2013/154/e/8/the_flash___new_52_by_phil_cho-d67qbhw.jpg"},{id:9,name:"The Hulk",image:"https://www.writeups.org/wp-content/uploads/Savage-Hulk-Marvel-Comics-iconic-h1.jpg"},{id:10,name:"Wonder Woman",image:"https://www.writeups.org/wp-content/uploads/Wonder-Woman-DC-Comics-Gail-Simone-Diana-Themyscira-aa.jpg"},{id:11,name:"Deadpool",image:"https://www.writeups.org/wp-content/uploads/Deadpool-Marvel-Comics-profile-i.jpg"},{id:12,name:"Professor X",image:"http://images2.fanpop.com/image/photos/14000000/Professor-x-x-men-evolution-14043304-149-250.gif"}]},,,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(2),c=a.n(r),i=(a(15),a(16),a(3)),s=a(4),l=a(7),m=a(5),p=a(8);a(17);var u=function(){return o.a.createElement("div",null,o.a.createElement("nav",{className:"navbar navbar-dark bg-primary"},o.a.createElement("ul",{className:"navbar-nav"},o.a.createElement("li",{className:"navbar-brand"},"Clickerama: Superhero Edition"))))};a(18);var d=function(e){return o.a.createElement("span",{onClick:function(){e.click(e.id)}},o.a.createElement("div",{className:"img-container container"},o.a.createElement("img",{src:e.image,alt:e.name})))},h=a(6),g=(a(19),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={score:0,topScore:0,character:h,clicked:[]},a.shuffle=function(e,t){for(var a=e.length;0!==a;){var n=Math.floor(Math.random()*a),o=e[--a];e[a]=e[n],e[n]=o}t(e)},a.click=function(e){console.log(e);var t=a.state.clicked;if(0===t.length)t.push(e),a.setState({clicked:t}),a.setState({score:a.state.score+1});else{for(var n=!1,o=0,r=0;r<t.length;r++)t[r]===e&&(n=!0);!1===n?(t.push(e),a.setState({clicked:t}),a.setState({score:a.state.score+1})):(alert("Wrong guess! Game over."),(o=a.state.score)>a.state.topScore&&(alert("New top score!"),a.setState({topScore:o})),a.setState({score:0}),a.setState({clicked:[]}))}var c=a.state.character;a.shuffle(c,function(){console.log(c),a.setState({character:c})})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(){if(console.log(this.state.clicked),12===this.state.score){var e=this.state.score;alert("You got all 12! You win!"),this.setState({topScore:e}),this.setState({score:0}),this.setState({clicked:[]})}}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container"},o.a.createElement(u,null),o.a.createElement("div",{className:"jumbotron"},o.a.createElement("h1",{className:"display-4"},"Test your memory!"),o.a.createElement("p",{className:"lead"},"Increase your score by clicking on each picture, for a maximum total score of twelve. But make sure not to click on any picture more than once. Good luck!"),o.a.createElement("hr",{className:"my-4"}),o.a.createElement("p",null,"Click on any picture to begin!"),o.a.createElement("p",null,"Score: ",this.state.score),o.a.createElement("p",null,"Top Score: ",this.state.topScore," ")),o.a.createElement("div",{className:"Picblock"},this.state.character.map(function(t){return o.a.createElement(d,{image:t.image,name:t.name,id:t.id,click:e.click})})))}}]),t}(n.Component));var w=function(){return o.a.createElement(g,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.707b4c23.chunk.js.map