import React from "react";
import BreadCrumb from "../../component/breadCrumb/BreadCrumb";
import Meta from "../../component/meta/Meta";
import "./Contact.css";

import { BiPhoneCall, BiInfoCircle, BiHomeAlt } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
const Contact = () => {
  return (
    <>
      <Meta title={"contacts"} />
      <BreadCrumb title="Contacts" />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                title="location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14131.804183361446!2d90.4174720470177!3d23.745039531855344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b909d1485f01%3A0xce9c4b083ae00828!2sABCL%20IT!5e0!3m2!1sen!2sbd!4v1678805334869!5m2!1sen!2sbd"
                width="100%"
                height="400"
                className="border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between ">
                <div className="col-6 me-5 bg_url">
                  <h3 className="contact-title mb-4 text-center">Contact</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Mobile Number"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols="30"
                        rows="4"
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <div>
                      <button className="btn btn-danger border-0">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
                <div className="col-6">
                  <h3 className="contact-title mb-4 text-center">
                    Get in touch with us
                  </h3>
                  <div className="col-6 ms-5">
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiHomeAlt className="fs-5" />
                        <address className="mb-0">
                          4th Floor, 1,2 Outer Circular Rd, Dhaka 1217
                        </address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiPhoneCall className="fs-5" />
                        <a href="tel:+880 1608456891">+880 1608456891</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineMail className="fs-5" />
                        <a href="mailto:shahriarreza1221@gmail.com">
                          shahriarreza1221@gmail.com
                        </a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiInfoCircle className="fs-5" />
                        <p className="mb-0">Saturday – Thursday 9 AM – 6 PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
