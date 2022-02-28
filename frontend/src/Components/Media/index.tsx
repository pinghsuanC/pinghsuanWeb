import React, { useEffect } from "react";
import styled from "styled-components";
import PageWrapper from "../../Refactory/PageWrapper";
import { useResourceContext } from "../../Context/ResourceContext";
import YoutubeEmbed from "../../Refactory/YoutubeEmbed";
import TwitterFeed from "../../Refactory/TwitterFeed";
import allActions from "../../Redux/Actions";
import { useSelector, useDispatch } from "react-redux";
import MediaDeck from "./MediaDeck";

const Media: React.FC = () => {
	const { ytActions, twActions } = allActions;
	const dispatch = useDispatch();
	const { CONSTANTS, useTheme } = useResourceContext();
	const { getThemeColor } = useTheme();
	const ytVideos = useSelector((state: rootState) => state.ytReducer.yt);
	const twData = useSelector((state: rootState) => state.twReducer.tw.data);

	// fetch data from server at start
	useEffect(() => {
		const getTwitterInfo = async () => {
			if (twData.length <= 0) {
				dispatch(twActions.getTwInfo());
				let response = await fetch(`${CONSTANTS.IP}/twitter`, {
					method: "GET",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
					},
				}).catch((err) => {
					console.log("There is an error", err);
					return Promise.reject(err.message || err);
				});
				let data = await response.json();
				if (data.statusCode === 200) {
					dispatch(twActions.receiveTwInfo(data.twitterContent));
				} else {
					dispatch(twActions.receiveTwInfoErr());
				}
			}
		};

		const getYoutubeInfo = async () => {
			if (ytVideos.length <= 0) {
				dispatch(ytActions.getYtInfo());
				let response = await fetch(`${CONSTANTS.IP}/youtube`, {
					method: "GET",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
					},
				}).catch((err) => {
					console.log("There is an error", err);
					return Promise.reject(err.message || err);
				});
				let data = await response.json();
				if (data.statusCode === 200) {
					dispatch(ytActions.receiveYtInfo(data.playListItem));
				} else {
					dispatch(ytActions.receiveYtInfoErr());
				}
			}
		};

		Promise.all([getYoutubeInfo(), getTwitterInfo()]);
	}, []);

	return (
		<MediaWrapper getThemeColor={getThemeColor} device={CONSTANTS.DEVICES}>
			<MediaDeck />
		</MediaWrapper>
	);
};

const MediaWrapper = styled(PageWrapper)``;
export default Media;
