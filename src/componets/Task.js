import React, {Component} from 'react'
class Task extends Component{

    renderStatus = ()=>{
        let{ task} = this.props;
        switch(task.status){
            case 0: {

                return 'Kích hoạt'
            }
            case 1:{
                return 'Ẩn'
            }
            case 3:{
                return "Xóa"
            }
            default :
            return ''
        }
    }
  
    render(){
        return (
            <tr>
            <td>1</td>
            <td>{this.props.task.name}</td>
            <td className="text-center">
              <span className="label label-success">
                {this.renderStatus()}
              </span>
            </td>
            <td className="text-center">
              <button type="button" className="btn btn-warning">
                <span className="fa fa-pencil mr-5" />Sửa
              </button>
              &nbsp;
              <button type="button" className="btn btn-danger">
                <span className="fa fa-trash mr-5" />Xóa
              </button>
            </td>
          </tr>
        )
    }
}
export default Task