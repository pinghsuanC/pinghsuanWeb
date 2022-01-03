import {
	SiBilibili,
	SiTwitter,
	SiYoutube,
	SiGithub,
	SiInstagram,
	SiLinkedin,
	SiGmail,
} from "react-icons/si";

type LinDefType = {
	TAB_LABELS: stringMap;
	PERSONAL_WEB_LINKS: Array<linkInfoType>;
};
const LINK_DEF: LinDefType = {
	TAB_LABELS: {
		ABOUT_AND_SETTINGS: "/about",
		POST: "/post",
		MEDIA: "/media",
	}, // tab label key => link
	PERSONAL_WEB_LINKS: [
		{
			name: "Instagram",
			link: "https://www.instagram.com/q_pinghsuan/",
			logo: SiInstagram,
		},
		{
			name: "Twitter",
			link: "https://twitter.com/suzumeChueh",
			logo: SiTwitter,
		},
		{
			name: "Youtube",
			link: "https://www.youtube.com/channel/UCgnblG5MuuwRwA0Wy_BkA8Q",
			logo: SiYoutube,
		},
		{
			name: "Bilibili",
			link: "https://space.bilibili.com/4015429",
			logo: SiBilibili,
		},
		{
			name: "Github",
			link: "https://github.com/pinghsuanC",
			logo: SiGithub,
		},
		{
			name: "LinkedIn",
			link: "https://www.linkedin.com/in/pinghsuanchueh/",
			logo: SiLinkedin,
		},
		{
			name: "Email",
			link: "mailto:suzume0u0@gmail.com",
			logo: SiGmail,
		},
	],
};

export default LINK_DEF;
