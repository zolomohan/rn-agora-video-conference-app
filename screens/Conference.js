import React from 'react';
import AgoraUIKit from 'agora-rn-uikit';

export default function Conference(props) {
  const rtcProps = {
    appId: 'c7e742d5df23478285a9dc4f4ff62407',
    channel: props.route.params.channel,
  };
  return <AgoraUIKit rtcProps={rtcProps} />;
}
