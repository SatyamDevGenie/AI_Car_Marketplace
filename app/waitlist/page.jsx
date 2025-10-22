import React from "react";

// The data structure for the FAQ
const faqs = [
    {
        question: "What is vehiql?",
        answer: "vehiql is a next-generation online car marketplace designed to bring total transparency and speed to buying and selling vehicles. We use proprietary AI and data analysis to provide accurate valuations, simplify digital paperwork, and connect verified buyers with trusted sellers.",
    },
    {
        question: "Why do I need to join a waitlist?",
        answer: "We are prioritizing a quality launch experience. The waitlist ensures a smooth rollout and allows us to invite users in phases. Joining now guarantees your spot for early access and a special launch incentive!",
    },
    {
        question: "How does vehiql ensure transparency and trust?",
        answer: "Every listing on vehiql includes a comprehensive, verified vehicle history report. Our AI provides an objective market price range, and we implement a rigorous seller verification process to build a community of trusted transactions.",
    },
    {
        question: "When will vehiql launch and when can I expect an invite?",
        answer: "We are targeting a full public launch in Early 2026. Waitlist members will receive email updates on our progress and a personal invite code as soon as your access is ready.",
    },
    {
        question: "What is the 'launch bonus' mentioned on the page?",
        answer: "As a thank you for your early support, waitlist members who complete their first transaction (buy or sell) within the first 90 days of launch will receive a special bonus, such as a $250 credit towards closing fees or a premium feature upgrade. Details will be provided upon your invite.",
    },
];

// New Logo URL (Placeholder - ensure you replace this with your actual uploaded logo path)
const LOGO_URL = "http://googleusercontent.com/image_collection/image_retrieval/7338890930694185630_0";

// Fancy Hero Car Image URL
const HERO_CAR_IMAGE_URL = "http://googleusercontent.com/image_generation_content/0";


const WaitlistPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center pt-10 sm:pt-16 pb-12">

            {/* --- AI Generated Content Section --- */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 mt-12">

                <h1 className="typewriter text-4xl sm:text-4xl font-extrabold tracking-tight text-gray-900 mb-4 inline-block pr-2">
                    The **Future of Buying and Selling Cars** is Here.
                </h1>
                <p className="text-xl text-indigo-600 font-semibold mb-8">
                    Ditch the Dealer Drama. **vehiql** makes every car transaction transparent, fast, and driven by real data.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mt-5">
                    <FeatureCard
                        title="AI-Powered Price Clarity"
                        description="See the true market value of any vehicle instantly, eliminating guesswork and negotiation stress."
                    />
                    <FeatureCard
                        title="Simplified Digital Closings"
                        description="Move from listing to sold (or searching to driving) faster with fully digital, secure paperwork."
                    />
                    <FeatureCard
                        title="Trusted Seller Verification"
                        description="Comprehensive checks and verified history reports on every listing for total buyer confidence."
                    />
                    <FeatureCard
                        title="Priority Launch Access"
                        description="Be the first to use our platform and get a special first-transaction bonus."
                    />
                </div>
            </div>

            {/* --- FANCY HERO CAR IMAGE SECTION --- */}
            <div className="w-full max-w-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-300 mx-4 mt-5">
                <img
                    src="/logo-black.png"
                    alt="Sleek, modern car representing vehiql's innovative platform and luxury focus"
                    className="w-full h-auto object-contain"
                />
            </div>
            <p className="mt-4 text-sm text-gray-600">
                **Secure your spot** for early access and a **$250 launch bonus.**
            </p>

            {/* --- FAQ Section --- */}
            <div className="max-w-3xl mx-auto mt-20 px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </div>
    );
};

// Simple reusable component for feature cards (Tailwind)
const FeatureCard = ({ title, description }) => (
    <div className="p-4 bg-white rounded-lg shadow-lg border-l-4 border-indigo-500">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="mt-2 text-base text-gray-600">{description}</p>
    </div>
);

// Simple reusable component for FAQ items (Tailwind)
const FAQItem = ({ question, answer }) => (
    <details className="p-4 bg-white rounded-lg shadow cursor-pointer">
        <summary className="font-semibold text-lg text-gray-800 hover:text-indigo-600 transition-colors">
            {question}
        </summary>
        <p className="mt-2 text-gray-600 border-t pt-2">{answer}</p>
    </details>
);

export default WaitlistPage;


// import React from "react";

// const WaitlistPage = () => {
//     return (
//         <div className="fixed inset-0 mt-20">
//             <div className="w-full h-full">
//                 <iframe
//                     className="w-full h-full"
//                     src="https://vehiql-waitlist.created.app"
//                     title="Waiting List Landing Page"
//                     frameBorder="0"
//                     allowFullScreen
//                 ></iframe>
//             </div>
//         </div>
//     );
// };

// export default WaitlistPage;

