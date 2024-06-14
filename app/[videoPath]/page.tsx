"use client";
import React, { useContext, useEffect, useRef } from "react";
import PlayVideo from "@/components/PlayVideo";
import { MyContext, SideMenuTypes } from "@/providers/ContextProvider";
import YtFilters from "@/components/YtFilters";
import YtCard from "@/components/YtCard";
import { data, VideoDataType } from "@/constants/videoConstants";

export interface PropTypes {
	params: { videoPath: string };
}

const Page: React.FC<PropTypes> = ({ params: { videoPath } }) => {
	const initialRef = useRef(true);
	const { sideMenu, setSideMenu } = useContext(MyContext);

	useEffect(() => {
		if (initialRef.current) {
			setSideMenu((prev: SideMenuTypes) => ({ ...prev, hideSideMenu: true }));
		}
	}, [setSideMenu]);

	return (
		<div className="relative pt-4 w-screen h-screen px-6 pb-20 min-w-[370px]">
			<div className="relative w-full h-full overflow-auto flex flex-col lg:flex-row gap-4 rounded-md no-scrollbar">
				<div className="lg:w-[70%] w-full h-fit rounded-md">
					<PlayVideo videoPath={`/video/intro.mp4`} poster="/assets/bgmi.jpg" />
				</div>
				<div className="grid grid-cols-1 auto-cols-auto auto-rows-min gap-y-2 grid-flow-row lg:w-[30%] w-full h-full overflow-auto">
					<div className="col-span-2 cursor-pointer w-full">
						<YtFilters />
					</div>
					{[...data, ...data, ...data].map((eachVideo: VideoDataType) => (
						<div key={eachVideo.id} className="col-span-2 cursor-pointer">
							<YtCard data={eachVideo} isRightContent idx={eachVideo.id} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Page;
