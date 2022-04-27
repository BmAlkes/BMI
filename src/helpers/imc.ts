export type Level = {
  title: string;
  color: string;
  icon: "down" | "up";
  bmi: number[];
  yourBmi?: number;
};

export const levels: Level[] = [
  { title: "Thinness", color: "#96a3ab", icon: "down", bmi: [0, 18.5] },
  { title: "Normal", color: "#0ead69", icon: "up", bmi: [18.9, 24.9] },
  { title: "Overweight", color: "#E2B036", icon: "down", bmi: [25, 30.9] },
  { title: "Obesity", color: "#C3423F", icon: "down", bmi: [31, 99] },
];

export const calculateBMI = (height: number, weight: number) => {
  const bmi = weight / (height * height);

  for (let i in levels) {
    if (bmi >= levels[i].bmi[0] && bmi <= levels[i].bmi[1]) {
      let levelCopy: Level = { ...levels[i] };
      levelCopy.yourBmi = parseFloat(bmi.toFixed(2));
      return levelCopy;
    }
  }
  return null;
};
