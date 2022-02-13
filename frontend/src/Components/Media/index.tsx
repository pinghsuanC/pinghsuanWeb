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

	const { CONSTANTS, useTheme, youtubeVideos, setYoutubeVideos } =
		useResourceContext();
	const { getThemeColor } = useTheme();

	// fetch data from server at start
	useEffect(() => {
		const getTwitterInfo = () => {};

		const getYoutubeInfo = () => {
			if (youtubeVideos.length <= 0) {
				fetch(`${CONSTANTS.IP}/youtube`, {
					method: "GET",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
					},
				})
					.then((response) => response.json())
					.then((data) => {
						console.log(data);
						setYoutubeVideos(data);
					})
					.catch((error) => {
						console.error("There was an error!", error);
					});
			}
		};

		getYoutubeInfo();
	}, []);

	return (
		<MediaWrapper getThemeColor={getThemeColor} device={CONSTANTS.DEVICES}>
			<>
				{youtubeVideos &&
					youtubeVideos.map((video: youtubeVideo) => {
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
