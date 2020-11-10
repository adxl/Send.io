import React, { useState, useContext } from 'react';

const ConversationContext = React.createContext();

export function useConversation() {
	return useContext(ConversationContext);
}

const getCurrentConversation = () => JSON.parse(localStorage.getItem('send-io-current-conversation')) || null;

export function ConversationProvider({ children }) {
	const [conversation, setConversation] = useState(() => getCurrentConversation());

	// console.log(conversation);

	const selectConversation = (c) => {
		setConversation(c);
		const currentConversation = JSON.stringify(c);
		localStorage.setItem('send-io-current-conversation', currentConversation);
	};

	return (
		<ConversationContext.Provider value={{ conversation, selectConversation }}>
			{children}
		</ConversationContext.Provider>
	);
}
