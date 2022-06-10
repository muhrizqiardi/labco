import Logo from "../../components/Logo";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

function Login() {
  const router = useRouter();
  const { status } = useSession();

  console.log({ status });

  useEffect(() => {
    // redirect to home page if user has already logged in
    if (status === "authenticated") {
      window.location.href = "/";
    }
  }, [status]);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8  ">
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            const result = await signIn("credentials", {
              email: event.target.email.value,
              password: event.target.password.value,
              redirect: false,
            });
            if (!result.error) router.push("/");
          }}
          className="space-y-6"
        >
          <div className="flex items-center justify-center">
            <Logo />
          </div>
          <h5 className="text-xl font-medium text-gray-900 ">Masuk ke LABCO</h5>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5    "
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5    "
              required
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center   "
          >
            Masuk
          </button>
          <div className="text-sm font-medium text-gray-500 ">
            Tidak punya akun?{" "}
            <Link href="/signup">
              <a className="text-blue-700 hover:underline ">Buat akun</a>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
