"use client";

import useForgotPassword from "@/hooks/api/useForgotPassword";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
// import useForgotPassword from "@/hooks/api/useForgotPassword";

export function ForgotPasswordForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { formData, loading, handleOnChange, handleOnSubmit } =
    useForgotPassword();

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Reset your password</CardTitle>
          <CardDescription>
            Enter your email address below and we&apos;ll send you instructions
            to reset your password.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleOnSubmit}>
            <div className="flex flex-col gap-6">
              {/* Email */}
              <div className="grid gap-1.5">
                <Label htmlFor="email">Email address</Label>
                <p className="text-xs text-muted-foreground -mt-1">
                  Please use your official university email.
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

              {/* Reset Submit Button */}
              <Button
                type="submit"
                className="w-full"
                disabled={loading || !formData.email}
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" />
                    Send email
                  </>
                ) : (
                  "Send email"
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
