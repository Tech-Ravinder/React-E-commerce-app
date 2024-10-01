import React from 'react';
import { useForm } from 'react-hook-form';
import { Footer, Navbar } from '../components';
import { Link } from 'react-router-dom';

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset
    } = useForm({ mode: 'onChange' });

    const onSubmit = (data) => {
        console.log(data);
        // Add your registration logic here
        reset(); // Optional: Reset form after successful submission
    };

    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Register</h1>
                <hr />
                <div className="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form my-3">
                                <label htmlFor="Name">Full Name</label>
                                <input
                                    type="text"
                                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                    id="Name"
                                    placeholder="Enter Your Name"
                                    {...register('name', { required: 'Name is required' })}
                                />
                                {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
                            </div>
                            <div className="form my-3">
                                <label htmlFor="Email">Email address</label>
                                <input
                                    type="email"
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    id="Email"
                                    placeholder="name@example.com"
                                    {...register('email', { 
                                        required: 'Email is required', 
                                        pattern: { 
                                            value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, 
                                            message: 'Invalid email address' 
                                        } 
                                    })}
                                />
                                {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                            </div>
                            <div className="form my-3">
                                <label htmlFor="Password">Password</label>
                                <input
                                    type="password"
                                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                    id="Password"
                                    placeholder="Password"
                                    {...register('password', { 
                                        required: 'Password is required', 
                                        minLength: { 
                                            value: 6, 
                                            message: 'Password must be at least 6 characters long' 
                                        } 
                                    })}
                                />
                                {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
                            </div>
                            <div className="my-3">
                                <p>Already have an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link></p>
                            </div>
                            <div className="text-center">
                                <button 
                                    className={`my-2 mx-auto btn ${isValid ? 'btn-success' : 'btn-dark'}`} 
                                    type="submit" 
                                    disabled={!isValid}
                                >
                                    Register
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

export default Register;
