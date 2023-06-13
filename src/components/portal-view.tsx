import { Box, Button, Stack, Typography, useColorScheme } from '@mui/joy';
import { FC, useEffect, useState } from 'react';
import ScrollBar from 'simplebar-react';
import PortalProps from '../types/portal';
import ArticleProps from '../types/article';
import api from '../api';

interface Props {
	portal: PortalProps;
	onClick: (article: ArticleProps) => void;
}

/**
 * A horizontal view of recent articles in given portal
 */
const PortalView: FC<Props> = ({ portal, onClick }) => {
	const [news, setNews] = useState<ArticleProps[]>([]);
	const { mode } = useColorScheme();

	useEffect(() => {
		getNews();
	}, []);

	const getNews = async () => {
		const res = await api.get(`/posts?page=1&limit=10&portalId=${portal.id}`);
		if (res.status === 200) setNews(res.data.docs);
	};

	return (
		<ScrollBar>
			<Stack direction="row" gap={1} sx={{ marginBottom: 2 }}>
				{news.map((article) => (
					<Button
						sx={{
							backgroundImage: `url(${article.content[0]?.files?.[0]?.url})`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat',
							justifyContent: 'center',
							alignItems: 'center',
							p: '5rem',
							height: '5rem',
							aspectRatio: '3/2',
							':hover': {
								opacity: 0.8,
							},
						}}
						variant="soft"
						onClick={() => onClick(article)}
					>
						<Box
							sx={{
								backgroundColor:
									mode === 'dark'
										? 'rgba(0, 0, 0, .4)'
										: 'rgba(255, 255, 255, .7)',
								height: '100%',
								width: '100%',
								display: 'flex',
								justifyContent: 'flex-start',
								alignItems: 'flex-end',
								position: 'absolute',
								borderRadius: 8,
								p: 1,
							}}
						>
							<Typography textAlign="left" level="h6">
								{article.title}
							</Typography>
						</Box>
					</Button>
				))}
			</Stack>
		</ScrollBar>
	);
};

export default PortalView;
