import React, { useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setError("Please enter your email to subscribe.");
      return;
    }
    setError("");
    toast.success(`Thank you for subscribing with ${email}!`);
    setEmail(""); 
  };

  return (
    <section className="bg-gradient-to-br from-green-100 via-lime-100 to-green-50 py-14 px-4 md:px-10">
      <div className="max-w-[1500px] mx-auto text-center space-y-6">
        <div className="flex justify-center items-center gap-3">
          <FaLeaf className="text-green-600 text-3xl" />
          <h2 className="text-3xl md:text-4xl font-bold text-green-800">
            Join Our Plant Lover's Newsletter
          </h2>
        </div>

        <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
          Get expert care tips, seasonal reminders, and plant inspiration straight
          to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6"
          noValidate
        >
          <input
            type="email"
            placeholder="Enter your email"
            className={`input input-bordered w-full md:w-96 rounded-full shadow-sm focus:outline-none focus:ring-2 ${
              error ? "focus:ring-red-500 border-red-500" : "focus:ring-green-300"
            }`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={!!error}
            aria-describedby="email-error"
          />
          <button
            type="submit"
            className="btn btn-primary rounded-full shadow hover:shadow-md transition-all"
          >
            Subscribe
          </button>
        </form>

        {error && (
          <p
            id="email-error"
            className="text-red-600 text-sm mt-1"
            role="alert"
          >
            {error}
          </p>
        )}

        <p className="text-sm text-gray-500 mt-2">
          🌱 We promise, no spam. Only the good green stuff.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;
