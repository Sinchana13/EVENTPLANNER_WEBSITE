import React from "react"
import { Player } from 'video-react';
import ImageSlider from './ImageSlider';


// npm install --save video-react react react-dom
//npm install --save react-script-tag
export const Saptapadi=()=>{

    const slides = [
        { url: "https://th.bing.com/th/id/R.02d81e26ec58c49cf083aceec5c4b138?rik=f5H5OBsZDbf9lA&riu=http%3a%2f%2ffashionshala.com%2fwp-content%2fuploads%2f2018%2f07%2fcreative-engagement-ring-photography-ideas-2.jpg&ehk=O1JqeuwNq5AFdIe5IR%2bcMNNikDgb%2bdB5bU3pRf6WsSE%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1", title: "ENGAGEMENT"},
        { url: "https://www.shaadidukaan.com/vogue/wp-content/uploads/2019/07/Bangalore-pre-wedding.jpg", title: "BRIDE TO BE" },
        { url: "https://cdn.shopify.com/s/files/1/0219/1072/files/Homebodii_robes_607c66d5-e0d6-4abb-84a7-ce00d6f9b8ac_1024x1024.png?v=1530745266", title: "forest" },
        { url: "https://royalpepper.in/blog/wp-content/uploads/2021/05/bachelor-party-dress-idea-for-groom-768x512.jpg", title: "city" },
        { url: "https://image.wedmegood.com/resized-nw/1300X/wp-content/uploads/2018/12/1533980934_Taj_05.jpg", title: "italy" },
        {url: "https://www.manhattanbride.com/wp-content/uploads/2019/04/Indian-Traditions39-Ceremony-506-Christopher-Brock-Photography.jpg", title: "italy" },
        {url: "https://d1zpvjny0s6omk.cloudfront.net/media/fileupload/2015/12/30/1_mecca-daniels_J-Cogliandro-Photography.jpg", title: "italy" },
      ];

      const containerStyles = {
        width: "100%",
        height: "500px",
        margin: "0 auto",
        
      };
    

    return(
        < >
                <body background="https://chasingdaisiesblog.com/wp-content/uploads/2020/09/3a06c0028fc03a6cf8b209d50a84f0dc.jpg">
                <embed src="./assets/popular-post/mangalyam.mp3" loop={true} autostart={true} width="2"
                    height="0"/>


                
                {/* <!-- ----------------------------  Navigation ---------------------------------------------- --> */}

                <nav className="nav">
                    <div className="nav-menu flex-row">
                        <div className="nav-brand">
                            <a href="Signup" className="text-gray">BOOK </a>
                        </div>
                        <div className="toggle-collapse">
                            <div className="toggle-icons">
                                <i className="fas fa-bars"></i>
                            </div>
                        </div>
                        {/* <div>
                            <ul className="nav-items">
                                <li className="nav-link">
                                    <a href="/#">Home</a>
                                </li>
                                <li className="nav-link'>
                                    <a href="/#">Category </a>
                                </li>
                                <li className="nav-link">
                                    <a href="/#">Archive</a>
                                </li>
                                <li className="nav-link">
                                    <a href="/#">Pages</a>
                                </li>
                                <li className="nav-link">
                                    <a href="/#">Contact Us</a>
                                </li>
                                
                            </ul>
                        </div> */}
                        <div className="social text-gray">
                            <a href="https://www.facebook.com/narendramodi/"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://www.instagram.com/narendramodi/?hl=en"><i className="fab fa-instagram"></i></a>
                            <a href="https://twitter.com/narendramodi?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><i className="fab fa-twitter"></i></a>
                            <a href="https://www.youtube.com/channel/UC1NF71EwP41VdjAU1iXdLkw"><i className="fab fa-youtube"></i></a>
                            {/* <i className="dropdown">
                                <img className="dropimg" src="./assets/Blog-post/blog1.png" alt="Profile"  style="max-height:50px ; border-radius: 50%;" />
                                <span>SINCHANA</span>
                                <div className="dropdown-content">
                                    <a href="/#">LINK1</a>
                                </div>
                            </i> */}
                            
                        </div>
                    </div>
                </nav>

                {/* <!-- ------------x---------------  Navigation --------------------------x------------------- --> */}

                {/* <!----------------------------- Main Site Section ------------------------------> */}

                <main>
                    <div style={containerStyles}>

                        <ImageSlider slides={slides}/>


                    </div>

                    {/* <!------------------------ Site Title ----------------------> */}

                    

                    {/* <div className="slideshow-container">
                        <div className="mySlides fade">
                        <div className="numbertext">1 / 6</div>
                        <img src="https://th.bing.com/th/id/R.02d81e26ec58c49cf083aceec5c4b138?rik=f5H5OBsZDbf9lA&riu=http%3a%2f%2ffashionshala.com%2fwp-content%2fuploads%2f2018%2f07%2fcreative-engagement-ring-photography-ideas-2.jpg&ehk=O1JqeuwNq5AFdIe5IR%2bcMNNikDgb%2bdB5bU3pRf6WsSE%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" width="100%" height="950" alt="slideimg"/>
                        <div className="text">ENGAGEMENT</div>
                        </div>
                        
                        <div className="mySlides fade">
                        <div className="numbertext">2 / 6</div>
                        <img src="https://www.shaadidukaan.com/vogue/wp-content/uploads/2019/07/Bangalore-pre-wedding.jpg" width= "100%"  height="950" alt="slideimg"/>
                        <div className="text">PRE WEDDING SHOOT</div>
                        </div>
                        
                        <div className="mySlides fade">
                        <div className="numbertext">3 / 6</div>
                        <img src="https://cdn.shopify.com/s/files/1/0219/1072/files/Homebodii_robes_607c66d5-e0d6-4abb-84a7-ce00d6f9b8ac_1024x1024.png?v=1530745266" width= "100%"  height="950" alt="slideimg"/>
                        <div className="text">BRIDE TO BE</div>
                        </div>
                        
                        <div className="mySlides fade">
                        <div className="numbertext">4 / 6</div>
                        <img src="https://royalpepper.in/blog/wp-content/uploads/2021/05/bachelor-party-dress-idea-for-groom-768x512.jpg" width="100%"  height="950" alt="slideimg"/>
                        <div className="text">GROOM TO BE</div>
                        </div>
                        
                        <div className="mySlides fade">
                        <div className="numbertext">5 / 6</div>
                        <img src="https://image.wedmegood.com/resized-nw/1300X/wp-content/uploads/2018/12/1533980934_Taj_05.jpg" width="100%"  height="950" alt="slideimg"/>
                        <div className="text">HALDI</div>
                        </div>
                        
                        <div className="mySlides fade">
                        <div className="numbertext">6 / 6</div>
                        <img src="https://www.manhattanbride.com/wp-content/uploads/2019/04/Indian-Traditions39-Ceremony-506-Christopher-Brock-Photography.jpg" width="100%"  height="950" alt="slideimg"/>
                        <div className="text">WEDDING</div>
                        </div>

                        <div className="mySlides fade">
                            <div className="numbertext">6 / 6</div>
                            <img src="https://d1zpvjny0s6omk.cloudfront.net/media/fileupload/2015/12/30/1_mecca-daniels_J-Cogliandro-Photography.jpg" width="100%" height="950" alt="slideimg"/>
                            <div className="text">RECEPTION</div>
                        </div>
                        
                        </div>
                        <br/>
                        
                        <div text-align="center">
                        <span className="dot"></span> 
                        <span className="dot"></span> 
                        <span className="dot"></span> 
                        <span className="dot"></span> 
                        <span className="dot"></span> 
                        <span className="dot"></span>
                        <span className="dot"></span> 
                        </div>

                        <ImageSlider slides={slides}/>
                        
                        <script src="js/slideshow.js">
                            </script>

                        

                    {/* <!------------x----------- Site Title ----------x-----------> */}

                    {/* <!-- --------------------- Blog Carousel ----------------- --> */}
                    
                    <section>
                        <h1 text-align="center">DECORA</h1>
                        <div className="blog">
                            <div className="container">
                                <div className="owl-carousel owl-theme blog-post">
                                    <div className="blog-content" data-aos="fade-right" data-aos-delay="200">
                                        <img src="https://i.pinimg.com/originals/00/65/0e/00650e562a1206e15cc12eae79b04c6b.jpg" height="250" alt="post-1"/>
                                        <div className="blog-title">
                                            <h3>ENTRY GOING ROYAL</h3>
                                            <button className="btn btn-blog">SAPTAPADI</button>
                                            <span>We Plan You Party</span>
                                        </div>
                                    </div>
                                    <div className="blog-content" data-aos="fade-in" data-aos-delay="200">
                                        <img src="https://i.pinimg.com/564x/dc/0c/0c/dc0c0c5a22a2dddfd7781b64331f5dd9.jpg" height="250" alt="post-1"/>
                                        <div className="blog-title">
                                            <h3>DREAMY WAY TO MANTAP</h3>
                                            <button className="btn btn-blog">Fashion</button>
                                            <span>We Plan You Party</span>
                                        </div>
                                    </div>
                                    <div className="blog-content" data-aos="fade-left" data-aos-delay="200">
                                        <img src="https://i.pinimg.com/750x/67/39/5a/67395aaada1ba2bee99f9e5ebe7819c2.jpg" height="250" alt="post-1"/>
                                        <div className="blog-title">
                                            <h3>MOONLIGHT WAY JUS4U</h3>
                                            <button className="btn btn-blog">Fashion</button>
                                            <span>We Plan You Party</span>
                                        </div>
                                    </div>
                                    <div className="blog-content" data-aos="fade-right" data-aos-delay="200">
                                        <img src="https://i.pinimg.com/564x/6a/f3/c2/6af3c284a704077c2a12502e70d79052.jpg" height="250" alt="post-1"/>
                                        <div className="blog-title">
                                            <h3>ELECTRICITY IN HYPE</h3>
                                            <button className="btn btn-blog">Fashion</button>
                                            <span>We Plan You Party</span>
                                        </div>
                                    </div>
                                    <div className="blog-content" data-aos="fade-right" data-aos-delay="200">
                                        <img src="https://i.pinimg.com/564x/a8/c8/48/a8c848d3efd04a1ca11046529b84e7b1.jpg" height="250" alt="post-1"/>
                                        <div className="blog-title">
                                            <h3>DESTINATION WEDDING</h3>
                                            <button className="btn btn-blog">Fashion</button>
                                            <span>We Plan You Party</span>
                                        </div>
                                    </div>
                                    <div className="blog-content" data-aos="fade-right" data-aos-delay="200">
                                        <img src="https://i.pinimg.com/564x/69/bf/32/69bf327f8f0b169721993caf774b2a33.jpg" height="250" alt="post-1"/>
                                        <div className="blog-title">
                                            <h3>BRIDE WANTED FAIRYTALE</h3>
                                            <button className="btn btn-blog">Fashion</button>
                                            <span>We Plan You Party</span>
                                        </div>
                                    </div>
                                    <div className="blog-content" data-aos="fade-right" data-aos-delay="200">
                                        <img src="https://i.pinimg.com/564x/e6/a0/ca/e6a0caafb2ff2467c878491a61329a41.jpg" height="250" alt="post-1"/>
                                        <div className="blog-title">
                                            <h3>FLOWERS R BEAUTIFUL</h3>
                                            <button className="btn btn-blog">Fashion</button>
                                            <span>We Plan You Party</span>
                                        </div>
                                    </div>
                                    <div className="blog-content" data-aos="fade-right" data-aos-delay="200">
                                        <img src="https://weddingaffair.co.in/wp-content/uploads/2022/05/aa190ad601741f75195d30d07445fdaa.jpg" height="250" alt="post-1"/>
                                        <div className="blog-title">
                                            <h3>HAPPINESS IN OUR WORK</h3>
                                            <button className="btn btn-blog">Fashion</button>
                                            <span>We Plan You Party</span>
                                        </div>
                                    </div>
                                    <div className="blog-content" data-aos="fade-right" data-aos-delay="200">
                                        <img src="https://i.pinimg.com/564x/3d/f0/3c/3df03c591a449880ca9406aabf2479cd.jpg" height="250" alt="post-1"/>
                                        <div className="blog-title">
                                            <h3>WHEN V PLAN PROPOSAL</h3>
                                            <button className="btn btn-blog">Fashion</button>
                                            <span>We Plan You Party</span>
                                        </div>
                                    </div>
                                    <div className="blog-content" data-aos="fade-right" data-aos-delay="200">
                                        <img src="https://i.pinimg.com/564x/f0/ca/e0/f0cae04b1baa3d558cf291e0a79f87f4.jpg" height="250" alt="post-1"/>
                                        <div className="blog-title">
                                            <h3>BEAUTY IN FOREST</h3>
                                            <button className="btn btn-blog">Fashion</button>
                                            <span>We Plan You Party</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-navigation">
                                    <span className="owl-nav-prev"><i className="fas fa-long-arrow-alt-left"></i></span>
                                    <span className="owl-nav-next"><i className="fas fa-long-arrow-alt-right"></i></span>
                                </div>
                            </div>
                        </div>
                    </section>


                    {/* <!-- ----------x---------- Blog Carousel --------x-------- --> */}

                    {/* <!-- ---------------------- Site Content --------------------------> */}

                    <section className="container">
                        <div className="site-content">
                            <div className="posts">
                                <div className="post-content" data-aos="zoom-in" data-aos-delay="200">
                                    <div className="post-image">
                                        <div>
                                            <img src="https://images.indianexpress.com/2021/12/vicky-katrina-1-2.jpg" className="img" alt="blog1"/>
                                            {/* <video width="1300" height="500" controls poster="https://i.ndtvimg.com/i/2017-12/virat-kohli-anushka-sharma-wedding_650x400_71513011857.jpg"/>
                                            <source src="./assets/popular-post/virat_anushka_wedding.mp4" type="video/mp4"/>  */}
                                        </div>
                                        <div className="post-info flex-row">
                                            <span><i className="fas fa-user text-gray"></i>&nbsp;&nbsp;Admin</span>
                                            <span><i className="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14, 2019</span>
                                            <span>2 Commets</span>
                                        </div>
                                    </div>
                                    {/* <div className="post-title">
                                        <a href="/#">Why should boys have all the fun? it's the women who are making india an
                                            alcohol-loving contry</a>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptas deserunt beatae
                                            adipisci iusto totam placeat corrupti ipsum, tempora magnam incidunt aperiam tenetur a
                                            nobis, voluptate, numquam architecto fugit. Eligendi quidem ipsam ducimus minus magni
                                            illum similique veniam tempore unde?
                                        </p>
                                        <button className="btn post-btn">Read More &nbsp; <i className="fas fa-arrow-right"></i></button>
                                    </div> */}
                                </div>
                                <hr/>
                                <div className="post-content" data-aos="zoom-in" data-aos-delay="200">
                                    <div className="post-image">
                                        <div>
                                            {/* <video width="1300" height="700" className="img" controls poster="https://i.ndtvimg.com/i/2017-12/virat-kohli-anushka-sharma-wedding_650x400_71513011857.jpg" object-fit="fill"/> */}
                                            <Player poster="https://i.ndtvimg.com/i/2017-12/virat-kohli-anushka-sharma-wedding_650x400_71513011857.jpg">
                                                <source src="./assets/popular-post/virat_anushka_wedding.mp4" type="video/mp4" className="img" controls />
                                            </Player>
                                        </div>
                                        <div className="post-info flex-row">
                                            <span><i className="fas fa-user text-gray"></i>&nbsp;&nbsp;Admin</span>
                                            <span><i className="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 16, 2019</span>
                                            <span>7 Commets</span>
                                        </div>
                                    </div>
                                    {/* <div className="post-title">
                                        <a href="/#">Why should boys have all the fun? it's the women who are making india an
                                            alcohol-loving contry</a>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptas deserunt beatae
                                            adipisci iusto totam placeat corrupti ipsum, tempora magnam incidunt aperiam tenetur a
                                            nobis, voluptate, numquam architecto fugit. Eligendi quidem ipsam ducimus minus magni
                                            illum similique veniam tempore unde?
                                        </p>
                                        <button className="btn post-btn">Read More &nbsp; <i className="fas fa-arrow-right"></i></button>
                                    </div> */}
                                </div>
                                <hr/>
                                <div className="post-content" data-aos="zoom-in" data-aos-delay="200">
                                    <div className="post-image">
                                        <div>
                                            <img src="https://images.hindustantimes.com/img/2022/01/27/1600x900/Mouni_roy_suraj_nambiar_1643273837694_1643273837883.png" className="img" alt="blog1"/>
                                        </div>
                                        <div className="post-info flex-row">
                                            <span><i className="fas fa-user text-gray"></i>&nbsp;&nbsp;Admin</span>
                                            <span><i className="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 19, 2019</span>
                                            <span>5 Commets</span>
                                        </div>
                                    </div>
                                    {/* <div className="post-title">
                                        <a href="/#">Some of our most viral events..itzjusa TRAILER</a>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptas deserunt beatae
                                            adipisci iusto totam placeat corrupti ipsum, tempora magnam incidunt aperiam tenetur a
                                            nobis, voluptate, numquam architecto fugit. Eligendi quidem ipsam ducimus minus magni
                                            illum similique veniam tempore unde?
                                        </p>
                                        <button className="btn post-btn">Read More &nbsp; <i className="fas fa-arrow-right"></i></button>
                                    </div> */}
                                </div>
                                <hr/>
                                <div className="post-content" data-aos="zoom-in" data-aos-delay="200">
                                    <div className="post-image">
                                        <div>
                                            <img src="https://c.ndtvimg.com/2018-11/2epusqm8_deepika-ranveer-ndtv_625x300_23_November_18.jpg" className="img" alt="blog1"/>
                                        </div>
                                        <div className="post-info flex-row">
                                            <span><i className="fas fa-user text-gray"></i>&nbsp;&nbsp;Admin</span>
                                            <span><i className="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 19, 2019</span>
                                            <span>5 Commets</span>
                                        </div>
                                    </div>
                                    {/* <div className="post-title">
                                        <a href="/#">Some of our most viral events..itzjusa TRAILER</a>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptas deserunt beatae
                                            adipisci iusto totam placeat corrupti ipsum, tempora magnam incidunt aperiam tenetur a
                                            nobis, voluptate, numquam architecto fugit. Eligendi quidem ipsam ducimus minus magni
                                            illum similique veniam tempore unde?
                                        </p>
                                        <button className="btn post-btn">Read More &nbsp; <i className="fas fa-arrow-right"></i></button>
                                    </div> */}
                                </div>
                                <hr/>
                                <div className="post-content" data-aos="zoom-in" data-aos-delay="200">
                                    <div className="post-image">
                                        <div>
                                            <Player>
                                                <source src="./assets/popular-post/royal_entry.mp4" type="video/mp4" className="img" controls/>
                                            </Player> 
                                        </div>
                                        <div className="post-info flex-row">
                                            <span><i className="fas fa-user text-gray"></i>&nbsp;&nbsp;Admin</span>
                                            <span><i className="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 21, 2019</span>
                                            <span>12 Commets</span>
                                        </div>
                                    </div>
                                    {/* <div className="post-title">
                                        <a href="/#">Some of our most viral events..itzjusa TRAILER</a>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptas deserunt beatae
                                            adipisci iusto totam placeat corrupti ipsum, tempora magnam incidunt aperiam tenetur a
                                            nobis, voluptate, numquam architecto fugit. Eligendi quidem ipsam ducimus minus magni
                                            illum similique veniam tempore unde?
                                        </p>
                                        <button className="btn post-btn">Read More &nbsp; <i className="fas fa-arrow-right"></i></button>
                                    </div> */}
                                </div>

                                <div className="pagination flex-row">
                                    <a href="/#"><i className="fas fa-chevron-left"></i></a>
                                    <a href="/#" className="pages">1</a>
                                    <a href="/#" className="pages">2</a>
                                    <a href="/#" className="pages">3</a>
                                    <a href="/#"><i className="fas fa-chevron-right"></i></a>
                                </div>
                            </div>
                            <aside className="sidebar">
                                {/* <div className="category">
                                    <h2>Category</h2>
                                    <ul className="category-list">
                                        <li className="list-items" data-aos="fade-left" data-aos-delay="100">
                                            <a href="/#">Software</a>
                                            <span>(05)</span>
                                        </li>
                                        <li className="list-items" data-aos="fade-left" data-aos-delay="200">
                                            <a href="/#">Techonlogy</a>
                                            <span>(02)</span>
                                        </li>
                                        <li className="list-items" data-aos="fade-left" data-aos-delay="300">
                                            <a href="/#">Lifestyle</a>
                                            <span>(07)</span>
                                        </li>
                                        <li className="list-items" data-aos="fade-left" data-aos-delay="400">
                                            <a href="/#">Shopping</a>
                                            <span>(01)</span>
                                        </li>
                                        <li className="list-items" data-aos="fade-left" data-aos-delay="500">
                                            <a href="/#">Food</a>
                                            <span>(08)</span>
                                        </li>
                                    </ul>
                                </div> */}
                                <div className="popular-post">
                                    <h2>Popular Post</h2>
                                    <div className="post-content" data-aos="flip-up" data-aos-delay="200" >
                                        <div className="post-image">
                                            <div>
                                                {/* <!-- <img src="./assets/popular-post/m-blog-1.jpg" className="img" alt="blog1"> --> */}
                                                <Player>
                                                    <source src="./assets/popular-post/colour_dance.mp4" type="video/mp4" width="550" height="200"/>
                                                </Player>
                                            </div>
                                            <div className="post-info flex-row">
                                                <span><i className="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14,
                                                    2019</span>
                                                <span>2 Commets</span>
                                            </div>
                                        </div>
                                        <div className="post-title">
                                            <a href="/#">Some of our most viral events..itzjusa TRAILER</a>
                                        </div>
                                    </div>
                                    <div className="post-content" data-aos="flip-up" data-aos-delay="300">
                                        <div className="post-image">
                                            <div>
                                                <Player>
                                                    <source src="./assets/popular-post/cake_cut.mp4" type="video/mp4"/>
                                                </Player>
                                            </div>
                                            <div className="post-info flex-row">
                                                <span><i className="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14,
                                                    2019</span>
                                                <span>2 Commets</span>
                                            </div>
                                        </div>
                                        <div className="post-title">
                                            <a href="/#">Some of our most viral events..itzjusa TRAILER</a>
                                        </div>
                                    </div>
                                    <div className="post-content" data-aos="flip-up" data-aos-delay="400">
                                        <div className="post-image">
                                            <div>
                                                <img src="./assets/popular-post/m-blog-3.jpg" className="img" alt="blog1"/>
                                            </div>
                                            <div className="post-info flex-row">
                                                <span><i className="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14,
                                                    2019</span>
                                                <span>2 Commets</span>
                                            </div>
                                        </div>
                                        <div className="post-title">
                                            <a href="/#">Some of our most viral events..itzjusa TRAILER</a>
                                        </div>
                                    </div>
                                    {/* <div className="post-content" data-aos="flip-up" data-aos-delay="500">
                                        <div className="post-image">
                                            <div>
                                                <img src="./assets/popular-post/m-blog-4.jpg" className="img" alt="blog1"/>
                                            </div>
                                            <div className="post-info flex-row">
                                                <span><i className="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14,
                                                    2019</span>
                                                <span>2 Commets</span>
                                            </div>
                                        </div>
                                        <div className="post-title">
                                            <a href="/#">Some of our most viral events..itzjusa TRAILER</a>
                                        </div>
                                    </div> */}
                                    {/* <div className="post-content" data-aos="flip-up" data-aos-delay="600"> */}
                                        {/* <div className="post-image">
                                            <div>
                                                <img src="./assets/popular-post/m-blog-5.jpg" className="img" alt="blog1"/>
                                            </div>
                                            <div className="post-info flex-row">
                                                <span><i className="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14,
                                                    2019</span>
                                                <span>2 Commets</span>
                                            </div>
                                        </div> */}
                                        {/* <div className="post-title">
                                            <a href="/#">Some of our most viral events..itzjusa TRAILER</a>
                                        </div> */}
                                    {/* </div> */}
                                </div>
                                {/* <div className="newsletter" data-aos="fade-up" data-aos-delay="300">
                                    <h2>Newsletter</h2>
                                    <div className="form-element">
                                        <input type="text" className="input-element" placeholder="Email"/>
                                        <button className="btn form-btn">Subscribe</button>
                                    </div>
                                </div> */}
                                <div className="popular-tags">
                                    <h2>Popular Tags</h2>
                                    <div className="tags flex-row">
                                        <span className="tag" data-aos="flip-up" data-aos-delay="100">Software</span>
                                        <span className="tag" data-aos="flip-up" data-aos-delay="200">technology</span>
                                        <span className="tag" data-aos="flip-up" data-aos-delay="300">travel</span>
                                        <span className="tag" data-aos="flip-up" data-aos-delay="400">illustration</span>
                                        <span className="tag" data-aos="flip-up" data-aos-delay="500">design</span>
                                        <span className="tag" data-aos="flip-up" data-aos-delay="600">lifestyle</span>
                                        <span className="tag" data-aos="flip-up" data-aos-delay="700">love</span>
                                        <span className="tag" data-aos="flip-up" data-aos-delay="800">project</span>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </section>

                    {/* <!-- -----------x---------- Site Content -------------x------------> */}

                </main>

                {/* <!---------------x------------- Main Site Section ---------------x--------------> */}


                
                    
                
                </body>
                </>


    );
}

export default Saptapadi;