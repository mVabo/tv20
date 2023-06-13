import { useState } from 'react';
import { usePortal } from '../../contexts/portal-context';
import { Stack, Typography } from '@mui/joy';
import PortalView from '../../components/portal-view';
import ArticleProps from '../../types/article';
import ArticleModal from '../../components/article-modal';
import { Helmet } from 'react-helmet';

/**
 * A multi view for those who want to scroll past all recent news in one go.
 */
const MultiView = () => {
	const [selectedArticle, setSelectedArticle] = useState<
		ArticleProps | undefined
	>();
	const { portals } = usePortal();

	const handleArticleClick = (article: ArticleProps) => {
		setSelectedArticle(article);
	};

	return (
		<>
			<Helmet>
				<title>Siste nytt {'|'} TV 20</title>
			</Helmet>
			<Stack direction="column" spacing={2}>
				<ArticleModal
					open={Boolean(selectedArticle)}
					article={selectedArticle}
					onClose={() => setSelectedArticle(undefined)}
				/>
				<Typography level="h3">Se det siste fra alle portaler</Typography>
				{portals?.map((portal) => (
					<>
						<Typography level="h4">{portal.name}</Typography>
						<PortalView portal={portal} onClick={handleArticleClick} />
					</>
				))}
			</Stack>
		</>
	);
};

export default MultiView;
