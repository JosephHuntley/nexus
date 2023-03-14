import React from 'react';
import Image from 'next/image';
import {
	Header,
	Container,
	Avatar,
	UserInfo,
	Name,
	Email,
	Img
} from './HeaderStyles';
import TempImage from '../../../public/profile_pic.png';
function Navbar() {
	return (
		<Header>
			<Container>
				<Avatar href='/settings'>
					<Img
						src={TempImage}
						alt='Avatar'
					/>
				</Avatar>
				<UserInfo>
					<Name>Joseph Huntley</Name>
					<Email>Joseph.Huntley@outlook.com</Email>
				</UserInfo>
			</Container>
		</Header>
	);
}

export default Navbar;
