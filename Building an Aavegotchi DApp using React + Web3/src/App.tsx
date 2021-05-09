import React, { useEffect, useState } from 'react';
import { GotchiListing } from './components/GotchiListing';

import { Gotchi, QueryResponse } from './types';
import { request } from 'graphql-request';
import './App.css';

const uri = 'https://api.thegraph.com/subgraphs/name/aavegotchi/aavegotchi-core-matic';


function App() {

    const [gotchis, setGotchis] = useState<Array<Gotchi>>([]);
    const [selectedGotchi, setSelectedGotchi] = useState<number>(0);

    useEffect(() => {
        fetchGotchis();
    }, []);

    const fetchGotchis = async () => {
        const query = `
            {
                aavegotchis(first: 100, orderBy: gotchiId) {
                    id
                    name
                    collateral
                    withSetsNumericTraits
                }
            }
        `;

        const response = await request<QueryResponse>(uri, query);
        setGotchis(response.aavegotchis);
    };
    console.log(gotchis);
    return (
        <div className="App">
            <div className="container">
                <div className="selected-container">
                </div>
                <div className="gotchi-list">
                    {gotchis.map((gotchi, index) => (
                        <GotchiListing 
                            key={gotchi.name}
                            id={gotchi.id}
                            name={gotchi.name}
                            collateralColor="black"
                            selectGotchi={() => setSelectedGotchi(index)}
                            selected={index === selectedGotchi}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App; 
