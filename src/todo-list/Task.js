import React from 'react'

import './Task.css'

class Task extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props.title,
            task_id: props.taskId,
            completed: false
        }
    }

    complete() {
        let new_state = !this.state.completed
        this.setState({
            completed: new_state
        })
        this.props.onCompleted(new_state)
    }

    render() {
        return (
            <div className='task'>
                <input className='title' type='text' maxLength='30' placeholder={this.state.title}/>
                <button style={{margin: '6px', alignSelf: 'center', backgroundImage: 'linear-gradient(148deg, rgba(82,82,82,1) 0%, rgba(42,42,42,1) 100%)'}} onClick={() => this.complete()}>
                    <h5 style={{margin: '6px'}}>Complete</h5>
                </button>
                <h5 style={{margin: '6px', alignSelf: 'center'}}>{this.state.completed.toString()}</h5>
                <button style={{margin: '6px', backgroundImage: 'linear-gradient(148deg, rgba(82,82,82,1) 0%, rgba(42,42,42,1) 100%)'}} onClick={(i, j) => this.props.onDeleted(this.state.task_id, this.state.completed)}>
                    <h5 style={{margin: '6px', alignSelf: 'center'}}>Delete</h5>
                </button>
            </div>
        )
    }
}

export default Task