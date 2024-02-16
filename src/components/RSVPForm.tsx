import axios from "axios";
import { useState, useRef } from "react";

interface FormData {
  guest_name: string;
  partner_name: string;
  email: string;
  rsvp: "yes" | "no";
}

const RSVPForm = () => {
  const [formData, setFormData] = useState<FormData>({
    guest_name: "",
    partner_name: "",
    email: "",
    rsvp: "yes",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const formRef = useRef(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);
    setSubmissionError(null); // Clear any previous errors

    try {
      const response = await axios.post(
        "https://65cdc2d8c715428e8b3efe00.mockapi.io/anhthu-charlesbester/api/rsvp",
        formData
      );

      console.log("RSVP submitted successfully:", response.data);
      if (response.status === 201) {
        setIsPopupOpen(true);
        // @ts-ignore
        formRef && formRef.current.reset();
        setTimeout(() => setIsPopupOpen(false), 2500);
      }
    } catch (error) {
      console.error("Error submitting RSVP:", error);
      setSubmissionError(
          // @ts-ignore
        error.message || "An error occurred while submitting your RSVP."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      ref={formRef}
      method='POST'
      className='pt-6 grid gap-12 relative'
      onSubmit={handleSubmit}
    >
      <div className='grid gap-6'>
        <label
          htmlFor='guest_name'
          className='font-main-sans-medium text-form text-[1.5em]'
        >
          Guest
        </label>
        <input
          type='text'
          id='guest_name'
          name='guest_name'
          placeholder='Name'
          required
          className='border rounded-md border-gray-400 text-gray-600 text-[1.5em] font-normal font-main-sans leading-loose tracking-wide p-4 bg-white'
          onChange={(event) => handleChange(event)}
        />
      </div>
      <div className='grid gap-6'>
        <label
          htmlFor='partner_name'
          className='font-main-sans-medium text-form text-[1.5em]'
        >
          Partner
        </label>
        <input
          type='text'
          id='partner_name'
          name='partner_name'
          placeholder='Name'
          className='border rounded-md border-gray-400 text-gray-600 text-[1.5em] font-normal font-main-sans leading-loose tracking-wide p-4 bg-white'
          onChange={(event) => handleChange(event)}
        />
      </div>
      <div className='grid gap-6'>
        <label
          htmlFor='partner_name'
          className='font-main-sans-medium text-form text-[1.5em]'
        >
          Email
        </label>
        <input
          type='email'
          id='email'
          name='email'
          placeholder='Email'
          required
          className='border rounded-md border-gray-400 text-gray-600 text-[1.5em] font-normal font-main-sans leading-loose tracking-wide p-4 bg-white'
          onChange={(event) => handleChange(event)}
        />
      </div>
      <div className='form-question mt-4 grid place-content-center '>
        <div className='btn-wrap grid gap-14'>
          <div className='btn-box flex gap-4 items-center justify-start'>
            <input
              id='t16-yes'
              type='radio'
              name='rsvp'
              value='yes'
              required
              className='form-radio color-1'
              onChange={(event) => handleChange(event)}
            />
            <label
              htmlFor='t16-yes'
              className='form-btn-text font-main-sans-medium text-form text-[1.75em] uppercase pl-8'
            >
              accepts with pleasure
            </label>
          </div>
          <div className='btn-box flex gap-4 items-center justify-start'>
            <input
              id='t16-no'
              type='radio'
              name='rsvp'
              value='no'
              required
              className='form-radio color-1'
              onChange={(event) => handleChange(event)}
            />
            <label
              htmlFor='t16-no'
              className='form-btn-text font-main-sans-medium text-form text-[1.75em] uppercase pl-8'
            >
              declines with regret
            </label>
          </div>
          <button
            disabled={isSubmitting}
            className='w-[159px] h-[39px] mx-auto px-[5em] py-[2.5em] bg-orange-100 rounded-[3px] border border-stone-400 justify-center items-center gap-4.5 inline-flex'
          >
            <p className='text-yellow-950 text-[1.5em] font-semibold font-main-sans-medium uppercase'>
              {isSubmitting ? "Submitting..." : "Submit"}
            </p>
          </button>
          {submissionError && (
            <p className='text-[1em] text-form'>{submissionError}</p>
          )}
          {isPopupOpen && (
            <p className='font-main-sans text-[1em] text-form'>
              Thank you for your RSVP! See you!
            </p>
          )}
        </div>
      </div>
    </form>
  );
};

export default RSVPForm;
