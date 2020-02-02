import React from 'react';
import styled from 'styled-components';
import times from './times';
const ReservationForm = styled.div`
border-style: solid;
border-top-width: 2cm;
border-color: black;
color: white;
`

const Name = styled.input``
const Phone = styled.input``
const Grou = styled.input``
const Input = styled.p`

`

var timeV = "";



function reserve() {   
var ticket_number = Math.round(Math.random() * 1000000) + "A-B" + Math.round(Math.random() * 100)

function reser() {
    alert("Reservation Sucessfull. Your Ticket Number is: " + ticket_number + "   Save this number and show it to us when entering")
}
    return (
        <ReservationForm>

                    <form id="my-form">
                    <div class="container">
                            <div class="row">
                                <div class="col-8">                
                                    <Input>
                                        <Name type="text" name="Name" placeholder="Name"></Name> <br />                
                                        <Phone type="text" name="Phone" placeholder="Phone Number"></Phone> <br />                    
                                        <Grou type="number" name="Group" placeholder="People - max 5"></Grou> <br />
                                        <select placeholder="time" name="Day">
                                            <option>Day</option>
                                            <option>Monday</option>
                                            <option>Tuesday</option>
                                            <option>Wednesday</option>
                                        </select>
                                        <select id="times" placeholder="time" name="Time">                                            
                                        <option>{times[1]}</option> 
                                        <option>{times[2]}</option> 
                                        <option>{times[3]}</option> 
                                        <option>{times[4]}</option> 
                                        <option>{times[5]}</option> 
                                        <option>{times[6]}</option> 
                                        <option>{times[7]}</option> 
                                        <option>{times[8]}</option> 
                                        <option>{times[9]}</option> 
                                        <option>{times[10]}</option> 

                                        </select> <br />
                                        <input type="hidden" value={ticket_number} name="Reservation_number" />
                                        
                                        <button type="submit" onClick={reser} href="/">Submit</button>
                                    </Input>
                                    
                                </div>
                                <div class="col-4">
                                    <h2>
                                        Reserve your spot Now
                                    </h2>
                                </div>                   
                            </div>
                    </div>
                    </form>
  
        </ReservationForm>
    )
}
export default reserve;