import Heading from '../Shared/Heading'
import Category from '../Category/Category'
import Category2 from "../Category/Category2";

function About() {
    return (
        <div>
            <div className={`container  mt-10`}>
                {/* Header section */}
                <Heading title="About" subtitle={"Explore Our Products"} />
                <Category />
                <Category2 />
            </div>
        </div>
    )
}

export default About
