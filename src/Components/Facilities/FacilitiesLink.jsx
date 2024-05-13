import { Dropdown } from "react-bootstrap"

export const FacilitiesLink = ({facility}) => {
    return(
        <Dropdown>
            <Dropdown.Menu>
                <Dropdown.Item as ={"div"}><ProxyLink to ={"/facilities/facility/view/" + facility?.id}>View</ProxyLink></Dropdown.Item>
                <Dropdown.Item as ={"div"}><ProxyLink to ={"/facilities/facility/edit/" + facility?.id}>Edit</ProxyLink></Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}