import ListGroup from "../components/ListGroups/ListGroup";
import ListGroupItem from "../components/ListGroups/ListGroupItem";
import {colorVariants} from "../helpers";

export default function ListGroups() {
    return <>
        <h4>Default List Group</h4>
        <ListGroup>
            {
                ['One', 'Two', 'Three', 'Four'].map((i, k) =>
                    <ListGroupItem key={k}>
                        {i}
                    </ListGroupItem>
                )
            }
        </ListGroup>

        <h4>Active List Group</h4>
        <ListGroup>
            <ListGroupItem active>Active</ListGroupItem>
            {
                ['One', 'Two', 'Three', 'Four'].map((i, k) =>
                    <ListGroupItem key={k}>
                        {i}
                    </ListGroupItem>
                )
            }
        </ListGroup>

        <h4>Disabled List Group</h4>
        <ListGroup>
            <ListGroupItem disabled>Active</ListGroupItem>
            {
                ['One', 'Two', 'Three', 'Four'].map((i, k) =>
                    <ListGroupItem key={k}>
                        {i}
                    </ListGroupItem>
                )
            }
        </ListGroup>

        <h4>Flush</h4>
        <ListGroup flush>
            {
                ['One', 'Two', 'Three', 'Four'].map((i, k) =>
                    <ListGroupItem key={k}>
                        {i}
                    </ListGroupItem>
                )
            }
        </ListGroup>

        <h4>Numbered</h4>
        <ListGroup numbered>
            {
                ['One', 'Two', 'Three', 'Four'].map((i, k) =>
                    <ListGroupItem key={k}>
                        {i}
                    </ListGroupItem>
                )
            }
        </ListGroup>

        <h4>Horizontal</h4>
        <ListGroup horizontal>
            <ListGroupItem>Active</ListGroupItem>
            {
                ['One', 'Two', 'Three', 'Four'].map((i, k) =>
                    <ListGroupItem key={k}>
                        {i}
                    </ListGroupItem>
                )
            }
        </ListGroup>

        <h4>Variants</h4>
        <ListGroup>
            {
                colorVariants.map((color, colorKey) =>
                    <ListGroupItem key={colorKey} variant={color}>{color}</ListGroupItem>
                )
            }
        </ListGroup>
    </>
}