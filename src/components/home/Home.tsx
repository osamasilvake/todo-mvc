import Examples from "../examples/Examples"
import Introduction from "../Introduction/Introduction"
import TodosBanner from "../todos-banner/TodosBanner"
import "../home/Home.css";
import Quote from "../quote/Quote";
import Footer from "../frame/footer/Footer";
import FeatureOverview from "../feature-overview/FeatureOverview";

const Home = () => {
  return (
    <div className="max-w-[71rem] mx-auto px-4 xl:px-0">
      <TodosBanner />
      <div className="flex flex-col-reverse md:flex-row gap-8 mt-16 mb-16">
      <Introduction />
      <Examples />
      </div>
      <hr />
      <Quote />
      <hr />
      <FeatureOverview />
      <hr />
      <Footer />
    </div>
  )
}

export default Home
