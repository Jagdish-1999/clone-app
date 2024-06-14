import React from "react";

export interface PropTypes {
	poster: string;
	videoPath: string;
}

const PlayVideo: React.FC<PropTypes> = ({ videoPath, poster }) => {
	return (
		<video
			controls
			autoPlay
			className="w-full h-full rounded-md cursor-pointer"
			poster={poster}>
			<source src={videoPath} type="video/mp4" />
		</video>
	);
};

export default PlayVideo;
