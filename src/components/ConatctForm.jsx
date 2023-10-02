import React from 'react';
import { useFormik } from 'formik';
import { contactMessageScehma } from '../schema/Schema';

const contactValues = {
      name: '',
      email: '',
      mobile: '',
      message: '',
}

const ConatctForm = () => {


      const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
            initialValues: contactValues,
            validationSchema: contactMessageScehma,
            onSubmit: async (values, action,) => {
                  const { name, email, mobile, message } = values;

                  const SendMessage = await fetch("/contact", {
                        method: "POST",
                        headers: {
                              "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                              name, email, mobile, message
                        })
                  });
                  const MessageData = await SendMessage.json();
                  if (SendMessage.status === 422 || !MessageData) {
                        console.log("Message Not Sent");
                  }
                  else {
                        console.log("Message Sent Succesfully");
                  }
                  action.resetForm();

            }
      })
      return (
            <>

                  <form method="POST" id="contact-form">
                        <div className="row mb-4">
                              <input
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Your Name"
                                    className="nkt-form
                      "/>
                              {errors.name && touched.name ? (<span className="text-err">{errors.name}</span>) : null}
                        </div>
                        <div className="row mb-4">
                              <input
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    className="nkt-form"
                              />
                              {errors.email && touched.email ? (<span className="text-err">{errors.email}</span>) : null}
                        </div>
                        <div className="row mb-4">
                              <input
                                    value={values.mobile}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    id="mobile"
                                    name="mobile"
                                    placeholder="Mobile"
                                    className="nkt-form"
                              />
                              {errors.mobile && touched.mobile ? (<span className="text-err">{errors.mobile}</span>) : null}
                        </div>
                        <div className="row mb-4">
                              <textarea
                                    value={values.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    id="message"
                                    name="message"
                                    type="text"
                                    placeholder="Your Message"
                                    className="nkt-form nkt-txt-area"
                              />
                              {errors.message && touched.message ? (<span className="text-err">{errors.message}</span>) : null}
                        </div>
                        <div className="row">
                              <div className="col-sm-12 text-center">
                                    <button
                                          onSubmit={handleSubmit}
                                          className="btn btn-primary">Send Query</button>
                              </div>
                        </div>
                  </form>
            </>
      )
}

export default ConatctForm;