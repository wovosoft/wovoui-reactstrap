import Badge from "../components/Ui/Badge";
import Card from "../components/Cards/Card";
import Button from "../components/Button/Button";
import {colorVariants} from "../helpers";

export default function Badges() {
    return <>
        <h4>Default Badges</h4>
        <Badge>default badge</Badge>

        <h4 className="mt-3">Badges in Headings</h4>
        <Card>
            <h1>Example heading <Badge>New</Badge></h1>
            <h2>Example heading <Badge>New</Badge></h2>
            <h3>Example heading <Badge>New</Badge></h3>
            <h4>Example heading <Badge>New</Badge></h4>
            <h5>Example heading <Badge>New</Badge></h5>
            <h6>Example heading <Badge>New</Badge></h6>
        </Card>

        <h4 className="mt-3">With Buttons</h4>
        <p>Badges can be used as part of links or buttons to provide a counter.</p>
        <Button variant="primary">
            Notifications <Badge>4</Badge>
        </Button>

        <h4 className="mt-3">Positioned </h4>
        <p>Reference Container should have <code>position:relative;</code></p>
        <Button variant="primary" className="position-relative">
            Inbox
            <Badge variant="danger" position="top-left">
                TL
            </Badge>
            <Badge variant="danger" position="top-right">
                TR
            </Badge>
            <Badge variant="danger" position="bottom-left">
                BL
            </Badge>
            <Badge variant="danger" position="bottom-right">
                BR
            </Badge>
        </Button>
        <div className="position-relative text-bg-dark" style={{
            width: '200px',
            height: '100px',
            marginTop: '50px',
            textAlign: 'center',
            paddingTop: '40px'
        }}>
            Inbox
            <Badge variant="danger" position="top-left">
                Top Left
            </Badge>
            <Badge variant="danger" position="top-right">
                Top Right
            </Badge>
            <Badge variant="danger" position="bottom-left">
                Bottom Left
            </Badge>
            <Badge variant="danger" position="bottom-right">
                Bottom Right
            </Badge>
        </div>

        <h4 className="mt-3">Background colors</h4>
        {colorVariants.map(variant =>
            <Button key={variant} className="me-2 mb-2">
                {variant} <Badge variant={variant}>Badge</Badge>
            </Button>
        )}

        <h4 className="mt-3">Pill</h4>
        {colorVariants.map(variant =>
            <Button key={variant} className="me-2 mb-2">
                {variant} <Badge pill variant={variant}>Badge</Badge>
            </Button>
        )}
    </>
}