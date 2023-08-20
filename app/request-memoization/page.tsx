export default async function Page() {
  // call api 3st time
  try {
    await fetch("http://localhost:4040/api/test");
    console.log("call api 3st time");
  } catch {
    console.log('run "node test-server.js" in another terminal');
  }

  return (
    <section>
      <h1 className="text-xl mb-4">Server and browser console</h1>
      <p className="text-md mb-4">
        fetch called 3 times but only once network request happens
      </p>
      <p className="text-md mb-4">Steps to reproduce:</p>
      <p className="text-md mb-4">1. run `pnpm dev`</p>
      <p className="text-md mb-4">2. run `node test-server.js`</p>
      <p className="text-md mb-4">
        3. open `http://localhost:3000/request-memoization`
      </p>
      <p className="text-md mb-4">
        4. see `pnpm dev` console (3 console.logs) and `node test-server.js`
        console (1 console.log)
      </p>
    </section>
  );
}
