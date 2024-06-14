"use client";
import React, { useCallback, useContext, useEffect } from "react";
import Link from "next/link";

import YtLogo from "../icons/YtLogo";
import YtMenu from "@/icons/YtMenu";
import { SetStateType } from "./types";
import { MyContext, SideMenuTypes } from "@/providers/ContextProvider";

export interface PropTypes extends SetStateType {}

const NavLeft: React.FC<PropTypes> = () => {
	const country = "IN";
	const { sideMenu, setActiveLink, setSideMenu } = useContext(MyContext);

	const handleMenu = useCallback(() => {
		setSideMenu((prev: SideMenuTypes) => ({
			...prev,
			isVisible: !prev.isVisible,
			isInitialRender: false,
		}));
	}, [setSideMenu]);

	return (
		<div className="flex items-center min-w-fit gap-2">
			<YtMenu
				onClick={handleMenu}
				className="cursor-pointer hover:bg-[#333] hover:rounded-full transition-bg duration-200 p-2 -ml-2 mr-2"
			/>
			<Link onClick={() => setActiveLink("/")} href="/" className="flex z-20">
				<YtLogo country={country} />
			</Link>
		</div>
	);
};

export default NavLeft;
