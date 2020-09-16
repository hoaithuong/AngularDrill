import { Component, OnInit } from '@angular/core';
import { TableDrillExampleComponent } from '../../components/table-drill-example/table-drill-example.component';
import  TableDrillExampleComponentSRC  from '!!raw-loader!../../components/table-drill-example/table-drill-example.component.ts';
import  TableDrillExampleComponentHTML  from '!!raw-loader!../../components/table-drill-example/table-drill-example.component.html';
import  TableDrillExampleComponentCSS  from '!!raw-loader!../../components/table-drill-example/table-drill-example.component.css';

import { PivotTableDrillExampleComponent } from '../../components/pivot-table-drill-example/pivot-table-drill-example.component';
import  PivotTableDrillExampleComponentSRC  from '!!raw-loader!../../components/pivot-table-drill-example/pivot-table-drill-example.component.ts';
import  PivotTableDrillExampleComponentHTML  from '!!raw-loader!../../components/pivot-table-drill-example/pivot-table-drill-example.component.html';
import  PivotTableDrillExampleComponentCSS  from '!!raw-loader!../../components/pivot-table-drill-example/pivot-table-drill-example.component.css';

import { BarChartDrillExampleComponent } from '../../components/barchart-drill-example/barchart-drill-example.component';
import  BarChartDrillExampleComponentSRC  from '!!raw-loader!../../components/barchart-drill-example/barchart-drill-example.component.ts';
import  BarChartDrillExampleComponentHTML  from '!!raw-loader!../../components/barchart-drill-example/barchart-drill-example.component.html';
import  BarChartDrillExampleComponentCSS  from '!!raw-loader!../../components/barchart-drill-example/barchart-drill-example.component.css';

import { DrillWithExternalDataComponent } from '../../components/drill-with-external-data/drill-with-external-data.component';
import  DrillWithExternalDataComponentSRC  from '!!raw-loader!../../components/drill-with-external-data/drill-with-external-data.component.ts';
import  DrillWithExternalDataComponentHTML  from '!!raw-loader!../../components/drill-with-external-data/drill-with-external-data.component.html';
import  DrillWithExternalDataComponentCSS  from '!!raw-loader!../../components/drill-with-external-data/drill-with-external-data.component.css';


@Component({
  selector: 'app-drilling-components',
  templateUrl: './drilling-components.component.html',
  styleUrls: ['./drilling-components.component.css']
})
export class DrillingComponentsComponent implements OnInit {
  constructor() { }

  drillingComponentArray = [
    {
      title: 'Table Drilling',
      content: [],
      for: TableDrillExampleComponent,
      ts: TableDrillExampleComponentSRC,
      html: TableDrillExampleComponentHTML,
      css: TableDrillExampleComponentCSS
    },
    {
      title: 'Pivot Table Drilling',
      content: [],
      for: PivotTableDrillExampleComponent,
      ts: PivotTableDrillExampleComponentSRC,
      html: PivotTableDrillExampleComponentHTML,
      css: PivotTableDrillExampleComponentCSS
    },
    {
      title: 'Barchart Drilling',
      content: [],
      for: BarChartDrillExampleComponent,
      ts: BarChartDrillExampleComponentSRC,
      html: BarChartDrillExampleComponentHTML,
      css: BarChartDrillExampleComponentCSS
    },
    {
      title: 'Drill With External Data',
      content: [
        'Here is how you can use visualization drilling to display 3rd party content based on the clicked item.',
        'You can display a mock user profile by clicking on an employee name. An request is created using the selected employee name and retrieves the mock employee information asynchroneously.'
      ],
      for: DrillWithExternalDataComponent,
      ts: DrillWithExternalDataComponentSRC,
      html: DrillWithExternalDataComponentHTML,
      css: DrillWithExternalDataComponentCSS
    }
  ]

  ngOnInit() {
  }
}
