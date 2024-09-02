"use client";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { createDocument } from "@/lib/actions/room.actions";

const AddDocumentbtn = ({ userId, email }: AddDocumentBtnProps) => {
  const router = useRouter();
  const addDocumenthandler = async () => {
    try {
      const room = await createDocument({ userId, email });
      console.log("btn clicked")
      if (room){ router.push(`/documents/${room.id}`);}
    } catch (error) {
        console.log("not routed")
    }
  };
  return (
    <Button
      type="submit"
      onClick={addDocumenthandler}
      className="gradient-blue flex gap-1 shadow-md"
    >
      <Image src="/assets/icons/add.svg" alt="plus" width={24} height={24} />
      <p className="hidden sm:block">Start a blank document</p>
    </Button>
  );
};

export default AddDocumentbtn;
