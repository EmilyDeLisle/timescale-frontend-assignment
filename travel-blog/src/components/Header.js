export const Header = ({ title, subheading, buttons }) => {

  return (
    <div className="header-footer header-footer--light">
      <div className="content">
        <div>
          <h2>{title}</h2>
          <p><em>{subheading}</em></p>
        </div>
        <div className="buttons">
          {buttons.map((button) => {
            const { label, active } = button;
            return (
              <button className={`button ${!!active ? 'button--state-active' : ''}`}>
                {label}
              </button>
            )
            })}
        </div>
      </div>
    </div>
  )
}