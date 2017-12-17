import { Component, OnInit } from '@angular/core';

import { ServerService } from '../../service/server.service';
import { Department } from '../../model/department.model';

@Component({
  selector: 'app-workitem',
  templateUrl: './workitem.component.html',
  styleUrls: ['./workitem.component.css']
})
export class WorkitemComponent implements OnInit {
	
  type: string = "myworkitem";
  departments: Department[];

  constructor(private server: ServerService) { }

  ngOnInit() {
  	this.server.getDepartmentsByUser().subscribe(
  		(data: Department[]) => {
  			this.departments = data;
  		}
  	);
  }

}
