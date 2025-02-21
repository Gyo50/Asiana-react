import React, { Component } from 'react';
import { motion } from "framer-motion";
import "./styles.css";

const cards = ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5", "Card 6"];

export class Test extends Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
  }

  nextCard = () => {
    this.setState((prevState) => ({ index: (prevState.index + 1) % cards.length }));
  };

  prevCard = () => {
    this.setState((prevState) => ({ index: (prevState.index - 1 + cards.length) % cards.length }));
  };

  render() {
    const { index } = this.state;
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100 relative">
        <div className="perspective-container relative w-[300px] h-[500px]">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="card absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              animate={{ rotateY: (i - index) * -60, x: (i - index) * 320 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <h2 className="text-2xl font-bold text-center">{card}</h2>
            </motion.div>
          ))}
        </div>
        <button className="button left absolute left-10 top-1/2 transform -translate-y-1/2">◀</button>
        <button className="button right absolute right-10 top-1/2 transform -translate-y-1/2">▶</button>
      </div>
    );
  }
}

export default Test;
