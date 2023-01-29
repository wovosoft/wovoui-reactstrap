import {BasicComponent} from "../../types";

export type CarouselStatesType = {
    current: number;
    target: null | number;
    direction: 'next' | 'prev' | null;
}

export interface CarouselProps extends BasicComponent {
    active?: number;
    slide?: boolean;
    controlsEnabled?: boolean;
    indicatorsEnabled?: boolean;
    fade?: boolean;
    dark?: boolean;
    interval?: number|null;  //in seconds
    direction?: 'next' | 'prev';
    onClickNext?: ((index: number) => any) | null,
    onClickPrev?: ((index: number) => any) | null,
    onSlideChange?: ((index: number) => any) | null,
}

export interface CarouselCaptionProps extends BasicComponent {

}

export interface CarouselCaptionProps extends BasicComponent {

}

export interface CarouselIndicatorProps extends BasicComponent {

}

export interface CarouselInnerProps extends BasicComponent {

}

export interface CarouselControlProps extends BasicComponent {
    type: 'next' | 'prev';
}

export interface CarouselItemProps extends BasicComponent {
    onSlide?: Function,
    myIndex?: number | null;
}