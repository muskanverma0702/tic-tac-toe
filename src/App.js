import Item from './components/item'
import Cart from './components/Cart'
import "./App.css";
function App() {
  return (
    <div className="App">
      <Item name="Macbook" price='100000'/>
      <Item name="Pendrive" price='4000'/>
      <Item name="Charger" price='1000'/>
      <Cart />
    </div>
  )
}
export default App;