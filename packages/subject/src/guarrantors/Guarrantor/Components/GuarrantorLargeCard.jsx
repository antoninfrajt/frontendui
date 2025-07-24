import Row from "react-bootstrap/Row"
import { LeftColumn, MiddleColumn } from "@hrbolek/uoisfrontend-shared"
import { GuarrantorCardCapsule } from "./GuarrantorCardCapsule"
import { GuarrantorMediumCard } from "./GuarrantorMediumCard"

/**
 * A large card component for displaying detailed content and layout for an guarrantor entity.
 *
 * This component wraps an `GuarrantorCardCapsule` with a flexible layout that includes multiple
 * columns. It uses a `Row` layout with a `LeftColumn` for displaying an `GuarrantorMediumCard`
 * and a `MiddleColumn` for rendering additional children.
 *
 * @component
 * @param {Object} props - The properties for the GuarrantorLargeCard component.
 * @param {Object} props.guarrantor - The object representing the guarrantor entity.
 * @param {string|number} props.guarrantor.id - The unique identifier for the guarrantor entity.
 * @param {string} props.guarrantor.name - The name or label of the guarrantor entity.
 * @param {React.ReactNode} [props.children=null] - Additional content to render in the middle column.
 *
 * @returns {JSX.Element} A JSX element combining a large card layout with dynamic content.
 *
 * @example
 * // Example usage:
 * const guarrantorEntity = { id: 123, name: "Sample Entity" };
 * 
 * <GuarrantorLargeCard guarrantor={guarrantorEntity}>
 *   <p>Additional content for the middle column.</p>
 * </GuarrantorLargeCard>
 */
export const GuarrantorLargeCard = ({guarrantor, children}) => {
    return (
        <GuarrantorCardCapsule guarrantor={guarrantor} >
            <Row>
                <LeftColumn>
                    <GuarrantorMediumCard guarrantor={guarrantor}/>
                </LeftColumn>
                <MiddleColumn>
                    {children}
                </MiddleColumn>
            </Row>
        </GuarrantorCardCapsule>
    )
}
