import React from "react";

const YtMic = ({ ...rest }) => {
	return (
		<div {...rest}>
			<svg
				width="22"
				height="22"
				version="1.1"
				viewBox="0 0 14 21"
				xmlns="http://www.w3.org/2000/svg"
				style={{
					pointerEvents: "none",
					display: "inherit",
					width: "100%",
					height: "100%",
				}}>
				<g fill="#ddd" stroke="none">
					<g transform="translate(-3.000000, -43.000000)">
						<g transform="translate(3.000000, 43.500000)">
							<path
								d="M7,12 C8.7,12 10,10.7 10,9 L10,3 C10,1.3 8.7,0 7,0 C5.3,0 4,1.3 4,3 L4,9 C4,10.7 5.3,12 7,12 L7,12 Z M12.3,9 C12.3,12 9.8,14.1 7,14.1 C4.2,14.1 1.7,12 1.7,9 L0,9 C0,12.4 2.7,15.2 6,15.7 L6,19 L8,19 L8,15.7 C11.3,15.2 14,12.4 14,9 L12.3,9 L12.3,9 Z"
								id="Shape"
							/>
						</g>
					</g>
				</g>
			</svg>
		</div>
	);
};

export default YtMic;
