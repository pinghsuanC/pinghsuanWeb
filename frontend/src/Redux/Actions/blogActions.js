const getBlogInfo = () => ({
	type: "GET_BLOG_INFO",
});
const receiveBlogInfo = (blogInfo) => ({
	type: "RECEIVE_BLOG_INFO_SUCCESS",
	blogInfo,
});
const receiveBlogInfoErr = () => ({
	type: "RECEIVE_BLOG_ERROR",
});

const blogActions = { getBlogInfo, receiveBlogInfo, receiveBlogInfoErr };
export default blogActions;
