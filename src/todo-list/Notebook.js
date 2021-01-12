import React from 'react';

import './Notebook.css'
import TaskList from './TaskList';

class Notebook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task_lists_created: 0,
            task_lists: []
        }
    }

    add_task_list() {
        var task_list = <TaskList key={this.state.task_lists_created} title={'Task List ' + this.state.task_lists_created}/>
        let current_task_list = this.state.task_lists
        current_task_list.push(task_list)
        this.setState({
            task_lists_created: this.state.task_lists_created + 1,
            task_lists: current_task_list
        });
    }

    render() {
        return (
            <div className='notebook'>
                <div className='notebook-header'>
                    <h2 style={{margin: '0'}}>Todo - List</h2>
                    <button onClick={() => this.add_task_list()} style={{margin: '0', height: '2rem', width: '2rem', borderRadius: '50%', backgroundColor: 'gray'}}><h3 style={{margin: '0 auto'}}>+</h3></button>
                </div>
                <ol className='notebook-body'>
                    {this.state.task_lists}
                </ol>
            </div>
        );
    }
}

export default Notebook;