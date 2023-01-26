import Card from "../components/Cards/Card";
import Breadcrumb from "../components/Breadcrumbs/Breadcrumb";
import BreadcrumbItem from "../components/Breadcrumbs/BreadcrumbItem";

export default function Breadcrumbs() {
    const items = [
        {text: 'One', href: "#one"},
        {text: 'Two', href: "#two"},
        {text: 'Three', href: "#three"},
        {text: 'Four', href: "#four"},
        {text: 'Active', active: true},
    ];

    return <>
        <Card header="Basic Breadcrumb" className="mt-3">
            <nav aria-label="breadcrumb">
                <Breadcrumb>
                    <BreadcrumbItem active aria-current="page">Home</BreadcrumbItem>
                </Breadcrumb>
            </nav>

            <nav aria-label="breadcrumb">
                <Breadcrumb className="breadcrumb">
                    <BreadcrumbItem>
                        <a href="#">Home</a>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Library</BreadcrumbItem>
                </Breadcrumb>
            </nav>

            <nav aria-label="breadcrumb">
                <Breadcrumb>
                    <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                    <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
                    <BreadcrumbItem active aria-current="page">Data</BreadcrumbItem>
                </Breadcrumb>
            </nav>
        </Card>

        <Card header="Dividers" className="mt-3">
            {/*@ts-ignore*/}
            <nav style={{'--bs-breadcrumb-divider': "'>'"}} aria-label="breadcrumb">
                <Breadcrumb>
                    <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                    <BreadcrumbItem active aria-current="page">Library</BreadcrumbItem>
                </Breadcrumb>
            </nav>
        </Card>

        <Card header="Breadcrumb with items prop" className="mt-3">
            <Breadcrumb items={items}/>
        </Card>
    </>
}