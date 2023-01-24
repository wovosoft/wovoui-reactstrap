import {BasicComponent} from "../index";

export interface AccordionProps extends BasicComponent {
    flush?: boolean;
    alwaysOpen?: boolean;
}

export interface AccordionBodyProps extends BasicComponent {

}

export interface AccordionHeaderProps extends BasicComponent {
    toggleTag?: keyof HTMLElementTagNameMap | string;
}

export interface AccordionItemProps extends BasicComponent {
    header?: string;
    bodyClass?: string | object | string[] | object[]
}

export interface CollapseProps extends BasicComponent {
    isAccordion?: boolean;
    visible?: boolean;
    isNav?: boolean;
    horizontal?: boolean;
    //must be set when horizontal is true
    //@check the note at https://getbootstrap.com/docs/5.2/components/collapse/#horizontal
    width?: number | string;
}