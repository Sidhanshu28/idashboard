import {Component, Input, OnInit} from '@angular/core';
import {DashboardMenuItem} from '../../../../../../store/dashboard/dashboard.state';
import {AppState} from '../../../../../../store/app.reducers';
import {Store} from '@ngrx/store';
import {DashboardMenusService} from '../../../../../../services/dashboard-menus.service';
import {HttpClient} from '@angular/common/http';

declare var $: any;

@Component({
  selector: 'app-dashboard-menu-list-desktop',
  templateUrl: './dashboard-menu-list-desktop.component.html',
  styleUrls: ['./dashboard-menu-list-desktop.component.css']
})
export class DashboardMenuListDesktopComponent implements OnInit {

  @Input() slideCss = '';
  @Input() priority: string;
  @Input() dashboardMenuItems: DashboardMenuItem[];
  public allDashboardMenus: any;
  constructor(private store: Store<AppState>, private http: HttpClient , private dashboardMenusService: DashboardMenusService) {
  }

  ngOnInit() {
    if (this.dashboardMenuItems) {
      this.getMenuAndSubMenu(this.dashboardMenuItems);
    }
  }

  getMenuAndSubMenu(dashboardItems) {
   if (dashboardItems) {
     this.http.get('api/25/dataStore/observatory/dashboardMenu.json?').subscribe((menuData) => {
       menuData['dashboardMenus'].forEach((mainMenu) => {
         mainMenu.subMenu.forEach((subMenu) => {
           dashboardItems.forEach((item) => {
             if (item.id === subMenu.id) {
               subMenu.dashItem = item;
             }
           });
         });
       });
       this.allDashboardMenus = menuData['dashboardMenus'];
     });
   }
  }

}
