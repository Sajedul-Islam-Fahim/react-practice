import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';

function App() {
 
  const handleButton = () => {
    alert("Button Clicked");
  }

  return (
    <>
      <h3>Exploring React</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleButton}>Click Here</button>
      <button onClick={()=>{alert("Clicked")}}>Click  Here</button>
    </>
  )
}

export default App
