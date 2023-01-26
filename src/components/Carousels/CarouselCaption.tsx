import {CarouselCaptionProps} from "./index";
import {toClasses} from "../../helpers";

export default function CarouselCaption(
    {
        tag = "div",
        className,
        ...props
    }: CarouselCaptionProps
) {
    const attrs = {
        ...props,
        className: toClasses([
            className,
            "carousel-caption"
        ])
    };

    return (<div {...attrs}/>)
}