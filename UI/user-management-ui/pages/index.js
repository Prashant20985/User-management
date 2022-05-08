import Head from "next/head";
import AddUser from "../components/AddUser";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>User Management</title>
      </Head>
      <Navbar/>
      <main>
        <AddUser/>
      </main>
    </div>
  );
}
