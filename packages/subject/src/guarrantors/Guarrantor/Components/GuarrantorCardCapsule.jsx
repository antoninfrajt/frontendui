import { CardCapsule } from "@hrbolek/uoisfrontend-shared"
import { PersonFill } from "react-bootstrap-icons"
import { GuarrantorLink } from "./GuarrantorLink"

/**
 * A specialized card component that displays an `GuarrantorLink` as its title and encapsulates additional content.
 *
 * This component extends the `CardCapsule` component by using a combination of a `PersonFill` icon and 
 * an `GuarrantorLink` component in the card's header. The `children` prop is used to render any content 
 * inside the card body. It is designed for use with entities represented by the `guarrantor` object.
 *
 * @component
 * @param {Object} props - The props for the GuarrantorCardCapsule component.
 * @param {Object} props.guarrantor - The object representing the guarrantor entity.
 * @param {string|number} props.guarrantor.id - The unique identifier for the guarrantor entity.
 * @param {string} props.guarrantor.name - The display name for the guarrantor entity.
 * @param {React.ReactNode} [props.children=null] - The content to render inside the card's body.
 *
 * @returns {JSX.Element} The rendered card component with a dynamic title and body content.
 *
 * @example
 * // Example usage:
 * import { GuarrantorCardCapsule } from './GuarrantorCardCapsule';
 * import { Button } from 'react-bootstrap';
 *
 * const guarrantorEntity = { id: 123, name: "Example Entity" };
 *
 * <GuarrantorCardCapsule guarrantor={guarrantorEntity}>
 *   <Button variant="primary">Click Me</Button>
 * </GuarrantorCardCapsule>
 */
export const GuarrantorCardCapsule = ({guarrantor, children, title=<><PersonFill /> <GuarrantorLink guarrantor={guarrantor} /></>}) => {
    return (
        <CardCapsule title={title}>
            {children}
        </CardCapsule>
    )
}
