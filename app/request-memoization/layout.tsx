export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // call api 1st time
  try {
    await fetch("http://localhost:4040/api/test");
    console.log("call api 1st time");
  } catch {
    console.log('run "node test-server.js" in another terminal');
  }

  return <>{children}</>;
}
