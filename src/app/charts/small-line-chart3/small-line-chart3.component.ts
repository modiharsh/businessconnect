import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-small-line-chart3',
  templateUrl: './small-line-chart3.component.html',
  styleUrls: ['./small-line-chart3.component.scss']
})
export class SmallLineChart3Component implements OnInit {

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
    {data: [ 53, 59, 53, 60, 50,55] , borderColor:"#17B53C",pointBackgroundColor:"#17B53C",
     backgroundColor:"#78E591",strokeColor:"#78E591" ,pointBorderWidth:"1"
    },
    
  ];

  ngOnInit(): void {
  }

}
