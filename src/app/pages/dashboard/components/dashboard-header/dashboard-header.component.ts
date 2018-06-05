import { Component, OnInit } from '@angular/core';
import {AppState} from '../../../../store/app.reducers';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Dashboard} from '../../../../store/dashboard/dashboard.state';
import * as dashboardSelectors from '../../../../store/dashboard/dashboard.selectors';
import {DashboardMenusService} from '../../../../services/dashboard-menus.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeaderComponent implements OnInit {

  currentDashboard$: Observable<Dashboard>;
  public mainMenuName: string;
  constructor(private store: Store<AppState>, private http: HttpClient, private dashboardMenuService: DashboardMenusService) {
    this.currentDashboard$ = this.store.select(dashboardSelectors.getCurrentDashboard);
    // console.log(this.currentDashboard$);
  }

  ngOnInit() {
    if (this.currentDashboard$) {
      this.http.get('api/25/dataStore/observatory/dashboardMenu.json?').subscribe((menuData: any) => {
        menuData.dashboardMenus.forEach((theMenu) => {
          theMenu.subMenu.forEach((subMenu) => {
            this.currentDashboard$.subscribe((item: any) => {
              if (item) {
                if (item.id === subMenu.id) {
                  this.mainMenuName = theMenu.name;
                }
              } else {
                this.mainMenuName = '';
              }
            });
          });
        });
      });
    }
  }

}
