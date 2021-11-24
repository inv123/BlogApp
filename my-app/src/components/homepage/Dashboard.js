import React, {useContext} from 'react';
import { SmallCharts } from './SmallCharts';
import { OverviewChart } from './OverviewChart';
import { GlobalContext } from '../../context/GlobalContext';

//TO DO ... Update database: get views for every single day for overview chart

export const Dashboard = () => {
    const {tablesData} = useContext(GlobalContext);
   

    const posts = tablesData.posts.year2020;
    const pages = tablesData.pages.year2020;
    const comments = tablesData.comments.year2020;
    const newCustomers = tablesData.newCustomers.year2020;
    const newSubscribers = tablesData.newSubscribers.year2020;

   
    

    //Calculate Total Count for each chart
    function totalNumbers(array){
        let numbers = [];
        array.map(x => numbers.push(Object.values(x)[0]))
        return numbers.reduce((acc, val) => acc + val);
    }
    
    //Calculate Chart Data for each chart
    function chartData(array){
        let numbers = [];
        array.forEach(x => {
            numbers.push(+Object.values(x)[0])
        })
        return numbers;
    }

    //Calculate Percentage ot Up or Down for each chart
    function chartPercentage(array){
        let lastMonth = array.slice().splice(array.length-1);
        let secondLastMonth = array.slice().splice(array.length-2, 1);
        
        return ((Object.values(lastMonth[0])[0] - Object.values(secondLastMonth[0])[0]) / Object.values(lastMonth[0])[0]).toFixed(2);
    }


    

    return (
        <>
            <div className='board-title'>
                <h6>dashboard</h6>
                <h3>Overview</h3>
                
            </div>
            <div className='flex-charts'>
                    <SmallCharts text='posts' numbers={totalNumbers(posts)} chartData={chartData(posts)} percentage={chartPercentage(posts)}/>

                    <SmallCharts text='pages'numbers={totalNumbers(pages)} chartData={chartData(pages)} percentage={chartPercentage(pages)}/>

                    <SmallCharts text='comments'numbers={totalNumbers(comments)} chartData={chartData(comments)} percentage={chartPercentage(comments)}/>

                    <SmallCharts text='new customers'numbers={totalNumbers(newCustomers)}chartData={chartData(newCustomers)} percentage={chartPercentage(newCustomers)}/>

                    <SmallCharts text='new subscribers'numbers={totalNumbers(newSubscribers)} chartData={chartData(newSubscribers)} percentage={chartPercentage(newSubscribers)}/>

            </div>
            <div className='overview-chart'>
                <OverviewChart />
            </div>
        </>
    )
}
