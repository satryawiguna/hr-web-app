(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{CMRa:function(t,e,n){"use strict";n.d(e,"d",(function(){return a})),n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r}));const o=n("ar4q").PhoneNumberUtil.getInstance();function a(t){return!/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi.test(t.value)&&t.value?{urlValidation:!1}:null}function c(t){return!/^[a-zA-Z0-9]+$/gi.test(t.value)&&t.value?{alphaNumericValidation:!1}:null}function i(t){return!/^[0-9]+$/gi.test(t.value)&&t.value?{numericValidation:!1}:null}function r(t){try{const e=o.parse(t.value);return t.value&&!o.isValidNumber(e)?{phoneNumberValidation:!1}:null}catch(e){}}},KmYs:function(t,e,n){"use strict";n.r(e);var o=n("ofXK"),a=n("tyNb"),c=n("YkGX"),i=n("fXoL"),r=n("AcyG"),l=n("3Pt+"),b=n("JK4O");let d=(()=>{class t extends b.a{constructor(){super(...arguments),this.httpRoute="/letter-type"}}return t.\u0275fac=function(e){return s(e||t)},t.\u0275prov=i.Ob({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const s=i.ac(d);var m=n("XhcP"),p=n("XiUz"),u=n("ifZE"),g=n("JJ8l"),f=n("VmBh"),x=n("Wp6s"),h=n("3jcq"),_=n("C+9q"),C=n("CMRa"),M=n("5eHb"),P=n("bTqV"),O=n("NFeN"),y=n("oMad"),k=n("bv9b"),v=n("wT6U");function w(t,e){1&t&&i.Tb(0,"mat-progress-bar",19)}function q(t,e){if(1&t&&i.Tb(0,"app-select-api",20),2&t){const t=i.kc();i.qc("formName",t.form)}}let N=(()=>{class t extends _.a{constructor(t,e,n,o,a){super(t,e,n,o,a.group({company_id:["",[l.t.required]],code:["",[l.t.required,l.t.maxLength(5),l.t.minLength(5),C.a]],name:["",[l.t.required]],isRequestSlug:[!0],slug:["",[l.t.required]],description:[""]})),this.toastr=t,this.el=e,this.store=n,this._service=o,this.fb=a}}return t.\u0275fac=function(e){return new(e||t)(i.Sb(M.b),i.Sb(i.m),i.Sb(r.j),i.Sb(d),i.Sb(l.c))},t.\u0275cmp=i.Mb({type:t,selectors:[["app-add-letter-type"]],features:[i.Bb],decls:25,vars:11,consts:[[1,"modal-background"],[1,"modal-body"],[3,"formGroup"],[1,"modal-top"],[1,"modal-title"],["mat-icon-button","","type","button",1,"btn-close",3,"click"],["aria-hidden","false","aria-label","close"],["mode","indeterminate",4,"ngIf"],[1,"modal-form"],["name","company_id","label","Company",3,"formName",4,"ngIf"],["name","code","label","code",3,"formName"],["name","name","label","name",3,"formName"],[1,"slug-container"],["name","isRequestSlug","label","",3,"formName"],["name","slug","label","slug",3,"formName"],["name","description","label","description","textarea","true",3,"formName"],[1,"modal-action"],["mat-raised-button","","color","primary","type","submit",3,"disabled","click"],["mat-stroked-button","","color","primary","type","button",3,"disabled","click"],["mode","indeterminate"],["name","company_id","label","Company",3,"formName"]],template:function(t,e){1&t&&(i.Yb(0,"div",0),i.Yb(1,"div",1),i.Yb(2,"form",2),i.Yb(3,"div",3),i.Yb(4,"h2",4),i.Lc(5,"Add Letter Type"),i.Xb(),i.Yb(6,"button",5),i.gc("click",(function(t){return e.cancel()})),i.Yb(7,"mat-icon",6),i.Lc(8,"close"),i.Xb(),i.Xb(),i.Xb(),i.Jc(9,w,1,0,"mat-progress-bar",7),i.Yb(10,"div",8),i.Jc(11,q,1,1,"app-select-api",9),i.Tb(12,"app-input-text",10),i.Tb(13,"app-input-text",11),i.Yb(14,"div",12),i.Tb(15,"app-checkbox",13),i.Tb(16,"app-input-text",14),i.Xb(),i.Tb(17,"app-input-text",15),i.Xb(),i.Yb(18,"div",16),i.Yb(19,"button",17),i.gc("click",(function(t){return e.onSubmit(!0)})),i.Lc(20," Save & Close "),i.Xb(),i.Yb(21,"button",17),i.gc("click",(function(t){return e.onSubmit(!1)})),i.Lc(22," Save "),i.Xb(),i.Yb(23,"button",18),i.gc("click",(function(t){return e.cancel()})),i.Lc(24," Cancel "),i.Xb(),i.Xb(),i.Xb(),i.Xb(),i.Xb()),2&t&&(i.Eb(2),i.qc("formGroup",e.form),i.Eb(7),i.qc("ngIf",e.isSubmitted),i.Eb(2),i.qc("ngIf",e.isSuperAdmin),i.Eb(1),i.qc("formName",e.form),i.Eb(1),i.qc("formName",e.form),i.Eb(2),i.qc("formName",e.form),i.Eb(1),i.qc("formName",e.form),i.Eb(1),i.qc("formName",e.form),i.Eb(2),i.qc("disabled",e.isSubmitted),i.Eb(2),i.qc("disabled",e.isSubmitted),i.Eb(2),i.qc("disabled",e.isSubmitted))},directives:[l.u,l.n,l.g,P.a,O.a,o.k,g.a,y.a,k.a,v.a],styles:["[_ngcontent-%COMP%]:root{--modal-width:500px;--modal-height:500px}button[_ngcontent-%COMP%]{margin:5px}[_nghost-%COMP%]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1000;overflow:auto}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]{border-radius:5px;height:calc(var(--modal-height) + 50px);width:var(--modal-width);background:#fff}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-top[_ngcontent-%COMP%]{padding:20px;overflow:auto}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-top[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]{font-size:22px;color:#5ba5d3;text-decoration:underline;float:left}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-top[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]{float:right;padding:0;margin:0}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-top[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%]{min-width:34px}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]{padding:0 50px;height:calc(var(--modal-height) - 150px);overflow:auto}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-action[_ngcontent-%COMP%]{padding:20px;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:30%;text-align:center}[_nghost-%COMP%]     .mat-button .mat-button-focus-overlay{background-color:transparent}.modal-background[_ngcontent-%COMP%]{position:fixed;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.4);z-index:900}.mat-raised-button[_ngcontent-%COMP%]{background-color:#5ba5d3;color:#fff}.mat-stroked-button[_ngcontent-%COMP%]{border-color:#5ba5d3;color:#5ba5d3}.checkbox-container[_ngcontent-%COMP%], .slug-container[_ngcontent-%COMP%]{width:100%;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.checkbox-container[_ngcontent-%COMP%]   app-input-text[_ngcontent-%COMP%], .slug-container[_ngcontent-%COMP%]   app-input-text[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1 0 auto}.checkbox-container[_ngcontent-%COMP%]   app-checkbox[_ngcontent-%COMP%], .slug-container[_ngcontent-%COMP%]   app-checkbox[_ngcontent-%COMP%]{-webkit-box-flex:0;flex:0 0 auto;margin-right:10px}",""]}),t})();var X=n("Rq+Q");function Y(t,e){1&t&&i.Tb(0,"mat-progress-bar",19)}function S(t,e){if(1&t&&i.Tb(0,"app-select-api",20),2&t){const t=i.kc();i.qc("formName",t.form)}}let E=(()=>{class t extends X.a{constructor(t,e,n,o,a){super(t,e,n,o,a.group({company_id:["",[l.t.required]],code:["",[l.t.required,l.t.maxLength(5),l.t.minLength(5),C.a]],name:["",[l.t.required]],isRequestSlug:[!0],slug:["",[l.t.required]],description:[""]})),this.toastr=t,this.el=e,this.store=n,this._service=o,this.fb=a}}return t.\u0275fac=function(e){return new(e||t)(i.Sb(M.b),i.Sb(i.m),i.Sb(r.j),i.Sb(d),i.Sb(l.c))},t.\u0275cmp=i.Mb({type:t,selectors:[["app-edit-letter-type"]],features:[i.Bb],decls:23,vars:10,consts:[[1,"modal-background"],[1,"modal-body"],[3,"formGroup"],[1,"modal-top"],[1,"modal-title"],["mat-icon-button","","type","button",1,"btn-close",3,"click"],["aria-hidden","false","aria-label","close"],["mode","indeterminate",4,"ngIf"],[1,"modal-form"],["name","company_id","label","Company",3,"formName",4,"ngIf"],["name","code","label","code",3,"formName"],["name","name","label","name",3,"formName"],[1,"slug-container"],["name","isRequestSlug","label","",3,"formName"],["name","slug","label","slug",3,"formName"],["name","description","label","description","textarea","true",3,"formName"],[1,"modal-action"],["mat-raised-button","","color","primary","type","submit",3,"disabled","click"],["mat-stroked-button","","color","primary","type","button",3,"disabled","click"],["mode","indeterminate"],["name","company_id","label","Company",3,"formName"]],template:function(t,e){1&t&&(i.Yb(0,"div",0),i.Yb(1,"div",1),i.Yb(2,"form",2),i.Yb(3,"div",3),i.Yb(4,"h2",4),i.Lc(5,"Edit Letter Type"),i.Xb(),i.Yb(6,"button",5),i.gc("click",(function(t){return e.cancel()})),i.Yb(7,"mat-icon",6),i.Lc(8,"close"),i.Xb(),i.Xb(),i.Xb(),i.Jc(9,Y,1,0,"mat-progress-bar",7),i.Yb(10,"div",8),i.Jc(11,S,1,1,"app-select-api",9),i.Tb(12,"app-input-text",10),i.Tb(13,"app-input-text",11),i.Yb(14,"div",12),i.Tb(15,"app-checkbox",13),i.Tb(16,"app-input-text",14),i.Xb(),i.Tb(17,"app-input-text",15),i.Xb(),i.Yb(18,"div",16),i.Yb(19,"button",17),i.gc("click",(function(t){return e.onSubmit()})),i.Lc(20," Save & Close "),i.Xb(),i.Yb(21,"button",18),i.gc("click",(function(t){return e.cancel()})),i.Lc(22," Cancel "),i.Xb(),i.Xb(),i.Xb(),i.Xb(),i.Xb()),2&t&&(i.Eb(2),i.qc("formGroup",e.form),i.Eb(7),i.qc("ngIf",e.isSubmitted),i.Eb(2),i.qc("ngIf",e.isSuperAdmin),i.Eb(1),i.qc("formName",e.form),i.Eb(1),i.qc("formName",e.form),i.Eb(2),i.qc("formName",e.form),i.Eb(1),i.qc("formName",e.form),i.Eb(1),i.qc("formName",e.form),i.Eb(2),i.qc("disabled",e.isSubmitted),i.Eb(2),i.qc("disabled",e.isSubmitted))},directives:[l.u,l.n,l.g,P.a,O.a,o.k,g.a,y.a,k.a,v.a],styles:["[_ngcontent-%COMP%]:root{--modal-width:500px;--modal-height:500px}button[_ngcontent-%COMP%]{margin:5px}[_nghost-%COMP%]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1000;overflow:auto}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]{border-radius:5px;height:calc(var(--modal-height) + 50px);width:var(--modal-width);background:#fff}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-top[_ngcontent-%COMP%]{padding:20px;overflow:auto}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-top[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]{font-size:22px;color:#5ba5d3;text-decoration:underline;float:left}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-top[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]{float:right;padding:0;margin:0}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-top[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%]{min-width:34px}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]{padding:0 50px;height:calc(var(--modal-height) - 150px);overflow:auto}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-action[_ngcontent-%COMP%]{padding:20px;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:30%;text-align:center}[_nghost-%COMP%]     .mat-button .mat-button-focus-overlay{background-color:transparent}.modal-background[_ngcontent-%COMP%]{position:fixed;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.4);z-index:900}.mat-raised-button[_ngcontent-%COMP%]{background-color:#5ba5d3;color:#fff}.mat-stroked-button[_ngcontent-%COMP%]{border-color:#5ba5d3;color:#5ba5d3}.checkbox-container[_ngcontent-%COMP%], .slug-container[_ngcontent-%COMP%]{width:100%;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.checkbox-container[_ngcontent-%COMP%]   app-input-text[_ngcontent-%COMP%], .slug-container[_ngcontent-%COMP%]   app-input-text[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1 0 auto}.checkbox-container[_ngcontent-%COMP%]   app-checkbox[_ngcontent-%COMP%], .slug-container[_ngcontent-%COMP%]   app-checkbox[_ngcontent-%COMP%]{-webkit-box-flex:0;flex:0 0 auto;margin-right:10px}",""]}),t})();function T(t,e){if(1&t){const t=i.Zb();i.Yb(0,"app-add-letter-type",12),i.gc("closeModal",(function(e){return i.Cc(t),i.kc().modal(e)})),i.Xb()}if(2&t){const t=i.kc();i.rc("datatable-state",t.componentName)}}function L(t,e){if(1&t){const t=i.Zb();i.Yb(0,"app-edit-letter-type",13),i.gc("closeModal",(function(e){return i.Cc(t),i.kc().modal(e)})),i.Xb()}if(2&t){const t=i.kc();i.rc("datatable-state",t.componentName),i.qc("data",t.modalControl[1])}}let z=(()=>{class t extends c.a{constructor(t,e,n,o){super(t,n,o,"/human-resource"),this.store=t,this.fb=e,this._router=n,this._service=o,this.filter=this.fb.group({query:[""],is_active:[""],company_id:[""]}),this.componentName="letter-type",this.columns={code:t=>t.code,name:t=>t.name,slug:t=>t.slug,created_by:t=>t.created_by,modified_by:t=>t.modified_by}}}return t.\u0275fac=function(e){return new(e||t)(i.Sb(r.j),i.Sb(l.c),i.Sb(a.b),i.Sb(d))},t.\u0275cmp=i.Mb({type:t,selectors:[["app-letter-type"]],features:[i.Bb],decls:16,vars:16,consts:[[3,"backdropClick"],["position","end","fxFlex","400px","fxFlex.sm","100%","fxFlex.xs","100%",1,"filters-container",3,"autoFocus"],["filters",""],[3,"filter","filterNav"],["name","query","label","Search",3,"formName"],["name","is_active","label","Status",3,"formName","options"],[1,"container"],[1,"card-header","mat-elevation-z0"],[1,"card-content","mat-elevation-z0"],[3,"columns","service","filter","returnUrl","datatable-state","filterNav","openModal"],[3,"datatable-state","closeModal",4,"ngIf"],[3,"data","datatable-state","closeModal",4,"ngIf"],[3,"datatable-state","closeModal"],[3,"data","datatable-state","closeModal"]],template:function(t,e){1&t&&(i.Yb(0,"mat-sidenav-container",0),i.gc("backdropClick",(function(t){return e.filter_nav.toggle()})),i.Yb(1,"mat-sidenav",1,2),i.Yb(3,"app-filter-sidebar",3),i.Tb(4,"app-input-text",4),i.Tb(5,"app-select-instant",5),i.lc(6,"async"),i.Xb(),i.Xb(),i.Yb(7,"mat-sidenav-content"),i.Yb(8,"div",6),i.Yb(9,"mat-card",7),i.Yb(10,"h2"),i.Lc(11,"Letter Type List"),i.Xb(),i.Xb(),i.Yb(12,"mat-card",8),i.Yb(13,"app-datatable",9),i.gc("openModal",(function(t){return e.modal(t)})),i.Xb(),i.Xb(),i.Xb(),i.Xb(),i.Xb(),i.Jc(14,T,1,1,"app-add-letter-type",10),i.Jc(15,L,1,2,"app-edit-letter-type",11)),2&t&&(i.Eb(1),i.qc("autoFocus",!1),i.Eb(2),i.qc("filter",e.filter)("filterNav",e.filter_nav),i.Eb(1),i.qc("formName",e.filter),i.Eb(1),i.qc("formName",e.filter)("options",i.mc(6,14,e.statusOptions$)),i.Eb(8),i.rc("datatable-state",e.componentName),i.qc("columns",e.columns)("service",e._service)("filter",e.filter)("returnUrl",e.returnUrl)("filterNav",e.filter_nav),i.Eb(1),i.qc("ngIf","add"===e.modalControl[0]),i.Eb(1),i.qc("ngIf","edit"===e.modalControl[0]))},directives:[m.b,m.a,p.b,u.a,g.a,f.a,m.c,x.a,h.a,o.k,N,E],pipes:[o.b],styles:[".card-header[_ngcontent-%COMP%]{margin:25px 25px 0}.card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700;color:#0d486c}.card-content[_ngcontent-%COMP%]{margin:-5px 25px 25px}.filters-container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;padding:15px}mat-sidenav-container[_ngcontent-%COMP%]{height:90vh}mat-sidenav-content[_ngcontent-%COMP%]{background-color:#f5f7fa;width:100%;height:100%}.datatable-top[_ngcontent-%COMP%]{padding:0 5px;-webkit-box-pack:justify;justify-content:space-between}.datatable-top[_ngcontent-%COMP%], .datatable-top[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.datatable-top[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{padding:15px}.datatable-top[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:end;align-items:flex-end;padding:15px}.datatable-top[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding-left:5px;padding-right:5px}.datatable[_ngcontent-%COMP%]{width:100%;height:100%}.datatable[_ngcontent-%COMP%], [_nghost-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}[_nghost-%COMP%]  .mat-drawer-backdrop.mat-drawer-shown{background-color:transparent!important}"]}),t})();var I=n("PSoG"),j=n("Dojc");const J=[{path:"list",component:z,canActivate:[I.a,j.a],data:{breadcrumbs:!0,text:"List",componentName:"letter-type",role:["super-admin"]}},{path:"",pathMatch:"full",redirectTo:"list"}];let A=(()=>{class t{}return t.\u0275mod=i.Qb({type:t}),t.\u0275inj=i.Pb({factory:function(e){return new(e||t)},imports:[[a.e.forChild(J)],a.e]}),t})();var G=n("OS5G");n.d(e,"LetterTypeModule",(function(){return R}));let R=(()=>{class t{}return t.\u0275mod=i.Qb({type:t}),t.\u0275inj=i.Pb({factory:function(e){return new(e||t)},imports:[[o.c,G.a,A]]}),t})()}}]);