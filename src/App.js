import './App.css';
import Item from './component/item';
import Itemdate from './component/itemdate';

function App() {
  return (
    <div>

      <Item name="nirma">
        my name is darshan
      </Item>
      <Itemdate day="20" month="june" year="2021"></Itemdate>

      <Item name="ghadi">
      my name is prajwal
      </Item>
      <Itemdate day="5" month="may" year="2021"></Itemdate>

      <Item name="rin">
      my name is vishwa
      </Item>
      <Itemdate day="18" month="july" year="2021"></Itemdate>
      
      <div className="App">
        Hello jee
      </div>
    </div>
  );
}

export default App;
