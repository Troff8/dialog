export interface MessageObject {
  role: "system" | "user" | "assistant";
  content: string;
}
