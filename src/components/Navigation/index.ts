import {BasicComponent, ButtonSizes, ColorVariants, ResponsiveSizes, TagTypes} from "../../types";
import {HTMLAttributeAnchorTarget} from "react";
import {AccordionProps} from "../Accordions";
import {DropdownProps} from "../Dropdowns";

export interface LinkProps extends BasicComponent {
    href?: string;
    target?: HTMLAttributeAnchorTarget;
}

export type MenuItemType = {
    title?: string,
    text?: string,
    link?: string | object,
    children?: MenuItemType[]
};

export interface MenuProps extends BasicComponent, AccordionProps {
    items: MenuItemType[],
    child?: boolean;
    ps?: number;
}

export interface NavProps extends BasicComponent {
    align?: string;
    vertical?: boolean;
    pills?: boolean;
    fill?: boolean;
    justified?: boolean;
    small?: boolean;
    tabs?: boolean;
    navs?: boolean;
}

export interface NavbarProps extends BasicComponent {
    brand?: string;
    brandUrl?: string;
    fluid?: boolean;
    size?: ResponsiveSizes;
    toggleEnabled?: boolean;
    variant?: 'dark' | 'light';
    bgVariant?: ColorVariants;
    fixed?: 'top' | 'bottom';
    sticky?: 'top' | 'bottom'
    expandsOn?: ResponsiveSizes | ResponsiveSizes[];
}

export interface NavbarBrandProps extends BasicComponent {
    href?: string;
}

export interface NavbarNavProps extends NavProps {
    scrollHeight?: string | number;
    scrollable?: boolean;
}

export interface NavbarTogglerProps extends BasicComponent {

}

export interface NavItemProps extends BasicComponent {
    linkTag?: TagTypes;
    ariaCurrent?: string;
    href?: string;
    to?: any;
    target?: HTMLAttributeAnchorTarget | string;
    active?: boolean;
    disabled?: boolean;
}

export interface NavItemDropdownProps extends DropdownProps {
    isNav?: boolean;
    tag?: string;
}

export interface NavLinkProps extends BasicComponent {
    ariaCurrent?: string;
    active?: boolean;
    disabled?: boolean;
    href?: string;
    target?: string;
    tag?: TagTypes;
    to?: any;
}

export interface PageItemProps extends BasicComponent {
    linkTag?: TagTypes;
    href?: string;
    prev?: boolean;
    next?: boolean;
    ariaLabel?: string;
    active?: boolean;
    disabled?: boolean;
}

export interface PageLinkProps extends BasicComponent {
    href?: string;
    prev?: boolean;
    next?: boolean;
    prevText?: string;
    nextText?: string;
    ariaLabel?: string;
}

export interface PaginationProps extends BasicComponent {
    totalRows?: number;
    perPage?: number;
    currentPage?: number;

    size?: ButtonSizes;
    align?: 'center' | 'end' | 'right' | null;

    firstColPageCount?: number;
    centerColPageCount?: number;
    lastColPageCount?: number;
}

export interface MenuItem {
    text: string;
    to?: object;
    href?: string;
    children?: MenuItem[];
    icon?: string;
    handler?: (item: MenuItem, index: number) => void;
}

export interface PanelMenuProps extends BasicComponent {
    items: MenuItem[],
    triggerVariant?: ColorVariants;
    menuVariant?: ColorVariants;
    itemClickPrevent?: boolean;
}