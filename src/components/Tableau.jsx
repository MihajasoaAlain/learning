import React, { useEffect, useState } from "react";
import Modif from "./modale/Modif";
import Delete from "./modale/Delete";
import axios from "axios";
import { useData } from "../context/DataContext";
export default function Tableau() {
  const [showModif, setShowModif] = useState(false);
  const [showDel, setShowDel] = useState(false);
  const {data}=useData();
  const [id,setId]= useState(0);

  let somme = { total: 0, bon: 0, mauvais: 0, abime: 0 };
  console.log(data);
  return (
    <div className="col-7">
      <div className="card">
        <div className="card-body">
          <table className="table table-bordered table-responsive table-striped table-hover" style={{ maxHeight: "400px" }}>
            <thead>
              <th className="table-info">N° Matériel</th>
              <th className="table-info">Designation</th>
              <th className="table-info">Etat</th>
              <th className="table-info">Quantité</th>
              <th className="table-info">Action</th>
            </thead>
            <tbody>
              {data.map((value, index) => {
                somme.total += parseInt(value.quantite);
                switch (value.etat) {
                  case "Bon":
                    somme.bon += parseInt(value.quantite);
                    break;
                  case "Mauvais":
                    somme.mauvais += parseInt(value.quantite);
                    break;
                  case "Abime":
                    somme.abime += parseInt(value.quantite);
                    break;
                }

                return (
                  <tr key={index}>
                    <td>{value.numMateriel}</td>
                    <td>{value.designation}</td>
                    <td>{value.etat}</td>
                    <td>{value.quantite}</td>
                    <td>
                      <span
                        className="text-success suppr"
                        onClick={() =>{
                          setId(value.numMateriel);
                          console.log(id)
                          setShowModif(true);
                        } }
                      >
                        Modifier
                      </span>
                      <span
                        className="text-danger suppr"
                        onClick={() => setShowDel(true)}
                      >
                        Supprimer
                      </span>
                    </td>
                  </tr>
                );
              })}
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
              <p>Total:{somme.total}</p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            <div className="card-header border-danger bg-danger">
              <p className="h4">Bon</p>
            </div>
            <div className="card-body">
              <p>Quantité:{somme.bon}</p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            <div className="card-header border-success bg-success">
              <p className="h4">Mauvais</p>
            </div>
            <div className="card-body">
              <p>Quantité:{somme.mauvais}</p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            <div className="card-header border-warning bg-warning">
              <p className="h4">Abimé</p>
            </div>
            <div className="card-body">
              <p>Quantité:{somme.abime}</p>
            </div>
          </div>
        </div>
      </div>
      {showModif ? (
        <Modif id={id} setShowModif={setShowModif} Etat={!showModif} />
      ) : null}
      {showDel ? <Delete setShowDel={setShowDel} etat={!showDel} /> : null}
    </div>
  );
}
