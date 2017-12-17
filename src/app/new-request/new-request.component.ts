import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.css']
})
export class NewRequestComponent implements OnInit {

  taskIdControl = new FormControl('', [Validators.required]);
  packetIdControl = new FormControl('', [Validators.required]);
  actIdControl = new FormControl('', [Validators.required]);
  departmentControl = new FormControl('', [Validators.required]);
  dateControl = new FormControl('', [Validators.required]);

  selectedDepartment: string;

  @ViewChild('createDate') createDate;
  @ViewChild('receivedDate') receivedDate;

  taskId: string;
  packetId: string;
  actId: string;
  receivedDateStr: string;
  createDateStr: string;

  constructor() {}

  ngOnInit() {

  }
  departments = [
  	{name: 'PI TIAA', description: 'PI TIAA'},
  	{name: 'ENROLLMENT', description: 'ENROLLMENT'},
  	{name: 'ACTURIALS', description: 'ACTURIALS'},
  	{name: 'Payout Operations', description: 'Payout Operations'},
  	{name: 'Loans NR', description: 'Loans NR'},
  	{name: 'Institutional Servicing', description: 'Institutional Servicing'},
  	{name: 'Brokerage', description: 'Brokerage'}
  ];

  selectDepartmentChange($event) {
  	if ($event.value) {
  		this.selectedDepartment = $event.value;
  	}
  }

  create() {
  	if (this.receivedDate._validSelected != null) {
  		this.receivedDateStr = this.receivedDate._validSelected.getDate() + '-' + this.receivedDate._validSelected.getMonth() + '-' + this.receivedDate._validSelected.getYear();
  	}
  	if (this.createDate._validSelected != null) {
  		this.createDateStr = this.createDate._validSelected.getDate() + '-' + this.createDate._validSelected.getMonth() + '-' + this.createDate._validSelected.getYear();
  	}
  	console.log(this.taskId);
  	console.log(this.packetId);
  	console.log(this.actId);
  	console.log(this.receivedDateStr);
  	console.log(this.createDateStr);
  	console.log(this.selectedDepartment);
  }

}
