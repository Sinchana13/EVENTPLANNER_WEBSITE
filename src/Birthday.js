import React from "react"
import $ from 'jquery'; 

export const Birthday=()=>{
    $(document).ready(function(){
        $(".navbar .nav-link").on('click', function(event) {
    
            if (this.hash !== "") {
    
                event.preventDefault();
    
                var hash = this.hash;
    
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 700, function(){
                    window.location.hash = hash;
                });
            } 
        });
    });

    return(
    <>
            {/* <body data-spy="scroll" data-target=".navbar" data-offset="40" id="home"> */}
            <body background="https://img.freepik.com/free-vector/winter-blue-pink-gradient-background-vector_53876-117276.jpg?w=2000" >
                
                {/* <!-- First Navigation --> */}
                
                <nav className="navbar nav-first navbar-dark bg-dark">
                    <div className="container">
                        
                        <ul className="navbar-nav ml-auto">
                            <div className="nav-item">
                                </div>
                                        
                        </ul>
                    </div>
                </nav>
                {/* <!-- End of First Navigation -->  */}
                {/* <!-- Second Navigation --> */}
                <nav className="nav-second navbar custom-navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
                    <div className="container">
                        <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto"> 
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#service">Our Service</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#team">Our Team</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#testmonial">Testmonials</a>
                                </li>
                            </ul> 
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    
                                </li>
                            </ul>
                        </div> */}
                    </div>
                </nav>
                {/* <!-- End Of Second Navigation -->  */}
                {/* <!-- Page Header --> */}
                <header className="header">
                    <div className="overlay">
                        <img src="https://img.freepik.com/premium-vector/bakery-logo-template_441059-119.jpg?w=2000" alt="img" className="logo"/>
                        
                        <h1 className="title">Janmadina-Birthday organisers</h1> 
                        <h1 className="subtitle">Best Birthday Party Planners in the World!</h1>
                        <a className="btn btn-primary mt-3" href="Signup">Book</a> 
                    </div>      
                </header>
                {/* <!-- End Of Page Header -->  */}
                {/* <!-- About Section --> */}
                <section id="about">
                    <div className="container">
                        <div className="row align-items-center">                
                            <div className="col-md-6">
                                <h6 className="section-subtitle">Opening Times</h6>
                                <h3 className="section-title">Working Times</h3>
                                <p className="mb-1 font-weight-bold">Monday - Thursday : <span className="font-weight-normal pl-2 text-muted">7:00 am - 12:00 pm</span></p>
                                <p className="mb-1 font-weight-bold">Friday - Saturday : <span className="font-weight-normal pl-2 text-muted">7:00 am - Midnight</span></p>
                                <p className="mb-1 font-weight-bold">Saturday - Sunday : <span className="font-weight-normal pl-2 text-muted">9:00 am - 12:00 pm</span></p>

                                <a href="#book-table" className="btn btn-primary btn-sm w-md mt-4">Book as soon as possible!</a>
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col">
                                        <img alt="img" src="https://i.pinimg.com/564x/b3/ae/f2/b3aef26522a44c4b44f814ed31324dfc.jpg" className="w-100 rounded shadow"/>
                                    </div>
                                    <div className="col">
                                        <img alt="img" src="https://i.pinimg.com/564x/81/98/a2/8198a27a482f99e05cacff7c623462d1.jpg" className="w-100 rounded shadow"/>
                                    </div>
                                </div>                  
                            </div>
                        </div>
                        <div className="section-devider my-6 transparent"></div>
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h6 className="section-subtitle">The Great Story</h6>
                                <h3 className="section-title">Our Journey!</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic illo a, aut, eum nesciunt obcaecati deserunt ipsam nostrum voluptate recusandae?</p>
                            </div>
                            <div className="col-md-6 order-1 order-sm-first">
                                <div className="row">
                                    <div className="col">
                                        <img alt="img" src="https://i.pinimg.com/564x/5f/f3/4d/5ff34da4b16b07e06e0a3b0e6a78fd1b.jpg" className="w-100 rounded shadow"/>
                                    </div>
                                    <div className="col">
                                        <img alt="img" src="https://i.pinimg.com/564x/a0/0d/61/a00d615d50050fded7cefcfeaf54f83b.jpg" className="w-100 rounded shadow"/>
                                    </div>
                                </div>                  
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End OF About Section -->

                <!-- Service Section --> */}
            
                <section id="service" className="pattern-style-4 has-overlay">
                    <div className="container raise-2">
                        <h6 className="section-subtitle text-center">Featured Birthday cakes and goodies</h6>
                        <h3 className="section-title mb-6 pb-3 text-center">Special cakes</h3>
                        <div className="row">
                            <div data-id="1" className="col-md-6 mb-4">
                                <a href="javascrip:void(0)" className="custom-list">
                                    <div className="img-holder">
                                        <img src="https://i.pinimg.com/564x/6e/28/f5/6e28f5a6ab16f025f63a104d52d0b3e9.jpg" alt="img"/>
                                    </div>
                                    <div  className="info">
                                        <div className="head clearfix">
                                            <h5 className="title float-left">Blueberry Blast</h5>
                                            <p className="float-right text-primary">550Rs</p>
                                        
                                        </div>
                                        <div className="body">
                                            <p><span>  This light and creamy cheesecake sits on top of a biscuit layer and is topped by layer of blueberries. The whole combination of the smooth cheesecake, crunchy biscuits and the gooey blueberries make this a heavenly dessert.
                                            </span></p>
                                            
                                            
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div data-id="2" className="col-md-6 mb-4">
                                <a href="javascrip:void(0)" className="custom-list">
                                    <div className="img-holder">
                                        <img src="https://www.fabmood.com/inspiration/wp-content/uploads/2020/12/winter-cake-ideas-19.jpg" alt="img"/>
                                    </div>
                                    <div className="info">
                                        <div className="head clearfix">
                                            <h5 className="title float-left">Chocolate Dream Paradise</h5>
                                            <p className="float-right text-primary">600Rs</p>
                                        </div>
                                        <div className="body">
                                            <p><span>A fruity and nutty cake with the goodness of dried cherries, almonds, raisins and many more dried fruits</span></p>
                                            
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div data-id="3" className="col-md-6 mb-4">
                                <a href="javascrip:void(0)" className="custom-list">
                                    <div className="img-holder">
                                        <img src="https://i.pinimg.com/564x/f0/3d/01/f03d01053df644e595f63db921422a09.jpg" alt="img"/>
                                    </div>
                                    <div className="info">
                                        <div className="head clearfix">
                                            <h5 className="title float-left">Floral Vanilla Sugar</h5>
                                            <p className="float-right text-primary">1000Rs</p>
                                        </div>
                                        <div className="body">
                                            <p><span>White cake with a pristine soft crumb, vanilla naked cake with a flavorful tight crumb, and checkerboard cake with a whimsical design.</span></p>
                                            
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div data-id="4" className="col-md-6 mb-4">
                                <a href="javascrip:void(0)" className="custom-list">
                                    <div className="img-holder">
                                        <img src="https://i.pinimg.com/564x/30/6f/6b/306f6b387acdf304f9eb9a90a1f219e2.jpg" alt="img"/>
                                    </div>
                                    <div className="info">
                                        <div className="head clearfix">
                                            <h5 className="title float-left">Sea Green Jelly-Belly</h5>
                                            <p className="float-right text-primary">1200Rs</p>
                                        </div>
                                        <div className="body">
                                            <p><span> This beach-inspired cake is decorated with graham cracker crumbs and a gelatin ocean!! It’s the ultimate summer cake!</span></p>
                                        
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div data-id="5" className="col-md-6 mb-4">
                                <a href="javascrip:void(0)" className="custom-list">
                                    <div className="img-holder">
                                        <img src="https://i.pinimg.com/564x/30/28/2c/30282c3e2e7cc6afdc8bfaa88b472d22.jpg" alt="img"/>
                                    </div>
                                    <div className="info">
                                        <div className="head clearfix">
                                            <h5 className="title float-left">Macha Chocolate </h5>
                                            <p className="float-right text-primary">1300Rs</p>
                                        </div>
                                        <div className="body">
                                            <p><span> A Japanese rendition of the classNameic French chocolate cake! Made with white chocolate and green tea, this Matcha Gateau au Chocolat is rich, moist, and intensely flavorful.</span></p>
                                            
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div data-id="6" className="col-md-6 mb-4">
                                <a href="javascrip:void(0)" className="custom-list">
                                    <div className="img-holder">
                                        <img src="https://i.pinimg.com/564x/24/73/40/24734089ed5253cd7b2a3bb97379984c.jpg" alt="img"/>
                                    </div>
                                    <div className="info">
                                        <div className="head clearfix">
                                            <h5 className="title float-left">Jungle Chocolate-Pistachio Cake</h5>
                                            <p className="float-right text-primary">2000Rs</p>
                                        </div>
                                        <div className="body">
                                            <p><span> A rich chocolate cake slathered in light, creamy pistachio frosting and topped with a luscious chocolate ganache, this layered Chocolate Pistachio Cake is a chocolate lover’s dream!</span></p>
                                            
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>                  
                    </div>
                </section>
                {/* <!-- End of Featured Food Section -->

                <!-- Menu Section --> */}
                <section className="has-img-bg">
                    <div className="container">
                        <h6 className="section-subtitle text-center">Balloons and other Decorations</h6>
                        <h3 className="section-title mb-6 text-center">Themes</h3>
                        <div className="card bg-light">
                            <div className="card-body px-4 pb-4 text-center">                   
                                <div className="row text-left">
                                    <div className="col-md-6 my-4">
                                        <a href="#" className="pb-3 mx-3 d-block text-dark text-decoration-none border border-left-0 border-top-0 border-right-0">
                                            <div className="d-flex">
                                                <div className="flex-grow-1">
                                                    Princess Dream Theme
                                                    <p className="mt-1 mb-0">See your princess dreams come true!!!Absolutely beautiful decorations which will take you down the memory lane</p>
                                                </div>
                                                <h6 className="float-right text-primary">60,000Rs</h6>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-md-6 my-4">
                                        <a href="#" className="pb-3 mx-3 d-block text-dark text-decoration-none border border-left-0 border-top-0 border-right-0">
                                            <div className="d-flex">
                                                <div className="flex-grow-1">
                                                    Space-Alien Theme
                                                    <p className="mt-1 mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                </div>
                                                <h6 className="float-right text-primary">50,000Rs</h6>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-md-6 my-4">
                                        <a href="#" className="pb-3 mx-3 d-block text-dark text-decoration-none border border-left-0 border-top-0 border-right-0">
                                            <div className="d-flex">
                                                <div className="flex-grow-1">
                                                    Aesthetic-Work Theme
                                                    <p className="mt-1 mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                </div>
                                                <h6 className="float-right text-primary">40,000Rs</h6>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-md-6 my-4">
                                        <a href="#" className="pb-3 mx-3 d-block text-dark text-decoration-none border border-left-0 border-top-0 border-right-0">
                                            <div className="d-flex">
                                                <div className="flex-grow-1">
                                                    Dinosaur-Planet Theme
                                                    <p className="mt-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                </div>
                                                <h6 className="float-right text-primary">30,000Rs</h6>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-md-6 my-4">
                                        <a href="#" className="pb-3 mx-3 d-block text-dark text-decoration-none border border-left-0 border-top-0 border-right-0">
                                            <div className="d-flex">
                                                <div className="flex-grow-1">
                                                    Animal Kingdom Theme
                                                    <p className="mt-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                </div>
                                                <h6 className="float-right text-primary">40,000Rs</h6>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-md-6 my-4">
                                        <a href="#" className="pb-3 mx-3 d-block text-dark text-decoration-none border border-left-0 border-top-0 border-right-0">
                                            <div className="d-flex">
                                                <div className="flex-grow-1">
                                                    Arabian-Nights Theme
                                                    <p className="mt-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                </div>
                                                <h6 className="float-right text-primary">30,000Rs</h6>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <a href="#book-table" className="btn btn-primary mt-4">Book</a>
                            </div>
                        </div>                  
                    </div>
                </section>
                {/* <!-- End of Menu Section --> */}
           

                {/* <!-- Team Section --> */}
                <section id="team">
                    <div className="container">
                        <h6 className="section-subtitle text-center">Great Team</h6>
                        <h3 className="section-title mb-5 text-center">Talented Minds!</h3>
                        <div className="row">
                            <div className="col-md-4 my-3">
                                <div className="team-wrapper text-center">
                                    <img src="https://i.pinimg.com/564x/86/33/20/8633201d7bb4f6bc98b71756d661aee5.jpg" className="circle-120 rounded-circle mb-3 shadow" alt="img"/>
                                    <h5 className="my-3">Vikas Khanna</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente suscipit, odio nulla reiciendis!</p>
                                    <h6 className="socials mt-3">
                                        <a href="javascript:void(0)" className="px-2"><i className="ti-facebook"></i></a>
                                        <a href="javascript:void(0)" className="px-2"><i className="ti-twitter"></i></a>
                                        <a href="javascript:void(0)" className="px-2"><i className="ti-instagram"></i></a>
                                        <a href="javascript:void(0)" className="px-2"><i className="ti-google"></i></a>
                                    </h6>
                                </div>
                            </div>
                            <div className="col-md-4 my-3">
                                <div className="team-wrapper text-center">
                                    <img src="https://i.pinimg.com/564x/50/86/aa/5086aae248451bc5f087988b50bc00a0.jpg" className="circle-120 rounded-circle mb-3 shadow" alt="img"/>
                                    <h5 className="my-3">Edward Harris</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente suscipit, odio nulla reiciendis!</p>
                                    <h6 className="socials mt-3">
                                        <a href="javascript:void(0)" className="px-2"><i className="ti-facebook"></i></a>
                                        <a href="javascript:void(0)" className="px-2"><i className="ti-twitter"></i></a>
                                        <a href="javascript:void(0)" className="px-2"><i className="ti-instagram"></i></a>
                                        <a href="javascript:void(0)" className="px-2"><i className="ti-google"></i></a>
                                    </h6>
                                </div>
                            </div>
                            <div className="col-md-4 my-3">
                                <div className="team-wrapper text-center">
                                    <img src="https://i.pinimg.com/564x/f3/3f/95/f33f9526b8f950a74dd523381af4851b.jpg" className="circle-120 rounded-circle mb-3 shadow" alt="img"/>
                                    <h5 className="my-3">Shivesh</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente suscipit, odio nulla reiciendis!</p>
                                    <h6 className="socials mt-3">
                                        <a href="javascript:void(0)" className="px-2"><i className="ti-facebook"></i></a>
                                        <a href="javascript:void(0)" className="px-2"><i className="ti-twitter"></i></a>
                                        <a href="javascript:void(0)" className="px-2"><i className="ti-instagram"></i></a>
                                        <a href="javascript:void(0)" className="px-2"><i className="ti-google"></i></a>
                                    </h6>
                                </div>
                            </div> 
                        </div>
                    </div>
                </section>
                {/* <!-- End of Team Section -->

                <!-- Testmonial Section --> */}
                <section id="testmonial" className="pattern-style-3">
                    <div className="container">
                        <h6 className="section-subtitle text-center">Best Clients</h6>
                        <h3 className="section-title mb-5 text-center">Testmonials</h3>

                        <div className="row">
                            <div className="col-md-4 my-3 my-md-0">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="media align-items-center mb-3">
                                            <img className="mr-3" src="https://staff.pes.edu/assets/uploads/faculty/20210524110143000535.jpg" alt="img"/>
                                            <div className="media-body">
                                                <h6 className="mt-1 mb-0">Revathi Ma'am</h6>
                                                <small className="text-muted mb-0">Business Analyst</small>     
                                            </div>
                                        </div>
                                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus enim modi, id dicta reiciendis itaque.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 my-3 my-md-0">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="media align-items-center mb-3">
                                            <img className="mr-3" src="https://staff.pes.edu/assets/uploads/faculty/20210524103401000134.jpg" alt="img"/>
                                            <div className="media-body">
                                                <h6 className="mt-1 mb-0">Kusuma Ma'am</h6>
                                                <small className="text-muted mb-0">Cake specialist</small>      
                                            </div>
                                        </div>
                                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus enim modi, id dicta reiciendis itaque.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 my-3 my-md-0">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="media align-items-center mb-3">
                                            <img className="mr-3" src="https://staff.pes.edu/assets/uploads/faculty/20210703074656000249.jpgg" alt="img"/>
                                            <div className="media-body">
                                                <h6 className="mt-1 mb-0">Mamatha Ma'am</h6>
                                                <small className="text-muted mb-0">Food Critic</small>        
                                            </div>
                                        </div>
                                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus enim modi, id dicta reiciendis itaque.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End of Testmonial Section -->

            <!--Previous things we did--> */}
                {/* <!-- <div className="projects_section layout_padding"> --> */}
                    <div className="container">
                    <h1 className="our_text">Our projects</h1>
                    <p className="ipsum_text">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    <div id="main_slider" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="projects_section2">
                                <div className="container_main2">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <div className="container_main1">
                                            <img src="https://www.iwmbuzz.com/wp-content/uploads/2022/07/in-pics-armaan-malik-celebrates-his-27th-birthday-calls-it-most-fun-night-ever-3.jpgg" alt="Avatar" className="image" width="100%"/>
                                            
                                            
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="container_main1">
                                            <img src="https://akns-images.eonline.com/eol_images/Entire_Site/2019619/rs_1024x759-190719071804-1024-Priyanka-Chopra-Nick-Jonas-Birthday-4-Miami-LT-071919-WorldRedEye-Handout.jpg?fit=around%7C1024:759&output-quality=90&crop=1024:759;center,top" alt="Avatar" className="image" width="100%"/>
                                            
                                            
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="container_main1">
                                            <img src="https://www.koimoi.com/wp-content/new-galleries/2020/11/how-ananya-panday-celebrated-birthday-with-her-fans001.jpg" alt="Avatar" className="image" width="100%"/>
                                            
                                            
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="projects_section2">
                                <div className="container_main1">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <div className="container_main1">
                                            <img src="https://c.ndtvimg.com/2020-11/ak8lfla_nayanthara-vignesh-_625x300_19_November_20.jpg?im=Resize=(1230,900)" alt="Avatar" className="image" width="100%"/>

                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="container_main1">
                                            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fsamanthaprabufc%2Fstatus%2F1254638849247948800&psig=AOvVaw25EZv0Jn9FIUuGHNDwbnul&ust=1669779373027000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMjp8oi70vsCFQAAAAAdAAAAABAI" alt="Avatar" className="image" width="100%"/>
                                            
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="container_main1">
                                            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.koreaboo.com%2Fnews%2Fblackpink-lisa-celebrates-birthday-family-friends-thailand%2F&psig=AOvVaw22KSBhQ9a5n6aSwgIYDyD_&ust=1669779423860000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPCFwp270vsCFQAAAAAdAAAAABAE" alt="Avatar" className="image" width="100%"/>
                                            
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="projects_section2">
                                <div className="container_main1">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <div className="container_main1">
                                            <img src="https://www.pinkvilla.com/imageresize/aa_birthday_bash_main_0.jpg?width=752&t=pvorg" alt="Avatar" className="image" width="100%"/>
                                            
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="container_main1">
                                            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ftimesofindia.indiatimes.com%2Fentertainment%2Fhindi%2Fbollywood%2Fnews%2Fkiara-advani-shares-a-happy-picture-posing-with-her-birthday-cakes-thanks-fans-for-all-the-love%2Farticleshow%2F77299550.cms&psig=AOvVaw2mbQwJdsCbINw-oCuptGYX&ust=1669779496000000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMCJ3b-70vsCFQAAAAAdAAAAABAE" alt="Avatar" className="image" width="100%"/>
                                            
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="container_main1">
                                            <img src="https://www.pinkvilla.com/imageresize/kim_go_eun_shares_heartwarming_photos_from_her_birthday_celebrations_and_thanks_fans_for_their_wishes.jpg?width=752&t=pvorg" alt="Avatar" className="image" width="100%"/>
                                            
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
                        <i className="fa fa-angle-left"></i>
                        </a>
                        <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
                        <i className="fa fa-angle-right"></i>
                        </a>
                    </div>
                    </div>
                
                
                {/* <!-- Page Footer --> */}
                <footer className="border border-dark border-left-0 border-right-0 border-bottom-0 p-4 bg-dark">
                    <div className="container">
                        <div className="row align-items-center text-center text-md-left">
                            <div className="col">
                            
                            </div>
                            <div className="d-none d-md-block">
                                {/* <!-- <h6 className="small mb-0">
                                    <a href="javascript:void(0)" className="px-2"><i className="ti-facebook"></i></a>
                                    <a href="javascript:void(0)" className="px-2"><i className="ti-twitter"></i></a>
                                    <a href="javascript:void(0)" className="px-2"><i className="ti-instagram"></i></a>
                                    <a href="javascript:void(0)" className="px-2"><i className="ti-google"></i></a>
                                </h6> --> */}
                            </div>
                        </div>
                    </div>
                    
                </footer>
                {/* <!-- End of Page Footer -->

                <!-- core  --> */}
                <script src="assets/vendors/jquery/jquery-3.4.1.js"></script>
                <script src="assets/vendors/bootstrap/bootstrap.bundle.js"></script>

                {/* <!-- bootstrap affix --> */}
                <script src="assets/vendors/bootstrap/bootstrap.affix.js"></script>

                {/* <!-- Pigga js --> */}
                <script><a href="components.html" className="btn btn-primary btn-sm">Components</a></script>
                <script src="assets/js/pigga.js"></script>

            </body>
            </>

);}