import React, { createContext, useReducer, ReactNode } from "react";

const AppContext = createContext(null as any);

interface KeyHelperType {
	[key: string]: any;
}

type stateTypes =
	| "TOOGLE_FILTER"
	| "GET_ARTICLES"
	| "UPDATE_QUERY";

interface AppProviderType {
	children: NonNullable<ReactNode>;
}

export interface ArticleType {
	author: string;
	content: string;
	description: string;
	publishedAt: string;
	title: string;
	url: string;
	urlToImage: string;
}

interface AppType {
	filterIsOpen: boolean;
	query?: string;
	articles: ArticleType[];
	isOnSearch: boolean;
	isLoading: boolean;
}

interface ActionType {
	type: stateTypes;
	payload?: KeyHelperType;
}

const initialState: AppType = {
	filterIsOpen: false,
	query: "",
	articles: [],
	isOnSearch: false,
	isLoading: false
};

const toogleFilter = (state: AppType) => ({
	...state,
	filterIsOpen: !state.filterIsOpen
});

const getArticles = (state: AppType, action: ActionType) => {
	const articles = action.payload?.news ? action.payload.news : [];
	return {
		...state,
		articles: articles
	};
};

const updateQuery = (state: AppType, action: ActionType) => {
	const query = action.payload?.q;
	return {
		...state,
		query,
		isOnSearch: query.length === 0 ? false : true
	};
};

const reducer = (state: AppType, action: ActionType) => {
	switch (action.type) {
		case "TOOGLE_FILTER":
			return toogleFilter(state);
		case "UPDATE_QUERY":
			return updateQuery(state, action);
		case "GET_ARTICLES":
			return getArticles(state, action);
		default:
			throw new Error();
	}
};

export const AppProvider: React.FC<AppProviderType> = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<AppContext.Provider
			value={{
				appState: state as AppType,
				toogleFilter: () => dispatch({ type: "TOOGLE_FILTER" }),
				updateQuery: (payload: { q: string }) =>
					dispatch({ type: "UPDATE_QUERY", payload }),
				getArticles: (payload: { news: ArticleType[] }) =>
					dispatch({ type: "GET_ARTICLES", payload }),
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export default AppContext;
