import {BasicComponent, ColorVariants} from "../../types";

export interface AlertProps extends BasicComponent {
    variant?: ColorVariants;
    dismissible?: boolean;
    timeout?: number;
    timeoutStep?: number;
    show?: boolean;
    closeBtnWhite?: boolean;
    icon?: string;
    heading?: string;
}

export interface AlertHeadingProps extends BasicComponent {

}

export interface AlertLinkProps extends BasicComponent {
    href?: string;
}