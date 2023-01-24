import {generateTableAttrs, TrProps} from "./index";

export default function Tr(props: TrProps) {
    return <thead {...generateTableAttrs(props)}>{props.children}</thead>;
}