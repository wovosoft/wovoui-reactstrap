import {generateTableAttrs, ThProps} from "./index";

export default function Th(props: ThProps) {
    return <th {...generateTableAttrs(props)}>{props.children}</th>;
}