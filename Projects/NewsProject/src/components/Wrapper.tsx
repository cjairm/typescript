import React, {
	FC,
	ReactElement,
	ReactNode,
	useContext,
	useState
} from "react";

import Header from "./Header";
import Filter from "./Filter";
import AppContext from "../context/App";

interface PropsComponent {
	children: NonNullable<ReactNode | ReactElement>;
}

export type sortType = "publishedAt" | "relevancy" | "popularity" | "";

export interface queryType {
	q: string;
	qInTitle: string;
	sources: string;
	domains: string;
	language: "en";
	sortBy: sortType;
}

const Wrapper: FC<PropsComponent> = ({ children }) => {
	const { appState } = useContext(AppContext);
	const { filterIsOpen } = appState;

	const [qSearch, setQSearch] = useState<queryType>({
		q: "",
		qInTitle: "",
		sources: "",
		domains: "",
		language: "en",
		sortBy: ""
	});

	return (
		<>
			<Header qSearch={qSearch} setQSearch={setQSearch} />
			<div className="container">
				<div className="row">
					<div
						className={`mx-auto ${filterIsOpen ? null : "h0"}`}
						style={{ maxWidth: "30rem" }}
					>
						<Filter qSearch={qSearch} setQSearch={setQSearch} />
					</div>
				</div>
				{children}
			</div>
		</>
	);
};

export default Wrapper;
