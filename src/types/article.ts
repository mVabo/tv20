import PersonProps from './person';
import { PortalShortProps } from './portal';

export default interface ArticleProps {
	id: string;
	title: string;
	content: ContentProps[];
	byline: {
		firstName: string;
		lastName: string;
		email: string;
		_id: string;
	}[];
	portals: PortalShortProps[];
	category: string;
	topics: string[];
	pinned: boolean;
	important: boolean;
	publishedAt: string;
	publishedBy: PersonProps[];
	createdBy: PersonProps[];
	updatedBy: PersonProps[];
	deleted: boolean;
	createdAt: string;
	updatedAt: string;
	related: RelatedProps;
}

export interface ContentProps {
	type: ContentType;
	data: string;
	files: FileProps[];
	orderIndex: number;
	createdAt: string;
	updatedAt: string;
}

export interface FileProps {
	id: string;
	url: string;
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

export interface RelatedProps {
	push: {
		url: string;
		ownerId: number;
		topics: string;
		user: string;
	};
}

export type ContentType = 'MARKUP' | 'PICTURES';
