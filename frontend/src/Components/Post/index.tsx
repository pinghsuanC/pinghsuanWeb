import React from "react";
import styled from "styled-components";
import PageWrapper from "../../Refactory/PageWrapper";
import { useResourceContext } from "../../Context/ResourceContext";

const Post: React.FC = () => {
	const { CONSTANTS, useTheme } = useResourceContext();
	const { getThemeColor } = useTheme();

	return (
		<PostWrapper getThemeColor={getThemeColor} device={CONSTANTS.DEVICES}>
			Post
		</PostWrapper>
	);
};

const PostWrapper = styled(PageWrapper)``;
export default Post;
