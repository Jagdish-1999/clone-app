import React, { useCallback, useContext, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MyContext, SideMenuTypes } from "@/providers/ContextProvider";
import { VideoDataType } from "@/constants/videoConstants";

export interface PropTypes {
	data: VideoDataType;
	isRightContent?: boolean;
	idx?: string;
}

const YtCard: React.FC<PropTypes> = ({ data, isRightContent, idx }) => {
	const router = useRouter();
	const { setSideMenu } = useContext(MyContext);

	const handlePlayPause = useCallback(() => {
		if (!idx) {
			router.push("/intro.mp4");
		} else {
			router.push("/intro.mp4-" + idx);
		}
		setSideMenu((prev: SideMenuTypes) => ({
			...prev,
			isVisible: false,
			hideSideMenu: true,
		}));
	}, [router, setSideMenu]);

	return (
		<div
			className={`relative flex w-fit h-fit shadow-2xl bg-transparent inset-0 ${
				isRightContent ? "flex-row" : "flex-col"
			}`}
			onClick={handlePlayPause}>
			<div
				className={`relative group ${
					isRightContent ? "rounded-md w-fit h-fit" : "w-full h-full"
				}`}>
				<video
					id="videoElement"
					preload="metadata"
					onClick={handlePlayPause}
					className={` rounded-md ${
						isRightContent
							? " md:w-[290px] md:h-[120px] lg:w-full lg:h-full sm:w-fit sm:h-fit"
							: "w-full h-full"
					}`}
					poster={data.poster}>
					<source src={data.videoPath} type="video/mp4" />
				</video>
			</div>
			<div
				className={`flex flex-col px-2 w-full h-full overflow-hidden  ${
					isRightContent ? "pb-2" : "items-center py-2"
				}`}>
				<div
					className={`flex w-full  text-left ${
						isRightContent ? "px-0 h-fit" : "px-2 h-full"
					}`}>
					{!isRightContent && (
						<Image
							src={data.profileLogo}
							alt="profile"
							width={20}
							height={20}
							priority
							className="rounded-full w-fit h-fit select-none"
						/>
					)}
					<div
						className={`font-Poppins text-[14px] text-[#eee] line-clamp-2 truncate whitespace-normal leading-5 ${
							isRightContent ? "px-0" : "px-2"
						}`}>
						{data.title}
					</div>
				</div>
				<div
					className={`flex flex-col w-full text-[14px] text-[#999] text-left leading-4 pt-1 ${
						isRightContent ? "indent-0" : "indent-10"
					}`}>
					<div className="font-Poppins">{data.channel}</div>
					<div className="font-Afacad">
						{data.views} • {data.streamedTime}
					</div>
				</div>
			</div>
		</div>
	);
};

export default YtCard;
