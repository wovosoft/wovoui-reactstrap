import {BasicComponent, ColorVariants, ResponsiveSizes} from "../../types";

export interface ListGroupProps extends BasicComponent {
    flush?: boolean;
    numbered?: boolean;
    horizontal?: boolean | ResponsiveSizes;
}

export interface ListGroupItemProps extends BasicComponent {
    active?: boolean;
    disabled?: boolean;
    href?: string | null;
    to?: any;
    button?: boolean;
    variant?: ColorVariants | null;
}