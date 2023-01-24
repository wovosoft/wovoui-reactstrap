import {BasicComponent, ClassTypes, ColorVariants, TagTypes, ToastPlacements, VariationPlacement} from "../../types";

export interface PopoverProps extends BasicComponent {
    //specific id
    target: string;
    header?: string;
    //https://popper.js.org/docs/v2/constructors/#options
    placement?: string;
    triggers?: keyof HTMLElementEventMap
}

export interface ToastProps extends BasicComponent {
    /**
     * Note: Currently when lazy is set to true,
     * as soon as visible state is set to false,
     * the element unmounts immediately.
     *
     * TODO: needs further investigation if this approach is okay or not.
     */
    lazy?: boolean;

    /**
     * Visibility State
     */
    show?: boolean;

    /**
     * Fade Class
     */
    fade?: boolean;

    /**
     * Visibility State
     */
    modelValue?: boolean;

    /**
     * Toast Header
     */
    header?: string;

    /**
     * Toggling body
     */
    noBody?: boolean;

    /**
     * Toggling close button
     */
    noCloseButton?: boolean;

    /**
     * Toast Body Classes
     */
    bodyClass?: ClassTypes;

    /**
     * Color Variants
     */
    variant?: ColorVariants;

    /**
     * teleporting to a different location
     *
     */
    to?: any;

    /**
     * @description props {to} should be used in lieu of container props
     * @deprecated will be removed in next version
     */
    container?: any;

    /**
     * Auto Hide timeout value in seconds.
     * When time value is set to 0|null|undefined,
     * then toast remains active forever.
     *
     * @default 3
     */
    timeout?: number;
}

export interface ToastBodyProps extends BasicComponent {

}

export interface ToastContainerProps extends BasicComponent {
    placement?: ToastPlacements;
    container?: TagTypes;
}

export interface TooltipProps extends BasicComponent {
    target: string;  //should be id
    content?: string;
    placement?: VariationPlacement;
    opensOn?: keyof GlobalEventHandlersEventMap;
    closesOn?: keyof GlobalEventHandlersEventMap;
}