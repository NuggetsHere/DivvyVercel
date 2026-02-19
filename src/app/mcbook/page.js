"use client"
import Testimonials from "../components/Testimonials";
import Image from "next/image";
import Link from 'next/link';
import CallToAction from "../components/callToAction";
import { IconBrandApple, IconCheck, IconShieldCheck, IconClock, IconTool, IconDeviceLaptop, IconCreditCard, IconTruck, IconTools, IconReceipt2, IconPhone } from "@tabler/icons-react";
import Features from "../components/Features";
import VisitUsOffline from "../components/VistUsOffline";
import { AccordionDemo } from "../components/faq";
import React from "react";
import { InfiniteMovingCardsDemo } from "../components/certifications";
import { SignupFormDemo } from "../components/form";
import { motion } from "framer-motion";

export default function MacbookRepair() {
    // Featured products for sale (policy-compliant)
    const featuredProducts = [
        {
            title: "MacBook Prom 2020\" M1",
            description: "Refurbished, 8GB RAM, 256GB SSD, Upto 1-year warranty",
            price: "₹45,999",
            originalPrice: "₹1,22,900",
            image: "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?q=80&w=1000&auto=format&fit=crop",
            
        },
        {
            title: "MacBook Air M2",
            description: "Refurbished, 8GB RAM, 256GB SSD, Upto 1-year warranty",
            price: "₹46,999",
            originalPrice: "₹72,300",
            image: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1000&auto=format&fit=crop",
            
        },
        {
            title: "Mac Mini (M1) 2020",
            description: "Refurbished, 8GB RAM, 256GB SSD, 90-day warranty",
            price: "₹28,999",
            originalPrice: "₹75,000",
            image: "https://images.unsplash.com/photo-1735810501831-40892dcfef1e?q=80&w=1540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            
        }
    ];

    // Service packages (secondary focus)
    const servicePackages = [
        {
            title: "MacBook Screen Replacement",
            description: "Original Retina display installation with 90-day warranty",
            price: "₹4999",
            duration: "Same-day service",
            icon: <IconDeviceLaptop className="w-8 h-8 text-blue-500" />
        },
        {
            title: "Battery Replacement",
            description: "Apple battery with calibration and 1-year warranty",
            price: "₹1999",
            duration: "2-hour turnaround",
            icon: <IconClock className="w-8 h-8 text-blue-500" />
        },
        {
            title: "Liquid Damage Repair",
            description: "Professional cleaning and component replacement",
            price: "₹2499",
            duration: "Diagnostic first",
            icon: <IconShieldCheck className="w-8 h-8 text-blue-500" />
        },
        {
            title: "Trackpad Replacement",
            description: "Professional cleaning and component replacement",
            price: "₹1999",
            duration: "Diagnostic first",
            icon: <IconShieldCheck className="w-8 h-8 text-blue-500" />
        },
        {
            title: "Flexgate Repair",
            description: "Professional cleaning and component replacement",
            price: "₹3999",
            duration: "Diagnostic first",
            icon: <IconShieldCheck className="w-8 h-8 text-blue-500" />
        },
        {
            title: "Charging port replacement",
            description: "Professional cleaning and component replacement",
            price: "₹1999",
            duration: "Diagnostic first",
            icon: <IconShieldCheck className="w-8 h-8 text-blue-500" />
        }
    ];

    // Replacement parts for sale (policy-compliant)
    const replacementParts = [
        {
            title: "MacBook Pro 13\" Screen",
            description: "Original Retina display assembly",
            price: "₹189",
            image: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?q=80&w=1000&auto=format&fit=crop"
        },
        {
            title: "MacBook Battery A2389",
            description: "Genuine Apple battery",
            price: "₹99",
            image: "https://images.unsplash.com/photo-1591405351990-4726e331f141?q=80&w=1000&auto=format&fit=crop"
        },
        {
            title: "MacBook Keyboard Assembly",
            description: "Full keyboard replacement kit",
            price: "₹149",
            image: "https://images.unsplash.com/photo-1587829741301-dc798b83dadc?q=80&w=1000&auto=format&fit=crop"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.4
            }
        }
    };

    return (
        <div className="flex flex-col items-center w-full">
            {/* Hero Section - Balanced Sales & Repair */}
            <section className="pt-32 pb-20 w-full bg-gradient-to-b from-white via-blue-50 to-white relative section bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-2 mb-4 bg-blue-100 text-blue-700 w-fit px-4 py-1 rounded-full text-sm font-semibold">
                                <IconBrandApple size={18} />
                                <span>Apple Service Provider</span>
                            </div>
                            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                                Expert MacBook Repairs <br />
                                <span className="text-blue-600">Genuine Parts & Sales</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 max-w-xl">
                                Professional hardware repairs using genuine Apple components. We also offer certified refurbished MacBooks and quality parts for DIY enthusiasts.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="#services" className="px-8 py-4 bg-black text-white rounded-2xl font-bold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl block">
                                    Repair Services
                                </Link>
                                <Link href="#products" className="px-8 py-4 bg-white text-gray-800 border-2 border-gray-200 rounded-2xl font-bold hover:border-blue-500 transition-all">
                                    Shop MacBooks
                                </Link>
                                <a href="tel:+919312247627" className="px-8 py-4 bg-green-600 text-white rounded-2xl font-bold hover:bg-green-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
                                    <IconPhone size={20} />
                                    Call Now
                                </a>
                            </div>

                            {/* Quick Stats */}
                            <div className="mt-12 grid grid-cols-3 gap-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-gray-900">10k+</div>
                                    <div className="text-sm text-gray-500">Repairs Done</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-gray-900">4.9/5</div>
                                    <div className="text-sm text-gray-500">Rating</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-gray-900">100%</div>
                                    <div className="text-sm text-gray-500">Genuine Parts</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-blue-200/50 rounded-full blur-3xl opacity-30"></div>
                            <Image
                                src="/services/macbook-repair.webp"
                                alt="MacBook Repair Specialist"
                                className="rounded-3xl shadow-2xl relative z-10"
                                width={600}
                                height={400}
                                priority
                            />
                        </motion.div>
                    </div>

                    {/* Service Highlights */}
                    <div className="mt-16 grid md:grid-cols-3 gap-6">
                        <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                            <div className="p-3 bg-blue-50 rounded-xl">
                                <IconTools className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1">Hardware Repairs</h3>
                                <p className="text-sm text-gray-600">Screen, battery, keyboard, logic board fixes</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                            <div className="p-3 bg-green-50 rounded-xl">
                                <IconShieldCheck className="w-6 h-6 text-green-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1">90-Day Warranty</h3>
                                <p className="text-sm text-gray-600">All repairs covered for peace of mind</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                            <div className="p-3 bg-purple-50 rounded-xl">
                                <IconReceipt2 className="w-6 h-6 text-purple-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1">Transparent Pricing</h3>
                                <p className="text-sm text-gray-600">Free diagnostics, no hidden fees</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Bar - Balanced */}
            <div className="w-full bg-white py-12 border-y border-gray-100 section bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-center text-gray-400 font-medium uppercase tracking-widest text-sm mb-8">Why Customers Choose Us</p>
                    <div className="flex justify-center flex-wrap gap-12 opacity-60 grayscale hover:grayscale-0 transition-all">
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-bold text-gray-800">10k+</span>
                            <span className="text-sm text-gray-400 uppercase">Repairs Completed</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-bold text-gray-800">4.9/5</span>
                            <span className="text-sm text-gray-400 uppercase">Customer Rating</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-bold text-gray-800">100%</span>
                            <span className="text-sm text-gray-400 uppercase">Genuine Parts</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-bold text-gray-800">Up to 1-Year</span>
                            <span className="text-sm text-gray-400 uppercase">Warranty on Products</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Section - Primary Focus */}
            <section id="services" className="py-24 w-full bg-white section bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional MacBook Services</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">Expert repairs using genuine Apple parts with transparent pricing and warranty.</p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {servicePackages.map((service, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                                className="group p-8 bg-gray-50 rounded-3xl hover:bg-white hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-blue-100"
                            >
                                <div className="mb-6 p-4 bg-white rounded-2xl shadow-sm w-fit group-hover:scale-110 transition-transform text-blue-600">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                <p className="text-gray-500 leading-relaxed mb-4">{service.description}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                                    <span className="text-sm text-gray-500 flex items-center">
                                        <IconClock className="w-4 h-4 mr-1" />
                                        {service.duration}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                    <div className="p-8 flex flex-row gap-4 w-full items-center text-center justify-center" >
                        Note: 
                            Prices may vary depending on device. 
                            Warranties depend on nature of repair.
                    </div>
                </div>
            </section>

            {/* Products Section (Secondary - Policy Compliant) */}
            <section id="products" className="pb-24 w-full bg-gray-50 section bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">MacBooks & Parts Available</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">Certified refurbished MacBooks and genuine Apple parts for sale. Quality guaranteed.</p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {featuredProducts.map((product, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                                className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300"
                            >
                                
                                <div className="relative h-64 bg-gray-50 overflow-hidden">
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                                    <p className="text-gray-600 mb-4">{product.description}</p>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                                            <span className="text-sm text-gray-400 line-through ml-2">{product.originalPrice}</span>
                                        </div>
                                        <button className="px-6 py-2 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* <div className="text-center mt-12">
                        <Link href="/shop" className="inline-flex items-center text-blue-600 font-semibold text-lg hover:text-blue-800">
                            View All Products
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div> */}
                </div>
            </section>

            {/* Why Choose Us - Updated for Policy Compliance */}
            <section className="py-24 bg-gray-900 text-white w-full rounded-b-[4rem] px-6 section bg-black">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-16">Why Choose Divvy Computronix?</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="p-6 bg-gray-800 rounded-2xl">
                            <IconTools className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">Expert Technicians</h3>
                            <p className="text-gray-400">Certified professionals for quality repairs</p>
                        </div>
                        <div className="p-6 bg-gray-800 rounded-2xl">
                            <IconShieldCheck className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">Warranty Included</h3>
                            <p className="text-gray-400">90-day warranty on all repairs</p>
                        </div>
                        <div className="p-6 bg-gray-800 rounded-2xl">
                            <IconCreditCard className="w-12 h-12 text-blue-400 mx-auto mb-4" >
                            </IconCreditCard>
                            <h3 className="text-xl font-bold mb-2">Transparent Pricing</h3>
                            <p className="text-gray-400">No hidden fees, upfront quotes</p>
                        </div>
                        <div className="p-6 bg-gray-800 rounded-2xl">
                            <IconTruck className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">Quality Products</h3>
                            <p className="text-gray-400">Genuine Apple parts & devices</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <div className="w-full py-16 section bg-white">
                <InfiniteMovingCardsDemo />
            </div>

            {/* Contact Section - Updated */}
            <section id="contact" className="py-24 w-full bg-white section bg-white">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="text-left">
                        <h2 className="text-4xl font-bold mb-6">Need MacBook Help?</h2>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Get a free diagnostic quote for repairs or inquire about our products and services.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Free Diagnostic Assessment",
                                "No Fix, No Fee Policy",
                                "Same-Day Service Available"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="p-1 bg-green-100 rounded-full"><IconCheck className="text-green-600 w-5 h-5" /></div>
                                    <span className="font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="overflow-hidden rounded-3xl">
                            <Image
                                src="/broken-laptop.webp"
                                className="w-full rounded-3xl h-64 object-cover"
                                alt="MacBook Pro Repair"
                                width={600}
                                height={300}
                            />
                        </div>
                    </div>
                    <div className="bg-gray-50 p-8 lg:p-12 rounded-[3rem] shadow-sm border border-gray-100">
                        <SignupFormDemo />
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section id="faq" className="py-24 w-full bg-gray-50 border-t border-gray-200 section bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-600">Everything you need to know about our repairs and products</p>
                    </div>
                    <div className="bg-white rounded-3xl p-8 shadow-sm">
                        <AccordionDemo />
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <div className="w-full bg-[#0F162B] rounded-t-[4rem] mt-12 pb-12 section bg-black">
                <CallToAction />
                <VisitUsOffline />
            </div>
        </div>
    );
} 
