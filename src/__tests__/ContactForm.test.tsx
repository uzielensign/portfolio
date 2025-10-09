import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

test('shows warning when NEXT_PUBLIC_FORMSPREE_FORM_ID missing', async () => {
  vi.resetModules();
  // Ensure env var is not set for this test
  delete process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

  const { default: ContactForm } = await import('../app/contact/ContactForm');
  render(<ContactForm />);

  expect(screen.getByText(/Contact form is not configured/i)).toBeInTheDocument();
  expect(screen.getByText(/To enable the contact form/i)).toBeInTheDocument();
});

test('shows message required validation when submitting empty message', async () => {
  vi.resetModules();
  // Set env var so the form renders
  process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID = 'f/test';

  // Mock Formspree hook to avoid network/side effects
  vi.mock('@formspree/react', () => {
    return {
      useForm: (id: string) => [{ succeeded: false, submitting: false, errors: [] }, vi.fn()],
      ValidationError: ({ prefix, field, errors }: any) => null,
    };
  });

  const { default: ContactForm } = await import('../app/contact/ContactForm');
  const { container } = render(<ContactForm />);

  const user = userEvent.setup();

  // Fill other required fields so only 'message' is missing
  await user.type(screen.getByRole('textbox', { name: /first name/i }), 'Jane');
  await user.type(screen.getByRole('textbox', { name: /last name/i }), 'Doe');
  await user.type(screen.getByRole('textbox', { name: /email/i }), 'jane@example.com');

  // Find the form element and submit it directly so the onSubmit handler runs
  const submitButton = screen.getByRole('button', { name: /send message/i });
  const form = submitButton.closest('form');
  if (!form) throw new Error('form element not found');

  fireEvent.submit(form);

  // The client validation should show the message error
  expect(await screen.findByText(/Message is required\./i)).toBeInTheDocument();
});
