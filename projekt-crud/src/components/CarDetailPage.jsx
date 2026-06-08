import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const API_URL = 'http://localhost:3001/api/11/items'

function CarDetailsPage() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchItem() {
            try{
                const res = await fetch(`${API_URL}/${id}`);
                if(!res.ok) throw new Error('Nie znaleziono samochodu');
                const data = await res.json();
                setItem(data);

            }
            catch (err){
                setError(err.message);
            }
            finally{
                setIsLoading(false);
            }
        }
        fetchItem()
    }, [id])

    if (isLoading) return <div className='text-center mt-5'><div className='spinner-border text-primary'/></div>
    if (error) return <div className='alert alert-danger'>{error}</div>

    return (
        <div className="text-start">
            <button className='btn btn-outline-secondary mb-3' onClick={() => navigate(-1)}>
                Wróć
            </button>
            <div className="card p-4">
                <h4>{item.brand} {item.model}</h4>
                <p>Rok produkcji: <strong>{item.year}</strong></p>
                <p>Przebieg: <strong>{item.mileage} km</strong></p>
                <p>
                    {item.isAvailable
                        ? <span className='badge bg-success'>Dostępny</span>
                        : <span className='badge bg-danger'>Zajęty</span>}
                </p>
            </div>
        </div>
    )
}

export default CarDetailsPage