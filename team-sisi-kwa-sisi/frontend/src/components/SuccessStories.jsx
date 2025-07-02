import React from "react";

const stories = [
	{
		title: "A New Start for Mary",
		beneficiary: "Mary W.",
		date: "June 2025",
		summary:
			"With the help of donors and volunteers, Mary received life-saving surgery and is now back to supporting her family.",
		image: "https://img.icons8.com/color/96/hope.png",
	},
	{
		title: "Clean Water for Machakos",
		beneficiary: "Machakos Community",
		date: "May 2025",
		summary:
			"The Clean Water Initiative brought safe water to over 500 families, reducing disease and improving daily life.",
		image: "https://img.icons8.com/color/96/water-bottle.png",
	},
	{
		title: "Education Dreams Realized",
		beneficiary: "Samuel K.",
		date: "April 2025",
		summary:
			"Samuel received school supplies and mentorship, helping him excel in his studies and inspire his peers.",
		image: "https://img.icons8.com/color/96/graduation-cap.png",
	},
];

export default function SuccessStories() {
	return (
		<div
			style={{
				minHeight: "100vh",
				background:
					"linear-gradient(135deg, #f7fafc 0%, #e3f0ff 100%)",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				padding: "2rem",
			}}
		>
			<div
				style={{
					background: "#fff",
					borderRadius: "1rem",
					boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
					padding: "2.5rem 2rem",
					maxWidth: "800px",
					width: "100%",
				}}
			>
				<h2
					style={{
						color: "#2b6cb0",
						textAlign: "center",
						marginBottom: "2rem",
						fontSize: "2rem",
					}}
				>
					Success Stories
				</h2>
				<div
					style={{
						display: "flex",
						flexWrap: "wrap",
						gap: "2rem",
						justifyContent: "center",
					}}
				>
					{stories.map((story, idx) => (
						<div
							key={idx}
							style={{
								background: "#f7fafc",
								borderRadius: "0.75rem",
								boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
								padding: "1.5rem",
								maxWidth: "250px",
								width: "100%",
								textAlign: "center",
								transition: "transform 0.2s",
							}}
						>
							<img
								src={story.image}
								alt={story.title}
								style={{
									marginBottom: "1rem",
									borderRadius: "0.5rem",
								}}
							/>
							<h3
								style={{
									color: "#2b6cb0",
									marginBottom: "0.5rem",
								}}
							>
								{story.title}
							</h3>
							<div
								style={{
									color: "#718096",
									fontSize: "0.95rem",
									marginBottom: "0.5rem",
								}}
							>
								{story.beneficiary} &middot; {story.date}
							</div>
							<p
								style={{
									color: "#4a5568",
									fontSize: "1rem",
									marginBottom: "1rem",
								}}
							>
								{story.summary}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}