import React from 'react'
import bgimage from "./Image/Group140.png"
export default function Signup() {

  return (
    <div>

      <section class="">
        <div class="container-fluid h-custom">
          <div style={{ paddingBottom: "0px", paddingLeft: "0px" }} class=" d-flex h-100 " >
            <div class="col-md-9 col-lg-4 col-xl-7 pt-4">
              <img src={bgimage}
                class="img-fluid" alt="Sample image" />
            </div>
            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1 pt-4">
              <form>
                <div class="flex-row align-items-center ">
                  <p style={{ fontSize: "34px", fontWeight: "700px" }} class="font-weight-bold ">Create Account</p>

                </div>

                <div class="divider d-flex align-items-center my-4">
                  <p class="text-center fw-bold mx-3 mb-0"></p>
                </div>



                <div class="form-outline mb-4">
                  <label class="form-label" for="form3Example3">Name</label>
                  <input type="email" id="form3Example3" class="form-control form-control-lg"
                    placeholder="Enter Your full Name" />

                </div>


                <div class="form-outline mb-4">
                  <label class="form-label" for="form3Example4">Mobile Number</label>
                  <input type="number" id="form3Example4" class="form-control form-control-lg"
                    placeholder="Enter Your Mobile Number" />

                </div>
                <div class="form-outline mb-4">
                  <label class="form-label" for="form3Example4">Email</label>
                  <input type="email" id="form3Example4" class="form-control form-control-lg"
                    placeholder="Enter Your Email address" />

                </div>
                <div class="row pt-3">
                  <div class="col">
                  <label class="form-label" for="form3Example4">Password</label>
                    <input type="text" class="form-control" placeholder="Password" />
                  </div>
                  <div class="col">
                  <label class="form-label" for="form3Example4">Confirm Password</label>
                    <input type="text" class="form-control" placeholder="Confirm Password" />
                  </div>
                </div>

                <div class="d-flex justify-content-between align-items-center p">

               

                </div>

                <div class="text-center text-lg-start mt-4 pt-2">
                  <button style={{ width: "100%", backgroundColor: '#FF724F' }} type="button" class=" text-white btn btn btn-lg btn-block">Sign up</button>
                  <p class="small fw-bold mt-2 pt-1 mb-0">Already have an account?  <a href="#!"
                    class="link-primary">Sign in</a></p>
                  <p class="small fw-bold mt-2 pt-1 mb-0">Buying for work? Create a free business account  <a href="#!"
                    class="link-primary">Create a free business account</a></p>
                </div>


              </form>
            </div>
          </div>
        </div>

      </section>



    </div>
  )
}
