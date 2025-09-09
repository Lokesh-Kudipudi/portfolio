import Label from "../Components/Label";
import { useDarkModeContext } from "../context/DarkModeProvider";

function AboutMe() {
  const { darkMode } = useDarkModeContext();

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div
        className={`rounded-lg p-6 shadow-lg ${darkMode ? "text-white" : "bg-white"}`}
      >
        {/* Education Section */}
        <div className="mb-8">
          <h2
            className={`mb-6 text-3xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}
          >
            Education
          </h2>
          <div className="space-y-4">
            <div
              className={`flex space-x-2 rounded-lg p-4 ${darkMode ? "" : "bg-gray-50"}`}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gray-300">
                {/* Placeholder for logo */}
                <img
                  src="college.webp"
                  className="rounded"
                  alt="College Logos"
                ></img>
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  Indian Institute of Information Technology Sri City
                </h3>
                <p className="text-lg">
                  B.Tech in Computer Science and Engineering
                </p>
                <p className="font-semibold text-green-500">CGPA: 9.13</p>
              </div>
            </div>
          </div>
        </div>

        {/* Positions of Responsibility Section */}
        <div>
          <h2
            className={`mb-6 text-3xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}
          >
            Positions of Responsibility
          </h2>
          <div className="space-y-4">
            <div className={`rounded-lg p-4 ${darkMode ? "" : "bg-gray-50"}`}>
              <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gray-300">
                  {/* Placeholder for logo */}
                  <img
                    src="epoch_logo.webp"
                    className="rounded"
                    alt="Epoch Logo"
                  ></img>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    Epoch The AIML Club Lead
                  </h3>
                  <p className="text-gray-500">August 2025 - Present</p>
                  <p className="mt-2">
                    Leading the Artificial Intelligence and Machine Learning
                    club activities and initiatives.
                  </p>
                </div>
              </div>
            </div>

            <div className={`rounded-lg p-4 ${darkMode ? "" : "bg-gray-50"}`}>
              <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gray-300">
                  {/* Placeholder for logo */}
                  <img
                    src="epoch_logo.webp"
                    className="rounded"
                    alt="Epoch Logo"
                  ></img>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    Epoch The AIML Club NLP Domain Core
                  </h3>
                  <p className="text-gray-500">August 2024 - April 2025</p>
                  <p className="mt-2">
                    Led the Natural Language Processing domain initiatives and
                    mentored club members.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
