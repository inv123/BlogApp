import React from 'react';
import { Line } from "react-chartjs-2";

export const Charts = () => {
    const data = {
        labels: ['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            
        }]
    }

    const options = {
        scales: {

            yAxes: [{
                gridLines: {
                  drawBorder: false,
                },
                beginAtZero: true
              }]
        },
        elements: {
            line: {
                tension: 0.3 
            },
        },
    }

    return (
        <>
            <Line data={data} options={options}/>
        </>
    )
}
