const getBlogs = () => ({
	type: "GET_BLOG_INFO",
});
const receiveBlogs = (blogs) => ({
	type: "RECEIVE_BLOG_INFO_SUCCESS",
	blogs,
});
const receiveBlogsErr = () => ({
	type: "RECEIVE_BLOG_ERROR",
});

const blogActions = { getBlogs, receiveBlogs, receiveBlogsErr };
export default blogActions;
