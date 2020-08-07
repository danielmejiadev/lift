// Dependencies
import React from 'react';
import { Chat } from 'react-native-chatting';

/**
 * Defines the list of channels.
 * @returns The channes list.
 */
export function ChatScreen(props: any): React.ReactElement {
  const { route } = props;
  const { channel } = route.params;

  return (
    <Chat channel={channel} />
  );
}

export default ChatScreen;
