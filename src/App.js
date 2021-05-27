import logo from './logo.svg';
import './App.css';
import './componets/TaskList'
import TaskList from './componets/TaskList';
import FormTask from './componets/FormTask'
import FindTask from './componets/FindTask'
import Sort from './componets/Sort'
import { Component } from 'react'
class App extends Component {
constructor(props)
{
  super(props)
  this.state = {
    tasks : [],
    isDisplayTask : false
  }
}

onToggeForm =() =>{
  this.setState({
    isDisplayTask : !this.state.isDisplayTask
  })
}
render(){
  var {tasks, isDisplayTask} = this.state;
  var emlmentDisplay = isDisplayTask ? <FormTask></FormTask>  : '';
  return (
    <div className="container">
  <div className="text-center">
    <h1>Quản Lý Công Việc</h1>
    <hr />
  </div>
  <div className="row">
    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
      {emlmentDisplay}
    </div>
    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
      <button 
         type="button" 
         className="btn btn-primary"
         onClick={this.onToggeForm}>
        <span className="fa fa-plus mr-5" />Thêm Công Việc
        
      </button>
      <div className="row mt-15">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <FindTask></FindTask>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <Sort>

          </Sort>
        </div>
      </div>
      <div className="row mt-15">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <TaskList>
            
          </TaskList>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}
  
}

export default App;
