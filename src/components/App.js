import React,{useState,useEffect} from "react";
// import { getRandomPlaneteer } from '../data/planeteers.js'
import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";

function App() {

  const [planeteers,setPlaneteers]=useState([]);
  const [searchQ,setSearchQ]=useState('');
  const [checked,setChecked]=useState(false);

  function handleNewPlanet(newObj){
    setPlaneteers([...planeteers,newObj]);
  }

  useEffect(()=>{
    fetch('http://localhost:8003/planeteers')
    .then(res=>res.json())
    .then(data=>setPlaneteers(data))
  },[])

  const searched = planeteers.filter((planeteer)=>{
    return planeteer.name.toLowerCase().includes(searchQ.toLowerCase()) || planeteer.bio.toLowerCase().includes(searchQ.toLowerCase());
  })

  function handleChecked(){
    setChecked((checked)=>!checked)
    console.log(checked);
    if (checked===true){
      setPlaneteers(planeteers.sort((a, b) => a.born !== b.born ? a.born < b.born ? -1 : 1 : 0))}
  }

  // if (checked)


  return (
    <div>
      <Header />
      <SearchBar 
        searchQ={searchQ}
        setSearchQ={setSearchQ}
        handleChecked={handleChecked}
        checked={checked}
      />
      <RandomButton 
        // getRandomPlaneteer={getRandomPlaneteer()}
        // planeteers={planeteers}
        // setPlaneteers={setPlaneteers}
        handleNewPlanet={handleNewPlanet}
      />
      <PlaneteersContainer 
        planeteers={searched}
      />
    </div>
  );
}

export default App;
