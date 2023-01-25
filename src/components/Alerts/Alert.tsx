import {AlertProps} from "./index";
import {toClasses} from "../../helpers";
import AlertHeading from "./AlertHeading";
import {useState, forwardRef, useImperativeHandle, useRef, useEffect} from "react";
import ButtonClose from "../Button/ButtonClose";

const Alert = forwardRef(function (
    {
        tag = "div",
        variant = "primary",
        dismissible = false,
        timeout = 3,
        timeoutStep = 1,
        closeBtnWhite = false,
        icon = null,
        heading = null,
        role = "alert",
        // lazy = true,
        className,
        children,
        ...props
    }: AlertProps,
    ref
) {
    const [shown, setShown] = useState(false);
    let timer = useRef<number | null>(null);

    function setTimer() {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(hide, timeout * 1000);
    }

    function clearTimer() {
        if (timer.current) {
            clearTimeout(timer.current);
            timer.current = null;
        }
    }

    const show = () => {
        setShown(true);
        setTimer();
    };

    //clear timer on unmount

    useEffect(() => clearTimer, [])

    const hide = () => {
        setShown(false);
        clearTimer();
    };

    const toggle = () => (shown ? hide : show)();

    /**
     * Exposing methods to be used by parents.
     * @link https://beta.reactjs.org/reference/react/useImperativeHandle
     */
    useImperativeHandle(ref, () => ({
        show,
        hide,
        toggle
    }));

    const attrs = {
        role,
        ...props,
        className: toClasses([
            "alert",
            {
                // "d-flex": dismissible || icon,
                ["alert-" + variant]: variant,
                "alert-dismissible": dismissible,
                "fade": dismissible,
                show: shown && dismissible
            }
        ])
    };

    return (<div {...attrs}>
        {heading && <AlertHeading children={heading}/>}
        {children}
        {dismissible && <ButtonClose onClick={hide} white={closeBtnWhite}/>}
    </div>)
});

export default Alert;