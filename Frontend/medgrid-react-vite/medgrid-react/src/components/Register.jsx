
import React, { useState } from "react";
import { registerUser } from "../service/userServices";

function Register() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [agree, setAgree] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");
    const [strength, setStrength] = useState(0);

    // Handle input changes
    function handleChange(e) {

        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (name === "password") {

            let score = 0;

            if (value.length >= 8) score += 35;
            if (/[A-Z]/.test(value)) score += 20;
            if (/[0-9]/.test(value)) score += 20;
            if (/[^A-Za-z0-9]/.test(value)) score += 25;

            setStrength(score);
        }
    }

    // Handle registration
    async function handleSubmit(e) {

        e.preventDefault();

        setMessage("");
        setMessageType("");

        if (!formData.name.trim()) {
            setMessage("Please enter your full name");
            setMessageType("error");
            return;
        }

        if (!formData.email.trim()) {
            setMessage("Please enter your email address");
            setMessageType("error");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setMessage("Passwords do not match");
            setMessageType("error");
            return;
        }

        if (formData.password.length < 8) {
            setMessage("Password must contain at least 8 characters");
            setMessageType("error");
            return;
        }

        if (!agree) {
            setMessage("Please accept the terms and privacy policy");
            setMessageType("error");
            return;
        }

        try {

            setLoading(true);

            const userData = {
                    name: formData.name.trim(),
               email: formData.email.trim(),
        pass: formData.password
            };


         
            const result = await registerUser(userData);

            console.log("Backend response:", result);

            setMessage("Account created successfully!");
            setMessageType("success");

            setFormData({
                name: "",
                email: "",
                password: "",
                confirmPassword: ""
            });

            setAgree(false);
            setStrength(0);
            setShowPassword(false);

        } catch (error) {

            console.error("Registration error:", error);

            setMessage(error.message || "Registration failed");
            setMessageType("error");

        } finally {

            setLoading(false);

        }
    }

    return (

        <div className="register-container">

            <div className="register-left">

                <h2>MedGrid</h2>

                <h1>Build a simpler healthcare routine.</h1>

                <p>Your care journey starts here.</p>

            </div>

            <div className="register-right">

                <h1>Create your account</h1>

                <p>Your care journey starts here.</p>

                <form onSubmit={handleSubmit}>

                    <label>Full name</label>

                    <input
                        type="text"
                        name="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <label>Email address</label>

                    <input
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label>Password</label>

                    <div className="password-field">

                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="At least 8 characters"
                            value={formData.password}
                            onChange={handleChange}
                            minLength={8}
                            required
                        />

                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>

                    </div>

                    <div className="password-meter">

                        <div
                            className="password-meter-fill"
                            style={{ width: `${strength}%` }}
                        />

                    </div>

                    <label>Confirm password</label>

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Re-enter password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />

                    <div className="terms">

                        <input
                            type="checkbox"
                            checked={agree}
                            onChange={(e) => setAgree(e.target.checked)}
                        />

                        <span>
                            I agree to the terms and privacy policy.
                        </span>

                    </div>

                    <button type="submit" disabled={loading}>

                        {loading ? "Creating account..." : "Create account"}

                    </button>

                    {message && (
                        <p className={`register-message ${messageType}`}>
                            {message}
                        </p>
                    )}

                </form>

            </div>

        </div>
    );
}

export default Register;
