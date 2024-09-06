import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div className="grid ">
      <h1 className={title()}>About</h1>
      <div className="text-center p-6">
        <h2 className="text-3xl font-bold mb-4 hover:text-green-700">PureJs</h2>
        <p className="text-lg mb-8"></p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center mx-40 ">
          <div className="bg-white rounded-lg p-6 max-w-xs transition-colors duration-300 hover:bg-green-500 mx-2 hover:scale-105 border border-gray-400 shadow-md">
            <div className="mb-3 ml-4  w-35 h-35 mx-auto">
              <img alt="Phuoc Thinh" src="/assets/images/thinh.png" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700">Phuoc Thinh</h3>
            <h4 className="text-sm text-gray-600">Head of SEO</h4>
            <p className="mt-4 text-sm text-gray-700">dev.....</p>
          </div>
          <div className="bg-white rounded-lg p-6 max-w-xs transition-colors duration-300 hover:bg-green-500 mx-2  hover:scale-105 border border-gray-400 shadow-md">
            <div className="mb-3 w-35 h-35 mx-auto pt-2">
              <img alt="Dang Quang" src="/assets/images/Wang.png" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700">Dang Quang</h3>
            <h4 className="text-sm text-gray-600">Head of SEO</h4>
            <p className="mt-4 text-sm text-gray-700">dev.....</p>
          </div>
          <div className="bg-white rounded-lg p-6 max-w-xs transition-colors duration-300 hover:bg-green-500 mx-2 hover:scale-105 border border-gray-400 shadow-md">
            <div className="mb-3 pt-5">
              <img alt="Hong Hanh" src="/assets/images/hanh.png" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700">Hong Hanh</h3>
            <h4 className="text-sm text-gray-600">Head of SEO</h4>
            <p className="mt-4 text-sm text-gray-700">dev.....</p>
          </div>
          <div className="bg-white rounded-lg p-6 max-w-xs transition-colors duration-300 hover:bg-green-500 mx-2 hover:scale-105 border border-gray-400 shadow-md">
            <div className="mb-3 w-35 h-35 mx-auto pt-2">
              <img alt="Xuan Hung" src="/assets/images/hung.png" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700">Xuan Hung</h3>
            <h4 className="text-sm text-gray-600">Head of SEO</h4>
            <p className="mt-4 text-sm text-gray-700">dev.....</p>
          </div>
        </div>
      </div>
    </div>
  );
}
