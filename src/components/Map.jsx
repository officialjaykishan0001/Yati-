import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Polyline, Popup, useMap } from 'react-leaflet';
import Select from 'react-select';
import { Marker } from 'react-leaflet/Marker'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Ensure leaflet CSS is imported
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const customIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
// Custom styles for the Select component
const customStyles = {
    control: (provided) => ({
        ...provided,
        backgroundColor: 'white',  // background color for the input
        borderColor: '#cccccc',      // border color
        minHeight: '20px',           // control height
        boxShadow: 'none',
        borderRadius: '15px',
        marginBottom: '10px',
        padding: "2px",     // remove default box-shadow
        '&:hover': { borderColor: '#aaaaaa' } // change border color on hover
    }),
    placeholder: (provided) => ({
        ...provided,
        color: '#888888',  // placeholder color
        fontSize: '14px',
    }),
    menu: (provided) => ({
        ...provided,
        zIndex: 9999,        // make sure the dropdown is above other elements
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? '#4CAF50' : state.isFocused ? '#f0f0f0' : '#ffffff',
        color: state.isSelected ? '#ffffff' : '#333333',
        padding: '10px 15px',
    }),
    singleValue: (provided) => ({
        ...provided,
        color: '#333333', // text color for selected value
    }),
};

const CenterMap = ({ coords }) => {
    const map = useMap();

    useEffect(() => {
        if (coords) {
            map.setView(coords, map.getZoom());
        }
    }, [coords, map]);

    return null;
};


const Map = () => {
    // States to manage selected options
    const [startPlaceSelected, setStartPlaceSelected] = useState(false);
    const [endPlaceSelected, setEndPlaceSelected] = useState(false);

    const [route, setRoute] = useState([]);
    const [startPlace, setStartPlace] = useState('');
    const [endPlace, setEndPlace] = useState('');
    const [startCoords, setStartCoords] = useState(null);
    const [endCoords, setEndCoords] = useState(null);
    const [startOptions, setStartOptions] = useState([]);
    const [endOptions, setEndOptions] = useState([]);
    const apiKey = '774248d573894682b8d37b432c07b847';

    const fetchAutocompleteOptions = async (input, setOptions) => {
        try {
            const response = await axios.get(
                `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(input)}&apiKey=${apiKey}`
            );
            const data = response.data;
            if (data.features && data.features.length > 0) {
                const options = data.features.map((feature) => ({
                    label: feature.properties.formatted,
                    value: {
                        lat: feature.properties.lat,
                        lon: feature.properties.lon,
                    },
                }));
                setOptions(options);
            }
        } catch (error) {
            console.error('Error fetching autocomplete options:', error);
        }
    };
    const customFilterOption = (option, inputValue) => {
        return option.label.toLowerCase().includes(inputValue.toLowerCase());
    };
    const handleSelectChange = (option, setCoords, setPlace, setNextVisible) => {
        setCoords([option.value.lat, option.value.lon]);
        setPlace(option.label);
        setNextVisible(true); // Show the next field or button
    };

    useEffect(() => {
        const fetchDirections = async () => {
            if (startCoords && endCoords) {
                try {
                    const response = await fetch(
                        `https://api.geoapify.com/v1/routing?waypoints=${startCoords[0]},${startCoords[1]}|${endCoords[0]},${endCoords[1]}&mode=drive&apiKey=${apiKey}`
                    );
                    const data = await response.json();
                    if (data && data.features && data.features.length > 0) {
                        const routeCoordinates = data.features[0].geometry.coordinates[0].map(coord => [coord[1], coord[0]]);
                        setRoute(routeCoordinates);
                    }
                } catch (error) {
                    console.error('Error fetching directions:', error);
                }
            }
        };

        fetchDirections();
    }, [startCoords, endCoords, apiKey]);


    return (
        <div className='min-h-[75vh]'>
            <div className="select-container pt-[15px] px-[15px] flex flex-col  ">
                <span className='pb-[10px] px-[10px] font-bold'>Welcome Username,</span>

                {/* First Select Input */}
                <Select
                    styles={customStyles}
                    placeholder="Pick Up"
                    options={startOptions}
                    onInputChange={(input) => {
                        if (input) {
                            fetchAutocompleteOptions(input, setStartOptions);
                        }
                    }}
                    onChange={(option) =>
                        handleSelectChange(option, setStartCoords, setStartPlace, setStartPlaceSelected)
                    }
                    filterOption={customFilterOption}
                />

                {/* Second Select Input - Displayed only after first is selected */}
                {startPlaceSelected && (
                    <Select
                        styles={customStyles}
                        placeholder="Where are you going today?"
                        options={endOptions}
                        onInputChange={(input) => {
                            if (input) {
                                fetchAutocompleteOptions(input, setEndOptions);
                            }
                        }}
                        onChange={(option) =>
                            handleSelectChange(option, setEndCoords, setEndPlace, setEndPlaceSelected)
                        }
                        filterOption={customFilterOption}
                    />
                )}

                {/* Button - Displayed only after second select is selected */}
                {endPlaceSelected && (
                    <button className="bg-violet-950 text-white rounded-[20px] p-[8px] mb-[11px] font-medium">
                        Find a bus
                    </button>
                )}
            </div>
            <div >
                <MapContainer center={startCoords ? startCoords : [20.5937, 78.9629]} zoom={14} style={{ height: '100vh', width: '100%' }} className='z-0'>
                    <TileLayer
                        url={`https://maps.geoapify.com/v1/tile/osm-liberty/{z}/{x}/{y}.png?apiKey=${apiKey}`}
                        attribution='Powered by <a href="https://www.geoapify.com/">Geoapify</a> | © OpenStreetMap contributors'
                    />
                    {startCoords && <CenterMap coords={startCoords} />}
                    {startCoords && (
                        <Marker position={startCoords} icon={customIcon}>
                            <Popup>Start: {startPlace}</Popup>
                        </Marker>
                    )}
                    {endCoords && (
                        <Marker position={endCoords} icon={customIcon}>
                            <Popup>End: {endPlace}</Popup>
                        </Marker>
                    )}
                    {route.length > 0 && (
                        <Polyline
                            positions={route}
                            color="blue"
                        />
                    )}
                </MapContainer>
            </div>
        </div>
    )
}

export default Map