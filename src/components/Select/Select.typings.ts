export type OptionsType = Record<"label" | "value", string>[];

export interface ISelect {
  label: string;
  value: string;
  setValue: (arg: string) => void;
  size?: "small" | "medium";
  options: OptionsType;
}
