import { useLocation } from "react-router-dom"




function Fruit() {
  const sampleLocation = useLocation();
  
  return (
    
    <div id="Fruit">
        <h1>{sampleLocation.pathname}</h1>
    </div>

    
  );
}

export default Fruit;
