import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem(name: string, value: any) {
    const jdata = JSON.stringify(value);
    localStorage.setItem(name, jdata);
  }
  getItem(name:string){
    const data =  JSON.parse(localStorage.getItem(name));
    return data;
  }


  ClearStorage(){
    localStorage.clear();
    return true;
  }

  
}
