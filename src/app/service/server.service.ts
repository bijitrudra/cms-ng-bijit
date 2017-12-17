import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { Task } from '../model/task.model';
import { Department } from '../model/department.model';


@Injectable()
export class ServerService {

    headers: Headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:4200'});

    constructor(private http: Http) {}

    getDepartmentsByUser() {
    	return this.http.get('http://localhost:4200/'/*, {headers: this.headers}*/)
            .map(
                (response: Response) => {
                    let departments: Department[] = [
                    	new Department('TIAA OPS', 'TIAA OPS'),
                    	new Department('ENROLLMENT', 'ENROLLMENT'),
                    	new Department('ACTURIALS', 'ACTURIALS')
                    ];
                    return departments;
                }
            )
            .catch(
                (error: Response) => {
                    return Observable.throw('Something went wrong');
                }
            );
    }

    getAllDepartments() {
    	return this.http.get('http://localhost:4200/'/*, {headers: this.headers}*/)
            .map(
                (response: Response) => {
                    let departments: Department[] = [
                    	new Department('TIAA OPS', 'TIAA OPS'),
                    	new Department('ENROLLMENT', 'ENROLLMENT'),
                    	new Department('ACTURIALS', 'ACTURIALS'),
                    	new Department('PEN TIAA', 'PEN TIAA'),
                    	new Department('Payin Operations', 'Payin Operations'),
                    	new Department('Brokerage', 'Brokerage'),
                    	new Department('LOANS NR', 'LOANS NR')
                    ];
                    return departments;
                }
            )
            .catch(
                (error: Response) => {
                    return Observable.throw('Something went wrong');
                }
            );
    }

    getTaskListItem() {
         return this.http.get('http://localhost:4200/'/*, {headers: this.headers}*/)
            .map(
                (response: Response) => {
                    let tasks: Task[] = this.TASK_DATA;
                    return tasks;
                }
            )
            .catch(
                (error: Response) => {
                	console.log(error);
                    return Observable.throw('Something went wrong');
                }
            );
    }


    /********** MOCK DATA ******/

    TASK_DATA: Task[] = [	
		new Task('t120675qpwoij', 'p127hkjhjqwk', '12-Jan-2017', 'atdnuw38', '21-Jan-2017', 'TIAA OPS', 'atdnuw38', 'Active'),
		new Task('t120675asewp', 'p127qwwek', '23-Mar-2017', 'atdnu102', '21-Apr-2017', 'ENROLLMENT', 'atdnuw38', 'Active'),
		new Task('t120921jhkewp', 'p127hsjdl', '4-Apr-2017', 'atdnuw32', '4-Apr-2017', 'ACTURIALS', 'atdnuw38', 'Active'),
		new Task('t12060921hjewp', 'p127hkj09lkj', '25-July-2017', 'atdnuw35', '21-Aug-2017', 'TIAA OPS', 'atdnuw38', 'Active'),
		new Task('t120698hjkjsa', 'p12709lkjs', '11-Oct-2017', 'atdnuw38', '21-Oct-2017', 'ENROLLMENT', 'atdnuw38', 'Active'),
		new Task('t12060976hjbkas', 'p127hkj098lkj', '9-Nov-2017', 'atdnu205', '21-Nov-2017', 'TIAA OPS', '', 'Active'),
		new Task('t120675poij', 'p127hkjhjqwk', '12-Jan-2017', 'atdnuw38', '21-Jan-2017', 'ENROLLMENT', '', 'Active'),
		new Task('t120675asrtp', 'p127qwwek', '23-Mar-2017', 'atdnu102', '21-Apr-2017', 'ACTURIALS', 'atdnuw38', 'Active'),
		new Task('t1200723njkwp', 'p127hsjdl', '4-Apr-2017', 'atdnuw32', '4-Apr-2017', 'ENROLLMENT', 'atdnuw38', 'Active'),
		new Task('t12060234kwp', 'p127hkj09lkj', '25-July-2017', 'atdnuw35', '21-Aug-2017', 'TIAA OPS', '', 'Active'),
		new Task('t120698hj123a', 'p12709lkjs', '11-Oct-2017', 'atdnuw38', '21-Oct-2017', 'ACTURIALS', '', 'Active'),
		new Task('t1206023jbkas', 'p127hkj098lkj', '9-Nov-2017', 'atdnu205', '21-Nov-2017', 'ENROLLMENT', '', 'Active'),
		new Task('t120675qlklj', 'p127hkjhjqwk', '12-Jan-2017', 'atdnuw38', '21-Jan-2017', 'TIAA OPS', 'atdnuw38', 'Suspended'),
		new Task('t120675auip', 'p127qwwek', '23-Mar-2017', 'atdnu102', '21-Apr-2017', 'TIAA OPS', '', 'Active'),
		new Task('t120921jh098', 'p127hsjdl', '4-Apr-2017', 'atdnuw32', '4-Apr-2017', 'ACTURIALS', 'atdnuw38', 'Active'),
		new Task('t12060921asd', 'p127hkj09lkj', '25-July-2017', 'atdnuw35', '21-Aug-2017', 'ACTURIALS', '', 'Active'),
		new Task('t120698h123', 'p12709lkjs', '11-Oct-2017', 'atdnuw38', '21-Oct-2017', 'ACTURIALS', 'atdnuw38', 'Suspended'),
		new Task('t1206086jbkas', 'p127hkj098lkj', '9-Nov-2017', 'atdnu205', '21-Nov-2017', 'TIAA OPS', '', 'Active'),
		new Task('t120675qptry', 'p127hkjhjqwk', '12-Jan-2017', 'atdnuw38', '21-Jan-2017', 'TIAA OPS', 'atdnuw38', 'Suspended'),
		new Task('t120675090p', 'p127qwwek', '23-Mar-2017', 'atdnu102', '21-Apr-2017', 'TIAA OPS', 'atdnuw38', 'Active'),
		new Task('t120921juop', 'p127hsjdl', '4-Apr-2017', 'atdnuw32', '4-Apr-2017', 'ENROLLMENT', 'atdnuw38', 'Active'),
		new Task('t1206092110298', 'p127hkj09lkj', '25-July-2017', 'atdnuw35', '21-Aug-2017', 'ACTURIALS', 'atdnuw38', 'Suspended'),
		new Task('t120698hjkjsa', 'p12709lkjs', '11-Oct-2017', 'atdnuw38', '21-Oct-2017', 'ENROLLMENT', '', 'Suspended'),
		new Task('t12060976wsdn', 'p127hkj098lkj', '9-Nov-2017', 'atdnu205', '21-Nov-2017', 'ENROLLMENT', 'atdnuw38', 'Active'),
		new Task('t120675qpwoij', 'p127hkjhjqwk', '12-Jan-2017', 'atdnuw38', '21-Jan-2017', 'TIAA OPS', 'atdnuw38', 'Active'),
		new Task('t120675asewp', 'p127qwwek', '23-Mar-2017', 'atdnu102', '21-Apr-2017', 'ENROLLMENT', 'atdnuw38', 'Active'),
		new Task('t120921jhkewp', 'p127hsjdl', '4-Apr-2017', 'atdnuw32', '4-Apr-2017', 'ACTURIALS', 'atdnuw38', 'Active'),
		new Task('t12060921hjewp', 'p127hkj09lkj', '25-July-2017', 'atdnuw35', '21-Aug-2017', 'TIAA OPS', 'atdnuw38', 'Active'),
		new Task('t120698hjkjsa', 'p12709lkjs', '11-Oct-2017', 'atdnuw38', '21-Oct-2017', 'ENROLLMENT', 'atdnuw38', 'Active'),
		new Task('t12060976hjbkas', 'p127hkj098lkj', '9-Nov-2017', 'atdnu205', '21-Nov-2017', 'TIAA OPS', '', 'Active'),
		new Task('t120675poij', 'p127hkjhjqwk', '12-Jan-2017', 'atdnuw38', '21-Jan-2017', 'ENROLLMENT', '', 'Active'),
		new Task('t120675asrtp', 'p127qwwek', '23-Mar-2017', 'atdnu102', '21-Apr-2017', 'ACTURIALS', 'atdnuw38', 'Active'),
		new Task('t1200723njkwp', 'p127hsjdl', '4-Apr-2017', 'atdnuw32', '4-Apr-2017', 'ENROLLMENT', 'atdnuw38', 'Active'),
		new Task('t12060234kwp', 'p127hkj09lkj', '25-July-2017', 'atdnuw35', '21-Aug-2017', 'TIAA OPS', '', 'Active'),
		new Task('t120698hj123a', 'p12709lkjs', '11-Oct-2017', 'atdnuw38', '21-Oct-2017', 'ACTURIALS', '', 'Active'),
		new Task('t1206023jbkas', 'p127hkj098lkj', '9-Nov-2017', 'atdnu205', '21-Nov-2017', 'ENROLLMENT', '', 'Active'),
		new Task('t120675qlklj', 'p127hkjhjqwk', '12-Jan-2017', 'atdnuw38', '21-Jan-2017', 'TIAA OPS', 'atdnuw38', 'Suspended'),
		new Task('t120675auip', 'p127qwwek', '23-Mar-2017', 'atdnu102', '21-Apr-2017', 'TIAA OPS', '', 'Active'),
		new Task('t120921jh098', 'p127hsjdl', '4-Apr-2017', 'atdnuw32', '4-Apr-2017', 'ACTURIALS', 'atdnuw38', 'Active'),
		new Task('t12060921asd', 'p127hkj09lkj', '25-July-2017', 'atdnuw35', '21-Aug-2017', 'ACTURIALS', '', 'Active'),
		new Task('t120698h123', 'p12709lkjs', '11-Oct-2017', 'atdnuw38', '21-Oct-2017', 'ACTURIALS', 'atdnuw38', 'Suspended'),
		new Task('t1206086jbkas', 'p127hkj098lkj', '9-Nov-2017', 'atdnu205', '21-Nov-2017', 'TIAA OPS', '', 'Active'),
		new Task('t120675qptry', 'p127hkjhjqwk', '12-Jan-2017', 'atdnuw38', '21-Jan-2017', 'TIAA OPS', 'atdnuw38', 'Suspended'),
		new Task('t120675090p', 'p127qwwek', '23-Mar-2017', 'atdnu102', '21-Apr-2017', 'TIAA OPS', 'atdnuw38', 'Active'),
		new Task('t120921juop', 'p127hsjdl', '4-Apr-2017', 'atdnuw32', '4-Apr-2017', 'ENROLLMENT', 'atdnuw38', 'Active'),
		new Task('t1206092110298', 'p127hkj09lkj', '25-July-2017', 'atdnuw35', '21-Aug-2017', 'ACTURIALS', 'atdnuw38', 'Suspended'),
		new Task('t120698hjkjsa', 'p12709lkjs', '11-Oct-2017', 'atdnuw38', '21-Oct-2017', 'ENROLLMENT', '', 'Suspended'),
		new Task('t12060976wsdn', 'p127hkj098lkj', '9-Nov-2017', 'atdnu205', '21-Nov-2017', 'ENROLLMENT', 'atdnuw38', 'Active')
	];

 }

            

