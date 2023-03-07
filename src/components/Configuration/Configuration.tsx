import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDarkMode } from '@/customHooks/useDarkMode';
import { Label, Input, Switch, Field } from './ConfigurationStyles';
import { Section } from '@/styles/pages/SettingsStyles';

function Configuration() {
	const [theme, themeToggler] = useDarkMode();
	// TODO: Change depending on user preference
	const [isEmailNotifications, setIsEmailNotifications] = useState(false);

	return (
		<Section>
			<Label>
				<Field>Dark Mode:</Field>
				<Input
					checked={theme === 'dark'}
					type='checkbox'
					onChange={themeToggler}
				/>
				<Switch />
			</Label>
			<Label>
				<Field>Email Notifications:</Field>
				<Input
					checked={isEmailNotifications}
					type='checkbox'
					onChange={() => {}}
				/>
				<Switch />
			</Label>
		</Section>
	);
}

export default Configuration;
