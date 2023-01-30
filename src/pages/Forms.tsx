import Input from "../components/Forms/Input";
import Card from "../components/Cards/Card";
import InputGroup from "../components/Forms/InputGroup";
import Range from "../components/Forms/Range";
import FormGroup from "../components/Forms/FormGroup";
import Select from "../components/Forms/Select";
import SpinButton from "../components/Forms/SpinButton";
import Radio from "../components/Forms/Radio";
import RadioGroup from "../components/Forms/RadioGroup";
import Tags from "../components/Forms/Tags";
import Checkbox from "../components/Forms/Checkbox";
import CheckboxGroup from "../components/Forms/CheckboxGroup";

export default function Forms() {
    // @ts-ignore
    const options = [
        ...[...Array(5).keys()].map(i => ({value: i, text: `Text ${i}`})),
        {
            text: "With Options",
            options: [...Array(5).keys()].map(i => ({value: i, text: `Text ${i}`}))
        },
        ...[...Array(5).keys()].map(i => ({
            value: i + 150,
            text: `Text ${i + 150}`,
            disabled: i === 3
        })),
        {
            text: "With Another Options",
            options: [...Array(5).keys()].map(i => ({value: i + 100, text: `Text ${i + 100}`}))
        }
    ];

    const radioOptions = [...Array(5).keys()].map(i => ({
        value: i + 100,
        label: i + 100,
        defaultValue: false,
    }))

    return (<>
        <Card className="mt-3">
            <h4>Default Input</h4>
            <Input/>

            <h4>Small Input</h4>
            <Input controlSize="sm"/>

            <h4>Large Input</h4>
            <Input controlSize="lg"/>

            <h4>Disabled Input</h4>
            <Input disabled/>

            <h4>Plain Input</h4>
            <Input plain placeholder="Plain Input Element"/>
        </Card>

        <Card className="mt-3" header="Input Group">
            <h4>Default Input Group</h4>
            <InputGroup>
                <Input/>
            </InputGroup>
            <br/>
            <InputGroup prepend={"Prepended Text"} append={"Appended Text"}>
                <Input/>
            </InputGroup>

            <h4>Small Input Group</h4>
            <InputGroup size="sm" prepend={"Prepended Text"} append={"Appended Text"}>
                <Input/>
            </InputGroup>

            <h4>Large Input Group</h4>
            <InputGroup size="lg" prepend={"Prepended Text"} append={"Appended Text"}>
                <Input/>
            </InputGroup>
        </Card>


        <Card className="mt-3">
            <h4>Range</h4>
            <Range/>
        </Card>

        <Card className="mt-3">
            <FormGroup label="Select">
                <Select options={options}/>
            </FormGroup>

            <FormGroup label="Spin Button">
                <SpinButton value={50}></SpinButton>
            </FormGroup>

            <h4>Radio</h4>
            <Radio name="one">
                Radio 1
            </Radio>
            <Radio name="one">
                Radio 2
            </Radio>
            <h4>Radio Group</h4>
            <RadioGroup options={radioOptions}></RadioGroup>
        </Card>

        <Card className="mt-3" header="Form Tags">
            <Tags></Tags>
        </Card>
        <Card className="mt-3" header="Checkboxes">
            <h4>Plain Checkboxes</h4>
            <Checkbox>One</Checkbox>
            <Checkbox>Two</Checkbox>
            <Checkbox>Three</Checkbox>
            <Checkbox>Four</Checkbox>

            <h4>Checkbox Group</h4>
            <CheckboxGroup valueField="value" textField="label" options={radioOptions}>

            </CheckboxGroup>
        </Card>
    </>)
}