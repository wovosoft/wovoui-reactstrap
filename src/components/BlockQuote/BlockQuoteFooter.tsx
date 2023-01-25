import {BlockQuoteFooterProps} from "./index";
import {toClasses} from "../../helpers";

export default function BlockQuoteFooter(
    {
        className,
        children,
        ...props
    }: BlockQuoteFooterProps
) {
    const attrs = {
        ...props,
        children,
        className: toClasses([
            className,
            "blockquote-footer", {}
        ])
    };

    return (<footer {...attrs}/>)
}