import styled from "styled-components";
import React from "react";

const YoutubeEmbed: React.FC<{ title: string; videoId: string }> = ({
	title,
	videoId,
}) => {
	return (
		<iframe
			title={title}
			width="480"
			height="270"
			src={`//www.youtube.com/embed/${videoId}`}
			frameBorder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
		></iframe>
	);
};
export default YoutubeEmbed;
