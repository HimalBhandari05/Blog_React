import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { FaBookOpen, FaUsers, FaLightbulb } from "react-icons/fa";
import { useEffect, useRef } from "react";

export default function About() {
    const ctaRef = useRef(null);

    useEffect(() => {
        // Intersection Observer for scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fadeInUp');
                }
            });
        }, { threshold: 0.1 });

        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => observer.observe(el));

        // Background animation effect
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const xPos = (clientX / window.innerWidth) - 0.5;
            const yPos = (clientY / window.innerHeight) - 0.5;

            document.querySelector('.gradient-bg').style.transform = `
                perspective(1000px)
                rotateX(${yPos * 5}deg)
                rotateY(${xPos * 5}deg)
            `;
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            observer.disconnect();
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            <Navbar />
            <div className="min-h-screen flex flex-col overflow-hidden">
                {/* Animated background element */}
                <div className="gradient-bg fixed inset-0 bg-gradient-to-br from-indigo-50 to-blue-50 transition-transform duration-1000 ease-out -z-10" />

                {/* Floating particles */}
                <div className="particles">
                    {[...Array(15)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full bg-indigo-200 opacity-20"
                            style={{
                                width: `${Math.random() * 10 + 5}px`,
                                height: `${Math.random() * 10 + 5}px`,
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                                animationDelay: `${Math.random() * 5}s`
                            }}
                        />
                    ))}
                </div>

                {/* Hero Section */}
                <section className="relative bg-white py-16 sm:py-24 overflow-hidden">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 animate-on-scroll opacity-0 translate-y-10">
                            Our Story
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-on-scroll opacity-0 translate-y-10 animation-delay-100">
                            Empowering minds through thoughtful content and community engagement.
                        </p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-indigo-300 to-transparent opacity-50 animate-pulse" />
                </section>

                {/* Mission Section */}
                <section className="py-16 sm:py-20 relative">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto flex flex-col gap-10">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center animate-on-scroll opacity-0 translate-y-10">
                                Why We Started This Blog
                            </h2>
                            <div className="bg-white rounded-xl shadow-sm p-8 sm:p-10 animate-on-scroll opacity-0 hover:shadow-md transition-all duration-300">
                                <p className="text-lg text-gray-700 mb-6">
                                    In a world overflowing with information, we noticed a lack of platforms that combine
                                    depth with accessibility. Our blog was born from the desire to create a space where
                                    complex ideas meet clear expression.
                                </p>
                                <p className="text-lg text-gray-700">
                                    We believe everyone deserves access to thoughtful content that educates, inspires,
                                    and sparks meaningful conversations.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-16 sm:py-20 bg-white relative">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center animate-on-scroll opacity-0 translate-y-10">
                            Our Core Values
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { icon: FaBookOpen, title: "Depth", description: "We go beyond surface-level takes to deliver substantive content that stands the test of time." },
                                { icon: FaUsers, title: "Community", description: "Our readers are collaborators, not just consumers. We build this platform together." },
                                { icon: FaLightbulb, title: "Curiosity", description: "We celebrate questions as much as answers, and the journey as much as the destination." }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all duration-500 animate-on-scroll opacity-0 translate-y-10"
                                    style={{ animationDelay: `${index * 100 + 200}ms` }}
                                >
                                    <div className="flex justify-center mb-4">
                                        <item.icon className="text-3xl text-indigo-600 transition-transform duration-500 group-hover:rotate-12" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 text-center">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-16 sm:py-20 relative">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center animate-on-scroll opacity-0 translate-y-10">
                            Meet The Team
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {[
                                {
                                    name: "Alex Johnson",
                                    role: "Founder & Editor",
                                    bio: "10+ years in content creation and digital strategy. Passionate about bridging knowledge gaps."
                                },
                                {
                                    name: "Sam Taylor",
                                    role: "Lead Writer",
                                    bio: "Former journalist turned blogger. Specializes in making complex topics accessible."
                                },
                                {
                                    name: "Jordan Smith",
                                    role: "Community Manager",
                                    bio: "Builds and nurtures our reader community. Your go-to for feedback and suggestions."
                                }
                            ].map((member, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-all duration-300 animate-on-scroll opacity-0 translate-y-10 hover:-translate-y-1 group"
                                    style={{ animationDelay: `${index * 100 + 200}ms` }}
                                >
                                    <div className="h-40 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-md mb-4 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-indigo-200 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{member.name}</h3>
                                    <p className="text-indigo-600 mb-3">{member.role}</p>
                                    <p className="text-gray-600">{member.bio}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section
                    ref={ctaRef}
                    className="py-16 sm:py-20 bg-gradient-to-r from-indigo-500 to-blue-600 text-white relative overflow-hidden"
                >
                    <div className="absolute inset-0 opacity-10">
                        {[...Array(10)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute rounded-full bg-white"
                                style={{
                                    width: `${Math.random() * 100 + 50}px`,
                                    height: `${Math.random() * 100 + 50}px`,
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                    opacity: Math.random() * 0.2 + 0.1
                                }}
                            />
                        ))}
                    </div>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
                        <h2 className="text-3xl font-bold mb-6 animate-on-scroll opacity-0 translate-y-10">
                            Join Our Community
                        </h2>
                        <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8 animate-on-scroll opacity-0 translate-y-10 animation-delay-100">
                            Subscribe to our newsletter for weekly insights and updates.
                        </p>
                        <div className="max-w-md mx-auto flex animate-on-scroll opacity-0 translate-y-10 animation-delay-200">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-grow px-4 py-3 rounded-l-lg border-0 focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
                            />
                            <button className="bg-white text-indigo-600 px-6 py-3 rounded-r-lg hover:bg-gray-100 transition-colors font-medium">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </section>

                {/* Global styles for animations - add to your CSS file */}
                <style jsx global>{`
                @keyframes float {
                    0% { transform: translateY(0) translateX(0); }
                    50% { transform: translateY(-20px) translateX(10px); }
                    100% { transform: translateY(0) translateX(0); }
                }
                
                .animate-fadeInUp {
                    animation: fadeInUp 0.8s forwards;
                }
                
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animation-delay-100 {
                    animation-delay: 100ms;
                }
                
                .animation-delay-200 {
                    animation-delay: 200ms;
                }
            `}</style>
            </div>
            <Footer />
        </>
    );
}