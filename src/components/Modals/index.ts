import {
    BasicComponent,
    ButtonSizes,
    ClassTypes,
    ColorVariants,
    ModalFullScreen,
    ModalSizes,
    TagTypes
} from "../../types";
import {AllHTMLAttributes, HTMLAttributes} from "react";
import {ButtonCloseProps, ButtonProps} from "../Button";

export interface ModalProps extends BasicComponent {
    id?: string;
    animation?: string;
    shrink?: boolean;
    loading?: boolean;
    //null refers to initial value
    modelValue?: boolean;
    noClose?: boolean;
    closeBtnWhite?: boolean;
    noBody?: boolean;
    lazy?: boolean;
    bodyClass?: ClassTypes;
    bodyVariant?: ColorVariants;
    contentClass?: ClassTypes;

    title?: string;
    titleTag?: TagTypes;
    titleClass?: ClassTypes;
    titleAttrs?: keyof AllHTMLAttributes<any>;

    //header props
    noHeader?: boolean;
    header?: string;
    headerTag?: TagTypes;
    headerClass?: ClassTypes;
    headerAttrs?: keyof AllHTMLAttributes<any>;
    headerVariant?: ColorVariants;

    noFooter?: boolean;
    footerClass?: ClassTypes;
    footerVariant?: ColorVariants;

    //buttons
    okTitle?: string;
    closeTitle?: string;
    okButtonOptions?: ButtonProps;
    closeButtonOptions?: ButtonCloseProps;
    noOkButton?: boolean;
    noCloseButton?: boolean;
    noCloseOnBackdrop?: boolean;
    noCloseOnEsc?: boolean;

    static?: boolean;
    noBackdrop?: boolean;
    buttonSize?: ButtonSizes;

    //modal dialog props
    scrollable?: boolean;
    centered?: boolean;
    size?: ModalSizes;
    fullscreen?: ModalFullScreen;
}

export interface ModalBodyProps extends BasicComponent {
    variant?: ColorVariants;
}

export interface ModalDialogProps extends BasicComponent {
    scrollable?: boolean;
    centered?: boolean;
    size?: ModalSizes;
    fullscreen?: ModalFullScreen;
}

export interface ModalFooterProps extends BasicComponent {
    variant?: ColorVariants;
    shrink?: boolean;
}

export interface ModalHeaderProps extends BasicComponent {
    variant?: ColorVariants;
    shrink?: boolean;
}

export interface ModalTitleProps extends BasicComponent{

}