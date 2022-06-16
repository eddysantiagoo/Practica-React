import styles from "./MovieDetails.module.css"

export default function Footer() {
  return (
    <div className={styles.footer}>
      <ul>
        <li>
          <a href="https://twitter.com/eddysantiagooo" target="_blank">
            Twitter
          </a>
        </li>
        <li>
          <a href="https://github.com/eddysantiagoo" target="_blank">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://instagram.com/santi.xoo" target="_blank">
            Instagram
          </a>
        </li>
        <li>
          <a href="https://open.spotify.com/user/s4ntiag00" target="_blank">
            Spotify
          </a>
        </li>
        <li>
          <p>👋</p>
        </li>
      </ul>
    </div>
  );
}
