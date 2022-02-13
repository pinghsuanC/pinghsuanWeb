const getYtInfo = () => ({
	type: "GET_YT_INFO",
});
const receiveYtInfo = (yt = []) => ({
	type: "RECEIVE_YT_INFO_SUCCESS",
	yt,
});
const receiveYtInfoErr = () => ({
	type: "RECEIVE_YT_ERROR",
});

const ytActions = { getYtInfo, receiveYtInfo, receiveYtInfoErr };
export default ytActions;
