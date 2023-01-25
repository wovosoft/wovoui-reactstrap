import {BasicComponent, ColorVariants} from "../../types";

export interface AlertProps extends BasicComponent {
    variant?: ColorVariants;
    dismissible?: boolean;
    timeout?: number;
    timeoutStep?: number;
    closeBtnWhite?: boolean;
    icon?: string | null;
    heading?: string | null;
    // lazy?: boolean | null;
}

export interface AlertHeadingProps extends BasicComponent {

}

export interface AlertLinkProps extends BasicComponent {
    href?: string;
}

export interface AlertActions {
    show: () => any;
    hide: () => any,
    toggle: () => any
}