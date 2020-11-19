export const Footer = ({ text, links }) => {
  return (
    <div className="header-footer header-footer--dark">
      <div className="content">
        <span>{text}</span>
        <div className="footer__links">
          {!!links &&
            links.map((link) => {
              const { label, href } = link;
              return (
                <a alt={label} href={href}>
                  {label}
                </a>
              );
            })}
        </div>
      </div>
    </div>
  );
};
