import {AspectProps} from "./index";
import {toClasses} from "../../helpers";

export default function Aspect(
    {
        tag = "div",
        ratio = "16x9",
        className,
        ...props
    }: AspectProps
) {
    const styles = () => {
        if (!isNaN(Number(ratio))) {
            return {
                "--bs-aspect-ratio": ratio ? (ratio + "%") : null
            }
        }

        if (!['1x1', '4x3', '16x9', '21x9'].includes(ratio) && ratio.includes('x')) {
            let ratios = ((ratios) => (ratios[1] / ratios[0] * 100))(ratio.split("x").map(i => Number(i)));
            return {
                "--bs-aspect-ratio": ratios > 0 && ratios !== Infinity ? (ratios + "%") : null
            }
        }
    };

    const attrs = {
        ...props,
        style: styles(),
        className: toClasses([
            "ratio", {
                ["ratio-" + ratio]: ['1x1', '4x3', '16x9', '21x9'].includes(ratio)
            }
        ])
    };

    // @ts-ignore
    return (<div {...attrs}/>)
}