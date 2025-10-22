import React from "react";

const WaitlistPage = () => {
    return (
        <div className="fixed inset-0 mt-20">
            <div className="w-full h-full">
                <iframe
                    className="w-full h-full"
                    src="https://vehiql-waitlist.created.app"
                    title="Waiting List Landing Page"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default WaitlistPage;

