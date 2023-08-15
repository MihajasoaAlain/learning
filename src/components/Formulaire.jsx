import axios from "axios";
import React, { useState } from "react";
export default function Formulaire() {
  const [myProduit, setProduit] = useState({
    designation: "",
    etat: "",
    quatite: "",
  });
  const [design, setDesign] = useState("");
  const [etat, setEtat] = useState("Bon");
  const [qte, setQte] = useState(0);
  const createProduit = async (event) => {
    event.preventDefault();
    setProduit({ designation: design, Etat: etat, qte: qte });
    try {
      // Faire la requête POST avec Axios
      const response = await axios.post(
        "http://simplecrud/stock.php",
        myProduit
      );

      // Traiter la réponse en cas de succès
      console.log("Données ajoutées avec succès :", response.data);

      // Réinitialiser le formulaire si nécessaire
      setProduit({
        designation: "",
        etat: "",
        quatite: "",
        // Remettre les champs à leurs valeurs initiales
      });
    } catch (error) {
      // Gérer les erreurs
      console.error("Erreur lors de l'ajout des données :", error);
    }
  };
  return (
    <form className="form" onSubmit={createProduit}>
      <p className="h1 text-center">Formulaires</p>
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
        <option selectedvalue="Bon">Bon</option>
        <option value="Mauvais">Mauvais</option>
        <option value="Abime">Abimé</option>
      </select>
      <label htmlFor="" className="h3 mt-2">
        Quantité
      </label>
      <input
        type="number"
        className="form-control"
        placeholder="choisir la quantité..."
        minLength="0"
        onChange={(e) => setQte(e.target.value)}
      />
      <button type="submit" className="btn btn-success form-control mt-5">
        <i>
          <img src="" alt="" />
        </i>
        <span className="h5">Ajouter</span>
      </button>
    </form>
  );
}
