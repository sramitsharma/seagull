import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {BaseChartDirective, Color, Label} from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { Store } from '@ngrx/store';
import { FightState, publicMatrixSelector } from '../../reducers';

@Component({
  selector: 'seagull-line-chart',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.scss']
})
export class Chart1Component implements OnInit{
  @ViewChild('arriscaGroupBarChart', {static: true}) arriscaGroupBarChart: any;
  public barChartConfig: {
    pieChartLabels: any,
    barChartData: any
  } = { barChartData: [], pieChartLabels: ['Tweet Count', 'Followers', 'Following']};
  public subtitle = 'Twitter Public Matrices';
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
  public chartType: ChartType = 'bar';
  public barChartLegend = true;

  ngOnInit(): void {
    this.store.select(publicMatrixSelector).subscribe((champs) => {
      const user1 = champs[0];
      const user2 = champs[1];
      this.barChartConfig.barChartData = [{
        label: user1?.userName,
        data: [user1?.publicMatrices?.tweetCount, user1?.publicMatrices?.followersCount,
          user1?.publicMatrices?.followingCount]
      }, {
        label: user2?.userName,
        data: [user2?.publicMatrices?.tweetCount, user2?.publicMatrices?.followersCount,
          user2?.publicMatrices?.followingCount],
        type: 'bar'
      }];
    });
  }

  constructor(private store: Store<FightState>) {
  }

}
