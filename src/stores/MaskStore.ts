import { observable, action, makeObservable } from "mobx";

class MaskStore {
    constructor() {
        makeObservable(this, {
            isShowMask: observable,
            maskString: observable,
            setMaskString: action,
            toggleShowMask: action
        });
    }

    isShowMask: boolean = false;

    maskString: string = "";

    setMaskString = (str: string) => {
        this.maskString = str;
    }

    toggleShowMask = () => {
        this.isShowMask = !this.isShowMask;
    };
}

const maskStore = new MaskStore();
export default maskStore;