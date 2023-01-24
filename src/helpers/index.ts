import {ColorVariants} from "../types";

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
