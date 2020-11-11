import React, { useState } from 'react';
import { Container, Button, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSlash, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { useFriendship } from '../contexts/FriendshipsProvider';
import { useUserPicture } from '../contexts/UserPictureProvider';

const URL = 'https://send-io.herokuapp.com';

export default function Friends() {
	const [unfriend, setUnfriend] = useState();
	const { friends, fetchFriends } = useFriendship();
	const getPicture = useUserPicture();

	const handleUnfriend = (friend) => {
		const options = {
			method: 'POST',
			headers: {
				Authorization: localStorage.getItem('send-io-usertoken'),
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ friend }),
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

	const toggleAllowUnfriend = (f) => {
		setUnfriend(f);
	};

	return (
		<>
			{friends.length > 0
				&& (
					<Container className=" ">
						<h1>Friends</h1>

						{friends.map((f) => (
							<Container key={f} className="d-flex align-items-center justify-content-between  pb-2">
								<div className="d-flex align-items-center justify-content-between w-100">
									<div className="d-flex align-items-center">
										<div className="ring">
											<Image roundedCircle className="no-tiny" src={getPicture(f)} alt="profile-pic" />
										</div>
										<p className="pl-2">{f}</p>
									</div>

									<div
										onMouseEnter={() => toggleAllowUnfriend(f)}
										onMouseLeave={() => toggleAllowUnfriend(false)}
									>
										{ unfriend === f
											? (
												<Button className="rounded-circle circle" variant="danger" type="button" onClick={() => handleUnfriend(f)}>
													<FontAwesomeIcon icon={faUserSlash} />
												</Button>
											)
											: (
												<Button className="wt" variant="transparent" type="button">
													<FontAwesomeIcon icon={faEllipsisV} />
												</Button>
											)}
									</div>

								</div>
							</Container>
						))}
					</Container>
				)}
		</>
	);
}
