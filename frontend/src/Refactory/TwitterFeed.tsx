import styled from "styled-components";
import React from "react";
import { useTheme } from "../Context/ThemeContext";

const TwitterFeed: React.FC<{
	id: string;
	createdOn: string;
	content: string;
}> = ({ id, createdOn, content }) => {
	const { getThemeColor } = useTheme();
	let isRetweet = false;
	let isReply = false;
	let originalPost = false;
	let text = "Tweeted";
	if (content.substring(0, 2) === "RT") {
		isRetweet = true;
		text = "Retweeted";
	} else if (content.substring(0, 1) === "@") {
		isReply = true;
		text = "Replied";
	} else {
		originalPost = true;
		text = "Tweeted";
	}

	return (
		<TwitterWrapper id={id}>
			<TwitterStatusHeader
				isRetweet={isRetweet}
				isReply={isReply}
				originalPost={originalPost}
				getThemeColor={getThemeColor}
			>
				{text}
			</TwitterStatusHeader>
			<TwitterContent>{content}</TwitterContent>
			<TwitterTime>Created on: {createdOn}</TwitterTime>
		</TwitterWrapper>
	);
};

const TwitterWrapper = styled.div`
	margin-top: 10px;
	text-align: left;
	padding-left: 10px;
	padding-right: 10px;
	font-size: 15px;
`;

const TwitterStatusHeader = styled.div<{
	isRetweet: boolean;
	isReply: boolean;
	originalPost: boolean;
	getThemeColor: (arg0: string) => string;
}>`
	color: ${(props) => props.getThemeColor("MAIN_COLOR_DARK")};
`;

const TwitterContent = styled.div`
	margin-top: 10px;
`;
const TwitterTime = styled.div`
	font-size: 12px;
	margin-top: 10px;
	margin-bottom: 5px;
`;

export default TwitterFeed;
