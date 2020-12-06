import React, { FC, useContext, Dispatch, SetStateAction } from "react";

import AppContext from "../context/App";
import { queryType } from "./Wrapper";

interface ComponentProps {
	setQSearch: Dispatch<SetStateAction<queryType>>;
	qSearch: queryType;
}

const Filter: FC<ComponentProps> = ({ setQSearch, qSearch }) => {
	const { appState } = useContext(AppContext);
	const { filterIsOpen } = appState;
	const { sortBy } = qSearch;

	return (
		<div
			className={`list-group list-group-horizontal-md my-md-3 ${
				filterIsOpen ? "show" : "hide"
			}`}
		>
			<button
				onClick={() =>
					setQSearch((prevState: queryType) => ({
						...prevState,
						sortBy: ""
					}))
				}
				className={`list-group-item list-group-item-action ${
					sortBy === "" ? "active" : null
				}`}
			>
				None
			</button>
			<button
				onClick={() =>
					setQSearch((prevState: queryType) => ({
						...prevState,
						sortBy: "relevancy"
					}))
				}
				className={`list-group-item list-group-item-action ${
					sortBy === "relevancy" ? "active" : null
				}`}
			>
				Relevance
			</button>
			<button
				onClick={() =>
					setQSearch((prevState: queryType) => ({
						...prevState,
						sortBy: "publishedAt"
					}))
				}
				className={`list-group-item list-group-item-action ${
					sortBy === "publishedAt" ? "active" : null
				}`}
			>
				Date
			</button>
			<button
				onClick={() =>
					setQSearch((prevState: queryType) => ({
						...prevState,
						sortBy: "popularity"
					}))
				}
				className={`list-group-item list-group-item-action ${
					sortBy === "popularity" ? "active" : null
				}`}
			>
				Popularity
			</button>
		</div>
	);
};

export default Filter;
