import React, { Component }  from "react"

class FormTask extends Component
{

constructor(props)
{
  super(props)
  this.state = {
    name:"",
    status : null
  }
}
renderOption =() =>{
  let {arrayStatus} = this.props
   return  arrayStatus.map((element) => {
    return <option key={element.key} value={element.key}>{element.text}</option>
  });
}

    render (){
        return(
            <div className="panel panel-warning">
            <div className="panel-heading ">
              <h3 className="panel-title">
                    Thêm Công Việc
                    <div className="text-right" onClick={this.props.onCloseForm}><i className="fas fa-times-circle"></i></div>
              </h3>
             
            </div>
            <div className></div>
            <div className="panel-body">
              <form onClick={this.props.onSubmit(this.state)}>
                <div className="form-group">
                  <label>Tên :</label>
                  <input type="text" value={this.state.name} className="form-control" />
                </div>
                <label>Trạng Thái :</label>
                <select className="form-control" value={this.state.status} required="required">
                 {this.renderOption()}
                
                </select>
                <br />
                <div className="text-center">
                  <button type="submit" className="btn btn-warning">Thêm</button>&nbsp;
                  <button type="submit" className="btn btn-danger">Hủy Bỏ</button>
                </div>
              </form>
            </div>
          </div>
        );
    }
}
export default FormTask