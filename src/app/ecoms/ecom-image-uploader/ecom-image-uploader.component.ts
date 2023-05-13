import { Component, OnInit } from '@angular/core';
import { NbTokenLocalStorage } from '@nebular/auth';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-ecom-image-uploader',
  templateUrl: './ecom-image-uploader.component.html',
  styleUrls: ['./ecom-image-uploader.component.scss']
})
export class EcomImageUploaderComponent implements OnInit {
  message: string;
  imagePath: any;
  url: string | ArrayBuffer;
  storage = localStorage;
  ImageList: any;
  constructor(private roast: NbToastrService) {

  }
  path: string = '';

  ngOnInit(): void {
    this.storage.setItem('imgfile', JSON.stringify([]));
  }
  upload(img: any) {
    debugger
    this.roast.info('uploading your image', 'Upload');
    const files = img.target.files;
    if (files.length === 0)
      return;
    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    this.roast.info('uploading your image', 'Uploaded');
    reader.onload = (_event) => {
      this.url = reader.result;

      var Ischeck = this.checkLocalStorage('imgfile');
      if (Ischeck) {
        var data = JSON.parse(this.storage.getItem('imgfile'));
        data.push(this.url);
      } else {

      }
    }
  }

  checkLocalStorage(key: string) {
    debugger
    var Exist = JSON.parse(this.storage.getItem(key));
    if (Exist) {
      return true;
    } else {
      return false;
    }

  }
}
