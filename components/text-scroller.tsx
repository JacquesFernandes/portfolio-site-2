'use-client';

import {FC, useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

type TextScrollerProps = {
	texts: string[];
	delay?: number;
}

export const TextScroller: FC<TextScrollerProps> = ({ texts, delay=1500 }) => {
	const [ currentIndex, setCurrentIndex ] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((ci) => (ci+1) % texts.length);
		}, delay);

		return () => clearInterval(interval);
	}, [delay, texts.length]);

	return <AnimatePresence mode="wait" >
		{
			texts.map((text, index) => (
				currentIndex === index && <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
					{text}
        </motion.span>
			))
		}
	</AnimatePresence>;
}