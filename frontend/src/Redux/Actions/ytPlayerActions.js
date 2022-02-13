const playYtVideo = (videoId) => ({
	type: "YT_PLAYING",
	videoId,
});

const ytPlayerActions = { playYtVideo };
export default ytPlayerActions;
