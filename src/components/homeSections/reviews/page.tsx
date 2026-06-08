"use client";
import * as React from "react";
import { ReviewCard } from "../../ui/ReviewCard";
import "./reviews-carousel.css";
import { motion } from "framer-motion";
import { extractPlainText } from "../../../lib/cmsHelpers";

const reviews: Array<{
  avatar: string;
  name: string;
  rating: number;
  text: string;
  platform: "google" | "instagram" | "facebook";
}> = [
  {
    avatar: "/uploads/reviews/aimen.png",
    name: "Amira badraoui",
    rating: 5,
    text: "Un accueil chaleureux w khedma machallah",
    platform: "google",
  },
  {
    avatar: "/uploads/reviews/amin.png",
    name: "amine ghachi",
    rating: 5,
    text: "Bravos docteur Ya3tik Saha 🔥👌😷",
    platform: "instagram",
  },
  {
    avatar: "/uploads/reviews/aimen.png",
    name: "Amira badraoui",
    rating: 5,
    text: "Vraiment un beau travail, vous êtes le meilleur",
    platform: "facebook",
  },
  {
    avatar: "/uploads/reviews/image.png",
    name: "soukri houri",
    rating: 5,
    text: "Vraiment merci khedma mashallah",
    platform: "instagram",
  },
];

export const Reviews = ({ homepage }: { homepage?: any }) => {
  const data = homepage?.data || {};

  const mappedReviews =
    Array.isArray(data.reviews) && data.reviews.length > 0
      ? data.reviews.map((review: any) => ({
          avatar: review.avatar?.url || "/uploads/reviews/aimen.png",
          name: review.name || "Anonymous",
          rating: Number(review.rating || 5),
          text: extractPlainText(review.text),
          platform: review.platform || "google",
        }))
      : reviews;

  const cards = [...mappedReviews, ...mappedReviews];

  return (
    <section className="relative w-full h-full md:h-[95vh] bg-[#243520] flex flex-col items-center py-16 px-6 md:px-0 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, type: "spring" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-white text-[34px] md:text-[50px] font-bold mb-30 text-center font-playfair-important">
          {data.reviews_title || "Votre confiance, selon leurs mots..."}
        </h2>
      </motion.div>
      <div
        className="relative w-full max-w-[1150px] overflow-hidden pb-8 md:pb-0"
        style={{
          maskImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 3.5%, rgb(0, 0, 0) 96.5%, rgba(0, 0, 0, 0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 3.5%, rgb(0, 0, 0) 96.5%, rgba(0, 0, 0, 0) 100%)",
        }}
      >
        <div className="reviews-carousel flex gap-[250px] items-center w-max pt-[20px]">
          {cards.map((review, idx) => (
            <ReviewCard key={idx} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};
