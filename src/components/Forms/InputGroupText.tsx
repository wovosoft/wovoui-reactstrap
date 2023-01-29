import {toClasses} from "../../helpers";
import {InputGroupTextProps} from "./index";

export default function InputGroupText(
    {
        className,
        ...props
    }: InputGroupTextProps
) {
    const attrs = {
        ...props,
        className: toClasses([
            className,
            "input-group-text"
        ])
    };

    return (<div {...attrs}/>);
}