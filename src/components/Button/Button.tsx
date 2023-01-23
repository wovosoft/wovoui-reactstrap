import type {
    ButtonSizes,
    ButtonTypes,
    ColorVariants
} from "../../types";

import {toClasses} from "../../helpers";

type ButtonProps = {
    tag?: string;
    href?: string;
    variant?: ColorVariants | string;
    size?: ButtonSizes;
    type?: ButtonTypes;
    outline?: boolean;
    block?: boolean;
    pill?: boolean;
    squared?: boolean;
    disabled?: boolean;
    pressed?: boolean | null;
    noWrap?: boolean;
    link?: boolean;
    active?: boolean;
    activeClass?: string;
    noStyle?: boolean;
    children?: any;
};


export default function Button(props: ButtonProps) {
    const {
        tag = "button",
        href = null,
        variant = 'secondary',
        size = null,
        type = 'button',
        outline = false,
        block = false,
        pill = false,
        squared = false,
        disabled = false,
        pressed = false,
        noWrap = false,
        link = false,
        active = false,
        activeClass = "active",
        noStyle = false,
    } = props;

    let attrs = {
        className: toClasses(!noStyle ? ["btn", {
            disabled: disabled && tag === "a",
            ["btn-" + (outline ? "outline-" : "") + variant]: !!variant,
            ["btn-" + size]: !!size,
            "w-100": block,
            "rounded-pill": pill,
            "rounded-0": squared,
            [activeClass]: pressed || active,
            "text-nowrap": noWrap,
        }] : [])
    };

    return <button  {...attrs}>
        {props.children}
    </button>
}
