// This hook was taken from Medium's blog
// Here it is link https://medium.com/better-programming/how-to-use-media-queries-programmatically-in-react-4d6562c3bc97
import React, {
	FC,
	useState,
	useEffect,
	createContext,
	useContext,
	ReactNode,
	ReactElement
} from "react";

interface helperType {
	[key: string]: any;
}

interface rType {
	sm?: string;
	md?: string;
	lg?: string;
}

const defaultValue = {};

const BreakpointContext = createContext(defaultValue);

interface PropsComponent {
	queries: { [key: string]: string };
	children: NonNullable<ReactNode | ReactElement>;
}

const BreakpointProvider: FC<PropsComponent> = ({ children, queries }) => {
	const [queryMatch, setQueryMatch] = useState({});

	useEffect(() => {
		const mediaQueryLists: helperType = {};
		const keys = Object.keys(queries);
		let isAttached = false;

		const handleQueryListener = () => {
			const updatedMatches = keys.reduce((acc: helperType, media) => {
				acc[media] = !!(
					mediaQueryLists[media] && mediaQueryLists[media].matches
				);
				return acc;
			}, {});
			setQueryMatch(updatedMatches);
		};

		if (window && window.matchMedia) {
			const matches: helperType = {};
			keys.forEach((media) => {
				if (typeof queries[media] === "string") {
					mediaQueryLists[media] = window.matchMedia(queries[media]);
					matches[media] = mediaQueryLists[media].matches;
				} else {
					matches[media] = false;
				}
			});
			setQueryMatch(matches);
			isAttached = true;
			keys.forEach((media) => {
				if (typeof queries[media] === "string") {
					mediaQueryLists[media].addListener(handleQueryListener);
				}
			});
		}

		return () => {
			if (isAttached) {
				keys.forEach((media) => {
					if (typeof queries[media] === "string") {
						mediaQueryLists[media].removeListener(
							handleQueryListener
						);
					}
				});
			}
		};
	}, [queries]);

	return (
		<BreakpointContext.Provider value={queryMatch}>
			{children}
		</BreakpointContext.Provider>
	);
};

const useBreakpoint = (): rType => {
	const context = useContext(BreakpointContext);
	if (context === defaultValue) {
		throw new Error("useBreakpoint must be used within BreakpointProvider");
	}
	return context;
};

const formatDate = (d: string): string => {
	const date = new Date(d);
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const dt = date.getDate();

	const nmonth = month < 10 ? "0" + month : "" + month;
	const ndt = dt < 10 ? "0" + dt : "" + dt;

	return year + "-" + nmonth + "-" + ndt;
};

const cnvToParams = (params: { [key: string]: any }): string => {
	return params
		? Object.entries(params)
				.map(([k, v]) => `${k}=${v}`)
				.join("&")
		: "";
};

const getEverything = async () => {
	const response = await fetch(
		`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWSAPI_KEY}`
	);

	const res = response.json();

	return res;
};

export {
	useBreakpoint,
	BreakpointProvider,
	formatDate,
	cnvToParams,
	getEverything
};
