import React from "react";

const Map = () => {
  return (
    <>
      <div className="w-full h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106475.22678341748!2d-7.679830799999999!3d33.5731104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca%2C%20Morocco!5e0!3m2!1sen!2sus!4v1234567890"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Clinic Location"
          className="border-0"
        />
      </div>
    </>
  );
};

export default Map;
