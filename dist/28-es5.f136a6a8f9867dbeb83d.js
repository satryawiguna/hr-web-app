function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"tw/i":function(t,e,n){"use strict";n.r(e);var o=n("ofXK"),a=n("tyNb"),c=n("PSoG"),i=n("Dojc"),r=n("YkGX"),l=n("fXoL"),s=n("AcyG"),b=n("3Pt+"),d=n("X+qR"),p=n("XhcP"),m=n("XiUz"),u=n("ifZE"),f=n("JJ8l"),g=n("VmBh"),_=n("Wp6s"),x=n("3jcq"),O=n("C+9q"),C=n("5eHb"),h=n("8u7r"),P=n("bTqV"),y=n("NFeN"),M=n("oMad"),k=n("PwzQ"),v=n("bv9b"),w=n("ZCWK");function N(t,e){1&t&&l.Tb(0,"mat-progress-bar",19)}function X(t,e){if(1&t&&(l.Yb(0,"div",20),l.Yb(1,"div",21),l.Tb(2,"app-input-text",22),l.Tb(3,"app-radio-button",23),l.Xb(),l.Xb()),2&t){var n=e.$implicit,o=l.kc();l.Eb(2),l.qc("formName",n),l.Eb(1),l.qc("formName",n)("options",o.accessValueOptions)}}var q,Y=((q=function(t){function e(t,n,o,a,c,i){var r;return _classCallCheck(this,e),(r=_possibleConstructorReturn(this,_getPrototypeOf(e).call(this,t,n,o,a,c.group({name:["",[b.t.required]],isRequestSlug:[!0],slug:["",[b.t.required]],access_ids:["",[b.t.required]],server:["https://api.smartbiz.id/"],path:["/api/v1/application"],description:[""],is_active:[0]})))).toastr=t,r.el=n,r.store=o,r._service=a,r.fb=c,r.access=i,r.accessOptions$=r.access.options$(1),r.accessValueOptions=[{id:"ALLOW",name:"Allow"},{id:"DENY",name:"Deny"}],r}return _inherits(e,t),_createClass(e,[{key:"setAccess",value:function(t){this.formAccess=t}}]),e}(O.a)).\u0275fac=function(t){return new(t||q)(l.Sb(C.b),l.Sb(l.m),l.Sb(s.j),l.Sb(d.a),l.Sb(b.c),l.Sb(h.a))},q.\u0275cmp=l.Mb({type:q,selectors:[["app-add-permission"]],features:[l.Bb],decls:27,vars:17,consts:[[1,"modal-background"],[1,"modal-body"],[3,"formGroup"],[1,"modal-top"],[1,"modal-title"],["mat-icon-button","","type","button",1,"btn-close",3,"click"],["aria-hidden","false","aria-label","close"],["mode","indeterminate",4,"ngIf"],[1,"modal-form"],["name","name","label","name",3,"formName"],[1,"slug-container"],["name","isRequestSlug","label","",3,"formName"],["name","slug","label","slug",3,"formName"],["name","access_ids","label","choose access",3,"formName","options","getControls"],["fxLayout","column","style","padding: 5px; border: 1px solid #cccccc; margin-bottom: 10px; border-radius: 8px;",4,"ngFor","ngForOf"],["name","description","label","description","textarea","true",3,"formName"],[1,"modal-action"],["mat-raised-button","","color","primary","type","submit",3,"disabled","click"],["mat-stroked-button","","color","primary","type","button",3,"disabled","click"],["mode","indeterminate"],["fxLayout","column",2,"padding","5px","border","1px solid #cccccc","margin-bottom","10px","border-radius","8px"],["fxLayout","row","fxLayoutGap","10px"],["name","data_name","label","access",3,"formName"],["name","data_value","label","access value","display","row",3,"formName","options"]],template:function(t,e){1&t&&(l.Yb(0,"div",0),l.Yb(1,"div",1),l.Yb(2,"form",2),l.Yb(3,"div",3),l.Yb(4,"h2",4),l.Lc(5),l.lc(6,"titlecase"),l.Xb(),l.Yb(7,"button",5),l.gc("click",(function(t){return e.cancel()})),l.Yb(8,"mat-icon",6),l.Lc(9,"close"),l.Xb(),l.Xb(),l.Xb(),l.Jc(10,N,1,0,"mat-progress-bar",7),l.Yb(11,"div",8),l.Tb(12,"app-input-text",9),l.Yb(13,"div",10),l.Tb(14,"app-checkbox",11),l.Tb(15,"app-input-text",12),l.Xb(),l.Yb(16,"app-select-multiple",13),l.gc("getControls",(function(t){return e.setAccess(t)})),l.lc(17,"async"),l.Xb(),l.Jc(18,X,4,3,"div",14),l.Tb(19,"app-input-text",15),l.Xb(),l.Yb(20,"div",16),l.Yb(21,"button",17),l.gc("click",(function(t){return e.onSubmit(!0)})),l.Lc(22," Save & Close "),l.Xb(),l.Yb(23,"button",17),l.gc("click",(function(t){return e.onSubmit(!1)})),l.Lc(24," Save "),l.Xb(),l.Yb(25,"button",18),l.gc("click",(function(t){return e.cancel()})),l.Lc(26," Cancel "),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Xb()),2&t&&(l.Eb(2),l.qc("formGroup",e.form),l.Eb(3),l.Nc("Add ",l.mc(6,13,e.componentName),""),l.Eb(5),l.qc("ngIf",e.isSubmitted),l.Eb(2),l.qc("formName",e.form),l.Eb(2),l.qc("formName",e.form),l.Eb(1),l.qc("formName",e.form),l.Eb(1),l.qc("formName",e.form)("options",l.mc(17,15,e.accessOptions$)),l.Eb(2),l.qc("ngForOf",e.formAccess),l.Eb(1),l.qc("formName",e.form),l.Eb(2),l.qc("disabled",e.isSubmitted),l.Eb(2),l.qc("disabled",e.isSubmitted),l.Eb(2),l.qc("disabled",e.isSubmitted))},directives:[b.u,b.n,b.g,P.a,y.a,o.k,f.a,M.a,k.a,o.j,v.a,m.d,m.e,w.a],pipes:[o.s,o.b],styles:["","[_ngcontent-%COMP%]:root{--modal-width:500px;--modal-height:500px}button[_ngcontent-%COMP%]{margin:5px}[_nghost-%COMP%]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1000;overflow:auto}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]{border-radius:5px;height:calc(var(--modal-height) + 50px);width:var(--modal-width);background:#fff}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-top[_ngcontent-%COMP%]{padding:20px;overflow:auto}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-top[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]{font-size:22px;color:#5ba5d3;text-decoration:underline;float:left}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-top[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]{float:right;padding:0;margin:0}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-top[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%]{min-width:34px}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]{padding:0 50px;height:calc(var(--modal-height) - 150px);overflow:auto}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-action[_ngcontent-%COMP%]{padding:20px;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:30%;text-align:center}[_nghost-%COMP%]     .mat-button .mat-button-focus-overlay{background-color:transparent}.modal-background[_ngcontent-%COMP%]{position:fixed;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.4);z-index:900}.mat-raised-button[_ngcontent-%COMP%]{background-color:#5ba5d3;color:#fff}.mat-stroked-button[_ngcontent-%COMP%]{border-color:#5ba5d3;color:#5ba5d3}.checkbox-container[_ngcontent-%COMP%], .slug-container[_ngcontent-%COMP%]{width:100%;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.checkbox-container[_ngcontent-%COMP%]   app-input-text[_ngcontent-%COMP%], .slug-container[_ngcontent-%COMP%]   app-input-text[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1 0 auto}.checkbox-container[_ngcontent-%COMP%]   app-checkbox[_ngcontent-%COMP%], .slug-container[_ngcontent-%COMP%]   app-checkbox[_ngcontent-%COMP%]{-webkit-box-flex:0;flex:0 0 auto;margin-right:10px}"]}),q),E=n("Rq+Q"),S=n("LRne"),j=n("vkgz"),T=n("eIep"),A=n("bOdf"),L=n("lJxs");function I(t,e){1&t&&l.Tb(0,"mat-progress-bar",19)}function z(t,e){if(1&t&&(l.Yb(0,"div",20),l.Yb(1,"div",21),l.Tb(2,"app-input-text",22),l.Tb(3,"app-radio-button",23),l.Xb(),l.Xb()),2&t){var n=e.$implicit,o=l.kc();l.Eb(2),l.qc("formName",n),l.Eb(1),l.qc("formName",n)("options",o.accessValueOptions)}}var F,J=((F=function(t){function e(){var t;return _classCallCheck(this,e),(t=_possibleConstructorReturn(this,_getPrototypeOf(e).apply(this,arguments))).accesses=[],t.accessOptions$=Object(S.a)(null).pipe(Object(j.a)((function(){return t.form.get("access_ids").disable()})),Object(T.a)((function(){return t.access.getOptionsFromAPI$(1).pipe(Object(A.a)((function(e){return t._service.detailAccess(t.initData.id).pipe(Object(j.a)((function(e){return t.form.get("access_ids").setValue(e.map((function(t){return t.id})))})),Object(j.a)((function(e){return t.accesses=e})),Object(L.a)((function(t){return[].concat(_toConsumableArray(e),_toConsumableArray(t))})))})))})),Object(j.a)((function(){return t.form.get("access_ids").enable()}))),t}return _inherits(e,t),_createClass(e,[{key:"ngOnInitInEditComponent",value:function(){Object(E.c)(this)}},{key:"onSubmit",value:function(){Object(E.b)(this)}}]),e}(Y)).\u0275fac=function(t){return R(t||F)},F.\u0275cmp=l.Mb({type:F,selectors:[["app-edit-permission"]],features:[l.Bb],decls:25,vars:17,consts:[[1,"modal-background"],[1,"modal-body"],[3,"formGroup"],[1,"modal-top"],[1,"modal-title"],["mat-icon-button","","type","button",1,"btn-close",3,"click"],["aria-hidden","false","aria-label","close"],["mode","indeterminate",4,"ngIf"],[1,"modal-form"],["name","name","label","name",3,"formName"],[1,"slug-container"],["name","isRequestSlug","label","",3,"formName"],["name","slug","label","slug",3,"formName"],["name","access_ids","label","choose access",3,"data","formName","options","getControls"],["fxLayout","column","style","padding: 5px; border: 1px solid #cccccc; margin-bottom: 10px; border-radius: 8px;",4,"ngFor","ngForOf"],["name","description","label","description","textarea","true",3,"formName"],[1,"modal-action"],["mat-raised-button","","color","primary","type","submit",3,"disabled","click"],["mat-stroked-button","","color","primary","type","button",3,"disabled","click"],["mode","indeterminate"],["fxLayout","column",2,"padding","5px","border","1px solid #cccccc","margin-bottom","10px","border-radius","8px"],["fxLayout","row","fxLayoutGap","10px"],["name","data_name","label","access",3,"formName"],["name","data_value","label","access value","display","row",3,"formName","options"]],template:function(t,e){1&t&&(l.Yb(0,"div",0),l.Yb(1,"div",1),l.Yb(2,"form",2),l.Yb(3,"div",3),l.Yb(4,"h2",4),l.Lc(5),l.lc(6,"titlecase"),l.Xb(),l.Yb(7,"button",5),l.gc("click",(function(t){return e.cancel()})),l.Yb(8,"mat-icon",6),l.Lc(9,"close"),l.Xb(),l.Xb(),l.Xb(),l.Jc(10,I,1,0,"mat-progress-bar",7),l.Yb(11,"div",8),l.Tb(12,"app-input-text",9),l.Yb(13,"div",10),l.Tb(14,"app-checkbox",11),l.Tb(15,"app-input-text",12),l.Xb(),l.Yb(16,"app-select-multiple",13),l.gc("getControls",(function(t){return e.setAccess(t)})),l.lc(17,"async"),l.Xb(),l.Jc(18,z,4,3,"div",14),l.Tb(19,"app-input-text",15),l.Xb(),l.Yb(20,"div",16),l.Yb(21,"button",17),l.gc("click",(function(t){return e.onSubmit()})),l.Lc(22," Save & Close "),l.Xb(),l.Yb(23,"button",18),l.gc("click",(function(t){return e.cancel()})),l.Lc(24," Cancel "),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Xb()),2&t&&(l.Eb(2),l.qc("formGroup",e.form),l.Eb(3),l.Nc("Edit ",l.mc(6,13,e.componentName),""),l.Eb(5),l.qc("ngIf",e.isSubmitted),l.Eb(2),l.qc("formName",e.form),l.Eb(2),l.qc("formName",e.form),l.Eb(1),l.qc("formName",e.form),l.Eb(1),l.qc("data",e.accesses)("formName",e.form)("options",l.mc(17,15,e.accessOptions$)),l.Eb(2),l.qc("ngForOf",e.formAccess),l.Eb(1),l.qc("formName",e.form),l.Eb(2),l.qc("disabled",e.isSubmitted),l.Eb(2),l.qc("disabled",e.isSubmitted))},directives:[b.u,b.n,b.g,P.a,y.a,o.k,f.a,M.a,k.a,o.j,v.a,m.d,m.e,w.a],pipes:[o.s,o.b],styles:["","[_ngcontent-%COMP%]:root{--modal-width:500px;--modal-height:500px}button[_ngcontent-%COMP%]{margin:5px}[_nghost-%COMP%]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1000;overflow:auto}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]{border-radius:5px;height:calc(var(--modal-height) + 50px);width:var(--modal-width);background:#fff}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-top[_ngcontent-%COMP%]{padding:20px;overflow:auto}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-top[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]{font-size:22px;color:#5ba5d3;text-decoration:underline;float:left}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-top[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]{float:right;padding:0;margin:0}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-top[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%]{min-width:34px}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]{padding:0 50px;height:calc(var(--modal-height) - 150px);overflow:auto}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-action[_ngcontent-%COMP%]{padding:20px;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:30%;text-align:center}[_nghost-%COMP%]     .mat-button .mat-button-focus-overlay{background-color:transparent}.modal-background[_ngcontent-%COMP%]{position:fixed;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.4);z-index:900}.mat-raised-button[_ngcontent-%COMP%]{background-color:#5ba5d3;color:#fff}.mat-stroked-button[_ngcontent-%COMP%]{border-color:#5ba5d3;color:#5ba5d3}.checkbox-container[_ngcontent-%COMP%], .slug-container[_ngcontent-%COMP%]{width:100%;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.checkbox-container[_ngcontent-%COMP%]   app-input-text[_ngcontent-%COMP%], .slug-container[_ngcontent-%COMP%]   app-input-text[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1 0 auto}.checkbox-container[_ngcontent-%COMP%]   app-checkbox[_ngcontent-%COMP%], .slug-container[_ngcontent-%COMP%]   app-checkbox[_ngcontent-%COMP%]{-webkit-box-flex:0;flex:0 0 auto;margin-right:10px}"]}),F),R=l.ac(J);function $(t,e){if(1&t){var n=l.Zb();l.Yb(0,"app-add-permission",12),l.gc("closeModal",(function(t){return l.Cc(n),l.kc().modal(t)})),l.Xb()}if(2&t){var o=l.kc();l.rc("datatable-state",o.componentName)}}function G(t,e){if(1&t){var n=l.Zb();l.Yb(0,"app-edit-permission",13),l.gc("closeModal",(function(t){return l.Cc(n),l.kc().modal(t)})),l.Xb()}if(2&t){var o=l.kc();l.rc("datatable-state",o.componentName),l.qc("data",o.modalControl[1])}}var V,W,B=[{path:"list",component:(V=function(t){function e(t,n,o,a){var c;return _classCallCheck(this,e),(c=_possibleConstructorReturn(this,_getPrototypeOf(e).call(this,t,o,a,"/human-resource"))).store=t,c.fb=n,c._router=o,c._service=a,c.filter=c.fb.group({query:[""],is_active:[""]}),c.componentName="permission",c.columns={name:function(t){return t.name},slug:function(t){return t.slug},created_by:function(t){return t.created_by},modified_by:function(t){return t.modified_by}},c.extra$={access:function(t){return c._service.detailAccess(t)}},c}return _inherits(e,t),e}(r.a),V.\u0275fac=function(t){return new(t||V)(l.Sb(s.j),l.Sb(b.c),l.Sb(a.b),l.Sb(d.a))},V.\u0275cmp=l.Mb({type:V,selectors:[["app-permission"]],features:[l.Bb],decls:17,vars:20,consts:[[3,"backdropClick"],["position","end","fxFlex","400px","fxFlex.sm","100%","fxFlex.xs","100%",1,"filters-container",3,"autoFocus"],["filters",""],[3,"filter","filterNav"],["name","query","label","Search",3,"formName"],["name","is_active","label","Status",3,"formName","options"],[1,"container"],[1,"card-header","mat-elevation-z0"],[1,"card-content","mat-elevation-z0"],["hide-export-button","",3,"columns","service","filter","returnUrl","datatable-state","filterNav","extra","openModal"],[3,"datatable-state","closeModal",4,"ngIf"],[3,"data","datatable-state","closeModal",4,"ngIf"],[3,"datatable-state","closeModal"],[3,"data","datatable-state","closeModal"]],template:function(t,e){1&t&&(l.Yb(0,"mat-sidenav-container",0),l.gc("backdropClick",(function(t){return e.filter_nav.toggle()})),l.Yb(1,"mat-sidenav",1,2),l.Yb(3,"app-filter-sidebar",3),l.Tb(4,"app-input-text",4),l.Tb(5,"app-select-instant",5),l.lc(6,"async"),l.Xb(),l.Xb(),l.Yb(7,"mat-sidenav-content"),l.Yb(8,"div",6),l.Yb(9,"mat-card",7),l.Yb(10,"h2"),l.Lc(11),l.lc(12,"titlecase"),l.Xb(),l.Xb(),l.Yb(13,"mat-card",8),l.Yb(14,"app-datatable",9),l.gc("openModal",(function(t){return e.modal(t)})),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Jc(15,$,1,1,"app-add-permission",10),l.Jc(16,G,1,2,"app-edit-permission",11)),2&t&&(l.Eb(1),l.qc("autoFocus",!1),l.Eb(2),l.qc("filter",e.filter)("filterNav",e.filter_nav),l.Eb(1),l.qc("formName",e.filter),l.Eb(1),l.qc("formName",e.filter)("options",l.mc(6,16,e.statusOptions$)),l.Eb(6),l.Nc("",l.mc(12,18,e.componentName)," List"),l.Eb(3),l.rc("datatable-state",e.componentName),l.qc("columns",e.columns)("service",e._service)("filter",e.filter)("returnUrl",e.returnUrl)("filterNav",e.filter_nav)("extra",e.extra$),l.Eb(1),l.qc("ngIf","add"===e.modalControl[0]),l.Eb(1),l.qc("ngIf","edit"===e.modalControl[0]))},directives:[p.b,p.a,m.b,u.a,f.a,g.a,p.c,_.a,x.a,o.k,Y,J],pipes:[o.b,o.s],styles:["",".card-header[_ngcontent-%COMP%]{margin:25px 25px 0}.card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700;color:#0d486c}.card-content[_ngcontent-%COMP%]{margin:-5px 25px 25px}.filters-container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;padding:15px}mat-sidenav-container[_ngcontent-%COMP%]{height:90vh}mat-sidenav-content[_ngcontent-%COMP%]{background-color:#f5f7fa;width:100%;height:100%}.datatable-top[_ngcontent-%COMP%]{padding:0 5px;-webkit-box-pack:justify;justify-content:space-between}.datatable-top[_ngcontent-%COMP%], .datatable-top[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.datatable-top[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{padding:15px}.datatable-top[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:end;align-items:flex-end;padding:15px}.datatable-top[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding-left:5px;padding-right:5px}.datatable[_ngcontent-%COMP%]{width:100%;height:100%}.datatable[_ngcontent-%COMP%], [_nghost-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}[_nghost-%COMP%]  .mat-drawer-backdrop.mat-drawer-shown{background-color:transparent!important}"]}),V),canActivate:[c.a,i.a],data:{breadcrumbs:!0,text:"List",componentName:"access",role:["super-admin"]}},{path:"",pathMatch:"full",redirectTo:"list"}],D=((W=function t(){_classCallCheck(this,t)}).\u0275mod=l.Qb({type:W}),W.\u0275inj=l.Pb({factory:function(t){return new(t||W)},imports:[[a.e.forChild(B)],a.e]}),W),Q=n("OS5G");n.d(e,"PermissionModule",(function(){return Z}));var U,Z=((U=function t(){_classCallCheck(this,t)}).\u0275mod=l.Qb({type:U}),U.\u0275inj=l.Pb({factory:function(t){return new(t||U)},imports:[[o.c,D,Q.a]]}),U)}}]);