import headerStyles from "../styles/Header.module.css"

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Learn</span> Next
      </h1>
      <p className={headerStyles.description}>
        This is the first time that i start learning next js
      </p>
    </div>
  )
}

export default Header
