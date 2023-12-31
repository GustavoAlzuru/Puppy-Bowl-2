import { useEffect, useState } from 'react'
import './App.css'
import { getPuppies } from './api/index'
import Puppies from './components/Puppies'
import SearchBar from './components/SearchBar'
import Form from './components/Form'
function App() {
  const [filteredPuppies, setFilteredPuppies] = useState([])
  const [allPuppies, setAllPuppies] = useState([]);
  const [newPuppy, setNewPuppy] = useState(JSON.parse(localStorage.getItem('newPuppies')) || [])
  const [error, setError] = useState('')
  useEffect(() => {
    const getData = async () => {
      try {
        const { data, error } = await getPuppies()
        if (!data) {
          setError(error.message)
          return
        }
        setError('')
        setFilteredPuppies(data.players)
        setAllPuppies(data.players)
      }
      catch (err) {
        console.log('error', err)
      }
    }
    getData()
  }, [])

  const getValue = (value) => {
    const filter = allPuppies.filter(puppy => puppy.name.toLowerCase().includes(value.toLowerCase()))
    setFilteredPuppies(filter)
  }
  return (
    <div className='main-wrapper'>
      <h1 className='main-title'>Puppy Bowl</h1>
      <div className='input-data'>
        <SearchBar getValue={getValue} />
        <Form setNewPuppy={setNewPuppy} setFilteredPuppies={setFilteredPuppies} newPuppy={newPuppy} setAllPuppies={setAllPuppies}/>
      </div>
      {error
        ? <p>{error}</p>
        : <ul className='cards'>
          <Puppies allPuppies={filteredPuppies} newPuppy={newPuppy} setFilteredPuppies={setFilteredPuppies} setNewPuppy={setNewPuppy} setAllPuppies={setAllPuppies} listOfPuppies={allPuppies}/>
        </ul>}
    </div>
  )
}

export default App
