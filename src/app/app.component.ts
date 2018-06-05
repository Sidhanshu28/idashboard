import {Component, HostListener, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {AppState} from './store/app.reducers';
import {Store} from '@ngrx/store';
import * as currentUser from './store/current-user/current-user.actions';
import {DashboardMenusService} from './services/dashboard-menus.service';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private titleService: Title,
    private store: Store<AppState>,
    private dashboardMenusService: DashboardMenusService
  ) {
    store.dispatch(new currentUser.LoadAction());
  }

  ngOnInit() {
    this.dashboardMenusService.getMenus().subscribe((data) => {
      console.log('menu', data);
    })
    this.setTitle('Interactive Dashboard 2');
    $(function () {
      $('.toggle-menu').click(function() {
        $('.exo-menu').toggleClass('display');

      });

    });
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}
