import React, { useState, useEffect } from 'react'
import axios from '../../config/axios'
import Year from './component/Year';

function TShow() {

    const [showListStudent, setShowListStudent] = useState([]);
    const [optionInSelect, setOptionInSelect] = useState([]);
    const [showSelected, setShowSelected] = useState([]);


    const fetchData = async () => {
        const result = await axios.get('/student');
        await result.data.map(ele => {
            ele.editStatus = false;
            ele.showStatus = false;
        }) //add state to obj
        const data = await result.data;
        await setShowListStudent(data);
    }

    useEffect(() => {
        fetchData()
    }, [])


    
    const optionToSelect = async () => {
        // console.log("Hello")
        const onlyOptionToSelect = await showListStudent.map(ele=>ele.year);
        // console.log(onlyOptionToSelect)
        const optionInSelect= await [...new Set(onlyOptionToSelect)];
        optionInSelect.sort()
        // console.log(optionInSelect)
        const optionInSelect1 = await optionInSelect.map((ele,index)=>({id:index ,year:ele}));
        setOptionInSelect(optionInSelect1)
        // console.log(optionInSelect1)

    }
    

    const selectOption1 = (e) => {
        // console.log("Hello")
        // console.log(e.target.value)
        const selected = showListStudent.filter((ele)=> ele.year == e.target.value);
        // console.log(selected)
        setShowSelected(selected)
    }

    
    
    const logData = () => {
        console.log(showListStudent);
        // console.log(onlyOptionToSelect);
        // console.log(optionInSelect);
    }

    return (
        <div>
            Student Show for teacher
            <select id="Year" onMouseOver={optionToSelect} onChange={selectOption1} >
                {optionInSelect.map(ele=> <option key={ele.id} value={ele.year} >{ele.year}</option> )}
            </select>

            <ul>
                <Year data={showSelected} />
            </ul>

            <button onClick={logData}>log</button>

        </div>
    )
}

export default TShow
