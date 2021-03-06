import React from 'react'

function Table(props) {

    const thisEle = props.data.filter(item=> item.year == props.ele)
    const thisEle1 = thisEle.sort((a,b)=> a.number - b.number)

    return (
        <div>
            {thisEle1.map(ele=> 
            <tr key={ele.id}>
                {ele.editStatus ? <input onDoubleClick={()=>props.dbClickToEdit(ele.id)} placeholder="Please put edit" onChange={props.editText} value={props.editToText} onBlur={()=>props.setToEdit(ele.id,"number",ele.editStatus)}/> : <td onDoubleClick={()=>props.dbClickToEdit(ele.id)}> {ele.number} </td>}
                <td>{ele.name}</td>
                <td>{ele.surname}</td>
                <td>{ele.room}</td>
                <td><button onClick={()=>props.onDelete(ele.id)}>Del</button></td>
                {/* <td>{`This is year ${ele.year}`}</td> */}
            </tr>
            )}
        </div>
    )
}

export default Table
