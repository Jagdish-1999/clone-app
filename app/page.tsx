"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import YtCard from "@/components/YtCard";
import YtFilters from "@/components/YtFilters";
import { MyContext, SideMenuTypes } from "@/providers/ContextProvider";
import { VideoDataType, data } from "@/constants/videoConstants";

export default function Home() {
	const { sideMenu, setSideMenu, isInitialRender } = useContext(MyContext);

	useEffect(() => {
		if (!sideMenu.isInitialRender) {
			setSideMenu((prev: SideMenuTypes) => ({
				...prev,
				isVisible: true,
				hideSideMenu: false,
				isInitialRender: false,
			}));
		} else {
			setSideMenu((prev: SideMenuTypes) => ({
				...prev,
				isVisible: true,
				hideSideMenu: false,
			}));
		}
	}, [setSideMenu]);

	return (
		isInitialRender && (
			<div
				className={`w-full h-[92vh] text-[28px] overflow-hidden px-6 pb-16 sm:justify-center ${
					sideMenu.isVisible ? "" : ""
				}`}>
				<div className="sticky">
					<YtFilters />
				</div>
				<div
					className={`w-fit h-full rounded-md grid gap-4 gap-y-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 overflow-y-auto scroll-smooth no-scrollbar pt-5
				${sideMenu.isVisible ? "" : "xl:grid-cols-4"}
				`}>
					{data.map((eachVideo: VideoDataType) => (
						<YtCard key={eachVideo.id} data={eachVideo} />
					))}
				</div>
			</div>
		)
	);
}
