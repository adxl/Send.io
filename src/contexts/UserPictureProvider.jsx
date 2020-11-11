import React, { useState, useContext } from 'react';

const UserPictureContext = React.createContext();

export function useUserPicture() {
	return useContext(UserPictureContext);
}

const AVATAR_BASE_URL = 'https://eu.ui-avatars.com/api/?size=500&color=fff';

export default function UserPictureProvider({ children }) {
	const hashColor = (str) => {
		let hash = 0;
		for (let i = 0; i < str.length; i++) {
			hash = str.charCodeAt(i) + ((hash << 5) - hash);
		}
		const c = (hash & 0x00FFFFFF).toString(16).toUpperCase();
		return '00000'.substring(0, 6 - c.length) + c;
	};
	const getPicture = (name) => {
		console.log(name);
		const color = hashColor(name);
		const params = `&background=${color}&name=${name.charAt(0)}`;
		const url = AVATAR_BASE_URL + params;

		return url;
	};

	return (
		<UserPictureContext.Provider value={getPicture}>
			{children}
		</UserPictureContext.Provider>
	);
}
