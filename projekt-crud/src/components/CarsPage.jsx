import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CarAddForm from './CarAddForm'
import SearchBar from './SearchBar'

const API_URL = 'http://localhost:3001/api/11/items'

function CarsPage(){
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [showForm, setShowForm] = useState(false)
    const [query, setQuery] = useState('')
    const [onlyAvailable, setOnlyAvailable] = useState(false)

    useEffect(() => {
        async function fetchItems() {
          try{
            const res = await fetch(API_URL);
            if(!res.ok){
              throw new Error('Server error')
            } 
            const data = await res.json();
            setItems(data);
          }
          catch(err){
            setError(err.message);
          }
          finally{
            setIsLoading(false);
          }
        }
        fetchItems();
      }, [])

      async function handleAddCar(formData) {
        const res = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        })
        const newItem = await res.json()
        setItems([...items, newItem])
        setShowForm(false);
      }
    
      async function handleDelete(id) {
        try{
          await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
          })
          setItems(items.filter(i => i.id !== id))
        }
        catch(err){
          console.log('Error during DELETE operation');
        }
      }
    
      async function handleUpdate(id) {
        try{
          const car = items.find(i => i.id === id);
          if(!car){
            console.log('No car with this id');
            return;
          }
    
          let currentValue = car.isAvailable;
          
          console.log({
            id: id,
            currentValue: currentValue,
            prevValue: car.isAvailable
          });
          
          const res  = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({isAvailable: !currentValue})
             
          })
    
          if (!res.ok) {
            console.error('PUT failed', res.status, await res.text());
            return;
          }
    
          const updated = await res.json();
          setItems(items.map(i => i.id === id ? updated : i)); 
        }
        catch(err){
          console.log("Error during PUT operation", err);
        }
        
      }

      const filtered = items.filter(i =>
        (!onlyAvailable || i.isAvailable) &&
        i.brand.toLowerCase().includes(query.toLowerCase())
      )

      
  if(isLoading) return (
    <div className="text-center mt-5">
      <div className="spinner-border text-primary" role="status"/>
    </div>
  )
  if(error) return (
    <div className="container mt-4 text-start">
      <div className="alert alert-danger">{error}</div>
    </div>
  )

  return (
    <>  
    

    <div className="container mt-4 text-start">
      <h2>Company Fleet</h2>

      <SearchBar
        onSearch={setQuery}
        onOnlyAvailableChange={setOnlyAvailable}
      />
      
      <button 
        className='btn btn-primary mb-3'
        onClick={() => setShowForm(prev => !prev)}
      >
        {showForm ? 'Cancel' : '+ Add car'}
      </button>
      {showForm && <CarAddForm onAdd={handleAddCar} />}

      <ul className="list-group">
        {filtered.map(item => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{item.brand} - {item.model}</span>
            <div className="d-flex gap-2">
              <Link to={`/item/${item.id}`} className="btn btn-outline-primary btn-sm">
                Details
              </Link>
              <button 
                className={`btn btn-sm ${item.isAvailable ? 'btn-success' : 'btn-danger'}`} 
                onClick={() => handleUpdate(item.id)}>
                {item.isAvailable ? 'Available' : 'In use'}
              </button>
              <button className="btn btn-outline-danger btn-sm" onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>

    </div>

        
    </>
  )
}

export default CarsPage