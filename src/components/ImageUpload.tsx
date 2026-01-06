"use client";
import { CldUploadWidget } from "next-cloudinary";
import { ImagePlus } from "lucide-react";

export default function ImageUpload({ onUpload }: { onUpload: (url: string) => void }) {
  return (
    <CldUploadWidget 
      uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
      onSuccess={(results: any) => onUpload(results.info.secure_url)}
    >
      {({ open }) => (
        <button
          type="button"
          onClick={() => open()}
          className="w-full h-32 border-2 border-dashed border-slate-300 rounded-lg flex flex-col items-center justify-center hover:border-indigo-500 transition-colors"
        >
          <ImagePlus className="text-slate-400" />
          <span className="text-sm text-slate-500 mt-2">Upload Product Image</span>
        </button>
      )}
    </CldUploadWidget>
  );
}