import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "../../components/Logo";

function Signup() {
  const router = useRouter();

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8  ">
        <form
          className="space-y-6"
          onSubmit={(event) => {
            event.preventDefault();

            fetch("/api/auth/signup", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                fullName: event.target.fullName.value,
                email: event.target.email.value,
                password: event.target.password.value,
              }),
            }).then((res) => {
              if (res.status === 201) {
                router.push("/login");
              }
            });
          }}
        >
          <div className="flex items-center justify-center">
            <Logo />
          </div>
          <h5 className="text-xl font-medium text-gray-900 ">
            Membuat akun pada LABCO
          </h5>
          <div>
            <label
              htmlFor="fullName"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Nama lengkap
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5    "
              placeholder="Andi Budi Chandra"
              required
            />
          </div>
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
          <button className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center   ">
            Buat Akun
          </button>
          <div className="text-sm font-medium text-gray-500 ">
            Sudah punya akun?{" "}
            <Link href="/signup">
              <a className="text-blue-700 hover:underline ">
                Masuk menggunakan akun
              </a>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Signup;
