export default function Card2() {
  return (
    <>
      <div className="flex">
        <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md p-4">
          {/* <!-- Header --> */}
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 p-2 rounded-full">
              <svg
                className="w-6 h-6 text-blue-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {/* <!-- Example icon, you can replace this with any other --> */}
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              Response Title
            </h3>
          </div>

          {/* <!-- Message Body --> */}
          <div className="mt-3 text-gray-600">
            <p>
              This is the content of the response card. It provides users with
              important information or feedback about an action.
            </p>
          </div>

          {/* <!-- Footer --> */}
          <div className="mt-4 flex justify-end space-x-2">
            <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-200">
              Cancel
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
