import React,{useState,useEffect} from "react";

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";

function App() {

  const [planeteers,setPlaneteers]=useState([]);
  const [searchQ,setSearchQ]=useState('');

  useEffect(()=>{
    fetch('http://localhost:8003/planeteers')
    .then(res=>res.json())
    .then(data=>setPlaneteers(data))
  },[])

  const searched = planeteers.filter((planeteer)=>{
    return planeteer.name.toLowerCase().includes(searchQ);
  })


  return (
    <div>
      <Header />
      <SearchBar 
        searchQ={searchQ}
        setSearchQ={setSearchQ}
      />
      <RandomButton />
      <PlaneteersContainer 
        planeteers={searched}
      />
    </div>
  );
}

export default App;
