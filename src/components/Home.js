
const fruits = ["orange", "apple", "strawberry", "papaya"];


function Home() {
  
  return (
    <div id="Home">
      <h1>Fruits</h1>
      <div id="fruits">
        {fruits.map((fruit) => { // .map - in this case it lists all the items in the fruits aray
          return (
            <div style={{marginBottom: 10}}>
              <a href={`/${fruit}`}>{fruit} </a>  
            </div>
          )
          // {} - incorporating outside variables in place of static text
        })}

      </div>
    </div>


    
  );
}

export default Home;
