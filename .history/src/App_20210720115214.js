import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'

const addCreator = (data) => {
  setTimeout(()=> {
    return {type: 'add', payload: data}
  },3000)
  
}

const fetchAddCreator = () => {
  setTimeout((dispatch)=> {
    dispatch(addCreator({id: 1, title: "neko"}))
  },3000)
}

function App() {
  const items = useSelector(state => state.items)
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(addCreator({id: 1, title: "neko"}))
  },[])
  return (
    <div className="App">
      {!items ? (<p>Loading</p>):(items.map( i=> <p>{i.title}</p>))}
    </div>
  );
}

export default App;
