import React from "react";
import { BiMailSend, BiPhoneCall } from "react-icons/bi";

const Contact = () => {
  const image =
    "https://img.freepik.com/premium-photo/coffee-buns-flat-lay-profesional-advertising-food-photography-ai-generated_920594-9565.jpg";

  return (
    <div className="row contactus mt-4 p-5">
      {/* Bootstrap Grid System for responsive design */}
      <div className="col-md-6">
        <img src={image} alt="contactus" style={{ width: "100%" }} />
      </div>

      {/* Bootstrap Grid System for responsive design */}
      <div className="col-md-6 text-center"> {/* Add the text-center class here */}
        <h1 className="bg-dark p-2 text-white">CONTACT US</h1>
        <p className="text-justify mt-2">
          <br></br>
          <br></br>
          Any query and info about the product feel free to call anytime we are available 24X7
          <br></br>
        </p>
        <p className="mt-3">
          <BiMailSend /> : www.help@agrimarket.com
        </p>
        <p className="mt-3">
          <BiPhoneCall /> : 9080673440
        </p>
      </div>
    </div>
  );
};

export default Contact;
