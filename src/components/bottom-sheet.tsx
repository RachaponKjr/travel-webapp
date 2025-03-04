'use client'
import { motion } from "framer-motion";
import { ReactNode, useEffect } from "react";

interface BottomSheetProps {
    children: ReactNode;
    open?: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const BottomSheet: React.FC<BottomSheetProps> = ({ children, open, setOpen }) => {

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [open]);
    return (
        <div className="z-50 absolute">
            {open && (
                <div
                    className="fixed inset-0 bg-black/50"
                    onClick={() => setOpen(false)}
                />
            )}
            <motion.div
                className="fixed bottom-0 left-0 w-full bg-white rounded-t-2xl shadow-lg p-4 max-h-[90vh] overflow-y-auto"
                initial={{ y: "100%" }}
                animate={{ y: open ? "0%" : "100%" }}
                transition={{ stiffness: 100, damping: 10 }}
            >
                {children}
            </motion.div>
        </div>
    );
};

interface BottomSheetTriggerProps {
    children: ReactNode;
}

const BottomSheetTrigger: React.FC<BottomSheetTriggerProps> = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export { BottomSheet, BottomSheetTrigger };
