interface emailPost {
  from?: string;
  to: string;
  subject: string;
  text: string;
  html: string;
}

export { emailPost };
