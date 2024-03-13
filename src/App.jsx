import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';

function App() {
  function handleClick() {
    alert('button click');

  }
  const handleClick2 = () => {
    alert('button click2')
  }
  return (
    <>
      <h3>React Core Concept 2</h3>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={()=>{alert('third click')}}>third</button>
    </>
  )
}

export default App
