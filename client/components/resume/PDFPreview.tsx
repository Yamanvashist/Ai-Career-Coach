import { FileQuestion } from "lucide-react";

type PDFPreviewProps = {
  file: File | null;
  pdfUrl: string | null;
};

const PDFPreview = ({ file, pdfUrl }: PDFPreviewProps) => {
  if (!file) {
    return (
      <div className="relative min-h-100 overflow-hidden rounded-2xl border-2 border-dashed border-slate-300 bg-slate-200/60 lg:col-span-6">
        <div className="absolute top-4 left-4 z-10 flex gap-2">
          {[...Array(3)].map((_, idx) => (
            <div key={idx} className="h-3 w-3 rounded-full bg-slate-300" />
          ))}
        </div>

        <div className="flex h-full flex-col items-center justify-center p-8">
          <div className="relative mb-6 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-indigo-200 opacity-40 blur-xl" />

            <div className="relative flex items-center justify-center rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:rotate-0 -rotate-10">
              <FileQuestion className="h-10 w-10 text-indigo-500" />
            </div>
          </div>

          <h2 className="text-xl font-bold tracking-tight text-slate-700">
            Waiting for your CV
          </h2>

          <p className="mt-2 max-w-sm text-center text-sm leading-relaxed text-slate-500">
            Upload a PDF on the left and the preview will instantly render right
            here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-100 overflow-hidden rounded-2xl border-2 border-dashed border-slate-300 bg-slate-200/60 lg:col-span-6">
      <div className="absolute top-4 left-4 z-10 flex gap-2">
        {[...Array(3)].map((_, idx) => (
          <div key={idx} className="h-3 w-3 rounded-full bg-slate-300" />
        ))}
      </div>

      <iframe
        src={pdfUrl ?? undefined}
        title="Resume Preview"
        loading="lazy"
        className="h-full w-full rounded-2xl"
      />
    </div>
  );
};

export default PDFPreview;