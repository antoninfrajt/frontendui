import {LeftColumn, MiddleColumn} from "@hrbolek/uoisfrontend-shared"
import {Row, Col, Card} from "react-bootstrap"
import {Check, PersonFill, Trash} from "react-bootstrap-icons";
import React, {useState, useEffect} from "react";
import {GuarrantCUDButton} from "./GuarrantCUDButton";
import {UserInputSearch} from "./UserInputSearch";

/**
 * A component that displays medium-level content for an subject entity.
 *
 * This component renders a label "SubjectMediumContent" followed by a serialized representation of the subject object
 * and any additional child content. It is designed to handle and display information about an subject entity object.
 *
 * @component
 * @param {Object} props - The properties for the SubjectMediumContent component.
 * @param {Object} props.subject - The object representing the subject entity.
 * @param {string|number} props.subject.id - The unique identifier for the subject entity.
 * @param {string} props.subject.name - The name or label of the subject entity.
 * @param {React.ReactNode} [props.children=null] - Additional content to render after the serialized subject object.
 *
 * @returns {JSX.Element} A JSX element displaying the entity's details and optional content.
 *
 * @example
 * // Example usage:
 * const subjectEntity = { id: 123, name: "Sample Entity" };
 *
 * <SubjectMediumContent subject={subjectEntity}>
 *   <p>Additional information about the entity.</p>
 * </SubjectMediumContent>
 */
const GUARANTOR_ROLE_ID = "5f0c247e-931f-11ed-9b95-0242ac110002";

export const SubjectMediumContent = ({subject, children}) => {
    const [selectedGuarant, setSelectedGuarant] = useState(null);
    // State for the list of guarantors
    const [guarantors, setGuarantors] = useState([]);

    // Update guarantors state when subject.guarantors changes
    useEffect(() => {
        setGuarantors(
            Array.isArray(subject.guarantors)
                ? subject.guarantors
                : subject.guarantors
                    ? [subject.guarantors]
                    : []
        );
    }, [subject.guarantors]);

    /**
     * Handles adding a new guarantor to the list after successful creation.
     * @param {Object} result - The result from the add action (not used here).
     */
    const handleGuarantorAdded = (result) => {
        if (selectedGuarant) {
            setGuarantors(prev => [
                ...prev,
                {
                    id: selectedGuarant.id,
                    roles: [
                        {
                            user: {
                                name: selectedGuarant.name || selectedGuarant.fullname?.split(" ")[0] || "",
                                surname: selectedGuarant.surname || selectedGuarant.fullname?.split(" ").slice(1).join(" ") || "",
                            }
                        }
                    ]
                }
            ]);
        }
        setSelectedGuarant(null);
    };

    /**
     * Handles removing a guarantor from the list.
     * @param {Object} guarant - The guarantor role to remove.
     */
    const handleGuarantorDeleted = (guarant) => {
        setGuarantors(prev =>
            prev.filter(g =>
                !g.roles.some(role => role.id === guarant.id)
            )
        );
    };

    return (
        <Card className="mb-4 shadow-sm">
            <Card.Body>
                <Card.Title as="h5" className="mb-3">
                    Informace o předmětu
                </Card.Title>
                <div>
                  <Row className="mb-2">
        <Col sm={4} className="fw-bold">Název:</Col>
        <Col sm={8}>{subject?.name}</Col>
      </Row>
      <Row className="mb-2">
        <Col sm={4} className="fw-bold">Anglický název:</Col>
        <Col sm={8}>{subject?.nameEn || "— Bez popisu —"}</Col>
      </Row>
      <Row className="mb-2">
        <Col sm={4} className="fw-bold">Popis:</Col>
        <Col sm={8}>{subject?.description || "— Bez popisu —"}</Col>
      </Row>
      <Row className="mb-2">
        <Col sm={4} className="fw-bold">ID:</Col>
        <Col sm={8}>{subject?.id}</Col>
      </Row>
      <Row className="mb-2">
            <Col sm={4} className="fw-bold">Poslední změna:</Col>
            <Col sm={8}>{subject?.lastchange}</Col>
      </Row>
      <Row className="mb-2">
            <Col sm={4} className="fw-bold">Semestry:</Col>
      </Row>
        {subject.semesters && subject.semesters.length > 0 && (
  subject.semesters.map((semester) => (
    <Col key={semester.id}>{semester.order}</Col>
      ))
)}
            </div>
                <div>
                    <h5>Garanti programu:</h5>
                    {/* List of current guarantors */}
                    {guarantors.length > 0 ? (
                        guarantors.map((guarantor) => (
                            <div key={guarantor.id} className="guarantor-item"
                                 style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                {guarantor.roles && guarantor.roles.length > 0 ? (
                                    guarantor.roles.map((role, idx) => (
                                        <span key={idx} style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                                    <PersonFill color="#0d6efd" style={{ marginRight: "0.25rem" }} />
                                            {role.user?.name}
                                            {role.user?.surname ?  `${role.user.surname}` : ""}
                                            {/* Delete button for each guarantor role */}

                                                <GuarrantCUDButton
                                                    operation="D"
                                                    guarant={{
                                                        id: role.id,
                                                        lastchange: role.lastchange,
                                                        name: role.user?.name,
                                                        surname: role.user?.surname
                                                    }}
                                                    onDone={() => handleGuarantorDeleted(role)}
                                                    style={{
                                                        background: "transparent",
                                                        color: "#dc3545",
                                                        border: "none",
                                                        borderRadius: "50%",
                                                        width: "28px",
                                                        height: "28px",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        cursor: "pointer",
                                                        fontSize: "1.2rem",
                                                        transition: "background 0.2s",
                                                        padding: 0,
                                                    }}
                                                    className="guarant-delete-btn"
                                                    title="Remove guarantor"
                                                >
                                                    <Trash />
                                                </GuarrantCUDButton>

                                </span>
                                    ))
                                ) : null}
                            </div>
                        ))
                    ) : (
                        <span style={{ display: "inline-block", marginBottom: "1rem" }}>
                    Žádní garanti programu nejsou přiřazeni.
                </span>
                    )}
                    {/* UI for adding a new guarantor */}

                        <>
                            <UserInputSearch
                                program={subject}
                                groupId={subject.groupId}
                                onSelect={setSelectedGuarant}
                            />
                            {selectedGuarant && (
                                <GuarrantCUDButton
                                    operation="C"
                                    guarant={{
                                        userId: selectedGuarant.id,
                                        name: selectedGuarant.name || selectedGuarant.fullname?.split(" ")[0] || "",
                                        surname: selectedGuarant.surname || selectedGuarant.fullname?.split(" ").slice(1).join(" ") || "",
                                        groupId: subject.groupId,
                                        roletypeId: GUARANTOR_ROLE_ID,
                                    }}
                                    onDone={handleGuarantorAdded}
                                    className="btn btn-primary"
                                    style={{ marginTop: 8 }}
                                >
                                    Přidat garanta
                                    <Check style={{ marginLeft: "0.5rem" }} />
                                </GuarrantCUDButton>
                            )}
                        </>

                </div>

                {children && <div className="mt-4">{children}</div>}
            </Card.Body>
        </Card>
    );
};