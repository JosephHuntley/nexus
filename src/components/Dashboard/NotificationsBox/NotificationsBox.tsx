import React from 'react';
import {
	NotificationTitle,
	Status,
	Div1,
	Notification,
	Inner
} from './NoitificationsBoxStyles';
import Box from '@/components/Global/Box/Box';


function NotificationsBox() {
	return (
		<Box
			width='71.6vw'
			height='33vh'
			md_height='inherit'
			md_width='90vw'>
			<Inner
				md_padding='24px 48px'
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
			</Inner>
		</Box>
	);
}

export default NotificationsBox;
