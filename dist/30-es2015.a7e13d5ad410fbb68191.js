(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{qVoq:function(t,e,o){"use strict";o.r(e);var n=o("ofXK"),a=o("tyNb"),i=o("YkGX"),c=o("fXoL"),r=o("AcyG"),s=o("3Pt+"),l=o("JK4O"),b=o("JIr8");let d=(()=>{class t extends l.a{constructor(){super(...arguments),this.httpRoute="/role"}detailPermission(t){return this._http.get(this.baseUrl+this.httpRoute+"/detail/"+t+"/permission").pipe(Object(b.a)(this._errorHandler.handleError))}}return t.\u0275fac=function(e){return m(e||t)},t.\u0275prov=c.Ob({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const m=c.ac(d);var p=o("XhcP"),g=o("XiUz"),u=o("ifZE"),f=o("JJ8l"),x=o("VmBh"),h=o("Wp6s"),O=o("3jcq"),_=o("C+9q"),C=o("5eHb"),P=o("X+qR"),M=o("NMh1"),k=o("bTqV"),y=o("NFeN"),v=o("oMad"),w=o("PwzQ"),N=o("bv9b"),q=o("ZCWK");function X(t,e){1&t&&c.Tb(0,"mat-progress-bar",20)}function Y(t,e){if(1&t&&(c.Yb(0,"div",21),c.Yb(1,"div",22),c.Tb(2,"app-input-text",23),c.Tb(3,"app-radio-button",24),c.Xb(),c.Xb()),2&t){const t=e.$implicit,o=c.kc();c.Eb(2),c.qc("formName",t),c.Eb(1),c.qc("formName",t)("options",o.permissionValueOptions)}}let E=(()=>{class t extends _.a{constructor(t,e,o,n,a,i,c){super(t,e,o,n,a.group({group_id:["",[s.t.required]],name:["",[s.t.required]],isRequestSlug:[!0],slug:["",[s.t.required]],permission_ids:["",[s.t.required]],description:[""]})),this.toastr=t,this.el=e,this.store=o,this._service=n,this.fb=a,this.permission=i,this.group=c,this.permissionOptions$=this.permission.options$(1),this.permissionValueOptions=[{id:"ALLOW",name:"Allow"},{id:"DENY",name:"Deny"}],this.groupOptions$=this.group.options$(1)}setPermission(t){this.formPermission=t}}return t.\u0275fac=function(e){return new(e||t)(c.Sb(C.b),c.Sb(c.m),c.Sb(r.j),c.Sb(d),c.Sb(s.c),c.Sb(P.a),c.Sb(M.a))},t.\u0275cmp=c.Mb({type:t,selectors:[["app-add-role"]],features:[c.Bb],decls:29,vars:21,consts:[[1,"modal-background"],[1,"modal-body"],[3,"formGroup"],[1,"modal-top"],[1,"modal-title"],["mat-icon-button","","type","button",1,"btn-close",3,"click"],["aria-hidden","false","aria-label","close"],["mode","indeterminate",4,"ngIf"],[1,"modal-form"],["name","group_id","label","group",3,"formName","options"],["name","name","label","name",3,"formName"],[1,"slug-container"],["name","isRequestSlug","label","",3,"formName"],["name","slug","label","slug",3,"formName"],["name","permission_ids","label","choose permission",3,"formName","options","getControls"],["fxLayout","column","style","padding: 5px; border: 1px solid #cccccc; margin-bottom: 10px; border-radius: 8px;",4,"ngFor","ngForOf"],["name","description","label","description","textarea","true",3,"formName"],[1,"modal-action"],["mat-raised-button","","color","primary","type","submit",3,"disabled","click"],["mat-stroked-button","","color","primary","type","button",3,"disabled","click"],["mode","indeterminate"],["fxLayout","column",2,"padding","5px","border","1px solid #cccccc","margin-bottom","10px","border-radius","8px"],["fxLayout","row","fxLayoutGap","10px"],["name","data_name","label","permission",3,"formName"],["name","data_value","label","permission value","display","row",3,"formName","options"]],template:function(t,e){1&t&&(c.Yb(0,"div",0),c.Yb(1,"div",1),c.Yb(2,"form",2),c.Yb(3,"div",3),c.Yb(4,"h2",4),c.Lc(5),c.lc(6,"titlecase"),c.Xb(),c.Yb(7,"button",5),c.gc("click",(function(t){return e.cancel()})),c.Yb(8,"mat-icon",6),c.Lc(9,"close"),c.Xb(),c.Xb(),c.Xb(),c.Jc(10,X,1,0,"mat-progress-bar",7),c.Yb(11,"div",8),c.Tb(12,"app-select-instant",9),c.lc(13,"async"),c.Tb(14,"app-input-text",10),c.Yb(15,"div",11),c.Tb(16,"app-checkbox",12),c.Tb(17,"app-input-text",13),c.Xb(),c.Yb(18,"app-select-multiple",14),c.gc("getControls",(function(t){return e.setPermission(t)})),c.lc(19,"async"),c.Xb(),c.Jc(20,Y,4,3,"div",15),c.Tb(21,"app-input-text",16),c.Xb(),c.Yb(22,"div",17),c.Yb(23,"button",18),c.gc("click",(function(t){return e.onSubmit(!0)})),c.Lc(24," Save & Close "),c.Xb(),c.Yb(25,"button",18),c.gc("click",(function(t){return e.onSubmit(!1)})),c.Lc(26," Save "),c.Xb(),c.Yb(27,"button",19),c.gc("click",(function(t){return e.cancel()})),c.Lc(28," Cancel "),c.Xb(),c.Xb(),c.Xb(),c.Xb(),c.Xb()),2&t&&(c.Eb(2),c.qc("formGroup",e.form),c.Eb(3),c.Nc("Add ",c.mc(6,15,e.componentName),""),c.Eb(5),c.qc("ngIf",e.isSubmitted),c.Eb(2),c.qc("formName",e.form)("options",c.mc(13,17,e.groupOptions$)),c.Eb(2),c.qc("formName",e.form),c.Eb(2),c.qc("formName",e.form),c.Eb(1),c.qc("formName",e.form),c.Eb(1),c.qc("formName",e.form)("options",c.mc(19,19,e.permissionOptions$)),c.Eb(2),c.qc("ngForOf",e.formPermission),c.Eb(1),c.qc("formName",e.form),c.Eb(2),c.qc("disabled",e.isSubmitted),c.Eb(2),c.qc("disabled",e.isSubmitted),c.Eb(2),c.qc("disabled",e.isSubmitted))},directives:[s.u,s.n,s.g,k.a,y.a,n.k,x.a,f.a,v.a,w.a,n.j,N.a,g.d,g.e,q.a],pipes:[n.s,n.b],styles:["","[_ngcontent-%COMP%]:root{--modal-width:500px;--modal-height:500px}button[_ngcontent-%COMP%]{margin:5px}[_nghost-%COMP%]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1000;overflow:auto}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]{border-radius:5px;height:calc(var(--modal-height) + 50px);width:var(--modal-width);background:#fff}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-top[_ngcontent-%COMP%]{padding:20px;overflow:auto}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-top[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]{font-size:22px;color:#5ba5d3;text-decoration:underline;float:left}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-top[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]{float:right;padding:0;margin:0}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-top[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%]{min-width:34px}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]{padding:0 50px;height:calc(var(--modal-height) - 150px);overflow:auto}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-action[_ngcontent-%COMP%]{padding:20px;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:30%;text-align:center}[_nghost-%COMP%]     .mat-button .mat-button-focus-overlay{background-color:transparent}.modal-background[_ngcontent-%COMP%]{position:fixed;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.4);z-index:900}.mat-raised-button[_ngcontent-%COMP%]{background-color:#5ba5d3;color:#fff}.mat-stroked-button[_ngcontent-%COMP%]{border-color:#5ba5d3;color:#5ba5d3}.checkbox-container[_ngcontent-%COMP%], .slug-container[_ngcontent-%COMP%]{width:100%;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.checkbox-container[_ngcontent-%COMP%]   app-input-text[_ngcontent-%COMP%], .slug-container[_ngcontent-%COMP%]   app-input-text[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1 0 auto}.checkbox-container[_ngcontent-%COMP%]   app-checkbox[_ngcontent-%COMP%], .slug-container[_ngcontent-%COMP%]   app-checkbox[_ngcontent-%COMP%]{-webkit-box-flex:0;flex:0 0 auto;margin-right:10px}"]}),t})();var S=o("Rq+Q"),j=o("LRne"),L=o("vkgz"),T=o("eIep"),$=o("bOdf"),I=o("lJxs");function F(t,e){1&t&&c.Tb(0,"mat-progress-bar",20)}function J(t,e){if(1&t&&(c.Yb(0,"div",21),c.Yb(1,"div",22),c.Tb(2,"app-input-text",23),c.Tb(3,"app-radio-button",24),c.Xb(),c.Xb()),2&t){const t=e.$implicit,o=c.kc();c.Eb(2),c.qc("formName",t),c.Eb(1),c.qc("formName",t)("options",o.permissionValueOptions)}}let z=(()=>{class t extends E{constructor(){super(...arguments),this.permissions=[],this.permissionOptions$=Object(j.a)(null).pipe(Object(L.a)(()=>this.form.get("permission_ids").disable()),Object(T.a)(()=>this.permission.getOptionsFromAPI$(1).pipe(Object($.a)(t=>this._service.detailPermission(this.initData.id).pipe(Object(L.a)(t=>this.form.get("permission_ids").setValue(t.map(t=>t.id))),Object(L.a)(t=>this.permissions=t),Object(I.a)(e=>[...t,...e]))))),Object(L.a)(()=>this.form.get("permission_ids").enable()))}ngOnInitInEditComponent(){Object(S.c)(this)}onSubmit(){Object(S.b)(this)}}return t.\u0275fac=function(e){return G(e||t)},t.\u0275cmp=c.Mb({type:t,selectors:[["app-edit-role"]],features:[c.Bb],decls:27,vars:21,consts:[[1,"modal-background"],[1,"modal-body"],[3,"formGroup"],[1,"modal-top"],[1,"modal-title"],["mat-icon-button","","type","button",1,"btn-close",3,"click"],["aria-hidden","false","aria-label","close"],["mode","indeterminate",4,"ngIf"],[1,"modal-form"],["name","group_id","label","group",3,"formName","options"],["name","name","label","name",3,"formName"],[1,"slug-container"],["name","isRequestSlug","label","",3,"formName"],["name","slug","label","slug",3,"formName"],["name","permission_ids","label","choose permission",3,"data","formName","options","getControls"],["fxLayout","column","style","padding: 5px; border: 1px solid #cccccc; margin-bottom: 10px; border-radius: 8px;",4,"ngFor","ngForOf"],["name","description","label","description","textarea","true",3,"formName"],[1,"modal-action"],["mat-raised-button","","color","primary","type","submit",3,"disabled","click"],["mat-stroked-button","","color","primary","type","button",3,"disabled","click"],["mode","indeterminate"],["fxLayout","column",2,"padding","5px","border","1px solid #cccccc","margin-bottom","10px","border-radius","8px"],["fxLayout","row","fxLayoutGap","10px"],["name","data_name","label","permission",3,"formName"],["name","data_value","label","permission value","display","row",3,"formName","options"]],template:function(t,e){1&t&&(c.Yb(0,"div",0),c.Yb(1,"div",1),c.Yb(2,"form",2),c.Yb(3,"div",3),c.Yb(4,"h2",4),c.Lc(5),c.lc(6,"titlecase"),c.Xb(),c.Yb(7,"button",5),c.gc("click",(function(t){return e.cancel()})),c.Yb(8,"mat-icon",6),c.Lc(9,"close"),c.Xb(),c.Xb(),c.Xb(),c.Jc(10,F,1,0,"mat-progress-bar",7),c.Yb(11,"div",8),c.Tb(12,"app-select-instant",9),c.lc(13,"async"),c.Tb(14,"app-input-text",10),c.Yb(15,"div",11),c.Tb(16,"app-checkbox",12),c.Tb(17,"app-input-text",13),c.Xb(),c.Yb(18,"app-select-multiple",14),c.gc("getControls",(function(t){return e.setPermission(t)})),c.lc(19,"async"),c.Xb(),c.Jc(20,J,4,3,"div",15),c.Tb(21,"app-input-text",16),c.Xb(),c.Yb(22,"div",17),c.Yb(23,"button",18),c.gc("click",(function(t){return e.onSubmit()})),c.Lc(24," Save & Close "),c.Xb(),c.Yb(25,"button",19),c.gc("click",(function(t){return e.cancel()})),c.Lc(26," Cancel "),c.Xb(),c.Xb(),c.Xb(),c.Xb(),c.Xb()),2&t&&(c.Eb(2),c.qc("formGroup",e.form),c.Eb(3),c.Nc("Edit ",c.mc(6,15,e.componentName),""),c.Eb(5),c.qc("ngIf",e.isSubmitted),c.Eb(2),c.qc("formName",e.form)("options",c.mc(13,17,e.groupOptions$)),c.Eb(2),c.qc("formName",e.form),c.Eb(2),c.qc("formName",e.form),c.Eb(1),c.qc("formName",e.form),c.Eb(1),c.qc("data",e.permissions)("formName",e.form)("options",c.mc(19,19,e.permissionOptions$)),c.Eb(2),c.qc("ngForOf",e.formPermission),c.Eb(1),c.qc("formName",e.form),c.Eb(2),c.qc("disabled",e.isSubmitted),c.Eb(2),c.qc("disabled",e.isSubmitted))},directives:[s.u,s.n,s.g,k.a,y.a,n.k,x.a,f.a,v.a,w.a,n.j,N.a,g.d,g.e,q.a],pipes:[n.s,n.b],styles:["","[_ngcontent-%COMP%]:root{--modal-width:500px;--modal-height:500px}button[_ngcontent-%COMP%]{margin:5px}[_nghost-%COMP%]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1000;overflow:auto}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]{border-radius:5px;height:calc(var(--modal-height) + 50px);width:var(--modal-width);background:#fff}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-top[_ngcontent-%COMP%]{padding:20px;overflow:auto}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-top[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]{font-size:22px;color:#5ba5d3;text-decoration:underline;float:left}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-top[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]{float:right;padding:0;margin:0}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-top[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%]{min-width:34px}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]{padding:0 50px;height:calc(var(--modal-height) - 150px);overflow:auto}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-action[_ngcontent-%COMP%]{padding:20px;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:30%;text-align:center}[_nghost-%COMP%]     .mat-button .mat-button-focus-overlay{background-color:transparent}.modal-background[_ngcontent-%COMP%]{position:fixed;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.4);z-index:900}.mat-raised-button[_ngcontent-%COMP%]{background-color:#5ba5d3;color:#fff}.mat-stroked-button[_ngcontent-%COMP%]{border-color:#5ba5d3;color:#5ba5d3}.checkbox-container[_ngcontent-%COMP%], .slug-container[_ngcontent-%COMP%]{width:100%;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.checkbox-container[_ngcontent-%COMP%]   app-input-text[_ngcontent-%COMP%], .slug-container[_ngcontent-%COMP%]   app-input-text[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1 0 auto}.checkbox-container[_ngcontent-%COMP%]   app-checkbox[_ngcontent-%COMP%], .slug-container[_ngcontent-%COMP%]   app-checkbox[_ngcontent-%COMP%]{-webkit-box-flex:0;flex:0 0 auto;margin-right:10px}"]}),t})();const G=c.ac(z);function R(t,e){if(1&t){const t=c.Zb();c.Yb(0,"app-add-role",12),c.gc("closeModal",(function(e){return c.Cc(t),c.kc().modal(e)})),c.Xb()}if(2&t){const t=c.kc();c.rc("datatable-state",t.componentName)}}function V(t,e){if(1&t){const t=c.Zb();c.Yb(0,"app-edit-role",13),c.gc("closeModal",(function(e){return c.Cc(t),c.kc().modal(e)})),c.Xb()}if(2&t){const t=c.kc();c.rc("datatable-state",t.componentName),c.qc("data",t.modalControl[1])}}let A=(()=>{class t extends i.a{constructor(t,e,o,n){super(t,o,n,"/human-resource"),this.store=t,this.fb=e,this._router=o,this._service=n,this.filter=this.fb.group({query:[""],is_active:[""]}),this.componentName="role",this.columns={name:t=>t.name,slug:t=>t.slug,created_by:t=>t.created_by,modified_by:t=>t.modified_by},this.extra$={permission:t=>this._service.detailPermission(t)}}}return t.\u0275fac=function(e){return new(e||t)(c.Sb(r.j),c.Sb(s.c),c.Sb(a.b),c.Sb(d))},t.\u0275cmp=c.Mb({type:t,selectors:[["app-role"]],features:[c.Bb],decls:17,vars:20,consts:[[3,"backdropClick"],["position","end","fxFlex","400px","fxFlex.sm","100%","fxFlex.xs","100%",1,"filters-container",3,"autoFocus"],["filters",""],[3,"filter","filterNav"],["name","query","label","Search",3,"formName"],["name","is_active","label","Status",3,"formName","options"],[1,"container"],[1,"card-header","mat-elevation-z0"],[1,"card-content","mat-elevation-z0"],["hide-export-button","",3,"columns","service","filter","returnUrl","datatable-state","filterNav","extra","openModal"],[3,"datatable-state","closeModal",4,"ngIf"],[3,"data","datatable-state","closeModal",4,"ngIf"],[3,"datatable-state","closeModal"],[3,"data","datatable-state","closeModal"]],template:function(t,e){1&t&&(c.Yb(0,"mat-sidenav-container",0),c.gc("backdropClick",(function(t){return e.filter_nav.toggle()})),c.Yb(1,"mat-sidenav",1,2),c.Yb(3,"app-filter-sidebar",3),c.Tb(4,"app-input-text",4),c.Tb(5,"app-select-instant",5),c.lc(6,"async"),c.Xb(),c.Xb(),c.Yb(7,"mat-sidenav-content"),c.Yb(8,"div",6),c.Yb(9,"mat-card",7),c.Yb(10,"h2"),c.Lc(11),c.lc(12,"titlecase"),c.Xb(),c.Xb(),c.Yb(13,"mat-card",8),c.Yb(14,"app-datatable",9),c.gc("openModal",(function(t){return e.modal(t)})),c.Xb(),c.Xb(),c.Xb(),c.Xb(),c.Xb(),c.Jc(15,R,1,1,"app-add-role",10),c.Jc(16,V,1,2,"app-edit-role",11)),2&t&&(c.Eb(1),c.qc("autoFocus",!1),c.Eb(2),c.qc("filter",e.filter)("filterNav",e.filter_nav),c.Eb(1),c.qc("formName",e.filter),c.Eb(1),c.qc("formName",e.filter)("options",c.mc(6,16,e.statusOptions$)),c.Eb(6),c.Nc("",c.mc(12,18,e.componentName)," List"),c.Eb(3),c.rc("datatable-state",e.componentName),c.qc("columns",e.columns)("service",e._service)("filter",e.filter)("returnUrl",e.returnUrl)("filterNav",e.filter_nav)("extra",e.extra$),c.Eb(1),c.qc("ngIf","add"===e.modalControl[0]),c.Eb(1),c.qc("ngIf","edit"===e.modalControl[0]))},directives:[p.b,p.a,g.b,u.a,f.a,x.a,p.c,h.a,O.a,n.k,E,z],pipes:[n.b,n.s],styles:["",".card-header[_ngcontent-%COMP%]{margin:25px 25px 0}.card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700;color:#0d486c}.card-content[_ngcontent-%COMP%]{margin:-5px 25px 25px}.filters-container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;padding:15px}mat-sidenav-container[_ngcontent-%COMP%]{height:90vh}mat-sidenav-content[_ngcontent-%COMP%]{background-color:#f5f7fa;width:100%;height:100%}.datatable-top[_ngcontent-%COMP%]{padding:0 5px;-webkit-box-pack:justify;justify-content:space-between}.datatable-top[_ngcontent-%COMP%], .datatable-top[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.datatable-top[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{padding:15px}.datatable-top[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:end;align-items:flex-end;padding:15px}.datatable-top[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding-left:5px;padding-right:5px}.datatable[_ngcontent-%COMP%]{width:100%;height:100%}.datatable[_ngcontent-%COMP%], [_nghost-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}[_nghost-%COMP%]  .mat-drawer-backdrop.mat-drawer-shown{background-color:transparent!important}"]}),t})();var U=o("PSoG"),B=o("Dojc");const D=[{path:"list",component:A,canActivate:[U.a,B.a],data:{breadcrumbs:!0,text:"List",componentName:"access",role:["super-admin"]}},{path:"",pathMatch:"full",redirectTo:"list"}];let Q=(()=>{class t{}return t.\u0275mod=c.Qb({type:t}),t.\u0275inj=c.Pb({factory:function(e){return new(e||t)},imports:[[a.e.forChild(D)],a.e]}),t})();var Z=o("OS5G");o.d(e,"RoleModule",(function(){return K}));let K=(()=>{class t{}return t.\u0275mod=c.Qb({type:t}),t.\u0275inj=c.Pb({factory:function(e){return new(e||t)},imports:[[n.c,Q,Z.a]]}),t})()}}]);