import Radio from "./Radio";
import {useId} from "react";
import {RadioGroupProps} from "./index";

export default function RadioGroup(
    {
        options = [],
        ...props
    }: RadioGroupProps
) {
    const id = ['wovo-reactstrap', useId(), 'radio-group'].join('');
    return (
        <div {...props}>
            {options.map((rad, rad_key) => (
                <Radio
                    name={rad['name'] || id}
                    defaultValue={rad['defaultValue']}
                    key={rad_key}
                    children={rad['label']}
                />
            ))}
        </div>
    )
}