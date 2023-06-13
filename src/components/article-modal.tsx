import { FC } from 'react';
import ArticleProps from '../types/article';
import {
	Card,
	Typography,
	CardOverflow,
	AspectRatio,
	CardContent,
	Divider,
	Modal,
	Container,
	ModalDialog,
	Chip,
	Stack,
} from '@mui/joy';
import parse from 'html-react-parser';
import { format } from 'date-fns';

interface Props {
	onClose: () => void;
	open: boolean;
	article: ArticleProps | undefined;
}

/**
 * A modal for showing an article, designed like single view articles.
 */
const ArticleModal: FC<Props> = ({ onClose, open, article }) => {
	if (!article) return null;

	let byline = '';

	article.byline.map((by, index) => {
		if (article.byline.length === 1) {
			byline = `${by.firstName} ${by.lastName}`;
			return;
		}

		if (index === 0) {
			byline += by.lastName;
			return;
		}

		if (index === article.byline.length - 1) {
			byline += ` & ${by.lastName}`;
			return;
		}

		byline += `, ${by.lastName}`;
	});

	return (
		<Modal
			open={open}
			onClose={onClose}
			sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
		>
			<Container maxWidth="sm">
				<ModalDialog sx={{ p: 0 }}>
					<Card variant="outlined" sx={{ overflowY: 'scroll' }}>
						<Stack direction="row" gap={1}>
							<Chip>🕒 {format(new Date(article.publishedAt), 'HH:mm')}</Chip>
							<Typography level="h5">{article.title}</Typography>
						</Stack>
						{article.content.map((content) => {
							if (content.type === 'PICTURES') {
								return (
									<CardOverflow>
										<AspectRatio ratio="2">
											<img src={content.files[0].url} />
										</AspectRatio>
									</CardOverflow>
								);
							}

							if (content.type === 'MARKUP') {
								return <CardContent>{parse(content.data)}</CardContent>;
							}
						})}
						<CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
							<Divider inset="context" />
							<CardContent orientation="horizontal">
								<Typography level="body3" textColor="text.secondary">
									🖋️ {byline}
								</Typography>
							</CardContent>
						</CardOverflow>
					</Card>
				</ModalDialog>
			</Container>
		</Modal>
	);
};

export default ArticleModal;
