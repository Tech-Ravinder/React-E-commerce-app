import React from 'react';
import { useForm } from 'react-hook-form';
import { Footer, Navbar } from '../components';

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    // Send the form data to your API or backend here
    console.log(data);
    alert('Form submitted successfully!');
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Contact Us</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form my-3">
                <label for="Name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  placeholder="Enter your name"
                  {...register('name', { required: true })}
                />
                {errors.name && <div className="text-danger">Name is required</div>}
              </div>
              <div className="form my-3">
                <label for="Email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  placeholder="name@example.com"
                  {...register('email', { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })}
                />
                {errors.email && <div className="text-danger">Invalid email address</div>}
              </div>
              <div className="form my-3">
                <label for="Message">Message</label>
                <textarea
                  rows={5}
                  className="form-control"
                  id="Message"
                  placeholder="Enter your message"
                  {...register('message', { required: true })}
                />
                {errors.message && <div className="text-danger">Message is required</div>}
              </div>
              <div className="text-center">
                <button
                  className={`my-2 px-4 mx-auto btn ${isValid ? 'btn-success' : 'btn-dark'}`}
                  type="submit"
                  disabled={!isValid}
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