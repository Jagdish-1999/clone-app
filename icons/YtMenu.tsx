import React from "react";

const YtMenu = ({ ...rest }) => {
	return (
		<div {...rest}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="24"
				viewBox="0 0 24 24"
				width="24"
				focusable="false"
				fill="#eee"
				style={{
					pointerEvents: "none",
					display: "inherit",
					width: "100%",
					height: "100%",
				}}>
				<path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path>
			</svg>
		</div>
	);
};

export default YtMenu;
