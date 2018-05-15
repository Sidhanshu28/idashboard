import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {DashboardMenuItem} from '../../../../../../store/dashboard/dashboard.state';
import {AppState} from '../../../../../../store/app.reducers';
import {Store} from '@ngrx/store';
import * as dashboardSelectors from '../../../../../../store/dashboard/dashboard.selectors';

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
  public dashboardMenus: any;
  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.getMenuAndSubMenu(this.dashboardMenuItems);
  }

  getMenuAndSubMenu(dashboardItems) {
    const menu = {
                  'dashboardMenu': [
                    {
                      'name': 'HOME',
                      'priority': 'first',
                      'subMenu': [
                        {
                          'id': 'hwJNMC3LrPd',
                          'displayName': 'HOME',
                          'dashItem': []
                        }
                      ]
                    },
                    {
                      'name': 'RCHs',
                      'priority': 'first',
                      'subMenu': [
                        {
                          'id': 'FBw99OhUMUl',
                          'displayName': 'ANTENATAL CARE',
                          'dashItem': []
                        },
                        {
                          'id': 'Y2vo6aovxhj',
                          'displayName': 'LABOR&DELIVERY',
                          'dashItem': []
                        },
                        {
                          'id': 'xJZjlITWARW',
                          'displayName': 'POSTNATAL CARE',
                          'dashItem': []
                        },
                        {
                          'id': 'lCpO4gUXH2V',
                          'displayName': 'CERVICAL CANCER',
                          'dashItem': []
                        },
                        {
                          'id': 'AxHTuYXEMeu',
                          'displayName': 'GBV & VAC',
                          'dashItem': []
                        }
                      ]
                    },
                    {
                      'name': 'HIV/AIDS',
                      'priority': 'first',
                      'subMenu': [
                        {
                          'id': 'KOSUh5WCB70',
                          'displayName': 'ART',
                          'dashItem': []
                        },
                        {
                          'id': 'AuxmyMitpcQ',
                          'displayName': 'PMTCT',
                          'dashItem': []
                        },
                        {
                          'id': 'HEXCiExJJkj',
                          'displayName': 'STI',
                          'dashItem': []
                        },
                        {
                          'id': 'QYmxVWDbz6H',
                          'displayName': 'PEDIATRIC HIV',
                          'dashItem': []
                        }
                      ]
                    },
                    {
                      'name': 'EYE HEALTH',
                      'priority': 'first',
                      'subMenu': [
                        {
                          'id': 'g0xgWhZ6zOx',
                          'displayName': 'EYE HEALTH',
                          'dashItem': []
                        }
                      ]
                    },
                    {
                      'name': 'HMIS&RCHS RAW DATA',
                      'priority': 'first',
                      'subMenu': [
                        {
                          'id': 'duUJrQbZF9h',
                          'displayName': 'HMIS&RCHS RAW DATA',
                          'dashItem': []
                        },
                        {
                          'id': 'n4MDSZ0z5nZ',
                          'displayName': 'VMCC',
                          'dashItem': []
                        }
                      ]
                    },
                    {
                      'name': 'IVD',
                      'priority': 'first',
                      'subMenu': [
                        {
                          'id': 'wazXFS5KbST',
                          'displayName': 'IVD',
                          'dashItem': []
                        }
                      ]
                    },
                    {
                      'name': 'MALARIA',
                      'priority': 'first',
                      'subMenu': [
                        {
                          'id': 'gdeaYoJncPv',
                          'displayName': 'MALARIA',
                          'dashItem': []
                        }
                      ]
                    },
                    {
                      'name': 'NTD & NCD',
                      'priority': 'first',
                      'subMenu': [
                        {
                          'id': 'eutkrtdakEl',
                          'displayName': 'NTD',
                          'dashItem': []
                        },
                        {
                          'id': 'kFf8g9Vlu1d',
                          'displayName': 'NON-COMMUNICABLE DISEASE',
                          'dashItem': []
                        }
                      ]
                    },
                    {
                      'name': 'NUTRITION',
                      'priority': 'first',
                      'subMenu': [
                        {
                          'id': 'a5gxZv99ivQ',
                          'displayName': 'NUTRITION',
                          'dashItem': []
                        }
                      ]
                    },
                    {
                      'name': 'ORAL HEALTH',
                      'priority': 'first',
                      'subMenu': [
                        {
                          'id': 'zQMfce0vomU',
                          'displayName': 'ORAL HEALTH',
                          'dashItem': []
                        }
                      ]
                    },
                    {
                      'name': 'TB&LEPROSY',
                      'priority': 'first',
                      'subMenu': [
                        {
                          'id': 'BvpSbg1jxoB',
                          'displayName': 'NACP RAW DATA',
                          'dashItem': []
                        },
                        {
                          'id': 'uZxY7Qe4CJA',
                          'displayName': 'TB&LEPROSY',
                          'dashItem': []
                        }
                      ]
                    },
                    {
                      'name': 'TRACER MEDICINE',
                      'priority': 'first',
                      'subMenu': [
                        {
                          'id': 'u847xVOZEHH',
                          'displayName': 'TRACER MEDICINE',
                          'dashItem': []
                        }
                      ]
                    }
                  ]
                };

    menu.dashboardMenu.forEach((mainMenu) => {
      mainMenu.subMenu.forEach((subMenu) => {
        dashboardItems.forEach((item) => {
          if (item.id === subMenu.id) {
            subMenu.dashItem = item;
          }
        });
      });
    });
    this.dashboardMenus = menu.dashboardMenu;
  }

}
