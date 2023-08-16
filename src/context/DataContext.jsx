import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios"; // Assurez-vous d'importer axios

const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState([]); // Initialisez avec un tableau vide

  useEffect(() => {
    fetchData(); // Appelez fetchData lors de l'initialisation
  }, []);// Le tableau vide signifie que cela ne doit être exécuté qu'une seule fois lors du montage initial

  const fetchData = () => {
    axios
      .get("http://simplecrud/stock.php")
      .then((res) => {
        setData(res.data); // Mettez à jour l'état avec les nouvelles données
      })
      .catch((err) => console.log(err));
  };

  return (
    <DataContext.Provider value={{ data, fetchData }}> {/* Utilisez fetchData au lieu de updateData */}
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
