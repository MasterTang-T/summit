export interface FilesItem {
	fileurl: string;
	wcUrl: string;
	filename: string;
	fileOrgName: string;
	filesize: string;
	detailImg: string[];
	isIcon: boolean;
}

export interface Files {
	[index:number]: FilesItem;
}