import React from 'react'
import './form.css'
import transactionimg from './Control.png'

export default function Form() {
    return (
        <div className='wrapper  bg-light'>
            <div className="header bg-light">
                <div>
                    <span>Listing</span>
                    <span className='bg-dark'>Doc-List</span>
                </div>
                <div className='header-btn'>
                    <button>Archive </button>
                    <button>
                        <img src={transactionimg} alt="" />
                        Create Transaction
                        </button>
                </div>
            </div>
          <div className="form-wrapper bg-dark">
              <div className="form-header">Location</div>
              <div className="form-inner-wrapper">
                <div className='input-wrapper'>
                  <label htmlFor="address">Address :</label>
                  <input type="text" id="address" />
                </div>    
               
                <div className='input-wrapper'>
                  <label htmlFor="unit">Unit :</label>
                  <input type="text" id="unit" />
                </div>    
                <div className='input-wrapper'>
                  <label htmlFor="city">City :</label>
                  <input type="text" id="city" />
                </div>    
                <div className='input-wrapper'>
                  <label htmlFor="state">State :</label>
                  <input type="text" id="state" />
                </div>    
                <div className='input-wrapper'>
                  <label htmlFor="zipcode">Zip Code :</label>
                  <input type="text" id="zipcode" />
                </div>    
                <div className='input-wrapper'>
                  <label htmlFor="country">Country :</label>
                  <input type="text" id="country" />
                </div>   
                <div className='input-wrapper'>
                  <label htmlFor="mls">MLS # :</label>
                  <input type="text" id="mls" />
                </div>   
              </div>
          </div>
          <div className="form-wrapper bg-light">
          <div className="form-header">Listing Info</div> 
          <div className="form-inner-wrapper">
          <div className='input-wrapper'>
                  <label htmlFor="type">Listing Type :</label>
                  <select id="type">
                  <option value="Select"  disabled selected hidden>Select</option> 
                  </select>
          
          
          
            </div>  
            <div className='input-wrapper'>
                  <label htmlFor="year">Year Built:</label>
                  <input type="text" id="year" />
            </div>  
                
            <div className='input-wrapper'>
                  <label htmlFor="lsprice">Listing Price:</label>
                  <input type="text" id="lsprice" placeholder='$' />
            </div>  
            <div className='input-wrapper'>
                  <label htmlFor="source">Source :</label>
                  <select id="source">
                  <option value="Select"  disabled selected hidden>Select</option> 
                  </select>          
            </div> 
                 
            <div className='input-wrapper'>
                  <label htmlFor="lscommission%">Listing Commission:</label>
               <div className='small-width-input'>
                  <input type="text" id="lscommission%" placeholder='%' />
                  <input type="text" id="lscommission$" placeholder='$' />
                </div>     
            </div>  
            <div className='input-wrapper'>
                  <label htmlFor="slcommission%">Sale Commission:</label>
               <div className='small-width-input'>
                  <input type="text" id="slcommission%" placeholder='%' />
                  <input type="text" id="slcommission$" placeholder='$' />
                </div>     
            </div> 
            <div className='input-wrapper'>
                  <label htmlFor="fileid">File ID:</label>
                  <input type="text" id="fileid"  />
            </div>   


           
                </div>    
          </div>
          <div className="form-wrapper bg-dark">
          <div className="form-header">Contacts</div>
          <div className="form-inner-wrapper">
          <div className='input-wrapper'>
                  <label htmlFor="agent">Listing Agent :</label>
                  <select id="agent">
                  <option value="Select"  disabled selected hidden>Select</option> 
                  </select>        
            </div>    
            <div className='input-wrapper'>
                  <label htmlFor="email">Email:</label>
                  <input type="text" id="email" />
            </div>    
            <div className='input-wrapper'>
                  <label htmlFor="sellername">Seller Name:</label>
                  <input type="text" id="sellername" />
            </div>    
            <div className='input-wrapper'>
                  <label htmlFor="selleremail">Seller Email:</label>
                  <input type="text" id="selleremail" />
            </div>   
            <div className='input-wrapper'>
                  <label htmlFor="coagent">Co-Listing Agent :</label>
                  <select id="coagent">
                  <option value="Select"  disabled selected hidden>Select</option> 
                  </select>        
            </div> 
            <div className='input-wrapper'>
                  <label htmlFor="email2">Email:</label>
                  <input type="text" id="email2" />
            </div>        
          </div>

          </div>
          <div className="form-wrapper bg-light">
          <div className="form-header">Additional Info</div>
          <div className="form-inner-wrapper">
      <div className="input-wrapper">
      <label htmlFor="lsdate">Listing Date:</label>
      <input type="date" id="lsdate" placeholder='Select' />
   
      </div>
      <div className='input-wrapper'>
                  <label htmlFor="status">Listing Status :</label>
                  <select id="status">
                  <option value="Select"  disabled selected hidden>Select</option> 
                  </select>
          
            </div>  
    <div className="input-wrapper">
      <label htmlFor="date">Date Entered:</label>
      <input type="date" id="date" placeholder='Select' />
   
      </div>     
    <div className="input-wrapper">
      <label htmlFor="expdate">Expiration Date:</label>
      <input type="date" id="expdate" placeholder='Select' />
   
      </div>  
      <div className='input-wrapper'>
                  <label htmlFor="refagent">Referring Agent:</label>
                  <select id="refagent">
                  <option value="Select"  disabled selected hidden>Select</option> 
                  </select>
          
            </div>    
            <div className='input-wrapper'>
                  <label htmlFor="refcommission%">Referring Commission:</label>
               <div className='small-width-input'>
                  <input type="text" id="refcommission%" placeholder='%' />
                  <input type="text" id="refcommission$" placeholder='$' />
                </div>     
            </div>   
            <div className='input-wrapper'>
                  <label htmlFor="company">Company:</label>
                  <input type="text" id="company" />
            </div>          
            <div className='input-wrapper'>
                  <label htmlFor="officecommission">Office Gross Commission:</label>
                  <input type="text" id="officecommission" placeholder='$'/>
            </div>          
          </div>
          </div>
          <div className="form-wrapper bg-dark">
          <div className="form-inner-wrapper">  
              <div className="form-wrapper bg-dark">
              <div className="form-header">Home Warranty</div>
              <div className="form-inner-wrapper">
              <div className="input-wrapper">
      <label htmlFor="name">Representative Name:</label>
      <input type="text" id="name"  />
   
      </div>  
              <div className="input-wrapper">
      <label htmlFor="email3">Email:</label>
      <input type="text" id="email3" />
   
      </div>  
              <div className="input-wrapper">
      <label htmlFor="phone">Phone:</label>
      <input type="text" id="phone" />
   
      </div>  
              <div className="input-wrapper">
      <label htmlFor="company2">Company:</label>
      <input type="text" id="company2" />
   
      </div>  
            




              </div>
              </div>      
              <div className="form-wrapper bg-dark">

              <div className="form-header">Fees</div>
              <div className="form-inner-wrapper">
              <div className="input-wrapper">
      <label htmlFor="fees">Fees:</label>
      <input type="text" id="fees" placeholder='$' />
   
      </div>  
              <div className="input-wrapper">
      <label htmlFor="fees2">Earnest Money Fees:</label>
      <input type="text" id="fees2" placeholder='$' />
   
      </div>  
            
            <div className="input-wrapper">
            <label htmlFor="comments">Comments :</label>                
                <textarea id="comments" cols="100" rows="7" ></textarea>
            </div>
              </div>

              </div>
          </div>
          </div>
        </div>
    )
}
