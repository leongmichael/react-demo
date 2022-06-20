
const fruits = ["orange", "apple", "strawberry"];


function Home() {
  
  return (
    <div id="Home">
      <h1>Hello 1</h1>
      <h2>Hello 2</h2>
      <h3>Hello 3</h3>
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
