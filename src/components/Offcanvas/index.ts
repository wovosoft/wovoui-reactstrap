import {BasicComponent, ClassTypes, ColorVariants, TooltipPlacement} from "../../types";

export interface OffcanvasProps extends BasicComponent {
    placement?: TooltipPlacement;
    header?: string;
    headerClass?: ClassTypes;
    bodyClass?: ClassTypes;
    backdropClass?: ClassTypes;
    headerStyle?: ElementCSSInlineStyle;
    bodyStyle?: ElementCSSInlineStyle;
    backdropStyle?: ElementCSSInlineStyle;
    title?: string;

    backdrop?: boolean;
    enableBodyScroll?: boolean;
    bgVariant?: ColorVariants;
    textVariant?: ColorVariants;
    btnCloseWhite?: boolean;
    scrollbarPadding?: string;
    noCloseOnEsc?: boolean;
}

export interface OffcanvasBodyProps extends BasicComponent {

}

export interface OffcanvasHeaderProps extends BasicComponent {
    title?: string;
    showClose?: boolean;
    btnCloseWhite?: boolean;
}

export interface OffcanvasTitleProps extends BasicComponent{

}