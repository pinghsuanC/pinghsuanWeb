import React, { useEffect } from "react";
import styled from "styled-components";
import PageWrapper from "../../Refactory/PageWrapper";
import { useResourceContext } from "../../Context/ResourceContext";
import YoutubeEmbed from "../../Refactory/YoutubeEmbed";
import allActions from "../../Redux/Actions";
import { useSelector, useDispatch } from "react-redux";

const Media: React.FC = () => {
	const { ytActions } = allActions;
	const dispatch = useDispatch();
	const status = useSelector((state: rootState) => state.ytReducer.status);
	const ytVideos = useSelector((state: rootState) => state.ytReducer.yt);

	const { CONSTANTS, useTheme } = useResourceContext();
	const { getThemeColor } = useTheme();

	// fetch data from server at start
	useEffect(() => {
		const getTwitterInfo = () => {};

		const getYoutubeInfo = async () => {
			dispatch(ytActions.getYtInfo());
			if (ytVideos.length <= 0) {
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
				if (data.StatusCode === 200) {
					dispatch(ytActions.receiveYtInfo(data.PlayListItem));
				} else {
					dispatch(ytActions.receiveYtInfoErr());
				}
			}
		};

		getYoutubeInfo();
	}, []);

	return (
		<MediaWrapper getThemeColor={getThemeColor} device={CONSTANTS.DEVICES}>
			<>
				{ytVideos &&
					ytVideos.map((video: youtubeVideo) => {
						return (
							<YoutubeEmbed
								videoId={video.snippet.resourceId.videoId}
								title={video.snippet.title}
							/>
						);
					})}
			</>
		</MediaWrapper>
	);
};

type youtubeVideo = {
	[key: string]: { [key: string]: any };
};

const MediaWrapper = styled(PageWrapper)``;
export default Media;
