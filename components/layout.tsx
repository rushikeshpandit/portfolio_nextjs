import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";

export const metadata: Metadata = {
	title: "Rushikesh Pandit — Senior Software Engineer",
	description:
		"10+ years crafting mobile experiences. React Native, iOS (Swift/SwiftUI), Elixir, Phoenix. Open to freelance & consulting.",
	keywords: [
		"React Native developer",
		"iOS developer",
		"Swift developer",
		"Elixir developer",
		"mobile app freelancer",
		"Rushikesh Pandit",
	],
	openGraph: {
		title: "Rushikesh Pandit — Senior Software Engineer",
		description:
			"10+ years crafting mobile experiences across banking, social, and e-commerce.",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<ThemeProvider>
					<div className="mesh-bg" aria-hidden="true" />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
