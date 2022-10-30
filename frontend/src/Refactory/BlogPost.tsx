import styled from "styled-components";
import React from "react";
import { useTheme } from "../Context/ThemeContext";
import Parser from "html-react-parser";

const BlogPost: React.FC<{
	id: string;
	createdOn: string;
	content: string;
	title: string;
}> = ({ id, createdOn, content, title }) => {
	const { getThemeColor } = useTheme();
	return (
		<PostWrapper id={id}>
			<PostTitle getThemeColor={getThemeColor}>{title}</PostTitle>
			<PostContent getThemeColor={getThemeColor}>{Parser(content)}</PostContent>
			<PostTime getThemeColor={getThemeColor}>Created on: {createdOn}</PostTime>
		</PostWrapper>
	);
};

const PostWrapper = styled.div`
	margin-top: 10px;
	text-align: left;
	padding-left: 10px;
	padding-right: 10px;
	font-size: 17px;
	line-height: 18px;
`;

const PostTitle = styled.div<{
	getThemeColor: (arg0: string) => string;
}>`
	color: ${(props) => props.getThemeColor("MAIN_COLOR_DARK")};
`;

const PostContent = styled.div<{
	getThemeColor: (arg0: string) => string;
}>`
	margin-top: 10px;
	color: ${(props) => props.getThemeColor("MAIN_COLOR_DARK")};
`;
const PostTime = styled.div<{
	getThemeColor: (arg0: string) => string;
}>`
	font-size: 12px;
	margin-top: 10px;
	margin-bottom: 5px;
	color: ${(props) => props.getThemeColor("MAIN_COLOR_DARK")};
`;

export default BlogPost;
