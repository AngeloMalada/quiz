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
  const handleOptionChange = (e: any) => {
    setRezultat(e.target.value);
  };
  const handleClick = () => {
    pitanja[i].odgovori.map((odgovor) => {
      if (odgovor.tocan === true) {
        if (odgovor.odgovor === rezultat) {
          alert("tocno");
          if (i < pitanja.length - 1) {
            setI(i + 1);
          } else {
            alert("kraj");
            setI(0);
          }
          console.log(i);
        } else {
          alert("netocno");
        }
      }
    });
  };

  return (
    <div className="h-screen px-10">
      <div className="pt-[10vh] mx-auto text-center flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h1>Pitanje prvo</h1>
          <span>{pitanja[i].pitanje}</span>
        </div>
        <div className="flex flex-col gap-2 mx-auto">
          {pitanja[i].odgovori.map((odgovor, index) => {
            return (
              <div key={index} className="flex flex-row gap-2  items-center">
                <input
                  type="radio"
                  name="odgovor"
                  onChange={handleOptionChange}
                  value={odgovor.odgovor}
                />
                <span>{odgovor.odgovor}</span>
              </div>
            );
          })}
          <div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={handleClick}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
