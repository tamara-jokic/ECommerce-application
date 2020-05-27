import React from "react";
import ButtonRadius from "../../Components/ButtonRadius";
import useToggle from "../../Hooks/useToggle";
import ModalWrapper from "../../Components/ModalWrapper";
import AdministrationP from "./AdministrationP";
import AdministrationU from "./AdministrationU";

const Administration = (props) => {
  const [modalOne, toggleModalOne] = useToggle(false);
  const [modalTwo, toggleModalTwo] = useToggle(false);

  return (
    <div className="modal-triggers mt-5">
      <ButtonRadius text="Administracija proizvoda" onclick={toggleModalOne} />
      <ButtonRadius text="Administracija Korisnika" onclick={toggleModalTwo} />

      <ModalWrapper show={modalOne}>
        <AdministrationP close={toggleModalOne} />
      </ModalWrapper>

      <ModalWrapper show={modalTwo}>
        <AdministrationU close={toggleModalTwo} />
      </ModalWrapper>
    </div>
  );
};

export default Administration;
