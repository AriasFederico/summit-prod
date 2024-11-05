import "./Search.scss";
export const Search = ({ value, change, click, placeholder }) => {
	return (
		<div className="Search">
			{/* svg */}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				viewBox="0 0 24 24"
				className="Search-svg"
			>
				<g className="search-outline">
					<g
						fill="currentColor"
						fillRule="evenodd"
						className="Vector"
						clipRule="evenodd"
					>
						<path d="M11 17a6 6 0 1 0 0-12a6 6 0 0 0 0 12m0 2a8 8 0 1 0 0-16a8 8 0 0 0 0 16" />
						<path d="M15.32 15.29a1 1 0 0 1 1.414.005l3.975 4a1 1 0 0 1-1.418 1.41l-3.975-4a1 1 0 0 1 .004-1.414Z" />
					</g>
				</g>
			</svg>
			<input
				className="Search-input"
				type="text"
				value={value}
				onChange={change}
				onClick={click}
				placeholder={placeholder}
			/>
		</div>
	);
};
