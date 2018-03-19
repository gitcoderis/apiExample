import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  // result: any;

  constructor(private _http: HttpClient) {}

  getData(){
    let url = "https://rickandmortyapi.com/api/character";
    return this._http.get(url).map(result => result);
  }
}
