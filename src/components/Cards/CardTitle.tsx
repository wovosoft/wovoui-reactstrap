import {CardTitleProps} from "./index";
import {toClasses} from "../../helpers";

export default function CardTitle(
    {
        tag = "div",
        content,
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