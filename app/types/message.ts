export default interface Message {
  content: string;
  role: 'system' | 'user' | 'assistant';
}
