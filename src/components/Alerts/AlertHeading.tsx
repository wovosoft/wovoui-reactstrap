import {AlertHeadingProps} from "./index";
import {toClasses} from "../../helpers";

export default function AlertHeading(
    {
        tag = "h4",
        className,
        ...props
    }: AlertHeadingProps
) {
    const attrs = {
        ...props,
        className: toClasses([
            className,
            "alert-heading"
        ])
    };

    return (<h4 {...attrs}/>)
}