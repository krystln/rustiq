import { auth } from "@/auth";
import type { Session } from "next-auth";
import { useEffect, useState } from "react";

const useSession = () => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    async function fetchSession() {
      // "use server"; is needed here
      setSession(await auth());
    }
    fetchSession();
  }, []);

  return session;
};

export { useSession };
