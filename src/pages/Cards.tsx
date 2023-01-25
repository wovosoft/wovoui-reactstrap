import Card from "../components/Cards/Card";
import CardText from "../components/Cards/CardText";
import Button from "../components/Button/Button";
import ListGroup from "../components/ListGroups/ListGroup";
import ListGroupItem from "../components/ListGroups/ListGroupItem";
import CardBody from "../components/Cards/CardBody";
import CardLink from "../components/Cards/CardLink";
import BlockQuote from "../components/BlockQuote/BlockQuote";
import BlockQuoteFooter from "../components/BlockQuote/BlockQuoteFooter";
import Row from "../components/Layout/Row";
import Col from "../components/Layout/Col";
import CardImg from "../components/Cards/CardImg";
import {colorVariants} from "../helpers";

export default function Cards() {
    return <div className="mt-3">
        <h4>About</h4>
        <p>
            A card is a flexible and extensible content container. It includes options for headers and footers, a wide
            variety of content, contextual background colors, and powerful display options. If you’re familiar with
            Bootstrap 3, cards replace our old panels, wells, and thumbnails. Similar functionality to those components
            is available as modifier classes for cards.
        </p>
        <h4>Basic Card</h4>
        <Card
            cardTitle={{
                children: "Card Title"
            }}
            img={{
                src: "https://picsum.photos/600/300/?image=25",
                alt: "Image",
                top: true,
            }}
            style={{maxWidth: '50%'}}
            tag="article"
            className="mb-2">
            <CardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText>
            <Button href="#" variant="primary">Go somewhere</Button>
        </Card>

        <h4 className="mt-3">List groups</h4>
        <Card style={{width: '18rem'}} noBody>
            <ListGroup flush>
                <ListGroupItem>An item</ListGroupItem>
                <ListGroupItem>A second item</ListGroupItem>
                <ListGroupItem>A third item</ListGroupItem>
            </ListGroup>
        </Card>

        <h4 className="mt-3">List group with Header</h4>
        <Card style={{width: '18rem'}} noBody header="List Group Header">
            <ListGroup flush>
                <ListGroupItem>An item</ListGroupItem>
                <ListGroupItem>A second item</ListGroupItem>
                <ListGroupItem>A third item</ListGroupItem>
            </ListGroup>
        </Card>

        <h4 className="mt-3">List group with Footer</h4>
        <Card style={{width: '18rem'}} noBody footer="List Group Footer">
            <ListGroup flush>
                <ListGroupItem>An item</ListGroupItem>
                <ListGroupItem>A second item</ListGroupItem>
                <ListGroupItem>A third item</ListGroupItem>
            </ListGroup>
        </Card>

        <h4 className="mt-3">Kitchen sink</h4>
        <p>
            Mix and match multiple content types to create the card you need, or throw everything in there. Shown below
            are image styles, blocks, text styles, and a list group—all wrapped in a fixed-width card.
        </p>

        <Card style={{width: '18rem'}} noBody
              img={{
                  top: true,
                  src: "https://picsum.photos/600/300/?image=25"
              }}>
            <CardBody title="Card Title">
                <CardText>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </CardText>
            </CardBody>
            <ListGroup flush>
                <ListGroupItem>An item</ListGroupItem>
                <ListGroupItem>A second item</ListGroupItem>
                <ListGroupItem>A third item</ListGroupItem>
            </ListGroup>
            <CardBody>
                <CardLink href="#">Card link</CardLink>
                <CardLink href="#">Another link</CardLink>
            </CardBody>
        </Card>

        <h4 className="mt-3">Header and footer</h4>
        <Card header="Featured" title="Special title treatment">
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button variant="primary" href="#">Go somewhere</Button>
        </Card>

        <h4 className="mt-3">Quote Example</h4>
        <Card header="Quote">
            <BlockQuote className="mb-0">
                <p>A well-known quote, contained in a blockquote element.</p>
                <BlockQuoteFooter>
                    Someone famous in <cite title="Source Title">Source Title</cite>
                </BlockQuoteFooter>
            </BlockQuote>
        </Card>

        <h4 className="mt-3">Images</h4>
        <p>
            Cards include a few options for working with images. Choose from appending “image caps” at either end of a
            card, overlaying images with card content, or simply embedding the image in a card.
        </p>

        <Card className="mb-3"
              title="Card title"
              img={{
                  top: true,
                  src: "https://picsum.photos/600/300/?image=25"
              }}>
            <CardText>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
            </CardText>
            <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
        </Card>
        <Card
            img={{
                bottom: true,
                src: "https://picsum.photos/600/300/?image=25"
            }}
            title="Card title">
            <CardText>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
            </CardText>
            <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
        </Card>

        <h4 className="mt-3">Image overlays </h4>
        <Card
            overlay
            img={{
                overlay: true,
                src: "https://picsum.photos/600/150/?image=25"
            }}
            title="Card title">
            <CardText className="text-bg-dark">
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
            </CardText>
            <CardText className="text-bg-dark">
                <small>Last updated 3 mins ago</small>
            </CardText>
        </Card>

        <h4 className="mt-3">Horizontal</h4>
        <p>
            Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly and
            responsive way. In the example below, we remove the grid gutters with .g-0 and use .col-md-* classes to make
            the card horizontal at the md breakpoint. Further adjustments may be needed depending on your card content.
        </p>

        <h4 className="mt-3">Using Grid (Recommended)</h4>
        <Card className="mb-3" noBody>
            <Row g={0}>
                <Col md={4}>
                    <CardImg
                        className="w-100 rounded-start"
                        src="https://picsum.photos/400/200/?image=25"
                    />
                </Col>
                <Col md={8}>
                    <CardBody title="Card Title">
                        <CardText>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </CardText>
                        <CardText>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </CardText>
                    </CardBody>
                </Col>
            </Row>
        </Card>

        <h4 className="mt-3">Using Props</h4>
        <Card className="mb-3"
              img={{
                  start: true,
                  src: "https://picsum.photos/400/200/?image=25"
              }}>
            <CardText>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
            </CardText>
            <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
        </Card>

        <h4 className="mt-3">Card styles</h4>
        <Row>
            {
                colorVariants.map(variant =>
                    <Col md={4} sm={12} key={variant}>
                        <Card header={variant + ' Card'} variant={variant} title="Card Title" className="mb-3">
                            <CardText>
                                Some quick example text to build on the card title and make up the bulk of the
                                card's content.
                            </CardText>
                        </Card>
                    </Col>
                )
            }
        </Row>
    </div>
}