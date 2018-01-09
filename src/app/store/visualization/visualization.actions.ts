import {Action} from '@ngrx/store';
import {Visualization} from './visualization.state';

export enum VisualizationActions {
  SET_INITIAL = '[Visualization] Set initial visualizations',
  LOAD_FAVORITE = '[Visualization] Load favorite details for visualization',
  LOAD_ANALYTICS = '[Visualization] Load analytics for visualization',
  UPDATE_VISUALIZATION_WITH_MAP_SETTINGS = '[Visualization] Update visualization with map settings',
  ADD_OR_UPDATE = '[Visualization] Add or Update visualization',
  VISUALIZATION_CHANGE = '[Visualization] Update visualization type with currently selected',
  LOCAL_FILTER_CHANGE = '[Visualization] Update visualization object when local filters changes',
  LAYOUT_CHANGE = '[Visualization] Update layout for visualization',
  SET_CURRENT = '[Visualizaton] Set current visualization Object',
  UNSET_CURRENT = '[Visualizaton] Unset current visualization Object'
}

export class SetInitialAction implements Action {
  readonly type = VisualizationActions.SET_INITIAL;

  constructor(public payload: Visualization[]) {
  }
}

export class LoadFavoriteAction implements Action {
  readonly type = VisualizationActions.LOAD_FAVORITE;

  constructor(public payload: Visualization) {
  }
}

export class LoadAnalyticsAction implements Action {
  readonly type = VisualizationActions.LOAD_ANALYTICS;

  constructor(public payload: Visualization) {
  }
}

export class UpdateVisualizationWithMapSettingsAction implements Action {
  readonly type = VisualizationActions.UPDATE_VISUALIZATION_WITH_MAP_SETTINGS;

  constructor(public payload: Visualization) {
  }
}

export class AddOrUpdateAction implements Action {
  readonly type = VisualizationActions.ADD_OR_UPDATE;

  constructor(public payload: {visualizationObject: Visualization, placementPreference: string}) {
  }
}

export class VisualizationChangeAction implements Action {
  readonly type = VisualizationActions.VISUALIZATION_CHANGE;

  constructor(public payload: { type: string, id: string }) {
  }
}

export class LocalFilterChangeAction implements Action {
  readonly type = VisualizationActions.LOCAL_FILTER_CHANGE;

  constructor(public payload: any) {
  }
}

export class LayoutChangeAction implements Action {
  readonly type = VisualizationActions.LAYOUT_CHANGE;

  constructor(public payload: any) {
  }
}

export class SetCurrentAction implements Action {
  readonly type = VisualizationActions.SET_CURRENT;

  constructor(public payload: any) {
  }
}

export class UnSetCurrentAction implements Action {
  readonly type = VisualizationActions.UNSET_CURRENT;
}

export type VisualizationAction = SetInitialAction |
  LoadFavoriteAction | LoadAnalyticsAction | UpdateVisualizationWithMapSettingsAction |
  AddOrUpdateAction | VisualizationChangeAction | LocalFilterChangeAction | LayoutChangeAction |
  SetCurrentAction | UnSetCurrentAction;