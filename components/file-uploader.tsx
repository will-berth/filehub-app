"use client"

import React, { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Upload, File, Image } from 'lucide-react'
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

interface FileWithPreview extends File {
  preview: string;
}

export default function FileUploader() {
  const [files, setFiles] = useState<FileWithPreview[]>([])
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(prevFiles => [
      ...prevFiles,
      ...acceptedFiles.map(file => 
        Object.assign(file, {
          preview: file.type.startsWith('image/') 
            ? URL.createObjectURL(file)
            : ''
        })
      )
    ])
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': [],
      'application/pdf': ['.pdf']
    }
  })

  const removeFile = (file: FileWithPreview) => {
    setFiles(prevFiles => prevFiles.filter(f => f !== file))
    URL.revokeObjectURL(file.preview)
  }

  const uploadFiles = async () => {
    setUploading(true)
    setUploadProgress(0)

    for (let i = 0; i <= 100; i += 10) {
      setUploadProgress(i)
      await new Promise(resolve => setTimeout(resolve, 500))
    }

    setUploading(false)
  }

  return (
    <div className="w-full max-w-md mx-auto p-6 space-y-6">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
          isDragActive ? 'border-primary bg-primary/10' : 'border-gray-300 dark:border-gray-600 hover:border-primary dark:hover:border-primary'
        }`}
      >
        <input {...getInputProps()} />
        <Upload className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" />
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          Arrastra y suelta archivos aquí, o haz clic para seleccionar
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          PDF, PNG, JPG, GIF hasta 10MB
        </p>
      </div>

      <AnimatePresence>
        {files.length > 0 && (
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-2"
          >
            {files.map((file) => (
              <motion.li
                key={file.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center justify-between p-2 bg-zinc-200 dark:bg-zinc-900 rounded-md"
              >
                <div className="flex items-center space-x-2">
                  {file.type.startsWith('image/') ? (
                    <Image className="h-6 w-6 text-orange-500" />
                  ) : (
                    <File className="h-6 w-6 text-orange-500" />
                  )}
                  <span className="text-sm truncate max-w-[200px] text-gray-700 dark:text-gray-300">{file.name}</span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeFile(file)}
                  className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400"
                >
                  <X className="h-4 w-4" />
                </Button>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {files.length > 0 && (
        <div className="space-y-4">
          <Button
            onClick={uploadFiles}
            disabled={uploading}
            className="w-full"
          >
            {uploading ? 'Subiendo...' : 'Subir archivos'}
          </Button>
          {uploading && (
            <Progress value={uploadProgress} className="w-full" />
          )}
        </div>
      )}
    </div>
  )
}