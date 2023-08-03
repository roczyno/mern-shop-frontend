import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <div className="wrapper">
        <h1>About Us</h1>
        <div className="container">
          <div className="left">
            <div className="title">Lizzy's Shop</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              laborum illo omnis officiis nisi reiciendis veritatis mollitia
              voluptatum quibusdam aspernatur doloribus ut nam, vitae atque enim
              expedita quaerat incidunt sapiente. Inventore, asperiores placeat
              molestiae natus id neque reiciendis corporis suscipit aut harum
              eligendi consequatur perspiciatis quas, rerum iusto impedit cum?
            </p>
          </div>
          <div className="right">
            <img
              src="https://images.unsplash.com/photo-1577058005446-f4380dcc4e08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
