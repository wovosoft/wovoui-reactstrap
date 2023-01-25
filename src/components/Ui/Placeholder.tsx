import {PlaceholderProps} from "./index";
import {getBinaryClasses, toClasses} from "../../helpers";

export default function Placeholder(
    {
        tag = "div",
        glow = false,
        wave = false,
        animation,
        size,
        col,
        variant,
        className,
        ...props
    }: PlaceholderProps
) {
    const attrs = {
        ...props,
        className: toClasses([
            "placeholder",
            className,
            getBinaryClasses({
                placeholderGlow: glow,
                placeholderWave: wave,
                placeholderAnimation: animation,
                placeholderSize: size,
                variant: variant,
                col: col,
            })
        ])
    };

    return (<div {...attrs}></div>)
}