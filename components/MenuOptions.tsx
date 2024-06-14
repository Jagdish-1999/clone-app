"use client";
import React, { useContext } from "react";

import { SideNavOptionsActive } from "@/constants/constants";
import { SetStateType } from "./types";
import { MyContext } from "@/providers/ContextProvider";
import EachMenuOptions from "./EachMenuOptions";

export interface PropTypes extends SetStateType {}

const MenuOptions: React.FC<PropTypes> = () => {
	const { activeLink, sideMenu, setActiveLink, isInitialRender } =
		useContext(MyContext);

	return (
		isInitialRender && (
			<>
				<div className={`relative w-fit h-fit`}>
					{!sideMenu.hideSideMenu && (
						<div
							className={`flex flex-col gap-2 pt-2 z-30 
				${sideMenu.isVisible ? "sm:hidden lg:hidden" : "lg:flex sm:hidden"} 
				`}>
							{SideNavOptionsActive.map((eachOption) => (
								<EachMenuOptions
									key={eachOption.id}
									title={eachOption.title}
									href={eachOption.href}
									icon={eachOption.icon}
									activeLink={activeLink}
									sideMenu={sideMenu.isVisible}
									setActiveLink={setActiveLink}
									isExpanded
								/>
							))}
						</div>
					)}
				</div>
			</>
		)
	);
};

export default MenuOptions;
