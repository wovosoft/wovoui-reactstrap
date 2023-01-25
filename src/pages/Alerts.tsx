import Alert from "../components/Alerts/Alert";
import Button from "../components/Button/Button";
import ButtonGroup from "../components/Button/ButtonGroup";
import {useRef} from "react";
import {AlertActions} from "../components/Alerts";
import AlertLink from "../components/Alerts/AlertLink";
import {colorVariants} from "../helpers";

export default function Alerts() {
    const dismissibleAlert = useRef<AlertActions>(null);
    return <>
        <h4>Default Alert</h4>

        <Alert>
            A simple primary alert! <AlertLink href="#">This is Alert Link</AlertLink>
        </Alert>

        <h4 className="mt-3">Alert Heading</h4>
        <Alert heading="Well done!">
            A simple primary alert!
        </Alert>

        <h4 className="mt-3">Variants</h4>
        {colorVariants.map(variant =>
            <Alert variant={variant} key={variant}>
                A simple {variant} alert!
            </Alert>
        )}
        <h4 className="mt-3">Dismissible Alert</h4>
        <ButtonGroup>
            <Button onClick={() => dismissibleAlert.current?.show()}>Show</Button>
            <Button variant="primary" onClick={() => dismissibleAlert.current?.hide()}>Hide</Button>
            <Button onClick={() => dismissibleAlert.current?.toggle()}>Toggle</Button>
        </ButtonGroup>
        <Alert dismissible ref={dismissibleAlert}>
            A simple primary alert!
        </Alert>
    </>
}