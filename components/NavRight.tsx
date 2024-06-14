import React from "react";
import Image from "next/image";

import YtCreate from "@/icons/YtCreate";
import YtNotification from "@/icons/YtNotification";
import YtSearch from "@/icons/YtSearch";
import YtMic from "@/icons/YtMic";

const NavRight = () => {
	return (
		<div className="flex items-center gap-2 min-w-fit pl-4 sm:justify-end sm:gap-0">
			<YtSearch className="items-center justify-center hover:bg-[#333] rounded-full cursor-pointer hidden sm:flex p-2" />
			<YtMic className="hover:bg-[#333]  rounded-full cursor-pointer hidden sm:flex p-2" />
			<YtCreate className="hover:bg-[#333] rounded-full cursor-pointer transition-bg duration-200 p-2" />
			<div
				className="relative cursor-pointer hover:bg-[#333] rounded-full transition-bg duration-200 select-none"
				onClick={() => console.log("object")}>
				<YtNotification className="p-2 pointer-events-none" />
				<div className="font-Nunito flex justify-center items-center min-w-[20px] h-[16px] absolute top-[5px] -right-[2px] bg-red-600 text-white text-center rounded-full text-[12px] px-1">
					{9}+
				</div>
			</div>
			<div className="flex items-center justify-center rounded-full min-w-[35px] min-h-[20px] cursor-pointer select-none pl-2">
				<Image
					src="/assets/profile_1.jpeg"
					alt="horseLogo"
					width={30}
					height={30}
					priority
					className="rounded-full w-auto h-auto"
				/>
			</div>
		</div>
	);
};

export default NavRight;
