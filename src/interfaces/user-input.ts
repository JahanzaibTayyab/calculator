type Operation =
  | "ADD"
  | "SUBTRACT"
  | "MULTIPLY"
  | "DIVIDE"
  | "EXPONENTIATION"
  | "MODULUS";

export default interface UserInput {
  first_num: number;
  operation: Operation;
  second_num: number;
}