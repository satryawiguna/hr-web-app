(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"tw/i":function(t,e,n){"use strict";n.r(e);var o=n("ofXK"),a=n("tyNb"),c=n("PSoG"),i=n("Dojc"),r=n("YkGX"),s=n("fXoL"),b=n("AcyG"),l=n("3Pt+"),d=n("X+qR"),m=n("XhcP"),p=n("XiUz"),g=n("ifZE"),u=n("JJ8l"),f=n("VmBh"),x=n("Wp6s"),h=n("3jcq"),O=n("C+9q"),_=n("5eHb"),C=n("8u7r"),M=n("bTqV"),P=n("NFeN"),k=n("oMad"),y=n("PwzQ"),v=n("bv9b"),w=n("ZCWK");function N(t,e){1&t&&s.Tb(0,"mat-progress-bar",19)}function X(t,e){if(1&t&&(s.Yb(0,"div",20),s.Yb(1,"div",21),s.Tb(2,"app-input-text",22),s.Tb(3,"app-radio-button",23),s.Xb(),s.Xb()),2&t){const t=e.$implicit,n=s.kc();s.Eb(2),s.qc("formName",t),s.Eb(1),s.qc("formName",t)("options",n.accessValueOptions)}}let q=(()=>{class t extends O.a{constructor(t,e,n,o,a,c){super(t,e,n,o,a.group({name:["",[l.t.required]],isRequestSlug:[!0],slug:["",[l.t.required]],access_ids:["",[l.t.required]],server:["https://api.smartbiz.id/"],path:["/api/v1/application"],description:[""],is_active:[0]})),this.toastr=t,this.el=e,this.store=n,this._service=o,this.fb=a,this.access=c,this.accessOptions$=this.access.options$(1),this.accessValueOptions=[{id:"ALLOW",name:"Allow"},{id:"DENY",name:"Deny"}]}setAccess(t){this.formAccess=t}}return t.\u0275fac=function(e){return new(e||t)(s.Sb(_.b),s.Sb(s.m),s.Sb(b.j),s.Sb(d.a),s.Sb(l.c),s.Sb(C.a))},t.\u0275cmp=s.Mb({type:t,selectors:[["app-add-permission"]],features:[s.Bb],decls:27,vars:17,consts:[[1,"modal-background"],[1,"modal-body"],[3,"formGroup"],[1,"modal-top"],[1,"modal-title"],["mat-icon-button","","type","button",1,"btn-close",3,"click"],["aria-hidden","false","aria-label","close"],["mode","indeterminate",4,"ngIf"],[1,"modal-form"],["name","name","label","name",3,"formName"],[1,"slug-container"],["name","isRequestSlug","label","",3,"formName"],["name","slug","label","slug",3,"formName"],["name","access_ids","label","choose access",3,"formName","options","getControls"],["fxLayout","column","style","padding: 5px; border: 1px solid #cccccc; margin-bottom: 10px; border-radius: 8px;",4,"ngFor","ngForOf"],["name","description","label","description","textarea","true",3,"formName"],[1,"modal-action"],["mat-raised-button","","color","primary","type","submit",3,"disabled","click"],["mat-stroked-button","","color","primary","type","button",3,"disabled","click"],["mode","indeterminate"],["fxLayout","column",2,"padding","5px","border","1px solid #cccccc","margin-bottom","10px","border-radius","8px"],["fxLayout","row","fxLayoutGap","10px"],["name","data_name","label","access",3,"formName"],["name","data_value","label","access value","display","row",3,"formName","options"]],template:function(t,e){1&t&&(s.Yb(0,"div",0),s.Yb(1,"div",1),s.Yb(2,"form",2),s.Yb(3,"div",3),s.Yb(4,"h2",4),s.Lc(5),s.lc(6,"titlecase"),s.Xb(),s.Yb(7,"button",5),s.gc("click",(function(t){return e.cancel()})),s.Yb(8,"mat-icon",6),s.Lc(9,"close"),s.Xb(),s.Xb(),s.Xb(),s.Jc(10,N,1,0,"mat-progress-bar",7),s.Yb(11,"div",8),s.Tb(12,"app-input-text",9),s.Yb(13,"div",10),s.Tb(14,"app-checkbox",11),s.Tb(15,"app-input-text",12),s.Xb(),s.Yb(16,"app-select-multiple",13),s.gc("getControls",(function(t){return e.setAccess(t)})),s.lc(17,"async"),s.Xb(),s.Jc(18,X,4,3,"div",14),s.Tb(19,"app-input-text",15),s.Xb(),s.Yb(20,"div",16),s.Yb(21,"button",17),s.gc("click",(function(t){return e.onSubmit(!0)})),s.Lc(22," Save & Close "),s.Xb(),s.Yb(23,"button",17),s.gc("click",(function(t){return e.onSubmit(!1)})),s.Lc(24," Save "),s.Xb(),s.Yb(25,"button",18),s.gc("click",(function(t){return e.cancel()})),s.Lc(26," Cancel "),s.Xb(),s.Xb(),s.Xb(),s.Xb(),s.Xb()),2&t&&(s.Eb(2),s.qc("formGroup",e.form),s.Eb(3),s.Nc("Add ",s.mc(6,13,e.componentName),""),s.Eb(5),s.qc("ngIf",e.isSubmitted),s.Eb(2),s.qc("formName",e.form),s.Eb(2),s.qc("formName",e.form),s.Eb(1),s.qc("formName",e.form),s.Eb(1),s.qc("formName",e.form)("options",s.mc(17,15,e.accessOptions$)),s.Eb(2),s.qc("ngForOf",e.formAccess),s.Eb(1),s.qc("formName",e.form),s.Eb(2),s.qc("disabled",e.isSubmitted),s.Eb(2),s.qc("disabled",e.isSubmitted),s.Eb(2),s.qc("disabled",e.isSubmitted))},directives:[l.u,l.n,l.g,M.a,P.a,o.k,u.a,k.a,y.a,o.j,v.a,p.d,p.e,w.a],pipes:[o.s,o.b],styles:["","[_ngcontent-%COMP%]:root{--modal-width:500px;--modal-height:500px}button[_ngcontent-%COMP%]{margin:5px}[_nghost-%COMP%]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1000;overflow:auto}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]{border-radius:5px;height:calc(var(--modal-height) + 50px);width:var(--modal-width);background:#fff}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-top[_ngcontent-%COMP%]{padding:20px;overflow:auto}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-top[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]{font-size:22px;color:#5ba5d3;text-decoration:underline;float:left}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-top[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]{float:right;padding:0;margin:0}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-top[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%]{min-width:34px}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]{padding:0 50px;height:calc(var(--modal-height) - 150px);overflow:auto}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-action[_ngcontent-%COMP%]{padding:20px;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:30%;text-align:center}[_nghost-%COMP%]     .mat-button .mat-button-focus-overlay{background-color:transparent}.modal-background[_ngcontent-%COMP%]{position:fixed;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.4);z-index:900}.mat-raised-button[_ngcontent-%COMP%]{background-color:#5ba5d3;color:#fff}.mat-stroked-button[_ngcontent-%COMP%]{border-color:#5ba5d3;color:#5ba5d3}.checkbox-container[_ngcontent-%COMP%], .slug-container[_ngcontent-%COMP%]{width:100%;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.checkbox-container[_ngcontent-%COMP%]   app-input-text[_ngcontent-%COMP%], .slug-container[_ngcontent-%COMP%]   app-input-text[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1 0 auto}.checkbox-container[_ngcontent-%COMP%]   app-checkbox[_ngcontent-%COMP%], .slug-container[_ngcontent-%COMP%]   app-checkbox[_ngcontent-%COMP%]{-webkit-box-flex:0;flex:0 0 auto;margin-right:10px}"]}),t})();var Y=n("Rq+Q"),E=n("LRne"),S=n("vkgz"),j=n("eIep"),L=n("bOdf"),T=n("lJxs");function A(t,e){1&t&&s.Tb(0,"mat-progress-bar",19)}function z(t,e){if(1&t&&(s.Yb(0,"div",20),s.Yb(1,"div",21),s.Tb(2,"app-input-text",22),s.Tb(3,"app-radio-button",23),s.Xb(),s.Xb()),2&t){const t=e.$implicit,n=s.kc();s.Eb(2),s.qc("formName",t),s.Eb(1),s.qc("formName",t)("options",n.accessValueOptions)}}let F=(()=>{class t extends q{constructor(){super(...arguments),this.accesses=[],this.accessOptions$=Object(E.a)(null).pipe(Object(S.a)(()=>this.form.get("access_ids").disable()),Object(j.a)(()=>this.access.getOptionsFromAPI$(1).pipe(Object(L.a)(t=>this._service.detailAccess(this.initData.id).pipe(Object(S.a)(t=>this.form.get("access_ids").setValue(t.map(t=>t.id))),Object(S.a)(t=>this.accesses=t),Object(T.a)(e=>[...t,...e]))))),Object(S.a)(()=>this.form.get("access_ids").enable()))}ngOnInitInEditComponent(){Object(Y.c)(this)}onSubmit(){Object(Y.b)(this)}}return t.\u0275fac=function(e){return I(e||t)},t.\u0275cmp=s.Mb({type:t,selectors:[["app-edit-permission"]],features:[s.Bb],decls:25,vars:17,consts:[[1,"modal-background"],[1,"modal-body"],[3,"formGroup"],[1,"modal-top"],[1,"modal-title"],["mat-icon-button","","type","button",1,"btn-close",3,"click"],["aria-hidden","false","aria-label","close"],["mode","indeterminate",4,"ngIf"],[1,"modal-form"],["name","name","label","name",3,"formName"],[1,"slug-container"],["name","isRequestSlug","label","",3,"formName"],["name","slug","label","slug",3,"formName"],["name","access_ids","label","choose access",3,"data","formName","options","getControls"],["fxLayout","column","style","padding: 5px; border: 1px solid #cccccc; margin-bottom: 10px; border-radius: 8px;",4,"ngFor","ngForOf"],["name","description","label","description","textarea","true",3,"formName"],[1,"modal-action"],["mat-raised-button","","color","primary","type","submit",3,"disabled","click"],["mat-stroked-button","","color","primary","type","button",3,"disabled","click"],["mode","indeterminate"],["fxLayout","column",2,"padding","5px","border","1px solid #cccccc","margin-bottom","10px","border-radius","8px"],["fxLayout","row","fxLayoutGap","10px"],["name","data_name","label","access",3,"formName"],["name","data_value","label","access value","display","row",3,"formName","options"]],template:function(t,e){1&t&&(s.Yb(0,"div",0),s.Yb(1,"div",1),s.Yb(2,"form",2),s.Yb(3,"div",3),s.Yb(4,"h2",4),s.Lc(5),s.lc(6,"titlecase"),s.Xb(),s.Yb(7,"button",5),s.gc("click",(function(t){return e.cancel()})),s.Yb(8,"mat-icon",6),s.Lc(9,"close"),s.Xb(),s.Xb(),s.Xb(),s.Jc(10,A,1,0,"mat-progress-bar",7),s.Yb(11,"div",8),s.Tb(12,"app-input-text",9),s.Yb(13,"div",10),s.Tb(14,"app-checkbox",11),s.Tb(15,"app-input-text",12),s.Xb(),s.Yb(16,"app-select-multiple",13),s.gc("getControls",(function(t){return e.setAccess(t)})),s.lc(17,"async"),s.Xb(),s.Jc(18,z,4,3,"div",14),s.Tb(19,"app-input-text",15),s.Xb(),s.Yb(20,"div",16),s.Yb(21,"button",17),s.gc("click",(function(t){return e.onSubmit()})),s.Lc(22," Save & Close "),s.Xb(),s.Yb(23,"button",18),s.gc("click",(function(t){return e.cancel()})),s.Lc(24," Cancel "),s.Xb(),s.Xb(),s.Xb(),s.Xb(),s.Xb()),2&t&&(s.Eb(2),s.qc("formGroup",e.form),s.Eb(3),s.Nc("Edit ",s.mc(6,13,e.componentName),""),s.Eb(5),s.qc("ngIf",e.isSubmitted),s.Eb(2),s.qc("formName",e.form),s.Eb(2),s.qc("formName",e.form),s.Eb(1),s.qc("formName",e.form),s.Eb(1),s.qc("data",e.accesses)("formName",e.form)("options",s.mc(17,15,e.accessOptions$)),s.Eb(2),s.qc("ngForOf",e.formAccess),s.Eb(1),s.qc("formName",e.form),s.Eb(2),s.qc("disabled",e.isSubmitted),s.Eb(2),s.qc("disabled",e.isSubmitted))},directives:[l.u,l.n,l.g,M.a,P.a,o.k,u.a,k.a,y.a,o.j,v.a,p.d,p.e,w.a],pipes:[o.s,o.b],styles:["","[_ngcontent-%COMP%]:root{--modal-width:500px;--modal-height:500px}button[_ngcontent-%COMP%]{margin:5px}[_nghost-%COMP%]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1000;overflow:auto}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]{border-radius:5px;height:calc(var(--modal-height) + 50px);width:var(--modal-width);background:#fff}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-top[_ngcontent-%COMP%]{padding:20px;overflow:auto}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-top[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]{font-size:22px;color:#5ba5d3;text-decoration:underline;float:left}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-top[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]{float:right;padding:0;margin:0}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-top[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%]{min-width:34px}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]{padding:0 50px;height:calc(var(--modal-height) - 150px);overflow:auto}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-action[_ngcontent-%COMP%]{padding:20px;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:30%;text-align:center}[_nghost-%COMP%]     .mat-button .mat-button-focus-overlay{background-color:transparent}.modal-background[_ngcontent-%COMP%]{position:fixed;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.4);z-index:900}.mat-raised-button[_ngcontent-%COMP%]{background-color:#5ba5d3;color:#fff}.mat-stroked-button[_ngcontent-%COMP%]{border-color:#5ba5d3;color:#5ba5d3}.checkbox-container[_ngcontent-%COMP%], .slug-container[_ngcontent-%COMP%]{width:100%;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.checkbox-container[_ngcontent-%COMP%]   app-input-text[_ngcontent-%COMP%], .slug-container[_ngcontent-%COMP%]   app-input-text[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1 0 auto}.checkbox-container[_ngcontent-%COMP%]   app-checkbox[_ngcontent-%COMP%], .slug-container[_ngcontent-%COMP%]   app-checkbox[_ngcontent-%COMP%]{-webkit-box-flex:0;flex:0 0 auto;margin-right:10px}"]}),t})();const I=s.ac(F);function J(t,e){if(1&t){const t=s.Zb();s.Yb(0,"app-add-permission",12),s.gc("closeModal",(function(e){return s.Cc(t),s.kc().modal(e)})),s.Xb()}if(2&t){const t=s.kc();s.rc("datatable-state",t.componentName)}}function $(t,e){if(1&t){const t=s.Zb();s.Yb(0,"app-edit-permission",13),s.gc("closeModal",(function(e){return s.Cc(t),s.kc().modal(e)})),s.Xb()}if(2&t){const t=s.kc();s.rc("datatable-state",t.componentName),s.qc("data",t.modalControl[1])}}const G=[{path:"list",component:(()=>{class t extends r.a{constructor(t,e,n,o){super(t,n,o,"/human-resource"),this.store=t,this.fb=e,this._router=n,this._service=o,this.filter=this.fb.group({query:[""],is_active:[""]}),this.componentName="permission",this.columns={name:t=>t.name,slug:t=>t.slug,created_by:t=>t.created_by,modified_by:t=>t.modified_by},this.extra$={access:t=>this._service.detailAccess(t)}}}return t.\u0275fac=function(e){return new(e||t)(s.Sb(b.j),s.Sb(l.c),s.Sb(a.b),s.Sb(d.a))},t.\u0275cmp=s.Mb({type:t,selectors:[["app-permission"]],features:[s.Bb],decls:17,vars:20,consts:[[3,"backdropClick"],["position","end","fxFlex","400px","fxFlex.sm","100%","fxFlex.xs","100%",1,"filters-container",3,"autoFocus"],["filters",""],[3,"filter","filterNav"],["name","query","label","Search",3,"formName"],["name","is_active","label","Status",3,"formName","options"],[1,"container"],[1,"card-header","mat-elevation-z0"],[1,"card-content","mat-elevation-z0"],["hide-export-button","",3,"columns","service","filter","returnUrl","datatable-state","filterNav","extra","openModal"],[3,"datatable-state","closeModal",4,"ngIf"],[3,"data","datatable-state","closeModal",4,"ngIf"],[3,"datatable-state","closeModal"],[3,"data","datatable-state","closeModal"]],template:function(t,e){1&t&&(s.Yb(0,"mat-sidenav-container",0),s.gc("backdropClick",(function(t){return e.filter_nav.toggle()})),s.Yb(1,"mat-sidenav",1,2),s.Yb(3,"app-filter-sidebar",3),s.Tb(4,"app-input-text",4),s.Tb(5,"app-select-instant",5),s.lc(6,"async"),s.Xb(),s.Xb(),s.Yb(7,"mat-sidenav-content"),s.Yb(8,"div",6),s.Yb(9,"mat-card",7),s.Yb(10,"h2"),s.Lc(11),s.lc(12,"titlecase"),s.Xb(),s.Xb(),s.Yb(13,"mat-card",8),s.Yb(14,"app-datatable",9),s.gc("openModal",(function(t){return e.modal(t)})),s.Xb(),s.Xb(),s.Xb(),s.Xb(),s.Xb(),s.Jc(15,J,1,1,"app-add-permission",10),s.Jc(16,$,1,2,"app-edit-permission",11)),2&t&&(s.Eb(1),s.qc("autoFocus",!1),s.Eb(2),s.qc("filter",e.filter)("filterNav",e.filter_nav),s.Eb(1),s.qc("formName",e.filter),s.Eb(1),s.qc("formName",e.filter)("options",s.mc(6,16,e.statusOptions$)),s.Eb(6),s.Nc("",s.mc(12,18,e.componentName)," List"),s.Eb(3),s.rc("datatable-state",e.componentName),s.qc("columns",e.columns)("service",e._service)("filter",e.filter)("returnUrl",e.returnUrl)("filterNav",e.filter_nav)("extra",e.extra$),s.Eb(1),s.qc("ngIf","add"===e.modalControl[0]),s.Eb(1),s.qc("ngIf","edit"===e.modalControl[0]))},directives:[m.b,m.a,p.b,g.a,u.a,f.a,m.c,x.a,h.a,o.k,q,F],pipes:[o.b,o.s],styles:["",".card-header[_ngcontent-%COMP%]{margin:25px 25px 0}.card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700;color:#0d486c}.card-content[_ngcontent-%COMP%]{margin:-5px 25px 25px}.filters-container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;padding:15px}mat-sidenav-container[_ngcontent-%COMP%]{height:90vh}mat-sidenav-content[_ngcontent-%COMP%]{background-color:#f5f7fa;width:100%;height:100%}.datatable-top[_ngcontent-%COMP%]{padding:0 5px;-webkit-box-pack:justify;justify-content:space-between}.datatable-top[_ngcontent-%COMP%], .datatable-top[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.datatable-top[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{padding:15px}.datatable-top[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:end;align-items:flex-end;padding:15px}.datatable-top[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding-left:5px;padding-right:5px}.datatable[_ngcontent-%COMP%]{width:100%;height:100%}.datatable[_ngcontent-%COMP%], [_nghost-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}[_nghost-%COMP%]  .mat-drawer-backdrop.mat-drawer-shown{background-color:transparent!important}"]}),t})(),canActivate:[c.a,i.a],data:{breadcrumbs:!0,text:"List",componentName:"access",role:["super-admin"]}},{path:"",pathMatch:"full",redirectTo:"list"}];let R=(()=>{class t{}return t.\u0275mod=s.Qb({type:t}),t.\u0275inj=s.Pb({factory:function(e){return new(e||t)},imports:[[a.e.forChild(G)],a.e]}),t})();var V=n("OS5G");n.d(e,"PermissionModule",(function(){return B}));let B=(()=>{class t{}return t.\u0275mod=s.Qb({type:t}),t.\u0275inj=s.Pb({factory:function(e){return new(e||t)},imports:[[o.c,R,V.a]]}),t})()}}]);