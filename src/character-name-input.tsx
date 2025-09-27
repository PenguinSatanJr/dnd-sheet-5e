import { useEffect, useState } from "react";
import Input from "./input";
import { useDebounce } from "@uidotdev/usehooks";

const CharacterNameInput = () => {
  const [characterName, setCharacterName] = useState<string>("");
  const debouncedCharacterName = useDebounce(characterName, 500);
  const isTyping = debouncedCharacterName !== characterName;

  useEffect(() => {
    if (!isTyping) {
      setCharacterName(debouncedCharacterName.replace(/ +(?= )/g, "").trim());
      localStorage.setItem("Character name", debouncedCharacterName);
    }
  }, [debouncedCharacterName, isTyping]);
  return (
    <Input
      helperText={"Character name"}
      value={characterName}
      setValue={setCharacterName}
    ></Input>
  );
};

export default CharacterNameInput;
