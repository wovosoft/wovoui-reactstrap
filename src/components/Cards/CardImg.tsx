/*
import {defineComponent, h} from "vue";
import {makeBoolean, makeString} from "../../composables/useProps";

export default defineComponent({
    name: "CardImg",
    props: {
        src: makeString(),
        alt: makeString(),
        overlay=false,
        bottom=false,
        end=false,
        left=false,
        right=false,
        start=false,
        top: makeBoolean(false)
    },
    setup(props) {
        return () => h("img", {
                src: src,
                alt: alt,
                class: {
                    "card-img": overlay,
                    "card-img-top": top,
                    "card-img-bottom": bottom,
                    "card-img-left": left || start,
                    "card-img-right": right || end,
                }
            }
        )
    }
})
 */

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