import styled from "styled-components";
import React from "react";
import TwitterFeed from "../../Refactory/TwitterFeed";
import YoutubeEmbed from "../../Refactory/YoutubeEmbed";
import allActions from "../../Redux/Actions";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "../../Context/ThemeContext";
import CenteredFlexDiv from "../../Refactory/CenteredFlexDiv";

/**
 *
 * return list of randomized jsx elements
 *
 */
const MediaDeck: React.FC = () => {
	const ytStatus = useSelector((state: rootState) => state.ytReducer.status);
	const ytVideos = useSelector((state: rootState) => state.ytReducer.yt);
	const twStatus = useSelector((state: rootState) => state.twReducer.status);
	const twData = useSelector((state: rootState) => state.twReducer.tw.data);
	const { getThemeColor } = useTheme();

	const allElement: JSX.Element[] = [];

	if (ytStatus === "idle") {
		ytVideos.forEach((video: youtubeVideo) => {
			allElement.push(
				<YoutubeEmbed
					id={video.snippet.resourceId.videoId}
					videoId={video.snippet.resourceId.videoId}
					title={video.snippet.title}
				/>
			);
		});
	}

	if (twStatus === "idle") {
		twData.forEach((tw: twData) => {
			allElement.push(
				<TwitterFeed
					id={tw.id}
					creationDate={tw.created_at}
					content={tw.text}
				/>
			);
		});
	}

	const shuffledArray = allElement.sort(() => 0.5 - Math.random());

	return (
		<MediaDeckWrapper>
			<div>FILTER_PLACE_HOLDER</div>
			{shuffledArray &&
				shuffledArray.map((ele) => (
					<MediaDeckElement getThemeColor={getThemeColor}>
						{ele}
					</MediaDeckElement>
				))}
		</MediaDeckWrapper>
	);
};

const MediaDeckWrapper = styled(CenteredFlexDiv)`
	flex-direction: column;
`;

const MediaDeckElement = styled.div<{
	getThemeColor: (arg0: string) => string;
}>`
	border: 1px solid ${(props) => props.getThemeColor("MAIN_COLOR_DARK")};
	border-radius: 10px;
	width: 80%;
	margin-top: 5px;
`;
export default MediaDeck;
