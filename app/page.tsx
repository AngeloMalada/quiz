"use client";
import React from "react";

const pitanja = [
  {
    pitanje: "Gdje ljetuje lana klingor",
    odgovori: [
      { odgovor: "ne ljetuje", tocan: false },
      { odgovor: "u lici", tocan: false },
      { odgovor: "TKO JE UOPCE LANA KLINGOR", tocan: true },
      { odgovor: "KOGA BOLI KURAC", tocan: false },
    ],
  },
  {
    pitanje: "koji dile ti je omiljeni",
    odgovori: [
      { odgovor: "dile", tocan: false },
      { odgovor: "dile", tocan: false },
      { odgovor: "dile", tocan: false },
      { odgovor: "nijedan", tocan: true },
    ],
  },
];

type Props = {};

function Homepage({}: Props) {
  const [rezultat, setRezultat] = React.useState("");
  const [i, setI] = React.useState(0);
  const [color, setColor] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [odgovoreno, setOdgovoreno] = React.useState(false);

  const handleOptionChange = (e: any) => {
    setRezultat(e.target.value);
  };
  const handleClick = () => {
    pitanja[i].odgovori.map((odgovor) => {
      if (odgovor.tocan === true) {
        if (odgovor.odgovor === rezultat) {
          setColor(1);
          if (odgovoreno === false) {
            setScore(score + 1);
          }
          setOdgovoreno(true);
        } else {
          setColor(1);
          if (odgovoreno === false) {
            setScore(score - 1);
          }
          setOdgovoreno(true);
        }
      }
    });
  };
  const handleNextQuestion = () => {
    if (i < pitanja.length - 1) {
      setI(i + 1);
      setColor(0);
      setOdgovoreno(false);
    } else {
      alert("kraj");
      setI(0);
      setColor(0);
      setOdgovoreno(false);
      setScore(0);
    }
  };

  return (
    <div className="h-screen px-10">
      <div className="pt-[10vh] mx-auto text-center flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h1>question {i + 1}</h1>
          <h2>{score}</h2>
          <span>{pitanja[i].pitanje}</span>
        </div>
        <div className="flex flex-col gap-2 mx-auto w-1/2">
          {pitanja[i].odgovori.map((odgovor, index) => {
            return (
              <div key={index} className="flex flex-row gap-2  items-center  ">
                {!odgovoreno ? (
                  <input
                    type="radio"
                    name="odgovor"
                    onChange={handleOptionChange}
                    value={odgovor.odgovor}
                    className="w-[20px] h-[20px]"
                  />
                ) : (
                  <div className="w-5 h-5"></div>
                )}
                <span
                  className={
                    color === 1
                      ? odgovor.tocan === true
                        ? "bg-green-500 w-full rounded-xl p-2"
                        : "bg-red-500 w-full rounded-xl p-2"
                      : " w-full rounded-xl p-2"
                  }
                >
                  {odgovor.odgovor}
                </span>
              </div>
            );
          })}
          <div className="flex flex-row gap-10 ml-5 justify-center">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={handleClick}
            >
              Submit
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={handleNextQuestion}
            >
              novo pitanje
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
