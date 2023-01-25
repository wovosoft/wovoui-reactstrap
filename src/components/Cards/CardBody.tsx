import {CardBodyProps} from "./index";
import {getBinaryClasses, toClasses} from "../../helpers";
import CardTitle from "./CardTitle";
import CardSubTitle from "./CardSubTitle";
import {isValidElement} from "react";

export default function CardBody(
    {
        tag = "div",
        content = null,
        variant = null,
        borderVariant = null,
        textVariant = null,
        overlay = false,
        cardTitle = {
            tag: 'h4'
        },
        subTitle = {
            tag: "h6",
            textVariant: "muted",
        },
        className,
        children,
        ...props
    }: CardBodyProps
) {
    const attrs = {
        ...props,
        className: toClasses([
            className,
            {
                "card-body": !overlay,
                "card-img-overlay": overlay,
            },
            getBinaryClasses({
                bg: variant,
                text: textVariant,
                border: borderVariant
            })
        ])
    };

    const getTitle = () => {
        if (isValidElement(cardTitle?.children)) {
            return cardTitle?.children;
        }

        return (<CardTitle {...cardTitle}/>);
    }

    const getSubTitle = () => {
        if (isValidElement(subTitle?.children)) {
            return subTitle?.children;
        }

        return (<CardSubTitle {...subTitle}/>);
    }

    return (<div {...attrs}>
        {cardTitle?.children && getTitle()}
        {subTitle && getSubTitle()}
        {children}
    </div>)
}