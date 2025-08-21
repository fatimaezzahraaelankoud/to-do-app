import { useState } from "react";



export default function Todo() {

    const [afficherinput,setAfficherinput]=useState(false);
    const [tache,setTache]=useState("")
    const handleClick=()=>{
          setAfficherinput(!afficherinput)
    }
return(<>

    <div className="flex flex-col gap-6 items-center justifty-center bg-gray-50 m-8 w-3/2 shadow-md rounded-sm  font-serif">
     <h2 className="text-xl font-bold mt-6  ">Mini To-DO App</h2>
     <button  onClick={handleClick} className="bg-blue-500 p-3 rounded-md shadow-md text-white">
        {afficherinput? "fermer" : "ajouter une tache"}
        </button>
     {afficherinput &&
     <div className="flex flex-row gap-4">
    <input type="text" placeholder="ajouter une tache"  className=" bg-white-500 p-3 rounded-md shadow-md text-black"/>
    <button className=" bg-blue-500 p-3 rounded-md shadow-md text-white">entregistrer</button>
    </div>
      }
      <h1 className="text-md font-bold  ">liste des tache :</h1>
    </div>
</>);
}