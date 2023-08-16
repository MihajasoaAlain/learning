import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useData } from "../../context/DataContext";
export default function Delete({ setShowDel, etat,id }) {
  const {fetchData} =useData();
  const modalRefDel = useRef(null);
  function close(e) {
    e.preventDefault();
    setShowDel(false);
  }
  function handleClickOutside(e) {
    if (
      modalRefDel.current &&
      !modalRefDel.current.contains(e.target) &&
      etat
    ) {
      console.log(etat);
      console.log("hey you are here");
      setShowDel(false);
      console.log("ca marche");
    } else {
      etat = true;
    }
  }
  async function suppr(num) {
    console.log(num);
    try {
      // Faire la requête POST avec Axios
      await axios.delete("http://simplecrud/stock.php?numMateriel="+parseInt(num))
      .then(response => {
        console.log('Resource deleted successfully.');
      })
      .catch(error => {
        confirm('Error deleting resource.');
      });
      // Traiter la réponse en cas de succès
      console.log("Effacer avec succès :");

      await fetchData();
      // Réinitialiser le formulaire si nécessaire
    } catch (error) {
      // Gérer les erreurs
      console.error("Erreur lors de l'ajout des données :", error);
      confirm("erreur here");
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
    <form
      ref={modalRefDel}
      className="form 
    
    modal"
      onSubmit={close}
    >
      <div className="modal-content">
        <h2>Confirmation de suppression</h2>
        <p>Êtes-vous sûr de vouloir supprimer cet élément ?</p>
        <div className="modal-buttons">
          <button onClick={()=>suppr(id)} type="submit">Supprimer</button>
          <button type="submit">Annuler</button>
        </div>
      </div>
    </form>
  );
}
