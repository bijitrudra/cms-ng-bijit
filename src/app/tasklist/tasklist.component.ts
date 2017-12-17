import { Component, OnInit, ViewChild, Input } from '@angular/core';

import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

import { ServerService } from '../service/server.service';
import { Task } from '../model/task.model';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  @Input('type') type;
  @Input('department') department;

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

  refreshData(type: string, department: string) {
    console.log(department);
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
