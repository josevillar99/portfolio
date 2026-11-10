import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        <span className="footer__code">{'// '}</span>
        hecho con React · {new Date().getFullYear()}
      </p>
    </footer>
  )
}
