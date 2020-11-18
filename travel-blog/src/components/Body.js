export const Body = ({ heroBackground, headshot, heading, content, children }) => {

  const contentParagraphs = content.split('\n');

  return (
    <div className="body">
    <img className="hero" alt="Travelize background" src={heroBackground} />
    <div className="body__content">
      <div className="headshot__container">
        <img className="headshot" alt="Profile headshot" src={headshot} />
      </div>
      <div className="text-container">
        <h2>{heading}</h2>
        <div className="text">
          {contentParagraphs.map(paragraph => <p>{paragraph}</p>)}
        </div>
      </div>
    </div>
    {children}
</div>
  )
}