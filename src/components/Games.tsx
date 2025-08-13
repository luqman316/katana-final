import ProjectsGames from "./ProjectsGame";

function Games() {
  return (
    <div className="w-full  text-white min-h-screen">
      <div className="container mx-auto px-14 sm:px-6 lg:px-14 py-6 flex flex-col items-center justify-center">
        {/* Heading */}
        <div>
            <h1 className="text-5xl font-medium uppercase text-center mb-14">Projects</h1>
          </div>

        {/* Projects Section */}
        <ProjectsGames />
      </div>
    </div>
  );
}

export default Games;
