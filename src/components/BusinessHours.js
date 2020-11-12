export default function BusinessHours() {
  const styles = {
    display: "grid",
    gap: "1rem",
    padding: "1%"
  };
  return (
    <div>
      <h3>Business Hours</h3>
      <address style={styles}>
        <p>
          Call or text anytime! If we are not available, please leave a
          voicemail.
        </p>
        <p>We will respond: Mon-Fri 8am - 5pm</p>
        <a href="mailto:castaneda6473@gmail.com">castaneda6473@gmail.com</a>
        <a href="tel:+19188041026">(918) 804-1026</a>
      </address>
    </div>
  );
}
