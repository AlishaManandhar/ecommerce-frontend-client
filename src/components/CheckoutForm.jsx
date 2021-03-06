import { useState } from "react"
import address  from "../address"

function CheckoutForm(props) {

   const {data, area, onChange, onCityChange} = props
    
  
    return (
        <div className="col-sm-12 col-md-7 billing">
                    <h4>Billing Address</h4>
                    <form  className="billing-form mt-3">
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <div className="mb-3">
                                    <label for="firstname" className="mb-2"> Firstname*</label>
                                    <input type="text" id="firstname" placeholder="Firstname" name="firstname" value={data.firstname} onChange={onChange} />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className="mb-3">
                                    <label for="lastname" className="mb-2"> Lastname*</label>
                                    <input type="text" id="lastname" placeholder="Lastname" name="lastname" value={data.lastname} onChange={onChange}  />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <div className="my-3">
                                    <label for="email" className="mb-2">Email*</label>
                                    <input type="email" id="email" placeholder="Email" name="email" value={data.email} onChange={onChange} />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className="my-3">
                                    <label for="contact" className="mb-2">Contact*</label>
                                    <input type="text" id="contact" placeholder="Contact" name="contact" value={data.contact} onChange={onChange} />
                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <div className="my-3">
                                    <label for="province" className="mb-2">Province*</label>
                                    <select className="form-select select" id="province" name="province" onChange={onChange}>
                                        <option value="1">Province 1</option>
                                        <option value="sth" disabled>Other province not available</option>

                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className="my-3">
                                    <label for="district" className="mb-2">City*</label>
                                    <select className="form-select select" id="city" name="city" onChange={onCityChange}>
                                        {address.map(el => <option value={el.location} key={el.location}> {el.location}</option>)}
                                    </select>
                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <div className="my-3">
                                    <label for="region" className="mb-2">Area*</label>
                                    <select className="form-select select" id="region" name="area" onChange={onChange}>
                                        {area.map(el => <option value={el} key={el}> {el}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className="my-3">
                                    <label for="area" className="mb-2">Address*</label>
                                    <input type="text" id="address" name="address" placeholder="Location Area" value={data.address} onChange={onChange}/>
                                </div>

                            </div>
                        </div>

                    </form>
                </div>
    )
}

export default CheckoutForm