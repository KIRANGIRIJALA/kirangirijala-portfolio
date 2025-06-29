
import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_mxjzpum';
const EMAILJS_TEMPLATE_ID = 'template_kky05rp';
const EMAILJS_PUBLIC_KEY = 'g5BLFKy6o6YW3E5Cq';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface EmailData {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async (formData: EmailData): Promise<void> => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Kiran Saikumar',
    };

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );
  } catch (error) {
    console.error('Failed to send email:', error);
    throw new Error('Failed to send message. Please try again.');
  }
};
