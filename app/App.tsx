// Dependencies
import React from 'react';
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import { ChatProvider } from 'react-native-chatting';

// Navigation
import Navigation from '@app/navigation';

// Theme
import theme from '@app/theme';

/**
 * Credentials for Chat.
 */
const CREDENTIALS = {
  appId: 2502,
  authKey: 't4k6hHxh9TpWYg3',
  authSecret: 'Pp745ntPs4TW4Wf',
};

const config = {
  chat: {
    streamManagement: {
      enable: true,
    },
  },
  debug: {
    mode: 0,
  },
};

/**
 * App root component.
 * @returns The react root component.
 */
export function App(): React.ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <ChatProvider credentials={CREDENTIALS} config={config}>
        <SafeAreaView style={{ flex: 1 }}>
          <Navigation />
        </SafeAreaView>
      </ChatProvider>
    </ThemeProvider>
  );
}

export default App;
