import {CardGroupProps} from "./index";
import {toClasses} from "../../helpers";

export default function CardGroup(
    {
        tag = "div",
        deck = false,
        columns = false,
        className,
        children,
        ...props
    }: CardGroupProps
) {
    const attrs = {
        ...props,
        className: toClasses([
            className,
            {
                "card-group": !deck && !columns,
                "card-deck": deck,
                "card-columns": columns,
            }
        ])
    };

    return (<div {...attrs}>{children}</div>)
}