import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";

import { db } from "@/db";
import { usersToClinicsTable } from "@/db/schema";
import { auth } from "@/lib/auth";

import SignOutButton from "./components/sign-out-button";

const DashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/authentication");
  }

  const clinics = await db.query.usersToClinicsTable.findMany({
    where: eq(usersToClinicsTable.userId, session.user.id),
  });

  if (clinics.length === 0) {
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
      <pre>{JSON.stringify(clinics, null, 2)}</pre>
      <SignOutButton />
    </div>
  );
};

export default DashboardPage;
