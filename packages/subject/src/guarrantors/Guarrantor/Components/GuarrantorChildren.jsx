import { ChildWrapper } from "@hrbolek/uoisfrontend-shared";

/**
 * GuarrantorChildren Component
 *
 * A utility React component that wraps its children with the `ChildWrapper` component, 
 * passing down an `guarrantor` entity along with other props to all child elements.
 * This component is useful for injecting a common `guarrantor` entity into multiple children 
 * while preserving their existing functionality.
 *
 * @component
 * @param {Object} props - The props for the GuarrantorChildren component.
 * @param {any} props.guarrantor - An entity (e.g., object, string, or other data) to be passed to the children.
 * @param {React.ReactNode} props.children - The children elements to be wrapped and enhanced.
 * @param {...any} props - Additional props to be passed to each child element.
 *
 * @returns {JSX.Element} A `ChildWrapper` component containing the children with the injected `guarrantor` entity.
 *
 * @example
 * // Example usage:
 * const guarrantorEntity = { id: 1, message: "No data available" };
 *
 * <GuarrantorChildren guarrantor={guarrantorEntity}>
 *     <CustomMessage />
 *     <CustomIcon />
 * </GuarrantorChildren>
 *
 * // Result: Both <CustomMessage /> and <CustomIcon /> receive the 'guarrantor' prop with the specified entity.
 */
export const GuarrantorChildren = ({guarrantor, children, ...props}) => <ChildWrapper guarrantor={guarrantor} children={children} {...props} />