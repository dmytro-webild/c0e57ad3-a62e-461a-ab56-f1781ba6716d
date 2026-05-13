"use client";

import ReactLenis from "lenis/react";
import HeroCentered from "@/components/sections/hero/HeroCentered";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import FeatureBento, { type FeatureCard } from "@/components/sections/feature/FeatureBento";
import FeatureBorderGlow from "@/components/sections/feature/featureBorderGlow/FeatureBorderGlow";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import PricingCardEight from "@/components/sections/pricing/PricingCardEight";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import { Zap, Shield, Rocket, Target, Sparkles, Crown, Mail, Users, Layers, Code, Compass, Binary, Palette } from "lucide-react";

export default function NorthLightPage() {
    const navItems = [
        { name: "Services", id: "services" },
        { name: "Expertise", id: "expertise" },
        { name: "Approach", id: "approach" },
        { name: "Contact", id: "contact" },
    ];

    const avatars = [
        { src: "http://img.b2bpic.net/free-photo/portrait-confident-young-african-man-white-shirt_171337-7992.jpg", alt: "Collaborator 1" },
        { src: "http://img.b2bpic.net/free-photo/front-view-woman-posing-with-blue-light_23-2149417628.jpg", alt: "Collaborator 2" },
        { src: "http://img.b2bpic.net/free-photo/portrait-charismatic-sensual-male-black-sweater-with-wet_613910-11158.jpg", alt: "Collaborator 3" },
    ];

    const features: FeatureCard[] = [
        {
            bentoComponent: "globe",            title: "Digital Clarity",            description: "Unifying complex architecture with intuitive user experiences."},
        {
            bentoComponent: "marquee",            variant: "text",            centerIcon: Binary,
            texts: ["Logic", "Precision", "Mastery", "North Night", "Digital"],
            title: "Technical Mastery",            description: "Engineered for performance and scalability."},
        {
            bentoComponent: "3d-stack-cards",            items: [
                { icon: Compass, title: "Direction", subtitle: "Strategic Vision", detail: "Defining your path forward" },
                { icon: Target, title: "Quality", subtitle: "Zero-Defect", detail: "Precision in every pixel" },
                { icon: Layers, title: "Scale", subtitle: "Infrastructure", detail: "Built for global demand" },
            ],
            title: "Architecting Value",            description: "Modern frameworks meeting timeless aesthetic standards."}
    ];

    return (
        <ThemeProvider defaultButtonVariant="hover-bubble" defaultTextAnimation="entrance-slide" borderRadius="none" contentWidth="medium" sizing="medium" background="none" cardStyle="gradient-bordered" primaryButtonStyle="primary-glow" secondaryButtonStyle="layered" headingFontWeight="medium">
            <ReactLenis root>
                <NavbarLayoutFloatingInline
                    navItems={navItems}
                    brandName="NORTH LIGHT"
                    button={{ text: "Connect", href: "#contact" }}
                />
                <HeroCentered
                    background={{ variant: "sparkles-gradient" }}
                    avatars={avatars}
                    avatarText="Trusted by industry leaders"
                    title="Guided by Logic. Driven by Design."
                    description="North Light is a premier digital agency delivering technical mastery and digital clarity. We provide high-end design and development solutions for the modern era."
                    buttons={[
                        { text: "View Our Work", href: "#services" },
                        { text: "Let's Talk", href: "#contact" },
                    ]}
                    marqueeItems={[
                        { type: "text-icon", text: "Strategic Design", icon: Palette },
                        { type: "text-icon", text: "Technical Engineering", icon: Binary },
                        { type: "text-icon", text: "Cloud Performance", icon: Rocket },
                        { type: "text-icon", text: "Precision Audit", icon: Target },
                    ]}
                />
                <FeatureBento
                    features={features}
                    animationType="none"
                    tag="Services"
                    title="Digital Clarity"
                    description="Our core competencies focus on delivering high-impact, scalable solutions that resonate with your users."
                    textboxLayout="default"
                    useInvertedBackground={true}
                />
                <FeatureBorderGlow
                    tag="Approach"
                    tagIcon={Compass}
                    title="Our Process: Direction & Quality"
                    description="We combine Nordic minimalist aesthetics with rigorous logic to solve the most complex digital challenges."
                    animationType="slide-up"
                    textboxLayout="default"
                    useInvertedBackground={true}
                    features={[
                        { icon: Layers, title: "Architectural Foundation", description: "Solid base architecture designed for infinite growth." },
                        { icon: Code, title: "Clean Logic", description: "Performant, maintainable codebases for sustainable longevity." },
                        { icon: Shield, title: "Secure Execution", description: "Hardened security protocols protecting your digital assets." },
                        { icon: Zap, title: "Speed Optimized", description: "Zero-latency deployment on global edge networks." },
                    ]}
                />
                <TestimonialCardFifteen
                    testimonial="North Light completely redefined our digital footprint. The transition from chaotic architecture to pure clarity was flawless."
                    rating={5}
                    author="Elias Thorne, Director of Product at NordicScale"
                    avatars={[{ src: "http://img.b2bpic.net/free-photo/successful-businessman-imagines-great-career_1163-5478.jpg", alt: "Elias Thorne" }]}
                    ratingAnimation="slide-up"
                    avatarsAnimation="slide-up"
                    useInvertedBackground={true}
                />
                <PricingCardEight
                    tag="Engagement"
                    tagIcon={Crown}
                    title="Tailored Solutions"
                    description="Professional engagement models built for high-performance projects and enterprise requirements."
                    animationType="opacity"
                    textboxLayout="default"
                    useInvertedBackground={true}
                    plans={[
                        { id: "essentials", badge: "Essential", badgeIcon: Zap, price: "Custom", subtitle: "Core identity & web build", buttons: [{ text: "Get Quote", href: "#contact" }], features: ["Responsive UI/UX", "Performance SEO", "CMS Integration"] },
                        { id: "scaling", badge: "Scale", badgeIcon: Rocket, price: "Custom", subtitle: "Growth-oriented build", buttons: [{ text: "Get Quote", href: "#contact" }], features: ["Everything in Essential", "Custom API layers", "Extended Analytics"] },
                        { id: "enterprise", badge: "Partner", badgeIcon: Crown, price: "Custom", subtitle: "Full-scale partnership", buttons: [{ text: "Inquire", href: "#contact" }], features: ["Everything in Scale", "Dedicated engineering", "24/7 Priority support"] },
                    ]}
                />
                <ContactCenter
                    tag="Contact"
                    tagIcon={Mail}
                    title="Let's Build Something Precise"
                    description="Ready to translate your vision into digital reality? We are here to guide you."
                    background={{ variant: "rotated-rays-animated" }}
                    useInvertedBackground={true}
                    inputPlaceholder="Enter your project brief"
                    buttonText="Start Project"
                    onSubmit={(email) => console.log("Submission:", email)}
                />
                <FooterBaseReveal
                    logoText="NORTH LIGHT"
                    columns={[
                        { title: "Agency", items: [{ label: "Services", href: "#" }, { label: "Careers", href: "#" }] },
                        { title: "Framework", items: [{ label: "Logic", href: "#" }, { label: "Clarity", href: "#" }] },
                        { title: "Contact", items: [{ label: "Email", href: "#" }, { label: "London/Oslo", href: "#" }] },
                        { title: "Legal", items: [{ label: "Privacy", href: "#" }, { label: "Terms", href: "#" }] },
                    ]}
                    copyrightText="© 2024 North Light. Direction: Quality. Solution: Digital."
                />
            </ReactLenis>
        </ThemeProvider>
    );
}