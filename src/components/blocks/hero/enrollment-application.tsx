"use client";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { ApplicationForm, EnrollmentForm } from "./enrollment-application-form";
import { Button } from "@/components/ui/button";

export default function EnrollmentApplicationForm() {
	const [enrolling, setEnrolling] = useState(true);

	return (
		<Card>
			<CardHeader>
				<CardTitle>Apply Today!</CardTitle>
			</CardHeader>
			<CardContent>
				{enrolling ? <EnrollmentForm /> : <ApplicationForm />}
			</CardContent>
			<CardFooter className="flex justify-center">
				<Button
					variant={"link"}
					type="button"
					onClick={() => setEnrolling(!enrolling)}
					className="text-center"
				>
					{enrolling
						? "Continue with your application"
						: "Back to new Enrollment"}
				</Button>
			</CardFooter>
		</Card>
	);
}
