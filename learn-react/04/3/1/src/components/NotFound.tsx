export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* 404 숫자 */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-indigo-600 mb-4">404</h1>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        {/* 메인 메시지 */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Sorry, we couldn't find it. Is it possible it was moved, renamed or
            deleted?
          </p>
        </div>

        {/* 액션 버튼들 */}
        <div className="space-y-4">
          <button
            onClick={() => window.history.back()}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Go Back
          </button>

          <button
            onClick={() => (window.location.href = "/")}
            className="w-full bg-white hover:bg-gray-50 text-indigo-600 font-medium py-3 px-6 rounded-lg border-2 border-indigo-600 transition-colors duration-200"
          >
            Go Home
          </button>
        </div>

        {/* 추가 정보 */}
        <div className="mt-8 text-sm text-gray-500">
          <p>If you believe this is an error, please contact support.</p>
        </div>
      </div>
    </div>
  );
}
