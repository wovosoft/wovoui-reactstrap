import "./card.css";
import {CardProps} from "./index";
import {toClasses} from "../../helpers";
import CardHeader from "./CardHeader";
import CardImg from "./CardImg";
import CardFooter from "./CardFooter";
import CardBody from "./CardBody";

export default function Card(
    {
        align = null,
        variant = null,
        bgVariant = null,
        body,
        footer,
        header,
        img,
        noBody = false,

        overlay = false,
        subTitle = null,
        tag = "div",

        textVariant = null,
        borderVariant = null,
        cardTitle = null,
        className,
        children,
        ...props
    }: CardProps
) {

    const attrs = {
        ...props,
        className: toClasses([
            className,
            "card",
            {
                "flex-row": img?.left || img?.start,
                "flex-row-reverse": img?.right || img?.end,
                ["bg-" + bgVariant]: bgVariant,
                ["text-" + textVariant]: textVariant,
                ["border-" + borderVariant]: borderVariant,
                ["text-bg-" + variant]: variant
            }
        ])
    };

    const getCardHeader = () => {
        if (typeof header === "string") {
            return <CardHeader children={header}/>
        }
        return <CardHeader {...header}/>
    };

    const getCardImg = () => {
        return (<CardImg {...img} overlay={overlay}/>)
    };

    const getCardFooter = () => {
        if (typeof footer === "string") {
            return <CardFooter children={footer}/>
        }
        return <CardFooter {...footer}/>
    };

    const getCardBody = () => {
        if (typeof body === "string") {
            return <CardBody children={body}/>
        }
        return (<CardBody {...body} children={children} overlay={overlay}/>)
    };

    return (<div {...attrs}>
        {header && getCardHeader()}
        {(!img?.bottom && img?.src) && getCardImg()}
        {noBody ? children : getCardBody()}
        {(img?.bottom && img.src) && getCardImg()}
        {footer && getCardFooter()}
    </div>)
}