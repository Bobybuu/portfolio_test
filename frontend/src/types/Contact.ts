export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  message: string;
  data: ContactFormData & {
    id: number;
    created_at: string;
  };
}