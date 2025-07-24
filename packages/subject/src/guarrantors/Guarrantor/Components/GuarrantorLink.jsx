import { ProxyLink } from "@hrbolek/uoisfrontend-shared"

export const GuarrantorURI = '/guarrantor/guarrantor/view/';

/**
 * A React component that renders a `ProxyLink` to an "guarrantor" entity's view page.
 *
 * The target URL is dynamically constructed using the `guarrantor` object's `id`, and the link displays
 * the `guarrantor` object's `name` as its clickable content.
 *
 * @function GuarrantorLink
 * @param {Object} props - The properties for the `GuarrantorLink` component.
 * @param {Object} props.guarrantor - The object representing the "guarrantor" entity.
 * @param {string|number} props.guarrantor.id - The unique identifier for the "guarrantor" entity. Used to construct the target URL.
 * @param {string} props.guarrantor.name - The display name for the "guarrantor" entity. Used as the link text.
 *
 * @returns {JSX.Element} A `ProxyLink` component linking to the specified "guarrantor" entity's view page.
 *
 * @example
 * // Example usage with a sample guarrantor entity:
 * const guarrantorEntity = { id: 123, name: "Example Guarrantor Entity" };
 * 
 * <GuarrantorLink guarrantor={guarrantorEntity} />
 * // Renders: <ProxyLink to="/guarrantor/guarrantor/view/123">Example Guarrantor Entity</ProxyLink>
 *
 * @remarks
 * - This component utilizes `ProxyLink` to ensure consistent link behavior, including parameter preservation and conditional reloads.
 * - The URL format `/guarrantor/guarrantor/view/:id` must be supported by the application routing.
 *
 * @see ProxyLink - The base component used for rendering the link.
 */
export const GuarrantorLink = ({guarrantor}) => {
    return <ProxyLink to={GuarrantorURI + guarrantor.id}>{guarrantor.name}</ProxyLink>
}