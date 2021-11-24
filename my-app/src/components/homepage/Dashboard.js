import React, {useContext} from 'react';
import { Charts } from './Charts';
import { GlobalContext } from '../../context/GlobalContext';


export const Dashboard = () => {
    const {tablesData} = useContext(GlobalContext);
   

    const posts = tablesData.posts.year2020;
    const pages = tablesData.pages.year2020;
    const comments = tablesData.comments.year2020;
    const newCustomers = tablesData.newCustomers.year2020;
    const newSubscribers = tablesData.newSubscribers.year2020;

  
    function totalNumbers(array){
        let numbers = [];
        array.forEach(x => {
            numbers.push(+Object.values(x)[0])
        })
        return numbers.reduce((acc, val) => acc + val);
    }
    
    function chartData(array){
        let numbers = [];
        array.forEach(x => {
            numbers.push(+Object.values(x)[0])
        })
        return numbers;
    }


    return (
        <>
            <div className='board-title'>
                <h6>dashboard</h6>
                <h3>Overview</h3>
                <div className='flex-charts'>
                    <Charts text='posts' numbers={totalNumbers(posts)} chartData={chartData(posts)}/>
                    <Charts text='pages'numbers={totalNumbers(pages)} chartData={chartData(pages)}/>
                    <Charts text='comments'numbers={totalNumbers(comments)} chartData={chartData(comments)}/>
                    <Charts text='new customers'numbers={totalNumbers(newCustomers)}chartData={chartData(newCustomers)} />
                    <Charts text='new subscribers'numbers={totalNumbers(newSubscribers)} chartData={chartData(newSubscribers)}/>

                </div>
            </div>
        </>
    )
}
