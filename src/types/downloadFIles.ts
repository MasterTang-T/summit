export interface FilesItem {
	fileurl: string;
	wcUrl: string;
	filename: string;
	fileOrgName: string;
	filesize: string;
	detailImg: string[];
}

export interface Files {
	[index:number]: FilesItem;
}