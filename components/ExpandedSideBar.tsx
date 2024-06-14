"use client";
import React, { useContext } from "react";
import EachTypeMenus from "./EachTypeMenus";
import { OptionTypes, SideNavOptions } from "@/constants/constants";
import { MyContext } from "@/providers/ContextProvider";
import Copyright from "./Copyright";

export interface PropTypes {
	hideFalse?: boolean;
}

const ExpandedSideBar: React.FC<PropTypes> = ({ hideFalse }) => {
	const { sideMenu, isInitialRender } = useContext(MyContext);

	return (
		isInitialRender && (
			<>
				<div
					className={`font-Nunito absolute top-0 overflow-y-auto h-screen py-1 px-[12px] pb-14 no-scrollbar z-20 bg-[#111] transform transition-transform ease-in duration-200 
    ${
			sideMenu.isVisible
				? ""
				: `-translate-x-[240px] ${hideFalse ? "" : "lg:hidden"}`
		}
    ${sideMenu.hideSideMenu ? "lg:absolute" : "lg:relative"}
`}>
					{Object.keys(SideNavOptions).map((type) => (
						<EachTypeMenus
							key={type}
							data={
								SideNavOptions[
									type as keyof typeof SideNavOptions
								] as OptionTypes
							}
						/>
					))}
					<div className="font-Afacad text-[15px] text-[#bbb] ml-4 min-w-full leading-5">
						About Press Copyright <br />
						Contact us Creators <br />
						Advertise Developers <br /> <br />
						Terms Privacy Policy & Safety <br />
						How YouTube works <br />
						Test new features
						<Copyright />
					</div>
				</div>
			</>
		)
	);
};

export default ExpandedSideBar;
