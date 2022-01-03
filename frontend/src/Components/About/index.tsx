import React from "react";
import styled from "styled-components";
import { useResourceContext } from "../../Context/ResourceContext";
import CenteredFlexDiv from "../../Refactory/CenteredFlexDiv";
import HRSeperator from "../../Refactory/HRSeperator";
import PageWrapper from "../../Refactory/PageWrapper";
import LinkLogo from "../../Refactory/LinkLogo";
import StyledButton from "../../Refactory/StyledButton";
import { getNestedValue } from "../../Refactory/Helpers";

const About: React.FC = () => {
	const { CONSTANTS, LINK_DEF, useLan, useTheme } = useResourceContext();
	const device = CONSTANTS.DEVICES;
	const { getThemeColor } = useTheme();
	const { getText } = useLan(); // used for switching languages
	const personalWebLinkInfo: Array<linkInfoType> = LINK_DEF.PERSONAL_WEB_LINKS;

	return (
		<AboutWrapper device={device} getThemeColor={getThemeColor}>
			{/* settings regarding webpage */}
			<AboutHeader>{getText("ABOUT.ABOUT_HEADINGS.SETTINGS")}</AboutHeader>
			<CenteredInfoWrapper>
				<StyledButton buttonText={"TEST"} />
			</CenteredInfoWrapper>
			<HRSeperator />
			{/* personal info */}
			<AboutHeader>{getText("ABOUT.ABOUT_HEADINGS.ABOUT_ME")}</AboutHeader>
			{/* personal intro */}
			<CenteredInfoWrapper>
				<Ava device={device} src={CONSTANTS.PATH.AVATAR_PATH} />
				<IntroDiv device={device}>{getText("ABOUT.ABOUT_INTRO")}</IntroDiv>
			</CenteredInfoWrapper>
			<HRSeperator />
			{/* media link */}
			<AboutHeader>{getText("ABOUT.ABOUT_HEADINGS.FIND_ME")}</AboutHeader>
			<LinkInfoWrapper device={device}>
				{personalWebLinkInfo.map((linkInfo) => {
					return (
						<LinkLogo
							key={getNestedValue("name", linkInfo, null)}
							linkInfo={linkInfo}
						/>
					);
				})}
			</LinkInfoWrapper>
		</AboutWrapper>
	);
};

const AboutWrapper = styled(PageWrapper)``;
const AboutHeader = styled.h1``;
const CenteredInfoWrapper = styled(CenteredFlexDiv)`
	padding: 10px;
	margin-top: 15px;
`;
const LinkInfoWrapper = styled(CenteredFlexDiv)<{
	device: deviceType;
}>`
	padding: 10px;
	margin-top: 15px;

	@media ${(props) => props.device.mobileXs},
		${(props) => props.device.mobileS},
		${(props) => props.device.mobileM},
		${(props) => props.device.mobileL} {
		flex-direction: column;
		align-items: flex-start;
		padding-left: 20%;
	}
	@media ${(props) => props.device.tablet} {
	}
	@media ${(props) => props.device.laptop},
		${(props) => props.device.laptopL},
		${(props) => props.device.desktop} {
		padding: 0;
		margin-top: 40px;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
`;
const Ava = styled.div<{
	device: deviceType;
	src: string;
}>`
	width: 130px;
	height: 130px;
	border-radius: 50%;
	background-image: url(${(props) => props.src});
	background-size: 180px;
	background-position: bottom;

	@media ${(props) => props.device.mobileXs},
		${(props) => props.device.mobileS},
		${(props) => props.device.mobileM},
		${(props) => props.device.mobileL} {
		margin-left: 0%;
	}
	@media ${(props) => props.device.tablet} {
	}
	@media ${(props) => props.device.laptop},
		${(props) => props.device.laptopL},
		${(props) => props.device.desktop} {
	}
`;

const IntroDiv = styled.div<{
	device: deviceType;
}>`
	width: 45%;
	padding-left: 2%;
	text-align: left;

	@media ${(props) => props.device.mobileXs},
		${(props) => props.device.mobileS},
		${(props) => props.device.mobileM},
		${(props) => props.device.mobileL} {
	}
	@media ${(props) => props.device.tablet} {
	}
	@media ${(props) => props.device.laptop},
		${(props) => props.device.laptopL},
		${(props) => props.device.desktop} {
	}
`;

export default About;
