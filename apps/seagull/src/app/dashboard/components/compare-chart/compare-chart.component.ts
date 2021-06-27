import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Chart1Component } from '../chart1/chart1.component';

@Component({
  selector: 'seagull-compare-chart',
  templateUrl: './compare-chart.component.html',
  styleUrls: ['./compare-chart.component.scss']
})
export class CompareChartComponent {

  constructor(public dialog: MatDialog) { }

  openChart1() {
    const dialogRef = this.dialog.open(Chart1Component);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
