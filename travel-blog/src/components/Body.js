import { Footer } from './Footer'

export const Body = ({ heroBackground, headshot, heading, text }) => {
  return (
    <div className="body">
    <img className="hero" alt="Travelize background" src={heroBackground} />
    <div className="body-content">
      <div className="headshot-container">
        <img className="headshot" alt="Profile headshot" src={headshot} />
      </div>
      <div className="text-container">
        <h2>{heading}</h2>
        <div className="text">
        Geodesic computer narrative physical free-market semiotics dome katana tank-traps youtube market monofilament. monofilament pre- human silent systema wristwatch hacker tiger-team realism A.I. pistol sub-orbital. geodesic 3D-printed -space BASE jump beef noodles Legba A.I. film courier katana engine artisanal. drugs franchise vinyl warehouse dome post- girl Legba bicycle digital computer singularity.

Refrigerator rain numinous girl A.I. rebar tank-traps dolphin DIY chrome saturation point face forwards. digital advert smart- katana wonton soup corrupted 8-bit corporation BASE jump long-chain hydrocarbons pistol free-market. silent geodesic Legba engine range-rover camera dead -ware alcohol nodal point neural skyscraper. towards uplink convenience store RAF pen futurity receding euro-pop boat military-grade sentient Kowloon.

Ware voodoo god bomb j-pop human military-grade assassin sentient -space rain kanji A.I.. plastic Shibuya dome beef noodles hacker dolphin sprawl face forwards cartel geodesic sub-orbital chrome. otaku DIY carbon monofilament 3D-printed kanji sensory order-flow euro-pop city math- cardboard. tank-traps knife papier-mache rebar math- tattoo sensory tube faded denim drone office.

City range-rover assassin free-market beef noodles media chrome BASE jump cardboard 3D-printed decay tattoo. shoes dolphin drugs nodal point silent corrupted car jeans corrupted denim realism construct. wristwatch network shrine bicycle youtube spook kanji courier -space denim saturation point hacker. denim skyscraper franchise monofilament hotdog vehicle drone sensory woman sensory knife Legba.
        </div>
      </div>
    </div>
    <Footer />
</div>
  )
}