const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In sapiente quaerat corrupti ipsam ab blanditiis recusandae pariatur provident eligendi, explicabo repellat accusantium neque veniam nesciunt, esse modi quae nam tenetur ducimus asperiores ipsa! Beatae iste ab quia nesciunt. Numquam quasi dolorum perferendis aperiam non. Temporibus?"
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, dolore?",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab officia soluta laboriosam necessitatibus sequi officiis? Fuga eveniet earum aspernatur optio. Quo, odit adipisci mollitia sapiente sit velit debitis aliquid! Asperiores inventore eligendi dolorum est qui. Consequuntur mollitia delectus sunt eos? Reiciendis molestiae excepturi odit fugiat?"
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, ab!",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque libero, doloribus autem ratione hic quisquam maiores fugit reiciendis magni, quasi repellat blanditiis tempora consectetur nesciunt voluptates. Repellendus hic dolore reiciendis."
    },
    {
      id: 4,
      title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, quibusdam.",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor soluta deserunt vitae placeat eligendi, explicabo dolores enim quia cum fuga atque iusto velit sint nesciunt itaque dignissimos nisi dolorem quos!"
    },
    {
      id: 5,
      title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, quam?",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi eos numquam minus repellendus aliquam, nam recusandae dignissimos obcaecati velit, dolore commodi quod, pariatur explicabo placeat."
    },
    {
      id: 6,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, necessitatibus?",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente repellat dicta, vitae officia amet quia architecto consequatur rem iure et quo facilis ab asperiores voluptatibus doloribus? Ea obcaecati hic quod molestiae veniam quae, earum adipisci rerum id nostrum, est corrupti provident, illum quidem vel. A."
    },
    {
      id: 7,
      title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos ab delectus tempora!",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, eveniet neque molestias eaque earum eligendi explicabo dolorem non nesciunt, culpa esse autem ducimus itaque nam, placeat sed? Aperiam dignissimos odio itaque totam iusto et praesentium!"
    },
    {
      id: 8,
      title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, sequi.",
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo minus totam incidunt eaque porro fugit repellat dolorum fugiat provident dignissimos. Facere rerum velit quam quidem quibusdam id labore reiciendis minus veniam repudiandae libero, expedita laudantium odit veritatis, voluptatem omnis voluptatum?"
    },
    {
      id: 9,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, praesentium!",
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor placeat fugit, quo nesciunt consectetur veniam rerum quisquam? Sapiente esse praesentium nihil, expedita velit impedit corrupti accusamus iusto ut perferendis alias dignissimos magni voluptatibus nulla harum porro officiis. Magnam, officia reiciendis."
    },
    {
      id: 10,
      title: "President Trump's Plan to Protect Children from Left-Wing Gender Insanity",
      content: "President Trump today announced his plan to stop the chemical, physical, and emotional mutilation of our youth."
    },
    {
      id: 11,
      title: "President Trump's Plan to Save American Education and Give Power Back to Parents",
      content: "Our public schools have been taken over by the Radical Left Maniacs!"
    },
    {
      id: 12,
      title: "We Must Protect Medicare and Social Security",
      content: "Under no circumstances should Republicans vote to cut a single penny from Medicare or Social Security"
    },
    {
      id: 13,
      title: "President Trump Will Stop China From Owning America",
      content: "I will ensure America's future remains firmly in America's hands!"
    },
    {
      id: 14,
      title: "President Donald J. Trump Calls for Probe into Intelligence Community's Role in Online Censorship",
      content: "The 'Twitter Files' prove that we urgently need my plan to dismantle the illegal censorship regime — a regime like nobody's ever seen in the history of our country or most other countries for that matter,\" President Trump said."
    },
    {
      id: 15,
      title: "President Donald J. Trump — Free Speech Policy Initiative",
      content: "President Donald J. Trump announced a new policy initiative aimed to dismantle the censorship cartel and restore free speech."
    }
  ];

  return (
    <section id="news" className="news-section">
      {newsItems.map((item) => (
        <article key={item.id} className="news-card">
          <h3>{item.title}</h3>
          <p>{item.content}</p>
          <div className="social-share">
            <a href="#" className="social-icon">Facebook</a>
            <a href="#" className="social-icon">Twitter</a>
          </div>
        </article>
      ))}
    </section>
  );
};

export default NewsSection;