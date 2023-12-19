import "./Card.css";
const Card = () => {
  return (
    <div className="card_container">
      <div className="first_card_row">
        <div id="row_one_card_one">
          <div className="card_content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            minima dicta amet, molestiae aliquam incidunt suscipit recusandae
            labore ratione doloremque, architecto et illo minus quo tenetur
            ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam
            corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim
            ad inventore laudantium est illum voluptatem quis.
          </div>
          <div className="card_content">
            <div className="card_content_two_main">
              <div className="card_content_two_main_container">
                <img
                  src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                  className="card_content_image"
                />
              </div>
              <div class="card_content_two_position">
                <h3>Gladis Lennon</h3>
                <p>Head of SEO</p>
              </div>
            </div>
            <p className="seo_Para">
              LLorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora, a architecto consectetur reprehenderit, in repellat voluptatum.
            </p>

          </div>
          <div class="row_one_card_three">
            <div className="card_content_two_main_container">
              <img
                src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                className="card_content_image"
              />
            </div>
            <div class="card_content_two_position">
              <h3>Gladis Lennon</h3>
              <p>Head of SEO</p>
            </div>
          </div>
        </div>
      </div>

      <div className="second_card_row">
        <div id="row_two_card_one_container">
          <div className="card_content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            beatae incidunt perferendis soluta facilis voluptas dicta
            repudiandae quasi asperiores libero, exercitationem molestiae autem
            sapiente dolore nulla non consequatur. Eaque, dolores.
          </div>

          <div className="card_content" class="second_card_seo_content">
            <div className="card_content_two_main">
              <img
                src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                className="card_content_image"
              />
              <div class="card_content_two_position">
                <h3>Gladis Lennon</h3>
                <p>Head of SEO</p>
              </div>
            </div>

            <p className="seo_Para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              doloribus eius aut unde, dolores accusantium!
            </p>
          </div>

          <div className="row_two_card_three">
            <img
              src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
              className="card_content_image"
            />
            <div class="card_content_two_position">
              <h3>Gladis Lennon</h3>
              <p>Head of SEO</p>
            </div>
          </div>
        </div>
      </div>

      <div className="third_card_row">
        <div id="row_three_card_one">
          <div className="card_content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a
            voluptatum quidem nulla quisquam natus velit provident earum esse,
            odio numquam labore recusandae similique sunt.
          </div>
        </div>

        <div className="card_content" class="second_card_seo_content">
            <div className="card_content_two_main">
              <img
                src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                className="card_content_image"
              />
              <div class="card_content_two_position">
                <h3>Gladis Lennon</h3>
                <p>Head of SEO</p>
              </div>
            </div>

            <p className="seo_Para">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut necessitatibus, repudiandae qui dolor minima.
            </p>
          </div>

          <div className="row_two_card_three">
            <img
              src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
              className="card_content_image"
            />
            <div class="card_content_two_position">
              <h3>Gladis Lennon</h3>
              <p>Head of SEO</p>
            </div>
          </div>

      </div>
    </div>
  );
};
export default Card;
