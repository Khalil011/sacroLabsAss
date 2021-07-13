import "./styles.css";
import LandingPage from "./components/LandingPage";
import Settings from "./components/Settings";

export default function App() {
  const text1 =
    "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

  const listItems = [
    "Lorem ipsum dolor sit amet, consectetur",
    "Lorem ipsum dolor sit amet, consectetur",
    "Lorem ipsum dolor sit amet, consectetur",
    "Lorem ipsum dolor sit amet, consectetur",
    "Lorem ipsum dolor sit amet, consectetur"
  ];
  const text2 = listItems.map((list) => {
    return (
      <p style={{ textAlign: "center" }}>
        <i
          className="check icon"
          style={{ color: "orange", width: "25px" }}
        ></i>
        {list}
      </p>
    );
  });
  const heading1 = "How does it works?";
  const heading2 = "Benefits of ARCUS SPM";
  return (
    <div className="App">
      <Settings />
      <LandingPage text={text1} heading={heading1} buttonText="VIEW DEMO" />
      <LandingPage
        text={text2}
        heading={heading2}
        buttonText="DOWNLOAD FACTS"
      />
    </div>
  );
}
