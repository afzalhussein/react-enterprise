export type stateType = {
    outerStyle: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    innerStyle: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    selectedStyle: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    taggerStyle: {
        top: number;
        width: number;
        height: number;
    };
    textStyle?: {
        left: number;
        fontSize: number;
    };
};
