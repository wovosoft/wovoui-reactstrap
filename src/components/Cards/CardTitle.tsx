import {CardTitleProps} from "./index";
import {toClasses} from "../../helpers";

export default function CardTitle(
    {
        tag = "div",
        children,
        ...props
    }: CardTitleProps
) {
    const attrs = {
        ...props,
        className: toClasses([
            props.className,
            "card-title"
        ])
    };

    return <h4 {...attrs}>{children}</h4>
}