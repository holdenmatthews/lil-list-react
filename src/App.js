import './App.css';
import { useState } from 'react'
import Item from './components/Item'


function App(index) {

  const [list, setList] = useState(["bananas", "apples", "strawberries", "canteloupe"]);
  const [newItem, setNewItem] = useState('')

  const deleteItem = (index) => {
    list.splice(index, 1)
    setList([...list])
  }

  const addItem = (e) => {
    e.preventDefault()
    setList([...list, newItem])
    setNewItem('')
  }

  const listDisplay = list.map((item, index) => {
    return <Item 
    item={item} 
    key={Math.random()} 
    deleteFunction={deleteItem}
    index={index}
    />
  })

  return (
    <div className="App">
      <p>this is my lil list</p>
      <form onSubmit={e => addItem(e)}>
        <input placeholder='new item here' onChange={e => setNewItem(e.target.value)} value={newItem}></input>
        <button>Add</button>
      </form>
      <div className='list-container'>
      {listDisplay}
      </div>
    </div>
  );
}

export default App;
