import React from 'react';
import { Line } from "react-chartjs-2";

export const Charts = () => {
    const data = {
        labels: ['Jan', 'Feb', 'mar', 'apr', 'may'],
        datasets: [
            {
                label: "Posts",
                borderWidth: 1,
                backgroundColor: "#DAF2F2",
                borderColor: "#4BC0C0",
                data: [3, 2, 4, 2, 5],
                fill: true,


            }
        ]
    };

    const options = {
        elements: {
            line: {
                tension: 0.4 // disables bezier curves
            }
        },
        scales: {
            x: {
                beginAtZero: true,
                grid: {
                    color: '#00000000',
                    drawBorder: false,
                },
                ticks: {
                    display: false
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    drawBorder: false,
                    color: '#00000000',
                    
                },
                ticks: {
                    display: false
                }
            },
           
        },
        plugins: {
            legend: {
                display: false
            }
        }

    }



    return (
        <>
            <Line data={data} options={options} />
        </>
    )
}