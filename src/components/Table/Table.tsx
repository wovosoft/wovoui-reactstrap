import {TableProps} from "./index";
import {toClasses} from "../../helpers";

export default function Table(
    {
        variant = null,
        active = false,
        align = null,
        /**
         * When set to true, the table becomes responsive. Wraps in .table-responsive
         */
        responsive = false,

        /**
         * Makes table stripped
         */
        striped = false,

        /**
         * Makes table hoverable
         */
        hover = false,

        /**
         * Makes table bordered
         */
        bordered = false,

        /**
         * Sets table border variant
         */
        borderVariant = null,

        /**
         * Removes table borders
         */
        borderless = false,

        /**
         * Makes table shrink, smaller
         */
        small = false,

        /**
         * Sets table caption
         */
        caption = null,

        /**
         * Places table caption at top
         */
        captionTop = false,
        children,
        ...props
    }: TableProps
) {
    let wrapperClasses = toClasses({
        "table-responsive": (responsive === true),
        ["table-responsive-" + responsive]: (typeof responsive === "string" && responsive)
    });


    const attrs = {
        ...props,
        className: toClasses([
            props.className,
            "table",
            {
                ["table-" + variant]: variant,
                "table-striped": striped === true,
                "table-striped-columns": striped === 'columns',
                "table-hover": hover,
                "table-active": active,
                "table-bordered": bordered,
                ["border-" + borderVariant]: !!borderVariant,
                "table-borderless": borderless,
                "table-sm": small,
                ["align-" + align]: !!align,
                "caption-top": captionTop,
            }
        ])
    }

    const getCaption = () => {
        if (caption) {
            return <caption>{caption}</caption>
        }
    };

    if (responsive) {
        return <div className={wrapperClasses}>
            <table {...attrs}>
                {children}
                {getCaption()}
            </table>
        </div>
    }

    return <table {...attrs}>
        {children}
        {getCaption()}
    </table>
}