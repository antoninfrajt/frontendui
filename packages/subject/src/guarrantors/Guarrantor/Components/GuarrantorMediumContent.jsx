/**
 * A component that displays medium-level content for an guarrantor entity.
 *
 * This component renders a label "GuarrantorMediumContent" followed by a serialized representation of the `guarrantor` object
 * and any additional child content. It is designed to handle and display information about an guarrantor entity object.
 *
 * @component
 * @param {Object} props - The properties for the GuarrantorMediumContent component.
 * @param {Object} props.guarrantor - The object representing the guarrantor entity.
 * @param {string|number} props.guarrantor.id - The unique identifier for the guarrantor entity.
 * @param {string} props.guarrantor.name - The name or label of the guarrantor entity.
 * @param {React.ReactNode} [props.children=null] - Additional content to render after the serialized `guarrantor` object.
 *
 * @returns {JSX.Element} A JSX element displaying the entity's details and optional content.
 *
 * @example
 * // Example usage:
 * const guarrantorEntity = { id: 123, name: "Sample Entity" };
 * 
 * <GuarrantorMediumContent guarrantor={guarrantorEntity}>
 *   <p>Additional information about the entity.</p>
 * </GuarrantorMediumContent>
 */
export const GuarrantorMediumContent = ({guarrantor, children}) => {
    return (
        <>
            GuarrantorMediumContent <br />
            {JSON.stringify(guarrantor)}
            {children}
        </>
    )
}
