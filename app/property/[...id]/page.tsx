"use client";
import {
  useRouter,
  useParams,
  useSearchParams,
  usePathname,
} from "next/navigation";

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { id } = useParams();
  const name = searchParams.get("name");

  return (
    <div>
      <button onClick={() => router.push("/")} className="bg-blue-200 p-2">
        Go Home
      </button>
      <div>
        Property {id} name: {name}
      </div>
      <div>{pathname}</div>
    </div>
  );
};

export default Page;
