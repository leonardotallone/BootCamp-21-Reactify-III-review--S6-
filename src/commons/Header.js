import Buttons from "../components/Buttons";

const Header = ({ images, name, description, type }) => {
  return (
    <header className="has-background-primary-dark p-5 has-text-white">
      <div className="is-flex is-justify-content-space-between">
        <p className="is-size-5">{type}</p>
        {type === "Playlists" ? <Buttons /> : null}
      </div>
      <div className="is-flex">
        <img
          src={images[0] ? images[0].url : "https://i.imgur.com/M1wbKOT.jpg"}
          alt=""
          style={{ width: "256px", height: "256px" }}
        />
        <div className="p-4 is-flex is-flex-direction-column is-justify-content-space-around">
          <p className="is-size-1">{name}</p>
          <p>{description}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
