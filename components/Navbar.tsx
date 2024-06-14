"use client";
import React from "react";

import SearchBar from "./SearchBar";
import NavLeft from "./NavLeft";
import NavRight from "./NavRight";

const Navbar = () => {
	return (
		<div className="flex items-center justify-between gap-2 px-6 h-[56px] mt-0.5 mb-2 sm:gap-0">
			<NavLeft />
			<SearchBar />
			<NavRight />
		</div>
	);
};

export default Navbar;
