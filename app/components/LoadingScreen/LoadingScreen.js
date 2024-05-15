

export default function LoadingScreen() {
    return (
      <div className="loading-screen">
        <p>Loading...</p>
        <style jsx>{`
          .loading-screen {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: black;
            color: white;
            font-size: 2em;
          }
        `}</style>
      </div>
    );
  }
  