import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  private baseURL = environment.backendBaseURL + 'api/';
  constructor(private _http: HttpClient) {}

  post(actionName,methodName, body) {
    return this._http.post<any>(
      this.baseURL + actionName+'/' + methodName,
      body
    );
  }


  // getbyId
  getItem(actionName,methodName, Id) {
    return this._http.get<any>(
      this.baseURL + actionName+'/' + methodName + '?id=' + Id
    );
  }

  // getbyId
  getItemById(actionName,methodName, Id) {
    return this._http.get<any>(
      this.baseURL + actionName +'/'+ methodName + '?id=' + Id
    );
  }
  getAddress(Id) {
    return this._http.get<any>(
      this.baseURL + 'commonAPI' +'/'+ 'pincode/' +  Id
    );
  }

  // delete
  delete(actionName,methodName, Id) {
    return this._http.delete<any>(
      this.baseURL + actionName+'/' + methodName + Id
    );
  }

  // update
  update(actionName,methodName, data) {
    return this._http.patch<any>(
      this.baseURL + actionName+'/' + methodName,
      data
    );
  }
getImages(imgname){
  return this._http.get<any>(
    this.baseURL +'commonAPI/getFiles/'+imgname
  );
}
  // files working
    // uploading file

    // postImage(file: File) {
    //   debugger;
    //   const data = {
    //     title: 'hi',
    //     altText: 'dd',
    //     description: 'test',
    //   };
    //   const formData: FormData = new FormData();
    //   formData.append('image', file);
    //   formData.append('data',JSON.stringify(data));
    //   const req = new HttpRequest(
    //     'POST',
    //     `${this.baseURL}assetApi/upload`,
    //     formData,
    //     {
    //       reportProgress: true,
    //       responseType: 'json',
    //     }
    //   );
    //   return this._http.request(req);
    // }


  // getImage() {
  //   return this._http.get<any>(this.baseURL + '/assetApi/assets');
  // }

}


