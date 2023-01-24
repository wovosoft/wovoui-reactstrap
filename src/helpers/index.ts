import {ColorVariants, PlaceholderSizes, ResponsiveNumbers, TextVariants} from "../types";

export function toClasses(classes: any): string {
    if (!classes) {
        return "";
    }
    if (typeof classes === "string" || typeof classes === "number") {
        return classes.toString().trim();
    }

    let out = [];
    //when plain object
    if (!Array.isArray(classes) && typeof classes === "object") {
        for (let key of Object.keys(classes)) {
            if (classes[key]) {
                out.push(key.trim());
            }
        }
    } else if (Array.isArray(classes)) {
        for (let x in classes) {
            out.push(toClasses(classes[x]))
        }
    }
    return out.filter(i => !!i).join(" ");
}

export function withDefaults<T>(defaults: T): T {
    return defaults;
}

export const isBoolean = (value: any): boolean => typeof value === "boolean";

export const colorVariants: ColorVariants[] = [
    'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'
];
export type VariantProp = {
    bg?: ColorVariants;
    border?: ColorVariants;
    //both plain text variants and color variants are included
    //@link https://getbootstrap.com/docs/5.2/utilities/colors/#colors
    text?: TextVariants | ColorVariants;
    placeholderGlow?: boolean;
    placeholderWave?: boolean;
    placeholderAnimation?: 'glow' | 'wave';
    placeholderSize?: PlaceholderSizes;
    col?: ResponsiveNumbers;
    accordionFlush?: boolean;
}
export const getBinaryClasses = (types: VariantProp = {}) => ({
    ["bg-" + types.bg]: !!types.bg,
    ["border-" + types.border]: !!types.border,
    ["text-" + types.text]: !!types.text,
    "placeholder-glow": !!types.placeholderGlow,
    "placeholder-wave": !!types.placeholderWave,
    ["placeholder-" + types.placeholderAnimation]: !!types.placeholderAnimation,
    ["placeholder-" + types.placeholderSize]: !!types.placeholderSize,
    ["col-" + types.col]: !!types.col,
    'accordion-flush': !!types.accordionFlush
});