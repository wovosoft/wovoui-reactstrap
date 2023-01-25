import {BasicComponent, ClassTypes, ColorVariants, TagTypes, TextVariants} from "../../types";
import {ImgHTMLAttributes} from "react";

type BasicVariants = {
    variant?: ColorVariants | null;
    bgVariant?: ColorVariants | null;
    textVariant?: ColorVariants | TextVariants | null;
    borderVariant?: ColorVariants | null;
}

export interface CardProps extends BasicComponent, BasicVariants {
    /**
     * Card Props
     */
    align?: string | null;
    //has Basic Variants
    noBody?: boolean;

    /**
     * Card Body Props
     */
    body?: CardBodyProps | null | string;

    /**
     * Because it overrides HTML title attributes,
     * it is renamed from title to cardTitle
     */
    cardTitle?: CardTitleProps | null;
    subTitle?: CardSubTitleProps | null;
    header?: CardHeaderProps | null | string;
    footer?: CardFooterProps | null | string;

    overlay?: boolean;
    img?: CardImgProps | null;
}


export interface CardBodyProps extends BasicComponent, BasicVariants {
    content?: string | null;
    overlay?: boolean;
    subTitle?: CardSubTitleProps | null;
    cardTitle?: CardTitleProps | null;
}

export interface CardFooterProps extends BasicComponent, BasicVariants {
    content?: string | null;
}

export interface CardGroupProps extends BasicComponent {
    deck?: boolean;
    columns?: boolean;
}

export interface CardHeaderProps extends BasicComponent, BasicVariants {
    content?: string | null;
}

export interface CardImgProps extends ImgHTMLAttributes<any> {
    overlay?: boolean;
    bottom?: boolean;
    end?: boolean;
    left?: boolean;
    right?: boolean;
    start?: boolean;
    top?: boolean;
    children?: any;
    className?: string;
}

export interface CardLinkProps extends BasicComponent {
    href?: string;
}

export interface CardSubTitleProps extends BasicComponent, BasicVariants {

}

export interface CardTextProps extends BasicComponent {

}

export interface CardTitleProps extends BasicComponent {

}