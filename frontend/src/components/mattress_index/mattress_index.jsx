import React, {useState, useEffect} from "react"
import Mattress from "../mattress/mattress";

const MattressIndex = () => {
    const [mattresses, setMattress] = useState([]);
    const loadAllMattresses = () => {
        fetch("/mattress", {
        })
          .then((response) => response.json())
          .then(async data => setMattress(data.mattresses))
    }


    useEffect(() => {
        loadAllMattresses();
      }, []);
    

      return (
        <div className="mattress-index">
          <h1>Mattress Dashboard</h1>
          <div className="mattresses">
          {mattresses.map((mattress) => (
            <Mattress
              mattress={mattress}
              key={mattress.id}
            />
          ))}

          </div>
        </div>
      ) 
}

export default MattressIndex

