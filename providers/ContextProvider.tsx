"use client";
import React, { createContext, useEffect, useState } from "react";

import { SetStateType } from "@/components/types";
import { EXPAND_SIDE_NAV } from "@/constants/constantVars";
import { getSessionItem, setSessionItem } from "@/helpers/storageHelper";
import { usePathname } from "next/navigation";

export interface SideMenuTypes {
	isVisible: boolean;
	hideSideMenu: boolean;
}

export const MyContext = createContext<SetStateType>({});

const ContextProvider: React.FC<{ children: React.ReactElement }> = ({
	children,
}) => {
	const [isPlaying, setIsPlaying] = useState(false);
	// const [renderCount, setRenderCount] = useState(1);
	const [isInitialRender, setIsInitialRender] = useState(false);
	const [selectedFilter, setSelectedFilter] = useState<string>("all");
	const [activeLink, setActiveLink] = useState<string>(usePathname());
	const [sideMenu, setSideMenu] = useState<SideMenuTypes>(
		getSessionItem(EXPAND_SIDE_NAV) || {
			isVisible: true,
			hideSideMenu: false,
			isInitialRender: true,
		}
	);

	useEffect(() => {
		setIsInitialRender(true);
	}, []);

	// useEffect(() => {
	// 	console.log(sideMenu);
	// 	setSessionItem(EXPAND_SIDE_NAV, { ...sideMenu });
	// }, [sideMenu]);

	const contextValue = {
		activeLink,
		setActiveLink,
		selectedFilter,
		setSelectedFilter,
		sideMenu,
		setSideMenu,
		isPlaying,
		setIsPlaying,
		isInitialRender,
	} as SetStateType;

	return (
		<MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
	);
};

export default ContextProvider;
