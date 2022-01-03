import React from "react";
import styled from "styled-components";
import PageWrapper from "../../Refactory/PageWrapper";
import { useResourceContext } from "../../Context/ResourceContext";

const Media: React.FC = () => {
	const { CONSTANTS, useTheme } = useResourceContext();
	const { getThemeColor } = useTheme();

	return (
		<MediaWrapper getThemeColor={getThemeColor} device={CONSTANTS.DEVICES}>
			Media
		</MediaWrapper>
	);
};

const MediaWrapper = styled(PageWrapper)``;
export default Media;
