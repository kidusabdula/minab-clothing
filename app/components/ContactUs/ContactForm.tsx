import React from "react";

type Props = {};

const ContactForm = (props: Props) => {
  return (
    <div className="mt-44">
      <div className="grid md:grid-cols-2 gap-16 items-center relative overflow-hidden p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl max-w-6xl mx-auto bg-white mt-4 font-[sans-serif] before:absolute before:right-0 before:w-[300px] before:bg-[#78866B] before:h-full max-md:before:hidden">
        <div>
          <h2 className="text-gray-800 text-3xl font-extrabold">
            Get In Touch With Us
          </h2>
          <p className="text-sm text-gray-500 mt-4 leading-relaxed">
            Have a specific inquiry or looking to explore new opportunities? Our
            experienced team is ready to engage with you.
          </p>

          <form>
            <div className="space-y-4 mt-8">
              <input
                type="text"
                placeholder="Full Name"
                className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
              />
              <input
                type="text"
                placeholder="Street"
                className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
              />
              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="City"
                  className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
                />
                <input
                  type="text"
                  placeholder="Postcode"
                  className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
                />
              </div>
              <input
                type="number"
                placeholder="Phone No."
                className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
              />
              <textarea
                placeholder="Write Message"
                className="px-2 pt-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
              />
            </div>

            <button
              type="button"
              className="mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 py-3 bg-[#C0A080] hover:bg-black text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="#fff"
                className="mr-2"
                viewBox="0 0 548.244 548.244"
              >
                <path
                  fillRule="evenodd"
                  d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                  clipRule="evenodd"
                />
              </svg>
              Send Message
            </button>
          </form>

          <ul className="mt-4 flex flex-wrap justify-center gap-6">
            <li className="flex items-center text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="currentColor"
                viewBox="0 0 479.058 479.058"
              >
                <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
              </svg>
              <a href="mailto:info@example.com" className="text-sm ml-4">
                <strong>info@example.com</strong>
              </a>
            </li>
            <li className="flex items-center text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="currentColor"
                viewBox="0 0 482.6 482.6"
              >
                <path d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l34.5-34.5c9.5-9.6 20.7-14.6 34.4-14.6 13.7 0 25.5 5.1 35.4 14.6 11.8 11.8 11.8 30.9 0 42.7l-39.3 39.3c-11.8 11.8-30.9 11.8-42.7 0l-34.5-34.5c-8.5-8.6-13.4-19.7-14.8-33.4zm166.5 116.4c15.4-15.4 39.5-15.4 54.8 0l56.5 56.5c15.4 15.4 15.4 39.5 0 54.8l-13.5 13.5c-5.5 5.5-14.5 5.5-20 0l-9.5-9.5c-5.5-5.5-5.5-14.5 0-20l5.5-5.5c5.5-5.5 14.5-5.5 20 0l13.5-13.5c5.5-5.5 5.5-14.5 0-20l-56.5-56.5c-5.5-5.5-14.5-5.5-20 0l-5.5 5.5c-5.5 5.5-5.5 14.5 0 20l9.5 9.5c5.5 5.5 5.5 14.5 0 20l-13.5 13.5c-15.4 15.4-39.5 15.4-54.8 0l-34.5-34.5c-15.4-15.4-15.4-39.5 0-54.8l13.5-13.5c5.5-5.5 14.5-5.5 20 0l9.5 9.5c5.5 5.5 5.5 14.5 0 20l-5.5 5.5c-5.5 5.5-5.5 14.5 0 20l-13.5 13.5z" />
              </svg>
              <a href="tel:+251912345678" className="text-sm ml-4">
                <strong>+251912345678</strong>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
