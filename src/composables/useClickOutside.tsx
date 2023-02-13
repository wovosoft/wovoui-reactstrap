import {useEffect, useRef} from "react";

export default function <T>(isShown: boolean, handleClickOutside: { (this: Document, ev: MouseEvent): any; (this: Document, ev: MouseEvent): any; (this: Document, ev: MouseEvent): any; }) {
    const ref = useRef<T>(null);
    useEffect(() => {
        const handler = (event: MouseEvent) => {
            // @ts-ignore
            if (ref?.current && !ref?.current.contains(event?.target)) {
                // @ts-ignore
                handleClickOutside();
            }
        };

        if (isShown) {
            document.addEventListener('click', handler, true);
        } else {
            document.removeEventListener('click', handler, true);
        }

        return () => {
            document.removeEventListener('click', handler, true);
        };
    }, [isShown]);
    return ref;
}