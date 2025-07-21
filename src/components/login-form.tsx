"use client";

import Link from "next/link";
import useLogin from "@/hooks/api/useLogin";
import useTogglePassword from "@/hooks/useTogglePassword";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Eye, EyeClosed, Loader2 } from "lucide-react";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { togglePassword, handleTogglePassword } = useTogglePassword();
  const { loading, formData, handleOnChange, handleOnSubmit } = useLogin();

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleOnSubmit}>
            <div className="flex flex-col gap-6">
              {/* Email */}
              <div className="grid gap-1.5">
                <Label htmlFor="email">Email</Label>
                <p className="text-xs text-muted-foreground -mt-1">
                  Use your official university email
                </p>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleOnChange}
                  placeholder="johndoe@umt.edu.pk"
                  required
                />
              </div>

              {/* Password */}
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="/forgot-password"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={togglePassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleOnChange}
                    placeholder="••••••••"
                    required
                  />
                  <div
                    className="absolute top-2 right-2 cursor-pointer"
                    onClick={handleTogglePassword}
                  >
                    {togglePassword ? (
                      <EyeClosed size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </div>
                </div>
              </div>

              {/* Login Submit Button */}
              <Button
                type="submit"
                className="w-full"
                disabled={loading || !formData.email || !formData.password}
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" />
                    Login
                  </>
                ) : (
                  "Login"
                )}
              </Button>
            </div>

            {/* Don't have an account */}
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="underline underline-offset-4">
                Sign up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
