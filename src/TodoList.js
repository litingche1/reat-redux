import React from 'react';
import {connect} from 'react-redux'

const TodoList = props => {
    const myStyle = {
        width: '500px',
        height: '500px',
        margin: 'auto',
        marginTop: '200px'
    }
    let {inputValue, changeValue, addItem, list, deleteItem} = props
    return (
        <div style={myStyle}>
            <div><input value={inputValue} type="text" onChange={changeValue}/>
                <button onClick={addItem}>添加</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return (<li key={index} onClick={() => {deleteItem(index)}}>{item}</li>)
                    })
                }

            </ul>
        </div>
    )


}
const stateToProps = state => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}
const dispatchToProps = dispatch => {
    return {
        changeValue(e) {
            console.log(e.target.value)
            let action = {
                type: 'change_input',
                value: e.target.value
            }
            dispatch(action)
        },
        addItem() {
            let action = {
                type: 'addList'
            }
            dispatch(action)
        },
        deleteItem(index) {
            let action = {
                type: 'deleteItem',
                index
            }
            dispatch(action)
        }
    }
}
export default connect(stateToProps, dispatchToProps)(TodoList)