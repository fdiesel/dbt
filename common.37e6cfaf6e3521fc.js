"use strict";(self.webpackChunkdbt=self.webpackChunkdbt||[]).push([[592],{7910:(f,_,t)=>{t.d(_,{V:()=>s});var e=t(1571);class s{constructor(){}get(o,c){const l=localStorage.getItem(`${o}-${c}`);return l?JSON.parse(l):void 0}set(o,c,l){localStorage.setItem(`${o}-${c}`,JSON.stringify(l))}}s.\u0275fac=function(o){return new(o||s)},s.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})},6702:(f,_,t)=>{t.d(_,{U:()=>n});var e=t(1571),s=t(6895);class n{constructor(){this.date=new Date,this.onDateChange=new e.vpe}ngOnInit(){this.emit()}prev(){this.date=new Date(this.date.setDate(this.date.getDate()-1)),this.emit()}next(){this.date=new Date(this.date.setDate(this.date.getDate()+1)),this.emit()}emit(){this.onDateChange.emit(this.date.toISOString().substring(0,10))}}n.\u0275fac=function(c){return new(c||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-day-selector"]],outputs:{onDateChange:"onDateChange"},decls:11,vars:4,consts:[[1,"row","g-2"],[1,"col-auto"],[1,"btn","btn-lg","btn-link",3,"click"],[1,"bi","bi-caret-left-fill"],[1,"col","d-flex","justify-content-center","align-items-center"],[1,"bi","bi-caret-right-fill"]],template:function(c,l){1&c&&(e.TgZ(0,"div",0)(1,"div",1)(2,"button",2),e.NdJ("click",function(){return l.prev()}),e._UZ(3,"i",3),e.qZA()(),e.TgZ(4,"div",4)(5,"span"),e._uU(6),e.ALo(7,"date"),e.qZA()(),e.TgZ(8,"div",1)(9,"button",2),e.NdJ("click",function(){return l.next()}),e._UZ(10,"i",5),e.qZA()()()),2&c&&(e.xp6(6),e.Oqu(e.xi3(7,1,l.date,"dd / MM / yyyy")))},dependencies:[s.uU],encapsulation:2})},5404:(f,_,t)=>{t.d(_,{n:()=>n});var e=t(6895),s=t(1571);class n{}n.\u0275fac=function(c){return new(c||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[e.ez]})},224:(f,_,t)=>{t.d(_,{g:()=>o});var e=t(6895),s=t(4290),n=t(1571);class o{}o.\u0275fac=function(l){return new(l||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[e.ez,s.E]})},4290:(f,_,t)=>{t.d(_,{E:()=>S,M:()=>b});var e=t(1571),s=t(7579);const n=["boundary"],o=["drag"],c=["center"],l=["before"],u=["after"],h=["ngx-swipe-options",""],m=[[["","before",""]],[["","content",""]],[["","after",""]]],g=["[before]","[content]","[after]"];let v=(()=>{class i{constructor(){this.swipe=new s.x}}return i.\u0275fac=function(r){return new(r||i)},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),b=(()=>{class i{constructor(r,d){this.renderer=r,this.service=d,this.centerWidth=0,this.beforeWidth=0,this.afterWidth=0,this.position="center",this.doScrollSnap=!0}ngAfterViewInit(){this.beforeWidth=this.beforeElement.nativeElement.offsetWidth,this.afterWidth=this.afterElement.nativeElement.offsetWidth,this.boundaryElement.nativeElement.scroll({top:0,left:this.beforeWidth}),this.swipe$$=this.service.swipe.subscribe(()=>{"center"!==this.position&&this.moveTo("center")})}moveTo(r){switch("center"!==r&&this.service.swipe.next(),this.position=r,r){case"before":this.boundaryElement.nativeElement.scroll({top:0,left:this.beforeWidth+this.afterWidth,behavior:"smooth"});break;case"center":this.boundaryElement.nativeElement.scroll({top:0,left:this.beforeWidth,behavior:"smooth"});break;case"after":this.boundaryElement.nativeElement.scroll({top:0,left:0,behavior:"smooth"})}}blockScrollSnap(){this.doScrollSnap=!1}scrollSnap(){this.doScrollSnap&&(clearTimeout(this.scrollTimeout),this.scrollTimeout=setTimeout(()=>{this.snap()},100))}snap(){this.doScrollSnap=!0;const r=this.boundaryElement.nativeElement.scrollLeft;this.moveTo(r<this.beforeWidth/2?"after":r>this.beforeWidth+this.afterWidth/2?"before":"center")}ngOnDestroy(){this.swipe$$.unsubscribe()}}return i.\u0275fac=function(r){return new(r||i)(e.Y36(e.Qsj),e.Y36(v))},i.\u0275cmp=e.Xpm({type:i,selectors:[["","ngx-swipe-options",""]],viewQuery:function(r,d){if(1&r&&(e.Gf(n,5),e.Gf(o,5),e.Gf(c,5),e.Gf(l,5),e.Gf(u,5)),2&r){let a;e.iGM(a=e.CRH())&&(d.boundaryElement=a.first),e.iGM(a=e.CRH())&&(d.dragElement=a.first),e.iGM(a=e.CRH())&&(d.centerElement=a.first),e.iGM(a=e.CRH())&&(d.beforeElement=a.first),e.iGM(a=e.CRH())&&(d.afterElement=a.first)}},attrs:h,ngContentSelectors:g,decls:13,vars:0,consts:[[1,"boundary",3,"touchstart","touchend","scroll"],["boundary",""],[1,"drag"],["drag",""],[1,"item","before"],["before",""],[1,"item","center"],["center",""],[1,"item","after"],["after",""]],template:function(r,d){1&r&&(e.F$t(m),e.TgZ(0,"div",0,1),e.NdJ("touchstart",function(){return d.blockScrollSnap()})("touchend",function(){return d.snap()})("scroll",function(){return d.scrollSnap()}),e.TgZ(2,"div",2,3)(4,"div",4,5),e.Hsn(6),e.qZA(),e.TgZ(7,"div",6,7),e.Hsn(9,1),e.qZA(),e.TgZ(10,"div",8,9),e.Hsn(12,2),e.qZA()()())},styles:[".boundary[_ngcontent-%COMP%]{width:100%;overflow-x:scroll;-ms-overflow-style:none;scrollbar-width:none;-webkit-overflow-scrolling:touch;overscroll-behavior-x:none}.boundary[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.drag[_ngcontent-%COMP%]{width:100%;display:flex;align-items:stretch}.center[_ngcontent-%COMP%]{width:100%}.item[_ngcontent-%COMP%]{flex-shrink:0}"]}),i})(),S=(()=>{class i{}return i.\u0275fac=function(r){return new(r||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({}),i})()}}]);