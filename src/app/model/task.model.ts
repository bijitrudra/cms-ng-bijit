export class Task {
	constructor(public taskId: string, public packetId: string,
				public createDate: string, public createBy: string, public receivedDate: string,
				public department: string, public assignedTo: string, public status: string) {}
}