import Slider from "react-slick";

const products = [
  {
    title:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    text: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book..",
  },
  {
    title:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    text: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    text: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    text: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    text: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

function Episode() {
  const config = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="sliderse">
        <Slider {...config}>
          {products.map((x, i) => {
            return (
              <div className="course_card" key={i}>
                <div className="course_card_img">
                  <img
                    src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ"
                    alt="course"
                  />
                </div>
                <div className="course_card_content">
                  <h3 className="title">Angular Typescript</h3>
                  <p className="description">
                    When we are no longer able to change a situation - we are
                    challenged to change ourselves. Spread love everywhere you
                    go. Let no one ever come to you without leaving happier.
                    Problems are not stop signs, they are guidelines.
                  </p>
                </div>
                <div className="course_card_footer">
                  <a
                    className="nav-item"
                    href="https://www.smartcodehub.com/blog"
                  >
                    Add Review
                  </a>
                  <a
                    className="nav-item"
                    href="https://www.smartcodehub.com/blog"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default Episode;
