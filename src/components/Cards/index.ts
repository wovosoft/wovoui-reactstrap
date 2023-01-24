import {BasicComponent, ClassTypes, ColorVariants, TagTypes, TextVariants} from "../../types";
import {ImgHTMLAttributes} from "react";

export interface CardProps extends BasicComponent {
    align?: string;
    bgVariant?: ColorVariants;
    bodyBgVariant?: ColorVariants;
    bodyBorderVariant?: ColorVariants;
    bodyClass?: ClassTypes;
    bodyTag?: keyof HTMLElementTagNameMap | string;
    bodyTextVariant?: ColorVariants;

    footer?: string;
    footerBgVariant?: ColorVariants;
    footerTag?: keyof HTMLElementTagNameMap | string;
    footerTextVariant?: ColorVariants;
    footerClass?: ClassTypes;
    footerBorderVariant?: ColorVariants;

    header?: string;
    headerBgVariant?: ColorVariants;
    headerBorderVariant?: ColorVariants;
    headerClass?: ClassTypes;
    headerTag?: TagTypes;
    headerTextVariant?: ColorVariants;

    imgAlt?: string;
    imgBottom?: boolean;
    imgEnd?: boolean;
    imgLeft?: boolean;
    imgRight?: boolean;
    imgStart?: boolean;
    imgTop?: boolean;
    imgSrc?: string;
    imgWidth?: string;
    imgHeight?: string;
    noBody?: boolean;

    overlay?: boolean;
    subTitle?: string;
    subTitleTag?: string;
    subTitleTextVariant?: ColorVariants;


    textVariant?: ColorVariants;
    borderVariant?: ColorVariants;
    title?: string;
    titleTag?: TagTypes;
}

export interface CardBodyProps extends BasicComponent {
    content?: string;
    variant?: ColorVariants;
    borderVariant?: ColorVariants;
    textVariant?: ColorVariants;
    overlay?: boolean;
    subTitle?: string;
    subTitleTag?: TagTypes;
    subTitleTextVariant?: ColorVariants;
    title?: string;
    titleTag?: TagTypes;
}

export interface CardFooterProps extends BasicComponent {
    content?: string;
    variant?: ColorVariants;
    borderVariant?: ColorVariants;
    textVariant?: TextVariants | ColorVariants;
}

export interface CardGroupProps extends BasicComponent {
    deck?: boolean;
    columns?: boolean;
}

export interface CardHeaderProps extends BasicComponent {
    content?: string;
    variant?: ColorVariants;
    borderVariant?: ColorVariants;
    textVariant?: TextVariants | ColorVariants;
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

export interface CardSubTitleProps extends BasicComponent {
    title?: string | null;
    textVariant?: TextVariants | ColorVariants;
}

export interface CardTextProps extends BasicComponent {

}

export interface CardTitleProps extends BasicComponent {
    content?: string;
}