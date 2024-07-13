import BluskiLogo from "./bluskiLogo"
import BulletServices from "./bulletServices"

function HomePage() {
  return (
    <>
      <div className="top-logo">
        <BluskiLogo />
      </div>
      <div className="bullet-services">
        <BulletServices />
      </div>
    </>
  );
}

export default HomePage;
