import {DropdownProps} from "./index";
import {toClasses} from "../../helpers";
import Button from "../Button/Button";
import DropdownMenu from "./DropdownMenu";
import {Ref, useState} from "react";
import useClickOutside from "../../composables/useClickOutside";
import {Manager, Popper, Reference} from "react-popper";

export default function Dropdown(
    {
        tag = "div",
        menuTag = "ul",
        toggleTag = "button",
        variant = "secondary",
        splitVariant = "secondary",
        align = "start",
        className,
        block,
        isNav,
        direction = "bottom-start",
        text,
        menuDark,
        menuClass,
        split,
        size,
        disabled,
        children,
        ...props
    }: DropdownProps
) {
    const attrs = {
        ...props,
        className: toClasses([
            {
                "btn-group": !block && !isNav,
                "dropdown": block || isNav,
                "dropend": direction === "right",
                "dropstart": direction === "left",
                "dropup": direction === "top",
            }
        ])
    };

    const [isMenuOpened, setIsMenuOpened] = useState(false);

    const toggleMenu = () => setIsMenuOpened(!isMenuOpened);

    const dd = useClickOutside<HTMLDivElement>(
        isMenuOpened,
        () => setIsMenuOpened(false)
    );

    const modifiers = [
        {
            name: 'offset',
            options: {
                offset: [0, 2],
            },
        },
    ];

    const getRef = (ref: Ref<any>) => {
        if (isNav) {
            return <Button
                data-bs-toggle="dropdown"
                ref={ref}
                onClick={toggleMenu}
                className="dropdown-toggle"
                role="button">
                {text}
            </Button>
        }
        return <Button
            ref={ref}
            onClick={toggleMenu}
            tag={toggleTag}
            block={block}
            disabled={disabled}
            variant={variant}
            size={size}
            className={toClasses({
                'show': isMenuOpened,
                'dropdown-toggle-split': split,
                'dropdown-toggle': true
            })}
            aria-expanded={isMenuOpened}>
            {text}
        </Button>;
    }

    const [placementNew, setPlacement] = useState(direction);

    return (
        <div {...attrs} ref={dd}>
            {
                split && <Button
                    disabled={disabled}
                    variant={splitVariant}
                    block={block}
                    size={size}>
                    {text}
                </Button>
            }
            <Manager>
                <Reference>
                    {({ref}) => getRef(ref)}
                </Reference>
                <Popper placement={direction}
                        modifiers={modifiers}
                        onFirstUpdate={() => null}
                        strategy="fixed">
                    {({ref, style, placement}) => (
                        <DropdownMenu
                            placement={placementNew}
                            ref={ref}
                            dark={menuDark}
                            style={style}
                            show={isMenuOpened}>
                            {children}
                        </DropdownMenu>
                    )}
                </Popper>
            </Manager>
        </div>
    );
};

