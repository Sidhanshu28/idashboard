import { Component, HostListener, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppState } from './store/app.reducers';
import { Store } from '@ngrx/store';
import * as currentUser from './store/current-user/current-user.actions';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private titleService: Title,
    private store: Store<AppState>,
    private translate: TranslateService
  ) {
    store.dispatch(new currentUser.LoadAction());

    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }

  ngOnInit() {
    this.setTitle('Interactive Dashboard 2');
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
