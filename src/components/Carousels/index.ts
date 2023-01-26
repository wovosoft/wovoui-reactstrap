import {BasicComponent} from "../../types";

export interface CarouselProps extends BasicComponent {
    active?: number;
    slide?: boolean;
    controlsEnabled?: boolean;
    indicatorsEnabled?: boolean;
    fade?: boolean;
    dark?: boolean;
    intervals?: boolean;  //in seconds
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
    active?: boolean;
    activeClass?: string;
    currentItem?: number | null;
    oldItem?: number | null;
    myIndex?: number | null;
    onSlide?: Function
}