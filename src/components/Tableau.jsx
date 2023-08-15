import React, { useState } from "react";
 import Modif from "./modale/Modif";
export default function Tableau() {
const [showModif, setShowModif] = useState(false);
  return (
    <div className="col-7">
      <div className="card">
        <div className="card-body">
          <table className="table table-bordered table-responsive table-striped table-hover">
            <thead>
              <th className="table-info">N° Matériel</th>
              <th className="table-info">Designation</th>
              <th className="table-info">Etat</th>
              <th className="table-info">Quantité</th>
              <th className="table-info">Action</th>
            </thead>
            <tbody>
              <tr>
                <td>15</td>
                <td>24</td>
                <td>56 </td>
                <td>2</td>
                <td>
                  <span className="text-success suppr" onClick={()=>setShowModif(true)}>Modifier</span>
                  <span className="text-danger suppr">Supprimer</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-3">
          <div className="card">
            <div className="card-header border-dark bg-dark text-white">
              <p className="h4">Total</p>
            </div>
            <div className="card-body">
              <p>Total:10</p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            <div className="card-header border-danger bg-danger">
              <p className="h4">Bon</p>
            </div>
            <div className="card-body">
              <p>Quantité:153</p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            <div className="card-header border-success bg-success">
              <p className="h4">Mauvais</p>
            </div>
            <div className="card-body">
              <p>Quantité:182</p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            <div className="card-header border-warning bg-warning">
              <p className="h4">Abimé</p>
            </div>
            <div className="card-body">
              <p>Quantité:48</p>
            </div>
          </div>
        </div>
      </div>  
        {
                  showModif?(
                      <Modif setShowModif={setShowModif} etat={!showModif}/>
                  ):null
              }
    </div>
  );
}
