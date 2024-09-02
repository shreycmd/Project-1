"use client";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import { RoomProvider, ClientSideSuspense } from "@liveblocks/react/suspense";
import React, { ReactNode } from "react";
import { Editor } from "./editor/Editor";
import Header from "./Header";
import Loader from "./Loader";

const Collaborative = () => {
  return (
    <RoomProvider id="my-room">
      <ClientSideSuspense fallback={<Loader/>}>
        <div className="collaborative">
          <Header>
            <div className="flex w-fit items-center justify-center gap-2">
              <p className="document-title">Share</p>
            </div>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </Header>
          <Editor />
        </div>
      </ClientSideSuspense>
    </RoomProvider>
  );
};

export default Collaborative;
