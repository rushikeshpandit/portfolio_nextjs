"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { info } from "../lib/data";
import CountUp from "./CountUp";
import Image from "next/image";

const container = {
	hidden: {},
	show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const item = {
	hidden: { opacity: 0, y: 24 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" as const },
	},
};

export default function Hero() {
	const [countTrigger, setCountTrigger] = useState(false);
	return (
		<section
			id="hero"
			style={{
				minHeight: "100vh",
				display: "flex",
				alignItems: "center",
				padding: "120px 24px 80px",
			}}
		>
			<div style={{ maxWidth: 1000, margin: "0 auto", width: "100%" }}>
				<motion.div
					variants={container}
					initial="hidden"
					animate="show"
					className="hero-grid"
					style={{
						display: "grid",
						gridTemplateColumns: "1fr auto",
						gap: 60,
						alignItems: "center",
					}}
				>
					{/* Left — text */}
					<div>
						<motion.div variants={item} style={{ marginBottom: 28 }}>
							<div
								className="available-badge"
								style={{ display: "inline-flex" }}
							>
								<div className="available-dot" />
								{info.availability}
							</div>
						</motion.div>

						<motion.h1
							variants={item}
							className="font-display shimmer-text"
							style={{
								fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
								fontWeight: 800,
								lineHeight: 1.05,
								letterSpacing: "-0.03em",
								marginBottom: 12,
							}}
						>
							{info.name}
						</motion.h1>

						<motion.div variants={item} style={{ marginBottom: 24 }}>
							<span
								className="font-display"
								style={{
									fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
									fontWeight: 600,
									color: "var(--text-muted)",
									letterSpacing: "-0.01em",
								}}
							>
								{info.title}
							</span>
						</motion.div>

						<motion.p
							variants={item}
							style={{
								fontSize: "1.0625rem",
								color: "var(--text-muted)",
								maxWidth: 500,
								lineHeight: 1.7,
								marginBottom: 44,
							}}
						>
							{info.tagline}
						</motion.p>

						<motion.div
							variants={item}
							className="hero-ctas"
							style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
						>
							<a href="#contact" className="btn-primary">
								Get in touch
								<svg
									width="14"
									height="14"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M5 12h14M12 5l7 7-7 7" />
								</svg>
							</a>
							<a href="#apps" className="btn-outline">
								View my work
							</a>
						</motion.div>
					</div>

					{/* Right — photo */}
					<motion.div
						variants={item}
						className="hero-photo-wrap"
						style={{ width: 220, flexShrink: 0 }}
					>
						<Image
							src="/self.png"
							alt="Rushikesh Pandit"
							width={220}
							height={220}
							style={{
								borderRadius: 20,
								border: "1px solid var(--border-bright)",
								objectFit: "cover",
								display: "block",
							}}
						/>
					</motion.div>
				</motion.div>

				{/* Stats */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
					onAnimationComplete={() => setCountTrigger(true)}
					className="hero-stats"
					style={{
						display: "flex",
						gap: 48,
						marginTop: 72,
						paddingTop: 40,
						borderTop: "1px solid var(--border)",
						flexWrap: "wrap",
					}}
				>
					{[
						{ target: 10, suffix: "+", label: "Years of experience" },
						{ target: 16, suffix: "+", label: "Apps shipped" },
						{ target: 5, suffix: "", label: "Open-source packages" },
						{ target: 800, suffix: "+", label: "Extension users" },
					].map((stat) => (
						<div key={stat.label}>
							<div
								className="font-display"
								style={{
									fontSize: "2rem",
									fontWeight: 800,
									letterSpacing: "-0.03em",
									color: "var(--text)",
									lineHeight: 1,
									marginBottom: 4,
								}}
							>
								<CountUp
									target={stat.target}
									suffix={stat.suffix}
									duration={1800}
									trigger={countTrigger}
								/>
							</div>
							<div
								style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}
							>
								{stat.label}
							</div>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
