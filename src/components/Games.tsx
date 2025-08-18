import ProjectsGames from "./ProjectsGame";

function Games() {
  return (
    <div className="w-full  text-white min-h-screen">
      <div className="container mx-auto px-14 sm:px-6 lg:px-14 py-6 flex flex-col items-center justify-center">
        {/* Heading */}
        <div>
          <h2 className="text-center text-4xl sm:text-5xl mb-12 font-extrabold tracking-wider text-white drop-shadow-lg">
            ABOUT US
          </h2>
        </div>

        {/* Projects Section */}
        <ProjectsGames />
      </div>
    </div>
  );
}

export default Games;
