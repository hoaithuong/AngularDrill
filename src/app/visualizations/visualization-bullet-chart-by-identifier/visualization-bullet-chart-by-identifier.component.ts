import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
import { Component, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import { Visualization } from '@gooddata/react-components';
import { projectId, bulletChartVisualizationByIdentifier } from "../../../utils/fixtures";
import { CUSTOM_COLOR_PALETTE } from "../../../utils/colors";

interface VisualizationBulletChartByUriProps {
  projectId: any;
  identifier: any;
  config?: any;
}

@Component({
  selector: 'app-visualization-bullet-chart-by-identifier',
  template: '<div class="visualization-bullet-chart-by-identifier" style="height:400px" [id]="rootDomID"></div>',
})

export class VisualizationBulletChartByIdentifierComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  public rootDomID: string;

  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    invariant(node, `Node '${this.rootDomID} not found!`);
    return node;
  }

  protected getProps(): VisualizationBulletChartByUriProps {
    {
      return {
        projectId: projectId,
        identifier : bulletChartVisualizationByIdentifier,
        config: {
          colorPalette: CUSTOM_COLOR_PALETTE,
        }
      };
    }
  }

  private isMounted(): boolean {
    return !!this.rootDomID;
  }

  protected render() {
    if (this.isMounted()) {
      ReactDOM.render(React.createElement(Visualization, this.getProps()), this.getRootDomNode());
    }
  }

  ngOnInit() {
    this.rootDomID = uuid.v1();
  }

  ngOnChanges() {
    this.render();
  }

  ngAfterViewInit() {
    this.render();
  }

  ngOnDestroy() {
    // Uncomment if Angular 4 issue that ngOnDestroy is called AFTER DOM node removal is resolved
    // ReactDOM.unmountComponentAtNode(this.getRootDomNode())
  }

}

