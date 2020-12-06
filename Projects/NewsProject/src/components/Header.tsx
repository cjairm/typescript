import React, {
	ChangeEvent,
	Dispatch,
	FC,
	SetStateAction,
	useContext,
	useEffect
} from "react";
import { Link } from "react-router-dom";

import { useBreakpoint, cnvToParams, getEverything } from "../utilities";
import AppContext from "../context/App";
import { queryType } from "./Wrapper";

let timer: any;

interface ComponentProps {
	setQSearch: Dispatch<SetStateAction<queryType>>;
	qSearch: queryType;
}

const Header: FC<ComponentProps> = ({ setQSearch, qSearch }) => {
	const breakpoints = useBreakpoint();
	const { toogleFilter, updateQuery, appState, getArticles } = useContext(
		AppContext
	);
	const { query } = appState;

	useEffect(() => {
		clearTimeout(timer);

		timer = setTimeout(() => {
			setQSearch((prevState: queryType) => ({
				...prevState,
				q: query
			}));
		}, 750);

		return () => {
			clearTimeout(timer);
		};
	}, [query, setQSearch]);

	useEffect(() => {
		if (qSearch.q !== "") {
			fetch(
				`https://newsapi.org/v2/everything?${cnvToParams(
					qSearch
				)}&apiKey=${process.env.REACT_APP_NEWSAPI_KEY}`
			)
				.then((response) => response.json())
				.then((res) => {
					getArticles({ news: res.articles });
				});
		} else {
			getEverything().then((res) => {
				getArticles({ news: res.articles });
			});
		}
		// eslint-disable-next-line
	}, [qSearch]);

	return (
		<nav className="navbar navbar-light bg-light">
			{breakpoints.lg && (
				<Link className="navbar-brand p--title" to="/">
					API News
				</Link>
			)}

			<form
				className={`
              ${
					breakpoints.lg
						? "w-50 ml-auto"
						: breakpoints.md
						? "w-75 mx-auto"
						: breakpoints.sm
						? "w-100 my-3 px-5"
						: null
				} d-flex
            `}
			>
				<input
					value={query}
					className="form-control"
					type="text"
					placeholder={`Try "today" or "news"`}
					aria-label="Search"
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						updateQuery({ q: e.target.value })
					}
				/>
				{appState.isOnSearch && (
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
						onClick={toogleFilter}
					>
						Filter
					</button>
				)}
			</form>
		</nav>
	);
};

export default Header;
