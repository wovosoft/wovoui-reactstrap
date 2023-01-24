import {BasicComponent, ClassTypes, ColorVariants, ResponsiveSizes, VerticalAlign} from "../../types";
import {toClasses} from "../../helpers";

type FieldType = {
    key: string;
    label?: string;
    formatter: (item: object, key?: string) => any;
    visible?: boolean;
    sortable?: boolean;
    thClass?: any;
    tdClass?: any;
};

export interface TableCommonProps extends BasicComponent {
    /**
     * Sets table variant
     */
    variant?: ColorVariants | null;

    /**
     * Sets table status active
     */
    active?: boolean;

    /**
     * Table alignment
     */
    align?: VerticalAlign | null;
}

export interface TableProps extends TableCommonProps {
    responsive?: boolean | ResponsiveSizes;

    /**
     * Makes table stripped
     */
    striped?: boolean | 'columns';

    /**
     * Makes table hoverable
     */
    hover?: boolean;

    /**
     * Makes table bordered
     */
    bordered?: boolean;

    /**
     * Sets table border variant
     */
    borderVariant?: ColorVariants | null;

    /**
     * Removes table borders
     */
    borderless?: boolean;

    /**
     * Makes table shrink, smaller
     */
    small?: boolean;

    /**
     * Sets table caption
     */
    caption?: string | null;

    /**
     * Places table caption at top
     */
    captionTop?: boolean;
}

export interface DataTableProps extends TableProps {
    headClass?: ClassTypes;
    bodyClass?: ClassTypes;
    footClass?: ClassTypes;
    selectedRows?: any[]
    filter?: string;
    fields?: FieldType[] | string[],
    items: any[]
}

export interface TBodyProps extends TableCommonProps {
    divider?: boolean;
}

export interface TdProps extends TableCommonProps {

}

export interface TFootProps extends TableCommonProps {

}

export interface ThProps extends TableCommonProps {

}

export interface THeadProps extends TableCommonProps {

}

export interface TrProps extends TableCommonProps {

}

export function generateTableAttrs(
    {
        variant = null,
        active = false,
        align = null,
        children = null,
        divider = false,
        ...props
    }: TBodyProps) {
    return {
        ...props,
        className: toClasses([
            props.className,
            {
                ["table-" + variant]: variant,
                "table-active": active,
                ["align-" + align]: !!align,

                /**
                 * @link https://getbootstrap.com/docs/5.3/content/tables/#table-group-dividers
                 */
                ['table-group-divider']: Object.hasOwn(props, 'divider') && !!divider
            }
        ])
    };
}
