import { GuarrantorURI } from "../Components/GuarrantorLink"
import { GuarrantorPage } from "./GuarrantorPage"

/**
 * A router segment definition for the Guarrantor page.
 *
 * This object defines a route path and its associated React element.
 * The `path` property is constructed using a base URI stored in `GuarrantorURI`
 * and expects an `id` parameter. The `element` property specifies the React
 * component to render when the route matches.
 *
 * @constant {Object} GuarrantorRouterSegment
 * @property {string} path - The URL path pattern for the route, e.g., "/guarrantor/guarrantor/view/:id".
 * @property {JSX.Element} element - The React element (component) to render, in this case, <GuarrantorPage />.
 */
export const GuarrantorRouterSegment = {
    path: `/${GuarrantorURI}/:id`,
    element: <GuarrantorPage />,
}