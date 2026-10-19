"use client";

import { useEffect, useState } from "react";

type WindowSize = {
	width: number | null;
	height: number | null;
};

export function useWindowSize(): WindowSize {
	const [windowSize, setWindowSize] = useState<WindowSize>({
		width: null,
		height: null,
	});

	useEffect(() => {
		const updateWindowSize = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		updateWindowSize();
		window.addEventListener("resize", updateWindowSize);

		return () => {
			window.removeEventListener("resize", updateWindowSize);
		};
	}, []);

	return windowSize;
}
