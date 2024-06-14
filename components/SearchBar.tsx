import React from "react";
import YtMic from "@/icons/YtMic";
import YtSearch from "@/icons/YtSearch";

const SearchBar = () => {
	return (
		<div className="flex gap-5 items-center justify-center sm:hidden w-full ml-24 mr-12">
			<div className="flex items-center min-w-[65%] h-[40px] rounded-full">
				<input
					className="w-full rounded-s-full bg-transparent border border-[#333] py-[7px] px-4 text-[16px] focus:outline-[1px] focus:outline focus:outline-blue-400 z-10"
					placeholder="Search"
				/>
				<YtSearch className="min-w-[65px] h-full py-[9px] flex items-center justify-center bg-[#222] rounded-e-full cursor-pointer border border-[#333] border-s-0" />
			</div>
			<YtMic className="bg-[#222] p-2 rounded-full cursor-pointer min-w-fit min-h-fit" />
		</div>
	);
};

export default SearchBar;
