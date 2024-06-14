import React from "react";
import YtShorts from "../icons/YtShorts";
import YtHome from "../icons/YtHome";
import YtMusic from "../icons/YtMusic";
import YtSubscriptions from "../icons/YtSubscriptions";
import YtYourChannel from "@/icons/YtYourChannel";
import YtHistory from "@/icons/YtHistory";
import YtPlaylist from "@/icons/YtPlaylist";
import YtYourVideos from "@/icons/YtYourVideos";
import YtWatchLater from "@/icons/YtWatchLater";
import YtLikedVideos from "@/icons/YtLikedVideos";
import YtDownloads from "@/icons/YtDownloads";
import YtYourClips from "@/icons/YtYourClips";
import YtTrending from "@/icons/YtTrending";
import YtShopping from "@/icons/YtShopping";
import YtExploreMusic from "@/icons/YtExploreMusic";
import YtMovies from "@/icons/YtMovies";
import YtLive from "@/icons/YtLive";
import YtGaming from "@/icons/YtGaming";
import YtNews from "@/icons/YtNews";
import YtSports from "@/icons/YtSports";
import YtCourses from "@/icons/YtCourses";
import YtFashionBeauty from "@/icons/YtFashionBeauty";
import YtPodcasts from "@/icons/YtPodcasts";
import YtStudio from "@/icons/YtStudio";
import YtMusicTool from "@/icons/YtMusicTool";
import YtKids from "@/icons/YtKids";
import YtReportHistory from "@/icons/YtReportHistory";
import YtHelp from "@/icons/YtHelp";
import YtSendFeedback from "@/icons/YtSendFeedback";
import YtSetting from "@/icons/YtSetting";
import YtYou from "@/icons/YtYou";

export interface EachOptionTypes {
	id: string;
	title: string;
	href: string;
	icon: React.ComponentType;
}

export interface OptionTypes {
	id: string;
	title: string;
	options: EachOptionTypes[];
}

export interface SideNavOptionTypes {
	[key: string]: OptionTypes;
}

export const SideNavOptionsActive: EachOptionTypes[] = [
	{ title: "Home", id: "home", icon: YtHome, href: "/" },
	{ title: "Shorts", id: "shorts", icon: YtShorts, href: "/shorts" },
	{
		title: "Subscriptions",
		id: "subscriptions",
		icon: YtSubscriptions,
		href: "/subscriptions",
	},
	{
		title: "YouTube Music",
		id: "yt-music",
		icon: YtMusic,
		href: "/yt-music",
	},
	{
		title: "You",
		id: "you",
		icon: YtYou,
		href: "/you",
	},
	{
		title: "Downloads",
		id: "downloads",
		icon: YtDownloads,
		href: "/downloads",
	},
];
export const SideNavOptions: SideNavOptionTypes = {
	home: {
		id: "/",
		title: "",
		options: [
			{ title: "Home", id: "home", icon: YtHome, href: "/" },
			{ title: "Shorts", id: "shorts", icon: YtShorts, href: "/shorts" },
			{
				title: "Subscriptions",
				id: "subscriptions",
				icon: YtSubscriptions,
				href: "/subscriptions",
			},
			{
				title: "YouTube Music",
				id: "yt-music",
				icon: YtMusic,
				href: "/yt-music",
			},
		],
	},
	you: {
		id: "you",
		title: "You",
		options: [
			{
				title: "Your Channel",
				id: "your-channel",
				icon: YtYourChannel,
				href: "/your-channel",
			},
			{ title: "History", id: "history", icon: YtHistory, href: "/history" },
			{
				title: "Playlists",
				id: "playlists",
				icon: YtPlaylist,
				href: "/playlists",
			},
			{
				title: "Your videos",
				id: "your-videos",
				icon: YtYourVideos,
				href: "/your-videos",
			},
			{
				title: "Watch later",
				id: "watch-later",
				icon: YtWatchLater,
				href: "/watch-later",
			},
			{
				title: "Liked videos",
				id: "liked-videos",
				icon: YtLikedVideos,
				href: "/liked-videos",
			},
			{
				title: "Downloads",
				id: "downloads",
				icon: YtDownloads,
				href: "/downloads",
			},
			{
				title: "Your clips",
				id: "your-clips",
				icon: YtYourClips,
				href: "/your-clips",
			},
		],
	},
	subscriptions: {
		id: "subscriptions",
		title: "Subscriptions",
		options: [
			{ title: "Home", id: "home", icon: YtHome, href: "/a" },
			{ title: "Shorts", id: "shorts", icon: YtShorts, href: "/shorts" },
			{
				title: "Subscriptions",
				id: "subscriptions",
				icon: YtSubscriptions,
				href: "/subscriptions",
			},
			{
				title: "YouTube Music",
				id: "yt-music",
				icon: YtMusic,
				href: "/yt-music",
			},
		],
	},
	explore: {
		id: "explore",
		title: "Explore",
		options: [
			{
				title: "Trending",
				id: "trending",
				icon: YtTrending,
				href: "/trending",
			},
			{
				title: "Shopping",
				id: "shopping",
				icon: YtShopping,
				href: "/shopping",
			},
			{
				title: "Music",
				id: "music",
				icon: YtExploreMusic,
				href: "/music",
			},
			{
				title: "Movies",
				id: "movies",
				icon: YtMovies,
				href: "/movies",
			},
			{
				title: "Live",
				id: "live",
				icon: YtLive,
				href: "/live",
			},
			{
				title: "Gaming",
				id: "gaming",
				icon: YtGaming,
				href: "/gaming",
			},
			{
				title: "News",
				id: "news",
				icon: YtNews,
				href: "/news",
			},
			{
				title: "Sports",
				id: "sports",
				icon: YtSports,
				href: "/sports",
			},
			{
				title: "Courses",
				id: "courses",
				icon: YtCourses,
				href: "/courses",
			},
			{
				title: "Fashion & Beauty",
				id: "fashion-beauty",
				icon: YtFashionBeauty,
				href: "/fashion-beauty",
			},
			{
				title: "Podcasts",
				id: "podcasts",
				icon: YtPodcasts,
				href: "/podcasts",
			},
		],
	},
	morefromyoutube: {
		id: "morefromyoutube",
		title: "More from Youtube",
		options: [
			{
				title: "Youtube Studio",
				id: "ytstudio",
				icon: YtStudio,
				href: "/ytstudio",
			},
			{
				title: "Youtube Music",
				id: "ytmusictool",
				icon: YtMusicTool,
				href: "/ytmusictool",
			},
			{
				title: "Youtube Kids",
				id: "ytkids",
				icon: YtKids,
				href: "/ytkids",
			},
		],
	},
	more: {
		id: "more",
		title: "",
		options: [
			{
				title: "Settings",
				id: "settings",
				icon: YtSetting,
				href: "/settings",
			},
			{
				title: "Report History",
				id: "report-history",
				icon: YtReportHistory,
				href: "/report-history",
			},
			{
				title: "Help",
				id: "help",
				icon: YtHelp,
				href: "/help",
			},
			{
				title: "Send Feedback",
				id: "send-feedback",
				icon: YtSendFeedback,
				href: "/send-feedback",
			},
		],
	},
};

export interface YtFilterDataTypes {
	id: string;
	title: string;
}

export const YtFIltersData: YtFilterDataTypes[] = [
	{ title: "All", id: "all" },
	{ title: "Music", id: "music" },
	{ title: "Mixes", id: "mixes" },
	{ title: "Gaming", id: "gaming" },
	{ title: "T-Series", id: "t-series" },
	{ title: "Mantras", id: "mantras" },
	{ title: "Live", id: "live" },
	{ title: "Bollywood Music", id: "bollywood-music" },
	{ title: "Javascript", id: "javascript" },
	{ title: "Html", id: "html" },
	{ title: "Css", id: "css" },
	{ title: "NextJS", id: "nextjs" },
	{ title: "ReactJS", id: "readtjs" },
	{ title: "Typescript", id: "typescript" },
	{ title: "NodeJS", id: "nodejs" },
	{ title: "Tailwind CSS", id: "tailwind-css" },
	{ title: "Java", id: "java" },
];
