const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "AV TECH Launches New Enterprise Communication Solutions",
      content: "We are excited to announce the launch of our latest enterprise communication platform, designed to revolutionize how businesses connect and collaborate. This innovative solution integrates seamlessly with existing infrastructure while providing cutting-edge features for modern workplaces."
    },
    {
      id: 2,
      title: "Record-Breaking Year for AV Technology Implementations",
      content: "AV TECH celebrates a milestone year with over 500 successful installations across various industries. Our commitment to excellence and client satisfaction has positioned us as a leading provider of audiovisual solutions in the region."
    },
    {
      id: 3,
      title: "Strategic Partnership with Leading Technology Providers",
      content: "We are proud to announce strategic partnerships with industry-leading technology manufacturers. These collaborations enable us to offer our clients the most advanced and reliable AV solutions available in the market today."
    },
    {
      id: 4,
      title: "AV TECH Recognized for Innovation Excellence",
      content: "Our team has been honored with the Innovation Excellence Award for outstanding contributions to the audiovisual industry. This recognition reflects our dedication to pushing boundaries and delivering exceptional results for our clients."
    },
    {
      id: 5,
      title: "Expansion of Professional Training Programs",
      content: "We are expanding our professional training initiatives to help businesses maximize their AV technology investments. Our comprehensive training programs cover everything from basic operations to advanced system management."
    },
    {
      id: 6,
      title: "New Smart Conference Room Solutions Unveiled",
      content: "Introducing our latest smart conference room solutions featuring AI-powered automation, advanced video conferencing capabilities, and intuitive control systems. These solutions are designed to enhance meeting productivity and collaboration."
    },
    {
      id: 7,
      title: "AV TECH Supports Educational Institutions with Technology Grants",
      content: "As part of our community commitment, we are providing technology grants to educational institutions. This initiative aims to bridge the digital divide and ensure students have access to modern learning environments."
    },
    {
      id: 8,
      title: "Industry-Leading Warranty and Support Programs Introduced",
      content: "We are launching comprehensive warranty and support programs that set new industry standards. Our clients can now enjoy extended coverage and 24/7 technical support for complete peace of mind."
    },
    {
      id: 9,
      title: "Sustainable AV Solutions for Eco-Conscious Businesses",
      content: "AV TECH introduces a new line of energy-efficient and sustainable AV solutions. We are committed to helping businesses reduce their environmental footprint while maintaining superior performance and reliability."
    },
    {
      id: 10,
      title: "Client Success Stories: Transforming Corporate Communications",
      content: "Discover how leading corporations have transformed their communication strategies with AV TECH solutions. Our case studies showcase real-world results and the measurable impact of professional AV implementations."
    },
    {
      id: 11,
      title: "Advanced Integration Services Now Available",
      content: "Our new advanced integration services seamlessly connect all your AV systems for unified control and management. Experience the convenience of operating multiple technologies through a single, intuitive interface."
    },
    {
      id: 12,
      title: "AV TECH Invests in Research and Development",
      content: "We are significantly increasing our investment in research and development to stay at the forefront of AV technology innovation. This commitment ensures our clients always have access to the latest and most effective solutions."
    }
  ];

  return (
    <section id="news" className="news-section">
      {newsItems.map((item) => (
        <article key={item.id} className="news-card">
          <h3>{item.title}</h3>
          <p>{item.content}</p>
          <div className="social-share">
            <a href="#facebook" className="social-icon">Facebook</a>
            <a href="#twitter" className="social-icon">Twitter</a>
          </div>
        </article>
      ))}
    </section>
  );
};

export default NewsSection;