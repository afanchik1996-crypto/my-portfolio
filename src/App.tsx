// src/App.tsx
import "./styles.css";
import { videos } from "./data/videos";

export default function App() {
  return (
    <div className="page">
      <div className="bg-orb orb-1" />
      <div className="bg-orb orb-2" />
      <div className="bg-grid" />

      <header className="header">
        <div className="logo">
          <span className="logo-dot" />
          Валерия Афанасьева
        </div>

        <nav className="nav">
          <a href="#about">Обо мне</a>
          <a href="#works">Работы</a>
          <a href="#contact">Контакты</a>
        </nav>

        <a className="header-btn" href="#contact">
          Обсудить проект
        </a>
      </header>

      <main>
        <section className="section section-first" id="about">
          <div className="about-card">
            <div className="about-text">
              <p className="section-kicker">Обо мне</p>
              <h2>Монтаж как инструмент внимания</h2>
              <p>
                Я собираю ролики так, чтобы зритель не просто смотрел, а
                чувствовал ритм, вовлекался и запоминал визуал. Работаю с
                рекламой, reels, shorts, lifestyle, promo и музыкальными видео.
              </p>
              <p>
                Мне важны современная подача, чистая композиция, акценты на
                эмоциях и ощущение премиального продукта.
              </p>
            </div>

            <div className="about-panel">
              <div className="about-mini-card">
                <span>Монтаж</span>
                <strong>Dynamic storytelling</strong>
              </div>
              <div className="about-mini-card">
                <span>Стиль</span>
                <strong>Bold • Clean • Cinematic</strong>
              </div>
              <div className="about-mini-card">
                <span>Форматы</span>
                <strong>Reels / Shorts / Ads / Music</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="works">
          <div className="section-head">
            <div>
              <p className="section-kicker">Портфолио</p>
              <h2>Мои работы</h2>
            </div>
            <p className="section-subtext">
              Подборка коротких роликов, клипов и визуальных монтажей для разных
              платформ.
            </p>
          </div>

          <div className="works-grid">
            {videos.map((video, index) => (
              <a
                className="work-card"
                href={video.videoUrl}
                key={index}
                target="_blank"
                rel="noreferrer"
              >
                <div className="work-image-wrap">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="work-image"
                  />
                  <div className="work-gradient" />

                  <div className="work-top">
                    <span className="chip">{video.platform}</span>
                    <span className="chip ghost">{video.duration}</span>
                  </div>

                  <div className="play-center">▶</div>
                </div>

                <div className="work-content">
                  <p className="work-category">{video.category}</p>
                  <h3>{video.title}</h3>

                  <div className="work-meta">
                    <span>{video.views} views</span>
                    <span>Смотреть видео</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="section" id="contact">
          <div className="contact-box">
            <p className="section-kicker">Написать мне</p>
            <h2>Если заинтересовало ниже контакты</h2>
            <p>
              Если нужен монтаж, который выглядит современно, дорого и
              удерживает внимание — пиши.
            </p>

            <div className="contact-actions">
              <a className="btn btn-primary" href="mailto:yourmail@email.com">
                Написать на почту
              </a>
              <a
                className="btn btn-secondary"
                href="https://t.me/"
                target="_blank"
                rel="noreferrer"
              >
                Telegram
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
