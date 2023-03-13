import React from 'react';
import Box from '../Box/Box';
import {
	NotificationTitle,
	Status,
	Div1,
	Notification,
} from './NoitificationsBoxStyles';
import { InnerBox } from '@/styles/globals';

function NotificationsBox() {
	return (
		<Box
			width='1032px'
			height='274px'
			md_height='inherit'
			md_width='90vw'>
			<InnerBox
				padding='48px 116px'
				md_padding='24px 48px'
				height='100%'
				direction='column'>
				<Notification>
					<NotificationTitle>Welcome to Our New Webpage!</NotificationTitle>
					<Div1>
						<Status>Read</Status>
						<Status>12:45</Status>
					</Div1>
				</Notification>
				<Notification>
					<NotificationTitle>Welcome to Our New Webpage!</NotificationTitle>
					<Div1>
						<Status>Read</Status>
						<Status>12:45</Status>
					</Div1>
				</Notification>
				<Notification>
					<NotificationTitle>Welcome to Our New Webpage!</NotificationTitle>
					<Div1>
						<Status>Read</Status>
						<Status>12:45</Status>
					</Div1>
				</Notification>
				<Notification>
					<NotificationTitle>Welcome to Our New Webpage!</NotificationTitle>
					<Div1>
						<Status>Read</Status>
						<Status>12:45</Status>
					</Div1>
				</Notification>
				<Notification>
					<NotificationTitle>Welcome to Our New Webpage!</NotificationTitle>
					<Div1>
						<Status>Read</Status>
						<Status>12:45</Status>
					</Div1>
				</Notification>
			</InnerBox>
		</Box>
	);
}

export default NotificationsBox;
