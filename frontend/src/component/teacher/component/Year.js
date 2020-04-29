import React, { useState } from 'react'
import Table from './Table';

function Year(props) {

    const allYear = props.data.map((ele) => ele.year);
    const sePeRateYear = [...new Set(allYear)];
    const sortYear = sePeRateYear.sort();

    const logData = () => {
        console.log(allYear);
        console.log(props.data);
        console.log(sePeRateYear);
        console.log(props.data.map(ele=>ele.year));

    }

    return (

        <div>
            {/* <table style={{border: '1px solid black'}}> */}
            <table>
                <thead>
                    <tr>
                    <th>a</th>
                    <th>b</th>
                    <th>b</th>
                    <th>d</th>
                    </tr>
                </thead>
                <tbody>
                    {sortYear.map((ele,index) => <tr key={index}> {ele} <Table data={props.data} ele={ele} onDelete={props.onDelete} dbClickToEdit={props.dbClickToEdit} editText={props.editText} editToText={props.editToText} setToEdit={props.setToEdit}/> </tr>)} 
                    {/* <button onClick={logData}>log</button> */}
                </tbody>

            </table>
        </div>
    )
}

export default Year
