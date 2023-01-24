import {generateTableAttrs, TrProps} from "./index";

export default function Tr(props: TrProps) {
    return <tr {...generateTableAttrs(props)}>
        {props.children}
    </tr>;
}