import{a as Ne,b as Z,f as _e}from"./chunk-S624VC6X.js";import{g as M,o as J}from"./chunk-ESWZQD2E.js";import{a as $e}from"./chunk-7PEWHNW2.js";import{P as ke,Q as De,R as we,Ta as Re,Ya as ee,Za as Ie,_ as Me,aa as xe,cb as Ee,ea as F,fb as Oe,ma as A,pa as Se,pb as Ve,wb as te}from"./chunk-WYTIB752.js";import{Aa as le,Ba as m,C as Q,Ca as f,Cb as K,D as re,Gb as N,Hb as ue,I as u,Ia as b,Ib as me,Ja as H,Jb as _,L as v,Lb as w,Lc as T,M as y,Ma as k,N as ae,Oc as h,U as W,Vb as fe,W as ce,Wb as Ce,Xb as C,Yb as z,Zb as ze,bc as I,ec as E,ed as ye,fa as he,ga as a,gc as d,hc as O,ic as V,kd as be,la as X,lb as U,lc as L,mb as s,mc as G,na as x,nb as de,nc as Y,pc as ge,q as p,qc as ve,r as B,rb as q,sa as S,tb as D,ub as R,v as oe,vb as pe,w as se,yc as $}from"./chunk-INZIC73M.js";var Te=["*"],We=["inputElement"],Le=["nz-checkbox",""],Ge=(i,j)=>j.value;function Ye(i,j){if(i&1){let e=I();C(0,"label",1),E("nzCheckedChange",function(n){let o=m(e).$implicit,r=d();return f(r.onCheckedChange(o,n))}),C(1,"span"),ge(2),z()()}if(i&2){let e=j.$implicit,t=d();_("nzDisabled",e.disabled||t.nzDisabled)("nzChecked",e.checked),U(2),ve(e.label)}}var Ze=(()=>{class i{constructor(){this.nzOnChange=new b,this.checkboxList=[]}addCheckbox(e){this.checkboxList.push(e)}removeCheckbox(e){this.checkboxList.splice(this.checkboxList.indexOf(e),1)}onChange(){let e=this.checkboxList.filter(t=>t.nzChecked).map(t=>t.nzValue);this.nzOnChange.emit(e)}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=D({type:i,selectors:[["nz-checkbox-wrapper"]],hostAttrs:[1,"ant-checkbox-group"],outputs:{nzOnChange:"nzOnChange"},exportAs:["nzCheckboxWrapper"],ngContentSelectors:Te,decls:1,vars:0,template:function(t,n){t&1&&(O(),V(0))},encapsulation:2,changeDetection:0})}}return i})(),Fe=(()=>{class i{innerCheckedChange(e){this.nzDisabled||(this.nzChecked=e,this.onChange(this.nzChecked),this.nzCheckedChange.emit(this.nzChecked),this.nzCheckboxWrapperComponent&&this.nzCheckboxWrapperComponent.onChange())}writeValue(e){this.nzChecked=e,this.cdr.markForCheck()}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.nzDisabled=this.isNzDisableFirstChange&&this.nzDisabled||e,this.isNzDisableFirstChange=!1,this.cdr.markForCheck()}focus(){this.focusMonitor.focusVia(this.inputElement,"keyboard")}blur(){this.inputElement.nativeElement.blur()}constructor(e,t,n,o,r){this.ngZone=e,this.elementRef=t,this.cdr=n,this.focusMonitor=o,this.directionality=r,this.dir="ltr",this.destroy$=new p,this.isNzDisableFirstChange=!0,this.onChange=()=>{},this.onTouched=()=>{},this.nzCheckedChange=new b,this.nzValue=null,this.nzAutoFocus=!1,this.nzDisabled=!1,this.nzIndeterminate=!1,this.nzChecked=!1,this.nzId=null,this.nzCheckboxWrapperComponent=S(Ze,{optional:!0}),this.nzFormStatusService=S($e,{optional:!0})}ngOnInit(){this.focusMonitor.monitor(this.elementRef,!0).pipe(a(this.destroy$)).subscribe(e=>{e||Promise.resolve().then(()=>this.onTouched())}),this.nzCheckboxWrapperComponent&&this.nzCheckboxWrapperComponent.addCheckbox(this),this.directionality.change.pipe(a(this.destroy$)).subscribe(e=>{this.dir=e,this.cdr.detectChanges()}),this.dir=this.directionality.value,this.ngZone.runOutsideAngular(()=>{u(this.elementRef.nativeElement,"click").pipe(a(this.destroy$)).subscribe(e=>{e.preventDefault(),this.focus(),!this.nzDisabled&&this.ngZone.run(()=>{this.innerCheckedChange(!this.nzChecked),this.cdr.markForCheck()})}),u(this.inputElement.nativeElement,"click").pipe(a(this.destroy$)).subscribe(e=>e.stopPropagation())})}ngAfterViewInit(){this.nzAutoFocus&&this.focus()}ngOnDestroy(){this.focusMonitor.stopMonitoring(this.elementRef),this.nzCheckboxWrapperComponent&&this.nzCheckboxWrapperComponent.removeCheckbox(this),this.destroy$.next(),this.destroy$.complete()}static{this.\u0275fac=function(t){return new(t||i)(s(H),s(k),s(T),s(te),s(F))}}static{this.\u0275cmp=D({type:i,selectors:[["","nz-checkbox",""]],viewQuery:function(t,n){if(t&1&&L(We,7),t&2){let o;G(o=Y())&&(n.inputElement=o.first)}},hostAttrs:[1,"ant-checkbox-wrapper"],hostVars:6,hostBindings:function(t,n){t&2&&w("ant-checkbox-wrapper-in-form-item",!!n.nzFormStatusService)("ant-checkbox-wrapper-checked",n.nzChecked)("ant-checkbox-rtl",n.dir==="rtl")},inputs:{nzValue:"nzValue",nzAutoFocus:[2,"nzAutoFocus","nzAutoFocus",h],nzDisabled:[2,"nzDisabled","nzDisabled",h],nzIndeterminate:[2,"nzIndeterminate","nzIndeterminate",h],nzChecked:[2,"nzChecked","nzChecked",h],nzId:"nzId"},outputs:{nzCheckedChange:"nzCheckedChange"},exportAs:["nzCheckbox"],features:[$([{provide:ee,useExisting:X(()=>i),multi:!0}]),N],attrs:Le,ngContentSelectors:Te,decls:6,vars:11,consts:[["inputElement",""],[1,"ant-checkbox"],["type","checkbox",1,"ant-checkbox-input",3,"ngModelChange","checked","ngModel","disabled"],[1,"ant-checkbox-inner"]],template:function(t,n){if(t&1){let o=I();O(),C(0,"span",1)(1,"input",2,0),E("ngModelChange",function(l){return m(o),f(n.innerCheckedChange(l))}),z(),ze(3,"span",3),z(),C(4,"span"),V(5),z()}t&2&&(w("ant-checkbox-checked",n.nzChecked&&!n.nzIndeterminate)("ant-checkbox-disabled",n.nzDisabled)("ant-checkbox-indeterminate",n.nzIndeterminate),U(),_("checked",n.nzChecked)("ngModel",n.nzChecked)("disabled",n.nzDisabled),me("autofocus",n.nzAutoFocus?"autofocus":null)("id",n.nzId))},dependencies:[Ve,Ie,Ee,Oe],encapsulation:2,changeDetection:0})}}return i})(),Qe=(()=>{class i{onCheckedChange(e,t){e.checked=t,this.onChange(this.options)}constructor(e,t,n,o){this.elementRef=e,this.focusMonitor=t,this.cdr=n,this.directionality=o,this.onChange=()=>{},this.onTouched=()=>{},this.options=[],this.nzDisabled=!1,this.dir="ltr",this.destroy$=new p,this.isNzDisableFirstChange=!0}ngOnInit(){this.focusMonitor.monitor(this.elementRef,!0).pipe(a(this.destroy$)).subscribe(e=>{e||Promise.resolve().then(()=>this.onTouched())}),this.directionality.change?.pipe(a(this.destroy$)).subscribe(e=>{this.dir=e,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnDestroy(){this.focusMonitor.stopMonitoring(this.elementRef),this.destroy$.next(),this.destroy$.complete()}writeValue(e){this.options=e,this.cdr.markForCheck()}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.nzDisabled=this.isNzDisableFirstChange&&this.nzDisabled||e,this.isNzDisableFirstChange=!1,this.cdr.markForCheck()}static{this.\u0275fac=function(t){return new(t||i)(s(k),s(te),s(T),s(F))}}static{this.\u0275cmp=D({type:i,selectors:[["nz-checkbox-group"]],hostAttrs:[1,"ant-checkbox-group"],hostVars:2,hostBindings:function(t,n){t&2&&w("ant-checkbox-group-rtl",n.dir==="rtl")},inputs:{nzDisabled:[2,"nzDisabled","nzDisabled",h]},exportAs:["nzCheckboxGroup"],features:[$([{provide:ee,useExisting:X(()=>i),multi:!0}]),N],decls:2,vars:0,consts:[["nz-checkbox","",1,"ant-checkbox-group-item",3,"nzDisabled","nzChecked"],["nz-checkbox","",1,"ant-checkbox-group-item",3,"nzCheckedChange","nzDisabled","nzChecked"]],template:function(t,n){t&1&&fe(0,Ye,3,3,"label",0,Ge),t&2&&Ce(n.options)},dependencies:[Fe],encapsulation:2})}}return i})(),mt=(()=>{class i{static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275mod=R({type:i})}static{this.\u0275inj=x({imports:[Fe,Qe]})}}return i})();var He=["*"];function Ue(i,j){if(i&1){let e=I();C(0,"div",0),E("@slideMotion.done",function(n){m(e);let o=d();return f(o.onAnimationEvent(n))})("mouseenter",function(){m(e);let n=d();return f(n.setMouseState(!0))})("mouseleave",function(){m(e);let n=d();return f(n.setMouseState(!1))}),V(1),z()}if(i&2){let e=d();w("ant-dropdown-rtl",e.dir==="rtl"),_("ngClass",e.nzOverlayClassName)("ngStyle",e.nzOverlayStyle)("@slideMotion",void 0)("@.disabled",!!(e.noAnimation!=null&&e.noAnimation.nzNoAnimation))("nzNoAnimation",e.noAnimation==null?null:e.noAnimation.nzNoAnimation)}}var qe="dropDown",Ke=[M.bottomLeft,M.bottomRight,M.topRight,M.topLeft],Zt=(()=>{class i{setDropdownMenuValue(e,t){this.nzDropdownMenu&&this.nzDropdownMenu.setValue(e,t)}constructor(e,t,n,o,r,l){this.nzConfigService=e,this.elementRef=t,this.overlay=n,this.renderer=o,this.viewContainerRef=r,this.platform=l,this._nzModuleName=qe,this.overlayRef=null,this.destroy$=new p,this.positionStrategy=this.overlay.position().flexibleConnectedTo(this.elementRef.nativeElement).withLockedPosition().withTransformOriginOn(".ant-dropdown"),this.inputVisible$=new B(!1),this.nzTrigger$=new B("hover"),this.overlayClose$=new p,this.nzDropdownMenu=null,this.nzTrigger="hover",this.nzMatchWidthElement=null,this.nzBackdrop=!1,this.nzClickHide=!0,this.nzDisabled=!1,this.nzVisible=!1,this.nzOverlayClassName="",this.nzOverlayStyle={},this.nzPlacement="bottomLeft",this.nzVisibleChange=new b}ngAfterViewInit(){if(this.nzDropdownMenu){let e=this.elementRef.nativeElement,t=v(u(e,"mouseenter").pipe(W(!0)),u(e,"mouseleave").pipe(W(!1))),n=this.nzDropdownMenu.mouseState$,o=v(n,t),r=u(e,"click").pipe(Q(()=>!this.nzVisible)),l=this.nzTrigger$.pipe(he(c=>c==="hover"?o:c==="click"?r:oe)),P=this.nzDropdownMenu.descendantMenuItemClick$.pipe(y(()=>this.nzClickHide),W(!1)),Ae=v(l,P,this.overlayClose$).pipe(y(()=>!this.nzDisabled)),je=v(this.inputVisible$,Ae);re([je,this.nzDropdownMenu.isChildSubMenuOpen$]).pipe(Q(([c,ie])=>c||ie),ae(150),ce(),y(()=>this.platform.isBrowser),a(this.destroy$)).subscribe(c=>{let ne=(this.nzMatchWidthElement?this.nzMatchWidthElement.nativeElement:e).getBoundingClientRect().width;if(this.nzVisible!==c&&this.nzVisibleChange.emit(c),this.nzVisible=c,c){if(!this.overlayRef)this.overlayRef=this.overlay.create({positionStrategy:this.positionStrategy,minWidth:ne,disposeOnNavigation:!0,hasBackdrop:this.nzBackdrop&&this.nzTrigger==="click",scrollStrategy:this.overlay.scrollStrategies.reposition()}),v(this.overlayRef.backdropClick(),this.overlayRef.detachments(),this.overlayRef.outsidePointerEvents().pipe(y(g=>!this.elementRef.nativeElement.contains(g.target))),this.overlayRef.keydownEvents().pipe(y(g=>g.keyCode===27&&!Me(g)))).pipe(a(this.destroy$)).subscribe(()=>{this.overlayClose$.next(!1)});else{let g=this.overlayRef.getConfig();g.minWidth=ne}this.positionStrategy.withPositions([M[this.nzPlacement],...Ke]),(!this.portal||this.portal.templateRef!==this.nzDropdownMenu.templateRef)&&(this.portal=new xe(this.nzDropdownMenu.templateRef,this.viewContainerRef)),this.overlayRef.attach(this.portal)}else this.overlayRef&&this.overlayRef.detach()}),this.nzDropdownMenu.animationStateChange$.pipe(a(this.destroy$)).subscribe(c=>{c.toState==="void"&&(this.overlayRef&&this.overlayRef.dispose(),this.overlayRef=null)})}}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete(),this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)}ngOnChanges(e){let{nzVisible:t,nzDisabled:n,nzOverlayClassName:o,nzOverlayStyle:r,nzTrigger:l}=e;if(l&&this.nzTrigger$.next(this.nzTrigger),t&&this.inputVisible$.next(this.nzVisible),n){let P=this.elementRef.nativeElement;this.nzDisabled?(this.renderer.setAttribute(P,"disabled",""),this.inputVisible$.next(!1)):this.renderer.removeAttribute(P,"disabled")}o&&this.setDropdownMenuValue("nzOverlayClassName",this.nzOverlayClassName),r&&this.setDropdownMenuValue("nzOverlayStyle",this.nzOverlayStyle)}static{this.\u0275fac=function(t){return new(t||i)(s(ke),s(k),s(Se),s(q),s(K),s(we))}}static{this.\u0275dir=pe({type:i,selectors:[["","nz-dropdown",""]],hostAttrs:[1,"ant-dropdown-trigger"],inputs:{nzDropdownMenu:"nzDropdownMenu",nzTrigger:"nzTrigger",nzMatchWidthElement:"nzMatchWidthElement",nzBackdrop:[2,"nzBackdrop","nzBackdrop",h],nzClickHide:[2,"nzClickHide","nzClickHide",h],nzDisabled:[2,"nzDisabled","nzDisabled",h],nzVisible:[2,"nzVisible","nzVisible",h],nzOverlayClassName:"nzOverlayClassName",nzOverlayStyle:"nzOverlayStyle",nzPlacement:"nzPlacement"},outputs:{nzVisibleChange:"nzVisibleChange"},exportAs:["nzDropdown"],features:[N,le]})}}return se([De()],i.prototype,"nzBackdrop",void 0),i})(),Je=(()=>{class i{static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275mod=R({type:i})}static{this.\u0275inj=x({})}}return i})();var Qt=(()=>{class i{onAnimationEvent(e){this.animationStateChange$.emit(e)}setMouseState(e){this.mouseState$.next(e)}setValue(e,t){this[e]=t,this.cdr.markForCheck()}constructor(e,t,n,o,r,l){this.cdr=e,this.elementRef=t,this.renderer=n,this.viewContainerRef=o,this.nzMenuService=r,this.directionality=l,this.mouseState$=new B(!1),this.isChildSubMenuOpen$=this.nzMenuService.isChildSubMenuOpen$,this.descendantMenuItemClick$=this.nzMenuService.descendantMenuItemClick$,this.animationStateChange$=new b,this.nzOverlayClassName="",this.nzOverlayStyle={},this.dir="ltr",this.destroy$=new p,this.noAnimation=S(J,{host:!0,optional:!0})}ngOnInit(){this.directionality.change?.pipe(a(this.destroy$)).subscribe(e=>{this.dir=e,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngAfterContentInit(){this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement),this.elementRef.nativeElement)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}static{this.\u0275fac=function(t){return new(t||i)(s(T),s(k),s(q),s(K),s(Z),s(F))}}static{this.\u0275cmp=D({type:i,selectors:[["nz-dropdown-menu"]],viewQuery:function(t,n){if(t&1&&L(de,7),t&2){let o;G(o=Y())&&(n.templateRef=o.first)}},exportAs:["nzDropdownMenu"],features:[$([Z,{provide:Ne,useValue:!0}])],ngContentSelectors:He,decls:1,vars:0,consts:[[1,"ant-dropdown",3,"mouseenter","mouseleave","ngClass","ngStyle","nzNoAnimation"]],template:function(t,n){t&1&&(O(),ue(0,Ue,2,7,"ng-template"))},dependencies:[ye,be,J],encapsulation:2,data:{animation:[Re]},changeDetection:0})}}return i})(),Xt=(()=>{class i{static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275mod=R({type:i})}static{this.\u0275inj=x({imports:[Je,_e]})}}return i})(),Ht=[new A({originX:"start",originY:"top"},{overlayX:"start",overlayY:"top"}),new A({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"}),new A({originX:"start",originY:"top"},{overlayX:"end",overlayY:"bottom"}),new A({originX:"start",originY:"top"},{overlayX:"end",overlayY:"top"})];export{Zt as a,Qt as b,Xt as c,Fe as d,Qe as e,mt as f};
