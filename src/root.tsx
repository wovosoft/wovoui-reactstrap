import Row from "./components/Layout/Row";
import Col from "./components/Layout/Col";
import {Link, Outlet} from "react-router-dom";
import Container from "./components/Layout/Container";
import React from "react";
import {routes} from "./router";

export default function Root() {
    return <Container fluid>
        <Row>
            <Col md={3} sm={12}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    {
                        routes[0].children?.map((child, childKey) => <li key={childKey}>
                            <Link to={child.path}>
                                {child.path}
                            </Link>
                        </li>)
                    }
                </ul>
            </Col>
            <Col md={9} sm={12}>
                <Outlet/>
            </Col>
        </Row>
    </Container>
}