import React, { Component } from 'react';
import axios from 'axios';
import FileBase64 from 'react-file-base64';
import updateImg from '../Images/update.png';
import companyLogo from '../Images/logo_[Black Edition]_ICO.png';

export default class FoodItemEdit extends Component {


  constructor(props){
    super(props);
    this.state={
        ItemName:"",
        MCategory:"",
        SubCategory:"",
        ItemUnitPrice:"",
        ItemImg:"",
    }
}

//handleInputChange  <----------------------------------------------
handleInputChange = (e) => {
    const {name,value} = e.target;

    this.setState({
        ...this.state,
        [name]:value
    })
}


onSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    const {ItemName,MCategory,SubCategory,ItemUnitPrice,ItemImg} = this.state;

    const data = {
        ItemName:ItemName,
        MCategory:MCategory,
        SubCategory:SubCategory,
        ItemUnitPrice:ItemUnitPrice,
        ItemImg:ItemImg
    }

    console.log(data)

    axios.put(`/FoodItems/update/${id}`,data).then((res) => {
        if(res.data.success){
          alert("Item Updated Succesfully!")
          window.location.href = '/FoodItems';
            this.setState( 
                {
                    ItemName:"",
                    MCategory:"",
                    SubCategory:"",
                    ItemUnitPrice:"",
                    ItemImg:""
                })
        }
    })
}




  componentDidMount(){
    const id = this.props.match.params.id;

    axios.get(`/FoodItems/getone/${id}`).then((res) => {
        if(res.data.success){
            this.setState({
              ItemName:res.data.post.ItemName,
              MCategory:res.data.post.MCategory,
              SubCategory:res.data.post.SubCategory,
              ItemUnitPrice:res.data.post.ItemUnitPrice,
              ItemImg:res.data.post.ItemImg
            });

            //console.log(this.state.post);
        }
    });
  }



  render() {

    const {ItemName,MCategory,SubCategory,ItemUnitPrice,ItemImg} = this.state;
    return (


      <div>




        
        <nav className="!#">
            <div className="container-fluid">

                <a className="navbar-brand" href="/FoodItems" style={{color:"green"}}><img src={companyLogo} alt="logo"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>








        <div className="FoodItemEdit_Updatedetails">
            <h4>{ItemName}</h4>
            <hr/>


            <div className="containerEdit">


            <center>
                <div id="FoodItemEdit_imgContainer">
                    <img alt="Item_Image" className="FoodItem_activator" src={ItemImg}/>
                </div>
            </center>


            <div className="row">
                <dt className="col1">Main Category</dt>
                <dd className="col2">{MCategory}</dd>

                <dt className="col1">Sub Category</dt>
                <dd className="col2">{SubCategory}</dd>

                <dt className="col1">Item Unit Price</dt>
                <dd className="col2">Rs.{ItemUnitPrice}/=</dd>
            </div>

            <button className = "EditFoodItemBtn" type="button" data-toggle="modal" data-target="#exampleModalCenteredit">Edit</button>

            </div>


            

           
            
        </div> 

























{/*}



        <div className="container_addItem_POPUP">

            <div className="imgContainer">
                <img src={updateImg} alt='updateItemLOGO'/>
            </div>
            
            <div className="formContainer">
                <h1 className="addItem_h1"><u>EDIT ITEM</u></h1>
                <form className="addItem_form" noValidate>


                    <div className="addItem_form_group">
                        <label>Item Name</label>
                        <input type="text"
                        className="addItem_input"
                        name="ItemName"
                        placeholder="Enter New Item Name"
                        value={this.state.ItemName}
                        onChange={this.handleInputChange} />
                    </div>


                    <div className="addItem_form_group">
                        <label>Main Category</label>
                        <input type="text"
                        className="addItem_input"
                        name="MCategory"
                        placeholder="Enter New Main Category"
                        value={this.state.MCategory}
                        onChange={this.handleInputChange} />
                    </div>


                    <div className="addItem_form_group">
                        <label>Sub Category</label>
                        <input type="text"
                        className="addItem_input"
                        name="SubCategory"
                        placeholder="Enter Sub Category"
                        value={this.state.SubCategory}
                        onChange={this.handleInputChange} />
                    </div>


                    <div className="addItem_form_group">
                        <label>Item Unit Price(Rs./=)</label>
                        <input type="text"
                        className="addItem_input"
                        name="ItemUnitPrice"
                        placeholder="Enter New Item Unit Price"
                        value={this.state.ItemUnitPrice}
                        onChange={this.handleInputChange} />
                    </div>


                    <div>
                    <FileBase64
                          type="file"
                          name="ItemImg"
                          multiple={ false }
                          onDone={({ base64 }) => this.setState({ ItemImg: base64 })}
                    />
                    </div>


                    <button className="addItem_Btn" type="submit" onClick={this.onSubmit}>Update</button>

                </form>
            </div>
            


            
        </div>


*/}










<div className="modal fade" id={"exampleModalCenteredit"} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">

                
                

            <div id="container_addFoodItemEdit_POPUP" className="modal-content">

              <div className="closeBtnContainer">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>


              <div className="imgContainer">
                <img src={updateImg} alt='updateItemLOGO'/>
            </div>
            
            <div className="formContainer">
                <h1 className="addItem_h1"><u>EDIT ITEM</u></h1>
                <form className="addItem_form" noValidate>


                    <div className="addItem_form_group">
                        <label>Item Name</label>
                        <input type="text"
                        className="addItem_input"
                        name="ItemName"
                        placeholder="Enter New Item Name"
                        value={this.state.ItemName}
                        onChange={this.handleInputChange} />
                    </div>



                    <div className="addItem_form_group">
                        <label>Main Category</label>
                        <select className="addItem_input" name="MCategory" 
                          value={this.state.MCategory}
                          onChange={this.handleInputChange}>
                          <option value="" selected disabled hidden>Choose Type</option>
                          <option value="Foods">Foods</option>
                          <option value="Drinks">Drinks</option>
                          <option value="Dessert">Dessert</option>
                          <option value="Snacks">Snacks</option>
                          <option value="Packages">Packages</option>
                        </select>
                    </div>


                    <div className="addItem_form_group">
                        <label>Sub Category</label>
                        <select className="addItem_input" name="SubCategory" 
                          value={this.state.SubCategory}
                          onChange={this.handleInputChange}>
                          <option value="" selected disabled hidden>Choose Type</option>
                          <option value="Chicken">Chicken</option>
                          <option value="Egg">Egg</option>
                          <option value="Vegetable">Vegetable</option>
                          <option value="Fish">Fish</option>
                          <option value="Sea-Foods/Mix">Sea-Foods/Mix</option>
                          <option value="Hot">Hot</option>
                          <option value="Cold">Cold</option>
                          <option value="Frozen-Foods">Frozen-Foods</option>
                          <option value="Fruits">Fruits</option>
                          <option value="Cakes">Cakes</option>
                          <option value="Kids-Pack">Kids-Pack</option>
                          <option value="Person-Pack">Person-Pack</option>
                          <option value="Family-Pack">Family-Pack</option>
                        </select>
                    </div>


                    <div className="addItem_form_group">
                        <label>Item Unit Price(Rs./=)</label>
                        <input type="text"
                        className="addItem_input"
                        name="ItemUnitPrice"
                        placeholder="Enter New Item Unit Price"
                        value={this.state.ItemUnitPrice}
                        onChange={this.handleInputChange} />
                    </div>


                    <div>
                    <FileBase64
                          type="file"
                          name="ItemImg"
                          multiple={ false }
                          onDone={({ base64 }) => this.setState({ ItemImg: base64 })}
                    />
                    </div>


                    <button className="addItem_Btn" type="submit" onClick={this.onSubmit}>Update</button>

                </form>
            </div>


            </div>
          </div>
        </div>





      </div>




      

    )
  }
}