import {CarouselIndicatorProps} from "./index";
import {toClasses} from "../../helpers";

export default function CarouselIndicators(
    {
        tag = "div",
        className,
        ...props
    }: CarouselIndicatorProps
) {
    const attrs = {
        ...props,
        className: toClasses([
            className,
            "carousel-indicators"
        ])
    };

    return <div {...attrs}/>
}