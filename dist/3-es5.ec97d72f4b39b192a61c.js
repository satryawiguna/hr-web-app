function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{CMRa:function(e,t,i){"use strict";i.d(t,"d",(function(){return o})),i.d(t,"a",(function(){return c})),i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return l}));var n=i("ar4q").PhoneNumberUtil.getInstance();function o(e){return!/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi.test(e.value)&&e.value?{urlValidation:!1}:null}function c(e){return!/^[a-zA-Z0-9]+$/gi.test(e.value)&&e.value?{alphaNumericValidation:!1}:null}function a(e){return!/^[0-9]+$/gi.test(e.value)&&e.value?{numericValidation:!1}:null}function l(e){try{var t=n.parse(e.value);return e.value&&!n.isValidNumber(t)?{phoneNumberValidation:!1}:null}catch(i){}}},XypE:function(e,t,i){"use strict";i.d(t,"a",(function(){return R}));var n=i("tk/3"),o=i("lJxs"),c=i("vkgz"),a=i("EWu2"),l=i("yTaJ"),r=i("fXoL"),s=i("0IaG"),u=i("JK4O"),f=i("5eHb"),d=i("XiUz"),p=i("kmnG"),b=i("ofXK"),g=i("NFeN"),m=i("bTqV"),h=i("7EHt"),v=i("MutI"),y=i("f0Cb"),x=i("Wp6s"),k=i("znSr"),w=i("bv9b"),L=["mainDialog"],_=["dropzone"],C=["preview"],X=["confirmDelete"];function Y(e,t){1&e&&(r.Yb(0,"div",9),r.Yb(1,"mat-icon",10),r.Lc(2,"camera_alt"),r.Xb(),r.Yb(3,"div"),r.Lc(4,"Select image, or drag from gallery"),r.Xb(),r.Yb(5,"div"),r.Lc(6,"(.jpg or .png, dimension size 1:1, max-size 1mb)"),r.Xb(),r.Xb())}function I(e,t){if(1&e&&(r.Yb(0,"div",9),r.Tb(1,"img",11),r.Xb()),2&e){var i=r.kc();r.Eb(1),r.qc("src",i.selectedSrc,r.Ec)}}function P(e,t){if(1&e){var i=r.Zb();r.Wb(0),r.Tb(1,"mat-divider"),r.Yb(2,"mat-list-option",34),r.gc("click",(function(e){r.Cc(i);var t=r.kc().$implicit;r.kc();var n=r.zc(10);return r.kc().setFileType(t),n.closeAll()})),r.Lc(3),r.lc(4,"titlecase"),r.Xb(),r.Vb()}if(2&e){var n=r.kc().$implicit;r.Eb(3),r.Nc(" ",r.mc(4,1,n)," ")}}function O(e,t){if(1&e&&(r.Wb(0),r.Jc(1,P,5,3,"ng-container",33),r.Vb()),2&e){var i=t.$implicit,n=r.kc(2);r.Eb(1),r.qc("ngIf",n.typeShow!=i)}}function D(e,t){if(1&e){var i=r.Zb();r.Wb(0),r.Tb(1,"mat-divider"),r.Yb(2,"mat-list-option",34),r.gc("click",(function(e){r.Cc(i);var t=r.kc().$implicit;r.kc();var n=r.zc(21);return r.kc().setCollection(t),n.closeAll()})),r.Lc(3),r.lc(4,"titlecase"),r.Xb(),r.Vb()}if(2&e){var n=r.kc().$implicit;r.Eb(3),r.Nc(" ",r.mc(4,1,n)," ")}}function E(e,t){if(1&e&&(r.Wb(0),r.Jc(1,D,5,3,"ng-container",33),r.Vb()),2&e){var i=t.$implicit,n=r.kc(2);r.Eb(1),r.qc("ngIf",n.collectionShow!=i)}}function z(e,t){if(1&e){var i=r.Zb();r.Yb(0,"div",35),r.gc("dragover",(function(e){return r.Cc(i),r.kc(2).showDropzone()})),r.Yb(1,"div"),r.Yb(2,"mat-icon",36),r.Lc(3,"camera_alt"),r.Xb(),r.Xb(),r.Yb(4,"div"),r.Lc(5,"Drag or drop files here"),r.Xb(),r.Yb(6,"div"),r.Lc(7,"(.jpg or .png, dimension size 1:1, max-size 1mb)"),r.Xb(),r.Xb()}}function M(e,t){if(1&e){var i=r.Zb();r.Yb(0,"div",47),r.Yb(1,"div",48),r.Yb(2,"button",49),r.Yb(3,"mat-icon",50),r.gc("click",(function(e){r.Cc(i);var t=r.kc(2).index;return r.kc(3).previewImage(e,t)})),r.Lc(4,"search"),r.Xb(),r.Xb(),r.Yb(5,"button",51),r.Yb(6,"mat-icon",50),r.gc("click",(function(e){r.Cc(i);var t=r.kc(2).index;return r.kc(3).deleteImage(e,t)})),r.Lc(7,"delete"),r.Xb(),r.Xb(),r.Xb(),r.Yb(8,"div",52),r.Lc(9),r.Xb(),r.Xb()}if(2&e){var n=r.kc(2).$implicit,o=r.kc(3);r.Eb(9),r.Mc(o.truncFileName(n.name||n.original_file))}}function A(e,t){if(1&e&&(r.Yb(0,"div",43),r.Tb(1,"img",44),r.Tb(2,"div",45),r.Jc(3,M,10,1,"div",46),r.Xb()),2&e){var i=r.kc().$implicit;r.Eb(1),r.qc("src",i.thumbnail,r.Ec),r.Eb(2),r.qc("ngIf",100==i.percentDone||!i.percentDone)}}function S(e,t){if(1&e&&(r.Yb(0,"div",55),r.Tb(1,"mat-progress-bar",56),r.Yb(2,"span"),r.Lc(3),r.Xb(),r.Xb()),2&e){var i=r.kc(2).$implicit;r.Eb(1),r.qc("value",i.percentDone),r.Eb(2),r.Nc("",i.percentDone," %")}}function F(e,t){if(1&e&&(r.Yb(0,"div"),r.Yb(1,"mat-icon",53),r.Lc(2,"photo"),r.Xb(),r.Jc(3,S,4,2,"div",54),r.Xb()),2&e){var i=r.kc().$implicit;r.Eb(3),r.qc("ngIf",i.percentDone<100)}}function N(e,t){if(1&e){var i=r.Zb();r.Yb(0,"mat-card",39),r.gc("click",(function(e){r.Cc(i);var n=t.$implicit,o=t.index,c=r.kc(3);return 100!=n.percentDone&&n.percentDone?"":c.imageClicked(o)})),r.Yb(1,"mat-card-content",40),r.Jc(2,A,4,2,"div",41),r.Jc(3,F,4,1,"ng-template",null,42,r.Kc),r.Xb(),r.Xb()}if(2&e){var n=t.$implicit,o=t.index,c=r.zc(4),a=r.kc(3);r.Eb(1),r.qc("ngClass",o==a.selectedImageId?"image-selected":""),r.Eb(1),r.qc("ngIf",n.hasOwnProperty("thumbnail"))("ngIfElse",c)}}function T(e,t){if(1&e&&(r.Yb(0,"div",37),r.Jc(1,N,5,3,"mat-card",38),r.Xb()),2&e){var i=r.kc(2);r.Eb(1),r.qc("ngForOf",i.files)}}function J(e,t){if(1&e){var i=r.Zb();r.Yb(0,"div",12),r.Yb(1,"div",13),r.Yb(2,"h2",14),r.Lc(3,"Media Library"),r.Xb(),r.Yb(4,"button",15),r.gc("click",(function(e){return r.Cc(i),r.kc().close()})),r.Yb(5,"mat-icon",16),r.Lc(6,"close"),r.Xb(),r.Xb(),r.Xb(),r.Yb(7,"div",17),r.Yb(8,"div",18),r.Yb(9,"mat-accordion",19,20),r.Yb(11,"mat-expansion-panel",21),r.Yb(12,"mat-expansion-panel-header",22),r.Yb(13,"mat-panel-title"),r.Lc(14),r.lc(15,"titlecase"),r.Xb(),r.Yb(16,"mat-icon"),r.Lc(17,"keyboard_arrow_down"),r.Xb(),r.Xb(),r.Yb(18,"mat-selection-list"),r.Jc(19,O,2,1,"ng-container",23),r.Xb(),r.Xb(),r.Xb(),r.Yb(20,"mat-accordion",19,24),r.Yb(22,"mat-expansion-panel",25),r.Yb(23,"mat-expansion-panel-header",22),r.Yb(24,"mat-panel-title"),r.Lc(25),r.lc(26,"titlecase"),r.Xb(),r.Yb(27,"mat-icon"),r.Lc(28,"keyboard_arrow_down"),r.Xb(),r.Xb(),r.Yb(29,"mat-selection-list"),r.Jc(30,E,2,1,"ng-container",23),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Jc(31,z,8,0,"div",26),r.Jc(32,T,2,1,"div",27),r.Xb(),r.Yb(33,"div",28),r.Yb(34,"input",29,30),r.gc("change",(function(e){return r.Cc(i),r.kc().fileBrowseHandler(e)})),r.Xb(),r.Yb(36,"button",31),r.gc("click",(function(e){return r.Cc(i),r.kc().selectFile()})),r.Lc(37," Select "),r.Xb(),r.Yb(38,"button",32),r.gc("click",(function(e){return r.Cc(i),r.kc().openFilePicker()})),r.Lc(39," Upload File "),r.Xb(),r.Xb(),r.Xb()}if(2&e){var n=r.kc();r.Eb(9),r.qc("multi",!0),r.Eb(5),r.Nc(" ",r.mc(15,10,n.typeShow)," "),r.Eb(5),r.qc("ngForOf",n.typeSrc),r.Eb(1),r.qc("multi",!0),r.Eb(5),r.Nc(" ",r.mc(26,12,n.collectionShow)," "),r.Eb(5),r.qc("ngForOf",n.collectionSrc),r.Eb(1),r.qc("ngIf",!n.files.length),r.Eb(1),r.qc("ngIf",n.files.length),r.Eb(2),r.rc("multiple",n.multiple?"multiple":""),r.Eb(2),r.qc("disabled",!n.files.length||-1==n.selectedImageId)}}function q(e,t){if(1&e){var i=r.Zb();r.Yb(0,"div",57),r.Yb(1,"div",58),r.gc("drop",(function(e){return r.Cc(i),r.kc().onFileDropped(e)}))("dragleave",(function(e){return r.Cc(i),r.kc().dismissDropzone()})),r.Tb(2,"input",59,60),r.Yb(4,"div",61),r.Yb(5,"mat-icon"),r.Lc(6,"add"),r.Xb(),r.Yb(7,"h3"),r.Lc(8,"Drop files to upload"),r.Xb(),r.Xb(),r.Xb(),r.Xb()}if(2&e){var n=r.kc();r.Eb(2),r.rc("multiple",n.multiple?"multiple":"")}}function j(e,t){if(1&e){var i=r.Zb();r.Yb(0,"div",62),r.Yb(1,"div",63),r.Tb(2,"span",14),r.Yb(3,"button",64),r.gc("click",(function(e){return r.Cc(i),r.kc().closePreview()})),r.Yb(4,"mat-icon",65),r.Lc(5,"close"),r.Xb(),r.Xb(),r.Xb(),r.Yb(6,"div",66),r.Tb(7,"img",67),r.Lc(8),r.Xb(),r.Xb()}if(2&e){var n=r.kc();r.Eb(7),r.qc("src",n.previewSrc,r.Ec),r.Eb(1),r.Nc(" ",n.fileName," ")}}function G(e,t){if(1&e){var i=r.Zb();r.Yb(0,"div",68),r.Yb(1,"div",13),r.Yb(2,"h1",14),r.Lc(3,"Delete File"),r.Xb(),r.Yb(4,"button",64),r.gc("click",(function(e){return r.Cc(i),r.kc().closePreview()})),r.Yb(5,"mat-icon",16),r.Lc(6,"close"),r.Xb(),r.Xb(),r.Xb(),r.Yb(7,"div",69),r.Lc(8),r.Xb(),r.Yb(9,"div",70),r.Yb(10,"button",71),r.gc("click",(function(e){return r.Cc(i),r.kc().closePreview()})),r.Lc(11,"Cancel"),r.Xb(),r.Yb(12,"button",72),r.gc("click",(function(e){r.Cc(i);var t=r.kc();return t.doDelete(t.indexDelete)})),r.Lc(13,"Delete"),r.Xb(),r.Xb(),r.Xb()}if(2&e){var n=r.kc();r.Eb(8),r.Nc(" Are you sure you want to delete ",n.fileName," file ? ")}}var R=function(){var e=function(e){function t(e,i,n){var o;return _classCallCheck(this,t),(o=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this))).dialog=e,o._service=i,o.toastr=n,o.files=[],o.infoDropzone=!0,o.selectedImageId=-1,o.hasSelected=!1,o.typeSrc=["image","document","other"],o.collectionSrc=["company","profile","employee","project","project addendum"],o.type="image",o.collection="company",o.multiple=!0,o}return _inherits(t,e),_createClass(t,[{key:"ngOnInit",value:function(){var e=this;this.typeShow=this.type,this.collectionShow=this.collection,this.showList(),this.subs.sink=this.formName.get(this.name).valueChanges.subscribe((function(t){t.length>0&&t[0].hasOwnProperty("media_library_id")?(e.selectedImageId=e.files.findIndex((function(e){return e.id===t[0].media_library_id})),-1!==e.selectedImageId&&(e.hasSelected=!0,e.selectedSrc=e.files[e.selectedImageId].thumbnail)):(e.hasSelected=!1,e.selectedSrc="")}))}},{key:"showList",value:function(){var e=this,t=this.getCollection("view"),i=a.c.getUserInformation().companies,n={query:"",user_id:a.c.getUserInformation().id,company_id:"",collection:t};i.length&&(n.company_id=i[0].id),this.subs.sink=this._service.mediaListSearch(n).pipe(Object(o.a)((function(t){var i=t.rows,n=[];switch(e.typeShow){case"image":n=["jpg","png","jpeg","gif"];break;case"document":n=["doc","docx","pdf","txt"]}i.forEach((function(t){e._service.mediaDownload(e.getCollection("view"),t.generate_file).subscribe((function(e){var i=new FileReader;i.onloadend=function(e){t.thumbnail=i.result},i.readAsDataURL(e)}))}));var o=[];return n.length?i.forEach((function(e){n.includes(e.extension.toLowerCase())&&o.push(e)})):o=i,o})),Object(o.a)((function(t){e.files=t}))).subscribe()}},{key:"showMainDialog",value:function(){this.dialog.open(this.mainDialog,{width:"85vw",height:"85vh",disableClose:!0})}},{key:"close",value:function(){this.dialog.closeAll()}},{key:"setFileType",value:function(e){this.typeShow=e,this.showList()}},{key:"setCollection",value:function(e){this.collectionShow=e,this.showList()}},{key:"onFileDropped",value:function(e){this.prepareFilesList(e.dataTransfer.files),this.dismissDropzone()}},{key:"openFilePicker",value:function(){document.getElementById("fileInput").click()}},{key:"fileBrowseHandler",value:function(e){this.prepareFilesList(e.target.files),this.dismissDropzone()}},{key:"prepareFilesList",value:function(e){var t=!0,i=!1,n=void 0;try{for(var o,c=e[Symbol.iterator]();!(t=(o=c.next()).done);t=!0){var a=o.value;a.percentDone=0;var l=this.files.push(a)-1;this.doUpload(l)}}catch(r){i=!0,n=r}finally{try{t||null==c.return||c.return()}finally{if(i)throw n}}}},{key:"showDropzone",value:function(){this.dialog.open(this.dropzone,{width:"85vw",height:"85vh",panelClass:"nopadding"})}},{key:"dismissDropzone",value:function(){var e=this.dialog.openDialogs;e.length<=1||this.dialog.getDialogById(e[1].id).close()}},{key:"imageClicked",value:function(e){this.selectedImageId=this.selectedImageId===e?-1:e}},{key:"truncFileName",value:function(e){return e.length>20?e.substr(0,10)+"....."+e.substr(-5):e}},{key:"previewImage",value:function(e,t){e.preventDefault();var i=this.files[t];this.fileName=i.original_file,this.previewSrc=i.thumbnail,this.dialog.open(this.preview,{width:"100vw",height:"100vh",panelClass:"nobackground",disableClose:!0})}},{key:"closePreview",value:function(){this.dialog.getDialogById(this.dialog.openDialogs[1].id).close()}},{key:"deleteImage",value:function(e,t){e.preventDefault(),this.fileName=this.files[t].original_file,this.indexDelete=t,this.dialog.open(this.confirmDelete,{disableClose:!0})}},{key:"doDelete",value:function(e){var t=this;this.subs.sink=this._service.mediaDelete(this.files[e].id).pipe(Object(c.a)((function(i){t.closePreview(),t.toastr.success(i.message),t.files.splice(e,1)}),(function(e){t.closePreview(),t.toastr.error(e.message,"Something went wrong.... Try again later")}))).subscribe()}},{key:"getCollection",value:function(e){var t,i;switch("view"===e?t=this.collectionShow:"upload"===e&&(t=this.collection),t){case"company":i="COMPANY";break;case"profile":i="PROFILE";break;case"employee":i="EMPLOYEE";break;case"project":i="PROJECT";break;case"project addendum":i="PROJECT_ADDENDUM"}return i}},{key:"doUpload",value:function(e){var t=this,i=this.getCollection("upload"),o=new FormData;o.append("user_id",a.c.getUserInformation().id),o.append("collection",i),o.append("file",this.files[e]),this._service.mediaUpload(o).subscribe((function(i){if(i.type===n.d.UploadProgress){var o=Math.round(100*i.loaded/i.total);t.files[e].percentDone=o}else i instanceof n.g&&(t.files[e]=i.body.data,t.files[e].percentDone=100,t._service.mediaDownload(t.getCollection("view"),t.files[e].generate_file).subscribe((function(i){var n=new FileReader;n.onloadend=function(i){t.files[e].thumbnail=n.result},n.readAsDataURL(i)})))}))}},{key:"selectFile",value:function(){var e=this;this.hasSelected=!0,this.fileName=this.files[this.selectedImageId].generate_file,this._service.mediaDownload(this.getCollection("view"),this.fileName).subscribe((function(t){var i=new FileReader;i.onloadend=function(t){e.selectedSrc=i.result},i.readAsDataURL(t)}));var t=[{id:this.files[this.selectedImageId].id,media_library_id:this.files[this.selectedImageId].id,pivot:{attribute:"featured"}}];this.formName.get(this.name).setValue(t),console.log(this.formName.get(this.name).value),this.close()}}]),t}(l.a);return e.\u0275fac=function(t){return new(t||e)(r.Sb(s.c),r.Sb(u.a),r.Sb(f.b))},e.\u0275cmp=r.Mb({type:e,selectors:[["app-upload-image"]],viewQuery:function(e,t){var i;1&e&&(r.Qc(L,!0),r.Qc(_,!0),r.Qc(C,!0),r.Qc(X,!0)),2&e&&(r.yc(i=r.hc())&&(t.mainDialog=i.first),r.yc(i=r.hc())&&(t.dropzone=i.first),r.yc(i=r.hc())&&(t.preview=i.first),r.yc(i=r.hc())&&(t.confirmDelete=i.first))},inputs:{formName:"formName",label:"label",name:"name",type:"type",collection:"collection",multiple:"multiple"},features:[r.Bb],decls:16,vars:5,consts:[["fxLayout","column","fxLayoutGap","10px",2,"margin-top","10px"],[2,"color","#808080"],["fxLayout","column","fxLayoutAlign","center center","fxLayoutGap","10px",2,"cursor","pointer","border","1px dashed #808080","padding","10px","color","#808080",3,"click"],["fxLayoutAlign","center center","fxLayout","column","fxLayoutGap","10px",4,"ngIf","ngIfElse"],["showPreview",""],["mainDialog",""],["dropzone",""],["preview",""],["confirmDelete",""],["fxLayoutAlign","center center","fxLayout","column","fxLayoutGap","10px"],[2,"font-size","32px"],["width","75%","height","75%",3,"src"],["fxLayout","column",1,"container"],["mat-dialog-title","","fxLayout","row","fxLayoutAlign","space-between"],["fxLayoutAlign","start"],["mat-icon-button","","type","button",1,"btn-close",3,"click"],["aria-hidden","false","aria-label","close"],["mat-dialog-content","","fxLayout","column",2,"min-height","67vh"],["fxLayout","row","fxLayoutGap","10px"],[3,"multi"],["fileTypePanel","matAccordion"],["hideToggle","true",1,"mat-elevation-z0",2,"margin-top","1px","position","absolute","z-index","999"],["collapsedHeight","30px","expandedHeight","30px"],[4,"ngFor","ngForOf"],["collectionPanel","matAccordion"],["hideToggle","true",1,"mat-elevation-z0",2,"margin-left","110px","margin-top","1px","position","absolute","z-index","999"],["fxLayout","column","fxLayoutAlign","center center","fxLayoutGap","20px","style","color: #808080; font-size: 18px; margin: auto; position: relative;",3,"dragover",4,"ngIf"],["fxLayout","row wrap","fxLayout.xs","column wrap","fxLayoutGap","10px","class","file-list",4,"ngIf"],["mat-dialog-actions","","fxLayout","row","fxLayoutAlign","end","fxLayoutGap","10px"],["type","file","id","fileInput",2,"display","none",3,"multiple","change"],["fileInput",""],["mat-raised-button","","color","primary","type","button",3,"disabled","click"],["mat-stroked-button","","color","primary","type","button",3,"click"],[4,"ngIf"],[3,"click"],["fxLayout","column","fxLayoutAlign","center center","fxLayoutGap","20px",2,"color","#808080","font-size","18px","margin","auto","position","relative",3,"dragover"],[2,"font-size","72px","width","72px"],["fxLayout","row wrap","fxLayout.xs","column wrap","fxLayoutGap","10px",1,"file-list"],["class","mat-elevation-z0 image-list","fxFlex","15","style","color: #808080;",3,"click",4,"ngFor","ngForOf"],["fxFlex","15",1,"mat-elevation-z0","image-list",2,"color","#808080",3,"click"],["fxLayout","column","fxLayoutAlign","center center",2,"cursor","pointer",3,"ngClass"],["class","container-img",4,"ngIf","ngIfElse"],["noThumb",""],[1,"container-img"],[3,"src"],[1,"selected-overlay"],["class","action-overlay","fxLayout","column","fxLayoutAlign","center center",4,"ngIf"],["fxLayout","column","fxLayoutAlign","center center",1,"action-overlay"],["fxLayout","row"],["mat-icon-button","","aria-label","preview",1,"action-preview",2,"width","22px"],[2,"font-size","20px","width","20px",3,"click"],["mat-icon-button","","aria-label","delete",1,"action-delete",2,"width","22px"],[2,"font-size","12px","text-align","center","max-width","80px","word-wrap","break-word"],[2,"font-size","128px","width","128px"],["class","loading-overlay","fxLayoutAlign","center center","fxLayout","column","style","padding: 1em;",4,"ngIf"],["fxLayoutAlign","center center","fxLayout","column",1,"loading-overlay",2,"padding","1em"],["mode","determinate",3,"value"],["fxLayout","column","fxLayoutAlign","center center","fxLayoutGap","10px",1,"container",2,"min-height","85vh","background-color","black","border","2px solid #5ba5d3"],["fxLayout","column","fxLayoutAlign","center center","fxLayoutGap","20px",2,"color","#808080","font-size","18px","position","relative","width","100%","height","100%",3,"drop","dragleave"],["type","file","id","fileDropRef",3,"multiple"],["fileDropRef",""],["fxLayout","column","fxLayoutAlign","center center","fxLayoutGap","10px",1,"info",2,"margin","auto","color","#ffffff"],["fxLayout","column","fxLayoutGap","25px",2,"color","#ffffff"],["fxLayoutAlign","space-between"],["mat-icon-button","","fxLayoutAlign","end",1,"btn-close",3,"click"],["aria-hidden","false","aria-label","close",2,"font-size","32px","width","32px"],["fxLayoutAlign","center center","fxLayout","column","fxLayoutGap","20px"],[1,"responsive",3,"src"],["fxLayout","column","fxLayoutGap","20px",1,"container"],["mat-dialog-content",""],["mat-dialog-actions","","fxLayout","row","fxLayoutGap","10px","fxLayoutAlign","end"],["mat-stroked-button","","color","primary","cdkFocusInitial","",3,"click"],["mat-raised-button","","color","primary","cdkFocusInitial","",3,"click"]],template:function(e,t){if(1&e&&(r.Yb(0,"div",0),r.Yb(1,"mat-label",1),r.Lc(2),r.lc(3,"titlecase"),r.Xb(),r.Yb(4,"div",2),r.gc("click",(function(e){return t.showMainDialog()})),r.Jc(5,Y,7,0,"div",3),r.Jc(6,I,2,1,"ng-template",null,4,r.Kc),r.Xb(),r.Xb(),r.Jc(8,J,40,14,"ng-template",null,5,r.Kc),r.Jc(10,q,9,1,"ng-template",null,6,r.Kc),r.Jc(12,j,9,2,"ng-template",null,7,r.Kc),r.Jc(14,G,14,1,"ng-template",null,8,r.Kc)),2&e){var i=r.zc(7);r.Eb(2),r.Mc(r.mc(3,3,t.label)),r.Eb(3),r.qc("ngIf",!t.hasSelected)("ngIfElse",i)}},directives:[d.d,d.e,p.e,d.c,b.k,g.a,m.a,h.a,h.c,h.d,h.e,v.c,b.j,y.a,v.b,x.a,d.b,x.c,b.i,k.a,w.a],pipes:[b.s],styles:[".mat-raised-button[_ngcontent-%COMP%]{background-color:#5ba5d3;color:#fff}.mat-stroked-button[_ngcontent-%COMP%]{border-color:#5ba5d3;color:#5ba5d3}.btn-close[_ngcontent-%COMP%]{float:right;padding:0;margin:0;min-width:34px}  .mat-pseudo-checkbox{display:none!important}  .mat-expansion-panel{border:2px solid #0d486c;padding:0;margin:0;color:#0d486c;z-index:999}  .mat-expansion-panel-body,   .mat-expansion-panel-header{padding:0 10px}  .mat-list-item-content{padding:0!important;margin-bottom:0!important;font-size:14px}  .mat-list-item-content:hover{background-color:#fff}  .mat-expansion-panel-header-title{margin-top:2px;margin-right:0;font-size:14px}mat-panel-title[_ngcontent-%COMP%]{color:#0d486c;font-weight:700}.mat-list-option[_ngcontent-%COMP%], mat-selection-list[_ngcontent-%COMP%]{padding:0;margin:0}.mat-list-option[_ngcontent-%COMP%]{color:#0d486c;font-weight:700;height:30px}input[_ngcontent-%COMP%]{opacity:0;position:absolute;z-index:2;width:100%;height:100%;top:0;left:0;bottom:0;right:0}.file-list[_ngcontent-%COMP%]{margin-top:7vh;height:57vh;max-height:57vh;overflow:auto}.responsive[_ngcontent-%COMP%]{width:85%;height:70%}.action-preview[_ngcontent-%COMP%]:hover{color:#0875f1;border-color:#0875f1}.action-delete[_ngcontent-%COMP%]:hover{color:#da0808;border-color:#da0808}.mat-card[_ngcontent-%COMP%]{max-height:55%}.mat-card-content[_ngcontent-%COMP%]{margin-bottom:0;position:relative}.mat-card-actions[_ngcontent-%COMP%]{padding:0}.container-img[_ngcontent-%COMP%]{width:128px;height:128px}.container-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.image-list[_ngcontent-%COMP%]:hover   .action-overlay[_ngcontent-%COMP%]{opacity:.8}.image-selected[_ngcontent-%COMP%]   .selected-overlay[_ngcontent-%COMP%]{opacity:.6}.action-overlay[_ngcontent-%COMP%]{color:#fff;background-color:#000}.action-overlay[_ngcontent-%COMP%], .selected-overlay[_ngcontent-%COMP%]{-webkit-transition:.5s ease;transition:.5s ease;opacity:0;position:absolute;width:100%;height:100%;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);text-align:center}.selected-overlay[_ngcontent-%COMP%]{background-color:#030303;border:5px solid #002c46}.loading-overlay[_ngcontent-%COMP%]{background-color:#000;opacity:.8;position:absolute;top:50%;left:50%;width:100%;height:100%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);text-align:center}"]}),e}()}}]);