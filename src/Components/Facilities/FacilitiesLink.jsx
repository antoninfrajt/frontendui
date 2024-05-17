import { Col, Dropdown } from "react-bootstrap"
import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src/Components/ProxyLink.jsx"

export const FacilitiesLink = ({facility, menu = false}) => {
    if (menu) {
        return(
            <Dropdown>
                {"Zázemí " + facility?.name}
                <Dropdown.Toggle>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item as ={"div"}><ProxyLink to ={"/facilities/facility/view/" + facility?.id}>View</ProxyLink></Dropdown.Item>
                    <Dropdown.Item as ={"div"}><ProxyLink to ={"/facilities/facility/edit/" + facility?.id}>Edit</ProxyLink></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        )
    }
    else {
        if (facility != null) {
            return(
                <ProxyLink to ={"/facilities/facility/view/" + facility?.id}>{facility?.name}</ProxyLink>
            )
        }
        else {
            return(
                <Col>Žádné</Col>
            )
        }
    }
}