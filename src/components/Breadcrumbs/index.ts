import {BasicComponent} from "../../types";

export interface BreadcrumbProps extends BasicComponent {
    items?: any[];
    divider?: string;
}

export interface BreadcrumbItemProps extends BasicComponent {
    active?: boolean;
    activeClass?: string;
    append?: boolean;
    ariaCurrent?: string;
    disabled?: boolean;
    exact?: boolean;
    rel?: string;
    replace?: boolean;
    target?: string;
    to?: object | string;
    href?: string;
}