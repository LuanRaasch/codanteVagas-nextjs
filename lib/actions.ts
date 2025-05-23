'use server'

import { redirect } from "next/navigation";

export async function deleteJob(formData: FormData) {
    const jobId = formData.get("id");

    const res = await fetch(`https://apis.codante.io/api/job-board/jobs/${jobId}`,
        { method: "DELETE" }
    );

    if (!res.ok) {
        throw new Error("Erro ao deletar vaga");
    };

    redirect('/vagas');
};

export async function createJob(_prevState: any, formData: FormData) {

    const res = await fetch(`https://apis.codante.io/api/job-board/jobs`,
        {
            method: "POST",
            body: formData,
        }
    );

    if (!res.ok) {
        return {
            error: true,
            message: (await res.json()).message,
        }
    };

    redirect('/vagas');
};