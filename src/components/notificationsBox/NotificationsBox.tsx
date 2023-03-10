import React from 'react';
import Box from '../Box/Box';
import {
	InnerBox,
	NotificationTitle,
	Status,
	Div1,
	Notification,
} from './NoitificationsBoxStyles';

function NotificationsBox() {
	return (
		<Box
			width='1032px'
			height='274px'
			md_height='inherit'
			md_width='90vw'>
			<InnerBox>
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
