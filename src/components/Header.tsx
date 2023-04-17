import style from "./Header.module.css";
import igniteLogo from "/src/assets/ignite-logo.svg";

export function Header() {
  return (
    <header className={style.header}>
      <img src={igniteLogo} alt="Logotipo do Ignite" />
      <h1>Ignite Feed</h1>
    </header>
  );
}
