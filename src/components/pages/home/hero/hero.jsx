

const version = '3.3.1'
const heroSubtitle = `The first long-term support of the 3.x series is here! \nDiscover Blender ${version} LTS`

export default function Hero(){
    return(
        <>
            <div className="container">
                <section className="hero container is-fullheight-with-navbar">
                    <div className="hero-body">
                        <div>
                            <p className="title">
                                Blender
                            </p>
                            <p className="subtitle">
                                {heroSubtitle}
                            </p> 
                        </div>
                        
                    </div>
                </section>
            </div>
        </>
        
    )
}