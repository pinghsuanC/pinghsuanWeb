import styled from "styled-components";
import React from "react";

const TwitterFeed: React.FC<{
	id: string;
	creationDate: string;
	content: string;
}> = ({ id, creationDate, content }) => {
	return (
		<TwitterWrapper id={id}>
			<TwitterContent>{content}</TwitterContent>
			<TwitterTime>Created on: {creationDate}</TwitterTime>
		</TwitterWrapper>
	);
};

const TwitterWrapper = styled.div`
	margin-top: 10px;
`;
const TwitterContent = styled.div``;
const TwitterTime = styled.div``;

export default TwitterFeed;
