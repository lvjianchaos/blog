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
		name: "Codingxb",
		url: "https://blog.codingxb.cn/",
		avatar: "https://blog.codingxb.cn/photo.jpg",
		description: "研0学生，记录算法刷题、Java 与面经笔记。",
		tags: ["博客", "技术", "同学"],
	},
	{
		name: "Songxuan",
		url: "https://blog.songtf.cn/",
		avatar:
			"https://raw.githubusercontent.com/Song-xuan-xuan/picgo-mac/main/img/avatar.png",
		description: "技术、生活、随笔，一个一直在更新的个人博客。",
		tags: ["博客", "技术", "同学"],
	},
	{
		name: "Fuwari",
		url: "https://fuwari.vercel.app/",
		avatar: "https://avatars.githubusercontent.com/u/104888093?v=4",
		description: "本项目使用的 Astro 博客主题。",
		tags: ["主题", "Astro"],
	},
];
