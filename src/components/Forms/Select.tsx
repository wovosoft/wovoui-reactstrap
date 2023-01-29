import {SelectProps} from "./index";
import {toClasses} from "../../helpers";

export default function Select(
    {
        multiple,
        size,
        options,
        valueField = "value",
        textField = "text",
        disabledField = "disabled",
        labelField,
        firstItem = null,
        lastItem = null,
        className,
        children,
        ...props
    }: SelectProps
) {

    const getEntity = (opt: { [key: string]: any } | string, key: string) => {
        if (typeof opt === "object" && !Array.isArray(opt)) {
            return opt[key];
        }
        return opt;
    };

    const isDisabledOption = (o: any) => o.hasOwnProperty(disabledField) ? o[disabledField] : false

    const attrs = {
        ...props,
        multiple,
        className: toClasses([
            className,
            "form-select",
            {
                ["form-select-" + size]: !!size
            }
        ])
    };

    const getOptions = (options?: any[]) => {
        return options?.map((opt, opt_key) => {
            if (opt.hasOwnProperty('options')) {
                return <optgroup label={getEntity(opt, textField)} key={opt_key}>
                    {getOptions(opt.options)}
                </optgroup>
            }

            return <option
                disabled={isDisabledOption(opt)}
                value={getEntity(opt, valueField)}
                key={opt_key}>
                {getEntity(opt, textField)}
            </option>;
        })
    }

    return (<select {...attrs}>
        {firstItem}
        {children}
        {getOptions(options)}
        {lastItem}
    </select>)
}

