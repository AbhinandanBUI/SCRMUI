import { Injectable, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';

@Injectable({
  providedIn: 'root'
})
export class DialongService {

  constructor(private dialong: NbDialogService  ) { }

  OpenDialong(dialog: TemplateRef<any>) {
    this.dialong.open(dialog);
  }

}
