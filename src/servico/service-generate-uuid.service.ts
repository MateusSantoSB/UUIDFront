import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { response } from 'express';
@Injectable({
  providedIn: 'root'
})
export class ServiceGenerateUUIDService {

  constructor(private http:HttpClient) { }


generate():Observable<Generator>{
return this.http.get<Generator>("https://uuidgenerator1-0.onrender.com/generator/generateUUID")
}

}
