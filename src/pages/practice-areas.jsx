import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import RedBox from "../assets/red-box.svg";
import { areasOfPractice } from "../constants/navLinks";
import OpenIcon from "../assets/add-icon.svg";
import CloseIcon from "../assets/remove-icon.svg";
import Typography from "../components/Typography";
import RedDot from "../assets/dot.svg";

const PracticeAreas = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  function handleClick(index) {
    setActiveIndex(index === activeIndex ? -1 : index);
  }

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <PageHeader
        image={RedBox}
        heading="Practice Areas"
        summary="With deep experience and a track record of success, our firm specializes in a wide
array of practice areas, ensuring our clients receive the highest caliber
representation for their unique needs."
      />
      <div className="p-4">
        <div className="mx-auto flex max-w-7xl flex-col border-t border-t-gray-200">
          {areasOfPractice.map((area, id) => (
            <div key={id} className="border-b border-b-gray-200 py-2">
              <div
                className="flex items-center justify-between"
                onClick={() => handleClick(id)}
              >
                <Typography
                  fontWeight="regular"
                  customClassName={`!text-primary-light text-title-m ${
                    activeIndex === id ? "!text-primary-main" : ""
                  }`}
                >
                  {area.category}
                </Typography>
                {activeIndex === id ? (
                  <img src={CloseIcon} alt="" />
                ) : (
                  <img src={OpenIcon} alt="" />
                )}
              </div>

              {activeIndex === id && (
                <div className="grid grid-cols-3 items-center justify-between gap-4 py-3">
                  {area.subCategories.map((subCategory, id) => (
                    <div className="flex items-center gap-2" key={id}>
                      <img src={RedDot} alt="" />
                      <Typography color="primary-dark" fontWeight="regular">
                        {subCategory}
                      </Typography>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
