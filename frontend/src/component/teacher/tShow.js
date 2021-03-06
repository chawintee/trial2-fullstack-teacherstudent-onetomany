import React, { useState, useEffect } from 'react'
import axios from '../../config/axios'
import Year from './component/Year';

function TShow() {

    const [showListStudent, setShowListStudent] = useState([]);
    const [optionInSelect, setOptionInSelect] = useState([]);
    const [showSelected, setShowSelected] = useState([]);
    const [editText, setEditText] = useState("");
    const [selectStatus, setSelectStatus] = useState("All");


    //fetch Data

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



    //Select

    const optionToSelect = async () => {
        // console.log("Hello")
        const onlyOptionToSelect = showListStudent.map(ele => ele.year);
        // console.log(onlyOptionToSelect)
        const optionInSelect = await [...new Set(onlyOptionToSelect)];
        optionInSelect.sort()
        // console.log(optionInSelect)
        const optionInSelect1 = await optionInSelect.map((ele, index) => ({ id: index + 1, year: ele }));
        const optionInSelectAddAll = [({ id: 0, year: "All" }), ...optionInSelect1]
        setOptionInSelect(optionInSelectAddAll)
    }




    const selectOption = (e) => {
        // console.log("Hello")
        // console.log(e.target.value)
        setSelectStatus(e.target.value)
        selectOption1();
    }

    const selectOption1 = async () => {
        const result = await axios.get('/student');
        // console.log(result.data);
        const data = result.data.map(ele => ({
            ...ele,
            editStatus: false,
            showStatus: false,
        }))
        if (selectStatus == "All") {
            // fetchData()
            setShowListStudent(data);
            setShowSelected(showListStudent)
        } else {
            const selected = showListStudent.filter((ele) => ele.year == selectStatus);
            // console.log(s elected)
            setShowSelected(selected)
        }
        // console.log(selectStatus)
        // console.log(showSelected)
    }

    useEffect(() => {
        selectOption1()
    }, [selectStatus])








    //Log

    const logData = () => {
        console.log(showListStudent);
        // console.log(onlyOptionToSelect);
        // console.log(optionInSelect);
    }



    //Delete

    const deleteEle = async (targetId) => {
        await axios.delete(`/student/${targetId}`);
        console.log(targetId);
        const result = await axios.get(`/student`);
        const data = await result.data.map(ele => ({
            ...ele,
            editStatus: false,
            showStatus: false,
        }))
        if (selectStatus == "All") {
            setShowSelected(data);
        } else {
            const selected = data.filter((ele) => ele.year == selectStatus);
            // console.log(selected)
            setShowSelected(selected)
        }
    }

    //EditStatus

    const changeStatusToEdit = async (targetId) => {
        const updateStatus = showSelected.map((ele) => {
            if (ele.id == targetId) {
                return ({ ...ele, editStatus: !ele.editStatus })
            }
            return ele
        })

        // await setShowListStudent(updateStatus);
        setShowSelected(updateStatus);
        // console.log(targetId);

    }


    const onChangeToEditText = (e) => {
        setEditText(e.target.value)
        console.log(editText)
    }

    const setToEdit = async (targetId, text, editStatus) => {
        // console.log(targetId,text,editStatus)
        // const a = text
        const body = {
            [text]: editText
        }
        await axios.put(`/student/${targetId}`, body);

        const result = await axios.get(`/student`);

        const data = await result.data.map(ele => ({
            ...ele,
            editStatus: false,
            showStatus: false,
        }))
        if (selectStatus == "All") {
            setShowListStudent(data);
            setShowSelected(data);
        } else {
            setShowListStudent(data);
            const selected = data.filter((ele) => ele.year == selectStatus);
            // console.log(selected)
            setSelectStatus(selectStatus)
            setShowSelected(selected)
        }
        selectOption1();

        setEditText("")
    }



    return (
        <div>
            Student Show for teacher<br />
            <select id="Year" onChange={selectOption} defaultValue="All" >
                {optionInSelect.map(ele => <option key={ele.id} label={ele.year} value={ele.year} >{ele.year}</option>)}
            </select>

            <ul>
                <Year data={showSelected} onDelete={deleteEle} dbClickToEdit={changeStatusToEdit} editText={onChangeToEditText} editToText={editText} setToEdit={setToEdit} />
            </ul>

            <button onClick={logData}>log</button>

        </div>
    )
}

export default TShow
