import {TagsProps} from "./index";
import {toClasses} from "../../helpers";
import {useState} from "react";
import ButtonGroup from "../Button/ButtonGroup";
import Button from "../Button/Button";

export default function Tags(
    {
        tag = "ul",
        role = "group",
        tabindex = -1,
        placeholder = "Add Tag",
        removeOnDelete,
        separator,
        tagPills,
        tagVariant = "secondary",
        addButtonSize = "sm",
        addButtonText = "Add",
        noAddOnEnter,
        className,
        ...props
    }: TagsProps
) {
    const [items, setItems] = useState<string[]>([]);
    const [tagText, setTagText] = useState<string>("");

    const addTag = (e: any) => {
        e.stopPropagation();
        if (e.code === "NumpadEnter" || e.keyCode === 13) {
            setItems(items => [...items, tagText]);
            setTagText("");
        }
    }

    const removeTag = (index: number) => {
        if (index >= 0 && index < items.length) {
            let copyItems = [...items];
            copyItems.splice(index, 1);
            setItems(copyItems);
        }
    }

    const attrs = {
        ...props,
        className: toClasses([
            className,
            "wui-tags",
            "d-flex",
            "flex-wrap",
            "ps-1",
            "pe-1",
            "pb-1",
            "pt-0"
        ])
    };

    return (
        <ul {...attrs}>
            {items.map((item, item_key) => (
                <li key={item_key} style={{listStyleType: "none"}} className="me-1 mb-1">
                    <ButtonGroup size="sm">
                        <span className="btn btn-primary">{item}</span>
                        <Button onClick={() => removeTag(item_key)}>x</Button>
                    </ButtonGroup>
                </li>
            ))}
            <li style={{listStyleType: "none"}}>
                <input
                    value={tagText}
                    onChange={(e) => setTagText(e.target?.value)}
                    onKeyDown={addTag}
                />
            </li>
        </ul>
    )
}


