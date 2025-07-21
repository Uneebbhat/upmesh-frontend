"use client";

import useTogglePassword from "@/hooks/useTogglePassword";
import PasswordResetSuccess from "./PasswordResetSuccess";
import useResetPassword from "@/hooks/api/useResetPassword";

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

export function ResetPasswordForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { togglePassword, handleTogglePassword } = useTogglePassword();
  const { loading, success, formData, handleOnChange, handleOnSubmit } =
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
                <Label htmlFor="newPassword">Password</Label>
                <div className="relative">
                  <Input
                    id="newPassword"
                    type={togglePassword ? "text" : "password"}
                    name="newPassword"
                    value={formData.newPassword}
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
                disabled={loading || !formData.newPassword}
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
