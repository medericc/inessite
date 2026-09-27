"use server";

import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function loginAdmin(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!email || !password) {
    redirect("/admin?error=missing");
  }

  const supabase = await createSupabaseServerClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error("Erreur connexion admin :", error);
    redirect("/admin?error=invalid");
  }

  // On vérifie immédiatement que ce compte est bien l'admin
  const { data, error: claimsError } = await supabase.auth.getClaims();

  const userId = data?.claims?.sub;

  if (
    claimsError ||
    !userId ||
    !process.env.ADMIN_USER_ID ||
    userId !== process.env.ADMIN_USER_ID
  ) {
    await supabase.auth.signOut();
    redirect("/admin?error=unauthorized");
  }

  redirect("/admin/reviews");
}

export async function logoutAdmin() {
  const supabase = await createSupabaseServerClient();

  await supabase.auth.signOut();

  redirect("/admin");
}