import {ButtonSizes} from "../../types";
import {toClasses} from "../../helpers";

export type ButtonCloseProps = {
    size?: ButtonSizes;
    white?: boolean;
    ariaLabel?: string;
    disabled?: boolean;
    children?: any;
}

export default function ButtonClose(props: ButtonCloseProps) {
    const {
        size = null,
        white = false,
        ariaLabel = "Close",
        disabled = false
    } = props;

    const attrs = {
        type: "button",
        disabled: disabled,
        "aria-label": ariaLabel,
        className: toClasses([
            "btn-close",
            {
                'btn-close-white': white,
                ["btn-" + size]: size
            }
        ])
    };

    // @ts-ignore
    return <button {...attrs}>
        {props.children}
    </button>
}