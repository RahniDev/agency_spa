import { useForm, ValidationError } from '@formspree/react';
import styles from './Contact.module.css'

const Contact = () => {
  const [state, handleSubmit] = useForm("xpwzwonk");
  
  if (state.succeeded) {
    return <p>Thanks for your message!</p>;
  }

  return (
    <form onSubmit={handleSubmit}
    className={styles.contact_form}>
      <h2>Get in touch!</h2>
      <div>
        <input type="text"
          placeholder="Name"
          name="name"
          required />
          <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
      </div>
      <div>
        <input type="email"
          placeholder="Email"
          name="email"
          required />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
      </div>
      <div>
        <textarea
          placeholder="Message"
          name="message"
          required />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <button type="submit" disabled={state.submitting}>Send</button>
    </form>
  )
}

export default Contact