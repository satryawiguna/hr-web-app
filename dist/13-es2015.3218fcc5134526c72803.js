(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{CMRa:function(t,e,n){"use strict";n.d(e,"d",(function(){return a})),n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i}));const o=n("ar4q").PhoneNumberUtil.getInstance();function a(t){return!/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi.test(t.value)&&t.value?{urlValidation:!1}:null}function c(t){return!/^[a-zA-Z0-9]+$/gi.test(t.value)&&t.value?{alphaNumericValidation:!1}:null}function r(t){return!/^[0-9]+$/gi.test(t.value)&&t.value?{numericValidation:!1}:null}function i(t){try{const e=o.parse(t.value);return t.value&&!o.isValidNumber(e)?{phoneNumberValidation:!1}:null}catch(e){}}},"x+/s":function(t,e,n){"use strict";n.r(e);var o=n("ofXK"),a=n("tyNb"),c=n("YkGX"),r=n("fXoL"),i=n("AcyG"),l=n("3Pt+"),b=n("EwSL"),m=n("XhcP"),d=n("XiUz"),p=n("ifZE"),s=n("JJ8l"),u=n("VmBh"),f=n("Wp6s"),g=n("3jcq"),x=n("C+9q"),_=n("CMRa"),h=n("5eHb"),C=n("bTqV"),M=n("NFeN"),P=n("oMad"),O=n("wT6U"),k=n("bv9b");function y(t,e){1&t&&r.Tb(0,"mat-progress-bar",27)}function v(t,e){if(1&t&&r.Tb(0,"app-select-api",28),2&t){const t=r.kc();r.qc("formName",t.form)}}let w=(()=>{class t extends x.a{constructor(t,e,n,o,a){super(t,e,n,o,a.group({company_id:["",[l.t.required]],code:["",[l.t.required,l.t.maxLength(5),l.t.minLength(5),_.a]],title:["",[l.t.required]],isRequestSlug:[!0],slug:["",[l.t.required]],country:["",[l.t.required]],state_or_province:["",[l.t.required]],city:["",[l.t.required]],address:["",[l.t.required]],postcode:["",[l.t.required,l.t.maxLength(5),l.t.minLength(5),_.b]],phone:["",[l.t.required,_.b]],fax:["",[_.b]],email:["",[l.t.required,l.t.email]],url:["",[_.d]]})),this.toastr=t,this.el=e,this.store=n,this._service=o,this.fb=a}}return t.\u0275fac=function(e){return new(e||t)(r.Sb(h.b),r.Sb(r.m),r.Sb(i.j),r.Sb(b.a),r.Sb(l.c))},t.\u0275cmp=r.Mb({type:t,selectors:[["app-add-work-area"]],features:[r.Bb],decls:33,vars:19,consts:[[1,"modal-background"],[1,"modal-body"],[3,"formGroup"],[1,"modal-top"],[1,"modal-title"],["mat-icon-button","","type","button",1,"btn-close",3,"click"],["aria-hidden","false","aria-label","close"],["mode","indeterminate",4,"ngIf"],[1,"modal-form"],["name","company_id","label","Company",3,"formName",4,"ngIf"],["name","code","label","code",3,"formName"],["name","title","label","title",3,"formName"],[1,"slug-container"],["name","isRequestSlug","label","",3,"formName"],["name","slug","label","slug",3,"formName"],["name","country","label","Country",3,"formName"],["name","state_or_province","label","State",3,"formName"],["name","city","label","City",3,"formName"],["name","address","label","Address",3,"formName"],["name","postcode","label","Postcode",3,"formName"],["name","phone","label","Phone",3,"formName"],["name","email","label","Email",3,"formName"],["name","fax","label","Fax",3,"formName"],["name","url","label","url",3,"formName"],[1,"modal-action"],["mat-raised-button","","color","primary","type","submit",3,"disabled","click"],["mat-stroked-button","","color","primary","type","button",3,"disabled","click"],["mode","indeterminate"],["name","company_id","label","Company",3,"formName"]],template:function(t,e){1&t&&(r.Yb(0,"div",0),r.Yb(1,"div",1),r.Yb(2,"form",2),r.Yb(3,"div",3),r.Yb(4,"h2",4),r.Lc(5,"Add Work Area"),r.Xb(),r.Yb(6,"button",5),r.gc("click",(function(t){return e.cancel()})),r.Yb(7,"mat-icon",6),r.Lc(8,"close"),r.Xb(),r.Xb(),r.Xb(),r.Jc(9,y,1,0,"mat-progress-bar",7),r.Yb(10,"div",8),r.Jc(11,v,1,1,"app-select-api",9),r.Tb(12,"app-input-text",10),r.Tb(13,"app-input-text",11),r.Yb(14,"div",12),r.Tb(15,"app-checkbox",13),r.Tb(16,"app-input-text",14),r.Xb(),r.Tb(17,"app-select-api",15),r.Tb(18,"app-input-text",16),r.Tb(19,"app-input-text",17),r.Tb(20,"app-input-text",18),r.Tb(21,"app-input-text",19),r.Tb(22,"app-input-text",20),r.Tb(23,"app-input-text",21),r.Tb(24,"app-input-text",22),r.Tb(25,"app-input-text",23),r.Xb(),r.Yb(26,"div",24),r.Yb(27,"button",25),r.gc("click",(function(t){return e.onSubmit(!0)})),r.Lc(28," Save & Close "),r.Xb(),r.Yb(29,"button",25),r.gc("click",(function(t){return e.onSubmit(!1)})),r.Lc(30," Save "),r.Xb(),r.Yb(31,"button",26),r.gc("click",(function(t){return e.cancel()})),r.Lc(32," Cancel "),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Xb()),2&t&&(r.Eb(2),r.qc("formGroup",e.form),r.Eb(7),r.qc("ngIf",e.isSubmitted),r.Eb(2),r.qc("ngIf",e.isSuperAdmin),r.Eb(1),r.qc("formName",e.form),r.Eb(1),r.qc("formName",e.form),r.Eb(2),r.qc("formName",e.form),r.Eb(1),r.qc("formName",e.form),r.Eb(1),r.qc("formName",e.form),r.Eb(1),r.qc("formName",e.form),r.Eb(1),r.qc("formName",e.form),r.Eb(1),r.qc("formName",e.form),r.Eb(1),r.qc("formName",e.form),r.Eb(1),r.qc("formName",e.form),r.Eb(1),r.qc("formName",e.form),r.Eb(1),r.qc("formName",e.form),r.Eb(1),r.qc("formName",e.form),r.Eb(2),r.qc("disabled",e.isSubmitted),r.Eb(2),r.qc("disabled",e.isSubmitted),r.Eb(2),r.qc("disabled",e.isSubmitted))},directives:[l.u,l.n,l.g,C.a,M.a,o.k,s.a,P.a,O.a,k.a],styles:["[_ngcontent-%COMP%]:root{--modal-width:500px;--modal-height:500px}button[_ngcontent-%COMP%]{margin:5px}[_nghost-%COMP%]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1000;overflow:auto}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]{border-radius:5px;height:calc(var(--modal-height) + 50px);width:var(--modal-width);background:#fff}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-top[_ngcontent-%COMP%]{padding:20px;overflow:auto}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-top[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]{font-size:22px;color:#5ba5d3;text-decoration:underline;float:left}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-top[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]{float:right;padding:0;margin:0}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-top[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%]{min-width:34px}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]{padding:0 50px;height:calc(var(--modal-height) - 150px);overflow:auto}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-action[_ngcontent-%COMP%]{padding:20px;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:30%;text-align:center}[_nghost-%COMP%]     .mat-button .mat-button-focus-overlay{background-color:transparent}.modal-background[_ngcontent-%COMP%]{position:fixed;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.4);z-index:900}.mat-raised-button[_ngcontent-%COMP%]{background-color:#5ba5d3;color:#fff}.mat-stroked-button[_ngcontent-%COMP%]{border-color:#5ba5d3;color:#5ba5d3}.checkbox-container[_ngcontent-%COMP%], .slug-container[_ngcontent-%COMP%]{width:100%;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.checkbox-container[_ngcontent-%COMP%]   app-input-text[_ngcontent-%COMP%], .slug-container[_ngcontent-%COMP%]   app-input-text[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1 0 auto}.checkbox-container[_ngcontent-%COMP%]   app-checkbox[_ngcontent-%COMP%], .slug-container[_ngcontent-%COMP%]   app-checkbox[_ngcontent-%COMP%]{-webkit-box-flex:0;flex:0 0 auto;margin-right:10px}",""]}),t})();var N=n("Rq+Q");function q(t,e){1&t&&r.Tb(0,"mat-progress-bar",27)}function E(t,e){if(1&t&&r.Tb(0,"app-select-api",28),2&t){const t=r.kc();r.qc("formName",t.form)}}let X=(()=>{class t extends w{ngOnInitInEditComponent(){Object(N.c)(this)}onSubmit(){Object(N.b)(this)}}return t.\u0275fac=function(e){return Y(e||t)},t.\u0275cmp=r.Mb({type:t,selectors:[["app-edit-work-area"]],features:[r.Bb],decls:31,vars:18,consts:[[1,"modal-background"],[1,"modal-body"],[3,"formGroup"],[1,"modal-top"],[1,"modal-title"],["mat-icon-button","","type","button",1,"btn-close",3,"click"],["aria-hidden","false","aria-label","close"],["mode","indeterminate",4,"ngIf"],[1,"modal-form"],["name","company_id","label","Company",3,"formName",4,"ngIf"],["name","code","label","code",3,"formName"],["name","title","label","title",3,"formName"],[1,"slug-container"],["name","isRequestSlug","label","",3,"formName"],["name","slug","label","slug",3,"formName"],["name","country","label","Country",3,"formName"],["name","state_or_province","label","State",3,"formName"],["name","city","label","City",3,"formName"],["name","address","label","Address",3,"formName"],["name","postcode","label","Postcode",3,"formName"],["name","phone","label","Phone",3,"formName"],["name","email","label","Email",3,"formName"],["name","fax","label","Fax",3,"formName"],["name","url","label","url",3,"formName"],[1,"modal-action"],["mat-raised-button","","color","primary","type","submit",3,"disabled","click"],["mat-stroked-button","","color","primary","type","button",3,"disabled","click"],["mode","indeterminate"],["name","company_id","label","Company",3,"formName"]],template:function(t,e){1&t&&(r.Yb(0,"div",0),r.Yb(1,"div",1),r.Yb(2,"form",2),r.Yb(3,"div",3),r.Yb(4,"h2",4),r.Lc(5,"Edit Work Area"),r.Xb(),r.Yb(6,"button",5),r.gc("click",(function(t){return e.cancel()})),r.Yb(7,"mat-icon",6),r.Lc(8,"close"),r.Xb(),r.Xb(),r.Xb(),r.Jc(9,q,1,0,"mat-progress-bar",7),r.Yb(10,"div",8),r.Jc(11,E,1,1,"app-select-api",9),r.Tb(12,"app-input-text",10),r.Tb(13,"app-input-text",11),r.Yb(14,"div",12),r.Tb(15,"app-checkbox",13),r.Tb(16,"app-input-text",14),r.Xb(),r.Tb(17,"app-select-api",15),r.Tb(18,"app-input-text",16),r.Tb(19,"app-input-text",17),r.Tb(20,"app-input-text",18),r.Tb(21,"app-input-text",19),r.Tb(22,"app-input-text",20),r.Tb(23,"app-input-text",21),r.Tb(24,"app-input-text",22),r.Tb(25,"app-input-text",23),r.Xb(),r.Yb(26,"div",24),r.Yb(27,"button",25),r.gc("click",(function(t){return e.onSubmit()})),r.Lc(28," Save & Close "),r.Xb(),r.Yb(29,"button",26),r.gc("click",(function(t){return e.cancel()})),r.Lc(30," Cancel "),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Xb()),2&t&&(r.Eb(2),r.qc("formGroup",e.form),r.Eb(7),r.qc("ngIf",e.isSubmitted),r.Eb(2),r.qc("ngIf",e.isSuperAdmin),r.Eb(1),r.qc("formName",e.form),r.Eb(1),r.qc("formName",e.form),r.Eb(2),r.qc("formName",e.form),r.Eb(1),r.qc("formName",e.form),r.Eb(1),r.qc("formName",e.form),r.Eb(1),r.qc("formName",e.form),r.Eb(1),r.qc("formName",e.form),r.Eb(1),r.qc("formName",e.form),r.Eb(1),r.qc("formName",e.form),r.Eb(1),r.qc("formName",e.form),r.Eb(1),r.qc("formName",e.form),r.Eb(1),r.qc("formName",e.form),r.Eb(1),r.qc("formName",e.form),r.Eb(2),r.qc("disabled",e.isSubmitted),r.Eb(2),r.qc("disabled",e.isSubmitted))},directives:[l.u,l.n,l.g,C.a,M.a,o.k,s.a,P.a,O.a,k.a],styles:["[_ngcontent-%COMP%]:root{--modal-width:500px;--modal-height:500px}button[_ngcontent-%COMP%]{margin:5px}[_nghost-%COMP%]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1000;overflow:auto}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]{border-radius:5px;height:calc(var(--modal-height) + 50px);width:var(--modal-width);background:#fff}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-top[_ngcontent-%COMP%]{padding:20px;overflow:auto}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-top[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]{font-size:22px;color:#5ba5d3;text-decoration:underline;float:left}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-top[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]{float:right;padding:0;margin:0}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-top[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%]{min-width:34px}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]{padding:0 50px;height:calc(var(--modal-height) - 150px);overflow:auto}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-action[_ngcontent-%COMP%]{padding:20px;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:30%;text-align:center}[_nghost-%COMP%]     .mat-button .mat-button-focus-overlay{background-color:transparent}.modal-background[_ngcontent-%COMP%]{position:fixed;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.4);z-index:900}.mat-raised-button[_ngcontent-%COMP%]{background-color:#5ba5d3;color:#fff}.mat-stroked-button[_ngcontent-%COMP%]{border-color:#5ba5d3;color:#5ba5d3}.checkbox-container[_ngcontent-%COMP%], .slug-container[_ngcontent-%COMP%]{width:100%;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.checkbox-container[_ngcontent-%COMP%]   app-input-text[_ngcontent-%COMP%], .slug-container[_ngcontent-%COMP%]   app-input-text[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1 0 auto}.checkbox-container[_ngcontent-%COMP%]   app-checkbox[_ngcontent-%COMP%], .slug-container[_ngcontent-%COMP%]   app-checkbox[_ngcontent-%COMP%]{-webkit-box-flex:0;flex:0 0 auto;margin-right:10px}",""]}),t})();const Y=r.ac(X);function S(t,e){if(1&t){const t=r.Zb();r.Yb(0,"app-add-work-area",12),r.gc("closeModal",(function(e){return r.Cc(t),r.kc().modal(e)})),r.Xb()}if(2&t){const t=r.kc();r.rc("datatable-state",t.componentName)}}function T(t,e){if(1&t){const t=r.Zb();r.Yb(0,"app-edit-work-area",13),r.gc("closeModal",(function(e){return r.Cc(t),r.kc().modal(e)})),r.Xb()}if(2&t){const t=r.kc();r.rc("datatable-state",t.componentName),r.qc("data",t.modalControl[1])}}let L=(()=>{class t extends c.a{constructor(t,e,n,o){super(t,n,o,"/human-resource"),this.store=t,this.fb=e,this._router=n,this._service=o,this.filter=this.fb.group({query:[""],is_active:[""],company_id:[""]}),this.componentName="work-area",this.columns={code:t=>t.code,title:t=>t.title,slug:t=>t.slug,created_by:t=>t.created_by,modified_by:t=>t.modified_by}}}return t.\u0275fac=function(e){return new(e||t)(r.Sb(i.j),r.Sb(l.c),r.Sb(a.b),r.Sb(b.a))},t.\u0275cmp=r.Mb({type:t,selectors:[["app-work-area"]],features:[r.Bb],decls:16,vars:16,consts:[[3,"backdropClick"],["position","end","fxFlex","400px","fxFlex.sm","100%","fxFlex.xs","100%",1,"filters-container",3,"autoFocus"],["filters",""],[3,"filter","filterNav"],["name","query","label","Search",3,"formName"],["name","is_active","label","Status",3,"formName","options"],[1,"container"],[1,"card-header","mat-elevation-z0"],[1,"card-content","mat-elevation-z0"],[3,"columns","service","filter","returnUrl","datatable-state","filterNav","openModal"],[3,"datatable-state","closeModal",4,"ngIf"],[3,"data","datatable-state","closeModal",4,"ngIf"],[3,"datatable-state","closeModal"],[3,"data","datatable-state","closeModal"]],template:function(t,e){1&t&&(r.Yb(0,"mat-sidenav-container",0),r.gc("backdropClick",(function(t){return e.filter_nav.toggle()})),r.Yb(1,"mat-sidenav",1,2),r.Yb(3,"app-filter-sidebar",3),r.Tb(4,"app-input-text",4),r.Tb(5,"app-select-instant",5),r.lc(6,"async"),r.Xb(),r.Xb(),r.Yb(7,"mat-sidenav-content"),r.Yb(8,"div",6),r.Yb(9,"mat-card",7),r.Yb(10,"h2"),r.Lc(11,"Work Area List"),r.Xb(),r.Xb(),r.Yb(12,"mat-card",8),r.Yb(13,"app-datatable",9),r.gc("openModal",(function(t){return e.modal(t)})),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Jc(14,S,1,1,"app-add-work-area",10),r.Jc(15,T,1,2,"app-edit-work-area",11)),2&t&&(r.Eb(1),r.qc("autoFocus",!1),r.Eb(2),r.qc("filter",e.filter)("filterNav",e.filter_nav),r.Eb(1),r.qc("formName",e.filter),r.Eb(1),r.qc("formName",e.filter)("options",r.mc(6,14,e.statusOptions$)),r.Eb(8),r.rc("datatable-state",e.componentName),r.qc("columns",e.columns)("service",e._service)("filter",e.filter)("returnUrl",e.returnUrl)("filterNav",e.filter_nav),r.Eb(1),r.qc("ngIf","add"===e.modalControl[0]),r.Eb(1),r.qc("ngIf","edit"===e.modalControl[0]))},directives:[m.b,m.a,d.b,p.a,s.a,u.a,m.c,f.a,g.a,o.k,w,X],pipes:[o.b],styles:[".card-header[_ngcontent-%COMP%]{margin:25px 25px 0}.card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700;color:#0d486c}.card-content[_ngcontent-%COMP%]{margin:-5px 25px 25px}.filters-container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;padding:15px}mat-sidenav-container[_ngcontent-%COMP%]{height:90vh}mat-sidenav-content[_ngcontent-%COMP%]{background-color:#f5f7fa;width:100%;height:100%}.datatable-top[_ngcontent-%COMP%]{padding:0 5px;-webkit-box-pack:justify;justify-content:space-between}.datatable-top[_ngcontent-%COMP%], .datatable-top[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.datatable-top[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{padding:15px}.datatable-top[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:end;align-items:flex-end;padding:15px}.datatable-top[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding-left:5px;padding-right:5px}.datatable[_ngcontent-%COMP%]{width:100%;height:100%}.datatable[_ngcontent-%COMP%], [_nghost-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}[_nghost-%COMP%]  .mat-drawer-backdrop.mat-drawer-shown{background-color:transparent!important}"]}),t})();var A=n("PSoG"),I=n("Dojc");const j=[{path:"list",component:L,canActivate:[A.a,I.a],data:{breadcrumbs:!0,text:"List",componentName:"work-area",role:["super-admin"]}},{path:"",pathMatch:"full",redirectTo:"list"}];let z=(()=>{class t{}return t.\u0275mod=r.Qb({type:t}),t.\u0275inj=r.Pb({factory:function(e){return new(e||t)},imports:[[a.e.forChild(j)],a.e]}),t})();var J=n("OS5G");n.d(e,"WorkAreaModule",(function(){return F}));let F=(()=>{class t{}return t.\u0275mod=r.Qb({type:t}),t.\u0275inj=r.Pb({factory:function(e){return new(e||t)},imports:[[o.c,J.a,z]]}),t})()}}]);