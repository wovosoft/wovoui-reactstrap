import {
    BasicComponent,
    ButtonSizes, ClassTypes,
    ColorVariants,
    FeedbackTypes,
    HTMLInputTypes,
    ResponsiveNumbers, TagTypes, TextAlign
} from "../../types";
import {HTMLInputTypeAttribute, InputHTMLAttributes, LabelHTMLAttributes} from "react";

export interface CalendarProps extends BasicComponent {
    format?: string;
    weekdayType?: string;
    monthSelectorEnabled?: boolean;
    activeClass?: string;
}

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    isSwitch?: boolean; //switch not allowed in reactjs, its reserved keyword
    button?: boolean;
    inline?: boolean;
    reverse?: boolean;
    disabled?: boolean;
    id?: string;
    checkBy?: Function
}

export interface CheckboxGroupProps extends BasicComponent {
    options?: any;
    textField?: string;
    valueField?: string;
    inline?: boolean;
    isSwitch?: boolean;
    reverse?: boolean;
}

export interface DatepickerProps extends BasicComponent {
    size?: ButtonSizes;
    format?: string;
}

export interface FeedbackProps extends BasicComponent {
    type?: FeedbackTypes;
}

export interface FormGroupProps extends BasicComponent {
    floating?: boolean;
    label?: string;
    labelFor?: string;
    horizontal?: boolean;
    labelSm?: ResponsiveNumbers;
    labelMd?: ResponsiveNumbers;
    labelLg?: ResponsiveNumbers;
    labelXl?: ResponsiveNumbers;
    contentSm?: ResponsiveNumbers;
    contentMd?: ResponsiveNumbers;
    contentLg?: ResponsiveNumbers;
    contentXl?: ResponsiveNumbers;
    noMarginBottom?: boolean;
    //form control feedback messages
    validFeedback?: string;
    invalidFeedback?: string;
}

export interface FormLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    horizontal?: boolean;
    sm?: ResponsiveNumbers;
    md?: ResponsiveNumbers;
    lg?: ResponsiveNumbers;
    xl?: ResponsiveNumbers;
}


export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    /**
     * size is already in input element
     */
    controlSize?: ButtonSizes | null;
    plain?: boolean;
    state?: boolean | null;
}

export interface InputGroupProps extends BasicComponent {
    size?: ButtonSizes;
    prepend?: any;
    append?: any;
    noWrap?: boolean;
}

export interface InputGroupTextProps extends BasicComponent {

}

export interface MultiselectProps extends BasicComponent {
    getItems?: Function;
    searchSize?: ButtonSizes;
    toggleSize?: ButtonSizes;
    searchPlaceholder?: string;
    loading?: boolean;
    resetTitle?: string;
    disableReset?: boolean;
}

export interface RadioProps extends BasicComponent {
    name?: string;
    id?: string;
    wrapperAttrs?: any;
    labelAttrs?: any;
    defaultChecked?: boolean;
}

export interface RadioGroupProps extends BasicComponent {
    options: any[],
}

export interface RangeProps extends InputHTMLAttributes<HTMLInputElement> {

}

export interface RatingProps extends RangeProps {

}

export interface SelectProps extends BasicComponent {
    firstItem?: any;
    lastItem?: any;
    multiple?: boolean;
    size?: ButtonSizes;
    options?: any[];
    valueField?: string;
    textField?: string;
    disabledField?: string;
    labelField?: string;
}

export interface SpinButtonProps extends BasicComponent {
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    buttonVariant?: ColorVariants;
    size?: ButtonSizes;
    formatter?: Function;
    inline?: boolean;
    vertical?: boolean;
}

export interface TagsProps extends BasicComponent {
    role?: string;
    tabindex?: number | string;
    placeholder?: string;
    removeOnDelete?: boolean;
    separator?: string;
    tagPills?: boolean;
    tagVariant?: ColorVariants;
    addButtonSize?: ButtonSizes;
    addButtonText?: string;
    noAddOnEnter?: boolean;
}

export interface TextareaProps extends BasicComponent {
    size?: ButtonSizes;
}

export interface TypeheadProps extends BasicComponent {
    apiUrl?: string;
    queryKey?: string;
    getItems?: Function;
    menuHeight?: string;
    searchSize?: ButtonSizes;
    searchClass?: ClassTypes;
    toggleSize?: ButtonSizes;
    toggleClass?: ClassTypes;
    menuClass?: ClassTypes;
    menuDark?: boolean


    menuTag?: TagTypes;

    searchPlaceholder?: string;
    variant?: ColorVariants;
    textAlign?: TextAlign;
    getLabel?: Function;
    getOption?: Function;
    noCloseOnOutsideClick?: boolean;

    noCloseOnItemSelect?: boolean;

    noCloseOnEscPressed?: boolean;
    clearItemsOnSelect?: boolean;
    preload?: boolean;
}