import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FightState, publicMatrixSelector } from '../../reducers';
import { Store } from '@ngrx/store';
import { ErrorDisplayService } from '@core/services/error-display.service';
import { TwitterUser } from '@core/models/TwitterUser';
import { ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'seagull-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.scss']
})
export class Chart2Component implements OnInit, OnDestroy {
  @ViewChild('arriscaGroupBarChart', {static: true}) arriscaGroupBarChart: any;
  barChartConfig: { barChartData: any[], pieChartLabels: any[] } = {
    barChartData: [],
    pieChartLabels: []
  };
  public chartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1400,
      easing: 'easeInOutBounce',
      animateScale: true,
      animateRotate: true
    },
    scales: {xAxes: [{}], yAxes: [{}]},
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    },
    title: {
      display: false,
      text: 'Twitter Public Matrices'
    }
  };
  private user1: TwitterUser | null = null;
  private user2: TwitterUser | null = null;
  constructor(private errorDisplayService: ErrorDisplayService,
              private fightStateStore: Store<FightState>) {
  }

  ngOnDestroy(): void {
    console.log('Destroy');
  }

  ngOnInit(): void {
    this.fightStateStore.select(publicMatrixSelector).subscribe(champs => {
      const user1 = champs[0];
      const user2 = champs[1];
      const user1Matrix = user1.tweetMatrix;
      const user2Matrix = user2.tweetMatrix;
      if (user1Matrix && user2Matrix) {
        const commonItems = this.getCommonItems(
          Object.keys(user1Matrix), Object.keys(user2Matrix));
        if (commonItems.length === 0) {
          this.errorDisplayService.openSnackBar('These Champ doesnt like each other, there are no common context between them',
            'successMessageDisplay');
          // this.clearState();
          return;
        } else {
          const u1Data: any[] = [];
          const u2Data: any[] = [];

          for (let i = 0; i < commonItems.length; i++) {
            const item = commonItems[i];
            u1Data.push(user1Matrix[item]);
            u2Data.push(user2Matrix[item]);
          }
          this.barChartConfig = {
            pieChartLabels: commonItems,
            barChartData: [
              {
                data: u1Data,
                label: user1.userName
              },
              {
                data: u2Data,
                label: user2.userName
              }
            ]
          };
        }
      }

    });
  }

  getCommonItems(array1: string[], array2: string[]): string[] {
    const common: any[] = []; // Initialize array to contain common items
    array1.forEach((item1: string) => {
      array2.forEach((item2: string) => {
        if (item1 === item2) { // If item is present in both arrays
          common.push(item1); // Push to common array
        }
      });
    });
    return common; // Return the common items
  }

}
