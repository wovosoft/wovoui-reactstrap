import {AlertLinkProps} from "./index";
import {toClasses} from "../../helpers";

export default function AlertLink(
    {
        className,
        ...props
    }: AlertLinkProps
) {
    /**
     * href and children props will be set automatically
     */
    const attrs = {
        ...props,
        className: toClasses([
            className,
            "alert-link"
        ])
    };

    return (<a {...attrs}/>)
}