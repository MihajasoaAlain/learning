import React, { useEffect, useRef } from 'react'
export default function Modif({setShowDel,etat}) {
  const modalRefDel = useRef(null);
          function close(e){
            e.preventDefault();
            setShowDel(false);
          }
          function handleClickOutside(e) {
            if (modalRefDel.current && !modalRefDel.current.contains(e.target)&& etat) {
              console.log(etat)
                console.log('hey you are here');
                setShowDel(false);
              console.log('ca marche')
            }
            else{
              etat= true;
            }
          }
          useEffect(() => {
            console.log('heyyy');
            document.addEventListener('click', handleClickOutside);
            return () => {
              document.removeEventListener('click', handleClickOutside);
            };
          }, []);

  return (
    <form ref={modalRefDel} className="form 
    
    modal" onSubmit={close}>
      <div className="modal-content">
        <h2>Confirmation de suppression</h2>
        <p>Êtes-vous sûr de vouloir supprimer cet élément ?</p>
        <div className="modal-buttons">
          <button type="submit">Supprimer</button>
          <button type="submit">Annuler</button>
        </div>
      </div>
    </form>
  );
}
