import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Email, Phone, LocationOn } from "@mui/icons-material";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


const Contact = () => {
    const sectionRef = useRef(null);
     const [result, setResult] =useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", `${process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY}`);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const section = sectionRef.current;
        const elements = section.querySelectorAll(".animate-on-scroll");

        elements.forEach((el, index) => {
            gsap.from(el, {
                y: 15,
                opacity: 0,
                duration: 0.8,
                delay: 0.1 * index,
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                },
            });
        });
    }, [sectionRef]);


    const contactInfo = [
        {
            icon: <Email className="text-2xl text-blue-500" />,
            title: "Email",
            content: "sleemhashem620@gmail.com",
            link: "mailto:sleemhashem620@gmail.com",
        },
        {
            icon: <Phone className="text-2xl text-blue-500" />,
            title: "Phone",
            content: "+201154825799",
            link: "tel:+201154825799",
        },
        {
            icon: <LocationOn className="text-2xl text-blue-500" />,
            title: "Location",
            content: "Bani seuf",
            link: "https://maps.google.com",
        },
    ];

    return (
        <section
            ref={sectionRef}
            id="contact"
            className="min-h-screen py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="animate-on-scroll text-4xl md:text-5xl font-bold text-center mb-16">
                    Get in <span className="text-blue-500">Touch</span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="animate-on-scroll">
                            <h3 className="text-2xl font-semibold mb-6">
                                Let&apos;s Connect
                            </h3>
                            <p className="text-gray-600 mb-8">
                                I&apos;m always open to discussing new projects,
                                creative ideas, or opportunities to be part of
                                your visions.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <a
                                    key={index}
                                    href={info.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="animate-on-scroll flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                                    <div className="p-3 bg-blue-50 rounded-full">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">
                                            {info.title}
                                        </h4>
                                        <p className="text-gray-600">
                                            {info.content}
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <form onSubmit={onSubmit} className="space-y-6">
                        <div className="animate-on-scroll">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            />
                        </div>

                        <div className="animate-on-scroll">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            />
                        </div>

                        <div className="animate-on-scroll">
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-gray-700 mb-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            />
                        </div>

                        <Button
                        loading={result === "Sending...."}
                        endIcon={<SendIcon />}
                         variant="outlined" loadingPosition="start"
                            type="submit"
                            className="animate-on-scroll w-full py-3 px-6 rounded-lg ">
                            Send Message
                        </Button>
                            <span className="block mt-2 text-center text-sm text-gray-600">{result}</span>
                    </form>
                    
                </div>
            </div>
        </section>
    );
};

export default Contact;
