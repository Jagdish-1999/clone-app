import React, { useCallback, useContext } from "react";
import { YtFIltersData } from "@/constants/constants";
import { SetStateType } from "./types";
import { MyContext } from "@/providers/ContextProvider";

export interface PropTypes extends SetStateType {}

const YtFilters: React.FC<PropTypes> = () => {
	const { selectedFilter, setSelectedFilter } = useContext(MyContext);

	const handleSelectFilter = useCallback(
		(val: string) => {
			setSelectedFilter(val);
		},
		[setSelectedFilter]
	);

	return (
		<div className={`flex gap-2.5 overflow-x-auto py-1 pb-3 no-scrollbar pt-2`}>
			{YtFIltersData.map((filter) => (
				<span
					key={filter.id}
					onClick={() => handleSelectFilter(filter.id)}
					className={`block bg-[#333] rounded-lg px-3 py-1 min-w-fit h-fit text-[15px] font-extrabold tracking-wide break-keep cursor-pointer select-none transition-background duration-200 ${
						selectedFilter === filter.id
							? "bg-[#eee] text-[#111] font-bold"
							: ""
					}`}>
					{filter.title}
				</span>
			))}
		</div>
	);
};

export default YtFilters;
