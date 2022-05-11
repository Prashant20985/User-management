import Head from "next/head";
import AddUser from "../components/AddUser";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import {getSession} from "next-auth/react"

export default function Home({session}) {
  if(!session) return <Login/>
  return (
    <div>
      <Head>
        <title>User Management</title>
      </Head>
      <Navbar/>
      <main>
        <AddUser />
      </main>
    </div>
  );
}


export async function getServerSideProps(context){
  const session = await getSession(context);
  return{
    props: {session},
  }
}