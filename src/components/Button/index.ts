import {BasicComponent, ButtonSizes, ButtonTypes, ColorVariants} from "../index";

export interface ButtonProps extends BasicComponent {
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
}

export interface ButtonCloseProps extends BasicComponent {
    size?: ButtonSizes;
    white?: boolean;
    ariaLabel?: string;
    disabled?: boolean;
}

export interface ButtonGroupProps extends BasicComponent {
    ariaLabel?: string;
    size?: ButtonSizes;
    vertical?: boolean;
    justified?: boolean;
    role?: string;
}

export interface ButtonToolbarProps extends BasicComponent {
    role?: string;
    justified?: boolean;
}
