import Container from "../components/Layout/Container";
import Button from "../components/Button/Button";
import ButtonGroup from "../components/Button/ButtonGroup";
import ButtonClose from "../components/Button/ButtonClose";
import ButtonToolbar from "../components/Button/ButtonToolbar";

export default function Buttons() {
    return <Container>
        <h4>Buttons</h4>
        <Button>Default Button</Button>
        <Button disabled={true}>Disabled Button</Button>
        <Button pressed={true}>Aria Pressed</Button>
        <Button variant="dark" outline>Outline Button</Button>

        <h4>Variants</h4>

        {
            ['primary', 'secondary', 'dark', 'danger', 'info']
                .map((variant: string, index: number) =>
                    <Button variant={variant} key={index}>{variant}</Button>)
        }

        <h4>Small Size</h4>

        {
            ['primary', 'secondary', 'dark', 'danger', 'info']
                .map((variant: string, index: number) =>
                    <Button size='sm' variant={variant} key={index}>{variant}</Button>)
        }

        <h4>Large Size</h4>

        {
            ['primary', 'secondary', 'dark', 'danger', 'info']
                .map((variant: string, index: number) =>
                    <Button size='lg' variant={variant} key={index}>{variant}</Button>)
        }

        <h4>Default Button Group</h4>
        <ButtonGroup>
            {
                ['primary', 'secondary', 'dark', 'danger', 'info']
                    .map((variant: string, index: number) =>
                        <Button variant={variant} key={index}>{variant}</Button>)
            }
        </ButtonGroup>

        <h4>Small Button Group</h4>
        <ButtonGroup size={"sm"}>
            {
                ['primary', 'secondary', 'dark', 'danger', 'info']
                    .map((variant: string, index: number) =>
                        <Button variant={variant} key={index}>{variant}</Button>)
            }
        </ButtonGroup>

        <h4>Large Button Group</h4>
        <ButtonGroup size={"lg"}>
            {
                ['primary', 'secondary', 'dark', 'danger', 'info']
                    .map((variant: string, index: number) =>
                        <Button variant={variant} key={index}>{variant}</Button>)
            }
        </ButtonGroup>
        <h4>Button Close</h4>
        <ButtonClose/>

        <h4>Button Toolbar</h4>
        <ButtonToolbar keyNav aria-label="Toolbar with button groups">
            <ButtonGroup>
                <Button>&laquo;</Button>
                <Button>&lsaquo;</Button>
            </ButtonGroup>
            <ButtonGroup className="mx-2">
                <Button>Edit</Button>
                <Button>Undo</Button>
                <Button>Redo</Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button>&rsaquo;</Button>
                <Button>&raquo;</Button>
            </ButtonGroup>
        </ButtonToolbar>
    </Container>
}