import { Body, Header } from './components'
import headshot from './images/headshot.jpg';
import heroBackground from './images/hero-background.jpg';
import { strings } from './strings'
import './App.scss';

const App = () => {

  const { home, blog, about } = strings.buttons
  const buttons = [
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

  return (
    <div className="app">
      <Header title='Travelize' subheading='My traveling experiences' buttons={buttons} />
      <Body heroBackground={heroBackground} headshot={headshot} heading='A little about me'/>
    </div>
  );
}

export default App;
