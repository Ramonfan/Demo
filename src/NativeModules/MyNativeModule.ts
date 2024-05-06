import { NativeModules } from "react-native";

interface MyNativeModuleType {
    getMaskString(): Promise<string>;
}

const { MyNativeModule } = NativeModules;

export default MyNativeModule as MyNativeModuleType;