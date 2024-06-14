"use client";
import React, { useContext } from "react";
import { SetStateType } from "./types";
import EachMenuOptions from "./EachMenuOptions";
import { MyContext } from "@/providers/ContextProvider";
import YtRightArrow from "@/icons/YtRightArrow";
import { EachOptionTypes, OptionTypes } from "@/constants/constants";

export interface PropTypes extends SetStateType {
	data: OptionTypes;
}

const EachTypeMenus: React.FC<PropTypes> = ({ data }) => {
	const { activeLink, sideMenu, setActiveLink, isInitialRender } =
		useContext(MyContext);

	return (
		isInitialRender && (
			<div className="">
				<div className="flex items-center text-[18px] text-bold text-left pl-[12px] pb-[4px]">
					{data.title}
					{data.id === "you" && <YtRightArrow className="w-[15px] h-[15px]" />}
				</div>
				{data.options.map((option: EachOptionTypes) => (
					<EachMenuOptions
						key={option.id}
						title={option.title}
						href={option.href}
						icon={option.icon}
						activeLink={activeLink}
						sideMenu={sideMenu}
						setActiveLink={setActiveLink}
					/>
				))}
				{sideMenu && <hr className="border-[#555] my-[12px] w-full" />}
			</div>
		)
	);
};

export default EachTypeMenus;
