import React, { useState, useEffect } from "react";

function Testimonial({theme}) {
  const testimonials = [
    {
      name: "Mr.Alex Bargabino",
      quote:
        "Mr. Mark James Cariso is a kind and sincere IT Student. He loves learning, and he shows me projects he has done for the past many years. He is always willing to help and teach others, whether they be students or not. He is a very knowledgeable person.",
    },
    {
      name: "Ms.Trisha Burce",
      quote: "Mr. Mark James Cariso is a good analytical thinker when it comes to creating a project. He has a certain knowledge and experience that helps him throughout the creation, because he is knowledgeable and experienced in various things.",
    },
    {
      name: "Mr.Angelo Ordonio",
      quote: "I love his works and creativity, he truly has the talent to make something different for each of his projects and designs. He puts his own unique twist on every single project/design that he creates. Which makes them unique and special in their own way",
    },
    {
        name: "Ms/Mr.Christian Santiago",
        quote: "As a former group member of Mr. Mark James Cariso, i can say that he is the type of group member who is hardworking, prompt, open to criticism smart when it comes to programming and extremely depensable. His works are all of excellent quality and incredibly valuable.",
      },
      {
        name: "Ms.Kathleen Morales",
        quote: "MJ is the programmer in the group and he leads us to be better and he always helps us because we can't keep up. MJ is a good leader for me because from the beginning he already knew the goal that we should pursue as a group and he was not lacking in that.",
      },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDot = (index) => {
    setCurrentIndex(index);
  };
  useEffect(() => {
    let intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentIndex, testimonials.length]);
  return (
    <div
      id="testimonial"
      className="w-full max-w-[1190px] m-auto  lg:px-5 px-10 pb-2 "
    >
      <div className="py-10  w-auto flex justify-center ">
        <h1 className={`font-semibold text-4xl border-b-4 border-Tertiary ${theme ? 'text-white':'text-dark'} `}>
          Testimonial
        </h1>
      </div>
      <p className={`text-2xl text-center ${theme ? 'text-white':'text-dark'}`}>What other says about me</p>
      <div className=" flex flex-col justify-center items-center pt-10">
        <div className="md:max-w-[700px] w-full  text-center">
          <p className={`text-xl  ${theme ? 'text-white':'text-dark'}`}>{testimonials[currentIndex].quote}</p>
          <h3 className={`font-semibold text-xl py-5 ${theme ? 'text-gray':'text-dark'}`}>{testimonials[currentIndex].name}</h3>
        </div>
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <div
              key={index}
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: currentIndex === index ? "#333" : "#ccc",
                display: "inline-block",
                margin:"0 5px 0 5px",
                cursor:"pointer",
              }}
              onClick={() => handleDot(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
