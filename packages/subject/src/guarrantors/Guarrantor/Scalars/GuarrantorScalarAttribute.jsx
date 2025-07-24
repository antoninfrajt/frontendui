/**
 * A component for displaying the `scalar` attribute of an guarrantor entity.
 *
 * This component checks if the `scalar` attribute exists on the `guarrantor` object. If `scalar` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it displays a placeholder message
 * and a JSON representation of the `scalar` attribute.
 *
 * @component
 * @param {Object} props - The props for the GuarrantorScalarAttribute component.
 * @param {Object} props.guarrantor - The object representing the guarrantor entity.
 * @param {*} [props.guarrantor.scalar] - The scalar attribute of the guarrantor entity to be displayed, if defined.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `scalar` attribute or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const guarrantorEntity = { scalar: { id: 1, name: "Sample Scalar" } };
 *
 * <GuarrantorScalarAttribute guarrantor={guarrantorEntity} />
 */
export const GuarrantorScalarAttribute = ({guarrantor}) => {
    const {scalar} = guarrantor
    if (typeof scalar === 'undefined') return null
    return (
        <>
            Probably {'<ScalarMediumCard scalar=\{scalar\} />'} <br />
            {JSON.stringify(scalar)}
        </>
    )
}