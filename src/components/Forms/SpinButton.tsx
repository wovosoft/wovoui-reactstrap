import {SpinButtonProps} from "./index";
import {toClasses} from "../../helpers";
import {useState} from "react";
import InputGroup from "./InputGroup";
import Button from "../Button/Button";

export default function (
    {
        step = 1,
        min = 1,
        max = 100,
        buttonVariant = "secondary",
        size,
        formatter,
        inline,
        vertical,
        className,
        value,
        ...props
    }: SpinButtonProps
) {
    const attrs = {
        ...props,
        className: toClasses([
            className,
            "spin-button", {
                "inline": inline
            }
        ])
    };

    const outputClasses = toClasses([
            'form-control',
            'text-center',
            {
                ['form-control-' + size]: size
            }
        ]
    )

    const [model, setModel] = useState(Number(value || 0));

    const updateValue = (type: 'increment' | 'decrement') => {
        if (type === "increment" && (model + step) <= max) {
            setModel(model + step);
        } else if (type === "decrement" && (model - step) >= min) {
            setModel(model - step);
        }
    };

    return (
        <InputGroup
            {...attrs}
            prepend={(
                <Button
                    onClick={() => updateValue('decrement')}
                    variant={buttonVariant}
                    size={size}
                    aria-label="Decrement">
                    -
                </Button>
            )}
            append={(
                <Button
                    onClick={() => updateValue('increment')}
                    variant={buttonVariant}
                    size={size}
                    aria-label="Increment">
                    +
                </Button>
            )}
            children={(
                <output
                    role="spinbutton"
                    aria-valuemin={min}
                    aria-valuemax={max}
                    aria-valuenow={model}
                    aria-valuetext={model.toString()}
                    className={outputClasses}>
                    {typeof formatter === "function" ? formatter(model) : model}
                </output>
            )}
        />
    )
}




