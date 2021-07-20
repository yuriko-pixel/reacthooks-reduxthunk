import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import addCreator from './index'

function App() {
  const items = useSelector(state => state.items)
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(addCreator({id: 1, title: "neko"}))
  },[])
  return (
    <div className="App">
    </div>
  );
}

export default App;
