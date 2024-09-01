import "./globals.css";
import ImageSlider from "./lib/components/ImageSlider";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <main className="flex flex-col items-center p-6 bg-gray-800">
        <div className="flex max-w-5xl w-full mb-12">
          {/* LEFT */}
          <div className="w-1/2 pr-4">
            <div className="border-4 border-gray-700 rounded-lg overflow-hidden">
              <ImageSlider />
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-1/2 pl-4 flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-orange-500">
              NEXTLEVEL FOOD FOR NEXTLEVEL FOODIES
            </h2>
            <p className="text-lg mt-4 text-gray-300">
              Taste & share food from all over the world.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="#"
                className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 text-lg"
              >
                Join the Community
              </a>
              <a
                href="#"
                className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 text-lg"
              >
                Explore Meals
              </a>
            </div>
          </div>
        </div>

        {/* بخش "How It Works" */}
        <div className="w-full bg-gray-700 p-8 rounded-lg shadow-lg mt-12">
          <h3 className="text-3xl font-bold text-center text-orange-400 mb-6">
            How It Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-orange-500 p-4 rounded-full mb-4 animate-bounce">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888847.png"
                  alt="Upload"
                  className="h-16 w-16"
                />
              </div>
              <h4 className="text-xl font-bold mb-2">Step 1</h4>
              <p className="text-center text-gray-300">
                Upload your meal photo and details.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-orange-500 p-4 rounded-full mb-4 animate-bounce delay-150">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3050/3050312.png"
                  alt="Share"
                  className="h-16 w-16"
                />
              </div>
              <h4 className="text-xl font-bold mb-2">Step 2</h4>
              <p className="text-center text-gray-300">
                Share it with the community.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-orange-500 p-4 rounded-full mb-4 animate-bounce delay-300">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2921/2921821.png"
                  alt="Enjoy"
                  className="h-16 w-16"
                />
              </div>
              <h4 className="text-xl font-bold mb-2">Step 3</h4>
              <p className="text-center text-gray-300">
                Enjoy meals shared by others.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
