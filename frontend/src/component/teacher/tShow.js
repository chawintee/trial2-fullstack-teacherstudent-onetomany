import React, { useState, useEffect } from 'react'
import axios from '../../config/axios'
import Year from './component/Year';

function TShow() {

    const [showListStudent, setShowListStudent] = useState([]);
    const [optionInSelect, setOptionInSelect] = useState([]);
    const [showSelected, setShowSelected] = useState([]);


    const fetchData = async () => {
        const result = await axios.get('/student');
        const data = result.data.map(ele => ({
            ...ele,
            editStatus: false,
            showStatus: false,
        })) //add state to obj
        setShowListStudent(data);
        setShowSelected(showListStudent)
    }

    useEffect(() => {
        fetchData()
    }, [])
    useEffect(() => {
        optionToSelect()
    }, [showListStudent])
    useEffect(() => {
        setShowSelected(showListStudent)
    }, [optionInSelect])
    
    
    
    const optionToSelect = async () => {
        // console.log("Hello")
        const onlyOptionToSelect = showListStudent.map(ele=>ele.year);
        // console.log(onlyOptionToSelect)
        const optionInSelect= await [...new Set(onlyOptionToSelect)];
        optionInSelect.sort()
        // console.log(optionInSelect)
        const optionInSelect1 = await optionInSelect.map((ele,index)=>({id:index ,year:ele}));
        const optionInSelectAddAll = [({id:optionInSelect.length,year:"All"}),...optionInSelect1]
        setOptionInSelect(optionInSelectAddAll)        
    }
    


    
    const selectOption1 = (e) => {
        // console.log("Hello")
        // console.log(e.target.value)
        if(e.target.value == "All") {
            setShowSelected(showListStudent);
        }else{
            const selected = showListStudent.filter((ele)=> ele.year == e.target.value);
            // console.log(s elected)
            setShowSelected(selected)
        }
    }

    
    
    const logData = () => {
        console.log(showListStudent);
        // console.log(onlyOptionToSelect);
        // console.log(optionInSelect);
    }


    const deleteEle = async (targetId) => {
        await axios.delete(`/student/${targetId}`);
        console.log(targetId);
        const result = await axios.get(`/student`);
        const data = result.data.map(ele => ({
            ...ele,
            editStatus: false,
            showStatus: false,
        }))
        setShowListStudent(data);


    }


    return (
        <div>
            Student Show for teacher<br/>
            <select id="Year" onChange={selectOption1} defaultValue="All">
                {optionInSelect.map(ele=> <option key={ele.id} value={ele.year} >{ele.year}</option> )}
            </select>

            <ul>
                <Year data={showSelected} onDelete={deleteEle} />
            </ul>

            <button onClick={logData}>log</button>

        </div>
    )
}

export default TShow
