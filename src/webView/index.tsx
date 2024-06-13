import {forwardRef, useEffect} from 'react';
import {
  ActivityIndicator,
  BackHandler,
  Linking,
  Platform,
  StyleSheet
} from 'react-native';
import {WebView} from 'react-native-webview';

import type {WebViewMessageEvent, WebViewProps} from 'react-native-webview';
import {height, width} from 'src/utils/_dimensions';

interface WebviewUIProps extends WebViewProps {
  uri: string;
  onMessage?: (event: any) => void;
  token: string;
}
type NavStateProps = {
  url?: string;
  title?: string;
  loading?: boolean;
  canGoBack?: boolean;
  canGoForward?: boolean;
};

const styles = StyleSheet.create({
  ActivityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center'
  }
});

// TODO: import from components
const LoadingIndicatorView = () => {
  return (
    <ActivityIndicator
      color="#009688"
      size="large"
      style={styles.ActivityIndicatorStyle}
    />
  );
};

const WebviewUI = forwardRef<WebView | null, WebviewUIProps>(
  ({uri, onMessage, token, ...props}, ref) => {
    const webviewRef = ref;
    const onMessageFromWeb = (event: WebViewMessageEvent) => {
      onMessage ? onMessage(JSON.parse(event.nativeEvent.data)) : null;
    };
    const cookiesString = `appSession=${token};`;
    const setCookies = `document.cookie = "appSession=${token}; path=/";`;
    const handleWebViewNavigationStateChange = (newNavState: NavStateProps) => {
      const {url} = newNavState;
      if (!url) return;
      if (url.includes('google.com')) {
        console.log('Redirecting to', webviewRef);
        // const newURL = 'https://reactnative.dev/';
        // const redirectTo = 'window.location = "' + newURL + '"';
        // webviewRef?.current.injectJavaScript(redirectTo);
      }
    };

    useEffect(() => {
      if (Platform.OS === 'ios') {
        return;
      }
      const handleBack = () => {
        if (typeof webviewRef === 'function' || !webviewRef?.current) {
          return false;
        }
        webviewRef?.current.goBack();
        return true;
      };
      const handleEvent = BackHandler.addEventListener(
        'hardwareBackPress',
        handleBack
      );
      return () => handleEvent.remove();
    }, []);
    return (
      <WebView
        style={{flex: 1, width, height}}
        source={{uri, headers: {Cookie: cookiesString}}}
        onNavigationStateChange={handleWebViewNavigationStateChange}
        renderLoading={LoadingIndicatorView}
        startInLoadingState={true}
        ref={webviewRef}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        mixedContentMode="never"
        incognito={true}
        pullToRefreshEnabled={true}
        allowsBackForwardNavigationGestures={true}
        // Set this to provide JavaScript that will be injected into the web page after the document element is created, but before other subresources finish loading.
        injectedJavaScriptBeforeContentLoaded={setCookies}
        onShouldStartLoadWithRequest={({url}) => {
          if (url.startsWith('https://')) {
            return true;
          }
          if (ref && typeof ref !== 'function' && ref.current) {
            ref.current.stopLoading();
          }
          Linking.openURL(url);
          return false;
        }}
        onLoadEnd={() => {
          if (typeof webviewRef === 'function' || !webviewRef?.current) {
            return;
          }
          webviewRef.current.injectJavaScript(setCookies);
        }}
        onMessage={onMessageFromWeb}
        {...props}
      />
    );
  }
);

export default WebviewUI;
