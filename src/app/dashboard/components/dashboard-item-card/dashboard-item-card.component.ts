import {Component, OnInit, AfterViewInit, Input, ViewChild} from "@angular/core";
import {DashboardItemService} from "../../providers/dashboard-item.service";
import {ActivatedRoute} from "@angular/router";
import {DashboardItemChartComponent} from "../dashboard-item-chart/dashboard-item-chart.component";

export const DASHBOARD_SHAPES = {
  'NORMAL': ['col-md-4','col-sm-6','col-xs-12'],
  'DOUBLE_WIDTH': ['col-md-8','col-sm-6','col-xs-12'],
  'FULL_WIDTH': ['col-md-12','col-sm-12','col-xs-12']
}
@Component({
  selector: 'app-dashboard-item-card',
  templateUrl: 'dashboard-item-card.component.html',
  styleUrls: ['dashboard-item-card.component.css']
})
export class DashboardItemCardComponent implements OnInit{

  @Input() itemData: any;
  @ViewChild(DashboardItemChartComponent) chartComponent: DashboardItemChartComponent;
  public currentChartType: string;
  public isFullScreen: boolean;
  public isInterpretationShown: boolean;
  public currentVisualization: string;
  public dashboardShapeBuffer: string;
  constructor(
      private dashboardItemService: DashboardItemService,
      private route: ActivatedRoute
  ) {
    this.isFullScreen = false;
    this.isInterpretationShown = false;
  }

  ngOnInit() {
    this.currentVisualization = this.itemData.type;
    this.dashboardShapeBuffer = this.itemData.shape;
  }

  dashboardShapeClass(shape): Array<any> {
    return DASHBOARD_SHAPES[shape];
  }

  resizeDashboard(currentShape) {
    let shapes = ['NORMAL', 'DOUBLE_WIDTH', 'FULL_WIDTH'];
    let newShape = '';
    if (shapes.indexOf(currentShape) + 1 < shapes.length) {
      newShape = shapes[shapes.indexOf(currentShape) + 1]
    } else {
      newShape = shapes[0];
    }
    this.dashboardItemService.updateShape(this.itemData.id, this.route.snapshot.params['id'], newShape)
  }

  setChartType(type) {
    this.currentChartType = type;
    this.chartComponent.updateChartType(this.currentChartType)
  }

  toggleFullScreen() {
    this.isFullScreen = !this.isFullScreen;
  }

  canShowIcons(visualizationType): boolean {
    let noFooterVisualization = ['USERS', 'REPORTS','RESOURCES'];
    let canShow = true;
    noFooterVisualization.forEach(visualizationValue => {
      if(visualizationType == visualizationValue) {
        canShow = false
      }
    })
    return canShow;
  }

  isCurrentVisualization(visualizationType): boolean {
    return this.currentVisualization == visualizationType ? true : false;
  }
  changeCurrentVisualization(newVisualizationType: string): void {
    this.currentVisualization = newVisualizationType;
  }

  toggleInterpretation() {
    if(this.isInterpretationShown) {
      this.isInterpretationShown = false;
      this.itemData.shape = this.dashboardShapeBuffer;
    } else {
      this.isInterpretationShown = true;
      if(this.itemData.shape == 'NORMAL') {
        this.dashboardShapeBuffer = this.itemData.shape;
        this.itemData.shape = 'DOUBLE_WIDTH';
      }
    }
  }

}