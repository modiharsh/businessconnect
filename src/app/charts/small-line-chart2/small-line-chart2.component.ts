import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-small-line-chart2',
  templateUrl: './small-line-chart2.component.html',
  styleUrls: ['./small-line-chart2.component.scss']
})
export class SmallLineChart2Component implements OnInit {

  constructor() { }

  public ChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales:{
      xAxes: [{
        ticks: {display: false},
        gridLines: {
            display:false
        }
    }],
    yAxes: [{
        ticks: {display: false},
        gridLines: {
            display:false
        }   
    }]
    }
    
  };
  public ChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011'];
  public ChartType = 'line';
  public ChartLegend = false;
  public ChartData = [
    {data: [ 53, 69,40, 77, 60, 83] , borderColor:"#E52841",pointBackgroundColor:"#E52841",
     backgroundColor:"#E96A7B",strokeColor:"#E96A7B" ,pointBorderWidth:"1"
    },
    
  ];

  ngOnInit(): void {
  }

}
