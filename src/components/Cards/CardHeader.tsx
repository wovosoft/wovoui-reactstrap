import {CardHeaderProps} from "./index";
import {getBinaryClasses, toClasses} from "../../helpers";

export default function CardHeader(
    {
        tag = "div",
        content = null,
        variant = null,
        borderVariant = null,
        textVariant = null,
        children,
        className,
        ...props
    }: CardHeaderProps
) {
    const attrs = {
        ...props,
        className: toClasses([
            "card-header",
            className,
            getBinaryClasses({
                bg: variant,
                text: textVariant,
                border: borderVariant
            })
        ])
    };

    return (<div {...attrs}>{children}</div>);
}