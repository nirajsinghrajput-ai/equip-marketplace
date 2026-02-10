export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-10">
      <h1 className="text-4xl font-bold mb-4">
        Thank You! 🎉
      </h1>

      <p className="text-lg mb-6">
        Your requirement has been received.
        Our team will connect you with suppliers shortly.
      </p>

      <a 
        href="/" 
        className="bg-black text-white px-6 py-3 rounded"
      >
        Back to Home
      </a>
    </div>
  )
}
