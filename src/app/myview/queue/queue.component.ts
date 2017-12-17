import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { ServerService } from '../../service/server.service';
import { Department } from '../../model/department.model';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit {

  selectedDepartment: string;

  @ViewChild('unassigned') unassignedPanel;
  @ViewChild('suspended') suspendedPanel;

	
  departments: Department[];
  departmentControl = new FormControl('', [Validators.required]);

  showQMRecord: Boolean = false;

  constructor(private server: ServerService) { }

  ngOnInit() {
  	this.server.getAllDepartments().subscribe(
  		(data: Department[]) {
  			this.departments = data;
  		}
  	);
  }

  selectDepartmentChange($event) {
  	if ($event.value) {
  		this.selectedDepartment = $event.value;  		
  		this.showQMRecord = true;
  		if(this.unassignedPanel) {
  			this.unassignedPanel.refreshData('unassigned', $event.value);
  		}
  		if (this.suspendedPanel) {
  			this.suspendedPanel.refreshData('suspended', $event.value);
  		}

  	} else {
  		this.showQMRecord = false;
  	}
  }

}
