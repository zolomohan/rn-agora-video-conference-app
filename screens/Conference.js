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

  return <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />;
}
