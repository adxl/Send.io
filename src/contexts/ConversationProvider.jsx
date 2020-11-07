import React, { useState, useContext } from 'react';

const ConversationContext = React.createContext();

export function useConversation() {
	return useContext(ConversationContext);
}

export function ConversationProvider({ children }) {
	const [conversation, setConversation] = useState();

	const selectConversation = (c) => {
		setConversation(c);
	};

	return (
		<ConversationContext.Provider value={{ conversation, selectConversation }}>
			{children}
		</ConversationContext.Provider>
	);
}
