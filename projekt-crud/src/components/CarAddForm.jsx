import { useState } from "react";

function CarAddForm({ onAdd }) {
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [mileage, setMileage] = useState('');
    const [isAvailable, setAvailability] = useState(true);

    function handleSubmit(e) {
        e.preventDefault();
        onAdd({
            brand,
            model,
            year: Number(year),
            mileage: Number(mileage),
            isAvailable,
        });
        setBrand('');
        setModel('');
        setYear('');
        setMileage('');
        setAvailability(true);
    }

    return(
        <>
            <form onSubmit={handleSubmit} className="card p-3 mb-4">
                <h5 className="mb-3">Add car to fleet</h5>
                <div className="row g-2 mb-2">
                    <div className="col">
                        <input
                            className="form-control"
                            placeholder="brand"
                            value={brand}
                            onChange={e => setBrand(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            placeholder="model"
                            value={model}
                            onChange={e => setModel(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col">
                        <input
                            type="number"
                            className="form-control"
                            placeholder="year"
                            value={year}
                            onChange={e => setYear(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col">
                        <input
                            type="number"
                            className="form-control"
                            placeholder="mileage"
                            value={mileage}
                            onChange={e => setMileage(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="form-check mb-3">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="isAvailable"
                        checked={isAvailable}
                        onChange={e => setAvailability(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="isAvailable">
                        Car available
                    </label>
                </div>
                <button type="submit" className="btn btn-success btn-sm">
                    Add car to fleet
                </button>
            </form>
        </>
    )
}



export default CarAddForm;