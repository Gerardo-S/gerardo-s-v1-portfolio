// import React, {useState} from "react";

function Contact() {

    // const [contact, setContact] = useState({
    //     name:"",
    //     email:"",
    //     message:""
    // })
    // function handleFormSubmit(event){
    //     event.preventDefault();
    //     setContact({
    //         name:"",
    //         email:"",
    //         message:""
    //     })
      

    // };

    // function handleInputChange (event){
    //     let key = event.target.name;
    //     console.log(event.target.name)
    //     let value = event.target.value;
    //     setContact({...contact,[key]:value})
    // }
    
    return (
        <div className="container ">
            <div className="row pt-2"><br />
                <div className="col-md-3 border-bottom -info">
                    <h1>Contact</h1>
                </div>
            </div>

            <main className="contact">
                <h3>Email:</h3>
                <p>gerardon.solis@gmail.com</p>
              
                <h3>Github:</h3>
                <p><a href="https://github.com/Gerardo-S"  rel="noreferrer" target="_blank"> github.com/Gerardo-S</a></p>

                <h3>LinkedIn:</h3>
                <p><a href="https://www.linkedin.com/in/gerardo-a-solis/" rel="noreferrer" target="_blank"> linkedin.com/in/gerardo-a-solis</a></p>


                <h3>StackOverFlow:</h3>
                <p> <a href="https://stackoverflow.com/users/14185229/gerardo-solis" rel="noreferrer" target="_blank"> stackoverflow.com/users/14185229/gerardo-solis</a></p>
                     
            </main>

            {/* <!-- Contact info starts here --> */}
            {/* <main className="row justify-content-center mt-3 pl-0">
                <div className="col-md-8">
                    <form className="bg-dark p-2" >

                        
                        <div className="form-group">
                            <label className="text-info" >Name</label>
                            <input className="form-control" placeholder="First Last" name="name" value={contact.name} onChange={handleInputChange}/>
                            <br />
                        </div>

                        
                        <div className="form-group">
                            <label className="text-info" htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email"  name="email" value={contact.email} onChange={handleInputChange}/>
                            <br />
                        </div>

                        
                        <div className="form-group">
                            <label className="text-info" htmlFor="comment">Message</label>
                            <textarea className="form-control" rows="5" id="comment" placeholder="Message"  name="message" value={contact.message} onChange={handleInputChange}></textarea>
                            <br />
                        </div>
                        <button type="submit" className="btn btn-primary" onSubmit={handleFormSubmit}>Submit</button>
                    </form>
                </div>

            </main> */}





        </div>

    )
};

export default Contact;