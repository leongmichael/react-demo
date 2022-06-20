import { useLocation } from "react-router-dom"




function Fruit() {
  const sampleLocation = useLocation();
  
  return (
    
    <div id="Fruit">
        <p>{sampleLocation.pathname}</p>
    </div>

    
  );
}

export default Fruit;
