import React, { useState } from 'react'
import Form from 'react-bootstrap/Form' 
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Home = () => {

    

    const [inpval, setInpval] = useState({
        user_email: "",
        name: "",
        email: "",
        password: ""
    })

   

    
    console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);


        const { value, name } = e.target;
        // console.log(value,name);


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    

    

    return (
        <>
            <div className='container'>
                <section>
                    <div className='left-data'>
                        <img style={{width:300, display:'flex', margin:'auto'}} src="https://www.kindpng.com/picc/m/2-20106_instagram-logo-instagram-logo-text-png-transparent-png.png" alt='Error'/>
                        <Form style={{marginLeft:300}}>
      <Form.Group className="mb-3 col-lg-7"  controlId="formBasicEmail">
        <Form.Label></Form.Label>
        <Form.Control type="email text" onChange={getdata} placeholder="Mobile Number or Email" />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3 col-lg-7" controlId="formBasicEmail">
        <Form.Label></Form.Label>
        <Form.Control type="text" onChange={getdata} placeholder="Full Name" />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3 col-lg-7" controlId="formBasicEmail">
        <Form.Label></Form.Label>
        <Form.Control type="email text" onChange={getdata} placeholder="Phone number, username, or email" />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 col-lg-7" controlId="formBasicPassword">
        <Form.Label></Form.Label>
        <Form.Control type="password" onChange={getdata} placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        {/* <Form.Check type="checkbox" label="Check me out" /> */}
      </Form.Group>
      {/* <Button variant="primary" type="submit">
        Submit
      </Button> */}
      <Form.Group className="mb-3 col-lg-5" controlId="formBasicCheckbox">
        {/* <Form.Check type="checkbox" label="Check me out" /> */}
        <button  style={{width:476, backgroundColor:'skyblue', borderRadius:5, height:37, border:0, color:'white', fontWeight:'bolder', marginTop:22}} type='submit'>Sign Up</button>
      </Form.Group>
      <Form.Group className="mb-3 col-lg-5" controlId="formBasicCheckbox">
        {/* <Form.Check type="checkbox" label="Check me out" /> */}
        
      </Form.Group>
    </Form>
    <p className="text-center col-lg-11" style={{fontWeight:'bolder'}}>have an account? <span style={{fontWeight:'bolder', color:'skyblue', cursor:'pointer'}}>Log in</span></p>
                    </div>
                </section>
            </div>
        </>
    )
}
export default Home;