import { useEffect, useState } from "react";
import Input from "./input";
import { useDebounce } from "@uidotdev/usehooks";

const ExperiencePointInput = () => {
  const [experiencePoint, setExperiencePoint] = useState<string>("");
  const debouncedExperiencePoint = useDebounce(experiencePoint, 500);
  const isTyping = debouncedExperiencePoint !== experiencePoint;

  useEffect(() => {
    if (!isTyping) {
      setExperiencePoint(debouncedExperiencePoint.replace(/ +(?= )/g, ""));
      localStorage.setItem("Experience point", debouncedExperiencePoint);
    }
  }, [isTyping, localStorage.getItem("Experience point")]);
  return (
    <Input
      helperText={"experiencePoint"}
      value={experiencePoint}
      setValue={setExperiencePoint}
    ></Input>
  );
};

export default ExperiencePointInput;
