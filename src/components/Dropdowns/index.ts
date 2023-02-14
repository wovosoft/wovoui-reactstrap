import {
    BasicComponent,
    ButtonSizes,
    ClassTypes,
    ColorVariants,
    DropdownAlignments,
    DropdownDirections, TagTypes
} from "../../types";
import {ButtonHTMLAttributes} from "react";
import * as PopperJS from "@popperjs/core";
import {Placement} from "@popperjs/core";

export interface DropdownProps extends BasicComponent {
    menuTag?: keyof HTMLElementTagNameMap,
    toggleTag?: keyof HTMLElementTagNameMap,
    size?: ButtonSizes | null,
    text?: string | null,
    variant?: ColorVariants,
    splitVariant?: ColorVariants,
    block?: boolean,
    disabled?: boolean,
    /**
     * left,right,up, down=null (default)
     */
    direction?: PopperJS.Placement;
    align?: DropdownAlignments,
    menuDark?: boolean,
    menuClass?: ClassTypes;

    split?: boolean,
    isNav?: boolean,
    disableInnerClicks?: boolean,
}

export interface DropdownButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    active?: boolean;
}

export interface DropdownDividerProps {

}

export interface DropdownGroupProps extends BasicComponent {
    header?: string;
    headerTag?: TagTypes;
    headerWrapper?: TagTypes;
}

export interface DropdownHeaderProps extends BasicComponent {
    wrapper?: TagTypes;
    tag?: TagTypes;
}

export interface DropdownItemProps extends BasicComponent {
    href?: string;
    to?: string | object;
    noItemTag?: boolean;
    active?: boolean;
    disabled?: boolean;
    isText?: boolean;
    itemTag?: TagTypes;
}

export interface DropdownMenuProps extends BasicComponent {
    dark?: boolean;
    show?: boolean;
    placement?: Placement;
}