import Container from "../components/Layout/Container";
import Dropdown from "../components/Dropdowns/Dropdown";
import DropdownItem from "../components/Dropdowns/DropdownItem";
import Row from "../components/Layout/Row";
import Col from "../components/Layout/Col";

export default function Dropdowns() {
    return (
        <Container>
            <h4>Default Dropdown</h4>
            <Dropdown text="Default Dropdown">
                <DropdownItem>Hello</DropdownItem>
                <DropdownItem>World!</DropdownItem>
                <DropdownItem>Porting</DropdownItem>
                <DropdownItem>wovoui</DropdownItem>
                <DropdownItem>to</DropdownItem>
                <DropdownItem>reactjs</DropdownItem>
            </Dropdown>
            <Row>
                {
                    ['start', 'end', 'top', 'bottom'].map(dir => (
                        ['start', 'end'].map(place => (
                            <Col md={4} sm={12} key={[dir, place].join('-')} className="p-2">
                                <Dropdown text="Default Dropdown">
                                    <DropdownItem>Hello</DropdownItem>
                                    <DropdownItem>World!</DropdownItem>
                                    <DropdownItem>Porting</DropdownItem>
                                    <DropdownItem>wovoui</DropdownItem>
                                    <DropdownItem>to</DropdownItem>
                                    <DropdownItem>reactjs</DropdownItem>
                                </Dropdown>
                            </Col>
                        ))
                    ))
                }
            </Row>

        </Container>
    )
}