import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'lodash';
import {
  INITIAL_SHARING_ENTITY,
  SharingEntity,
  SharingItem
} from './models/sharing-entity';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { SharingService } from './services/sharing.service';
import { debounceTime } from 'rxjs/operators';
import 'rxjs/add/observable/from';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-sharing-filter',
  templateUrl: './sharing-filter.component.html',
  styleUrls: ['./sharing-filter.component.css'],
  animations: [
    trigger('open', [
      state(
        'in',
        style({
          opacity: 1
        })
      ),
      transition('void => *', [
        style({
          opacity: 0
        }),
        animate(700)
      ]),
      transition('* => void', [
        animate(300),
        style({
          opacity: 0
        })
      ])
    ])
  ]
})
export class SharingFilterComponent implements OnInit {
  @Input() sharingEntity: SharingEntity;
  private _sharingList$: BehaviorSubject<SharingItem[]> = new BehaviorSubject<
    SharingItem[]
  >([]);
  sharingList$: Observable<SharingItem[]>;
  searchTerm: string;
  showSearchList: boolean;
  searchList: any[];
  constructor(private sharingService: SharingService) {
    this.sharingEntity = INITIAL_SHARING_ENTITY;
    this.sharingList$ = this._sharingList$.asObservable();
    this.searchList = [];
    this.showSearchList = false;
  }

  ngOnInit() {
    this._sharingList$.next(this.mapEntityToSharingList(this.sharingEntity));
    this.focusInput();
  }

  mapEntityToSharingList(sharingEntity) {
    return _.map(_.keys(sharingEntity), key => sharingEntity[key]);
  }

  focusInput() {
    document.getElementById('sharing_filter_input').focus();
  }

  searchUserGroup(e) {
    e.stopPropagation();
    this.searchTerm = e.target.value;
    if (this.searchTerm.trim() !== '') {
      Observable.from(this.searchTerm)
        .debounceTime(400)
        .distinctUntilChanged()
        .switchMap((term: string) =>
          this.sharingService.searchSharingDetails(term)
        )
        .subscribe((sharingResults: any) => {
          this.searchList = _.filter(
            _.flatten(
              _.map(_.keys(sharingResults), key => {
                return _.map(sharingResults[key], sharingObject => {
                  return {
                    ...sharingObject,
                    type: key === 'userGroups' ? 'userGroup' : 'user'
                  };
                });
              })
            ),
            (searchObject: any) => !this.sharingEntity[searchObject.id]
          );
          this.showSearchList = true;
        });
    } else {
      this.showSearchList = false;
    }
  }
}