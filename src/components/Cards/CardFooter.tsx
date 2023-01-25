import {CardFooterProps} from "./index";
import {getBinaryClasses, toClasses} from "../../helpers";

export default function CardFooter(
    {
        tag = "div",
        content,
        variant,
        borderVariant,
        textVariant,
        className,
        children,
        ...props
    }: CardFooterProps
) {
    const attrs = {
        ...props,
        className: toClasses([
            className,
            "card-footer",
            getBinaryClasses({
                bg: variant,
                text: textVariant,
                border: borderVariant
            })
        ])
    };

    return (<div {...attrs}>{children}</div>)
}