"use client";

import { Button } from "@/components/ui/button";
import Loader from "@/components/ui/global/Loader";
import { Input } from "@/components/ui/input";
import { PageContainer } from "@/components/ui/page-container";
import { ServiceTag } from "@/components/ui/service-tag";
import { Textarea } from "@/components/ui/textarea";
import { useStepper } from "@/contexts/SignUpData";
import { UserRole } from "@/types/user";
import {} from "@clerk/nextjs";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CreateProfile() {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Cleaning",
  ]);

  const { setStepData, setCurrentStep, stepData } = useStepper();
  const searchParams = useSearchParams();
  const role = searchParams.get("role");
  const navigate = useRouter();

  if (role === undefined) {
    return <Loader />; // or your custom spinner
  }

  useEffect(() => {
    if (role === undefined) return;
    if (!role || !["client","tasker"].includes(role)){
      navigate.push("/select-role");
    }
  }, [stepData.role, role, navigate]);

  const [bio, setBio] = useState("");

  const services = ["Cleaning", "Shopping", "Mount TV", "Plumbing"];

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  return (
    <main className="min-h-screen w-full flex flex-col justify-center">
      <PageContainer maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-start mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">
            Welcome to <span className="text-green-light">Handy</span> Link
          </h1>
          <p className="text-grey">Finish setting up your profile</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          {role === "tasker" && <div className="flex flex-wrap gap-3 mb-6">
            {services.map((service) => (
              <ServiceTag
                key={service}
                label={service}
                selected={selectedServices.includes(service)}
                onClick={() => toggleService(service)}
              />
            ))}
          </div>}
          <Input
            label="phone number"
            placeholder="e.g. +12333546789"
          />
          <Textarea
            label="About Me"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Tell us a bit about yourself..."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button
            variant="primary"
            fullWidth
            onClick={() => {
              setStepData({ about: bio, categories: selectedServices, role:role as UserRole});
              setCurrentStep(3);
              //TODO: Register user
              navigate.push("/")
            }}
          >
            Finish Setup
          </Button>
        </motion.div>
      </PageContainer>
    </main>
  );
}
