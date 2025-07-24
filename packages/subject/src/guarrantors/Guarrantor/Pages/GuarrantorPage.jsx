import { useState } from "react"
import { useParams } from "react-router"

import { CreateDelayer, ErrorHandler, LoadingSpinner } from "@hrbolek/uoisfrontend-shared"
import { useAsyncAction } from "@hrbolek/uoisfrontend-gql-shared"
import { GuarrantorLargeCard } from "../Components"
import { GuarrantorReadAsyncAction } from "../Queries"
import { GuarrantorPageNavbar } from "./GuarrantorPageNavbar"

/**
 * A page content component for displaying detailed information about an guarrantor entity.
 *
 * This component utilizes `GuarrantorLargeCard` to create a structured layout and displays 
 * the serialized representation of the `guarrantor` object within the card's content.
 *
 * @component
 * @param {Object} props - The properties for the GuarrantorPageContent component.
 * @param {Object} props.guarrantor - The object representing the guarrantor entity.
 * @param {string|number} props.guarrantor.id - The unique identifier for the guarrantor entity.
 * @param {string} props.guarrantor.name - The name or label of the guarrantor entity.
 *
 * @returns {JSX.Element} A JSX element rendering the page content for an guarrantor entity.
 *
 * @example
 * // Example usage:
 * const guarrantorEntity = { id: 123, name: "Sample Entity" };
 * 
 * <GuarrantorPageContent guarrantor={guarrantorEntity} />
 */
const GuarrantorPageContent = ({guarrantor}) => {
    return (<>
        <GuarrantorPageNavbar guarrantor={guarrantor} />
        <GuarrantorLargeCard guarrantor={guarrantor}>
            Guarrantor {JSON.stringify(guarrantor)}
        </GuarrantorLargeCard>
    </>)
}

/**
 * A lazy-loading component for displaying content of an guarrantor entity.
 *
 * This component is created using `createLazyComponent` and wraps `GuarrantorPageContent` to provide
 * automatic data fetching for the `guarrantor` entity. It uses the `GuarrantorReadAsyncAction` to fetch
 * the entity data and dynamically injects it into the wrapped component as the `guarrantor` prop.
 *
 * @constant
 * @type {React.Component}
 *
 * @param {Object} props - The props for the lazy-loading component.
 * @param {string|number} props.guarrantor - The identifier of the guarrantor entity to fetch and display.
 *
 * @returns {JSX.Element} A component that fetches the `guarrantor` entity data and displays it
 * using `GuarrantorPageContent`, or shows loading and error states as appropriate.
 *
 * @example
 * // Example usage:
 * const guarrantorId = "12345";
 *
 * <GuarrantorPageContentLazy guarrantor={guarrantorId} />
 */
const GuarrantorPageContentLazy = ({guarrantor}) => {
    const { error, loading, entity, fetch } = useAsyncAction(GuarrantorReadAsyncAction, guarrantor)
    const [delayer] = useState(() => CreateDelayer())

    const handleChange = async(e) => {
        // console.log("GroupCategoryPageContentLazy.handleChange.e", e)
        const data = e.target.value
        const serverResponse = await delayer(() => fetch(data))
        // console.log("GroupCategoryPageContentLazy.serverResponse", serverResponse)
    }
    const handleBlur = async(e) => {
        // console.log("GroupCategoryPageContentLazy.handleBlur.e", e)
        const data = e.target.value
        const serverResponse = await delayer(() => fetch(data))
        // console.log("GroupCategoryPageContentLazy.serverResponse", serverResponse)
    }

    return (<>
        {loading && <LoadingSpinner />}
        {error && <ErrorHandler errors={error} />}
        {entity && <GuarrantorPageContent guarrantor={entity}  onChange={handleChange} onBlur={handleBlur} />}
    </>)
}

/**
 * A page component for displaying lazy-loaded content of an guarrantor entity.
 *
 * This component extracts the `id` parameter from the route using `useParams`,
 * constructs an `guarrantor` object, and passes it to the `GuarrantorPageContentLazy` component.
 * The `GuarrantorPageContentLazy` component handles the lazy-loading and rendering of the entity's content.
 *
 * @component
 * @returns {JSX.Element} The rendered page component displaying the lazy-loaded content for the guarrantor entity.
 *
 * @example
 * // Example route setup:
 * <Route path="/guarrantor/:id" element={<GuarrantorPage />} />
 *
 * // Navigating to "/guarrantor/12345" will render the page for the guarrantor entity with ID 12345.
 */
export const GuarrantorPage = () => {
    const {id} = useParams()
    const guarrantor = {id}
    return <GuarrantorPageContentLazy guarrantor={guarrantor} />
}