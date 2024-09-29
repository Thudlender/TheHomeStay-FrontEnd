import { useLottie } from 'lottie-react'
const Loading = () => {
    const defaultOption = {
        loop: true,
        auto: true,
        animationData: animation.default,
    };
    const style = {
        height: 300,
    };

    return (
        <useLottie
        animationData={animation}
        defaultOption={defaultOption}
        style={style}
        />
    );
};

export default Loading;
