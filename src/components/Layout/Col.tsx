import {ColProps} from "./index";
import {toClasses, isBoolean} from "../../helpers";

export default function Col(
    {
        tag = "div",
        col = null,
        sm = null,
        md = null,
        lg = null,
        xl = null,
        alignSelf = null,
        justifyContent = null,
        order = null,
        offsetSm = null,
        offsetMd = null,
        offsetLg = null,
        offsetXl = null,
        gx = null,
        gy = null,
        children = null,
        className,
        ...props
    }: ColProps
) {

    const attrs = {
        ...props,
        className: toClasses([
            className,
            {
                "col": !(sm || md || lg || xl || col),
                ["col-" + col]: col,
                ["col-sm-" + sm]: sm && !isBoolean(sm),
                ["col-md-" + md]: md && !isBoolean(md),
                ["col-lg-" + lg]: lg && !isBoolean(lg),
                ["col-xl-" + xl]: xl && !isBoolean(xl),
                "col-sm": sm && isBoolean(sm),
                "col-md": md && isBoolean(md),
                "col-lg": lg && isBoolean(lg),
                "col-xl": xl && isBoolean(xl),
                ["align-self-" + alignSelf]: alignSelf,
                ["justify-content-" + justifyContent]: justifyContent,
                ["order-" + order]: order,
                ["offset-sm-" + offsetSm]: offsetSm,
                ["offset-md-" + offsetMd]: offsetMd,
                ["offset-lg-" + offsetLg]: offsetLg,
                ["offset-xl-" + offsetXl]: offsetXl,
                ["gx-" + gx]: gx,
                ["gy-" + gy]: gy,
            }
        ])
    }

    return <div {...attrs}>{children}</div>;
}