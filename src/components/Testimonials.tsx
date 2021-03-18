import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchTestimonials } from "../todoList/actions";

interface TestimonialsType {
  fetchTestimonials?: any;
  data?: any;
  loading?: boolean;
}
const Testimonials: React.FC<TestimonialsType> = ({
  data,
  fetchTestimonials,
  loading,
}) => {
  useEffect(() => {
    console.log("dispatch action");
    fetchTestimonials({});
  }, [fetchTestimonials]);

  console.log(data);

  if (loading) {
    return <p>Loading</p>;
  } else {
    if (data) {
      const drinks = data.drinks;
      return (
        <ul>
          {drinks.map((drink: any) => (
            <li>{drink.strDrink}</li>
          ))}
        </ul>
      );
    } else {
      return <p>Loaded</p>;
    }
  }

  //   if (!data) {
  //     return <p>Data not available</p>;
  //   }
};

const mapStateToProps = (state: any) => ({
  data: state.testimonial.data,
  loading: state.testimonial.loading,
});

const mapDispatchToAction = {
  fetchTestimonials: fetchTestimonials,
};

export default connect(mapStateToProps, mapDispatchToAction)(Testimonials);
