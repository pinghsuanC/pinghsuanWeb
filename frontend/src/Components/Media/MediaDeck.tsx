import styled from "styled-components";
import React from "react";
import TwitterFeed from "../../Refactory/TwitterFeed";
import YoutubeEmbed from "../../Refactory/YoutubeEmbed";
import allActions from "../../Redux/Actions";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "../../Context/ThemeContext";
import CenteredFlexDiv from "../../Refactory/CenteredFlexDiv";
import CONSTANTS from "../../Resources/Constant";
import CardDeck from "../../Refactory/CardDeck";
/**
 *
 * return list of randomized jsx elements
 * TODO: add Link element at the bottom
 *
 */
const MediaDeck: React.FC = () => {
	const ytStatus = useSelector((state: rootState) => state.ytReducer.status);
	const twStatus = useSelector((state: rootState) => state.twReducer.status);
	const ytVideos = useSelector((state: rootState) => state.ytReducer.yt);
	const twInput = useSelector((state: rootState) => state.twReducer.tw.data);

	const allElements: JSX.Element[] = [];
	const allData: (youtubeSnippet | twData)[] = [];
	if (twStatus === "idle") {
		twInput.forEach((tw: twData) => {
			allData.push(tw);
		});
	}
	if (ytStatus === "idle") {
		ytVideos.forEach((video: youtubeVideo) => {
			allData.push(video.snippet);
		});
	}

	allData.sort((a: youtubeSnippet | twData, b: youtubeSnippet | twData) => {
		if (a.createdOn === b.createdOn) {
			return 0;
		}
		return a.createdOn > b.createdOn ? -1 : 1;
	});

	allData.forEach(function (data: youtubeSnippet | twData) {
		if (data.type === "youtube") {
			data = data as youtubeSnippet;
			allElements.push(
				<YoutubeEmbed
					id={data.resourceId.videoId}
					videoId={data.resourceId.videoId}
					title={data.title}
					createdOn={data.createdOn}
				/>
			);
		} else if (data.type === "twitter") {
			data = data as twData;
			allElements.push(
				<TwitterFeed
					id={data.id}
					createdOn={data.createdOn}
					content={data.text}
				/>
			);
		}
	});

	return (
		<MediaDeckWrapper>
			<div>FILTER_PLACE_HOLDER</div>
			<CardDeck cards={allElements}></CardDeck>
		</MediaDeckWrapper>
	);
};

const MediaDeckWrapper = styled(CenteredFlexDiv)`
	flex-flow: column wrap;
`;

export default MediaDeck;
