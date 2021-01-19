import { Injectable } from '@angular/core';
import {Observable, of, throwError} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map, tap} from "rxjs/operators";
import {Collection} from "../shared/models/collection.model";

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
private itemUrl = 'api/collection';
  constructor(private http: HttpClient) { }
  getCollection(): Observable<Collection[]> {
    return this.http.get<Collection[]>(this.itemUrl)
      .pipe(
        tap(data => console.log('collection: ', JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getCollectionItem(id: number): Observable<Collection> {
    if(id === 0){
      return of(this.creteProduct());
    }
    const url = `${this.itemUrl}/${id}`;
    return this.http.get<Collection>(url)
      .pipe(
        tap(data => console.log('collection: ', JSON.stringify(data))),
        catchError(this.handleError),
      );
  }

  creteProduct(): any {
    return{
      id: 0,
      itemType: null,
      name: null,
      itemSku:null,
      price: null,
      image: null,
      itemInfo: null,
    }
}

  private handleError(error: any) {
    let errorMessage = '';
    error.error.forEach((r) => {
      errorMessage += r.errorMessage + "\n\r";
    });
    alert(error.error.message);
    // return an observable with a user-facing error message
    return throwError(error || 'server error');
  }

}
