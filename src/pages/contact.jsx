import ContactImg from "../assets/contact-img.png";
import NewsLetter from "../components/Newsletter";
import Typography from "../components/Typography";
import ContactForm from "../components/ContactForm";
import Image from "../assets/caret-red.svg";
import { address, otherLocations } from "../constants/contact";
import { useEffect } from "react";
import Dot from "../assets/dot.svg";
import Add from "../assets/add-icon.svg";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="bg-primary-dark pb-10">
      <div className="h-auto">
        <img
          src={ContactImg}
          alt="Contact"
          className="h-80 object-cover grayscale md:h-auto"
        />
      </div>

      <div className="mx-auto flex-col md:flex-row md:px-0 px-4 mt-10 flex max-w-7xl border-t border-gray-300 py-4 text-white md:text-lg gap-10">
        <div>
          <p className="mb-5 text-lg md:text-2xl">Hamilton</p>

          <span className="text-lg text-primary-main md:text-xl">Address</span>
          <p>293 Wellington Street N</p>
          <p>Suite 105</p>
          <p className="mb-4">Hamilton ON L8L 8E7</p>

          <span className="text-lg text-primary-main md:text-xl">Email</span>
          <p className="mb-4">info@virklawyers.com</p>

          <span className="text-lg text-primary-main md:text-xl">Fax</span>
          <p>905.521.8858</p>

          <p className="mt-5 text-xl md:text-3xl">905.521.8888</p>
          <p className="text-xl md:text-3xl">1.888.VIRK.LAW</p>
        </div>

        <div className="overflow-hidden w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2896.0774130437717!2d-80.47859637613303!3d43.458981000000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf4f2b9473109%3A0xa1d23131ef6a5948!2sVIRK%20LAW!5e0!3m2!1sen!2sng!4v1714344921043!5m2!1sen!2sng"
            // width={800}
            height={600}
            style={{ border: 0, width: "100%" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2896.0774130437717!2d-80.47859637613303!3d43.458981000000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf4f2b9473109%3A0xa1d23131ef6a5948!2sVIRK%20LAW!5e0!3m2!1sen!2sng!4v1714344921043!5m2!1sen!2sng"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe> */}
        </div>
      </div>

      <div className="mx-auto my-20 w-full max-w-7xl px-3">
        <Typography
          fontWeight="regular"
          variant="headline-m"
          customClassName="!text-white mb-7"
        >
          You can also visit us in:
        </Typography>

        <div className="flex flex-col items-center justify-between gap-5 text-white md:flex-row">
          {address.map((address, id) => (
            <div key={id} className="w-full">
              <p className="mb-4 border-b border-b-gray-300 py-4 font-medium md:text-lg">
                {address.location}
              </p>
              <div>
                <span className="text-primary-main">Address</span>
                <p>{address.add1}</p>
                <p>{address.add2}</p>

                <button className="mt-5 flex items-center gap-4">
                  <span className="text-xs uppercase tracking-widest">
                    Learn More
                  </span>
                  <img src={Dot} alt="red dot" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 max-w-80 border-t border-t-gray-300">
          {otherLocations.map((location, id) => (
            <p
              key={id}
              className="flex items-center justify-between border-b border-b-gray-300 py-4 text-white md:text-lg"
            >
              <span>{location}</span>
              <img src={Add} alt="Plus" />
            </p>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-5 bg-white px-3 py-10 md:flex-row md:px-14 lg:p-20">
        <Typography
          color="primary-dark"
          fontWeight="bold"
          customClassName="md:!text-5xl md:max-w-xs"
        >
          Book a free consultation.
        </Typography>
        <div className="md:w-1/2">
          <ContactForm image={Image} />
        </div>
      </div>

      <NewsLetter />
    </section>
  );
};

export default Contact;
