import React, { useState, useRef } from 'react';
import { Container, Form, Button, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faTrashAlt, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useFriendship } from '../contexts/FriendshipsProvider';

const URL = 'https://send-io.herokuapp.com';
const AVATAR_URL = 'https://eu.ui-avatars.com/api/?size=500&color=fff';

export default function Invites() {
	const { invites, fetchInvites, fetchFriends } = useFriendship();

	const [inviteAlert, setInviteAlert] = useState();

	const searchUsernameRef = useRef();

	const handleAddFriend = (e) => {
		e.preventDefault();

		const data = {
			friend: searchUsernameRef.current.value,
		};

		const options = {
			method: 'POST',
			headers: {
				Authorization: localStorage.getItem('send-io-usertoken'),
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		};

		fetch(`${URL}/invites/send`, options)
			.then((response) => response.text())
			.then((message) => {
				setInviteAlert(message);
				searchUsernameRef.current.value = '';
			})
			.catch((error) => { throw error; });
	};

	const handleDenyRequest = (e) => {
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

		fetch(`${URL}/invites/deny`, options)
			.then((response) => {
				if (response.ok) {
					fetchInvites();
				} else {
					throw new Error('An error occured');
				}
			})
			.catch((error) => { throw error; });
	};

	const handleAcceptRequest = (e) => {
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

		fetch(`${URL}/invites/accept`, options)
			.then((response) => {
				if (response.ok) {
					fetchInvites();
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
				<Form onSubmit={handleAddFriend}>
					<h1>Add friend</h1>
					<Form.Group className="d-flex justify-content-center">
						<Form.Control className="bg-3 border-0" ref={searchUsernameRef} type="text" placeholder="Username" required />
					</Form.Group>
					<p>{inviteAlert}</p>
					<Button type="submit" className="w-100 align-items-center justify-content-center">
						<FontAwesomeIcon icon={faUserPlus} />
					</Button>
				</Form>
				<br />
				{invites.length > 0 && (
					<Container className=" py-2 px-0">
						<h1>Invites</h1>
						{invites.map((i) => {
							const { user } = i;
							const avatarParams = `background=${hashColor(user)}&name=${user.charAt(0)}`;
							return (
								<Container key={user} className="d-flex align-items-center justify-content-center">

									<div className="d-flex align-items-center justify-content-between w-100">
										<div className="d-flex justify-content-between align-items-center">
											<div className="ring">
												<Image roundedCircle className="no-tiny" src={`${AVATAR_URL}&${avatarParams}`} alt="profile-pic" />
											</div>
											<p className="pl-2">{user}</p>
										</div>
										<div className="d-flex align-items-center">
											<Button className="rounded-circle circle mr-2" variant="success" type="button" value={user} onClick={handleAcceptRequest}>
												<FontAwesomeIcon icon={faCheck} />
											</Button>
											<Button className="rounded-circle circle" variant="danger" type="button" value={user} onClick={handleDenyRequest}>
												<FontAwesomeIcon icon={faTrashAlt} />
											</Button>
										</div>
									</div>

								</Container>
							);
						})}
					</Container>
				)}
			</Container>
		</>
	);
}
