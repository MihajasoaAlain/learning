import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useData } from "../../context/DataContext";
export default function Modif({ setShowModif, Etat,id }) {
  const {fetchData} =useData();
  const [design, setDesign] = useState("");
  const [etat, setEtat] = useState("Bon");
  const [qte, setQte] = useState(0);
  const modalRefDel = useRef(null);
  function close(e) {
    e.preventDefault();
    setShowModif(false);
  }
  function handleClickOutside(e) {
    if (
      modalRefDel.current &&
      !modalRefDel.current.contains(e.target) &&
      Etat
    ) {
      console.log(etat);
      console.log("hey you are here");
      setShowModif(false);
      console.log("ca marche");
    } else {
      Etat = true;
    }
  }
  async function update(num) {
    const newProduit = {
      numMateriel : num,
      designation: design,
      etat: etat,
      quantite: qte,
      
      // Correction de la clé "quantite"
    }
    console.log(newProduit);
    try {
      // Faire la requête POST avec Axios
    await axios.put(
        "http://simplecrud/stock.php",
        newProduit
      );

      // Traiter la réponse en cas de succès
      console.log("Données ajour avec succès :");

      await fetchData();
      // Réinitialiser le formulaire si nécessaire
      setDesign("");
      setEtat("Bon");
      setQte(0);
    } catch (error) {
      // Gérer les erreurs
      console.error("Erreur lors de l'ajout des données :", error);
      confirm('erreur here');
    }
    
    
  }
  useEffect(() => {
    console.log("heyyy");
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <form ref={modalRefDel} className="form modal" onSubmit={close}>
      <div className="modal-content">
        <h2 className="text-center text-decoration-underline">Modification</h2>
        <label htmlFor="" className="h3 mt-5">
          Designation
        </label>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setDesign(e.target.value)}
        />
        <label htmlFor="" className="h3 mt-2">
          Etat
        </label>
        <select
          name="etat"
          id=""
          className="form-select"
          onChange={(e) => setEtat(e.target.value)}
        >
          <option value="Bon">Bon</option>
          <option value="Mauvais">Mauvais</option>
          <option value="Abime">Abimé</option>
        </select>
        <label htmlFor="" className="h3 mt-2">
          Quantité
        </label>
        <input
          type="number"
          className="form-control"
          onChange={(e) => setQte(e.target.value)}
        />
        <div className="modal-buttons">
          <button type="submit" className="btn btn-success">
            <i>
              <img src="" alt="" />
            </i>
            <span className="h5" onClick={() => update(id)}>Modifier</span>
          </button>
          <button type="submit">Annuler</button>
        </div>
      </div>
    </form>
  );
}
