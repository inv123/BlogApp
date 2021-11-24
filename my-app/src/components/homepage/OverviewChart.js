import React from 'react';
import { Line } from "react-chartjs-2";

export const OverviewChart = () => {
    const data = {
        labels: ['Jan', 'Feb', 'mar', 'apr', 'may'],
        datasets: [
            {
                label: "Posts",
                borderWidth: 1,
                backgroundColor: '#DAF2F2' ,
                borderColor: '#4BC0C0',
                data: [1,2,3,4,5],
                fill: true,
            },
            {
                label: "Postss",
                borderWidth: 1,
                backgroundColor: '#FEF4F6' ,
                borderColor: '#FD0100',
                data: [1,22,13,4,5,7,8,9,9,9],
                fill: true,
            }
        ]
    };

    const options = {
        elements: {
            line: {
                tension: 0.2 // disables bezier curves
            }
        },
        
    }

    return (
        <>
            <Line data={data} options={options}/>
        </>
    )
}
