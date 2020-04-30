import React, { useState, useEffect } from 'react';
import InputC from './studentComponent/inputC';
import axios from '../../config/axios';
import { Redirect } from 'react-router-dom';


function SRegister() {

    const [name, setName] = useState("");
    const [surName, setSurName] = useState("");
    const [year, setYear] = useState("");
    const [room, setRoom] = useState("");
    const [number, setNumber] = useState("");
    const [studentList, setStudentList] = useState([]);


    //setData
    const textName = (e) => {
        setName(e.target.value)
        console.log(`name is ${name}`)
    }

    const textSurName = (e) => {
        setSurName(e.target.value)
        console.log(`surName is ${surName}`)
    }

    const textYear = (e) => {
        setYear(e.target.value)
        console.log(`year is ${year}`)
    }

    const textRoom = (e) => {
        setRoom(e.target.value)
        console.log(`room is ${room}`)
    }

    const textNumber = (e) => {
        setNumber(e.target.value)
        console.log(`room is ${number}`)
    }

    const submitData = async () => {
        if (name !== "" && surName !== "" && year !== "" && room !== "" && number !== "") {
            console.log("OK");
            const body = {
                name: name,
                surname: surName,
                room: room,
                year: year,
                number: number,
            }
            await axios.post('/student', body)

            setName("");
            setSurName("");
            setYear("");
            setRoom("");
            setNumber("");
            // fetchData();

            // const result = await axios.get('/student');
            // await setStudentList(result.data);
            const onlyIdArray = studentList.map(ele=>ele.id)

            const yourId = Math.max(...onlyIdArray);
            alert(`your id is ${yourId+1}`);

 

        } else {
            alert("Please input all boxes")
        }


    }



    const fetchData = async () => {
        const result = await axios.get('/student');
        await setStudentList(result.data)
        await console.log(studentList)
    }

    useEffect(()=>{
        fetchData();
    },[])



    return (
        <div>

            {/* <ul>
                {studentList.map(ele=>{return <li key={ele.id}>{ele.name}</li>})}
            </ul> */}




            <span></span>
            <InputC name="Name" value={name} inputText={textName} />
            <InputC name="Surname" value={surName} inputText={textSurName} />
            <InputC name="Year" value={year} inputText={textYear} />
            <InputC name="Room" value={room} inputText={textRoom} />
            <InputC name="Number" value={number} inputText={textNumber} />

            <button onClick={submitData}>Submit</button>


        </div>
    )
}

export default SRegister
