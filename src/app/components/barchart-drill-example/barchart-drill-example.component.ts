import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
import { Component, Input, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import { BarChart, Model, HeaderPredicateFactory } from '@gooddata/react-components';
import '@gooddata/react-components/styles/css/main.css';
import {
  projectId,
  locationStateDisplayFormIdentifier,
  locationNameDisplayFormIdentifier,
  franchiseFeesIdentifier,
  franchiseFeesAdRoyaltyIdentifier,
  franchiseFeesInitialFranchiseFeeIdentifier,
  franchiseFeesIdentifierOngoingRoyalty,
  menuCategoryAttributeDFIdentifier,
  quarterDateIdentifier,
  monthDateIdentifier
} from '../../../utils/fixtures.js';

interface BarChartDrillExampleBucketProps {
  projectId: any;
  measures?: any[];
  viewBy?: any[];
  drillableItems?: any[];
  onFiredDrillEvent?: any;
  totals?: any[];
  filters?: any[];
  sortBy?: any[];
}
interface BarChartDrillExampleProps {
  projectId: any;
}

@Component({
  selector: 'app-pivot-drill-example',
  template: '<div class="pivot-drill-example" style="height:500px" [id]="rootDomID"></div>',
})
export class BarChartDrillExampleComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  @Input() filters: any[];
  @Input() sortBy: any[];

  measures = [
    Model.measure(franchiseFeesIdentifier)
        .format("#,##0")
        .localIdentifier("franchiseFeesIdentifier"),
    Model.measure(franchiseFeesAdRoyaltyIdentifier)
        .format("#,##0")
        .localIdentifier("franchiseFeesAdRoyaltyIdentifier"),
    Model.measure(franchiseFeesInitialFranchiseFeeIdentifier)
        .format("#,##0")
        .localIdentifier("franchiseFeesInitialFranchiseFeeIdentifier"),
    Model.measure(franchiseFeesIdentifierOngoingRoyalty)
        .format("#,##0")
        .localIdentifier("franchiseFeesIdentifierOngoingRoyalty"),
];

attributes = [
    Model.attribute(locationStateDisplayFormIdentifier).localIdentifier("state"),
    Model.attribute(locationNameDisplayFormIdentifier).localIdentifier("name"),
    Model.attribute(menuCategoryAttributeDFIdentifier).localIdentifier("menu"),
];

columns = [Model.attribute(quarterDateIdentifier), Model.attribute(monthDateIdentifier)];

totals = [
    {
        measureIdentifier: "franchiseFeesIdentifier",
        type: "sum",
        attributeIdentifier: "state",
    },
    {
        measureIdentifier: "franchiseFeesAdRoyaltyIdentifier",
        type: "sum",
        attributeIdentifier: "state",
    },
    {
        measureIdentifier: "franchiseFeesIdentifier",
        type: "max",
        attributeIdentifier: "state",
    },
    {
        measureIdentifier: "franchiseFeesIdentifier",
        type: "sum",
        attributeIdentifier: "menu",
    },
    {
        measureIdentifier: "franchiseFeesAdRoyaltyIdentifier",
        type: "sum",
        attributeIdentifier: "menu",
    },
];

drillableItems = [
    HeaderPredicateFactory.identifierMatch(menuCategoryAttributeDFIdentifier),
    HeaderPredicateFactory.identifierMatch(franchiseFeesIdentifier),
];

  xSortBy = [Model.attributeSortItem("menu", "asc")]
  onDrill = drillEvent => {
    console.log(
      "onFiredDrillEvent",
      drillEvent,
      JSON.stringify(drillEvent.drillContext.intersection, null, 2),
    );
    return true;
  };
  renderDrillValue() {
    let drillEvent;
    if (!drillEvent) {
      return null;
    }
  };

  public rootDomID: string;

  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    invariant(node, `Node '${this.rootDomID} not found!`);
    return node;
  }

  protected getProps(): BarChartDrillExampleProps | BarChartDrillExampleBucketProps {
    return {
      projectId: projectId,
      measures: this.measures,
      viewBy: this.attributes,
      // totals: this.totals,
      // filters: this.filters,
      // sortBy: this.xSortBy,
      drillableItems: this.drillableItems,
      onFiredDrillEvent: this.onDrill
    };
  }

  private isMounted(): boolean {
    return !!this.rootDomID;
  }

  protected render() {
    if (this.isMounted()) {
      ReactDOM.render(React.createElement(BarChart, this.getProps()), this.getRootDomNode());
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
    //ReactDOM.unmountComponentAtNode(this.getRootDomNode())
  }

}

