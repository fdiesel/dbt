"use strict";(self.webpackChunkdbt=self.webpackChunkdbt||[]).push([[592],{7910:(_,l,n)=>{n.d(l,{V:()=>i});var e=n(1571);class i{constructor(){}get(o,r){const c=localStorage.getItem(`${o}-${r}`);return c?JSON.parse(c):void 0}set(o,r,c){localStorage.setItem(`${o}-${r}`,JSON.stringify(c))}}i.\u0275fac=function(o){return new(o||i)},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})},6702:(_,l,n)=>{n.d(l,{U:()=>t});var e=n(1571),i=n(6895);class t{constructor(){this.date=new Date,this.onDateChange=new e.vpe}ngOnInit(){this.emit()}prev(){this.date=new Date(this.date.setDate(this.date.getDate()-1)),this.emit()}next(){this.date=new Date(this.date.setDate(this.date.getDate()+1)),this.emit()}emit(){this.onDateChange.emit(this.date.toISOString().substring(0,10))}}t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-day-selector"]],outputs:{onDateChange:"onDateChange"},decls:11,vars:4,consts:[[1,"row","g-2"],[1,"col-auto"],[1,"btn","btn-lg","btn-link",3,"click"],[1,"bi","bi-caret-left-fill"],[1,"col","d-flex","justify-content-center","align-items-center"],[1,"bi","bi-caret-right-fill"]],template:function(r,c){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"button",2),e.NdJ("click",function(){return c.prev()}),e._UZ(3,"i",3),e.qZA()(),e.TgZ(4,"div",4)(5,"span"),e._uU(6),e.ALo(7,"date"),e.qZA()(),e.TgZ(8,"div",1)(9,"button",2),e.NdJ("click",function(){return c.next()}),e._UZ(10,"i",5),e.qZA()()()),2&r&&(e.xp6(6),e.Oqu(e.xi3(7,1,c.date,"dd / MM / yyyy")))},dependencies:[i.uU],encapsulation:2})},5404:(_,l,n)=>{n.d(l,{n:()=>t});var e=n(6895),i=n(1571);class t{}t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[e.ez]})},224:(_,l,n)=>{n.d(l,{g:()=>o});var e=n(6895),i=n(6256),t=n(1571);class o{}o.\u0275fac=function(c){return new(c||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[e.ez,i.t]})},621:(_,l,n)=>{n.d(l,{e:()=>u});var e=n(1571),i=n(7579);class t{constructor(){this.swipe=new i.x}}t.\u0275fac=function(s){return new(s||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"});const o=["boundary"],r=["drag"],c=["before"],f=["center"],h=["after"],v=[[["","before",""]],[["","content",""]],[["","after",""]]];class u{constructor(s,d){this.renderer=s,this.service=d,this.beforeWidth=0,this.afterWidth=0,this.position="center",this.doScrollSnap=!0}ngAfterViewInit(){this.beforeWidth=this.beforeElement.nativeElement.offsetWidth,this.afterWidth=this.afterElement.nativeElement.offsetWidth,this.boundaryElement.nativeElement.scroll({top:0,left:this.beforeWidth}),this.swipe$$=this.service.swipe.subscribe(()=>{"center"!==this.position&&this.moveTo("center")})}moveTo(s){switch("center"!==s&&this.service.swipe.next(),this.position=s,s){case"before":this.boundaryElement.nativeElement.scroll({top:0,left:this.beforeWidth+this.afterWidth,behavior:"smooth"});break;case"center":this.boundaryElement.nativeElement.scroll({top:0,left:this.beforeWidth,behavior:"smooth"});break;case"after":this.boundaryElement.nativeElement.scroll({top:0,left:0,behavior:"smooth"})}}blockScrollSnap(){this.doScrollSnap=!1}scrollSnap(){this.doScrollSnap&&(clearTimeout(this.scrollTimeout),this.scrollTimeout=setTimeout(()=>{this.snap()},100))}snap(){this.doScrollSnap=!0;const s=this.boundaryElement.nativeElement.scrollLeft;this.moveTo(s<this.beforeWidth/2?"after":s>this.beforeWidth+this.afterWidth/2?"before":"center")}ngOnDestroy(){this.swipe$$.unsubscribe()}}u.\u0275fac=function(s){return new(s||u)(e.Y36(e.Qsj),e.Y36(t))},u.\u0275cmp=e.Xpm({type:u,selectors:[["","swipe-options",""]],viewQuery:function(s,d){if(1&s&&(e.Gf(o,5),e.Gf(r,5),e.Gf(c,5),e.Gf(f,5),e.Gf(h,5)),2&s){let a;e.iGM(a=e.CRH())&&(d.boundaryElement=a.first),e.iGM(a=e.CRH())&&(d.dragElement=a.first),e.iGM(a=e.CRH())&&(d.beforeElement=a.first),e.iGM(a=e.CRH())&&(d.centerElement=a.first),e.iGM(a=e.CRH())&&(d.afterElement=a.first)}},attrs:["swipe-options",""],ngContentSelectors:["[before]","[content]","[after]"],decls:13,vars:0,consts:[[1,"boundary",3,"touchstart","touchend","scroll"],["boundary",""],[1,"drag"],["drag",""],[1,"item","before"],["before",""],[1,"item","center"],["center",""],[1,"item","after"],["after",""]],template:function(s,d){1&s&&(e.F$t(v),e.TgZ(0,"div",0,1),e.NdJ("touchstart",function(){return d.blockScrollSnap()})("touchend",function(){return d.snap()})("scroll",function(){return d.scrollSnap()}),e.TgZ(2,"div",2,3)(4,"div",4,5),e.Hsn(6),e.qZA(),e.TgZ(7,"div",6,7),e.Hsn(9,1),e.qZA(),e.TgZ(10,"div",8,9),e.Hsn(12,2),e.qZA()()())},styles:[".boundary[_ngcontent-%COMP%]{width:100%;overflow-x:scroll;-ms-overflow-style:none;scrollbar-width:none;-webkit-overflow-scrolling:touch;overscroll-behavior-x:none}.boundary[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.drag[_ngcontent-%COMP%]{width:100%;display:flex;align-items:stretch}.center[_ngcontent-%COMP%]{width:100%}.item[_ngcontent-%COMP%]{flex-shrink:0}"]})},6256:(_,l,n)=>{n.d(l,{t:()=>t});var e=n(6895),i=n(1571);class t{}t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[e.ez]})}}]);