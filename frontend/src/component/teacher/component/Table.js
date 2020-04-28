import React from 'react'

function Table(props) {

    const thisEle = props.data.filter(item=> item.year == props.ele)

    return (
        <div>
            {thisEle.map(ele=> 
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
