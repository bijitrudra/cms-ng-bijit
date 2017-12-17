import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchId: string;
  showSearchRecord: Boolean = false;


  @ViewChild('fromDate') fromDate;
  @ViewChild('toDate') toDate;

  constructor() { }

  ngOnInit() {
  }

  search() {
    
    let fromDateValue = '';
    let toDateValue = '';

  	if (this.fromDate._validSelected != null) {
  		fromDateValue = this.fromDate._validSelected.getDate() + '-' + this.fromDate._validSelected.getMonth() + '-' + this.fromDate._validSelected.getYear();
  	}
  	if (this.toDate._validSelected != null) {
  		toDateValue = this.toDate._validSelected.getDate() + '-' + this.toDate._validSelected.getMonth() + '-' + this.toDate._validSelected.getYear();
  	}
  	

    if (this.searchId || fromDateValue != '' || toDateValue != '') {
      console.log(this.searchId + '' + fromDateValue + '' + toDateValue);
      this.showSearchRecord = true;
    } else {
      this.showSearchRecord = false;
    }
  }

}
