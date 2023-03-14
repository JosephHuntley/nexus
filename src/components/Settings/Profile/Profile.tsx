import React from 'react';
import { Section } from '@/styles/pages/SettingsStyles';
import Button from '@/components/Global/Button/Button';

function Profile() {
	return (
		<Section>
			{/* Avatar & Name */}
			<div></div>
			{/* Horizontal Line */}
			<div />
			{/* Profile Info */}
			<div></div>
			{/* Button */}
			<Button
				alt={true}
				click={() => {}}>
				Update Profile
			</Button>
		</Section>
	);
}

export default Profile;
