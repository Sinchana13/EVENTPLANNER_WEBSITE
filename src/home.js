import React from "react"
import {useNavigate} from 'react-router-dom';
//import Button from 'react-bootstrap/Button';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import {Routes, Route} from 'react-router-dom';
// import Saptapadi from "./Saptapadi";





export const Home = ()=>{
    const navigate = useNavigate()

    return(
        <div >
      <nav id="navbar">
        <div id="logo">
        <img src=" https://i.pinimg.com/736x/7a/69/91/7a6991b2505747318d5f01a45714f73f.jpg" alt="MyOnlineMeal.com"></img>
        </div>
        <ul>
            <li class="item"><a href="#home">Home</a></li>
            <li class="item"><a href="Saptapadi">SAPTAPADI</a></li>
            <li class="item"><a href="Birthday">BIRTHDAY</a></li>
            <li class="item"><a href="Signup">Register</a></li>
            
        </ul>
    </nav>

    <section id="home">
        <h1 class="h-primary">Welcome to FJ</h1>
        <p>An event is not over until everyone is tired of talking about it </p>
        <p>“Some people look for a beautiful place. But we make a place beautiful. </p>
        <div ><a href="register">
            
        </a>
        </div>
    </section>

    <section id="services-container">
        <h1 class="h-primary center">Our Services</h1>
        <div id="services">
            <div class="box">
                <img src="https://thumbs.dreamstime.com/b/kids-celebrating-birthday-party-blowing-group-joyful-little-candles-cake-holidays-concept-48869522.jpg" alt=""></img>
                <h2 class="h-secondary center" onClick={()=>navigate('Birthday')} >JANMADINA</h2>
                <p class="center">A birthday is the anniversary of the birth of a person, or figuratively of an institution. Birthdays of people are celebrated in numerous cultures, often with birthday gifts, birthday cards, a birthday party, or a rite of passage.I hope your special day will bring you lots of happiness, love, and fun. You deserve them a lot. Enjoy! Have a wonderful birthday. I wish you every day to be filled with lots of love, laughter, happiness, and the warmth of sunshine.May your coming year surprise you with the happiness of smiles, the feeling of love, and so on. I hope you will find plenty of sweet memories to cherish forever...... Happiest birthday</p>
            </div>
            <div class="box">
                <img src="https://bridebox.com/wp-content/uploads/2015/11/Special-Indian-Wedding-Traditions.jpg" alt=""></img>
                
                <h2 class="h-secondary center" onClick={()=>navigate('Saptapadi')}>SAPTAPADI</h2>
                
                <p class="center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, culpa suscipit error
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde laudantium a incidunt animi ad, ab dignissimos vero? Unde numquam odit repudiandae perferendis nisi.

                    sint delectus ab dolorum nam. Debitis facere, incidunt voluptates eos, mollitia voluptatem iste sunt
                    voluptas beatae facilis labore, omnis sint quae eum.</p>
                    {/* <Routes>
                        <Route path="/saptapadi.js" element={<saptapadi/>} />
                   </Routes> */}
            </div>
            <div class="box">
                <img src="https://imgk.timesnownews.com/story/Haldi_ceremony_1.jpg?tr=w-1200,h-900" alt=""></img>
                <h2 class="h-secondary center">PAAARTY</h2>
                <p class="center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, culpa suscipit error
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident fugiat aliquam minima at explicabo. Earum eveniet quaerat, sunt molestias nesciunt quas! Quis.
                    sint delectus ab dolorum nam. Debitis facere, incidunt voluptates eos, mollitia voluptatem iste sunt
                    voluptas beatae facilis labore, omnis sint quae eum.</p>
            </div>
        </div>
    </section>

    <section id="client-section">
        <h1 class="h-primary center">Our Clients</h1>
        <div id="clients">
            <div class="client-item">
                <img src="https://combonews.online/wp-content/uploads/2021/12/Katrina-Kaif-and-Vicky-Kaushal-wedding.png" alt="Our Client"></img>
            </div>
            <div class="client-item">
                <img src="https://static.toiimg.com/photo/62103724.cms" alt="Our Client"></img>
            </div>
          
            <div class="client-item">
                <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/202201/272650752_1082468579199395_335-1200x1800.jpg?U7O8jIrkLRlpxhGmr7fG9vs9B.vAJSxU" alt="Our Client" width="200px" height="200px"></img>
            </div>
            <div class="client-item">
                <img src="https://c.ndtvimg.com/2018-11/2epusqm8_deepika-ranveer-ndtv_625x300_23_November_18.jpg" alt="Our Client"></img>
            </div>
        </div>

    </section>

    <section id="contact">
        <h1 class="h-primary center">Contact Us</h1>
        <div id="contact-box">
            <form action="">
                <div class="form-group">
                    <label for="name">Name: </label>
                    <input type="text" name="name" id="name" placeholder="Enter your name"/>
                </div>
                <div class="form-group">
                    <label for="email">Email: </label>
                    <input type="email" name="name" id="email" placeholder="Enter your email"/>
                </div>
                <div class="form-group">
                    <label for="phone">Phone Number: </label>
                    <input type="phone" name="name" id="phone" placeholder="Enter your phone"/>
                </div>
                <div class="form-group">
                    <label for="message">Message: </label>
                    <textarea name="message" id="message" cols="30" rows="10"></textarea>
                </div>
            </form>
        </div>
    </section>


                {/* <section class="client_section layout_padding-bottom">
                <div class="container ">
                <div class="heading_container">
                    <h2>
                    ABOUT FOUNDERS
                    </h2>
                    <hr/>
                </div>
                <div id="carouselExample2Controls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="client_container layout_padding-top">
                        <div class="img-box">
                            <img src="images/client-img.png" alt=""/>
                        </div>
                        <div class="detail-box">
                            <h5>
                            SINCHANA S
                            </h5>
                            <p>
                            <img src="images/left-quote.png" alt=""/>
                            <span>
                                Lorem ipsum dolor sit amet,
                            </span>
                            <img src="images/right-quote.png" alt=""/> <br/>
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            </p>
                        </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="client_container layout_padding-top">
                        <div class="img-box">
                            <img src="images/client-img.png" alt=""/>
                        </div>
                        <div class="detail-box">
                            <h5>
                            Jone Mark
                            </h5>
                            <p>
                            <img src="images/left-quote.png" alt=""/>
                            <span>
                                Lorem ipsum dolor sit amet,
                            </span>
                            <img src="images/right-quote.png" alt=""/> <br/>
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            </p>
                        </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="client_container layout_padding-top">
                        <div class="img-box">
                            <img src="images/client-img.png" alt=""/>
                        </div>
                        <div class="detail-box">
                            <h5>
                            Jone Mark
                            </h5>
                            <p>
                            <img src="images/left-quote.png" alt=""/>
                            <span>
                                Lorem ipsum dolor sit amet,
                            </span>
                            <img src="images/right-quote.png" alt=""/> <br/>
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExample2Controls" role="button" data-slide="prev">
                    <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExample2Controls" role="button" data-slide="next">
                    <span class="sr-only">Next</span>
                    </a>
                </div>

                </div>
            </section> */}

    <footer>
        <div class="center">
            Copyright &copy; www.eventplanner.com. All rights reserved!
        </div>
    </footer>
    </div>

    );
}




export default Home;
