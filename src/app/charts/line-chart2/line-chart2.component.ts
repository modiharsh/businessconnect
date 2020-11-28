import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-line-chart2',
  templateUrl: './line-chart2.component.html',
  styleUrls: ['./line-chart2.component.scss']
})
export class LineChart2Component implements OnInit {

  constructor() { }

  public ChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales:{
      xAxes: [{
        ticks: {display: true},
        gridLines: {
            display:true
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
  public ChartLabels = ['Jan','Feb','Mar','Apr','May','Jun'];
  public ChartType = 'line';
  public ChartLegend = false;
  public ChartData = [
    {data: [75, 50, 57, 54, 45, 68] , borderColor:"#17B53C",pointBackgroundColor:"#17B53C",
     backgroundColor:"#b0ddff",fill: false, 
    },
    
  ];

  ngOnInit(): void {
  }

}
