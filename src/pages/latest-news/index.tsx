import {
	AspectRatio,
	Card,
	CardContent,
	CardOverflow,
	Chip,
	CircularProgress,
	Container,
	Divider,
	Stack,
	Typography,
} from '@mui/joy';
import { Fragment, useEffect, useState } from 'react';
import PortalSelector from '../../components/portal-selector';
import { usePortal } from '../../contexts/portal-context';
import api from '../../api';
import ArticleProps from '../../types/article';
import parse from 'html-react-parser';
import { format } from 'date-fns';
import { Helmet } from 'react-helmet';

/**
 * A basic page for viewing news from a single portal at a time.
 */
const LatestNews = () => {
	const [news, setNews] = useState<ArticleProps[]>([]);
	const { selectedPortal, portalId } = usePortal();

	useEffect(() => {
		getNews();
	}, [selectedPortal]);

	const getNews = async () => {
		const res = await api.get(`/posts?page=1&limit=10&portalId=${portalId}`);
		if (res.status === 200) setNews(res.data.docs);
	};

	return (
		<>
			<Helmet>
				<title>{`${
					selectedPortal ? `${selectedPortal.name} | ` : ''
				}TV 20`}</title>
			</Helmet>
			<Stack direction="column" spacing={2}>
				<PortalSelector />
				{portalId && !selectedPortal && <CircularProgress />}
				{!portalId && (
					<Typography level="h5">Vennligst velg en portal</Typography>
				)}
				{selectedPortal && (
					<Typography level="h5">{selectedPortal.name}</Typography>
				)}
				{news && (
					<Container maxWidth="sm">
						<Stack direction="column" gap={2}>
							{news.map((article) => {
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
									<Fragment key={article.id}>
										<Chip>
											🕒 {format(new Date(article.publishedAt), 'HH:mm')}
										</Chip>
										<Card variant="outlined">
											<Typography level="h5">{article.title}</Typography>
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
													return (
														<CardContent>{parse(content.data)}</CardContent>
													);
												}
											})}
											<CardOverflow
												variant="soft"
												sx={{ bgcolor: 'background.level1' }}
											>
												<Divider inset="context" />
												<CardContent orientation="horizontal">
													<Typography level="body3" textColor="text.secondary">
														🖋️ {byline}
													</Typography>
												</CardContent>
											</CardOverflow>
										</Card>
									</Fragment>
								);
							})}
						</Stack>
					</Container>
				)}
			</Stack>
		</>
	);
};

export default LatestNews;
