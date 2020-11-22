import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';

import { fetchDailyData } from '../../api';
const Chart = ( { data: { confirmed, recovered, deaths }, country } ) => {
    const [dailyData, setDailyData] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        // console.log(dailyData);
        fetchAPI();
    }, []);

    const lineChart = (
        dailyData.length !== 0
            ? ( <Line 
            data ={{
                labels: dailyData.map(({ date }) => date),
                datasets: [
                    {
                        data: dailyData.map((data) => data.confirmed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fontColor: '#eee',
                        fill: true,
                    }
                    , 
                    {
                        data: dailyData.map((data) => data.deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        fontColor: '#eee',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true,
                    }
                ],
            }}
        />) : null
    );


    const barChart = (
        confirmed
        ? (
            <Bar 
                data = {{
                    labels: ['Infected', 'Recovered', 'Deaths'], 
                    fontColor: '#eee',
                    datasets: [{
                        label: 'People',
                        backgroundColor: [
                            'rgba(0, 0, 255, 0.5)',
                            'rgba(0, 255, 0, 0.5)',
                            'rgba(255, 0, 0, 0.5)',
                        ],
                        fontColor: '#eee',
                        data: [confirmed.value, recovered.value, deaths.value]
                    }]
                }}
                options = {{
                    legend: { display: false },
                    title:  { display: true, text: `Current state is ${country }`, fontColor: '#eee'},
                }}
            />
        ) : null

    );



    return (
        <div className="Chart">
            <div className="container mb-5">
                {country ? barChart : lineChart}

            </div>
        </div>
    )
}
export default Chart;