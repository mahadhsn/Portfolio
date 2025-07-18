import React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Mahad";
  });

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Trigger the animation state

    // Prepare the form data to send to the server
    const formData = { firstName, lastName, email, subject };

    try {
      const response = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus(
          "Your message has been sent successfully! I will get back to you soon :)",
        );
        setFirstName("");
        setLastName("");
        setEmail("");
        setSubject("");
      } else if (response.status === 429) {
        setStatus(
          "You have reached the email sending limit for today. Please reach out tomorrow and I will be sure to respond!",
        );
      } else {
        setStatus("Failed to send your message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="text-textlight dark:text-textdark animate-fade-in flex flex-col items-center w-full -mt-2 md:mt-[10%]">
      <Helmet>
        <title>Contact | Mahad Hassan</title>
        <meta
          name="description"
          content="Contact page of Mahad Hassan's software engineering portfolio."
        />
      </Helmet>

      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-left">
        Contact Me
      </h2>

      <hr className=""></hr>

      <form
        className="w-full max-w-md bg-secondarybglight dark:bg-secondarybgdark p-6 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-lg font-semibold">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full p-2 border-2 border-gray-300 rounded-md text-black"
            placeholder="Enter your first name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-lg font-semibold">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full p-2 border-2 rounded-md text-black"
            placeholder="Enter your last name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border-2 rounded-md text-black"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-lg font-semibold">
            Subject
          </label>
          <textarea
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full p-2 border-2 rounded-md text-black"
            placeholder="Enter the subject"
            rows="8"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full p-2 rounded-md transition-all duration-300 ease-in-out ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-accentlight dark:bg-accentdark hover:bg-accenthoverlight dark:hover:bg-accenthoverdark"
          }`}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
        <p className="text-center mt-4">{status}</p>
      </form>
    </div>
  );
};

export default Contact;
