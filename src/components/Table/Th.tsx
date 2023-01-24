import {generateTableAttrs, TrProps} from "./index";

export default function Tr(props: TrProps) {
    return <td {...generateTableAttrs(props)}>{props.children}</td>;
}