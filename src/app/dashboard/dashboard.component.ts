import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  
}

const ELEMENT_DATA= [
  { 'id': 1 , 'name': 'Fetch Zinc Data' , 'source': 'Zinc', 'status': 'Completed', 'start': '11/28/20 21:00', 'end': '11/28/20 22:45'  },
  { 'id': 2 , 'name': 'Load Zinc Data' , 'source': 'Zinc', 'status': 'Completed', 'start': '11/28/20 22:50', 'end': '11/28/20 23:32'  },
  { 'id': 3 , 'name': 'Snapshot generation' , 'source': '-', 'status': 'In Progress', 'start': '11/28/20 23:45', 'end': ''  },
  
];
