import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import ImageToggle from '../component/ImageToggle';
import MyNativeModule from "../NativeModules/MyNativeModule";

const FunctionProgramScreen: React.FC = () => {
    const [showMask, setShowMask] = useState(false);
    const [maskString, setMaskString] = useState("");

    const getMaskString= async () => {
        const result = await MyNativeModule.getMaskString();
        setMaskString(result);
    }

    const handlePress = () => {
        if (showMask) {
            getMaskString();
        }
        setShowMask(!showMask);
    };

    return (
        <View style={styles.container}>
            <Text>{maskString}</Text>
            <View style={{height: 20}}/>
            <ImageToggle
                originalImage={require('../assets/origin.png')}
                maskImage={require('../assets/mask.jpeg')}
                showMask={showMask}
                onPress={handlePress}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

export default FunctionProgramScreen;