import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DashboardMenusService {

  constructor(private http: HttpClient) { }

  // methods
  getMenus(): Observable<any> {
    return Observable.create(observer => {
      this.http.get('api/25/dataStore/observatory/dashboardMenu.json?').subscribe(data => {
        console.log(data);
      });
    });
    }
  }
