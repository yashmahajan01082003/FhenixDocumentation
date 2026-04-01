"use client";

import { useEffect, useRef, useState } from "react";

export default function WhyPrivacyMatters() {
    const iframeRef = useRef(null);
    const [loadIframe, setLoadIframe] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setLoadIframe(true);
                observer.disconnect();
            }
        });

        if (iframeRef.current) {
            observer.observe(iframeRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div style={{ padding: "20px", fontFamily: "Arial", lineHeight: "1.6" }}>
            <h1>Why Privacy Matters</h1>

            <p>
                Imagine you live in a house made completely of glass 🏠✨
            </p>

            <div ref={iframeRef}>
                {loadIframe ? (
                    <iframe
                        src="/glass.html"
                        title="3D glass house"
                        width="100%"
                        height="500px"
                        style={{ border: "none", marginBottom: "20px" }}
                    />
                ) : (
                    <div style={{ height: "500px", marginBottom: "20px" }}>
                        Loading 3D glass house...
                    </div>
                )}
            </div>

            <p>
                The walls are see-through… so everyone outside can watch you all the time 👀
            </p>

            <ul>
                <li>🍪 They see what snacks you eat</li>
                <li>🎮 They see what games you play</li>
                <li>🧸 They see how many toys you have</li>
                <li>😴 They even see when you sleep</li>
            </ul>

            <p>
                At first, it might feel okay… because you are not hiding anything.
            </p>

            <p>
                But after some time, it starts to feel uncomfortable 😬
            </p>

            <p>
                Now imagine bigger problems…
            </p>

            <ul>
                <li>😈 Someone sees your toys and wants to steal them</li>
                <li>🕵️ Someone keeps watching you every single day</li>
                <li>📢 People talk about everything you do</li>
                <li>🎯 Someone uses what they see to trick you</li>
            </ul>

            <p>
                You would want curtains or walls to protect yourself, right? 🪟🚪
            </p>

            <p>
                This is how many blockchains work today.
            </p>

            <p>
                They are like a glass house where:
            </p>

            <ul>
                <li>💰 Everyone can see your money</li>
                <li>🔁 Everyone can see what you send and receive</li>
                <li>📜 Everyone can see what you are doing</li>
            </ul>

            <p>
                This can cause problems:
            </p>

            <ul>
                <li>👀 People can track everything you do</li>
                <li>🎯 You can become a target if you have a lot of money</li>
                <li>📊 Others can learn your habits</li>
                <li>💼 Businesses cannot keep secrets</li>
            </ul>

            <p>
                Being open is good 👍
                But being watched all the time is not safe.
            </p>

            <p>
                Just like a real house needs walls and curtains,
                blockchain also needs privacy 🔐
            </p>

            <p style={{ marginTop: "20px", fontStyle: "italic", fontWeight: "bold" }}>
                “Transparency isn’t just openness, it’s vulnerability.”
            </p>

            <button style={{ marginTop: "10px" }}>
                Learn How We Add Privacy
            </button>
        </div>
    );
}