(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{260:function(e,n,r){"use strict";r.d(n,"a",(function(){return l})),r.d(n,"b",(function(){return f}));r(29),r(19),r(28),r(37),r(23),r(38);var t=r(13),o=r(253);function c(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(n){Object(t.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}var w={};w={sizes:{height:window.innerHeight,width:window.innerWidth},renderOptions:{}};var l=function(canvas){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:w,n=e.sizes,r=e.renderOptions,t=o.Engine.create(),c=t.world,l=o.Render.create({engine:t,canvas:canvas,options:d(d({},n),{},{wireframes:!1},r)}),f=o.Runner.create();return o.Runner.run(f,t),o.Engine.run(t),o.Render.run(l),{engine:t,runner:f,render:l,world:c}},f=function(e){e.mouse.element.removeEventListener("mousewheel",e.mouse.mousewheel),e.mouse.element.removeEventListener("DOMMouseScroll",e.mouse.mousewheel)}},453:function(e,n,r){"use strict";r.r(n),r.d(n,"initializeNewtonsCradlePreview",(function(){return c}));var t=r(253),o=r(260),c=function(){var canvas=document.getElementById("newtons-cradle-hero");if(!canvas)throw new Error("canvas element missing");var e={height:350,width:650},n=Object(o.a)(canvas,{sizes:e,renderOptions:{wireframes:!0}}),r=n.world,c=n.render,d=n.engine,w=t.Composites.newtonsCradle(e.width/3,50,5,25,200);r.gravity.scale=5e-4,t.Body.translate(w.bodies[0],{x:-200,y:-150});var l=t.Mouse.create(c.canvas),f=t.MouseConstraint.create(d,{mouse:l,constraint:{stiffness:1,render:{visible:!1}}});Object(o.b)(f),t.World.add(r,[w,f])}}}]);