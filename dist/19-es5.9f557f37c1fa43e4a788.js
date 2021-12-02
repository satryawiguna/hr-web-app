function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{kRgC:function(t,e,n){"use strict";n.r(e);var o,a=n("ofXK"),c=n("YkGX"),r=n("fXoL"),i=n("AcyG"),l=n("3Pt+"),b=n("tyNb"),m=n("JK4O"),p=((o=function(t){function e(){var t;return _classCallCheck(this,e),(t=_possibleConstructorReturn(this,_getPrototypeOf(e).apply(this,arguments))).httpRoute="/company",t}return _inherits(e,t),e}(m.a)).\u0275fac=function(t){return d(t||o)},o.\u0275prov=r.Ob({token:o,factory:o.\u0275fac,providedIn:"root"}),o),d=r.ac(p),s=n("BBO8"),u=n("2v/9"),f=n("XhcP"),g=n("XiUz"),_=n("ifZE"),y=n("JJ8l"),C=n("VmBh"),h=n("Wp6s"),O=n("3jcq"),x=n("Rq+Q"),P=n("C+9q"),M=n("CMRa"),k=n("5eHb"),v=n("bTqV"),w=n("NFeN"),N=n("oMad"),q=n("XypE"),E=n("kmnG"),S=n("RE/Q"),X=n("bv9b");function Y(t,e){1&t&&r.Tb(0,"mat-progress-bar",23)}var T,j=((T=function(t){function e(t,n,o,a,c,r,i){var b;return _classCallCheck(this,e),(b=_possibleConstructorReturn(this,_getPrototypeOf(e).call(this,t,n,o,a,c.group({company_category_id:["",[l.t.required]],employee_number_scale_id:["",[l.t.required]],name:["",[l.t.required]],isRequestSlug:[!0],slug:["",[l.t.required]],email:["",[l.t.required,l.t.email]],url:["",[l.t.required,M.d]],description:[""],media_libraries:[[],[l.t.required]]})))).toastr=t,b.el=n,b.store=o,b._service=a,b.fb=c,b.companyCategory=r,b.employeeNumberScale=i,b.companyCategoryOptions$=b.companyCategory.options$(1),b.employeeNumberScaleOptions$=b.employeeNumberScale.options$(1),b}return _inherits(e,t),e}(P.a)).\u0275fac=function(t){return new(t||T)(r.Sb(k.b),r.Sb(r.m),r.Sb(i.j),r.Sb(p),r.Sb(l.c),r.Sb(s.a),r.Sb(u.a))},T.\u0275cmp=r.Mb({type:T,selectors:[["app-add-company"]],features:[r.Bb],decls:32,vars:21,consts:[[1,"modal-background"],[1,"modal-body"],[3,"formGroup"],[1,"modal-top"],[1,"modal-title"],["mat-icon-button","","type","button",1,"btn-close",3,"click"],["aria-hidden","false","aria-label","close"],["mode","indeterminate",4,"ngIf"],[1,"modal-form"],["name","company_category_id","label","Company Category",3,"formName","options"],["name","employee_number_scale_id","label","Employee Number Scale",3,"formName","options"],["name","name","label","name",3,"formName"],[1,"slug-container"],["name","isRequestSlug","label","",3,"formName"],["name","slug","label","slug",3,"formName"],["name","email","label","email",3,"formName"],["name","url","label","url",3,"formName"],["name","media_libraries","label","logo","type","image","collection","company",3,"formName"],[3,"control"],["name","description","label","description","textarea","true",3,"formName"],[1,"modal-action"],["mat-raised-button","","color","primary","type","submit",3,"disabled","click"],["mat-stroked-button","","color","primary","type","button",3,"disabled","click"],["mode","indeterminate"]],template:function(t,e){1&t&&(r.Yb(0,"div",0),r.Yb(1,"div",1),r.Yb(2,"form",2),r.Yb(3,"div",3),r.Yb(4,"h2",4),r.Lc(5,"Add Company"),r.Xb(),r.Yb(6,"button",5),r.gc("click",(function(t){return e.cancel()})),r.Yb(7,"mat-icon",6),r.Lc(8,"close"),r.Xb(),r.Xb(),r.Xb(),r.Jc(9,Y,1,0,"mat-progress-bar",7),r.Yb(10,"div",8),r.Tb(11,"app-select-instant",9),r.lc(12,"async"),r.Tb(13,"app-select-instant",10),r.lc(14,"async"),r.Tb(15,"app-input-text",11),r.Yb(16,"div",12),r.Tb(17,"app-checkbox",13),r.Tb(18,"app-input-text",14),r.Xb(),r.Tb(19,"app-input-text",15),r.Tb(20,"app-input-text",16),r.Tb(21,"app-upload-image",17),r.Yb(22,"mat-error"),r.Tb(23,"app-control-messages",18),r.Xb(),r.Tb(24,"app-input-text",19),r.Xb(),r.Yb(25,"div",20),r.Yb(26,"button",21),r.gc("click",(function(t){return e.onSubmit(!0)})),r.Lc(27," Save & Close "),r.Xb(),r.Yb(28,"button",21),r.gc("click",(function(t){return e.onSubmit(!1)})),r.Lc(29," Save "),r.Xb(),r.Yb(30,"button",22),r.gc("click",(function(t){return e.cancel()})),r.Lc(31," Cancel "),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Xb()),2&t&&(r.Eb(2),r.qc("formGroup",e.form),r.Eb(7),r.qc("ngIf",e.isSubmitted),r.Eb(2),r.qc("formName",e.form)("options",r.mc(12,17,e.companyCategoryOptions$)),r.Eb(2),r.qc("formName",e.form)("options",r.mc(14,19,e.employeeNumberScaleOptions$)),r.Eb(2),r.qc("formName",e.form),r.Eb(2),r.qc("formName",e.form),r.Eb(1),r.qc("formName",e.form),r.Eb(1),r.qc("formName",e.form),r.Eb(1),r.qc("formName",e.form),r.Eb(1),r.qc("formName",e.form),r.Eb(2),r.qc("control",e.form.get("media_libraries")),r.Eb(1),r.qc("formName",e.form),r.Eb(2),r.qc("disabled",e.isSubmitted),r.Eb(2),r.qc("disabled",e.isSubmitted),r.Eb(2),r.qc("disabled",e.isSubmitted))},directives:[l.u,l.n,l.g,v.a,w.a,a.k,C.a,y.a,N.a,q.a,E.a,S.a,X.a],pipes:[a.b],styles:["","[_ngcontent-%COMP%]:root{--modal-width:500px;--modal-height:500px}button[_ngcontent-%COMP%]{margin:5px}[_nghost-%COMP%]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1000;overflow:auto}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]{border-radius:5px;height:calc(var(--modal-height) + 50px);width:var(--modal-width);background:#fff}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-top[_ngcontent-%COMP%]{padding:20px;overflow:auto}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-top[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]{font-size:22px;color:#5ba5d3;text-decoration:underline;float:left}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-top[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]{float:right;padding:0;margin:0}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-top[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%]{min-width:34px}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]{padding:0 50px;height:calc(var(--modal-height) - 150px);overflow:auto}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-action[_ngcontent-%COMP%]{padding:20px;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:30%;text-align:center}[_nghost-%COMP%]     .mat-button .mat-button-focus-overlay{background-color:transparent}.modal-background[_ngcontent-%COMP%]{position:fixed;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.4);z-index:900}.mat-raised-button[_ngcontent-%COMP%]{background-color:#5ba5d3;color:#fff}.mat-stroked-button[_ngcontent-%COMP%]{border-color:#5ba5d3;color:#5ba5d3}.checkbox-container[_ngcontent-%COMP%], .slug-container[_ngcontent-%COMP%]{width:100%;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.checkbox-container[_ngcontent-%COMP%]   app-input-text[_ngcontent-%COMP%], .slug-container[_ngcontent-%COMP%]   app-input-text[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1 0 auto}.checkbox-container[_ngcontent-%COMP%]   app-checkbox[_ngcontent-%COMP%], .slug-container[_ngcontent-%COMP%]   app-checkbox[_ngcontent-%COMP%]{-webkit-box-flex:0;flex:0 0 auto;margin-right:10px}"]}),T);function $(t,e){1&t&&r.Tb(0,"mat-progress-bar",22)}var R,L=((R=function(t){function e(){return _classCallCheck(this,e),_possibleConstructorReturn(this,_getPrototypeOf(e).apply(this,arguments))}return _inherits(e,t),_createClass(e,[{key:"ngOnInitInEditComponent",value:function(){Object(x.c)(this)}},{key:"onSubmit",value:function(){Object(x.b)(this)}}]),e}(j)).\u0275fac=function(t){return z(t||R)},R.\u0275cmp=r.Mb({type:R,selectors:[["app-edit-company"]],features:[r.Bb],decls:28,vars:19,consts:[[1,"modal-background"],[1,"modal-body"],[3,"formGroup"],[1,"modal-top"],[1,"modal-title"],["mat-icon-button","","type","button",1,"btn-close",3,"click"],["aria-hidden","false","aria-label","close"],["mode","indeterminate",4,"ngIf"],[1,"modal-form"],["name","company_category_id","label","Company Category",3,"formName","options"],["name","employee_number_scale_id","label","Employee Number Scale",3,"formName","options"],["name","name","label","name",3,"formName"],[1,"slug-container"],["name","isRequestSlug","label","",3,"formName"],["name","slug","label","slug",3,"formName"],["name","email","label","email",3,"formName"],["name","url","label","url",3,"formName"],["name","media_libraries","label","logo","type","image","collection","company",3,"formName"],["name","description","label","description","textarea","true",3,"formName"],[1,"modal-action"],["mat-raised-button","","color","primary","type","submit",3,"disabled","click"],["mat-stroked-button","","color","primary","type","button",3,"disabled","click"],["mode","indeterminate"]],template:function(t,e){1&t&&(r.Yb(0,"div",0),r.Yb(1,"div",1),r.Yb(2,"form",2),r.Yb(3,"div",3),r.Yb(4,"h2",4),r.Lc(5,"Edit Company"),r.Xb(),r.Yb(6,"button",5),r.gc("click",(function(t){return e.cancel()})),r.Yb(7,"mat-icon",6),r.Lc(8,"close"),r.Xb(),r.Xb(),r.Xb(),r.Jc(9,$,1,0,"mat-progress-bar",7),r.Yb(10,"div",8),r.Tb(11,"app-select-instant",9),r.lc(12,"async"),r.Tb(13,"app-select-instant",10),r.lc(14,"async"),r.Tb(15,"app-input-text",11),r.Yb(16,"div",12),r.Tb(17,"app-checkbox",13),r.Tb(18,"app-input-text",14),r.Xb(),r.Tb(19,"app-input-text",15),r.Tb(20,"app-input-text",16),r.Tb(21,"app-upload-image",17),r.Tb(22,"app-input-text",18),r.Xb(),r.Yb(23,"div",19),r.Yb(24,"button",20),r.gc("click",(function(t){return e.onSubmit()})),r.Lc(25," Save & Close "),r.Xb(),r.Yb(26,"button",21),r.gc("click",(function(t){return e.cancel()})),r.Lc(27," Cancel "),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Xb()),2&t&&(r.Eb(2),r.qc("formGroup",e.form),r.Eb(7),r.qc("ngIf",e.isSubmitted),r.Eb(2),r.qc("formName",e.form)("options",r.mc(12,15,e.companyCategoryOptions$)),r.Eb(2),r.qc("formName",e.form)("options",r.mc(14,17,e.employeeNumberScaleOptions$)),r.Eb(2),r.qc("formName",e.form),r.Eb(2),r.qc("formName",e.form),r.Eb(1),r.qc("formName",e.form),r.Eb(1),r.qc("formName",e.form),r.Eb(1),r.qc("formName",e.form),r.Eb(1),r.qc("formName",e.form),r.Eb(1),r.qc("formName",e.form),r.Eb(2),r.qc("disabled",e.isSubmitted),r.Eb(2),r.qc("disabled",e.isSubmitted))},directives:[l.u,l.n,l.g,v.a,w.a,a.k,C.a,y.a,N.a,q.a,X.a],pipes:[a.b],styles:["","[_ngcontent-%COMP%]:root{--modal-width:500px;--modal-height:500px}button[_ngcontent-%COMP%]{margin:5px}[_nghost-%COMP%]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1000;overflow:auto}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]{border-radius:5px;height:calc(var(--modal-height) + 50px);width:var(--modal-width);background:#fff}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-top[_ngcontent-%COMP%]{padding:20px;overflow:auto}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-top[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]{font-size:22px;color:#5ba5d3;text-decoration:underline;float:left}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-top[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]{float:right;padding:0;margin:0}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-top[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%]{min-width:34px}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]{padding:0 50px;height:calc(var(--modal-height) - 150px);overflow:auto}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-action[_ngcontent-%COMP%]{padding:20px;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:30%;text-align:center}[_nghost-%COMP%]     .mat-button .mat-button-focus-overlay{background-color:transparent}.modal-background[_ngcontent-%COMP%]{position:fixed;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.4);z-index:900}.mat-raised-button[_ngcontent-%COMP%]{background-color:#5ba5d3;color:#fff}.mat-stroked-button[_ngcontent-%COMP%]{border-color:#5ba5d3;color:#5ba5d3}.checkbox-container[_ngcontent-%COMP%], .slug-container[_ngcontent-%COMP%]{width:100%;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.checkbox-container[_ngcontent-%COMP%]   app-input-text[_ngcontent-%COMP%], .slug-container[_ngcontent-%COMP%]   app-input-text[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1 0 auto}.checkbox-container[_ngcontent-%COMP%]   app-checkbox[_ngcontent-%COMP%], .slug-container[_ngcontent-%COMP%]   app-checkbox[_ngcontent-%COMP%]{-webkit-box-flex:0;flex:0 0 auto;margin-right:10px}"]}),R),z=r.ac(L);function I(t,e){if(1&t){var n=r.Zb();r.Yb(0,"app-add-company",14),r.gc("closeModal",(function(t){return r.Cc(n),r.kc().modal(t)})),r.Xb()}if(2&t){var o=r.kc();r.rc("datatable-state",o.componentName)}}var G,J,B=((G=function(t){function e(t,n,o,a,c,r){var i;return _classCallCheck(this,e),(i=_possibleConstructorReturn(this,_getPrototypeOf(e).call(this,t,o,a,"/human-resource"))).store=t,i.fb=n,i._router=o,i._service=a,i.companyCategory=c,i.employeeNumberScale=r,i.employeeNumberScaleOptions$=i.employeeNumberScale.options$(),i.companyCategoryOptions$=i.companyCategory.options$(),i.filter=i.fb.group({query:[""],is_active:[""],company_category_id:[""],employee_number_scale_id:[""]}),i.componentName="company",i.columns={name:function(t){return t.name},company_category_id:function(t){return t.company_category[0].name},employee_number_scale_id:function(t){return t.employee_number_scale[0].name},slug:function(t){return t.slug},created_by:function(t){return t.created_by},modified_by:function(t){return t.modified_by}},i}return _inherits(e,t),e}(c.a)).\u0275fac=function(t){return new(t||G)(r.Sb(i.j),r.Sb(l.c),r.Sb(b.b),r.Sb(p),r.Sb(s.a),r.Sb(u.a))},G.\u0275cmp=r.Mb({type:G,selectors:[["app-company"]],features:[r.Bb],decls:20,vars:26,consts:[[3,"backdropClick"],["position","end","fxFlex","400px","fxFlex.sm","100%","fxFlex.xs","100%",1,"filters-container",3,"autoFocus"],["filters",""],[3,"filter","filterNav"],["name","query","label","Search",3,"formName"],["name","is_active","label","Status",3,"formName","options"],["name","company_category_id","label","Company Category",3,"formName","options"],["name","employee_number_scale_id","label","Employee Number Scale",3,"formName","options"],[1,"container"],[1,"card-header","mat-elevation-z0"],[1,"card-content","mat-elevation-z0"],[3,"columns","service","filter","returnUrl","datatable-state","filterNav","openModal"],[3,"datatable-state","closeModal",4,"ngIf"],[3,"data","hidden","datatable-state","closeModal"],[3,"datatable-state","closeModal"]],template:function(t,e){1&t&&(r.Yb(0,"mat-sidenav-container",0),r.gc("backdropClick",(function(t){return e.filter_nav.toggle()})),r.Yb(1,"mat-sidenav",1,2),r.Yb(3,"app-filter-sidebar",3),r.Tb(4,"app-input-text",4),r.Tb(5,"app-select-instant",5),r.lc(6,"async"),r.Tb(7,"app-select-instant",6),r.lc(8,"async"),r.Tb(9,"app-select-instant",7),r.lc(10,"async"),r.Xb(),r.Xb(),r.Yb(11,"mat-sidenav-content"),r.Yb(12,"div",8),r.Yb(13,"mat-card",9),r.Yb(14,"h2"),r.Lc(15,"Company List"),r.Xb(),r.Xb(),r.Yb(16,"mat-card",10),r.Yb(17,"app-datatable",11),r.gc("openModal",(function(t){return e.modal(t)})),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Jc(18,I,1,1,"app-add-company",12),r.Yb(19,"app-edit-company",13),r.gc("closeModal",(function(t){return e.modal(t)})),r.Xb()),2&t&&(r.Eb(1),r.qc("autoFocus",!1),r.Eb(2),r.qc("filter",e.filter)("filterNav",e.filter_nav),r.Eb(1),r.qc("formName",e.filter),r.Eb(1),r.qc("formName",e.filter)("options",r.mc(6,20,e.statusOptions$)),r.Eb(2),r.qc("formName",e.filter)("options",r.mc(8,22,e.companyCategoryOptions$)),r.Eb(2),r.qc("formName",e.filter)("options",r.mc(10,24,e.employeeNumberScaleOptions$)),r.Eb(8),r.rc("datatable-state",e.componentName),r.qc("columns",e.columns)("service",e._service)("filter",e.filter)("returnUrl",e.returnUrl)("filterNav",e.filter_nav),r.Eb(1),r.qc("ngIf","add"===e.modalControl[0]),r.Eb(1),r.rc("datatable-state",e.componentName),r.qc("data",e.modalControl[1])("hidden","edit"!==e.modalControl[0]))},directives:[f.b,f.a,g.b,_.a,y.a,C.a,f.c,h.a,O.a,a.k,L,j],pipes:[a.b],styles:["",".card-header[_ngcontent-%COMP%]{margin:25px 25px 0}.card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700;color:#0d486c}.card-content[_ngcontent-%COMP%]{margin:-5px 25px 25px}.filters-container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;padding:15px}mat-sidenav-container[_ngcontent-%COMP%]{height:90vh}mat-sidenav-content[_ngcontent-%COMP%]{background-color:#f5f7fa;width:100%;height:100%}.datatable-top[_ngcontent-%COMP%]{padding:0 5px;-webkit-box-pack:justify;justify-content:space-between}.datatable-top[_ngcontent-%COMP%], .datatable-top[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.datatable-top[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{padding:15px}.datatable-top[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:end;align-items:flex-end;padding:15px}.datatable-top[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding-left:5px;padding-right:5px}.datatable[_ngcontent-%COMP%]{width:100%;height:100%}.datatable[_ngcontent-%COMP%], [_nghost-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}[_nghost-%COMP%]  .mat-drawer-backdrop.mat-drawer-shown{background-color:transparent!important}"]}),G),F=n("PSoG"),U=n("Dojc"),Q=[{path:"list",component:B,canActivate:[F.a,U.a],data:{breadcrumbs:!0,text:"List",componentName:"company",role:["super-admin"]}},{path:"",pathMatch:"full",redirectTo:"list"}],A=((J=function t(){_classCallCheck(this,t)}).\u0275mod=r.Qb({type:J}),J.\u0275inj=r.Pb({factory:function(t){return new(t||J)},imports:[[b.e.forChild(Q)],b.e]}),J),K=n("OS5G"),V=n("YUcS"),Z=n("0IaG");n.d(e,"CompanyModule",(function(){return H}));var D,H=((D=function t(){_classCallCheck(this,t)}).\u0275mod=r.Qb({type:D}),D.\u0275inj=r.Pb({factory:function(t){return new(t||D)},imports:[[a.c,A,v.b,l.r,K.a,h.e,w.b,X.b,f.d,V.a,Z.g]]}),D)}}]);