import { useState,useEffect } from 'react'
const API="https://official-joke-api.appspot.com/";
function App() {
  const [jokes, setJokes] = useState([
    {
      content:"Old macdonald had a farm"
    },
    {
      content:"5679 because 7 8(ate) 9"
    },
    {
      content:"Greatest joke in the world ? You!!!"
    },
    {
      content:"Random joke"
    }
  ]);
  const [search,setSearch]=[""];
  async function loadJokes(){
    const res=await fetch(API);
    const data=await res.json();
    setJokes(data);
  }
  useEffect(()=>{
    loadJokes()
  },[]);
  const res=[...jokes].filter(j=>j.content.toLowerCase().includes(search.toLowerCase()));
  return (
    <div>
     <h1>Joke API</h1>

     <input
      placeholder="Search a joke"
      value={search}
      onChange={e=>setSearch(e.target.value)}
      />
     {res.map(j=>(
      <p>{j.content}</p>
     ))}
    </div>
  );
}

export default App;