import InputGroupText from "./InputGroupText";

import {InputGroupProps} from "./index";
import {toClasses} from "../../helpers";
import "./input-group.css";

export default function InputGroup(
    {
        tag = "div",
        size,
        prepend,
        append,
        noWrap = false,
        className,
        children,
        ...props
    }: InputGroupProps
) {
    const attrs = {
        ...props,
        role: "group",
        className: toClasses([
            className,
            "input-group",
            {
                ["input-group-" + size]: !!size,
                "flex-nowrap": noWrap
            }
        ])
    };

    const getPrepend = () => typeof prepend === "string" ? <InputGroupText>{prepend}</InputGroupText> : prepend;
    const getAppend = () => typeof append === "string" ? <InputGroupText>{append}</InputGroupText> : append;

    return (<div {...attrs}>
        {!!prepend && getPrepend()}
        {children}
        {!!append && getAppend()}
    </div>);
}
