import React, { useState } from "react";

const Contact = () => {

  const [data,setData] = useState({
    fullname:'',
    phone:'',
    mobilenumber:'',
    email:'',
    meassage:'',

  });


  const InputEvent  = (event) => {
    const {name,value} = event.target;
    setData((preVal)=>{
      return {
        ...preVal , 
        [name] : value,
      }
    })
  }

const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.fullname} My Mobile Number ${data.mobilenumber} email is ${data.email} `
    );
};

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact US</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
          <form onSubmit={formSubmit}>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Full Name
              </label>
              <input
                type="text"
                class="form-control"
                id="fullname"
                value={data.fullname}
                onChange={InputEvent}
                name="fullname"
                placeholder="Enter Your Name"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Phone
              </label>
              <input
                type="number"
                class="form-control"
                id="phone"
                value={data.phone}
                onChange={InputEvent}
                name="phone"
                placeholder="Phone Number"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Mobile Number
              </label>
              <input
                type="number"
                class="form-control"
                id="mobilenumber"
                value={data.mobilenumber}
                onChange={InputEvent}
                name="mobilenumber"
                placeholder="Mobile Number"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="email"
                value={data.email}
                onChange={InputEvent}
                name="email"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Meassgae
              </label>
              <textarea class="form-control" id="textarea" value={data.meassage}
                onChange={InputEvent}
                name="meassage" rows="3"></textarea>
            </div>
            <div class="col-12">
              <button class="btn btn-outline-primary" type="submit">
                Submit
              </button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
