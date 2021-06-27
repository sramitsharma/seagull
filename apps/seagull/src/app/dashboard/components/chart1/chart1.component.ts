import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {BaseChartDirective, Color, Label} from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';

@Component({
  selector: 'seagull-line-chart',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.scss']
})
export class Chart1Component implements OnInit{
  @ViewChild(BaseChartDirective, {static: true}) chart3: BaseChartDirective | undefined;
  @ViewChild('lineChartCanvas', {static: true}) canvasObj: any;
  @Input() inputData: any[] = [];

  public lineChartData: ChartDataSets[] = [
    {
      label: 'Series B',
      borderColor: '#ec250d',
      borderWidth: 2,
      borderDash: [],
      borderDashOffset: 0.0,
      pointBackgroundColor: '#ec250d',
      pointBorderColor: 'rgba(255,255,255,0)',
      pointHoverBackgroundColor: '#ec250d',
      pointHoverBorderWidth: 15
    }
  ];
  public lineChartLabels: Label[] = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  public inputDatas = [
    [80 + Math.floor(Math.random() * 100),
      120 + Math.floor(Math.random() * 100), 105 + Math.floor(Math.random() * 100),
      110 + Math.floor(Math.random() * 100), 95 + Math.floor(Math.random() * 100),
      105 + Math.floor(Math.random() * 100), 90, 100, 80, 95, 70, 120]
  ];
  public lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 2000,
      easing: 'easeInOutQuint',
      animateScale: true,
      animateRotate: true
    },
    annotation: {},
    scales: {
      yAxes: [{
        gridLines: {
          drawBorder: true,
          color: 'rgba(222,222,222,0)',
          zeroLineColor: 'transparent',
        },
        ticks: {
          suggestedMin: 60,
          suggestedMax: 125,
          padding: 20,
          fontColor: '#9a9a9a'
        }
      }],

      xAxes: [{
        gridLines: {
          drawBorder: false,
          color: 'rgba(225,78,202,0.1)',
          zeroLineColor: 'transparent',
        },
        ticks: {
          padding: 20,
          fontColor: '#9a9a9a'
        }
      }]
    }
  };

  public lineChartColors: Color[] = [
    {
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = false;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [pluginAnnotations];

  ngOnInit(): void {
    const gradient = this.canvasObj.nativeElement.getContext('2d').createLinearGradient(0, 230, 0, 50);
    gradient.addColorStop(1, 'rgba(233,32,16,0.2)');
    gradient.addColorStop(0.4, 'rgba(233,32,16,0.1)');
    gradient.addColorStop(0, 'rgba(233,32,16,0.0)'); // red colors
    this.lineChartColors = [
      {
        backgroundColor: gradient
      }
    ];
  }

}
