import {BasicComponent} from "../../types";

export interface CarouselProps extends BasicComponent {
    slide?: boolean;
    controlsEnabled?: boolean;
    indicatorsEnabled?: boolean;
    fade?: boolean;
    dark?: boolean;
    intervals?: boolean;  //in seconds
    direction?: 'next' | 'prev';
}

export interface CarouselCaptionProps extends BasicComponent {

}

export interface CarouselCaptionProps extends BasicComponent {

}

export interface CarouselIndicatorProps extends BasicComponent {

}

export interface CarouselInnerProps extends BasicComponent {

}

export interface CarouselItemProps extends BasicComponent {
    active?: boolean;
    activeClass?: string;
}