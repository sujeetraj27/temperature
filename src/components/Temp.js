import React, { useEffect, useState } from 'react'

const Temp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Bangalore");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=1d957e5d86c87892579ef05351e11259`
            const response = await fetch(url);
            console.log(response);
            const resjson = await response.json();
            console.log(resjson);
            setCity(resjson.main);
        }
        fetchApi();
    }, [search])

    return (
        <div className="box">
            <div className="inputData">
                <input
                    type="search"
                    value={search}
                    className="inputFeild"
                    onChange={(event) => {
                        setSearch(event.target.value)
                    }} />
            </div>

            { !city ? (
                <p className="no_data"> No Data Found</p>
            ) : (
                    <div>
                        <div className="info">
                            <h2 className="location">
                                <i className="fas fa-street-view"></i> {search}
                            </h2>
                            <h1 className="temp"> {city.temp}°Cel</h1>
                            <h3 className="tempmin_max"> Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel </h3>
                        </div>
                        <div className=" wave -one"></div>
                        <div className=" wave -two"></div>
                        <div className=" wave -three"></div>
                    </div>
                )}

        </div>
    )
}

export default Temp;