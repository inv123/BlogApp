import React from 'react';
import { Line } from "react-chartjs-2";
import { RiArrowUpSFill } from 'react-icons/ri'

export const Charts = ({ text, numbers, chartData, percentage }) => {
    const backgroundColor = percentage < 0 ? '#FEF4F6' : '#DAF2F2';
    const borderColor = percentage < 0 ? '#FD0100' : '#4BC0C0';
    if(chartData.length < 12){
            chartData.unshift(0);
    }

    
    

    const data = {
        labels: ['Jan', 'Feb', 'mar', 'apr', 'may'],
        datasets: [
            {
                label: "Posts",
                borderWidth: 1,
                backgroundColor: backgroundColor ,
                borderColor: borderColor,
                data: chartData,
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
           <div className='chart'>
                <div className='chart-wrapper'>
                    <Line data={data} options={options} />
                    <div className='chart-data'>
                        <h6>{text}</h6>
                        <h4>{numbers}</h4>
                        <div className='chart-percent'>
                            <RiArrowUpSFill className={`${percentage < 0 ? 'red' : 'green'}`}/>
                            <p className={`${percentage < 0 ? 'red' : 'green'}`}>{percentage}%</p>
                        </div>
                    </div>
                </div>
           </div>
        </>
    )
}
