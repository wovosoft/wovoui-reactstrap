import {BasicComponent, ButtonSizes, ColorVariants, TagTypes} from "../../types";

export interface ProgressProps extends BasicComponent {
    barTag?: TagTypes;
    value?: number;
    min?: number;
    max?: number;
    showValue?: boolean;
    striped?: boolean;
    animated?: boolean;
    height?: string | number;
    variant?: ColorVariants;
}

export interface ProgressBarProps extends BasicComponent {
    value?: number;
    min?: number;
    max?: number;
    showValue?: boolean;
    striped?: boolean;
    animated?: boolean;
    variant?: ColorVariants;
}

export interface SpinnerProps extends BasicComponent {
    grow?: boolean;
    size?: ButtonSizes;
    variant?: ColorVariants;
}