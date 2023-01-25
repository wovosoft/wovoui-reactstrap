import {BasicComponent, ClassTypes} from "../../types";

export interface BlockQuoteProps extends BasicComponent {
    footer?: string | null;
    footerClass?: ClassTypes;
}

export interface BlockQuoteFooterProps extends BasicComponent {

}