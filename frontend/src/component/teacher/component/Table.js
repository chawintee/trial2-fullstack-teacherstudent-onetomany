import React from 'react'

function Table(props) {

    const thisEle = props.data.filter(item=> item.year == props.ele)
    const thisEle1 = thisEle.sort((a,b)=> a.number - b.number)

    return (
        <div>
            {thisEle1.map(ele=> 
            <tr>
                <td>{ele.number}</td>
                <td>{ele.name}</td>
                <td>{ele.surname}</td>
                <td>{ele.room}</td>
                <td>{`This is year ${ele.year}`}</td>
            </tr>
            )}
        </div>
    )
}

export default Table
