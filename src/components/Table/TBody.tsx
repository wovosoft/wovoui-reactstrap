import {generateTableAttrs, TBodyProps} from "./index";

export default function TBody(props: TBodyProps) {
    return <tbody {...generateTableAttrs(props)}>{props.children}</tbody>;
}