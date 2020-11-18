import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Share } from 'react-native';
import AgoraUIKit from 'agora-rn-uikit';
import { useNavigation } from '@react-navigation/native';

export default function Conference(props) {
  const onShare = async () => {
    try {
      await Share.share({ message: props.route.params.channel });
    } catch (error) {
      console.log(error.message);
    }
  };

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
    <>
      <AgoraUIKit
        rtcProps={rtcProps}
        callbacks={callbacks}
        styleProps={styleProps}
      />
      <TouchableOpacity style={styles.shareButton} onPress={onShare}>
        <Text style={styles.shareButtonText}>Share</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  shareButton: {
    right: 0,
    width: 80,
    height: 40,
    margin: 25,
    borderRadius: 8,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#78b0ff',
  },
  shareButtonText: {
    fontSize: 16,
  },
});
