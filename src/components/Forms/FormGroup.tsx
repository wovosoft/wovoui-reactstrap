import {FormGroupProps} from "./index";
import {toClasses} from "../../helpers";
import FormLabel from "./FormLabel";
import Feedback from "./Feedback";

export default function FormGroup(
    {
        tag = "div",
        floating,
        label,
        labelFor,
        horizontal,
        labelSm,
        labelMd,
        labelLg,
        labelXl,
        contentSm,
        contentMd,
        contentLg,
        contentXl,
        noMarginBottom,
        //form control feedback messages
        validFeedback,
        invalidFeedback,
        className,
        children,
        ...props
    }: FormGroupProps
) {
    const feedbackMessages = () => {
        if (!(validFeedback || invalidFeedback)) {
            return null;
        }
        return [
            (validFeedback) ? <Feedback type="valid" children={validFeedback}/> : null,
            //invalid feedback
            (invalidFeedback) ? <Feedback type="invalid" children={invalidFeedback}/> : null,
        ]
    };

    const contentClasses = toClasses(horizontal ? ({
        ["col-sm-" + contentSm]: !!contentSm,
        ["col-md-" + contentMd]: !!contentMd,
        ["col-lg-" + contentLg]: !!contentLg,
        ["col-xl-" + contentXl]: !!contentXl,
    }) : null);

    const attrs = {
        ...props,
        className: toClasses([
            "form-group", //does nothing, added so that can be queried by css/js
            {
                "mb-3": !noMarginBottom,
                "row": horizontal,
                "form-floating": floating
            }
        ])
    };

    return (<div {...attrs}>
        {(floating && !horizontal) && children}
        {feedbackMessages()}
        {
            label && (
                <FormLabel
                    horizontal={horizontal}
                    sm={labelSm}
                    md={labelMd}
                    lg={labelLg}
                    xl={labelXl}
                    htmlFor={labelFor}>
                    {label}
                </FormLabel>
            )
        }
        {!floating && !horizontal && children}
        {feedbackMessages()}
        {
            horizontal && (<div className={contentClasses}>
                {children}
                {feedbackMessages()}
            </div>)
        }
    </div>);
}

