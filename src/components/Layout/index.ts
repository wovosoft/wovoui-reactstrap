import {
    AlignContent,
    BasicComponent, ButtonSizes, ClassTypes,
    ColAlignments,
    ColOrders, ColorVariants,
    ColSizes, ItemAlignment, JustifyAlignment,
    JustifyContentAlignments, Order, ResponsiveNumbers,
    ResponsiveSizes
} from "../../types";
import {HTMLAttributes} from "react";

export interface ColProps extends BasicComponent {
    col?: ColSizes;
    sm?: ColSizes;
    md?: ColSizes;
    lg?: ColSizes;
    xl?: ColSizes;
    alignSelf?: ColAlignments | null;
    justifyContent?: JustifyContentAlignments | null;
    order?: ColOrders | null;
    offsetSm?: ResponsiveNumbers | null;
    offsetMd?: ResponsiveNumbers | null;
    offsetLg?: ResponsiveNumbers | null;
    offsetXl?: ResponsiveNumbers | null;
    //gutters
    gx?: ResponsiveNumbers | null;
    gy?: ResponsiveNumbers | null;
}

export interface ColumnProps extends BasicComponent {
    field?: string;
    label?: string;
    visible?: boolean;
    /**
     * When true, it shows default CRUD Buttons
     */
    actions?: boolean;
    actionsSize?: ButtonSizes;
    viewVariant?: ColorVariants;
    editVariant?: ColorVariants;
    destroyVariant?: ColorVariants;
    actionsAlignment?: 'start' | 'center' | 'end';

    /**
     * classes prop for th and td.
     */
    thClass?: ClassTypes;
    tdClass?: ClassTypes;
    formatter?: Function;
}

export interface ContainerProps extends BasicComponent {
    fluid?: boolean;
    size?: ResponsiveSizes | null;
    children?: any;
}

export interface FlexProps extends BasicComponent {

    /**
     * When it is set to false the default d-flex class won't be added.
     * By default, it is true
     */
    pure?: boolean;

    /**
     * Responsive Flex classes sm|md|lg|xl|xxl
     */
    flex?: boolean | ResponsiveSizes | ResponsiveSizes[];

    /**
     * Responsive Inline Flex classes sm|md|lg|xl|xxl
     */
    inline?: boolean | ResponsiveSizes | ResponsiveSizes[];

    /**
     * Horizontal (Row) directions
     * ltr = Left to Right
     * rtl = Right to Bottom
     */
    hDir?: 'ltr' | 'rtl';

    /**
     * (Column) directions
     * ttb = Top to Bottom
     * btt = Bottom to Top
     */
    vDir?: 'ttb' | 'btt';

    /**
     * Justify Content Alignment
     */
    jc?: JustifyAlignment;

    /**
     * Responsive variations of Justified Content
     * @link https://getbootstrap.com/docs/5.2/utilities/flex/
     */
    jcOn?: ResponsiveSizes | ResponsiveSizes[];
    /**
     * Align Items
     */
    ai?: ItemAlignment;
    aiOn?: ResponsiveSizes | ResponsiveSizes[];

    /**
     * Align Self
     */
    as?: ItemAlignment;
    asOn?: ResponsiveSizes | ResponsiveSizes[];
    wrap?: boolean | 'reverse';
    wrapOn?: ResponsiveSizes | ResponsiveSizes[];
    nowrap?: boolean | 'reverse';
    nowrapOn?: ResponsiveSizes | ResponsiveSizes[];
    /**
     * Align Content
     */
    ac?: AlignContent;
    acSm?: AlignContent;
    acMd?: AlignContent;
    acLg?: AlignContent;
    acXl?: AlignContent;
    acXxl?: AlignContent;
}

export interface FlexItemProps extends BasicComponent {
    fill?: boolean | ResponsiveSizes | ResponsiveSizes[];
    grow?: boolean;
    growOn?: ResponsiveSizes | ResponsiveSizes[];
    shrink?: boolean;
    shrinkOn?: ResponsiveSizes | ResponsiveSizes[]
    order?: Order;
    orderSm?: Order;
    orderMd?: Order;
    orderLg?: Order;
    orderXl?: Order;
    orderXxl?: Order;
}

export interface GridProps extends BasicComponent {

}

export interface GridColProps extends BasicComponent {
    col?: ResponsiveNumbers;
    sm?: ResponsiveNumbers;
    md?: ResponsiveNumbers;
    lg?: ResponsiveNumbers;
    xl?: ResponsiveNumbers;
    start?: ResponsiveNumbers;
}

export interface LayoutProps extends BasicComponent {

}

export interface RowProps extends BasicComponent {
    cols?: ColSizes;
    sm?: ColSizes;
    md?: ColSizes;
    lg?: ColSizes;
    xl?: ColSizes;
    alignItems?: ColAlignments | null;
    justifyContent?: JustifyContentAlignments | null;
    //gutter
    g?: ColSizes;
    gSm?: ColSizes;
    gMd?: ColSizes;
    gLg?: ColSizes;
    gXl?: ColSizes;
    //gutters
    gx?: 0 | ResponsiveNumbers | null;
    gy?: 0 | ResponsiveNumbers | null;
}

export interface StackProps extends BasicComponent {
    vertical?: boolean;
    gap?: number | string;
}

