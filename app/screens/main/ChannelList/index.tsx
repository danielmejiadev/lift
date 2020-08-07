// Dependencies
import React from 'react';
import { ChannelList, useAuth } from 'react-native-chatting';
import { Button, Image, View } from 'react-native';

// Logo
import logo from '@app/assets/logo.png';

/**
 * Defines the list of channels.
 * @returns The channes list.
 */
export function ChannelListScreen(props: any): React.ReactElement {
  const { navigation } = props;
  const { navigate } = navigation;
  const goToChat = React.useCallback((channel) => navigate('Chat', { channel }), [navigate]);

  const { signOut } = useAuth();

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', height: 50 }}>
        <Image source={logo} resizeMode="contain" style={{ height: 40, width: 40 }} />
        <Button onPress={(): void => signOut()} title="Logout" />
      </View>
      <ChannelList emptyChat="No chats yet" onSelect={goToChat} />
    </View>
  );
}

export default ChannelListScreen;
