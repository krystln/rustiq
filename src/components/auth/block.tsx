import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { GithubSignIn, GoogleSignIn } from "./third-party-auth";
import { Separator } from "../ui/separator";
import { LoginForm, RegisterForm } from "./auth-forms";

const AuthForm = ({ register }: { register?: boolean }) => {
  return (
    <Tabs
      defaultValue={!register ? "login" : "register"}
      // defaultValue="login"
      className="w-1/4"
    >
      <TabsList className="w-full bg-gray-950">
        <TabsTrigger className="w-full" value="login">
          Login
        </TabsTrigger>
        <TabsTrigger className="w-full" value="register">
          Register
        </TabsTrigger>
      </TabsList>
      <div className="my-2 rounded-md border p-4">
        <TabsContent value="login" className="flex flex-col items-center">
          <div className="flex w-full grow gap-2">
            {/* <ThirdParty /> */}
            <GoogleSignIn />
            <GithubSignIn />
          </div>
          <div className="my-3.5 flex w-full items-center gap-2">
            <Separator className="shrink" />
            <p className="whitespace-nowrap text-sm text-gray-500">
              or with email
            </p>
            <Separator className="shrink" />
          </div>
          <LoginForm />
        </TabsContent>
        <TabsContent value="register">
          <RegisterForm />
        </TabsContent>
      </div>
    </Tabs>
  );
};

export default AuthForm;
