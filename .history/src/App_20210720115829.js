import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'

const addCreator = (data) => {
  return {type: 'add', payload: data}
}

const fetchData = (dispatch) => {
  fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(result => dispatch(addCreator(result)))
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
    <div className="App">
      {!items ? (<p>Loading</p>):(items.map( i=> <p>{i.title}</p>))}
    </div>
  );
}

export default App;
