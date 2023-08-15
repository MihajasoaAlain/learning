import React, { useEffect, useRef } from 'react'
export default function Modif({setShowModif,etat}) {
  const modalRef = useRef(null);
          function close(e){
            e.preventDefault();
            setShowModif(false);
          }
          function handleClickOutside(e) {
            if (modalRef.current && !modalRef.current.contains(e.target)&& etat) {
              console.log(etat)
                console.log('hey you are here');
                setShowModif(false);
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
    <form ref={modalRef} className="form modal" onSubmit={close}>
      <div className="modal-content">
        <h2>Modification</h2>
        <label htmlFor="" className="h3 mt-5">
          Designation
        </label>
        <input type="text" className="form-control" />
        <label htmlFor="" className="h3 mt-2">
          Etat
        </label>
        <select name="etat" id="" className="form-select">
          <option value="Bon">Bon</option>
          <option value="Mauvais">Mauvais</option>
          <option value="Abime">Abimé</option>
        </select>
        <label htmlFor="" className="h3 mt-2">
          Quantité
        </label>
        <input type="number" className="form-control" />
        <div className="modal-buttons">
          <button type='submit' className="btn btn-success">
            <i>
              <img src="" alt="" />
            </i>
            <span className="h5">Modifier</span>
          </button>
          <button type='submit'>Annuler</button>
        </div>
      </div>
    </form>
);
}