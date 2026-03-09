const highlights = [
  {
    title: 'Premium Cleaning',
    description: 'Scheduled doorstep cleaning for cars and bikes with trained professionals.',
  },
  {
    title: 'Owner Community',
    description: 'A calm and trusted space where owners share tips, routes, and recommendations.',
  },
  {
    title: 'Ownership Support',
    description: 'Get help with routine care, reminders, and service guidance in one place.',
  },
]

export default function App() {
  return (
    <main className="page">
      <section className="hero card">
        <p className="tag">Introducing Qruze</p>
        <h1>Cool, trusted care for every car and bike owner.</h1>
        <p className="subtitle">
          Qruze brings premium cleaning, practical ownership support, and a vibrant rider community
          into one lightweight platform.
        </p>
        <div className="actions">
          <button type="button">Get Early Access</button>
          <a href="#learn-more">Learn More</a>
        </div>
      </section>

      <section id="learn-more" className="features">
        {highlights.map((item) => (
          <article key={item.title} className="card feature">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
