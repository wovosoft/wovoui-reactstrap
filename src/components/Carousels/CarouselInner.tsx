import {CarouselInnerProps} from "./index";
import {toClasses} from "../../helpers";

export default function CarouselInner(
    {
        tag = "div",
        className,
        ...props
    }: CarouselInnerProps
) {
    const attrs = {
        ...props,
        className: toClasses([
            "carousel-inner",
            className
        ])
    };

    return (<div {...attrs}/>)
}