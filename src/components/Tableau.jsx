import React, { useEffect, useState } from "react";
import Modif from "./modale/Modif";
import Delete from "./modale/Delete";
import axios from "axios";
export default function Tableau() {
  const [showModif, setShowModif] = useState(false);
  const [showDel, setShowDel] = useState(false);
  const [data, setData] = useState([
    { numMateriel:0, designation: "", etat: "", quantite: "" },
  ]);
  useEffect(() => {
    axios
      .get("http://simplecrud/stock.php")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(data);
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
              {data.map((value, index) => {
                console.log(value.designation);
                return (
                  <tr>
                    <td>{value.numMateriel}</td>
                    <td>{value.designation}</td>
                    <td>{value.etat}</td>
                    <td>{value.quantite}</td>
                    <td>
                      <span
                        className="text-success suppr"
                        onClick={() => setShowModif(true)}
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
      {showModif ? (
        <Modif setShowModif={setShowModif} etat={!showModif} />
      ) : null}
      {showDel ? <Delete setShowDel={setShowDel} etat={!showDel} /> : null}
    </div>
  );
}
