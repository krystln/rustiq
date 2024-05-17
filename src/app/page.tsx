export default async function Home() {
  return (
    <main>
      <div className="flex flex-wrap items-center justify-center gap-12">
        <div>
          <h1 className="text-4xl font-bold">Hello, world!</h1>
          <p className="text-lg text-gray-600">
            This is a Next.js with Firebase template.
          </p>
        </div>
        <div>
          <img
            src="https://img.icons8.com/color/452/firebase.png"
            alt="Firebase"
            className="h-48 w-48"
          />
        </div>
      </div>
    </main>
  );
}
