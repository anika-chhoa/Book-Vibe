import heroImg from "../../assets/hero_img.jpg"

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-[70vh] container mx-auto my-5 rounded-2xl">
        <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
          <img
            src={heroImg}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-6xl font-bold">Books to freshen up <br/> your bookshelf</h1>
            <button className="btn btn-success text-white bg-green-500 mt-8">View The List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
        id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>;
