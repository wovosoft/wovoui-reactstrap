import {RowProps} from "./index";
import {toClasses} from "../../helpers";

export default function Row(
    {
        tag = "div",
        cols = null,
        sm = null,
        md = null,
        lg = null,
        xl = null,
        alignItems = null,
        justifyContent = null,
        g = null,
        gSm = null,
        gMd = null,
        gLg = null,
        gXl = null,
        //gutters
        gx = null,
        gy = null,
        children = null,
        ...props
    }: RowProps
) {
    const attrs = {
        ...props,
        className: toClasses(["row", props.className, {
            ["row-cols-" + cols]: cols,
            ["row-cols-sm-" + sm]: sm,
            ["row-cols-md-" + md]: md,
            ["row-cols-lg-" + lg]: lg,
            ["row-cols-xl-" + xl]: xl,
            ["align-items-" + alignItems]: alignItems,
            ["justify-content-" + justifyContent]: justifyContent,
            ["g-" + g]: g,
            ["g-sm-" + gSm]: gSm,
            ["g-md-" + gMd]: gMd,
            ["g-lg-" + gLg]: gLg,
            ["g-xl-" + gXl]: gXl,
            ["gx-" + gx]: gx,
            ["gy-" + gy]: gy,
        }])
    }

    return <div {...attrs}>{children}</div>;
}