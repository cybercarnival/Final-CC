import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import ctf from "../assets/ctf.png";

function Loop() {
    const testimonials = [
      {
        image: ctf,
        quote:
          "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
        name: "Charles Dickens",
        title: "A Tale of Two Cities",
      },
      {
        image: ctf,
        quote:
          "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        name: "William Shakespeare",
        title: "Hamlet",
      },
      {
        image: ctf,
        quote: "All that we see or seem is but a dream within a dream.",
        name: "Edgar Allan Poe",
        title: "A Dream Within a Dream",
      },
      {        
        image: ctf,
        quote:
          "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        name: "Jane Austen",
        title: "Pride and Prejudice",
      },
      {
        image: ctf,
        quote:
          "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
        name: "Herman Melville",
        title: "Moby-Dick",
      },
    ];
  return (
    <div className="">
      <h1 className=" text-7xl font-semibold flex flex-col justify-center items-center text-cyan-300 font-alumni ">OUR SPONSORS</h1>
        <p className="text-white text-lg flex flex-col justify-center items-center text-center ">We are truly grateful for your confidence in us. We look forward to achieving great things together and sharing the success that your support has made possible.</p>
      <div className="h-[20rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
    </div>
  )
}

export default Loop
