import { Facebook, Github, Instagram, Linkedin, Mail, MapPin, Phone, Twitch, Twitter } from "lucide-react";

export const data = [
    {
        label: 'Home',
        link: '#home',
    },
    {
        label: 'About',
        link: '#about',
    },
    {
        label: 'Skills',
        link: '#skills',
    },
    {
        label: 'Projects',
        link: '#projects',
    },
    {
        label: 'Contact',
        link: '#contact',
    }
]

export const talents = [
    {
        name: 'Web Developmnet',
        description: 'I can develop a website for you with a responsive and unique designs',
    },
    {
        name: 'Vulnerability Assesment',
        description: 'I can help you to identify and fix vulnerabilities in your website',
    },
    {
        name: 'Cyber Security',
        description: 'I can help you to protect your website from cyber attacks',
    },
    // {
    //     name: ''
    // }
]

export const skills = [
    {
        category: 'Web Development',
        skills: [
            { name: 'HTML', proficiency: '90%' },
            { name: 'CSS', proficiency: '80%' },
            { name: 'JavaScript', proficiency: '70%' },
            { name: 'React', proficiency: '60%' },
            { name: 'Node.js', proficiency: '30%' }
        ]
    },
    {
        category: 'Cybersecurity',
        skills: [
            { name: 'Nmap', proficiency: '50%' },
            { name: 'Wireshark', proficiency: '40%' },
            { name: 'Burp Suite', proficiency: '30%' }
        ]
    }
];


export const contact_info = [
    {
        name: 'Email',
        value: 'tejayerriboyina@gmail.com',
        image: <Mail />
    },
    {
        name: 'Phone',
        value: '9014389269',
        image: <Phone />
    },
    {
        name: 'LinkedIn',
        value: 'https://www.linkedin.com/in/teja-yerriboyina',
        image: <Linkedin />
    },
    {
        name: 'GitHub',
        value: 'https://github.com/tejayerriboyina',
        image: <Github />
    },
    {
        name: 'Instagram',
        value: 'https://www.instagram.com/teja_yerriboyina/',
        image: <Instagram />
    },
    {
        name: 'Twitter',
        value: 'https://twitter.com/teja_yerriboyina',
        image: <Twitter />
    },
    {
        name: 'Facebook',
        value: 'https://www.facebook.com/teja.yerriboyina',
        image: <Facebook />
    },
    {
        name: 'Location',
        value: 'Tirupati, India',
        image: <MapPin/>
    }
]