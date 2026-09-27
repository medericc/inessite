import { redirect } from "next/navigation";

import { createSupabaseServerClient } from "@/lib/supabase/server";
import { loginAdmin } from "./actions";

type AdminPageProps = {
  searchParams: Promise<{
    error?: string;
  }>;
};

export default async function AdminPage({
  searchParams,
}: AdminPageProps) {
  const supabase = await createSupabaseServerClient();

  const { data } = await supabase.auth.getClaims();

  const userId = data?.claims?.sub;

  // Déjà connecté en tant qu'admin
  if (
    userId &&
    process.env.ADMIN_USER_ID &&
    userId === process.env.ADMIN_USER_ID
  ) {
    redirect("/admin/reviews");
  }

  const params = await searchParams;

  let errorMessage = "";

  switch (params.error) {
    case "missing":
      errorMessage = "Entre ton email et ton mot de passe.";
      break;

    case "invalid":
      errorMessage = "Email ou mot de passe incorrect.";
      break;

    case "unauthorized":
      errorMessage = "Ce compte n'est pas autorisé à accéder à l'administration.";
      break;
  }

  return (
    <main className="min-h-screen bg-[#D8C3A5] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#F5EFE6] rounded-3xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-[#8C6D58]">
            ID RECOVERY
          </p>

          <h1 className="font-serif text-3xl font-bold text-[#5C3D2E] mt-2">
            Administration
          </h1>

          <p className="text-[#684735] mt-2">
            Connecte-toi pour gérer les avis.
          </p>
        </div>

        {errorMessage && (
          <div className="mb-5 rounded-2xl bg-red-100 text-red-700 px-4 py-3 text-sm">
            {errorMessage}
          </div>
        )}

        <form action={loginAdmin} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#5C3D2E] mb-2"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="w-full px-4 py-3 rounded-2xl border border-[#D8C3A5] bg-white focus:outline-none focus:ring-2 focus:ring-[#8C6D58]"
              placeholder="ton@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-[#5C3D2E] mb-2"
            >
              Mot de passe
            </label>

            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="w-full px-4 py-3 rounded-2xl border border-[#D8C3A5] bg-white focus:outline-none focus:ring-2 focus:ring-[#8C6D58]"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#5C3D2E] text-[#F5EFE6] py-3 rounded-full font-medium hover:bg-[#8C6D58] transition"
          >
            Se connecter
          </button>
        </form>
      </div>
    </main>
  );
}