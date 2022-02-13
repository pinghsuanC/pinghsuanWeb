import styled from "styled-components";
import React from "react";
import TwitterFeed from "../../Refactory/TwitterFeed";
import YoutubeEmbed from "../../Refactory/YoutubeEmbed";
import allActions from "../../Redux/Actions";
import { useSelector, useDispatch } from "react-redux";

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
			{shuffledArray &&
				shuffledArray.map((ele) => <MediaDeckElement>{ele}</MediaDeckElement>)}
		</MediaDeckWrapper>
	);
};

const MediaDeckWrapper = styled.div``;
const MediaDeckElement = styled.div`
	border: 1px solid red;
	border-radius: 25px;
	width: 100%;
`;
export default MediaDeck;
