import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Chart1Component } from '../chart1/chart1.component';

@Component({
  selector: 'seagull-compare-chart',
  templateUrl: './compare-chart.component.html',
  styleUrls: ['./compare-chart.component.scss']
})
export class CompareChartComponent {
  private warning = 'Admin has not configured this chart for you , please contact Admin!!';

  constructor(public dialog: MatDialog) { }

  openChart1(): void {
    const dialogRef = this.dialog.open(Chart1Component);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openChart2(): void {
    alert(this.warning);
  }

  openChart3(): void {
    alert(this.warning);
  }

  openChart4(): void {
    alert(this.warning);
  }
}
