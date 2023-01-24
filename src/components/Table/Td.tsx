import {generateTableAttrs, TdProps} from "./index";

export default function Td(props: TdProps) {
    return <td {...generateTableAttrs(props)}>{props.children}</td>;
}