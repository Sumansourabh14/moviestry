import LoadingBtn from "@/components/Buttons/LoadingBtn";
import PageTitle from "@/components/pageComponents/PageTitle";
import Link from "next/link";

const Login = () => {
  return (
    <div className="px-6 py-10">
      <div className="custom-container">
        <div className="flex flex-col items-center">
          <PageTitle title="Login" />
          <div className="my-10">
            <form>
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="Enter email"
                      className="px-2 py-2 border-2 border-solid border-slate-800 rounded"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label>Password</label>
                    <input
                      type="password"
                      placeholder="Enter password"
                      className="px-2 py-2 border-2 border-solid border-slate-800 rounded"
                    />
                  </div>
                </div>
                <LoadingBtn title="Login" />
              </div>
              <p className="mt-2 text-right">
                Don&apos;t have an account?{" "}
                <Link
                  href={`/signup`}
                  className="underline hover:underline-offset-4"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
