const getTwInfo = () => ({
	type: "GET_TW_INFO",
});
const receiveTwInfo = (tw) => ({
	type: "RECEIVE_TW_INFO_SUCCESS",
	tw,
});
const receiveTwInfoErr = () => ({
	type: "RECEIVE_TW_ERROR",
});

const twActions = { getTwInfo, receiveTwInfo, receiveTwInfoErr };
export default twActions;
