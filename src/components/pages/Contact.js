import React, {useState} from "react";
import axios from "axios";
function Contact() {

    const [contact, setContact] = useState({
        name:"",
        email:"",
        message:""
    })
    function handleFormSubmit(event){
        event.preventDefault();
        setContact({
            name:"",
            email:"",
            message:""
        })
      

    };

    function handleInputChange (event){
        let key = event.target.name;
        console.log(event.target.name)
        let value = event.target.value;
        setContact({...contact,[key]:value})
    }
    
    console.log(contact);
    return (
        <div className="container">
            <div className="row pt-2"><br />
                <div className="col-md-3 border-bottom -info">
                    <h1>Contact</h1>
                </div>
            </div>

            {/* <!-- Contact info starts here --> */}
            <main className="row justify-content-center mt-3 pl-0">
                <div className="col-md-8">
                    <form className="bg-dark p-2" >

                        {/* <!-- Name input --> */}
                        <div className="form-group">
                            <label className="text-info" >Name</label>
                            <input className="form-control" placeholder="First Last" name="name" value={contact.name} onChange={handleInputChange}/>
                            <br />
                        </div>

                        {/* <!-- Email input --> */}
                        <div className="form-group">
                            <label className="text-info" htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email"  name="email" value={contact.email} onChange={handleInputChange}/>
                            <br />
                        </div>

                        {/* <!-- Message input --> */}
                        <div className="form-group">
                            <label className="text-info" htmlFor="comment">Message</label>
                            <textarea className="form-control" rows="5" id="comment" placeholder="Message"  name="message" value={contact.message} onChange={handleInputChange}></textarea>
                            <br />
                        </div>
                        <button type="submit" className="btn btn-primary" onSubmit={handleFormSubmit}>Submit</button>
                    </form>
                </div>

            </main>





        </div>

    )
};

export default Contact;