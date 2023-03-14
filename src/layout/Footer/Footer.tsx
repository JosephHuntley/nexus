import React from 'react';
import { Section, Text, StyledLink, Links, Title } from './FooterStyles';
import Logo from '@/components/Global/Logo/Logo';

function Footer() {
	return (
		<Section>
			<div>
				<Logo />
				<Text>
					Designed and developed by <br />
					Joseph Huntley
				</Text>
			</div>
			<div>
				<Title>Links</Title>
				<Links>
					<StyledLink href='/dashboard'>Dashboard</StyledLink>
					<StyledLink href='/pay'>Pay</StyledLink>
					<StyledLink href='/benefits'>Benefits</StyledLink>
					<StyledLink href='/timesheet'>Timesheet</StyledLink>
					<StyledLink href='/settings'>Settings</StyledLink>
				</Links>
			</div>
		</Section>
	);
}

export default Footer;
