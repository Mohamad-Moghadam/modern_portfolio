"use client";

import { useEffect, useRef } from "react";

export function BinaryRain() {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const resize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};
		resize();
		window.addEventListener("resize", resize);

		const chars = "01λΣ∀∃∂∇∫⟨⟩[]{};→⇒≡⊥⊤∞".split("");
		const fontSize = 14;
		const columns = Math.floor(canvas.width / fontSize);
		const drops = Array.from({ length: columns }, () => Math.random() * -100);

		const draw = () => {
			ctx.fillStyle = "rgba(6, 12, 8, 0.06)";
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			for (let i = 0; i < drops.length; i++) {
				const char = chars[Math.floor(Math.random() * chars.length)];
				const x = i * fontSize;
				const y = drops[i] * fontSize;
				const brightness = Math.random();

				if (brightness > 0.95) {
					ctx.fillStyle = "rgba(16, 185, 129, 0.9)";
					ctx.font = `bold ${fontSize}px "JetBrains Mono", monospace`;
				} else if (brightness > 0.85) {
					ctx.fillStyle = "rgba(52, 211, 153, 0.5)";
					ctx.font = `${fontSize}px "JetBrains Mono", monospace`;
				} else {
					ctx.fillStyle = "rgba(16, 185, 129, 0.15)";
					ctx.font = `${fontSize}px "JetBrains Mono", monospace`;
				}

				ctx.fillText(char, x, y);

				if (y > canvas.height && Math.random() > 0.975) drops[i] = 0;
				drops[i] += 0.4 + Math.random() * 0.3;
			}
		};

		const interval = setInterval(draw, 45);
		return () => {
			clearInterval(interval);
			window.removeEventListener("resize", resize);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-70"
		/>
	);
}
