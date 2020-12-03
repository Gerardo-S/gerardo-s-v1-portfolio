import React from "react";
import profilePic from "../../utils/images/profilePic.jpg"
function About() {
    return (
        <div className="container ">
            <div className="row pt-2">

                <div className="col-md-3 border-bottom -info">
                    <h1>About Me</h1>
                </div>
            </div>

            <main className="row justify-content-center pl-5 pt-4 backgroundColor">
                <div className="col-md-3">
                    <img src={profilePic} alt="Gerardo's Profile"
                        className="img-fluid img-thumbnail" width="250" height="250" />
                    <p>Email: gerardoa.solis@yahoo.com
                    Phone# (562)391-6593<br />
                    Resume: <a className="fa fa-file-pdf-o" style={{ fontSize: 20, color: "red" }}
                            href="https://drive.google.com/file/d/1i4HDeLc2QgCa7g1_1893q4Pz6PSRET7j/view?usp=sharing"  rel="noreferrer" target="_blank">  </a>
                    </p>

                </div>
                <section className="col-md-6">
                    <p>
                        I received my bachelors degree from California State University of Long Beach where I majored in
                        Mechanical Engineering. I joined the aerospace industry in 2017 as a Quality Engineer for Roller
                        Bearing Company: Allpower
                        Manufacturing. I helped the company standardize their procedures and develop methods to improve
                        product output and customer satisfaction. I analyzed technical data and generated pareto graphs for
                        management review. Shortly thereafter in 2019 I was transferred to Industrial Tectonics Bearings, a
                        subsidiary of RBC, as a Material Engineer. As a Materials Engineer at ITB, I inspected metallurgical
                        specimens and verified their microstructure. I provided technical support to heat treat operations,
                        conducted metallurgical lab work, and prepared documentation for auditing organizations to attain
                        accreditation.<br />
                        <br />
                        I currently reside in San Diego CA, as a practicing Web Developer. I have a passion for materializing web app's from conception, to design, and functionality. I aspire to be an entrepreneur using web development to materialize my
                        project ideas. You can find me outdoors hiking or playing a few games of pickup basketball.



                        {/* I currently live in San Diego CA, as a practicing Web Developer where I am furthering my education by enhancing my technical
                        knowledge in web development. I aspire to be an entrepreneur using web development to materialize my
                        project ideas. You can find me outdoors hiking or playing a few games of pickup basketball. */}

                    </p>
                </section>

            </main>

        </div>
    )
};

export default About