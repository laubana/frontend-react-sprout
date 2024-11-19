import { Dispatch, SetStateAction } from "react";

export type Option = {
  value: string;
  label: string;
};

export interface DropDownProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
  placeholder?: string;
  value?: string | undefined;
  setValue?: Dispatch<SetStateAction<string | undefined>>;
  error?: string;
}
