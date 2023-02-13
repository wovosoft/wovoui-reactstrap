import {DropdownProps} from "./index";
import {toClasses} from "../../helpers";
import Button from "../Button/Button";
import DropdownMenu from "./DropdownMenu";
import {useState} from "react";
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

    const [modifiers, setModifiers] = useState([
        {
            name: 'offset',
            options: {
                offset: [0, 2],
            },
        },
        {
            name: 'preventOverflow',
        },
        {
            name: 'flip',
            options: {
                altBoundary: true,
                rootBoundary: 'viewport'
            },

        },
    ]);

    //don't know why, this fixes initial position of the popper
    const onFirstUpdate = (r: any) => {
        // console.log(r)
    }
    return (
        <Manager>
            <div {...attrs} ref={dd}>
                <Reference>
                    {
                        ({ref}) => (
                            <>
                                {
                                    split && <Button
                                        disabled={disabled}
                                        variant={splitVariant}
                                        block={block}
                                        size={size}>
                                        {text}
                                    </Button>
                                }

                                {
                                    isNav ? <Button
                                        ref={ref}
                                        onClick={toggleMenu}
                                        className="dropdown-toggle"
                                        role="button">
                                        {text}
                                    </Button> : <Button
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
                                    </Button>
                                }
                            </>
                        )
                    }
                </Reference>
                <Popper placement={direction || 'bottom'}
                        modifiers={modifiers}
                        onFirstUpdate={onFirstUpdate}>
                    {
                        ({ref, placement, style}) => (
                            <DropdownMenu
                                data-popper-placement={placement}
                                ref={ref}
                                dark={menuDark}
                                style={style}
                                show={isMenuOpened}>
                                {children}
                            </DropdownMenu>
                        )
                    }
                </Popper>
            </div>
        </Manager>
    );
};

