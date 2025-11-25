import { GalleryVerticalEnd } from "lucide-react";
import { LoginForm } from "../../components/login/LoginForm";
export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium text-lg">
            <div className="text-primary-foreground flex size-20 items-center justify-center rounded-md">
              <img
                src="/src/assets/abfilogo.png"
                alt="ABFI Logo"
                className="size-20 object-contain"
              />
            </div>
            Ana's Breeders Farms, Inc.
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src="/src/assets/feedmill.jpg"
          alt="Farm Production"
          className="absolute inset-0 h-full w-full object-cover brightness-75 dark:brightness-50"
        />
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Farm Production Scale System
          </h1>
          <p className="text-2xl text-white/90 mb-12 max-w-3xl leading-relaxed">
            Advanced livestock management platform for modern farm operations
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
            <div className="text-center">
              <div className="bg-green-500/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Trip Management
              </h3>
              <p className="text-white/80">
                Track farm trips with complete chicken in/out counts
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-500/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Real-time Weighing
              </h3>
              <p className="text-white/80">
                Live scale data integration and monitoring
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
