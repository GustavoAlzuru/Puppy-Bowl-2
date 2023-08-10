import { useEffect, useState } from 'react'
import './App.css'
import { getPuppies } from './api/index'
import Puppies from './components/Puppies'
import SearchBar from './components/SearchBar'
function App() {
  const [puppies, setPuppies] = useState([])
  const [error, setError] = useState(false)
  const [filteredPuppies, setFilteredPuppies] = useState(puppies)
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getPuppies()
        if (!data) {
          throw new Error('There is an error')
        }
        setPuppies(data.players)
        setFilteredPuppies(data.players)
      }
      catch (err) {
        setError(true)
        console.log('error', err)
      }
    }
    getData()
  }, [])
  // const filter = puppies.filter(puppy => puppy.includes())
  const getValue = (value) => {
    const filter = puppies.filter(puppy => puppy.name.toLowerCase().includes(value.toLowerCase()))
    setFilteredPuppies(filter)
  }
  return (
    <>
      <h1 className='main-title'>Puppy Bowl</h1>
      <SearchBar getValue={getValue}/>
      {
        error
          ?
          <p className='error-text'>Not puppies found</p>
          :
          <div className='cards'>
            {filteredPuppies.map(puppy => (
              <Puppies puppies={puppy} key={puppy.id} />
            ))}
          </div>
      }
    </>
  )
}

export default App
