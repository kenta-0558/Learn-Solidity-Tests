import React, { useEffect } from 'react';
import {Gotchi, QueryResponse } from './types';
import { request } from 'graphql-request';
import './App.css';

const uri = 'https://api.thegraph.com/subgraphs/name/aavegotchi/aavegotchi-core-matic';


function App() {

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

        const response = await request(uri, query);
        console.log(response);
    };

    return (
        <div>  
        </div>
    );
}

export default App;
