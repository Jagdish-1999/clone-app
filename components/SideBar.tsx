"use client";
import React, { useContext } from "react";

import MenuOptions from "./MenuOptions";
import { SetStateType } from "./types";
import { MyContext, SideMenuTypes } from "@/providers/ContextProvider";
import ExpandedSideBar from "./ExpandedSideBar";

export interface PropTypes extends SetStateType {}

const SideBar: React.FC<PropTypes> = () => {
	const { sideMenu, setSideMenu, isInitialRender } = useContext(MyContext);

	return (
		isInitialRender && (
			<div className={`relative text-left w-fit`}>
				<MenuOptions />
				{sideMenu.hideSideMenu ? (
					<div
						className={`relative transition-transform duration-200 left-0 w-full h-full z-20
				${sideMenu.isVisible ? "translate-x-0" : "-translate-x-[240px]"}
				`}>
						<ExpandedSideBar hideFalse />
					</div>
				) : (
					<ExpandedSideBar />
				)}
				<div
					className={`absolute top-0 left-0 w-screen h-screen z-10 bg-[#11111199] cursor-pointer transition-opacity duration-200
					${
						sideMenu.isVisible
							? "lg:opacity-0 lg:pointer-events-none opacity-1"
							: "opacity-0 pointer-events-none"
					} 
				`}
					onClick={() =>
						setSideMenu((prev: SideMenuTypes) => ({
							...prev,
							isVisible: false,
						}))
					}
				/>
			</div>
		)
	);
};

export default SideBar;
