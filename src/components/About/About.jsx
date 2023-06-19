import './About.css'

const About = () =>{
    return(
        <>
            <div className="row mt-5">
                <div className="d-flex justify-content-center align-items-center flex-column mt-5  container">
                    <div className="mb-3">
                        <h1>About me</h1>
                    </div>
                    <div className="mb-3">
                        <p>
                            Hello there! My name is Adán and I'm a junior game dev based on Spain.  
                        </p>
                        <p>
                            Since I was a child I liked to surround myself with many things from the technology world such as 
                            computers and robotics. But there were some that got my eye at the very first time I saw them.
                        </p>
                        <p>
                            I guess that's the reason I'm became a game developer, to give back to others the joy and fun I've had (and still have)  
                            playing videogames.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About