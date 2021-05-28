import React, { Component } from "react";
import Task from './Task'
class TaskList extends Component
{
  renderTask =()=>{
    let {listTask} = this.props
    return listTask.map((item,index)=>{
        return <Task key={index} task={item}></Task>
    });
}
    render()
    {
         return (
                <div>
                    <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th className="text-center">STT</th>
                <th className="text-center">Tên</th>
                <th className="text-center">Trạng Thái</th>
                <th className="text-center">Hành Động</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td />
                <td> 
                  <input type="text" className="form-control" />
                </td>
                <td>
                  <select className="form-control">
                    <option value={-1}>Tất Cả</option>
                    <option value={0}>Ẩn</option>
                    <option value={1}>Kích Hoạt</option>
                  </select>
                </td>
                <td />
              </tr>
             {this.renderTask()}
             
            </tbody>
          </table>
                </div>
            );
         
    }
    
}
export default TaskList