import React from 'react'
import { Formik, Form, Field } from 'formik'
import { useState } from 'react'
import { useEffect } from 'react';


function Registration() {

 
  const [fullUser, setFullUser] = useState([]);


  return (
    <>
    <div className='form-main'>

      <Formik initialValues={{
        name: "", age: "", sex: "", mobile: "", gove_id: "", guardian_details: "", guardian_name: "",
        emergency_contact_no: "", email: "", address: "", city: "", country: "india", pincode: ""
        , blood_group: "",occupation:""
      }} onSubmit={(value) => {
        setFullUser([...fullUser,value]);
        
      
      }} >
        <Form>
          <div className="form-child">
            <h4>Personal Details</h4>
            <div className="row " style={{

              placeItems: "center"
            }}>
              <div className="inner-items col-md-6">
                <label htmlFor="Name">Name</label>
                <Field name="name" placeholder="Enter Name" id="name" className="input" />
              </div>
              <div className="inner-items col-md-4">
                <label htmlFor="Name">Age</label>
                <Field name="age" placeholder="Age in Years" id="age" className="input" />
              </div>
              <div className="inner-items col-md-2">
                <label htmlFor="Sex">Sex</label>
                <Field name="sex" as="select" id="sex" className="input">
                  <option > Gender</option>
                  <option value="male"> Male</option>
                  <br />
                  <option value="female"> Female</option>
                  <br />
                  <option value="others"> Otherse</option>
                </Field>
              </div>

            </div>

            <div className="row my-3 " style={{

              placeItems: "center"
            }}>
              <div className="inner-items col-md-6">
                <label htmlFor="Mobile">Mobile</label>
                <Field name="mobile" placeholder="Enter Mobile" id="mobile" className="input" />
              </div>
              <div className="inner-items col-md-3">
                <label htmlFor="Gove Id">Gove issued Id</label>
                <Field name="id_type" as="select" placeholder="Id Type" id="gove_id" className="input">
                  <option >Id Type</option>
                  <option value="adhar">Adhar</option>
                  <option value="voter">Voter</option>
                  <option value="pan">Pan</option>
                </Field>
              </div>
              <div className="inner-items col-md-3">
                <label htmlFor="Sex"></label>
                <Field name="gove_id" id="" className="input">

                </Field>
              </div>

              <h4 className='my-3'>Contact Details</h4>
              <div className="row " style={{

                placeItems: "center"
              }}>
                <div className="inner-items col-md-2">
                  <Field name="guardian_details" as="select" placeholder="Id Type" id="" className="input">
                    <option >Guardian Label</option>
                    <option value="adhar">Father</option>
                    <option value="voter">Mother</option>
                    <option value="pan">Others</option>
                  </Field>
                </div>
                <div className="inner-items col-md-2">

                  <Field name="guardian_name" placeholde="Enter Guardian Name" id="email" className="input" />
                </div>
                <div className="inner-items col-md-4">
                  <label htmlFor="Email"> Email</label>
                  <Field name="email" placeholder="Enter Email" />

                </div>
                <div className="inner-items col-md-4">
                  <label htmlFor="Emergency Contact No">Contact No</label>
                  <Field name="emergency_contact_no" id="" className="input">

                  </Field>
                </div>

              </div>


              <h4 className='my-3'>Address Details</h4>
              <div className="row " style={{

                placeItems: "center"
              }}>


                <div className="inner-items col-md-6">
                  <label htmlFor="Address"> Address</label>
                  <Field name="address" placeholder="Enter Address" className="input" id="address" />
                </div>
                <div className="inner-items col-md-3">
                  <Field name="state" as="select" placeholder="State" id="" className="input">
                    <option >Enter State</option>
                    <option value="West Bangle">West Bangle</option>
                    <option value="Delhi">South</option>
                    <option value="mumbai">Others</option>
                  </Field>
                </div>

                <div className="inner-items col-md-3">

                  <Field name="city" as="select" id="" className="input">
                    <option > Enter City</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Delhi">Delhi</option>
                    <option value="mumbai">mumbai</option>
                  </Field>

                </div>

              </div>

              <div className="inner-items col-md-6">
                <label htmlFor="Country"> Country</label>
                <Field name="country" placeholder="Enter Country" className="input" id="country" />

              </div>

              <div className="inner-items col-md-6">
                <label htmlFor="Pincode">Pincode</label>
                <Field name="pincode" placeholder="Enter Pincode" className="input" id="pincode" />

              </div>

              <h4 className='my-3'>Other Details</h4>
              <div className="row " style={{

                placeItems: "center"
              }}>
                <div className="inner-items col-md-5">
                  <label htmlFor="Occupation">Occupation</label>
                  <Field name="Occupation" id="" className="input">

                  </Field>
                </div>
                <div className="inner-items col-md-2">

                  <Field name="religion" as="select" placeholder="Id Type" id="" className="input">
                    <option >Religion</option>
                    <option value="adhar">Father</option>
                    <option value="voter">Mother</option>
                    <option value="pan">Others</option>
                  </Field>
                </div>
                <div className="inner-items col-md-2">

                  <Field name="marital_status" as="select" id="" className="input">
                    <option >Marital Status</option>
                    <option value="Singel">single</option>
                    <option value="Marage">Marage</option>
                    <option value="others">Others</option>
                  </Field>
                </div>
                <div className="inner-items col-md-2">

                  <Field name="blood_group" as="select" id="" className="input">
                    <option >Guardian Label</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="AB">AB</option>
                  </Field>

                </div>

                <div className="inner-items col-md-6">
                  <label htmlFor="Nationality">Nationality</label>
                  <Field name="nationality" placeholder="Enter Nationality" clasName="input" id="nationality" />

                </div>




              </div>



            </div>
            <div className="btn-groups">
              <button className='btn btn-outline-danger btn1' type='submit'>CANCEL </button>
              <button className='btn btn-success btn2' type='submit'>SUBMIT </button>
            </div>

          </div>
        </Form>
      </Formik>

      
    </div>
     <ShowData data={fullUser}></ShowData>
     </>
  )
}


function ShowData(props) {

  const func=()=>{
    
  }

  useEffect(()=>{
   
  },[])
  return (<>
    <table class="table " style={{
      marginTop: "20px"
    }}>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
          <th scope="col">Sex</th>
          <th scope="col">Mobile</th>

        </tr>
      </thead>
      <tbody>
        {
          props.data ? (<>
            {
              props.data.map((ele,index)=>{
              return(
                   <tr key={index}>
                <th scope="row">{index}</th>
                <td>{ele.name}</td>
                <td>{ele.age}</td>
                <td>{ele.sex}</td>
                <td>{ele.mobile}</td>
              </tr>
              )
              })
            }
          </>
            

          ) : (<></>)

        }

       
      </tbody>
    </table>
  

  </>)
}

export default Registration
export { ShowData }