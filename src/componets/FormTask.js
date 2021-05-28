import React, { Component }  from "react"

class FormTask extends Component
{

constructor(props)
{
  super(props)
  this.state = {
    name: '',
    status : 0
  }
}
renderOption =() =>{
  let {arrayStatus} = this.props
   return  arrayStatus.map((element,index) => {
    return <option key={index} value={element.key}>{element.text}</option>
  });
}

onSubmit = (data)=>
{
  this.props.onSubmit(this.state);
}
onChange =(event)=>{
  var target = event.target;
  var name = target.name;
  var value = target.value;
  this.setState({
    [name] : value
  })
}
onChangeSelect =(event)=>{
  var target = event.target;
  var value = target.value;
  this.setState({
    status : parseInt(value)
  })
}
onSubmit =(event)=>{
  event.preventDefault();
  console.log(this.state)
  this.props.onSubmit(this.state);
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
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>Tên :</label>
                  <input type="text" name="name" value={this.state.name} className="form-control" onChange={this.onChange}/>
                </div>
                <label>Trạng Thái :</label>
                <select className="form-control" value={this.state.status} required="required" onChange={this.onChangeSelect}>
                 {this.renderOption()}
                 
                </select>
                <br />
                <div className="text-center">
                  <button type="submit"  className="btn btn-warning">Thêm</button>&nbsp;
                  <button type="reset" className="btn btn-danger">Hủy Bỏ</button>
                </div>
              </form>
            </div>
          </div>
        );
    }
}
export default FormTask