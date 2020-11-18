import { Body, Footer, Header } from './components'
import headshot from './images/headshot.jpg';
import heroBackground from './images/hero-background.jpg';
import { strings } from './strings'
import './App.scss';

const App = () => {
  const { home, blog, about } = strings.buttons
  const { privacyPolicy, termsAndConditions } = strings.links
  
  const headerButtons = [
    {
      label: home,
    },
    {
      label: blog,
    },
    {
      label: about,
      active: true
    }
  ]

  const footerLinks = [
    {
      label: privacyPolicy,
      href: '#privacy'
    },
    {
      label: termsAndConditions,
      href: '#terms'
    }
  ]

  const { content, footer } = strings.text

  return (
    <div className="app">
      <Header title='Travelize' subheading='My traveling experiences' buttons={headerButtons} />
      <Body heroBackground={heroBackground} headshot={headshot} heading='A little about me' content={content}>
        <Footer text={footer} links={footerLinks}/>
      </Body>
    </div>
  );
}

export default App;
