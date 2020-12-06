import React, { FC, useContext, useEffect } from "react";

import Wrapper from "../components/Wrapper";
import Card from "../components/Card";
import AppContext, { ArticleType } from "../context/App";
import Loader from "../components/Loader";
import { formatDate, getEverything } from "../utilities";

const Search: FC = () => {
	const { appState, getArticles } = useContext(AppContext);
	const { articles } = appState;

	useEffect(() => {
		getEverything().then((response) =>
			getArticles({ news: response.articles })
		);
		// eslint-disable-next-line
	}, []);

	return (
		<Wrapper>
			<div className="row">
				{articles.length === 0 ? (
					<Loader />
				) : (
					articles.map((a: ArticleType, i: number) => (
						<div
							key={i}
							className="col-12 col-sm-4 col-md-3 my-4 my-sm-3 my-md-2"
						>
							<Card
								img={
									a.urlToImage
										? a.urlToImage
										: "https://moorestown-mall.com/noimage.gif"
								}
								title={a.title}
								description={a.description}
								date={formatDate(a.publishedAt)}
								url={a.url}
							/>
						</div>
					))
				)}
			</div>
		</Wrapper>
	);
};

export default Search;
