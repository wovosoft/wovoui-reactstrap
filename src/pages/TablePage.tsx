import Tr from "../components/Table/Tr";
import Table from "../components/Table/Table";
import TBody from "../components/Table/TBody";
import Td from "../components/Table/Td";
import {colorVariants} from "../helpers";
import THead from "../components/Table/THead";
import Th from "../components/Table/Th";

export default function TablePage() {
    return <>
        <h4>Basic Table</h4>
        <Table>
            <TBody>
                {
                    [...Array(10).keys()].map((i, k) =>
                        <Tr key={k}>
                            <Td>{i}</Td>
                            <Td>{i}</Td>
                            <Td>{i}</Td>
                            <Td>{i}</Td>
                            <Td>{i}</Td>
                        </Tr>
                    )
                }
            </TBody>
        </Table>

        <h4>Variants</h4>
        <Table bordered hover striped>
            <TBody>
                {
                    colorVariants.map((i, k) =>
                        <Tr key={k} variant={i}>
                            <Td>{i}</Td>
                            <Td>{i}</Td>
                            <Td>{i}</Td>
                            <Td>{i}</Td>
                            <Td>{i}</Td>
                        </Tr>
                    )
                }
            </TBody>
        </Table>

        <h4>Striped Table</h4>
        <Table striped>
            <TBody>
                {
                    [...Array(10).keys()].map((i, k) =>
                        <Tr key={k}>
                            <Td>{i}</Td>
                            <Td>{i}</Td>
                            <Td>{i}</Td>
                            <Td>{i}</Td>
                            <Td>{i}</Td>
                        </Tr>
                    )
                }
            </TBody>
        </Table>

        <h4>Striped columns</h4>
        <Table striped="columns">
            <TBody>
                {
                    [...Array(10).keys()].map((i, k) =>
                        <Tr key={k}>
                            <Td>{i}</Td>
                            <Td>{i}</Td>
                            <Td>{i}</Td>
                            <Td>{i}</Td>
                            <Td>{i}</Td>
                        </Tr>
                    )
                }
            </TBody>
        </Table>

        <h4>Active tables</h4>
        <Table>
            <TBody>
                {
                    [...Array(10).keys()].map((i, k) =>
                        <Tr key={k} active={k == 5}>
                            <Td>{i}</Td>
                            <Td active={k === 3}>{i}</Td>
                            <Td>{i}</Td>
                            <Td>{i}</Td>
                            <Td>{i}</Td>
                        </Tr>
                    )
                }
            </TBody>
        </Table>

        <h4>Bordered tables</h4>
        <Table bordered>
            <TBody>
                {
                    [...Array(5).keys()].map((i, k) =>
                        <Tr key={k}>
                            <Td>{i}</Td>
                            <Td>{i}</Td>
                            <Td>{i}</Td>
                            <Td>{i}</Td>
                            <Td>{i}</Td>
                        </Tr>
                    )
                }
            </TBody>
        </Table>

        <h4>Border Variant</h4>
        <Table borderVariant="primary" bordered>
            <TBody>
                {
                    [...Array(5).keys()].map((i, k) =>
                        <Tr key={k}>
                            <Td>{i}</Td>
                            <Td>{i}</Td>
                            <Td>{i}</Td>
                            <Td>{i}</Td>
                            <Td>{i}</Td>
                        </Tr>
                    )
                }
            </TBody>
        </Table>

        <h4>Tables without borders</h4>
        <Table borderless>
            <TBody>
                {
                    [...Array(5).keys()].map((i, k) =>
                        <Tr key={k}>
                            <Td>{i}</Td>
                            <Td>{i}</Td>
                            <Td>{i}</Td>
                            <Td>{i}</Td>
                            <Td>{i}</Td>
                        </Tr>
                    )
                }
            </TBody>
        </Table>

        <h4>Small Tables</h4>
        <Table small bordered>
            <TBody>
                {
                    [...Array(5).keys()].map((i, k) =>
                        <Tr key={k}>
                            <Td>{i}</Td>
                            <Td>{i}</Td>
                            <Td>{i}</Td>
                            <Td>{i}</Td>
                            <Td>{i}</Td>
                        </Tr>
                    )
                }
            </TBody>
        </Table>

        <h4>Table group dividers</h4>
        <Table small bordered>
            <THead>
                <Tr>
                    <Th>#</Th>
                    <Th>First</Th>
                    <Th>Last</Th>
                    <Th>Handle</Th>
                </Tr>
            </THead>
            <TBody divider>
                {
                    [...Array(5).keys()].map((i, k) =>
                        <Tr key={k}>
                            <Td>{i}</Td>
                            <Td>{i}</Td>
                            <Td>{i}</Td>
                            <Td>{i}</Td>
                        </Tr>
                    )
                }
            </TBody>
        </Table>

        <h4>Vertical alignment</h4>
        <Table align="middle">
            <THead>
                <Tr>
                    <Th className="w-25">Heading 1</Th>
                    <Th className="w-25">Heading 2</Th>
                    <Th className="w-25">Heading 3</Th>
                    <Th className="w-25">Heading 4</Th>
                </Tr>
            </THead>
            <TBody>
                <Tr>
                    <Td>This cell inherits <code>vertical-align: middle;</code> from the table</Td>
                    <Td>This cell inherits <code>vertical-align: middle;</code> from the table</Td>
                    <Td>This cell inherits <code>vertical-align: middle;</code> from the table</Td>
                    <Td>This here is some placeholder text, intended to take up quite a bit of vertical space, to
                        demonstrate how the vertical alignment works in the preceding cells.
                    </Td>
                </Tr>
                <Tr align="bottom">
                    <Td>This cell inherits <code>vertical-align: bottom;</code> from the table row</Td>
                    <Td>This cell inherits <code>vertical-align: bottom;</code> from the table row</Td>
                    <Td>This cell inherits <code>vertical-align: bottom;</code> from the table row</Td>
                    <Td>This here is some placeholder text, intended to take up quite a bit of vertical space, to
                        demonstrate how the vertical alignment works in the preceding cells.
                    </Td>
                </Tr>
                <Tr>
                    <Td>This cell inherits <code>vertical-align: middle;</code> from the table</Td>
                    <Td>This cell inherits <code>vertical-align: middle;</code> from the table</Td>
                    <Td align="top">This cell is aligned to the top.</Td>
                    <Td>This here is some placeholder text, intended to take up quite a bit of vertical space, to
                        demonstrate how the vertical alignment works in the preceding cells.
                    </Td>
                </Tr>
            </TBody>
        </Table>

        <h4>Nesting </h4>
        <Table small bordered>
            <THead>
                <Tr>
                    <Th>#</Th>
                    <Th>First</Th>
                    <Th>Last</Th>
                </Tr>
            </THead>
            <TBody>
                {
                    [...Array(5).keys()].map((i, k) =>
                        <Tr key={k}>
                            <Td>{i}</Td>
                            <Td>{i}</Td>
                            <Td>
                                <Table>
                                    <TBody>
                                        {
                                            [...Array(5).keys()].map((i, k) =>
                                                <Tr key={k}>
                                                    <Td>{i}</Td>
                                                    <Td>{i}</Td>
                                                    <Td>{i}</Td>
                                                </Tr>
                                            )
                                        }
                                    </TBody>
                                </Table>
                            </Td>
                        </Tr>
                    )
                }
            </TBody>
        </Table>

        <h4>Captions</h4>

        <Table small bordered caption="Hello Table Caption">
            <THead>
                <Tr>
                    <Th>#</Th>
                    <Th>First</Th>
                    <Th>Last</Th>
                    <Th>Handle</Th>
                </Tr>
            </THead>
            <TBody divider>
                {
                    [...Array(5).keys()].map((i, k) =>
                        <Tr key={k}>
                            <Td>{i}</Td>
                            <Td>{i}</Td>
                            <Td>{i}</Td>
                            <Td>{i}</Td>
                        </Tr>
                    )
                }
            </TBody>
        </Table>

        <h4>Responsive Tables</h4>
        <Table small bordered responsive>
            <THead>
                <Tr>
                    <Th>#</Th>
                    <Th>First</Th>
                    <Th>Last</Th>
                    <Th>Handle</Th>
                </Tr>
            </THead>
            <TBody divider>
                {
                    [...Array(5).keys()].map((i, k) =>
                        <Tr key={k}>
                            <Td>{i}</Td>
                            <Td>{i}</Td>
                            <Td>{i}</Td>
                            <Td>{i}</Td>
                        </Tr>
                    )
                }
            </TBody>
        </Table>
    </>
}