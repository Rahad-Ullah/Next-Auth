import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      {session?.user && (
        <div>
          <h1 className="text-4xl text-center mt-10">
            Welcome {session?.user?.name} To Dashboard Page
          </h1>
          <h1 className="text-4xl text-center mt-10">
            Logged in user email: {session?.user?.email}
          </h1>
          <Image
            src={session?.user?.image as string}
            alt="user image"
            width={100}
            height={100}
            className="mx-auto rounded-full mt-10"
          />
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
