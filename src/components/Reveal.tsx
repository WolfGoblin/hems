"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
}

export default function Reveal({ children, width = "fit-content", delay = 0 }: Props) {
    return (
        <div style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </div>
    );
}
