import React from 'react';
import styled from 'styled-components';
import school from '../../elem/school.jpg'
//styling
const AboutUS = styled.div`
color: #FFFFFF;
margin-top: 1cm;
`
const IMG = styled.img`
width: 100%;
`
function about() {
    return (
        <AboutUS>
            <div class="container"> 
                <div class="row">
                    <div class="col-md-6">
                        <p>
                            A hounted house themed escape room organized by students from the AAP. more details bellow.
                        </p>
                        <ul>
                            <li>                                
                                Price: xxx-, CZK                                                             
                            </li>
                            <li>
                                    Duration: xx Min
                            </li>
                            <li>
                                Location: xxxxxxxxxx                            
                            </li>
                            <li>
                                Dates: 23-28 xxxx | 9:00 -- 21:00
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-5">
                        <IMG src={school}></IMG>
                    </div>
                    
                </div>
            </div>
        </AboutUS>
    )
}
export default about;