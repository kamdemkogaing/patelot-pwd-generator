"use client";
import { useState } from "react";
import Section from "./Section";
import { Button } from "./ui/button";

const PasswordGenerator = () => {
  // state
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");

  // comportement
  const generatePassword = () => {
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let allChars = lowerCaseChars;
    if (includeUppercase) allChars += upperCaseChars;
    if (includeNumbers) allChars += numberChars;
    if (includeSymbols) allChars += symbolChars;

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      generatedPassword += allChars[randomIndex];
    }

    setPassword(generatedPassword);
  };

  //render
  return (
    <Section>
      <div className="flex flex-wrap space-x-0 md:space-x-10 lg:space-x-10 xl:space-x-10 justify-center items-center">
        <div className="bg-accent/50 transition-colors w-full md:w-1/2 p-4 mb-4 rounded-lg">
          <div className="font-caption text-3xl text-primary font-bold mb-8">
            Password Generator
          </div>
          <ul className="p-2 text-sm font-medium bg-accent text-accent-foreground border rounded-lg">
            <li className="w-full  rounded-t-lg dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  type="number"
                  value={length}
                  onChange={(e) => setLength(parseInt(e.target.value, 10))}
                  className="p-3 w-20 h-10 input input-bordered bg-black"
                />
                <label className="w-full py-3 ms-2 text-sm font-medium">
                  Großbuchstaben einschließen
                </label>
              </div>
            </li>
            <li className="w-full  rounded-t-lg dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  type="checkbox"
                  checked={includeUppercase}
                  onChange={(e) => setIncludeUppercase(e.target.checked)}
                  className="checkbox border-accent-foreground"
                />
                <label className="w-full py-3 ms-2 text-sm font-medium">
                  Großbuchstaben einschließen
                </label>
              </div>
            </li>

            <li className="w-full  rounded-t-lg dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  type="checkbox"
                  checked={includeNumbers}
                  onChange={(e) => setIncludeNumbers(e.target.checked)}
                  className="checkbox border-accent-foreground"
                />
                <label className="w-full py-3 ms-2 text-sm font-medium">
                  Zahlen einschließen
                </label>
              </div>
            </li>
            <li className="w-full rounded-t-lg dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  type="checkbox"
                  checked={includeSymbols}
                  onChange={(e) => setIncludeSymbols(e.target.checked)}
                  className="checkbox border-accent-foreground"
                />
                <label className="w-full py-3 ms-2 text-sm font-medium">
                  Symbole einschließen
                </label>
              </div>
            </li>
          </ul>
          <Button className="my-4" onClick={generatePassword}>
            Generieren
          </Button>
          <div>
            <div className="font-bold">Generiertes Passwort:</div>
            <div className="text-sm text-muted-foreground break-words">
              {password}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default PasswordGenerator;
