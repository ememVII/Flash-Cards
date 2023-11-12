import FlashCards from "./Components/FlashCards";

function App() {
  return (
    <>
      <div className=" flex justify-center items-center">
        <div className="my-32 px-20">
          <FlashCards />
        </div>
      </div>

      <h3 className="attribution fixed bottom-0 w-full bg-[#2dc5f4] text-center text-base ">
        Coded by &copy;{" "}
        <span className="text-lg font-medium">Mahmoud Magdy</span> |{" "}
        <a href="https://github.com/ememVII" target="_blank">
          👉🏻 Github
        </a>
      </h3>
    </>
  );
}

export default App;
