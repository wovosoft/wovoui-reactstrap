import {FormLabelProps} from "./index";
import {toClasses} from "../../helpers";

export default function FormLabel(
    {
        horizontal,
        sm,
        md,
        lg,
        xl,
        className,
        ...props
    }: FormLabelProps
) {
    const attrs = {
        ...props,
        className: toClasses([
            className,
            {
                "form-label": !horizontal,
                "col-form-label": horizontal,
                ["col-sm-" + sm]: horizontal && sm,
                ["col-md-" + md]: horizontal && md,
                ["col-lg-" + lg]: horizontal && lg,
                ["col-xl-" + xl]: horizontal && xl,
            }
        ])
    };

    return <label {...attrs}/>
}