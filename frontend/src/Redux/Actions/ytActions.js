const getYtInfo = () => ({
	type: "GET_YT_INFO",
});
const receiveYtInfo = (ytInfo) => ({
	type: "RECEIVE_YT_INFO_SUCCESS",
	ytInfo,
});
const receiveYtInfoErr = () => ({
	type: "RECEIVE_YT_ERROR",
});

const ytActions = { getYtInfo, receiveYtInfo, receiveYtInfoErr };
export default ytActions;
