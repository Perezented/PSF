import ActualNav from "../sub/ActualNav";

export default function Header() {
  return (
    <section className="nav">
      <ActualNav header={true} />
      <p>
        Contact Us: <a href="tel:+19188041026">(918) 804-1026</a> |
        <a href="mailto:castaneda6473@gmail.com">castaneda6473@gmail.com</a>
      </p>
    </section>
  );
}
