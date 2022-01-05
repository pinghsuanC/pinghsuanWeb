import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PageWrapper from "../../Refactory/PageWrapper";
import { useResourceContext } from "../../Context/ResourceContext";
import YoutubeEmbed from "../../Refactory/YoutubeEmbed";

const Media: React.FC = () => {
	const { CONSTANTS, useTheme } = useResourceContext();
	const { getThemeColor } = useTheme();
	const [youtubeVideos, setYoutubeVideos] = useState([]);

	fetch(`${CONSTANTS.IP}/youtube`, {
		method: "GET",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
		},
	})
		.then((response) => response.json())
		.then((data) => {
			setYoutubeVideos(data);
			console.log(data);
		})
		.catch((error) => {
			console.error("There was an error!", error);
		});

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
