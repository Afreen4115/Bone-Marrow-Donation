import React from 'react';
import './Navbar.css'
import { useState } from 'react';
import Navbar from './Navbar';

function Donate() {
  const [inputarr,setInputarr] = useState([])
  const [inputdata,SetInputdata] = useState({name: "", cvv: "",card:"",date:"",amt:""})

  function changehandle(e) {
      SetInputdata({
          ...inputdata,
          [e.target.name]: e.target.value
      })
  }

  let {name, cvv,card,date,amt} = inputdata;

  function changhandle(e) {
    e.preventDefault();
    if((name === "") || (cvv==="") || (card==="") || (date==="") || (amt===""))
    { alert("invalid")
   return } 
    else if(cvv.length!==3 || card.length!==16 ){alert("please fill correct format of cvv , card number") 
    return }
    else{
    setInputarr([
          ...inputarr, {
              name,cvv,card,date,amt
          }
      ])
      SetInputdata({name: "", cvv: "",card:"",date:"",amt:""})     
  }
  }

return (
    <div >
<Navbar></Navbar>
  <meta charset="UTF-8"></meta>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
  <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css" rel="stylesheet"></link>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com"></link>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
  <link href="https://fonts.googleapis.com/css2?family=Merriweather&family=Montserrat&family=Sacramento&display=swap"
    rel="stylesheet"></link>

 <div className='pp3' >
  <link rel="stylesheet" type="text/css" href="dcodes/payment_icons/dc_payment_icons.css" />
  <link rel="stylesheet" type="text/css" href="http://cdn.dcodes.net/2/payment_icons/dc_payment_icons.css" />
  <div class="cards" style={{height:'550px', position: 'relative', top: '80px',color:'black',fontSize:'20px'}}>
  <h3 style={{textAlign:'center'}}><br /><b>CONFIRM YOUR PAYMENT</b></h3><br/>

  <form  style={{marginLeft: '150px'}}>
      <label>Card Owner Name : </label>
      <input  type="text"
                autoComplete='off'
                name='name'
                value={inputdata.name}
                onChange={changehandle}
               placeholder="Enter Card Owner Name" required style={{marginLeft:'10px'}} />
      <br /><br />
      <label>CVV (3 numbers) :  </label>
      <input  type="number"
                autoComplete='off'
                name='cvv'
                value={inputdata.cvv}
                onChange={changehandle}
                required  placeholder="Enter CVV"  style={{marginLeft:'22px'}}/>
     <br /> <br />
      <label>Card (16 numbers): </label>
      <input type="number" autoComplete='off'
                name='card'
                value={inputdata.card}
                onChange={changehandle} placeholder="Enter card number" required size="100"
          pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}" style={{marginLeft:'10px'}}/>
<br/><br/>
      <label>Date of Expiry : </label>
      <input type="date" 
      autoComplete='off'
                name='date'
                value={inputdata.date}
                onChange={changehandle} required style={{marginLeft:'45px'}}/> <br /><br />
      <label>Donation Amount : </label>
      <input type="number" autoComplete='off'
                name='amt'
                value={inputdata.amt}
                onChange={changehandle}
                placeholder=" Enter Amount you want to pay" required size="30" style={{marginLeft:'10px'}}/>
      <br /><br />
      <span class="dc_payment_icons_glossy_75 dc_visa_glossy" title="Visa" style={{display: 'inline-block', width: '50px',height:'30px'}}></span>
      <span class="dc_payment_icons_glossy_75 dc_mastercard_glossy" title="Mastercard" style={{display: 'inline-block', width: '50px',height:'30px'}}></span><br />
      <input type="submit" value="complete payment" onClick={changhandle}  name="submit" id="submit" className='ppx' size="100" />
  </form>
</div>

</div>

</div>
)}

export default Donate