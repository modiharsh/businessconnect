import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SmallBarChartComponent } from './charts/small-bar-chart/small-bar-chart.component';
import { ChartsModule } from 'ng2-charts';
import { SmallLineChart2Component } from './charts/small-line-chart2/small-line-chart2.component';
import { SmallLineChart3Component } from './charts/small-line-chart3/small-line-chart3.component';
import { LineChart1Component } from './charts/line-chart1/line-chart1.component';
import { LineChart2Component } from './charts/line-chart2/line-chart2.component';
import { LineChart3Component } from './charts/line-chart3/line-chart3.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SmallBarChartComponent,
    SmallLineChart2Component,
    SmallLineChart3Component,
    LineChart1Component,
    LineChart2Component,
    LineChart3Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
