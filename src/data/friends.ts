export type FriendLink = {
	/** 站点名称 */
	name: string;
	/** 站点地址（必须以 http/https 开头） */
	url: string;
	/** 头像图片地址，支持远程 URL 或 /public 下的路径 */
	avatar: string;
	/** 一句话简介 */
	description: string;
	/** 可选：站点标签，显示在卡片底部 */
	tags?: string[];
};

/**
 * 友链列表，数组顺序即页面显示顺序。
 * 添加友链只需在下面追加一个对象即可。
 */
export const friends: FriendLink[] = [
	{
		name: "Fuwari",
		url: "https://github.com/saicaca/fuwari",
		avatar: "https://avatars.githubusercontent.com/u/104888093?v=4",
		description: "本项目使用的 Astro 博客主题。",
		tags: ["主题", "Astro"],
	},
	{
		name: "Astro",
		url: "https://astro.build/",
		avatar: "https://avatars.githubusercontent.com/u/44914786?v=4",
		description: "The web framework for content-driven websites.",
		tags: ["框架"],
	},
];
