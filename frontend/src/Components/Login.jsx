import React from "react";

export const Login = () => {
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-center text-3xl">Login</h3>
          <div>
            <h6 className="py-4">Email</h6>
            <input
              type="text"
              placeholder="mail@gmail.com"
              className="w-full border rounded-sm py-1.5 px-2"
            />
          </div>
          <div>
            <p className="py-4">Password</p>
            <input
              type="text"
              placeholder="Enter password"
              className="w-full border rounded-sm py-1.5 px-2"
            />
          </div>
          <button className="border-none rounded-sm py-2 px-6 mt-6 mb-4 bg-blue-600 text-white">
            Login
          </button>
          <p>
            Not registered?{" "}
            <a href="/signup" className="text-blue-600">
              Register Now!
            </a>
          </p>
        </div>
      </dialog>
    </div>
  );
};
