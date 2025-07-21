"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useTogglePassword from "@/hooks/useTogglePassword";
import { Eye, EyeClosed, Loader2 } from "lucide-react";
import useResetPassword from "@/hooks/api/useResetPassword";
import PasswordResetSuccess from "./PasswordResetSuccess";

export function ResetPasswordForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { togglePassword, handleTogglePassword } = useTogglePassword();
  const { formData, loading, success, handleOnChange, handleOnSubmit } =
    useResetPassword();

  if (success) {
    return <PasswordResetSuccess />;
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Enter new password</CardTitle>
          <CardDescription>
            Enter your new password and login again
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleOnSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
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

              {/* Reset Submit Button */}
              <Button
                type="submit"
                className="w-full"
                disabled={loading || !formData.password}
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" />
                    Reset password
                  </>
                ) : (
                  "Reset password"
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
