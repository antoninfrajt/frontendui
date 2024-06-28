import { Col, Dropdown } from "react-bootstrap"
import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src/Components/ProxyLink.jsx"

export const FacilityLink = ({facility, menu = false}) => {
    if (menu) {
        return(
            <Dropdown className="d-inline mx-2" autoClose="outside" size="sm">
                <ProxyLink to ={"/facilities/facility/view/" + facility?.id}>{"Zázemí " + facility?.name}</ProxyLink>
                {/* {"Zázemí " + facility?.name} */}
                <Dropdown.Toggle split variant='secondary-outline' id="dropdown-basic" size="sm">
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