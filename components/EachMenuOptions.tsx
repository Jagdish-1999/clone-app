import React from "react";
import Link from "next/link";
import { SetStateType } from "./types";
import { SideMenuTypes } from "@/providers/ContextProvider";

export interface PropTypes extends SetStateType {
	title: string;
	href: string;
	activeLink: string;
	isExpanded?: boolean;
	sideMenu: SideMenuTypes;
	icon: React.ComponentType;
}

const EachMenuOptions: React.FC<PropTypes> = ({
	title,
	href,
	icon: Icon,
	sideMenu,
	activeLink,
	isExpanded,
	setActiveLink,
}) => {
	return isExpanded ? (
		<Link
			href={href}
			onClick={() => setActiveLink(href)}
			className={`w-full h-full rounded-[10px] hover:bg-[#333] transition-bg duration-200`}>
			<div
				className={`flex flex-col items-center justify-center gap-2 px-[1px] py-3 -mt-1 w-full text-[12px] text-[#eee] `}>
				<span className={`flex items-center min-w-[25px] min-h-[25px]`}>
					{Icon && <Icon />}
				</span>
				<span className={`inline-block w-full text-center truncate`}>
					{title}
				</span>
			</div>
		</Link>
	) : (
		<Link
			href={href}
			onClick={() => setActiveLink(href)}
			className={`flex items-center py-[4px] text-[14px] text-center text-[#eee] rounded-[10px] hover:bg-[#333] transition-bg duration-200
			 ${activeLink === href && sideMenu.isVisible ? " bg-[#333]" : "bg-transparent"} 
			`}>
			<div className={`flex items-center gap-8 px-[11px] py-1 w-full`}>
				<span className={`flex items-center min-w-[25px] min-h-[25px]`}>
					{Icon && <Icon />}
				</span>
				<span className={`select-none min-w-fit pr-12`}>{title}</span>
			</div>
		</Link>
	);
};

export default EachMenuOptions;
