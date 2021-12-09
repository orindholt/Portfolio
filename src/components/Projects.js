import Category from "./Category";
/* import Product from "./Project"; */

const Projects = () => {
    return (
       <section className="Projects">
            <h2>Projects</h2>
            <div>
                <Category name="all" />
                <Category name="js" />
                <Category name="react" />
                <Category name="other" />
            </div>
       </section>
    );
}
 
export default Projects;