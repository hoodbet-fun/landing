import { roadmapSection, roadmapTracks } from '../content/manifesto.js'

const STATUS_LABEL = {
  live: 'Live',
  in_progress: 'In Progress',
  coming_soon: 'Coming Soon',
}

export function RoadmapSection() {
  const liveCount = roadmapTracks.reduce(
    (sum, track) => sum + track.items.filter((item) => item.status === 'live').length,
    0
  )
  const totalCount = roadmapTracks.reduce((sum, track) => sum + track.items.length, 0)

  return (
    <section className="section roadmap-section" id="roadmap">
      <p className="section-label">{roadmapSection.label}</p>
      <h2>{roadmapSection.title}</h2>
      <p className="roadmap-intro">{roadmapSection.body}</p>

      <div className="roadmap-pillars">
        {roadmapSection.pillars.map((pillar) => (
          <div key={pillar.label} className="roadmap-pillar">
            <strong>{pillar.label}</strong>
            <span>{pillar.text}</span>
          </div>
        ))}
      </div>

      <div className="roadmap-meta">
        <span className="roadmap-meta-stat">
          <strong>{liveCount}</strong> live
        </span>
        <span className="roadmap-meta-dot" aria-hidden>·</span>
        <span className="roadmap-meta-stat">
          <strong>{totalCount}</strong> products planned
        </span>
        <span className="roadmap-meta-dot" aria-hidden>·</span>
        <span className="roadmap-meta-note">{roadmapSection.inspiration}</span>
      </div>

      <div className="roadmap-tracks">
        {roadmapTracks.map((track) => (
          <div key={track.id} className="roadmap-track">
            <div className="roadmap-track-header">
              <h3>{track.label}</h3>
              <p>{track.description}</p>
            </div>

            <div className="roadmap-grid">
              {track.items.map((item) => (
                <article
                  key={item.name}
                  className={`roadmap-card roadmap-card-${item.status}`}
                >
                  <div className="roadmap-card-top">
                    <h4>{item.name}</h4>
                    <span className={`status ${item.status}`}>
                      {STATUS_LABEL[item.status]}
                    </span>
                  </div>

                  <span className="roadmap-quarter">{item.quarter}</span>
                  <p className="roadmap-tagline">{item.tagline}</p>

                  <ul className="roadmap-features">
                    {item.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>

                  {item.inspiredBy && (
                    <p className="roadmap-inspired">
                      <span>PT parallel</span> {item.inspiredBy}
                    </p>
                  )}

                  {item.href && (
                    <a
                      className="roadmap-card-link"
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    >
                      {item.linkLabel || 'Open →'}
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
