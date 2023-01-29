import {RangeProps} from "./index";
import {toClasses} from "../../helpers";

export default function Range(
    {
        type,   //skipping from props
        className,
        ...props
    }: RangeProps
) {
    const attrs = {
        ...props,
        className: toClasses([
            className,
            "form-range"
        ]),
    };

    return <input type="range" {...attrs}/>
}
