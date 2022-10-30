import React, { useEffect } from "react";
import styled from "styled-components";
import PageWrapper from "../../Refactory/PageWrapper";
import { useResourceContext } from "../../Context/ResourceContext";
import BlogPost from "../../Refactory/BlogPost";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../Redux/Actions";
import CenteredFlexDiv from "../../Refactory/CenteredFlexDiv";
import CardDeck from "../../Refactory/CardDeck";

const Post: React.FC = () => {
	const { CONSTANTS, useTheme } = useResourceContext();
	const { getThemeColor } = useTheme();
	const { blogActions } = allActions;
	const dispatch = useDispatch();
	const allElements: JSX.Element[] = [];
	const blogs = useSelector((state: rootState) => state.blogReducer.blogs);
	var blogFetched = useSelector(
		(state: rootState) => state.blogReducer.fetched
	);

	useEffect(function () {
		const getBlogInfo = async () => {
			if (!blogFetched) {
				dispatch(blogActions.getBlogs());
				let response = await fetch(`${CONSTANTS.IP}/blogs`, {
					method: "GET",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
					},
				}).catch((err) => {
					console.log("There is an error", err);
					return Promise.reject(err.message || err);
				});
				let data = await response.json();
				console.log(data);
				if (data.statusCode === 200) {
					dispatch(blogActions.receiveBlogs(data.blogInfo));
				} else {
					dispatch(blogActions.receiveBlogsErr());
				}
			}
		};

		Promise.all([getBlogInfo()]);
	});

	blogs.forEach(function (data: blogData) {
		data = data as blogData;
		allElements.push(
			<BlogPost
				id={data.createdOn}
				content={data.content}
				title={data.title}
				createdOn={data.createdOn}
			/>
		);
	});

	return (
		<PostWrapper getThemeColor={getThemeColor} device={CONSTANTS.DEVICES}>
			<PostDeckWrapper>
				<CardDeck cards={allElements}></CardDeck>
			</PostDeckWrapper>
		</PostWrapper>
	);
};

const PostWrapper = styled(PageWrapper)``;

const PostDeckWrapper = styled(CenteredFlexDiv)`
	flex-flow: column wrap;
`;

export default Post;
