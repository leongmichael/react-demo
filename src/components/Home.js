
const fruits = ["orange", "apple", "strawberry"];


function Home() {
  
  return (
    <div id="Home">
      <h1>Fruits</h1>
      <div id="fruits">
        {fruits.map((fruit) => { // .map - in this case it lists all the items in the fruits aray
          return (
            <div style={{marginBottom: 10}}>
              <p>{fruit} </p>  
            </div>
          )
          // {} - incorporating outside variables in place of static text
        })}

      </div>
    </div>


    
  );
}

export default Home;
