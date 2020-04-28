import React, { useState, useEffect } from 'react'
import axios from '../../config/axios'
import Year from './component/Year';

function TShow() {

    const [showListStudent, setShowListStudent] = useState([]);
    const [optionInSelect, setOptionInSelect] = useState([]);


    const fetchData = async () => {
        const result = await axios.get('/student');
        await result.data.map(ele => {
            ele.editStatus = false;
            ele.showStatus = false;
        }) //add state to obj
        const data = await result.data;
        await setShowListStudent(data);
        const onlyOptionToSelect = await showListStudent.map(ele=>ele.year);
        const optionInSelect= await [...new Set(onlyOptionToSelect)];
        await setOptionInSelect(optionInSelect)
    }

    useEffect(() => {
        fetchData()
    }, [])


    
    const optionToSelect = async () => {
        console.log("Hello")
        const onlyOptionToSelect = await showListStudent.map(ele=>ele.year);
        // console.log(onlyOptionToSelect)
        const optionInSelect= await [...new Set(onlyOptionToSelect)];
        // console.log(optionInSelect)
        setOptionInSelect(optionInSelect)

    }

    const selectOption = (selected) => {
        console.log("Hello")
        console.log(selected)
    }


    
    
    const logData = () => {
        console.log(showListStudent);
        // console.log(onlyOptionToSelect);
        // console.log(optionInSelect);
    }

    return (
        <div>
            Student Show for teacher
            <select id="Year" onMouseOver={optionToSelect}>
                {optionInSelect.map(ele=> <option value={ele} onClick={selectOption({ele})}>{ele}</option> )}
            </select>

            <ul>
                <Year data={showListStudent} />
            </ul>

            <button onClick={logData}>log</button>

        </div>
    )
}

export default TShow
