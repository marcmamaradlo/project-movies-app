import { useContext } from "react";
import { MyContext } from "../../context";

const ServerButtons = () => {
  const context = useContext(MyContext);
  const state = context.state;
  const handleServerButton = context.handleServerButton;
  const serverButtonID = state.serverButtonID;
  const dynamicPageData = state.dynamicPageData;
  const serverButtonName = ["server01", "server02", "server03", "server04"];

  const displayServerButtons = () => {
    return serverButtonName.map((item, index) => (
      <button
        key={index}
        className={
          serverButtonID === item
            ? "server-button-active"
            : "server-button-default"
        }
        onClick={handleServerButton}
        id={item}
      >
        {`Server ${index + 1}`}
      </button>
    ));
  };
  return (
    <div className="container bg-dark">
      <div
        className={
          dynamicPageData === "watchNow"
            ? "dynamic-server-button-container"
            : "display-none"
        }
      >
        {displayServerButtons()}
      </div>
    </div>
  );
};

export default ServerButtons;
