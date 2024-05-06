import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

interface ImageToggleProps {
  originalImage: any; // 修改为你的原始图片路径的类型
  maskImage: any; // 修改为你的遮罩图片路径的类型
  showMask: boolean;
  onPress: () => void;
}

const ImageToggle: React.FC<ImageToggleProps> = ({ originalImage, maskImage, showMask, onPress }) => {

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <FastImage
        style={styles.image}
        source={showMask ? maskImage : originalImage}
        resizeMode={FastImage.resizeMode.cover}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    borderWidth: 1,
    borderColor: 'gray',
  },
});

export default ImageToggle;
