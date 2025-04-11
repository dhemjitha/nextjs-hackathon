"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/ui/global/Navbar";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const roles = [
  {
    id: "client",
    title: "I'm a Client",
    description:
      "I need help with tasks. Hire trusted taskers for cleaning, plumbing, shopping, painting, and more.",
  },
  {
    id: "tasker",
    title: "I'm a Tasker",
    description:
      "I want to offer my services. Find clients and get paid for helping with everyday tasks.",
  },
];

const headerContent = {
  title: "How would you like to use our",
  subtitle: "Finish setting up your profile",
};

export default function SelectRole() {
  const [selectedRole, setSelectedRole] = useState<"client" | "tasker" | null>(
    null
  );

  return (
    <main className="min-h-screen w-full flex flex-col ">
      <Navbar />
      <div className="max-w-[643px] mx-auto border p-[40px] border-[#FFFFFF0D]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-start mb-8 text-3xl"
        >
          <h1 className=" font-passionOne  text-[#292929] whitespace-nowrap font-bold mb-2">
            {headerContent.title}
            <span>Handy</span>
            <span className="text-green-light">
             Link?
            </span>
          </h1>
          <p className="text-gray-600 text-sm text-grey">
            {headerContent.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          {roles.map((role) => (
            <Card
              key={role.id}
              onClick={() => setSelectedRole(role.id as "client" | "tasker")}
              selected={selectedRole === role.id}
              className="p-6 cursor-pointer"
            >
              <h2 className="text-xl font-bold mb-2">{role.title}</h2>
              <p className="text-gray-600">{role.description}</p>
            </Card>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8"
        >
          <Button
            variant="primary"
            fullWidth
            href={selectedRole ? "/create-profile" : "#"}
            icon={<ArrowRight size={18} />}
            onClick={(e) => {
              if (!selectedRole) {
                e.preventDefault();
              }
            }}
          >
            Next
          </Button>
        </motion.div>
      </div>
    </main>
  );
}
