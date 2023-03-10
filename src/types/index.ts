import {ClassAttributes, HTMLAttributes} from "react";

export type TextAlign = 'start' | 'center' | 'end';
export type TextVariants =
    'muted'
    | 'white-50'
    | 'black-50'
    | 'white'
    | 'opacity-75'
    | 'opacity-50'
    | 'opacity-20'
    | 'black';

export type ColorVariants = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
export type JustifyAlignment = TextAlign | "between" | "around" | "evenly";
export type ItemAlignment = TextAlign | "baseline" | "stretch";
export type AlignContent = TextAlign | "between" | "around" | "stretch";
export type Order = 0 | 1 | 2 | 3 | 4 | 5 | 'first' | 'last';
export type TooltipPlacement = 'top' | 'right' | 'bottom' | 'left' | 'start' | 'end';
export declare type VariationPlacement =
    "top-start"
    | "top-end"
    | "bottom-start"
    | "bottom-end"
    | "right-start"
    | "right-end"
    | "left-start"
    | "left-end";

export type AspectRatios = '1x1' | '4x3' | '16x9' | '21x9';
export type ResponsiveNumbers = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type ColSizes = ResponsiveNumbers | null | boolean | 'auto';
export type GutterSizes = 0 | ColSizes;

export type ColAlignments = 'start' | 'center' | 'end';
export type JustifyContentAlignments = ColAlignments | 'around' | 'between' | 'evenly';
export type ColOrders = ResponsiveNumbers | 'first' | 'last';
export type ResponsiveSizes = "sm" | "md" | "lg" | "xl" | "xxl";
export type ModalSizes = "sm" | "lg" | "xl" | null;
export type ModalFullScreen = boolean | 'sm-down' | 'md-down' | 'lg-down' | 'xl-down' | 'xxl-down'
export type VerticalAlign = 'baseline' | 'top' | 'middle' | 'bottom' | 'text-bottom' | 'text-top';
export type ButtonSizes = 'sm' | 'lg';
export type PlaceholderSizes = ButtonSizes | 'xs';
export type FeedbackTypes = 'valid' | 'invalid';
export type BadgePositions = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

export type HTMLInputTypes = "button" | "checkbox" | "color" | "date"
    | "datetime-local" | "email" | "file" | "hidden" | "image" | "month"
    | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit"
    | "tel" | "text" | "time" | "url" | "week";

export type ToastPlacements =
    'top-left' | 'top-center' | 'top-right' | 'middle-left' | 'middle-center'
    | 'middle-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
export type DropdownDirections = "right" | "left" | "top" | "bottom" | null;
export type DropdownAlignments =
    | "start"
    | "end"
    | "sm-start"
    | "sm-end"
    | "md-start"
    | "md-end"
    | "lg-start"
    | "lg-end"
    | "xl-start"
    | "xl-end"
    | "xxl-start"
    | "xxl-end";

export type ButtonTypes = "button" | "submit";

export type ClassTypes = object | string | object[] | string[] | null | undefined;
export type TagTypes = keyof HTMLElementTagNameMap | string;

export interface BasicComponent extends HTMLAttributes<HTMLElement> {
    tag?: TagTypes;
}

export type ReactComponentPropSample =
    JSX.IntrinsicAttributes
    & ClassAttributes<HTMLDivElement>
    & HTMLAttributes<HTMLDivElement>;

export type ButtonProps =
    JSX.IntrinsicAttributes
    & ClassAttributes<HTMLButtonElement>
    & HTMLAttributes<HTMLButtonElement>;