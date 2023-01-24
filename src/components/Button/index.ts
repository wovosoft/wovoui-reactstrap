import {BasicComponent, ButtonSizes, ButtonTypes, ColorVariants} from "../../types";

export interface ButtonProps extends BasicComponent {
    href?: string | null;
    variant?: ColorVariants | string;
    size?: ButtonSizes | null;
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
    size?: ButtonSizes | null;
    white?: boolean;
    ariaLabel?: string;
    disabled?: boolean;
}

export interface ButtonGroupProps extends BasicComponent {
    ariaLabel?: string | null;
    size?: ButtonSizes | null;
    vertical?: boolean;
    justified?: boolean;
    role?: string;
}

export interface ButtonToolbarProps extends BasicComponent {
    role?: string;
    justified?: boolean;
    keyNav?: boolean;
}