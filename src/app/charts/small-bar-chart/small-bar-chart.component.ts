import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-small-bar-chart',
  templateUrl: './small-bar-chart.component.html',
  styleUrls: ['./small-bar-chart.component.scss']
})
export class SmallBarChartComponent implements OnInit {

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
    {data: [40, 60, 53, 69, 77, 83] , borderColor:"#4b7cf3",pointBackgroundColor:"#4b7cf3",
     backgroundColor:"#b0ddff",strokeColor:"#b0ddff" ,pointBorderWidth:"1"
    },
    
  ];
  
  ngOnInit(): void {

  }
  }
