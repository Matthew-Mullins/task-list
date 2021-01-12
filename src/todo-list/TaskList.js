import React from 'react';

import './TaskList.css'
import Task from './Task.js'

class TaskList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show_tasks: false,
            title: props.title,
            date: new Date(Date.now()).toDateString(),
            status: 'Open',
            tasks_created: 0,
            current_number_tasks: 0,
            number_tasks_completed: 0,
            percent: 100,
            tasks: []
        }
    }

    add_task() {
        var task = <Task key={this.state.tasks_created} title={'Task ' + this.state.tasks_created} onCompleted={(i) => this.complete_task(i)} onDeleted={(i, j) => this.delete_task(i, j)}/>
        let current_tasks = this.state.tasks
        current_tasks.push(task)
        let new_tasks_created = this.state.tasks_created + 1
        let new_current_number_tasks = this.state.current_number_tasks + 1
        let new_percent = Math.ceil((this.state.number_tasks_completed / new_current_number_tasks) * 100)

        this.setState({
            tasks_created: new_tasks_created,
            current_number_tasks: new_current_number_tasks,
            percent: new_percent,
            tasks: current_tasks
        })
    }

    delete_task(task) {
        let current_tasks = this.state.tasks
        for (let i = 0; i < this.current_number_tasks; i++) {
            if (task === current_tasks[i]) {
                console.log(i)
            }
        }
        console.log(task.state.completed)
    }

    complete_task(task_completed) {
        let new_number_tasks_completed = this.state.number_tasks_completed 
        new_number_tasks_completed += task_completed ? 1 : -1
        let new_percent = Math.ceil((new_number_tasks_completed / this.state.current_number_tasks) * 100)
        this.setState({
            number_tasks_completed: new_number_tasks_completed,
            percent: new_percent
        })
    }

    expand() {
        this.setState({
            show_tasks: this.state.show_tasks ? false : true
        })
    }

    render() {
        return (
            <div className='task_list'>
                <div id='title'>{this.state.title}</div>
                <div id='date'>{this.state.date}</div>
                <div id='status'>{this.state.status}</div>
                <div id='progress'>
                    <div id='progress-value' style={{height:'100%', width:this.state.percent + '%'}}></div>
                </div>
                <div id='percent'>{this.state.percent + '%'}</div>
                <button id='expand' onClick={() => this.expand()}>V</button>
                <div id='tasks' style={this.state.show_tasks ? {display: 'initial'} : {display: 'none'}}>
                    <div>
                        Header
                        <button onClick={() => this.add_task()}>+</button>
                    </div>
                    <div>
                        {this.state.tasks}
                    </div>
                </div>
            </div>
        )
    }
}

export default TaskList