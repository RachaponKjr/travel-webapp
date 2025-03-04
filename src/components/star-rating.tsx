'use client'
import { Star } from 'lucide-react';
import React from 'react'

interface StarRatingProps {
    value: number; // ค่าคะแนน 0 - 5
    onChange?: (newValue: number) => void; // ฟังก์ชันเปลี่ยนค่า (ถ้ามี)
    size?: number; // ขนาดของดาว
    readOnly?: boolean; // โหมดแสดงผลอย่างเดียว
}

const StarRating: React.FC<StarRatingProps> = ({ value, onChange, size = 24, readOnly = false }) => {
    const handleClick = (newValue: number) => {
        if (!readOnly && onChange) {
            onChange(newValue);
        }
    };

    return (
        <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <Star
                    key={star}
                    size={size}
                    strokeWidth={3}
                    className={`cursor-pointer transition-colors ${star <= value ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                    onClick={() => handleClick(star)}
                />
            ))}
        </div>
    );
};

export default StarRating;
