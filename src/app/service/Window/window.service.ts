import { Injectable, TemplateRef } from '@angular/core';
import { NbWindowService } from '@nebular/theme';

@Injectable({
  providedIn: 'root'
})
export class WindowService {

  constructor(private _window: NbWindowService ) { }

  openModel(dialog: TemplateRef<any>) {
    this._window.open(dialog)
  }
}
