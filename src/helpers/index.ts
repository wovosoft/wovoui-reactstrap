import {ColorVariants, PlaceholderSizes, ResponsiveNumbers, TextVariants} from "../types";

export function toClasses(classes: any): string {
    if (!classes) {
        return "";
    }
    if (typeof classes === "string" || typeof classes === "number") {
        return classes.toString().trim();
    }

    let out = new Set();
    //when plain object
    if (!Array.isArray(classes) && typeof classes === "object") {
        for (let key of Object.keys(classes)) {
            if (classes[key]) {
                out.add(key.trim());
            }
        }
    } else if (Array.isArray(classes)) {
        for (let x in classes) {
            out.add(toClasses(classes[x]))
        }
    }
    //removes duplicate
    return Array.from(out).filter(i => !!i).join(" ");
}

export function withDefaults<T>(defaults: T): T {
    return defaults;
}

export const isBoolean = (value: any): boolean => typeof value === "boolean";

export const colorVariants: ColorVariants[] = [
    'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'
];
export type VariantProp = {
    bg?: ColorVariants | null;
    variant?: ColorVariants | null;
    border?: ColorVariants | null;
    //both plain text variants and color variants are included
    //@link https://getbootstrap.com/docs/5.2/utilities/colors/#colors
    text?: TextVariants | ColorVariants | null;
    placeholderGlow?: boolean;
    placeholderWave?: boolean;
    placeholderAnimation?: 'glow' | 'wave' | null;
    placeholderSize?: PlaceholderSizes | null;
    col?: ResponsiveNumbers | null;
    accordionFlush?: boolean;
}
export const getBinaryClasses = (types: VariantProp = {}) => ({
    ["bg-" + types.bg]: !!types.bg,
    ["text-bg-" + types.variant]: !!types.variant,

    ["border-" + types.border]: !!types.border,
    ["text-" + types.text]: !!types.text,
    "placeholder-glow": !!types.placeholderGlow,
    "placeholder-wave": !!types.placeholderWave,
    ["placeholder-" + types.placeholderAnimation]: !!types.placeholderAnimation,
    ["placeholder-" + types.placeholderSize]: !!types.placeholderSize,
    ["col-" + types.col]: !!types.col,
    'accordion-flush': !!types.accordionFlush
});

import {useEffect, useRef} from 'react'

export function useTimeout(callback: Function, delay: number) {
    const savedCallback = useRef(callback)

    // Remember the latest callback if it changes.
    useEffect(() => {
        savedCallback.current = callback
    }, [callback])

    // Set up the timeout.
    useEffect(() => {
        // Don't schedule if no delay is specified.
        if (delay === null) {
            return
        }

        const id = setTimeout(() => savedCallback.current(), delay)

        return () => clearTimeout(id)
    }, [delay])
}