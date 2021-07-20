import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'

const addCreator = (data) => {
  return {type: 'add', payload: data}
}


function App() {
  const items = useSelector(state => state.items)
  const dispatch = useDispatch()

  const fetchData = () => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(result => dispatch(addCreator(result)))
  }

  useEffect(()=> {
    fetchData()
  },[])
  return (
    <ul className="App">
      {!items ? (<p>Loading</p>):(items[0].map( i=> <li key={i.id}>{i.title}</li>))}
    </ul>
  );
}

export default App;
