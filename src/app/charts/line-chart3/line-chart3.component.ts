import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-line-chart3',
  templateUrl: './line-chart3.component.html',
  styleUrls: ['./line-chart3.component.scss']
})
export class LineChart3Component implements OnInit {

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
    {data: [29, 60, 57, 69, 77, 83] , borderColor:"#4b7cf3",pointBackgroundColor:"#4b7cf3",
     backgroundColor:"#b0ddff",fill: false, 
    },
    
  ];
  
  ngOnInit(): void {
  }

}
