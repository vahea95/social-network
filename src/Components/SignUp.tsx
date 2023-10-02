import { useState } from "react";
import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, provider } from "../firebase";

export const SignUp = (): any => {
  const [name, setName] = useState("");
  const [surname, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // @ts-ignore
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
      console.log(user);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
      console.log(user);
    } catch (error: any) {
      const errorMessage = error.message;
    }
  };

  return (
    <div className="w-full flex justify-center items-center h-[100vh]">
      <div className="flex flex-col w-[400px] p-4 rounded shadow-lg">
        <h1 className="mb-8 text-3xl text-center">Create a new account</h1>
        <button
          className="px-4 py-3 mb-4 mx-3 border flex justify-center gap-2 border-slate-200 rounded-lg text-white bg-blue-500 hover:border-slate-400 hover:text-slate-100 hover:shadow transition duration-150"
          onClick={handleGoogleSignUp}
        >
          <img
            className="w-6 h-6 bg-white rounded p-1"
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            loading="lazy"
            alt="google logo"
          />
          <span>Sign Up with Google</span>
        </button>
        <div>
          <form>
            <div className="flex flex-col justify-around">
              <label>Name</label>
              <input
                type="text"
                placeholder="Name"
                className="p-2 m-2 rounded border-inherit border-2"
              />
              <label>Surname</label>
              <input
                type="text"
                placeholder="Surname"
                className="p-2 m-2 rounded border-inherit border-2"
              />
              <label>Email</label>
              <input
                type="email"
                placeholder="Email"
                className="p-2 m-2 rounded border-inherit border-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                className="p-2 m-2 rounded border-inherit border-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="flex justify-center mt-2">
                <p>
                  Already have an account?
                  <a className="text-blue-600" href="/signIn">
                    Login
                  </a>
                </p>
              </div>
              <button
                className="px-4 py-3 mt-12 mb-2 mx-2 border flex justify-center gap-2 bg-blue-500 border-slate-200 rounded-lg text-white hover:border-slate-400 hover:text-slate-100 hover:shadow transition duration-150"
                onClick={handleSignUp}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
