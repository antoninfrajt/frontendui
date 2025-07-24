import { PersonFill } from "react-bootstrap-icons"
import { GuarrantorLink } from "./GuarrantorLink"
import { GuarrantorCardCapsule } from "./GuarrantorCardCapsule"
import { GuarrantorMediumContent } from "./GuarrantorMediumContent"

/**
 * A card component that displays detailed content for an guarrantor entity.
 *
 * This component combines `GuarrantorCardCapsule` and `GuarrantorMediumContent` to create a card layout
 * with a title and medium-level content. The title includes a `PersonFill` icon and a link to
 * the guarrantor entity's details, while the body displays serialized details of the entity along
 * with any additional children passed to the component.
 *
 * @component
 * @param {Object} props - The properties for the GuarrantorMediumCard component.
 * @param {Object} props.guarrantor - The object representing the guarrantor entity.
 * @param {string|number} props.guarrantor.id - The unique identifier for the guarrantor entity.
 * @param {string} props.guarrantor.name - The name or label of the guarrantor entity.
 * @param {React.ReactNode} [props.children=null] - Additional content to render inside the card body.
 *
 * @returns {JSX.Element} A JSX element combining a card with a title and detailed content.
 *
 * @example
 * // Example usage:
 * const guarrantorEntity = { id: 123, name: "Sample Entity" };
 * 
 * <GuarrantorMediumCard guarrantor={guarrantorEntity}>
 *   <p>Additional details or actions for the entity.</p>
 * </GuarrantorMediumCard>
 */
export const GuarrantorMediumCard = ({guarrantor, children}) => {
    return (
        <GuarrantorCardCapsule title={<><PersonFill /> <GuarrantorLink guarrantor={guarrantor} /></>}>
            <GuarrantorMediumContent guarrantor={guarrantor}>
                {children}
            </GuarrantorMediumContent>
        </GuarrantorCardCapsule>
    )
}
