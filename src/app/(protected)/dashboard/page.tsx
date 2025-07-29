import { headers } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

import SignOutButton from "./_components/sign-out-button";

const DashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/authentication");
  }

  if (!session.user.clinic) {
    redirect("/clinic-form");
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <br />
      <Image
        src={session.user.image ?? ""}
        alt={session.user.name ?? ""}
        width={100}
        height={100}
      />
      <br />
      <pre>{JSON.stringify(session.user.clinic, null, 2)}</pre>
      <SignOutButton />
    </div>
  );
};

export default DashboardPage;
