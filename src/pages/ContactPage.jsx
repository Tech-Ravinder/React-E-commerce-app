import React from "react";
import { Footer, Navbar } from "../components";
import { useForm } from "react-hook-form";

const ContactPage = () => {
  const { register, handleSubmit, formState, errors } = useForm();
  const { isDirty, isValid } = formState;

  const onSubmit = (data) => {
    // Remove the alert
    console.log("Message sent successfully!");
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Contact Us</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="form my-3">
                <label for="Name">Name</label>
                <input
                  type="text"
                  class={`form-control ${errors?.name && "is-invalid"}`}
                  {...register("name", { required: true })}
                  placeholder="Enter your name"
                />
                {errors?.name && (
                  <div class="invalid-feedback">Please enter your name</div>
                )}
              </div>
              <div class="form my-3">
                <label for="Email">Email</label>
                <input
                  type="email"
                  class={`form-control ${errors?.email ? "is-invalid" : ""}`}
                  {...register("email", { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })}
                  placeholder="name@example.com"
                />
                {errors?.email && (
                  <div class="invalid-feedback">Please enter a valid email</div>
                )}
              </div>
              <div class="form  my-3">
                <label for="Message">Message</label>
                <textarea
                  rows={5}
                  class={`form-control`}
                  {...register("message", { required: true })}
                  placeholder="Enter your message"
                />
              </div>
              <div className="text-center">
                <button
                  class={`my-2 px-4 mx-auto btn ${isValid && isDirty ? "btn-success" : "btn-dark"}`}
                  type="submit"
                  disabled={!isValid || !isDirty}
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;