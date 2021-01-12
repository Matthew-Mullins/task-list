import React from 'react'

import './Task.css'

class Task extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props.title,
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
                <div>
                    {this.state.title}
                </div>
                <button onClick={() => this.complete()}>
                    Complete
                </button>
                <div>
                    {this.state.completed.toString()}
                </div>
                <button onClick={(i, j) => this.props.onDeleted(this, this.state.completed)}>
                    Delete
                </button>
            </div>
        )
    }
}

export default Task