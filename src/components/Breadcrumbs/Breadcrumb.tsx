import {BreadcrumbProps} from "./index";
import {toClasses} from "../../helpers";
import BreadcrumbItem from "./BreadcrumbItem";

export default function Breadcrumb(
    {
        tag = "ol",
        items = [],
        divider,
        className,
        children,
        ...props
    }: BreadcrumbProps
) {
    const attrs = {
        ...props,
        className: toClasses([
            className,
            "breadcrumb"
        ])
    };

    const getChildren = () => {
        if (items && Array.isArray(items) && items.length) {
            return items.map((item, item_key) => (
                <BreadcrumbItem href={item?.href} to={item?.to} active={!!item?.active} key={item_key}>
                    {item?.text ? item.text : item}
                </BreadcrumbItem>
            ));
        }
        return children;
    };

    return (<ol {...attrs}>
        {getChildren()}
    </ol>)
}
