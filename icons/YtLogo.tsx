import React from "react";
import Logo from "./Logo";

const YoutubeLogo: React.FC<{ country: string }> = ({ country, ...rest }) => {
	return (
		<div className="flex cursor-pointer">
			<Logo />
			<sup
				style={{ color: "#aaa", top: 0, fontSize: 10 }}
				className="font-Poppins select-none">
				{country}
			</sup>
		</div>
	);
};

export default YoutubeLogo;
