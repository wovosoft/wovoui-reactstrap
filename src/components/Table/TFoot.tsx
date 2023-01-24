import {generateTableAttrs, TFootProps} from "./index";

export default function TFoot(props: TFootProps) {
    return <tfoot {...generateTableAttrs(props)}>{props.children}</tfoot>;
}