import React from "react";

function Contact() {
    return (
        <div className="container">
            <div className="row pt-2"><br />

                <div Class="col-md-3 border-bottom -info">
                    <h1>Contact</h1>
                </div>
            </div>

            {/* <!-- Contact info starts here --> */}
            <main className="row justify-content-center mt-3 pl-0">
                <div className="col-md-8">
                    <form className="bg-dark p-2">

                        {/* <!-- Name input --> */}
                        <div className="form-group">
                            <label className="text-info" >Name</label>
                            <input className="form-control" placeholder="First Last" />
                            <br />
                        </div>

                        {/* <!-- Email input --> */}
                        <div className="form-group">
                            <label className="text-info" for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                            <br />
                        </div>

                        {/* <!-- Message input --> */}
                        <div className="form-group">
                            <label className="text-info" for="comment">Message</label>
                            <textarea className="form-control" rows="5" id="comment" placeholder="Message"></textarea>
                            <br />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>

            </main>





        </div>

    )
};

export default Contact;