export default{name:'intersect',abstract:!0,props:{threshold:{type:Array,required:!1,default:function a(){return[0,.2]}},root:{type:'undefined'==typeof HTMLElement?Object:HTMLElement,required:!1,default:function a(){return null}},rootMargin:{type:String,required:!1,default:function a(){return'0px 0px 0px 0px'}}},mounted:function b(){var a=this;this.observer=new IntersectionObserver(function(b){b[0].isIntersecting?a.$emit('enter',[b[0]]):a.$emit('leave',[b[0]]),a.$emit('change',[b[0]])},{threshold:this.threshold,root:this.root,rootMargin:this.rootMargin}),this.$nextTick(function(){if(a.$slots.default&&1<a.$slots.default.length)console.warn('[VueIntersect] You may only wrap one element in a <intersect> component.');else if(!a.$slots.default||1>a.$slots.default.length)return void console.warn('[VueIntersect] You must have one child inside a <intersect> component.');a.observer.observe(a.$slots.default[0].elm)})},destroyed:function a(){this.observer.disconnect()},render:function a(){return this.$slots.default?this.$slots.default[0]:null}};