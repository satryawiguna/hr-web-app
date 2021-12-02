import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { map, tap } from 'rxjs/operators';
import { Logged } from '../../../app.global';
import AutoUnsubscribe from '../../base/pages/auto-unsubscribe/auto-unsubscribe';
import { RestApiService } from '../../base/services/rest-api.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent extends AutoUnsubscribe implements OnInit {

  files: any[] = [];
  infoDropzone = true;
  selectedImageId = -1;
  hasSelected = false;

  previewSrc;
  selectedSrc;
  fileName: string;
  indexDelete: any;

  typeShow;
  collectionShow;
  typeSrc = ['image', 'document', 'other'];
  collectionSrc = ['company', 'profile', 'employee', 'project', 'project addendum'];

  @Input() formName: FormGroup;
  @Input() label: string;
  @Input() name: string;
  @Input() type = 'image';
  @Input() collection = 'company';
  @Input() multiple = true;

  constructor(
    private dialog: MatDialog,
    private _service: RestApiService,
    private toastr: ToastrService,
  ) {
    super();
  }

  @ViewChild('mainDialog') mainDialog: TemplateRef<any>;
  @ViewChild('dropzone') dropzone: TemplateRef<any>;
  @ViewChild('preview') preview: TemplateRef<any>;
  @ViewChild('confirmDelete') confirmDelete: TemplateRef<any>;

  ngOnInit(): void {
    this.typeShow = this.type;
    this.collectionShow = this.collection;
    this.showList();

    this.subs.sink = this.formName.get(this.name).valueChanges.subscribe((selected_media_id: Array<any>) => {
      if (selected_media_id.length > 0 && selected_media_id[0].hasOwnProperty('media_library_id')) {
        this.selectedImageId = this.files.findIndex(files => files.id === selected_media_id[0].media_library_id);
        if (this.selectedImageId !== -1) {
          this.hasSelected = true;
          const file = this.files[this.selectedImageId];
          this.selectedSrc = file.thumbnail;
        }
      } else {
        // ! reset gambar
        this.hasSelected = false;
        this.selectedSrc = '';
      }
    });
  }

  showList() {
    const collection_type = this.getCollection('view');
    const company: Array<any> = Logged.getUserInformation().companies;
    const body = {
      query: '',
      user_id: Logged.getUserInformation().id,
      company_id: '',
      collection: collection_type
    };
    if (company.length) {
      body.company_id = company[0].id;
    }
    this.subs.sink = this._service.mediaListSearch(body)
      .pipe(
        map((res: any) => {
          const rows = res.rows;
          let file_type = [];
          switch (this.typeShow) {
            case 'image':
              file_type = ['jpg', 'png', 'jpeg', 'gif'];
              break;
            case 'document':
              file_type = ['doc', 'docx', 'pdf', 'txt'];
              break;
            default:
              break;
          }
          /** get thumbnail */
          rows.forEach((el: any) => {
            this._service.mediaDownload(this.getCollection('view'), el.generate_file).subscribe((thumb: Blob) => {
              const myReader: FileReader = new FileReader();
              myReader.onloadend = (e) => {
                el.thumbnail = myReader.result;
              };
              myReader.readAsDataURL(thumb);
            });
          });

          let temp = [];
          if (file_type.length) {
            rows.forEach((el: any) => {
              if (file_type.includes(el.extension.toLowerCase())) {
                temp.push(el);
              }
            });
          } else {
            temp = rows;
          }

          return temp;
        }),
        map((res: Array<object>) => {
          this.files = res;
        })
      )
      .subscribe();
  }

  showMainDialog() {
    this.dialog.open(this.mainDialog, {
      width: '85vw',
      height: '85vh',
      disableClose: true
    });
  }

  close() {
    this.dialog.closeAll();
  }

  setFileType(type) {
    this.typeShow = type;
    this.showList();
  }

  setCollection(collection) {
    this.collectionShow = collection;
    this.showList();
  }

  onFileDropped($event) {
    const files = $event.dataTransfer.files;
    this.prepareFilesList(files);
    this.dismissDropzone();
  }

  openFilePicker() {
    document.getElementById('fileInput').click();
  }

  fileBrowseHandler($event) {
    const files = $event.target.files;
    this.prepareFilesList(files);
    this.dismissDropzone();
  }

  prepareFilesList(files: any) {
    for (const file of files) {
      const item = file;
      item.percentDone = 0;
      const id = this.files.push(item) - 1;
      this.doUpload(id);
    }
  }

  showDropzone() {
    this.dialog.open(this.dropzone, {
      width: '85vw',
      height: '85vh',
      panelClass: 'nopadding'
    });
  }

  dismissDropzone() {
    const all_dialog = this.dialog.openDialogs;
    if (all_dialog.length <= 1) {
      return;
    }
    const dropzone_id = all_dialog[1].id;
    const dropzone = this.dialog.getDialogById(dropzone_id);
    dropzone.close();
  }

  imageClicked(i) {
    const id = this.selectedImageId === i ? -1 : i;
    this.selectedImageId = id;
  }

  truncFileName(filename: string) {
    if (filename.length > 20) {
      const prefix = filename.substr(0, 10);
      const suffix = filename.substr(-5);
      return prefix + '.....' + suffix;
    } else {
      return filename;
    }
  }

  previewImage(event, i) {
    event.preventDefault();

    const file = this.files[i];
    this.fileName = file.original_file;
    this.previewSrc = file.thumbnail;
    this.dialog.open(this.preview, {
      width: '100vw',
      height: '100vh',
      panelClass: 'nobackground',
      disableClose: true
    });
  }

  closePreview() {
    const all_dialog = this.dialog.openDialogs;
    const preview_id = all_dialog[1].id;
    const preview = this.dialog.getDialogById(preview_id);
    preview.close();
  }

  deleteImage(event, i) {
    event.preventDefault();

    const file = this.files[i];
    this.fileName = file.original_file;
    this.indexDelete = i;

    this.dialog.open(this.confirmDelete, {
      disableClose: true
    });
  }

  doDelete(i) {
    /** delete from server */
    this.subs.sink = this._service.mediaDelete(this.files[i].id)
      .pipe(
        tap(
          (res: any) => {
            this.closePreview();
            this.toastr.success(res.message);
            this.files.splice(i, 1);
          },
          (err: any) => {
            this.closePreview();
            this.toastr.error(err.message, `Something went wrong.... Try again later`);
          }),
      )
      .subscribe();
  }

  getCollection(action) {
    let switchVar;
    if (action === 'view') {
      switchVar = this.collectionShow;
    } else if (action === 'upload') {
      switchVar = this.collection;
    }

    let collection;
    switch (switchVar) {
      case 'company':
        collection = 'COMPANY';
        break;
      case 'profile':
        collection = 'PROFILE';
        break;
      case 'employee':
        collection = 'EMPLOYEE';
        break;
      case 'project':
        collection = 'PROJECT';
        break;
      case 'project addendum':
        collection = 'PROJECT_ADDENDUM';
        break;
    }
    return collection;
  }

  doUpload(id) {
    const collection = this.getCollection('upload');
    const body: FormData = new FormData();
    body.append('user_id', Logged.getUserInformation().id);
    body.append('collection', collection);
    body.append('file', this.files[id]);
    this._service.mediaUpload(body).subscribe((event: any) => {
      if (event.type === HttpEventType.UploadProgress) {
        // This is an upload progress event. Compute and show the % done:
        const percentDone = Math.round(100 * event.loaded / event.total);
        this.files[id].percentDone = percentDone;
      } else if (event instanceof HttpResponse) {
        /** replace local file with server file when upload complete */
        this.files[id] = event.body.data;
        this.files[id].percentDone = 100;
        this._service.mediaDownload(this.getCollection('view'), this.files[id].generate_file).subscribe((thumb: Blob) => {
          const myReader: FileReader = new FileReader();
          myReader.onloadend = (e) => {
            this.files[id].thumbnail = myReader.result;
          };
          myReader.readAsDataURL(thumb);
        });
      }
    });
  }

  selectFile() {
    this.hasSelected = true;
    const file = this.files[this.selectedImageId];
    this.fileName = file.generate_file;
    this._service.mediaDownload(this.getCollection('view'), this.fileName).subscribe((res: Blob) => {
      const myReader: FileReader = new FileReader();
      myReader.onloadend = (e) => {
        this.selectedSrc = myReader.result;
      };
      myReader.readAsDataURL(res);
    });
    const media = [
      {
        // ? bug fix for triggering image after changing in picture
        id: this.files[this.selectedImageId].id,
        // ? for used in sending json data to api
        media_library_id: this.files[this.selectedImageId].id,
        pivot: {
          attribute: 'featured'
        }
      }
    ];
    this.formName.get(this.name).setValue(media);
    console.log(this.formName.get(this.name).value);
    this.close();
  }

}
