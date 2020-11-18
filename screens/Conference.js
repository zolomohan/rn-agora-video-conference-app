import React from 'react';
import AgoraUIKit from 'agora-rn-uikit';
import { useNavigation } from '@react-navigation/native';

export default function Conference(props) {
  const navigation = useNavigation();

  const rtcProps = {
    appId: 'c7e742d5df23478285a9dc4f4ff62407',
    channel: props.route.params.channel,
  };

  const callbacks = {
    EndCall: () => navigation.goBack(),
  };

  const localButtonStyle = {
    backgroundColor: '#78b0ff',
    borderColor: '#78b0ff',
  };

  const styleProps = {
    theme: '#000',
    localBtnStyles: {
      muteLocalAudio: localButtonStyle,
      muteLocalVideo: localButtonStyle,
      switchCamera: localButtonStyle,
      fullScreen: localButtonStyle,
    },
  };

  return (
    <AgoraUIKit
      rtcProps={rtcProps}
      callbacks={callbacks}
      styleProps={styleProps}
    />
  );
}
