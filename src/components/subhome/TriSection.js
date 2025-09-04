const cardData = [
  {
    className: "hospitals",
    iconClass: "fas fa-hospital-user fa-4x",
    title: "Hospitals, Clinics, Doctors Offices",
    text: `Our team is accepted by multiple hospitals ranging from the states
      of Utah to Arkansas. Pro-Select Flooring understands a hospital
      environment has the requirement to be clean and contain fresh air,
      so we ensure to keep dust and contaminants at a minimum. We have
      focused most of our operations in the Tulsa, OK and Oklahoma City
      areas, with nearly all major hospitals in these areas hiring
      Pro-Select to get all flooring needs fulfilled.`
  },
  {
    className: "school",
    iconClass: "fas fa-school fa-4x",
    title: "Schools, Churches, Businesses",
    text: `We work with schools, churches, and all different kinds of
      businesses to get their flooring needs fulfilled. Pro-Select is
      capable of getting your school or business logo on your lobby floor
      and/or any designs throughout the building wanted to make your
      building as spirited as possible. We can assist in renovating your
      building(s) as well as assist in getting your newly constructed
      building all ready to be walked on for multiple years to come! We
      own machines to make the demo work quicker and have all pre-existing
      flooring systems get a reboot by releveling and patch work where
      needed.`
  },
  {
    className: "floortypes",
    iconClass: "fas fa-sort-alpha-up fa-5x",
    title: "Multiple Flooring Types",
    text: `Pro-Select Flooring is experienced with multiple flooring types and
      has been actively keeping up with the latest technologies. We can
      also go old school and work with something more classic if that is
      what is desired. We are comfortable with all floor types from
      Carpet, VCT, LVT, Ceramic, Sheet Vinyl, you name it, we do it!
      Rubber base is installed as well for floor types that require the
      base. You do not get half jobs marked as completed, you get the full
      package. We can work on gym floors, sheet vinyl hallways, to ceramic
      for bathrooms. Give us the challenge and we will handle it with
      ease.`
  }
];

function TriCard({ iconClass, title, text, className }) {
  return (
    <div className={className}>
      <i className={iconClass} />
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}

export default function TriSection() {
  return (
    <section className="homeTriDesc">
      <h2>Commercial Work</h2>
      <div className="triSection">
        {cardData.map((card, idx) => (
          <TriCard
            key={idx}
            className={card.className}
            iconClass={card.iconClass}
            title={card.title}
            text={card.text}
          />
        ))}
      </div>
    </section>
  );
}
