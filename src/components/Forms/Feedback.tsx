import {FeedbackProps} from "./index";
import {toClasses} from "../../helpers";


export default function Feedback(
    {
        tag = "div",
        type = "valid",
        className,
        ...props
    }: FeedbackProps
) {
    const attrs = {
        ...props,
        className: toClasses([
            className,
            {
                [type + '-feedback']: type
            }
        ])
    };


    return <div {...attrs}></div>
}