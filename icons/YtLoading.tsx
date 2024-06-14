import React from "react";

const YtLoading = () => {
	return (
		<div>
			<svg
				xmlns="http://www.w3.org/6000/svg"
				width="60"
				height="60"
				fill="#00aa"
				viewBox="0 0 60 60">
				<rect width="100%" height="100%" fill="green" rx="50" ry="50" />
				<circle cx="30" cy="30" r={25} fill="#eee" />
				<text x="30" y="34" fontSize="12" textAnchor="middle" fill="#00ff">
					SVG
				</text>
			</svg>
		</div>
	);
};

export default YtLoading;
