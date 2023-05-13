import { Component, OnInit, Optional, TemplateRef } from '@angular/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { ToasterService } from '../../../service/Toaster/toaster.service';


@Component({
  selector: 'ngx-owner-dashboard',
  templateUrl: './owner-dashboard.component.html',
  styleUrls: ['./owner-dashboard.component.scss']
})
export class OwnerDashboardComponent implements OnInit {
  private _dialogRef: NbDialogRef<any>;

  constructor(private _toaster: ToasterService, private _dialong: NbDialogService) { }

  ngOnInit(): void {
  }
  hello(dialog: TemplateRef<any>) {

    this._dialogRef = this._dialong.open(dialog, { context: 'this is some additional data passed to dialog' });


    // this._toaster.ToastMe(ToasterPosition.TOP_LEFT, 'success', ToasterMessage.RecordInserted, 'hello')
  }

}
