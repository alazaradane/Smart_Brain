import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { customer1, customer2, security, favorites, help, face, voice, emotion, bussiness} from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Services" },
    { href: "#contact-us", label: "Contact Us" },
];



export const statistics = [
    { value: '369', label: 'Brands' },
    { value: '500+', label: 'Products' },
    { value: '150k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: face,
        name: "Face Recognition ",
        detail:`Elevate security with our advanced face recognition.`,
    },
    {
        imgURL: voice,
        name: "Voice Analysis",
        detail: `Gain deeper insights with our advanced analysis technology.`,
    },
    {
        imgURL: emotion,
        name: "Emotion Recognition",
        detail: `Uncover hidden emotions with our emotion recognition.`,
    },
    {
        imgURL: bussiness,
        name: "Businesses Analysis",
        detail: `Drive informed decisions with our business analysis solutions.`,
    },
];

export const services = [
    {
        imgURL: favorites,
        label: "Quality Solutions",
        subtext: `Elevate your standards with our superior-quality services, tailored to exceed your expectations.`
    },
    {
        imgURL: security,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: help,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the service exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The service not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Face Recognition", link: "/" },
            { name: "Voice Analysis", link: "/" },
            { name: "Emotion Intelgent", link: "/" },
            { name: "Bussniess Intelgent", link: "/" },
            { name: "Predication System", link: "/" },
            { name: "Others", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@smartbrain.com", link: "mailto:customer@smartbrain.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];