import {CardSubTitleProps} from "./index";
import {getBinaryClasses, toClasses} from "../../helpers";

export default function CardSubTitle(
    {
        tag = "h6",
        textVariant = "muted",
        children,
        className,
        ...props
    }: CardSubTitleProps
) {
    const attrs = {
        ...props,
        className: toClasses([
            className,
            "card-subtitle",
            getBinaryClasses({
                text: textVariant,
            })
        ])
    };

    return <h6 {...attrs}>{children}</h6>
}