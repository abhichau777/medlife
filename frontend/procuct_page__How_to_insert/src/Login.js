import React from 'react'
import "./Login.css"
import bgimage from "./Image/Group140.png"
export default function Login() {

    return (
        <div>

            <section class="">
                <div class="container-fluid h-custom ">
                    <div style={{ paddingBottom: "0px", paddingLeft: "0px" }} class=" d-flex h-100 pt-4 " >
                        <div class="col-md-9 col-lg-4 col-xl-7">
                            <img src={bgimage}
                                class="img-fluid" alt="Sample image" />
                        </div>
                        <div style={{ paddingLeft: "-5px" }} class="col-md-8 justify-content-left col-lg-6 col-xl-4 offset-xl-3 pt-4">
                            <form>
                                <div class="flex-row align-items-center ">
                                    <p style={{ fontSize: "34px", fontWeight: "700px" }} class="font-weight-bold ">Sign In</p>

                                </div>

                           



                                <div class="form-outline mb-4">
                                    <label class="form-label" for="form3Example3">Email or Mobile number</label>
                                    <input type="email" id="form3Example3" class="form-control form-control-lg"
                                        placeholder="Enter your Email / Phone number" />

                                </div>


                                <div class="form-outline mb-4">
                                    <label class="form-label" for="form3Example4">Password</label>
                                    <input type="number" id="form3Example4" class="form-control form-control-lg"
                                        placeholder="Enter your Password" />

                                </div>



                                <div class="d-flex justify-content-between align-items-center p">

                                </div>

                                <div class="text-center text-lg-start mt-4 pt-2">
                                    <button style={{ width: "100%", backgroundColor: '#FF724F' }} type="button" class=" text-white btn btn btn-lg btn-block">Sign In</button>
                                    <p class="small fw-bold mt-2 pt-1 mb-0"> <a href="#!"
                                        class="link-primary">Sign In</a> <a style={{ float: "right" }} href="#!" class="float-right text-body">Forgot password?</a></p>

                                    <p class="small fw-bold mt-2 pt-1 mb-0">By continuing, you agree to MedLife’s  <a href="#!"
                                        class="link-primary">Conditions of Use </a>and <a href="#!"
                                            class="link-primary">Privacy Notice.</a></p>
                                </div>
                                <div class="mb-4">
                                    <h6 class="text-uppercase"></h6>

                                    <div class="divider d-flex align-items-center my-4">
                                    <p style={{color:"#9A9A9A"}} class="text-center  mb-0">New to MedLife Pharmacy?</p>
                                </div>

                                </div>
                                <button style={{ border:"1px solid #9D9D9D",color:"#9D9D9D",width: "100%", backgroundColor: '#F7F7F7' }} type="button" class="  btn btn btn-lg btn-block">Create your MedLife account</button>
                              



                            </form>
                        </div>
                    </div>
                </div>

            </section>



        </div>
    )
}
