import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImageToggle from '../component/ImageToggle';
import { Provider, observer } from 'mobx-react';
import maskStore from '../stores/MaskStore';
import MyNativeModule from '../NativeModules/MyNativeModule';

interface ClassProgramScreenProps {}
interface ClassProgramScreenState {}


@observer
class ClassProgramScreen extends Component<ClassProgramScreenProps, ClassProgramScreenState> {
    async getMaskString() {
        const result = await MyNativeModule.getMaskString();
        maskStore.setMaskString(result);
    }

    handlePress = () => {
        if (maskStore.isShowMask) {
            this.getMaskString();
        }
        maskStore.toggleShowMask();
    }

    render(): React.ReactNode {
        return (
            <View style={styles.container}>
                <Text>{maskStore.maskString}</Text>
                <View style={{height: 20}}/>
                <ImageToggle
                    originalImage={require('../assets/origin.png')}
                    maskImage={require('../assets/mask.jpeg')}
                    showMask={maskStore.isShowMask}
                    onPress={this.handlePress}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

export default ClassProgramScreen;