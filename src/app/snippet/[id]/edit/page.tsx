import EditSnippetForm from "@/components/EditSnippetForm";
import React from "react";
import { prisma } from "@/lib/prisma";

const EditPageSnippet = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = parseInt((await params).id);
  const snippet = await prisma.snippet.findUnique({
    where: {
      id,
    },
  });

  if (!snippet) return <h1>Snippet not found</h1>;

  return   <EditSnippetForm snippet = {snippet} />
    

};

export default EditPageSnippet;
