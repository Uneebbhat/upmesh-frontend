"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Eye, EyeClosed, Loader2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import useSignup from "@/hooks/api/useSignup";
import { ShineBorder } from "./magicui/shine-border";
import useTogglePassword from "@/hooks/useTogglePassword";
import { Role } from "@/interfaces/User";

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { togglePassword, handleTogglePassword } = useTogglePassword();
  const {
    formData,
    loading,
    handleOnChange,
    handleOnFileChange,
    handleOnSubmit,
    setFormData,
  } = useSignup();

  const [step, setStep] = useState<1 | 2>(1);

  const goToStepTwo = () => setStep(2);
  const goBack = () => setStep(1);

  return (
    <div className={cn("w-full max-w-xl mx-auto", className)} {...props}>
      <Card className="relative overflow-hidden">
        <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-foreground">
            Create your account
          </CardTitle>
          <CardDescription>
            {step === 1
              ? "Enter your personal information to get started."
              : "Select your primary role in the platform."}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {step === 1 && (
            <>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  goToStepTwo();
                }}
                className="space-y-4"
              >
                {/* Profile Pic */}
                <div className="grid gap-1.5">
                  <Label htmlFor="profilePic">Profile Picture</Label>
                  <Input
                    id="profilePic"
                    type="file"
                    name="profilePic"
                    onChange={handleOnFileChange}
                    accept="image/*"
                  />
                </div>

                {/* Username */}
                <div className="grid gap-1.5">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleOnChange}
                    placeholder="John Doe"
                    required
                  />
                </div>

                {/* Email */}
                <div className="grid gap-1.5">
                  <Label htmlFor="email">University Email</Label>
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
                <div className="grid gap-1.5">
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
                      className="absolute top-2 right-2 cursor-pointer text-muted-foreground"
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

                <Button className="w-full mt-4" type="submit">
                  Continue
                </Button>
              </form>
            </>
          )}

          {step === 2 && (
            <form onSubmit={handleOnSubmit} className="space-y-6">
              {/* Back button */}
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="flex items-center gap-2"
                onClick={goBack}
              >
                <ArrowLeft size={16} />
                Back
              </Button>

              {/* Role Selection */}
              {/* Role Selection */}
              <div className="grid gap-1.5">
                <Label>Select your role</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                  {Object.entries(Role).map(([key, value]) => (
                    <label
                      key={key}
                      className={cn(
                        "cursor-pointer border rounded-lg p-3 text-sm text-center capitalize transition",
                        formData.role === value
                          ? "bg-primary text-white border-primary"
                          : "hover:bg-muted"
                      )}
                    >
                      <Input
                        type="radio"
                        name="role"
                        value={value}
                        className="hidden"
                        checked={formData.role === value}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            role: e.target.value as Role.developer,
                            otherRole:
                              e.target.value !== Role.other
                                ? ""
                                : prev.otherRole,
                          }))
                        }
                        required
                      />
                      {value}
                    </label>
                  ))}
                </div>
              </div>

              {/* Conditional Input for "Other" */}
              {formData.role === (Role.other as string) && (
                <div className="grid gap-1.5 mt-4">
                  <Label htmlFor="otherRole">Specify your role</Label>
                  <Input
                    id="otherRole"
                    name="otherRole"
                    placeholder="e.g. Research Assistant, Technical Writer"
                    value={
                      typeof formData.otherRole === "string"
                        ? formData.otherRole
                        : ""
                    }
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        otherRole: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
              )}

              {/* Submit */}
              <Button
                type="submit"
                className="w-full"
                disabled={loading || !formData.role}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sign Up
                  </>
                ) : (
                  "Sign Up"
                )}
              </Button>
            </form>
          )}

          <div className="mt-6 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline underline-offset-4">
              Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
