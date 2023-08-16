import axios from "axios";
import React, { useState } from "react";
import { useData } from "../context/DataContext";
export default function Formulaire() {
  const {fetchData} =useData();
  const [design, setDesign] = useState("");
  const [etat, setEtat] = useState("Bon");
  const [qte, setQte] = useState(0);
  const createProduit = async (event) => {
    event.preventDefault();
      console.log(design);
      console.log(etat);
      console.log(qte);
      const newProduit = {
        designation: design,
        etat: etat,
        quantite: qte, // Correction de la clé "quantite"
      };
    console.log(newProduit);
    try {
      // Faire la requête POST avec Axios
      const response = await axios.post(
        "http://simplecrud/stock.php",
        newProduit
      );
        
      // Traiter la réponse en cas de succès
      console.log("Données ajoutées avec succès :", response.data);
      fetchData();

      // Réinitialiser le formulaire si nécessaire
      setDesign("");
      setEtat("Bon");
      setQte(0);
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
