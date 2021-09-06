type NavLink = { title: string; link: string };

type BlogPostPreview = {
  [key: string]: any;
  slug: string;
  permalink: string;
};

type FormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

interface EncodeForm extends FormValues {
  "form-name": string;
}
