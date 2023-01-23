export function toClasses(classes: any): string {
    if (typeof classes === "string" || typeof classes === "number") {
        return classes.toString().trim();
    }

    let out = [];
    //when plain object
    if (!Array.isArray(classes) && typeof classes === "object") {
        for (let key of Object.keys(classes)) {
            if (classes[key]) {
                out.push(key);
            }
        }
    } else if (Array.isArray(classes)) {
        for (let x in classes) {
            out.push(toClasses(classes[x]))
        }
    }
    return out.join(" ");
}