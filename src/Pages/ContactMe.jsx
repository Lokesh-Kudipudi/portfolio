import ContactField from "../Components/ContactField";
import { useDarkModeContext } from "../context/DarkModeProvider";

function ContactMe() {
  const { darkMode } = useDarkModeContext();

  return (
    <section className="mx-auto flex h-[70vh] max-w-[1200px] items-center justify-center">
      <div className="flex w-[750px] flex-col items-center gap-6 border-4 border-dashed border-black py-6 dark:border-white">
        <h1 className="underline-container text-2xl after:bg-black md:text-[52px] dark:text-white dark:after:bg-white">
          Let us get in touch!
        </h1>
        <div>
          <ContactField
            src={darkMode ? "linkedinDark.png" : "linkedin.png"}
            text="Lokesh-Kudipudi"
            href="https://www.linkedin.com/in/lokesh-kudipudi/"
          ></ContactField>
          <ContactField
            src={darkMode ? "emailDark.png" : "email.png"}
            text="lokeshkudipudi2006@gmail.com"
            href="https://mail.google.com/mail/u/0/#inbox?compose=new"
          ></ContactField>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
