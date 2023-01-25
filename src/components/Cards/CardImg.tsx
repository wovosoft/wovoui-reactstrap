import {CardImgProps} from "./index";
import {toClasses} from "../../helpers";

export default function CardImg(
    {
        overlay = false,
        bottom = false,
        end = false,
        left = false,
        right = false,
        start = false,
        top = false,
        className,
        children,
        ...props
    }: CardImgProps
) {
    const attrs = {
        ...props,
        className: toClasses([
            className,
            {
                "card-img": overlay,
                "card-img-top": top,
                "card-img-bottom": bottom,
                "card-img-left": left || start,
                "card-img-right": right || end,
            }
        ])
    };

    return <img {...attrs}/>
}