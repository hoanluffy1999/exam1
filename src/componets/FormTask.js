import React, { Component }  from "react"

class FormTask extends Component
{


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
              <form>
                <div className="form-group">
                  <label>Tên :</label>
                  <input type="text" className="form-control" />
                </div>
                <label>Trạng Thái :</label>
                <select className="form-control" required="required">
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