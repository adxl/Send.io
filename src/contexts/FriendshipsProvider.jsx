import React, { useState, useEffect, useContext } from 'react';

const FriendshipsContext = React.createContext();

export function useFriendship() {
	return useContext(FriendshipsContext);
}

export function FriendshipsProvider({ children }) {
	const [invites, setInvites] = useState([]);
	const [friends, setFriends] = useState([]);

	const URL = 'https://send-io.herokuapp.com';

	const fetchInvites = () => {
		fetch(`${URL}/invites`, {
			headers: {
				Authorization: localStorage.getItem('send-io-usertoken'),
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setInvites(data);
			})
			.catch((error) => { throw error; });
	};

	const fetchFriends = () => {
		fetch(`${URL}/friends`, {
			headers: {
				Authorization: localStorage.getItem('send-io-usertoken'),
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setFriends(data);
			})
			.catch((error) => { throw error; });
	};

	useEffect(() => {
		fetchInvites();
		fetchFriends();
	}, []);

	return (
		<FriendshipsContext.Provider value={{ invites, fetchInvites, friends, fetchFriends }}>
			{children}
		</FriendshipsContext.Provider>
	);
}
