import { useState, useEffect } from "react";
import Button from "./Button";
import "./PalindromeCheker.scss";

function PalindromeChecker() {
  const [word, setWord] = useState("");
  const [isPalindrome, setIsPalindrome] = useState(false);

  const checkPalindrome = () => {
    // Elimina los caracteres especiales y convierte todo a minúsculas
  const regex = /[^a-zA-Z0-9]/g;
    // Convirtiendo en minisculas
    const lowercaseWord = word.toLowerCase().replace(regex, '')

    // voltiando la palabra y comparandola con la original
    const reversedWord = lowercaseWord.split("").reverse().join("");

    // revisar si la palabra reversa es igual a la orginal
    setIsPalindrome(lowercaseWord === reversedWord);
  };

  const isInputEmpty = word.trim() === ""; // Verifica si el campo de entrada está vacío o contiene solo espacios

  useEffect(() => {
    // Reiniciar el estado de isPalindrome a false cuando el input se vacíe
    if (word.trim() === "") {
      setIsPalindrome(false);
    }
  }, [word]);

  return (
    <div>
      <h1>Palindrome Checker</h1>
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="Escribe una palabra"
      />

      {isInputEmpty ? (
        <p>Por favor ingresa una palabra para ver si es un palindromo</p>
      ) : (
        <Button variant="primary" evento={checkPalindrome}>
          Check Palindromo
        </Button>
      )}

      {!isInputEmpty &&
        (isPalindrome ? (
          <p>La palabra es palindroma!</p>
        ) : (
          <p>La palabra no es palindroma</p>
        ))}
    </div>
  );
}

export default PalindromeChecker;
