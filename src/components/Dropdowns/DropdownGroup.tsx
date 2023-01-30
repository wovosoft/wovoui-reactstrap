import {DropdownGroupProps} from "./index";
import DropdownHeader from "./DropdownHeader";

export default function DropdownGroup(
    {
        header,
        headerTag = "h6",
        headerWrapper = "li",
        children,
    }: DropdownGroupProps
) {
    return (
        <>
            <DropdownHeader tag={headerTag} wrapper={headerWrapper}>
                {header}
            </DropdownHeader>
            {children}
        </>
    )
}