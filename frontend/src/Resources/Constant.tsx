const AVAILABLE_LANGUAGE = {
	en: "en",
	chi: "chi",
};
const THEME = {
	NORMAL: "normal",
	DARK: "dark",
	WHITE: "white",
	CUTE: "cute",
	COOL: "cool",
	ALPHA: "alpha",
};
const SIZES = {
	mobileXs: "200px",
	mobileS: "320px",
	mobileM: "375px",
	mobileL: "425px",
	tablet: "768px",
	laptop: "1024px",
	laptopL: "1440px",
	desktop: "2560px",
};
const DEVICES = {
	mobileXs: `(min-width: ${SIZES.mobileXs})`,
	mobileS: `(min-width: ${SIZES.mobileS})`,
	mobileM: `(min-width: ${SIZES.mobileM})`,
	mobileL: `(min-width: ${SIZES.mobileL})`,
	tablet: `(min-width: ${SIZES.tablet})`,
	laptop: `(min-width: ${SIZES.laptop})`,
	laptopL: `(min-width: ${SIZES.laptopL})`,
	desktop: `(min-width: ${SIZES.desktop})`,
};
const CONFIG = {};
const PATH = {
	AVATAR_PATH: "/images/avatar.jpg",
};

const CONSTANTS = { THEME, CONFIG, PATH, DEVICES, AVAILABLE_LANGUAGE };

export default CONSTANTS;
