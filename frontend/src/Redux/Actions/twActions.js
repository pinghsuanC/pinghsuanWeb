const getTwInfo = () => ({
	type: "GET_TW_INFO",
});
const receiveTwInfo = (twInfo) => ({
	type: "RECEIVE_TW_INFO_SUCCESS",
	twInfo,
});
const receiveTwInfoErr = () => ({
	type: "RECEIVE_TW_ERROR",
});

const twActions = { getTwInfo, receiveTwInfo, receiveTwInfoErr };
export default twActions;
