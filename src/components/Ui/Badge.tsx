import {BadgeProps} from "./index";
import {toClasses} from "../../helpers";

export default function Badge(
    {
        /**
         * Wrapper Tag
         * @default span
         */
        tag = "span",

        /**
         * Color Variants
         * Uses Bootstrap supported text-bg-*variant classes
         * @link https://getbootstrap.com/docs/5.2/components/badge/#background-colors
         */
        variant = "secondary",

        /**
         * Text Color Variants
         * Uses Bootstrap supported text-*variant classes
         * @link https://getbootstrap.com/docs/5.2/utilities/colors/#how-it-works
         */
        textVariant = null,

        /**
         * Background Color Variants
         * Uses Bootstrap Supported bg-*variant classes
         * @link https://getbootstrap.com/docs/5.2/utilities/background/
         */
        bgVariant = null,

        /**
         * Generates Pill Badges
         * @default false
         * @link https://getbootstrap.com/docs/5.2/components/badge/#pill-badges
         */
        pill = false,

        /**
         * When provided, the badge will be an anchor link
         */
        href = null,

        /**
         * Sets position of the badge wrt. its parent,
         * parent element should have positioned relative
         * @supported 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
         * @link https://getbootstrap.com/docs/5.2/components/badge/#positioned
         */
        position = null,
        className,
        ...props
    }: BadgeProps
) {
    const attrs = {
        ...props,
        className: toClasses([
            className,
            "badge",
            {
                ['bg-' + bgVariant]: !!bgVariant,
                ['text-' + textVariant]: !!textVariant,
                //when none of bgVariant or textVariant is provided variant will be used automatically
                ['text-bg-' + variant]: (bgVariant || textVariant) ? false : variant,
                "rounded-pill": pill,
                "text-decoration-none": href,
                "position-absolute translate-middle": position,
                "start-100 top-0": position === "top-right",
                "start-0 top-0": position === "top-left",
                "start-0 top-100": position === "bottom-left",
                "start-100 top-100": position === "bottom-right",
            }
        ])
    };

    return <span {...attrs}/>
}

