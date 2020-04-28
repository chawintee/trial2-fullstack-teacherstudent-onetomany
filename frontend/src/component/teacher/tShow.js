import React,{useState ,useEffect} from 'react'
import axios from '../../config/axios'
import Year from './component/Year';

function TShow() {

    const [showListStudent, setShowListStudent] = useState([]);

    const fetchData = async() => {
        const result = await axios.get('/student');
        await result.data.map(ele => {
            ele.editStatus = false ;
            ele.showStatus = false;
            }) //add state to obj
        const data = await result.data;
        await setShowListStudent(data);
    }

    useEffect(()=>{
        fetchData()
    },[])


    const logData = () => {
        console.log(showListStudent);
    }

    
    return (
        <div>
            Student Show for teacher
            <ul>
                <Year data={showListStudent} />
              
            </ul>

            <button onClick={logData}>log</button>
           
        </div>
    )
}

export default TShow
