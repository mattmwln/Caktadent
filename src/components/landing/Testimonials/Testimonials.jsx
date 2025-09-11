import './Testimonials.css';

const Testimonials = () => {
  const tweets = [
    {
      id: 1,
      avatar: 'https://pbs.twimg.com/profile_images/1794450494686932992/wqRqF4dt_400x400.jpg',
      text: 'Caktadent memberi kami peluang kerja baru dari rumah, sekaligus rasa bangga karena ikut menjaga lingkungan.',
      handle: 'ibu-ibu pkk',
      url: 'https://x.com/makwanadeepam/status/1879416558461890864'
    },
    {
      id: 2,
      avatar: 'https://pbs.twimg.com/profile_images/1918646280223608832/nqBF4zh__400x400.jpg',
      text: 'Melalui Caktadent, kami belajar bahwa inovasi bisa lahir dari limbah sederhana.',
      handle: 'pelajar lokal',
      url: 'https://x.com/syskey_dmg/status/1929762648922398754'
    },
    
  ];

  const row1Tweets = tweets.slice(0, 3);
  const row2Tweets = tweets.slice(3, 6);
  const row3Tweets = tweets.slice(6, 9);

  const TweetCard = ({ tweet }) => (
    <div className="testimonial-card" onClick={() => window.open(tweet.url, '_blank')}>
      <div className="testimonial-content">
        <p className="testimonial-text">{tweet.text}</p>
        <div className="testimonial-author">
          <img src={tweet.avatar} alt="Avatar" className="testimonial-avatar" />
          <span className="testimonial-handle">{tweet.handle}</span>
        </div>
      </div>
    </div>
  );

  const MarqueeRow = ({ tweets, direction = 'left', speed = 30 }) => {
    const duplicatedTweets = [...tweets, ...tweets, ...tweets, ...tweets];

    return (
      <div className="testimonial-row">
        <div className={`testimonial-marquee testimonial-marquee-${direction}`} style={{ '--speed': `${speed}s` }}>
          {duplicatedTweets.map((tweet, index) => (
            <TweetCard key={`${tweet.id}-${index}`} tweet={tweet} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h3 className="testimonials-title">Testimoni</h3>
          <p className="testimonials-subtitle">Apa kata mereka tentang Caktadent?</p>
        </div>

        <div className="testimonials-marquee-container">
          <MarqueeRow tweets={row1Tweets} direction="left" speed={40} />
          <MarqueeRow tweets={row2Tweets} direction="right" speed={35} />
          <MarqueeRow tweets={row3Tweets} direction="left" speed={45} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
