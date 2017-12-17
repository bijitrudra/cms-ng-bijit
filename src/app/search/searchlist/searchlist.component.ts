import { Component, OnInit, ViewChild } from '@angular/core';

import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

import { ServerService } from '../../service/server.service';
import { Task } from '../../model/task.model';
@Component({
  selector: 'app-searchlist',
  templateUrl: './searchlist.component.html',
  styleUrls: ['./searchlist.component.css']
})
export class SearchlistComponent implements OnInit {

  displayedColumns = ['taskId', 'packetId', 'department', 'createDate', 'createBy', 'receivedDate', 'assignedTo', 'status'];
  dataSource: MatTableDataSource<Task>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private server: ServerService) {
  }

  ngOnInit() {
  	this.server.getTaskListItem().subscribe(
  		(data: Task[]) => {
			// Assign the data to the data source for the table to render
    		this.dataSource = new MatTableDataSource(data);
    		this.dataSource.paginator = this.paginator;
    		this.dataSource.sort = this.sort;
  		}
  	);
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
