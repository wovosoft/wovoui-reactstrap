import {BlockQuoteProps} from "./index";
import {toClasses} from "../../helpers";
import BlockQuoteFooter from "./BlockQuoteFooter";

export default function BlockQuote(
    {
        footer,
        footerClass,
        className,
        children,
        ...props
    }: BlockQuoteProps
) {
    const attrs = {
        ...props,
        className: toClasses([
            className,
            "blockquote"
        ])
    };

    return (<blockquote {...attrs}>
        {children}
        {footer && <BlockQuoteFooter children={footer} className={toClasses(footerClass)}/>}
    </blockquote>)
}