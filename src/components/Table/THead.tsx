import {generateTableAttrs, THeadProps} from "./index";

export default function THead(props: THeadProps) {
    return <thead {...generateTableAttrs(props)}>{props.children}</thead>;
}