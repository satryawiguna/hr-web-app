(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{CMRa:function(e,t,i){"use strict";i.d(t,"d",(function(){return o})),i.d(t,"a",(function(){return c})),i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return l}));const n=i("ar4q").PhoneNumberUtil.getInstance();function o(e){return!/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi.test(e.value)&&e.value?{urlValidation:!1}:null}function c(e){return!/^[a-zA-Z0-9]+$/gi.test(e.value)&&e.value?{alphaNumericValidation:!1}:null}function a(e){return!/^[0-9]+$/gi.test(e.value)&&e.value?{numericValidation:!1}:null}function l(e){try{const t=n.parse(e.value);return e.value&&!n.isValidNumber(t)?{phoneNumberValidation:!1}:null}catch(t){}}},XypE:function(e,t,i){"use strict";i.d(t,"a",(function(){return U}));var n=i("tk/3"),o=i("lJxs"),c=i("vkgz"),a=i("EWu2"),l=i("yTaJ"),s=i("fXoL"),r=i("0IaG"),d=i("JK4O"),b=i("5eHb"),p=i("XiUz"),u=i("kmnG"),f=i("ofXK"),m=i("NFeN"),g=i("bTqV"),h=i("7EHt"),x=i("MutI"),y=i("f0Cb"),v=i("Wp6s"),w=i("znSr"),L=i("bv9b");const k=["mainDialog"],X=["dropzone"],Y=["preview"],C=["confirmDelete"];function I(e,t){1&e&&(s.Yb(0,"div",9),s.Yb(1,"mat-icon",10),s.Lc(2,"camera_alt"),s.Xb(),s.Yb(3,"div"),s.Lc(4,"Select image, or drag from gallery"),s.Xb(),s.Yb(5,"div"),s.Lc(6,"(.jpg or .png, dimension size 1:1, max-size 1mb)"),s.Xb(),s.Xb())}function _(e,t){if(1&e&&(s.Yb(0,"div",9),s.Tb(1,"img",11),s.Xb()),2&e){const e=s.kc();s.Eb(1),s.qc("src",e.selectedSrc,s.Ec)}}function D(e,t){if(1&e){const e=s.Zb();s.Wb(0),s.Tb(1,"mat-divider"),s.Yb(2,"mat-list-option",34),s.gc("click",(function(t){s.Cc(e);const i=s.kc().$implicit;s.kc();const n=s.zc(10);return s.kc().setFileType(i),n.closeAll()})),s.Lc(3),s.lc(4,"titlecase"),s.Xb(),s.Vb()}if(2&e){const e=s.kc().$implicit;s.Eb(3),s.Nc(" ",s.mc(4,1,e)," ")}}function E(e,t){if(1&e&&(s.Wb(0),s.Jc(1,D,5,3,"ng-container",33),s.Vb()),2&e){const e=t.$implicit,i=s.kc(2);s.Eb(1),s.qc("ngIf",i.typeShow!=e)}}function P(e,t){if(1&e){const e=s.Zb();s.Wb(0),s.Tb(1,"mat-divider"),s.Yb(2,"mat-list-option",34),s.gc("click",(function(t){s.Cc(e);const i=s.kc().$implicit;s.kc();const n=s.zc(21);return s.kc().setCollection(i),n.closeAll()})),s.Lc(3),s.lc(4,"titlecase"),s.Xb(),s.Vb()}if(2&e){const e=s.kc().$implicit;s.Eb(3),s.Nc(" ",s.mc(4,1,e)," ")}}function z(e,t){if(1&e&&(s.Wb(0),s.Jc(1,P,5,3,"ng-container",33),s.Vb()),2&e){const e=t.$implicit,i=s.kc(2);s.Eb(1),s.qc("ngIf",i.collectionShow!=e)}}function O(e,t){if(1&e){const e=s.Zb();s.Yb(0,"div",35),s.gc("dragover",(function(t){return s.Cc(e),s.kc(2).showDropzone()})),s.Yb(1,"div"),s.Yb(2,"mat-icon",36),s.Lc(3,"camera_alt"),s.Xb(),s.Xb(),s.Yb(4,"div"),s.Lc(5,"Drag or drop files here"),s.Xb(),s.Yb(6,"div"),s.Lc(7,"(.jpg or .png, dimension size 1:1, max-size 1mb)"),s.Xb(),s.Xb()}}function M(e,t){if(1&e){const e=s.Zb();s.Yb(0,"div",47),s.Yb(1,"div",48),s.Yb(2,"button",49),s.Yb(3,"mat-icon",50),s.gc("click",(function(t){s.Cc(e);const i=s.kc(2).index;return s.kc(3).previewImage(t,i)})),s.Lc(4,"search"),s.Xb(),s.Xb(),s.Yb(5,"button",51),s.Yb(6,"mat-icon",50),s.gc("click",(function(t){s.Cc(e);const i=s.kc(2).index;return s.kc(3).deleteImage(t,i)})),s.Lc(7,"delete"),s.Xb(),s.Xb(),s.Xb(),s.Yb(8,"div",52),s.Lc(9),s.Xb(),s.Xb()}if(2&e){const e=s.kc(2).$implicit,t=s.kc(3);s.Eb(9),s.Mc(t.truncFileName(e.name||e.original_file))}}function A(e,t){if(1&e&&(s.Yb(0,"div",43),s.Tb(1,"img",44),s.Tb(2,"div",45),s.Jc(3,M,10,1,"div",46),s.Xb()),2&e){const e=s.kc().$implicit;s.Eb(1),s.qc("src",e.thumbnail,s.Ec),s.Eb(2),s.qc("ngIf",100==e.percentDone||!e.percentDone)}}function S(e,t){if(1&e&&(s.Yb(0,"div",55),s.Tb(1,"mat-progress-bar",56),s.Yb(2,"span"),s.Lc(3),s.Xb(),s.Xb()),2&e){const e=s.kc(2).$implicit;s.Eb(1),s.qc("value",e.percentDone),s.Eb(2),s.Nc("",e.percentDone," %")}}function F(e,t){if(1&e&&(s.Yb(0,"div"),s.Yb(1,"mat-icon",53),s.Lc(2,"photo"),s.Xb(),s.Jc(3,S,4,2,"div",54),s.Xb()),2&e){const e=s.kc().$implicit;s.Eb(3),s.qc("ngIf",e.percentDone<100)}}function N(e,t){if(1&e){const e=s.Zb();s.Yb(0,"mat-card",39),s.gc("click",(function(i){s.Cc(e);const n=t.$implicit,o=t.index,c=s.kc(3);return 100!=n.percentDone&&n.percentDone?"":c.imageClicked(o)})),s.Yb(1,"mat-card-content",40),s.Jc(2,A,4,2,"div",41),s.Jc(3,F,4,1,"ng-template",null,42,s.Kc),s.Xb(),s.Xb()}if(2&e){const e=t.$implicit,i=t.index,n=s.zc(4),o=s.kc(3);s.Eb(1),s.qc("ngClass",i==o.selectedImageId?"image-selected":""),s.Eb(1),s.qc("ngIf",e.hasOwnProperty("thumbnail"))("ngIfElse",n)}}function J(e,t){if(1&e&&(s.Yb(0,"div",37),s.Jc(1,N,5,3,"mat-card",38),s.Xb()),2&e){const e=s.kc(2);s.Eb(1),s.qc("ngForOf",e.files)}}function q(e,t){if(1&e){const e=s.Zb();s.Yb(0,"div",12),s.Yb(1,"div",13),s.Yb(2,"h2",14),s.Lc(3,"Media Library"),s.Xb(),s.Yb(4,"button",15),s.gc("click",(function(t){return s.Cc(e),s.kc().close()})),s.Yb(5,"mat-icon",16),s.Lc(6,"close"),s.Xb(),s.Xb(),s.Xb(),s.Yb(7,"div",17),s.Yb(8,"div",18),s.Yb(9,"mat-accordion",19,20),s.Yb(11,"mat-expansion-panel",21),s.Yb(12,"mat-expansion-panel-header",22),s.Yb(13,"mat-panel-title"),s.Lc(14),s.lc(15,"titlecase"),s.Xb(),s.Yb(16,"mat-icon"),s.Lc(17,"keyboard_arrow_down"),s.Xb(),s.Xb(),s.Yb(18,"mat-selection-list"),s.Jc(19,E,2,1,"ng-container",23),s.Xb(),s.Xb(),s.Xb(),s.Yb(20,"mat-accordion",19,24),s.Yb(22,"mat-expansion-panel",25),s.Yb(23,"mat-expansion-panel-header",22),s.Yb(24,"mat-panel-title"),s.Lc(25),s.lc(26,"titlecase"),s.Xb(),s.Yb(27,"mat-icon"),s.Lc(28,"keyboard_arrow_down"),s.Xb(),s.Xb(),s.Yb(29,"mat-selection-list"),s.Jc(30,z,2,1,"ng-container",23),s.Xb(),s.Xb(),s.Xb(),s.Xb(),s.Jc(31,O,8,0,"div",26),s.Jc(32,J,2,1,"div",27),s.Xb(),s.Yb(33,"div",28),s.Yb(34,"input",29,30),s.gc("change",(function(t){return s.Cc(e),s.kc().fileBrowseHandler(t)})),s.Xb(),s.Yb(36,"button",31),s.gc("click",(function(t){return s.Cc(e),s.kc().selectFile()})),s.Lc(37," Select "),s.Xb(),s.Yb(38,"button",32),s.gc("click",(function(t){return s.Cc(e),s.kc().openFilePicker()})),s.Lc(39," Upload File "),s.Xb(),s.Xb(),s.Xb()}if(2&e){const e=s.kc();s.Eb(9),s.qc("multi",!0),s.Eb(5),s.Nc(" ",s.mc(15,10,e.typeShow)," "),s.Eb(5),s.qc("ngForOf",e.typeSrc),s.Eb(1),s.qc("multi",!0),s.Eb(5),s.Nc(" ",s.mc(26,12,e.collectionShow)," "),s.Eb(5),s.qc("ngForOf",e.collectionSrc),s.Eb(1),s.qc("ngIf",!e.files.length),s.Eb(1),s.qc("ngIf",e.files.length),s.Eb(2),s.rc("multiple",e.multiple?"multiple":""),s.Eb(2),s.qc("disabled",!e.files.length||-1==e.selectedImageId)}}function T(e,t){if(1&e){const e=s.Zb();s.Yb(0,"div",57),s.Yb(1,"div",58),s.gc("drop",(function(t){return s.Cc(e),s.kc().onFileDropped(t)}))("dragleave",(function(t){return s.Cc(e),s.kc().dismissDropzone()})),s.Tb(2,"input",59,60),s.Yb(4,"div",61),s.Yb(5,"mat-icon"),s.Lc(6,"add"),s.Xb(),s.Yb(7,"h3"),s.Lc(8,"Drop files to upload"),s.Xb(),s.Xb(),s.Xb(),s.Xb()}if(2&e){const e=s.kc();s.Eb(2),s.rc("multiple",e.multiple?"multiple":"")}}function G(e,t){if(1&e){const e=s.Zb();s.Yb(0,"div",62),s.Yb(1,"div",63),s.Tb(2,"span",14),s.Yb(3,"button",64),s.gc("click",(function(t){return s.Cc(e),s.kc().closePreview()})),s.Yb(4,"mat-icon",65),s.Lc(5,"close"),s.Xb(),s.Xb(),s.Xb(),s.Yb(6,"div",66),s.Tb(7,"img",67),s.Lc(8),s.Xb(),s.Xb()}if(2&e){const e=s.kc();s.Eb(7),s.qc("src",e.previewSrc,s.Ec),s.Eb(1),s.Nc(" ",e.fileName," ")}}function j(e,t){if(1&e){const e=s.Zb();s.Yb(0,"div",68),s.Yb(1,"div",13),s.Yb(2,"h1",14),s.Lc(3,"Delete File"),s.Xb(),s.Yb(4,"button",64),s.gc("click",(function(t){return s.Cc(e),s.kc().closePreview()})),s.Yb(5,"mat-icon",16),s.Lc(6,"close"),s.Xb(),s.Xb(),s.Xb(),s.Yb(7,"div",69),s.Lc(8),s.Xb(),s.Yb(9,"div",70),s.Yb(10,"button",71),s.gc("click",(function(t){return s.Cc(e),s.kc().closePreview()})),s.Lc(11,"Cancel"),s.Xb(),s.Yb(12,"button",72),s.gc("click",(function(t){s.Cc(e);const i=s.kc();return i.doDelete(i.indexDelete)})),s.Lc(13,"Delete"),s.Xb(),s.Xb(),s.Xb()}if(2&e){const e=s.kc();s.Eb(8),s.Nc(" Are you sure you want to delete ",e.fileName," file ? ")}}let U=(()=>{class e extends l.a{constructor(e,t,i){super(),this.dialog=e,this._service=t,this.toastr=i,this.files=[],this.infoDropzone=!0,this.selectedImageId=-1,this.hasSelected=!1,this.typeSrc=["image","document","other"],this.collectionSrc=["company","profile","employee","project","project addendum"],this.type="image",this.collection="company",this.multiple=!0}ngOnInit(){this.typeShow=this.type,this.collectionShow=this.collection,this.showList(),this.subs.sink=this.formName.get(this.name).valueChanges.subscribe(e=>{e.length>0&&e[0].hasOwnProperty("media_library_id")?(this.selectedImageId=this.files.findIndex(t=>t.id===e[0].media_library_id),-1!==this.selectedImageId&&(this.hasSelected=!0,this.selectedSrc=this.files[this.selectedImageId].thumbnail)):(this.hasSelected=!1,this.selectedSrc="")})}showList(){const e=this.getCollection("view"),t=a.c.getUserInformation().companies,i={query:"",user_id:a.c.getUserInformation().id,company_id:"",collection:e};t.length&&(i.company_id=t[0].id),this.subs.sink=this._service.mediaListSearch(i).pipe(Object(o.a)(e=>{const t=e.rows;let i=[];switch(this.typeShow){case"image":i=["jpg","png","jpeg","gif"];break;case"document":i=["doc","docx","pdf","txt"]}t.forEach(e=>{this._service.mediaDownload(this.getCollection("view"),e.generate_file).subscribe(t=>{const i=new FileReader;i.onloadend=t=>{e.thumbnail=i.result},i.readAsDataURL(t)})});let n=[];return i.length?t.forEach(e=>{i.includes(e.extension.toLowerCase())&&n.push(e)}):n=t,n}),Object(o.a)(e=>{this.files=e})).subscribe()}showMainDialog(){this.dialog.open(this.mainDialog,{width:"85vw",height:"85vh",disableClose:!0})}close(){this.dialog.closeAll()}setFileType(e){this.typeShow=e,this.showList()}setCollection(e){this.collectionShow=e,this.showList()}onFileDropped(e){this.prepareFilesList(e.dataTransfer.files),this.dismissDropzone()}openFilePicker(){document.getElementById("fileInput").click()}fileBrowseHandler(e){this.prepareFilesList(e.target.files),this.dismissDropzone()}prepareFilesList(e){for(const t of e){const e=t;e.percentDone=0;const i=this.files.push(e)-1;this.doUpload(i)}}showDropzone(){this.dialog.open(this.dropzone,{width:"85vw",height:"85vh",panelClass:"nopadding"})}dismissDropzone(){const e=this.dialog.openDialogs;e.length<=1||this.dialog.getDialogById(e[1].id).close()}imageClicked(e){this.selectedImageId=this.selectedImageId===e?-1:e}truncFileName(e){return e.length>20?e.substr(0,10)+"....."+e.substr(-5):e}previewImage(e,t){e.preventDefault();const i=this.files[t];this.fileName=i.original_file,this.previewSrc=i.thumbnail,this.dialog.open(this.preview,{width:"100vw",height:"100vh",panelClass:"nobackground",disableClose:!0})}closePreview(){this.dialog.getDialogById(this.dialog.openDialogs[1].id).close()}deleteImage(e,t){e.preventDefault(),this.fileName=this.files[t].original_file,this.indexDelete=t,this.dialog.open(this.confirmDelete,{disableClose:!0})}doDelete(e){this.subs.sink=this._service.mediaDelete(this.files[e].id).pipe(Object(c.a)(t=>{this.closePreview(),this.toastr.success(t.message),this.files.splice(e,1)},e=>{this.closePreview(),this.toastr.error(e.message,"Something went wrong.... Try again later")})).subscribe()}getCollection(e){let t,i;switch("view"===e?t=this.collectionShow:"upload"===e&&(t=this.collection),t){case"company":i="COMPANY";break;case"profile":i="PROFILE";break;case"employee":i="EMPLOYEE";break;case"project":i="PROJECT";break;case"project addendum":i="PROJECT_ADDENDUM"}return i}doUpload(e){const t=this.getCollection("upload"),i=new FormData;i.append("user_id",a.c.getUserInformation().id),i.append("collection",t),i.append("file",this.files[e]),this._service.mediaUpload(i).subscribe(t=>{if(t.type===n.d.UploadProgress){const i=Math.round(100*t.loaded/t.total);this.files[e].percentDone=i}else t instanceof n.g&&(this.files[e]=t.body.data,this.files[e].percentDone=100,this._service.mediaDownload(this.getCollection("view"),this.files[e].generate_file).subscribe(t=>{const i=new FileReader;i.onloadend=t=>{this.files[e].thumbnail=i.result},i.readAsDataURL(t)}))})}selectFile(){this.hasSelected=!0,this.fileName=this.files[this.selectedImageId].generate_file,this._service.mediaDownload(this.getCollection("view"),this.fileName).subscribe(e=>{const t=new FileReader;t.onloadend=e=>{this.selectedSrc=t.result},t.readAsDataURL(e)});const e=[{id:this.files[this.selectedImageId].id,media_library_id:this.files[this.selectedImageId].id,pivot:{attribute:"featured"}}];this.formName.get(this.name).setValue(e),console.log(this.formName.get(this.name).value),this.close()}}return e.\u0275fac=function(t){return new(t||e)(s.Sb(r.c),s.Sb(d.a),s.Sb(b.b))},e.\u0275cmp=s.Mb({type:e,selectors:[["app-upload-image"]],viewQuery:function(e,t){var i;1&e&&(s.Qc(k,!0),s.Qc(X,!0),s.Qc(Y,!0),s.Qc(C,!0)),2&e&&(s.yc(i=s.hc())&&(t.mainDialog=i.first),s.yc(i=s.hc())&&(t.dropzone=i.first),s.yc(i=s.hc())&&(t.preview=i.first),s.yc(i=s.hc())&&(t.confirmDelete=i.first))},inputs:{formName:"formName",label:"label",name:"name",type:"type",collection:"collection",multiple:"multiple"},features:[s.Bb],decls:16,vars:5,consts:[["fxLayout","column","fxLayoutGap","10px",2,"margin-top","10px"],[2,"color","#808080"],["fxLayout","column","fxLayoutAlign","center center","fxLayoutGap","10px",2,"cursor","pointer","border","1px dashed #808080","padding","10px","color","#808080",3,"click"],["fxLayoutAlign","center center","fxLayout","column","fxLayoutGap","10px",4,"ngIf","ngIfElse"],["showPreview",""],["mainDialog",""],["dropzone",""],["preview",""],["confirmDelete",""],["fxLayoutAlign","center center","fxLayout","column","fxLayoutGap","10px"],[2,"font-size","32px"],["width","75%","height","75%",3,"src"],["fxLayout","column",1,"container"],["mat-dialog-title","","fxLayout","row","fxLayoutAlign","space-between"],["fxLayoutAlign","start"],["mat-icon-button","","type","button",1,"btn-close",3,"click"],["aria-hidden","false","aria-label","close"],["mat-dialog-content","","fxLayout","column",2,"min-height","67vh"],["fxLayout","row","fxLayoutGap","10px"],[3,"multi"],["fileTypePanel","matAccordion"],["hideToggle","true",1,"mat-elevation-z0",2,"margin-top","1px","position","absolute","z-index","999"],["collapsedHeight","30px","expandedHeight","30px"],[4,"ngFor","ngForOf"],["collectionPanel","matAccordion"],["hideToggle","true",1,"mat-elevation-z0",2,"margin-left","110px","margin-top","1px","position","absolute","z-index","999"],["fxLayout","column","fxLayoutAlign","center center","fxLayoutGap","20px","style","color: #808080; font-size: 18px; margin: auto; position: relative;",3,"dragover",4,"ngIf"],["fxLayout","row wrap","fxLayout.xs","column wrap","fxLayoutGap","10px","class","file-list",4,"ngIf"],["mat-dialog-actions","","fxLayout","row","fxLayoutAlign","end","fxLayoutGap","10px"],["type","file","id","fileInput",2,"display","none",3,"multiple","change"],["fileInput",""],["mat-raised-button","","color","primary","type","button",3,"disabled","click"],["mat-stroked-button","","color","primary","type","button",3,"click"],[4,"ngIf"],[3,"click"],["fxLayout","column","fxLayoutAlign","center center","fxLayoutGap","20px",2,"color","#808080","font-size","18px","margin","auto","position","relative",3,"dragover"],[2,"font-size","72px","width","72px"],["fxLayout","row wrap","fxLayout.xs","column wrap","fxLayoutGap","10px",1,"file-list"],["class","mat-elevation-z0 image-list","fxFlex","15","style","color: #808080;",3,"click",4,"ngFor","ngForOf"],["fxFlex","15",1,"mat-elevation-z0","image-list",2,"color","#808080",3,"click"],["fxLayout","column","fxLayoutAlign","center center",2,"cursor","pointer",3,"ngClass"],["class","container-img",4,"ngIf","ngIfElse"],["noThumb",""],[1,"container-img"],[3,"src"],[1,"selected-overlay"],["class","action-overlay","fxLayout","column","fxLayoutAlign","center center",4,"ngIf"],["fxLayout","column","fxLayoutAlign","center center",1,"action-overlay"],["fxLayout","row"],["mat-icon-button","","aria-label","preview",1,"action-preview",2,"width","22px"],[2,"font-size","20px","width","20px",3,"click"],["mat-icon-button","","aria-label","delete",1,"action-delete",2,"width","22px"],[2,"font-size","12px","text-align","center","max-width","80px","word-wrap","break-word"],[2,"font-size","128px","width","128px"],["class","loading-overlay","fxLayoutAlign","center center","fxLayout","column","style","padding: 1em;",4,"ngIf"],["fxLayoutAlign","center center","fxLayout","column",1,"loading-overlay",2,"padding","1em"],["mode","determinate",3,"value"],["fxLayout","column","fxLayoutAlign","center center","fxLayoutGap","10px",1,"container",2,"min-height","85vh","background-color","black","border","2px solid #5ba5d3"],["fxLayout","column","fxLayoutAlign","center center","fxLayoutGap","20px",2,"color","#808080","font-size","18px","position","relative","width","100%","height","100%",3,"drop","dragleave"],["type","file","id","fileDropRef",3,"multiple"],["fileDropRef",""],["fxLayout","column","fxLayoutAlign","center center","fxLayoutGap","10px",1,"info",2,"margin","auto","color","#ffffff"],["fxLayout","column","fxLayoutGap","25px",2,"color","#ffffff"],["fxLayoutAlign","space-between"],["mat-icon-button","","fxLayoutAlign","end",1,"btn-close",3,"click"],["aria-hidden","false","aria-label","close",2,"font-size","32px","width","32px"],["fxLayoutAlign","center center","fxLayout","column","fxLayoutGap","20px"],[1,"responsive",3,"src"],["fxLayout","column","fxLayoutGap","20px",1,"container"],["mat-dialog-content",""],["mat-dialog-actions","","fxLayout","row","fxLayoutGap","10px","fxLayoutAlign","end"],["mat-stroked-button","","color","primary","cdkFocusInitial","",3,"click"],["mat-raised-button","","color","primary","cdkFocusInitial","",3,"click"]],template:function(e,t){if(1&e&&(s.Yb(0,"div",0),s.Yb(1,"mat-label",1),s.Lc(2),s.lc(3,"titlecase"),s.Xb(),s.Yb(4,"div",2),s.gc("click",(function(e){return t.showMainDialog()})),s.Jc(5,I,7,0,"div",3),s.Jc(6,_,2,1,"ng-template",null,4,s.Kc),s.Xb(),s.Xb(),s.Jc(8,q,40,14,"ng-template",null,5,s.Kc),s.Jc(10,T,9,1,"ng-template",null,6,s.Kc),s.Jc(12,G,9,2,"ng-template",null,7,s.Kc),s.Jc(14,j,14,1,"ng-template",null,8,s.Kc)),2&e){const e=s.zc(7);s.Eb(2),s.Mc(s.mc(3,3,t.label)),s.Eb(3),s.qc("ngIf",!t.hasSelected)("ngIfElse",e)}},directives:[p.d,p.e,u.e,p.c,f.k,m.a,g.a,h.a,h.c,h.d,h.e,x.c,f.j,y.a,x.b,v.a,p.b,v.c,f.i,w.a,L.a],pipes:[f.s],styles:[".mat-raised-button[_ngcontent-%COMP%]{background-color:#5ba5d3;color:#fff}.mat-stroked-button[_ngcontent-%COMP%]{border-color:#5ba5d3;color:#5ba5d3}.btn-close[_ngcontent-%COMP%]{float:right;padding:0;margin:0;min-width:34px}  .mat-pseudo-checkbox{display:none!important}  .mat-expansion-panel{border:2px solid #0d486c;padding:0;margin:0;color:#0d486c;z-index:999}  .mat-expansion-panel-body,   .mat-expansion-panel-header{padding:0 10px}  .mat-list-item-content{padding:0!important;margin-bottom:0!important;font-size:14px}  .mat-list-item-content:hover{background-color:#fff}  .mat-expansion-panel-header-title{margin-top:2px;margin-right:0;font-size:14px}mat-panel-title[_ngcontent-%COMP%]{color:#0d486c;font-weight:700}.mat-list-option[_ngcontent-%COMP%], mat-selection-list[_ngcontent-%COMP%]{padding:0;margin:0}.mat-list-option[_ngcontent-%COMP%]{color:#0d486c;font-weight:700;height:30px}input[_ngcontent-%COMP%]{opacity:0;position:absolute;z-index:2;width:100%;height:100%;top:0;left:0;bottom:0;right:0}.file-list[_ngcontent-%COMP%]{margin-top:7vh;height:57vh;max-height:57vh;overflow:auto}.responsive[_ngcontent-%COMP%]{width:85%;height:70%}.action-preview[_ngcontent-%COMP%]:hover{color:#0875f1;border-color:#0875f1}.action-delete[_ngcontent-%COMP%]:hover{color:#da0808;border-color:#da0808}.mat-card[_ngcontent-%COMP%]{max-height:55%}.mat-card-content[_ngcontent-%COMP%]{margin-bottom:0;position:relative}.mat-card-actions[_ngcontent-%COMP%]{padding:0}.container-img[_ngcontent-%COMP%]{width:128px;height:128px}.container-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.image-list[_ngcontent-%COMP%]:hover   .action-overlay[_ngcontent-%COMP%]{opacity:.8}.image-selected[_ngcontent-%COMP%]   .selected-overlay[_ngcontent-%COMP%]{opacity:.6}.action-overlay[_ngcontent-%COMP%]{color:#fff;background-color:#000}.action-overlay[_ngcontent-%COMP%], .selected-overlay[_ngcontent-%COMP%]{-webkit-transition:.5s ease;transition:.5s ease;opacity:0;position:absolute;width:100%;height:100%;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);text-align:center}.selected-overlay[_ngcontent-%COMP%]{background-color:#030303;border:5px solid #002c46}.loading-overlay[_ngcontent-%COMP%]{background-color:#000;opacity:.8;position:absolute;top:50%;left:50%;width:100%;height:100%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);text-align:center}"]}),e})()}}]);