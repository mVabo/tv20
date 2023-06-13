import VideoProps from './video';

export default interface PortalProps {
	_id: string;
	name: string;
	slug: string;
	desription: string;
	category: string;
	hidden: boolean;
	deleted: boolean;
	key: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
	archived: boolean;
	lastPostPublishedAt: string;
	cover?: CoverProps;
	background?: BackgroundProps;
	video?: VideoProps;
	adUnitPath: string;
	theme: string;
	id: string;
	newCount: number;
}

export interface CoverProps {
	id: string;
	url?: string;
	filename: string;
	path: string;
	contentType: string;
	fileSize: number;
	attribution: string;
	caption: string;
	version: number;
	focalPoint: string | null;
	createdAt: string;
	updatedAt: string;
}

export interface BackgroundProps {
	filename: string;
	path: string;
	contentType: string;
	fileSize: number;
	attribution: string;
	version: number;
	createdAt: string;
	updatedAt: string;
	id: string;
	url: string;
}

export interface PortalShortProps {
	slug: string;
	name: string;
	key: string;
	id: string;
}
