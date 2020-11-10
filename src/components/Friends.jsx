import React from 'react';
import { Container, Button, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSlash } from '@fortawesome/free-solid-svg-icons';
import { useFriendship } from '../contexts/FriendshipsProvider';

const URL = 'https://send-io.herokuapp.com';
const AVATAR_URL = 'https://eu.ui-avatars.com/api/?size=500&color=fff';

export default function Friends() {
	const { friends, fetchFriends } = useFriendship();

	const handleUnfriend = (e) => {
		e.preventDefault();

		const data = {
			friend: e.target.value,
		};

		const options = {
			method: 'POST',
			headers: {
				Authorization: localStorage.getItem('send-io-usertoken'),
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		};

		fetch(`${URL}/friends/unfriend`, options)
			.then((response) => {
				if (response.ok) {
					fetchFriends();
				} else {
					throw new Error('An error occured');
				}
			})
			.catch((error) => { throw error; });
	};

	const hashColor = (str) => {
		let hash = 0;
		for (let i = 0; i < str.length; i++) {
			hash = str.charCodeAt(i) + ((hash << 5) - hash);
		}
		const c = (hash & 0x00FFFFFF).toString(16).toUpperCase();
		return '00000'.substring(0, 6 - c.length) + c;
	};

	return (
		<>
			<Container className="">
				<h1>Friends</h1>
				<Container className=" ">
					{friends.length > 0
						? friends.map((f) => {
							const avatarParams = `background=${hashColor(f)}&name=${f.charAt(0)}`;
							return (
								<Container key={f} className="d-flex align-items-center justify-content-between  pb-2">
									<div className="d-flex align-items-center justify-content-between w-100">
										<div className="d-flex align-items-center">
											<div className="ring">
												<Image roundedCircle className="no-tiny" src={`${AVATAR_URL}&${avatarParams}`} alt="profile-pic" />
											</div>
											<p className="pl-2">{f}</p>
										</div>
										<Button className="rounded-circle circle" variant="danger" type="button" value={f} onClick={handleUnfriend}>
											<FontAwesomeIcon icon={faUserSlash} />
										</Button>
									</div>
								</Container>
							);
						})
						: <p>No friends</p>}
				</Container>
			</Container>
		</>
	);
}
