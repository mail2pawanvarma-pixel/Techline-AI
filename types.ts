
export interface Message {
  role: 'user' | 'assistant';
  content: string;
  isAudioLoading?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
}
