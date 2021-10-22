(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{260:function(e,n,r){"use strict";r.d(n,"a",(function(){return d})),r.d(n,"b",(function(){return v}));r(29),r(19),r(28),r(37),r(23),r(38);var t=r(13),o=r(253);function c(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(n){Object(t.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}var f={};f={sizes:{height:window.innerHeight,width:window.innerWidth},renderOptions:{}};var d=function(canvas){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f,n=e.sizes,r=e.renderOptions,t=o.Engine.create(),c=t.world,d=o.Render.create({engine:t,canvas:canvas,options:l(l({},n),{},{wireframes:!1},r)}),v=o.Runner.create();return o.Runner.run(v,t),o.Engine.run(t),o.Render.run(d),{engine:t,runner:v,render:d,world:c}},v=function(e){e.mouse.element.removeEventListener("mousewheel",e.mouse.mousewheel),e.mouse.element.removeEventListener("DOMMouseScroll",e.mouse.mousewheel)}},411:function(e,n,r){"use strict";var t=r(2),o=r(48),c=r(412),l=r(177),f=r(4),d=1..toFixed,v=Math.floor,h=function(e,n,r){return 0===n?r:n%2==1?h(e,n-1,r*e):h(e*e,n/2,r)},w=function(data,e,n){for(var r=-1,t=n;++r<6;)t+=e*data[r],data[r]=t%1e7,t=v(t/1e7)},m=function(data,e){for(var n=6,r=0;--n>=0;)r+=data[n],data[n]=v(r/e),r=r%e*1e7},y=function(data){for(var e=6,s="";--e>=0;)if(""!==s||0===e||0!==data[e]){var n=String(data[e]);s=""===s?n:s+l.call("0",7-n.length)+n}return s};t({target:"Number",proto:!0,forced:d&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!f((function(){d.call({})}))},{toFixed:function(e){var n,r,t,f,d=c(this),v=o(e),data=[0,0,0,0,0,0],O="",x="0";if(v<0||v>20)throw RangeError("Incorrect fraction digits");if(d!=d)return"NaN";if(d<=-1e21||d>=1e21)return String(d);if(d<0&&(O="-",d=-d),d>1e-21)if(r=(n=function(e){for(var n=0,r=e;r>=4096;)n+=12,r/=4096;for(;r>=2;)n+=1,r/=2;return n}(d*h(2,69,1))-69)<0?d*h(2,-n,1):d/h(2,n,1),r*=4503599627370496,(n=52-n)>0){for(w(data,0,r),t=v;t>=7;)w(data,1e7,0),t-=7;for(w(data,h(10,t,1),0),t=n-1;t>=23;)m(data,1<<23),t-=23;m(data,1<<t),w(data,1,1),m(data,2),x=y(data)}else w(data,0,r),w(data,1<<-n,0),x=y(data)+l.call("0",v);return x=v>0?O+((f=x.length)<=v?"0."+l.call("0",v-f)+x:x.slice(0,f-v)+"."+x.slice(f-v)):O+x}})},412:function(e,n,r){var t=r(46);e.exports=function(e){if("number"!=typeof e&&"Number"!=t(e))throw TypeError("Incorrect invocation");return+e}},452:function(e,n,r){"use strict";r.r(n),r.d(n,"initializeTrajectory",(function(){return c}));r(55),r(411);var t=r(253),o=r(260),c=function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},c=r.gravityMultiplier,l=void 0===c?1:c,f=r.frictionAir,d=void 0===f?0:f,canvas=document.getElementById("simulation");if(!canvas)throw new Error("canvas element missing");var v={height:550,width:850},h=Object(o.a)(canvas,{sizes:v,renderOptions:{wireframes:!1}}),w=h.world,m=h.render,y=h.engine;w.gravity.scale*=l;var O={frictionAir:Math.pow(d,1)/10},x=t.Vector.create(150,v.height/1.25),j=t.Bodies.circle(x.x,x.y,10,O),E=t.Constraint.create({pointA:t.Vector.clone(j.position),stiffness:.01,bodyB:j,render:{type:"line"}});t.World.add(w,[j,E]);var M,R,P=t.Mouse.create(m.canvas),D=t.MouseConstraint.create(y,{mouse:P,constraint:{stiffness:.02,render:{visible:!1}}}),F=!1;t.Events.on(D,"enddrag",(function(e){e.body===j&&(R=new Date,n(),F=!0)})),t.Events.on(y,"afterUpdate",(function(e){F&&Math.abs(j.position.x-x.x)<20&&Math.abs(j.position.y-x.y)<20&&(M=j,F=!1,j=t.Bodies.circle(x.x,x.y,10,O),E.bodyB=j,setTimeout((function(){t.World.add(w,j)}),1e3)),M&&M.position.y>window.innerHeight&&(M=null)}));var S=[];return t.Events.on(m,"afterRender",(function(e){M&&(M.position.y>v.height?(t.World.remove(w,M),M=null,R=null):S.unshift({position:t.Vector.clone(M.position),speed:M.speed})),t.Render.startViewTransform(m),m.context.globalAlpha=.7;for(var i=0;i<S.length;i++){var n=S[i],r=n.position,o=n.speed;m.context.fillStyle="rgba(255, 255, 255, ".concat(o/20,")"),m.context.fillRect(r.x,r.y,2,2)}m.context.globalAlpha=1,t.Render.endViewTransform(m),S.length>200&&S.pop()})),Object(o.b)(D),t.World.add(w,D),setInterval((function(){if(M){var n=(new Date-R)/1e3;e(n.toFixed(1),t.Vector.magnitude(M.velocity))}}),1e3/30)}}}]);