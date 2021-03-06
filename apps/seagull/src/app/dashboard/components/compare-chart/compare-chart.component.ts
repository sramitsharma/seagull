import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Chart1Component } from '../chart1/chart1.component';
import { ErrorLogService } from '@core/services/error-log.service';
import { Chart2Component } from '../chart2/chart2.component';

@Component({
  selector: 'seagull-compare-chart',
  templateUrl: './compare-chart.component.html',
  styleUrls: ['./compare-chart.component.scss']
})
export class CompareChartComponent {
  private warning = 'Admin has not configured this chart for you , please contact Admin!!';

  constructor(public dialog: MatDialog, public logService: ErrorLogService) { }

  openChart1(): void {
    const dialogRef = this.dialog.open(Chart1Component, {
      panelClass: 'matContent'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openChart2(): void {
    const dialogRef = this.dialog.open(Chart2Component, {
      panelClass: 'matContent'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openChart3(): void {
    this.logService.logError({message: this.warning});
  }

  openChart4(): void {
    this.logService.logError({message: this.warning});
  }
}
