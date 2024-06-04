import ContactField from "../Components/ContactField";

function ContactMe() {
  return (
    <section className="mx-auto flex h-[70vh] max-w-[1200px] items-center justify-center bg-white">
      <div className="flex h-[350px] w-[750px] flex-col items-center gap-6 border-4 border-dashed border-black p-4">
        <h1 className="underline-container text-[52px]">
          Let us get in touch!
        </h1>
        <div>
          <ContactField
            src="linkendin.png"
            text="Lokesh-Kudipudi"
            href="https://www.linkedin.com/in/lokesh-kudipudi/"
          ></ContactField>
          <ContactField
            src="email.png"
            text="lokeshkudipudi2006@gmail.com"
            href="https://mail.google.com/mail/u/0/#inbox?compose=new"
          ></ContactField>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
