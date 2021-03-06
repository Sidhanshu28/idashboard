import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-visualization-card-loader',
  templateUrl: './visualization-card-loader.component.html',
  styleUrls: ['./visualization-card-loader.component.css']
})
export class VisualizationCardLoaderComponent implements OnInit {
  @Input() visualizationType: string;
  tableCellCounts: any[];
  constructor() {
    this.tableCellCounts = _.range(56);
  }

  ngOnInit() {}
}
