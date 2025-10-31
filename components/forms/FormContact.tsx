'use client';

import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

type PropsContact = { hideTitle?: boolean };

import { Toast, Button, Col, Form, Row } from 'react-bootstrap';

export default function Contact({ hideTitle = false }: PropsContact) {
  const router = useRouter();

  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [validated, setValidated] = useState(false);

  const { t } = useTranslation();

  const { Group, Control } = Form;
  const { Feedback } = Control;

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new URLSearchParams();

    // Ajouter manuellement chaque champ du formulaire à formData
    for (const [key, value] of new FormData(form)) {
      formData.append(key, value as string);
    }

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    try {
      await fetch(`/${router.locale}${router.pathname}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      });
      setValidated(true);
      setSuccess(true);
    } catch (error) {
      console.error('Error:', error);
      alert(error);
    }
  };

  const handleInputChange = (event: any) => {
    event.preventDefault();

    const { name, value } = event.target;
    setFormData((formData: any) => ({
      ...formData,
      [name]: value,
    }));
  };

  return (
    <div className="contact-form-box contact-form">
      <div className="form-container-box">
        <Toast
          className="d-inline-block w-100 mb-3 border-0 bg-success shadow-none"
          show={success}
          bg={'success'}
        >
          <Toast.Body className={'text-white'}>
            {t('Success.title')} {t('Success.description')}
          </Toast.Body>
        </Toast>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          name="contact"
          data-netlify="true"
          encType="application/x-www-form-urlencoded"
        >
          <input type="hidden" name="form-name" value="contact" />

          <Row>
            <Group
              as={Col}
              md={6}
              sm={12}
              controlId="formGridFullName"
              className="mb-3"
            >
              <Control
                required
                type="text"
                placeholder={t('Contact.form.fields.name')}
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
              />
              <Feedback type="invalid">
                Please enter your Full Name.
              </Feedback>
            </Group>

            <Group
              as={Col}
              controlId="formGridEmail"
              md={6}
              sm={12}
              className="mb-3"
            >
              <Control
                required
                type="email"
                placeholder={t('Contact.form.fields.email')}
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <Feedback type="invalid">
                Please enter your Email.
              </Feedback>
            </Group>
          </Row>

          <Row className="mb-3">
            <Group as={Col} controlId="formGridSubject">
              <Control
                required
                type="text"
                placeholder={t('Contact.form.fields.subject')}
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
              />
              <Feedback type="invalid">
                Please enter a Subject.
              </Feedback>
            </Group>
          </Row>

          <Row className="mb-3">
            <Group controlId="formGridMessage">
              <Control
                required
                as="textarea"
                placeholder={t('Contact.form.fields.message')}
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              />
              <Feedback type="invalid">
                Please enter a Message.
              </Feedback>
            </Group>
          </Row>

          <Button variant="primary" type="submit">
            {t('Contact.form.button')}
          </Button>
        </Form>
      </div>
    </div>
  );
}