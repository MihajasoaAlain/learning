import React, { useState } from 'react'
export default function Formulaire() {

  const [myProduit,setProduit] = useState([]);
  const [design,setDesign] = useState('');
  const [etat,setEtat] = useState('Bon');
  const [qte,setQte] = useState(0);
    function createProduit(e){
      console.log('hey')
      e.preventDefault();
      setProduit([...myProduit ,{num:1,designation:design,Etat:etat,qte:qte}]);
      console.log(myProduit);
    }
  return (
    <form className="form" onSubmit={createProduit}>
     <p className="h1 text-center">Formulaires</p>
     <label htmlFor="" className="h3 mt-5">Designation</label>
     <input  type="text" className="form-control"  onChange={(e) => setDesign(e.target.value)} />
     <label htmlFor="" className="h3 mt-2">Etat</label>
     <select  name="etat" id="" className="form-select" onChange={(e)=>setEtat(e.target.value)}>
       <option selectedvalue="Bon">Bon</option>
       <option value="Mauvais">Mauvais</option>
       <option value="Abime">Abimé</option>
     </select>
     <label htmlFor="" className="h3 mt-2">Quantité</label>
     <input 
       type="number"
       className="form-control"
       placeholder="choisir la quantité..."  minLength="0" onChange={(e)=>setQte(e.target.value)}
     />
     <button type="submit" className="btn btn-success form-control mt-5">
       <i><img src="" alt="" /></i><span className="h5">Ajouter</span>
     </button>
   </form>
)
}


