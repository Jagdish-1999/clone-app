export interface VideoDataType {
	id: string;
	title: string;
	poster: string;
	videoPath: string;
	channel: string;
	views: string;
	streamedTime: string;
	profileLogo: string;
}

export const data: VideoDataType[] = [
	{
		id: "1",
		title: "BGMI Intro video | Official Radhe YT | BGMI Intro video",
		poster: "/assets/bgmi.jpg",
		videoPath: "/video/intro.mp4",
		channel: "OFFICIAL RADHE YT",
		views: "No views",
		streamedTime: "streamed 3 min ago",
		profileLogo: "/assets/profile_1.jpeg",
	},
];
